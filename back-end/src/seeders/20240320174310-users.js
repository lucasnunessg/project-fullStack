'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  await queryInterface.bulkInsert('users',[
    {
      full_name: 'Lucas Pacheco Nunes',
      email: 'lucasnunes@dev.com.br',
      contact: '55 9 99904918'
    },
    {
      full_name: 'Julia Trindade Modernel',
      email: 'julia@dev.com.br',
      contact: '55 9999 99999'
    },
    {
      full_name: 'Eloisa Pacheco Nunes',
      email: 'eloisanunes@dev.com.br',
      contact: '555 94944940'
    },
    {
      full_name: 'Eli Fernando Marques Nunes',
      email: 'elinunes@dev.com.br',
      contact: '55 959595959'
    },
    {
    full_name: 'Cristian Pacheco Nunes',
    email: 'cristian@dev.com.br',
    contact: '55 99999999'
    },
  ],{
    underscored: true,
    timestamps: false,
  })
  },

  async down (queryInterface, Sequelize) {
await queryInterface.bulkDelete('users', null, {})
  }
};
