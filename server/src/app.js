const express = require('express');
var cors = require('cors')
const app = express();
const port = 8081;
const knex = require('knex')(require('../knexfile.js')["development"])

app.use(cors())

app.get('/', (req, res) => {
    res.send('Application up and running!')
})

app.get('/branch', cors(), (req, res) => {
    knex('branch')
        .select('*')
        .then(result => {
            var branches = result.map(branch => branch)
            res.json(branches);
        })
})

app.get('/unit', cors(), (req, res) => {
    knex('unit')
        .select('*')
        .then(result => {
            var unitArray = result.map(unit => unit)
            res.json(unitArray);
        })
})

app.get('/installation', cors(), (req, res) => {
    knex('installation')
        .select('*')
        .then(result => {
            var installationArray = result.map(installation => installation)
            res.json(installationArray);
        })
})

app.get('/personnel', cors(), (req, res) => {
    knex('personnel')
        .select('*')
        .then(result => {
            var personnelArray = result.map(prsnl => prsnl)
            res.json(personnelArray);
        })
})


app.listen(port, () => {
    console.log(`Server running at ${port}.  Let's see some queries!`)
})