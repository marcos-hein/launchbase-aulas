const { age, date } = require("../../lib/utils")

module.exports = {
    index(req, res) {
        return res.render("members/index")
    },    
    create(req, res) {
        return res.render('members/create')
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
    
    
        return res.redirect("/members")
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
    
        const foundmember = data.members.find(function(member, foundIndex){
            if (id == member.id) {
                index = foundIndex
                return true
            }
        })
    
        if (!foundmember) return res.send('member not found!')

        return
    },
    
    delete(req, res) {
        return
    },
}
2