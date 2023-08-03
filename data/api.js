import {gql, useQuery} from "@apollo/client";
import {useState} from "react";
const GET_RACES = gql`
  query Races($name: String) {
    races(name: $name) {
      name
      speed
      traits {
        name
        desc
      }
      starting_proficiencies {
        name
        type
      }
      starting_proficiency_options {
        desc
        choose
        from {
          option_set_type
          options {
            ... on ProficiencyReferenceOption {
              item {
                name
                type
                reference {
                  ... on Skill {
                    index
                  }
                }
              }
            }
          }
        }
      }
      language_desc
      languages {
        name
      }
      language_options {
        choose
        from {
          options {
            item {
              name
            }
          }
        }
      }
      ability_bonuses {
        bonus
        ability_score {
          name
        }
      }
      ability_bonus_options {
        choose
        from {
          options {
            option_type
            ability_score {
              name
            }
          }
        }
      }
    }
  }
`;
const GET_CLASSES = gql`
  query Classes($name: String) {
    classes(name: $name) {
      index
      name
      hit_die
      proficiencies {
        name
        type
      }
      proficiency_choices {
        choose
        desc
      }
      saving_throws {
        name
        desc
      }
      spellcasting {
        level
        info {
          name
          desc
        }
        spellcasting_ability {
          full_name
          index
          name
          desc
          skills {
            desc
            name
            ability_score {
              name
            }
          }
        }
      }
    }
  }
`;

export default function DndAPI({name}) {
  const {loading, error, data} = useQuery(GET_CLASSES, {
    variables: {name},
  });

  let [selectedClass, setSelectedClass] = useState(null);
  if (loading) return null;
  if (error) return `Error! ${error}`;
  return (
    <div>
      <DndRacesAPI />

      <div>
        {data.classes.map((dndClass) => {
          return (
            <button
              key={dndClass.name}
              onClick={() => {
                setSelectedClass(dndClass);
              }}
            >
              {dndClass.name} {dndClass.hit_die}
            </button>
          );
        })}
        {selectedClass && <DisplayDiv classData={selectedClass} />}
      </div>
    </div>
  );
}

export function DisplayDiv({classData}) {
  return (
    <div>
      <div>Name: {classData.name}</div>
      <div>Hit Die: {classData.hit_die}</div>{" "}
      <div>
        Proficiencies:{" "}
        {classData.proficiencies.map((proficiency) => (
          <p key={proficiency.name}>{proficiency.name}</p>
        ))}
      </div>
      <div>
        Proficiency Choices: {classData.proficiency_choices[0].choose}
        <br />
        Proficiency Choices Description:
        {classData.proficiency_choices[0].desc}
      </div>
    </div>
  );
}
export function DndRacesAPI({name}) {
  const {loading, error, data} = useQuery(GET_RACES, {
    variables: {name},
  });

  let [selectedRace, setSelectedRace] = useState(null);

  if (loading) return null;
  if (error) return `Error! ${error}`;
  return (
    <div style={{border: "1px solid black"}}>
      create buttons for each race. when button is clicked, dispay the text for
      the hit_die of the class in the div below the buttons.
      <div>
        {data.races.map((dndClass) => {
          return (
            <button
              key={dndClass.name}
              onClick={() => {
                setSelectedRace(dndClass);
              }}
            >
              {dndClass.name} {dndClass.hit_die}
            </button>
          );
        })}
        {selectedRace && <DisplayRacesDiv raceData={selectedRace} />}
      </div>
    </div>
  );
}

export function DisplayRacesDiv({raceData}) {
  let count = 0;
  return (
    <div>
      <div>Name: {raceData.name}</div>
      <div>
        Traits:
        {raceData.traits &&
          raceData.traits.map((trait) => (
            <div key={trait.name}>
              {trait.name} {trait.desc}
            </div>
          ))}
      </div>
      <div>
        Starting Proficiencies:
        {raceData.starting_proficiencies.map((proficiency) => (
          <div key={proficiency.name}>
            {proficiency.name} {proficiency.type}
          </div>
        ))}
      </div>
      <div>
        Abilities:
        <ul>
          {raceData.ability_bonuses.map((ability) => (
            <li key={ability.ability_score.name}>
              <>+ {ability.bonus}</>
              <> {ability.ability_score.name}</>
            </li>
          ))}
        </ul>
        <ul>
          {raceData.ability_bonus_options && (
            <>
              Ability Bonus Options: Choose{" "}
              {raceData.ability_bonus_options.choose} from:
              <br />
              <ul>
                {raceData.ability_bonus_options.from.options.map((option) => (
                  <li key={option.ability_score.name}>
                    {option.ability_score.name}
                  </li>
                ))}
              </ul>
            </>
          )}
        </ul>
      </div>
      {raceData.starting_proficiency_options && (
        <>
          Proficiencies:
          {raceData.starting_proficiency_options.choose}
          {raceData.starting_proficiency_options.from.options.map((option) =>
            option.item.type === "SKILLS" ? (
              <li key={option.item.name}>{option.item.reference.index}</li>
            ) : (
              <li key={option.item.name}>{option.item.name}</li>
            )
          )}
        </>
      )}
    </div>
  );
}
