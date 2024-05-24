const { likeCollection } = require("../database/models/likesModels");

const add_like_controller = async (req, res, next) => {
  try {
    const { titulo, img, descripcion } = req.body;
    const response = await likeCollection.AddLike(titulo, img, descripcion);
    res.send(response);
  } catch (error) {
    next(error);
  }
};

const get_like_controller = async (req, res, next) => {
  try {
    const response = await likeCollection.getLike();
    res.send(response);
  } catch (error) {
    next(error);
  }
};

const update_like_controller = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { titulo, img, descripcion } = req.body;

    const response = await likeCollection.updateLike(
      id,
      titulo,
      img,
      descripcion
    );

    res.json(response);
  } catch (error) {
    next(error);
  }
};

const delete_like_controller = async (req, res, next) => {
  try {
    const { id } = req.params;

    const response = await likeCollection.deleteLike(id);

    res.json(response);
  } catch (error) {
    next(error);
  }
};
module.exports = {
  add_like_controller,
  get_like_controller,
  update_like_controller,
  delete_like_controller,
};
