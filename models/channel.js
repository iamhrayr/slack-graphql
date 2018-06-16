export default (sequelize, DataTypes) => {
    const Channel = sequelize.define('channel', {
        name: DataTypes.STRING,
        public: DataTypes.BOOLEAN
    });

    Channel.associate = function(models) {
        // 1:M
        Channel.belongsTo(models.Team, {
            foriegnKey: { name: 'teamId', field: 'team_id' }
        });
        Channel.belongsToMany(models.User, {
            through: 'channel_member',
            foriegnKey: { name: 'channelId', field: 'channel_id' }
        });
    };

    return Channel;
};
