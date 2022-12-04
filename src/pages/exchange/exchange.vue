<template>
  <div class="container-fluid buy-sell mb-3">
    <div class="row p-0">
      <div class="col-12 col-lg-8 col-xl-9">
        <div class="row">
          <!-- here -->

          <div class="col-12 top-search-row">
            <div class="row">
              <div class="col-11 col-md-4 col-lg-5 col-xl-3">
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
                      <span class="btc-text">BTC /</span>
                    </span>
                    <input
                      v-model="coinSearchText"
                      @focus="showSearchBox = true"
                      @focusout="showSearchBox = false"
                      class="ml-4 coins-search-input text-uppercase"
                      :class="`${coinSearchText.length == 0 ? 'ml-4' : 'ml-1'}`"
                      type="text"
                      placeholder="THB"
                      maxlength="4"
                    />
                  </div>

                  <div v-if="showSearchBox" class="searching-box">
                    <p class="thai-font search-box-title">ค้นหาล่าสุด</p>
                    <div class="grid">
                      <div class="row mt-3 sb-row">
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
                      <div class="row mt-3 sb-row">
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
                      <div class="row mt-3 sb-row">
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
                      <div class="row mt-3 sb-row">
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
                class="col-12 col-md-8 col-lg-7 col-xl-9 my-auto trading-scores"
              >
                <span class="live-amount-title">896,485.67</span>
                <span class="live-amount-value">(-4.26%)</span>
                <span class="title">24h High:</span>
                <span class="value">986,574.00</span>
                <span class="title">24h Low:</span>
                <span class="value">785,959.84</span>
                <span class="title">24h Volume (BTC):</span>
                <span class="value">4,532.98</span>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-6 col-xl-4 bs-left-table">
            <div
              class="bid-offer-container d-flex justify-content-between align-center"
            >
              <div class="coinSelect d-flex justify-content-start align-center">
                <select >
                  <option value="">Bid / Offer</option>
                  <option value="">Bid</option>
                  <option value="">Offer</option>
                  <option value="">All Coins</option>
                  <option value="">Fav</option>
                  <option value="">Coin Ticker</option>
                </select>
                <div
                  ><svg
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
                </div>
              </div>
              <div class="ratioSelect d-flex justify-content-start align-center">
                <select >
                  <option value="">0.1</option>
                  <option value="">0.01</option>
                  <option value="">0.001</option>
                  <option value="">0.0001</option>
                  <option value="">0.00001</option>
                </select>
                <div
                  ><svg
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
               </div>

              </div>
            </div>
            <!-- buy / sell live scores table start -->
            <div class="bs-table-l">
              <table class="table table-borderless">
                <thead>
                  <tr>
                    <th style="width: 50%">Price (THB)</th>
                    <th>Vol (BTC)</th>
                    <th>Total (THB)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(item, index) in sell_live_scores"
                    :key="'b' + index"
                  >
                    <td
                      class="red"
                      @click="selected_sell_score = item.price_thb"
                    >
                      {{ item.price_thb }}
                    </td>
                    <td>{{ item.vol_btc }}</td>
                    <td class="text-center">{{ item.total_thb }}</td>
                  </tr>
                  <tr>
                    <td class="red-big">896,485.67</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr
                    v-for="(item, index) in buy_live_scores"
                    :key="'c' + index"
                  >
                    <td
                      @click="selected_buy_score = item.price_thb"
                      class="green"
                    >
                      {{ item.price_thb }}
                    </td>
                    <td>{{ item.vol_btc }}</td>
                    <td class="text-center">{{ item.total_thb }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!-- buy / sell live scores table end -->
          </div>

          <div class="col-12 col-lg-6 col-xl-8 p-0">
            <div class="chart p-0">
              <!-- <h1 class="text-white">Chart Here</h1> -->
              <iframe
                src="https://bitenium.com/StockChartXRTC/chart.aspx"
                width="715"
                height="440"
                title="Iframe Example"
              ></iframe>
            </div>
            <!-- End Chart Area -->

            <ExchangeOrder
              :selected_sell_score="selected_sell_score"
              :selected_buy_score="selected_buy_score"
            />
          </div>
        </div>
      </div>

      <div class="col-12 col-lg-4 col-xl-3 bs-right-table">
        <div class="all-coins-container">
          <select>
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
          </span>
        </div>

        <div class="bs-table-s fav-table">
          <table class="table table-borderless">
            <thead>
              <tr class="sticky-top fixed">
                <th style="width: 50%">Coin</th>
                <th>Price (THB)</th>
                <th>
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
              <tr v-for="(item, index) in 18" :key="'d' + index">
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
                  BTC / THB
                </td>
                <td>698,948.88</td>
                <td class="green">+99.98%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p class="btc-ticker">BTC Ticker</p>
        <div class="bs-table-s">
          <table class="table table-borderless p-0">
            <thead>
              <tr class="sticky-top">
                <th style="width: 45%">Time</th>
                <th>Price (THB)</th>
                <th>Volume (BTC)</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in 18" :key="'a' + index">
                <td>14:59:20</td>
                <td>586,908.00</td>
                <td class="text-center">0.00083</td>
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
export default {
  components: {
    ExchangeFooter,
    ExchangeOrder,
  },
  data() {
    return {
      coinSearchText: "",
      defaultPath: "btc_usdt",
      showSearchBox: false,
      selected_sell_score: null,
      selected_buy_score: null,
      sell_live_scores: [
        { price_thb: 896485.67, vol_btc: 0.000345, total_thb: 1823.67 },
        { price_thb: 796585.67, vol_btc: 0.000345, total_thb: 1823.67 },
        { price_thb: 896485.67, vol_btc: 0.000345, total_thb: 1823.67 },
        { price_thb: 193485.67, vol_btc: 0.000345, total_thb: 1823.67 },
        { price_thb: 896485.67, vol_btc: 0.000345, total_thb: 1823.67 },
        { price_thb: 496485.67, vol_btc: 0.000345, total_thb: 1823.67 },
        { price_thb: 896485.67, vol_btc: 0.000345, total_thb: 1823.67 },
        { price_thb: 596485.67, vol_btc: 0.000345, total_thb: 1823.67 },
        { price_thb: 896485.67, vol_btc: 0.000345, total_thb: 1823.67 },
        { price_thb: 796485.67, vol_btc: 0.000345, total_thb: 1823.67 },
        { price_thb: 896485.67, vol_btc: 0.000345, total_thb: 1823.67 },
        { price_thb: 296485.67, vol_btc: 0.000345, total_thb: 1823.67 },
        { price_thb: 896485.67, vol_btc: 0.000345, total_thb: 1823.67 },
        { price_thb: 396485.67, vol_btc: 0.000345, total_thb: 1823.67 },
        { price_thb: 496485.67, vol_btc: 0.000345, total_thb: 1823.67 },
      ],
      buy_live_scores: [
        { price_thb: 896485.67, vol_btc: 0.000345, total_thb: 1823.67 },
        { price_thb: 696485.67, vol_btc: 0.000345, total_thb: 1823.67 },
        { price_thb: 496485.67, vol_btc: 0.000345, total_thb: 1823.67 },
        { price_thb: 896485.67, vol_btc: 0.000345, total_thb: 1823.67 },
        { price_thb: 596485.67, vol_btc: 0.000345, total_thb: 1823.67 },
        { price_thb: 896485.67, vol_btc: 0.000345, total_thb: 1823.67 },
        { price_thb: 996485.67, vol_btc: 0.000345, total_thb: 1823.67 },
        { price_thb: 496485.67, vol_btc: 0.000345, total_thb: 1823.67 },
        { price_thb: 396485.67, vol_btc: 0.000345, total_thb: 1823.67 },
        { price_thb: 896485.67, vol_btc: 0.000345, total_thb: 1823.67 },
        { price_thb: 296485.67, vol_btc: 0.000345, total_thb: 1823.67 },
        { price_thb: 896485.67, vol_btc: 0.000345, total_thb: 1823.67 },
        { price_thb: 196485.67, vol_btc: 0.000345, total_thb: 1823.67 },
        { price_thb: 896485.67, vol_btc: 0.000345, total_thb: 1823.67 },
        { price_thb: 896485.67, vol_btc: 0.000345, total_thb: 1823.67 },
      ],
    };
  },
};
</script>
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
        padding: 10px 0;
        &:hover {
          background-color: #28363e;
        }
      }
      .sb-amount {
        color: #d6dde1;
        font-size: 16px;
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
      font-weight: 600;
      padding-left: 90px;
      padding-top: 6.5px;
      padding-bottom: 6.5px;
      padding-right: 60px;
      background-color: #222b2f;
    }
    .coins-search-input::placeholder {
      color: #9bacb6;
    }
    .search-svg {
      position: absolute;
      right: 0;
      margin-right: 38px;
      margin-top: 10px;
      pointer-events: none;
    }
    .coin-image {
      position: absolute;
      font-size: 18px;
      left: 10px;
      top: 4.5px;
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
      }
    }
  }
  .trading-scores {
    .live-amount-title {
      color: #de2d40;
      font-size: 18px;
    }
    .live-amount-value {
      color: #de2d40;
      font-size: 14px;
      margin-left: 8px;
      margin-right: 16px;
    }
    .title {
      color: #9bacb6;
      font-size: 14px;
      margin-right: 8px;
    }
    .value {
      font-size: 14px;
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
    top: 6px;
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
    top: 6px;
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

.buy-sell table th {
  /* EN/Sub-body 12 - Regular */
  font-style: normal;
  font-weight: 400;
  font-size: 12px;

  /* identical to box height */

  color: #677f8e;
}

.buy-sell table td {
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  /* Status/Negative */
  color: #d6dde1;
  svg {
    margin-right: 5px;
  }
}

.buy-sell table .red {
  color: #de2d40;
  cursor: pointer;
  display: inline-block;
}

.buy-sell table .red-big {
  color: #de2d40;
  font-weight: 600;
  font-size: 18px;
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
  width: 80%;
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
        width: 630px;
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
}
@media only screen and (min-width: 1536px) {
}
</style>
