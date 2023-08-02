import React, {useState} from "react";
import {useQuery} from "@apollo/client";
import {GET_RACES, GET_RACE_INFO} from "./data/datas";

const Races = () => {
  let [selectedRace, setSelectedRace] = useState(`Elf`);
  const queryRaces = useQuery(GET_RACES);
  const queryRace = useQuery(GET_RACE_INFO, {
    variables: {name: selectedRace},
  });

  if (queryRace.loading) return <p>Loading...</p>;
  if (queryRace.error) return <p>Error: {queryRace.error.message}</p>;

  return (
    <div>
      <h1>DnD 5e Character Generation App</h1>
      <h2>Character Races</h2>
      <div>Selected Race: {selectedRace}</div>
      <ul>
        {queryRaces.data.races.map((race) => (
          <li key={race.index}>
            <button onClick={() => setSelectedRace(race.name)}>
              {race.name}
            </button>
          </li>
        ))}
      </ul>
      {queryRace.data.races.map(
        (race) =>
          race.name === selectedRace && (
            <div key={race.index}>
              <PlugInData data={race} />
            </div>
          )
      )}
    </div>
  );
};
export function PlugInData({data}) {
  return (
    <>
      {data.name}
      <div>
        {data.ability_bonuses.map((bonus) => (
          <div key={bonus.ability_score.name}>
            + {bonus.bonus} {bonus.ability_score.name}
          </div>
        ))}
        {data.traits.map((trait) => (
          <div>
            <b>{trait.name}</b>
            {trait.desc}
            <hr />
            {trait.proficiencies.map((proficiency) => (
              <div key={proficiency.name}>
                {proficiency.type} {proficiency.name}
              </div>
            ))}
            {trait.proficiency_choices !== null &&
              console.log(trait.proficiency_choices)}
            )
          </div>
        ))}
      </div>
    </>
  );
}
