import React, {useState} from "react";
import styled from "@emotion/styled";
import Dice from "../Dice/Dice";
import Scoreboard from "../Scoreboard/Scoreboard";
import {Box, Button, TextField, Tooltip} from "@mui/material";

const RollContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const StyledTextField = styled(TextField)`
  margin: 0px;
  padding: 0px;
  width: 60px;

  &:focus {
    border-radius: 5px;
    border-color: #3f51b5;
  }

  &:hover {
    border-radius: 5px;
    border-color: #757de8;
  }
`;

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  width: 50px;
  padding: 4px;
`;
const DiceValueInput = styled.div`
  display: flex;
  gap: 25px;
  justify-content: center;
  flex-wrap: wrap;
`;

const blankScore = {
  isBlank: true,
  count: "1st",
  score: 0,
  modifier: 0,
  highestValues: [0, 0, 0],
  roll: [0, 0, 0, 0],
};

export function ManualRoll() {
  const [manualInputValues, setManualInputValues] = useState([
    "4",
    "6",
    "2",
    "3",
  ]);
  const [scores, setScores] = useState(Array(6).fill(blankScore));
  const [isAnimating, setIsAnimating] = useState(false);

  const generateRandomNumber = () => Math.floor(Math.random() * 6) + 1;

  const updateScores = (roll) => {
    animate(800);
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

  const handleInputChange = (event, index) => {
    const value = event.target.value;
    setManualInputValues((prevNumbers) => {
      const newNumbers = [...prevNumbers];
      newNumbers[index] = value;
      return newNumbers;
    });
  };

  function animate(timeout) {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
    }, timeout);
  }

  const handleSubmitManual = () => {
    if (
      scores.some((score) => score.isBlank) &&
      manualInputValues.every((num) => num !== "")
    ) {
      const enteredNumbers = manualInputValues.map((num) => parseInt(num, 10));
      if (enteredNumbers.every((num) => !isNaN(num) && num >= 1 && num <= 6)) {
        const roll = enteredNumbers.slice(0, 4);
        updateScores(roll);
      }
    }
  };

  const handleSubmitRandom = () => {
    animate(2000);
    if (scores.some((score) => score.isBlank)) {
      const roll = Array.from({length: 4}, generateRandomNumber);
      setManualInputValues(roll.map(String));
    }
  };

  const renderInputRolls = () => {
    return (
      <DiceValueInput>
        {manualInputValues.map((num, index) => (
          <StyledLabel key={index}>
            <StyledTextField
              variant="standard"
              type="number"
              value={num}
              onChange={(event) => handleInputChange(event, index)}
              min="1"
              max="6"
            />
            Die {index + 1}
          </StyledLabel>
        ))}
      </DiceValueInput>
    );
  };

  return (
    <div>
      <Dice diceValues={manualInputValues} isAnimating={isAnimating} />
      <RollContainer>
        {renderInputRolls()}
        <Box sx={{display: "flex", justifyContent: "center", gap: 2, m: 2}}>
          <Tooltip title="Add to scoreboard">
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmitManual}
            >
              Submit & Calculate
            </Button>
          </Tooltip>
          <Tooltip title="Generate random values">
            <Button
              variant="contained"
              color="secondary"
              onClick={handleSubmitRandom}
            >
              Roll Dice
            </Button>
          </Tooltip>
        </Box>
      </RollContainer>
      <Scoreboard scores={scores} />
    </div>
  );
}
