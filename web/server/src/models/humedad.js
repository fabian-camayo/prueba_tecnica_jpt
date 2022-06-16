module.exports = (sequelize, DataType) => {

    const Humedad = sequelize.define('Humedad', {
      id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      ENG: {
        type: DataType.STRING,
        field: 'ENG'
      }
    }, {
        timestamps: false,
        freezeTableName: true
      });
  
    return Humedad;
  
  };