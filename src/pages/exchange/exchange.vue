<template>
  <div class="container-fluid buy-sell mb-3 p-0">
    <div class="row p-0">
      <div class="col-12 col-lg-9 col-xl-9">
        <div class="row">
          <!-- here -->

          <div class="col-12">
            <div class="row top-search-row">
              <div
                class="col-11 col-md-4 col-lg-4 col-xl-3"
                style="padding-left: 15px !important"
              >
                <div class="position-relative search-container">
                  <div>
                    <span class="search-svg"
                      ><svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z"
                          fill="#677F8E"
                        />
                      </svg>
                    </span>
                    <span class="coin-image">
                      <img
                        class="coin-img"
                        src="../../assets/images/coin_32/btc.png"
                        alt="coin-image"
                      />
                      <span v-if="btc_text" class="btc-text">BTC /</span>
                    </span>
                    <input
                      @click="btc_text = false"
                      v-model="coinSearchText"
                      @focus="showSearchBox = true"
                      @focusout="(btc_text = true), (showSearchBox = false)"
                      class="ml-4 coins-search-input text-uppercase"
                      :class="
                        `${coinSearchText.length == 0 ? 'ml-4' : 'ml-1'}` &&
                        btc_text
                          ? 'btc-text-true'
                          : 'btc-text-false'
                      "
                      type="text"
                      :placeholder="btc_text ? 'THB' : ''"
                      maxlength="10"
                    />
                  </div>

                  <div v-if="showSearchBox" class="searching-box">
                    <p class="thai-font search-box-title">ค้นหาล่าสุด</p>
                    <div class="grid">
                      <div class="row sb-row" @click="btc_text = true">
                        <div class="col-5 col-lg-6">
                          <img
                            class="sb-coin-img d-inline"
                            src="../../assets/images/coin_32/btc.png"
                            alt="coin-image"
                          />
                          <span class="sb-pre-coin">BTC</span
                          ><span class="sb-finding-coin"> / THB</span>
                        </div>
                        <div class="col-7 col-lg-6">
                          <div class="row">
                            <div class="col-4 sb-amount">Vol. 89.5M</div>
                            <div class="col-4 sb-amount">Vol. 89.5M</div>
                            <div class="col-4 sb-increasing-trend">+3.78%</div>
                          </div>
                        </div>
                      </div>
                      <div class="row sb-row" @click="btc_text = true">
                        <div class="col-5 col-lg-6">
                          <img
                            class="sb-coin-img d-inline"
                            src="../../assets/images/coin_32/btc.png"
                            alt="coin-image"
                          />
                          <span class="sb-pre-coin">BTC</span
                          ><span class="sb-finding-coin"> / THB</span>
                        </div>
                        <div class="col-7 col-lg-6">
                          <div class="row">
                            <div class="col-4 sb-amount">Vol. 89.5M</div>
                            <div class="col-4 sb-amount">Vol. 89.5M</div>
                            <div class="col-4 sb-increasing-trend">+3.78%</div>
                          </div>
                        </div>
                      </div>
                      <div class="row sb-row" @click="btc_text = true">
                        <div class="col-5 col-lg-6">
                          <img
                            class="sb-coin-img d-inline"
                            src="../../assets/images/coin_32/btc.png"
                            alt="coin-image"
                          />
                          <span class="sb-pre-coin">BTC</span
                          ><span class="sb-finding-coin"> / THB</span>
                        </div>
                        <div class="col-7 col-lg-6">
                          <div class="row">
                            <div class="col-4 sb-amount">Vol. 89.5M</div>
                            <div class="col-4 sb-amount">Vol. 89.5M</div>
                            <div class="col-4 sb-increasing-trend">+3.78%</div>
                          </div>
                        </div>
                      </div>
                      <div class="row sb-row" @click="btc_text = true">
                        <div class="col-5 col-lg-6">
                          <img
                            class="sb-coin-img d-inline"
                            src="../../assets/images/coin_32/btc.png"
                            alt="coin-image"
                          />
                          <span class="sb-pre-coin">BTC</span
                          ><span class="sb-finding-coin"> / THB</span>
                        </div>
                        <div class="col-7 col-lg-6">
                          <div class="row">
                            <div class="col-4 sb-amount">Vol. 89.5M</div>
                            <div class="col-4 sb-amount">Vol. 89.5M</div>
                            <div class="col-4 sb-increasing-trend">+3.78%</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="col-12 col-md-8 col-lg-8 col-xl-9 my-auto trading-scores"
              >
                <span
                  class="live-amount-title red"
                  :class="priceInfo.textColor"
                  >{{ formatPrice(priceInfo.last) }}</span
                >
                <span class="live-amount-value red" :class="priceInfo.textColor"
                  >({{ priceInfo.pChg }}%)</span
                >
                <span class="title">24h High:</span>
                <span class="value">{{ formatPrice(priceInfo.high24) }}</span>
                <span class="title">24h Low:</span>
                <span class="value">{{ formatPrice(priceInfo.low24) }}</span>
                <span class="title">24h Volume (BTC):</span>
                <span class="value">{{ formatPrice(priceInfo.vol24) }}</span>
              </div>
            </div>
          </div>
          <div
            class="col-12 col-lg-4 col-xl-4 bs-left-table c-p"
            style="padding-left: 24px"
          >
            <div
              class="bid-offer-container d-flex justify-content-between align-center"
            >
              <div class="d-flex justify-content-start align-center">
                <div
                  class="select"
                  tabindex="0"
                  @click="open_dropdown_coin = !open_dropdown_coin"
                  @blur="open_dropdown_coin = false"
                >
                  <span class="text" style="left: 15px">{{ Value }}</span>
                  <span
                    class="icon"
                    :class="open_dropdown_coin ? 'rotate-sc-icon' : ''"
                    ><svg
                      width="8"
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
                    v-show="open_dropdown_coin"
                    style="left: 0px; top: 33px"
                  >
                    <ul>
                      <li @click="Value = 'Bid / Offer'">Bid / Offer</li>
                      <li @click="Value = 'Bid'">Bid</li>
                      <li @click="Value = 'Offer'">Offer</li>
                      <li @click="Value = 'All Coins'">All Coins</li>
                      <li @click="Value = 'Fav'">Fav</li>
                      <li @click="Value = 'Coin Ticker'">Coin Ticker</li>
                    </ul>
                  </div>
                </div>
                <!-- <select>
                  <option value="">Bid / Offer</option>
                  <option value="">Bid</option>
                  <option value="">Offer</option>
                  <option value="">All Coins</option>
                  <option value="">Fav</option>
                  <option value="">Coin Ticker</option>
                </select>
                <div>
                  <svg
                    width="8"
                    height="6"
                    viewBox="0 0 8 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.94 0.726562L4 3.7799L7.06 0.726562L8 1.66656L4 5.66656L0 1.66656L0.94 0.726562Z"
                      fill="#677F8E"
                    />
                  </svg>
                </div> -->
              </div>
              <div class="d-flex justify-content-start align-center">
                <div
                  class="select ratioSelect"
                  tabindex="0"
                  @click="open_dropdown_ratio = !open_dropdown_ratio"
                  @blur="open_dropdown_ratio = false"
                >
                  <span class="text" style="left: 15px">{{ Value1 }}</span>
                  <span
                    class="icon"
                    :class="open_dropdown_ratio ? 'rotate-sc-icon' : ''"
                    ><svg
                      width="8"
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
                    v-show="open_dropdown_ratio"
                    style="left: 0px; top: 33px"
                  >
                    <ul>
                      <li @click="Value1 = '0.1'">0.1</li>
                      <li @click="Value1 = '0.01'">0.01</li>
                      <li @click="Value1 = '0.001'">0.001</li>
                      <li @click="Value1 = '0.0001'">0.0001</li>
                      <li @click="Value1 = '0.00001'">0.00001</li>
                    </ul>
                  </div>
                </div>
                <!-- <select>
                  <option value="">0.1</option>
                  <option value="">0.01</option>
                  <option value="">0.001</option>
                  <option value="">0.0001</option>
                  <option value="">0.00001</option>
                </select>
                <div>
                  <svg
                    width="8"
                    height="6"
                    viewBox="0 0 8 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.94 0.726562L4 3.7799L7.06 0.726562L8 1.66656L4 5.66656L0 1.66656L0.94 0.726562Z"
                      fill="#677F8E"
                    />
                  </svg>
                </div> -->
              </div>
            </div>
            <!-- buy / sell live scores table start -->
            <div class="bs-table-l">
              <table class="table table-borderless">
                <thead>
                  <tr>
                    <th style="width: 50%">Price (THB)</th>
                    <th>Vol (BTC)</th>
                    <th class="text-end">Total (THB)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in plate.askRows" :key="'b' + index">
                    <td class="red" @click="selected_sell_score = item.price">
                      {{ formatPrice(item.price) }}
                    </td>
                    <td>{{ formatPrice(item.amount, 6) }}</td>
                    <td class="text-end">{{ formatPrice(item.total) }}</td>
                  </tr>
                  <tr>
                    <td class="text-last-price" :class="priceInfo.textColor">
                      {{ formatPrice(priceInfo.last) }}
                    </td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr v-for="(item, index) in plate.bidRows" :key="'c' + index">
                    <td @click="selected_buy_score = item.price" class="green">
                      {{ formatPrice(item.price) }}
                    </td>
                    <td>{{ formatPrice(item.amount, 6) }}</td>
                    <td class="text-end">{{ formatPrice(item.total) }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!-- buy / sell live scores table end -->
          </div>

          <div class="col-12 col-lg-8 col-xl-8 p-0">
            <div class="p-0">
              <iframe
                id="mydiv"
                ref="myid"
                class="iframe-chart"
                :src="chartSymbolUrl"
              ></iframe>
              <!-- <h1 class="text-white">Chart Here</h1> -->
              <!-- <iframe
                src="https://bitenium.com/StockChartXRTC/chart.aspx"
                width="715"
                height="440"
                title="Iframe Example"
              ></iframe> -->
            </div>
            <!-- End Chart Area -->

            <ExchangeOrder
              :selected_sell_score="selected_sell_score"
              :selected_buy_score="selected_buy_score"
            />
          </div>
        </div>
      </div>

      <div class="col-12 col-lg-3 col-xl-3 bs-right-table c-p">
        <div class="all-coins-container">
          <div
            class="select ratioSelect"
            tabindex="0"
            @click="open_dropdown_right = !open_dropdown_right"
            @blur="open_dropdown_right = false"
            style="width: 120px !important"
          >
            <span class="text" style="left: 15px">{{ Value2 }}</span>
            <span
              class="icon"
              :class="open_dropdown_right ? 'rotate-sc-icon' : ''"
              ><svg
                width="8"
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
              v-show="open_dropdown_right"
              style="left: 0px; top: 33px"
            >
              <ul>
                <li @click="Value2 = 'Bid / Offer'">Bid / Offer</li>
                <li @click="Value2 = 'Bid'">Bid</li>
                <li @click="Value2 = 'Offer'">Offer</li>
                <li @click="Value2 = 'All Coins'">All Coins</li>
                <li @click="Value2 = 'Fav'">Fav</li>
                <li @click="Value2 = 'Coin Ticker'">Coin Ticker</li>
              </ul>
            </div>
          </div>
          <!-- <select>
            <option value="">All Coins</option>
            <option value="">Bid</option>
            <option value="">Offer</option>
            <option value="">All Coins</option>
            <option value="">Fav</option>
            <option value="">Coin Ticker</option>
          </select>
          <span>
            <svg
              width="8"
              height="6"
              viewBox="0 0 8 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.94 0.726562L4 3.7799L7.06 0.726562L8 1.66656L4 5.66656L0 1.66656L0.94 0.726562Z"
                fill="#677F8E"
              />
            </svg>
          </span> -->
        </div>

        <div class="bs-table-s fav-table">
          <table class="table table-borderless">
            <thead>
              <tr class="sticky-top fixed">
                <th>Coin</th>
                <th>Price (THB)</th>
                <th style="text-align: right">
                  %Chg
                  <svg
                    width="6"
                    height="12"
                    viewBox="0 0 6 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_4623_9379)">
                      <path d="M0 8L3 11L6 8H0Z" fill="#677F8E" />
                      <path d="M6 4L3 1L0 4L6 4Z" fill="#677F8E" />
                    </g>
                    <defs>
                      <clipPath id="clip0_4623_9379">
                        <rect width="6" height="12" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(item, index) in coinMarket"
                :key="'d' + index"
                @click="selectMarketSymbol(item.url.toString())"
                style="cursor: pointer"
              >
                <td>
                  <span
                    ><svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.6663 5.7876L8.87301 5.37427L6.99967 0.960938L5.12634 5.38094L0.333008 5.7876L3.97301 8.94094L2.87967 13.6276L6.99967 11.1409L11.1197 13.6276L10.033 8.94094L13.6663 5.7876ZM6.99967 9.89427L4.49301 11.4076L5.15967 8.55427L2.94634 6.63427L5.86634 6.38094L6.99967 3.69427L8.13967 6.3876L11.0597 6.64094L8.84634 8.56094L9.51301 11.4143L6.99967 9.89427Z"
                        fill="#677F8E"
                      />
                    </svg>
                  </span>
                  {{ item.symbol }}
                </td>
                <td>{{ formatPrice(item.price) }}</td>
                <td :class="item.color" style="text-align: right">
                  {{ item.pChg }}%
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p class="btc-ticker">BTC Ticker</p>
        <div class="bs-table-s">
          <table class="table table-borderless p-0">
            <thead>
              <tr class="sticky-top">
                <th style="width: 40%">Time</th>
                <th>Price (THB)</th>
                <th style="text-align: right">Volume (BTC)</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in ticker.tickerRows" :key="'a' + index">
                <td>{{ item.time }}</td>
                <td>{{ formatPrice(item.price) }}</td>
                <td style="text-align: right">
                  {{ formatPrice(item.amount, 6) }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <ExchangeFooter />
  </div>
</template>

<script>
import ExchangeFooter from "./components/ExchangeFooter.vue";
import ExchangeOrder from "./components/ExchangeOrder.vue";
var Stomp = require("stompjs");
var SockJS = require("sockjs-client");
export default {
  components: {
    ExchangeFooter,
    ExchangeOrder,
  },
  data() {
    return {
      open_dropdown_right: false,
      open_dropdown_ratio: false,
      open_dropdown_coin: false,
      Value: "Bid / Offer",
      Value1: "0.1",
      Value2: "All Coins",
      coinSearchText: "",
      defaultPath: "btc_usdt",
      showSearchBox: false,
      selected_sell_score: 0,
      selected_buy_score: 0,
      currentCoin: {
        base: "",
        coin: "",
        symbol: "BTC/USDT",
      },
      plate: {
        maxPostion: 15,
        askRows: [],
        bidRows: [],
      },
      ticker: {
        tickerRows: [],
      },
      priceInfo: {
        last: "0",
        chg: "0",
        high24: "0",
        low24: "0",
        vol24: "0",
        pChg: "0",
        textColor: "",
      },
      coinMarket: [],
      chartSymbolUrl: "http://27.254.47.24/libchart/chart?symbol=BTC%2FTHB",
      test: "",
      btc_text: true,
    };
  },
  methods: {
    defaultSymbol() {
      // console.log(this.$refs.myid.contentWindow.setupIndicators())
      // console.log(this.$refs.myid.contentWindow.location.Symbol("BTC"))

      // var frame = document.getElementById("mydiv");

      // frame.contentWindow.postMessage("test", "*");
      // // In your <iframe> (contained in the main page):

      // window.addEventListener("message", function (event) {
      //   // IMPORTANT: Check the origin of the data!
      //   if (~event.origin.indexOf("http://192.168.1.209:8080")) {
      //     // The data has been sent from your site

      //     // The data sent with postMessage is stored in event.data
      //     console.log(event.data);
      //   } else {
      //     // The data hasn't been sent from your site!
      //     // Be careful! Do not use it.
      //     return;
      //   }
      // });

      if (typeof this.$route.params.pair == "undefined") {
        this.currentCoin.symbol = "BTC/THB";
        this.$route.params["pair"] = "btc_thb";
      } else {
        let pair = this.$route.params.pair;
        let dataArr = pair.split("_");

        this.currentCoin.symbol = (dataArr[0] + "/" + dataArr[1]).toUpperCase();
        let symbolEncode = encodeURIComponent(this.currentCoin.symbol);
        this.chartSymbolUrl =
          "http://27.254.47.24/libchart/chart?symbol=" + symbolEncode;
      }

      // setTimeout(function () {
      //   console.log(frames[0].setupIndicators());
      // }, 5000);
    },
    updateDataTrade() {
      if (this.stompClient) {
        this.stompClient.ws.close();
      }

      var stompClient = null;
      var that = this;
      var symbol = that.currentCoin.symbol;
      var url = "http://27.254.47.45/market/market-ws";
      var socket = new SockJS(url);
      stompClient = Stomp.over(socket);
      this.stompClient = stompClient;
      stompClient.debug = false;

      stompClient.connect({}, function (frame) {
        stompClient.subscribe("/topic/market/thumb", function (msg) {
          var resp = JSON.parse(msg.body);
          // console.log(resp)
          that.updatePriceInfo(resp);
        });

        stompClient.subscribe("/topic/market/trade/" + symbol, function (msg) {
          var resp = JSON.parse(msg.body);
          that.updateTickers(resp);
        });

        stompClient.subscribe(
          "/topic/market/trade-plate/" + symbol,
          function (msg) {
            var resp = JSON.parse(msg.body);
            that.updateBidAsk(resp);
          }
        );
      });
    },
    getBidAsk() {
      var params = {};
      params["symbol"] = this.currentCoin.symbol;

      this.$http
        .post("http://27.254.47.45/market/exchange-plate", params, {
          emulateJSON: true,
        })
        .then((response) => {
          var resp = response.body;
          if (resp.ask) {
            var asks = resp.ask;
            this.plate.askRows = [];
            for (var i = this.plate.maxPostion - 1; i >= 0; i--) {
              var ask = {
                price: asks[i].price.toFixed(2),
                amount: asks[i].amount.toFixed(6),
                total: (asks[i].price * asks[i].amount).toFixed(2),
              };
              this.plate.askRows.push(ask);
            }
            if (this.plate.askRows.length > 15) {
              this.plate.askRows = this.plate.askRows.slice(0, 15);
            }
          } else {
            var bids = resp.items;
            this.plate.bidRows = [];
            for (var i = this.plate.maxPostion - 1; i >= 0; i--) {
              var bid = {
                price: bids[i].price.toFixed(2),
                amount: bids[i].amount.toFixed(6),
                total: (bids[i].price * bids[i].amount).toFixed(2),
              };
              this.plate.bidRows.push(bid);
            }
            if (this.plate.bidRows.length > 15) {
              this.plate.bidRows = this.plate.bidRows.slice(0, 15);
            }
          }
          // console.log(resp);
        });
    },
    updateBidAsk(resp) {
      // console.log(resp)
      var that = this;
      if (resp.direction == "SELL") {
        var asks = resp.items;
        this.plate.askRows = [];
        for (var i = that.plate.maxPostion - 1; i >= 0; i--) {
          var ask = {
            price: asks[i].price.toFixed(2),
            amount: asks[i].amount.toFixed(6),
            total: (asks[i].price * asks[i].amount).toFixed(2),
          };
          that.plate.askRows.push(ask);
        }
        if (that.plate.askRows.length > 15) {
          that.plate.askRows = that.plate.askRows.slice(0, 15);
        }
      } else {
        var bids = resp.items;
        this.plate.bidRows = [];
        for (var i = that.plate.maxPostion - 1; i >= 0; i--) {
          var bid = {
            price: bids[i].price.toFixed(2),
            amount: bids[i].amount.toFixed(6),
            total: (bids[i].price * bids[i].amount).toFixed(2),
          };
          that.plate.bidRows.unshift(bid);
        }
        if (that.plate.bidRows.length > 15) {
          that.plate.bidRows = that.plate.bidRows.slice(0, 15);
        }
      }
    },
    getTickers() {
      var params = {};
      params["symbol"] = this.currentCoin.symbol;
      params["size"] = 15;

      this.$http
        .post("http://27.254.47.45/market/latest-trade", params, {
          emulateJSON: true,
        })
        .then((response) => {
          var resp = response.body;
          if (resp.length > 0) {
            this.priceInfo.last = resp[0].price;
            for (var i = 0; i < resp.length; i++) {
              let date = new Date(resp[i].time);
              let hours = ("0" + date.getHours()).slice(-2);
              let minute = ("0" + date.getMinutes()).slice(-2);
              let second = ("0" + date.getSeconds()).slice(-2);
              let time = hours + ":" + minute + ":" + second;
              resp[i].price = resp[i].price.toFixed(2);
              resp[i].amount = resp[i].amount.toFixed(6);
              resp[i].time = time;
              this.ticker.tickerRows.push(resp[i]);
            }
          }
          if (this.ticker.tickerRows.length > 15) {
            this.ticker.tickerRows = this.ticker.tickerRows.slice(0, 15);
          }
        });
    },
    updateTickers(resp) {
      // console.log(resp);
      var that = this;
      if (resp.length > 0) {
        for (var i = 0; i < resp.length; i++) {
          let date = new Date(resp[i].time);
          let hours = ("0" + date.getHours()).slice(-2);
          let minute = ("0" + date.getMinutes()).slice(-2);
          let second = ("0" + date.getSeconds()).slice(-2);
          let time = hours + ":" + minute + ":" + second;
          resp[i].price = resp[i].price.toFixed(2);
          resp[i].amount = resp[i].amount.toFixed(6);
          resp[i].time = time;
          that.priceInfo.last = resp[i].price;
          that.ticker.tickerRows.unshift(resp[i]);
        }
      }
      if (that.ticker.tickerRows.length > 15) {
        that.ticker.tickerRows = that.ticker.tickerRows.slice(0, 15);
      }
    },
    getSymbolThumb() {
      var params = {};
      params["symbol"] = this.currentCoin.symbol;
      params["size"] = 15;

      this.$http
        .post("http://27.254.47.45/market/symbol-thumb", {
          emulateJSON: true,
        })
        .then((response) => {
          var resp = response.body;
          console.log(resp);
          this.coinMarket = [];
          for (let i = 0; i < resp.length; i++) {
            let symbolArr = resp[i].symbol.split("/");
            let symbol = (symbolArr[0] + "_" + symbolArr[1]).toLowerCase();
            let color = "";
            if (resp[i].chg > 0) {
              color = "green";
            } else if (resp[i].chg < 0) {
              color = "red";
            }
            let coinMarket = {
              symbol: resp[i].symbol,
              price: resp[i].close,
              pChg: resp[i].chg,
              url: "/exchange/" + symbol,
              color: color,
            };
            this.coinMarket.push(coinMarket);

            if (this.currentCoin.symbol == resp[i].symbol) {
              if (resp[i].chg < 0) {
                this.priceInfo.textColor = "red";
              } else if (resp[i].chg > 0) {
                this.priceInfo.textColor = "green";
              }

              this.priceInfo.chg = resp[i].change;
              this.priceInfo.high24 = resp[i].high;
              this.priceInfo.low24 = resp[i].low;
              this.priceInfo.vol24 = resp[i].volume;
              this.priceInfo.pChg = resp[i].chg;
            }
          }
        });
    },
    updatePriceInfo(resp) {
      for (let i = 0; i < this.coinMarket.length; i++) {
        if (this.coinMarket[i].symbol == resp.symbol) {
          this.coinMarket[i].price = resp.close;
          this.coinMarket[i].pChg = resp.chg;
          if (resp.chg > 0) {
            this.coinMarket[i].color = "green";
          } else if (resp.chg < 0) {
            this.coinMarket[i].color = "red";
          }

          break;
        }
      }

      if (this.currentCoin.symbol == resp.symbol) {
        if (resp.chg < 0) {
          this.priceInfo.textColor = "red";
        } else if (resp.chg > 0) {
          this.priceInfo.textColor = "green";
        }

        this.priceInfo.chg = resp.change;
        this.priceInfo.high24 = resp.high;
        this.priceInfo.low24 = resp.low;
        this.priceInfo.vol24 = resp.volume;
        this.priceInfo.pChg = resp.chg;
      }
    },
    formatPrice(value, digits = 2) {
      if (value > 999) {
        let val = (value / 1).toFixed(digits);
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      } else {
        return value;
      }
    },
    selectMarketSymbol(url) {
      window.location.href = url;
    },
  },
  mounted() {
    this.defaultSymbol();
    this.getSymbolThumb();
    this.getBidAsk();
    this.getTickers();
    this.updateDataTrade();
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,600&display=swap");
</style>
<style scoped>
.select {
  position: relative;
  width: 101px;
  height: 32px;
  border-radius: 2px;
  padding: 4px 8px;
  background-color: #2c3b44;
  color: white;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
}
.select .icon {
  position: absolute;
  /* top: 6px !important; */
  pointer-events: none;
  right: 8px !important;
}
.select .options {
  position: absolute;
  top: 42px;
  z-index: 10000;
  width: 100%;
  background-color: rgb(34, 43, 47);
  border-radius: 4px;
}
.select .options ul {
  list-style: none;
  padding: 0px;
  margin: 0px;
}
.select .options ul li {
  padding: 6px;
  cursor: pointer;
}
.select .options ul li:hover {
  background-color: #2c3b44;
}
</style>
<style lang="scss">
::-webkit-scrollbar {
  width: 4px;
  height: 4px;
  border-radius: 20px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #28363e;

  border-radius: 20px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  border-radius: 20px;
  background: #3c515d;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #d6dde1;
  border-radius: 20px;
}

/* Buy & Sell */
.buy-sell {
  .top-search-row {
    padding: 10px;
    border-bottom: 1px solid #28363e;
    margin-right: -9px;
  }
  .search-container {
    position: relative;
    width: 100%;
    margin-left: 7px;
    .searching-box {
      z-index: 1;
      position: absolute;
      margin-top: 5px;
      height: auto;
      background-color: #1c262b;
      padding: 15px 20px;
      .search-box-title {
        font-size: 16px;
        font-weight: 700;
        margin: 0;
      }
      .sb-coin-img {
        width: 25px;
        margin-top: -4px;
      }
      .sb-pre-coin {
        font-weight: 600;
        font-size: 16px;
        color: #d6dde1;
        margin-left: 10px;
      }
      .sb-row {
        padding: 12px 0px;
        cursor: pointer;
        &:hover {
          background-color: #28363e;
        }
      }
      .sb-amount {
        color: #d6dde1;
        font-size: 15px;
      }
      .sb-increasing-trend {
        color: #40994f;
        font-size: 16px;
      }
      .sb-finding-coin {
        font-size: 12px;
        color: #677f8e;
      }
    }

    .coins-search-input {
      background-color: #222b2f;
      color: white;
      width: 100%;
      font-size: 18px;
      line-height: 24px;
      caret-color: #f38220;
      font-weight: 600;
      border-radius: 4px !important;
      padding-top: 6.5px;
      padding-bottom: 6.5px;
      padding-right: 60px;
      background-color: #222b2f;
    }
    .btc-text-true {
      padding-left: 90px;
    }
    .btc-text-false {
      padding-left: 40px;
    }
    .coins-search-input::placeholder {
      color: #9bacb6;
    }
    .search-svg {
      position: absolute;
      right: 0;
      margin-right: 11px;
      margin-top: 10px;
      pointer-events: none;
    }
    .coin-image {
      position: absolute;
      font-size: 18px;
      left: 10px;
      top: 3.5px;
      pointer-events: none;
      .coin-img {
        width: 23px;
      }
      .btc-text {
        color: white;
        position: relative;
        top: 1.5px;
        margin-left: 7px;
        display: inline-block;
        font-family: "Roboto Flex";
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 24px;
      }
    }
  }
  .trading-scores {
    .live-amount-title {
      font-weight: 600;
      font-size: 18px;
      line-height: 24px;
    }
    .live-amount-title.red {
      color: #de2d40;
    }
    .live-amount-title.green {
      color: #40994f;
    }
    .live-amount-value {
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
      margin-left: 8px;
      margin-right: 16px;
    }
    .live-amount-value.red {
      color: #de2d40;
    }
    .live-amount-value.green {
      color: #40994f;
    }
    .title {
      color: #9bacb6;
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
      margin-right: 8px;
    }
    .value {
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;
      margin-right: 16px;
    }
  }
}
.bs-left-table {
  border-right: 1px solid #28363e;
}
.bs-right-table {
  border-left: 1px solid #28363e;
}
.buy-sell .col-md-9 {
  border-right: 1px solid #28363e;
}

.buy-sell header {
  border-bottom: 1px solid #28363e;
}

.buy-sell header ul {
  list-style: none;
  padding-top: 24px;
}

.buy-sell header ul li form .dropdown button {
  padding: 8px 12px;
  width: 219px;
  height: 40px;
  border: none;

  font-size: 18px;
  /* Button + Field/Field & Button - Default */

  background: #222b2f;
  border-radius: 4px;
}

.buy-sell header ul li form .dropdown button i {
  margin-left: 70px;
  font-size: 17.49px;
  /* Text + Icon/Content - Sub#2, Icon */
  color: rgba(103, 127, 142, 1);
}

.buy-sell header ul li {
  display: inline-block;
}

.buy-sell header ul .red {
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  align-items: center;
  color: #de2d40;
}

.buy-sell header ul .red span {
  font-weight: 400;
  font-size: 14px;

  align-items: center;

  color: #de2d40;
}

.buy-sell header ul li {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #9bacb6;
}

.buy-sell header ul li span {
  font-weight: 500;
  font-size: 14px;
  color: #d6dde1;
}

.buy-sell header ul input {
  align-items: center;
  padding: 8px 12px;
  width: 219px;
  height: 40px;
  border: none;
  background: #222b2f;
  border-radius: 4px;
}
.fav-table th {
  padding-left: 20px;
}
.fav-table td {
  position: relative;
  padding-left: 20px;
  span {
    position: absolute;
    left: 0;
    top: 5.5px;
  }
}
.buy-sell .col-md-9 .col-md-4 select {
  margin-top: 17px;
  width: 120px;
  height: 32px;
  background: #2c3b44;
  border-radius: 2px;
  border: none;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 8px;
  gap: 4px;
  color: #ffffff;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
}
.bid-offer-container {
  margin: 1rem 0;
  position: relative;

  span {
    position: absolute;
    // top: 6px;
    pointer-events: none;
    right: 8px;
  }
  .ratioSelect {
    width: 80px;
    height: 32px;
    border-radius: 2px;
    padding: 4px 8px;
    background-color: #2c3b44;
    color: white;
  }
  .coinSelect {
    width: 100px;
    height: 32px;
    border-radius: 2px;
    padding: 4px 8px;
    background-color: #2c3b44;
    color: white;
  }
  select {
    color: white;
    background-color: #2c3b44;
  }
  select:focus {
    outline: none !important;
    border: none !important;
  }
}
.all-coins-container {
  margin: 1rem 0;
  position: relative;
  width: 120px;

  span {
    position: absolute;
    pointer-events: none;
    // top: 6px;
    right: 8px;
  }
  select {
    width: 100%;
    height: 32px;
    border-radius: 2px;
    padding: 4px 8px;
    background-color: #2c3b44;
    color: white;
  }
}

.buy-sell table {
  width: 100%;
  overflow: hidden;
}
.bs-left-table table tr th,
.bs-left-table table tr td {
  padding-left: 0 !important;
}

.buy-sell table th {
  /* EN/Sub-body 12 - Regular */
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  /* identical to box height */

  color: #677f8e;
}

.buy-sell table td {
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  /* Status/Negative */
  color: #d6dde1;
  svg {
    margin-right: 5px;
  }
}

.buy-sell table .red {
  color: #de2d40;
  cursor: pointer;
  // display: inline-block;
}

.buy-sell table .text-last-price {
  font-weight: 600;
}

.buy-sell table .green {
  color: #40994f;
  cursor: pointer;
  display: inline-block;
}

.buy-sell .col-md-3 select {
  margin-top: 17px;
  width: 120px;
  height: 32px;
  background: #2c3b44;
  border-radius: 2px;
  border: none;
  padding: 4px 8px;
  color: #ffffff;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
}

/*Buy/Sell  Charts */

.btc-ticker {
  margin: 0;
  margin-top: 10px;
  margin-left: 7px;
  margin-bottom: 10px;
  padding: 0;
  font-size: 16px;
  font-weight: 600;
  color: white;
}

.buy-sell h3 {
  margin-top: 30px;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  align-items: center;
  color: #ffffff;
}
.stpsl-cb {
  input {
    background: #222b2f;
    border: 1px solid #3c515d;
    border-radius: 2px;
    height: 17px;
    width: 17px;
  }
  input:checked {
    background-color: #f38220;
    border: 1px solid #3c515d;
  }
  span {
    display: inline-block;
    margin-left: 5px;
    // margin-top: 3px;
  }
}

/* Footer */

/* Modals */
#cancel-modal___BV_modal_content_,
#cancel-all-modal___BV_modal_content_,
#limitorder-TPSLB___BV_modal_content_,
#limitorder-TPSL___BV_modal_content_,
#limitorder-stop-loss___BV_modal_content_ {
  width: 360px;
  margin: 0 auto;
}

#limit-TPSL .modal-content .modal-body {
  width: 100%;
}

#limit-TPSL .top-col {
  border-bottom: 4px solid #0a0d10;
}

#limit-TPSL .modal-dialog .modal-content {
  background: #141b1f;
  border-radius: 8px;
  font-style: normal;
}

#limit-TPSL .modal-dialog .modal-content .modal-body {
  background: #141b1f;
  border-radius: 8px;
}

#limit-TPSL .modal-dialog .modal-content .modal-body p {
  color: #677f8e;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
}

#limit-TPSL .modal-dialog .modal-content .modal-body p .badge {
  /* EN/Sub-body 12 - Medium */

  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  background: #40994f;
  border-radius: 2px;
}

#limit-TPSL .modal-dialog .modal-content .modal-body p .span {
  margin-left: 30%;
}

#limit-TPSL input {
  background-color: #222b2f;
  border: 1px solid #3c515d;
  border-radius: 2px;
  padding: 0px;
  gap: 0px;
  height: 17px;
  width: 17px;
}

#limit-TPSL input:checked {
  background-color: #f38220;
}

#limit-TPSL label {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;

  color: #d6dde1;
}

#limit-TPSL .top-btn {
  border: 1px solid #28363e;
  width: 100%;
}

#limit-TPSL .top-btn button {
  color: #677f8e;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  /* identical to box height */
  border: none;
  text-align: center;
  height: 24px;
  top: 0;
  padding: 7px;
  margin-left: 0px;
}

#limit-TPSL .top-btn .active {
  background: #2c3b44;
  border-radius: 2px;
  color: white;
  margin: 1px;
}

#limit-TPSL .second-one {
  border: none;
  width: 100%;
}

#limit-TPSL .second-one button {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  height: 40px;
  /* identical to box height, or 171% */

  text-align: center;

  /* Text + Icon/Content - Sub #1 */
  background: #222b2f;
  color: #9bacb6;
  margin: 0.5px;
}

#limit-TPSL .second-one .padd {
  width: 200px;
}

#limit-TPSL .second-one .active {
  background: #38454d;
  border: none;
  color: white;
}

#limit-TPSL ul li {
  font-family: "Sarabun";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  /* or 171% */

  /* Text + Icon/Content - Sub #1 */

  color: #9bacb6;
}

#limit-TPSL .border-col {
  border-bottom: 1px solid #28363e;
}

#limit-TPSL .submit {
  /* Status/Positive */

  background: #40994f;
  border-radius: 4px;
  border: none;
  width: 255px;
  height: 40px;
  padding: 8px;
}

#limit-TPSL .modal-header {
  border: none;
}
#limit-TPSL .modal-header h5 {
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  color: #ffffff;
}

#limit-TPSL .modal-header button {
  background: none;
}

/*LIMIT Stop Modal  */

#limit-stop .modal-content .modal-body {
  width: 100%;
}

#limit-stop .top-col {
  border-bottom: 4px solid #0a0d10;
}

#limit-stop .modal-dialog .modal-content {
  background: #141b1f;
  border-radius: 8px;
  font-style: normal;
}

#limit-stop .modal-dialog .modal-content .modal-body {
  background: #141b1f;
  border-radius: 8px;
}

#limit-stop .modal-dialog .modal-content .modal-body p {
  color: #677f8e;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
}

#limit-stop .modal-dialog .modal-content .modal-body p .badge {
  /* EN/Sub-body 12 - Medium */

  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  background: #de2d40;
  border-radius: 2px;
}

#limit-stop .modal-dialog .modal-content .modal-body p .span {
  margin-left: 30%;
}

#limit-stop input {
  background-color: #222b2f;
  border: 1px solid #3c515d;
  border-radius: 2px;
  padding: 0px;
  gap: 0px;
  height: 17px;
  width: 17px;
}

#limit-stop input:checked {
  background-color: #f38220;
}

#limit-stop label {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;

  color: #d6dde1;
}

#limit-stop .top-btn {
  border: 1px solid #28363e;
  width: 100%;
}

#limit-stop .top-btn button {
  color: #677f8e;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  /* identical to box height */
  border: none;
  text-align: center;
  height: 24px;
  top: 0;
  padding: 7px;
  margin-left: 0px;
}

#limit-stop .top-btn .active {
  background: #2c3b44;
  border-radius: 2px;
  color: white;
  margin: 1px;
}

#limit-stop .second-one {
  border: none;
  width: 100%;
}

#limit-stop .second-one button {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  height: 40px;
  /* identical to box height, or 171% */

  text-align: center;

  /* Text + Icon/Content - Sub #1 */
  background: #222b2f;
  color: #9bacb6;
  margin: 0.5px;
}

#limit-stop .second-one .padd {
  width: 200px;
}

#limit-stop .second-one .active {
  background: #38454d;
  border: none;
  color: white;
}

#limit-stop ul li {
  font-family: "Sarabun";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  /* or 171% */

  /* Text + Icon/Content - Sub #1 */

  color: #9bacb6;
}

#limit-stop .border-col {
  border-bottom: 1px solid #28363e;
}

#limit-stop .submit {
  /* Status/Positive */

  background: #40994f;
  border-radius: 4px;
  border: none;
  width: 255px;
  height: 40px;
  padding: 8px;
}

#limit-stop .modal-header {
  border: none;
}
#limit-stop .modal-header h5 {
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  color: #ffffff;
}

#limit-stop .modal-header button {
  background: none;
}

/* order-Confirmation Modal*/
.buy-sell .chart {
  border-bottom: 1px solid #28363e;
}
@media only screen and (min-width: 100px) {
  .bs-table-s {
    height: 200px;
    overflow: auto;
  }
  .bs-table-l {
    height: 250px;
    overflow: auto;
  }
  .buy-sell .chart {
    height: 250px;
  }
}
@media only screen and (min-width: 768px) {
  .buy-sell {
    .search-container {
      .searching-box {
        width: 593px;
        height: 240px;
      }
    }
  }

  .bs-table-s {
    height: 300px;
    overflow: auto;
  }
  .bs-table-l {
    height: 350px;
    overflow: auto;
  }
  .buy-sell .chart {
    height: 226px;
  }
}
@media only screen and (min-width: 1024px) {
  .bs-table-s {
    height: 390px;
    overflow: auto;
  }
  .bs-table-l {
    height: 770px;
    overflow: auto;
  }
  .buy-sell .chart {
    height: 446px;
  }
  .buy-sell table .text-last-price {
    font-size: 18px;
  }
}
@media only screen and (max-width: 1024px) {
  .c-p {
    padding: 0 2px;
  }
  .buy-sell table .text-last-price {
    font-size: 14px;
  }
}
@media only screen and (min-width: 1280px) {
  .bs-table-s {
    margin-right: 24px;
  }
  // .b-order {
  //   padding: 0;
  //   margin: 0 13px;
  // }
  // .pills-tab {
  //   padding: 0;
  //   margin: 0 16px;
  // }
  .bs-table-l {
    margin-left: 13px;
  }
  .bid-offer-container {
    margin-left: 13px;
  }
  .buy-sell .search-container {
    margin-left: 13px !important;
  }
  .buy-sell .trading-scores .live-amount-title {
    margin-left: 16px;
  }
}
@media only screen and (min-width: 1536px) {
}

.iframe-chart {
  // width: 49.9vw;
  height: 45.5vh;
  width: 100%;
}
@media only screen and (max-width: 1536px) {
  .iframe-chart {
    // width: 49.9vw;
    height: 58.5vh;
  }
}
</style>
