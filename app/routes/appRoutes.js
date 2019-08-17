'use strict';
module.exports = function(app) {
  var appTracker = require('../controllers/appController');

  // app.route('/')
  //    .get(appTracker.listTrackers)
  //    .post(appTracker.addPushups);
  app.route('/trackers/')
    .get(appTracker.listTrackers)
    .post(appTracker.addTracker);

  app.route('/trackers/:tracker_index')
    .get(appTracker.getTracker)
    .post(appTracker.addPushups);

  app.route('/today')
     .get(appTracker.todaysTarget);

 app.route('/trackers/:tracker_index/targets')
    .get(appTracker.listTargets)
    .post(appTracker.addTarget);

  app.route('/trackers/:tracker_index/targets/:target_index')
     .get(appTracker.getTarget);

};
