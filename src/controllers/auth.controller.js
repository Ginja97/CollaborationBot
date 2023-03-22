const config = require('../config/config')

module.exports = (req, res, next) => {
    if (req.header('api-token') === config.apiToken) {
        next()
    }
    else {
        res.status(401).send({
            error: 'Ungültiger API-Token. Zugriff auf Dokumente verweigert.',
        })
    }
}