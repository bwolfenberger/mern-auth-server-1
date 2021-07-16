const mongoose = require('mongoose')

const JobSchema = new mongoose.Schema({
    title: String,
    company: String,
    jobURL: String,
    description: String,
    notes: String,
    dateApplied: Date,
    priority: String,
    status: String,
    reminder: Date
},{
    timestamps: true
})

module.exports = JobSchema