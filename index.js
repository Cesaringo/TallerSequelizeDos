const express = require('express');
const app = express();
const sequelize = require('./config/db');
const eventRoutes = require('./routes/EventoRoutes');
const port = process.env.PUERTO || 2000;
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.json());
app.use('/events', eventRoutes);

let startDB = async () => {
    try{
      await sequelize.sync();
      console.log('Base de datos sincronizada');
      app.listen(port, () => {
        console.log(`Servidor corriendo en http://localhost:${port}`);
      });
    }catch(e){
      console.error('ERROR al conectar la Base de Datos', e)
    }
  }
  
  startDB();