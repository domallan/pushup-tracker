'use strict';
var App = require('../models/appModel');
var Tracker = require('../models/trackerModel');
const app = new App();
var tracker = new Tracker();

tracker.addTarget("Sunday",100);
tracker.addTarget("Monday",100);
tracker.addTarget("Tuesday",150);
app.addTracker(tracker);

exports.listTrackers = function(req,res){
  res.send(app.getTrackers());
}

exports.getTracker = function(req,res){
  var tracker = app.getItemByIndex(req.params.tracker_index);
  res.send(tracker);
}

exports.listTargets = function(req,res){

  res.send(app.trackers[req.params.tracker_index].getTargets());
}

exports.getTarget = function(req,res){
  var tracker = app.getItemByIndex(req.params.tracker_index);
  var target = tracker.getItemByIndex(req.params.target_index)
  res.send(target);
}

exports.todaysTarget = function(req,res){
    res.send(app.trackers[0].todaysTarget());
}

exports.addPushups = function(req,res){
  var numPushups = req.query;
  res.send(app.trackers[0].addPushups(numPushups));
}
