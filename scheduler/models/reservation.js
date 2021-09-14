const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

//create Reservation model
class reservation extends Model {}

reservation.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        guest_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        reservation_date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        phone_num: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        party_num: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'user',
              key: 'id',
        },
    },
 },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'reservation',
      }
);

module.exports = reservation;