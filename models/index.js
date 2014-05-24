if (!global.hasOwnProperty('db')) {
      var Sequelize = require('sequelize')
       , sequelize = null
    //console.log(process.env.NODE_ENV);
    if (process.env.NODE_ENV === 'development') {
        // the application is executed on the local machine

        var match = process.env.DATABASE_URL.match(/postgres:\/\/([^:]+):([^@]+)@([^:]+):(\d+)\/(.+)/)

        sequelize = new Sequelize(match[5], match[1], match[2], {
            dialect:  'postgres',
            protocol: 'postgres',
            port:     match[4],
            host:     match[3],
            logging:  console.log
        });
    } else {
        // the application is executed on Production
        var match = process.env.DATABASE_URL.match(/postgres:\/\/([^:]+):([^@]+)@([^:]+):(\d+)\/(.+)/)

        sequelize = new Sequelize(match[5], match[1], match[2], {
            dialect:  'postgres',
            protocol: 'postgres',
            port:     match[4],
            host:     match[3],
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