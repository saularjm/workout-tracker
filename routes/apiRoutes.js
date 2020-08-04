// Require model
const db = require("../models");

module.exports = function(app) {

    // Route to get range of workouts for stats page
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

    // Route to get workouts for main page
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({})
        .then(workout => {
            res.json(workout);
        })
        .catch(err => {
            res.json(err);
        })
    })

    // Route to get workouts by ID for main page
    app.get("/api/workouts/:id", (req, res) => {
        db.Workout.find({_id:req.params.id})
        .then(workout => {
            res.json(workout);
        })
        .catch(err => {
            res.json(err);
        })
    })

    // Route to create new workout
    app.post("/api/workouts", (req, res) => {
        db.Workout.create({})
        .then(workout => {
            res.json(workout);
        })
        .catch(err => {
            res.json(err);
        })
    })

    // Route to add new exercises to a workout by ID
    app.put("/api/workouts/:id", ({body, params}, res) => {
        db.Workout.findByIdAndUpdate(params.id, {$push: {exercises: body}}, {new: true, runValidators: true})
        .then(workout => {
            res.json(workout);
        })
        .catch(err => {
            res.json(err);
        })
    })

    // Route to update a workout
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