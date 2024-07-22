const AbstractSeeder = require("./AbstractSeeder");

class AdminSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "admin", truncate: true });
  }

  run() {
    const admins = [
      {
        username: "admin1",
        password: "password123",
      },
      {
        username: "admin2",
        password: "password123",
      },
    ];

    admins.forEach((admin) => {
      const adminWithRefName = {
        ...admin,
        refName: `admin_${admin.username}`,
      };

      this.insert(adminWithRefName);
    });
  }
}

module.exports = AdminSeeder;
