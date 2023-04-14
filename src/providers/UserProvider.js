import { createContext } from "react";
import { useReducer } from "react";

const users = [
  { user: "Miguel", follower: [], following: [] },
  { user: "Jiachi", follower: [], following: [] },
  { user: "layla.sql", follower: [], following: [] },
  { user: "Pradeep", follower: [], following: [] },
];

const reducer = (userDets, { type, payload }) => {
  switch (type) {
    case "ADD_FOLLOW":
      return [
        {
          user: "Miguel",
          follower: [],
          following: [...userDets[0].following, payload],
        },
        {
          user: payload,
          follower: [...userDets.find((user) => user.user === payload).follower, "Miguel"],
          following: [],
        },
        ...userDets.filter((user) => user.user !== "Miguel").filter((user) => user.user !== payload),
      ];
    case "REMOVE_FOLLOW":
      return [
        {
          user: "Miguel",
          follower: [],
          following: [...userDets[0].following.filter((user) => user !== payload)],
        },
        {
          user: payload,
          follower: [...userDets.find((user) => user.user === payload).follower.filter((user) => user !== "Miguel")],
          following: [],
        },
        ...userDets.filter((user) => user.user !== "Miguel").filter((user) => user.user !== payload),
      ];
    default:
      break;
  }
};

const UserContext = createContext();

function UserProvider(props) {
  const [userDets, dispatch] = useReducer(reducer, users);

  return <UserContext.Provider value={[userDets, dispatch]}>{props.children}</UserContext.Provider>;
}

export { UserContext, UserProvider };
