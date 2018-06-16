export default (sequelize, DataTypes) => {
    const Team = sequelize.define('team', {
        name: {
            type: DataTypes.STRING,
            unique: true
        }
    });

    Team.associate = function(models) {
        Team.belongsToMany(models.User, {
            through: 'member',
            foriegnKey: { name: 'teamId', field: 'team_id' }
        });
        Team.belongsTo(models.User, {
            foriegnKey: 'owner'
        });
    };

    return Team;
};
