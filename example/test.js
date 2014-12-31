/**
 *
 * test.js
 *
 * @description
 * @author Fantasy <fantasyshao@icloud.com>
 * @create 2014-12-31
 * @update 2014-12-31
 */

var Chepiao = require('../index');
var config = require('./config');

var chepiao = new Chepiao(config);

chepiao.schedule('g1', function (res) {
  console.log(res);
});

chepiao.leftTickets('2014-02-26', '上虞北', '南京南', function (res) {
  console.log(res);
});
