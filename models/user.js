module.exports = function(sequelize, DataTypes) {
	var Users = sequelize.define("Users", {
		IID: {
			type: DataTypes.STRING,
			UNIQUE: true
		},
		firstName: {
			type: DataTypes.STRING,
		},
		lastName: {
			type: DataTypes.STRING,
		},
		DOB: {
			type: DataTypes.DATEONLY,
		},
		DOD: {
			type: DataTypes.DATEONLY,
		},
		Tribe: {
			type: DataTypes.STRING,
		},
		caseNum: {
			type: DataTypes.STRING,
		},
		SSN: {
			type: DataTypes.STRING,
			UNIQUE: true
		},
		PIN: {
			type: DataTypes.INTEGER,
		}

	});

	return Users;
}
