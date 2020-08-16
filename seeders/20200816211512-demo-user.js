"use strict";

module.exports = {
  up: async queryInterface => {
    await queryInterface.bulkInsert(
      "User",
      [
        {
          name: "",
          biography: "",
          languages: "",
          linkedin: "",
          github: "",
          portfolio: "",
          email: "",
          password: "",
          role: "",
          website: ""
        }
      ],
      {}
    );
  },

  down: async queryInterface => {
    await queryInterface.bulkDelete("User", null, {});
  }
};
