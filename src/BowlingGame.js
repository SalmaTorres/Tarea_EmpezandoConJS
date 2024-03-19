function Game() {
    const rolls = new Array(21).fill(0); 
    let currentRoll = 0;

    this.roll = function(pins) {
        rolls[currentRoll++] = pins;
    };
  
    this.score = function() {
        let score = 0;
        let frameIndex = 0;
        for (let frame = 0; frame < 10; frame++) {
            if (rolls[frameIndex] === 10) { // strike
                score += 10 + rolls[frameIndex + 1] + rolls[frameIndex + 2];
                frameIndex++;
            } else if (isSpare(frameIndex)) {
                score += 10 + rolls[frameIndex + 2];
                frameIndex += 2;
            } else {
                score += rolls[frameIndex] + rolls[frameIndex + 1];
                frameIndex += 2;
            }
        }
      return score;
    };

    function isSpare(frameIndex) {
        return rolls[frameIndex] + rolls[frameIndex + 1] === 10;
    }
  }

export default Game;