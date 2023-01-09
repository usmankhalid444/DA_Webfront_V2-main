<template>
  <!-- Footer -->
  <div>
    <div class="container-fluid footer bs-bottom-section">
      <div class="row">
        <div class="col-md-12 p-0">
          <ul class="nav my-4 pills-tab" role="tablist">
            <li
              class="nav-item"
              v-for="(tab, index) in footertabs"
              :key="index"
            >
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
          class="tab-pane open-order b-order"
          v-if="selectedfooter === 'Open Orders (5)'"
        >
          <ul class="nav mr-2 mb-3" id="" role="tablist">
            <li class="nav-item" style="width: 334px">
              <button
                style="width: 158px"
                type="button"
                v-for="(tab, index) in openordertabs"
                :key="index"
                @click="selectedopenorder = tab"
                :class="{ active: selectedopenorder == tab }"
              >
                {{ tab }}
              </button>
            </li>
          </ul>
          <button
            class="bs-cancel-all-btn"
            v-if="selectedopenorder == 'Limit  Orders (6)'"
            @click="$bvModal.show('cancel-all-modal')"
          >
            Cancel All
          </button>
          <!-- Limit & traling stop below -->
          <div
            class="fade show active"
            v-if="selectedopenorder == 'Limit  Orders (6)'"
          >
            <div class="row lm-order-container">
              <div
                class="col-md-12 table-responsive p-0"
                style="height: 297px; overflow: auto"
              >
                <table
                  class="table table-borderless text-start p-0 trailingTable"
                >
                  <thead>
                    <tr>
                      <th scope="col">
                        <input
                          @change="selectAllOLM"
                          v-model="selectAll"
                          type="checkbox"
                          class="form-check-input shadow"
                        />
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
                        <input
                          type="checkbox"
                          v-model="open_limit_market[0]"
                          class="form-check-input shadow"
                        />
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
                        <input
                          v-model="open_limit_market[1]"
                          type="checkbox"
                          class="form-check-input shadow"
                        />
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
                        <input
                          v-model="open_limit_market[2]"
                          type="checkbox"
                          class="form-check-input shadow"
                        />
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
                        <input
                          v-model="open_limit_market[3]"
                          type="checkbox"
                          class="form-check-input shadow"
                        />
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
                        <input
                          v-model="open_limit_market[4]"
                          type="checkbox"
                          class="form-check-input shadow"
                        />
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
              <button
                class="cancel-this-orders"
                @click="$bvModal.show('cancel-all-modal')"
              >
                Cancel 4 Orders
              </button>
            </div>
          </div>
          <!-- Trailing Stop below -->
          <div
            class="fade show active"
            v-if="selectedopenorder == 'Trailing Stop (3)'"
          >
            <div class="">
              <div
                class="col-md-12 table-responsive mt-3 p-0 trailingTable"
                style="height: 297px; overflow: auto"
              >
                <table class="table table-borderless text-start p-0">
                  <thead>
                    <tr>
                      <th scope="col">
                        <input
                          type="checkbox"
                          class="form-check-input shadow"
                        />
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
                    <tr v-for="(item, index) in 5" :key="index">
                      <td>
                        <input
                          type="checkbox"
                          class="form-check-input shadow"
                        />
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
              <button
                class="cancel-this-orders"
                @click="$bvModal.show('cancel-all-modal')"
              >
                Cancel 4 Orders
              </button>
            </div>
          </div>
        </div>
        <!-- mached tab start -->
        <div
          class="tab-pane open-order b-order"
          v-if="selectedfooter === 'Matched'"
        >
          <ul class="nav mr-2" id="" role="tablist">
            <li class="nav-item" style="width: 377px">
              <button
                style="width: 115px"
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
            <div class="row m-0">
              <div
                class="col-md-12 table-responsive mt-3 p-0"
                style="height: 297px; overflow: auto"
              >
                <table class="table table-borderless text-start p-0 matchTable">
                  <thead>
                    <tr>
                      <th scope="col">Date</th>
                      <th scope="col">B/S</th>
                      <th scope="col">Coin</th>
                      <th scope="col">Type</th>
                      <th scope="col" style="width: 30px">Price(THB)</th>
                      <th scope="col" class="text-right">Matched(BTC)</th>
                      <th scope="col" class="text-right">Matched(THB)</th>
                      <th colspan="3" style="width: 20%"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in 3" :key="index">
                      <td style="padding-left: 0">
                        25/09/22 <span>19:53</span>
                      </td>
                      <td class="green">B</td>
                      <td>BTC</td>
                      <td>Market</td>
                      <td>898,000.00</td>
                      <td class="text-right">1</td>
                      <td class="text-right">10,000</td>
                      <td colspan="3"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div v-if="selectedMatchedTab === 'Market Order (2)'">
            <div class="row m-0">
              <div
                class="col-md-12 table-responsive mt-3 p-0"
                style="height: 297px; overflow: auto"
              >
                <table class="table table-borderless text-start p-0 matchTable">
                  <thead>
                    <tr>
                      <th scope="col">Date</th>
                      <th scope="col">B/S</th>
                      <th scope="col">Coin</th>
                      <th scope="col">Type</th>
                      <th scope="col" style="width: 30px">Price(THB)</th>
                      <th scope="col" class="text-right">Matched(BTC)</th>
                      <th scope="col" class="text-right">Matched(THB)</th>
                      <th colspan="3" style="width: 20%"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in 2" :key="index">
                      <td>25/09/22 <span>19:53</span></td>
                      <td class="green">B</td>
                      <td>BTC</td>
                      <td>Market</td>
                      <td>898,000.00</td>
                      <td class="text-right">1</td>
                      <td class="text-right">10,000</td>
                      <td colspan="3"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div v-if="selectedMatchedTab === 'Traling Stop (2)'">
            <div class="row m-0">
              <div
                class="col-md-12 table-responsive mt-3 p-0"
                style="height: 297px; overflow: auto"
              >
                <table class="table table-borderless text-start p-0 matchTable">
                  <thead>
                    <tr>
                      <th scope="col">Date</th>
                      <th scope="col">B/S</th>
                      <th scope="col">Coin</th>
                      <th scope="col">Type</th>
                      <th scope="col" style="width: 30px">Price(THB)</th>
                      <th scope="col" class="text-right">Matched(BTC)</th>
                      <th scope="col" class="text-right">Matched(THB)</th>
                      <th colspan="3" style="width: 20%"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in 2" :key="index">
                      <td>25/09/22 <span>19:53</span></td>
                      <td class="red">S</td>
                      <td>ETH</td>
                      <td>Market</td>
                      <td>898,000.00</td>
                      <td class="text-right">8</td>
                      <td class="text-right">5,000</td>
                      <td colspan="3"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <!-- mached tab end -->
        <!-- portfolio tab start -->
        <div
          class="tab-pane open-order b-order"
          v-if="selectedfooter === 'Portfolio'"
        >
          <div class="row m-0">
            <div
              class="col-md-12 table-responsive p-0"
              style="height: 297px; overflow: visible"
            >
              <table
                class="table table-borderless text-start p-0 portfolioTable"
                style="overflow: visible"
              >
                <thead>
                  <tr>
                    <th scope="col">Coin</th>
                    <th scope="col">
                      <div class="h-info-c">
                        Value
                        <span class="icon">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9 16H11V14H9V16ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM10 4C7.79 4 6 5.79 6 8H8C8 6.9 8.9 6 10 6C11.1 6 12 6.9 12 8C12 10 9 9.75 9 13H11C11 10.75 14 10.5 14 8C14 5.79 12.21 4 10 4Z"
                              fill="#677F8E"
                            />
                          </svg>
                        </span>
                        <span class="hover-info">
                          Actual คือ จำนวนเหรียญที่มีในพอร์ต
                        </span>
                      </div>
                    </th>
                    <th scope="col" class="text-center">Avg. Cost</th>
                    <th scope="col">Last Price</th>
                    <th scope="col" class="text-center">Total</th>
                    <th scope="col" class="text-center">Unrealized (Est.)</th>
                    <th scope="col">Realized (Today)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in 4" :key="index">
                    <td>ETH<span>Ethereum</span></td>
                    <td>1.00</td>
                    <td class="text-center">70,723.16</td>
                    <td>39,720.00</td>
                    <td class="text-center">1,000,000.00</td>
                    <td class="red text-center">-29,775.29(-42.10%)</td>
                    <td>0.00 (0.00%)</td>
                    <td
                      @click="$bvModal.show('portfolio-detail')"
                      class="orange"
                    >
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
        <div
          class="tab-pane open-order b-order"
          v-if="selectedfooter === 'history'"
        >
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
              <span>Cancel</span>
              <span
                style="cursor: pointer"
                @click="$bvModal.hide('cancel-all-modal')"
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
            <div class="cencel-body">
              <p class="content-text">
                ท่านต้องการยกเลิกคำสั่งทั้ง <span>4 รายการ</span> หรือไม่
              </p>
              <div class="col-12 form-group form-check">
                <label class="checkbox-input" style="margin-bottom: 16px">
                  <input type="checkbox" class="form-check-input" />
                  <span>ไม่ต้องแจ้งเตือนอีก</span></label
                >
              </div>
              <div class="cencel-btn">
                <div>
                  <button class="orange-btn">ยืนยัน</button>
                </div>
                <div>
                  <button class="gray-btn">ยกเลิก</button>
                </div>
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
              <span>Cancel</span>
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
            <div class="cencel_model_main">
              <div class="row m-0">
                <div class="col-4 title p-0">
                  <p>Coin</p>
                  <p>Order</p>
                  <p>Price</p>
                  <p>Amount</p>
                  <p>Total</p>
                </div>
                <div class="col-8 value p-0">
                  <p>BTC/THB</p>
                  <p><span class="buy-tag">BUY</span>Limit</p>
                  <p>739,000.00 THB (Limit)</p>
                  <p>10,000 THB</p>
                  <p>0.01353 BTC</p>
                </div>
                <div
                  class="col-12 form-group form-check p-0"
                  style="margin-top: 12px; margin-bottom: 20px"
                >
                  <label class="checkbox-input m-0">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      style="margin-left: 0px"
                    />
                    <span>ไม่ต้องแจ้งเตือนอีก</span></label
                  >
                </div>
                <div class="cencel-btn p-0">
                  <div>
                    <button
                      @click="
                        $bvModal.show('cancel-second-modal'),
                          $bvModal.hide('cancel-modal')
                      "
                      class="orange-btn"
                    >
                      ยืนยัน
                    </button>
                  </div>
                  <div>
                    <button class="gray-btn">ยกเลิก</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </b-modal>
        <!-- cancel second modal -->
        <b-modal
          class="bs-cancel-modal"
          id="cancel-second-modal"
          :hide-footer="true"
          :hide-header="true"
        >
          <div class="bs-cancel-modal">
            <p class="c-modal-title">
              <span>Cancel</span>
              <span @click="$bvModal.hide('cancel-second-modal')"
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
            <div class="cencel_model_main" style="padding: 0 !important">
              <div class="row m-0">
                <div class="col-4 title p-0">
                  <p>Coin</p>
                  <p>Order</p>
                  <p>Price</p>
                  <p>Amount</p>
                  <p>Total</p>
                </div>
                <div class="col-8 value p-0">
                  <p>BTC/THB</p>
                  <p><span class="buy-tag">BUY</span>Limit</p>
                  <p>739,000.00 THB (Limit)</p>
                  <p>10,000 THB</p>
                  <p>0.01353 BTC</p>
                </div>
                <div class="col-4 title p-0">
                  <p style="color: #9bacb6">Pin</p>
                </div>
                <div class="col-8 value p-0">
                  <input class="password" value="*****" type="password" />
                </div>

                <div class="cencel-btn p-0" style="margin-top: 24px">
                  <div>
                    <button class="orange-btn">ยืนยัน</button>
                  </div>
                  <div>
                    <button class="gray-btn">ยกเลิก</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </b-modal>
      </div>
    </div>
    <div class="bs-bb">
      <span class="red conection"
        ><svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.916626 9.66683V6.16683H2.66663V9.66683H0.916626ZM4.41663 9.66683V3.25016H6.16663V9.66683H4.41663ZM7.91663 9.66683V0.333496H9.66663V9.66683H7.91663Z"
            fill="#677F8E"
          />
        </svg>
        Unstable Connection</span
      >
      <span>BTC/THB</span>
      <span>20,972</span>
      <span class="red">(-4.46%)</span>
      <span class="gray">|</span>
      <span>ETH/THB</span>
      <span>10,089</span>
      <span class="red">(-6.46%)</span>
      <span class="gray">|</span>
      <span>SOL/THB</span>
      <span>38.98</span>
      <span class="green">(+4.46%)</span>
      <div>
        <span class="orange"
          ><svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.50456 9.66781C1.18372 9.66781 0.909168 9.55367 0.680891 9.32539C0.452224 9.09672 0.337891 8.82197 0.337891 8.50114V6.75114H1.50456V8.50114H8.50456V6.75114H9.67122V8.50114C9.67122 8.82197 9.55709 9.09672 9.32881 9.32539C9.10014 9.55367 8.82539 9.66781 8.50456 9.66781H1.50456ZM5.00456 7.33447L2.08789 4.41781L2.90456 3.57197L4.42122 5.08864V0.334473H5.58789V5.08864L7.10456 3.57197L7.92122 4.41781L5.00456 7.33447Z"
              fill="#677F8E"
            />
          </svg>
          Download
        </span>
        <span style="padding-right: 12px" class="orange"
          ><svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.13325 4.5335C3.26547 4.5335 3.37639 4.4887 3.46599 4.3991C3.55527 4.30981 3.59992 4.19905 3.59992 4.06683C3.59992 3.93461 3.55527 3.8237 3.46599 3.7341C3.37639 3.64481 3.26547 3.60016 3.13325 3.60016C3.00103 3.60016 2.89012 3.64481 2.80052 3.7341C2.71123 3.8237 2.66659 3.93461 2.66659 4.06683C2.66659 4.19905 2.71123 4.30981 2.80052 4.3991C2.89012 4.4887 3.00103 4.5335 3.13325 4.5335ZM4.99992 4.5335C5.13214 4.5335 5.24305 4.4887 5.33265 4.3991C5.42194 4.30981 5.46659 4.19905 5.46659 4.06683C5.46659 3.93461 5.42194 3.8237 5.33265 3.7341C5.24305 3.64481 5.13214 3.60016 4.99992 3.60016C4.8677 3.60016 4.75694 3.64481 4.66765 3.7341C4.57805 3.8237 4.53325 3.93461 4.53325 4.06683C4.53325 4.19905 4.57805 4.30981 4.66765 4.3991C4.75694 4.4887 4.8677 4.5335 4.99992 4.5335ZM6.86659 4.5335C6.99881 4.5335 7.10956 4.4887 7.19885 4.3991C7.28845 4.30981 7.33325 4.19905 7.33325 4.06683C7.33325 3.93461 7.28845 3.8237 7.19885 3.7341C7.10956 3.64481 6.99881 3.60016 6.86659 3.60016C6.73436 3.60016 6.62361 3.64481 6.53432 3.7341C6.44472 3.8237 6.39992 3.93461 6.39992 4.06683C6.39992 4.19905 6.44472 4.30981 6.53432 4.3991C6.62361 4.4887 6.73436 4.5335 6.86659 4.5335ZM0.333252 9.66683V1.26683C0.333252 1.01016 0.424719 0.790363 0.607652 0.607429C0.790274 0.424807 1.00992 0.333496 1.26659 0.333496H8.73325C8.98992 0.333496 9.20972 0.424807 9.39265 0.607429C9.57527 0.790363 9.66659 1.01016 9.66659 1.26683V6.86683C9.66659 7.1235 9.57527 7.3433 9.39265 7.52623C9.20972 7.70885 8.98992 7.80016 8.73325 7.80016H2.19992L0.333252 9.66683ZM1.26659 7.41516L1.81492 6.86683H8.73325V1.26683H1.26659V7.41516Z"
              fill="#677F8E"
            />
          </svg>
          Live Support
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import PortfolioDetailModal from "./PortfolioDetailModal.vue";
export default {
  components: { PortfolioDetailModal },
  data() {
    return {
      selectAll: false,
      open_limit_market: [false, false, false, false, false],
      footertabs: ["Open Orders (5)", "Matched", "Portfolio"],
      selectedfooter: "Open Orders (5)",
      matchedTabs: ["Limit Orders (3)", "Market Order (2)", "Traling Stop (2)"],
      selectedMatchedTab: "Limit Orders (3)",
      openordertabs: ["Limit  Orders (6)", "Trailing Stop (3)"],
      selectedopenorder: "Limit  Orders (6)",
      historyTabs: [],
      selectedHistoryTabs: [],
    };
  },
  methods: {
    selectAllOLM() {
      if (this.selectAll) {
        this.open_limit_market = [true, true, true, true, true];
      } else if (!this.selectAll) {
        this.open_limit_market = [false, false, false, false, false];
      }
      console.log(this.selectAll);
    },
  },
};
</script>
<style>
#cancel-all-modal___BV_modal_body_,
#cancel-modal___BV_modal_body_ {
  padding: 0px !important;
}
</style>
<style scoped>
.text-right {
  text-align: right;
}
.portfolioTable thead tr {
  border-bottom: 1px solid #28363e;
}
.matchTable tr th:nth-child(1),
.portfolioTable tr th:nth-child(1) {
  padding-left: 0px !important;
}
.matchTable tr td:nth-child(1),
.matchTable tr td {
  padding-top: 12px;
  padding-bottom: 12px;
}
.portfolioTable tr td:nth-child(1) {
  padding-left: 0px !important;
}
.portfolioTable tr td {
  padding-top: 12px;
  padding-bottom: 12px;
}
.cencel-body {
  padding: 20px 16px 16px;
}
.cencel-btn {
  display: flex;
}
.cencel-btn button {
  width: 155px !important;
  height: 36px !important;
  margin-right: 16px;
}
.c-modal-title {
  margin: 0px;
  padding: 24px 0px;
}
.cencel_model_main {
  padding: 0px 0px 24px 16px !important;
}
.cencel_model_main p {
  margin-bottom: 8px !important;
}
</style>
<style scoped lang="scss">
// custome
.pills-tab {
  margin-top: 29px !important;
  margin-bottom: 26 !important;
}

.trailingTable {
  margin-left: -6px;
}
.portfolioTable tr th svg {
  height: 12px;
  width: 12px;
  margin-top: -2px;
}

/* Footer */

.footer {
  height: 300px;
}

.footer .pills-tab li button {
  /* EN/Sub-body 12 - Regular */

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
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
  padding-bottom: 12px;
  line-height: 19px;
}

.footer .pills-tab li button:hover {
  color: #d6dde1;
  cursor: pointer;
}

.footer .open-order li {
  border-radius: 4px;
  border: 1px solid #28363e;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
}
.footer .open-order ul li button:last-child {
  margin-right: 0px !important;
}
.footer .open-order ul li button {
  background: none;
  border: none;
  border-radius: 2px;
  height: 32px;
  margin-right: 13px !important;
  color: #677f8e;
  margin: 1px;
  padding: 3px 0px;
}

.footer .open-order ul li .active {
  color: white;
  background-color: #2c3b44;
  border-radius: 2px;
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
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #d6dde1;
  border-bottom: 1px solid #28363e;
  vertical-align: middle;
}
.footer table .green {
  color: #40994f;
  display: table-cell !important;
}

.footer table .red {
  color: #de2d40;
  display: table-cell !important;
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
  line-height: 24px;
  width: 76px;
  height: 36px;
  padding: 0 16px;
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
  width: 96px;
  height: 36px;
  font-size: 14px;
  line-height: 24px;
  padding: 0 16px;
  background: #38454d;
  border-radius: 4px;
  border: none;
  &:hover {
    background-color: #38454db2;
  }
}
.cancel-this-orders {
  background-color: #de2d40;
  color: white;
  border-radius: 4px;
  width: 133px;
  height: 36px;
  margin: 15px 0;
  &:hover {
    background-color: #e04152;
  }
}
.bs-bottom-section {
  border-top: 1px solid #28363e;
}
.bs-cancel-all-modal {
  .ca-modal-title {
    font-family: "Noto Sans Thai";
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    text-align: center;
    color: white;
    margin: 0px;
    padding: 24px 0px;
    span:nth-child(2) {
      position: absolute;
      margin-left: 108px;
    }
  }
  .content-text {
    font-family: "sarabun";
    margin-bottom: 8px !important;
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
    line-height: 24px;
    font-weight: 500;
    font-family: "Sarabun";
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
    line-height: 24px;
    font-family: "Sarabun";
    &:hover {
      background-color: #38454d;
    }
  }
}
.bs-cancel-modal {
  .c-modal-title {
    color: white;
    text-align: center;
    font-family: "Noto Sans Thai";
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    span:nth-child(2) {
      position: absolute;
      margin-left: 111px;
      cursor: pointer;
    }
  }
  .orange-btn {
    width: 100%;
    border-radius: 4px;
    color: #0a0d10;
    background-color: #f38220;
    height: 40px;
    font-family: "Sarabun";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
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
    font-family: "Sarabun";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
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
    .password {
      width: 148px;
      height: 36px;
      background: #38454d;
      padding: 0 8px;
      border-radius: 4px;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      color: #ffffff;
    }
    p {
      color: #d6dde1;
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
  .footer .pills-tab li {
    position: relative;
    button {
      margin-right: 6px;
    }
  }
  .lm-order-container {
    width: 100%;
    margin: 0%;
    padding-bottom: 50px;
  }
}
.bs-bb {
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #0a0d10;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 23px;
  padding-right: 3px;
  margin-top: 30px;
  .conection {
    margin-right: 16px;
  }
  span {
    margin-right: 8px;
    svg {
      margin-right: 10px;
    }
  }
  span.red {
    color: #de2d40;
  }
  span.gray {
    color: #28363e;
  }
  span.green {
    color: #40994f;
  }
  span.orange {
    color: #f38220;
    cursor: pointer;
  }
  div {
    display: inline;
    float: right;
  }
}

@media only screen and (min-width: 768px) {
  .bs-cancel-all-btn {
    // float: right;
    position: absolute;
    right: 76px;
    margin-top: -35px;
    // margin-right: 40px;
  }
  .pills-tab {
    padding: 0 24px;
  }
  .bs-bb {
    display: none;
  }
  .footer .pills-tab li button {
    margin-right: 26px;
  }

  .tab-pane {
    padding: 0 24px;
  }
}
@media only screen and (min-width: 1024px) {
  .bs-bb {
    display: block;
  }

  .lm-order-container {
    width: 100%;
  }
}
@media only screen and (max-width: 1024px) {
  .pills-tab {
    padding: 0 11px;
  }
}
@media (min-width: 1400px) {
  .bs-cancel-all-btn {
    margin-right: 50px;
  }
}
.h-info-c {
  position: relative;
  display: inline;
  &:hover .hover-info {
    display: flex;
  }
  span.hover-info {
    position: absolute;
    width: 240px;
    height: 32px;
    background-color: #d6dde1;
    border-radius: 4px;
    top: -35px;
    left: -140px;
    color: #0a0d10;
    display: none;
    justify-items: center;
    align-items: center;
    padding-left: 10px;
    font-family: "Sarabun";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
  }
}
</style>
