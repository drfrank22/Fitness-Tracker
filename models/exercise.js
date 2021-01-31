const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema ({
    day: {
        type: Date,
        default: () => new Date(),
    }, exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "What type of exercise did you complete?",
            },
            name: {
                type: String,
                trim: true,
                required: "What is the name of the exercise you completed?",
            },
            duration: {
                type: Number,
                required: "How long did you perform this exercise?",
            },
            weight: {
                type: Number,
            },
            reps: {
                type: Number,
            },
            sets: {
                type: Number,
            },
            distance: {
                type: Number,
            },
        },
    ],
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;