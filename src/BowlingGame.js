function Game() {
    let score = 0;
    const rolls = [];
  
    this.roll = function(pins) {
      rolls.push(pins);
      score += pins;
    };
  
    this.score = function() {
      return score;
    };
  }

export default Game;