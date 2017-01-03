import React from "react";
import Paper from "material-ui/Paper";
import { Pie } from "react-chartjs-2";

class PieChart extends React.Component {
  render() {
    const dataset = this.props.dataset;
    const chartData = {};
    const colors = ["#346499", "#008569", "#8DB501"];
    const pies = ["todo", "in-progress", "completed"];


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
            colors[i],
            "#ccc",
          ],
        }],
      };
    }

    return (
      <div className="pie-chart">
        <div className="pie-wrap">
          { pies.map((key, i) => (
            <Paper id={key} zDepth={2}>
              <h3>
                <span className={key}>{dataset[i]} </span>
                &nbsp;{key}
              </h3>
              <Pie data={chartData[i]} />
            </Paper>
          ))}

        </div>
      </div>
    );
  }
}

PieChart.propTypes = {
  dataset: React.PropTypes.array,
};

export default PieChart;
