import logo from "./logo.svg";
import React, { useEffect } from "react";
import "./App.css";
import { useState } from "react";
import axios from "axios";
import { Circles } from "react-loader-spinner";

function App() {
  const pageStyle = {
    backgroundColor: "lightblue",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  };

  const buttonStyle = {
    padding: "8px",
    fontSize: "1em",
    backgroundColor: "#61dafb",
    color: "white",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    margin: "10px",
  };

  const footerStyle = {
    fontSize: "0.9em",
    color: "white",
    padding: "10px",
  };

  const jokeSpace = {
    backgroundColor: "grey",
    border: "1px solid black",
    borderRadius: "5px",
    padding: "10px",
    margin: "10px",
  };

  const [jokes, setJokes] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const FetchJokes = async () => {
    setIsLoading(true);
    setIsVisible(false);
    const res = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    );
    const data = await res.json();
    setJokes(data);
    setIsLoading(false);
    setIsVisible(true);
    console.log(data);
  };

  /*
  useEffect(() => {
    FetchJokes();
  }, []);
  */

  return (
    <div className="App" style={pageStyle}>
      {isLoading && isVisible ? (
        <Circles height="80" width="80" color="white" />
      ) : null}
      {isVisible && !isLoading ? (
        <div className="jokeSpace" style={jokeSpace}>
          <>
            <p>{jokes.setup}</p>
            <p>{jokes.punchline}</p>
          </>
        </div>
      ) : null}
      <div className="buttonSpace">
        <button
          className="button"
          style={buttonStyle}
          onClick={() => {
            FetchJokes();
            setIsVisible(true);
          }}
        >
          Tell me a Joke
        </button>
      </div>
      <div className="footerSpace" style={footerStyle}>
        <footer>
          <a
            href="https://www.linkedin.com/in/olakunle-joseph-3b9782223/"
            target="_blank"
            rel="noreferrer"
          >
            Made by Olakunle Joseph
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
