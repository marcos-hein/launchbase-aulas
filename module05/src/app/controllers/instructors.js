const { age, date } = require("../../lib/utils")

module.exports = {
    index(req, res) {
        return res.render("instructors/index", { instructors })
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
    
        // for (key of keys) {
        //     if (req.body[key] == "") {
        //         return res.send("Please, fill all fields")
        //     }
        // }
    
        let { avatar_url, birth, name, services,gender } = req.body
    
        return res.redirect("/instructors")
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
