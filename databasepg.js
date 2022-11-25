const express = require('express');
const cors = require('cors');
const ejs = require('ejs');


const app = express(); 

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true}));


const {Client} = require('pg')

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "Jashan2348!",
    database: "atpn_proj"

})

client.connect();

client.query('SELECT * FROM phrases', (err, res )=>{
    if (!err){
        console.log(res.rows);
        var data = res.rows
        
    } else {
        console.log(err.message);
    }
    client.end;
})
    

app.get('/', (req, res) => {
    
    client.query('SELECT * FROM phrases', (err, phraseData)=>{
        res.json(phraseData)
    })
    
});

app.listen(3001, function() {
    console.log("server is running"); 
});



