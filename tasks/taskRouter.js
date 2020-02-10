const express = require("express");
const taskdb = require('./taskModel.js');
const router = express.Router();

router.get("/", (req, res) => {
    taskdb
        .getTask()
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => {
            res.status(404).json({
                message: "Cannot find tasks!"
            });
        });
});


router.get("/:id", (req, res) => {
    taskdb
        .getTaskbyID(req.params.id)
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => {
            res.status(404).json({
                message: "No taks with specified ID!"
            });
        });
});


router.post("/:id/task", validateTask, (req, res) => {
    taskdb
        .addTask(req.body)
        .then(data => {
            res.status(201).json(data);
        })
        .catch(err => {
            res.status(500).json({
                message: "Unable to post the task!"
            });
        });
});



function validateTask(req, res, next) {
    if (!req.body.task_description) {
        res.status(404).json({
            message: "Missing description for task!"
        });
    } else {
        next();
    }
}


module.exports = router;