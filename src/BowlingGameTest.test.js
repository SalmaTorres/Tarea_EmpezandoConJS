import Game from "./BowlingGame.js";

describe("BowlingGame", () => {
  it("debería crear una instancia de Game", () => {
    const game = new Game();
    expect(game instanceof Game).toEqual(true);
  });
});