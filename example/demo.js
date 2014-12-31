/**
 *
 * demo.js
 *
 * @description
 * @author Fantasy <fantasyshao@icloud.com>
 * @create 2014-12-31
 * @update 2014-12-31
 */

var request = require('request');
var config = require('./config');

request.post({
  url: 'http://www.chepiao100.com/api/checi',
  formData: {
    userid: config.email,
    seckey: config.secret,
    trainCode: 'g1'
  }
}, function (err, res, body) {
  console.log(body);
});