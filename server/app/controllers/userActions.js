const tables = require("../../database/tables");

const add = async (req, res, next) => {
  const data = req.body;
  try {
    await tables.insert.add(data);
  } catch (err) {
    next(err);
  }
  return res.status(200).json({ message: "ENREGISTRÉ" });
};

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
  add,
};
