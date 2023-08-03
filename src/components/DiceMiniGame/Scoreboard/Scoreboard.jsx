import "./Scoreboard.css";

export default function Scoreboard({scores}) {
  return (
    <div className="display-scores">
      <div className="score-card final-scores">
        {/* <div className="final-scores-title">Scores:</div> */}
        <ul>
          {scores.map((score, i) => (
            <li key={`scoreKey-${i}-${score.score}`}>{score.score}</li>
          ))}
        </ul>
      </div>

      {scores.map((score, i) => (
        <div key={i} className="score-card">
          <ul>
            <li>
              <span>
                {i + 1}
                {nthNumber(i + 1)} Roll
              </span>{" "}
              <ul>
                {!score.isBlank &&
                  score.roll.map((roll, index) => (
                    <li
                      key={index}
                      style={{
                        background: index !== 3 ? "#F9EDE6" : "#eeeeee",
                      }}
                    >
                      {roll}
                    </li>
                  ))}
              </ul>
            </li>
            {!score.isBlank && (
              <>
                <li>
                  <span>Score</span> <div>{score.score}</div>
                </li>
                <li>
                  <span>Modifier</span>
                  <div>{score.modifier}</div>
                </li>
              </>
            )}
          </ul>
        </div>
      ))}
    </div>
  );
}
export const nthNumber = (number) => {
  const j = number % 10,
    k = number % 100;
  if (j === 1 && k !== 11) {
    return "st";
  }
  if (j === 2 && k !== 12) {
    return "nd";
  }
  if (j === 3 && k !== 13) {
    return "rd";
  }
  return "th";
};
