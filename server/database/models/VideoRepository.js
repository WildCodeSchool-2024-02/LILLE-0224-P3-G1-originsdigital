const AbstractRepository = require("./AbstractRepository");

class VideoRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "video" as configuration
    super({ table: "video" });
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all items with joins
    const [rows] = await this.database.query(`
      SELECT * FROM video_genre AS vg
      RIGHT JOIN video AS v ON v.id = vg.videoID
      LEFT JOIN genre AS g ON g.id = vg.genreID
    `);

    // Return the array of results
    return rows;
  }
}

module.exports = VideoRepository;
