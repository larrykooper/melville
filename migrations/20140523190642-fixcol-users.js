module.exports = {
    up: function(migration, DataTypes, done) {
        migration.renameColumn('users', 'created_at', 'createdAt')
    // add altering commands here, calling 'done' when finished
        done()
  },
  down: function(migration, DataTypes, done) {
    // add reverting commands here, calling 'done' when finished
    done()
  }
}
