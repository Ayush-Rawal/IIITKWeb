const models = require('./models')

module.exports = {

    GETall (req, res, comp) {
        const components =  Object.keys(models)
        const index = components.indexOf(comp)
        if (index === -1) {
            res.status(404).json({msg: 'Nope, wrong endpoint \uD83D\uDE0C'})
        } else {
            return models[components[index]].find((err, content) => {
                if (err) {
                    console.error(err)
                    return res.status(500).json(err)
                }
                return res.status(200).json(content)
            })
        }
    },

    POSTall (req, res, comp) {
        const components =  Object.keys(models)
        const index = components.indexOf(comp)
        if (index === -1) {
            res.status(404).json({msg: 'Nope, wrong endpoint \uD83D\uDE0C'})
        } else {
            const newContent = new models[components[index]](req.body)
            newContent.save((err) => {
                if (err) {
                    if(err.name === 'ValidationError') {
                        return res.status(400).json({msg: `Invalid data, make sure data confirms to schema and try again \uD83D\uDE1B`})
                    }
                    return res.status(500).json(err)
                }
                return res.status(200).json(newContent)
            })
        }
    },

    PUTall (req, res, comp) {
        const components =  Object.keys(models)
        const index = components.indexOf(comp)
        if (index === -1) {
            res.status(404).json({msg: 'Nope, wrong endpoint \uD83D\uDE0C'})    
            // res.status(404).json({msg: `You can't update what doesn't exist, maybe you wanted the POST req?`}).end()
        } else {
            models[components[index]].findOneAndUpdate(req.body.old, req.body.new , {new: true, runValidators: true}, (err, newContent) => {
                if (err) {
                    if(err.name === 'ValidationError') {
                        return res.status(400).json({msg: `Invalid data, make sure data confirms to schema and try again \uD83D\uDE1B`}).end()
                    } else {
                        return res.status(500).json(err)
                    }
                } else {
                    return res.status(200).json(newContent).end()
                }
            })
        }
    },

    DELall (req, res, comp) {
        const components = Object.keys(models)
        const index = components.indexOf(comp)
        if (index === -1) {
            res.status(404).json({msg: 'Nope, wrong endpoint \uD83D\uDE0C'})
            // res.status(404).json({msg: `Umm... the stuff you're trying to delete doesn't exist.`})        
        } else {
            models[components[index]].findOneAndRemove(req.body, (err, doc) => {
                if (err) {
                    return res.status(500).json({msg: "Oops. This wasn't supposed to happen."})
                    console.error(err);
                }
                return res.status(200).json({msg: "Yay! Success!"})
            })
        }
    },

    showEndpoints (req, res) {
        const endpoints = Object.keys(models)
        res.status(200).json({endpoints})
    }
}