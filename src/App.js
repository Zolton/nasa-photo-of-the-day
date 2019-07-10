import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [nasaData, setresData] = useState();
  const [resURL, setresURL] = useState();
  const [resEx, setresExplanation] = useState();
  const [resTitle, setresTitle] = useState();
  const [resCopyright, setresCopy] = useState();

  //console.log(nasaData.map(data=>data))
  //console.log(nasaData.map(data=>data.url));
  //console.log(nasaData.url);

  {
    useEffect(() => {
      axios
        .get(
          "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2012-03-14"
        )
        .then(res => setresData(res.data))
        .catch(error => console.log(error));
    }, []);
  }

  return (
    <div className="App">
      
      {nasaData ? (
        <>
          <h1>{nasaData.title}</h1>
          <img src={nasaData.url} />
          <h3>{nasaData.explanation}</h3>
          <h4>{nasaData.copyright}</h4>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default App;
