import { useLocation, useNavigate } from 'react-router-dom'

export default function Result() {
  const { state } = useLocation()
  const navigate = useNavigate()
  const { score, traits, profession } = state || {}

  if (!profession) { navigate('/'); return null }

  const percent = Math.min(Math.round((score / (profession.questions.length * 45)) * 100), 100)
  const level = percent >= 80
    ? { text: 'Ajoyib mos!', color: 'text-green-400', border: 'border-green-500/50', bg: 'bg-green-900/20' }
    : percent >= 60
    ? { text: 'Yaxshi mos', color: 'text-yellow-400', border: 'border-yellow-500/50', bg: 'bg-yellow-900/20' }
    : { text: 'Imkoniyat bor', color: 'text-blue-400', border: 'border-blue-500/50', bg: 'bg-blue-900/20' }

  const topTrait = Object.entries(traits || {}).sort(([, a], [, b]) => b - a)[0]
  const traitNames = {
    analytic: '🧠 Tahlilchi',
    communication: '💬 Muloqotchi',
    creative: '🎨 Ijodkor',
    careful: '🎯 Diqqatli'
  }

  function shareResult() {
    const text = `Men bugun ${profession.name} bo'ldim!\nMosligim: ${percent}%\nSinab ko'ring 👇\nhttps://bugunmen.vercel.app`
    if (navigator.share) {
      navigator.share({ title: 'Bugun Men', text, url: 'https://bugunmen.vercel.app' })
    } else {
      navigator.clipboard.writeText(text)
      alert('Nusxalandi! Telegram ga joylashtiring 🎉')
    }
  }

  return (
    <div className="min-h-screen bg-[#0A0A0F] p-5">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-lg mx-auto pt-8">
        {/* Kasb */}
        <div className="text-center mb-8">
          <div className="w-24 h-24 rounded-3xl mx-auto mb-4
                          bg-gradient-to-br from-violet-900/50 to-pink-900/30
                          border border-violet-700/30
                          flex items-center justify-center text-5xl">
            {profession.emoji}
          </div>
          <h1 className="text-3xl font-black text-white">{profession.name}</h1>
          <p className={`text-lg font-semibold mt-1 ${level.color}`}>{level.text}</p>
        </div>

        {/* % natija */}
        <div className={`${level.bg} border ${level.border} rounded-3xl p-8 mb-4 text-center`}>
          <p className={`text-7xl font-black ${level.color}`}>{percent}%</p>
          <p className="text-slate-400 mt-2">moslik darajasi</p>
        </div>

        {/* Xususiyat */}
        {topTrait && (
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 mb-6 text-center">
            <p className="text-slate-500 text-xs mb-1">Asosiy xususiyatingiz</p>
            <p className="text-violet-400 font-bold text-lg">
              {traitNames[topTrait[0]] || topTrait[0]}
            </p>
          </div>
        )}

        {/* Tugmalar */}
        <button onClick={shareResult}
          className="w-full bg-violet-600 hover:bg-violet-500 text-white
                     font-bold py-4 rounded-2xl mb-3 transition-all
                     shadow-lg shadow-violet-600/30 active:scale-95">
          📤 Natijamni ulashish
        </button>
        <button onClick={() => navigate('/')}
          className="w-full bg-slate-900/80 border border-slate-800
                     text-slate-300 font-bold py-4 rounded-2xl
                     hover:bg-slate-800 transition-all active:scale-95">
          🔄 Boshqa kasbni sinash
        </button>
      </div>
    </div>
  )
}