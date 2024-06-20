const AbstractRepository = require("./AbstractRepository");

class VideoRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "video" as configuration
    super({ table: "video" });
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "video" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of videos
    return rows;
  }
}

module.exports = VideoRepository;
