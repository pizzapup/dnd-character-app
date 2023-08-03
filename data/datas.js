import {useQuery, gql} from "@apollo/client";

export const GET_RACES = gql`
  query Races {
    races {
      index
      name
    }
  }
`;
export const GET_RACE_INFO = gql`
  query Races($name: String, $subracesName2: String) {
    races(name: $name) {
      index
      name
      ability_bonuses {
        bonus
        ability_score {
          index
          name
        }
      }

      traits {
        index
        name
        proficiencies {
          type
          index
          name
        }
        proficiency_choices {
          type
          choose
          from {
            options {
              ... on ProficiencyReferenceOption {
                item {
                  type
                  index
                  name
                }
              }
              ... on ProficiencyChoiceOption {
                choice {
                  type
                  choose
                }
              }
            }
          }
        }
        desc
      }
      ability_bonus_options {
        choose
        from {
          options {
            bonus
            ability_score {
              index
            }
          }
        }
      }
      starting_proficiencies {
        type
        index
        name
      }
      starting_proficiency_options {
        desc
        choose
        from {
          options {
            ... on ProficiencyReferenceOption {
              item {
                index
                name
              }
            }
            ... on ProficiencyChoiceOption {
              choice {
                type
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
        }
      }
      subraces(name: $subracesName2) {
        index
        name
        ability_bonuses {
          bonus
          ability_score {
            index
          }
        }
        racial_traits {
          index
          desc
          proficiencies {
            index
            type
          }
          proficiency_choices {
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
    }
  }
`;
