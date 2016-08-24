import React from 'react';
import ReactDOM from 'react-dom';


import Tabs from './tabs';
import Clock from './clock';
const tabs = [
  { title: "one",
    content: "this is content of one"
  },

  {
    title: "two",
    content: "second content"
  },

  {
    title: "three",
    content: "third content yay!"
  }
];

function success (pos) {
  console.log(pos);
}
document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<Clock/>, root);
});
