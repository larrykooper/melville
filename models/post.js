module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define('post', {
    title: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        Post.belongsTo(models.User)
      }
    }
  })
 
  return Post
}
