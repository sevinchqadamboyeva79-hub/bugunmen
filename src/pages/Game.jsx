import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { professions } from '../data/professions'

export default function Game() {
  const { professionId } = useParams()
  const navigate = useNavigate()
  const profession = professions.find(p => p.id === professionId)
  const [currentQ, setCurrentQ] = useState(0)
  const [score, setScore] = useState(0)
  const [timeLeft, setTimeLeft] = useState(30)
  const [traits, setTraits] = useState({})
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    if (selected !== null) return
    const timer = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) { handleAnswer(null); return 30 }
        return t - 1
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [currentQ, selected])

  function handleAnswer(option) {
    setSelected(option)
    setTimeout(() => {
      const bonus = timeLeft > 20 ? 15 : timeLeft > 10 ? 10 : 5
      const points = option ? option.score + bonus : 0
      const newScore = score + points
      const newTraits = { ...traits }
      if (option?.traits) {
        Object.entries(option.traits).forEach(([k, v]) => {
          newTraits[k] = (newTraits[k] || 0) + v
        })
      }
      if (currentQ + 1 >= profession.questions.length) {
        navigate('/result', { state: { score: newScore, traits: newTraits, profession } })
      } else {
        setCurrentQ(q => q + 1)
        setScore(newScore)
        setTraits(newTraits)
        setTimeLeft(30)
        setSelected(null)
      }
    }, 600)
  }

  const question = profession.questions[currentQ]
  const timerPct = (timeLeft / 30) * 100
  const timerColor = timeLeft > 20 ? 'bg-green-500' : timeLeft > 10 ? 'bg-yellow-500' : 'bg-red-500'

  return (
    <div className="min-h-screen bg-[#0A0A0F] p-5">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-lg mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 pt-4 mb-6">
          <button onClick={() => navigate('/')}
            className="w-9 h-9 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white transition-colors">
            ‹
          </button>
          <span className="text-2xl">{profession.emoji}</span>
          <span className="font-bold text-white">{profession.name}</span>
          <div className="ml-auto flex items-center gap-2 bg-slate-800 rounded-xl px-3 py-1.5">
            <span className={`w-2 h-2 rounded-full ${timerColor} animate-pulse`} />
            <span className="text-white font-mono font-bold text-sm">{timeLeft}s</span>
          </div>
        </div>

        {/* Progress */}
        <div className="flex gap-1.5 mb-6">
          {profession.questions.map((_, i) => (
            <div key={i} className={`h-1 flex-1 rounded-full transition-all duration-500
              ${i < currentQ ? 'bg-violet-500' : i === currentQ ? 'bg-violet-400' : 'bg-slate-800'}`} />
          ))}
        </div>

        {/* Timer bar */}
        <div className="w-full bg-slate-800 rounded-full h-1.5 mb-8">
          <div className={`${timerColor} h-1.5 rounded-full transition-all duration-1000`}
               style={{ width: `${timerPct}%` }} />
        </div>

        {/* Savol */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 mb-6">
          <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider mb-3">
            Savol {currentQ + 1} / {profession.questions.length}
          </p>
          <p className="text-xl font-semibold text-white leading-relaxed">
            {question.text}
          </p>
        </div>

        {/* Variantlar */}
        <div className="space-y-3">
          {question.options.map((opt, i) => {
            let cls = "w-full p-4 rounded-2xl text-left transition-all duration-200 border "
            if (selected === opt)
              cls += "bg-violet-900/50 border-violet-500 scale-98"
            else if (selected && selected !== opt)
              cls += "bg-slate-900/30 border-slate-800 opacity-40"
            else
              cls += "bg-slate-900/80 border-slate-800 hover:border-violet-500/50 hover:bg-slate-800 active:scale-98"

            return (
              <button key={i} onClick={() => !selected && handleAnswer(opt)} className={cls}>
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-xl bg-slate-800 flex items-center justify-center
                                   text-sm font-bold text-violet-400 flex-shrink-0">
                    {String.fromCharCode(65 + i)}
                  </span>
                  <span className="text-white text-sm font-medium">{opt.text}</span>
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}