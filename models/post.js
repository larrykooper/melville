module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define('post', {
    title: DataTypes.TEXT,
    body: DataTypes.TEXT,
    status: DataTypes.STRING,
    user_id: DataTypes.INTEGER

  }, {

      associate: function(models) {
        Post.belongsTo(models.User)

    }
  })

  return Post
}
