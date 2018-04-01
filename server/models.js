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
        name: {type: String, required: true},
        start: {type: String, required: true},
        info: {type: String, required: true}
    }),

    director: mongoose.model('director', {
        director: subSchema.director,
        prevDirector: subSchema.prevDirector
    }),

    executiveCouncil: mongoose.model('executiveCouncil', {
        council: {type: [subSchema.representative], required: true},
        minutes: {type: [subSchema.minute], required: true}
    }),

    governingBody: mongoose.model('governingBody', {
        executives: {type: [subSchema.representative], required: true},
        minutes: {type: [subSchema.minute], required: true}
    }),

    guestFaculty: mongoose.model('guestFaculty', {
        name: {type: String, required: true},
        department: {type: String, required: true},
        contact: {type: String, required: true}
    }),

    // TODO: Home
    // TODO: Events
    // TODO: Paginated display

    library: mongoose.model('library', {
        library: [{
            name: {type: String, required: true},
            info: String,
            links: {type: [subSchema.link], required: true}
        }]
    }),

    navbar: mongoose.model('navbar', {
        links: [{
            name: {type: String, required: true},
            link: {type: String},
            sublinks: {type: [subSchema.link]}
        }]
    }),

    news: mongoose.model('news', {
        title: {type: String, required: true},
        btnDisp: {type: String, required: true},
        btnLink: {type: String, required: true},
        items: [{
            content: {type: String, required: true},
            link: {type: String, required: true}
        }]
    }),

    nonTeachingStaff: mongoose.model('nonTeachingStaff', {
        staff: [{
            name: {type: String, required: true},
            contact: {type: String, required: true}
        }]
    }),

    permanentFaculty: mongoose.model('permanentFaculty', {
        faculty: [{
            name: {type: String, required: true},
            department: {type: String, required: true},
            contact: {type: String, required: true}
        }]
    }),

    placements: mongoose.model('placements', {
        image: String,
        name: {type: String, required: true},
        details: {type: String, required: true}
    }),

    quickLinks: mongoose.model('quickLinks', {
        links: {type: [subSchema.link], required: true}
    }),

    senate: mongoose.model('senate', {
        mentor: {type: [subSchema.representative], required: true},
        external: {type: [subSchema.representative], required: true},
        industry: {type: [subSchema.representative], required: true},
        student: {type: [subSchema.representative], required: true},
        minutes: {type: [subSchema.minute], required: true}
    }),

    students: mongoose.model('students', {
        students: { type: [{
            batch: {type: String, required: true},
            link: {type: String, required: true}
        }], required: true } 
    }),

    tenders: mongoose.model('tenders', {
        tenders: {
            type: [{
                name: String,
                desc: String,
                link: subSchema.link,
                sublink: subSchema.link
            }],
            required: true
        }
    }),

    timetable: mongoose.model('timetable', {
        timetable: {
            type: {
                name: String,
                link: String,
                lastupdate: String
            },
            required: true
        },
        calendar: [subSchema.link]
    })
    // TODO: Timetable
}