const assert = require('assert').strict;
var Tracker = require('../app/models/trackerModel');
var Target = require('../app/models/targetModel');



describe('Tracker', function() {
  var atracker = new Tracker();
  // before(function(){
  //
  // })
  // after(function(){
  // })
  describe('getTargets', function() {
    it('should be an array', function() {
      assert(atracker.getTargets() instanceof Array);
    });
    it('should be empty', function() {
      assert(atracker.getTargets().length == 0);
    });
    it('should be have one element', function() {
      atracker.addTarget("Monday",100);
      assert(atracker.getTargets().length == 1);
    });
  });
  describe('addTarget', function() {
    beforeEach(function(){
      atracker.addTarget("Monday",100);
    })
    it('should an array', function() {
      assert(atracker.getTargets() instanceof Array);
    });
    it('should have one element', function() {
      assert.equal(atracker.getTargets().length,1);
    });
    it('should have one element of type Target', function() {
      assert(atracker.getTargets()[0] instanceof Target);
    });
    it('should have one element of type Target with day == "Monday"', function() {
      assert.equal(atracker.getTargets()[0].day,"Monday");
    });
    it('should have one element of type Target with number == 100', function() {
      assert.equal(atracker.getTargets()[0].number, 100);
    });
  });
});
