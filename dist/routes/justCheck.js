'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _db = require('../db');

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();
router.get('/', function (req, res) {
	res.send("deployment occured");
});
module.exports = router;
//# sourceMappingURL=justCheck.js.map