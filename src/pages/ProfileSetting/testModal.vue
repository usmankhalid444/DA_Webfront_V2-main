<template>
  <div class="wrapper">
    <div class="container px-7">
      <div class="row">
        <div class="col">
          <div class="Heading">
            <h1>PIN / Password</h1>
          </div>
          <div class="row px-4 pt-4">
            <div class="col-10">
              <table class="table width-table">
                <thead>
                  <th scope="col"></th>
                </thead>
                <tbody>
                   <tr class="telephone-number border-bottom-table">
                    <td class="table-text ps-0">
                      <p style="margin-top: 1rem">เปลี่ยน PIN</p>
                    </td>
                    <td style="width: 7%">
                      <p
                        class="table-text-yellow correct-button"
                        style="margin-top: 1rem"
                        @click="showModalEditPin = true"
                      >
                        แก้ไข
                      </p>
                    </td>
                  </tr>
                  <tr class="telephone-number border-bottom-table">
                    <td class="table-text ps-0">
                      <p style="margin-top: 1rem">เปลี่ยน Password</p>
                    </td>
                    <td style="width: 7%">
                      <p
                        class="table-text-yellow correct-button"
                        style="margin-top: 1rem"
                        @click="showModalEditPassword = true"
                      >
                        แก้ไข
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- common success modal -->
    <div v-if="showModalOTPSuccess">
      <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-dialog otp-success" role="document">
              <div class="modal-content">
                <div class="modal-body scroller-otp">
                  <div class="container">
                    <div class="row">
                      <div class="col text-center">
                        <div class="checkTick">
                          <img
                            class="image-tick-modal"
                            src="../../assets/images/profile-setting/tick.png"
                            alt=""
                          />
                        </div>
                        <div class="success-message">
                          <p class="text-grey">ระบบได้รับข้อมูลของคุณแล้ว</p>
                        </div>
                        <div
                          class="finisButton-SuccesOtp"
                          @click="showModalOTPSuccess = false"
                        >
                          <button
                            type="button"
                            class="btn btn-text-sarabun btn-cancel"
                          >
                            เสร็จสิ้น
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
    <!-- common success modal end -->
    <!-- common erro modal -->
    <div v-if="showModalOTPError">
      <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-dialog otp-error" role="document">
              <div class="modal-content">
                <div class="modal-body scroller-otp">
                  <div class="container">
                    <div class="row">
                      <div class="col text-center">
                        <div class="checkTick">
                          <img
                            class="image-cross-modal"
                            src="../../assets/images/profile-setting/tick.png"
                            alt=""
                          />
                        </div>
                        <div class="success-message">
                          <p class="text-grey">
                            ไม่สามารถใช้เบอร์นี้ได้
                            เนื่องจากเบอร์โทรศัพท์นี้ถูกใช้ในระบบแล้ว
                          </p>
                        </div>
                        <div
                          class="finisButton-SuccesOtp"
                          @click="showModalOTPError = false"
                        >
                          <button type="button" class="btn btn-cancel">
                            ย้อนกลับ
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
    <!-- common error modal end -->


    <!-- modal pin-->
    <div v-if="showModalEditPin">
      <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <div class="container">
                    <div
                      class="row"
                      style="padding-top: 5%; padding-bottom: 5%"
                    >
                      <div class="">
                        <div class="d-flex justify-content-between">
                          <h5 class="modal-title m-auto text-center">
                            เปลี่ยน PIN
                          </h5>
                          <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span
                              aria-hidden="true"
                              @click="showModalEditPin = false"
                              style="color: #677f8e; font-size: 24px"
                              >&times;</span
                            >
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="modal-body scroller">
                  <div class="container" style="padding-left: 24px;">
                    <!-- Original pin input -->
                    <div
                      class="wraper-input d-flex justify-content-between"
                      style="width: 90%; margin-top: 24px"
                    >
                      <p class="text-dark-grey mt-2">PIN เดิม</p>
                      <div class="name-input" style="width: 70%">
                        <label for="inputPassword2" class="visually-hidden"
                          >PIN เดิม</label
                        >
                        <input
                          type="text"
                          class="form-control pinInput-width"
                          placeholder="PIN เดิม"
                        />
                      </div>
                    </div>

                    <!-- new pin input -->
                    <div
                      class="wraper-input d-flex justify-content-between"
                      style="width: 90%; margin-top: 24px"
                    >
                      <p class="text-dark-grey mt-2">PIN ใหม่</p>
                      <div class="name-input" style="width: 70%">
                        <label for="inputPassword2" class="visually-hidden"
                          >PIN ใหม่</label
                        >
                        <input
                          type="text"
                          class="form-control pinInput-width"
                          placeholder="PIN ใหม่"
                        />
                      </div>
                    </div>


                    <!-- confirm new pin input -->
                    <div
                      class="wraper-input d-flex justify-content-between"
                      style="width: 90%; margin-top: 24px"
                    >
                      <p class="text-dark-grey mt-2">ยืนยัน PIN ใหม่</p>
                      <div class="name-input" style="width: 70%">
                        <label for="inputPassword2" class="visually-hidden"
                          >PIN ใหม่</label
                        >
                        <input
                          type="text"
                          class="form-control pinInput-width"
                          placeholder="PIN ใหม่"
                        />
                      </div>
                    </div>

                    <!-- modal button bottom -->
                    <div class="button marginTopBottom32 text-center">
                      <button
                        type="button"
                        class="btn btn-primary btn-text-sarabun"
                        @click="toggleOpenOtpEditPin"
                      >
                        บันทึก
                      </button>
                      <button
                        type="button"
                        class="btn btn-cancel btn-text-sarabun ms-3"
                        @click="showModalEditPin = false"
                      >
                        ยกเลิก
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
    <div v-if="showModalOtpPin">
      <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <div class="container">
                    <div
                      class="row"
                      style="padding-top: 5%; padding-bottom: 5%"
                    >
                      <div class="col-md-8 offset-md-3">
                        <div class="d-flex justify-content-around">
                          <h5 class="modal-title text-center">
                            ยืนยันการเปลี่ยนแปลงข้อมูล
                          </h5>
                          <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span
                              aria-hidden="true"
                              @click="showModalOtpPin = false"
                              style="color: #677f8e; font-size: 24px"
                              >&times;</span
                            >
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="modal-body scroller-otp">
                  <div class="container">
                    <div class="row">
                      <div class="col">
                        <div class="otp-number">
                          <p
                            class="text-grey text-center"
                            style="margin-top: 1rem; margin-bottom: 20px"
                          >
                            ระบุ OTP ที่ไดัรับจาก SMS (068-123-1444)
                          </p>
                        </div>
                        <div
                          id="otp"
                          class="otp-inputs d-flex justify-content-center"
                          style="margin-bottom: 48px"
                        >
                          <input
                            type="number"
                            id="input1"
                            v-on:keyup="inputenter(1)"
                            maxlength="1"
                            class="form-control otp-input"
                          />
                          <input
                            type="text"
                            id="input2"
                            v-on:keyup="inputenter(2)"
                            maxlength="1"
                            class="form-control otp-input"
                          />
                          <input
                            type="text"
                            id="input3"
                            v-on:keyup="inputenter(3)"
                            maxlength="1"
                            class="form-control otp-input"
                          />
                          <input
                            type="text"
                            id="input4"
                            v-on:keyup="inputenter(4)"
                            maxlength="1"
                            class="form-control otp-input"
                          />
                          <input
                            type="text"
                            id="input5"
                            v-on:keyup="inputenter(5)"
                            maxlength="1"
                            class="form-control otp-input"
                          />
                          <input
                            type="text"
                            id="input6"
                            v-on:keyup="inputenter(6)"
                            maxlength="1"
                            class="form-control otp-input"
                          />
                        </div>
                        <div class="button-confirm">
                          <div
                            class="buttonConfirm d-grid gap-2 mb-4"
                            style="width: 78%"
                          >
                            <button
                              type="button"
                              class="btn btn-primary btn-text-sarabun"
                              @click="ConfirmOtpPin"
                            >
                              ยืนยัน
                            </button>
                          </div>
                        </div>

                        <div class="d-flex justify-content-center">
                          <p
                            class="text-grey text-center"
                            style="margin-top: 1rem; margin-bottom: 20px"
                          >
                            หากไม่ได้รับ OTP
                          </p>
                          <p
                            class="text-yellow text-center ms-2"
                            style="margin-top: 1rem; margin-bottom: 20px"
                          >
                            กดส่งอีกครั้ง
                          </p>
                        </div>

                        <div class="bottom-detail">
                          <p class="text-center" style="color: #677f8e">
                            กรณีไม่สามารถยืนยัน OTP ได้ โทร. XX-XXX-XXXX
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
    <!-- end modal pin -->

        <!-- modal change password-->
    <div v-if="showModalEditPassword">
      <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <div class="container">
                    <div
                      class="row"
                      style="padding-top: 5%; padding-bottom: 5%"
                    >
                      <div class="">
                        <div class="d-flex justify-content-between">
                          <h5 class="modal-title m-auto text-center">
                            เปลี่ยน Password
                          </h5>
                          <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span
                              aria-hidden="true"
                              @click="showModalEditPassword = false"
                              style="color: #677f8e; font-size: 24px"
                              >&times;</span
                            >
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="modal-body scroller">
                  <div class="container" style="padding-left: 24px;">
                    <!-- old password input -->
                    <div
                      class="wraper-input d-flex justify-content-between"
                      style="width: 90%; margin-top: 24px"
                    >
                      <p class="text-dark-grey mt-2">รหัสผ่านเดิม</p>
                      <div class="name-input" style="width: 70%">
                        <label for="inputPassword2" class="visually-hidden"
                          >รหัสผ่านเดิม</label
                        >
                        <input
                          type="text"
                          class="form-control pinInput-width"
                          placeholder="รหัสผ่านเดิม"
                        />
                      </div>
                    </div>

                    <!-- new password input -->
                    <div
                      class="wraper-input d-flex justify-content-between"
                      style="width: 90%; margin-top: 24px"
                    >
                      <p class="text-dark-grey mt-2">รหัสผ่านใหม่</p>
                      <div class="name-input" style="width: 70%">
                        <label for="inputPassword2" class="visually-hidden"
                          >รหัสผ่านใหม่</label
                        >
                        <input
                          type="text"
                          class="form-control pinInput-width"
                          placeholder="รหัสผ่านใหม่"
                        />
                      </div>
                    </div>


                    <!-- confirm new password input -->
                    <div
                      class="wraper-input d-flex justify-content-between"
                      style="width: 90%; margin-top: 24px"
                    >
                      <p class="text-dark-grey mt-2">ยืนยันรหัสผ่านใหม่</p>
                      <div class="name-input" style="width: 70%">
                        <label for="inputPassword2" class="visually-hidden"
                          >รหัสผ่านใหม่</label
                        >
                        <input
                          type="text"
                          class="form-control pinInput-width"
                          placeholder="รหัสผ่านใหม่"
                        />
                      </div>
                    </div>



                    <div
                      class="wraper-list"
                      style="width: 90%; margin-top: 24px"
                    >
                      <p class="text-dark-grey mt-2">หมายเหตุ:</p>
                      <ul>
                        <li>
                            xxxxxxxx 
                        </li>
                        <li>xxxxxxx </li>
                        <li>xxxxxxxx </li>
                        <li>xxxxxxxxxxxxxxx</li>
                        <li>xxxxxxx</li>
                        <li>xxxxxxxx </li>
                        <li>xxxxxxx</li>
                      </ul>
                      
                    </div>

                    <!-- modal button bottom -->
                    <div class="button marginTopBottom32 text-center">
                      <button
                        type="button"
                        class="btn btn-primary btn-text-sarabun"
                        @click="toggleOpenOtpEditPassword"
                      >
                        บันทึก
                      </button>
                      <button
                        type="button"
                        class="btn btn-cancel btn-text-sarabun ms-3"
                        @click="showModalEditPassword = false"
                      >
                        ยกเลิก
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
    <div v-if="showModalOtpPassword">
      <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <div class="container">
                    <div
                      class="row"
                      style="padding-top: 5%; padding-bottom: 5%"
                    >
                      <div class="col-md-8 offset-md-3">
                        <div class="d-flex justify-content-around">
                          <h5 class="modal-title text-center">
                            ยืนยันการเปลี่ยนแปลงข้อมูล
                          </h5>
                          <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span
                              aria-hidden="true"
                              @click="showModalOtpPassword = false"
                              style="color: #677f8e; font-size: 24px"
                              >&times;</span
                            >
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="modal-body scroller-otp">
                  <div class="container">
                    <div class="row">
                      <div class="col">
                        <div class="otp-number">
                          <p
                            class="text-grey text-center"
                            style="margin-top: 1rem; margin-bottom: 20px"
                          >
                            ระบุ OTP ที่ไดัรับจาก SMS (068-123-1444)
                          </p>
                        </div>
                        <div
                          id="otp"
                          class="otp-inputs d-flex justify-content-center"
                          style="margin-bottom: 48px"
                        >
                          <input
                            type="number"
                            id="input1"
                            v-on:keyup="inputenter(1)"
                            maxlength="1"
                            class="form-control otp-input"
                          />
                          <input
                            type="text"
                            id="input2"
                            v-on:keyup="inputenter(2)"
                            maxlength="1"
                            class="form-control otp-input"
                          />
                          <input
                            type="text"
                            id="input3"
                            v-on:keyup="inputenter(3)"
                            maxlength="1"
                            class="form-control otp-input"
                          />
                          <input
                            type="text"
                            id="input4"
                            v-on:keyup="inputenter(4)"
                            maxlength="1"
                            class="form-control otp-input"
                          />
                          <input
                            type="text"
                            id="input5"
                            v-on:keyup="inputenter(5)"
                            maxlength="1"
                            class="form-control otp-input"
                          />
                          <input
                            type="text"
                            id="input6"
                            v-on:keyup="inputenter(6)"
                            maxlength="1"
                            class="form-control otp-input"
                          />
                        </div>
                        <div class="button-confirm">
                          <div
                            class="buttonConfirm d-grid gap-2 mb-4"
                            style="width: 78%"
                          >
                            <button
                              type="button"
                              class="btn btn-primary btn-text-sarabun"
                              @click="ConfirmOtpPasaword"
                            >
                              ยืนยัน
                            </button>
                          </div>
                        </div>

                        <div class="d-flex justify-content-center">
                          <p
                            class="text-grey text-center"
                            style="margin-top: 1rem; margin-bottom: 20px"
                          >
                            หากไม่ได้รับ OTP
                          </p>
                          <p
                            class="text-yellow text-center ms-2"
                            style="margin-top: 1rem; margin-bottom: 20px"
                          >
                            กดส่งอีกครั้ง
                          </p>
                        </div>

                        <div class="bottom-detail">
                          <p class="text-center" style="color: #677f8e">
                            กรณีไม่สามารถยืนยัน OTP ได้ โทร. XX-XXX-XXXX
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
    <!-- end modal change password -->
  </div>
</template>

<script>
export default {
  name: "PersonalInformation",
  data: function () {
    return {
      showModalOTPSuccess: false,
      showModalOTPError: false,
    

      showModalEditPin: false,
      showModalOtpPin: false,

      showModalEditPassword:false,
      showModalOtpPassword:false,
    };
  },
  methods: {
   

    toggleOpenOtpEditPin() {
      this.showModalEditPin = !this.showModalEditPin;
      this.showModalOtpPin = !this.showModalOtpPin;
    },
    ConfirmOtpPin() {
      this.showModalOtpPin = !this.showModalOtpPin;
      this.showModalOTPSuccess = !this.showModalOTPSuccess;
    },

    toggleOpenOtpEditPassword(){
        this.showModalEditPassword = !this.showModalEditPassword;
        this.showModalOtpPassword = !this.showModalOtpPassword;
    },
    ConfirmOtpPasaword(){
        this.showModalOtpPassword = !this.showModalOtpPassword;
        this.showModalOTPSuccess = !this.showModalOTPSuccess;
    },

    inputenter(id) {
      const inputs = document.querySelectorAll("#otp > *[id]");

      for (let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener("keydown", function (event) {
          // console.log('event', event)
          if (event.key === "Backspace") {
            inputs[i].value = "";
            if (i !== 0) inputs[i - 1].focus();
          } else {
            if (i === inputs.length - 1 && inputs[i].value !== "") {
              return true;
            } else if (event.keyCode > 47 && event.keyCode < 58) {
              inputs[i].value = event.key;
              if (i !== inputs.length - 1) inputs[i + 1].focus();

              event.preventDefault();
            } else if (event.keyCode > 64 && event.keyCode < 91) {
              // inputs[i].value = '';
              console.log("===beforeeeee", inputs[i].value);
              //  if (i !== 0) inputs[i - 1].focus();
              event.preventDefault();
              console.log("====", String.fromCharCode(event.keyCode));
              console.log("===ok", inputs[i].value);
              return;

              // inputs[i].value = String.fromCharCode(event.keyCode);

              // if (i !== inputs.length - 1) inputs[i + 1].focus();
              // event.preventDefault();
            }
          }
        });
      }
    },
  },
};
</script>
<style scoped>
.bg-box {
  background-color: #1c262b;
}
.Heading {
  color: #d6dde1;
  font-size: 24px;
  font-weight: 600;
  font-family: "Noto Sans Thai" !important;
  line-height: 24px;
  padding: 24px 0px 21px 24px;
}

.btn-text-sarabun {
  font-family: "Sarabun";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
}
.width-table {
  width: 764px;
}

.table-text {
  color: #9bacb6;
  font-size: 14px;
  font-weight: 400;
  font-family: "Sarabun" !important;
  cursor: pointer;
}
.table-text-white {
  color: #fff;
  font-size: 14px;
  font-weight: 400;
  font-family: "Sarabun" !important;
  cursor: pointer;
}

.table-text-yellow {
  color: #f38220;
  font-size: 14px;
  font-weight: 400;
  font-family: "Sarabun" !important;
  cursor: pointer;
}

.border-bottom-table {
  border-bottom: 1px solid #28363e;
}
/* modal */
.text-grey {
  color: #d6dde1;
  font-size: 14px;
  font-weight: 400;
  font-family: "Sarabun" !important;
}
.text-yellow {
  color: #f38220;
  font-size: 14px;
  font-weight: 400;
  font-family: "Sarabun" !important;
}
.text-dark-grey {
  color: #9bacb6;
  font-size: 14px;
  font-weight: 400;
  font-family: "Sarabun" !important;
}
.borderBottom-in-modal {
  border-bottom: 1px solid #28363e;
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}
.modal-content {
  width: 100% !important;
}
.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
.modal-dialog {
  background-color: #141b1f !important;
  max-width: 480px !important;
  border-radius: 8px;
}
.btn-cancel {
  background-color: #222b2f;
}
.button-confirm{
    display: flex;
    justify-content: center;
    margin-left: 15px;
}
ul {
  list-style: none;
}
ul li::before {
  content: "\2022";
  color: "#9BACB6";
  font-weight: bold;
  display: inline-block; 
  width: 1em;
  margin-left: -1em;
}
.marginTopBottom32{
  margin-top: 32px;
  margin-bottom: 32px;
}
/* otp modal */
.otp-input {
  width: 44px !important;
  height: 56px !important;
  border-radius: 4px !important;
  margin-left: 16px !important;
  text-align: center;
}
/* otp modal end */

/* modal otp finish succes */
.otp-success {
  max-width: 409px !important;
}
.otp-error {
  max-width: 409px !important;
}
.image-tick-modal {
  background-color: #277c44;
  border-radius: 50%;
  height: auto;
  width: 100%;
  max-width: 16%;
  padding: 11px;
}
.image-cross-modal {
  background-color: linear-gradient(360deg, #de2d40 0%, #ee5d6d 100%);
  border-radius: 50%;
  height: auto;
  width: 100%;
  max-width: 16%;
  padding: 11px;
}
.checkTick {
  padding-top: 100px;
}
.success-message {
  padding-top: 24px;
  padding-bottom: 40px;
}
.finisButton-SuccesOtp {
  padding-bottom: 100px;
}
/* modal otp finish succes end */

/* // %%%  scroller  start %%%% */

.scroller {
  height: 400px;
  overflow-y: scroll;
}

/* width */
::-webkit-scrollbar {
  width: 5px;
}
/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px #28363e;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #3c515d;
  border-radius: 10px;
}
.pinInput-width {
  width: 240px !important;
}
.SurnameWidth {
  width: 280px !important;
}
/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #192126;
}


/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
</style>
