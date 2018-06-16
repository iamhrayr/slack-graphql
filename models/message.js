export default (sequelize, DataTypes) => {
    const Message = sequelize.define('message', {
        text: DataTypes.STRING
    });

    Message.associate = function(models) {
        // 1:M
        Message.belongsTo(models.Channel, {
            foriegnKey: 'channelId'
        });
        Message.belongsTo(models.User, {
            foriegnKey: 'userId'
        });
    };

    return Message;
};
