import React, { useContext, useEffect, useState } from "react";
import { PostsContext } from "../providers/PostProvider";
import { UserContext } from "../providers/UserProvider";
import Posts from "../components/Posts";

function Home() {
  const [postList, setPostList] = useContext(PostsContext);
  const [usersList, setUsersList] = useContext(UserContext);
  const [postListOfFollowing, setPostListOfFollowing] = useState([]);

  const followedUsersFitler = usersList.filter((item) => item.user === "Miguel")[0].following;

  useEffect(() => {
    let userPosts = [];
    followedUsersFitler.forEach((name) => {
      userPosts = [...userPosts, ...postList.filter((post) => post.user === name)];
      setPostListOfFollowing([...postListOfFollowing, ...userPosts]);
    });
  }, []);

  return (
    <>
      {!followedUsersFitler.length ? (
        <div className="initialMsgsContainer">
          <p className="initialMsgs">Post from people you follow will be shown here...</p>
          <p className="initialMsgs">
            Go to <strong>Search</strong>, to find someone to follow
          </p>
          <p className="initialMsgs">you can also...</p>
          <p className="initialMsgs">
            Post your latest techventure in <strong>New Post</strong>
          </p>
        </div>
      ) : (
        postListOfFollowing
          .sort((a, b) => {
            // console.log(a, b);
            return a.chronoId - b.chronoId;
          })
          .reverse()
          .map((post, index) => {
            return (
              <div
                key={index}
                className="postContainer"
              >
                <Posts post={post} />
              </div>
            );
          })
      )}
    </>
  );
}

export default Home;
