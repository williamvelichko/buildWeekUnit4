const db = require("../data/db-config");

function get() {
  return db("users");
}

function getById(user_id) {
  return db("users").where("user_id", user_id).first();
}

async function getByFilter(filter) {
  return db("users").where(filter);
}

async function addUser(user) {
  const [result] = await db("users").insert(user).returning("*");

  return result;
}

async function removeUser(user_id) {
  return db("users").where("user_id", user_id).del();
}

module.exports = {
  get,
  getById,
  getByFilter,
  addUser,
  removeUser,
};
