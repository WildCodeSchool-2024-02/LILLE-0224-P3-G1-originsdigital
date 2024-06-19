const InsertUserRepository = require("./models/InsertUserRepository");
const ItemRepository = require("./models/ItemRepository");
const MajRepository = require("./models/majRepository");

const tables = {};
tables.item = new ItemRepository();
tables.maj = new MajRepository();
tables.insert = new InsertUserRepository();

module.exports = new Proxy(tables, {
  get(obj, prop) {
    if (prop in obj) return obj[prop];
    throw new ReferenceError(
      `tables.${prop} is not defined. Did you register it in ${__filename}?`
    );
  },
});
