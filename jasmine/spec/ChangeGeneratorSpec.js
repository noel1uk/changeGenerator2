describe('ChangeGenerator', function() {

  describe('.change', function() {
    let cg = new ChangeGenerator();
    
    it('returns 1 x 1p when given 2p and 1p', function() {
      expect(cg.change('2p', '1p')).toEqual('1 x 1p');
    });
  });
});