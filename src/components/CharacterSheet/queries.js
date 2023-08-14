import {gql} from "@apollo/client";
export const GET_ABILITY_BONUSES = gql`
  query Query($name: String) {
    races(name: $name) {
      index
      ability_bonuses {
        ability_score {
          index
        }
        bonus
      }
      ability_bonus_options {
        choose
        from {
          options {
            bonus
            ability_score {
              name
            }
          }
        }
      }
    }
  }
`;

export const GET_STARTING_PROFICIENCIES = gql`
  query Query($name: String) {
    races(name: $name) {
      index
      starting_proficiencies {
        index
        type
        reference {
          ... on Skill {
            index
            desc
            ability_score {
              index
            }
          }
        }
      }
      starting_proficiency_options {
        desc
        choose
        from {
          options {
            ... on ProficiencyReferenceOption {
              item {
                index
              }
            }
          }
        }
      }
    }
  }
`;
