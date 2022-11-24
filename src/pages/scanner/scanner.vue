<template>
  <div>
    <div class="container-fluid">
      <div class="justify-content-start d-flex flex-row ms-2 scan">
        <div class="second-selectbox">
          <select
            class="form-select form-select-sm w-auto text-light shadow-none borderColor"
            aria-label=".form-select-sm example"
            style="background-color: #222b2f"
          >
            <option selected>Top Gain/Loss</option>
            <option value="1">option 2</option>
          </select>
        </div>
        <svg
          data-v-1252a5dc=""
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          fill="currentColor"
          viewBox="0 0 16 16"
          class="bi bi-question-circle"
        >
          <path
            data-v-1252a5dc=""
            d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
          ></path>
          <path
            data-v-1252a5dc=""
            d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"
          ></path>
        </svg>
        <div class="third-selectbox">
          <select
            class="form-select form-select-sm w-auto text-light shadow-none borderColor"
            aria-label=".form-select-sm example"
            style="background-color: #222b2f"
          >
            <option selected>Top Gain</option>
            <option value="1">option 2</option>
          </select>
        </div>
        <div class="radio_btn">
          <input type="radio" id="min" name="time" />
          <label for="min" class="m-0">Min</label>
        </div>
        <div class="radio_btn">
          <input type="radio" id="hour" name="time" />
          <label for="hour" class="m-0">Hour</label>
        </div>
        <div class="radio_btn">
          <input type="radio" id="day" name="time" />
          <label for="day" class="m-0">Day</label>
        </div>
        <div class="radio_btn">
          <input type="number" class="from-control" />

          <label class="m-0">Day Ago</label>
        </div>
      </div>
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
      :Showfavorite="true"
    ></Dynamic-Table>
  </div>
</template>

<script>
import Table from "../../components/table/Table.vue";
import VueApexCharts from "vue-apexcharts";
export default {
  name: "scan",
  components: {
    "Dynamic-Table": Table,
    apexchart: VueApexCharts,
  },
  data() {
    return {
      TableHeading: [
        {
          headingCoin: "Coin :",
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
          CoinName: "Bitcoin Wrapped Bitcoin",
          lastPrice: "98,500,000",
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
          name: "Cash Flow",
          data: [
            "138%",
            "130%",
            "120%",
            "110%",
            "95%",
            "80%",
            "75%",
            "70%",
            "60%",
            "55%",
            "53%",
            "50%",
            "48%",
            "45%",
            "40%",
            "33%",
            "30%",
            "28%",
            "25%",
            "18%",
          ],
        },
      ],
      chartOptions: {
        legend: {
          show: false,
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
<style scoped>
.scan {
  align-items: center;
  margin-top: 21.44px;
  margin-bottom: 21px;
}
.scan svg {
  margin-left: 10px;
  width: 20px;
  height: 20px;
}
.scan select {
  position: relative;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  border: 1px solid #28363e !important;
  background: #677f8e
    url("data:image/svg+xml;utf8,<svg viewBox=%270 0 140 140%27 width=%2714%27 height=%2714%27 xmlns=%27http://www.w3.org/2000/svg%27><g><path d=%27m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z%27 fill=%27white%27/></g></svg>")
    no-repeat;
  background-position: right 7px top 50%;
}
.second-selectbox select {
  width: 240px !important;
  height: 40px;
  margin-left: 10px;
  border-radius: 4px;
  color: white;
  border: none;
}
.third-selectbox select {
  width: 122px !important;
  height: 40px;
  margin-left: 26px;
  border-radius: 4px;
  color: white;
  border: none;
}
.scan .radio_btn {
  margin-left: 24px;
  display: flex;
  align-items: center;
  gap: 8px;
}
.scan .radio_btn label {
  margin-left: 8px;
  font-family: Roboto Flex;
  font-size: 14px;
}

input[type="radio"]:after {
  width: 20px;
  height: 20px;
  border-radius: 20px;
  top: -4px;
  right: 8px;
  position: relative;
  background-color: #222b2f;
  content: "";
  display: inline-block;
  visibility: visible;
  border: 3px solid #38454d;
}

input[type="radio"]:checked:after {
  width: 20px;
  height: 20px;
  border-radius: 20px;
  position: relative;
  background-color: #d6dde1;
  content: "";
  display: inline-block;
  visibility: visible;
  border: 3px solid #f38220;
}

input[type="number"] {
  padding: 3px;
  color: white;
  width: 85px;
  height: 37px;
  background-color: rgb(34, 43, 47);
  border-radius: 4px;
  border: none;
  outline: none;
}
.number-wrapper {
  position: relative;
}
</style>
