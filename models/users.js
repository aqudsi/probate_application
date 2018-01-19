module.exports = function(sequelize, DataTypes) {
	var users = sequelize.define("users", {
		id: {
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER
		},
		usersname: {
			type: DataTypes.STRING,
			notEmpty: true,
			unique: true
		},
		password: {
			type: DataTypes.STRING,
			notEmpty: true
		},
		last_login: {
			type: DataTypes.DATE
		},
	});

// generateHash = function(password) {
//     return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
// };

	return users;
}
