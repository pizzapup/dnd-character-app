import React from "react";
import {useQuery, gql} from "@apollo/client";

const GET_CHARACTER_CLASSES = gql`
  query {
    classes {
      index
      name
      proficiencies {
        name
        type
      }
    }
  }
`;

const Classes = () => {
  const {loading, error, data} = useQuery(GET_CHARACTER_CLASSES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const characterClasses = data.classes;
  console.log(characterClasses);
  return (
    <div>
      <h1>DnD 5e Character Generation App</h1>
      <h2>Character Classes</h2>
      <ul>
        {characterClasses.map((characterClass) => (
          <li key={characterClass.name}>
            <h3>{characterClass.name}</h3>
            <p>Index: {characterClass.index}</p>
            <p>Proficiencies:</p>
            {characterClass.proficiencies.map((proficiency) => (
              <p key={proficiency.name}>{proficiency.name}</p>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Classes;
