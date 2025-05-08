import React from "react";
import { useState} from "react";
import mimmy from "../assets/mimmy.jpg"
import {useNavigate} from "react-router"



import "../components/API.css"

const API = () => {

    const [fact, setFact] = useState({});

    const fetchData = async () => {
        try {
            const response = await fetch("https://catfact.ninja/fact");
            const data = await response.json();
            setFact(data); 
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}; 

const generateFact = () => {
    fetchData();
}

const navigate = useNavigate()

const handleLogout = () => {
    navigate (-1);
  };

return <div>
    <div className="container">
        <div className="title" >
            <img src={mimmy} onClick={generateFact}/>
            <div className="bubble left">Hi, I'm Mimmy! Click me if you want to know facts about cats</div>
            </div>
            <div className="text">
           <p>{fact.fact}</p>
        </div>
        <button className="logout" onClick={handleLogout}>Log Out</button>
    </div>
    </div>
   
}; 


export default API;