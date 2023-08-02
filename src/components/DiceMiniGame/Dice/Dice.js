import React, {useEffect} from "react";
import "./Dice.css";

const dotsOrders = {
  1: [0, 0, 0, 0, 1, 0, 0, 0, 0],
  2: [0, 0, 1, 0, 0, 0, 1, 0, 0],
  3: [0, 0, 1, 0, 1, 0, 1, 0, 0],
  4: [1, 0, 1, 0, 0, 0, 1, 0, 1],
  5: [1, 0, 1, 0, 1, 0, 1, 0, 1],
  6: [1, 1, 1, 0, 0, 0, 1, 1, 1],
};
const Dice = ({diceValues = [6, 5, 4, 3], isAnimating = false}) => {
  return (
    <div className="dice">
      {diceValues.map((die, index) => (
        <div
          key={index}
          className={`die ${isAnimating === true ? "roll" : ""}`}
        >
          {dotsOrders[die].map((dot, index) => (
            <div key={index} className={dot === 1 ? "dot" : ""} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Dice;
