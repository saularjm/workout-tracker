const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
  
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Please enter type of exercise."
            },
            name: {
                type: String,
                trim: true,
                required: "Please enter name of exercise."
            },
            duration: {
                type: Number,
                required: "Please enter duration of exercise in minutes."
            },
            weight: {
                type: Number
            },
            reps: {
                type: Number
            },
            sets: {
                type: Number
            },
            distance: {
                type: Number
            },
        }
    ]
},
{
    toJSON: {
        virtuals: true
    }
})

workoutSchema.virtual("totalDuration").get(() => {
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0);
});
  
const Workout = mongoose.model("Workout", workoutSchema);
  
module.exports = Workout;