const models = require('./models')

module.exports = {

    GETall (req, res, comp) {
        const components =  Object.keys(models)
        for (const component of components) {
            if (comp === component) {
                return models[component].find((err, content) => {
                    if (err) {
                        console.error(err)
                        return res.status(500).json(err)
                    }
                    return res.status(200).json(content)
                })
            }
        } 
        return res.status(404).json({msg: "Endpoint does not exist \uD83D\uDE0C"})
    },

    POSTall (req, res, comp) {
        const components =  Object.keys(models)
        for (const component of components) {
            if (comp === component) {
                const newContent = new models[component](req.body)
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
        }
    },

    PUTall (req, res, comp) {
        const components =  Object.keys(models)
        for (const component of components) {
            if (comp === component) {
                models[component].findOneAndUpdate(req.body.old, req.body.new , {new: true, runValidators: true}, (err, newContent) => {
                    if (err) {
                        if(err.name === 'ValidationError') {
                            return res.status(400).json({msg: `Invalid data, make sure data confirms to schema and try again \uD83D\uDE1B`})
                        }
                        return res.status(500).json(err)
                    }
                    return res.status(200).json(newContent)                    
                })
            }
        }
    }
}