<template>
  <div>
    <b-modal
      class="qr-status-modal"
      id="qr-status-modal"
      :hide-footer="true"
      :hide-header="true"
    >
      <div class="qr-status-modal">
        <div class="d-flex justify-content-center">
          <span class="top-heading px-2 mt-3">ถอนเหรียญ</span>
        </div>
        <div class="d-flex justify-content-center">
          <span class="h6 px-2"> 0.034 BTC</span>
        </div>

        <div class="d-flex justify-content-center mt-3">
          <span class="px-2" style="color: #e04152"> x ถอนไม่สำเร็จ</span>
        </div>

        <div class="row mt-5 font-roboto">
          <div class="col-4 del-font">Confirmation</div>
          <div class="col-8">1/13</div>
        </div>
        <div class="row font-roboto">
          <div class="col-4 del-font">Network</div>
          <div class="col-8">BTC</div>
        </div>
        <div class="row font-roboto">
          <div class="col-4 del-font">Memo</div>
          <div class="col-8">4955849</div>
        </div>
        <div class="row font-roboto">
          <div class="col-4 del-font">Network Fee</div>
          <div class="col-8">0.0001 BTC (~500 THB)</div>
        </div>
        <div class="row">
          <div class="col-4 thai-font del-font">หมายเลขธุรกรรม</div>
          <div class="col-7">
            <span class="thai-font">XXXXXXXXXXXXXXXXXXXX XXXXXXXXXXXX</span>
          </div>
          <div class="col-1">
            <img src="@/assets/images/wallet/copyIcon.png" alt="copy" />
          </div>
        </div>
        <div class="row">
          <div class="col-4 thai-font del-font">วันที่</div>
          <div class="col-8 thai-font">25/05/22 00:00:00</div>
        </div>
        <div class="d-flex justify-content-center mt-3">
          <button @click="onCloseStatusModel()" class="btn-yellow">ปิด</button>
        </div>
      </div>
    </b-modal>
  </div>
</template>
<script>
export default {
  methods: {
    onCloseStatusModel() {
      this.$bvModal.hide("qr-status-modal");
      this.$emit("onCloseStatusModel");
    },
  },
};
</script>
<style lang="scss">
.del-font {
  color: #677f8e;
  line-height: 24px;
  font-size: 14px;
}
.top-heading {
  font-family: "Noto Sans Thai";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
}
.btn-yellow {
  color: #0a0d10;
  background-color: #f38220;
  border-radius: 4px;
  height: 36px;
  font-family: "Sarabun";
  min-width: 132px;
  &:hover {
    color: #0a0d10;
    background-color: #f28e38 !important;
  }
}
#qr-status-modal___BV_modal_content_ {
  background-color: #141b1f;
  width: 416px;
  margin: auto;
  height: 440px;
  font-family: "Roboto Flex";
  #qr-status-modal___BV_modal_body_ {
    .close-btn {
      cursor: pointer;
      position: absolute;
      top: 20px;
      right: 30px;
    }
    .tick-img {
      display: flex;
      justify-content: center;
      margin-top: 55px;
    }
    .m-center {
      text-align: center;
      margin-top: 40px;
      p {
        margin: 0;
      }
      .c-title {
        color: #d6dde1;
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 10px;
      }
      .c-value {
        color: #677f8e;
      }
    }
    .f-btn {
      width: 163px;
      height: 44px;
      display: block;
      margin: auto;
      border-radius: 4px;
      color: white;
      font-size: 16px;
      font-weight: 700;
      margin-top: 40px;
      background-color: #222b2f;
    }
  }
}
</style>
