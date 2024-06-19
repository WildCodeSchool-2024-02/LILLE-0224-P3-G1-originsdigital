const tables = require("../../database/tables");

const edit = async (req, res, next) => {
  const data = req.body;

  try {
    await tables.maj.update(data);
    res.status(201);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const user = await tables.maj.read(req.params.id);
    res.json(user);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  edit,
  read,
};
