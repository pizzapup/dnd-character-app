import React, {useState} from "react";
import "./DiceMiniGame.css";
import Dice from "./Dice/Dice";
import Scoreboard from "./Scoreboard/Scoreboard";
import {ManualRoll, RandomRoll, ToggleRollMethod} from "./Roll/Roll";
const blankScore = {
  isBlank: true,
  count: "1st",
  score: 0,
  modifier: 0,
  highestValues: [0, 0, 0],
  roll: [0, 0, 0, 0],
};

const DiceMiniGame = () => {
  const [scores, setScores] = useState(Array(6).fill(blankScore));
  const [manualInputValues, setManualInputValues] = useState(["", "", "", ""]);
  const [useRandomRoll, setUseRandomRoll] = useState(true);
  const [diceValues, setDiceValues] = useState([6, 5, 4, 3]);

  const generateRandomNumber = () => Math.floor(Math.random() * 6) + 1;

  const updateScores = (roll) => {
    setDiceValues(roll);
    const highestValues = roll.sort((a, b) => b - a).slice(0, 3);
    const score = highestValues.reduce((acc, curr) => acc + curr, 0);
    const modifier = Math.floor((score - 10) / 2);
    const newScores = [...scores];
    const nullIndex = newScores.findIndex((score) => score.isBlank);
    newScores[nullIndex] = {
      ...blankScore,
      roll: roll,
      highestValues: highestValues,
      score: score,
      modifier: modifier,
      isBlank: false,
    };
    setScores(newScores);
  };
  const [isAnimating, setIsAnimating] = useState(false);

  function animate() {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
    }, 2000);
  }

  const handleSubmitRandom = async () => {
    animate();
    if (scores.some((score) => score.isBlank)) {
      const roll = Array.from({length: 4}, generateRandomNumber);
      updateScores(roll);
    }
  };

  const handleManualInputChange = (event, index) => {
    const value = event.target.value;
    setManualInputValues((prevNumbers) => {
      const newNumbers = [...prevNumbers];
      newNumbers[index] = value;
      return newNumbers;
    });
  };

  const handleSubmitManual = async () => {
    animate();
    if (
      scores.some((score) => score.isBlank) &&
      manualInputValues.every((num) => num !== "")
    ) {
      const enteredNumbers = manualInputValues.map((num) => parseInt(num, 10));

      if (enteredNumbers.every((num) => !isNaN(num) && num >= 1 && num <= 6)) {
        const roll = enteredNumbers.slice(0, 4);
        updateScores(roll);
        setManualInputValues(["", "", "", ""]);
      }
    }
  };

  const handleToggleChange = () => {
    setUseRandomRoll((prevState) => !prevState);
  };

  return (
    <div className="container">
      <div className="form-header">
        <h1>Roll for Scores</h1>

        <Dice isAnimating={isAnimating} diceValues={diceValues} />
        <div className="form-container">
          <ToggleRollMethod
            useRandomRoll={useRandomRoll}
            handleToggleChange={handleToggleChange}
          />
          {useRandomRoll ? (
            <RandomRoll handleSubmitRandom={handleSubmitRandom} />
          ) : (
            <ManualRoll
              manualInputValues={manualInputValues}
              handleInputChange={handleManualInputChange}
              handleSubmitManual={handleSubmitManual}
            />
          )}
        </div>
      </div>
      <Scoreboard scores={scores} />
    </div>
  );
};

export default DiceMiniGame;
