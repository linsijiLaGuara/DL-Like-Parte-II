// Reemplazar por la URL de la API
const URL_API = "http://localhost:3000/api/like";

export const getPosts = async () => {
  const response = await fetch(URL_API + "/get");
  console.log("consulta tomanda:", response);
  const { data } = await response.json();
  return data;
};

export const addPost = async (post) => {
  const response = await fetch(URL_API + "/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  });
  const data = await response.json();
  return data;
};

export const deletePost = async (id) => {
  await fetch(URL_API + "/delete/" + `${id}`, {
    method: "DELETE",
  });
};

export const likePost = async (id) => {
  await fetch(`${URL_API}/like/${id}`, {
    method: "PUT",
  });
};
