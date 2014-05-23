module.exports = {
    up: function(migration, DataTypes, done) {
        migration.createTable(
            'users',
            {
                id: { 
                    type: DataTypes.INTEGER, 
                    primaryKey: true,
                    autoIncrement: true
                },
                username: DataTypes.STRING,
                password: DataTypes.STRING,
                salt: DataTypes.STRING,
                email: DataTypes.STRING,
                created_at: {
                    type: DataTypes.DATE
                },
                updated_at: {
                     type: DataTypes.DATE
                }
            })
            done()
    },

    down: function(migration, DataTypes, done) {
        migration.dropTable('users');
        done()
    }
}