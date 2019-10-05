'use strict';
const Tracker = require('../models/trackerModel.js');


Tracker.todaysTarget = function(req,res){
    res.send(app.trackers[0].todaysTarget());
}

Tracker.addPushups = function(req,res){
  console.log(req.query);
  var numPushups = req.query.num;

  res.send(app.getItemByIndex(req.params.tracker_index).addPushups(numPushups));
}

module.exports = Tracker;
