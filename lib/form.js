/**
 *
 * form.js
 *
 * @description
 * @author Fantasy <fantasyshao@icloud.com>
 * @create 2014-12-31
 * @update 2014-12-31
 */

var formData = require('form-data');

module.exports = function (config) {
  var form = new formData();

  form.append('userid', config.email);
  form.append('seckey', config.secret);

  return form;
};
