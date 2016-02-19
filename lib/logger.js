'use strict';

const Log = require('../models/log');

module.exports = (req, res, next) => {
  console.log(req);
  //log req to db
  Log.create({
    userAgenert: req.headers['user-agent' ],
    route: req.url,
    verb: req.method
  }, next);
};