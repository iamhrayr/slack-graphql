import Sequelize from 'sequelize';

// const sequelize = new Sequelize('slack', 'adxqbzkb', '5-gxAugMg0xwvNiHKc8PqqIJYyIwxU-k', {
//     dialect: 'postgres'
// });
const sequelize = new Sequelize(
    'postgres://adxqbzkb:5-gxAugMg0xwvNiHKc8PqqIJYyIwxU-k@elmer.db.elephantsql.com:5432/adxqbzkb'
);

sequelize.authenticate().then(() => {
    console.log('connected to DB');
});

const models = {
    User: sequelize.import('./user'),
    Channel: sequelize.import('./channel'),
    Message: sequelize.import('./message'),
    Team: sequelize.import('./team')
};

Object.keys(models).forEach(modelName => {
    if ('associate' in models[modelName]) {
        models[modelName].associate(models);
    }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models;
