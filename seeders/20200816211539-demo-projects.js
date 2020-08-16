"use strict";

module.exports = {
  up: async queryInterface => {
    await queryInterface.bulkInsert(
      "Project",
      [
        {
          title: "",
          description: "",
          language: ""
        }
      ],
      {}
    );
  },

  down: async queryInterface => {
    await queryInterface.bulkDelete("Project", null, {});
  }
};
