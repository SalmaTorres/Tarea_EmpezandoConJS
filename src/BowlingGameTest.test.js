import Game from "./BowlingGame.js";

describe("BowlingGame", () => {
    let game;
  
    beforeEach(() => {
      game = new Game();
    });
  
    it("debería crear una instancia de Game", () => {
      expect(game instanceof Game).toEqual(true);
    });
  
    it("debería devolver 0 para un juego sin lanzamientos", () => {
      rollMany(20, 0);
      expect(game.score()).toEqual(0);
    });
  
    it("debería devolver 20 para un juego de todos 1", () => {
      rollMany(20, 1);
      expect(game.score()).toEqual(20);
    });

    it("debería devolver 16 para un juego con un solo spare", () => {
        game.roll(5);
        game.roll(5); // spare
        game.roll(3);
        rollMany(17, 0);
        expect(game.score()).toEqual(16);
    });

    it("debería devolver 16 para un juego con un solo spare", () => {
        rollSpare();
        game.roll(3);
        rollMany(17, 0);
        expect(game.score()).toEqual(16);
    });

    it("debería devolver 24 para un juego con un solo strike", () => {
        game.roll(10)
        game.roll(3);
        game.roll(4);
        rollMany(16, 0);
        expect(game.score()).toEqual(24);
    });

    it("debería devolver 24 para un juego con un solo strike", () => {
        rollStrike();
        game.roll(3);
        game.roll(4);
        rollMany(16, 0);
        expect(game.score()).toEqual(24);
    });

    it("debería devolver 300 para un juego perfecto", () => {
        rollMany(12, 10);
        expect(game.score()).toEqual(300);
    });

    function rollStrike() {
        game.roll(10);
    }
  
    function rollMany(n, pins) {
      for (let i = 0; i < n; i++) {
        game.roll(pins);
      }
    }

    function rollSpare() {
        game.roll(5);
        game.roll(5);
    }
  });