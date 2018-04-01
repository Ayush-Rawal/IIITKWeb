const mongoose = require('mongoose')
const Schema =  mongoose.Schema

module.exports = {
    representative: new Schema({
        name: String,
        designation: String
    }),
    
    minute: new Schema({
        title: String,
        link: String,
        timestamp: String
    }),
    
    director: new Schema({
        name: String,
        office: String,
        email: String,
        website: String,
        tenure: String
    }),
    
    prevDirector: new Schema({
        name: String,
        office: String,
        email: String,
        tenure: String
    }),
    
    coordinator: new Schema({
        name: String,
        email: String,
        office: [String],
        education: [String],
        phone: String,
        website: String,
        tenure: String
    }),
    
    prevCoordinator: new Schema({
        name: String,
        tenure: String
    }),

    link: new Schema({
        name: String,
        link: String
    }),
}    
