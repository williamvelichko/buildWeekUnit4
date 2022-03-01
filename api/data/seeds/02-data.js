/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("items")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("items").insert([
        {
          name: "tomatos",
          description: "the freshest of them all",
          price: 10.0,
        },
        {
          name: "apples",
          description: "the sweetest of them all",
          price: 15.0,
        },
        { name: "chips", description: "the most loved", price: 8.0 },
      ]);
    });
};
