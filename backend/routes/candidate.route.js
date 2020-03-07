let mongoose = require('mongoose');
let express = require('express');
let router = express.Router();


// Model
let candidateSchema = require('../models/Candidate');

// CREATE
router.route('/create-candidate').post((req, res, next) => {
  candidateSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});

// READ
router.route('/').get((req, res) => {
  candidateSchema.find((error, data) => {
      if (error) {
        return next(error)
      } else {
        console.log(data)
        res.json(data)
      }
    })
  })

// Get
router.route('/edit-candidate/:id').get((req, res) => {
  candidateSchema.findById(req.params.id, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })

// Updatee
router.route('/update-candidate/:id').put((req, res, next) => {
  candidateSchema.findByIdAndUpdate(req.params.id, {
      $set: req.body
    }, (error, data) => {
      if (error) {
        return next(error);
        console.log(error)
      } else {
        res.json(data)
        console.log('Candidate updated successfully !')
      }
    })
  })

  // Delete
router.route('/delete-candidate/:id').delete((req, res, next) => {
  candidateSchema.findByIdAndRemove(req.params.id, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.status(200).json({
          msg: data
        })
      }
    })
  })

module.exports = router;