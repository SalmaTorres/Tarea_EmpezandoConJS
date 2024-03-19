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
    for (let i = 0; i < 20; i++) {
      game.roll(0);
    }
    expect(game.score()).toEqual(0);
  });

  it("debería devolver 20 para un juego de todos 1", () => {
    for (let i = 0; i < 20; i++) {
      game.roll(1);
    }
    expect(game.score()).toEqual(20);
  });
});