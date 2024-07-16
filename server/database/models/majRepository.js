const AbstractRepository = require("./AbstractRepository");

class MajRepository extends AbstractRepository {
  constructor() {
    super({ table: "user_data" });
  }

  async update(data, id) {
    await this.database.query(
      `update user_data set username = ?,email = ?,password = ? where username = ?`,
      [data.username, data.email, data.hashedPassword, id]
    );
  }

  async read(id) {
    const [info] = await this.database.query(
      `select * from user_data where id = ?`,
      [id]
    );
    return info;
  }

  async verify(name) {
    const info = await this.database.query(
      `select username from user_data where username = ?`,
      [name]
    );
    return info;
  }

  async verifyEmail(email) {
    const info = await this.database.query(
      `select email from user_data where email = ?`,
      [email]
    );
    return info;
  }

  async verifyPseudoOrEmail(pseudoOrEmail) {
    const [info] = await this.database.query(
      `select * from user_data where username = ? or email = ?`,
      [pseudoOrEmail, pseudoOrEmail]
    );
    return info;
  }
}

module.exports = MajRepository;
