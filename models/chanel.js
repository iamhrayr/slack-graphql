export default (sequelize, DataTypes) => {
    const Channel = sequelize.define('channel', {
        name: DataTypes.STRING,
        public: DataTypes.BOOLEAN,
    });

    Channel.associate = function(models) {
        Channel.belongsTo(models.Team, {
            foriegnKey: 'teamId'
        });
    };

    return Channel;
};
