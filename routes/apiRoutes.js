const db = require("../models");

module.exports = function(app) {
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({})
        .then(workout => {
            res.json(workout);
        })
        .catch(err => {
            res.json(err);
        })
    })

    app.post("/api/workouts", ({req}, res) => {
        db.Workout.create(req)
        .then(workout => {
            res.json(workout);
        })
        .catch(err => {
            res.json(err);
        })
    })

    // PUT

    // Get in range
}