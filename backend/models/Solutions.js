const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    problem: String,
    answer: String
});

const SolutionModel = mongoose.model('solutions', dataSchema);
module.exports = SolutionModel