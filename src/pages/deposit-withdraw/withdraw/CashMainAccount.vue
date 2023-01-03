r
<template>
  <div>
    <div class="cash-main-account-container">
      <div class="container-fluid">
        <!-- top section start -->
        <div class="row dcc-head">
          <div class="col-12">
            <router-link to="/withdraw/cash"
              ><button class="active">Withdraw Cash</button></router-link
            >
            <router-link to="/withdraw/coin"
              ><button class="not-active">Withdraw Coin</button></router-link
            >
          </div>
        </div>
        <!-- top section end -->
        <!-- center section start -->
        <div class="row center-section">
          <div class="col-12">
            <p class="heading">กรุณาเลือกบัญชีหลักที่ท่านต้องการรับเงิน</p>
            <div class="d-flex">
              <input @click="radio1 = !radio1" type="radio" :checked="radio1" />
              <div class="d-info">
                <span>บัญชีธนาคารที่รับเงิน</span>
                <div>
                  <span>นายวาเลน ทองคำ</span>
                  <span
                    >ธนาคารกสิกรไทย &nbsp;&nbsp;&nbsp;&nbsp; |&nbsp;
                    111-1-1111-1</span
                  >
                </div>
                <span class="link">บัญชีหลัก</span>
              </div>
            </div>
            <div class="d-flex sec">
              <input @click="radio2 = !radio2" type="radio" :checked="radio2" />
              <div class="d-info">
                <span>บัญชีธนาคารที่รับเงิน</span>
                <div>
                  <span>นายวาเลน ทองคำ</span>
                  <span
                    >ธนาคารไทยพาณิชย์&nbsp;&nbsp;&nbsp;|&nbsp;
                    222-2-2222-2</span
                  >
                </div>
                <span class="link"></span>
              </div>
            </div>
            <ul class="iner-list thai-font">
              <li>เมื่อมีการถอนเงินบริษัทจะโอนเงินเข้าบัญชีหลักที่ท่านเลือก</li>
            </ul>

            <div class="bottom-section thai-font">
              <div class="last-btn">
                <button
                  @click="$bvModal.show('otp-success-modal')"
                  class="thai-font"
                >
                  บันทึก
                </button>
              </div>
            </div>
          </div>
        </div>
        <!-- center section start -->
        <!-- bottom section start -->

        <!-- bottom section end -->
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
    </div>
    <otp-model :otp="false"></otp-model>
    <RightInfo />
  </div>
</template>
<script>
import OtpModel from "@/components/Modal/WIthdrawCashOtpModel.vue";
import RightInfo from "../../../components/deposit-withdraw/RightInfo.vue";
export default {
  components: {
    OtpModel,
    RightInfo,
  },
  data() {
    return {
      radio1: false,
      radio2: false,
    };
  },
  methods: {},
};
</script>
<style lang="scss">
.cash-main-account-container {
  border-radius: 8px;
  min-height: 445px;
  position: relative;
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

  .bottom-section {
    input {
      background: #222b2f;
      border: 1px solid #3c515d;
      border-radius: 2px;
      height: 17px;
      width: 17px;
      margin-top: -0.1px;
    }
    input:checked {
      background-color: #f38220;
      border: 1px solid #3c515d;
    }
    span {
      margin-left: 10px;
    }
    .last-btn {
      text-align: center;
      margin-top: 12px;
      button {
        color: #0a0d10;
        background-color: #f38220;
        border-radius: 4px;
        height: 36px;
        width: 152px;
        &:hover {
          background-color: #f28e38;
        }
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
  .cash-main-account-container {
    width: auto;
    height: auto;
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
  .cash-main-account-container {
    width: 616px;
    height: 330px;
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
    right: 0;
    margin-right: -255px;
    top: 0;
  }
  .cash-main-account-container {
    transform: translateX(-50%);
  }
}
@media (max-width: 848px) {
  .cash-main-account-container {
    background-color: none;
    // margin-left: 40px;
    width: 100%;
    .dcc-head {
      background-color: #192126;
    }
    .bottom-section {
      margin: 0 40px;
    }
    .bcb {
      margin: 0 20px;
    }
    .center-section {
      margin: 0;
    }
  }
}
@media (min-width: 848px) {
  .cash-main-account-container {
    background-color: #192126;
    margin-left: 50%;
    margin-top: 50px;
    transform: translateX(-70%);
    .dcc-head {
      border-bottom: 1px solid #28363e;
    }
    .bottom-section {
      margin: 0 24px;
    }
    .bcb {
      margin: 0 -4px;
    }
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
  top: 27px;
  right: 1px;
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
.last-btn button {
  height: 44px !important;
  width: 100% !important;
  line-height: 44px;
}
</style>
