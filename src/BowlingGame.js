function Game() {
    const rolls = new Array(21).fill(0); 
    let currentRoll = 0;

    this.roll = function(pins) {
        rolls[currentRoll++] = pins;
    };
  
    this.score = function() {
        let score = 0;
        for (let i = 0; i < rolls.length; i++) {
            score += rolls[i];
            }
      return score;
    };
  }

export default Game;