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
    <div className="hero min-h-screen bg-base-200">
      <form onSubmit={(event) => event.nativeEvent.submitter.value === 'login' ? handleLogin(event) : handleNewUser(event)} className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">Input your information below to login or sign up if you don't have an account.</p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input value={username} onChange={({ target }) => setUsername(target.value)} type="text" placeholder="username" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input value={password} onChange={({ target }) => setPassword(target.value)} type="password" placeholder="password" className="input input-bordered" />
            </div>
            <div className="form-control mt-6">
              <button type="submit" value="login" className="btn btn-primary">Login</button>
            </div>
            <div className="form-control mt-6">
              <button type="submit" value="signup" className="btn btn-primary">Sign up</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Login