import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../providers/UserProvider";
import { PostsContext } from "../providers/PostProvider";
import { useParams } from "react-router-dom";
import PostDispay from "../components/PostDispay";
import { Outlet } from "react-router-dom";

function UserPage() {
  let { profilename } = useParams();
  const [usersList, dispatch] = useContext(UserContext);
  const [userPosts, setUserPosts] = useContext(PostsContext);
  const selectedUser = usersList.find((user) => user.user === profilename);
  const selectedPosts = userPosts.filter((post) => post.user === profilename);
  const numberOfPosts = selectedPosts.length;
  let followers = usersList.find((user) => user.user === profilename).follower;
  let followingUsers = usersList.find((user) => user.user === profilename).following;

  const userPicLink = "images/" + profilename + ".jpg";
  const isSelectedUserFollowed = usersList.find((user) => user.user === "Miguel").following.includes(selectedUser.user);
  // console.log(isSelectedUserFollowed);

  const refreshFollows = () => {
    followers = usersList.find((user) => user.user === profilename).follower;
    followingUsers = usersList.find((user) => user.user === profilename).following;
  };

  return (
    <>
      <div className="userPageHeader">
        <div className="userPageProfPic">
          <img
            src={userPicLink}
            className="userPageProfilePic"
          ></img>
        </div>
        <div className="userPageDetails">
          <div className="userPageNameAndFollow">
            <div className="userPageDetName">{selectedUser.user}</div>
            {profilename !== "Miguel" ? (
              isSelectedUserFollowed ? (
                <button
                  type="submit"
                  className="followingButton"
                  onClick={() => {
                    dispatch({ type: "REMOVE_FOLLOW", payload: profilename });
                    refreshFollows();
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  type="submit"
                  className="followingButton"
                  onClick={() => {
                    dispatch({ type: "ADD_FOLLOW", payload: profilename });
                    refreshFollows();
                  }}
                >
                  Follow
                </button>
              )
            ) : null}
          </div>
          <div className="userPageDetPoFoFo">
            <div className="numPosts">
              <span className="noInDetails">{numberOfPosts}</span>
              <span className="postDetDisplay">{numberOfPosts > 1 ? "posts" : "post"}</span>
            </div>
            <div className="numPosts">
              <span className="noInDetails">{followers.length}</span>
              <span className="postDetDisplay">{followers.length > 1 ? "followers" : "follower"}</span>
            </div>
            <div className="numPosts">
              <span className="noInDetails">{followingUsers.length}</span>
              <span className="postDetDisplay">following</span>
            </div>
          </div>
        </div>
      </div>
      <div className="postDisplayContainer">
        <div>Posts</div>
        <div className="postDisplays">
          <PostDispay
            selectedPosts={selectedPosts}
            profilename={profilename}
          />
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default UserPage;
