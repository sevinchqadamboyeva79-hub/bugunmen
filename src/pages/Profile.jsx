import { useNavigate } from 'react-router-dom'

export default function Profile() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-slate-900 text-white p-4">
      <div className="max-w-lg mx-auto pt-8">
        <h1 className="text-2xl font-bold mb-6">Profilim 👤</h1>
        <div className="bg-slate-800 rounded-xl p-6 mb-4">
          <p className="text-gray-400 text-sm mb-1">Tez kunda...</p>
          <p className="text-white">Profil sahifasi tayyorlanmoqda</p>
        </div>
        <button
          onClick={() => navigate('/')}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white p-4 rounded-xl font-bold">
          Bosh sahifaga qaytish
        </button>
      </div>
    </div>
  )
}