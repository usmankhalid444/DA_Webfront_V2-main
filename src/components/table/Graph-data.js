export const GraphData = {
  type: "line",

  data: {
    labels: ["", "", "", "", "", "", "", "", ""],
    datasets: [
      {
        lineTension: 0,
        data: [10, 30, 50, 100, 5, 25, 40, 5],
        backgroundColor: "rgba(71, 183,132,.5)",
        borderColor: "#47b784",
        borderWidth: 1,
        fill: false,
      },
    ],
  },
  options: {
    responsive: false,
    lineTension: 1,
    legend: {
      display: false,
    },
    elements: {
      point: {
        radius: 0,
      },
    },
    scales: {
      xAxes: [
        {
          ticks: {
            display: false,
          },
          gridLines: {
            color: "rgba(0, 0, 0, 0)",
            display: false,
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            display: false,
          },
          gridLines: {
            color: "rgba(0, 0, 0, 0)",
            display: false,
          },
        },
      ],
    },
  },
};

export default GraphData;
