const Instructor = require("../models/Instructor")

module.exports = {
    index(req, res) {

        Instructor.all(function(instructors) {

            return res.render("instructors/index", { instructors })
        })
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

        Instructor.create(req.body, function(instructor){
            return res.redirect(`instructors/${instructor.id}`)
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
