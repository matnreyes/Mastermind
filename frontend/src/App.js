import { useState, useEffect } from 'react'
import Game from './components/Game'
import Login from './components/Login'
import Leaderboard from './components/Leaderboard'

const App = () => {
  const [user, setUser] = useState(null)
  const [page, setPage] = useState('')

  // Set user from username and token stored in storage
  // TODO: create an hour timeout for user token
  useEffect(() => {
    const loggerIn = JSON.parse(window.localStorage.getItem('user'))
    if (loggerIn) {
      setUser(loggerIn)
    }
  }, [])

  const handleLogout = () => {
    setUser(null)
    window.localStorage.removeItem('user')
  }

  return (
    <div className="flex h-screen bg-slate-800 ">
      {user === null 
      ? <Login setUser={setUser}/>
      :  
      <div>
        <div id="nav-bar" className="flex w-screen  bg-amber-50 space-x-4">
            <button className=" bg-orange-400 rounded-sm" onClick={() => setPage('game')}>Game</button>
            <button className=" bg-orange-400 rounded-sm" onClick={() => setPage('leaderboard')}>Leaderboard</button>
            <button className=" bg-orange-400 rounded-sm" onClick={() => handleLogout()}>Logout</button>
        </div>
        {
          page === 'game'
          ? <Game user={user} className="flex justify-center"/> 
          : <Leaderboard />
        }
      </div>
      
      }
    </div>
  )
}

export default App