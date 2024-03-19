function Game() {
    let score = 0;
    const rolls = new Array(21).fill(0); 
    let currentRoll = 0;

    this.roll = function(pins) {
    score += pins;
    rolls[currentRoll++] = pins;
    };
  
    this.score = function() {
      return score;
    };
  }

export default Game;