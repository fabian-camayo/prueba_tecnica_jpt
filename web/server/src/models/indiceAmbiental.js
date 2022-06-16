module.exports = (sequelize, DataType) => {

    const IndiceAmbiental = sequelize.define('IndiceAmbiental', {
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
  
    return IndiceAmbiental;
  
  };