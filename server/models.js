const mongoose = require('mongoose')
const subSchema = require('./subschemas')

module.exports = {
    about: mongoose.model('about', {
        about: {
            title: {type: String, required: true},
            content: {type: String, required: true}
        },
        vision: {
            title: {type: String, required: true},
            content: {type: String, required: true}
        },
        mission: {
            title: {type: String, required: true},
            content: {type: String, required: true}
        }
    }),

    coordinator: mongoose.model('coordinator', {
        coordinator: subSchema.coordinator,
        prevCoordinator: [subSchema.prevCoordinator]
    }),

    departments: mongoose.model('departments', {
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

    guestFaculty: mongoose.model('guestFaculty', {
        name: String,
        department: String,
        contact: String
    }),

    // TODO: Events
    // TODO: Events display (for paginated display)

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

    news: mongoose.model('news', {
        title: String,
        btnDisp: String,
        btnLink: String,
        items: [{
            content: String,
            link: String
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

    placements: mongoose.model('placements', {
        image: String,
        name: String,
        details: String
    }),

    quickLinks: mongoose.model('quickLinks', {
        links: [subSchema.link]
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

    // TODO: Tenders
    // TODO: Timetable
    // TODO: Vacancies

}