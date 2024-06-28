const argon2 = require("argon2");

const hashPassword = async (req, res, next) => {
  try {
    const { pass } = req.body;
    const hashedPassword = await argon2.hash(pass);

    req.body.hashedPassword = hashedPassword;
    delete req.body.pass;

    next();
  } catch (err) {
    next(err);
  }
};

module.exports = hashPassword;
