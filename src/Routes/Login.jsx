import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import EmailInput from '../Components/LoginPage/EmailInput'
import PasswordInput from '../Components/LoginPage/PasswordInput'
import Rememberme from '../Components/LoginPage/Rememberme'
import SigninInput from '../Components/LoginPage/SigninInput'
import Footer from '../Components/LoginPage/Footer'
import { AuthContext } from '../Contexts/AuthContext'

import '../Styles/Login/login.css'
import { toast } from 'react-toastify'
function Login() {
  const EMAIL = 'workprojects22@gmail.com'
  const PASSWORD = '123456'
  const redirectTo = useNavigate()
  const localStorage = useContext(AuthContext)
  const [isValidation, setValidation] = useState(false)
  const [isChecked, setIsChecked] = useState(false)
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const handleLogin = () => {
    if (password.trim() === '' || email.trim() === '') {
      toast.warning('Fields empty', {
        autoClose: 2000,
        hideProgressBar: true,
      })
      return
    }
    if (email === EMAIL && password === PASSWORD) {
      window.sessionStorage.setItem('isLoggedIn', true)
      localStorage.setIsLoggedInL(isChecked)
      redirectTo('/browse')
    } else {
      setValidation(true)
    }
  }
  return (
    <main className={'Login__Page'}>
      <div className='top'>
        <Link to='/'>
          <img
            src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
            alt='Netflix'
          />
        </Link>
      </div>
      <section>
        <div className='si-card'>
          <h2>Sign In</h2>
          {isValidation && (
            <div className='validation'>
              Sorry, we can't find an account with this email address. Please
              try again or create a new account.
            </div>
          )}
          <EmailInput setEmail={setEmail} />
          <PasswordInput setPassword={setPassword} />
          <SigninInput
            password={password}
            email={email}
            handleLogin={handleLogin}
          />
          <div className='u-b'>
            <Rememberme setIsChecked={setIsChecked} />
            <Link to='' className='footer__item'>
              Need help?
            </Link>
          </div>
          <div className='n-su-co'>
            New to Netflix?{' '}
            <Link to='' className='ca'>
              Sign up now!
            </Link>
          </div>
          <div className='bot'>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.{' '}
            <Link to='' className='ca'>
              Learn more.
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

export default Login
