const mongoose = require('mongoose')

const WorkoutSchema = new mongoose.Schema({
    problem: String,
    answer: String
});

const WorkoutModel = mongoose.model('uploadprograme', WorkoutSchema)

module.exports = WorkoutModel