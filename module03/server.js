const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const videos = require("./data")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false
})

server.get("/", function(req, res) {
    const about = {
        avatar_url: "https://avatars1.githubusercontent.com/u/60493029?s=400&u=9aa39eaf9b1a95b7a0b44be821e2bfe920296841&v=4",
        name: "Vinicius Hein",
        role: "Desenvolvedor Web Full-Stack",
        description: 'Estudante da <a href="https://rocketseat.com.br" target="_blank">Rocketseat</a>',
        links: [
            { name: "Github", url: "https://github.com/vinicius-hein" },
            { name: "LinkedIn", url: "https://linkedin.com/in/vinicius-hein" }
        ]

    }

    return res.render("about", { about })
})

server.get("/portifolio", function(req, res) {
    return res.render("portifolio", { items: videos })
})

server.listen(5000, function() {
    console.log("Server is running")
})