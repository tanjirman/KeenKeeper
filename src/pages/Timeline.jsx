import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Video, Calendar, Trash2, Filter } from 'lucide-react';
import Loader from '../components/Loader';

const Timeline = () => {
  const [activities, setActivities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState('All'); // New state for filtering

  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        const history = JSON.parse(sessionStorage.getItem('timeline_history') || '[]');
        setActivities(history);
      } catch (error) {
        console.error("Failed to parse history:", error);
      } finally {
        setIsLoading(false);
      }
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const clearHistory = () => {
    if (window.confirm("Clear this session's history?")) {
      sessionStorage.removeItem('timeline_history');
      setActivities([]);
    }
  };

  // Logic to filter activities based on the selected button
  const filteredActivities = activities.filter(item => 
    filter === 'All' ? true : item.type === filter
  );

  const getIcon = (type) => {
    const iconClass = "text-slate-600";
    switch (type) {
      case 'Call': return <Phone size={18} className={iconClass} />;
      case 'Text': return <MessageSquare size={18} className={iconClass} />;
      case 'Video': return <Video size={18} className={iconClass} />;
      default: return <Calendar size={18} className={iconClass} />;
    }
  };

//   const filterOptions = ['All', 'Call', 'Text', 'Video'];

  return (
    <div className="bg-[#f8fafb] min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Section */}
        <div className="flex justify-between items-end mb-8">
          <div>
            <h1 className="text-4xl font-bold text-slate-900 mb-2 tracking-tight">Timeline</h1>
            <p className="text-slate-400 text-sm font-medium">History of interactions for this session</p>
          </div>
          
          {!isLoading && activities.length > 0 && (
            <button 
              onClick={clearHistory}
              className="flex items-center gap-2 px-3 py-2 text-xs font-bold text-red-400 hover:text-red-600 transition-colors uppercase tracking-widest"
            >
              <Trash2 size={14} /> Clear Session
            </button>
          )}
        </div>

        {/* Filter Bar */}
        {/* Dropdown Filter Bar */}
{!isLoading && activities.length > 0 && (
  <div className="flex justify-start mb-8">
    <div className="relative group">
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
        <Filter size={14} />
      </div>
      
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="appearance-none bg-white border border-slate-100 text-slate-600 text-xs font-bold uppercase tracking-widest py-3 pl-11 pr-10 rounded-2xl shadow-sm cursor-pointer outline-none focus:border-emerald-400 focus:ring-4 focus:ring-emerald-50 transition-all hover:border-slate-200"
      >
        <option value="All">All Interactions</option>
        <option value="Call">Calls Only</option>
        <option value="Text">Texts Only</option>
        <option value="Video">Videos Only</option>
      </select>

      {/* Custom Chevron Down Icon */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  </div>
)}

        {/* List Logic */}
        {isLoading ? (
          <Loader message="Syncing History" />
        ) : filteredActivities.length === 0 ? (
          <div className="bg-white p-16 rounded-[2.5rem] border border-dashed border-slate-200 text-center animate-in fade-in">
            <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-4 mx-auto">
              {filter === 'All' ? <Calendar className="text-slate-300" /> : getIcon(filter)}
            </div>
            <h3 className="text-slate-800 font-bold">
              {activities.length === 0 ? "No history logged" : `No ${filter}s found`}
            </h3>
            <p className="text-slate-400 text-sm mt-1">
              {activities.length === 0 
                ? "Interactions you log will appear here." 
                : `You haven't logged any ${filter.toLowerCase()} interactions yet.`}
            </p>
          </div>
        ) : (
          <div className="space-y-3 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {filteredActivities.map((item) => (
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
          </div>
        )}
      </div>
    </div>
  );
};

export default Timeline;