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

Chepiao.prototype.request = function(url, form, callback) {
  var _this = this;

  request.post({
    url: url,
    formData: objectAssign(_this.config, form)
  }, function (err, res, body) {
    if (!err) callback(body);
  });
};

Chepiao.prototype.schedule = function (number, callback) {

  this.request(api.schedule, {
    'trainCode': number
  }, function (data) {
    callback(data);
  });

};