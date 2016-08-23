import React from "react";

class Tabs extends React.component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0
    };
  }

  selectTab (index) {
    this.setState({selected: index});
    let selected = document.getElementsByClassName("tab")[index];
    selected.style.fontWeight = 'bold';
  }

  render() {
    let selectedTab = this.props.tabs[this.state.selected];
    return (
      <ul class = "tabs">
        {this.props.tabs.map( (tab, index) =>
          <li>
            <h1 onClick = {this.selectTab(index)}
            class = "tab">{tab.title}</h1>
          </li>)
        }
        <article class = 'tab-article'>{selectedTab.content}</article>
      </ul>

    );
  }
}



export default Tabs;
