import React from "react";
import { useState} from "react";
import mimmy from "../assets/mimmy.jpg"



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

return <div>
    <div className="container">
        <div className="title" onClick={generateFact}>
            <img src={mimmy}/>
            <div className="bubble left">Hi, I'm Mimmy! Click me if you want to know facts about cats</div>
            </div>
            <div className="text">
           <p>{fact.fact}</p>
        </div>
    </div>
    </div>
   
}; 


export default API;