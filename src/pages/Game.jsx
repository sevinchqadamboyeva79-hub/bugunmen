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

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) {
          handleAnswer(null)
          return 30
        }
        return t - 1
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [currentQ])

  function handleAnswer(option) {
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
    }
  }

  const question = profession.questions[currentQ]

  return (
    <div className="min-h-screen bg-slate-900 text-white p-4">
      <div className="max-w-lg mx-auto">
        <div className="flex justify-between items-center mb-4 pt-4">
          <span className="text-xl">{profession.emoji} {profession.name}</span>
          <span className="text-purple-400 font-mono text-lg">⏱ {timeLeft}s</span>
        </div>
        <div className="w-full bg-slate-700 rounded-full h-2 mb-6">
          <div
            className="bg-purple-500 h-2 rounded-full transition-all duration-1000"
            style={{ width: `${(timeLeft / 30) * 100}%` }}
          />
        </div>
        <p className="text-gray-400 text-sm mb-2">{currentQ + 1} / {profession.questions.length}</p>
        <p className="text-xl font-semibold mb-8 leading-relaxed">{question.text}</p>
        <div className="space-y-3">
          {question.options.map((opt, i) => (
            <button
              key={i}
              onClick={() => handleAnswer(opt)}
              className="w-full p-4 bg-slate-800 hover:bg-purple-900 border border-slate-700 hover:border-purple-500 rounded-xl text-left transition-all">
              {opt.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}