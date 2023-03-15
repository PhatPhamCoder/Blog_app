import data from "../data";

//
export default function handler(req, res) {
  const { postId } = req.query;
  const { Posts } = data;

  if (postId) {
    const posts = Posts.find((value) => value.id == postId);
    return res.status(200).json(posts);
  }

  return res.staus(404).json({
    error: "Data Not Found",
  });
}
