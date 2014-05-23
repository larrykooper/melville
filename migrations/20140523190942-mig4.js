module.exports = {
    up: function(migration, DataTypes, done) {       
       
         migration.renameColumn('posts', 'updated_at', 'updatedAt')
         
    // add altering commands here, calling 'done' when finished
        done()
  },
  down: function(migration, DataTypes, done) {
    // add reverting commands here, calling 'done' when finished
    done()
  }
}
