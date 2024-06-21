const AbstractRepository = require("./AbstractRepository");

class MajRepository extends AbstractRepository {
  constructor() {
    super({ table: "user_data" });
  }

  async update(data) {
    await this.database.query(
      `update user_data set lastname = 'Dupont',firstname = 'Jean',email = ?,username = ?,password = ? where id = ?`,
      [data.mail, data.user, data.pass, data.id]
    );
  }

  async read(id) {
    const [info] = await this.database.query(
      `select * from user_data where id = ?`,
      [id]
    );
    return info;
  }
}

module.exports = MajRepository;
