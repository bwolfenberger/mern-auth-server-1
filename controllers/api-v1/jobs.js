const router = require('express').Router()
const db = require('../../models')
const authLockedRoute = require('./authLockedRoute')


// GET - /jobs - user id and jobId in body
// probably won't use this because jobs are embedded docs
router.get('/', authLockedRoute, async (req,res) => {
    res.json(res.locals.user.jobs[0])
})

//POST - /jobs - new job in body, jwt token in auth headers
router.post('/', authLockedRoute, async (req,res) => {
    try {
        res.locals.user.jobs.push(req.body.job)
        console.log(res.locals.user.jobs)
        await res.locals.user.save()
        res.json({ msg: 'job successfully created' })
    } catch(err) {
        console.log(err)
        res.status(500).json({ msg: 'internal server error '})
    }
})

router.put('/', authLockedRoute, async (req,res) => {
    try {
        // TODO: maybe fix strict equality check? 
        let i = res.locals.user.jobs.findIndex(job => job._id == req.body.job._id)
        res.locals.user.jobs[i] = req.body.job
        await res.locals.user.save()
        res.json({msg: 'job successfully updated'})

    } catch(err){
        console.log(err)
        res.status(500).json({ msg: 'internal server error' })
    }
})


module.exports = router