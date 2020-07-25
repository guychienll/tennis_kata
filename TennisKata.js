export class TennisGame {
  _firstPlayerScore = 0;
  _secondPlayerScore = 0;
  _scoreLookup = new Map([
    [0, "Love"],
    [1, "Fifteen"],
    [2, "Thirty"],
    [3, "Forty"],
  ]);

  firstPlayerGetScore() {
    this._firstPlayerScore++;
  }
  secondPlayerGetScore() {
    this._secondPlayerScore++;
  }

  score() {
    if (this.whenScoreDiff()) {
      if (this.whenMatchPoint()) {
        const advantager = this.compare() ? "First" : "Second";
        if (this.whenAdvantagePoint()) {
          return `${advantager} Player Advantage`;
        }
        return `${advantager} Player Won`;
      }
      return `${this._scoreLookup.get(this._firstPlayerScore)} ${this._scoreLookup.get(this._secondPlayerScore)}`;
    }
    if (this.whenDuecePoint()) {
      return "Deuce";
    }
    return `${this._scoreLookup.get(this._firstPlayerScore)} All`;
  }

  whenDuecePoint() {
    return this._firstPlayerScore >= 3;
  }

  compare() {
    return this._firstPlayerScore > this._secondPlayerScore;
  }

  whenAdvantagePoint() {
    return Math.abs(this._firstPlayerScore - this._secondPlayerScore) === 1;
  }

  whenMatchPoint() {
    return this._firstPlayerScore > 3 || this._secondPlayerScore > 3;
  }

  whenScoreDiff() {
    return this._firstPlayerScore !== this._secondPlayerScore;
  }
}
