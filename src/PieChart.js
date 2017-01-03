import React from "react";
import { Pie } from "react-chartjs-2";

class PieChart extends React.Component {
  render() {
    const dataset = this.props.dataset;
    const options = {
      tooltips: {
        enabled: false,
      },
    };
    const chartData = {};


    function ratio(set, data) {
      const sum = dataset.reduce((a, b) => a + b);
      if (!sum && !data) return 1;
      return sum - data;
    }

    for (let i = 0; i < dataset.length; i++) {
      chartData[i] = {
        labels: [],
        datasets: [{
          data: [dataset[i], ratio(dataset, dataset[i])],
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
          ],
        }],
      };
    }

    return (
      <div style={{ width: "250px", display: "flex", flexDirection: "row" }}>
        <div id="todo">
          <h3>{dataset[0]} Todo</h3>
          <Pie data={chartData[0]} options={options} />
        </div>

        <div id="in-progress">
          <h3>{dataset[1]} In Progress</h3>
          <Pie data={chartData[1]} options={options} />
        </div>

        <div id="completed">
          <h3>{dataset[2]} Completed</h3>
          <Pie data={chartData[2]} options={options} />
        </div>
      </div>
    );
  }
}

PieChart.propTypes = {
  dataset: React.PropTypes.array,
};

export default PieChart;
