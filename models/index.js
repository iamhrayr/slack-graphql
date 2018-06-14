import Sequelize from 'sequelize';

// const sequelize = new Sequelize('slack', 'adxqbzkb', '5-gxAugMg0xwvNiHKc8PqqIJYyIwxU-k');
const sequelize = new Sequelize(
    'postgres://adxqbzkb:5-gxAugMg0xwvNiHKc8PqqIJYyIwxU-k@elmer.db.elephantsql.com:5432/adxqbzkb'
);

const models = {
    user: sequelize.import('./user')
    // chanel: sequelize.import('./chanel'),
    // member: sequelize.import('./member'),
    // message: sequelize.import('./message'),
    // team: sequelize.import('./team')
};

Object.keys(models).forEach(modelName => {
    if ('associate' in models[modelName]) {
        models[modelName].associate(models);
    }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models;
