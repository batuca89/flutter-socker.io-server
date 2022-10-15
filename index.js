
// importa la libreria
const express = require('express');
// creo una app
const app = express();
const path = require('path');

// para usar el puerto que nosotros configuramos en el archivo .env
require('dotenv').config();

// creo el servidor de node

const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);
require ('./sockets/sockets');


