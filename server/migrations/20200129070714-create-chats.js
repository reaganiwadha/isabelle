'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('chats', {
      id: {
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      chatId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      chatTitle: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('chats');
  }
};