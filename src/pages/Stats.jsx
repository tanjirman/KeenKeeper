import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import Loader from '../components/Loader';

const Stats = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      // 1. Get history from session
      const history = JSON.parse(sessionStorage.getItem('timeline_history') || '[]');

      // 2. Count interactions by type
      const counts = history.reduce((acc, curr) => {
        acc[curr.type] = (acc[curr.type] || 0) + 1;
        return acc;
      }, {});

      // 3. Format for Recharts
      const chartData = [
        { name: 'Text', value: counts['Text'] || 0, color: '#A855F7' }, // Purple
        { name: 'Call', value: counts['Call'] || 0, color: '#14532D' }, // Dark Green
        { name: 'Video', value: counts['Video'] || 0, color: '#22C55E' }, // Emerald
      ];

      setData(chartData);
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <Loader message="Analyzing Connections..." />;

  const totalInteractions = data.reduce((sum, entry) => sum + entry.value, 0);

  return (
    <div className="bg-[#f8fafb] min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        
        <h1 className="text-4xl font-bold text-slate-900 mb-10 tracking-tight">
          Friendship Analytics
        </h1>

        <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm">
          <h3 className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-8">
            By Interaction Type
          </h3>

          <div className="h-100 w-full flex flex-col items-center justify-center relative">
            {totalInteractions === 0 ? (
              <p className="text-slate-400 italic">No data to display. Log some interactions first!</p>
            ) : (
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={120}
                    paddingAngle={8}
                    dataKey="value"
                    stroke="none"
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                  />
                  <Legend 
                    verticalAlign="bottom" 
                    height={36} 
                    iconType="circle"
                    formatter={(value) => <span className="text-xs font-bold text-slate-500 uppercase ml-2">{value}</span>}
                  />
                </PieChart>
              </ResponsiveContainer>
            )}
            
            {/* Center Label for the Donut Hole */}
            {totalInteractions > 0 && (
              <div className="absolute top-[44%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
                <p className="text-3xl font-black text-slate-800">{totalInteractions}</p>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Total</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;