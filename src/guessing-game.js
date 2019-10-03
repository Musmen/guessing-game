class GuessingGame {
  constructor() {
    _min: null;
    _max: null;

    _current: null;
  }

  setRange(min, max) {
    this._min = min;
    this._max = max;
  }

  guess() {
    this._current = Math.ceil((this._max - this._min) / 2) + this._min;
    return this._current;
  }

  lower() {
    this._max = this._current;
  }

  greater() {
    this._min = this._current;
  }
}

module.exports = GuessingGame;
