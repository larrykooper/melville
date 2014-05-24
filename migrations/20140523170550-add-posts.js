module.exports = {
    up: function(migration, DataTypes, done) {
        migration.createTable(
            'posts',
             {
                id: {
                    type: DataTypes.INTEGER, 
                    primaryKey: true,
                    autoIncrement: true 
                  },
                title: DataTypes.TEXT,
                body:  DataTypes.TEXT,
                status: DataTypes.STRING,
                user_id: DataTypes.INTEGER,
                createdAt: {
                    type: DataTypes.DATE
                },
                updatedAt: {
                    type: DataTypes.DATE
                }
        })
        done()
    },

    down: function(migration, DataTypes, done) {
        migration.dropTable('posts');
        done()
    }
}