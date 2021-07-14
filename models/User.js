const mongoose = require('mongoose')
const JobSchema = require('./Job.js')

const UserSchema = new mongoose.Schema({
    name: String,
    password: String,
    email: String,
    jobs: [JobSchema]
},{
    timestamps: true
})

module.exports = UserSchema