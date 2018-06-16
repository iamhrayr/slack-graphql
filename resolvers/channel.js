export default {
    Mutation: {
        createChannel: async (parent, args, { models }) => {
            try {
                await models.Channel.create();
            } catch (e) {
                console.log(e);
                return false;
            }
        }
    }
};
