function Game() {
    const rolls = [];
  
    this.roll = function(pins) {
      rolls.push(pins);
    };
  
    this.score = function() {
      return rolls.reduce((total, pins) => total + pins, 0);
    };
  }

export default Game;