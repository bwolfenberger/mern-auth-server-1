const router = require('express').Router()
const db = require('../../models')
const authLockedRoute = require('./authLockedRoute')


// GET - /jobs - get all jobs for the user associated with the token
router.get('/', authLockedRoute, (req,res) => {
    res.json({ jobs: res.locals.user.jobs})
})

//POST - /jobs - new job in body, jwt token in auth headers
router.post('/', authLockedRoute, async (req,res) => {
    try {
        res.locals.user.jobs.push(req.body.job)
        console.log(res.locals.user.jobs)
        await res.locals.user.save()
        res.json({ job: res.locals.user.jobs[res.locals.user.jobs.length-1] })
    } catch(err) {
        console.log(err)
        res.status(500).json({ msg: 'internal server error '})
    }
})

// PUT - /jobs - update job. job in body, token in headers
// might need to change so I don't overwrite mongoose timestamps.
router.put('/', authLockedRoute, async (req,res) => {
    try {
        // TODO: maybe fix strict equality check? 
        let i = res.locals.user.jobs.findIndex(job => job._id == req.body.job._id)
        res.locals.user.jobs[i] = req.body.job
        await res.locals.user.save()
        res.json({msg: `job ${req.body.job._id} successfully updated`})
    } catch(err){
        console.log(err)
        res.status(500).json({ msg: 'internal server error' })
    }
})

//DELETE - /jobs - delete a job. jobId in body, token in headers
router.delete('/', authLockedRoute, async (req,res) => {
    try {
        res.locals.user.jobs.id(req.body.jobId).remove()
        res.locals.user.save()
        res.json({msg: `job ${req.body.jobId} successfully deleted`})
    } catch(err) {
        console.log(err)
        res.status(500).json({ msg: 'internal server error'})
    }
})

module.exports = router