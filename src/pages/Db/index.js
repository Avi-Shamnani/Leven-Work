const express = require('express')

// initlializing the app 
const app = express()

// Getting the database connection from the clients db
const clientModel = require('../../models/client.model.js')

app.post((req, res)=>
{
    let {name, email, phone, business, services, location, description} = req.body;
    clientModel.create({
        name: req.params.body.
    })
})
clientModel.create