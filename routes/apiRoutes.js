const db = require("../models");

module.exports = function(app) {
    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({})
        .sort({_id:1}).limit(7).populate("exercises")
        .then(workout => {
            res.json(workout);
        })
        .catch(err => {
            res.json(err);
        })
    })
    
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({})
        .then(workout => {
            res.json(workout);
        })
        .catch(err => {
            res.json(err);
        })
    })

    app.get("/api/workouts/:id", (req, res) => {
        db.Workout.find({_id:req.params.id})
        .then(workout => {
            res.json(workout);
        })
        .catch(err => {
            res.json(err);
        })
    })

    app.post("/api/workouts", (req, res) => {
        db.Workout.create({})
        .then(workout => {
            res.json(workout);
        })
        .catch(err => {
            res.json(err);
        })
    })

    app.put("/api/workouts/:id", ({body, params}, res) => {
        db.Workout.findByIdAndUpdate(params.id, {$push: {exercises: body}}, {new: true, runValidators: true})
        .then(workout => {
            res.json(workout);
        })
        .catch(err => {
            res.json(err);
        })
    })

    app.put("/api/workouts", ({body}, res) => {
        db.Workout.updateOne(body)
        .then(workout => {
            res.json(workout);
        })
        .catch(err => {
            res.json(err);
        })
    })
}