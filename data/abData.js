const abilityScores = {
  str: 0,
  dex: 0,
  con: 0,
  int: 0,
  wis: 0,
  cha: 0,
};

class GenerateScoresAndModifiers {
  constructor() {
    this.randomNumber = Math.floor(Math.random() * 6) + 1;
    this.rollResults = [];
    this.highestValues = this.findHighestValues();
    this.rollTotal = 0;
  }
  rollDie() {
    let rollResults = [];
    for (let i = 0; i < 4; i++) {
      rollResults.push(this.randomNumber);
    }
    this.rollResults = rollResults;
    this.rollScore = this.rollScore();
    console.log(this.rollScore, this.rollResults);
  }

  findHighestValues() {
    let highestValues = [];
    for (let i = 0; i < 3; i++) {
      let highestValue = Math.max(this.rollResults);
      highestValues.push(highestValue);
      this.rollResults.splice(this.rollResults.indexOf(highestValue), 1);
    }
    this.rollScore();
    return highestValues;
  }

  rollScore() {
    let total = 0;
    for (let i = 0; i < this.rollResults.length; i++) {
      total += this.rollResults[i];
    }
    this.rollTotal = total;
    return total;
  }
}
