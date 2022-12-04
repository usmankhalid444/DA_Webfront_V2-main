<template>
  <div>
    <div class="sells p-0">
      <div class="justify-content-center">
        <div class="col-md-12">
          <ul class="nav nav-ul">
            <li style="margin-left:40px" class="nav-item">
              <button
              style="margin-right:24px"
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
          <div style="padding-bottom: 20px;">
            <div class="row">
              <div class="col-md-6" style="padding-right: 16px">
                <div class="form-group bs-lp-input">
                  <input type="number" v-model="buying_amount" style="margin-bottom: "/>
                  <span class="currency">THB</span>
                  <span class="text">จำนวนเงินที่ต้องการซื้อ</span>
                </div>
                <div class="input-group-bottom-text d-flex justify-content-between align-center">
                  <p>ยอดเงินที่ซื้อได้</p>
                  <p>20,000 THB</p>
                </div>
                <!-- timeline start -->
                <div class="timeline-bar">
                  <ul class="timeline">
                    <li
                      @click="lot_a = '0%'"
                      :class="lot_a === '0%' ? 'active' : ''"
                    >
                      <span>0%</span>
                    </li>
                    <li
                      @click="lot_a = '25%'"
                      :class="lot_a === '25%' ? 'active' : ''"
                    >
                      <span>25%</span>
                    </li>
                    <li
                      @click="lot_a = '50%'"
                      :class="lot_a === '50%' ? 'active' : ''"
                    >
                      <span>50%</span>
                    </li>
                    <li
                      @click="lot_a = '75%'"
                      :class="lot_a === '75%' ? 'active' : ''"
                    >
                      <span>75%</span>
                    </li>
                    <li
                      @click="lot_a = '100%'"
                      :class="lot_a === '100%' ? 'active' : ''"
                    >
                      <span>100%</span>
                    </li>
                  </ul>
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
                    :value="buying_amount / selected_buy_score"
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
                      v-b-modal.limitorder-TPSL
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
                    Buy
                  </button>

                  <p class="text-end p-0 m-0">Fee 0.20%</p>
                </div>
              </div>
              <div class="col-md-6" style="padding-left: 16px">
                <div class="form-group bs-lp-input">
                  <input type="number" v-model="selling_amount" />
                  <span class="currency">THB</span>
                  <span class="text">จำนวนที่ต้องการขาย</span>
                </div>
                  <div class="input-group-bottom-text d-flex justify-content-between align-center">
                  <p>มูลค่า BTC ที่มี</p>
                  <p>986,937.90 THB</p>
                </div>
                <!-- timeline start -->
                <div class="timeline-bar">
                  <ul class="timeline">
                    <li
                      @click="lot_b = '0%'"
                      :class="lot_b === '0%' ? 'active' : ''"
                    >
                      <span>0%</span>
                    </li>
                    <li
                      @click="lot_b = '25%'"
                      :class="lot_b === '25%' ? 'active' : ''"
                    >
                      <span>25%</span>
                    </li>
                    <li
                      @click="lot_b = '50%'"
                      :class="lot_b === '50%' ? 'active' : ''"
                    >
                      <span>50%</span>
                    </li>
                    <li
                      @click="lot_b = '75%'"
                      :class="lot_b === '75%' ? 'active' : ''"
                    >
                      <span>75%</span>
                    </li>
                    <li
                      @click="lot_b = '100%'"
                      :class="lot_b === '100%' ? 'active' : ''"
                    >
                      <span>100%</span>
                    </li>
                  </ul>
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
                    :value="selling_amount / selected_sell_score"
                    readonly="readonly"
                  />
                  <span class="currency">BTC</span>
                  <span class="text">จำนวน BTC ที่ขาย</span>
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
                    type="button"
                    class="sell-btn"
                    v-b-modal.limitorder-TPSLB
                    @click="show_TPSLB_order = true"
                  >
                    Sell
                  </button>
                  <p class="text-end p-0 m-0">Fee 0.20%</p>
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
                <!-- timeline start -->
                <div class="timeline-bar">
                  <ul class="timeline">
                    <li
                      @click="mot_a = '0%'"
                      :class="mot_a === '0%' ? 'active' : ''"
                    >
                      <span>0%</span>
                    </li>
                    <li
                      @click="mot_a = '25%'"
                      :class="mot_a === '25%' ? 'active' : ''"
                    >
                      <span>25%</span>
                    </li>
                    <li
                      @click="mot_a = '50%'"
                      :class="mot_a === '50%' ? 'active' : ''"
                    >
                      <span>50%</span>
                    </li>
                    <li
                      @click="mot_a = '75%'"
                      :class="mot_a === '75%' ? 'active' : ''"
                    >
                      <span>75%</span>
                    </li>
                    <li
                      @click="mot_a = '100%'"
                      :class="mot_a === '100%' ? 'active' : ''"
                    >
                      <span>100%</span>
                    </li>
                  </ul>
                </div>
                <!-- timeline end -->
                <div class="form-group bs-lp-input">
                  <input
                    type="text"
                    :value="market_buying_value / market_buying_price"
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
                    Buy
                  </button>
                  <p class="text-end p-0 m-0">Fee 0.20%</p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group bs-lp-input">
                  <input type="number" v-model="market_selling_value" />
                  <span class="currency">THB</span>
                  <span class="text">จำนวนที่ต้องการขาย</span>
                </div>
                <!-- timeline start -->
                <div class="timeline-bar">
                  <ul class="timeline">
                    <li
                      @click="mot_b = '0%'"
                      :class="mot_b === '0%' ? 'active' : ''"
                    >
                      <span>0%</span>
                    </li>
                    <li
                      @click="mot_b = '25%'"
                      :class="mot_b === '25%' ? 'active' : ''"
                    >
                      <span>25%</span>
                    </li>
                    <li
                      @click="mot_b = '50%'"
                      :class="mot_b === '50%' ? 'active' : ''"
                    >
                      <span>50%</span>
                    </li>
                    <li
                      @click="mot_b = '75%'"
                      :class="mot_b === '75%' ? 'active' : ''"
                    >
                      <span>75%</span>
                    </li>
                    <li
                      @click="mot_b = '100%'"
                      :class="mot_b === '100%' ? 'active' : ''"
                    >
                      <span>100%</span>
                    </li>
                  </ul>
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
                    Sell
                  </button>
                  <p class="text-end p-0 m-0">Fee 0.20%</p>
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
                  <input type="number" />
                  <span class="currency">THB</span>
                  <span class="text">จำนวนเงินที่ต้องการซื้อ</span>
                </div>
                <!-- timeline start -->
                <div class="timeline-bar">
                  <ul class="timeline">
                    <li
                      @click="tst_a = '0%'"
                      :class="tst_a === '0%' ? 'active' : ''"
                    >
                      <span>0%</span>
                    </li>
                    <li
                      @click="tst_a = '25%'"
                      :class="tst_a === '25%' ? 'active' : ''"
                    >
                      <span>25%</span>
                    </li>
                    <li
                      @click="tst_a = '50%'"
                      :class="tst_a === '50%' ? 'active' : ''"
                    >
                      <span>50%</span>
                    </li>
                    <li
                      @click="tst_a = '75%'"
                      :class="tst_a === '75%' ? 'active' : ''"
                    >
                      <span>75%</span>
                    </li>
                    <li
                      @click="tst_a = '100%'"
                      :class="tst_a === '100%' ? 'active' : ''"
                    >
                      <span>100%</span>
                    </li>
                  </ul>
                </div>
                <!-- timeline end -->
                <div class="form-group bs-lp-input">
                  <input type="number" />
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
                    <p class="thai-font"
                      >ระบบทำงานทันทีที่ราคาปัจจุบัน</p
                    ></label
                  >
                </div>
                <div class="form-group mb-5 bs-lp-input">
                  <input type="number" />
                  <span class="currency">THB</span>
                  <span class="text">ราคาต่อ BTC</span>
                </div>
                <div class="form-group bs-lp-input">
                  <input type="number" />
                  <span class="currency">THB</span>
                  <span class="text">ราคาต่อ BTC</span>
                </div>
                <div class="form-group">
                  <button
                    v-b-modal.limitorder-TPSLB
                    @click="show_TPSLB_order = true"
                    type="button"
                    class="buy-btn"
                    data-toggle="modal"
                  >
                    Buy
                  </button>
                  <p class="text-end p-0 m-0">Fee 0.20%</p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group bs-lp-input">
                  <input type="number" />
                  <span class="currency">THB</span>
                  <span class="text">จำนวนที่ต้องการขาย</span>
                </div>
                <!-- timeline start -->
                <div class="timeline-bar">
                  <ul class="timeline">
                    <li
                      @click="tst_b = '0%'"
                      :class="tst_b === '0%' ? 'active' : ''"
                    >
                      <span>0%</span>
                    </li>
                    <li
                      @click="tst_b = '25%'"
                      :class="tst_b === '25%' ? 'active' : ''"
                    >
                      <span>25%</span>
                    </li>
                    <li
                      @click="tst_b = '50%'"
                      :class="tst_b === '50%' ? 'active' : ''"
                    >
                      <span>50%</span>
                    </li>
                    <li
                      @click="tst_b = '75%'"
                      :class="tst_b === '75%' ? 'active' : ''"
                    >
                      <span>75%</span>
                    </li>
                    <li
                      @click="tst_b = '100%'"
                      :class="tst_b === '100%' ? 'active' : ''"
                    >
                      <span>100%</span>
                    </li>
                  </ul>
                </div>
                <!-- timeline end -->
                <div class="form-group bs-lp-input">
                  <input type="number" />
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
                    <p class="thai-font"
                      >ระบบทำงานทันทีที่ราคาปัจจุบัน</p
                    ></label
                  >
                </div>

                <div class="form-group mb-5 bs-lp-input">
                  <input type="number" />
                  <span class="currency">THB</span>
                  <span class="text">ราคาต่อ BTC</span>
                </div>
                <div class="form-group bs-lp-input">
                  <input type="number" />
                  <span class="currency">THB</span>
                  <span class="text">ราคาต่อ BTC</span>
                </div>
                <div class="form-group">
                  <button
                    v-b-modal.limitorder-TPSLB
                    @click="show_TPSLB_order = true"
                    type="button"
                    class="sell-btn"
                  >
                    Sell
                  </button>
                  <p class="text-end p-0 m-0">Fee 0.20%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- TP/SL Order-Confirmation modal -->
    <b-modal id="limitorder-TPSLB" :hide-footer="true" :hide-header="true">
      <div class="row mb-3 mt-2">
        <div class="col-12 modal-th">
          <h5 >Order Confirmation</h5>
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

      <div class="row body">
        <div class="col-12">
          <div class="row">
            <div class="col-4"><p>Coin</p></div>
            <div class="col-8"><span>BTC/THB</span></div>
          </div>
          <div class="row">
            <div class="col-4"><p>Order</p></div>
            <div class="col-8"><span class="buy-badge">BUY</span></div>
          </div>
          <div class="row">
            <div class="col-4"><p>Price</p></div>
            <div class="col-8"><span>1,025,500.10 THB(Limit)</span></div>
          </div>
          <div class="row">
            <div class="col-4"><p>Amount</p></div>
            <div class="col-8"><span>10,000 THB</span></div>
          </div>
          <div class="row">
            <div class="col-4"><p>Total</p></div>
            <div class="col-8"><span>0.01535 BTC</span></div>
          </div>
          <div class="row">
            <div class="col-4"><p>Order</p></div>
            <div class="col-8"><span class="sell-badge">Sell</span></div>
          </div>
          <div class="row">
            <div class="col-4"><p>Take Profit</p></div>
            <div class="col-8"><span>886,800.00(+10%)</span></div>
          </div>
          <div class="row">
            <div class="col-4"><p>Stop Loss</p></div>
            <div class="col-8"><span>665,100.00(-10%)</span></div>
          </div>
          <div class="row">
            <div class="col-4"><p>Amount</p></div>
            <div class="col-8"><span>10,000.00 THB</span></div>
          </div>
          <div class="form-group form-check">
            <label class="checkbox-input">
              <input type="checkbox" class="form-check-input" />
              <span>ไม่ต้องแจ้งเตือนอีก</span></label
            >
          </div>
          <br />
          <div class="row buttons-row">
            <div class="col-6" style="padding-right: 8px">
              <button type="button" class="btn yellow-btn text-center">
                ยืนยัน
              </button>
            </div>
            <div class="col-6" style="padding-left: 8px">
              <button
                type="button" 
                class="btn grey-btn text-center"
                @click="show_TPSLB_order = false"
              >
                ยกเลิก
              </button>
            </div>
          </div>
        </div>
      </div>
    </b-modal>

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
        <div class="col-md-12">
          <p>
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
            "
          >
            อ่านคู่มือการใช้งาน
          </p>
          <p
            class="d-inline"
            style="width: 24; height: 24px; margin-right: 16px"
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
            "
          >
            ดูวิดีโอสอนใช้งาน
          </p>

          <div class="form-group form-check mt-3">
            <label class="checkbox-input">
              <input type="checkbox" class="form-check-input" />
              <span>ไม่ต้องแจ้งเตือนอีก</span></label
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
          <p>
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
            "
          >
            อ่านคู่มือการใช้งาน
          </p>
          <p
            class="d-inline"
            style="width: 24; height: 24px; margin-right: 16px"
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
            "
          >
            ดูวิดีโอสอนใช้งาน
          </p>
          <div class="form-group form-check mt-3">
            <label class="checkbox-input">
              <input type="checkbox" class="form-check-input" />
              <span>ไม่ต้องแจ้งเตือนอีก</span></label
            >
          </div>

           <div class="form-group form-check mt-3">
            <label class="checkbox-input">
              <span>PIN</span>
              <input type="checkbox" class="form-check-input" />
              </label
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
      buying_amount: null,
      selling_amount: null,
      buying_btc: null,
      selling_btc: null,
      market_buying_price: 896458.67,
      market_selling_price: 896458.67,
      market_buying_value: null,
      market_selling_value: null,
      lot_a: "0%",
      lot_b: "0%",
      mot_a: "0%",
      mot_b: "0%",
      tst_a: "0%",
      tst_b: "0%",
      ordertabs: ["Limit Order", "Market Order", "Trailing Stop"],
      selectedorder: "Limit Order",
    };
  },
};
</script>
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
    margin-top: 3px;
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
  line-height: 18px;
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
  line-height: 18px;
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

.modal-body .checkbox:checked {
  background-color: #f38220;
}

.modal-body .yellow-btn {
  padding: 8px 16px;
  gap: 4px;
  background: #f38220;
  color: #0a0d10;
  border-radius: 4px;
  font-family: "Sarabun";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  width: 100%;
  height: 40px;
}

.modal-body .grey-btn {
  padding: 8px 16px;
  gap: 4px;
  background: #222b2f;
  color: #ffffff;
  border-radius: 4px;
  font-family: "Sarabun";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
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

.buy-sell .sells li button:hover{
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
  }
}
.input-group-bottom-text{
  font-size: 14px;
  font-weight: 400;
  color: #677F8E;
  margin-top: -8px;
  margin-bottom: 8px;
p{
  margin-bottom: 0 !important;
}
}
.sells .tab-content {
  margin-top: 20px;
  padding: 0 40px;
}
.sells input {
  width: 100%;
  padding: 8px 45px;
  text-align: right;
  border: none;
  margin-bottom: 15px;
  height: 40px;
  font-style: normal;
  font-size: 14px;
  background: #222b2f;
  border-radius: 4px;
  color: #9bacb6;

  font-family: "sarabun";
  &::placeholder {
    color: #9bacb6;
  }
}

.sells .buy-btn {
  width: 100%;
  display: block;
  background-color: rgba(64, 153, 79, 1);
  color: #ffffff;
  font-style: normal;
  padding: 8px;
  gap: 8px;
  border: none;
  margin-bottom: 15px;
  height: 40px;
  font-size: 14px;
  border-radius: 4px;
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
  font-style: normal;
  padding: 8px;
  gap: 8px;
  border: none;
  margin-bottom: 15px;
  height: 40px;
  font-size: 14px;
  border-radius: 4px;
  &:hover {
    background-color: var(--red-negativeHover);
  }
}

.sells p {
  color: #677f8e;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
}

.sells label p{
  color: #d6dde1;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  margin-top: 5px;
    margin-left: 3px
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
  }
  .buy-tag {
    color: #40994f;
    background: rgba(82, 154, 96, 0.16);
    border-radius: 2px;
    font-size: 12px;
    font-weight: 600;
    padding: 2px 4px;
    margin-right: 6px;
  }
  .sell-tag {
    color: #eb4751;
    background: rgba(235, 71, 81, 0.16);
    border-radius: 2px;
    font-size: 12px;
    font-weight: 600;
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
    }
    input::placeholder {
      color: #566a76;
    }
   input:focus{
    outline: none !important;
    // border: ;
   }
  }
  .sl-ul {
    margin: 10px 0;
    padding: 0 20px;
    color: #9bacb6;
    list-style-type: disc;
  }
  button.stpsl-submit {
    background-color: #40994f;
    border-radius: 4px;
    font-size: 16px;
    font-weight: 600;
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
    font-size: 16px;
    font-weight: 600;
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
    }
    .sa-tab-last {
      border-radius: 0px 4px 4px 0px;
      background-color: #222b2f;
      margin-left: 1px;
      padding: 8px;
      cursor: pointer;
    }
  }
  .top-row {
    padding-bottom: 5px;
    margin-bottom: 20px;
    border-bottom: 5px solid #0a0d10;
  }
}
</style>
