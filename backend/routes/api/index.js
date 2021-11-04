const router = require('express').Router();

//reminder, all route urls here will be prefixed
//by default with '/api'

router.post('/test', function(req, res) {
    res.json({ requestBody: req.body });
  });

module.exports = router;