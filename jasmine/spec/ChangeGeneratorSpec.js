describe('ChangeGenerator', function() {
  let cg = new ChangeGenerator();

  describe('.change', function() {
    
    it('returns 1 x 1p when given 2p and 1p', function() {
      expect(cg.change('2p', '1p')).toEqual('1 x 1p');
    });
  });

  describe('.turnToNumber', function() {
  
    it('removes the last character of the string', function() {
      expect(cg.turnToNumber('1p')).toEqual(1);
    });
  });

  describe('.setChangeOwed', function() {
  
    it('takes 2 integers and sets the changeOwed property', function() {
      cg.setChangeOwed(2, 1);
      expect(cg.changeOwed).toEqual(1);
    });
  });

  describe('.highestPossibleReturn', function() {
    
    it('returns the highest possible value that is less then `changeOwed` from `denominations`', function() {
      expect(cg.highestPossibleReturn(4)).toEqual(2);
      expect(cg.highestPossibleReturn(2)).toEqual(2);
    });
  });

  describe('.coinIsInReturnedCoinChecker', function() {

    afterEach(function() {
      cg.collectedCoins = {};
    });

    it("returns false when coin hasn't already been added to the collectedCoins property", function() {
      expect(cg.coinIsInReturnedCoinChecker(2)).toEqual(false);
    });
    it('returns true when coin is in the collectedCoins property', function() {
      cg.collectedCoins[2] = 1;
      expect(cg.coinIsInReturnedCoinChecker(2)).toEqual(true);
    });
  });

  describe('.addCoin', function() {

    afterEach(function() {
      cg.collectedCoins = {};
    });
    
    it('adds a coin to the collectedCoins', function() {
      cg.addCoin(2);
      expect(cg.collectedCoins[2]).toEqual(1);
    });
    it('increments the value when coin is already in collectedCoins', function() {
      cg.addCoin(2);
      cg.addCoin(2);
      expect(cg.collectedCoins[2]).toEqual(2);
    });
    it('deducts the coin value it adds from the changeOwed property', function() {
      cg.changeOwed = 1;
      cg.addCoin(1);
      expect(cg.changeOwed).toEqual(0);
    });
  });

  describe('.returnChange', function() {
    cg2 = new ChangeGenerator();
    cg2.collectedCoins = {2: 1}
    it('returns the value and coin quantity in the correct format', function() {
      expect(cg2.returnChange()).toEqual('1 x 2p');
    });
    cg2.collectedCoins = {2: 2}
    it('returns the correct values', function() {
      expect(cg2.returnChange()).toEqual('2 x 2p');
    });
  });
});