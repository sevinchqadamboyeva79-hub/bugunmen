import { professions } from '../data/professions'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-slate-900 text-white p-4">
      <div className="max-w-lg mx-auto">
        <div className="text-center mb-8 pt-8">
          <h1 className="text-4xl font-bold mb-2">Bugun Men… 🎯</h1>
          <p className="text-gray-400">Qaysi kasbga mosligingizni biling</p>
        </div>
        <div className="space-y-4">
          {professions.map(prof => (
            <button
              key={prof.id}
              onClick={() => navigate(`/game/${prof.id}`)}
              className="w-full bg-slate-800 hover:bg-purple-900/50 border border-slate-700 hover:border-purple-500 rounded-xl p-5 text-left transition-all">
              <div className="flex items-center gap-4">
                <span className="text-4xl">{prof.emoji}</span>
                <div>
                  <p className="font-bold text-lg">{prof.name}</p>
                  <p className="text-gray-400 text-sm">{prof.description}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}