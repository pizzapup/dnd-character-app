const languages = [
  "Common",
  "Dwarvish",
  "Elvish",
  "Giant",
  "Gnomish",
  "Goblin",
  "Halfling",
  "Orc",
  "Abyssal",
  "Celestial",
  "Draconic",
  "Deep Speech",
  "Infernal",
  "Primordial",
  "Sylvan",
  "Undercommon",
];
const tools = {
  gaming_sets: {
    dice_set: {cost: 10, unit: "sp"},
    playing_card_set: {cost: 5, unit: "sp"},
    three_dragon_ante_set: {cost: 1, unit: "gp"},
    dragonchess_set: {cost: 1, unit: "gp"},
  },
  artisans_tools: {
    alchemists_supplies: {cost: 50, unit: "gp"},
    brewers_supplies: {cost: 20, unit: "gp"},
    calligraphers_supplies: {cost: 50, unit: "gp"},
    carpenters_tools: {cost: 8, unit: "gp"},
    cartographers_tools: {cost: 15, unit: "gp"},
    cobblers_tools: {cost: 5, unit: "gp"},
    cooks_utensils: {cost: 1, unit: "gp"},
    glassblowers_tools: {cost: 30, unit: "gp"},
    jewelers_tools: {cost: 25, unit: "gp"},
    leatherworkers_tools: {cost: 10, unit: "gp"},
    locksmiths_tools: {cost: 10, unit: "gp"},
    miners_tools: {cost: 10, unit: "gp"},
    stonecutters_tools: {cost: 10, unit: "gp"},
    smiths_tools: {cost: 20, unit: "gp"},
    painters_supplies: {cost: 10, unit: "gp"},
    potters_tools: {cost: 10, unit: "gp"},
    weavers_tools: {cost: 1, unit: "gp"},
    woodcarvers_tools: {cost: 1, unit: "gp"},
  },
  music: {
    bagpipes: {cost: 30, unit: "gp"},
    drum: {cost: 6, unit: "gp"},
    dulcimer: {cost: 25, unit: "gp"},
    flute: {cost: 2, unit: "gp"},
    lute: {cost: 35, unit: "gp"},
    lyre: {cost: 2, unit: "gp"},
    horn: {cost: 3, unit: "gp"},
    pan_flute: {cost: 1, unit: "gp"},
    shawm: {cost: 2, unit: "gp"},
    viol: {cost: 30, unit: "gp"},
  },
  other: {
    disguise_kit: {cost: 25},
    forgery_kit: {cost: 15},
    herbalism_kit: {cost: 5},
    navigators_tools: {cost: 25},
    poisoners_kit: {cost: 50},
    thieves_tools: {cost: 25},
  },
};
const gods = {
  desc: [
    "Many people in the worlds of D&D worship different gods at different times and circumstances. Some have a favorite among the gods, one whose ideals and teachings they make their own. A few dedicate themselves entirely to a single god, usually serving as a priest or champion of that god's ideals. ",
    "From among the gods available, you can choose a single deity for your character to serve, worship, or pay lip service to. Or you can pick a few that your character prays to most often. Or just make a mental note of the gods who are revered in your DM’s campaign so you can invoke their names when appropriate. If you’re playing a cleric or a character with the Acolyte background, decide which god your deity serves or served, and consider the deity’s suggested domains when selecting your character’s domain.",
  ],
  ranks: [
    {
      rank: "quasi-deities or hero deities",
      desc: "beings of this rank are immortal but usally cannot grant spells to worshippers",
    },
    {
      rank: "demigods",
      desc: "weakest of the deities; able to grant spells and perform a few deeds that are beyond mortal limits",
    },
    {
      rank: "lesser deities",
      desc: "can perform more powerful deeds than demigods and have keener senses where their portfolios are concerned",
    },
    {
      rank: "intermediate deities",
      desc: "control larger godly realms than demigods or lesser gods",
    },
    {
      rank: "greater deities",
      desc: "typically have millions of mortal worshippers. command respect even among other deities. some rule over pantheons of other deities",
    },
    {
      rank: "overdeities",
      desc: "beyond the understanding and knowledge of mortals and care nothing for worshippers",
    },
  ],
};

export {languages, tools, gods};
