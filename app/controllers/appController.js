'use strict';
var App = require('../model/appModel')
var Tracker = require('../model/trackerModel')
var trackerApp = new Tracker();
trackerApp.addTarget("Sunday",100);
trackerApp.addTarget("Monday",100);
trackerApp.addTarget("Tuesday",150);

exports.listTargets = function(req,res){
  res.send(trackerApp.targets)
}

exports.todaysTarget = function(req,res){
  res.send(trackerApp.todaysTarget())
  // console.log(App.getTargets());
}
