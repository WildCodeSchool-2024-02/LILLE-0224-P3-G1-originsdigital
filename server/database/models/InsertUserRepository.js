const AbstractRepository = require("./AbstractRepository");

class InsertUserRepository extends AbstractRepository {
  constructor() {
    super({ table: "user_data" });
  }

  async add(data) {
    await this.database.query(
      `insert into ${this.table} (lastname,firstname,email,username,password,status) values (?,?,?,?,?,?)`,
      [
        data.last
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&#39;"),
        data.first
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&#39;"),
        data.mail,
        data.user
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&#39;"),
        data.hashedPassword,
        1,
      ]
    );
  }
}

module.exports = InsertUserRepository;
