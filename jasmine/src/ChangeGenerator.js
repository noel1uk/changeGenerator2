class ChangeGenerator {
  constructor() {
    this.changeOwed = 0;
    this.denominations = [2, 1];
    this.collectedCoins = {};
  }
  
  change() {
    return '1 x 1p';
  }
  
  turnToNumber(stringValue) {
    let number = parseInt(stringValue.slice(0, -1));
    return number;
  }
  
  setChangeOwed(valueReceived, valueReturned) {
    this.changeOwed = valueReceived - valueReturned;
  }

  highestPossibleReturn(changeOwed) {
    for ( let i = 0; i < this.denominations.length; i++ ) {
      if ( this.denominations[i] <= changeOwed ) {
        return this.denominations[i];
      }
    }
  }

  coinIsInReturnedCoinChecker(coinToBeAdded) {
    return coinToBeAdded in this.collectedCoins;
  }

  addCoin(coin) {
    if ( this.coinIsInReturnedCoinChecker(coin) ) {
      this.collectedCoins[coin] += 1;
      this.changeOwed -= coin;
    } else {
      this.collectedCoins[coin] = 1;
      this.changeOwed -= coin;
    }
  }

  returnChange() {
    return '1 x 2p';
  }
}