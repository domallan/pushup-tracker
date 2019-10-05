'use strict';

const Tracker = require('../models/trackerModel');
const db = require('../models/dbModel');
const dbname = 'pushup-tracker';
const err = require('../models/errorModel')
var tracker = new Tracker();

module.exports = function(app){
  app.trackers = [];

  app.addTracker = function(req,res){
    var tracker = new Tracker();
    this.trackers.push(tracker);
    res.send(tracker);
  }

  app.addTargetItem = function(tracker_index,day,number){
    var newTarget = this.trackers[tracker_index].addTarget(day,number);
    if (newTarget == null){
      return 'Target already exists';
    }
    else {
      return newTarget;
    }
  }

  app.getTrackers = function(viewUrl){
    return db.getRequest(viewUrl);
  }
  app.getItemByIndex = function(index){
    return this.trackers[index];
  }

  app.listTrackers = function(req,res){
    var viewUrl = '_design/trackers/_view/trackers/';
    // res.render('trackers');
    db.get(dbname,viewUrl).then(({data, header, status}) =>{
        console.log(data.rows[1]);
        res.render('trackers',{data:data.rows});
      },err => {
        res.send(err);
      }
    ).catch(err.errorHandler);
  }

  app.getTracker = function(req,res){
    var tracker = this.getItemByIndex(req.params.tracker_index);
    res.send(tracker);
  }

  app.listTargets = function(req,res){
    res.send(this.trackers[req.params.tracker_index].getTargets());
  }

  app.addTarget = function(req,res){
    var index = req.params.tracker_index;
    var day = req.query.day;
    var number = parseInt(req.query.number);
    res.send(this.addTargetItem(index,day,number));
  }

  app.getTarget = function(req,res){
    var tracker = this.getItemByIndex(req.params.tracker_index);
    var target = tracker.getItemByIndex(req.params.target_index)
    res.send(target);
  }

}
