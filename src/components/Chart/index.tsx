import * as React from 'react';

export default class Chart extends React.Component<any, any> {
  constructor() {
    super();

    this.state = {
      d3: false
    };
  }

  componentWillMount() {
    require.ensure(['react-d3'], () => {
      this.setState({
        d3: require('react-d3'),
        lineData: [
          { 
            name: 'series1',
            values: [ { x: 0, y: 20 }, { x: 1, y: 30 }, { x: 2, y: 10 }, { x: 3, y: 5 }, { x: 4, y: 8 }, { x: 5, y: 15 }, { x: 6, y: 10 } ],
            strokeWidth: 3,
            strokeDashArray: "5,5",
          },
          {
            name: 'series2',
            values : [ { x: 0, y: 8 }, { x: 1, y: 5 }, { x: 2, y: 20 }, { x: 3, y: 12 }, { x: 4, y: 4 }, { x: 5, y: 6 }, { x: 6, y: 2 } ]
          },
          {
            name: 'series3',
            values: [ { x: 0, y: 0 }, { x: 1, y: 5 }, { x: 2, y: 8 }, { x: 3, y: 2 }, { x: 4, y: 6 }, { x: 5, y: 4 }, { x: 6, y: 2 } ]
          } 
        ]
      });
    });
  }

  render() {
    return (
      <div>
        {
          this.state.d3 ? this.drawChart() : <div style={{
            textAlign: 'center',
            fontFamily: 'sans-serif'
          }}>Loading</div>
        }
      </div>
    );
  }

  drawChart() {
    const { LineChart } = this.state.d3;
    return (
      <LineChart
        data={this.state.lineData}
        width={document.body.clientWidth}
        height={400}
        viewBoxObject={{
          x: 0,
          y: 0,
          width: 500,
          height: 400
        }}
        title="Line Chart"
        yAxisLabel="Altitude"
        xAxisLabel="Elapsed Time (sec)"
        domain={{x: [,10], y: [-10,]}}
        gridHorizontal={true}
      />
    );
  }
}
