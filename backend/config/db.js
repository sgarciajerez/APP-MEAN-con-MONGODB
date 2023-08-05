const mongoose = require('mongoose');
require('dotenv').config({path: 'variables.env'});

async function connectDB () {
    try {
        await mongoose.connect(process.env.DB_MONGO);
    } catch (error) {
        console.log(error);
        process.exit(1); //detenemos la app
    }
}

module.exports=connectDB;