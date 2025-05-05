import React from "react";
import {useEffect, useState} from "react";

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


const generateJoke = () => {
    fetchData();
}

return <div>
    <button onClick={generateJoke}>Generate fact</button>
    <p>Fact: {fact.fact}</p>
</div>;
}; 

export default API;