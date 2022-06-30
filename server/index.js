const express = require("express");
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "desafio",
})

app.get('/', (req,res) => {
    db.query("INSERT INTO usuario (email, password) VALUES ('gilopavani@gmail.com' , 'teste123')"
    );
})


app.listen(3001, () =>{
    console.log("Rodando na porta 3001");
});