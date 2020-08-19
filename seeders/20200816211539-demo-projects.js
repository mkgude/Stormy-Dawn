"use strict";

module.exports = {
  up: async queryInterface => {
    await queryInterface.bulkInsert(
      "Project",
      [
        {
          title: "",
          description: "",
          languages: "",
          name: "",
          website: "",
          cause: "",
          location: ""
        }
      ],
      {}
    );
  },

  down: async queryInterface => {
    await queryInterface.dropTable;
    ("Project");
  }
};
