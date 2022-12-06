<template>
  <div class="wrapper">
    <div class="chart">
      <p class="light-grey mb-0 mt-4">My Coin’s Profit / Loss</p>
    <div id="chart" class="custom-charts">
      <apexchart
        type="treemap"
        height="350"
        :options="chartOptions"
        :series="series"
      ></apexchart>
    </div>
    </div>
   
    <div class="row table">
      <div class="col">
        <Dynamic-Table
          :TableHeader="TableHeading"
          :TableData="TableDatas"
          :coinheatmap="true"
        ></Dynamic-Table>
      </div>
    </div>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
import Table from "../table/Table.vue";

export default {
  name: "coinheatmap",
  components: {
    apexchart: VueApexCharts,
    "Dynamic-Table": Table,
  },
  data: function () {
    return {
      ShowAllCategories: false,
      series: [
        {
          name: "first",
          data: [
          {
              x: 'ETH',
              y: "-42.10%",
            },
            {
              x: "DOGE",
              y: "-42.10%",
            },
            {
              x: "BTC",
              y: "-42.10%",
            },
          
            {
              x: "COIN B",
              y: "-42.10%",
            },
            {
              x: "SOL",
              y: "+42.10%",
            },
            {
              x: "COIN C",
              y: "-42.10%",
            },
            {
              x: "COIN A",
              y: "-42.10%",
            },
            {
              x: "COIN D",
              y: "-42.10%",
            },
          
           
          ],
        },
      ],
      chartOptions: {
        legend: {
          show: false,
        },
        stroke: {
          show: true,
        },
        chart: {
          height: 20,
          type: "treemap",
          toolbar: {
            show: false,
          },
        },
        // title: {
        //   text: "Treemap with Color scale",
        // },
        dataLabels: {
          enabled: true,
          style: {
            fontSize: "14px",
            // fontFamily: "Helvetica, Arial, sans-serif",
            fontWeight: "bold",
          },
          formatter: function (text, op) {
            return [text, op.value];
          },
          offsetY: -4,
        },

        plotOptions: {
          treemap: {
            enableShades: false,
            shadeIntensity: 0.5,
            reverseNegativeShade: false,
            colorScale: {
              ranges: [
                {
                  from: 0,
                  to: 100,
                  color: "#40994F",
                },
                {
                  from: -100,
                  to: -0,
                  color: "#DE2D40",
                },
              ],
            },
          },
        },
      },
      TableHeading: [
        {
          headingCoin: "Coin ",
          Unrealized: "Unrealized (Est.)",
          Actual: "Actual",
          AvrgCost: "Avg. Cost",
          lastPrice: "Last Price",
          Total: "Total",
          realized: "Realized (Today)",
        },
      ],
      TableDatas: [
        {
          Coinsybmol: "WBTC",
          CoinName: "Bitcoin",
          UnrealizedValue: "+29,775.29(+42.10%)",
          ActualValue: "1.00",
          AvrgCostValue: "70,723.16",
          lastPriceValue: "39,720.00",
          TotalValue: "1,000,000.00",
          realizedValue: "0.00 (0.00%)",
        },
        {
          Coinsybmol: "ETH",
          CoinName: "Ethereum",
          UnrealizedValue: "+29,775.29(+42.10%)",
          ActualValue: "2.00",
          AvrgCostValue: "71,723.16",
          lastPriceValue: "39,720.00",
          TotalValue: "1,000,000.00",
          realizedValue: "1.00 (0.00%)",
        },
        {
          Coinsybmol: "USDT",
          CoinName: "Tether",
          UnrealizedValue: "+29,775.29(+42.10%)",
          ActualValue: "3.00",
          AvrgCostValue: "72,723.16",
          lastPriceValue: "39,720.00",
          TotalValue: "1,000,000.00",
          realizedValue: "2.00 (0.00%)",
        },
        {
          Coinsybmol: "USDC",
          CoinName: "USD Coin",
          UnrealizedValue: "+29,775.29(+42.10%)",
          ActualValue: "4.00",
          AvrgCostValue: "73,723.16",
          lastPriceValue: "39,720.00",
          TotalValue: "1,000,000.00",
          realizedValue: "3.00 (0.00%)",
        },
        {
          Coinsybmol: "BNB",
          CoinName: "BNB",
          UnrealizedValue: "+29,775.29(+42.10%)",
          ActualValue: "5.00",
          AvrgCostValue: "74,723.16",
          lastPriceValue: "39,720.00",
          TotalValue: "1,000,000.00",
          realizedValue: "4.00 (0.00%)",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style>
.table td {
    height: 56px;
    line-height: 56px;
    padding: 0px;
}
.custom-charts rect {
  stroke: black;
}
</style>
<style scoped>
.table{
  max-width:1200px;
  margin: auto;
}
.chart{
  max-width: 875px;
  margin: auto;
}
.light-grey {
  color: #d6dde1;
  font-size: 14px;
  font-family: "Roboto Flex";
}
</style>