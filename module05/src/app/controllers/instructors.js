const { age, date } = require("../../lib/utils")
const db = require("../../config/db")

module.exports = {
    index(req, res) {
        return res.render("instructors/index")
    },    
    create(req, res) {
        return res.render('instructors/create')
    },    
    post(req, res) {
    
        const keys = Object.keys(req.body)
    
    
        keys.forEach(key => {
            if (req.body[key] == "") {
                return res.send("Please, fill all fields")
            }
        });

        const query = `
            INSERT INTO instructors (
                name,
                avatar_url,
                gender,
                services,
                birth,
                created_at
            ) VALUES ($1, $2, $3, $4, $5, $6)
            RETURNING id
        `

        const values = [
            req.body.name,
            req.body.avatar_url,
            req.body.gender,
            req.body.services,
            date(req.body.birth).iso,
            date(Date.now()).iso
        ]

        db.query(query, values, function(err, results) {
            if(err) return res.send("Database Error!")

            return res.redirect(`/intructors/${results.rows[0].id}`)
        })
    
    },    
    show(req, res) {
        return
    },    
    edit(req, res) {
        return
    },    
    put(req, res) {
        const { id } = req.body
    
        let index = 0
    
        const foundInstructor = data.instructors.find(function(instructor, foundIndex){
            if (id == instructor.id) {
                index = foundIndex
                return true
            }
        })
    
        if (!foundInstructor) return res.send('Instructor not found!')
    
       return
    },    
    delete(req, res) {
        return
    },
}
