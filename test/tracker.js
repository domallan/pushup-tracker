const assert = require('assert').strict;
var Tracker = require('../app/models/trackerModel');
var Target = require('../app/models/targetModel');
var weekdays = new Array(7);
        weekdays[0] = "Sunday";
        weekdays[1] = "Monday";
        weekdays[2] = "Tuesday";
        weekdays[3] = "Wednesday";
        weekdays[4] = "Thursday";
        weekdays[5] = "Friday";
        weekdays[6] = "Saturday";
var d = new Date();
var dayNum = d.getDay();
var dayName = weekdays[dayNum];

describe('Tracker model', function() {
  var atracker = new Tracker();
  var day = "";
  var number = 0;
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
      day = "Monday";
      number = 100;
    })
    afterEach(function(){
      atracker.targets = [];
    })

    it('should an array', function() {
      assert(atracker.getTargets() instanceof Array);
    });
    it('should have be empty', function() {
      assert.equal(atracker.getTargets().length,0);
    });
    it('should return the new Target', function() {
      assert(atracker.addTarget(day,number) instanceof Target);
    });
    it('should have day == "Monday", number == 100 and dayNum == 1', function() {
      var target = atracker.addTarget(day,number);
      assert.equal(target.day,"Monday");
      assert.equal(target.number, 100);
      assert.equal(target.dayNum, 1);
    });

  });
  describe('getName', function() {
    it('should not have a null name ', function() {
      assert.ok(atracker.getName());
    });
    it('should have a name of "My Tracker"', function() {
      assert.equal(atracker.getName(),"My Tracker");
    });

  });
  describe('getItemByIndex', function() {
    it('should be return -1 with no elements ', function() {
      assert.equal(atracker.getItemByIndex(0),-1);
    });
    it('should get one Target with "Tuesday" and 5000 and dayNum 2', function() {
      atracker.addTarget("Tuesday",5000);
      var target = atracker.getItemByIndex(0);
      assert(target instanceof Target);
      assert.equal(target.day,"Tuesday");
      assert.equal(target.number,5000);
      assert.equal(target.dayNum,2);
    });

  });
  describe('todaysTarget', function() {
    it('should get one Target with day == "'+dayName +'" and 5000 and dayNum '+dayNum, function() {
      atracker.addTarget(dayName,5000);
      var target = atracker.todaysTarget();
      assert(target instanceof Target);
      assert.equal(target.day,dayName);
      assert.equal(target.number,5000);
      assert.equal(target.dayNum,dayNum);
    });

  });
  describe('addPushups', function() {
    beforeEach(function(){
      atracker.addTarget(dayName,5000);
    })
    it('should get one Target tracked number == 20', function() {
      var target = atracker.addPushups(20);
      assert.equal(target.tracked,20);
    });
    it('should get one Target tracked number == (20+20) 40', function() {
      var target = atracker.addPushups(20);
      assert.equal(target.tracked,40);
    });
    it('should get one Target tracked number == (40-10) 30', function() {
      var target = atracker.addPushups(-10);
      assert.equal(target.tracked,30);
    });
    it('should get one Target tracked number == 0 (30-50) capped at 0', function() {
      var target = atracker.addPushups(-50);
      assert.equal(target.tracked,0);
    });

  });

});
