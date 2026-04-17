// src/components/Banner.jsx
import React from 'react';
import { Plus } from 'lucide-react'; // Fix: added "-react"

const Banner = () => {
  return (
    <section className="pt-32 pb-16 px-6 text-center">
      <div className="max-w-[80%] md:max-w-[60%] mx-auto">
        <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
          Friends to keep close in your life
        </h1>
        <p className="text-slate-500 text-lg md:text-xl mb-10 leading-relaxed max-w-[90%] md:max-w-[80%] mx-auto">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the
relationships that matter most.
        </p>
        
        {/* daisyUI button with your custom forest-green color */}
        <button className="btn bg-green-800 hover:bg-slate-800 text-white border-none px-8 normal-case text-lg shadow-lg gap-2">
          <Plus size={20} />
          Add a Friend
        </button>
      </div>
    </section>
  );
};

export default Banner;