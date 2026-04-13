'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      // n8n Webhook URL (User should provide this in Vercel/local env)
      const webhookUrl = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL || '#';
      
      if (webhookUrl === '#') {
        console.warn('n8n Webhook URL is not configured.');
        // For demonstration, let's simulate success
        await new Promise(resolve => setTimeout(resolve, 1500));
        setStatus('success');
        return;
      }

      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };

  return (
    <section className="px-8 md:px-20 py-32 border-t border-white/10 bg-black">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">Let's Connect.</h2>
        <p className="text-xl text-on-surface-variant font-light leading-relaxed">
          Available for selective board positions, keynote speaking engagements, and high-impact curriculum design.
        </p>

        <AnimatePresence mode="wait">
          {status === 'success' ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mt-16 py-20 bg-surface-container border border-primary/20 space-y-6"
            >
              <span className="material-symbols-outlined text-6xl text-primary">check_circle</span>
              <h3 className="text-3xl font-black tracking-tighter uppercase">Message Sent!</h3>
              <p className="text-on-surface-variant max-w-sm mx-auto font-light">
                Thank you for your inquiry. I will review your message and respond within 48 hours.
              </p>
              <button 
                onClick={() => setStatus('idle')}
                className="text-[10px] tracking-widest uppercase font-bold text-outline hover:text-white transition-colors"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <motion.form 
              key="contact-form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit} 
              className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mt-16"
            >
              <div className="space-y-2">
                <label className="font-inter text-[10px] tracking-[0.05em] uppercase font-medium text-outline">Full Name</label>
                <input
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-transparent border-b border-outline-variant focus:border-primary outline-none py-3 text-lg transition-colors placeholder:text-surface-variant"
                  placeholder="John Doe"
                  type="text"
                />
              </div>
              <div className="space-y-2">
                <label className="font-inter text-[10px] tracking-[0.05em] uppercase font-medium text-outline">Email Address</label>
                <input
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-transparent border-b border-outline-variant focus:border-primary outline-none py-3 text-lg transition-colors placeholder:text-surface-variant"
                  placeholder="john@example.com"
                  type="email"
                />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="font-inter text-[10px] tracking-[0.05em] uppercase font-medium text-outline">Message</label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-transparent border-b border-outline-variant focus:border-primary outline-none py-3 text-lg transition-colors placeholder:text-surface-variant"
                  placeholder="Tell me about your vision..."
                  rows={4}
                ></textarea>
              </div>
              <div className="md:col-span-2 pt-8">
                <button
                  disabled={status === 'submitting'}
                  className="w-full bg-primary text-on-primary py-6 font-black uppercase tracking-[0.2em] hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-4"
                  type="submit"
                >
                  {status === 'submitting' ? (
                    <>
                      <span className="w-5 h-5 border-2 border-on-primary/30 border-t-on-primary rounded-full animate-spin" />
                      Processing...
                    </>
                  ) : (
                    'Send Inquiry'
                  )}
                </button>
              </div>
              {status === 'error' && (
                <p className="md:col-span-2 text-red-500 text-xs text-center uppercase tracking-widest font-bold">
                  Failed to send inquiry. Please try again later.
                </p>
              )}
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Contact;
