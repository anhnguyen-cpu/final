const db = require('../models/db')
module.exports = (req, res) => {


const sql = 'select id, name from rooms'
db.query(sql, function(error, results, fields) {
    if (error) throw error

    const id = results
    const name = results
    const context = { results }

    res.render('chatrooms',context)
})

}