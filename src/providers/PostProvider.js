import React from "react";
import { createContext, useState } from "react";

const posts = [
  {
    user: "Miguel",
    identifier: "mysecondpost",
    chronoId: 2,
    image: "images/mysecondpost.png",
    caption: "This is my second Codegram post!",
    likes: "",
  },
  {
    user: "Miguel",
    identifier: "myfirstpost",
    chronoId: 1,
    image: "images/myfirstpost.png",
    caption: "This is my first Codegram post!",
    likes: "",
  },
  {
    // https://twitter.com/huozhi
    user: "Jiachi",
    identifier: "Migrated",
    chronoId: 5,
    image: "images/Migrated.jpg",
    caption: "Migrated my side projects to Next.js 13.2 with Metadata API",
    likes: "",
    comments: [],
  },
  {
    // https://twitter.com/huozhi
    user: "Jiachi",
    identifier: "Introduces",
    chronoId: 4,
    image: "images/Introduces.jpg",
    caption:
      "Introduces  a new React component <DevJar /> in devjar 0.3 to embed a live code sample! Just 2~3 lines to create your own real-time react code showcase!",
    likes: "",
    comments: [],
  },
  {
    // https://twitter.com/huozhi
    user: "Jiachi",
    identifier: "Polishing",
    chronoId: 3,
    image: "images/Polishing.jpg",
    caption:
      "Polishing the tsdoc for metadata in Next.js, TypeScript reminds you all the time to turn code comments to DX improvements",
    likes: "",
    comments: [],
  },
  {
    // https://twitter.com/huozhi
    user: "Jiachi",
    identifier: "Thank",
    chronoId: 2,
    image: "images/Thank.jpg",
    caption: "Thank you open source and community, learned tons. 10 years on github",
    likes: "",
    comments: [],
  },
  {
    // https://twitter.com/huozhi
    user: "Jiachi",
    identifier: "Who",
    chronoId: 1,
    image: "images/Who.jpg",
    caption: "Who else?",
    likes: "",
    comments: [],
  },
  {
    // https://twitter.com/pilatesdev
    user: "layla.sql",
    identifier: "Cheatsheet",
    chronoId: 5,
    image: "images/Cheatsheet.jpg",
    caption: "I made a JavaScript node cheatsheet!!",
    likes: "",
    comments: [],
  },
  {
    // https://twitter.com/pilatesdev
    user: "layla.sql",
    identifier: "chatGPT",
    chronoId: 4,
    image: "images/chatGPT.jpg",
    caption: "i asked chatGPT about the gender gap in tech sounds about right lol",
    likes: "",
    comments: [],
  },
  {
    // https://twitter.com/pilatesdev
    user: "layla.sql",
    identifier: "oracle",
    chronoId: 3,
    image: "images/oracle.jpg",
    caption: "when oracle already knows you need that MacBook Pro ",
    likes: "",
    comments: [],
  },
  {
    // https://twitter.com/pilatesdev
    user: "layla.sql",
    identifier: "practicing",
    chronoId: 2,
    image: "images/practicing.jpg",
    caption:
      "practicing JavaScript event handlers/listeners & functions by making a calculator for my Web Design class ",
    likes: "",
    comments: [],
  },
  {
    // https://twitter.com/pilatesdev
    user: "layla.sql",
    identifier: "spongememe",
    chronoId: 1,
    image: "images/spongememe.jpg",
    caption: "I see myself in a meme and I dont like it",
    likes: "",
    comments: [],
  },
  {
    // https://twitter.com/Div_pradeep/photo
    user: "Pradeep",
    identifier: "5ways",
    chronoId: 5,
    image: "images/5ways.png",
    caption: "5 ways to define a function in Javascript 🔥",
    likes: "",
    comments: [],
  },
  {
    // https://twitter.com/Div_pradeep/photo
    user: "Pradeep",
    identifier: "Ultimate",
    chronoId: 4,
    image: "images/Ultimate.png",
    caption: "Ultimate JavaScript DOM CheatSheet 🔥",
    likes: "",
    comments: [],
  },
  {
    // https://twitter.com/Div_pradeep/photo
    user: "Pradeep",
    identifier: "7Ways",
    chronoId: 3,
    image: "images/7Ways.png",
    caption: "7 Ways to iterate over an Array in JavaScript⚡🔥",
    likes: "",
    comments: [],
  },
  {
    // https://twitter.com/Div_pradeep/photo
    user: "Pradeep",
    identifier: "Combinator",
    chronoId: 2,
    image: "images/Combinator.png",
    caption: "CSS Combinator Selectors Cheatsheet for Web Developers ⚡🔥",
    likes: "",
    comments: [],
  },
  {
    // https://twitter.com/Div_pradeep/photo
    user: "Pradeep",
    identifier: "literals",
    chronoId: 1,
    image: "images/literals.png",
    caption:
      "Template literals allow you to embed expressions inside a string using backticks (` ) instead of quotes. They use backticks (` `) to define the string and allow for placeholders (${expression}) to be inserted within the string.",
    likes: "",
    comments: [],
  },
];

const PostsContext = createContext();

function PostProvider(props) {
  const [postList, setPostList] = useState(posts);

  return <PostsContext.Provider value={[postList, setPostList]}>{props.children}</PostsContext.Provider>;
}

export { PostsContext, PostProvider };
