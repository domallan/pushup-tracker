var Target = require('./targetModel')

const Tracker = function(){
  this.name = "My Tracker";
  this.targets = [];
  this.created_at = new Date();
  console.log("New tracker created: " + this.name + " at " + this.created_at)

  this.addTarget = function(day, number){
    var exists = false;
    var aTarget = new Target(day,number);
    for (var i = 0; i < this.targets.length;i++){
      if(aTarget.dayNum == this.targets[i].dayNum){
        exists = true;
        break;
      }
    }
    if(exists){
      return null;
    }
    else{
      this.targets.push(aTarget);
      return this.targets[this.targets.length-1];
    }
    return null;
  };
  this.getTargets = function(){
    return this.targets;
  }
  this.getName = function getName(){
    return this.name;
  }
  this.getItemByIndex = function(index){
    if(this.targets[index]){
      return this.targets[index];
    }
    else {
      return -1;
    }
  }

  this.todaysTarget = function(){
    var today = null;
    var d = new Date();
    var dayNum = d.getDay();
    for (var i = 0; i < this.targets.length ;i++) {
        var target = this.targets[i]
        if (target.dayNum == dayNum){
          today = i;
        }
    }
    return this.targets[today];
  }

  this.addPushups = function(num){
    this.todaysTarget().addPushups(parseInt(num));
    return this.todaysTarget();
  }

};
module.exports = Tracker;
