import { useState } from 'react'
import Game from './components/Game'
import Login from './components/Login'

const App = () => {
  const [user, setUser] = useState(1)
  return (
    <div className="bg-slate-800">
      {user === null 
      ? <Login />
      : <Game className="flex justify-center"/>}
    </div>
  )
}

export default App