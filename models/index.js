var config = require('./config');
var db_conn;

if (!global.hasOwnProperty('db')) {
      var Sequelize = require('sequelize')
       , sequelize = null
    //console.log(process.env.NODE_ENV);
    if (process.env.NODE_ENV === 'development') {
        // the application is executed on the local machine ...
        db_conn = config.database.development;
        sequelize = new Sequelize(db_conn.database, db_conn.username, db_conn.password,  {
            dialect:  db_conn.dialect,
            protocol: db_conn.protocol,
            port:     db_conn.port,
            host:     db_conn.host,
            logging:  console.log
        });
    } else {
        // the application is executed on Digital Ocean ... use the postgres database
        db_conn = config.database.production;
        sequelize = new Sequelize(db_conn.database, db_conn.username, db_conn.password, {
            dialect:  db_conn.dialect,
            protocol: db_conn.protocol,
            port:     db_conn.port,
            host:     db_conn.host,
            logging:  console.log
        });
     }
 
    global.db = {
        Sequelize: Sequelize,
        sequelize: sequelize,
        User:      sequelize.import(__dirname + '/user'),
        Post:   sequelize.import(__dirname + '/post')
       // add your other models here
    }

  /*
    Associations can be defined here. E.g. like this:
    global.db.User.hasMany(global.db.SomethingElse)
  */

  //for more on assoc see http://sequelizejs.com/articles/express

}

module.exports = global.db