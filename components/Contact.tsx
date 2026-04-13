import React from 'react';

const Contact = () => {
  return (
    <section className="px-8 md:px-20 py-32 border-t border-white/10 bg-black">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">Let's Connect.</h2>
        <p className="text-xl text-on-surface-variant font-light leading-relaxed">
          Available for selective board positions, keynote speaking engagements, and high-impact curriculum design.
        </p>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mt-16">
          <div className="space-y-2">
            <label className="font-inter text-[10px] tracking-[0.05em] uppercase font-medium text-outline">Full Name</label>
            <input
              className="w-full bg-transparent border-b border-outline-variant focus:border-primary outline-none py-3 text-lg transition-colors placeholder:text-surface-variant"
              placeholder="John Doe"
              type="text"
            />
          </div>
          <div className="space-y-2">
            <label className="font-inter text-[10px] tracking-[0.05em] uppercase font-medium text-outline">Email Address</label>
            <input
              className="w-full bg-transparent border-b border-outline-variant focus:border-primary outline-none py-3 text-lg transition-colors placeholder:text-surface-variant"
              placeholder="john@example.com"
              type="email"
            />
          </div>
          <div className="md:col-span-2 space-y-2">
            <label className="font-inter text-[10px] tracking-[0.05em] uppercase font-medium text-outline">Message</label>
            <textarea
              className="w-full bg-transparent border-b border-outline-variant focus:border-primary outline-none py-3 text-lg transition-colors placeholder:text-surface-variant"
              placeholder="Tell me about your vision..."
              rows={4}
            ></textarea>
          </div>
          <div className="md:col-span-2 pt-8">
            <button
              className="w-full bg-primary text-on-primary py-6 font-black uppercase tracking-[0.2em] hover:opacity-90 transition-opacity"
              type="submit"
            >
              Send Inquiry
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
