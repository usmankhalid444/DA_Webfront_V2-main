<template>
  <div>
    <!-- center section start -->
    <div class="row mt-3 center-section">
      <div class="col-12">
        <div class="row">
          <div class="col-4 my-auto thai-font">จำนวนเงินที่ต้องการถอน</div>
          <div class="col-8 input-container">
            <input type="text" placeholder="0" />
            <span>THB</span>
          </div>
        </div>
        <div class="row">
          <div class="col-8 offset-md-4 input-container">
            <p class="input_label">
              จำนวนเงินที่ถอนได้&nbsp; 20,000.00 THB &nbsp;&nbsp;ถอนทั้งหมด
            </p>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col-4 thai-font"><p>ต้องการถอนไปที่</p></div>
          <div class="col-8">
            <div class="row side-card mx-0">
              <div class="col-5 col-md-4 my-auto thai-font del-font" align="right">
                Wallet Name
              </div>
              <div class="col-7 col-md-8">Natt 1</div>
              <div class="col-5 col-md-4 my-auto thai-font del-font" align="right">
                Address
              </div>
              <div class="col-7 col-md-8">0xfA3EXBF392XBF3923</div>
              <div class="col-5 col-md-4 my-auto thai-font del-font" align="right">
                Network
              </div>
              <div class="col-7 col-md-8">Ethereum (ERC20)</div>
              <div class="col-5 col-md-4 my-auto thai-font del-font" align="right">
                ใช้เวลาถอน
              </div>
              <div class="col-7 col-md-8">~15 นาที</div>
              <div class="col-5 col-md-4 my-auto thai-font del-font" align="right">
                Free
              </div>
              <div class="col-7 col-md-8">0.0001 ETH (~301.24 THB)</div>
            </div>
            <div class="row">
              <div class="col-12 input-container">
                <p class="input_label underline">เลือก Wallet Address ใหม่</p>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div class="row my-3">
          <div class="col-5 my-auto thai-font">บัญชีธนาคารที่รับเงิน</div>
          <div class="col-7 my-auto thai-font">1.9999 ETH (~298.24 THB)</div>
        </div>
      </div>
    </div>
    <p class="del-font px-3 my-2">
      เงื่อนไขการถอนเหรียญ <br />กรณาเลือก Network ของผู้รับ Address ให้ตรงกับ Network
      ของเหรียญที่คุณเลือก บริษัทฯ จะไม่รับผิดชอบในความ เสียหายใดๆ ที่เกิดจาก
      การที่ผู้ใช้งานโอนเหรียญผิด Wallet Address
    </p>
    <div class="mx-3 pt-1 thai-font pb-3 justify-center text-center">
      <button class="btn btn-yellow thai-font mx-1" @click="openOTPModel()">
        ยืนยัน
      </button>
      <button class="btn btn-blue thai-font mx-1" @click="$emit('onCancelClicked')">
        ยกเลิก
      </button>
    </div>

    <OtpModel
      v-if="showWithdrawOTPModal"
      @onOTPSubmitted="onOTPSubmitted()"
      @closeModel="showWithdrawOTPModal = false"
    ></OtpModel>
    <QrSuccessModal
      showStatusButton
      @onShowStatus="$bvModal.show('qr-status-modal')"
      @onCloseSuccessModel="$bvModal.hide('qr-success-modal')"
    ></QrSuccessModal>
    <CoinStatusModel></CoinStatusModel>
  </div>
</template>
<script>
import OtpModel from "@/components/Modal/OtpModel.vue";
import QrSuccessModal from "./QrSuccessModal.vue";
import CoinStatusModel from "./CoinStatusModel.vue";

export default {
  components: { OtpModel, QrSuccessModal, CoinStatusModel },
  data() {
    return {
      showWithdrawOTPModal: false,
      showQrSuccessModal: false,
    };
  },
  methods: {
    onOTPSubmitted() {
      this.showWithdrawOTPModal = false;
      this.showQrSuccessModal = true;
      this.$bvModal.show("qr-success-modal");
    },
    openOTPModel() {
      this.showWithdrawOTPModal = true;
    },
  },
};
</script>
<style lang="scss">
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
.side-card {
  background-color: #1c262b;
  border-radius: 5px;
  padding: 10px 0;
}
.deposite-cash-container {
  background-color: #192126;
  border-radius: 8px;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  .dcc-head {
    border-bottom: 1px solid #28363e;
    button {
      display: inline-block;
      font-size: 16px;
      padding: 15px 0;
      margin-left: 20px;
      border-bottom: 2px solid transparent;
      color: #677f8e;
      &:hover {
        border-bottom: 2px solid #f38220;
        color: #d6dde1;
      }
    }

    button.active {
      border-bottom: 2px solid #f38220;
      color: #d6dde1;
    }
  }
  .center-section {
    .select-container {
      background-color: #222b2f;
      color: #d6dde1;
      border-radius: 4px;
      height: 40px;
      width: 240px;
      margin: auto 0;
      display: flex;
      align-items: center;
      position: relative;
      cursor: pointer;
      .icon {
        pointer-events: none;
        position: absolute;
        right: 20px;
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
        width: 100%;
        background-color: #222b2f;
        border-radius: 4px;
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
    .input-container {
      input {
        background-color: #222b2f;
        color: #d6dde1;
        border-radius: 4px;
        height: 40px;
        padding: 0 18px;
        &::placeholder {
          color: #566a76;
        }
      }
      span {
        color: #9bacb6;
        margin-left: -40px;
      }
    }
    .info {
      color: #d6dde1;
      p {
        margin: 0;
      }
      ul {
        list-style: disc;
      }
    }
    .lr {
      font-size: 16px;
      span {
        font-size: 14px;
        color: #f38220;
        margin-left: 8px;
      }
    }
    .bcb {
      margin: 0 -27px;
      margin-top: 30px;
      margin-bottom: 20px;
      border-top: 1px solid #28363e;
    }
    .bc-info {
      ul {
        list-style: disc;
        padding: 0 24px;
        li {
          color: #9bacb6;
          width: 70%;
        }
      }
      ul.number {
        list-style: decimal;
      }
    }
  }
}
.right-info {
  position: absolute;
  right: 100px;
  top: 100px;
  color: #677f8e;
  ul {
    list-style: disc;
    li {
      &:hover {
        color: #d6dde1;
      }
      margin-bottom: 8px;
      cursor: pointer;
    }
  }
}
@media (max-width: 640px) {
  .deposite-cash-container {
    width: auto;
    height: auto;
    margin-left: 10px;
    margin-right: 10px;
    padding-bottom: 20px;
    .center-section {
      padding: 0;
    }
    // .select-container {
    //   select {
    //     width: 190px;
    //   }
    // }
    .input-container {
      input {
        width: 190px;
      }
    }
  }
}
@media (min-width: 640px) {
  .deposite-cash-container {
    width: 616px;
    padding-bottom: 0;
    .center-section {
      padding: 0 1rem;
    }
    // .select-container {
    //   select {
    //     width: 240px;
    //   }
    // }
    .input-container {
      input {
        width: 240px;
      }
    }
  }
  .qr-h {
    height: 458px;
  }
  .bc-h {
    height: 580px;
  }
}
@media (min-width: 100px) {
  .right-info {
    display: none;
  }
}
@media (min-width: 1366px) {
  .right-info {
    display: block;
  }
}
</style>
<style scoped>
.deposite-cash-container {
  min-height: 540px !important;
}
.input-container .input_label {
  margin: 0px;
  line-height: 24px;
  color: #677f8e;
  font-size: 12px;
}
.d-info {
  max-width: 285px;
  height: 59px;
  background: #222b2f;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #9bacb6;
  padding: 0px 10px;
  font-size: 14px;
}
.d-info > div {
  display: flex;
  justify-content: space-between;
  position: relative;
}
.d-info > div span:nth-child(3) {
  color: #f38220;
  margin-top: -15px;
  display: block;
}
.del-font {
  color: #677f8e;
  line-height: 24px;
  font-size: 14px;
}
.b-ins p {
  color: #677f8e;
  margin: 0px;
  line-height: 24px;
}
.b-ins ul {
  color: #677f8e;
  font-size: 14px;
  line-height: 24px;
  list-style: inherit;
}
</style>
