import { useState, useEffect } from 'react'
import { professions } from '../data/professions'
import { useNavigate } from 'react-router-dom'
import { auth, db } from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { doc, getDoc, setDoc } from 'firebase/firestore'

export default function Home() {
  const navigate = useNavigate()
  const [user] = useAuthState(auth)
  const [username, setUsername] = useState('')
  const [streak, setStreak] = useState(0)
  const [todayDone, setTodayDone] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!user) return
    async function loadData() {
      setLoading(true)
      try {
        const ref = doc(db, 'users', user.uid)
        const snap = await getDoc(ref)
        const data = snap.data() || {}

        setUsername(data.username || user.email?.split('@')[0])

        const today = new Date().toDateString()
        const yesterday = new Date(Date.now() - 86400000).toDateString()
        let s = data.streak || 0

        if (data.lastPlayedDate === today) {
          setTodayDone(true)
          setStreak(s)
        } else if (data.lastPlayedDate === yesterday) {
          setStreak(s)
        } else if (data.lastPlayedDate && data.lastPlayedDate !== today) {
          s = 0
          await setDoc(ref, { ...data, streak: 0 }, { merge: true })
          setStreak(0)
        }
      } catch (err) {
        console.error('Ma\'lumot yuklashda xato:', err)
      } finally {
        setLoading(false)
      }
    }
    loadData()
  }, [user])

  if (loading) return (
    <div className="min-h-screen bg-[#0A0A0F] flex items-center justify-center">
      <div className="text-center">
        <div className="w-12 h-12 border-2 border-violet-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-slate-400 text-sm">Yuklanmoqda...</p>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-[#0A0A0F] pb-24">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <div className="relative px-5 pt-12 pb-6 text-center">
        <div className="inline-block bg-violet-500/10 border border-violet-500/20
                rounded-full px-4 py-1.5 text-violet-400 text-xs
                font-semibold mb-4">
          👋 Salom, {username}!
        </div>
        <h1 className="text-5xl font-black text-violet-400 mb-3 leading-tight">
          Bugun Men… 🎯
        </h1>
        <p className="text-slate-400 text-base">Qaysi kasbga mosligingizni biling</p>
      </div>

      {/* Streak kartasi */}
      <div className="px-5 max-w-lg mx-auto mb-6">
        <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-2xl bg-orange-900/30 border border-orange-700/30
                              flex items-center justify-center text-3xl">
                🔥
              </div>
              <div>
                <p className="text-3xl font-black text-white">{streak} kun</p>
                <p className="text-slate-400 text-sm">ketma-ket streak</p>
              </div>
            </div>
            <div className="text-right">
              {todayDone ? (
                <div className="bg-green-900/30 border border-green-500/30 rounded-xl px-3 py-1.5">
                  <p className="text-green-400 text-xs font-bold">✅ Bugun bajardi</p>
                </div>
              ) : (
                <div className="bg-orange-900/30 border border-orange-500/30 rounded-xl px-3 py-1.5">
                  <p className="text-orange-400 text-xs font-bold">⚡ Bugun sinang!</p>
                </div>
              )}
            </div>
          </div>

          {/* Streak kunlar */}
          <div className="flex gap-2 mt-4">
            {['D', 'S', 'Ch', 'P', 'J', 'Sh', 'Y'].map((kun, i) => {
              const isToday = i === new Date().getDay()
              const isDone = i < (new Date().getDay() - (todayDone ? 0 : 1))
              return (
                <div key={i} className={`flex-1 h-8 rounded-lg flex items-center justify-center
                  text-xs font-bold transition-all
                  ${isToday && todayDone ? 'bg-green-500 text-white' :
                    isToday ? 'bg-orange-500/30 border border-orange-500 text-orange-400' :
                    isDone ? 'bg-violet-600 text-white' :
                    'bg-slate-800 text-slate-600'}`}>
                  {kun}
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="flex justify-center gap-8 px-5 mb-6">
        {[['169+', 'Sinagan'], ['5', 'Kasb'], ['30s', 'Savol']].map(([n, l]) => (
          <div key={l} className="text-center">
            <p className="text-2xl font-black text-violet-400">{n}</p>
            <p className="text-xs text-slate-500 mt-0.5">{l}</p>
          </div>
        ))}
      </div>

      {/* Kasblar */}
      <div className="px-5 max-w-lg mx-auto space-y-3">
        <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-4">
          Kasbni tanlang
        </p>
        {professions.map((prof) => (
          <button
            key={prof.id}
            onClick={() => navigate(`/game/${prof.id}`)}
            className="w-full bg-slate-900/80 border border-slate-800 p-4 rounded-2xl text-left
                       hover:border-violet-500/50 hover:bg-slate-800/50
                       transition-all duration-200 active:scale-95">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl
                              bg-gradient-to-br from-violet-900/50 to-pink-900/30
                              border border-violet-700/30
                              flex items-center justify-center text-3xl flex-shrink-0">
                {prof.emoji}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-bold text-white text-base">{prof.name}</p>
                <p className="text-slate-400 text-sm truncate">{prof.description}</p>
              </div>
              <span className="text-slate-600 text-2xl">›</span>
            </div>
          </button>
        ))}
      </div>

      {/* Pastki navigatsiya */}
      <div className="fixed bottom-0 left-0 right-0 bg-slate-900/95 border-t border-slate-800 backdrop-blur-sm">
        <div className="max-w-lg mx-auto flex">
          <button onClick={() => navigate('/')}
            className="flex-1 py-4 flex flex-col items-center gap-1">
            <span className="text-xl">🏠</span>
            <span className="text-xs text-violet-400 font-semibold">Bosh sahifa</span>
          </button>
          <button onClick={() => navigate('/profile')}
            className="flex-1 py-4 flex flex-col items-center gap-1">
            <span className="text-xl">👤</span>
            <span className="text-xs text-slate-400">Profil</span>
          </button>
        </div>
      </div>
    </div>
  )
}