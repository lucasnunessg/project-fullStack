'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
     id: {
      allowNull: false,
      primaryKey: true, 
      autoIncrement: true,
      type: Sequelize.INTEGER
     },
     fullName: {
      type: Sequelize.STRING,
      field: 'full_name'
     },
     email: {
      type: Sequelize.STRING,
      unique: true
     },
     contact: {
      type: Sequelize.STRING
     },
    });
  },

  async down (queryInterface, Sequelize) {
 await queryInterface.dropTable('users');
  }
};
