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
            if (isStrike(frameIndex)) {
                score += 10 + strikeBonus(frameIndex);
                frameIndex++;
            } else if (isSpare(frameIndex)) {
                score += 10 + spareBonus(frameIndex);
                frameIndex += 2;
            } else {
                score += sumOfBallsInFrame(frameIndex);
                frameIndex += 2;
            }
        }
      return score;
    };

    function isStrike(frameIndex) {
        return rolls[frameIndex] === 10;
    }

    function sumOfBallsInFrame(frameIndex) {
        return rolls[frameIndex] + rolls[frameIndex + 1];
    }

    function spareBonus(frameIndex) {
        return rolls[frameIndex + 2];
    }

    function strikeBonus(frameIndex) {
        return rolls[frameIndex + 1] + rolls[frameIndex + 2];
    }
    function isSpare(frameIndex) {
        return rolls[frameIndex] + rolls[frameIndex + 1] === 10;
    }
  }

export default Game;