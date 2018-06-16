export default (sequelize, DataTypes) => {
    const Message = sequelize.define('message', {
        text: DataTypes.STRING
    });

    Message.associate = function(models) {
        // 1:M
        Message.belongsTo(models.Channel, {
            foriegnKey: { name: 'channelId', field: 'channel_id' }
        });
        Message.belongsTo(models.User, {
            foriegnKey: { name: 'userId', field: 'user_id' }
        });
    };

    return Message;
};
