<template>
  <div>
    <div class="container-fluid">
      <div class="justify-content-start d-flex flex-row ms-2 scan">
        <div class="second-selectbox">
          <div
                  class="select-container"
                  tabindex="0"
                  @click="open_dropdown = !open_dropdown"
                  @blur="open_dropdown = false"
                >
                  <span class="text">{{ list[scannnerValue] }}</span>
                  <span
                    class="icon"
                    :class="open_dropdown ? 'rotate-sc-icon' : ''"
                    ><svg
                      width="12"
                      height="8"
                      viewBox="0 0 12 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.41 0.589966L6 5.16997L10.59 0.589966L12 1.99997L6 7.99997L0 1.99997L1.41 0.589966Z"
                        fill="#677F8E"
                      />
                    </svg>
                  </span>
                  <div
                    class="options"
                    :class="open_dropdown ? 'show' : 'hidden'"
                  >
                    <ul>
                      <li>--------------- Scanner ------------</li>
                      <li @click="(scannnerValue = '5')"> Pull the Bull </li>
                      <li @click="(scannnerValue = '8')"> Bullish Volume Break Out plus ADX</li>
                      <li @click="(scannnerValue = '6')"> HH_RSI </li>
                      <li @click="(scannnerValue = '7')"> HH_MACD Cross</li>
                      <li>--------------- Market Movement ------------</li>
                      <li @click="(scannnerValue = '1')"> Most Active </li>
                      <li @click="(scannnerValue = '2')">Top Gain/Loss</li>
                      <li @click="(scannnerValue = '4')"> New High/ Low </li>
                      <li @click="(scannnerValue = '3')">Volume Outperform</li>
                  
                    </ul>
                  </div>
                </div>
        </div>
       
        <div class="info">
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
        <p v-if="(scannnerValue==5)">??????????????????????????????????????????????????????????????????????????????????????????????????????????????? Timeframe 60 ???????????? <br>??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????</p>
        <p v-else-if="(scannnerValue==6)">????????????????????????????????????????????????????????????????????????????????????????????????????????? ???????????????????????????????????????????????????????????????????????? <br>???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????</p>
        <p v-else-if="(scannnerValue==7)">??????????????????????????????????????????????????????????????????????????????????????? MACD ???????????????????????? Signal ???????????????????????? <br>???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????</p>
        <p v-else>????????????????????????????????????????????????????????????????????????????????????????????????????????? <br> ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????</p>
      </div>
        
    
     
       
        <div class="third-selectbox" v-if="(scannnerValue==4)">
          <select
            class="form-select form-select-sm w-auto text-light shadow-none borderColor"
            aria-label=".form-select-sm example"
            style="background-color: #222b2f"
            v-model="top"
          >
            <option value="0" selected>New High</option>
            <option value="1">New Low</option>
          </select>
        </div>
        
        <div class="third-selectbox" v-if="(scannnerValue==2)">
          <select
            class="form-select form-select-sm w-auto text-light shadow-none borderColor"
            aria-label=".form-select-sm example"
            style="background-color: #222b2f"
            v-model="top"
          >
            <option value="0" selected>Top Gain</option>
            <option value="1">Top Loss</option>
          </select>
        </div>
        <div class="radio_btn" v-if="(scannnerValue==3)">
          <input type="radio" id="min" name="time" />
          <label for="min" class="m-0">Min</label>
        </div>
        <div class="radio_btn" v-if="(scannnerValue==3)">
          <input type="radio" id="hour" name="time" />
          <label for="hour" class="m-0">Hour</label>
        </div>
        <div class="radio_btn" v-if="(scannnerValue==3)">
          <input type="radio" id="day" name="time" />
          <label for="day" class="m-0">Day</label>
        </div>
        <div class="radio_btn position-relative" v-if="(scannnerValue==3)">
          <input type="number" v-model="day" min="1" class="from-control" />
           <div class="icons">
            <span @click="(day=day+1)"><b-icon icon="caret-up-fill"></b-icon></span>
            <span @click="decrement()"><b-icon icon="caret-down-fill"></b-icon></span>
           </div>
          <label class="m-0">Day Ago</label>
        </div>
    
      </div>
    </div>
    <div class="container"  v-if="(top==0&&(scannnerValue==2||scannnerValue==4))">
      <!-- Tree map -->
      <div id="chart" class="custom-charts">
        <apexchart
          type="bar"
          height="350 "
          :options="chartOptions"
          :series="series"
        ></apexchart>
      </div>
      <!-- Tree map end -->
    </div>
    <div class="container"  v-if="(top==1&&(scannnerValue==2||scannnerValue==4))">
      <!-- Tree map -->
      <div id="chart" class="custom-charts">
        <apexchart
          type="bar"
          height="250"
          :options="chartOptionsLoss"
          :series="seriesLoss"
        ></apexchart>
      </div>
      <!-- Tree map end -->
    </div>
    
   
    <volume-table v-if="(scannnerValue==3)"></volume-table>
    <highTableVue v-else-if="(scannnerValue==4)"></highTableVue>
    <Dynamic-Table v-else
      :TableHeader="TableHeading"
      :TableData="TableDatas"
      :Showfavorite="true"
    ></Dynamic-Table>
  </div>
</template>

<script>
import Table from "../../components/table/Table.vue";
import VolumeTable from "@/components/scanner/VolumeTable.vue";
import highTableVue from "@/components/scanner/highTable.vue";
import VueApexCharts from "vue-apexcharts";
export default {
  name: "scan",
  
  components: {
    "Dynamic-Table": Table,
    apexchart: VueApexCharts,
    VolumeTable,
    highTableVue,
  },
  data() {
    return {
      scannnerValue:'1',
      top:"0",
      day:1,
      open_dropdown:false,
      list:['','Most Active','Top Gain/ Loss','Volume Outperform','New High/ Low','Pull the Bull','HH_RSI','HH_MACD Cross','Bullish Volume Break Out plus ADX'],
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
      seriesLoss: [
        {
          name: "Cash Flow",
          data: [
            "-98%",
            "-96%",
            "-94%",
            "-90%",
            "-85%",
            "-80%",
            "-75%",
            "-70%",
            "-60%",
            "-55%",
            "-53%",
            "-50%",
            "-48%",
            "-45%",
            "-40%",
            "-33%",
            "-30%",
            "-28%",
            "-25%",
            "-18%",
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
          categories: ["ETH", "ETH", "ETH", "ETH", "ETH", "ETH", "ETH", "ETH", "ETH", "ETH", "ETH", "ETH","ETH", "ETH", "ETH", "ETH","ETH", "ETH", "ETH", "ETH"],
          position: 'bottom',
          axisTicks: { show: false },
          axisBorder: { show: true},
          labels: { show: true },
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
                  from: -100,
                  to: 0,
                  color: "#DE2D40",
                },
              ],
            },
            columnWidth: "50%",
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

      
      chartOptionsLoss: {
        legend: {
          show: false,
        },
        yaxis: {
          axisBorder: { show: false },
          labels: { show: false },
        },
        xaxis: {
          categories: ["ETH", "ETH", "ETH", "ETH", "ETH", "ETH", "ETH", "ETH", "ETH", "ETH", "ETH", "ETH","ETH", "ETH", "ETH", "ETH","ETH", "ETH", "ETH", "ETH"],
          position: 'top',
          axisTicks: { show: false },
          axisBorder: { show: true},
          labels: { show: true },
        },
        chart: {
          type: "bar",
          height:200,
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
            columnWidth: "50%",
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
  methods:{
    decrement(){
      let d = this.day-1 
      if(d<=0){
        return false
      }else{
        this.day= this.day-1
      }
    }
  }
};
</script>
<style lang="scss">
.second-selectbox{
  .select-container {
    background-color: #222b2f;
    color: #d6dde1;
    border-radius: 4px;
    height: 40px;
    width: 240px;
    margin: auto 0;
    display: flex;
    align-items: center;
    position: relative;
    cursor: pointer;
    .icon {
      pointer-events: none;
      position: absolute;
      right: 20px;
      svg{
        width:12px !important;
        height:8px
            }
    }
    .rotate-sc-icon {
      transform: rotateX(180deg);
    }
    .text {
      padding-left: 15px;
    }
    .options {
      position: absolute;
      top: 42px;
    z-index: 1;
    width: 346px;
      background-color: #222b2f;
      border-radius: 4px;
      ul {
        margin: 0;
        padding: 0;
        li {
          display: flex;
          align-items: center;
          height: 40px;
          padding: 0 8px;
          border-radius: 4px;
          font-weight: 400;
          font-size: 14px;
          line-height: 24px;
          &:hover {
            background-color: #2c3b44;
          }
        }
      }
    }
    .hidden {
      display: none;
    }
    .show {
      display: block;
    }
  }
  .input-container {
    input {
      background-color: #222b2f;
      color: #d6dde1;
      border-radius: 4px;
      height: 40px;
      padding: 0 18px;
      &::placeholder {
        color: #566a76;
      }
    }
    span {
      color: #9bacb6;
      margin-left: -40px;
    }
  }
  .info {
    color: #d6dde1;
    p {
      margin: 0;
    }
    ul {
      list-style: disc;
    }
  }
  .lr {
    font-size: 16px;
    span {
      font-size: 14px;
      color: #f38220;
      margin-left: 8px;
    }
  }
  .bcb {
    margin: 0 -27px;
    margin-top: 30px;
    margin-bottom: 20px;
    border-top: 1px solid #28363e;
  }
  .bc-info {
    ul {
      list-style: disc;
      padding: 0 24px;
      li {
        color: #9bacb6;
        width: 70%;
      }
    }
    ul.number {
      list-style: decimal;
    }
  }
}

</style>
<style scoped>

#tooltip-target-1
{
    background: transparent;
    border: none;
    padding: 0px;
    margin: 0px 0px;
    outline: none !important;
    box-shadow: none !important;
}
.info{
  position:relative
}
.info svg{
    cursor:pointer
  }
.info p {
    position: absolute;
    width: 444px;
    color: #677F8E;
    font-weight: 400;
    font-size: 13px;
    padding: 4px 8px;
    line-height: 24px;
    height: 56px;
    z-index:10;
    background: #D6DDE1;
    border-radius: 4px;
    top: -63px;
    left: 18px;
    display: none;
}
.info:hover p {
   display: block;
}
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
.second-selectbox select option{
    font-size: 14px;
    line-height:24px;
    -webkit-padding: 18px !important;
    /* display: inline-block; */
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
  right: 4px;
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
  text-align: right;
  padding: 3px 24px;
  color: white;
  width: 85px;
  height: 37px;
  background-color: rgb(34, 43, 47);
  border-radius: 4px;
  border: none;
  outline: none;
}
input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.icons{
  display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 65px;
}
.icons span{
line-height: 0px;
}
.icons span svg{
width:12px;
height:12px;
color: #677F8E;
cursor:pointer
}
.number-wrapper {
  position: relative;
}
</style>
