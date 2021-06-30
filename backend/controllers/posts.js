const Post = require("../models/post");

exports.createPost = (req, res, next) => {
  const url = req.protocol + "://" + req.get("host");
 
  const post = new Post({

    title: req.body.title,
    content: req.body.content,
    language: req.body.language,
    genre: req.body.genre,
    author: req.body.author,
    imagePath: url + "/images/" + req.file.filename,
    bookPath: "kdjfkdjfkdj",
    creator: req.userData.userId
    
  });
  console.log(req.file);
  post
    .save()
    .then(createdPost => {
      res.status(201).json({
        message: "Post added successfully",
        post: {
          ...createdPost,
          id: createdPost._id
        }
      });
    })
    .catch(error => {
      res.status(500).json({
        message: error
      });
    });
};

exports.updatePost = (req, res, next) => {
  let imagePath = req.body.imagePath;
  if (req.file) {
    const url = req.protocol + "://" + req.get("host");
    imagePath = url + "/images/" + req.file.filename;
    console.log(req.file);
  }
  const post = new Post({
    _id: req.body.id,
    title: req.body.title,
    content: req.body.content,
    imagePath: imagePath,
    language: req.body.language,
    genre: req.body.genre,
    author: req.body.author,
    creator: req.userData.userId
  });
  Post.updateOne({ _id: req.params.id, creator: req.userData.userId }, post)
    .then(result => {
      if (result.n > 0) {
        res.status(200).json({ message: "Update successful!" });
      } else {
        res.status(401).json({ message: "Not authorized!" });
      }
    })
    .catch(error => {
      res.status(500).json({
        message: "Couldn't udpate post!"
      });
    });
};

exports.getPosts = (req, res, next) => {
 
  
  const postQuery = Post.find();
  let fetchedPosts;
 
  postQuery
    .then(documents => {
      fetchedPosts = documents;
      return Post.count();
    })
    .then(count => {
      res.status(200).json({
        message: "Posts fetched successfully!",
        posts: fetchedPosts
       
      });
    })
    .catch(error => {
      res.status(500).json({
        message: "Fetching posts failed!"
      });
    });
};

exports.getGenres = (req, res, next) => {
  
  const postQuery = Post.find({genre: "Fantasy"});
  let fetchedPosts;
  
  postQuery
    .then(documents => {
      console.log(documents);
      fetchedPosts = documents;
      return Post.count();
    })
    .then(count => {
      res.status(200).json({
        message: "Posts fetched successfully!",
        posts: fetchedPosts,
       
      });
    })
    .catch(error => {
      res.status(500).json({
        message: "Fetching posts failed!"
      });
    });
};
exports.getGenresFiction = (req, res, next) => {
  
  const postQuery = Post.find({genre: "Fiction"});
  let fetchedPosts;
  console.log(postQuery);
  postQuery
    .then(documents => {
      console.log(documents);
      fetchedPosts = documents;
      return Post.count();
    })
    .then(count => {
      res.status(200).json({
        message: "Posts fetched successfully23423423423423!",
        posts: fetchedPosts,
       
      });
    })
    .catch(error => {
      res.status(500).json({
        message: "Fetching posts failed!"
      });
    });
};
exports.getGenreschildren = (req, res, next) => {
  
  const postQuery = Post.find({genre: "children"});
  let fetchedPosts;
  console.log(postQuery);
  postQuery
    .then(documents => {
      console.log(documents);
      fetchedPosts = documents;
      return Post.count();
    })
    .then(count => {
      res.status(200).json({
        message: "Posts fetched successfully23423423423423!",
        posts: fetchedPosts,
       
      });
    })
    .catch(error => {
      res.status(500).json({
        message: "Fetching posts failed!"
      });
    });
};
exports.getGenresscience = (req, res, next) => {
  
  const postQuery = Post.find({genre: "science"});
  let fetchedPosts;
  console.log(postQuery);
  postQuery
    .then(documents => {
      console.log(documents);
      fetchedPosts = documents;
      return Post.count();
    })
    .then(count => {
      res.status(200).json({
        message: "Posts fetched successfully23423423423423!",
        posts: fetchedPosts,
       
      });
    })
    .catch(error => {
      res.status(500).json({
        message: "Fetching posts failed!"
      });
    });
};

exports.getGenresaction = (req, res, next) => {
  
  const postQuery = Post.find({genre: "Action"});
  let fetchedPosts;
  console.log(postQuery);
  postQuery
    .then(documents => {
      console.log(documents);
      fetchedPosts = documents;
      return Post.count();
    })
    .then(count => {
      res.status(200).json({
        message: "Posts fetched successfully23423423423423!",
        posts: fetchedPosts,
       
      });
    })
    .catch(error => {
      res.status(500).json({
        message: "Fetching posts failed!"
      });
    });
};
exports.getPost = (req, res, next) => {
  Post.findById(req.params.id)
    .then(post => {
      if (post) {
        res.status(200).json(post);
      } else {
        res.status(404).json({ message: "Post not found!" });
      }
    })
    .catch(error => {
      res.status(500).json({
        message: "Fetching post failed!"
      });
    });
};
exports.getGenrebiography = (req, res, next) => {
  
  const postQuery = Post.find({genre: "Biography"});
  let fetchedPosts;
  console.log(postQuery);
  postQuery
    .then(documents => {
      console.log(documents);
      fetchedPosts = documents;
      return Post.count();
    })
    .then(count => {
      res.status(200).json({
        message: "Posts fetched successfully23423423423423!",
        posts: fetchedPosts,
       
      });
    })
    .catch(error => {
      res.status(500).json({
        message: "Fetching posts failed!"
      });
    });
};

exports.getGenremystery = (req, res, next) => {
  
  const postQuery = Post.find({genre: "Mystery"});
  let fetchedPosts;
  console.log(postQuery);
  postQuery
    .then(documents => {
      console.log(documents);
      fetchedPosts = documents;
      return Post.count();
    })
    .then(count => {
      res.status(200).json({
        message: "Posts fetched successfully23423423423423!",
        posts: fetchedPosts,
       
      });
    })
    .catch(error => {
      res.status(500).json({
        message: "Fetching posts failed!"
      });
    });
};

exports.getGenreliterary = (req, res, next) => {
  
  const postQuery = Post.find({genre: "Literary"});
  let fetchedPosts;
  console.log(postQuery);
  postQuery
    .then(documents => {
      console.log(documents);
      fetchedPosts = documents;
      return Post.count();
    })
    .then(count => {
      res.status(200).json({
        message: "Posts fetched successfully23423423423423!",
        posts: fetchedPosts,
       
      });
    })
    .catch(error => {
      res.status(500).json({
        message: "Fetching posts failed!"
      });
    });
};

exports.getLanguageTamil = (req, res, next) => {
  
  const postQuery = Post.find({language: "tamil"});
  let fetchedPosts;
  console.log(postQuery);
  postQuery
    .then(documents => {
      console.log(documents);
      fetchedPosts = documents;
      return Post.count();
    })
    .then(count => {
      res.status(200).json({
        message: "Posts fetched successfully!",
        posts: fetchedPosts,
       
      });
    })
    .catch(error => {
      res.status(500).json({
        message: "Fetching posts failed!"
      });
    });
};
exports.getLanguageEnglish = (req, res, next) => {
  
  const postQuery = Post.find({language: "English"});
  let fetchedPosts;
  console.log(postQuery);
  postQuery
    .then(documents => {
      console.log(documents);
      fetchedPosts = documents;
      return Post.count();
    })
    .then(count => {
      res.status(200).json({
        message: "Posts fetched successfully!",
        posts: fetchedPosts,
       
      });
    })
    .catch(error => {
      res.status(500).json({
        message: "Fetching posts failed!"
      });
    });
};
exports.getPost = (req, res, next) => {
  Post.findById(req.params.id)
    .then(post => {
      if (post) {
        res.status(200).json(post);
      } else {
        res.status(404).json({ message: "Post not found!" });
      }
    })
    .catch(error => {
      res.status(500).json({
        message: "Fetching post failed!"
      });
    });
};
exports.getLanguageMalayalam = (req, res, next) => {
  
  const postQuery = Post.find({language: "Malayalam"});
  let fetchedPosts;
  console.log(postQuery);
  postQuery
    .then(documents => {
      console.log(documents);
      fetchedPosts = documents;
      return Post.count();
    })
    .then(count => {
      res.status(200).json({
        message: "Posts fetched successfully!",
        posts: fetchedPosts,
       
      });
    })
    .catch(error => {
      res.status(500).json({
        message: "Fetching posts failed!"
      });
    });
};

exports.getLanguageTelugu = (req, res, next) => {
  
  const postQuery = Post.find({language: "Telugu"});
  let fetchedPosts;
  console.log(postQuery);
  postQuery
    .then(documents => {
      console.log(documents);
      fetchedPosts = documents;
      return Post.count();
    })
    .then(count => {
      res.status(200).json({
        message: "Posts fetched successfully!",
        posts: fetchedPosts,
       
      });
    })
    .catch(error => {
      res.status(500).json({
        message: "Fetching posts failed!"
      });
    });
};
exports.getPost = (req, res, next) => {
  Post.findById(req.params.id)
    .then(post => {
      if (post) {
        res.status(200).json(post);
      } else {
        res.status(404).json({ message: "Post not found!" });
      }
    })
    .catch(error => {
      res.status(500).json({
        message: "Fetching post failed!"
      });
    });
};

exports.updateBookpath = (req, res, next) => {
  const url = req.protocol + "://" + req.get("host");
  imagePath = url + "/images/" + req.file.filename;
   console.log("hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii" + imagePath);
   Post.update({ _id: req.params.id}, {$set:{bookPath:imagePath}})
  .then(result => {
    // console.log(result);
    if (result.n > 0) {
      res.status(200).json({ message: "Update successful!" });
    } else {
      console.log("in");
      res.status(401).json({ message: "Not authorized!" });
    }
  })
  .catch(error => {
    console.log(error);
    res.status(500).json({
      message: "Couldn't udpate post!"
    });
  });
};

exports.deletePost = (req, res, next) => {
  Post.deleteOne({ _id: req.params.id, creator: req.userData.userId })
    .then(result => {
      console.log(result);
      if (result.n > 0) {
        res.status(200).json({ message: "Deletion successful!" });
      } else {
        res.status(401).json({ message: "Not authorized!" });
      }
    })
    .catch(error => {
      res.status(500).json({
        message: "Deleting posts failed!"
      });
    });
};
