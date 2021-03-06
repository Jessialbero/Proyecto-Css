const express = require('express');
const path = require('path');
const app = express (); 
const publicPath = path.resolve(__dirname, './public');

app.use(express.static(publicPath));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'views/Home.html'))
})


app.listen(process.env.PORT || 3000, () => {
    console.log("Servidor activo en puerto 3000");
})

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});