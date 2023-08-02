// components/DiceMiniGame/Roll/Roll.js
import React, {useState} from "react";
import "./Roll.css";

export function ToggleRollMethod({useRandomRoll, handleToggleChange}) {
  return (
    <div>
      <label>
        <input
          type="radio"
          checked={useRandomRoll}
          onChange={handleToggleChange}
        />
        Random Roll
      </label>
      <label>
        <input
          type="radio"
          checked={!useRandomRoll}
          onChange={handleToggleChange}
        />
        Manual Roll
      </label>
    </div>
  );
}

export function RandomRoll({handleSubmitRandom}) {
  return (
    <div className="input-roll-button-container">
      <div className="random-roll-content"></div>
      <button onClick={handleSubmitRandom}>Roll Dice</button>
    </div>
  );
}

export function ManualRoll({
  manualInputValues,
  handleInputChange,
  handleSubmitManual,
}) {
  return (
    <div className="input-roll">
      <div className="input-roll-fields">
        {manualInputValues.map((num, index) => (
          <label key={index}>
            <input
              type="number"
              value={num}
              onChange={(event) => handleInputChange(event, index)}
              placeholder={`Enter roll`}
            />
            Die {index + 1}
          </label>
        ))}
      </div>
      <div className="input-roll-button-container">
        <button className="input-roll-button" onClick={handleSubmitManual}>
          Submit Roll Values
        </button>
      </div>
    </div>
  );
}
