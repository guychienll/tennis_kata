import { TennisGame } from "./TennisKata";

let tennisGame;
describe("tennis kata", () => {
  beforeEach(() => {
    tennisGame = new TennisGame();
  });
  test("Love All", () => {
    expect(tennisGame.score()).toBe("Love All");
  });
  test("Fifteen Love", () => {
    firstPlayerGetScoreTimes(1);
    expect(tennisGame.score()).toBe("Fifteen Love");
  });

  test("Thirty Love", () => {
    firstPlayerGetScoreTimes(2);
    expect(tennisGame.score()).toBe("Thirty Love");
  });

  test("Forty Love", () => {
    firstPlayerGetScoreTimes(3);
    expect(tennisGame.score()).toBe("Forty Love");
  });
  test("Love Fifteen", () => {
    secondPlayerGetScoreTimes(1);
    expect(tennisGame.score()).toBe("Love Fifteen");
  });
  test("Love Thirty", () => {
    secondPlayerGetScoreTimes(2);
    expect(tennisGame.score()).toBe("Love Thirty");
  });
  test("Love Forty", () => {
    secondPlayerGetScoreTimes(3);
    expect(tennisGame.score()).toBe("Love Forty");
  });

  test("Fifteen All", () => {
    firstPlayerGetScoreTimes(1);
    secondPlayerGetScoreTimes(1);
    expect(tennisGame.score()).toBe("Fifteen All");
  });
  test("Thirty All", () => {
    firstPlayerGetScoreTimes(2);
    secondPlayerGetScoreTimes(2);
    expect(tennisGame.score()).toBe("Thirty All");
  });
  test("Deuce", () => {
    firstPlayerGetScoreTimes(3);
    secondPlayerGetScoreTimes(3);
    expect(tennisGame.score()).toBe("Deuce");
  });
  test("First Player Advantage", () => {
    firstPlayerGetScoreTimes(4);
    secondPlayerGetScoreTimes(3);
    expect(tennisGame.score()).toBe("First Player Advantage");
  });
  test("Second Player Advantage", () => {
    firstPlayerGetScoreTimes(3);
    secondPlayerGetScoreTimes(4);
    expect(tennisGame.score()).toBe("Second Player Advantage");
  });

  test("First Player Won", () => {
    firstPlayerGetScoreTimes(5);
    secondPlayerGetScoreTimes(3);
    expect(tennisGame.score()).toBe("First Player Won");
  });
  test("Second Player Won", () => {
    firstPlayerGetScoreTimes(3);
    secondPlayerGetScoreTimes(5);
    expect(tennisGame.score()).toBe("Second Player Won");
  });
});
function firstPlayerGetScoreTimes(times) {
  for (let index = 1; index <= times; index++) {
    tennisGame.firstPlayerGetScore();
  }
}
function secondPlayerGetScoreTimes(times) {
  for (let index = 1; index <= times; index++) {
    tennisGame.secondPlayerGetScore();
  }
}
