import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home    from './pages/Home'
import Game    from './pages/Game'
import Result  from './pages/Result'
import Profile from './pages/Profile'
import Login   from './pages/Login'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'                   element={<Home />}    />
        <Route path='/game/:professionId'  element={<Game />}    />
        <Route path='/result'              element={<Result />}  />
        <Route path='/profile'             element={<Profile />} />
        <Route path='/login'               element={<Login />}   />
      </Routes>
    </BrowserRouter>
  )
}

export default App