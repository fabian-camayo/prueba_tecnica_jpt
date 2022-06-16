module.exports = (sequelize, DataType) => {

    const Nivel = sequelize.define('Nivel', {
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
  
    return Nivel;
  
  };