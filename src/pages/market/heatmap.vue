<template>
  <div class="container-fluid">
    <div class="wrapper-treeMap" v-if="!ShowAllCategories">
      <div class="heading-AllCategories">
        <P
          class="textGrey-heading AllCategoriesCurrency ms-2"
          @click="ShowAllCategories = !ShowAllCategories"
          >All Categories / Currency</P
        >
      </div>
      <!-- SelectBox start -->

      <div class="justify-content-start d-flex flex-row  ms-2">
        <div class="firt-selectbox">
          <select
            class="form-select form-select-sm w-auto text-light shadow-none borderColor"
            aria-label=".form-select-sm example"
            style="background-color: #222b2f"
          >
            <option selected>%Chg (24h)</option>
            <option value="1">15 mins</option>
            <option value="2">30 mins</option>
            <option value="3">1 hr</option>
            <option value="3">4 hr</option>
            <option value="3">24 hr</option>
            <option value="3">1 week</option>
          </select>
        </div>
        <div class="second-selectbox">
          <select
            class="form-select form-select-sm w-auto text-light shadow-none borderColor"
            aria-label=".form-select-sm example"
            style="background-color: #222b2f"
          >
            <option selected>Sort by : Marketcap</option>
            <option value="1">Sort by : Traded Volume</option>
          </select>
        </div>
      </div>
      <!-- End SelectBox -->

      <!-- Tree map -->
      <div id="chart" class="custom-charts">
        <apexchart
          type="treemap"
          height="310"
          :options="chartOptions"
          :series="series"
        ></apexchart>
      </div>
      <!-- Tree map end -->

      <!-- Table Treemap -->
      <Dynamic-Table
        :TableHeader="TableHeading"
        :TableData="TableDatas"
        :ShowTreeMap="true"
      ></Dynamic-Table>

      <!-- End Table Treemap -->
    </div>

    <!-- heatmap After click on all categories coin -->
    <div class="wrapper-HaetaMap" v-if="ShowAllCategories">
      <!-- SelectBox start -->
      <div class="justify-content-start d-flex flex-row  ms-2 three-dropdown">
        <div class="me-3 show-Categorie-Selectbox">
          <select
            class="form-select form-select-sm w-auto text-light shadow-none borderColor"
            aria-label=".form-select-sm example"
            style="background-color: #222b2f"
          >
            <option selected>Show: Categories</option>
            <option value="1">รวมทุกเหรียญ</option>
            <option value="2">ยกเว้น BTC</option>
            <option value="3">ยกเว้น Stablecoin</option>
          </select>
        </div>
        <div class="firt-selectbox">
          <select
            class="form-select form-select-sm w-auto text-light shadow-none borderColor"
            aria-label=".form-select-sm example"
            style="background-color: #222b2f"
          >
            <option selected>%Chg (24h)</option>
            <option value="1">15 mins</option>
            <option value="2">30 mins</option>
            <option value="3">1 hr</option>
            <option value="3">4 hr</option>
            <option value="3">24 hr</option>
            <option value="3">1 week</option>
          </select>
        </div>
        <div class="second-selectbox">
          <select
            class="form-select form-select-sm w-auto text-light shadow-none borderColor"
            aria-label=".form-select-sm example"
            style="background-color: #222b2f"
          >
            <option selected>Sort by : Marketcap</option>
            <option value="1">Sort by : Traded Volume</option>
          </select>
        </div>
      </div>
      <!-- End SelectBox -->
      <div class="heading-AllCategories">
        <P class="textGrey-heading  ms-2">All Categories</P>
      </div>

      <!-- Tree map -->
      <div id="chart" class="custom-charts">
        <apexchart
          type="treemap"
          height="350"
          :options="chartOptions"
          :series="series"
        ></apexchart>
      </div>
      <!-- Tree map end -->

      <!-- Table Treemap -->
      <Dynamic-Table
        :TableHeader="TableHeading"
        :TableData="TableDatas"
        :ShowAllCategoriesCurrency="true"
        ></Dynamic-Table>

      <!-- End Table Treemap -->
    </div>
    <!-- heatmap After click on all categories coin -->
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
import Table from "../../components/table/Table.vue";

export default {
  name: "HeatmapExample",
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
              x: "BTC",
              y: "+4.89%",
            },
            {
              x: "ETH",
              y: "-8.89%",
            },
            {
              x: "USDC",
              y: "+3.49%",
            },
            {
              x: "USDT",
              y: "+3.21%",
            },
            {
              x: "ETH",
              y: "-4.89%",
            },
            {
              x: "SOL",
              y: "-5.89%",
            },
            {
              x: "BUS",
              y: "+3.29%",
            },
            {
              x: "USDC",
              y: "+2.39%",
            },
            {
              x: "USDT",
              y: "+2.21%",
            },
            {
              x: "BNP",
              y: "+4.89%",
            },
            {
              x: "UNP",
              y: "+4.89%",
            },
            {
              x: "DOT",
              y: "-7.89%",
            },
            {
              x: "ADX",
              y: "+4.89%",
            },
            {
              x: "TRX",
              y: "+2.89%",
            },
            {
              x: "DOGE",
              y: "-9.89%",
            },
          ],
        },
      ],
      chartOptions: {
        legend: {
          show: false,
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
            useFillColorAsStroke: true,
            colorScale: {
              ranges: [
                {
                  from: 4,
                  to: 10,
                  color: "#6EA028",
                },
                {
                  from: 0,
                  to: 3.5,
                  color: "#D1BB4C",
                },
                {
                  from: -10,
                  to: -1,
                  color: "#CE5033",
                },
              ],
            },
          },
        },
      },
      TableHeading: [
        {
          headingCoin: "Coin :",
          headingLastPrice: "Last Price",
          headingHourChange: "24h Change",
          headingVolume: "Volume (M)",
          headingMarketCap: "Market Cap",
          headingMarketCapM: "Market Cap (M)",
          headingMarketCapPercentage: "%Market Cap",
          headingDescription: "Description",
          headingCategories: "Categories",
        },
      ],
      TableDatas: [
        {
          StarIcon:'',
          CoinImage: require("../../assets/images/favoriteTable/bitcoin.png"),
          Coinsybmol: "WBTC",
          CoinName: "Bitcoin",
          lastPrice: "98,500,000",
          hourChange: "+1.78%",
          volume: "100,000M",
          marketCap: "168,987M",
          marketCapM: "100,000",
          Description:
            "เหรียญที่ถูกสร้างขึ้นมาโดยมีวัตถุประสงค์ว่าจะเป็นสกุล เงินของโลก...",
          Categories: "Currency",
          MarketCapPercentage: "50.16%",
        },
        {
           StarIcon:'',
          CoinImage: require("../../assets/images/favoriteTable/bitcoin.png"),
          Coinsybmol: "ETH",
          CoinName: "Ethereum",
          lastPrice: "97,500,000",
          hourChange: "+2.78%",
          volume: "200,000M",
          marketCap: "268,987M",
          marketCapM: "100,000",
          Description:
            "เหรียญที่ถูกสร้างขึ้นมาโดยมีวัตถุประสงค์ว่าจะเป็นสกุล เงินของโลก...",
          Categories: "Stablecoin",
          MarketCapPercentage: "40.16%",
        },
        {
           StarIcon:'',
          CoinImage: require("../../assets/images/favoriteTable/bitcoin.png"),
          Coinsybmol: "USDT",
          CoinName: "Tether",
          lastPrice: "96,500,000",
          hourChange: "+3.78%",
          volume: "300,000M",
          marketCap: "368,987M",
          marketCapM: "100,000",
          Description:
            "เหรียญที่ถูกสร้างขึ้นมาโดยมีวัตถุประสงค์ว่าจะเป็นสกุล เงินของโลก...",
          Categories: "Smart Contract",
          MarketCapPercentage: "60.16%",
        },
        {
           StarIcon:'',
          CoinImage: require("../../assets/images/favoriteTable/bitcoin.png"),
          Coinsybmol: "USDC",
          CoinName: "USD Coin",
          lastPrice: "95,500,000",
          hourChange: "+4.78%",
          volume: "400,000M",
          marketCap: "468,987M",
          marketCapM: "100,000",
          Description:
            "เหรียญที่ถูกสร้างขึ้นมาโดยมีวัตถุประสงค์ว่าจะเป็นสกุล เงินของโลก...",
          Categories: "Governance Token /DeFi",
          MarketCapPercentage: "70.16%",
        },
        {
           StarIcon:'',
          CoinImage: require("../../assets/images/favoriteTable/bitcoin.png"),
          Coinsybmol: "BNB",
          CoinName: "BNB",
          lastPrice: "94,500,000",
          hourChange: "+5.78%",
          volume: "500,000M",
          marketCap: "568,987M",
          marketCapM: "100,000",
          Description:
            "เหรียญที่ถูกสร้างขึ้นมาโดยมีวัตถุประสงค์ว่าจะเป็นสกุล เงินของโลก...",
          Categories: "Governance Token /DeFi",
          MarketCapPercentage: "55.16%",
        },
      ],
    };
  },
  methods: {},
};
</script>
<style scoped>
.heading-AllCategories{
  width: 30%;
}
.three-dropdown{
  margin-top: 32px;
  margin-bottom: 24px;

}
.custom-charts {
  padding-left: 8px;
  padding-right: 2px;
}
.firt-selectbox  select{
width: 124px !important;
height:32px;
border-radius:4px;
padding:4px, 8px, 4px, 8px !important;
gap:4px;
}
.second-selectbox select {
width: 292px !important;
height:32px;
border-radius:4px;
padding:4px, 8px, 4px, 8px !important;
gap:4px;
margin-left: 17px;
}
.borderColor {
  border-color: #28363e;
}
.textGrey-heading {
  color: #d6dde1;
  font-size: 18px;
  font-weight: 600;
}
.AllCategoriesCurrency {
  cursor: pointer;
  margin-top: 32px;
  margin-bottom: 24px;
  width:fit-content
}
.AllCategoriesCurrency:hover {
  color: #f38220;
}
select > option:checked,
select > option:hover {
  /* box-shadow: 0 0 10px 100px #dc6900 inset; */
  color: #f38220 !important;
}
/* select:focus{
    border-color: #f38220;
    outline:none;
} */
select {
  padding: 5px;
  border-radius: 4px;
  height: 32px;
  color: #ffffff;

  padding-right: 30px;
  font-size: 14px;
  position: relative;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  border: 1px solid #28363e !important;
  background: #677f8e
    url("data:image/svg+xml;utf8,<svg viewBox='0 0 140 140' width='14' height='14' xmlns='http://www.w3.org/2000/svg'><g><path d='m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z' fill='white'/></g></svg>")
    no-repeat;
  background-position: right 7px top 50%;
}
</style>
