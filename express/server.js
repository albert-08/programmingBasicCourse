var express = require("express")
var app = express()

app.get("/", inicio)
app.get("/cursos", cursos)

function inicio(req, res){
  res.send("Este es el <strong>home</strong> genial!")
}

function cursos(req, res) {
  res.send("Estos son los <strong>cursos</strong>")
}

app.listen(8080)