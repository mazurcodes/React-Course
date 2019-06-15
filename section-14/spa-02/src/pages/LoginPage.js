import React from 'react'
import "../styles/LoginPage.css"

const LoginPage = () => {
  return (
    <div>
      <label htmlFor="">Podaj login: <input type="text"/></label>
      <label htmlFor="">Podaj haslo: <input type="password"/></label>
      <button>Zaloguj</button>
    </div>
  )
}

export default LoginPage
