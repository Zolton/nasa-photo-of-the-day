import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [resURL, setresData] = useState();
  const [resError, setresError] = useState();
 // console.log("resURL")
  //console.log(resURL)
 
  return (
    <div className="App">
      {useEffect(() => {
        axios
        .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2012-03-14")
        //.then(res=>console.log(res.data.url))
       .then(res => setresData(res.data.url))
      .catch(error => console.log(error));
      }, [])}
      
      <img src={resURL} alt="NASA picture" />
    </div>
  );
}

export default App;
