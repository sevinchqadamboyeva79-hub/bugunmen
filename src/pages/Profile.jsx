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
    <div className="min-h-screen bg-[#0A0A0F] p-5">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-lg mx-auto pt-8">
        <button onClick={() => navigate('/')} className="text-slate-400 text-2xl mb-6 block">‹</button>

        {/* Avatar */}
        <div className="text-center mb-6">
          <div className="w-24 h-24 rounded-3xl mx-auto mb-4
                          bg-gradient-to-br from-violet-900/50 to-pink-900/30
                          border border-violet-700/30
                          flex items-center justify-center text-4xl">
            👤
          </div>
          <h1 className="text-2xl font-black text-white">
            {userData?.username || user?.email?.split('@')[0]}
          </h1>
          <p className="text-slate-400 text-sm mt-1">{user?.email}</p>
        </div>

        {/* Streak */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-5 mb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-3xl">🔥</span>
              <div>
                <p className="text-2xl font-black text-white">{userData?.streak || 0} kun</p>
                <p className="text-slate-400 text-sm">ketma-ket streak</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-slate-400 text-xs">Eng yuqori</p>
              <p className="text-violet-400 font-bold">{userData?.streak || 0} kun</p>
            </div>
          </div>
        </div>

        {/* Statistika */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 text-center">
            <p className="text-3xl font-black text-violet-400">
              {userData?.totalGames || 0}
            </p>
            <p className="text-slate-400 text-xs mt-1">O'yin o'ynaldi</p>
          </div>
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 text-center">
            <p className="text-3xl font-black text-violet-400">
              {userData?.totalScore || 0}
            </p>
            <p className="text-slate-400 text-xs mt-1">Jami ball</p>
          </div>
        </div>

        {/* Tez kunda */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-5 mb-6">
          <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Tez kunda
          </p>
          {['Kasb pasporti 📜', 'Batafsil tahlil 📊', 'Stajirovka yo\'llari 🎯', 'Sertifikat 🏆'].map(item => (
            <div key={item} className="flex items-center gap-3 mb-2 opacity-50">
              <span className="text-violet-400">🔒</span>
              <p className="text-slate-300 text-sm">{item}</p>
            </div>
          ))}
        </div>

        <button onClick={handleLogout}
          className="w-full bg-red-900/30 border border-red-500/30 text-red-400
                     font-bold py-4 rounded-2xl hover:bg-red-900/50 transition-all active:scale-95">
          Chiqish
        </button>
      </div>
    </div>
  )
}