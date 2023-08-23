const { Schema, model } = require('mongoose')

const schemaCity = new Schema({
            name: {
                type: String,
                require: true
            },
            country: {
                type: String,
                require: true
            },
            image: {
                type: String,
                require: true
            },
            landing: {
                type: String,
                require: true
            },
            data: {
                type: String,
                require: true
            }
    })

const City = model("City", schemaCity)

module.exports = City