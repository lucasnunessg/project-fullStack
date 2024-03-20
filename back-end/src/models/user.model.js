const userModel = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        full_name: DataTypes.STRING,
        email: DataTypes.STRING,
        contact: DataTypes.STRING
    }, {
        tableName: 'users'
    });

    return User;
};