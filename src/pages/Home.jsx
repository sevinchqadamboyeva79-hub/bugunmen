import { professions } from '../data/professions'
import { useNavigate } from 'react-router-dom'
import { auth } from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

export default function Home() {
  const navigate = useNavigate()
  const [user] = useAuthState(auth)

  return (
    <div className="min-h-screen bg-[#0A0A0F]">

      {/* Background glow */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96
                        bg-violet-600/20 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <div className="relative px-5 pt-14 pb-6 text-center">
        <div className="inline-block bg-violet-500/10 border border-violet-500/20
                        rounded-full px-4 py-1.5 text-violet-400 text-xs
                        font-semibold mb-4">
          🔥 169+ Xorazm yoshi sinadi
        </div>
        <h1 className="text-5xl font-black mb-3 leading-tight text-violet-400">
            Bugun Men… 🎯
        </h1>
        <p className="text-slate-400 text-base">
          Qaysi kasbga mosligingizni biling
        </p>
        {!user && (
          <button onClick={() => navigate('/login')}
            className="mt-4 text-violet-400 text-sm underline">
            Kirish yoki ro'yxatdan o'tish
          </button>
        )}
      </div>

      {/* Stats */}
      <div className="flex justify-center gap-8 px-5 mb-8">
        {[['169+','Sinagan'],['5','Kasb'],['30s','Savol']].map(([n,l]) => (
          <div key={l} className="text-center">
            <p className="text-2xl font-black text-violet-400">{n}</p>
            <p className="text-xs text-slate-500 mt-0.5">{l}</p>
          </div>
        ))}
      </div>

      {/* Kasblar */}
      <div className="px-5 max-w-lg mx-auto space-y-3 pb-10">
        <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-4">
          Kasbni tanlang
        </p>
        {professions.map((prof, i) => (
          <button
            key={prof.id}
            onClick={() => navigate(`/game/${prof.id}`)}
            className="w-full card p-4 text-left
                       hover:border-violet-500/50 hover:bg-slate-800/50
                       transition-all duration-200 active:scale-98">
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

    </div>
  )
}