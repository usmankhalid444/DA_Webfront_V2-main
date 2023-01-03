<template>
  <div>
    <div
      class="deposite-cash-container"
      :class="currentSettings === 'qr' ? 'qr-h' : 'bc-h'"
    >
      <!-- top section start -->
      <div class="dcc-head">
        <router-link to="/deposit/cash"
          ><button class="active">Deposit Cash</button></router-link
        >
        <router-link to="/deposit/coin"
          ><button class="not-active">Deposit Coin</button></router-link
        >
      </div>
      <!-- top section end -->
      <!-- center section start -->
      <div class="row mt-3 center-section">
        <div class="col-12 p-lg-0">
          <div class="row margin-l-24">
            <div class="col-5 col-md-4 my-auto thai-font p-0 l-24">
              เลือกช่องทางการฝาก
            </div>
            <div class="col-7 col-md-8">
              <div
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
                <div class="options" :class="open_dropdown ? 'show' : 'hidden'">
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
              </div>
            </div>
          </div>
          <div class="row mt-3 margin-l-24" v-if="currentSettings === 'qr'">
            <div class="col-5 col-md-4 my-auto thai-font p-0 l-24">
              จำนวนเงินที่ต้องการฝาก
            </div>
            <div class="col-7 col-md-8 input-container">
              <input type="number" placeholder="0.00" />
              <span>THB</span>
            </div>
          </div>
          <div
            class="row mt-4 margin-l-24"
            v-if="currentSettings === 'bank_transfer'"
          >
            <div class="col-5 col-md-4 p-0">ชื่อบัญชี</div>
            <div class="col-7 col-md-8 lr">
              บริษัท ฟินันเซีย ดิจิทัล แอสเซท จำกัด <span>คัดลอก</span>
            </div>
            <div class="col-5 col-md-4 p-0 mt-3">ธนาคาร</div>
            <div class="col-7 col-md-8 mt-3">ธนาคารกรุงเทพ - BBL</div>
          </div>
          <div class="row mt-4 margin-l-24" v-if="currentSettings === 'qr'">
            <div class="col-12 info thai-font p-0">
              <p>ยอมรับเงื่อนไขการฝากเงิน</p>
              <ul class="p-0 margin-l-24 mt-1">
                <li>
                  โอนเงินด้วยบัญชีที่ให้ไว้กับบริษัทเท่านั้น (สูงสุด 2 บัญชี)
                </li>
                <li>โอนเงินได้ตลอด 24 ชั่วโมง (ขึ้นอยู่กับธนาคารต้นทาง)</li>
                <li>QR Code ใช้งานได้ไม่เกิน 24 ชั่วโมง</li>
              </ul>
            </div>
          </div>
          <div v-if="currentSettings === 'bank_transfer'">
            <div class="bcb"></div>
            <div class="row p-0 margin-l-24">
              <div class="col-12 bc-info thai-font p-0">
                <p>ยอมรับเงื่อนไขการฝากเงิน</p>
                <ul class="">
                  <li>
                    โอนเงินด้วยบัญชีที่ให้ไว้กับบริษัทเท่านั้น (สูงสุด 2 บัญชี)
                  </li>
                  <li>โอนเงินได้ตลอด 24 ชั่วโมง (ขึ้นอยู่กับธนาคารต้นทาง)</li>
                </ul>
              </div>
            </div>
            <div class="row mt-2 p-0 margin-l-24">
              <div class="col-12 bc-info thai-font p-0">
                <p>วิธีโอนเงิน</p>
                <ul class="number">
                  <li>
                    ไปยัง Mobile Banking หรือ
                    โอนเงินผ่านธนาคารด้วยบัญชีที่ท่านให้ไว้กับบริษัทเท่านั้น
                    (สูงสุด 2 บัญชี)
                  </li>
                  <li>เข้าสู่เมนู “จ่ายบิล” จาก Mobile Banking ของท่าน</li>
                  <li>ค้นหา “ฟินันเซีย ดิจิทัล แอสเซท”</li>
                  <li>กรอกรหัสอ้างอิง 1 (Ref.1) ด้วย xxxxxx</li>
                  <li>กรอกรหัสอ้างอิง 2 (Ref.2) ด้วย xxxxxx</li>
                  <li>ระบุจำนวนเงิน</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- center section start -->
      <!-- bottom section start -->
      <div
        class="pt-4 bottom-section thai-font"
        v-if="currentSettings === 'qr'"
      >
        <label>
          <input class="form-check-input" type="checkbox" />
          <span>ยอมรับเงื่อนไขทั้งหมด</span>
        </label>
        <div class="last-btn">
          <button @click="$bvModal.show('deposit-qr-modal')" class="thai-font">
            ยืนยันการฝากเงิน
          </button>
        </div>
      </div>
      <!-- bottom section end -->
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
    <RightInfo />
    <DepositCashModal />
  </div>
</template>
<script>
import DepositCashModal from "./components/DepositCashModal";
import RightInfo from "../../../components/deposit-withdraw/RightInfo";
export default {
  components: { DepositCashModal, RightInfo },
  data() {
    return {
      open_dropdown: false,
      selected_option: "QR Code (Prompt Pay)",
      currentSettings: "qr",
    };
  },
};
</script>
<style lang="scss">
.deposite-cash-container {
  border-radius: 8px;
  position: relative;
  .margin-l-24 {
    margin-left: 24px;
  }
  .dcc-head {
    button {
      display: inline-block;
      font-size: 16px;
      line-height: 19px;
      padding: 15px 0;
      margin-left: 24px;
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
    .l-24 {
      line-height: 24px;
    }
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
      font-family: "Sarabun";
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 24px;
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
    input:focus {
      box-shadow: none;
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
@media (min-width: 1024px) {
  .right-info {
    display: block;
    right: 0;
    margin-right: -255px;
    top: 0;
  }
  .deposite-cash-container {
    transform: translateX(-50%);
  }
}
@media (max-width: 848px) {
  .deposite-cash-container {
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
  }
}
@media (min-width: 848px) {
  .deposite-cash-container {
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
