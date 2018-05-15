class ChangeGenerator {
  
  change() {
    return '1 x 1p';
  }
  
  turnToNumber(stringValue) {
    let number = parseInt(stringValue.slice(0, -1));
    return number;
  }
  
  setChangeOwed(valueRecieved, valueReturned) {
    this.changeOwed = valueRecieved - valueReturned;
    console.log(this);
  }

}