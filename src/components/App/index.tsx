import * as React from 'react';

import Chart from '../Chart/';

export default class App extends React.Component<any, any> {
  constructor() {
    super();

    this.state = {
      chartVisible: false
    };
  }

  handleClick() {
    this.setState({
      chartVisible: !this.state.chartVisible
    });
  }

  render() {
    return (
      <div>
        {
          this.state.chartVisible ? <Chart /> : <button onClick={() => this.handleClick()}>Show chart</button>
        }
      </div>
    );
  }
}

