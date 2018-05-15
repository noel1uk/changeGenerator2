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
});