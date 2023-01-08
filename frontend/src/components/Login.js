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
          <h1 className="text-5xl font-bold">Mastermind of the Third Kind</h1>
          <p className="py-6">Login or sign up to start playing!</p>
          <div className="alert alert-warning shadow-lg">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
              <span>Warning: While passwords are hashed, DB info is public. Don't use real information.</span>
            </div>
          </div>
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