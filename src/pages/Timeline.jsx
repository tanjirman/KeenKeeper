import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Video, Calendar, Trash2 } from 'lucide-react';
import Loader from '../components/Loader'; // Import the new component

const Timeline = () => {
  const [activities, setActivities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching
    const timer = setTimeout(() => {
      try {
        const history = JSON.parse(sessionStorage.getItem('timeline_history') || '[]');
        setActivities(history);
      } catch (error) {
        console.error("Failed to parse history:", error);
      } finally {
        setIsLoading(false);
      }
    }, 800); // Smooth delay to show the loader

    return () => clearTimeout(timer);
  }, []);

  const clearHistory = () => {
    if (window.confirm("Clear this session's history?")) {
      sessionStorage.removeItem('timeline_history');
      setActivities([]);
    }
  };

  const getIcon = (type) => {
    const iconClass = "text-slate-600";
    switch (type) {
      case 'Call': return <Phone size={20} className={iconClass} />;
      case 'Text': return <MessageSquare size={20} className={iconClass} />;
      case 'Video': return <Video size={20} className={iconClass} />;
      default: return <Calendar size={20} className={iconClass} />;
    }
  };

  return (
    <div className="bg-[#f8fafb] min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Section */}
        <div className="flex justify-between items-end mb-10">
          <div>
            <h1 className="text-4xl font-bold text-slate-900 mb-2 tracking-tight">Timeline</h1>
            <p className="text-slate-400 text-sm font-medium">History of interactions for this session</p>
          </div>
          
          {/* Only show clear button if not loading and data exists */}
          {!isLoading && activities.length > 0 && (
            <button 
              onClick={clearHistory}
              className="flex items-center gap-2 px-3 py-2 text-xs font-bold text-red-400 hover:text-red-600 transition-colors uppercase tracking-widest"
            >
              <Trash2 size={14} /> Clear Session
            </button>
          )}
        </div>

        {/* Conditional Rendering: Loader vs List */}
        {isLoading ? (
          <Loader message="Syncing History" />
        ) : activities.length === 0 ? (
          <div className="bg-white p-16 rounded-[2.5rem] border border-dashed border-slate-200 text-center animate-in fade-in duration-700">
            <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Calendar className="text-slate-300" />
            </div>
            <h3 className="text-slate-800 font-bold">No history logged</h3>
            <p className="text-slate-400 text-sm mt-1">
              Interactions you log on profile pages will appear here.
            </p>
          </div>
        ) : (
          <div className="space-y-3 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {activities.map((item) => (
              <div 
                key={item.id} 
                className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between hover:border-emerald-200 transition-all group"
              >
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center group-hover:bg-emerald-50 transition-colors">
                    {getIcon(item.type)}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">
                      {item.type} with <span className="text-slate-900">{item.friendName}</span>
                    </h4>
                    <p className="text-[11px] text-slate-400 font-bold mt-1 uppercase tracking-tighter">
                      {item.date}
                    </p>
                  </div>
                </div>
                <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.4)]"></div>
              </div>
            ))}
            
            <p className="text-center text-[10px] text-slate-300 mt-10 uppercase tracking-widest font-bold italic">
              Session-only: This list clears when you close the tab.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Timeline;