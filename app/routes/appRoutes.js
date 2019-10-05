'use strict';
// const trackers = require('../controllers/appController');
var tracker = require('../controllers/trackerController');
const err = require('../models/errorModel')

module.exports = function(app){
  app.route('/')
    .get(function(req,res){
      console.log('Hello world.');
      res.render('test');
    })

  app.route('/trackers')
    .get(app.listTrackers)
    .post(app.addTracker)

  app.route('/trackers/:tracker_index')
    .get(app.getTracker)
    .post(tracker.addPushups);

  app.route('/trackers/:tracker_index/today')
     .get(tracker.todaysTarget);

  app.route('/trackers/:tracker_index/targets')
    .get(app.listTargets)
    .post(app.addTarget);

  app.route('/trackers/:tracker_index/targets/:target_index')
     .get(app.getTarget);
}
