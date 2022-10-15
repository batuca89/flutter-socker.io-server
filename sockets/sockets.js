// mensajes de sokets
const {io}= require('../index');
// con esto conectamos con el cliente
io.on('connection', client => {
    console.log('cliente conectado')
    // este es el callbacj cuando el cliente se desconecte
    client.on('disconnect', () => { console.log('cliente desconectado')});

  // con este escuchamos

  client.on('mensaje',(payload)=>{ console.log(payload)});
  io.emit ('mensaje',{admin:'Nuevo mensaje'});
  });


// definimos nuestra carpeta publica

const publicPath = path.resolve(__dirname,'public');
app.use(express.static(publicPath));

// esucho por el puerto 300


server.listen(process.env.PORT,(err)=>{
// retorna un error

if(err) throw new Error(err);

console.log('Servidor corriendo en puerto!!!',process.env.PORT);
});