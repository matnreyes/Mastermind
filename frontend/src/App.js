import { useState, useEffect } from 'react'
import Game from './components/Game'
import Login from './components/Login'
import Leaderboard from './components/Leaderboard'
import NavBar from './components/NavBar'

const App = () => {
  const [user, setUser] = useState(null)
  const [page, setPage] = useState('')
  const [useAudio, setUseAudio] = useState(false)

  // Set user from username and token stored in storage
  useEffect(() => {
    const loggedInUser = JSON.parse(window.localStorage.getItem('user'))
    if (loggedInUser) {
      const clientTime = (new Date()).getTime()
      const isTokenExpired = clientTime >= loggedInUser.tokenExpiration || !loggedInUser.tokenExpiration
      
      if (isTokenExpired) {
        window.localStorage.removeItem('user')
        return
      } 
      setUser(loggedInUser)
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
        <NavBar setPage={setPage} handleLogout={handleLogout} useAudio={useAudio} setUseAudio={setUseAudio}/>
        {
          page === 'game'
          ? <Game user={user} useAudio={useAudio}/> 
          : <Leaderboard />
        }
      </div>}
    </div>
  )
}

export default App