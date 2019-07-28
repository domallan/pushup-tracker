

var AppTracker = function(user){
    this.name = 'Push-up tracker';
    this.version = '0.1';
    this.trackers = [];

    this.addTracker = function(tracker){
      this.trackers.push(tracker);
    }

    this.getTrackers = function(){
      return this.trackers;
    }
    this.getItemByIndex = function(index){
      return this.trackers[index];
    }
}

module.exports = AppTracker;