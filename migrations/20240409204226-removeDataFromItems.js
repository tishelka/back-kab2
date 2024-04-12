"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Удалить все строки из таблицы "Items"
    return queryInterface.bulkDelete("Items", null, {});
  },

  down: async (queryInterface, Sequelize) => {
    // Необходимо определить, как восстановить данные, если это необходимо
  },
};
