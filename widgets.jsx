import React from 'react';
import ReactDOM from 'react-dom';
import Widgets from './tabs';

const tabs = {
  one: {
    title: "one",
    content: "this is content of one"
  },

  two: {
    title: "two",
    content: "second content"
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<Widgets/>, root);
});
