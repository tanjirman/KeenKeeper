import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom"; // Changed Navigate to useNavigate
import {
  Phone,
  MessageSquare,
  Video,
  Archive,
  Trash2,
  BellOff,
  ChevronLeft,
} from "lucide-react";
import { toast } from "react-toastify";

const FriendDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Initialize the navigate hook
  const [friend, setFriend] = useState(null);

  useEffect(() => {
    fetch("/data/friends.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((f) => f.id === parseInt(id));
        setFriend(found);
      });
  }, [id]);

  const handleInteraction = (type) => {
  const newEntry = {
    id: Date.now(),
    friendName: friend.name,
    type: type,
    date: new Date().toLocaleDateString('en-US', { 
      month: 'long', day: 'numeric', year: 'numeric' 
    })
  };

  // Get current session history or empty array
  const sessionHistory = JSON.parse(sessionStorage.getItem('timeline_history') || '[]');
  
  // Add new entry to the top
  const updatedHistory = [newEntry, ...sessionHistory];
  
  // Save back to session storage
  sessionStorage.setItem('timeline_history', JSON.stringify(updatedHistory));

  toast.success(`${type} logged!`);
  navigate('/timeline'); // No need to pass state anymore
};

  if (!friend) return <div className="p-20 text-center">Loading Profile...</div>;

  return (
    <div className="bg-[#f8fafb] min-h-screen pt-28 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <Link to="/" className="flex items-center gap-2 text-slate-400 hover:text-slate-600 mb-8 transition-colors text-sm font-medium">
          <ChevronLeft size={18} /> Back to Friends
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* SIDEBAR */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-white border border-slate-100 rounded-[2.5rem] p-10 shadow-sm text-center">
              <div className="avatar mb-6 flex justify-center">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-slate-50">
                  <img src={friend.picture} alt={friend.name} className="w-full h-full object-cover" />
                </div>
              </div>
              <h1 className="text-2xl font-bold text-slate-800">{friend.name}</h1>
              <div className="flex flex-col items-center gap-2 mt-4">
                <span className={`px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-white ${friend.status === "overdue" ? "bg-red-500" : "bg-emerald-500"}`}>
                  {friend.status}
                </span>
                <span className="bg-emerald-50 text-emerald-600 px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                  {friend.tags?.[0] || "Friend"}
                </span>
              </div>
              <p className="text-slate-500 italic text-sm mt-6 leading-relaxed">"{friend.bio}"</p>
            </div>

            <div className="space-y-2">
              <button className="w-full py-3 bg-white border border-slate-100 rounded-xl text-slate-600 text-sm font-medium flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors">
                <BellOff size={16} /> Snooze 2 Weeks
              </button>
              <button className="w-full py-3 bg-white border border-slate-100 rounded-xl text-red-500 text-sm font-medium flex items-center justify-center gap-2 hover:bg-red-50 transition-colors">
                <Trash2 size={16} /> Delete
              </button>
            </div>
          </div>

          {/* MAIN CONTENT */}
          <div className="lg:col-span-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-8 rounded-2xl border border-slate-50 shadow-sm text-center">
                <div className="text-3xl font-bold text-slate-800">{friend.days_since_contact}</div>
                <div className="text-[10px] text-slate-400 uppercase font-bold mt-2 tracking-widest">Days Since Contact</div>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-slate-50 shadow-sm text-center">
                <div className="text-3xl font-bold text-slate-800">{friend.goal}</div>
                <div className="text-[10px] text-slate-400 uppercase font-bold mt-2 tracking-widest">Goal (Days)</div>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-slate-50 shadow-sm text-center">
                <div className="text-2xl font-bold text-slate-800">Feb 27, 2026</div>
                <div className="text-[10px] text-slate-400 uppercase font-bold mt-2 tracking-widest">Next Due</div>
              </div>
            </div>



{/* Relationship Goal Card - Strict Figma Match */}
<div className="bg-white p-10 rounded-2xl border border-slate-50 shadow-sm mb-6">
  <div className="flex justify-between items-start mb-4">
    <h3 className="font-bold text-slate-800 text-lg">Relationship Goal</h3>
    <button className="px-4 py-1.5 bg-slate-50 text-slate-500 text-[10px] font-bold uppercase tracking-widest rounded-lg border border-slate-100">
      Edit
    </button>
  </div>

  <div className="flex items-center gap-2">
    <span className="text-sm text-slate-400 font-medium">Connect every</span>
    <span className="text-sm font-bold text-slate-800">{friend.goal} days</span>
  </div>
</div>



            <div className="bg-white p-10 rounded-2xl border border-slate-50 shadow-sm">
              <h3 className="font-bold text-slate-800 text-lg mb-8">Quick Check-In</h3>
              <div className="grid grid-cols-3 gap-6">
                <button onClick={() => handleInteraction('Call')} className="flex flex-col items-center justify-center p-8 bg-[#fbfcfd] hover:bg-emerald-50 rounded-2xl transition-all group border border-transparent hover:border-emerald-100">
                  <Phone className="text-slate-400 group-hover:text-emerald-600 mb-3" />
                  <span className="text-sm font-semibold text-slate-600 group-hover:text-emerald-700">Call</span>
                </button>

                <button onClick={() => handleInteraction('Text')} className="flex flex-col items-center justify-center p-8 bg-[#fbfcfd] hover:bg-emerald-50 rounded-2xl transition-all group border border-transparent hover:border-emerald-100">
                  <MessageSquare className="text-slate-400 group-hover:text-emerald-600 mb-3" />
                  <span className="text-sm font-semibold text-slate-600 group-hover:text-emerald-700">Text</span>
                </button>

                <button onClick={() => handleInteraction('Video')} className="flex flex-col items-center justify-center p-8 bg-[#fbfcfd] hover:bg-emerald-50 rounded-2xl transition-all group border border-transparent hover:border-emerald-100">
                  <Video className="text-slate-400 group-hover:text-emerald-600 mb-3" />
                  <span className="text-sm font-semibold text-slate-600 group-hover:text-emerald-700">Video</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;