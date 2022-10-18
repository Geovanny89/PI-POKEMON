const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    id:{
      type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hp:{
      type: DataTypes.INTEGER
    },
    ataque:{
      type: DataTypes.INTEGER
    },
    defensa:{
      type: DataTypes.INTEGER
    },
    velocidad:{
      type: DataTypes.INTEGER
    },
    altura:{
      type: DataTypes.DECIMAL
    },
    peso:{
      type: DataTypes.DECIMAL
    },
    createdInDb:{
      type: DataTypes.BOOLEAN,
      allowNull:false,
      defaultValue: true,
    },
    img: {
      type: DataTypes.STRING,
    }
  },
  { timestamps: false });
};


/* ID (Número de Pokemon) * : No puede ser un ID de un pokemon ya existente en la API pokeapi
Nombre * id 
      img 
       p.hp 
      strength
      defense
      speed
      height 
      weight
      types 
Vida
Ataque
Defensa
Velocidad
Altura
Peso */