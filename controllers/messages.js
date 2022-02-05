const express = require('express')
const db = require('../models/db')

const router = express.Router()

router.get('/',(req, res) =>{
    const id = req.query.id
    const sql = 'select user, text, sent_at, name from messages INNER JOIN rooms ON messages.room_id = rooms.id where room_id = ?'
    const params = [id]

    db.query(sql, params,(error, results, fields)=>{
        if(error) throw error
        const user = results
        const text = results
        const sent_at = results
        const name = results
        const context = { results  }

        res.render('messages', context)
    })
})

router.post('/',(req, res)=>{
// 1. Get data from form
const user = req.body.user
const text = req.body.text
const id = req.query.id
var today = new Date();
   var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
   var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
   var sent_at = date+' '+time;

// 2. Create data in heroes table
const sql = 'insert into messages (room_id, user, text, sent_at) values (?, ?, ?, ?)'
const params = [id, user, text, sent_at]
db.query(sql, params, (error, results, fields) => {
if (error) throw error

// 3. Redirect to list page
res.redirect(`/messages?id=${{ id }}`)
})
})

module.exports = router