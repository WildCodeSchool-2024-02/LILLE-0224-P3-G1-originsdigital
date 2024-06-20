const AbstractRepository = require("./AbstractRepository");

class MajRepository extends AbstractRepository {
  constructor() {
    super({ table: "users" });
  }

  async update(data) {
    await this.database.query(
      `update users set lastname = 'Dupont',firstname = 'Jean',email = ?,username = ?,password = ? where id = ?`,
      [data.mail, data.user, data.pass, data.id]
    );
  }

  async read(id) {
    const [info] = await this.database.query(
      `select * from users where id = ?`,
      [id]
    );
    return info;
  }
}

module.exports = MajRepository;
