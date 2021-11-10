const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const {check, validationResult} = require('express-validator');

const db = require('../../db/models');
const { Spot } = db;


const spotNotFoundError = id => {
    const err = Error('Spot not found');
    err.errors = [`Spot with id of ${id} could not be found`];
    err.title = 'Spot not found';
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

  const validateSpot = [
    check('name')
        .exists({ checkFalsy: true })
        .withMessage('Spot name is required'),
    check('state')
        .exists({ checkFalsy: true})
        .withMessage('State is required'),
    check('city')
        .exists({ checkFalsy: true })
        .withMessage('City is required'),
    check('address')
        .exists({ checkFalsy: true })
        .withMessage('Street address is required'),
    check('description')
        .exists({ checkFalsy: true })
        .withMessage('Parking spot description is required'),
    handleValidationErrors
  ];

//find all spots
router.get(
    '/',
    asyncHandler(async (req, res) => {
      const spots = await Spot.findAll();
      return res.json({ spots });
    })
  );

//find single spot based on spotId
router.get(
    '/:id(\\d+)',
    asyncHandler(async (req, res, next) => {
        const spot = await Spot.findByPk(req.params.id);
        if (spot) {
          return res.json({ spot })
        } else {
          next(spotNotFoundError(req.params.id))
        }
    })
)

router.post(
    '/',
    validateSpot,
    asyncHandler(async (req, res) => {
        const {name, ownerId, state, city, address, imgUrl, description} = req.body;
        const spot = await Spot.create({name, ownerId, state, city, address, imgUrl, description});
        return res.json({ spot })
    })
)

//updating a spot
router.put(
    '/:id(\\d+)',
    asyncHandler(async (req, res, next) => {
        const spot = await Spot.findByPk(req.params.id);

        if(spot) {
            spot.name = req.body.name || spot.name;
            spot.ownerId = req.body.ownerId || spot.ownerId;
            spot.state = req.body.state || spot.state;
            spot.city = req.body.city || spot.city;
            spot.address = req.body.address || spot.address;
            spot.imgUrl = req.body.imgUrl || spot.imgUrl;
            spot.description = req.body.description || spot.description;

            await spot.save();
            res.json(spot);
        } else {
            next(spotNotFoundError(req.params.id))
        }
    })
)

//deleting a spot
router.delete(
    '/:id(\\d+)', 
    async (req, res, next) => {
        const spot = await Spot.findByPk(req.params.id);
        if (spot) {
            await spot.destroy();
            res.status(204).end();
        } else {
            next(productNotFoundError(req.params.id))
        }
    })

module.exports = router;