const express = require("express");
const resourcedb = require('./resourceModel.js');
const router = express.Router();

router.get("/", (req, res) => {
    resourcedb
        .getResource()
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => {
            res.status(404).json({
                message: "Cannot find resources!"
            });
        });
});


router.post("/", validateResource, (req, res) => {
    resourcedb
        .addResource(req.body)
        .then(data => {
            res.status(201).json(data);
        })
        .catch(err => {
            res.status(500).json({
                message: "Unable to post the resource!"
            });
        });
});



function validateResource(req, res, next) {
    if (!req.body.resource_name) {
        res.status(404).json({
            message: "Missing Name for Resource!"
        });
    } else {
        next();
    }
}


module.exports = router;