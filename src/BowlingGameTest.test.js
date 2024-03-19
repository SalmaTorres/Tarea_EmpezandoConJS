import Game from "./BowlingGame.js";

describe("BowlingGame", () => {
  it("debería crear una instancia de Game", () => {
    const game = new Game();
    expect(game instanceof Game).toEqual(true);
  });
  it("debería devolver 0 para un juego sin lanzamientos", () => {
    const game = new Game();
    for (let i = 0; i < 20; i++) {
      game.roll(0);
    }
    expect(game.score()).toEqual(0);
  });
});