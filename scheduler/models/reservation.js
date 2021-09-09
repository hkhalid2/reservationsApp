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
        email_add: {
            type: DataTypes.STRING,
            allowNull: false
        },

        // unsure on how to write this property
        // date_time: { 
        //     type: DataTypes.da

        // }
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