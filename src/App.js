import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
//import {loader} from "semantic-ui-css"
import LoaderFile from "./Loader"
import "semantic-ui-css/semantic.min.css"
import { Image } from 'semantic-ui-react'


function App() {
  const [nasaData, setresData] = useState();

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
      {/* Ternary to buy time to fetch the axios get request.  First time around, 
      nasaData.title is empty; on the re-render, it's full, so the ternary displays Loading... until the
      axios get request resolves and forces a re-render, at which time nasaData is populated and true */}
      {nasaData ? (
        <>
          <h1>{nasaData.title}</h1>
          <img src={nasaData.url} className="ui large image" />
          {/* <img src={nasaData.url} /> */}
          <h3>NASA explanation: {nasaData.explanation}</h3>
          <h4>Copyright: {nasaData.copyright}</h4>
        </>
      ) : (
        <LoaderFile />
      )}
    </div>
  );
}

export default App;
