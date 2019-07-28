const weekday = new Array(7);
weekday["Sunday"] =  0;
weekday["Monday"] = 1;
weekday["Tuesday"] = 2;
weekday["Wednesday"] = 3;
weekday["Thursday"] = 4;
weekday["Friday"] = 5;
weekday["Saturday"] = 6;

var Target = function(day,number){
  this.day = day;
  this.number = number;
  this.tracked = 0;
  this.dayNum = weekday[day];
};

module.exports= Target;
