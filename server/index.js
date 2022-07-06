const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require('cors');
const bcrypt = require("bcrypt");
const { response } = require("express");
const saltRounds = 10;


const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
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
                    res.send({msg: "erro Conta não encontrada"});
                }
            })
            
        }else{
            res.send({msg: "Conta não encontrada"});
        }
    })
});

app.post("/reg_agenda", (req,res)=>{
    const compromisso = req.body.compromisso;
    const informacoes = req.body.informacoes;
    const date = req.body.date;
    const token = req.body.token;

    db.query("INSERT INTO desafio.agenda (compromisso, informacoes, date, token) VALUES (?,?,?,?)", [compromisso, informacoes,date , token], (err,response) => {
        if(err){
            res.send(err);
        }
        res.send({msg: "Cadastrado"});
    })
});

app.get("/agen_get", (req,res)=>{
    db.query("SELECT * FROM agenda", (err,result) => {
        if(err){
            res.send(err);
        }
        res.send(result);
    })
});

app.put("/agen_edit", (req,res) => {
    const id = req.body.id;
    const compromisso = req.body.compromisso;
    const informacoes = req.body.informacoes;
    const date = req.body.date;

    db.query("UPDATE agenda SET compromisso = ?, informacoes = ?, date = ? WHERE id = ? ", [compromisso, informacoes, date, id] , (err,response) => {
        if(err){
            res.send(err);
        }else{
            res.send({msg: "Alterado com sucesso"})
            console.log({compromisso})
        }
    })
});

app.delete("/delete/:id", (req,res) => {
    const {id} = req.params;
    db.query("DELETE FROM desafio.agenda WHERE (id = ?);", id, (err,response) => {
        if(err){
            res.send(err)
        }else{
            res.send({msg: "DELETADO COM SUCESSO"})
            console.log({id})
        }
    })
}) 


app.listen(3001, () =>{
    console.log("Rodando na porta 3001");
});