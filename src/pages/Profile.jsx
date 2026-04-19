import { useNavigate } from 'react-router-dom'
import { auth, db } from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { signOut } from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'
import { useState, useEffect } from 'react'

export default function Profile() {
  const navigate = useNavigate()
  const [user] = useAuthState(auth)
  const [userData, setUserData] = useState(null)

  useEffect(() => {
    if (!user) return
    getDoc(doc(db, 'users', user.uid)).then(snap => {
      setUserData(snap.data() || {})
    })
  }, [user])

  async function handleLogout() {
    await signOut(auth)
    navigate('/login')
  }

  return (
    <div className="min-h-screen bg-[#0A0A0F] p-5 pb-24">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-lg mx-auto pt-8">
        <button onClick={() => navigate('/')} className="text-slate-400 text-2xl mb-6 block">‹</button>

        {/* User Profile Header */}
        <div className="text-center mb-8">
          <div className="relative w-24 h-24 mx-auto mb-4">
            <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-violet-600 to-pink-600 flex items-center justify-center text-4xl shadow-lg shadow-violet-600/20">
              👤
            </div>
            <div className="absolute -bottom-2 -right-2 bg-emerald-500 w-8 h-8 rounded-full border-4 border-[#0A0A0F] flex items-center justify-center text-[10px]">
              ✅
            </div>
          </div>
          <h1 className="text-2xl font-black text-white">
            {userData?.username || user?.email?.split('@')[0]}
          </h1>
          <p className="text-slate-400 text-sm mt-1">{user?.email}</p>
        </div>

        {/* DIGITAL CAREER PASSPORT */}
        <div className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-slate-900 to-violet-950 border border-indigo-500/30 rounded-[2rem] p-6 mb-8 shadow-2xl">
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-40 h-40 bg-indigo-500/20 rounded-full blur-3xl" />
          
          <div className="relative">
            <div className="flex justify-between items-start mb-8">
              <div>
                <h3 className="text-indigo-400 text-[10px] font-black uppercase tracking-[0.2em] mb-1">
                  Digital Career Passport
                </h3>
                <p className="text-white text-xs opacity-50 font-mono">ID: {user?.uid?.slice(0, 8).toUpperCase()}</p>
              </div>
              <div className="bg-indigo-500/20 p-2 rounded-xl border border-indigo-400/30">
                <span className="text-xl">🛡️</span>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center text-3xl shadow-inner">
                {userData?.streak > 5 ? '🔥' : '⭐'}
              </div>
              <div>
                <p className="text-slate-400 text-[10px] uppercase font-bold tracking-wider">Maqomi</p>
                <p className="text-white text-xl font-black italic">
                   #1 Rank Startuper
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 mb-8">
              <div className="bg-slate-900/50 border border-slate-800 p-2 rounded-xl">
                <p className="text-[8px] text-slate-500 uppercase font-bold mb-1">Level</p>
                <p className="text-indigo-300 text-[10px] font-bold">🚀 Active Member</p>
              </div>
              <div className="bg-slate-900/50 border border-slate-800 p-2 rounded-xl">
                <p className="text-[8px] text-slate-500 uppercase font-bold mb-1">Verify</p>
                <p className="text-emerald-400 text-[10px] font-bold">✅ Verified User</p>
              </div>
            </div>

            <div className="bg-black/30 rounded-2xl p-4 border border-white/5">
              <div className="flex justify-between items-center mb-2">
                <p className="text-white text-[10px] font-bold">Stajirovka imkoniyati</p>
                <span className="text-indigo-400 text-[10px] font-black">{userData?.totalScore > 500 ? '90%' : '45%'}</span>
              </div>
              <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-indigo-500 h-full transition-all duration-1000 shadow-[0_0_10px_#6366f1]" 
                     style={{ width: userData?.totalScore > 500 ? '90%' : '45%' }} />
              </div>
              <button onClick={() => alert("Tez kunda: Hamkor kompaniyalar bilan bog'lanish imkoniyati!")}
                className="w-full mt-4 bg-white text-indigo-950 py-2 rounded-xl text-[10px] font-black uppercase hover:bg-indigo-50 transition-all active:scale-95">
                Hamkorlar bilan bog'lanish ⚡
              </button>
            </div>
          </div>
        </div>

        {/* Global Daraja & Streak Stats */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-5 text-center">
            <span className="text-2xl mb-2 block">🔥</span>
            <p className="text-2xl font-black text-white">{userData?.streak || 0}</p>
            <p className="text-slate-400 text-[10px] uppercase font-bold">Kunlik Streak</p>
          </div>
          <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-5 text-center">
            <span className="text-2xl mb-2 block">🌍</span>
            <p className="text-2xl font-black text-violet-400">Top 10%</p>
            <p className="text-slate-400 text-[10px] uppercase font-bold">Global Daraja</p>
          </div>
        </div>

        {/* Logout Button */}
        <button onClick={handleLogout}
          className="w-full bg-red-900/10 border border-red-500/20 text-red-500/70
                     font-bold py-4 rounded-2xl hover:bg-red-900/20 transition-all active:scale-95 mb-8">
          Tizimdan chiqish
        </button>

        {/* Footer Navigation Overlay */}
        <div className="fixed bottom-0 left-0 right-0 bg-slate-900/95 border-t border-slate-800 backdrop-blur-sm z-50">
          <div className="max-w-lg mx-auto flex">
            <button onClick={() => navigate('/')}
              className="flex-1 py-4 flex flex-col items-center gap-1 opacity-50">
              <span className="text-xl">🏠</span>
              <span className="text-xs text-slate-400">Bosh sahifa</span>
            </button>
            <button onClick={() => navigate('/profile')}
              className="flex-1 py-4 flex flex-col items-center gap-1 border-t-2 border-violet-500 bg-violet-500/5">
              <span className="text-xl">👤</span>
              <span className="text-xs text-violet-400 font-semibold">Profil</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}