const sequelize = require('../config/connection');
const { user, reservation } = require('../models');

const userData = require('./userData.json');
const resData = require('./resData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const reservation of resData) {
    await reservation.create({
      ...reservation,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();