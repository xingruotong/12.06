const listdata = require('./src/mock/index.json')

module.exports = {
    devServer: {
        before(app) {
            app.get('/list', (req, res) => {
                res.send(listdata)
            })
        }
    }
}