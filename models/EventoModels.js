const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Event = sequelize.define('Event', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.TEXT,
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    lugar: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    capacidad_maxima: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    inscripciones_actuales: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  }, {
    tableName: 'eventos', 
  });

module.exports = Event;
