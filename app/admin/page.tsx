'use client';

import React, { useState, useEffect } from 'react';
import { getPortfolioItems, addPortfolioItem, deletePortfolioItem, PortfolioItem } from '@/app/actions/portfolioActions';

const AdminPage = () => {
  const [items, setItems] = useState<PortfolioItem[]>([]);
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isAuthenticated) {
      loadItems();
    } else {
      setIsLoading(false);
    }
  }, [isAuthenticated]);

  const loadItems = async () => {
    setIsLoading(true);
    const data = await getPortfolioItems();
    setItems(data);
    setIsLoading(false);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would be a server-side session check.
    // For now, we just proceed and let server actions hit the env var check.
    setIsAuthenticated(true);
  };

  const handleAdd = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    try {
      await addPortfolioItem(formData, password);
      e.currentTarget.reset();
      loadItems();
      alert('Item added successfully');
    } catch (err: any) {
      alert(err.message);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this item?')) return;
    try {
      await deletePortfolioItem(id, password);
      loadItems();
    } catch (err: any) {
      alert(err.message);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-8">
        <form onSubmit={handleLogin} className="w-full max-w-md space-y-8 bg-surface-container p-12 border border-white/5">
          <h1 className="text-3xl font-black tracking-tighter uppercase text-white">Admin Access</h1>
          <div className="space-y-4">
            <label className="text-[10px] tracking-widest uppercase font-bold text-outline">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-transparent border-b border-outline-variant focus:border-primary outline-none py-3 text-lg transition-colors"
              placeholder="••••••••"
              required
            />
          </div>
          <button type="submit" className="w-full bg-primary text-on-primary py-4 font-bold uppercase tracking-widest hover:opacity-90 transition-opacity">
            Enter Dashboard
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-8 md:p-20 space-y-20">
      <div className="flex justify-between items-end">
        <div>
          <span className="text-[10px] tracking-widest uppercase font-bold text-outline">Executive Dashboard</span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mt-4">Manage Portfolio.</h1>
        </div>
        <button onClick={() => setIsAuthenticated(false)} className="text-[10px] tracking-widest uppercase font-bold text-outline hover:text-white transition-colors">Logout</button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Add Form */}
        <section className="space-y-12">
          <h2 className="text-2xl font-bold tracking-tight uppercase border-b border-white/10 pb-4">Add New Project</h2>
          <form onSubmit={handleAdd} className="space-y-8">
            <div className="space-y-2">
              <label className="text-[10px] tracking-widest uppercase font-bold text-outline">Project Title</label>
              <input name="title" className="w-full bg-transparent border-b border-outline-variant focus:border-primary outline-none py-2 transition-colors" placeholder="Project Name" required />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] tracking-widest uppercase font-bold text-outline">Description</label>
              <textarea name="description" className="w-full bg-transparent border-b border-outline-variant focus:border-primary outline-none py-2 transition-colors" placeholder="Short description..." required />
            </div>
            <div className="flex gap-8">
              <div className="flex-1 space-y-2">
                <label className="text-[10px] tracking-widest uppercase font-bold text-outline">Demo URL</label>
                <input name="url" className="w-full bg-transparent border-b border-outline-variant focus:border-primary outline-none py-2 transition-colors" placeholder="https://..." required />
              </div>
              <div className="flex-1 space-y-2">
                <label className="text-[10px] tracking-widest uppercase font-bold text-outline">Image URL</label>
                <input name="image_url" className="w-full bg-transparent border-b border-outline-variant focus:border-primary outline-none py-2 transition-colors" placeholder="https://..." />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] tracking-widest uppercase font-bold text-outline">Tech Stack (comma separated)</label>
              <input name="tech_stack" className="w-full bg-transparent border-b border-outline-variant focus:border-primary outline-none py-2 transition-colors" placeholder="Next.js, Tailwind, Supabase" />
            </div>
            <div className="flex items-center gap-4">
              <input type="checkbox" name="is_beta" id="is_beta" className="accent-primary w-4 h-4" />
              <label htmlFor="is_beta" className="text-xs uppercase tracking-widest font-bold">Mark as Beta</label>
            </div>
            <button type="submit" className="bg-primary text-on-primary px-10 py-4 font-bold uppercase tracking-widest hover:opacity-90 transition-opacity">Add Project</button>
          </form>
        </section>

        {/* Existing Items List */}
        <section className="space-y-12">
          <h2 className="text-2xl font-bold tracking-tight uppercase border-b border-white/10 pb-4">Existing Projects</h2>
          {isLoading ? (
            <div className="animate-pulse text-outline tracking-widest">LOADING...</div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex justify-between items-center bg-surface-container-low p-6 border border-white/5 hover:border-white/20 transition-all">
                  <div>
                    <h3 className="text-lg font-bold uppercase">{item.title}</h3>
                    <p className="text-xs text-on-surface-variant font-light mt-1">{item.url}</p>
                  </div>
                  <button 
                    onClick={() => handleDelete(item.id)}
                    className="text-white bg-red-900/30 hover:bg-red-900/50 px-4 py-2 text-xs uppercase font-bold tracking-widest transition-colors"
                  >
                    Delete
                  </button>
                </div>
              ))}
              {items.length === 0 && <p className="text-on-surface-variant font-light italic">No projects found in database.</p>}
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default AdminPage;
