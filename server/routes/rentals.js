/**
 * This file will be for most API DB calls related to rentals, such as returning all rentals or returning a specific rental
 * given an ID in the path.
 */
const express = require('express')
const router = express.Router();
const db = require('../config/db')


//Return all rentals by ID ASC in JSON format
router.get('', function (req, res) {
    db.query('SELECT * FROM rentals ORDER BY "ID" ASC')
        .then(function (data) {
            console.log(res)
            res.status(200)
                .json({
                    status: 'success',
                    data: data
                });
        })
        .catch(function (error) {
            return next(error)
        });
});

//Return a specific rental by ID
//For error handling purposes we need to check the row count and return an error if we do not get any rentals with the supplied ID
router.get('/:id', async function (req, res) {
    const rentalId = req.params.id
    try {
        const result = await db.result('SELECT * FROM rentals WHERE "ID" = $1', [rentalId])
        if (result !== null && result.rowCount > 0) {
            res.status(200)
                .json({
                    status: 'success',
                    data: result.rows
                });
        }
        else {
            res.status(422)
                .json({
                    status: 'error',
                    message: 'No rental found with ID ' + rentalId
                })
        }
    }
    catch (error) {
        console.error(error)
        return next(error)
    }
});

module.exports = router;