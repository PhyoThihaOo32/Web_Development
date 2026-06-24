import express from "express";
const router = express.Router(); // create a mini Express router

let posts = [
  {
    id: 1,
    title: "Post 1",
  },
  {
    id: 2,
    title: "Post 2",
  },
  {
    id: 3,
    title: "Post 3",
  },
  {
    id: 4,
    title: "Post 4",
  },
];

// get all posts
router.get("/", (req, res, next) => {
  const limit = parseInt(req.query.limit);
  if (!isNaN(limit) && limit > 0) {
    res.status(200).json(posts.slice(0, limit));
  } else {
    res.status(200).json(posts);
  }
});

// get single post
router.get("/:id", (req, res, next) => {
  const id = Number(req.params.id);
  //   res.status(200).json(posts.filter((post) => post.id === id));
  const post = posts.find((post) => post.id === id);

  if (!post) {
    // res
    //   .status(404)
    //   .json({ message: `A post with the id of ${id} was not found` });

    // error handling
    const error = new Error(`A post with the id of ${id} was not found`);
    error.status = 404;
    return next(error);
  } else {
    res.status(200).json(post);
  }
});

// create new post
router.post("/", (req, res, next) => {
  //   console.log(req.body);
  //   res.status(201).json(posts);
  const newPost = {
    id: posts.length + 1,
    title: req.body?.title,
  };

  if (!newPost.title) {
    // return res.status(400).json({ message: "Title Missing" });
    const error = new Error(`Please include a title`);
    error.status = 400;
    return next(error);
  }
  posts.push(newPost);
  res.status(201).json(posts);
});

// update post
router.put("/:id", (req, res, next) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);
  if (!post) {
    // return res.status(404).json({ message: `${id} not found` });
    const error = new Error(`id ${id} not found.`);
    error.status = 404;
    return next(error);
  }

  post.title = req.body.title;
  res.status(200).json(posts);
});

// delete post
router.delete("/:id", (req, res, next) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);
  if (!post) {
    //return res.status(404).json({ message: `${id} not found` });
    const error = new Error(`id ${id} not found.`);
    error.status = 404;
    return next(error);
  }

  posts = posts.filter((post) => post.id !== id);
  res.status(200).json(posts);
});

// export
// module.exports = router;
export default router;
