const AbstractSeeder = require("./AbstractSeeder");

class UserSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "user_data", truncate: true });
  }

  run() {
    const users = [
      {
        lastname: "Dupont",
        firstname: "Jean",
        email: "jean.dupont@example.com",
        username: "jdupont",
        password: "password123",
        status: 1,
      },
      {
        lastname: "Martin",
        firstname: "Marie",
        email: "marie.martin@example.com",
        username: "mmartin",
        password: "password123",
        status: 1,
      },
      {
        lastname: "Leroy",
        firstname: "Julien",
        email: "julien.leroy@example.com",
        username: "jleroy",
        password: "password123",
        status: 1,
      },
      {
        lastname: "Moreau",
        firstname: "Sophie",
        email: "sophie.moreau@example.com",
        username: "smoreau",
        password: "password123",
        status: 1,
      },
      {
        lastname: "Fournier",
        firstname: "Lucas",
        email: "lucas.fournier@example.com",
        username: "lfournier",
        password: "password123",
        status: 1,
      },
      {
        lastname: "Dubois",
        firstname: "Claire",
        email: "claire.dubois@example.com",
        username: "cdubois",
        password: "password123",
        status: 1,
      },
      {
        lastname: "Lambert",
        firstname: "Antoine",
        email: "antoine.lambert@example.com",
        username: "alambert",
        password: "password123",
        status: 1,
      },
      {
        lastname: "Rousseau",
        firstname: "Emma",
        email: "emma.rousseau@example.com",
        username: "erousseau",
        password: "password123",
        status: 1,
      },
      {
        lastname: "Lefevre",
        firstname: "David",
        email: "david.lefevre@example.com",
        username: "dlefevre",
        password: "password123",
        status: 2,
      },
      {
        lastname: "Perrin",
        firstname: "Julie",
        email: "julie.perrin@example.com",
        username: "jperrin",
        password: "password123",
        status: 2,
      },
    ];

    users.forEach((user) => {
      const userWithRefName = {
        ...user,
        refName: `user_data_${user.username}`,
      };

      this.insert(userWithRefName);
    });
  }
}

module.exports = UserSeeder;