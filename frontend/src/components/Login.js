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
    <div>
      <h3 className="text-center text-3xl font-bold dark:text-white">Mastermind of the Third Kind</h3>
      <form onSubmit={(event) => event.nativeEvent.submitter.value === 'login' ? handleLogin(event) : handleNewUser(event)}>
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
          <input 
            type="text"
            value={username}
            onChange={({ target }) => setUsername(target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            placeholder="username"/>
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
          <input 
            type="password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            placeholder="password"/>
        </div>
        <button 
          type="submit" value="login" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Login
        </button>
        <button type="submit" value="signup" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Sign up
        </button>
      </div>
      </form>
    </div>
  )
}

export default Login