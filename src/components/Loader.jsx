import React from 'react';

const Loader = ({ message = "Loading..." }) => {
  return (
    <div className="flex flex-col items-center justify-center py-20 min-h-[400px] w-full animate-in fade-in duration-500">
      {/* The Spinning Ring */}
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 border-4 border-slate-100 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-t-emerald-500 rounded-full animate-spin"></div>
      </div>
      
      {/* The Message */}
      <p className="mt-6 text-slate-400 text-sm font-bold uppercase tracking-widest animate-pulse">
        {message}
      </p>
    </div>
  );
};

export default Loader;