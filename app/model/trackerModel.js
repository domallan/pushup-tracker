var Target = require('./targetModel')

const weekday = new Array(7);
weekday[0] =  "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var Tracker = function(){
  this.name = "My Tracker";
  this.targets = [];
  this.created_at = new Date();
  console.log("New tracker creates: " + this.name + " at " + this.created_at)

  this.addTarget = function(day, number){
    var aTarget = new Target(day,number);
    this.targets.push(aTarget);
  };
  this.getTargets = function(){
    this.targets;
  }
  this.getName = function getName(){
    return this.name;
  }

  this.todaysTarget = function(){
    var today = null;
    var d = new Date();
    var daynum = d.getDay();
    console.log(weekday[daynum] + this.targets[0].day);
    for (var i = 0; i < this.targets.length ;i++) {
        var target = this.targets[i]
        console.log(target);
        if (target.day == weekday[daynum]){
          today = target;
          console.log("here");
        }
    }
    return today;
  }

};
module.exports= Tracker;
