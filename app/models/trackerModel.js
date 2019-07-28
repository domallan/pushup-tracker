var Target = require('./targetModel')

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
    return this.targets;
  }
  this.getName = function getName(){
    return this.name;
  }
  this.getItemByIndex = function(index){
    return this.targets[index];
  }

  this.todaysTarget = function(){
    var today = null;
    var d = new Date();
    var dayNum = d.getDay();
    for (var i = 0; i < this.targets.length ;i++) {
        var target = this.targets[i]
        if (target.dayNum == dayNum){
          today = target;
        }
    }
    return today;
  }

};
module.exports= Tracker;
