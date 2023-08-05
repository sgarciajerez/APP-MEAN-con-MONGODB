const express = require('express');
const app = express();
const connectDB = require('./config/db.js');
const router = require('./routes/producto.routes.js');
const cors = require('cors');

//conectamos a la DataBase
connectDB();

app.use(cors()) //ESTA LÍNEA ARREGLA LOS CORS TRAS HACER UN NPM INSTALL CORS

//permite mandar json a la app
app.use(express.json());

//routes
app.use('/api/productos', router);


app.listen(4000, ()=> {
    console.log('El servidor funciona en el 4000');
})