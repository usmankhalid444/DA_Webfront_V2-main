<template>
  <div>
    <!-- center section start -->
    <div class="row mt-3 center-section">
      <div class="col-12 px-3">
        <div class="row">
          <div class="col-4 my-auto thai-font px-0">จำนวนเงินที่ต้องการถอน</div>
          <div class="col-8 top-input-container">
            <input type="text" placeholder="0" />
            <span>ETH</span>
          </div>
        </div>
        <div class="row">
          <div class="col-8 offset-md-4 input-container">
            <p class="input_label" style="margin-top: 2px">
              เหรียญที่ถอนได้&nbsp; 2.00 ETH &nbsp;&nbsp;<u>ถอนทั้งหมด</u>
            </p>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col-4 thai-font px-0"><p>ต้องการถอนไปที่</p></div>
          <div class="col-8 px-0 thai-font">
            <div class="row side-card mx-0">
              <div
                class="col-5 col-md-4 my-auto thai-font del-font title"
                align="right"
              >
                Wallet Name
              </div>
              <div class="col-7 col-md-8 value">Natt 1</div>
              <div
                class="col-5 col-md-4 my-auto thai-font del-font title"
                align="right"
              >
                Address
              </div>
              <div class="col-7 col-md-8 value">0xfA3EXBF3KFL3d9e9i322a6</div>
              <div
                class="col-5 col-md-4 my-auto thai-font del-font title"
                align="right"
              >
                Network
              </div>
              <div class="col-7 col-md-8 value">
                Ethereum (ERC20)
                <span style="color: #f8c417; margin-left: 5px">Congest</span>
              </div>
              <div
                class="col-5 col-md-4 my-auto thai-font del-font title"
                align="right"
              >
                ใช้เวลาถอน
              </div>
              <div class="col-7 col-md-8 value">~15 นาที</div>
              <div
                class="col-5 col-md-4 my-auto thai-font del-font title"
                align="right"
              >
                Free
              </div>
              <div class="col-7 col-md-8 value">0.0001 ETH (~301.24 THB)</div>
            </div>
            <u class="c-b">เลือก Wallet Address ใหม่</u>
          </div>
        </div>
        <div class="divider"></div>
        <div class="row my-3">
          <div class="col-5 my-auto thai-font px-0">บัญชีธนาคารที่รับเงิน</div>
          <div class="col-7 my-auto thai-font">1.9999 ETH (~298.24 THB)</div>
        </div>
      </div>
    </div>
    <p class="bottom-text px-2 my-2">
      เงื่อนไขการถอนเหรียญ <br />กรณาเลือก Network ของผู้รับ Address ให้ตรงกับ
      Network ของเหรียญที่คุณเลือก บริษัทฯ จะไม่รับผิดชอบในความ เสียหายใดๆ
      ที่เกิดจาก การที่ผู้ใช้งานโอนเหรียญผิด Wallet Address
    </p>
    <div class="mx-3 pt-3 thai-font pb-4 justify-center text-center">
      <button class="btn btn-yellow thai-font mx-1" @click="openOTPModel()">
        ยืนยัน
      </button>
      <button
        class="btn btn-blue thai-font mx-1"
        @click="$emit('onCancelClicked')"
      >
        ยกเลิก
      </button>
    </div>
    <OtpModel
      v-if="showWithdrawOTPModal"
      @onOTPSubmitted="onOTPSubmitted()"
      @closeModel="showWithdrawOTPModal = false"
      :wcd="true"
    ></OtpModel>
    <RequestDoneModal
      showStatusButton
      @onShowStatus="$bvModal.show('qr-status-modal')"
      @onCloseSuccessModel="$bvModal.hide('request-done-modal')"
    ></RequestDoneModal>
    <CoinStatusModel></CoinStatusModel>
  </div>
</template>
<script>
import OtpModel from "@/components/Modal/OtpModel.vue";
import RequestDoneModal from "./RequestDoneModal.vue";
import CoinStatusModel from "./CoinStatusModel.vue";

export default {
  components: { OtpModel, RequestDoneModal, CoinStatusModel },
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
      this.$bvModal.show("request-done-modal");
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
.c-b {
  font-family: "Sarabun";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 24px;
  color: #677f8e;
  position: relative;
  top: 5px;
}
.divider {
  border: 1px solid #28363e;
  margin: 20px -13px;
}
.side-card {
  background-color: #1c262b;
  border-radius: 5px;
  padding: 10px 0;
  .title {
    margin: 2px 0;
  }
  .value {
    line-height: 24px;
    margin: 2px 0;
  }
}
// .withdraw-coin-container {
//   background-color: #192126;
//   border-radius: 8px;
//   margin-top: 50px;
//   position: relative;
//   .dcc-head {
//     border-bottom: 1px solid #28363e;
//     button {
//       display: inline-block;
//       font-size: 16px;
//       padding: 15px 0;
//       margin-left: 20px;
//       border-bottom: 2px solid transparent;
//       color: #677f8e;
//       &:hover {
//         border-bottom: 2px solid #f38220;
//         color: #d6dde1;
//       }
//     }

//     button.active {
//       border-bottom: 2px solid #f38220;
//       color: #d6dde1;
//     }
//   }
//   .center-section {
//     .select-container {
//       background-color: #222b2f;
//       color: #d6dde1;
//       border-radius: 4px;
//       height: 40px;
//       width: 240px;
//       margin: auto 0;
//       display: flex;
//       align-items: center;
//       position: relative;
//       cursor: pointer;
//       .icon {
//         pointer-events: none;
//         position: absolute;
//         right: 20px;
//       }
//       .rotate-sc-icon {
//         transform: rotateX(180deg);
//       }
//       .text {
//         padding-left: 15px;
//       }
//       .options {
//         position: absolute;
//         bottom: -82px;
//         width: 100%;
//         background-color: #222b2f;
//         border-radius: 4px;
//         ul {
//           margin: 0;
//           padding: 0;
//           li {
//             display: flex;
//             align-items: center;
//             height: 40px;
//             padding: 0 15px;
//             border-radius: 4px;
//             &:hover {
//               background-color: #2c3b44;
//             }
//           }
//         }
//       }
//       .hidden {
//         display: none;
//       }
//       .show {
//         display: block;
//       }
//     }
//     .input-container {
//       input {
//         background-color: #222b2f;
//         color: #d6dde1;
//         border-radius: 4px;
//         height: 40px;
//         padding: 0 18px;
//         &::placeholder {
//           color: #566a76;
//         }
//       }
//       span {
//         color: #9bacb6;
//         margin-left: -40px;
//       }
//     }

//     .info {
//       color: #d6dde1;
//       p {
//         margin: 0;
//       }
//       ul {
//         list-style: disc;
//       }
//     }
//     .lr {
//       font-size: 16px;
//       span {
//         font-size: 14px;
//         color: #f38220;
//         margin-left: 8px;
//       }
//     }
//     .bcb {
//       margin: 0 -27px;
//       margin-top: 30px;
//       margin-bottom: 20px;
//       border-top: 1px solid #28363e;
//     }

//     .bc-info {
//       ul {
//         list-style: disc;
//         padding: 0 24px;
//         li {
//           color: #9bacb6;
//           width: 70%;
//         }
//       }
//       ul.number {
//         list-style: decimal;
//       }
//     }
//   }
// }
.bottom-text {
  font-family: "Sarabun";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 24px;
  color: #de2d40;
}
.right-info {
  position: absolute;
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
// @media (max-width: 640px) {
//   .withdraw-coin-container {
//     width: auto;
//     height: auto;
//     margin-left: 10px;
//     margin-right: 10px;
//     padding-bottom: 20px;
//     .center-section {
//       padding: 0;
//     }
//     // .select-container {
//     //   select {
//     //     width: 190px;
//     //   }
//     // }
//     .input-container {
//       input {
//         width: 190px;
//       }
//     }
//   }
// }
// @media (min-width: 640px) {
//   .withdraw-coin-container {
//     width: 616px;
//     padding-bottom: 0;
//     .center-section {
//       padding: 0 1rem;
//     }
//     // .select-container {
//     //   select {
//     //     width: 240px;
//     //   }
//     // }
//     .input-container {
//       input {
//         width: 240px;
//       }
//     }
//   }
//   .qr-h {
//     height: 458px;
//   }
//   .bc-h {
//     height: 580px;
//   }
// }
@media (min-width: 100px) {
  .right-info {
    display: none;
  }
}
@media (min-width: 1366px) {
  .right-info {
    display: block;
    right: 100px;
  }
}
@media (min-width: 1536px) {
  .right-info {
    right: 240px;
  }
}
.top-input-container {
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
</style>
<style scoped>
/* .withdraw-coin-container {
  min-height: 540px !important;
} */
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
