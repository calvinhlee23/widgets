import React from 'react';
import ReactDOM from 'react-dom';
import Widgets from './tabs';
import Dummy from './dummy';

const tabs = [
  { title: "one",
    content: "this is content of one"
  },

  {
    title: "two",
    content: "second content"
  }
];

document.addEventListener("DOMContentLoaded", () => {
  console.log('hi');
  const root = document.getElementById("root");
  ReactDOM.render(<Widgets tabs= {tabs}/>, root);
});
