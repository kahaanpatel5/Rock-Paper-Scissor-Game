import React, { createContext, useState } from "react";
import "./game.css";
import Header from "./header";
import styled from "styled-components";
import Wrapper from "./wrapper";
import Table from "./table";
import Rules from "./rules";
import Endgame from "./endgame";
import Button from './button'

const GameStyled = styled.main`
  background-image: radial-gradient(circle at top, #1f3757 20%, #131537 100%);
  color: white;
  font-family: "Barlow Semi Condensed", sans-serif;

  .Game-content {
    padding: 2em;
    min-height: 100vh;
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    justify-content: space-between;
  }
`;

const RulesStyled = styled.div`
  text-align: center;
  &::before {
    content: '';
    display: ${({ visible }) => visible ? 'block' : 'none'};
    position: fixed;
    z-index: 2;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background: rgba(0,0,0,.6);
  }
  .close-button {
    margin-top: 2em;
    cursor: pointer;
  }

  .rules-modal {
    background: white;
    padding: 4em 0;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;

    h2 {
      color: #3B4262;
      text-transform: uppercase;
      font-weight: 700;
      letter-spacing: -2px;
      margin-bottom: 1em;
    }

  }
  @media screen and (min-width: 768px) {
    .button {
      position: fixed;
      right: 12em;
      bottom: 2em;
    }
    .rules-modal {
      width: 400px;
      margin: auto;
      border-radius: 10px;
      top: -20%;
      bottom: initial;
      transform: translateY(50%);
      padding: 2em;
      box-sizing: border-box;
      h2 {
        font-size: 32px;
        align-self: flex-start;
        margin: 0 0 1.2em 0;
      }
    }
    .close-button {
      position: absolute;
      right: 2em;
      top: .8em;
    }
  }
`

export const ScoreContext = createContext();



export function Game() {
  const [score, setScore] = useState(0);
  const host = "http://localhost:8000";

  const endgame = async() => {
    console.log(score);
    const res = await fetch(host + "/add-score", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        score: score,
        name: localStorage.getItem("name"),
      }),
    }).then((res) => res.json());
    alert("Game Ended");
    // window.location.reload();

  }
  return (
    <ScoreContext.Provider
      value={{
        score,
        setScore,
      }}
    >
      <GameStyled>
        <Wrapper>
          <div className="Game-content">
            <Header />
            <Table />
            <Rules />
            <RulesStyled>
              <Button onClick={()=> endgame()} className="button">
                End Game
              </Button>
            </RulesStyled>
          </div>
        </Wrapper>
      </GameStyled>
    </ScoreContext.Provider>
  );
}

export default Game;
