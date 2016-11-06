import React from 'react';
import ReactDOM from 'react-dom';


import Tabs from './tabs';
import Clock from './clock';
import Weather from './weather';

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

class Widgets extends React.Component {
  render() {
    return (
      <div>
        <Clock/>
        <Weather/>
        <Tabs tabs = {tabs}/>
      </div>
    );
  }
}
document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<Widgets/>, root);
});
