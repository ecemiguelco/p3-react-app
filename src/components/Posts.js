import React from "react";
import { NavLink } from "react-router-dom";

function Posts(post) {
  const userProfPic = "images/" + post.post.user + ".jpg";
  // console.log(post.post);
  return (
    <div className="postMainContainer">
      <div className="postHeader">
        <NavLink
          className="headerImgContainer"
          to={post.post.user}
        >
          <img
            src={userProfPic}
            alt="User Profile Pic"
            className="postUserPic"
          ></img>
        </NavLink>
        <NavLink to={post.post.user}>
          <span className="postUserName">{post.post.user}</span>
        </NavLink>
      </div>
      <div className="postCaption">
        <p>{post.post.caption}</p>
      </div>
      <div className="postImageContainer">
        <img
          src={post.post.image}
          className="postImage"
        ></img>
      </div>
      {/* <div className="commentSection">
        <div className="commentHolder"></div>
        <input
          type="text"
          className="inputComment"
        ></input>
      </div> */}
      <br></br>
      <hr></hr>
    </div>
  );
}

export default Posts;
