<template>
  <div class="wrapper">
    <div class="container px-7">
      <div class="row">
        <div class="col">
          <div class="Heading">
            <h1 class="page-heading">กำหนดต้นทุนการฝากเหรียญ</h1>
          </div>
          </div>
      </div>
      <div class="row px-4 pt-4">
            <div class="col-10">
              <table class="table width-table">
                <thead>
                  <th scope="col"></th>
                </thead>
                <tbody>
                   <tr class="telephone-number border-bottom-table">
                    <td class="text-dark-grey ps-0">
                      <p style="margin-top: 1rem">เปลี่ยน PIN</p>
                    </td>
                    <td class=" ps-0">
                      <p class="table-text-white" style="margin-top: 1rem">ณัฐฐา นากาโมโตะ</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="row px-4 pt-4">
            <p class="text-dark-grey ">เลือกวิธีการระบุต้นทุนการฝากเหรียญของคุณ</p>
          </div>
          <div class="row px-4 pt-4">
            <div class="form-check" style="margin-left: 16px;">
            <input
              class="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios1"
              value="option1"
              checked
            />
            <label class="form-check-label" for="exampleRadios1">
              ระบุต้นทุนด้วยตัวเอง
            </label>
            <p class="text-dark-grey ">ผู้ใช้งานกำหนดราคาต้นทุนเหรียญที่ฝากเข้ามาด้วยตนเอง </p>
          </div>
          </div>

          <div class="row px-4 pt-4">
            <div class="form-check" style="margin-left: 16px;">
            <input
              class="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios1"
              value="option1"
              checked
            />
            <label class="form-check-label" for="exampleRadios1">
              ระบุต้นทุนด้วยราคาตลาด
            </label>
            <p class="text-dark-grey ">ใช้ราคาตลาดขณะนั้นเป็นตัวกำหนดต้นทุนฝากเหรียญ </p>
          </div>
          </div>
           <!-- buttons -->
      <div class="row justify-content-start px-4 ms-4 mt-3">
        <div class="col-4">
          <div class="button mt-2 mb-5 text-center d-flex">
            <button
              type="button"
              class="btn btn-primary btn-text-sarabun buttonWidth"
              @click="showModalOTPSuccess = true "
            >
              ยืนยัน
            </button>
            <button
              type="button"
              class="btn btn-cancel btn-text-sarabun ms-3 buttonWidth"
            >
              ยกเลิก
            </button>
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
                          <p class="text-grey" style="font-size:18px;font-weight:600;">ระบบได้รับข้อมูลของคุณแล้ว</p>
                        </div>
                        <div
                          class="finisButton-SuccesOtp"
                          @click="showModalOTPSuccess = false"
                        >
                          <button
                            type="button"
                            class="btn btn-text-sarabun btn-cancel buttonSuccess"
                            style="width: 39%;"
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

  </div>
</template>

<script>
export default {
  name: "DetermineCost",
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
.buttonWidth {
  width: 140px !important;
}
.form-check-input:checked {
  background-color: #f38220 !important;
  border-color: #f38220 !important;
}
.bg-box {
  background-color: #1c262b;
}
.page-heading{
  font-weight: 600 !important;
  font-size: 24px !important;
  line-height: 36px !important;
  font-family: "Noto Sans Thai" !important;
  color: #d6dde1;
}
.Heading {
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
  /* width: 764px; */
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
.buttonSuccess{
  font-size: 16px!important;
  font-weight: 700!important;
  font-family: "Noto Sans Thai"!important;
}
.form-control{
  color: #f38220!important;
  outline: none;
}
.modal-title{
  color: #D6DDE1;
  font-size: 18px;
  font-weight: 600;
  font-family: "Noto Sans Thai" !important;
  line-height: 28px;
}
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
.correct-button{
  float: right;
  clear: both;
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
  background-color: #141b1f!important;

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
  color: #9BACB6!important;
}
ul li::before {
  content: "\2022";
  color: #9BACB6 !important;
  font-weight: bold;
  display: inline-block; 
  width: 1em;
  margin-left: -1em;
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


@media only screen and (max-device-width: 768px){
  .table-text {
  font-size: 10px;
}
.table-text-white {
  font-size: 10px;
}

.table-text-yellow {
  font-size: 10px;
}
}
</style>
