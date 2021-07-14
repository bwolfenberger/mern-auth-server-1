require('dotenv').config()
const db = require('./models')
db.connect() // test db connection

const dbTest = async () => {
    try{
        // CREATE
        const newUser = new db.User({
            name: 'test job user 1',
            email: '1@2.com',
            password: 'oliver'
        })

        const newJob = {
            title: 'test title',
            company: 'test company',
            jobUrl: 'test Url',
            description: 'test description',
            notes: 'test notes',
            dateApplied: null,
            priority: 'high',
            status: 'rejected',
            reminder: null
        }

        newUser.jobs.push(newJob)

        await newUser.save()
        console.log('new user:', newUser)

        // READ -- st login
        const foundUser = await db.User.findOne({
            name: "test job user 1"
        })
        console.log('found user:', foundUser)

    } catch (err) {
        console.log(err)
    }
}

dbTest()