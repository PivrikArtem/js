const map = require('./map');
var assert = require('assert');


describe('map', function () {

    describe('#maxPoint()', function (done) {
        
        it('map is an object ', function() {
            assert.equal(typeof map,'object');
          });
          it('northPoint is should be Seattle, WA ', function() {
console.log(map);
            assert.equal( map.maxPoint().n, 'Seattle, WA');
          });
          (done);
        
               
    })
});
