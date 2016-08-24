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
      <div>
        <h1 className = "title">Tabs</h1>
        <div className = "cf">
          <ul className = "tabs">
            {this.props.tabs.map( (tab, index) =>
              <li key = {index} className = "tabs-li">
                <h5 onClick = {this.selectTab(index)}
                      className = "tab">{tab.title}</h5>
              </li>)
            }
          </ul>
        </div>
        <article className = 'tab-article'>{selectedTab.content}</article>
      </div>
    );
  }
}



export default Tabs;
