module.exports = app =>{
    app.db.sequelize.sync();

    app.listen(app.get('port'), ()=>{
        console.log('Server on port', app.get('port'));
    });
}