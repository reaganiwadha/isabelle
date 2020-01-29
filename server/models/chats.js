'use strict';
module.exports = (sequelize, DataTypes) => {
  const chats = sequelize.define('chats', {
    chatId: DataTypes.STRING,
    chatTitle: DataTypes.STRING
  }, {});
  chats.associate = function(models) {
    // associations can be defined here
  };
  return chats;
};