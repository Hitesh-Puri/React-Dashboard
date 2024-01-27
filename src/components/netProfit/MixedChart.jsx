import { Bar } from "react-chartjs-2";

const MixedChart = () => {
  const data = {
    labels: ["APR 23", "JUN 23", "SEP 23", "DEC 23", "APR 23"],
    datasets: [
      {
        label: "Quaterly Net Profit",
        type: "bar",
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
        barThickness: 20,
        borderWidth: 2,
        data: [18, 30, 35],
        // yAxisID: "bar-y-axis",
      },
      {
        label: "Net Cummulative Profit",
        type: "line",
        fill: false,
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 2,
        data: [18, 30, 35],
        // yAxisID: "line-y-axis",
      },
    ],
  };

  const options = {
    maintainAspectRatio: true, // Disable the aspect ratio
    aspectRatio: 2.1,
    scales: {
      x: {
        type: "category",
        labels: data.labels,
      },
      y: [
        {
          id: "bar-y-axis",
          type: "linear",
          position: "left",
          display: false,
        },
        {
          id: "line-y-axis",
          type: "linear",
          position: "right",
          display: false,
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
