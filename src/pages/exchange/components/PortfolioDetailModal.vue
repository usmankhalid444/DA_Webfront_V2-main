<template>
  <div>
    <b-modal
      class="portfolio-detail"
      id="portfolio-detail"
      :hide-footer="true"
      :hide-header="true"
    >
      <!-- v-if="show_SSL_order" -->
      <div class="portfolio-detail-modal p-0">
        <div class="row m-0">
          <div class="col-12 p-0 heading">
            <span class="close-btn" @click="$bvModal.hide('portfolio-detail')"
              ><svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
                  fill="#677F8E"
                />
              </svg>
            </span>
          </div>
        </div>
        <div class="row btns">
          <div class="col-6">
            <p class="pair">BTC <span>/THB</span></p>
            <p class="live-scores">1,399,111.01 (+2.5%)</p>
          </div>
          <div class="col-6">
            <div class="row">
              <div class="col-6 p-0">
                <button class="buy-btn mr-14">Buy</button>
              </div>
              <div class="col-6 m-0 p-0">
                <button class="sell-btn">Sell</button>
              </div>
            </div>
          </div>
        </div>
        <div class="row body-container">
          <div class="col-5">
            <p class="c-title">Avg. Cost</p>
            <p class="c-title">Actual</p>
            <p class="c-title mb-0">Available</p>
          </div>
          <div class="col-6">
            <p class="c-value">1,299,111.01 <span>THB / Coin</span></p>
            <p class="c-value">0.0098 <span>BTC</span></p>
            <p class="c-value mb-0">0.0098</p>
          </div>
        </div>
        <div class="row body-container dc1" style="margin-top: 4px">
          <div class="col-5">
            <p class="c-title">Market Value</p>
            <p class="c-title">Total Cost</p>
            <p class="c-title">Unrealized (Est.)</p>
            <p class="c-title mb-0">Realized (Today)</p>
          </div>
          <div class="col-6">
            <p class="c-value">51,325.58 <span>THB</span></p>
            <p class="c-value">50,000.58<span>THB</span></p>
            <p class="c-value-green">1,299,111.01 (+25.14%)</p>
            <p class="c-value-green mb-0">1,299.01 (+1.01%)</p>
          </div>
        </div>
        <div class="f-buttons">
          <div>
            <button class="thai-font">ฝาก BTC</button>
          </div>
          <div>
            <button class="thai-font">ถอน BTC</button>
          </div>
          <div><button>Order History</button></div>
        </div>
      </div>
    </b-modal>
  </div>
</template>
<script>
export default {};
</script>

<style>
#portfolio-detail .modal-dialog {
  width: 456px;
}

#portfolio-detail___BV_modal_body_ {
  padding: 0px !important;
}
</style>
<style scoped>
.btns {
  margin-bottom: 24px !important;
}
</style>
<style lang="scss">
.portfolio-detail-modal {
  padding: 0px 24px !important;
}
.portfolio-detail-modal .heading {
  padding-bottom: 8px !important;
  height: 56px !important;
  padding-top: 24px !important;
}
.mr-14 {
  margin-right: 14px !important;
}
.dc1 {
  padding: 12px 0px 7px !important;
  border-radius: 8px 8px 0px 0px;
}
.portfolio-detail-modal {
  padding: 0 10px;
  padding-top: 8px;
  .close-btn {
    float: right;
    cursor: pointer;
  }
  .pair {
    margin: 0;
    font-weight: 600;
    font-size: 24px;
    line-height: 24px;
    color: #d6dde1;
    span {
      color: #677f8e;
    }
  }
  .live-scores {
    color: #40994f;
    margin: 0;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
  }
  .buy-btn {
    font-family: "Noto Sans Thai";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: white;
    background-color: #40994f;
    border-radius: 4px;
    width: 96px;
    height: 40px;
    &:hover {
      background-color: var(--green-positiveHover);
    }
  }
  .sell-btn {
    font-family: "Noto Sans Thai";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: white;
    background-color: #de2d40;
    border-radius: 4px;
    width: 96px;
    height: 40px;
    &:hover {
      background-color: var(--red-negativeHover);
    }
  }
  .c-title {
    color: #677f8e;
    margin-bottom: 8px;
  }
  .c-value {
    color: #d6dde1;
    margin-bottom: 8px;
    span {
      margin-left: 5px;
      color: #677f8e;
    }
  }
  .c-value-green {
    color: #40994f;
    margin-bottom: 8px;
  }
  .f-buttons {
    text-align: center;
    margin-top: 24px;
    display: flex;
    margin-bottom: 21px;
    button {
      background-color: #222b2f;
      border-radius: 4px;
      height: 40px;
      width: 124px;
      margin-right: 16px;
      font-family: "Sarabun";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
      &:active {
        color: var(--bs-btn-active-color);
        background-color: var(--bs-btn-active-bg);
        border: 1px solid white !important;
      }
    }
  }
  .body-container {
    margin-top: 2px;
    background-color: #192126;
    padding: 12px 0px 13px;
    margin: 0;
  }
}
</style>
