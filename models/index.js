if (!global.hasOwnProperty('db')) {
  var Sequelize = require('sequelize')
    , sequelize = null
 
  if (process.env.NODE_ENV === 'development') {
    // the application is executed on Digital Ocean ... use the postgres database
    var match = process.env.HEROKU_POSTGRESQL_BRONZE_URL.match(/postgres:\/\/([^:]+):([^@]+)@([^:]+):(\d+)\/(.+)/)
 
    sequelize = new Sequelize('melville', 'root', 'b2J3Pj1g93iT0cAX', {
      dialect:  'postgres',
      protocol: 'postgres',
      port:     '49164',
      host:     '172.17.42.1',
      logging:  console.log 
    })
  } else {
    // the application is executed on the local machine ... 
    sequelize = new Sequelize('melville_dev', 'larry1mbp', 'r3cycl3', {    
      dialect:  'postgres',
      protocol: 'postgres',
      port:     '5432',
      host:     'localhost',
      logging:  console.log
    })
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