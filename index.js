/**
 *
 * index.js
 *
 * @description
 * @author Fantasy <fantasyshao@icloud.com>
 * @create 2014-12-31
 * @update 2014-12-31
 */

var api = require('./lib/api');

var request = require('request');
var objectAssign = require('object-assign');

var Chepiao = function(config) {
  this.config = config;
};

module.exports = Chepiao;

/**
 * Util function
 * @param url
 * @param form
 * @param callback
 */
Chepiao.prototype.request = function(url, form, callback) {
  var _this = this;

  request.post({
    url: url,
    formData: objectAssign(_this.config, form),
    json: true
  }, function (err, res, body) {
    if (!err && res.statusCode === 200) {
      if (body.errMsg === 'Y') {
        callback({
          success: true,
          data: body.data
        });
      } else {
        callback({
          success: false,
          data: []
        });
      }
    }
  });
};

/**
 * Get the schedule of a specified railway
 * @param number
 * @param callback
 */
Chepiao.prototype.schedule = function (number, callback) {

  this.request(api.schedule, {
    'trainCode': number
  }, function (data) {
    callback(data);
  });

};

/**
 * Get the left tickets info with specified params
 * @param date
 * @param startStation
 * @param arriveStation
 * @param callback
 */
Chepiao.prototype.leftTickets = function (date, startStation, arriveStation, callback) {

  this.request(api.leftTickets, {
    'date': date,
    'startStation': startStation,
    'arriveStation': arriveStation
  }, function (data) {
    callback(data);
  });
};
