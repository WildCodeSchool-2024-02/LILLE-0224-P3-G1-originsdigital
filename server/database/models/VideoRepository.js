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

  async readFree() {
    // Execute the SQL SELECT query to retrieve only free videos
    const [rows] = await this.database.query(`
      SELECT * FROM video_genre AS vg
      RIGHT JOIN video AS v ON v.id = vg.videoID
      LEFT JOIN genre AS g ON g.id = vg.genreID
      WHERE v.status = 'free'
      `);
    return rows;
  }

  async read(id) {
    const [row] = await this.database.query(
      `SELECT *
      FROM video
      JOIN video_genre ON video.id = video_genre.videoID
      JOIN genre ON video_genre.genreID = genre.id where video.id = ?;`,
      [id]
    );
    return row;
  }

  async addVideo(data) {
    const [row] = await this.database.query(
      `INSERT INTO video (titre,release_date,typeID,director,duration,synopsis,image_1,image_2,link,rating,status)
       VALUES (?,?,?,?,?,?,?,?,?,?,?);`,
      [
        data.titre,
        data.release_date,
        data.typeID,
        data.director,
        data.duration,
        data.synopsis,
        data.image_1,
        data.image_2,
        data.link,
        data.rating,
        data.status,
      ]
    );

    await this.database.query(
      `INSERT INTO video_genre (videoID,genreID)
       VALUES (?,?);`,
      [row.insertId, data.number]
    );

    return row;
  }

  async searchFromDB(query) {
    const [rows] = await this.database.query(
      `
      SELECT * FROM video_genre AS vg
      RIGHT JOIN video AS v ON v.id = vg.videoID
      LEFT JOIN genre AS g ON g.id = vg.genreID
      WHERE v.titre LIKE ?
    `,
      [`%${query}%`]
    );

    return rows;
  }

  async browseNotation() {
    const [rows] = await this.database.query(
      `
      SELECT * FROM video where rating > 4 order by id desc;
    `
    );

    return rows;
  }

  async readAllCategories(categorie, type) {
    const [row] = await this.database.query(
      `SELECT *
    FROM video
    JOIN video_genre ON video.id = video_genre.videoID
    JOIN genre ON video_genre.genreID = genre.id WHERE name = ? AND typeID = ? limit 3;`,
      [categorie, type]
    );
    return row;
  }
}

module.exports = VideoRepository;
