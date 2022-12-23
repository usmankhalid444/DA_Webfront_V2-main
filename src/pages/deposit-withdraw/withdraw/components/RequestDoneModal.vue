<template>
  <div>
    <b-modal
      class="qr-success-modal"
      id="request-done-modal"
      :hide-footer="true"
      :hide-header="true"
    >
      <div class="d-flex justify-content-center">
        <img src="@/assets/images/wallet/tick-svg.png" alt="tick-image" />
      </div>
      <div class="m-center">
        <p class="c-title nono-sans-thai-font">บันทึก QR Code สำเร็จ</p>
        <p class="c-value">ท่านจะได้รับเงินภายใน 24 ชั่วโมง</p>
        <p class="c-value">และจะได้รับ อีเมลยืนยัน เมื่อการถอนเงินสำเร็จ</p>
      </div>
      <div class="d-flex mt-3 justify-content-center">
        <button
          v-if="showStatusButton"
          @click="onCloseSuccessModel(1)"
          class="btn-yellow"
        >
          ตรวจสอบสถานะการถอน
        </button>
      </div>
      <div class="d-flex mt-3 justify-content-center">
        <button @click="onCloseSuccessModel(2)" class="btn-blue">
          เสร็จสิ้น
        </button>
      </div>
    </b-modal>
  </div>
</template>
<script>
import CoinStatusModel from "./CoinStatusModel.vue";
export default {
  components: { CoinStatusModel },
  props: {
    showStatusButton: { type: Boolean, default: false },
  },
  methods: {
    onCloseSuccessModel(n) {
      if (n === 1) {
        this.$emit("onShowStatus");
      } else {
        this.$emit("onCloseSuccessModel");
      }
      this.$bvModal.hide("request-done-modal");
    },
  },
};
</script>
<style lang="scss">
#request-done-modal___BV_modal_content_ {
  background-color: #141b1f;
  width: 458px;
  height: 355px;
  margin: auto;
  margin-top: 130px;
  font-family: "Sarabun";
  #request-done-modal___BV_modal_body_ {
    .close-btn {
      cursor: pointer;
      position: absolute;
      top: 20px;
      right: 30px;
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
        margin-bottom: 5px;
      }
      .c-value {
        color: #677f8e;
      }
    }
    .btn-blue {
      color: #fff;
      background-color: #38454d;
      border-radius: 4px;
      height: 36px;
      width: 176px;
      &:hover {
        background-color: #283238 !important;
      }
    }
    .btn-yellow {
      color: #0a0d10;
      background-color: #f38220;
      border-radius: 4px;
      height: 36px;
      width: 176px;
      &:hover {
        color: #0a0d10;
        background-color: #f28e38 !important;
      }
    }
  }
}
</style>
