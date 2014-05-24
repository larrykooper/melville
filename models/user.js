module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('user', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    salt: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
      associate: function(models) {
        User.hasMany(models.Post)
    }
  })
 
  return User
}