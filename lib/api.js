/**
 *
 * api.js
 *
 * @description
 * @author Fantasy <fantasyshao@icloud.com>
 * @create 2014-12-31
 * @update 2014-12-31
 */

var baseUrl = 'http://www.chepiao100.com/api';

var api = {
  schedule: baseUrl + '/checi',
  leftTickets: baseUrl + '/yupiao',
  flights: baseUrl + '/jipiao'
};

module.exports = api;