import { useState } from 'react'
import { auth, db } from '../firebase'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { doc, setDoc, getDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [isLogin, setIsLogin] = useState(true)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  function getErrorMessage(code) {
    switch (code) {
      case 'auth/user-not-found':      return "Bu email ro'yxatdan o'tmagan!"
      case 'auth/wrong-password':      return "Parol noto'g'ri! Qaytadan urinib ko'ring."
      case 'auth/invalid-credential':  return "Email yoki parol noto'g'ri!"
      case 'auth/email-already-in-use':return "Bu email band. Kirish sahifasiga o'ting."
      case 'auth/invalid-email':       return "Email noto'g'ri formatda."
      case 'auth/weak-password':       return "Parol kamida 6 ta belgi bo'lishi kerak."
      case 'auth/network-request-failed': return "Internet yo'q. Tarmoqni tekshiring!"
      case 'auth/too-many-requests':   return "Juda ko'p urinish. Biroz kuting."
      default:                         return "Xato yuz berdi. Qaytadan urinib ko'ring."
    }
  }

  async function handleSubmit() {
    setError('')
    setLoading(true)
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password)
      } else {
        if (!username.trim()) { setError('Ismingizni kiriting!'); setLoading(false); return }
        if (!email.trim()) { setError('Email kiriting!'); setLoading(false); return }
        if (password.length < 6) { setError("Parol kamida 6 ta belgi bo'lishi kerak."); setLoading(false); return }
        const cred = await createUserWithEmailAndPassword(auth, email, password)
        await setDoc(doc(db, 'users', cred.user.uid), {
          username: username.trim(),
          email,
          streak: 0,
          lastPlayedDate: null,
          createdAt: new Date().toISOString()
        })
      }
      navigate('/')
    } catch (e) {
      setError(getErrorMessage(e.code))
    } finally {
      setLoading(false)
    }
  }

  async function handleGoogle() {
    setError('')
    setLoading(true)
    try {
      const cred = await signInWithPopup(auth, new GoogleAuthProvider())
      const ref = doc(db, 'users', cred.user.uid)
      const snap = await getDoc(ref)
      if (!snap.exists()) {
        await setDoc(ref, {
          username: cred.user.displayName || cred.user.email.split('@')[0],
          email: cred.user.email,
          streak: 0,
          lastPlayedDate: null,
          createdAt: new Date().toISOString()
        })
      }
      navigate('/')
    } catch (e) {
      setError(getErrorMessage(e.code))
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#0A0A0F] flex items-center justify-center p-5">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative w-full max-w-sm">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-black text-violet-400 mb-2">Bugun Men 🎯</h1>
          <p className="text-slate-400">Kasbingizni kashf eting</p>
        </div>

        <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6">
          {!isLogin && (
            <input
              className="w-full bg-slate-800 border border-slate-700 text-white
                         rounded-2xl px-4 py-3.5 mb-3 outline-none
                         focus:border-violet-500 transition-colors placeholder-slate-500"
              placeholder="Ismingiz (masalan: Sevinch)"
              value={username}
              onChange={e => setUsername(e.target.value)} />
          )}
          <input
            className="w-full bg-slate-800 border border-slate-700 text-white
                       rounded-2xl px-4 py-3.5 mb-3 outline-none
                       focus:border-violet-500 transition-colors placeholder-slate-500"
            placeholder="Email" value={email}
            onChange={e => setEmail(e.target.value)} />
          <input
            type="password"
            className="w-full bg-slate-800 border border-slate-700 text-white
                       rounded-2xl px-4 py-3.5 mb-4 outline-none
                       focus:border-violet-500 transition-colors placeholder-slate-500"
            placeholder="Parol (minimum 6 belgi)" value={password}
            onChange={e => setPassword(e.target.value)} />

          {error && (
            <div className="bg-red-900/30 border border-red-500/30 rounded-xl p-3 mb-4
                            flex items-start gap-2">
              <span className="text-red-400 mt-0.5">⚠️</span>
              <p className="text-red-400 text-sm">{error}</p>
            </div>
          )}

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full bg-violet-600 hover:bg-violet-500 text-white
                       font-bold py-4 rounded-2xl mb-3 transition-all
                       shadow-lg shadow-violet-600/30 active:scale-95
                       disabled:opacity-50 disabled:cursor-not-allowed
                       flex items-center justify-center gap-2">
            {loading ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              isLogin ? 'Kirish' : "Ro'yxatdan o'tish"
            )}
          </button>

          <button
            onClick={handleGoogle}
            disabled={loading}
            className="w-full bg-white hover:bg-gray-100 text-gray-800
                       font-bold py-4 rounded-2xl mb-4 transition-all
                       active:scale-95 disabled:opacity-50
                       flex items-center justify-center gap-2">
            <span className="font-black text-lg">G</span>
            Google bilan kirish
          </button>

          <p className="text-center text-slate-500 text-sm cursor-pointer
                        hover:text-slate-300 transition-colors"
             onClick={() => { setIsLogin(!isLogin); setError('') }}>
            {isLogin ? "Akkaunt yo'qmi? Ro'yxatdan o'ting" : 'Kirish sahifasiga qaytish'}
          </p>
        </div>
      </div>
    </div>
  )
}