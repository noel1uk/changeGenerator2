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
});