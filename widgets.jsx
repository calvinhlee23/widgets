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
document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<Weather/>, root);
});


// 
// {"coord":{"lon":-117.93,"lat":33.87},
// "weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],
// "base":"cmc stations",
// "main":{"temp":299.25,"pressure":1015,"humidity":44,"temp_min":293.71,"temp_max":304.15},
// "wind":{"speed":2.6},
// "clouds":{"all":1},
// "dt":1472003206,
// "sys":{"type":1,"id":390,"message":0.0055,"country":"US","sunrise":1472044822,"sunset":1472092008},
// "id":5351247,
// "name":"Fullerton",
// "cod":200}
