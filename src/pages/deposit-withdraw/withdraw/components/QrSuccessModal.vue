<template>
  <div>
    <b-modal
      class="qr-success-modal"
      id="qr-success-modal"
      :hide-footer="true"
      :hide-header="true"
    >
      <div class="d-flex justify-content-center">
        <img src="@/assets/images/wallet/tick-svg.png" alt="tick-image" />
      </div>
      <div class="m-center">
        <p class="c-title nono-sans-thai-font">บันทึก QR Code สำเร็จ</p>
        <p class="c-value">นำ QR Code</p>
        <p class="c-value">ที่ได้รับไปสแกนจากแอปพลิเคชั่นต้นทาง</p>
        <p class="c-value">เพื่อฝากเหรียญเข้าสู่ Portfolio ของท่าน</p>
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
      this.$bvModal.hide("qr-success-modal");
    },
  },
};
</script>
<style lang="scss">
#qr-success-modal___BV_modal_content_ {
  background-color: #141b1f;
  min-height: 430px;
  margin-top: 140px;
  font-family: "Noto Sans Thai";
  #qr-success-modal___BV_modal_body_ {
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
        margin-bottom: 10px;
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
      min-width: 132px;
      &:hover {
        background-color: #283238 !important;
      }
    }
    .btn-yellow {
      color: #0a0d10;
      background-color: #f38220;
      border-radius: 4px;
      height: 36px;
      min-width: 132px;
      &:hover {
        color: #0a0d10;
        background-color: #f28e38 !important;
      }
    }
  }
}
</style>
