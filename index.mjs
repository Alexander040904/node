/* const http = require('http');
const server = http.createServer((req, res)=>{
    res.end('estoy');
});

const puerto = 3000;
server.listen(puerto, ()=>{
    console.log('escuchando');
    
})
 */


import express from 'express';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url); // Obtiene la ruta completa del archivo actual
const __dirname = dirname(__filename); // Obtiene el directorio del archivo actual


//import routes from './routes';

const app = express();
const port = 3000;


app.use(express.static('public'));

app.use((req,res,next)=>{
  res.status(404).sendFile(__dirname + "/public/404.html")
})
app.get('/', (req,res)=>{
  res.send('Mamare');
})



app.listen(port,()=>{
  console.log('servidor a su servicio');
  
})