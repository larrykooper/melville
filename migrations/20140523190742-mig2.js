module.exports = {
    up: function(migration, DataTypes, done) {       
        migration.renameColumn('users', 'updated_at', 'updatedAt')
        done()
  },
  down: function(migration, DataTypes, done) {
    // add reverting commands here, calling 'done' when finished
    done()
  }
}
