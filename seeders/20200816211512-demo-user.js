"use strict";

module.exports = {
  up: async queryInterface => {
    await queryInterface.bulkInsert(
      "User",
      [
        {
          name: "nino",
          biography: "nnnn",
          languages: "ssss",
          linkedin: "",
          github: "",
          portfolio: "",
          email: "nnn@gmail",
          password: "123",
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
