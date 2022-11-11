<template>
  <div class="fda1212982022-MarKetHeader">
    <section class="MarKetHeader11289292022">
      <div class="tabs">
        <div class="tab-content">
          <b-container fluid class="pLR-24 bg-MarKetHeader">
            <div class="page-MarKetHeader">
              <b-navbar>
                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
                <b-collapse id="nav-collapse" is-nav>
                  <b-navbar-nav>
                    <div class="mx-auto">
                      <div class="menu-item">
                        <b-link
                          class="colormiddle"
                          :to="{ path: '/uc/withdraw/cash' }"
                          :active="$route.name == 'WithdrawCashWallet'"
                          >Withdraw Cash</b-link
                        >
                      </div>
                      <div class="menu-item">
                        <b-link
                          class="colormiddle"
                          :to="{ path: '/uc/withdraw/coin' }"
                          :active="$route.name == 'WithdrawCoinWallet'"
                          >Withdraw Coin</b-link
                        >
                      </div>
                    </div>
                  </b-navbar-nav>
                </b-collapse>
              </b-navbar>
            </div>
          </b-container>
          <router-view></router-view>
        </div>

        <!-- other heading -->
        <div class="otherHeading">
          <div class="headline2">
            <p>เงื่อนไขการฝากเงิน</p>
            <div class="head1">
              <span class="dot"></span>
              <p>วิธีการฝากเงินผ่านระบบทำอย่างไร?</p>
            </div>

            <div class="head1">
              <span class="dot"></span>
              <p>วิธีการฝากเงินผ่านระบบทำอย่างไร?</p>
            </div>

            <div class="head1">
              <span class="dot"></span>
              <p>วิธีการฝากเงินผ่านระบบทำอย่างไร?</p>
            </div>
            <div class="head1">
              <span class="dot"></span>
              <p>วิธีการฝากเงินผ่านระบบทำอย่างไร?</p>
            </div>

            <div class="head1">
              <span class="dot"></span>
              <p>วิธีการฝากเงินผ่านระบบทำอย่างไร?</p>
            </div>

            <div class="head1">
              <span class="dot"></span>
              <p>วิธีการฝากเงินผ่านระบบทำอย่างไร?</p>
            </div>
          </div>
        </div>
      </div>
      <!-- cash withdraw modal -->

      <modal v-if="showWithdrawOTPModal" @close="showWithdrawOTPModal = false">
      </modal>
      <transition
        v-if="showWithdrawOTPModal"
        @click="showWithdrawOTPModal = false"
        name="modal"
      >
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container">
              <div class="modalHeading">
                <label>ยืนยันการถอนเงิน</label>
              </div>

              <!-- further heading -->

              <div class="modalHeadingWithdraw">
                <label style="color: #9bacb6; font-size: 14px; font-weight: 400"
                  >ระบุ OTP ที่ไดัรับจาก SMS</label
                >
                <label style="color: #9bacb6; font-size: 14px; font-weight: 400"
                  >ที่ถูกส่งไปยังเบอร์ 068-123-1444</label
                >
              </div>

              <!-- OTP INPUT FIELD -->

              <div class="OTPInput">
                <input />
                <input />
                <input />
                <input />
                <input />
                <input />
              </div>

              <!-- buttons -->

              <div class="flexCoinWithdraw">
                <button
                  class="btn1"
                  @click="
                    showWithdrawOTPModal = false;
                    showWithdrawDoneAlert = true;
                  "
                >
                  ยืนยัน
                </button>
                <!-- <button class="btn2">ยกเลิกการฝากเงิน</button> -->
              </div>

              <div class="bottomLine">
                <label>ไม่ได้รับ OTP ?</label>
                <label style="color: #f38220">ส่งอีกครั้ง</label>
              </div>
              <div v-if="copyAlert" class="copyAlert">
                <div class="tickImg">
                  <img src="@/assets/images/wallet/tick.png" />
                </div>

                <label>Copy Address สำเร็จแล้ว</label>
              </div>
            </div>
          </div>
        </div>
      </transition>
      <!-- cash withdraw done modal -->
      <modal
        v-if="showWithdrawDoneAlert"
        @close="showWithdrawDoneAlert = false"
      >
      </modal>
      <transition
        v-if="showWithdrawDoneAlert"
        @click="showWithdrawDoneAlert = false"
        name="modal"
      >
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container">
              <div class="modalHeading">
                <img
                  style="width: 67px; height: 67px"
                  src="@/assets/images/wallet/greenTick.png"
                  alt=""
                />
              </div>

              <!-- further heading -->

              <div class="modalHeadingWithdraw">
                <label style="color: #d6dde1; font-size: 14px; font-weight: 400"
                  >ระบบได้รับคำขอถอนเงินแล้ว</label
                >
                <label style="color: #9bacb6; font-size: 14px; font-weight: 400"
                  >ท่านจะได้รับเงินภายใน 1 นาที ถึง 24 ชั่วโมง</label
                >
                <label style="color: #9bacb6; font-size: 14px; font-weight: 400"
                  >และจะได้รับ อีเมลยืนยัน เมื่อการถอนเงินสำเร็จ</label
                >

                <div style="width: 300px">
                  <hr class="line" />
                </div>
              </div>

              <!-- withdraw amount detail -->

              <div style="margin-top: 10px" class="WithDoneSecondHeading">
                <p
                  style="
                    width: 150px;
                    color: #677f8e;
                    font-size: 14px;
                    font-weight: 400;
                  "
                >
                  จำนวนเงิน
                </p>
                <p style="color: #d6dde1; font-size: 14px; font-weight: 400">
                  1,000,000 THB
                </p>
              </div>

              <div class="WithDoneSecondHeading">
                <p
                  style="
                    width: 150px;
                    color: #677f8e;
                    font-size: 14px;
                    font-weight: 400;
                  "
                >
                  ค่าธรรมเนียม
                </p>
                <p style="color: #d6dde1; font-size: 14px; font-weight: 400">
                  -20 THB
                </p>
              </div>

              <div class="WithDoneSecondHeading">
                <p
                  style="
                    width: 153px;
                    color: #677f8e;
                    font-size: 14px;
                    font-weight: 400;
                  "
                >
                  จำนวนที่ได้รับ
                </p>
                <p style="color: #d6dde1; font-size: 14px; font-weight: 400">
                  999,980 THB
                </p>
              </div>

              <div class="WithDoneSecondHeading">
                <p
                  style="
                    width: 153px;
                    align-self: flex-start;
                    color: #677f8e;
                    font-size: 14px;
                    font-weight: 400;
                  "
                >
                  บัญชีธนาคารที่รับเงิน
                </p>
                <div>
                  <p style="color: #d6dde1; font-size: 14px; font-weight: 400">
                    นายวาเลน ทองคำ
                  </p>
                  <p style="color: #d6dde1; font-size: 14px; font-weight: 400">
                    ธนาคารกรุงไทย
                  </p>
                  <p style="color: #d6dde1; font-size: 14px; font-weight: 400">
                    098-2-34323-22
                  </p>
                </div>
              </div>

              <!-- OTP INPUT FIELD -->

              <!-- buttons -->

              <div class="flexCoinWithdrawDone">
                <button class="btn1" @click="showWithdrawDoneAlert = false">
                  กลับหน้าหลัก
                </button>
                <!-- <button class="btn2">ยกเลิกการฝากเงิน</button> -->
              </div>
            </div>
          </div>
        </div>
      </transition>

      <!-- coin deposit modal -->

      <modal v-if="showWalletModal" @close="showWalletModal = false"> </modal>
      <transition
        v-if="showWalletModal"
        @click="showWalletModal = false"
        name="modal"
      >
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div style="max-width: 600px" class="modal-container">
              <div class="modalHeading">
                <label>ลงทะเบียน Wallet ใหม่</label>
              </div>

              <!-- input field -->

              <div class="withDrawCoin">
                <label style="font-size: 14px">ตั้งชื่อ Wallet</label>
                <div class="depositCoinInfo">
                  <input type="text" placeholder="เลือกเหรียญ" />
                </div>
              </div>

              <div class="withDrawCoin">
                <label style="font-size: 14px">ใช้สำหรับเหรียญ</label>
                <div class="depositCoinInfo">
                  <img
                    v-if="depositCoinType !== ''"
                    class="axsImg"
                    src="@/assets/images/wallet/eth.png"
                    alt=""
                  />
                  <input
                    v-model="depositCoinType"
                    type="text"
                    placeholder="เลือกเหรียญ"
                  />
                  <img
                    class="searchImg"
                    src="@/assets/images/wallet/search.png"
                    alt=""
                  />
                </div>
              </div>

              <div class="withDrawCoin">
                <label
                  style="font-size: 14px; width: 90px; align-self: flex-start"
                  >Network ที่ใช้</label
                >
                <div
                  style="
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                  "
                >
                  <div style="margin-left: 11px" class="depositCoinInfo">
                    <input type="text" placeholder="เลือกเหรียญ" />
                    <img
                      style="width: 12px; height: 8px"
                      class="searchImg"
                      src="@/assets/images/wallet/dropIcon.png"
                      alt=""
                    />
                  </div>
                  <label
                    style="
                      color: red;
                      width: 300px;
                      font-size: 14px;
                      margin-left: 70px;
                      margin-top: 20px;
                    "
                    >กรุณาเลือก Network ของผู้รับ Address ให้ตรงกับ Network
                    ของเหรียญที่คุณเลือก
                    มิเช่นนั้นทรัพย์สินของคุณอาจสูญหายได้</label
                  >
                </div>
              </div>

              <!-- address -->

              <div class="withDrawCoin">
                <label
                  style="font-size: 14px; width: 90px; align-self: flex-start"
                  >Address</label
                >
                <div
                  style="
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                  "
                >
                  <div
                    style="margin-left: 70px; width: 350px"
                    class="depositCoinInfo"
                  >
                    <input type="text" placeholder="เลือกเหรียญ" />
                    <img
                      style="width: 17px; height: 17px"
                      class="searchImg"
                      src="@/assets/images/wallet/scanner.png"
                      alt=""
                    />
                  </div>
                  <label
                    style="
                      color: red;
                      width: 300px;
                      font-size: 14px;
                      margin-left: 30px;
                      margin-top: 20px;
                    "
                    >กรุณาเลือก Network ของผู้รับ Address ให้ตรงกับ Network
                    ของเหรียญที่คุณเลือก
                    มิเช่นนั้นทรัพย์สินของคุณอาจสูญหายได้</label
                  >
                </div>
              </div>

              <!-- memo -->

              <div class="withDrawCoin">
                <label style="font-size: 14px">Memo</label>
                <div class="depositCoinInfo">
                  <input type="text" placeholder="(Optional)" />
                </div>
              </div>

              <!-- buttons -->

              <div class="flexCoinWithdrawDone">
                <button
                  style="
                    background-color: #f38220;
                    width: 120px;
                    color: #0a0d10;
                  "
                  class="btn1"
                  @click="
                    showWalletModal = false;
                    showWithdrawCoinOTPModal = true;
                  "
                >
                  บันทึก
                </button>
                <!-- <button class="btn2">ยกเลิกการฝากเงิน</button> -->
              </div>
            </div>
          </div>
        </div>
      </transition>

      <!-- coin withdraw otp -->
      <modal
        v-if="showWithdrawCoinOTPModal"
        @close="showWithdrawCoinOTPModal = false"
      >
      </modal>
      <transition
        v-if="showWithdrawCoinOTPModal"
        @click="showWithdrawCoinOTPModal = false"
        name="modal"
      >
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container">
              <div class="modalHeading">
                <label>ยืนยันการถอนเงิน</label>
              </div>

              <!-- further heading -->

              <div class="modalHeadingWithdraw">
                <label style="color: #9bacb6; font-size: 14px; font-weight: 400"
                  >ระบุ OTP ที่ไดัรับจาก SMS</label
                >
                <label style="color: #9bacb6; font-size: 14px; font-weight: 400"
                  >ที่ถูกส่งไปยังเบอร์ 068-123-1444</label
                >
              </div>

              <!-- OTP INPUT FIELD -->

              <div class="OTPInput">
                <input />
                <input />
                <input />
                <input />
                <input />
                <input />
              </div>

              <!-- buttons -->

              <div class="flexCoinWithdraw">
                <button
                  class="btn1"
                  @click="
                    showWithdrawCoinOTPModal = false;
                    showWithdrawCoinDoneModal = true;
                  "
                >
                  ยืนยัน
                </button>
                <!-- <button class="btn2">ยกเลิกการฝากเงิน</button> -->
              </div>

              <div class="bottomLine">
                <label>ไม่ได้รับ OTP ?</label>
                <label style="color: #f38220">ส่งอีกครั้ง</label>
              </div>
            </div>
          </div>
        </div>
      </transition>

      <!-- coin done modal -->
      <modal
        v-if="showWithdrawCoinDoneModal"
        @close="showWithdrawCoinDoneModal = false"
      >
      </modal>
      <transition
        v-if="showWithdrawCoinDoneModal"
        @click="showWithdrawCoinDoneModal = false"
        name="modal"
      >
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container">
              <div class="modalHeading">
                <img
                  style="width: 67px; height: 67px"
                  src="@/assets/images/wallet/greenTick.png"
                  alt=""
                />
              </div>

              <!-- further heading -->

              <div class="modalHeadingWithdraw">
                <label style="color: #d6dde1; font-size: 14px; font-weight: 400"
                  >ระบบได้รับคำขอถอนเหรียญ</label
                >
                <label style="color: #9bacb6; font-size: 14px; font-weight: 400"
                  >ท่านจะได้รับเงินภายใน 1 นาที ถึง 24 ชั่วโมง</label
                >
                <label style="color: #9bacb6; font-size: 14px; font-weight: 400"
                  >และจะได้รับ อีเมลยืนยัน เมื่อการถอนเงินสำเร็จ</label
                >

                <div style="width: 300px">
                  <hr class="line" />
                </div>
              </div>

              <!-- withdraw amount detail -->

              <!-- OTP INPUT FIELD -->

              <!-- buttons -->

              <div style="margin-top: 20px" class="flexCoinWithdrawDone">
                <button
                  style="background-color: #f38220; color: #0a0d10"
                  class="btn1"
                  @click="showWithdrawCoinDoneModal = false"
                >
                  ตรวจสอบสถานะการถอน
                </button>
                <!-- <button class="btn2">ยกเลิกการฝากเงิน</button> -->
              </div>

              <div style="margin-top: 20px" class="flexCoinWithdrawDone">
                <button
                  style="width: 170px"
                  class="btn1"
                  @click="showWithdrawCoinDoneModal = false"
                >
                  กลับหน้าหลัก
                </button>
                <!-- <button class="btn2">ยกเลิกการฝากเงิน</button> -->
              </div>
            </div>
          </div>
        </div>
      </transition>
    </section>
  </div>
</template>

<script>
import { bus } from "@/main";
export default {
  data() {
    return {
      discount: "",
      showModal: false,
      showCoinDepositModal: false,
      copyAlert: false,
      showWithdrawOTPModal: false,
      showWithdrawCoinOTPModal: false,
      showWithdrawDoneAlert: false,
      showWalletModal: false,
      showWithdrawCoinDoneModal: false,
      depositCoinType: "",
      selectedMoneyOption: "",
      axsAddress: "d3o30493jflkei309eioldkeoi20293kdoe939309eioldkeoi2",
      network: "เลือก Network",
      withdrawCoinCount: "first",
      showDropDown: false,
    };
  },
  created() {
    bus.$on("coin_withdraw_otp", this.showCashOTP);
    bus.$on("coin_withdraw_wallet", this.showCoinWallet);
    // bus.$on("show_coin_modal", this.showCoinDepositAlert);
  },
  methods: {
    showCashOTP() {
      this.showWithdrawOTPModal = true;
    },
    showCoinWallet() {
      this.showWalletModal = true;
    },
  },
};
</script>

<style lang="scss" scoped>
// new modal
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  // width: 100%;
  max-width: 400px;
  margin: 0px auto;
  // padding: 20px 30px;
  background-color: #141b1f;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;

  border-radius: 16px;

  padding: 25px;

  h1 {
    color: #fff;
    font-size: 32px;
    font-weight: 900;
    margin-bottom: 15px;
  }

  p {
    color: #666;
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 15px;
  }
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

// new modal end
// tabs design

.tabs {
  width: 616px;
  height: 458px;
  background-color: #192126;
  margin: 0 auto;
  margin-top: 40px;
  border-radius: 8px;
  display: flex;
  // box-shadow: 0 3px 5px 5px rgb(0, 0, 0, 0.05);
}

.tabs_header {
  list-style: none;
  padding: 0;
  display: flex;
}

/* .tabs_header li.active,
.tabs_header li:hover { */
/* border-width: 2px; */
/* background-color: #444; */
/* border-color: orange; */
/* } */

.tabs_header li {
  width: 140px;
  border-width: 1px;
  text-align: center;
  padding: 10px 20px;
  margin-right: 10px;
  margin-top: 10px;
  color: #677f8e;
  font-size: 14px;
  /* font-family: 'Roboto Flex'; */
  border-radius: 5px;

  cursor: pointer;
  transition: 0.4s all ease-out;
}

.tabs_header li.selected {
  /* background-color: #0984e3; */
  color: white;
  border-color: #f38220;
}

.tab-content {
  min-height: 400px;
  padding: 20px;
  /* font-size: 16px; */
  border-radius: 5px;
  /* box-shadow: 0 3px 5px 5px rgb(0, 0, 0,0.05); */
}
// new styling

.MarKetHeader11289292022 {
  .bg-MarKetHeader {
    background-color: var(--ui-layer-0p5);
  }
  .pLR-24 {
    padding-left: 24px !important;
    padding-right: 24px !important;
  }
  .page-MarKetHeader {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
  }

  .mx-auto {
    display: flex;
    gap: 0px !important;
  }
  .colormiddle {
    text-decoration: none;
    color: #677f8e !important;
  }
  .menu-item {
    margin-right: 32px !important;
    position: relative !important;
    font-weight: 400 !important;
    font-size: 16px !important;
    line-height: 19px !important;
  }
  .mx-auto .colormiddle {
    padding: 22px 0px;
    text-align: center;
    height: 64px;
    border-bottom: 2px solid transparent;
    display: flex;
    transition: 0.4s;
    cursor: pointer !important;
  }
  .mx-auto .colormiddle.active,
  .mx-auto .colormiddle:hover {
    border-bottom-color: #f38220 !important;
    text-align: center;
    color: var(--primary) !important;
  }

  .FDASearch {
  }
  .field-container {
    position: relative;
    padding: 0;
    margin: 0;
    border: 0;
    width: 219px;
    height: 40px;
  }

  .icons-container {
    position: absolute;
    top: 8px;
    left: 8px;
    width: 35px;
    height: 35px;
    overflow: hidden;
  }

  .icon-search {
  }
  .icon-search:after {
    content: url("@/assets/images/iconArrow/icon-search.png") !important;
  }

  input::placeholder {
    color: var(--sub-2) !important;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
  }

  .field {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: var(--primary);
    border: 0;
    width: 219px;
    height: 40px;
    padding: 8px 40px;
    background-color: var(--ui-layer-0);
    border-radius: 4px;
    box-shadow: 0px 8px 15px rgba(75, 72, 72, 0.1);
    transition: all 0.4s ease;
  }
  .field:focus {
    outline: none;
    box-shadow: 0px 9px 20px rgba(75, 72, 72, 0.3);
  }
}

// new stylesEnd
//withdraw coin styling

.searchBar {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  margin-top: 30px;

  input {
    background-color: #222b2f;
    border-style: none;
  }
}

.withDrawCoin {
  display: flex;
  align-items: center;
  margin-top: 20px;
  label {
    color: #d6dde1;
    // font-family: "Sarabun";
    font-size: 12px;
    width: 120px;
    font-weight: 400;
  }
}

.depositCoinInfo {
  display: flex;

  // align-items: center;
  justify-content: space-between;
  background-color: #222b2f;
  width: 240px;
  border-radius: 4px;
  input {
    background-color: #222b2f;
    height: 40px;
    outline: none;
    padding: 12px;
    max-width: 240px;
    border: 3px solid #222b2f;
    color: #d6dde1;
    box-sizing: border-box;
  }
  .searchImg {
    width: 15px;
    height: 15px;

    margin-right: 7px;
  }
  .axsImg {
    width: 16px;
    height: 16px;
    // background-color: red;
    margin-left: 7px;
  }
}

.WithdrawCoinFirst {
  display: flex;
  margin: auto;
  margin-top: 100px;
  flex-direction: column;
  vertical-align: middle;
  align-items: center;
  justify-content: center;

  label {
    color: #9bacb6;
    font-size: 14px;
    font-weight: 400;
  }
}

// withdraw cash styling\\

.flexCoinWithdrawDone {
  display: flex;
  flex-direction: row;
  flex: 1;
  align-items: center;
  justify-content: center;

  margin-top: 40px;
  // justify-content: space-evenly;

  .btn1 {
    background-color: #38454d;
    padding: 0px 16px;
    color: #fff;
    // width: 100px;
    height: 36px;
    cursor: pointer;
    border-radius: 4px;
    border-style: none;
  }
}

.WithDoneSecondHeading {
  display: flex;
  align-items: center;
  gap: 14px;
  // margin-top: 20px;
}

.flexCoinWithdraw {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin-top: 20px;

  .btn1 {
    background-color: #f38220;
    margin-top: 20px;
    padding: 0px 16px;
    color: #0a0d10;
    width: 340px;
    height: 36px;
    cursor: pointer;
    border-radius: 4px;
    border-style: none;
  }
}

.bottomLine {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
  gap: 8px;

  label {
    color: #9bacb6;
    font-size: 14px;
    font-weight: 400;
  }
}

.OTPInput {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  gap: 10px;

  //  background-color: #222b2f;
  // height: 40px;
  // margin-left: 14px;
  // outline: none;
  // padding: 12px;
  // border: 3px solid #222b2f;
  // color: #d6dde1;
  // box-sizing: border-box;

  input {
    width: 44px;
    height: 56px;
    background-color: #222b2f;
    border-radius: 4px;
    color: #fff;
    padding: 12px;
    font-size: 30px;
    border-style: none;
    outline: none;
  }
}

.modalHeadingWithdraw {
  display: flex;
  margin-top: 10px;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  label {
    margin-top: 8px;
  }
}

.headlineWithDraw {
  margin-top: 16px;

  p {
    color: #677f8e;
  }
  .dot {
    background-color: #677f8e;
  }
}

.WithThirdHeading {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-top: 20px;

  label {
    color: #9bacb6;
    font-size: 14px;
    font-weight: 400;
    margin-left: 14px;
  }
}

.WithSecondHeading {
  p {
    font-family: "Roboto Flex";
    color: #d6dde1;
  }
  display: flex;
  align-items: center;
  gap: 30px;
  margin-top: 14px;
}

.WithdrawMoney {
  display: flex;
  align-items: center;

  .subValues {
    margin-top: 10px;
    label {
      color: #677f8e;
      margin-left: 14px;
      font-size: 12px;
      font-weight: 400;
    }
  }
}

.WithdrawMoney input {
  background-color: #222b2f;
  height: 40px;
  margin-left: 14px;
  width: 215px;
  outline: none;
  padding: 12px;
  border: 3px solid #222b2f;
  color: #d6dde1;
  box-sizing: border-box;
}
.WithdrawMoney p {
  color: #d6dde1;
  font-family: "Sarabun";
  font-size: 14px;
  margin-bottom: 25px;
  font-weight: 400;
}

//withdrwa styling
.copyAlert {
  // position: absolute;
  background-color: green;
  // bottom: -60px;
  height: 40px;
  // left: 100px;
  display: flex;

  border-radius: 5px;

  label {
    margin-left: 16px;
  }
}

.tickImg img {
  width: 15px;
  height: 11px;
  margin-bottom: 10px;
}

.flexCoin {
  display: flex;
  flex-direction: row;
  flex: 1;
  align-items: center;
  justify-content: center;

  margin-top: 36px;
  // justify-content: space-evenly;

  .btn1 {
    background-color: #f38220;
    padding: 0px 16px;
    color: #0a0d10;
    width: 340px;
    height: 36px;
    cursor: pointer;
    border-radius: 4px;
    border-style: none;
  }
}
.AxsAddress {
  margin-top: 16px;

  label {
    color: #9bacb6;
    font-size: 14px;
    font: "Roboto Flex";
    font-weight: 400;
  }

  .MemoValue {
    display: flex;
    flex: 1;
    height: 40px;
    margin-top: 10px;
    border-radius: 6px;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    background-color: #222b2f;

    img {
      width: 16px;
      height: 18px;
    }
  }

  .labelMemo {
    margin-top: 16px;
  }

  .axsAddressValue {
    display: flex;
    // flex: 1;
    margin-top: 10px;
    border-radius: 6px;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    background-color: #222b2f;

    .axsValue {
      width: 200px;
    }

    .axsValue label {
      color: #d6dde1;
      display: block;
      float: left;
      font-weight: 400;
      font-size: 14px;
      font: "Roboto Flex";
    }

    img {
      width: 16px;
      height: 18px;
    }
  }
}

.buttonShow {
  button {
    margin-top: 100px;
  }
  // background-color: red;
}

.buttonDepositCoin {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  button {
    background-color: #f38220;
    color: black;
    padding: 6px 16px;
    border-radius: 4px;
    border-style: none;
  }
}

.showAlert {
  display: flex;
  flex-direction: row;
  align-self: flex-end;
  margin-top: 30px;
  font-size: 14px;
  max-width: 380px;
  font-weight: 400;
  color: #de2d40;
  margin-left: 40px;
  // text-align: center;
}

.showCongest {
  color: #f8c417;
  margin-right: -120px;
  font-size: 14px;
  font-weight: 400;
}

.showRonin {
  color: red;
  margin-right: -120px;
  font-size: 14px;
  font-weight: 400;
}

// dropdown

.tabb .menu-item {
  color: #000;
  padding: 10px 20px;
  position: relative;
  text-align: flex-start;
  border-bottom: 3px solid transparent;
  display: flex;
  transition: 0.4s;
}

// tab 2

.Network {
  display: flex;
  margin-top: 40px;
  // align-items: center;
  //  width: 240px;

  p {
    width: 146px;
    color: #d6dde1;
    font-family: "Sarabun";
    font-size: 14px;
    font-weight: 400;
    margin-top: 20px;
  }

  .depositCoinNetworkInfo {
    display: flex;

    align-items: center;
    justify-content: space-between;
    margin-left: 40px;
    background-color: #222b2f;
    // max-width: 240px;
    width: 380px;
    border-radius: 4px;
    input {
      background-color: #222b2f;
      height: 40px;
      // margin-left: 14px;
      outline: none;
      // width: 100px;
      padding: 12px;
      border: 3px solid #222b2f;
      color: #d6dde1;
      box-sizing: border-box;
    }
    .searchImg {
      width: 12px;
      height: 8px;

      margin-right: 7px;
    }
  }
}

.depositCoin {
  display: flex;
  align-items: center;
}

.depositCoinInfo {
  display: flex;

  align-items: center;
  justify-content: space-between;
  margin-left: 40px;
  background-color: #222b2f;
  // max-width: 240px;
  width: 240px;
  border-radius: 4px;
  p {
    color: #d6dde1;
    font-family: "Sarabun";
    font-size: 14px;
    font-weight: 400;
  }
  input {
    background-color: #222b2f;
    height: 40px;
    // margin-left: 14px;
    outline: none;
    // width: 100px;
    padding: 12px;
    border: 3px solid #222b2f;
    color: #d6dde1;
    box-sizing: border-box;
  }
  .searchImg {
    width: 15px;
    height: 15px;

    margin-right: 7px;
  }
  .axsImg {
    width: 24px;
    height: 24px;
    background-color: red;
    margin-left: 7px;
  }
}

// tab 2 styling

.flex {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  margin-top: 16px;
  // justify-content: space-evenly;

  .btn1 {
    background-color: #f38220;
    padding: 0px 16px;
    color: #0a0d10;
    width: 160px;
    height: 36px;
    cursor: pointer;
    border-radius: 4px;
    border-style: none;
  }
  .btn2 {
    background-color: #38454d;
    padding: 0px 16px;
    color: #ffffff;
    width: 160px;
    height: 36px;
    cursor: pointer;
    border-radius: 4px;
    border-style: none;
  }
}

.heaadlineModal {
  .head11 {
    font-size: 14px;
    font-weight: 500;
    color: #d6dde1;
    margin-top: 10px;
  }

  label {
    font-size: 14px;
    color: #9bacb6;
    font-weight: 400;
    margin-left: 10px;
  }
  .head1 {
    display: flex;
    align-items: center;
    margin-top: 10px;
  }
  .head1 p {
    font-size: 14px;
    color: red;
    margin-left: 10px;
  }
  .dot {
    height: 6px;
    width: 6px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
  }
  .dot2 {
    height: 6px;
    width: 6px;
    background-color: red;
    border-radius: 50%;
    display: inline-block;
  }
}

.CashDetailModal {
  display: flex;
  flex-direction: column;
  background-color: #1c262b;
  padding-left: 18px;
  padding-right: 18px;
  padding-bottom: 18px;
  width: 332px;
  height: 158px;
  // margin-top: 16px;
  border-radius: 10px;
}

.buyDetail {
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
  justify-content: space-between;
  label {
    color: #9bacb6;
    font-weight: 400;
    font-size: 14px;
  }

  .cash {
    color: #d6dde1;
    font-weight: 600;
    font-size: 18px;
  }

  .cashDetail {
    color: #d6dde1;
    font-weight: 400;
    font-size: 14px;
  }
}

.imageBarcode {
  width: 144px;
  height: 144px;
  // margin-top: 20px;
}

.modalHeading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;

  width: 100%;
  max-width: 400px;
  border-radius: 16px;

  padding: 25px;

  h1 {
    color: #fff;
    font-size: 32px;
    font-weight: 900;
    margin-bottom: 15px;
  }

  p {
    color: #666;
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 15px;
  }
}

.modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 98;
  background-color: rgba(0, 0, 0, 0.7);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.slide-enter,
.slide-leave-to {
  transform: translateY(-50%) translateX(100vx);
}

.checkbox {
  display: flex;
  // align-items: center;
  margin-top: 16px;
}

#checkbox input {
  color: #3c515d;
}
.checkbox label {
  color: #d6dde1;
  font-size: 14px;
}

.buttonDeposit {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}

.buttonDeposit button {
  background-color: #f38220;
  color: black;
  padding: 6px 16px;
  border-radius: 4px;
  border-style: none;
}

.otherHeading {
  position: absolute;
  right: 60px;
  margin-left: 40px;
  // justify-content: flex-end;
  // margin: 0;
  // background-color: red;
}

.head1 {
  display: flex;
  align-items: center;
  margin-top: 10px;
}
.head1 p {
  margin-left: 10px;
}
.dot {
  height: 6px;
  width: 6px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
}

.headline {
  margin-top: 40px;
}
.line {
  // max-width: 365px;
  margin-top: 30px;
  border: 1px solid #28363e;
}

.QrCodeDeposit {
  display: flex;
  align-items: center;
  margin-top: 20px;
}
.QrCodeDeposit input {
  background-color: #222b2f;
  height: 40px;
  // margin-left: 14px;
  outline: none;
  padding: 12px;
  border: 3px solid #222b2f;
  color: #d6dde1;
  box-sizing: border-box;
}
.QrCodeDeposit p {
  color: #d6dde1;
  font-family: "Sarabun";
  font-size: 14px;
  font-weight: 400;
  width: 137px;
}
.depositMoney {
  display: flex;
  align-items: center;
  margin-top: 20px;
}
.depositMoney input {
  background-color: #222b2f;
  height: 40px;
  // margin-left: 14px;
  outline: none;
  padding: 12px;
  border: 3px solid #222b2f;
  color: #d6dde1;
  box-sizing: border-box;
}
p {
  color: #d6dde1;
  font-family: "Sarabun";
  font-size: 14px;
  font-weight: 400;
}
.depositMoney p {
  color: #d6dde1;
  font-family: "Sarabun";
  font-size: 14px;
  font-weight: 400;
}

.tabbWithdraw {
  margin-top: 50px;
  display: flex;
}
.tabb {
  margin-top: 50px;
  display: flex;
}
.hero {
  background-color: #1e1e1e;
  //   background-image: url("../assets/hero-bg.png");
  background-attachment: fixed;
  position: relative;
  height: 100vh;

  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }

  .hero-text {
    height: 100%;
    display: flex;
    flex-direction: row;
    // flex-direction: column;
    justify-content: center;
    color: #fff;

    h4 {
      text-transform: uppercase;
      font-size: 22px;
      padding-bottom: 4px;
    }

    h2 {
      font-size: 50px;
      @media (min-width: 550px) {
        font-size: 80px;
      }
    }

    // hr:nth-child(2) {
    //   max-width: 365px;
    //   margin-bottom: 16px;
    // }
    hr:nth-child(4) {
      height: 6px;
      background-color: #fff;
      border: none;
      max-width: 85px;
      margin-top: 16px;
    }
  }
}
</style>
