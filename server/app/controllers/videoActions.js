// Import access to database tables
const tables = require("../../database/tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all items from the database
    const videos = await tables.video.readAll();

    // Respond with the items in JSON format
    res.json(videos);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const browseFree = async (req, res, next) => {
  try {
    // Fetch only free items from the database
    const freeVideos = await tables.video.readFree();

    // Respond with the items in JSON format
    res.json(freeVideos);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const video = await tables.video.read(req.params.id);
    res.json(video);
  } catch (err) {
    next(err);
  }
};

const addVideo = async (req, res, next) => {
  const data = req.body;
  try {
    await tables.video.addVideo(data);
    res.json({ message: "video enregistré !" });
  } catch (err) {
    next(err);
  }
};

const search = async (req, res, next) => {
  try {
    const { title } = req.query;
    const searchResults = await tables.video.searchFromDB(title);
    res.json(searchResults);
  } catch (err) {
    next(err);
  }
};

const browseNotation = async (req, res, next) => {
  try {
    const searchNotation = await tables.video.browseNotation();
    res.json(searchNotation);
  } catch (err) {
    next(err);
  }
};

const cat = async (req, res, next) => {
  const { categorie, type } = req.params;

  try {
    const result = await tables.video.readAllCategories(categorie, type);
    res.json(result);
  } catch (err) {
    next(err);
  }
};
module.exports = {
  browse,
  browseFree,
  read,
  addVideo,
  search,
  browseNotation,
  cat,
};
