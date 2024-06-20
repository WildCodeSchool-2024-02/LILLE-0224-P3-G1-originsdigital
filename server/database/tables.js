const InsertUserRepository = require("./models/InsertUserRepository");
const ItemRepository = require("./models/ItemRepository");
const MajRepository = require("./models/majRepository");
const VideoRepository = require("./models/VideoRepository");

const tables = {};
tables.item = new ItemRepository();
tables.maj = new MajRepository();
tables.insert = new InsertUserRepository();
tables.video = new VideoRepository();

/* ************************************************************************* */

// Use a Proxy to customize error messages when trying to access a non-existing table

// Export the Proxy instance with custom error handling

module.exports = new Proxy(tables, {
  get(obj, prop) {
    if (prop in obj) return obj[prop];
    throw new ReferenceError(
      `tables.${prop} is not defined. Did you register it in ${__filename}?`
    );
  },
});
