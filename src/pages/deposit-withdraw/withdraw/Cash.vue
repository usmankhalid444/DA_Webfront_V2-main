<template>
  <div>
    <div
      class="deposite-cash-container"
      :class="currentSettings === 'qr' ? 'qr-h' : 'bc-h'"
    >
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
        <div class="row mt-3 center-section">
          <div class="col-12">
            <div class="row" v-if="currentSettings === 'qr'">
              <div class="col-5 col-md-4 my-auto thai-font l-24">
                จำนวนเงินที่ต้องการถอน
              </div>
              <div class="col-7 col-md-8 input-container">
                <input type="number" placeholder="0" />
                <span>THB</span>
              </div>
            </div>
            <div class="row">
              <div class="col-7 col-md-8 offset-md-4 input-container">
                <p class="input_label">
                  จำนวนเงินที่ถอนได้&nbsp; 20,000.00 THB &nbsp;&nbsp;<u
                    >ถอนทั้งหมด</u
                  >
                </p>
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-5 col-md-4 my-auto thai-font l-24">
                บัญชีธนาคารที่รับเงิน
              </div>
              <div class="col-7 col-md-8 l-24">
                <div class="d-info">
                  <span>นายวาเลน ทองคำ</span>
                  <div>
                    <span>ธนาคารกสิกรไทย &nbsp;&nbsp;&nbsp;|</span>
                    <span>111-1-1111-1 </span>
                    <span> เปลี่ยน</span>
                  </div>
                </div>
                <!-- <div
                    class="select-container"
                    tabindex="0"
                    @click="open_dropdown = !open_dropdown"
                    @blur="open_dropdown = false"
                  >
                    <span class="text">{{ selected_option }}</span>
                    <span
                      class="icon"
                      :class="open_dropdown ? 'rotate-sc-icon' : ''"
                      ><svg
                        width="12"
                        height="8"
                        viewBox="0 0 12 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.41 0.589966L6 5.16997L10.59 0.589966L12 1.99997L6 7.99997L0 1.99997L1.41 0.589966Z"
                          fill="#677F8E"
                        />
                      </svg>
                    </span>
                    <div
                      class="options"
                      :class="open_dropdown ? 'show' : 'hidden'"
                    >
                      <ul>
                        <li
                          @click="
                            (selected_option = 'QR Code (Prompt Pay)'),
                              $bvModal.show('deposit-qr-modal'),
                              (currentSettings = 'qr')
                          "
                        >
                          QR Code (Prompt Pay)
                        </li>
                        <li
                          @click="
                            (selected_option = 'Bank Transfer'),
                              (currentSettings = 'bank_transfer')
                          "
                        >
                          Bank Transfer
                        </li>
                      </ul>
                    </div>
                  </div> -->
              </div>
            </div>
            <!-- <div class="row mt-4" v-if="currentSettings === 'bank_transfer'">
                <div class="col-5 col-md-4">ชื่อบัญชี</div>
                <div class="col-7 col-md-8 lr">
                  บริษัท ฟินันเซีย ดิจิทัล แอสเซท จำกัด <span>คัดลอก</span>
                </div>
                <div class="col-5 col-md-4 mt-3">ธนาคาร</div>
                <div class="col-7 col-md-8 mt-3">ธนาคารกรุงเทพ - BBL</div>
              </div> -->
            <div class="row mt-4" v-if="currentSettings === 'qr'">
              <div class="col-12 info thai-font">
                <p>สรุปรายการถอน</p>
                <div class="row mt-3">
                  <div class="col-5 col-md-4 my-auto thai-font del-font">
                    จำนวนเงินที่ต้องการถอน
                  </div>
                  <div class="col-7 col-md-8 font-robot-flex l-24">
                    1,000,000.00 THB
                  </div>
                  <div class="col-5 col-md-4 my-auto thai-font del-font">
                    ค่าธรรมเนียมการถอน
                  </div>
                  <div class="col-7 col-md-8 font-robot-flex l-24">
                    20.00 THB
                  </div>
                  <div class="col-5 col-md-4 my-auto thai-font del-font">
                    จำนวนเงินที่ได้รับ
                  </div>
                  <div class="col-7 col-md-8 font-robot-flex l-24">
                    999,980.00 THB
                  </div>
                  <!-- <ul>
                    <li>
                      โอนเงินด้วยบัญชีที่ให้ไว้กับบริษัทเท่านั้น (สูงสุด 2 บัญชี)
                    </li>
                    <li>โอนเงินได้ตลอด 24 ชั่วโมง (ขึ้นอยู่กับธนาคารต้นทาง)</li>
                    <li>QR Code ใช้งานได้ไม่เกิน 24 ชั่วโมง</li>
                  </ul> -->
                </div>
              </div>
            </div>
            <div v-if="currentSettings === 'bank_transfer'">
              <div class="bcb"></div>
              <div class="row">
                <div class="col-12 bc-info thai-font">
                  <p>ยอมรับเงื่อนไขการฝากเงิน</p>
                  <ul class="">
                    <li>
                      โอนเงินด้วยบัญชีที่ให้ไว้กับบริษัทเท่านั้น (สูงสุด 2
                      บัญชี)
                    </li>
                    <li>โอนเงินได้ตลอด 24 ชั่วโมง (ขึ้นอยู่กับธนาคารต้นทาง)</li>
                  </ul>
                </div>
              </div>
              <div class="row mt-2">
                <div class="col-12 bc-info thai-font">
                  <p>ยอมรับเงื่อนไขการฝากเงิน</p>
                  <ul class="number">
                    <li>
                      โอนเงินด้วยบัญชีที่ให้ไว้กับบริษัทเท่านั้น (สูงสุด 2
                      บัญชี)
                    </li>
                    <li>โอนเงินได้ตลอด 24 ชั่วโมง (ขึ้นอยู่กับธนาคารต้นทาง)</li>
                    <li>QR Code ใช้งานได้ไม่เกิน 24 ชั่วโมง</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- center section start -->
        <!-- bottom section start -->
        <div
          class="mx-3 pt-1 bottom-section thai-font mt-3 b-ins"
          v-if="currentSettings === 'qr'"
        >
          <p>หมายเหตุ</p>
          <ul>
            <li>จะได้รับเงินภายใน 1 นาที ถึง 24 ชั่วโมง</li>
            <li>ถอนเงินได้สูงสุดไม่เกินวันละ 2,000,000 บาท</li>
          </ul>
          <!-- <label>
              <input class="form-check-input" type="checkbox" />
              <span>ยอมรับเงื่อนไขทั้งหมด</span>
            </label> -->
          <div class="last-btn">
            <button
              @click="$bvModal.show('otp-success-modal')"
              class="thai-font"
            >
              ยืนยันการถอนเงิน
            </button>
          </div>
        </div>
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

    <otp-model :otp="true"></otp-model>
  </div>
</template>
<script>
import OtpModel from "@/components/Modal/WIthdrawCashOtpModel.vue";
export default {
  components: {
    OtpModel,
  },
  data() {
    return {
      open_dropdown: false,
      selected_option: "QR Code (Prompt Pay)",
      currentSettings: "qr",
      showWithdrawOTPModal: false,
    };
  },
  methods: {
    openOTPModel() {
      this.showWithdrawOTPModal = true;
    },
  },
};
</script>
<style lang="scss">
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

  .bottom-section {
    border-top: 1px solid #28363e;
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
      margin-top: 35px;
      button {
        color: #0a0d10;
        background-color: #f38220;
        border-radius: 4px;
        height: 36px;
        width: 132px;
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
  border-radius: 4px;
  font-family: "Sarabun";
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
.l-24 {
  line-height: 24px;
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
