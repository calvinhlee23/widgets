import React from "react";

class Tabs extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      selected: 0
    };

    this.selectTab = this.selectTab.bind(this);

  }

  selectTab(index){
    return () => {
      this.setState({selected: index});
      let selected = document.getElementsByClassName("tab")[index];
      let everything = document.getElementsByClassName('tab');
      console.log(everything);
      for (var i = 0; i < everything.length; i++) {
        everything[i].style.fontWeight = 'normal';
      }
      selected.style.fontWeight = 'bold';
    };
  }

  render(){
    let selectedTab = this.props.tabs[this.state.selected];
    return (
      <ul className = "tabs">
        {this.props.tabs.map( (tab, index) =>
          <li>
            <h1 onClick = {this.selectTab(index)} className = "tab">{tab.title}</h1>
          </li>)
        }
        <article className = 'tab-article'>{selectedTab.content}</article>
      </ul>

    );
  }
}



export default Tabs;
