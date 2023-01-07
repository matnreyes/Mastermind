import { useState } from 'react'
import loginService from '../services/login'
import userService from '../services/user'

const Login = ({ setUser }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async (event) => {
    event.preventDefault()

    try {
      const loginResponse = await loginService({username, password})
      const user = {
        token:  loginResponse.token,
        username: loginResponse.username
      }

      window.localStorage.setItem('user', JSON.stringify(user))
      setUser(user)
      setUsername('')
      setPassword('')

    } catch (exception) {
      console.log(exception)
    }
  }

  const handleNewUser = async (event) => {
    event.preventDefault()

    try {
      await userService.addUser({username, password})
      handleLogin(event)
    } catch (exception) {
      console.log(exception)
    }
  }

  return (
    <form onSubmit={(event) => event.nativeEvent.submitter.value === 'login' ? handleLogin(event) : handleNewUser(event)}>
      <div>
        username:
        <input type='text'
        value={username}
        onChange={(event) => setUsername(event.target.value)}
        ></input>
      </div>
      <div>
        password:
        <input type='password'
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        ></input>
      </div>
      <button type="submit" value="login" className="bg-white rounded-md">Login</button>
      <button type="submit" value="signup" className="bg-white rounded-md">Sign up</button>
    </form>
  )
}

export default Login