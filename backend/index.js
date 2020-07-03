import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import mongoose from 'mongoose';
import router from './routes';

//Conexion BD2
const uri = 'mongodb://localhost:27017/BDproyecto';
const options = {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true};
mongoose.connect(uri, options).then(() => { 
    console.log('Conectado a la BD en el puerto 27017')},
    err => {err }
  );

const app=express();
const { urlencoded } = require('express');
app.use(morgan('dev'));
app.use(cors());

app.use(express.json());
app.use(urlencoded({extended:true}));
app.use(express.static(path.join( __dirname, 'public')));
app.use('/api',router)

app.set('port',process.env.PORT || 3000);
 
app.listen(app.get('port'),()=>{
    console.log(`service on in the port ${app.get('port')}`);
}); 