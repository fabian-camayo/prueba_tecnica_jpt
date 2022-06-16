module.exports = {
    database: '../../db/quiz.db',
    username: '',
    password: '',
    params: {
      dialect: 'sqlite',
      storage: '../../db/quiz.db',
      define: {
        underscored: true
      },
      operatorsAliases: false
    }
  };