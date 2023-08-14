import {useQuery} from "@apollo/client";
import {GET_STARTING_PROFICIENCIES} from "./queries";
import {useState} from "react";

export default function RaceProficiencies({race}) {
  const {loading, error, data} = useQuery(GET_STARTING_PROFICIENCIES, {
    variables: {name: race},
  });

  const [selectedOptions, setSelectedOptions] = useState([]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const raceData = data.races[0];
  const hasOptions = raceData.starting_proficiency_options ? true : false;
  let proficiencyOptions = [];
  if (hasOptions === true) {
    proficiencyOptions = raceData.starting_proficiency_options.from.options;
  }

  const handleOptionSelect = (event) => {
    const selectedOption = event.target.value;

    if (selectedOptions.length < raceData.starting_proficiency_options.choose) {
      setSelectedOptions((prevSelected) => [...prevSelected, selectedOption]);
    }
  };

  const handleRemoveOption = (optionToRemove) => {
    setSelectedOptions((prevSelected) =>
      prevSelected.filter((option) => option !== optionToRemove)
    );
  };

  return (
    <>
      <div>
        {raceData.starting_proficiencies && (
          <div>
            Proficiencies:
            {raceData.starting_proficiencies.map((proficiency, i) => {
              return (
                <div key={`proficiency-${race}-${i}`}>
                  <p>{proficiency.index}</p>
                  <p>{proficiency.type}</p>
                  <p>{proficiency.reference.desc}</p>
                </div>
              );
            })}
          </div>
        )}
      </div>
      {hasOptions && (
        <div>
          Proficiency Options:
          <p>Choose up to {raceData.starting_proficiency_options.choose}:</p>
          <select onChange={handleOptionSelect}>
            <option value="">Select an option</option>
            {proficiencyOptions.map((item, i) => (
              <option key={`option-${i}`} value={item.item.index}>
                {item.item.index}
              </option>
            ))}
          </select>
          {selectedOptions.length >=
            raceData.starting_proficiency_options.choose && (
            <div>
              <p>You have reached the maximum selections.</p>
              <p>Selected Options:</p>
            </div>
          )}
          <ul>
            {selectedOptions.map((selectedOption, i) => (
              <li key={`selected-option-${i}`}>
                {selectedOption}
                <button
                  style={{
                    border: "none",
                    background: "none",
                    padding: "0",
                    color: "red",
                  }}
                  onClick={() => handleRemoveOption(selectedOption)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
