const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const {check, validationResult} = require('express-validator');


const db = require('../../db/models');
const { Booking } = db;
const { Spot } = db;

const bookingNotFoundError = id => {
    const err = Error('Booking not found');
    err.errors = [`Booking with id of ${id} could not be found`];
    err.title = 'Booking not found';
    err.status = 404;
    return err;
}

const handleValidationErrors = (req, res, next) => {
    const validationErrors = validationResult(req);
    if (!validationErrors.isEmpty()) {
      const errors = validationErrors.array().map(error => error.msg);
  
      const err = Error('Bad request.');
      err.errors = errors;
      err.status = 400;
      err.title = 'Bad request.';
      return next(err);
    }
    next();
  };


const validateBooking = [
    check('spotId')
        .exists({ checkFalsy: true })
        .withMessage('Spot Id is required'),
    check('clientId')
        .exists({ checkFalsy: true})
        .withMessage('Client Id is required'),
    check('startDate')
        .exists({ checkFalsy: true })
        .withMessage('Start date is required'),
    check('endDate')
        .exists({ checkFalsy: true })
        .withMessage('End date is required'),
    handleValidationErrors
  ];

//find all bookings
router.get(
    '/',
    asyncHandler(async (req, res) => {
      const bookings = await Booking.findAll({ include: Spot });
      return res.json({ bookings });
    })
  );

//find single booking based on bookingId
router.get(
    '/:id(\\d+)',
    asyncHandler(async (req, res, next) => {
        const booking = await Booking.findByPk(req.params.id);
        if (booking) {
          return res.json({ booking })
        } else {
          next(bookingNotFoundError(req.params.id))
        }
    })
)

router.post(
    '/',
    validateBooking,
    asyncHandler(async (req, res) => {
        const {spotId, spotOwnerId, clientId, startDate, endDate} = req.body;
        const booking = await Booking.create({spotId, spotOwnerId, clientId, startDate, endDate});
        return res.json({ booking })
    })
)

router.delete(
    '/:id(\\d+)', 
    async (req, res, next) => {
        const booking = await Booking.findByPk(req.params.id);
        if (booking) {
            await booking.destroy();
            res.status(204).end();
        } else {
            next(bookingNotFoundError(req.params.id))
        }
    })

module.exports = router;