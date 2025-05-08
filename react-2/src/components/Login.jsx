
import "./LoginRegistration.css"
import React from "react"
import {useNavigate} from "react-router"

function Login({formHandle}) {


  const navigate = useNavigate ();



  const handleLogin = (e) => {
    e.preventDefault();
    const loggeduser = JSON.parse(localStorage.getItem("user"));
    if (e.target.username.value === loggeduser.username && e.target.password.value === loggeduser.password) { 
        navigate('api');
    } else {
        alert("Wrong username or password");
    }

  }

  return (
    <div>
      <div className="login-container">
        <form onSubmit={(e) => handleLogin (e)}>
          <h1>Log in</h1>
          <input type="text" name="username" placeholder="Username" required></input>
          <input type="password" name="password" placeholder="Password" required></input>
          <button type="submit">Log in</button>
          <p>Don't have an account? <span onClick = {() => formHandle('registration')}>Register</span></p>
        
        </form>

      </div>
    </div>
  )
}

export default Login
