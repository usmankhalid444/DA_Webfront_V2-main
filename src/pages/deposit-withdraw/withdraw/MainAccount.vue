<template>
  <div>
    <div class="main-account-container">
      <div class="container-fluid">
        <!-- top section start -->
        <div class="row dcc-head">
          <div class="col-12">
            <router-link to="/withdraw/cash"
              ><button class="not-active">Withdraw Cash</button></router-link
            >
            <router-link to="/withdraw/coin"
              ><button class="active">Withdraw Coin</button></router-link
            >
          </div>
        </div>
        <!-- top section end -->
        <!-- center section start -->
        <div class="container">
          <div v-if="!showTable" class="vertical-center" align="center">
            <div class="row" align="center">
              <label class="col-12">ผู้ใช้งานต้องลงทะเบียน Wallet ก่อน</label>
              <label class="col-12"
                >จึงจะสามารถถอนเหรียญไปยัง Address ปลายทางได้ aaaaaa</label
              >
            </div>
            <div class="last-btn">
              <button @click="showWithdrawModal = true" class="thai-font">
                ยืนยันการถอนเงิน
              </button>
            </div>
          </div>
          <coinsListTable v-else></coinsListTable>
        </div>
        <!-- center section start -->
        <!-- bottom section start -->

        <!-- bottom section end -->
      </div>
    </div>
    <div class="right-info thai-font">
      <p>คำถามที่พบบ่อย</p>
      <ul>
        <li>วิธีการฝากเงินผ่านระบบทำอย่างไร?</li>
        <li>วิธีการฝากเงินผ่านระบบทำอย่างไร?</li>
        <li>วิธีการฝากเงินผ่านระบบทำอย่างไร?</li>
        <li>วิธีการฝากเงินผ่านระบบทำอย่างไร?</li>
        <li>วิธีการฝากเงินผ่านระบบทำอย่างไร?</li>
        <li>วิธีการฝากเงินผ่านระบบทำอย่างไร?</li>
      </ul>
    </div>

    <withdrawCoin
      v-if="showWithdrawModal"
      @showOTPModel="showWithdrawOTPModal = true"
      @closeModel="showWithdrawModal = false"
    ></withdrawCoin>
    <OtpModel
      v-if="showWithdrawOTPModal"
      @onOTPSubmitted="onOTPSubmitted()"
      @closeModel="showWithdrawOTPModal = false"
    ></OtpModel>
    <QrSuccessModal @onCloseSuccessModel="showTable = true"></QrSuccessModal>
  </div>
</template>
<script>
import withdrawCoin from "@/components/Modal/withdrawCoin.vue";
import OtpModel from "@/components/Modal/OtpModel.vue";
import QrSuccessModal from "./components/QrSuccessModal.vue";
import coinsListTable from "./components/coinsListTable.vue";
export default {
  components: {
    withdrawCoin,
    OtpModel,
    QrSuccessModal,
    coinsListTable,
  },
  data() {
    return {
      showWithdrawModal: false,
      showWithdrawOTPModal: false,
      showQrSuccessModal: false,
      showTable: false,
    };
  },
  methods: {
    onOTPSubmitted() {
      this.showWithdrawModal = false;
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
.container {
  position: relative;
  min-height: 400px;

  .vertical-center {
    margin: 0;
    position: absolute;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
  }
}
.last-btn {
  text-align: center;
  justify-content: center;
  button {
    height: 36px;
    width: 132px !important;
    color: #0a0d10;
    background-color: #f38220;
    border-radius: 4px;
    &:hover {
      background-color: #f28e38;
    }
  }
}

.main-account-container {
  background-color: #192126;
  border-radius: 8px;
  min-height: 445px;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  .dcc-head {
    button {
      display: inline-block;
      font-size: 16px;
      line-height: 19px;

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
      width: 375px;
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
        span {
          position: absolute;
          right: 45px;
        }
        span.red {
          color: #de2d40;
        }
        span.yellow {
          color: #f8c417;
        }
      }
      .options {
        position: absolute;
        top: 45px;
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
            span.t-red {
              color: #de2d40;
              position: absolute;
              right: 20px;
            }
            span.t-yellow {
              color: #f8c417;
              position: absolute;
              right: 20px;
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
      position: relative;
      input {
        background-color: #222b2f;
        color: #d6dde1;
        border-radius: 4px;
        height: 40px;
        padding: 0 40px 0 8px;
        text-transform: capitalize;
        &::placeholder {
          color: #566a76;
        }
      }
      span {
        color: #9bacb6;
        margin-left: -30px;
      }
      .coin-image {
        position: absolute;
        left: 50px;
        top: 7.5px;
        pointer-events: none;
        img {
          width: 23px;
        }
      }
    }
    .info {
      color: #de2d40;
      p {
        margin: 0;
      }
    }
  }
}
.right-info {
  position: absolute;
  top: 100px;
  color: #677f8e;
  ul {
    list-style: disc;
    li {
      margin-bottom: 8px;
      cursor: pointer;
    }
  }
}
@media (max-width: 640px) {
  .main-account-container {
    width: auto;
    margin-left: 10px;
    margin-right: 10px;
    padding-bottom: 20px;
    .center-section {
      padding: 0;
    }
    .input-container {
      input {
        width: 190px;
      }
    }
  }
}
@media (min-width: 640px) {
  .main-account-container {
    width: 616px;
    padding-bottom: 0;
    .center-section {
      padding: 0 1rem;
    }

    .input-container {
      input {
        width: 240px;
      }
    }
  }
}

@media (min-width: 100px) {
  .right-info {
    display: none;
  }
}
@media (min-width: 1024px) {
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
</style>
<style scoped>
.sec {
  margin-top: 16px;
}
.heading {
  margin-top: 32px;
  margin-bottom: 20px;
}
.d-info {
  background: #28363e;
  border-radius: 4px;
  height: 69px;
  display: flex;
  justify-content: space-between;
  color: #9bacb6;
  padding: 13px 10px 12px;
  font-size: 14px;
  flex-grow: 1;
  margin-left: 7px;
}
.d-info > div {
  width: 235px;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  position: relative;
  color: #9bacb6;
  font-weight: 400;
  font-size: 14px;
}

input[type="radio"]:after {
  width: 15px;
  height: 15px;
  border-radius: 15px;
  top: 26px;
  right: 2px;
  position: relative;
  background-color: #222b2f;
  content: "";
  display: inline-block;
  visibility: visible;
  border: 3px solid #38454d;
}

input[type="radio"]:checked:after {
  width: 15px;
  height: 15px;
  border-radius: 15px;
  position: relative;
  background-color: #d6dde1;
  content: "";
  display: inline-block;
  visibility: visible;
  border: 3px solid #f38220;
}
.link {
  width: 60px;
  color: #f38220;
  margin-top: 9px;
}
.iner-list {
  margin: 32px 0px;
  list-style: inherit;
  padding: 0px;
  list-style-position: inside;
}
</style>
