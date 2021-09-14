const reservation = require('./reservation');
const user = require('./user');


user.hasMany(reservation, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

reservation.belongsTo(user, {
  foreignKey: 'user_id'
});

module.exports = { reservation, user };