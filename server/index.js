const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require('cors');
const bcrypt = require("bcrypt");
const saltRounds = 10;


const db = mysql.createPool({
    host: "localhost",
    user: "angelo",
    password: "gilo",
    database: "desafio",
})



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
                const token = bcrypt.hashSync(email,saltRounds);
                db.query("INSERT INTO usuarios (email, password, token) VALUES (?,?,?)", [email, hash, token], (err,response) =>{
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
            bcrypt.compare(password, result[0].password, (erro, resultado)=>{
                const token = result[0].token;
                if(resultado){
                    res.send({msg: "Usuario logado com sucesso", token: token });
                }else{
                    res.send({msg: "Conta não encontrada"});
                }
            })
            
        }else{
            res.send({msg: "Conta não encontrada"});
        }
    })
});

app.post("/reg_agenda", (req,res)=>{
    const token = req.body.token;
    const nome = req.body.nome;
    const detalhes = req.body.detalhes;
    const date = req.body.date;

    db.query("INSERT INTO agenda (compromisso, informacoes, data, token) VALUES (?,?,?,?)", [nome, detalhes, date, token], (err,response) => {
        if(err){
            res.send(err);
        }
        res.send({msg: "Cadastrado"});
    })
});


app.listen(3001, () =>{
    console.log("Rodando na porta 3001");
});