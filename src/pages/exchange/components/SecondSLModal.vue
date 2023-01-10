<template>
  <div>
    <b-modal
      class="limitorder-SSL"
      id="limitorder-SSL"
      :hide-footer="true"
      :hide-header="true"
      centered
    >
      <div class="stop-loss-detail-modal px-2">
        <div class="col-12 my-2">
          <h5 class="header">
            Stop Loss
            <span
              class="cursor-pointer"
              @click="
                $bvModal.show('limitorder-stop-loss');
                $bvModal.hide('limitorder-SSL');
              "
            >
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
              <span
                @click="$bvModal.hide('limitorder-SSL')"
                style="position: absolute; right: 5px; cursor: pointer"
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
            </span>
          </h5>
        </div>
        <div class="row top-row">
          <div class="col-3 ts-title">Order</div>
          <div class="col-9 ts-value p-0">
            <span class="sell-tag">SELL</span> <span>BTC</span>
            <span class="gs">/THB</span>
          </div>

          <div class="col-3 mt-2 ts-title">Price</div>
          <div class="col-9 mt-2 ts-value p-0">1,025,500.10 THB (Limit)</div>

          <div class="col-3 mt-2 ts-title">Amount</div>
          <div class="col-9 mt-2 ts-value p-0">0.00973 BTC (10,000 THB)</div>
          <div class="mt-2 border-line"></div>
        </div>

        <!-- <div class="row">
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
        </div> -->
        <div class="row">
          <div
            class="col-3 form-group form-check"
            style="padding-left: 1em !important"
          >
            <label class="stpsl-cb">
              <!-- <input type="checkbox" class="form-check-input" /> -->
              <span class="w-title m-0">Stop Loss</span>
            </label>
          </div>
          <div class="col-9" style="padding-right: 20px">
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
                <input
                  min="0"
                  oninput="validity.valid||(value='');"
                  type="number"
                  placeholder="Price (THB)"
                />
                <ul class="thai-font sl-ul">
                  <li>ขายเมื่อราคา +20% (1,230,600.12 บาท)</li>
                  <li>กำไรประมาณ 1,995.62 บาท</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr />
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
                class="col-3 text-center sa-tab-last"
                @click="sa = 'ระบุ%'"
                :class="sa === 'ระบุ%' ? 'active' : ''"
              >
                ระบุ %
              </div>
            </div>
          </div>
          <div class="col-3"></div>
          <div class="col-9">
            <ul
              class="thai-font sl-ul"
              style="
                list-style: outside !important;
                padding: 0px 12px !important;
              "
            >
              <li>
                ขายจำนวน 100% เมื่อราคาเป็นไปตามเงื่อนไข <br />
                0.0153 BTC (10,000 THB)
              </li>
            </ul>
          </div>
          <button @click="$bvModal.hide('limitorder-SSL')" class="ssl-submit">
            Submit
          </button>
        </div>
      </div>
    </b-modal>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tp: "thb",
      sl: "thb",
      sa: "100%",
    };
  },
};
</script>
<style>
#limitorder-SSL___BV_modal_body_ {
  padding: 0px 11px 20px 16px !important;
  width: 511px;
}
</style>
<style scoped>
.cursor-pointer {
  cursor: pointer;
}
.border-line {
  border: 4px solid #0a0d10;
  margin-left: -12px;
  width: 511px;
  max-width: 511px;
}
.stop-loss-detail-modal .top-row {
  border-bottom: 0px solid #0a0d10 !important;
}
.sl-ul {
  padding: 0px 8px !important;
  list-style: inside !important;
}
.sa-tabs > div {
  color: #9bacb6;
}
.sa-tabs > .active {
  color: white !important;
}
hr {
  margin: 16px 0px;
  color: #28363e;
}
.stop-loss-detail-modal .header {
  padding: 24px 0px;
  margin: 0px !important;
  width: 100%;
  line-height: 24px;
}
.stop-loss-detail-modal .header > span {
  margin-left: 10px;
}
.stop-loss-detail-modal .tab {
  color: #677f8e;
  line-height: 14px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.stop-loss-detail-modal .tab.active {
  color: white !important;
  display: flex;
  justify-content: center;
  align-items: center;
}
.top-row {
  line-height: 24px;
}
.stop-loss-detail-modal h5 {
  padding: 24px 0px;
}
</style>
<style lang="scss"></style>
