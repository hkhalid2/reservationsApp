const sequelize = require('../config/connection');
const { user, reservation } = require('../models');

const userData = require('./userData.json');
const resData = require('./resData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await user.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const res of resData) {
    await reservation.create({
      ...res,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();