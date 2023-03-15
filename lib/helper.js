const BaseURL = "http://localhost:3000/api/";

export default async function getPost(id) {
  const res = await fetch(`${BaseURL}posts`);
  const posts = await res.json();

  if (id) {
    return posts.find((value) => value.id === id);
  }

  return posts;
}
