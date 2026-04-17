import React, { useEffect, useState } from 'react';

const FriendList = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    fetch('/data/friends.json')
      .then((res) => res.json())
      .then((data) => setFriends(data))
      .catch((err) => console.error("Error loading friends:", err));
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold text-slate-800 mb-8">Your Friends</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {friends.map((friend) => (
          <div key={friend.id} className="card bg-white shadow-sm border border-slate-100 p-8 flex flex-col items-center text-center rounded-2xl">
            
            {/* Centered Avatar */}
            <div className="avatar mb-4">
              <div className="w-20 rounded-full">
                <img src={friend.picture} alt={friend.name} />
              </div>
            </div>

            {/* Name & Time */}
            <h3 className="font-bold text-slate-900 text-lg mb-1">{friend.name}</h3>
            <span className="text-xs text-slate-400 mb-4">{friend.days_since_contact}d ago</span>

            {/* Tags (Centered Row) */}
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {friend.tags.map((tag, i) => (
                <span key={i} className="px-3 py-1 bg-emerald-50 text-emerald-600 text-[10px] font-bold uppercase rounded-full tracking-wider">
                  {tag}
                </span>
              ))}
            </div>

            {/* Status Badge */}
            <div className={`px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-white shadow-sm
              ${friend.status === 'overdue' ? 'bg-red-400' : 
                friend.status === 'almost due' ? 'bg-orange-400' : 'bg-emerald-500'}`}>
              {friend.status}
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default FriendList;