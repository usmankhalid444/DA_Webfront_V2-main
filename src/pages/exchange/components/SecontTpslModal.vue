<template>
  <div>
    <b-modal
      class="limitorder-STPSL"
      id="limitorder-STPSL"
      :hide-footer="true"
      :hide-header="true"
      centered
    >
      <div class="stop-loss-detail-modal px-2">
        <div class="col-12 my-2">
          <h5>
            Take Profit / Stop Loss
            <span
              class="cursor-pointer"
              @click="
                $bvModal.show('limitorder-TPSL'),
                  $bvModal.hide('limitorder-STPSL')
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
        <div class="row top-row" style="margin-right: -3px; margin-left: -9px">
          <div class="col-3 mt-2 ts-title">Order</div>
          <div class="col-9 mt-2 ts-value">
            <div style="margin-left: 13px">
              <span class="buy-tag">BUY</span> <span>BTC</span>
              <span class="gs">/THB</span>
            </div>
          </div>

          <div class="col-3 mt-2 ts-title">Price</div>
          <div class="col-9 mt-2 ts-value">
            <div style="margin-left: 13px">1,025,500.10 THB (Limit)</div>
          </div>

          <div class="col-3 mt-2 ts-title">Amount</div>
          <div class="col-9 mt-2 ts-value">
            <div style="margin-left: 13px">0.00973 BTC (10,000 THB)</div>
          </div>
        </div>
        <div class="row">
          <div class="col-3 form-group form-check" style="padding-left: 2.5em">
            <label class="stpsl-cb">
              <input type="checkbox" class="form-check-input" />
              <span class="w-title">Take Profit</span>
            </label>
          </div>

          <div class="col-9" style="padding: 0 20px 0 36px">
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
                <input type="number" placeholder="Price (THB)" />
                <ul class="sl-ul">
                  <li class="thai-font">
                    ???????????????????????????????????? +20% (1,230,600.12 ?????????)
                  </li>
                  <li class="thai-font">?????????????????????????????? 1,995.62 ?????????</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-3 form-group form-check" style="padding-left: 2.5em">
            <label class="stpsl-cb">
              <input type="checkbox" class="form-check-input" />
              <span class="w-title">Stop Loss</span>
            </label>
          </div>
          <div class="col-9" style="padding: 0 20px 0 36px">
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
                  type="number"
                  min="0"
                  oninput="validity.valid||(value='');"
                  placeholder="Price (THB)"
                />
                <ul class="thai-font sl-ul">
                  <li>???????????????????????????????????? +20% (1,230,600.12 ?????????)</li>
                  <li>?????????????????????????????? 1,995.62 ?????????</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          class="row"
          style="border-top: 1px solid #28363e; padding-top: 16px"
        >
          <div class="col-3 w-title my-auto">Sell Amount</div>
          <div class="col-9" style="padding-left: 36px">
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
                @click="sa = '????????????%'"
                :class="sa === '????????????%' ? 'active' : ''"
              >
                ???????????? %
              </div>
            </div>
          </div>
          <div class="col-3"></div>
          <div class="col-9" style="padding-left: 24px">
            <ul class="thai-font sl-ul">
              <li>
                ???????????????????????? 100% ?????????????????????????????????????????????????????????????????????????????? <br />
                0.0153 BTC (10,000 THB)
              </li>
            </ul>
          </div>
          <button
            @click="$bvModal.hide('limitorder-STPSL')"
            class="stpsl-submit"
          >
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
#limitorder-TPSL___BV_modal_body_ {
  padding: 0px 16px 20px 16px !important;
}
#limitorder-STPSL___BV_modal_body_ {
  padding: 0px 11px 26px 16px !important;
  width: 513px;
}
</style>
<style scoped>
.cursor-pointer {
  cursor: pointer;
}
.sl-ul {
  padding: 0px 8px !important;
  list-style: inside !important;
}
hr {
  margin: 16px 0px;
  background: #28363e;
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
  line-height: 24px;
}
</style>
