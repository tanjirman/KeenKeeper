import React from 'react';
import { Link } from 'react-router-dom';
import { Compass } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#f8fafb] flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center">
        {/* Animated Icon Container */}
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-24 bg-white rounded-4xl shadow-sm border border-slate-100 flex items-center justify-center animate-bounce duration-2000">
            <Compass size={48} className="text-emerald-500" />
          </div>
        </div>

        {/* Error Text */}
        <h1 className="text-8xl font-black text-slate-200 mb-4">404</h1>
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Lost in the circle?</h2>
        <p className="text-slate-400 mb-10 leading-relaxed">
          The page you're looking for doesn't exist or has been moved. 
          Let's get you back to your friends.
        </p>

        {/* Action Button */}
        <Link 
          to="/" 
          className="inline-flex items-center justify-center px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-2xl transition-all shadow-lg shadow-emerald-200 hover:shadow-emerald-300 hover:-translate-y-1"
        >
          Back to Dashboard
        </Link>

        {/* Decorative background element */}
        <p className="mt-12 text-[10px] text-slate-300 uppercase tracking-[0.3em] font-bold">
          KeenKeeper Security
        </p>
      </div>
    </div>
  );
};

export default NotFound;