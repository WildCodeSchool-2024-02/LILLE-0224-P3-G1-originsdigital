const AbstractSedder = require("./AbstractSeeder");

class ModeratorSeeder extends AbstractSedder {
  constructor() {
    super({ table: "moderator", truncate: true });
  }

  run() {
    const moderators = [
      {
        username: "moderator1",
        password: "password123",
      },
      {
        username: "moderator2",
        password: "password123",
      },
    ];

    moderators.forEach((moderator) => {
      const moderatorWithRefName = {
        ...moderator,
        refName: `moderator_${moderator.username}`,
      };

      this.insert(moderatorWithRefName);
    });
  }
}

module.exports = ModeratorSeeder;
