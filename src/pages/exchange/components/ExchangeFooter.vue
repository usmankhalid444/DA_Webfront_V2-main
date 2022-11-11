<template>
  <!-- Footer -->
  <div class="container-fluid footer bs-bottom-section">
    <div class="row">
      <div class="col-md-12 p-0">
        <ul class="nav my-4 pills-tab" role="tablist">
          <li class="nav-item" v-for="(tab, index) in footertabs" :key="index">
            <button
              type="button"
              @click="selectedfooter = tab"
              :class="{ active: selectedfooter === tab }"
            >
              {{ tab }}
            </button>
          </li>
          <li class="nav-item">
            <router-link to="/order-history">
              <button type="button">
                <span
                  ><svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.99175 0.666504C4.39175 0.666504 0.666748 4.39984 0.666748 8.99984C0.666748 13.5998 4.39175 17.3332 8.99175 17.3332C13.6001 17.3332 17.3334 13.5998 17.3334 8.99984C17.3334 4.39984 13.6001 0.666504 8.99175 0.666504ZM9.00008 15.6665C5.31675 15.6665 2.33341 12.6832 2.33341 8.99984C2.33341 5.3165 5.31675 2.33317 9.00008 2.33317C12.6834 2.33317 15.6667 5.3165 15.6667 8.99984C15.6667 12.6832 12.6834 15.6665 9.00008 15.6665ZM9.41675 4.83317H8.16675V9.83317L12.5417 12.4582L13.1667 11.4332L9.41675 9.20817V4.83317Z"
                      fill="#677F8E"
                    />
                  </svg> </span
                >Order History
              </button>
            </router-link>
          </li>
        </ul>
      </div>

      <!-- Open Order -->
      <div
        class="tab-pane open-order"
        v-if="selectedfooter === 'Open Orders (5)'"
      >
        <ul class="nav mx-2" id="" role="tablist">
          <li class="nav-item">
            <button
              type="button"
              v-for="(tab, index) in openordertabs"
              :key="index"
              @click="selectedopenorder = tab"
              :class="{ active: selectedopenorder === tab }"
            >
              {{ tab }}
            </button>
          </li>
        </ul>
        <button
          class="bs-cancel-all-btn"
          @click="$bvModal.show('cancel-all-modal')"
        >
          Cancel All
        </button>

        <!-- Limit & Market Order below -->
        <div
          class="fade show tab-pane active"
          v-if="selectedopenorder === 'Limit & Market Orders'"
        >
          <div class="row lm-order-container">
            <div
              class="col-md-12 table-responsive mt-3 p-0"
              style="height: 297px; overflow: auto"
            >
              <table class="table table-borderless text-start p-0">
                <thead>
                  <tr>
                    <th scope="col">
                      <input type="checkbox" class="form-check-input shadow" />
                    </th>
                    <th scope="col">B/S</th>
                    <th scope="col">Coin</th>
                    <th scope="col">Type</th>
                    <th scope="col">Price(THB)</th>
                    <th scope="col">Amount(BTC)</th>
                    <th scope="col">Matched(BTC)</th>
                    <th scope="col">Unmatched(BTC)</th>
                    <th scope="col">Total(THB)</th>
                    <th scope="col">Conditions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <input type="checkbox" class="form-check-input shadow" />
                    </td>
                    <td class="green">B</td>
                    <td>Coin</td>
                    <td>Market</td>
                    <td>898,000.00</td>
                    <td>0.0000029</td>
                    <td>0.0000029</td>
                    <td>0.00</td>
                    <td>1,000.00</td>
                    <td>TP:1,000,000.00(+20%)|SL:789,000.00(-20%)</td>
                    <td>
                      <button
                        @click="$bvModal.show('cancel-modal')"
                        class="btn"
                      >
                        Cancel
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input type="checkbox" class="form-check-input shadow" />
                    </td>
                    <td class="red">S</td>
                    <td>Coin</td>
                    <td>Market</td>
                    <td>898,000.00</td>
                    <td>0.0000029</td>
                    <td>0.0000029</td>
                    <td>0.00</td>
                    <td>1,000.00</td>
                    <td>TP:1,000,000.00(+20%)|SL:789,000.00(-20%)</td>
                    <td>
                      <button
                        @click="$bvModal.show('cancel-modal')"
                        class="btn"
                      >
                        Cancel
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input type="checkbox" class="form-check-input shadow" />
                    </td>
                    <td class="green">B</td>
                    <td>Coin</td>
                    <td>Market</td>
                    <td>898,000.00</td>
                    <td>0.0000029</td>
                    <td>0.0000029</td>
                    <td>0.00</td>
                    <td>1,000.00</td>
                    <td>-</td>
                    <td>
                      <button
                        @click="$bvModal.show('cancel-modal')"
                        class="btn"
                      >
                        Cancel
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input type="checkbox" class="form-check-input shadow" />
                    </td>
                    <td class="red">S</td>
                    <td>Coin</td>
                    <td>Market</td>
                    <td>898,000.00</td>
                    <td>0.0000029</td>
                    <td>0.0000029</td>
                    <td>0.00</td>
                    <td>1,000.00</td>
                    <td>TP:1,000,000.00(+20%)|SL:789,000.00(-20%)</td>
                    <td>
                      <button
                        @click="$bvModal.show('cancel-modal')"
                        class="btn"
                      >
                        Cancel
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input type="checkbox" class="form-check-input shadow" />
                    </td>
                    <td class="green">B</td>
                    <td>Coin</td>
                    <td>Market</td>
                    <td>898,000.00</td>
                    <td>0.0000029</td>
                    <td>0.0000029</td>
                    <td>0.00</td>
                    <td>1,000.00</td>
                    <td>TP:1,000,000.00(+20%)|SL:789,000.00(-20%)</td>
                    <td>
                      <button
                        @click="$bvModal.show('cancel-modal')"
                        class="btn"
                      >
                        Cancel
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <!-- Trailing Stop below -->
        <div
          class="fade show tab-pane active"
          v-if="selectedopenorder === 'Trailing Stop'"
        >
          <div class="row">
            <div
              class="col-md-12 table-responsive mt-3 p-0"
              style="height: 297px; overflow: auto"
            >
              <table class="table table-borderless text-start p-0">
                <thead>
                  <tr>
                    <th scope="col">
                      <input type="checkbox" class="form-check-input shadow" />
                    </th>
                    <th scope="col">B/S</th>
                    <th scope="col">Coin</th>
                    <th scope="col">Start Price(THB)</th>
                    <th scope="col">Trailing cond.</th>
                    <th scope="col">Amount(BTC)</th>
                    <th scope="col">Expired Date</th>
                    <th scope="col">SL Conditions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in 4" :key="index">
                    <td>
                      <input type="checkbox" class="form-check-input shadow" />
                    </td>
                    <td class="green">B</td>
                    <td>BTC</td>
                    <td>1,000,000.00</td>
                    <td>+5,000.00</td>
                    <td>10,000.00</td>
                    <td>1 Month (30/07/22)</td>
                    <td>-</td>
                    <td>
                      <button
                        @click="$bvModal.show('cancel-modal')"
                        class="btn"
                      >
                        Cancel
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <!-- mached tab start -->
      <div class="tab-pane open-order" v-if="selectedfooter === 'Matched'">
        <ul class="nav mx-2" id="" role="tablist">
          <li class="nav-item">
            <button
              type="button"
              v-for="(tab, index) in matchedTabs"
              :key="index"
              @click="selectedMatchedTab = tab"
              :class="{ active: selectedMatchedTab === tab }"
            >
              {{ tab }}
            </button>
          </li>
        </ul>
        <div v-if="selectedMatchedTab === 'Limit Orders (3)'">
          <div class="row">
            <div
              class="col-md-12 table-responsive mt-3 p-0"
              style="height: 297px; overflow: auto"
            >
              <table class="table table-borderless text-start p-0">
                <thead>
                  <tr>
                    <th scope="col">Date</th>
                    <th scope="col">B/S</th>
                    <th scope="col">Coin</th>
                    <th scope="col">Type</th>
                    <th scope="col">Price(THB)</th>
                    <th scope="col">Matched(BTC)</th>
                    <th scope="col">Matched(THB)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in 3" :key="index">
                    <td>25/09/22 <span>19:53</span></td>
                    <td class="green">B</td>
                    <td>BTC</td>
                    <td>Market</td>
                    <td>898,000.00</td>
                    <td>1</td>
                    <td>10,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div v-if="selectedMatchedTab === 'Market Order (2)'">
          <div class="row">
            <div
              class="col-md-12 table-responsive mt-3 p-0"
              style="height: 297px; overflow: auto"
            >
              <table class="table table-borderless text-start p-0">
                <thead>
                  <tr>
                    <th scope="col">Date</th>
                    <th scope="col">B/S</th>
                    <th scope="col">Coin</th>
                    <th scope="col">Type</th>
                    <th scope="col">Price(THB)</th>
                    <th scope="col">Matched(BTC)</th>
                    <th scope="col">Matched(THB)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in 2" :key="index">
                    <td>25/09/22 <span>19:53</span></td>
                    <td class="green">B</td>
                    <td>BTC</td>
                    <td>Market</td>
                    <td>898,000.00</td>
                    <td>1</td>
                    <td>10,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div v-if="selectedMatchedTab === 'Traling Stop (2)'">
          <div class="row">
            <div
              class="col-md-12 table-responsive mt-3 p-0"
              style="height: 297px; overflow: auto"
            >
              <table class="table table-borderless text-start p-0">
                <thead>
                  <tr>
                    <th scope="col">Date</th>
                    <th scope="col">B/S</th>
                    <th scope="col">Coin</th>
                    <th scope="col">Type</th>
                    <th scope="col">Price(THB)</th>
                    <th scope="col">Matched(BTC)</th>
                    <th scope="col">Matched(THB)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in 2" :key="index">
                    <td>25/09/22 <span>19:53</span></td>
                    <td class="red">S</td>
                    <td>ETH</td>
                    <td>Market</td>
                    <td>898,000.00</td>
                    <td>8</td>
                    <td>5,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <!-- mached tab end -->
      <!-- portfolio tab start -->
      <div class="tab-pane open-order" v-if="selectedfooter === 'Portfolio'">
        <div class="row">
          <div
            class="col-md-12 table-responsive p-0"
            style="height: 297px; overflow: auto"
          >
            <table class="table table-borderless text-start p-0">
              <thead>
                <tr>
                  <th scope="col">Coin</th>
                  <th scope="col">Value</th>
                  <th scope="col">Avg. Cost</th>
                  <th scope="col">Last Price</th>
                  <th scope="col">Total</th>
                  <th scope="col">Unrealized (Est.)</th>
                  <th scope="col">Realized (Today)</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in 4" :key="index">
                  <td>ETH<span>Ethereum</span></td>
                  <td>1.00</td>
                  <td>70,723.16</td>
                  <td>39,720.00</td>
                  <td>1,000,000.00</td>
                  <td class="red">-29,775.29(-42.10%)</td>
                  <td>0.00 (0.00%)</td>
                  <td @click="$bvModal.show('portfolio-detail')" class="orange">
                    ดูรายละเอียด
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <!-- portfolio tab end -->
      <!-- order historoy tab start -->
      <div class="tab-pane open-order" v-if="selectedfooter === 'history'">
        <ul class="nav mx-2" id="" role="tablist">
          <li class="nav-item">
            <button
              type="button"
              v-for="(tab, index) in HistoryTabs"
              :key="index"
              @click="selectedHistoryTab = tab"
              :class="{ active: selectedHistoryTab === tab }"
            >
              {{ tab }}
            </button>
          </li>
        </ul>
        <div v-if="selectedMatchedTab === 'Limit Orders'">Limit Orders</div>
        <div v-if="selectedMatchedTab === 'Market Order'">Market Order</div>
        <div v-if="selectedMatchedTab === 'Traling Stop'">Traling Stop</div>
      </div>
      <!-- order history tab end -->
      <PortfolioDetailModal />
      <!-- cancel all modal -->
      <b-modal
        class="bs-cancel-all-modal"
        id="cancel-all-modal"
        :hide-footer="true"
        :hide-header="true"
      >
        <div class="bs-cancel-all-modal">
          <p class="ca-modal-title">
            Cancel
            <span @click="$bvModal.hide('cancel-all-modal')"
              ><svg
                width="14"
                height="15"
                viewBox="0 0 14 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 1.91L12.59 0.5L7 6.09L1.41 0.5L0 1.91L5.59 7.5L0 13.09L1.41 14.5L7 8.91L12.59 14.5L14 13.09L8.41 7.5L14 1.91Z"
                  fill="#677F8E"
                />
              </svg>
            </span>
          </p>
          <p class="content-text">
            ท่านต้องการยกเลิกคำสั่งทั้ง <span>4 รายการ</span> หรือไม่
          </p>
          <div class="col-12 form-group form-check">
            <label class="checkbox-input">
              <input type="checkbox" class="form-check-input" />
              <span>ไม่ต้องแจ้งเตือนอีก</span></label
            >
          </div>
          <div class="row">
            <div class="col-6">
              <button class="orange-btn">ยืนยัน</button>
            </div>
            <div class="col-6">
              <button class="gray-btn">ยกเลิก</button>
            </div>
          </div>
        </div>
      </b-modal>
      <!-- cancel modal -->
      <b-modal
        class="bs-cancel-modal"
        id="cancel-modal"
        :hide-footer="true"
        :hide-header="true"
      >
        <div class="bs-cancel-modal">
          <p class="c-modal-title">
            Cancel
            <span @click="$bvModal.hide('cancel-modal')"
              ><svg
                width="14"
                height="15"
                viewBox="0 0 14 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 1.91L12.59 0.5L7 6.09L1.41 0.5L0 1.91L5.59 7.5L0 13.09L1.41 14.5L7 8.91L12.59 14.5L14 13.09L8.41 7.5L14 1.91Z"
                  fill="#677F8E"
                />
              </svg>
            </span>
          </p>
          <div class="row">
            <div class="col-4 title">
              <p>Coin</p>
              <p>Order</p>
              <p>Price</p>
              <p>Amount</p>
              <p>Total</p>
            </div>
            <div class="col-8 value">
              <p>BTC/THB</p>
              <p><span class="buy-tag">BUY</span>Limit</p>
              <p>739,000.00 THB (Limit)</p>
              <p>10,000 THB</p>
              <p>0.01353 BTC</p>
            </div>
            <div class="col-12 mx-2 form-group form-check">
              <label class="checkbox-input">
                <input type="checkbox" class="form-check-input" />
                <span>ไม่ต้องแจ้งเตือนอีก</span></label
              >
            </div>
          </div>
          <div class="row">
            <div class="col-6">
              <button class="orange-btn">ยืนยัน</button>
            </div>
            <div class="col-6">
              <button class="gray-btn">ยกเลิก</button>
            </div>
          </div>
        </div>
      </b-modal>
    </div>
  </div>
</template>

<script>
import PortfolioDetailModal from "./PortfolioDetailModal.vue";
export default {
  components: { PortfolioDetailModal },
  data() {
    return {
      footertabs: ["Open Orders (5)", "Matched", "Portfolio"],
      selectedfooter: "Open Orders (5)",
      matchedTabs: ["Limit Orders (3)", "Market Order (2)", "Traling Stop (2)"],
      selectedMatchedTab: "Limit Orders (3)",
      openordertabs: ["Limit & Market Orders", "Trailing Stop"],
      selectedopenorder: "Limit & Market Orders",
      historyTabs: [],
      selectedHistoryTabs: [],
    };
  },
};
</script>
<style scoped lang="scss">
/* Footer */

.footer {
  height: 300px;
}

.footer .pills-tab li button {
  /* EN/Sub-body 12 - Regular */

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 14px;
  background: none;
  align-items: center;
  color: #677f8e;
  border: none;
  padding-bottom: 14px;
  span {
    position: relative;
    top: -1px;
    margin-right: 5px;
  }
}

.footer .pills-tab li .active {
  border-bottom: 2px solid #f38220;
  color: #d6dde1;
  width: auto;
  font-style: normal;
}

.footer .open-order li {
  border-radius: 4px;
  border: 1px solid #28363e;
}

.footer .open-order ul li button {
  background: none;
  border: none;
  border-radius: 2px;
  font-size: 14px;
  width: 158px;
  color: #677f8e;
  font-style: normal;
  margin: 1px;
  padding: 8px 0px;
}

.footer .open-order ul li .active {
  color: white;
  background-color: #2c3b44;
  border-radius: 2px;
  font-size: 14px;
  width: 158px;
  padding: 8px 0px;
  font-style: normal;
}

/* Footer Table */
.footer table {
  width: 100%;
}

.footer table th {
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  /* identical to box height */

  /* Text + Icon/Content - Sub#2, Icon */

  color: #677f8e;
}
.footer table tr td span {
  color: #677f8e;
  margin-left: 5px;
}
.footer table tr {
  line-height: 30px;
}
.footer table input {
  background: #222b2f;
  border: 1px solid #3c515d;
  border-radius: 2px;
  height: 17px;
  width: 17px;
}

.footer table input:checked {
  background-color: #f38220;
  border: 1px solid #3c515d;
}

.footer table td {
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #d6dde1;
  border-bottom: 1px solid #28363e;
  vertical-align: middle;
}
.footer table .green {
  color: #40994f;
}

.footer table .red {
  color: #de2d40;
}

.footer table .orange {
  color: #f38220;
  font-weight: 400;
  font-family: "sarabun";
  cursor: pointer;
}
.footer table button {
  color: #d6dde1;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  padding: 8px 16px;
  background: #38454d;
  border-radius: 4px;
  border: none;
  &:hover {
    background-color: #38454db2;
  }
}

.bs-cancel-all-btn {
  color: #d6dde1;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  padding: 8px 16px;
  background: #38454d;
  border-radius: 4px;
  border: none;
  &:hover {
    background-color: #38454db2;
  }
}
.bs-bottom-section {
  border-top: 1px solid #28363e;
}
.bs-cancel-all-modal {
  .ca-modal-title {
    text-align: center;
    font-size: 18px;
    color: white;
    font-weight: 600;
    span {
      float: right;
    }
  }
  .content-text {
    font-family: "sarabun";
    span {
      color: #de2d40;
    }
  }
  .cb-container {
    span {
      margin-left: 5px;
    }
  }
  .orange-btn {
    width: 100%;
    border-radius: 4px;
    color: #0a0d10;
    background-color: #f38220;
    height: 40px;
    &:hover {
      background-color: #f28e38;
    }
  }
  .gray-btn {
    width: 100%;
    border-radius: 4px;
    color: white;
    background-color: #222b2f;
    height: 40px;
    &:hover {
      background-color: #38454d;
    }
  }
}
.bs-cancel-modal {
  .c-modal-title {
    color: white;
    text-align: center;
    font-size: 18px;
    font-weight: 600;
    span {
      float: right;
    }
  }
  .orange-btn {
    width: 100%;
    border-radius: 4px;
    color: #0a0d10;
    background-color: #f38220;
    height: 40px;
    &:hover {
      background-color: #f28e38;
    }
  }
  .gray-btn {
    width: 100%;
    border-radius: 4px;
    color: white;
    background-color: #222b2f;
    height: 40px;
    &:hover {
      background-color: #38454d;
    }
  }
  .title {
    p {
      color: #677f8e;
    }
  }
  .value {
    p {
      span.buy-tag {
        color: #40994f;
        background: rgba(82, 154, 96, 0.16);
        border-radius: 2px;
        font-size: 12px;
        font-weight: 600;
        padding: 2px 4px;
        margin-right: 6px;
      }
    }
  }
  .cb-container {
    span {
      margin-left: 5px;
    }
  }
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
  .bs-cancel-all-btn {
    margin-top: 20px;
  }
  .footer .pills-tab li button {
    margin-right: 6px;
  }
  .lm-order-container {
    width: 100%;
    margin: 0%;
  }
}

@media only screen and (min-width: 768px) {
  .bs-cancel-all-btn {
    float: right;
    margin-top: -20px;
    margin-right: 40px;
  }
  .pills-tab {
    padding: 0 20px;
  }
  .footer .pills-tab li button {
    margin-right: 15px;
  }

  // .tab-pane {
  //   padding: 0 1.5rem;
  // }
}
@media only screen and (min-width: 1024px) {
  .lm-order-container {
    width: 100%;
  }
}
@media (min-width: 1400px) {
  .bs-cancel-all-btn {
    margin-right: 90px;
  }
}
</style>
