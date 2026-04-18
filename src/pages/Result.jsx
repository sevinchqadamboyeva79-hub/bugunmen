import { useLocation, useNavigate } from 'react-router-dom'

export default function Result() {
  const { state } = useLocation()
  const navigate = useNavigate()
  const { score, traits, profession } = state || {}

  if (!profession) {
    navigate('/')
    return null
  }

  const percent = Math.min(Math.round((score / (profession.questions.length * 45)) * 100), 100)

  function shareResult() {
    const text = "Men bugun " + profession.name + " boldim!\nMosligim: " + percent + "%\nSiz ham sinab koring\nhttps://bugunmen.vercel.app"
    if (navigator.share) {
      navigator.share({ title: "Bugun Men", text, url: "https://bugunmen.vercel.app" })
    } else {
      navigator.clipboard.writeText(text)
      alert("Nusxalandi! Telegram yoki Instagram ga joylashtiring!")
    }
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white p-4">
      <div className="max-w-lg mx-auto text-center pt-8">
        <p className="text-6xl mb-4">{profession.emoji}</p>
        <h1 className="text-3xl font-bold mb-2">{profession.name}</h1>
        <p className="text-gray-400 mb-6">ga mosligingiz</p>
        <div className="bg-purple-900/30 border border-purple-500 rounded-2xl p-6 mb-6">
          <p className="text-6xl font-bold text-purple-400">{percent}%</p>
          <p className="text-gray-300 mt-2">moslik</p>
        </div>
        <button
          onClick={shareResult}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white p-4 rounded-xl font-bold text-lg mb-3">
          📤 Natijamni ulashish
        </button>
        <button
          onClick={() => navigate('/')}
          className="w-full bg-slate-700 hover:bg-slate-600 text-white p-4 rounded-xl font-bold">
          🔄 Boshqa kasbni sinash
        </button>
      </div>
    </div>
  )
}