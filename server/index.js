require('dotenv').config()

const controller = require('./controller')
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');

const port = process.env.PORT;

const app = express();

app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING)
.then( (dbInstance) => {
    app.set('db', dbInstance)
    console.log('connected to the db')
})
.catch( (err) => {
    console.log(err)
})

app.get('/api/houses', controller.get);

app.post('/api/createHouse', controller.post);

app.delete('/api/deleteHouse/:id', controller.delete);

app.listen(port, () => {
    console.log(`Docked at port: ${port}`)
})