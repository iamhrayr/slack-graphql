export default {
    Mutation: {
        createMessage: async (parent, args, { models, user }) => {
            try {
                await models.Message.create({ ...args, userId: user.id });
            } catch (e) {
                console.log(e);
                return false;
            }
        }
    }
};
