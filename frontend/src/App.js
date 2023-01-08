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
    const loggedIn = JSON.parse(window.localStorage.getItem('user'))
    if (loggedIn) {
      const clientTime = new Date()
      if (clientTime >= loggedIn.tokerExpiration) {
        window.localStorage.removeItem('user')
        return
      } 
      setUser(loggedIn)
    }
  }, [])

  const handleLogout = () => {
    setUser(null)
    window.localStorage.removeItem('user')
  }

  return (
    <div className="flex h-screen bg-slate-800">
      {user === null 
      ? 
      <div className="w-screen h-screen place-items-center">
        <Login setUser={setUser}/>
      </div>
      :  
      <div>
        <div id="nav-bar" className="flex-none navbar bg-base-100 w-screen">
          <div className="navbar-start"/>
          <div className="navbar-center">
            <button className="btn normal-case btn-ghost" onClick={() => setPage('game')}>Game</button>
            <button className=" btn normal-case btn-ghost" onClick={() => setPage('leaderboard')}>Leaderboard</button>
            <button className=" btn normal-case btn-ghost" onClick={() => handleLogout()}>Logout</button>
          </div>
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