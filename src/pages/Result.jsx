import { useLocation, useNavigate } from 'react-router-dom'

const traitDetails = {
  analytic: {
    name: 'Tahlilchi',
    icon: '🧠',
    desc: 'Murakkab muammolarni tizimli hal qilasiz. Ma\'lumotlarga asoslanib qaror qabul qilasiz.',
    careers: ['Shifokor', 'Dasturchi', 'Moliyachi', 'Tadqiqotchi']
  },
  communication: {
    name: 'Muloqotchi',
    icon: '💬',
    desc: 'Odamlar bilan ishlashda kuchli siz. Hamkorlik va muzokaralar sizning kuchingiz.',
    careers: ['O\'qituvchi', 'Tadbirkor', 'Psixolog', 'Jurnalist']
  },
  creative: {
    name: 'Ijodkor',
    icon: '🎨',
    desc: 'Yangi g\'oyalar va noodatiy yechimlar topishda ajralib turasiz.',
    careers: ['Dizayner', 'Arxitektor', 'Rejissyor', 'Marketing']
  },
  careful: {
    name: 'Puxta',
    icon: '🎯',
    desc: 'Mas\'uliyatli va diqqatli siz. Sifat va aniqlik har doim birinchi o\'rinda.',
    careers: ['Shifokor', 'Muhandis', 'Auditor', 'Dasturchi']
  }
}

export default function Result() {
  const { state } = useLocation()
  const navigate = useNavigate()
  const { score, traits, profession } = state || {}

  if (!profession) { navigate('/'); return null }

  const maxScore = profession.questions.length * 45
  const percent = Math.min(Math.round((score / maxScore) * 100), 100)

  const level = percent >= 80
    ? { text: 'Ajoyib mos!', color: 'text-green-400', border: 'border-green-500/50', bg: 'bg-green-900/20' }
    : percent >= 60
    ? { text: 'Yaxshi mos', color: 'text-yellow-400', border: 'border-yellow-500/50', bg: 'bg-yellow-900/20' }
    : { text: 'Imkoniyat bor', color: 'text-blue-400', border: 'border-blue-500/50', bg: 'bg-blue-900/20' }

  const sortedTraits = Object.entries(traits || {})
    .sort(([, a], [, b]) => b - a)
    .slice(0, 3)

  function shareResult() {
    const topTrait = sortedTraits[0]
    const traitName = topTrait ? traitDetails[topTrait[0]]?.name : ''
    const text = `Men bugun "${profession.name}" kasbini sinab ko'rdim!\n\nMosligim: ${percent}%\nKuchli tomonim: ${traitName}\n\nSiz ham sinab ko'ring 👇\nhttps://bugunmen.vercel.app`
    if (navigator.share) {
      navigator.share({ title: 'Bugun Men 🎯', text, url: 'https://bugunmen.vercel.app' })
    } else {
      navigator.clipboard.writeText(text)
      alert('Nusxalandi! Telegram ga joylashtiring 🎉')
    }
  }

  return (
    <div className="min-h-screen bg-[#0A0A0F] p-5 pb-10">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-lg mx-auto pt-8">

        {/* Kasb */}
        <div className="text-center mb-6">
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
        <div className={`${level.bg} border ${level.border} rounded-3xl p-6 mb-4 text-center`}>
          <p className={`text-7xl font-black ${level.color}`}>{percent}%</p>
          <p className="text-slate-400 mt-1 text-sm">moslik darajasi</p>
          <div className="w-full bg-slate-800 rounded-full h-2 mt-4">
            <div className={`h-2 rounded-full transition-all duration-1000 ${
              percent >= 80 ? 'bg-green-500' : percent >= 60 ? 'bg-yellow-500' : 'bg-blue-500'
            }`} style={{ width: `${percent}%` }} />
          </div>
        </div>

        {/* Kuchli tomonlar */}
        {sortedTraits.length > 0 && (
          <div className="mb-4">
            <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-3">
              Sizning kuchli tomonlaringiz
            </p>
            <div className="space-y-3">
              {sortedTraits.map(([trait, value], i) => {
                const info = traitDetails[trait]
                if (!info) return null
                const barWidth = i === 0 ? 90 : i === 1 ? 70 : 50
                return (
                  <div key={trait} className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">{info.icon}</span>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <p className="font-bold text-white text-sm">{info.name}</p>
                          {i === 0 && (
                            <span className="bg-violet-900/50 border border-violet-700/50 text-violet-400 text-xs px-2 py-0.5 rounded-full">
                              Asosiy
                            </span>
                          )}
                        </div>
                        <div className="w-full bg-slate-800 rounded-full h-1.5">
                          <div className="bg-violet-500 h-1.5 rounded-full"
                               style={{ width: `${barWidth}%` }} />
                        </div>
                      </div>
                    </div>
                    <p className="text-slate-400 text-xs leading-relaxed">{info.desc}</p>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {info.careers.map(c => (
                        <span key={c} className="bg-slate-800 text-slate-400 text-xs px-2 py-0.5 rounded-lg">
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
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