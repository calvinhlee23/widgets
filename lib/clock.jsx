import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dateObj: new Date(),
      clockTime: '',
      date: ''
    };
    this.tick = this.tick.bind(this);
  }

  componentDidMount () {
    setInterval(this.tick, 1000);
  }

  tick() {
    let newDateOb = new Date();
    let newdateObStr = newDateOb.toString();
    newdateObStr = newdateObStr.split(" ");

    let date = newdateObStr.splice(newdateObStr.length/2 +1).join(' ');
    let time = newdateObStr.join(' ');

    this.setState({dateObj: newDateOb});
    this.setState({clockTime: time});
    this.setState({date: date});
  }

  render (){
    var time = this.state.clockTime;
    var date = this.state.date;
    return (
      <div className = "clock">
        <h1 className = "title">Clock</h1>
        <ul >
          <li className = "clock-time">Time: {time}</li>
          <li className = "clock-date">Date: {date}</li>
        </ul>
      </div>
    );
  }
}

export default Clock;
