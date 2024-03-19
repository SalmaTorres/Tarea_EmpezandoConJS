function Game() {
    const rolls = new Array(21).fill(0); 
    let currentRoll = 0;

    this.roll = function(pins) {
        rolls[currentRoll++] = pins;
    };
  
    this.score = function() {
        let score = 0;
        let i = 0;
        for (let frame = 0; frame < 10; frame++) {
            if (rolls[i] + rolls[i + 1] === 10) { // spare
                score += 10 + rolls[i + 2];
                i += 2;
            } else {
                score += rolls[i] + rolls[i + 1];
                i += 2;
            }
        }
      return score;
    };
  }

export default Game;