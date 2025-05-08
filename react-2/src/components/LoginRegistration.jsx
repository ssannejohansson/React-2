import {useState} from "react"
import "./LoginRegistration.css"
import Login from "./Login.jsx";
import Registration from "./Registration.jsx";


function LoginRegistration() {
const [form, setForm] = useState('login');


return (
    <>
    {form === 'login' ? (<Login formHandle={setForm}/>) : (<Registration formHandle={setForm}/>) }
    </>
)
}

export default LoginRegistration; 