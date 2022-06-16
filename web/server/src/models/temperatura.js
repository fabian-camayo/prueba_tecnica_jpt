module.exports = (sequelize, DataType) => {

    const Temperatura = sequelize.define('Temperatura', {
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
  
    return Temperatura;
  
  };