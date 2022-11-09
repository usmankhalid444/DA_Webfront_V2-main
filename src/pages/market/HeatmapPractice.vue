<template>
  <div class="example">
    <apexchart
      width="1000"
      height="300"
      type="heatmap"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";

export default {
  name: "HeatmapExample",
  components: {
    apexchart: VueApexCharts,
  },
  data: function () {
    return {
      chartOptions: {
        plotOptions: {
          heatmap: {
            columnWidth:"300",
            radius: 0,
            enableShades: false,
            shadeIntensity: 0.5,
            reverseNegativeShade: true,
            distributed: false,
            useFillColorAsStroke: false,
            colorScale: {
              ranges: [
                {
                  from: 2,
                  to: 10,
                  color: "#44A765",
                  foreColor: "white",
                  name: "greater or equal value 2 color green",
                },
                {
                  from: 0,
                  to: 1,
                  color: "#596C78",
                  foreColor: "white",
                  name: "greater then 0 or less then 2 => value 0 to 0.9 color grey",
                },
                {
                  from: -10,
                  to: -1,
                  color: "#BD424C",
                  foreColor: "white",
                  name: "greater or equal value -1 color red",
                },
              ],
            },
          },
        },
        dataLabels: {
          offsetX: 0,
          offsetY: 0,
          enabled: true,
          position: 'bottom',
            formatter: function (val, opt) {
            return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val
          },
          style: {
            fontSize: '12px',
            // colors: ["#304758"]
            columnWidth:40
          }
        },
      },
      series: [
        {
          name: "Series 1",
          data: [
            {
              x: "SOL",
              y: "-6.89%",
            },
            {
              x: "BTC",
              y: "+8.89%",
            },
            {
              x: "USDC",
              y: "0.98%",
            },
            {
              x: "ALGO",
              y: "-9.89%",
            },
            {
              x: "BNB",
              y: "+2.48%",
            },
            {
              x: "USDT",
              y: "0.78%",
            },
          ],
        },
        {
          name: "Series 2",
          data: [
            {
              x: "TRX",
              y: "-8.89%",
            },
            {
              x: "UNI",
              y: "+8.89%",
            },
            {
              x: "BUSD",
              y: "0.98%",
            },
            {
              x: "DOT",
              y: "+6.45%",
            },
            {
              x: "USDT",
              y: "0.48%",
            },
            {
              x: "ALGO",
              y: "-1.05%",
            },
          ],
        },
        {
          name: "Series 3",
          data: [
            {
              x: "TRX",
              y: "-5.89%",
            },
            {
              x: "ETH",
              y: "-10%",
            },
            {
              x: "ADA",
              y: "+4.89%",
            },
            {
              x: "DOGE",
              y: "+10%",
            },
            {
              x: "BUSD",
              y: "0.38%",
            },
            {
              x: "USDT",
              y: "1%",
            },
          ],
        },
      ],
    };
  },
  methods: {},
};
</script>
