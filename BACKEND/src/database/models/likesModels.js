const database = require("../dbconfig");

const AddLike = async (titulo, img, descripcion) => {
  try {
    const consulta =
      "INSERT INTO POSTS (titulo, img, descripcion) VALUES ($1, $2, $3) RETURNING *";
    const values = [titulo, img, descripcion];
    const result = await database.query(consulta, values);
    if (result.rowCount) {
      return {
        msg: "Post agregado",
        data: result.rows[0],
      };
    } else {
      return {
        msg: "Post no agregado",
        data: [],
      };
    }
  } catch (error) {
    console.error("Error en AddLike:", error);
    throw error;
  }
};

const getLike = async () => {
  try {
    const consulta = "SELECT * FROM POSTS";
    const { rows } = await database.query(consulta);
    if (rows.length) {
      return {
        msg: "Post tomado",
        data: rows,
      };
    } else {
      return {
        msg: "No existen posts",
        data: [],
      };
    }
  } catch (error) {
    console.error("Error en getLike:", error);
    throw error;
  }
};

const updateLike = async (id, titulo, img, descripcion) => {
  try {
    const consulta =
      "UPDATE POSTS SET titulo = $1, img = $2, descripcion = $3 WHERE id = $4 RETURNING *";
    const values = [titulo, img, descripcion, id];

    const result = await database.query(consulta, values);
    if (result.rowCount) {
      return {
        msg: "Post modificado",
        data: result.rows[0],
      };
    } else {
      return {
        msg: "Post no modificado",
        data: [],
      };
    }
  } catch (error) {
    const err = new Error("Error en la consulta");

    err.msg = "Bad Request";
    err.status = "400";
    err.origin = "Database";
    err.model = "posts";
    err.details = error.message;

    throw err;
  }
};
const deleteLike = async (id) => {
  try {
    const consulta = "DELETE FROM POSTS WHERE id = $1 RETURNING *";
    const values = [id];
    const result = await database.query(consulta, values);
    if (result.rowCount) {
      return {
        msg: "Post eliminado",
        data: result.rows[0],
      };
    } else {
      return {
        msg: "Post no eliminado",
        data: [],
      };
    }
  } catch (error) {
    const err = new Error("Error en la consulta");

    err.msg = "Bad Request";
    err.status = "400";
    err.origin = "Database";
    err.model = "posts";
    err.details = error.message;

    throw err;
  }
};
const likeCollection = {
  AddLike,
  getLike,
  updateLike,
  deleteLike,
};

module.exports = { likeCollection };
