'use server';

import { supabase } from '@/lib/supabase';
import { revalidatePath } from 'next/cache';

export type PortfolioItem = {
  id: string;
  title: string;
  description: string;
  url: string;
  image_url: string;
  tech_stack: string[];
  is_beta: boolean;
  created_at: string;
};

export async function getPortfolioItems(): Promise<PortfolioItem[]> {
  try {
    if (!supabase) {
      console.warn('Supabase is not configured. Returning empty portfolio.');
      return [];
    }

    const { data, error } = await supabase
      .from('portfolio_items')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching portfolio items:', error);
      return [];
    }

    if (!data) return [];

    // 'Vibe Coding' Sanitizer: DB의 어떤 지저분한 주소도 깨끗한 영구 주소로 변환
    const items = data.map(item => {
      let imageUrl = item.image_url || "";
      
      if (imageUrl.includes("/storage/v1/object/sign/")) {
        imageUrl = imageUrl.replace("/storage/v1/object/sign/", "/storage/v1/object/public/");
        imageUrl = imageUrl.split('?')[0];
      }

      return {
        ...item,
        image_url: imageUrl,
        tech_stack: Array.isArray(item.tech_stack) ? item.tech_stack : []
      };
    }) as PortfolioItem[];
  } catch (e) {
    console.error('Critical exception in getPortfolioItems:', e);
    return [];
  }
}

export async function addPortfolioItem(formData: FormData, password?: string) {
  if (!supabase) {
    throw new Error('Supabase is not configured.');
  }
  
  // Simple auth check
  if (password !== process.env.ADMIN_PASSWORD) {
    throw new Error('Unauthorized: Invalid password');
  }

  const title = formData.get('title') as string;
  const description = formData.get('description') as string;
  const url = formData.get('url') as string;
  const image_url = formData.get('image_url') as string;
  const tech_stack = (formData.get('tech_stack') as string).split(',').map(s => s.trim());
  const is_beta = formData.get('is_beta') === 'on';

  const { error } = await supabase
    .from('portfolio_items')
    .insert([{ title, description, url, image_url, tech_stack, is_beta }]);

  if (error) {
    console.error('Error adding portfolio item:', error);
    throw new Error('Failed to add item');
  }

  revalidatePath('/');
  revalidatePath('/admin');
}

export async function deletePortfolioItem(id: string, password?: string) {
  if (!supabase) {
    throw new Error('Supabase is not configured.');
  }

  // Simple auth check
  if (password !== process.env.ADMIN_PASSWORD) {
    throw new Error('Unauthorized: Invalid password');
  }

  const { error } = await supabase
    .from('portfolio_items')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error deleting portfolio item:', error);
    throw new Error('Failed to delete item');
  }

  revalidatePath('/');
  revalidatePath('/admin');
}
