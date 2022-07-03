const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require('cors');
const bcrypt = require("bcrypt");
const saltRounds = 10;

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "desafio",
})

// app.get('/', (req,res) => {
//     db.query("INSERT INTO usuarios (email, password) VALUES ('gilopavani@gmail.com' , 'teste123')", (err, result) => {
//         if(err){
//             console.log(err)
//         }
//     }

//     );
// })

app.use(express.json());
app.use(cors());

app.post("/register", (req,res)=>{
    const email = req.body.email;
    const password = req.body.password;

    db.query("SELECT * FROM usuarios WHERE email = ? ", [email],
    (err,result) => {
        if(err){
            res.send(err);
        }
        if(result.length == 0){
            bcrypt.hash(password, saltRounds, (erro,hash)=>{
                db.query("INSERT INTO usuarios (email, password) VALUES (?,?)", [email, hash], (err,response) =>{
                    if(err){
                        res.send(err)
                    }
                    res.send({msg: "cadastrado com sucesso"})
                })
            }
            )
            
        }else{
            res.send({msg: "Usuario já cadastrado"});
        }
    });
});

app.post("/login", (req,res)=>{
    const email = req.body.email;
    const password = req.body.password;

    db.query("SELECT * FROM usuarios WHERE email = ?", [email], (err,result)=>{
        if(err){
            res.send(err);
        }
        if(result.length > 0){
            const pass = result[0].password;
            bcrypt.compare(password, result[0].password, (erro, result)=>{
                if(result){
                    res.send({msg: "Usuario logado com sucesso", token: pass});
                }else{
                    res.send({msg: "Conta não encontrada"});
                }
            })
            
        }else{
            res.send({msg: "Conta não encontrada"});
        }
    })
});

app.listen(3001, () =>{
    console.log("Rodando na porta 3001");
});