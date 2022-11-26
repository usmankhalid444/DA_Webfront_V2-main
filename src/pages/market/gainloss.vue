<template>
  <div class="container-fluid">
    <div class="Tab-wrapper">
      <ul class="nav nav-pills">
        <li>
          <a
            class="tabInactive border-raduis-left"
            :class="{ 'is-active': activeTab === 1 }"
            @click="activeTab = 1"
          >
            All
          </a>
        </li>
        <li>
          <a
            class="tabInactive"
            :class="{ 'is-active': activeTab === 2 }"
            @click="activeTab = 2"
          >
            Top Gain
          </a>
        </li>
        <li>
          <a
            class="tabInactive border-raduis-right"
            :class="{ 'is-active': activeTab === 3 }"
            @click="activeTab = 3"
          >
            Top Loss
          </a>
        </li>
      </ul>
    </div>
    <div class="container">
      <!-- Tree map -->
      <div id="chart" class="custom-charts">
        <apexchart
          type="bar"
          height="350"
          :options="chartOptions"
          :series="series"
        ></apexchart>
      </div>
      <!-- Tree map end -->
    </div>

    <Dynamic-Table
      :TableHeader="TableHeading"
      :TableData="TableDatas"
      :ShowGainLoss="true"
    ></Dynamic-Table>
  </div>
</template>

<script>
import Table from "../../components/table/Table.vue";
import VueApexCharts from "vue-apexcharts";

export default {
  name: "Gainloss",

  components: {
    apexchart: VueApexCharts,
    "Dynamic-Table": Table,
  },
  data() {
    return {
      activeTab: 1,
      TableHeading: [
        {
          headingCoin: "Coin ",
          headingLastPrice: "Last Price",
          headingHourChange: "24h Change",
          headingVolume: "Volume",
          headingMarketCap: "Market Cap",
          headingChart: "24h Chart",
        },
      ],
      TableDatas: [
        {
          StarIcon: require("../../assets/images/favoriteTable/star.png"),
          CoinImage: require("../../assets/images/favoriteTable/bitcoin.png"),
          Coinsybmol: "WBTC",
          CoinName: "Bitcoin",
          lastPrice: "92,500,000",
          hourChange: "+1.78%",
          volume: "100,000M",
          marketCap: "168,987M",
        },
        {
          StarIcon: require("../../assets/images/favoriteTable/star.png"),
          CoinImage: require("../../assets/images/favoriteTable/bitcoin.png"),
          Coinsybmol: "ETH",
          CoinName: "Ethereum",
          lastPrice: "97,500,000",
          hourChange: "+2.78%",
          volume: "200,000M",
          marketCap: "268,987M",
        },
        {
          StarIcon: require("../../assets/images/favoriteTable/star.png"),
          CoinImage: require("../../assets/images/favoriteTable/bitcoin.png"),
          Coinsybmol: "USDT",
          CoinName: "Tether",
          lastPrice: "96,500,000",
          hourChange: "+3.78%",
          volume: "300,000M",
          marketCap: "368,987M",
        },
        {
          StarIcon: require("../../assets/images/favoriteTable/star.png"),
          CoinImage: require("../../assets/images/favoriteTable/bitcoin.png"),
          Coinsybmol: "USDC",
          CoinName: "USD Coin",
          lastPrice: "95,500,000",
          hourChange: "+4.78%",
          volume: "400,000M",
          marketCap: "468,987M",
        },
        {
          StarIcon: require("../../assets/images/favoriteTable/star.png"),
          CoinImage: require("../../assets/images/favoriteTable/bitcoin.png"),
          Coinsybmol: "BNB",
          CoinName: "BNB",
          lastPrice: "94,500,000",
          hourChange: "+5.78%",
          volume: "500,000M",
          marketCap: "568,987M",
        },
      ],
      series: [
        {
          show: false,
          name: "Cash Flow",
          data: [
            "130%",
            "125%",
            "82%",
            "80%",
            "65%",
            "59%",
            "31%",
            "23%",
            "21%",
            "17%",
            "-5%",
            "-8%",
            "-12%",
            "-20%",
            "-28%",
            "-40%",
            "-53%",
            "-62%",
            "-79%",
            "-100%",
          ],
        },
      ],
      chartOptions: {
        legend: {
          show: false,
        },
        yaxis: {
          axisBorder: { show: false },
          labels: { show: false },
        },
        xaxis: {
          // categories: [
          //   "ETH",
          //   "ETH",
          //   "ETH",
          //   "ETH",
          //   "ETH",
          //   "ETH",
          //   "ETH",
          //   "ETH",
          //   "ETH",
          //   "ETH",
          //   "BTC",
          //   "BTC",
          //   "BTC",
          //   "BTC",
          //   "BTC",
          //   "BTC",
          //   "BTC",
          //   "BTC",
          //   "BTC",
          //   "BTC",
          // ],
          axisTicks: { show: false },
          axisBorder: { show: true, offsetY: -124 },
          labels: { show: false },
        },
        chart: {
          type: "bar",
          height: 350,
          toolbar: {
            show: false,
          },
        },

        plotOptions: {
          bar: {
            dataLabels: {
              position: "top", // top, center, bottom
            },
            colors: {
              ranges: [
                {
                  from: 0,
                  to: 200,
                  color: "#40994F",
                },
                {
                  from: -200,
                  to: 0,
                  color: "#DE2D40",
                },
              ],
            },
            columnWidth: "45%",
          },
        },
        dataLabels: {
          enabled: true,
          formatter: function (val) {
            return val + "%";
          },
          offsetY: -20,
          style: {
            fontSize: "12px",
            colors: ["#D6DDE1"],
          },
        },
        grid: {
          show: true,
          borderColor: "#90A4AE",
          strokeDashArray: 0,
          position: "back",
          xaxis: {
            lines: {
              show: false,
            },
          },
          yaxis: {
            lines: {
              show: false,
            },
          },
        },
      },
    };
  },
};
</script>
<style lang="scss" scoped>
.custom-charts {
  padding-left: 2px;
  padding-right: 2px;
}
.Tab-wrapper {
  margin-top: 25px;
  ul {
    li {
      a {
        display: block;
        text-align: center;
      }
    }
  }
}
.border-raduis-left {
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}
.border-raduis-right {
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}
.is-active {
  color: #ffffff !important;
  background-color: #38454d !important;
  text-decoration: none;
  // padding: 10px;
}
.tabInactive {
  background-color: #222b2f;
  text-decoration: none;
  padding: 10px 20px;
  margin: 1px;
  width: 100px;
  cursor: pointer;
}
.tabInactive:hover {
  background-color: #38454d;
}
a {
  color: #9bacb6 !important;
  font-family: "Roboto Flex";
  font-style: normal;
  font-weight: 400;
}
</style>
