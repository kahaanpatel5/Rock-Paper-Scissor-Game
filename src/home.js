import React, { useState } from "react";
import styled from "styled-components";
import Game from "./game";
import Button from "./button";

const HomeStyled = styled.main`
  background-image: radial-gradient(circle at top, #1f3757 20%, #131537 100%);
  color: white;
  font-family: "Barlow Semi Condensed", sans-serif;

  body {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    width: 100vw;
    height: 100vh;
    color: #455a64;
    background-color: #7e57c2;
  }

  .Wrapper {
    max-width: 100%;
  }

  .Title {
    color: #fff;
    font-size: 2.2rem;
    text-align: center;
  }

  .Input {
    position: relative;
    display: flex;
    justify-content: center; 
  }
  
  .Input-text {
    display: block;
    color: #000;
    width: 30%;
    font-family: inherit;
    font-size: 15px;
    text-align: center;
    font-weight: inherit;
    line-height: 25px;
    border: none;
    border-radius: 0.4rem;
    transition: box-shadow;
  }

  .Input-text::placeholder {
    color: #b0bec5;
  }

  .Input-text:focus {
    outline: none;
    box-shadow: 0.2rem 0.8rem 1.6rem;
  }

  .Input-text:placeholder-shown + .Input-label {
    visibility: hidden;
    z-index: -1;
  }

  .Input-text:not(:placeholder-shown) + .Input-label,
  .Input-text:focus:not(:placeholder-shown) + .Input-label {
    visibility: visible;
    z-index: 1;
    opacity: 1;
    transform: translate3d(0, var(--labelTransformedPosY), 0)
      scale(var(--labelScaleFactor));
    transition: transform var(--inputTransitionDuration), visibility 0ms,
      z-index 0ms;
  }

  .app-content {
    padding: 2em;
    min-height: 100vh;
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    justify-content: space-between;
  }
  .start-button {
    position: fixed;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: auto;
    font-size: 24px;
    padding: 16px 32px;
  }
  .h1 {
    font-size: 36px;
    line-height: 1.2;
    font-weight: 700;
    margin: 0 auto;
    text-transform: uppercase;
    text-align: center;
  }

  .scoreboard {
    background-color: transparent;
    border-radius: 10px;
    padding: 10px;
    width: 55%;
    max-width: 100%;
    position: fixed;
    top: 75%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  

  .scoreboard h1 {
    font-size: 24px;
    text-align: center;
  }

  .scoreboard table {
    width: 100%;
    border-collapse: collapse;
  }
  .scoreboard th,
  .scoreboard td {
    padding: 10px;
    text-align: center;
    border: 2px solid white;
    font-size: 20px;
  }

  .scoreboard td:first-child {
    font-weight: bold;
  }

  .scoreboard td:nth-child(2) {
    text-align: center;
  }

  .scoreboard tr:last-child td {
    border-bottom: none;
  }
`;

function Home() {
  const [gameStarted, setGameStarted] = useState(false);
  const [name, setName] = useState("");

  function handleClick() {
    if (name) {
      localStorage.setItem("name", name);
      setGameStarted(true);
    } else {
      alert("Please enter your name");
    }
  }

  return (
    <HomeStyled>
      <div className="app-content">
        {gameStarted ? (
          <Game />
        ) : (
          <>
            <div class="Wrapper">
              <h1 class="Title">Welcome to Tic-Tac-Toe!</h1>
              <div class="Input">
                <input
                  type="text"
                  id="input"
                  class="Input-text"
                  placeholder="Enter Your Name"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="start-button">
              <Button onClick={handleClick} className="start-button">
                <b>Start!</b>
              </Button>
            </div>
            <div class="scoreboard">
              <h1>Scoreboard</h1>
              <table>
                <thead>
                  <tr>
                    <th>Rank</th>
                    <th>Name</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>John</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jane</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Mike</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Sarah</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Tom</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </HomeStyled>
  );
}

export default Home;
