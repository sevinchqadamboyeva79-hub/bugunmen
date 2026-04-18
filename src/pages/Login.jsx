import { useState } from 'react'
import { auth } from '../firebase'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLogin, setIsLogin] = useState(true)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  async function handleSubmit() {
    setError('')
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password)
      } else {
        await createUserWithEmailAndPassword(auth, email, password)
      }
      navigate('/')
    } catch (e) {
      setError('Xato: ' + e.message)
    }
  }

  async function handleGoogle() {
    try {
      await signInWithPopup(auth, new GoogleAuthProvider())
      navigate('/')
    } catch (e) {
      setError('Google xatosi: ' + e.message)
    }
  }

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
      <div className="bg-slate-800 p-8 rounded-2xl w-full max-w-sm">
        <h1 className="text-white text-2xl font-bold mb-6 text-center">Bugun Men 🎯</h1>
        <input
          className="w-full p-3 bg-slate-700 text-white rounded-lg mb-3"
          placeholder="Email" value={email}
          onChange={e => setEmail(e.target.value)} />
        <input
          type="password"
          className="w-full p-3 bg-slate-700 text-white rounded-lg mb-4"
          placeholder="Parol" value={password}
          onChange={e => setPassword(e.target.value)} />
        {error && <p className="text-red-400 text-sm mb-3">{error}</p>}
        <button
          onClick={handleSubmit}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-lg font-bold mb-3">
          {isLogin ? 'Kirish' : "Royxatdan otish"}
        </button>
        <button
          onClick={handleGoogle}
          className="w-full bg-white text-gray-800 p-3 rounded-lg font-bold mb-4">
          Google bilan kirish
        </button>
        <p className="text-center text-gray-400 text-sm cursor-pointer"
           onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Akkaunt yoqmi? Royxatdan oting" : 'Kirish sahifasiga qaytish'}
        </p>
      </div>
    </div>
  )
}