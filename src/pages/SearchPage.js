import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../providers/UserProvider";
import { NavLink } from "react-router-dom";

function SearchPage() {
  const [userList, dispatch] = useContext(UserContext);
  const [myUser, setMyUser] = useState(userList.find((user) => user.user === "Miguel"));
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchedUser, setSearchedUSer] = useState("");
  const [doesNotExistCheck, setDoesNotExistCheck] = useState(null);

  // 2 suggested users (not yet following) to display
  const [usersNotYetFollowed, setUsersNotYetFollowed] = useState(() =>
    myUser.following.length === 0
      ? userList.filter((user) => user.user !== "Miguel")
      : userList.filter((user) => user.user !== "Miguel").filter((users) => !users.follower.includes("Miguel"))
  );
  const suggestedUsers = usersNotYetFollowed.slice(0, 2);
  //

  useEffect(() => {
    setDoesNotExistCheck(null);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSelectedUser(userList.find((user) => user.user === searchedUser));
    setDoesNotExistCheck(true);
  };

  const userPicLink = "images/" + selectedUser?.user + ".jpg";
  return (
    <div className="searchPageContainer">
      <form onSubmit={handleSubmit}>
        <input
          className="inputForSearchPage"
          type="text"
          placeholder="Searching for someone?"
          onChange={(e) => {
            setSearchedUSer(e.target.value);
          }}
        ></input>
      </form>
      {!doesNotExistCheck ? null : userList.map((users) => users.user).includes(selectedUser?.user) ? null : (
        <div className="suggestedUsersContainer"> User does not exist.</div>
      )}
      {selectedUser ? null : <div className="suggestedUsersContainer">Users you may follow:</div>}

      {selectedUser ? (
        <div className="searchedUserContainer">
          <NavLink
            to={`/${selectedUser.user}`}
            className="searchedUserPicContainer"
          >
            <img
              src={userPicLink}
              className="searchedUserPic"
            ></img>
          </NavLink>
          <NavLink
            to={`/${selectedUser.user}`}
            className="searchedUserNameContainer"
          >
            <p className="searchedUserName"> {selectedUser.user}</p>
          </NavLink>
        </div>
      ) : (
        suggestedUsers.map((users, idx) => {
          {
            return (
              <div
                className="searchedUserContainer"
                key={idx}
              >
                <NavLink
                  to={`/${users.user}`}
                  className="searchedUserPicContainer"
                >
                  <img
                    src={"images/" + users?.user + ".jpg"}
                    className="searchedUserPic"
                  ></img>
                </NavLink>
                <NavLink
                  to={`/${users.user}`}
                  className="searchedUserNameContainer"
                >
                  <p className="searchedUserName"> {users.user}</p>
                </NavLink>
              </div>
            );
          }
        })
      )}
    </div>
  );
}

export default SearchPage;
