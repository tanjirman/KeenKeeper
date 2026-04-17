import React from 'react';

const SummaryCards = ({ friends = [] }) => {
  // Calculate dynamic stats from the friends data
  const totalFriends = friends?.length || 0;
  
  const onTrack = friends.filter(f => {
  const status = f.status?.toLowerCase() || '';
  return status === 'on track' || status === 'on-track';
}).length;
  
  const needAttention = friends?.filter(f => 
    f.status === 'overdue' || f.status === 'almost due'
  ).length || 0;
  
 
  const interactionsThisMonth = 10;

  const stats = [
    { label: 'Total Friends', value: totalFriends },
    { label: 'On Track', value: onTrack },
    { label: 'Need Attention', value: needAttention },
    { label: 'Interactions This Month', value: interactionsThisMonth },
  ];

  return (
    <div className="max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 mx-auto pb-15 border-b border-gray-100">
      {stats.map((stat, index) => (
        <div 
          key={index} 
          className="bg-white p-10 rounded-2xl border border-slate-50 shadow-sm flex flex-col items-center justify-center text-center transition-all hover:shadow-md"
        >
          {/* Large Number */}
          <span className="text-4xl font-black text-slate-800 mb-2">
            {stat.value}
          </span>
          
          {/* Spaced-out Label */}
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.15em] whitespace-nowrap">
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default SummaryCards;