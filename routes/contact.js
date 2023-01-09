var express = require('express');
var router = express.Router();

/* GET home page.
    localhost:8080/contact
*/
router.get('/', function(req, res, next) {
    res.send({ title: 'Express' });
});
router.post('/', function(req, res, next) {
    res.send({ title: 'Express' });
});

module.exports = router;