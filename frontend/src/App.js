import { useState, useEffect } from 'react'
import Game from './components/Game'
import Login from './components/Login'

const App = () => {
  const [user, setUser] = useState(null)

  // Set user from username and token stored in storage
  // TODO: create an hour timeout for user token
  useEffect(() => {
    const loggerIn = JSON.parse(window.localStorage.getItem('user'))
    if (loggerIn) {
      setUser(loggerIn)
    }
  }, [])

  return (
    <div className="flex h-screen bg-slate-800 ">
      {user === null 
      ? <Login setUser={setUser}/>
      : <Game className="flex justify-center"/>}
    </div>
  )
}

export default App