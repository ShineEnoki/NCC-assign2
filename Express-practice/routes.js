const express = require('express');
const router = express.Router();

router.get('/people', function (req,res) {
    const people = [
        {name: "Bo Bo", age: 10},
        {name: "Jiraiya", age:55},
    ]
    res.status(200).json(people);
});

router.get('/people/:id', function (req,res) {
    const id = req.params.id;
    res.status(200).json({id});
});

module.exports = router;

