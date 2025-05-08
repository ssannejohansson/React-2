
import "./LoginRegistration.css"
import React from "react"
import {useNavigate} from "react-router"

function Registration({formHandle}) {


  const navigate = useNavigate ();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.username.value && e.target.password.value) {
      if (!localStorage.getItem("user")) {
        localStorage.setItem("user", JSON.stringify({username:e.target.username.value, password:e.target.password.value}))
        alert ("Registration succeded!")
        navigate ('api');
      }
    }

  }

  return (
    <div>
      <div className="login-container">
        <form onSubmit={(e) => handleSubmit (e)}>
          <h1>Register</h1>
          <input type="text" name="username" placeholder="Username" required></input>
          <input type="password" name="password" placeholder="Password" required></input>
          <button type="submit">Register</button>
          <p>Already have an account? <span onClick = {() => formHandle('login')}>Log in</span></p>
        
        </form>

      </div>
    </div>
  )
}

export default Registration
