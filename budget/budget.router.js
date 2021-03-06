const express = require('express');

const Budget = require('./Budget.model.js');

const myFactory = require('../myTools/routerFactory');

const router = express.Router();

// router.route('/').get(noAllowed);

router
  .route('/:id')
  .get(noAllowed) // TODO: make this Router aggregate the info.
  .put(noAllowed);

routerFactory = myFactory.routerFactory(router, Budget);

// Set Paths to be populated
routerFactory.setPopulate('expenses');

// Define Projection for the Model
routerFactory.setProjection('expenses title budgetAmount -_id');
// THIS IS ANOTHER WAY TO ACHIEVE A PROJECTION
/*
  routerFactory.setProjection({
    expenses: 1,
    title: 1,
    budgetAmount: 1,
    _id: 0,
  });
*/

module.exports = router;

/**
 *  :CUSTOM MIDDLEWARES
 */
function noAllowed(req, res, next) {
  res.status(404).json({ message: 'Action no allowed' });
}
