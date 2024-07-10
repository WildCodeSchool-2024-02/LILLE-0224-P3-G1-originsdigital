const argon2 = require("argon2");

const jwt = require("jsonwebtoken");

const tables = require("../../database/tables");

const add = async (req, res, next) => {
  const data = req.body;
  try {
    await tables.insert.add(data);
  } catch (err) {
    next(err);
  }
  return res.status(200).json({ message: "ENREGISTRÉ !" });
};

const edit = async (req, res, next) => {
  const data = req.body;
  const { id } = req.params;
  try {
    await tables.maj.update(data, id);
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

const verify = async (req, res, next) => {
  try {
    const [verif] = await tables.maj.verify(req.params.name);
    res.json(verif);
  } catch (err) {
    next(err);
  }
};

const verifyEmail = async (req, res, next) => {
  try {
    const [verif] = await tables.maj.verifyEmail(req.params.email);
    res.json(verif);
  } catch (err) {
    next(err);
  }
};

const verifyPseudoOrEmail = async (req, res, next) => {
  try {
    const [verif] = await tables.maj.verifyPseudoOrEmail(
      req.body.pseudoOrEmail
    );
    if (verif) {
      const verified = await argon2.verify(verif.password, req.body.password);

      if (verified) {
        const token = await jwt.sign(
          { sub: verif.id, isAdmin: verif.status },
          process.env.APP_SECRET,
          {
            expiresIn: "1m",
          }
        );

        res.json({ password: true, results: verif, secureKey: token });
      } else {
        res.json({ password: false });
      }
    } else {
      res.json({ username: "no username" });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  edit,
  read,
  add,
  verify,
  verifyEmail,
  verifyPseudoOrEmail,
};
