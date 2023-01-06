<template>
  <div>
    <div class="sells p-0">
      <div class="justify-content-center">
        <div class="col-md-12">
          <ul
            class="nav nav-ul"
            style="border-top: 1px solid #28363e; margin-right: 3px"
          >
            <li style="margin-left: 40px" class="nav-item">
              <button
                style="margin-right: 24px"
                type="button"
                v-for="(tab, index) in ordertabs"
                :key="index"
                @click="selectedorder = tab"
                :class="{ active: selectedorder === tab }"
              >
                {{ tab }}
              </button>
            </li>
          </ul>
        </div>

        <div class="col-md-12 tab-content">
          <!-- Limit Order -->
          <div
            class="fade show active tab-pane"
            v-show="selectedorder === 'Limit Order'"
          >
            <div>
              <div class="row">
                <div class="col-md-6" style="padding-right: 16px">
                  <div class="form-group bs-lp-input">
                    <input
                      type="number"
                      max="20000"
                      v-model="buying_amount"
                      style="margin-bottom: "
                    />
                    <span class="currency">THB</span>
                    <span class="text">จำนวนเงินที่ต้องการซื้อ</span>
                  </div>
                  <div
                    class="input-group-bottom-text d-flex justify-content-between align-center"
                  >
                    <p>ยอดเงินที่ซื้อได้</p>
                    <p>20,000 THB</p>
                  </div>
                  <!-- timeline start -->
                  <div class="timeline-bar">
                    <b-progress
                      height="2px"
                      :value="limitOrder"
                      style="
                        margin: auto;
                        height: 2px;
                        background-color: #566a76;
                      "
                    >
                    </b-progress>
                    <div class="spots">
                      <div
                        class="spot"
                        style="cursor: pointer"
                        @click="buying_amount = 0"
                      >
                        <span
                          class="dot align-self-baseline"
                          :class="{ active: limitOrder >= 0 }"
                        ></span>
                        <span class="font-s">0%</span>
                      </div>
                      <div
                        class="spot"
                        style="cursor: pointer"
                        @click="buying_amount = 5000"
                      >
                        <span
                          class="dot"
                          :class="{ active: limitOrder >= 25 }"
                        ></span>
                        <span class="font-s">25%</span>
                      </div>
                      <div
                        class="spot"
                        style="cursor: pointer"
                        @click="buying_amount = 10000"
                      >
                        <span
                          class="dot"
                          :class="{ active: limitOrder >= 50 }"
                        ></span>
                        <span class="font-s">50%</span>
                      </div>
                      <div
                        class="spot"
                        style="cursor: pointer"
                        @click="buying_amount = 15000"
                      >
                        <span
                          class="dot"
                          :class="{ active: limitOrder >= 75 }"
                        ></span>
                        <span class="font-s">75%</span>
                      </div>
                      <div
                        class="spot"
                        style="cursor: pointer"
                        @click="buying_amount = 20000"
                      >
                        <span
                          class="dot align-self-end"
                          :class="{ active: limitOrder == 100 }"
                        ></span>
                        <span class="font-s">100%</span>
                      </div>
                    </div>
                  </div>
                  <!-- timeline end -->
                  <div class="form-group bs-lp-input">
                    <input type="number" v-model="selected_buy_score" />
                    <span class="currency">THB</span>
                    <span class="text">ราคาต่อ BTC</span>
                  </div>

                  <div class="form-group bs-lp-input">
                    <input
                      type="text"
                      :value="buying_amount / selected_buy_score || 0"
                      readonly="readonly"
                    />
                    <span class="currency">BTC</span>
                    <span class="text">BTC ราคาต่อ</span>
                  </div>
                  <div class="form-group form-check">
                    <label>
                      <input
                        type="checkbox"
                        class="form-check-input"
                        value="false"
                        v-model="profitLoss"
                      />
                      <p>Take Profit / Stop Loss</p></label
                    >
                  </div>

                  <div class="form-group">
                    <button
                      type="button"
                      class="buy-btn"
                      v-b-modal.limitorder-TPSLB
                      @click="show_TPSLB_order = true"
                    >
                      ซื้อ
                    </button>

                    <p class="text-end p-0 m-0 fees">Fee 0.2%</p>
                  </div>
                </div>
                <div class="col-md-6" style="padding-left: 16px">
                  <div class="form-group bs-lp-input">
                    <input type="number" v-model="selling_amount" />
                    <span class="currency">THB</span>
                    <span class="text">จำนวนที่ต้องการขาย</span>
                  </div>
                  <div
                    class="input-group-bottom-text d-flex justify-content-between align-center"
                  >
                    <p>มูลค่า BTC ที่มี</p>
                    <p>9,86,937.9 THB</p>
                  </div>
                  <!-- timeline start -->
                  <div class="timeline-bar">
                    <b-progress
                      height="2px"
                      :value="selling_limit_order"
                      style="
                        margin: auto;
                        height: 2px;
                        background-color: #566a76;
                      "
                    >
                    </b-progress>
                    <div class="spots">
                      <div
                        class="spot"
                        style="cursor: pointer"
                        @click="selling_amount = 0"
                      >
                        <span
                          class="dot align-self-baseline"
                          :class="{ active: selling_limit_order >= 0 }"
                        ></span>
                        <span class="font-s">0%</span>
                      </div>
                      <div
                        class="spot"
                        style="cursor: pointer"
                        @click="selling_amount = 246734.475"
                      >
                        <span
                          class="dot"
                          :class="{ active: selling_limit_order >= 25 }"
                        ></span>
                        <span class="font-s">25%</span>
                      </div>
                      <div
                        class="spot"
                        style="cursor: pointer"
                        @click="selling_amount = 493468.95"
                      >
                        <span
                          class="dot"
                          :class="{ active: selling_limit_order >= 50 }"
                        ></span>
                        <span class="font-s">50%</span>
                      </div>
                      <div
                        class="spot"
                        style="cursor: pointer"
                        @click="selling_amount = 740203.425"
                      >
                        <span
                          class="dot"
                          :class="{ active: selling_limit_order >= 75 }"
                        ></span>
                        <span class="font-s">75%</span>
                      </div>
                      <div
                        class="spot"
                        style="cursor: pointer"
                        @click="selling_amount = 986937.9"
                      >
                        <span
                          class="dot align-self-end"
                          :class="{ active: selling_limit_order == 100 }"
                        ></span>
                        <span class="font-s">100%</span>
                      </div>
                    </div>
                  </div>
                  <!-- timeline end -->
                  <div class="form-group bs-lp-input">
                    <input type="number" v-model="selected_sell_score" />
                    <span class="currency">BTC</span>
                    <span class="text">ราคาต่อ</span>
                  </div>

                  <div class="form-group bs-lp-input">
                    <input
                      type="text"
                      :value="selling_amount / selected_sell_score || 0"
                      readonly="readonly"
                    />
                    <span class="currency">BTC</span>
                    <span class="text">จำนวน BTC ที่ขาย</span>
                  </div>
                  <div class="form-group form-check">
                    <label>
                      <input
                        type="checkbox"
                        class="form-check-input"
                        data-toggle="modal"
                        data-target="#limit-stop"
                        value="false"
                        v-model="SL"
                      />
                      <p>Stop Loss</p></label
                    >
                  </div>
                  <div class="form-group">
                    <button
                      type="button"
                      class="sell-btn"
                      v-b-modal.limitorder-TPSLB
                      @click="show_TPSLB_order = true"
                    >
                      ขาย
                    </button>
                    <p class="text-end p-0 m-0 fees">Fee 0.2%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Market Order -->
          <div
            class="fade show active tab-pane"
            v-show="selectedorder === 'Market Order'"
          >
            <div class="row">
              <div class="col-md-6">
                <div class="form-group bs-lp-input">
                  <input type="number" v-model="market_buying_value" />
                  <span class="currency">THB</span>
                  <span class="text">จำนวนเงินที่ต้องการซื้อ</span>
                </div>
                <div
                  class="input-group-bottom-text d-flex justify-content-between align-center"
                >
                  <p>ยอดเงินที่ซื้อได้</p>
                  <p>20,000 THB</p>
                </div>
                <!-- timeline start -->
                <div class="timeline-bar">
                  <b-progress
                    height="2px"
                    :value="market_buying_limit_order"
                    style="margin: auto; height: 2px; background-color: #566a76"
                  >
                  </b-progress>
                  <div class="spots">
                    <div
                      class="spot"
                      style="cursor: pointer"
                      @click="market_buying_value = 0"
                    >
                      <span
                        class="dot align-self-baseline"
                        :class="{ active: market_buying_limit_order >= 0 }"
                      ></span>
                      <span class="font-s">0%</span>
                    </div>
                    <div
                      class="spot"
                      style="cursor: pointer"
                      @click="market_buying_value = 5000"
                    >
                      <span
                        class="dot"
                        :class="{ active: market_buying_limit_order >= 25 }"
                      ></span>
                      <span class="font-s">25%</span>
                    </div>
                    <div
                      class="spot"
                      style="cursor: pointer"
                      @click="market_buying_value = 10000"
                    >
                      <span
                        class="dot"
                        :class="{ active: market_buying_limit_order >= 50 }"
                      ></span>
                      <span class="font-s">50%</span>
                    </div>
                    <div
                      class="spot"
                      style="cursor: pointer"
                      @click="market_buying_value = 15000"
                    >
                      <span
                        class="dot"
                        :class="{ active: market_buying_limit_order >= 75 }"
                      ></span>
                      <span class="font-s">75%</span>
                    </div>
                    <div
                      class="spot"
                      style="cursor: pointer"
                      @click="market_buying_value = 20000"
                    >
                      <span
                        class="dot align-self-end"
                        :class="{ active: market_buying_limit_order == 100 }"
                      ></span>
                      <span class="font-s">100%</span>
                    </div>
                  </div>
                </div>
                <!-- timeline end -->
                <div class="form-group bs-lp-input">
                  <input
                    type="text"
                    :value="market_buying_value / market_buying_price || 0"
                    readonly
                  />
                  <span class="currency">THB</span>
                  <span class="text">ราคาต่อ BTC</span>
                </div>

                <div class="form-group form-check">
                  <label>
                    <input
                      type="checkbox"
                      class="form-check-input"
                      v-b-modal.limitorder-TPSL
                    />
                    <p>Take Profit / Stop Loss</p></label
                  >
                </div>

                <div class="form-group">
                  <button
                    v-b-modal.limitorder-TPSLB
                    @click="show_TPSLB_order = true"
                    type="button"
                    class="buy-btn"
                    data-toggle="modal"
                  >
                    ซื้อ
                  </button>
                  <p class="text-end p-0 m-0 fees">Fee 0.2%</p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group bs-lp-input">
                  <input type="number" v-model="market_selling_value" />
                  <span class="currency">THB</span>
                  <span class="text">จำนวนที่ต้องการขาย</span>
                </div>
                <div
                  class="input-group-bottom-text d-flex justify-content-between align-center"
                >
                  <p>มูลค่า BTC ที่มี</p>
                  <p>9,86,937.9 THB</p>
                </div>
                <!-- timeline start -->
                <div class="timeline-bar">
                  <b-progress
                    height="2px"
                    :value="market_selling_limit_order"
                    style="margin: auto; height: 2px; background-color: #566a76"
                  >
                  </b-progress>
                  <div class="spots">
                    <div
                      class="spot"
                      style="cursor: pointer"
                      @click="market_selling_value = 0"
                    >
                      <span
                        class="dot align-self-baseline"
                        :class="{ active: market_selling_limit_order >= 0 }"
                      ></span>
                      <span class="font-s">0%</span>
                    </div>
                    <div
                      class="spot"
                      style="cursor: pointer"
                      @click="market_selling_value = 246734.475"
                    >
                      <span
                        class="dot"
                        :class="{ active: market_selling_limit_order >= 25 }"
                      ></span>
                      <span class="font-s">25%</span>
                    </div>
                    <div
                      class="spot"
                      style="cursor: pointer"
                      @click="market_selling_value = 493468.95"
                    >
                      <span
                        class="dot"
                        :class="{ active: market_selling_limit_order >= 50 }"
                      ></span>
                      <span class="font-s">50%</span>
                    </div>
                    <div
                      class="spot"
                      style="cursor: pointer"
                      @click="market_selling_value = 740203.425"
                    >
                      <span
                        class="dot"
                        :class="{ active: market_selling_limit_order >= 75 }"
                      ></span>
                      <span class="font-s">75%</span>
                    </div>
                    <div
                      class="spot"
                      style="cursor: pointer"
                      @click="market_selling_value = 986937.9"
                    >
                      <span
                        class="dot align-self-end"
                        :class="{ active: market_selling_limit_order == 100 }"
                      ></span>
                      <span class="font-s">100%</span>
                    </div>
                  </div>
                </div>
                <!-- timeline end -->
                <div class="form-group bs-lp-input">
                  <input
                    type="text"
                    :value="market_selling_value / market_selling_price"
                  />
                  <span class="currency">THB</span>
                  <span class="text">ราคาต่อ BTC</span>
                </div>

                <div class="form-group form-check">
                  <label>
                    <input
                      @click="showStopLoss = true"
                      type="checkbox"
                      class="form-check-input"
                      data-toggle="modal"
                      data-target="#limit-stop"
                      v-b-modal.limitorder-stop-loss
                    />
                    <p>Stop Loss</p></label
                  >
                </div>
                <div class="form-group">
                  <button
                    v-b-modal.limitorder-TPSLB
                    @click="show_TPSLB_order = true"
                    type="button"
                    class="sell-btn"
                  >
                    ขาย
                  </button>
                  <p class="text-end p-0 m-0 fees">Fee 0.2%</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Trailing Stop -->
          <div
            class="fade show active tab-pane mb-4"
            v-show="selectedorder === 'Trailing Stop'"
          >
            <div class="row">
              <div class="col-md-6">
                <div class="form-group bs-lp-input">
                  <input type="number" v-model="triling_buying_value" />
                  <span class="currency">THB</span>
                  <span class="text">จำนวนเงินที่ต้องการซื้อ</span>
                </div>
                <div
                  class="input-group-bottom-text d-flex justify-content-between align-center"
                >
                  <p>ยอดเงินที่ซื้อได้</p>
                  <p>20,000 THB</p>
                </div>
                <!-- timeline start -->
                <div class="timeline-bar">
                  <b-progress
                    height="2px"
                    :value="triling_buying_limit_order"
                    style="margin: auto; height: 2px; background-color: #566a76"
                  >
                  </b-progress>
                  <div class="spots">
                    <div
                      class="spot"
                      style="cursor: pointer"
                      @click="triling_buying_value = 0"
                    >
                      <span
                        class="dot align-self-baseline"
                        :class="{ active: triling_buying_limit_order >= 0 }"
                      ></span>
                      <span class="font-s">0%</span>
                    </div>
                    <div
                      class="spot"
                      style="cursor: pointer"
                      @click="triling_buying_value = 5000"
                    >
                      <span
                        class="dot"
                        :class="{ active: triling_buying_limit_order >= 25 }"
                      ></span>
                      <span class="font-s">25%</span>
                    </div>
                    <div
                      class="spot"
                      style="cursor: pointer"
                      @click="triling_buying_value = 10000"
                    >
                      <span
                        class="dot"
                        :class="{ active: triling_buying_limit_order >= 50 }"
                      ></span>
                      <span class="font-s">50%</span>
                    </div>
                    <div
                      class="spot"
                      style="cursor: pointer"
                      @click="triling_buying_value = 15000"
                    >
                      <span
                        class="dot"
                        :class="{ active: triling_buying_limit_order >= 75 }"
                      ></span>
                      <span class="font-s">75%</span>
                    </div>
                    <div
                      class="spot"
                      style="cursor: pointer"
                      @click="triling_buying_value = 20000"
                    >
                      <span
                        class="dot align-self-end"
                        :class="{ active: triling_buying_limit_order == 100 }"
                      ></span>
                      <span class="font-s">100%</span>
                    </div>
                  </div>
                </div>
                <!-- timeline end -->
                <div class="form-group bs-lp-input">
                  <input type="number" value="0" />
                  <span class="currency">THB</span>
                  <span class="text">ตั้งราคาให้ระบบเริ่มทำงาน</span>
                </div>

                <!-- <div class="form-group form-check">
                  <label>
                    <input
                      type="checkbox"
                      class="form-check-input"
                      v-b-modal.limitorder-TPSL
                    />
                    <p class="thai-font"
                      >ระบบทำงานทันทีที่ราคาปัจจุบัน</p
                    ></label
                  >
                </div> -->
                <span class="massage">จะซื้อเมื่อราคา วกกลับจากราคา Low</span>
                <div class="form-group mb-5 bs-lp-input">
                  <input
                    type="text"
                    readonly
                    value="0"
                    style="padding-right: 60px; margin-top: 5px"
                  />
                  <div
                    class="select-container-1"
                    tabindex="0"
                    @click="open_dropdown1 = !open_dropdown1"
                    @blur="open_dropdown1 = false"
                  >
                    <div style="display: inline" class="text">
                      {{ selected_option }}
                    </div>
                    <div
                      style="display: inline"
                      class="icon"
                      :class="open_dropdown1 ? 'rotate-sc-icon' : ''"
                    >
                      <svg
                        width="7"
                        height="4"
                        viewBox="0 0 7 4"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.333984 0.666748L3.66732 4.00008L7.00065 0.666748H0.333984Z"
                          fill="#677F8E"
                        />
                      </svg>
                    </div>
                    <div
                      class="options"
                      :class="open_dropdown1 ? 'show' : 'hidden'"
                    >
                      <ul>
                        <li @click="selected_option = 'THB'">THB</li>
                        <li @click="selected_option = '%'">%</li>
                      </ul>
                    </div>
                  </div>

                  <span class="text"
                    >ตั้งเงื่อนไข Trailing
                    <svg
                      style="cursor: pointer"
                      data-v-aa362e22=""
                      width="12"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        data-v-aa362e22=""
                        d="M9 16H11V14H9V16ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM10 4C7.79 4 6 5.79 6 8H8C8 6.9 8.9 6 10 6C11.1 6 12 6.9 12 8C12 10 9 9.75 9 13H11C11 10.75 14 10.5 14 8C14 5.79 12.21 4 10 4Z"
                        fill="#677F8E"
                      ></path>
                    </svg>
                  </span>
                </div>
                <div class="form-group mb-1.5 bs-lp-input">
                  <input type="text" readonly style="padding-right: 60px" />
                  <div
                    class="select-container-3"
                    tabindex="0"
                    @click="open_dropdown2 = !open_dropdown2"
                    @blur="open_dropdown2 = false"
                  >
                    <div style="display: inline" class="text">
                      {{ selected_option3 }}
                    </div>
                    <div
                      style="display: inline"
                      class="icon"
                      :class="open_dropdown2 ? 'rotate-sc-icon' : ''"
                    >
                      <svg
                        width="7"
                        height="4"
                        viewBox="0 0 7 4"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.333984 0.666748L3.66732 4.00008L7.00065 0.666748H0.333984Z"
                          fill="#677F8E"
                        />
                      </svg>
                    </div>
                    <div
                      class="options"
                      :class="open_dropdown2 ? 'show' : 'hidden'"
                    >
                      <ul>
                        <li @click="selected_option3 = '1 เดือน'">1 เดือน</li>
                        <li @click="selected_option3 = '3 เดือน'">3 เดือน</li>
                      </ul>
                    </div>
                  </div>
                  <span class="text">ตั้งราคาให้ระบบเริ่มทำงาน</span>
                </div>
                <!-- <div class="form-group bs-lp-input">
                  <input type="number" />
                  <span class="currency">THB</span>
                  <span class="text">ตั้งราคาให้ระบบเริ่มทำงาน</span>
                </div> -->
                <div class="form-group">
                  <button
                    style="margin-top: 11px"
                    v-b-modal.limitorder-TPSLB
                    @click="show_TPSLB_order = true"
                    type="button"
                    class="buy-btn"
                    data-toggle="modal"
                  >
                    ซื้อ
                  </button>
                  <p class="text-end p-0 m-0 fees">Fee 0.2%</p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group bs-lp-input">
                  <input type="number" v-model="triling_selling_value" />
                  <span class="currency">THB</span>
                  <span class="text">จำนวนที่ต้องการขาย</span>
                </div>
                <div
                  class="input-group-bottom-text d-flex justify-content-between align-center"
                >
                  <p>มูลค่า BTC ที่มี</p>
                  <p>9,86,937.9 THB</p>
                </div>
                <!-- timeline start -->
                <div class="timeline-bar">
                  <b-progress
                    height="2px"
                    :value="triling_selling_limit_order"
                    style="margin: auto; height: 2px; background-color: #566a76"
                  >
                  </b-progress>
                  <div class="spots">
                    <div
                      class="spot"
                      style="cursor: pointer"
                      @click="triling_selling_value = 0"
                    >
                      <span
                        class="dot align-self-baseline"
                        :class="{ active: triling_selling_limit_order >= 0 }"
                      ></span>
                      <span class="font-s">0%</span>
                    </div>
                    <div
                      class="spot"
                      style="cursor: pointer"
                      @click="triling_selling_value = 246734.475"
                    >
                      <span
                        class="dot"
                        :class="{ active: triling_selling_limit_order >= 25 }"
                      ></span>
                      <span class="font-s">25%</span>
                    </div>
                    <div
                      class="spot"
                      style="cursor: pointer"
                      @click="triling_selling_value = 493468.95"
                    >
                      <span
                        class="dot"
                        :class="{ active: triling_selling_limit_order >= 50 }"
                      ></span>
                      <span class="font-s">50%</span>
                    </div>
                    <div
                      class="spot"
                      style="cursor: pointer"
                      @click="triling_selling_value = 740203.425"
                    >
                      <span
                        class="dot"
                        :class="{ active: triling_selling_limit_order >= 75 }"
                      ></span>
                      <span class="font-s">75%</span>
                    </div>
                    <div
                      class="spot"
                      style="cursor: pointer"
                      @click="triling_selling_value = 986937.9"
                    >
                      <span
                        class="dot align-self-end"
                        :class="{ active: triling_selling_limit_order == 100 }"
                      ></span>
                      <span class="font-s">100%</span>
                    </div>
                  </div>
                </div>
                <!-- timeline end -->
                <div class="form-group bs-lp-input">
                  <input type="number" value="0" />
                  <span class="currency">THB</span>
                  <span class="text">ตั้งราคาให้ระบบเริ่มทำงาน</span>
                </div>

                <!-- <div class="form-group form-check">
                  <label>
                    <input
                      @click="showStopLoss = true"
                      type="checkbox"
                      class="form-check-input"
                      data-toggle="modal"
                      data-target="#limit-stop"
                      v-b-modal.limitorder-stop-loss
                    />
                    <p class="thai-font"
                      >ระบบทำงานทันทีที่ราคาปัจจุบัน</p
                    ></label
                  >
                </div> -->

                <div class="form-group bs-lp-input" style="margin-top: 29px">
                  <input
                    type="text"
                    readonly
                    value="0"
                    style="padding-right: 60px"
                  />
                  <div
                    class="select-container-2"
                    tabindex="0"
                    @click="open_dropdown3 = !open_dropdown3"
                    @blur="open_dropdown3 = false"
                  >
                    <div style="display: inline" class="text">
                      {{ selected_option2 }}
                    </div>
                    <div
                      style="display: inline"
                      class="icon"
                      :class="open_dropdown3 ? 'rotate-sc-icon' : ''"
                    >
                      <svg
                        width="7"
                        height="4"
                        viewBox="0 0 7 4"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.333984 0.666748L3.66732 4.00008L7.00065 0.666748H0.333984Z"
                          fill="#677F8E"
                        />
                      </svg>
                    </div>
                    <div
                      class="options"
                      :class="open_dropdown3 ? 'show' : 'hidden'"
                    >
                      <ul>
                        <li @click="selected_option2 = 'THB'">THB</li>
                        <li @click="selected_option2 = '%'">%</li>
                      </ul>
                    </div>
                  </div>
                  <span class="text">ตั้งเงื่อนไข Trailing</span>
                </div>
                <div class="form-group form-check">
                  <label>
                    <input
                      type="checkbox"
                      class="form-check-input"
                      data-toggle="modal"
                      data-target="#limit-stop"
                      value="false"
                      v-model="SL"
                    />
                    <p>Stop Loss</p></label
                  >
                </div>
                <div class="form-group mb-1.5 bs-lp-input">
                  <input type="text" readonly style="padding-right: 60px" />
                  <div
                    class="select-container-3"
                    tabindex="0"
                    @click="open_dropdown4 = !open_dropdown4"
                    @blur="open_dropdown4 = false"
                  >
                    <div style="display: inline" class="text">
                      {{ selected_option4 }}
                    </div>
                    <div
                      style="display: inline"
                      class="icon"
                      :class="open_dropdown4 ? 'rotate-sc-icon' : ''"
                    >
                      <svg
                        width="7"
                        height="4"
                        viewBox="0 0 7 4"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.333984 0.666748L3.66732 4.00008L7.00065 0.666748H0.333984Z"
                          fill="#677F8E"
                        />
                      </svg>
                    </div>
                    <div
                      class="options"
                      :class="open_dropdown4 ? 'show' : 'hidden'"
                    >
                      <ul>
                        <li @click="selected_option4 = '1 เดือน'">1 เดือน</li>
                        <li @click="selected_option4 = '2 เดือน'">2 เดือน</li>
                      </ul>
                    </div>
                  </div>
                  <span class="text">ตั้งราคาให้ระบบเริ่มทำงาน</span>
                </div>
                <div class="form-group">
                  <button
                    style="margin-top: 11px"
                    v-b-modal.limitorder-TPSLB
                    @click="show_TPSLB_order = true"
                    type="button"
                    class="sell-btn"
                  >
                    ขาย
                  </button>
                  <p class="text-end p-0 m-0 fees">Fee 0.2%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- TP/SL Order-Confirmation modal -->
    <b-modal
      id="limitorder-TPSLB"
      :hide-footer="true"
      centered
      :hide-header="true"
    >
      <div class="row">
        <div class="col-12 modal-th limitorder-TPSLB">
          <h5>Order Confirmation</h5>
          <span
            class="modal-close-button"
            @click="$bvModal.hide('limitorder-TPSLB')"
          >
            <svg
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
        </div>
      </div>

      <div class="row body order-confirm">
        <div class="col-12">
          <div class="row">
            <div class="col-4 m-0 p-0">
              <p style="margin-bottom: 20px">Coin</p>
            </div>
            <div class="col-8"><span>BTC/THB</span></div>
          </div>
          <div class="row">
            <div class="col-4 m-0 p-0">
              <p style="margin-bottom: 10px">Order</p>
            </div>
            <div class="col-8"><span class="buy-badge">BUY</span></div>
          </div>
          <div class="row">
            <div class="col-4 m-0 p-0">
              <p style="margin-bottom: 8px">Price</p>
            </div>
            <div class="col-8"><span>1,025,500.10 THB(Limit)</span></div>
          </div>
          <div class="row">
            <div class="col-4 m-0 p-0">
              <p style="margin-bottom: 8px">Amount</p>
            </div>
            <div class="col-8"><span>10,000 THB</span></div>
          </div>
          <div class="row">
            <div class="col-4 m-0 p-0">
              <p style="margin-bottom: 16px">Total</p>
            </div>
            <div class="col-8"><span>0.01535 BTC</span></div>
          </div>
          <div class="row">
            <div class="col-4 m-0 p-0">
              <p style="margin-bottom: 8px">Order</p>
            </div>
            <div class="col-8"><span class="sell-badge">Sell</span></div>
          </div>
          <div class="row">
            <div class="col-4 m-0 p-0">
              <p style="margin-bottom: 8px">Take Profit</p>
            </div>
            <div class="col-8"><span>886,800.00(+10%)</span></div>
          </div>
          <div class="row">
            <div class="col-4 m-0 p-0">
              <p style="margin-bottom: 8px">Stop Loss</p>
            </div>
            <div class="col-8"><span>665,100.00(-10%)</span></div>
          </div>
          <div class="row">
            <div class="col-4 m-0 p-0">
              <p style="margin-bottom: 16px">Amount</p>
            </div>
            <div class="col-8"><span>10,000.00 THB</span></div>
          </div>
          <div class="form-group form-check">
            <label class="checkbox-input">
              <input type="checkbox" class="form-check-input" />
              <span>ไม่ต้องแจ้งเตือนอีก</span></label
            >
          </div>

          <div class="row buttons-row" style="margin-top: 8px">
            <div class="col-6" style="padding-right: 8px">
              <button
                type="button"
                class="btn yellow-btn text-center"
                @click="
                  $bvModal.show('limitorder-TPSLB2');
                  $bvModal.hide('limitorder-TPSLB');
                "
              >
                ยืนยัน
              </button>
            </div>
            <div class="col-6" style="padding-left: 8px">
              <button
                type="button"
                class="btn grey-btn text-center"
                @click="$bvModal.hide('limitorder-TPSLB')"
              >
                ยกเลิก
              </button>
            </div>
          </div>
        </div>
      </div>
    </b-modal>

    <!-- TP/SL Order-Confirmation modal2 -->
    <b-modal
      id="limitorder-TPSLB2"
      :hide-footer="true"
      centered
      :hide-header="true"
    >
      <div class="row">
        <div class="col-12 modal-th limitorder-TPSLB">
          <h5>Order Confirmation</h5>
          <span
            class="modal-close-button"
            @click="$bvModal.hide('limitorder-TPSLB2')"
          >
            <svg
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
        </div>
      </div>

      <div class="row body order-confirm">
        <div class="col-12">
          <div class="row">
            <div class="col-4 m-0 p-0">
              <p style="margin-bottom: 20px">Coin</p>
            </div>
            <div class="col-8"><span>BTC/THB</span></div>
          </div>
          <div class="row">
            <div class="col-4 m-0 p-0">
              <p style="margin-bottom: 10px">Order</p>
            </div>
            <div class="col-8"><span class="buy-badge">BUY</span></div>
          </div>
          <div class="row">
            <div class="col-4 m-0 p-0">
              <p style="margin-bottom: 8px">Price</p>
            </div>
            <div class="col-8"><span>1,025,500.10 THB(Limit)</span></div>
          </div>
          <div class="row">
            <div class="col-4 m-0 p-0">
              <p style="margin-bottom: 8px">Amount</p>
            </div>
            <div class="col-8"><span>10,000 THB</span></div>
          </div>
          <div class="row">
            <div class="col-4 m-0 p-0">
              <p style="margin-bottom: 16px">Total</p>
            </div>
            <div class="col-8"><span>0.01535 BTC</span></div>
          </div>
          <div class="row">
            <div class="col-4 m-0 p-0">
              <p style="margin-bottom: 8px">Order</p>
            </div>
            <div class="col-8"><span class="sell-badge">Sell</span></div>
          </div>
          <div class="row">
            <div class="col-4 m-0 p-0">
              <p style="margin-bottom: 8px">Take Profit</p>
            </div>
            <div class="col-8"><span>886,800.00(+10%)</span></div>
          </div>
          <div class="row">
            <div class="col-4 m-0 p-0">
              <p style="margin-bottom: 8px">Stop Loss</p>
            </div>
            <div class="col-8"><span>665,100.00(-10%)</span></div>
          </div>
          <div class="row">
            <div class="col-4 m-0 p-0">
              <p style="margin-bottom: 16px">Amount</p>
            </div>
            <div class="col-8"><span>10,000.00 THB</span></div>
          </div>
          <div class="row">
            <div class="col-4 m-0 p-0">
              <p style="margin-bottom: 16px">PIN</p>
            </div>
            <div class="col-8">
              <span>
                <input type="password" class="pin" />
              </span>
            </div>
          </div>
          <!-- <div class="form-group form-check">
        <label class="checkbox-input">
          <input type="checkbox" class="form-check-input" />
          <span>ไม่ต้องแจ้งเตือนอีก</span></label
        >
      </div> -->

          <div class="row buttons-row" style="margin-top: 24px">
            <div class="col-6" style="padding-right: 8px">
              <button type="button" class="btn yellow-btn text-center">
                ยืนยัน
              </button>
            </div>
            <div class="col-6" style="padding-left: 8px">
              <button
                type="button"
                class="btn grey-btn text-center"
                @click="$bvModal.hide('limitorder-TPSLB2')"
              >
                ยกเลิก
              </button>
            </div>
          </div>
        </div>
      </div>
    </b-modal>
    <!--TP/SL Order-Confirmation modal2 end -->

    <!-- TP/SL modal -->
    <b-modal id="limitorder-TPSL" :hide-footer="true" :hide-header="true">
      <div class="row">
        <div class="col-12 modal-th">
          <h5>Take Profit / Stop Loss</h5>
          <span
            class="modal-close-button"
            @click="$bvModal.hide('limitorder-TPSL')"
          >
            <svg
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
        </div>
      </div>

      <div class="row body thai-font">
        <div class="col-md-12" style="padding: 0 16px">
          <p style="margin-bottom: 16px">
            ตั้งค่าคำสั่งขายอัตโนมัติเพื่อ Take Profit หรือ Stop Loss
            เมื่อถึงเงื่อนไขที่เรากำหนด
          </p>
          <p
            class="d-inline"
            style="
              width: 107px;
              height: 24px;
              margin-right: 16px;
              color: #f38220;
              line-height: 24px;
            "
          >
            อ่านคู่มือการใช้งาน
          </p>
          <p
            class="d-inline"
            style="
              width: 24;
              height: 24px;
              margin-right: 16px;
              line-height: 24px;
            "
          >
            หรือ
          </p>
          <p
            class="d-inline"
            style="
              width: 99px;
              height: 24px;
              margin-right: 16px;
              color: #f38220;
              line-height: 24px;
            "
          >
            ดูวิดีโอสอนใช้งาน
          </p>

          <div
            class="form-group form-check"
            style="margin-top: 24px !important"
          >
            <label class="checkbox-input m-0">
              <input type="checkbox" class="form-check-input" />
              <span style="line-height: 24px">ไม่ต้องแจ้งเตือนอีก</span></label
            >
          </div>

          <button
            @click="
              $bvModal.hide('limitorder-TPSL'),
                $bvModal.show('limitorder-STPSL')
            "
            type="button"
            class="tpsl-btn text-center"
          >
            เริ่มต้นใช้งาน
          </button>
        </div>
      </div>
    </b-modal>
    <!-- Second TP/SL modal -->
    <SecondTpslModal />
    <!-- stop loss modal -->
    <b-modal id="limitorder-stop-loss" :hide-footer="true" :hide-header="true">
      <div class="row">
        <div class="col-12 modal-th">
          <h5>Stop Loss</h5>
          <span
            class="modal-close-button"
            style="position: absolute; right: 30px"
            @click="$bvModal.hide('limitorder-stop-loss')"
          >
            <svg
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
        </div>
      </div>

      <div class="row body thai-font">
        <div class="col-md-12">
          <p style="margin-bottom: 18.5px">
            ตั้งค่าคำสั่งขายอัตโนมัติเพื่อ Take Profit หรือ Stop Loss
            เมื่อถึงเงื่อนไขที่เรากำหนด
          </p>
          <p
            class="d-inline"
            style="
              width: 107px;
              height: 24px;
              margin-right: 16px;
              color: #f38220;
              line-height: 19px;
            "
          >
            อ่านคู่มือการใช้งาน
          </p>
          <p
            class="d-inline"
            style="
              width: 24;
              height: 24px;
              margin-right: 16px;
              line-height: 19px;
            "
          >
            หรือ
          </p>
          <p
            class="d-inline"
            style="
              width: 99px;
              height: 24px;
              margin-right: 16px;
              color: #f38220;
              line-height: 19px;
            "
          >
            ดูวิดีโอสอนใช้งาน
          </p>
          <div class="form-group form-check mt-3">
            <label class="checkbox-input">
              <input type="checkbox" class="form-check-input" />
              <span style="line-height: 24px">ไม่ต้องแจ้งเตือนอีก</span></label
            >
          </div>

          <button
            @click="
              $bvModal.hide('limitorder-stop-loss');
              $bvModal.show('limitorder-SSL');
            "
            type="button"
            class="tpsl-btn text-center"
          >
            เริ่มต้นใช้งาน
          </button>
        </div>
      </div>
    </b-modal>
    <!-- Second SL modal -->
    <SecondSLModal />
  </div>
</template>

<script>
import SecondTpslModal from "./SecontTpslModal.vue";
import SecondSLModal from "./SecondSLModal.vue";
export default {
  components: { SecondTpslModal, SecondSLModal },
  props: ["selected_buy_score", "selected_sell_score"],
  data() {
    return {
      limitOrder: 0,
      buying_amount_value: 20000,
      SL: false,
      profitLoss: false,
      buying_amount: 0,
      selling_amount: 0,
      total_selling_amount: 986937.9,
      selling_limit_order: 0,
      buying_btc: 0,
      selling_btc: 0,
      market_buying_price: 896458.67,
      market_selling_price: 896458.67,
      market_buying_value: 0,
      total_market_buying_value: 20000,
      market_buying_limit_order: 0,
      market_selling_value: 0,
      total_market_selling_value: 986937.9,
      market_selling_limit_order: 0,
      triling_buying_value: 0,
      total_triling_buying_value: 20000,
      triling_buying_limit_order: 0,
      triling_selling_value: 0,
      total_triling_selling_value: 986937.9,
      triling_selling_limit_order: 0,

      lot_a: "0%",
      lot_b: "0%",
      mot_a: "0%",
      mot_b: "0%",
      tst_a: "0%",
      tst_b: "0%",
      ordertabs: ["Limit Order", "Market Order", "Trailing Stop"],
      selectedorder: "Limit Order",
      open_dropdown1: false,
      open_dropdown2: false,
      open_dropdown3: false,
      open_dropdown4: false,
      selected_option: "THB",
      selected_option2: "THB",
      selected_option3: "1 เดือน",
      selected_option4: "1 เดือน",
    };
  },
  watch: {
    buying_amount(newValue, oldValue) {
      if (this.buying_amount > this.buying_amount_value) {
        this.buying_amount = oldValue;
      }
      let p = (this.buying_amount / this.buying_amount_value) * 100;
      this.limitOrder = p;
    },
    selling_amount(newValue, oldValue) {
      if (this.selling_amount > this.total_selling_amount) {
        this.selling_amount = oldValue;
      }
      let p = (this.selling_amount / this.total_selling_amount) * 100;
      this.selling_limit_order = p;
    },
    market_buying_value(newValue, oldValue) {
      if (this.market_buying_value > this.total_market_buying_value) {
        this.market_buying_value = oldValue;
      }
      let p = (this.market_buying_value / this.total_market_buying_value) * 100;
      this.market_buying_limit_order = p;
    },
    market_selling_value(newValue, oldValue) {
      if (this.market_selling_value > this.total_market_selling_value) {
        this.market_selling_value = oldValue;
      }
      let p =
        (this.market_selling_value / this.total_market_selling_value) * 100;
      this.market_selling_limit_order = p;
    },
    triling_buying_value(newValue, oldValue) {
      if (this.triling_buying_value > this.total_triling_buying_value) {
        this.triling_buying_value = oldValue;
      }
      let p =
        (this.triling_buying_value / this.total_triling_buying_value) * 100;
      this.triling_buying_limit_order = p;
    },
    triling_selling_value(newValue, oldValue) {
      if (this.triling_selling_value > this.total_triling_selling_value) {
        this.triling_selling_value = oldValue;
      }
      let p =
        (this.triling_selling_value / this.total_triling_selling_value) * 100;
      this.triling_selling_limit_order = p;
    },
    profitLoss() {
      if (this.profitLoss == true) {
        this.$bvModal.show("limitorder-TPSL");
      }
    },
    SL() {
      if (this.SL == true) {
        this.$bvModal.show("limitorder-stop-loss");
      }
    },
  },
};
</script>
<style>
#limitorder-TPSLB___BV_modal_body_,
#limitorder-TPSLB2___BV_modal_body_,
#limitorder-stop-loss___BV_modal_body_ {
  padding: 0px 16px 20px 16px !important;
}
#limitorder-TPSLB2___BV_modal_content_ {
  width: 360px;
  margin: 0 auto;
}
.timeline-bar {
  width: 100%;
  margin: auto !important;
  padding: 18px 5px 42px !important;
  position: relative;
}
.progress-bar {
  background-color: #f38220 !important;
}
</style>
<style scoped lang="scss">
.pin {
  padding: 8px;
  width: 160px;
  height: 36px;
  border-radius: 4px;
  background: #38454d;
  color: #ffffff;
}
.massage {
  width: 224px;
  height: 24px;
  padding: 4px 8px;
  background: #d6dde1;
  border-radius: 4px;
  color: #0a0d10;
  font-family: "Sarabun";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
}
.dropdown-trailing {
  padding-left: 8px;
  border-left: 1px solid #28363e;
}
.dropdown-trailing svg {
  width: 6px;
  margin-top: -4px;
}
.order-confirm .col-4 {
  padding-left: 15px !important;
}
.order-confirm span {
  line-height: 24px;
}
.spots {
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 99%;
  margin-top: -5px;
}
.spots .spot {
  font-size: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #9bacb6;
}
.spots .spot .active {
  background: #f38220 !important;
  border-color: #203864 !important;
}
.spots .spot .dot {
  background: #1c262b;
  border: 1px solid #566a76;
  height: 8px;
  width: 8px;
  border-radius: 50%;
  display: block;
  margin-bottom: 4px;
}
.font-s {
  font-family: "Roboto Flex";
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
}
.modal-th {
  padding: 24px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    position: absolute;
    right: 30px;
  }
}
.modal-th > h5 {
  /* margin-right: 42px; */
  margin-bottom: 0px;
}

.limitorder-TPSLB > h5 {
  margin-right: 52px !important;
}
</style>
<style lang="scss">
.modal-content {
  // width: 360px;
  background-color: #141b1f !important;
}

.modal-body {
  background-color: #141b1f !important;
  border-radius: 8px;
  font-style: normal;
  padding: 16px 16px 20px 16px !important;
  // margin-bottom: 15px;
}
.header {
  width: 360px;
  height: 75px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
}
.checkbox-input {
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
    margin-left: 8px;
    line-height: 24px;
    // margin-top: 3px;
  }
}
.limitorder-STPSL {
  width: 513px;
  height: 702px;
  font-family: "Roboto Flex";
}
.modal-body {
  font-family: "Roboto Flex";
  .modal-close-button {
    cursor: pointer;
  }
}
.modal-body h5 {
  font-family: "Noto Sans Thai";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  color: #d6dde1;
  line-height: 27px;
  display: inline-block;
}
.modal-th {
  text-align: center;
  span {
    float: right;
  }
}
.modal-body p {
  color: #677f8e;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
}

.modal-body span {
  color: #d6dde1;
}

.modal-body .buy-badge {
  background: #529a6029;
  color: #40994f;
  padding: 4px 8px;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px !important;
  text-align: center;
}

.modal-body .sell-badge {
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  padding: 4px 8px;
  background: #eb475129;
  color: #eb4751;
  border-radius: 2px;
  line-height: 18px !important;
  text-align: center;
  text-transform: uppercase;
}

.modal-body label {
  font-family: "Sarabun";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #d6dde1;
}
/*
	.modal-body input {
	    background-color: #222B2F;
	    border: 1px solid #3C515D;
	    border-radius: 2px;
	    padding: 0px;
	    gap: 0px;
	    height: 17px;
	    width: 17px;
	}*/

.checkboxes {
  margin-top: 0px !important;
  vertical-align: middle;
}

.sells .form-check input[type="checkbox"] {
  border: none !important;
  box-shadow: none !important;
}
.form-check-input:checked[type="checkbox"] {
  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='111827' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e") !important;
}
.modal-body .checkbox:checked {
  background-color: #f38220;
  outline: none !important;
}

.modal-body .yellow-btn {
  // padding: 8px 16px;
  gap: 4px;
  background: #f38220;
  color: #0a0d10;
  border-radius: 4px;
  font-family: "Sarabun";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  width: 100%;
  height: 40px;
}

.modal-body .grey-btn {
  // padding: 8px 16px;
  gap: 4px;
  background: #222b2f;
  color: #ffffff;
  border-radius: 4px;
  font-family: "Sarabun";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  width: 100%;
  height: 40px;
}

.modal-footer {
  display: none !important;
}

/* Buy/Sells sells */
.buy-sell .sells .sells-ul ul {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  height: 38px;
  padding: 0px;
  gap: 24px;
  margin-top: 10px;
}

.buy-sell .sells li button {
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  background: none;
  align-items: center;
  color: #677f8e;
  border: none;
  padding: 20px 0px 10px 0px;
  // margin-left: 24px;
}

.buy-sell .sells li button:hover {
  color: #d6dde1;
  cursor: pointer;
}

.buy-sell .sells li .active {
  border-bottom: 2px solid #f38220;
  width: auto;
  color: #d6dde1;
}
.bs-lp-input {
  position: relative;
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    display: none;
  }
  span.currency {
    font-family: "Roboto Flex";
    position: absolute;
    right: 10px;
    top: 55%;
    transform: translateY(-90%);
    color: #9bacb6;
    pointer-events: none;
  }
  span.text {
    position: absolute;
    left: 10px;
    color: #9bacb6;
    top: 55%;
    transform: translateY(-90%);
    pointer-events: none;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    font-family: "Sarabun";
  }
}
.input-group-bottom-text {
  font-size: 14px;
  font-weight: 400;
  color: #677f8e;
  margin-top: -8px;
  // margin-bottom: 8px;
  p {
    margin-bottom: 0 !important;
  }
}
.sells .tab-content {
  margin-top: 20px;
  margin-bottom: 20px;
}
.sells input {
  width: 100%;
  text-align: right;
  border: none;
  outline: none !important ;
  padding: 8px 45px 8px 142px;
  margin-bottom: 15px;
  height: 40px;
  font-style: normal;
  font-size: 14px;
  line-height: 24px;
  background: #222b2f;
  border-radius: 4px;
  color: #566a76;
  &::placeholder {
    color: #9bacb6;
  }
}

.sells .buy-btn {
  width: 100%;
  display: block;
  background-color: rgba(64, 153, 79, 1);
  color: #ffffff;
  border: none;
  margin-bottom: 15px;
  height: 40px;
  border-radius: 4px;
  font-family: "Noto Sans Thai";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  &:hover {
    background-color: var(--green-positiveHover);
  }
}

.tpsl-btn {
  width: 100%;
  height: 40px;
  border-radius: 4px;
  background: #f38220;
  color: #0a0d10;
  font-family: "sarabun";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  font-weight: 500;
  margin-top: 16px;
  // margin-bottom: 16px;
  &:hover {
    background-color: #f28e38;
  }
}

.sells .sell-btn {
  width: 100%;
  display: block;
  background-color: #de2d40;
  color: #ffffff;
  border: none;
  margin-bottom: 15px;
  height: 40px;
  font-family: "Noto Sans Thai";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  border-radius: 4px;
  &:hover {
    background-color: var(--red-negativeHover);
  }
}

.sells p {
  color: #677f8e;
  font-family: "Sarabun";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 24px;
}
.sells .fees {
  font-family: "Roboto Flex";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #677f8e;
}

.sells label p {
  color: #d6dde1;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  margin-left: 3px;
  font-family: "Roboto Flex";
  input {
    margin-top: -0.5px;
  }
  span {
    margin-left: 3px;
  }
}

.sells .form-check input {
  background: #222b2f;
  border: 1px solid #3c515d;
  border-radius: 2px;
  padding: 0px;
  gap: 0px;
  height: 17px;
  width: 17px;
}

.sells .form-check input:checked {
  background-color: #f38220;
}

.timeline-bar {
  // margin-bottom: 10px;
  padding: 25px 0;
  margin: 0 -44px;
  padding-left: 18px;

  .timeline {
    position: relative;
    left: -30px;
    margin-top: -12px;
  }

  .timeline li {
    list-style: none;
    float: left;
    width: 20%;
    position: relative;
    text-align: center;
    font-size: 10px;
    padding-top: 10px;
    color: #9bacb6;
  }
  .timeline li span {
    display: inline-block;
    margin-top: 4px;
  }

  .timeline li:before {
    content: "";
    width: 8px;
    height: 8px;
    border: 1px solid #566a76;
    border-radius: 50%;
    display: block;
    text-align: center;
    line-height: 50px;
    margin: 0px auto 10px auto;
    background: #1c262b;
    color: #000;
    transition: all ease-in-out 0.3s;
    cursor: pointer;
    position: absolute;
    z-index: 2;
    top: 0px;
    left: 40%;
  }

  .timeline li:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: #566a76;
    top: 3px;
    left: -50%;
    z-index: 1;
    transition: all ease-in-out 0.3s;
  }

  .timeline li:first-child:after {
    content: none;
  }
  .timeline li.active {
    color: #203864;
  }

  .timeline li.active span {
    color: #9bacb6;
    padding: 0 3px;
    border-radius: 5px;
  }
  .timeline li.active:before {
    background: #f38220;
    color: #203864;
    border-color: #203864;
    height: 11px;
    width: 11px;
    margin-top: -1px;
    margin-left: 1px;
  }
}
.stop-loss-detail-modal {
  // margin: 20px 0;
  .modal-title {
    color: white;
    text-align: left;
    font-size: 18px;
    font-weight: 600;
    span {
      margin-left: 5px;
    }
  }
  .ts-title {
    color: #677f8e;
  }
  .ts-value {
    color: #d6dde1;
  }
  .w-title {
    color: #d6dde1;
    line-height: 24px;
    font-family: "Roboto Flex";
  }
  .buy-tag {
    color: #40994f;
    background: rgba(82, 154, 96, 0.16);
    border-radius: 2px;
    font-size: 12px;
    font-weight: 600;
    line-height: 18px;
    padding: 2px 4px;
    margin-right: 6px;
  }
  .sell-tag {
    color: #eb4751;
    background: rgba(235, 71, 81, 0.16);
    border-radius: 2px;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    padding: 2px 4px;
    margin-right: 6px;
  }
  .gs {
    color: #677f8e;
  }
  .tabs-container {
    border: 1px solid #28363e;
    border-radius: 4px;
    text-align: center;
    padding: 1px;
  }
  .tab {
    font-size: 12px;
    padding: 4px 8px;
    border-radius: 2px;
    cursor: pointer;
  }
  .tab.active {
    background-color: #2c3b44;
    cursor: default;
  }
  .input-row {
    padding: 0;
    input {
      margin-top: 10px;
      width: 100%;
      border-radius: 4px;
      background-color: #222b2f;
      padding: 10px 8px;
      color: white;
      font-family: "Sarabun";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
    }
    input::placeholder {
      color: #566a76;
    }
    input:focus {
      outline: none !important;
      // border: ;
    }
  }
  .sl-ul {
    margin: 10px 0;
    padding: 0 20px;
    color: #9bacb6;
    list-style-type: disc;
    line-height: 24px;
  }
  button.stpsl-submit {
    background-color: #40994f;
    border-radius: 4px;
    font-family: "Noto Sans Thai";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    margin: 16px auto;
    width: 255px;
    height: 40px;
  }
  button.stpsl-submit:hover {
    background-color: var(--green-positiveHover);
  }
  button.ssl-submit {
    background-color: #de2d40;
    border-radius: 4px;
    font-family: "Noto Sans Thai";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    margin: 0 auto;
    width: 255px;
    height: 40px;
  }
  button.ssl-submit:hover {
    background-color: var(--red-negativeHover);
  }
  .sa-tabs {
    .sa-tab {
      background-color: #222b2f;
      margin-left: 1px;
      padding: 8px;
      cursor: pointer;
      line-height: 24px;
    }
    .sa-tab.active,
    .sa-tab-first.active,
    .sa-tab-last.active {
      background-color: #38454d;
      cursor: default;
    }
    .sa-tab-first {
      border-radius: 4px 0px 0px 4px;
      background-color: #222b2f;
      margin-left: 1px;
      padding: 8px;
      cursor: pointer;
      line-height: 24px;
    }
    .sa-tab-last {
      border-radius: 0px 4px 4px 0px;
      background-color: #222b2f;
      margin-left: 1px;
      padding: 8px;
      cursor: pointer;
      line-height: 24px;
    }
  }
  .top-row {
    padding-bottom: 5px;
    margin-bottom: 20px;
    border-bottom: 5px solid #0a0d10;
  }
}
@media only screen and (min-width: 1024px) {
  .sells .tab-content {
    padding: 0 38px;
  }
}
@media only screen and (max-width: 1024px) {
  .sells .tab-content {
    padding: 0 10px;
  }
}
@media only screen and (max-width: 848px) {
  .sells .tab-content {
    padding: 0 40px;
  }
}
.hidden {
  display: none;
}
.show {
  display: block;
}
.sells {
  .select-container-1 {
    color: #d6dde1;
    border-radius: 4px;
    height: 35px;
    width: 70px;
    margin: auto 0;
    display: flex;
    top: 8px;
    align-items: center;
    right: -8px;
    position: absolute;
    cursor: pointer;
    .icon {
      pointer-events: none;
      position: absolute;
      right: 15px;
    }
    .rotate-sc-icon {
      transform: rotateX(180deg);
    }
    .text {
      padding-left: 15px;
    }
    .options {
      position: absolute;
      bottom: -82px;
      width: 90%;
      background-color: #222b2f;
      border-radius: 4px;
      z-index: 100;
      ul {
        margin: 0;
        padding: 0;
        li {
          display: flex;
          align-items: center;
          height: 40px;
          padding: 0 15px;
          border-radius: 4px;
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
  .select-container-2 {
    color: #d6dde1;
    border-radius: 4px;
    height: 35px;
    width: 70px;
    margin: auto 0;
    display: flex;
    top: 4px;
    align-items: center;
    right: -8px;
    position: absolute;
    cursor: pointer;
    .icon {
      pointer-events: none;
      position: absolute;
      right: 15px;
    }
    .rotate-sc-icon {
      transform: rotateX(180deg);
    }
    .text {
      padding-left: 15px;
    }
    .options {
      position: absolute;
      bottom: -82px;
      width: 90%;
      background-color: #222b2f;
      border-radius: 4px;
      z-index: 100;
      ul {
        margin: 0;
        padding: 0;
        li {
          display: flex;
          align-items: center;
          height: 40px;
          padding: 0 15px;
          border-radius: 4px;
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
  .select-container-3 {
    color: #d6dde1;
    height: 35px;
    width: 70px;
    margin: auto 0;
    display: flex;
    top: 4px;
    align-items: center;
    right: 7px;
    position: absolute;
    cursor: pointer;
    .icon {
      pointer-events: none;
      position: absolute;
      right: 1px;
    }
    .rotate-sc-icon {
      transform: rotateX(180deg);
    }
    .text {
      padding-left: 15px;
    }
    .options {
      position: absolute;
      bottom: -82px;
      width: 130%;
      background-color: #222b2f;
      border-radius: 4px;
      z-index: 100;
      ul {
        margin: 0;
        padding: 0;
        li {
          display: flex;
          align-items: center;
          height: 40px;
          padding: 0 15px;
          border-radius: 4px;
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
}
</style>
