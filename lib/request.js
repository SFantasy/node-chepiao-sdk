/**
 *
 * request.js
 *
 * @description
 * @author Fantasy <fantasyshao@icloud.com>
 * @create 2014-12-31
 * @update 2014-12-31
 */

var request = require('request');

module.exports = function(url, form, callback) {
  request.post({
      url: url,
      formData: form
    }, function (err, res, body) {
      if (!err) callback(res);
    });
};
