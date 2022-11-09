<template>
  <div>
    <b-modal
      class="limitorder-STPSL"
      id="limitorder-STPSL"
      :hide-footer="true"
      :hide-header="true"
    >
      <div class="stop-loss-detail-modal px-2">
        <div class="col-12 my-2">
          <h5>
            Take Profit / Stop Loss
            <span>
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
            <span
              @click="$bvModal.hide('limitorder-STPSL')"
              style="position: absolute; right: 15px; cursor: pointer"
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
          </h5>
        </div>
        <div class="row top-row">
          <div class="col-3 my-1 ts-title">Order</div>
          <div class="col-9 my-1 ts-value">
            <span class="buy-tag">BUY</span> <span>BTC</span>
            <span class="gs">/THB</span>
          </div>

          <div class="col-3 my-1 ts-title">Price</div>
          <div class="col-9 my-1 ts-value">1,025,500.10 THB (Limit)</div>

          <div class="col-3 my-1 ts-title">Amount</div>
          <div class="col-9 my-1 ts-value">0.00973 BTC (10,000 THB)</div>
        </div>
        <div class="row">
          <div class="col-3 form-group form-check">
            <label class="stpsl-cb">
              <input type="checkbox" class="form-check-input" />
              <span class="w-title">Take Profit</span>
            </label>
          </div>

          <div class="col-9">
            <div class="row tabs-container">
              <div
                class="col-6 tab"
                @click="tp = 'thb'"
                :class="tp === 'thb' ? 'active' : ''"
              >
                THB
              </div>
              <div
                class="col-6 tab"
                @click="tp = '%'"
                :class="tp === '%' ? 'active' : ''"
              >
                %
              </div>
            </div>
            <div class="row">
              <div class="col-12 input-row">
                <input type="text" placeholder="Price (THB)" />
                <ul class="sl-ul">
                  <li class="thai-font">
                    ขายเมื่อราคา +20% (1,230,600.12 บาท)
                  </li>
                  <li class="thai-font">กำไรประมาณ 1,995.62 บาท</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-3 form-group form-check">
            <label class="stpsl-cb">
              <input type="checkbox" class="form-check-input" />
              <span class="w-title">Stop Loss</span>
            </label>
          </div>
          <div class="col-9">
            <div class="row tabs-container">
              <div
                class="col-6 tab"
                @click="sl = 'thb'"
                :class="sl === 'thb' ? 'active' : ''"
              >
                THB
              </div>
              <div
                class="col-6 tab"
                @click="sl = '%'"
                :class="sl === '%' ? 'active' : ''"
              >
                %
              </div>
            </div>
            <div class="row">
              <div class="col-12 input-row">
                <input type="text" placeholder="Price (THB)" />
                <ul class="thai-font sl-ul">
                  <li>ขายเมื่อราคา +20% (1,230,600.12 บาท)</li>
                  <li>กำไรประมาณ 1,995.62 บาท</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-3 w-title my-auto">Sell Amount</div>
          <div class="col-9">
            <div class="row sa-tabs">
              <div
                class="col-2 text-center sa-tab-first"
                @click="sa = '25%'"
                :class="sa === '25%' ? 'active' : ''"
              >
                25%
              </div>
              <div
                class="col-2 text-center sa-tab"
                @click="sa = '50%'"
                :class="sa === '50%' ? 'active' : ''"
              >
                50%
              </div>
              <div
                class="col-2 text-center sa-tab"
                @click="sa = '75%'"
                :class="sa === '75%' ? 'active' : ''"
              >
                75%
              </div>
              <div
                class="col-2 text-center sa-tab"
                @click="sa = '100%'"
                :class="sa === '100%' ? 'active' : ''"
              >
                100%
              </div>
              <div
                class="col-2 text-center sa-tab-last"
                @click="sa = 'ระบุ%'"
                :class="sa === 'ระบุ%' ? 'active' : ''"
              >
                ระบุ %
              </div>
            </div>
          </div>
          <div class="col-3"></div>
          <div class="col-9">
            <ul class="thai-font sl-ul">
              <li>
                ขายจำนวน 100% เมื่อราคาเป็นไปตามเงื่อนไข <br />
                0.0153 BTC (10,000 THB)
              </li>
            </ul>
          </div>
          <button class="stpsl-submit">Submit</button>
        </div>
      </div>
    </b-modal>
  </div>
</template>
<script>
export default {
  props: ["show_STPSL_order"],
  data() {
    return {
      tp: "thb",
      sl: "thb",
      sa: "25%",
    };
  },
};
</script>
<style lang="scss"></style>
