import React from "react";
import "./DiceMiniGame.css";
import {ManualRoll} from "./Roll/Roll";

const DiceMiniGame = () => {
  return (
    <div className="container">
      <div className="form-header">
        <h1 style={{textAlign: "center", margin: 5, padding: 5}}>
          Roll for Scores
        </h1>

        <div style={{minHeight: "150px"}}>
          <ManualRoll />
        </div>
      </div>
    </div>
  );
};

export default DiceMiniGame;
