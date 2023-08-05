const express = require('express');
const app = express();
const connectDB = require('./config/db.js');
const router = require('./routes/producto.routes.js');

//conectamos a la DataBase
connectDB();

//permite mandar json a la app
app.use(express.json());

//routes
app.use('/api/productos', router);


app.listen(4000, ()=> {
    console.log('El servidor funciona en el 4000');
})