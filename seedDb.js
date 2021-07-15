require('dotenv').config()
const db = require('./models')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

db.connect()

const seedDb = async () => {
    try {
        const testJobs = [{
            title: 'CEO',
            company: 'Amazon',
            jobURL: 'www.Amazon/jobs/324',
            description: 'Body copy 18, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            notes: 'Interviewer was nice and we talked about visiting the Amazon',
            dateApplied: new Date(),
            priority: 'High',
            status: 'Applied',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            title: 'Barista',
            company: 'Starbucks',
            jobURL: 'www.starbucks/jobs/32324',
            description: 'Body copy 18, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            notes: 'We talked about my skills in css and our love for coffee',
            dateApplied:  new Date(),
            priority: 'Medium',
            status: 'Interviewed',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            title: 'Software engineer',
            company: 'Microsoft',
            jobURL: 'www.Microsoft/careers/3324',
            description: 'Body copy 18, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            notes: 'Applied with my designer resume',
            dateApplied:  null,
            priority: 'Low',
            status: 'To Apply',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            title: 'Software developer',
            company: 'Netflix',
            jobURL: 'www.Netflix/careers/3324',
            description: 'Body copy 18, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            notes: 'Applied with my designer resume',
            dateApplied:  null,
            priority: 'High',
            status: 'To Apply',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            title: 'Software designer',
            company: 'Walmart',
            jobURL: 'www.walmart/careers/3324',
            description: 'Body copy 18, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            notes: 'Applied with my designer resume',
            dateApplied:  new Date(),
            priority: 'Low',
            status: 'Rejected',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            title: 'Accountant',
            company: 'KPMG',
            jobURL: 'www.KPMG/careers/3324',
            description: 'Body copy 18, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            notes: 'Applied with my designer resume',
            dateApplied:  new Date(),
            priority: 'Low',
            status: 'Applied',
            createdAt: new Date(),
            updatedAt: new Date()
        }]

        const password = await bcrypt.hash('testpw', 12)

        const testUsers = [
            {
                name: 'Erik Winkel',
                email: 'erik@winkel.com',
                password: password,
                jobs: testJobs
            },
            {
                name: 'Shannan Bunch',
                email: 'shannan@bunch.com',
                password: password,
                jobs: testJobs
            },
            {
                name: 'Benji Wolfenberger',
                email: 'benji@wolfenberger.com',
                password: password,
                jobs: testJobs
            },
            {
                name: 'Tassiana Lamatina',
                email: 'tassiana@lamatina.com',
                password: password,
                jobs: testJobs
            },
        ]

        await db.User.insertMany(testUsers)

        let count = db.User.count({})
        console.log(`db seeded with ${count} users`)

    } catch(err) {
        console.log(err)
    }
}

seedDb()