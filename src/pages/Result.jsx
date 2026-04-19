import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { auth, db } from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { doc, getDoc, setDoc } from 'firebase/firestore'

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
  const [user] = useAuthState(auth)
  const { score, traits, profession } = state || {}

  useEffect(() => {
    if (!user || !profession) return
    async function updateStreak() {
      const ref = doc(db, 'users', user.uid)
      const snap = await getDoc(ref)
      const data = snap.data() || {}
      const today = new Date().toDateString()
      const yesterday = new Date(Date.now() - 86400000).toDateString()
      if (data.lastPlayedDate === today) return
      let streak = data.streak || 0
      if (data.lastPlayedDate === yesterday) streak += 1
      else streak = 1
      await setDoc(ref, { ...data, streak, lastPlayedDate: today }, { merge: true })
    }
    updateStreak()
  }, [user, profession])

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
  const topTrait = sortedTraits[0];
  const traitInfo = topTrait ? traitDetails[topTrait[0]] : null;
  
  // 1. Ulashish uchun matnni tayyorlaymiz
  const shareText = `🌟 BUGUN MEN: ${profession.name.toUpperCase()}! 🎯%0A%0A📊 Moslik darajasi: ${percent}%25%0A🧠 Kuchli tomonim: ${traitInfo?.name || ''}%0A%0ASiz ham qaysi kasbga mosligingizni bilib oling:%0A👇👇👇%0Ahttps://bugunmen.vercel.app`;

  // 2. Telegram uchun maxsus havola (Bu matnni Telegramga olib o'tishni kafolatlaydi)
  const telegramUrl = `https://t.me/share/url?url=https://bugunmen.vercel.app&text=${shareText}`;

  // 3. Variantlar: Agar mobil qurilmada "Share" menyusi ochilishi qiyin bo'lsa, 
  // to'g'ridan-to'g'ri Telegramga yo'naltiramiz
  window.open(telegramUrl, '_blank');
  
  // 4. Foydalanuvchiga nima bo'lganini tushuntirish uchun (UX)
  // Bu yerda screenshot qilish haqida maslahat ham chiqadi
  setTimeout(() => {
    alert("🚀 Telegramga yo'naltirildi!\n\nMaslahat: Natijangiz yanada chiroyli ko'rinishi uchun ushbu sahifani skrinshot qilib Story-ga qo'ying!");
  }, 500);
}

  return (
    <div className="min-h-screen bg-[#0A0A0F] p-5 pb-32"> {/* pb-32 pastki nav uchun joy */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-lg mx-auto pt-8">

        {/* Streak bildirish */}
        <div className="bg-orange-900/20 border border-orange-700/30 rounded-2xl p-3 mb-6 flex items-center gap-3">
          <span className="text-2xl">🔥</span>
          <p className="text-orange-400 text-sm font-semibold">
            Barakalla! Bugungi streak saqlandi!
          </p>
        </div>

        {/* Kasb sarlavhasi */}
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

        {/* Natija foizi */}
        <div className={`${level.bg} border ${level.border} rounded-3xl p-6 mb-8 text-center`}>
          <p className={`text-7xl font-black ${level.color}`}>{percent}%</p>
          <p className="text-slate-400 mt-1 text-sm">moslik darajasi</p>
          <div className="w-full bg-slate-800 rounded-full h-2 mt-4">
            <div className={`h-2 rounded-full transition-all duration-1000 ${
              percent >= 80 ? 'bg-green-500' : percent >= 60 ? 'bg-yellow-500' : 'bg-blue-500'
            }`} style={{ width: `${percent}%` }} />
          </div>
        </div>

        {/* Kuchli tomonlar bo'limi */}
        {sortedTraits.length > 0 && (
          <div className="mb-8">
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
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* YO'L XARITASI (ROADMAP) BLOKI */}
<div className="bg-gradient-to-br from-violet-600/20 to-pink-600/20 border border-violet-500/30 rounded-3xl p-6 mb-10">
  <h3 className="text-white font-bold text-lg mb-2 flex items-center gap-2">
    🗺️ Kelajak yo'l xaritasi
  </h3>
  <p className="text-slate-300 text-sm mb-4 leading-relaxed">
    Sizning salohiyatingiz yuqori! Kasbiy o'sish uchun keyingi qadamlar:
  </p>
  <ul className="space-y-3">
    <li className="flex gap-3 text-sm text-slate-300">
      <span className="text-violet-400 font-bold">01.</span>
      Shaxsiy "Kasb Pasporti"ni shakllantiring.
    </li>
    <li className="flex gap-3 text-sm text-slate-300">
      <span className="text-violet-400 font-bold">02.</span>
      Kasbingiz bo'yicha stajirovka dasturlariga ariza topshiring.
    </li>
    <li className="flex gap-3 text-sm text-slate-300 items-center">
      <span className="text-violet-400 font-bold">03.</span>
      <span className="bg-violet-900/50 text-violet-400 text-[10px] px-2 py-0.5 rounded-full border border-violet-700/50">PREMIUM</span>
      Top kompaniyalarda kafolatlangan stajirovka imkonini oling.
    </li>
  </ul>
</div>

        {/* Asosiy tugmalar */}
        <div className="space-y-3 mb-12">
          <button onClick={shareResult}
            className="w-full bg-violet-600 hover:bg-violet-500 text-white
                       font-bold py-4 rounded-2xl transition-all
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

      {/* Pastki navigatsiya paneli */}
      <div className="fixed bottom-0 left-0 right-0 bg-slate-900/95 border-t border-slate-800 backdrop-blur-sm z-50">
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