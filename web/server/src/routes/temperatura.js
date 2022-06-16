module.exports = app => {

  const Temperatura = app.db.models.Temperatura;

  const Nivel = app.db.models.Nivel;
  const getPagination = (page, size) => {
    const limit = size ? +size : 10;
    const offset = page ? page * limit : 0;

    return { limit, offset };
  };

  const getPagingData = (data, page, limit) => {
    const { count: totalItems, rows: Temperatura } = data;
    const currentPage = page ? +page : 0;
    const totalPages = Math.ceil(totalItems / limit);

    return { totalItems, Temperatura, totalPages, currentPage };
  };

  app.route('/temperatura')
    .get((req, res) => {
      const { page, size } = req.query;

      const { limit, offset } = getPagination(page, size);

      Temperatura.findAndCountAll({
        limit: limit,
        offset: offset
      })
        .then(data => {
          const response = getPagingData(data, page, limit);
          res.send(response);
        })
        .catch(error => {
          res.status(412).json({ msg: error.message });
        });
    })

    app.route('/temperatura-all')
    .get((req, res) => {
      Temperatura.findAll({})
        .then(data => {
          res.send(data);
        })
        .catch(error => {
          res.status(412).json({ msg: error.message });
        });
    })
};