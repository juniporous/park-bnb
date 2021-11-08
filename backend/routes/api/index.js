const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const spotsRouter = require('./spots')

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/spots', spotsRouter)



//reminder, all route urls here will be prefixed
//by default with '/api'

// router.post('/test', function(req, res) {
//     res.json({ requestBody: req.body });
//   });





module.exports = router;