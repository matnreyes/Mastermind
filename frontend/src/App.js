import { useState, useEffect } from 'react'
import Game from './components/Game'
import Login from './components/Login'
import Leaderboard from './components/Leaderboard'
import NavBar from './components/NavBar'

const App = () => {
  const [user, setUser] = useState(null)
  const [page, setPage] = useState('')

  // Set user from username and token stored in storage
  // TODO: create an hour timeout for user token
  useEffect(() => {
    const loggedIn = JSON.parse(window.localStorage.getItem('user'))
    if (loggedIn) {
      const clientTime = (new Date()).getTime()
      if (clientTime >= loggedIn.tokenExpiration || !loggedIn.tokenExpiration) {
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
    <div className="hero min-h-screen bg-base-200" style={{ backgroundImage: `url("https://i.ibb.co/L0wpXJx/5465339.jpg")` }}>
      <div className="hero-overlay bg-opacity-60" />
      {user === null 
      ? <Login setUser={setUser}/>
      :  
      <div>
        <NavBar setPage={setPage} handleLogout={handleLogout}/>
        {
          page === 'game'
          ? <Game user={user}/> 
          : <Leaderboard />
        }
      </div>
      
      }
    </div>
  )
}

export default App