import React, { useContext, useReducer, useState } from "react";
import { PostsContext } from "../providers/PostProvider";
import { useNavigate } from "react-router-dom";

let newPost = {
  user: "Miguel",
  identifier: "",
  chronoId: "",
  image: "",
  caption: "",
  likes: "",
  comments: [],
};

const regex = /^images\//;

function NewPost() {
  const [postList, setPostList] = useContext(PostsContext);
  const [postCaption, setPostCaption] = useState(newPost.caption);
  const [postImageLink, setPostImageLink] = useState(newPost.image);
  const navigate = useNavigate();
  const [err, setErrMsg] = useState("");

  const addNewPost = (e) => {
    e.preventDefault();
    if (postCaption.trim().length === 0) {
      setErrMsg("Fields can't be blank");
      return;
    }
    if (postImageLink.trim().length === 0) {
      setErrMsg("Fields can't be blank");
      return;
    }
    if (!regex.test(postImageLink)) {
      setErrMsg("Invalid image link");
      return;
    }

    let myTotalPostsNo = postList.filter((item) => item.user === "Miguel").length;

    const addThisPost = {
      ...newPost,
      caption: postCaption,
      identifier: postImageLink.split("/")[length - 1],
      image: postImageLink,
      chronoId: myTotalPostsNo + 1,
    };
    setPostList([...postList, addThisPost]);
    navigate("/Miguel");
  };

  return (
    <div>
      <form
        className="newPostForm"
        onSubmit={addNewPost}
      >
        <input
          className="postCaptionInput"
          type="text"
          placeholder="Add caption..."
          onChange={(e) => {
            setErrMsg("");
            setPostCaption(e.target.value);
          }}
        ></input>
        <input
          className="postImageInput"
          type="text"
          placeholder="Add image link..."
          onChange={(e) => {
            setErrMsg("");
            setPostImageLink(e.target.value);
          }}
        ></input>
        {/* image link validation */}
        <button
          type="submit"
          className="newPostButton"
        >
          Add Post
        </button>
        <br></br>
      </form>
      {err.length === 0 ? null : <div>{err}</div>}
    </div>
  );
}

export default NewPost;
