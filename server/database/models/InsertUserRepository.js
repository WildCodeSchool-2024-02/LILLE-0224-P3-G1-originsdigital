const AbstractRepository = require("./AbstractRepository");

class InsertUserRepository extends AbstractRepository {
  constructor() {
    super({ table: "user_data" });
  }

  async add(data) {
    await this.database.query(
      `insert into ${this.table} (lastname,firstname,email,username,password,status) values (?,?,?,?,?,?)`,
      [data.last, data.first, data.mail, data.user,data.pass,1]
    );
  }

 
}

module.exports = InsertUserRepository;
