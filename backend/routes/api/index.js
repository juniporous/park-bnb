const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

//reminder, all route urls here will be prefixed
//by default with '/api'

// router.post('/test', function(req, res) {
//     res.json({ requestBody: req.body });
//   });





module.exports = router;