const express = require('express');
const app = express();

//Definiendo Ruta
app.get('/', (req, res)=>{
    res.send('hola mundo');
})

app.listen(4000, ()=> {
    console.log('El servidor funciona en el 4000');
})