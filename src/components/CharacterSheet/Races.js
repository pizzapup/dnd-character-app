import React, {useState} from "react";
import {useQuery, gql} from "@apollo/client";
import {GET_ABILITY_BONUSES} from "./queries";
import RaceProficiencies from "./RaceProficiencies";

function AbilityBonusOptions({race}) {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionSelect = (event) => {
    const selectedOptionName = event.target.value;
    const selectedOption = race.ability_bonus_options.from.options.find(
      (option) => option.ability_score.name === selectedOptionName
    );

    setSelectedOptions((prevSelected) => {
      const isSelected = prevSelected.some(
        (selected) => selected.ability_score.name === selectedOptionName
      );

      if (
        !isSelected &&
        prevSelected.length < race.ability_bonus_options.choose
      ) {
        return [...prevSelected, selectedOption];
      } else if (isSelected) {
        return prevSelected.filter(
          (selected) => selected.ability_score.name !== selectedOptionName
        );
      }

      return prevSelected;
    });
  };

  return (
    <div>
      <h3>Ability Bonus Options:</h3>
      <p>Choose {race.ability_bonus_options.choose} from:</p>
      <select
        multiple
        value={selectedOptions.map((option) => option.ability_score.name)}
        onChange={handleOptionSelect}
      >
        {race.ability_bonus_options.from.options.map((option) => (
          <option
            key={`key-option-${option.ability_score.name}`}
            value={option.ability_score.name}
            disabled={
              selectedOptions.length >= race.ability_bonus_options.choose &&
              !selectedOptions.some(
                (selected) =>
                  selected.ability_score.name === option.ability_score.name
              )
            }
          >
            {option.ability_score.name}
          </option>
        ))}
      </select>
      {selectedOptions.length >= race.ability_bonus_options.choose && (
        <p style={{color: "red"}}>You have reached the maximum selections.</p>
      )}
      <p>Selected Bonuses:</p>
      <ul>
        {selectedOptions.map((selectedOption) => (
          <li key={selectedOption.ability_score.name}>
            {selectedOption.ability_score.name}: +{selectedOption.bonus}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Races({race}) {
  return (
    <div>
      <h2>Race Details</h2>
      <p>Index: {race.index}</p>
      <p>Ability Bonuses:</p>
      {console.log(race.ability_bonuses)}
      {race.ability_bonuses.map((bonus, i) => {
        return (
          <li key={`ab-li-key-${i}`}>
            {bonus.ability_score.index}: {bonus.bonus}
          </li>
        );
      })}
      {race.ability_bonus_options && <AbilityBonusOptions race={race} />}
    </div>
  );
}

export default function RaceDetails() {
  const [selectedRace, setSelectedRace] = useState(`Elf`);
  const races = [
    "dragonborn",
    "dwarf",
    "elf",
    "gnome",
    "half-elf",
    "half-orc",
    "halfling",
    "human",
    "tiefling",
  ];

  const {loading, error, data} = useQuery(GET_ABILITY_BONUSES, {
    variables: {name: selectedRace},
  });

  function handleChange(e) {
    e.preventDefault();
    setSelectedRace(e.target.value);
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const race = data.races[0];

  return (
    <>
      <div>
        Race: {selectedRace}
        <fieldset>
          <legend> Choose a race:</legend>
          {races.map((race, i) => {
            return (
              <label htmlFor={race} key={`race-${race}-option`}>
                <input
                  type="radio"
                  name="raceSelection"
                  value={race}
                  onChange={handleChange}
                />
                {race}
              </label>
            );
          })}
        </fieldset>
      </div>
      <RaceProficiencies race={selectedRace} />
      <Races race={race} />
    </>
  );
}
