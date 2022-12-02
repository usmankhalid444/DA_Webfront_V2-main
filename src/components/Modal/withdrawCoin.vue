<template>
  <div>
    <!-- cash withdraw modal -->

    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container center-section">
            <div class="modalHeading">
              <label>ลงทะเบียน Whitelisted </label>
              <span @click="closeModel()">&times;</span>
            </div>

            <!-- OTP INPUT FIELD -->

            <div class="row py-1 px-3" align="center">
              <div class="col-3 align-items-center d-flex font-style">
                <p class="text-dark-grey">ตั้งชื่อ Wallet</p>
              </div>
              <div class="col-9 input-container" align="left">
                <input class="w-100" type="text" placeholder="เลือกเหรียญ" />
              </div>
            </div>
            <div class="row py-1 px-3">
              <div class="col-3 align-items-center d-flex font-style">
                <p class="text-dark-grey">ใช้สำหรับเหรียญ</p>
              </div>
              <div class="col-9 input-container">
                <input
                  type="text"
                  class="prepend-icon w-100"
                  placeholder="Ethereum (ETH)"
                />
                <span class="prepend"
                  ><img src="@/assets/images/wallet/eth.png" alt="eth-image"
                /></span>
                <span class="append"
                  ><img src="@/assets/images/wallet/search.png" alt="search-image" />
                </span>
              </div>
            </div>
            <div class="row py-1 px-3" align="center">
              <div class="col-3 align-items-center d-flex">
                <p class="text-dark-grey">Network ที่ใช้</p>
              </div>
              <div class="col-9" align="left">
                <div
                  class="select-container w-100"
                  tabindex="0"
                  @click="open_dropdown = !open_dropdown"
                  @blur="open_dropdown = false"
                >
                  <span class="text input-container">{{ selected_option }}</span>
                  <span class="icon" :class="open_dropdown ? 'rotate-sc-icon' : ''">
                    <img src="@/assets/images/wallet/dropIcon.png" alt="drop-icon" />
                  </span>
                  <div class="options" :class="open_dropdown ? 'show' : 'hidden'">
                    <ul>
                      <li
                        @click="
                          (selected_option = 'Network ABC'), (currentSettings = 'qr')
                        "
                      >
                        Network ABC
                      </li>
                      <li
                        @click="
                          (selected_option = 'Network XYZ'),
                            (currentSettings = 'bank_transfer')
                        "
                      >
                        Network XYZ
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="row py-1 px-3" align="center">
              <div class="col-3"></div>
              <div class="col-9" align="left">
                <p class="text-dark-grey negative">
                  กรุณาเลือก Network ของผู้รับ Address ให้ตรงกับ Network
                  <br />ของเหรียญที่คุณเลือก มิเช่นนั้นทรัพย์สินของคุณอาจสูญหายได้
                </p>
              </div>
            </div>

            <div class="row py-1 px-3" align="center">
              <div class="col-3 align-items-center d-flex">
                <p class="text-dark-grey">Address</p>
              </div>
              <div class="col-9 input-container" align="left">
                <input class="with-icons w-100" type="text" placeholder="เลือกเหรียญ" />
                <span class="append">
                  <img
                    style="width: 17px; height: 17px"
                    class="searchImg"
                    src="@/assets/images/wallet/scanner.png"
                    alt=""
                /></span>
              </div>
            </div>

            <div class="row py-1 px-3" align="center">
              <div class="col-3"></div>
              <div class="col-9" align="left">
                <p class="text-dark-grey negative">
                  การลงทะเบียนไม่สำเร็จ เนื่องจากคุณไม่สามารถทำการโอน/ <br />
                  ถอนเหรียญไปยัง Wallet ลูกค้าคนอื่นใน Finansia Crypto ได้
                </p>
              </div>
            </div>

            <div class="row py-1 px-3" align="center">
              <div class="col-3 align-items-center d-flex">
                <p class="text-dark-grey">Memo</p>
              </div>
              <div class="col-9 input-container" align="left">
                <input class="w-100" type="text" placeholder="(Optional)" />
              </div>
            </div>

            <!-- buttons -->

            <div class="flexCoinWithdraw">
              <button class="btn1" @click="showOTPModel()">ยืนยัน</button>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <!-- cash withdraw done modal -->
  </div>
</template>
<script>
export default {
  name: "model",
  data() {
    return {
      open_dropdown: false,
      selected_option: "ABC Network",
      currentSettings: "qr",
      // showWithdrawOTPModal:true
    };
  },
  methods: {
    closeModel() {
      this.$emit("closeModel");
    },
    showOTPModel() {
      this.$emit("showOTPModel");
    },
  },
};
</script>
<style scoped lang="scss">
.negative {
  color: #de2d40 !important;
}
.center-section {
  .select-container {
    background-color: #222b2f;
    color: #d6dde1;
    border-radius: 4px;
    height: 40px;
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
      z-index: 9;
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
      padding: 0 20px;
      text-transform: capitalize;
      &::placeholder {
        color: #566a76;
      }
    }

    .append {
      color: #9bacb6;
      margin-left: -30px;
    }
    .prepend-icon {
      padding-left: 40px !important;
    }
    .append-icon {
      padding: 40px !important;
    }
    .prepend {
      position: absolute;
      left: 20px;
      top: 7.5px;
      pointer-events: none;
      img {
        border-radius: 20px;
        width: 23px;
      }
    }
  }
  .info {
    color: #de2d40;
    cursor: pointer;
    p {
      margin: 0;
    }
  }
}

.input-element {
  width: 350px;
  border-radius: 4px;
}
.text-dark-grey {
  color: #9bacb6;
  font-size: 14px;
  font-weight: 400;
  font-family: "Sarabun" !important;
}

input {
  background-color: #222b2f;
  height: 40px;
  outline: none;
  padding: 12px;
  border: 3px solid #222b2f;
  color: #d6dde1;
  box-sizing: border-box;
}
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
  max-width: 630px;
  min-height: 411px;
  /* left: 0px; */
  /* top: 75px; */
  background: #141b1f;
  border-radius: 8px 8px 8px 8px;
  margin: 0px auto;
  box-shadow: 0 2px 8px rgb(0 0 0 / 33%);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
  padding: 0 25px;
  padding-bottom: 25px;
}

.modalHeading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 75px;
  position: relative;
  line-height: 75px;
}
.modalHeading > span {
  position: absolute;
  right: 0px;
  font-size: 30px;
  color: rgb(155, 172, 182);
  cursor: pointer;
}
.modalHeading label {
  margin: 0px;
  font-weight: 600;
  font-size: 18px;
  color: #d6dde1;
}
.modalHeadingWithdraw {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.OTPInput {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
  gap: 10px;
}
.flexCoinWithdraw {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.bottomLine {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
  gap: 8px;
}
.bottomLine label {
  color: #9bacb6;
  font-size: 14px;
  font-weight: 400;
}
.flexCoinWithdraw .btn1 {
  background-color: #f38220;
  margin-top: 40px;
  padding: 0px 16px;
  color: #0a0d10;
  width: 120px;
  height: 40px;
  cursor: pointer;
  border-radius: 4px;
  border-style: none;
  font-size: 14px;
  font-weight: 400;
}
.OTPInput input {
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
.l-info {
  color: #677f8e;
  font-size: 14px;
  text-align: center;
  display: block;
  line-height: 24px;
  margin-top: 32px;
}
</style>
