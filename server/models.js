const mongoose = require('mongoose')
const subSchema = require('./subschemas')

module.exports = {
    about: mongoose.model('about', {
        about: {
            title: String,
            content: String
        },
        vision: {
            title: String,
            content: String    
        },
        mission: {
            title: String,
            content: String
        }
    }),

    coordinator: mongoose.model('coordinator', {
        coordinator: subSchema.coordinator,
        prevCoordinator: [subSchema.prevCoordinator]
    }),

    department: mongoose.model('departments', {
        name: String,
        start: String,
        info: String
    }),

    director: mongoose.model('director', {
        director: subSchema.director,
        prevDirector: [subSchema.prevDirector]
    }),

    executiveCouncil: mongoose.model('executiveCouncil',{
        council: [subSchema.representative],
        minutes: [subSchema.minute]
    }),

    governingBody: mongoose.model('governingBody', {
        executives: [subSchema.representative],
        minutes: [subSchema.minute]
    }),

    library: mongoose.model('library', {
        library: [{
            name: String,
            info: String,
            links: [subSchema.link]
        }]
    }),

    navbar: mongoose.model('navbar', {
        links: [{
            name: String,
            link: String,
            sublinks: [subSchema.link]
        }]
    }),

    nonTeachingStaff: mongoose.model('nonTeachingStafff', {
        staff: [{
            name: String,
            contact: String
        }]
    }),

    permanentFaculty: mongoose.model('permanentFaculty', {
        faculty: [{
            name: String,
            department: String,
            contact: String
        }]
    }),

    senate: mongoose.model('senate', {
        mentor: [subSchema.representative],
        external: [subSchema.representative],
        industry: [subSchema.representative],
        student: [subSchema.representative],
        minutes: [subSchema.minute]
    }),

    students: mongoose.model('students', {
        batch: String,
        link: String
    }),  

    quickLinks: mongoose.model('quickLinks', {
        links: [subSchema.link]
    })



}