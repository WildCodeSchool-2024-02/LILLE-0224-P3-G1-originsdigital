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

module.exports = {
  add,
};
