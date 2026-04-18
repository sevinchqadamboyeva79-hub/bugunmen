import { useNavigate } from 'react-router-dom'
import { auth } from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { signOut } from 'firebase/auth'

export default function Profile() {
  const navigate = useNavigate()
  const [user] = useAuthState(auth)

  async function handleLogout() {
    await signOut(auth)
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-[#0A0A0F] p-5">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-lg mx-auto pt-8">
        <h1 className="text-2xl font-black text-white mb-6">Profilim 👤</h1>

        {user ? (
          <>
            <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 mb-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-violet-900/50 border border-violet-700/30
                                flex items-center justify-center text-2xl">
                  👤
                </div>
                <div>
                  <p className="font-bold text-white">{user.email}</p>
                  <p className="text-slate-400 text-sm">Bepul foydalanuvchi</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 mb-6">
              <p className="text-slate-400 text-sm mb-3">Tez kunda...</p>
              <div className="space-y-2">
                {['Streak tarixi', 'Kasb profili', 'Natijalar tahlili', 'Sertifikatlar'].map(item => (
                  <div key={item} className="flex items-center gap-3 opacity-40">
                    <span className="text-violet-400">🔒</span>
                    <p className="text-slate-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <button onClick={handleLogout}
              className="w-full bg-red-900/30 border border-red-500/30 text-red-400
                         font-bold py-4 rounded-2xl hover:bg-red-900/50 transition-all active:scale-95">
              Chiqish
            </button>
          </>
        ) : (
          <>
            <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 mb-6 text-center">
              <p className="text-4xl mb-4">🔐</p>
              <p className="text-white font-bold mb-2">Kirish kerak</p>
              <p className="text-slate-400 text-sm">Profilingizni ko'rish uchun kiring</p>
            </div>
            <button onClick={() => navigate('/login')}
              className="w-full bg-violet-600 hover:bg-violet-500 text-white
                         font-bold py-4 rounded-2xl shadow-lg shadow-violet-600/30
                         transition-all active:scale-95">
              Kirish
            </button>
          </>
        )}

        <button onClick={() => navigate('/')}
          className="w-full mt-3 bg-slate-900/80 border border-slate-800
                     text-slate-300 font-bold py-4 rounded-2xl
                     hover:bg-slate-800 transition-all active:scale-95">
          Bosh sahifa
        </button>
      </div>
    </div>
  )
}