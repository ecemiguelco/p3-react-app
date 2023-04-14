import React, { useContext, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { PostsContext } from "../providers/PostProvider";

function Modal() {
  const { profilename, postname } = useParams();
  const [posts, setPosts] = useContext(PostsContext);
  const [selectedPost, setSelectedPost] = useState(posts.find((post) => post.identifier === postname));

  return (
    <>
      <div className="modalContainer">
        <div className="postModal">
          <div className="modalCaption">
            <p>{selectedPost.caption}</p>
          </div>
          <div className="modalImageContainer">
            <img
              src={`/${selectedPost.image}`}
              className="modalImage"
            ></img>
          </div>
        </div>
      </div>
      <NavLink
        to={`/${profilename}`}
        className="bgClickModal"
      ></NavLink>
    </>
  );
}

export default Modal;
