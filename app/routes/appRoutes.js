'use strict';
module.exports = function(app) {
  var appTracker = require('../controllers/appController');

  // User Routes
  app.route('/')
     .get(appTracker.listTargets);
    // .post(appTracker.record);

  app.route('/today')
     .get(appTracker.todaysTarget);

  };
