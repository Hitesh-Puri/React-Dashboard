import { Bar } from "react-chartjs-2";

const MixedChart = () => {
    const data = {
      labels: ['APR 23', 'JUN 23', 'SEP 23', 'DEC 23', 'APR 24'],
      datasets: [
        {
          label: 'From Operations',
          type: 'bar',
          backgroundColor: 'rgba(75,192,192,0.2)',
          borderColor: '#1e4663',
          borderWidth: 2,
          barThickness: 20,
          data: [23, 37, 14],
          // yAxisID: 'bar-y-axis',
        },
        {
          label: 'From Other activities',
          type: 'bar',
          backgroundColor: 'rgba(75,192,192,0.2)',
          borderColor: '#954bc0',
          borderWidth: 2,
          barThickness: 20,
          data: [28, 8, 18],
          // yAxisID: 'bar-y-axis',
        },
        {
          label: 'Net Revenue',
          type: 'line',
          fill: false,
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 2,
          data: [28, 8, 14],
          // yAxisID: 'line-y-axis',
        },
      ],
    };
  
    const options = {
      scales: {
        x: {
          type: 'category',
          labels: data.labels,
        },
        y: [
          {
            id: 'bar-y-axis',
            type: 'linear',
            position: 'left',
            min: 0,  // Set the minimum value for the y-axis
            max: 150, // Set the maximum value for the y-axis
          },
          {
            id: 'line-y-axis',
            type: 'linear',
            position: 'right',
            min: 0,  // Set the minimum value for the y-axis
            max: 150, // Set the maximum value for the y-axis
          },
        ],
      },
    };
  
    return (
      <div className="mixedChart1">
        <Bar data={data} options={options} />
      </div>
    );
  };
  
  export default MixedChart;
  