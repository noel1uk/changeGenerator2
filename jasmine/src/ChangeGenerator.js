class ChangeGenerator {
  constructor() {
    this.changeOwed = 0;
    this.denominations = [2, 1]
  }
  
  change() {
    return '1 x 1p';
  }
  
  turnToNumber(stringValue) {
    let number = parseInt(stringValue.slice(0, -1));
    return number;
  }
  
  setChangeOwed(valueRecieved, valueReturned) {
    this.changeOwed = valueRecieved - valueReturned;
  }

  highestPossibleReturn(changeOwed) {
    for ( let i = 0;; i++ ) {
      if ( this.denominations[i] <= changeOwed ){
        return this.denominations[i];
      }
    }
  }
}