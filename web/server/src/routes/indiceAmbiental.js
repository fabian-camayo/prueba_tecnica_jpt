module.exports = app => {

  const IndiceAmbiental = app.db.models.IndiceAmbiental;

  const getPagination = (page, size) => {
    const limit = size ? +size : 10;
    const offset = page ? page * limit : 0;

    return { limit, offset };
  };

  const getPagingData = (data, page, limit) => {
    const { count: totalItems, rows: IndiceAmbiental } = data;
    const currentPage = page ? +page : 0;
    const totalPages = Math.ceil(totalItems / limit);

    return { totalItems, IndiceAmbiental, totalPages, currentPage };
  };

  app.route('/indice-ambiental')
    .get((req, res) => {
      const { page, size } = req.query;

      const { limit, offset } = getPagination(page, size);

      IndiceAmbiental.findAndCountAll({
        order: [['id', 'DESC']],
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
    .post((req, res) => {
      const {humedad, nivel, temperatura} = req.body;
      var data = {
        "ENG": ((0.5*temperatura) + (0.15*humedad) + (0.2*nivel)).toString()
      }
      IndiceAmbiental.create(data)
        .then(result => res.json(result))
        .catch(error => {
          res.status(412).json({msg: error.message});
        });
    });

};