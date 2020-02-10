const express = require("express");
const projectdb = require('./projectModel.js');
const taskRouter = require('../tasks/taskRouter.js');
const router = express.Router();

router.use("/:id/task", taskRouter);


router.get("/", (req, res) => {
    projectdb
        .getProjects()
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => {
            res.status(404).json({
                message: "Cannot find projects!"
            });
        });
});

router.get("/:id", (req, res) => {
    projectdb
        .getProjectById(req.params.id)
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => {
            res.status(404).json({
                message: "No projects with matching ID!"
            });
        });
});

router.get("/task/:id", (req, res) => {
    userdb
        .getProjectTask(req.params.id)
        .then(projecttask => {
            res.status(200).json(projecttask);
        })
        .catch(err => {
            res.status(500).json({
                message: "Error retrieving Project Tasks!"
            });
        });
});



router.post("/", validateProject, (req, res) => {
    projectdb
        .addProject(req.body)
        .then(data => {
            res.status(201).json(data);
        })
        .catch(err => {
            res.status(500).json({
                message: "Unable to post the project!"
            });
        });
});



function validateProject(req, res, next) {
    if (!req.body.project_name) {
        res.status(404).json({
            message: "Missing Name for Project!"
        });
    } else {
        next();
    }
}


module.exports = router;