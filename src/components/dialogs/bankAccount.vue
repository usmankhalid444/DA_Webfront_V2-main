<template>
  <div>
    <div v-if="showModal">
      <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header" style="border-bottom: none">
                  <div class="container">
                    <div
                      class="row"
                      style="padding-top: 5%; padding-bottom: 3%"
                    >
                      <div class="">
                        <div class="d-flex justify-content-between">
                          <h5 class="modal-title m-auto text-center">
                            เพิ่มบัญชีธนาคาร
                          </h5>
                          <button
                            type="button"
                            class="closeButton"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span
                              aria-hidden="true"
                              @click="showModal = false"
                              style="color: #677f8e; font-size: 30px"
                              >&times;</span
                            >
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="modal-body scroller">
                  <div class="container">
                    <div class="row">
                      <div class="col-3 pb-2">
                        <p class="text-dark-grey mt-2">ชื่อบัญชี</p>
                      </div>
                      <div class="col-9 pb-2">
                        <p class="table-text-white mt-2">ณัฐฐา นากาโมโตะ</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-3 pb-2">
                        <p class="text-dark-grey mt-2">เลือกธนาคาร</p>
                      </div>
                      <div class="col-9 pb-2 mb-3">
                        <select
                          class="form-select form-select-sm w-auto text-light shadow-none borderColor"
                          aria-label=".form-select-sm example"
                          style="background-color: #222b2f; color: #d6dde1"
                        >
                          <option selected>เลือกจังหวัด</option>
                        </select>
                      </div>
                    </div>
                    <div class="row mb-3">
                      <div class="col-3 pb-2">
                        <p class="text-dark-grey mt-2">ชื่อสาขา</p>
                      </div>
                      <div class="col-9 pb-2">
                        <input
                          type="text"
                          class="form-control w-full"
                          placeholder="สาขา"
                        />
                      </div>
                    </div>
                    <div class="row mb-3">
                      <div class="col-3 pb-2">
                        <p class="text-dark-grey mt-2">เลขที่บัญชี</p>
                      </div>
                      <div class="col-9 pb-2">
                        <input
                          type="text"
                          class="form-control w-full"
                          placeholder="เลขที่บัญชี"
                        />
                      </div>
                    </div>

                    <!-- file attachment -->
                    <div class="id-code">
                      <p class="text-dark-grey mt-4">แนบหน้าบัญชีธนาคาร</p>
                      <div class="name-input">
                        <label for="inputPassword2" class="visually-hidden"
                          >ถ่ายรูปของท่าน</label
                        >
                      </div>
                    </div>
                    <div
                      class="attachment-wrap d-flex py-5"
                      @click="onPickFile"
                    >
                      <div>
                        <b-icon class="iconPaperClip" icon="paperclip"></b-icon>
                      </div>
                      <label class="table-text-yellow ms-2">เพิ่มเอกสาร</label>
                      <!-- <input class="form-controls" type="file" id="formFile"> -->
                      <input
                        type="file"
                        style="display: none"
                        ref="fileInput"
                        accept="image/*"
                        @change="onFilePicked"
                      />
                    </div>
                    <p class="text-dark-grey mt-2">
                      สามารถเพิ่มได้สูงสุด 2 บัญชี
                    </p>
                    <!-- modal button bottom -->
                    <div class="button mt-4 mb-3 text-center">
                      <button
                        type="button"
                        class="btn btn-primary btn-text-sarabun"
                        @click="hide()"
                      >
                        บันทึก
                      </button>
                      <button
                        type="button"
                        class="btn btn-cancel btn-text-sarabun ms-3"
                        @click="hide()"
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
    <!-- common success modal -->
    <div v-if="showModalOTPSuccess">
      <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-dialog otp-success" role="document">
              <div class="modal-content" style="background-color: #141b1f !important;">
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
                          <p
                            class="text-grey"
                            style="font-size: 18px; font-weight: 600"
                          >
                            ระบบได้รับข้อมูลของคุณแล้ว
                          </p>
                        </div>
                        <div
                          class="finisButton-SuccesOtp"
                          @click="showModalOTPSuccess = false"
                        >
                          <button
                            type="button"
                            class="btn btn-text-sarabun btn-cancel buttonSuccess"
                            style="width: 39%"
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
    <!-- otp common -->
    <div v-if="showModalOTP">
      <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header" style="border-bottom: none">
                  <div class="container">
                    <div
                      class="row"
                      style="padding-top: 5%; padding-bottom: 5%"
                    >
                      <div class="">
                        <div class="d-flex justify-content-around">
                          <h5 class="modal-title m-auto text-center">
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
                              @click="showModalOTP = false"
                              style="color: #677f8e; font-size: 30px"
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
                            class="text-dark-grey text-center"
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
                              @click="ConfirmOtp"
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
    <!-- otp end -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      showModal: false,
      showModalOTP: false,
      showModalOTPSuccess: false,
    };
  },
  methods: {
    show() {
      this.showModal = true;
    },
    hide() {
      this.showModal = false;
      this.showModalOTP = true;
    },
    ConfirmOtp() {
      this.showModalOTP = !this.showModalOTP;
      this.showModalOTPSuccess = !this.showModalOTPSuccess;
    },
    onPickFile() {
      this.$refs.fileInput.click();
    },
    onFilePicked(event) {
      const files = event.target.files;
      let filename = files[0].name;
      const fileReader = new FileReader();
      fileReader.addEventListener("load", () => {
        this.imageUrl = fileReader.result;
      });
      fileReader.readAsDataURL(files[0]);
      this.image = files[0];
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
.w-full {
  width: 100% !important;
}
.closeButton {
  margin-right: 20px;
}
.Heading {
  color: #d6dde1;
  font-size: 24px;
  font-weight: 500;
  font-family: "Noto Sans Thai" !important;
  line-height: 24px;
  padding: 24px 0px 21px 24px;
}
.box-personal-info {
  padding: 12px 28px 12px 28px;
  border-radius: 3px;
  /* remove width if not responsive */
  width: 359px;
}
.text-box {
  color: #9bacb6;
  font-size: 14px;
  font-weight: 400;
  font-family: "Sarabun" !important;
  cursor: pointer;
}
.btn-text-sarabun {
  font-family: "Sarabun";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
}
.text-box:hover {
  color: #ffff;
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
.button-camera-open {
  padding-top: 87px;
  padding-bottom: 80px;
  justify-content: center;
  display: flex;
  /* margin-left: 30px; */
}
.attachment-wrap {
  background-color: #192126;
  /* padding: 48px 150px 48px 182px; */
  border-radius: 4px;
  justify-content: center;
  border: 1px dashed #28363e;
  cursor: pointer;
}
.attachment-wrap-skull {
  background-color: #192126;
  padding-top: 10px !important;
  padding-bottom: 10px !important;
  border-radius: 4px;
  justify-content: center;
  border: 1px dashed #28363e;
}
.image-note {
  color: #d6dde1;
  font-size: 14px;
  font-weight: 400;
  font-family: "Sarabun" !important;
  padding-top: 43px;
  padding-bottom: 20px;
}
.note-list {
  color: #9bacb6;
  font-size: 14px;
  font-weight: 400;
  font-family: "Sarabun" !important;
}
/* modal */
.text-grey {
  color: #d6dde1;
  font-size: 14px;
  font-weight: 400;
  font-family: "Sarabun" !important;
}
.iconPaperClip {
  color: #f38220;
  font-size: 16px;
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
.modal-body {
  padding-left: 12px;
  padding-right: 24px;
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

.custom-checkbox {
  background: #222b2f;
  border: 1px solid #3c515d;
  border-radius: 2px;
  height: 17px;
  width: 17px;
}
.Get-started {
  margin: 20px;
}
.btn-cancel {
  background-color: #222b2f;
}

/* otp modal */
.otp-input {
  width: 44px !important;
  height: 56px !important;
  border-radius: 4px !important;
  margin-left: 16px !important;
  text-align: center;
}
.button-confirm {
  justify-content: center;
  display: flex;
  margin-left: 30px;
}
.form-control {
  color: #f38220 !important;
  outline: none;
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
  /* // width: 300px; */
  height: 400px;
  overflow-y: scroll;
  /* // scrollbar-color: rebeccapurple green;
  // scrollbar-width: thin; */
}
.scroller-otp {
  /* height: 400px;
  overflow-y: scroll; */
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
.paswordInput-width {
  width: 240px !important;
}
.SurnameWidth {
  width: 280px !important;
}
.SurnameWidthPasword {
  width: 331px !important;
}
/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #192126;
}
.modal-title {
  color: #d6dde1;
  font-size: 18px;
  font-weight: 600;
  font-family: "Noto Sans Thai" !important;
  line-height: 28px;
}
/* modal select box address */
.address-input {
  width: 239px !important;
}
select > option:checked,
select > option:hover {
  /* box-shadow: 0 0 10px 100px #dc6900 inset; */
  color: #f38220 !important;
}
/* select:focus{
    border-color: #f38220;
    outline:none;
} */
select {
  /* padding: 5px; */
  border-radius: 4px;
  height: 40px;
  width: 240px !important;
  color: #ffffff;
  /* padding: 8px 12px; */
  /* padding-right: 30px; */
  font-size: 14px;
  position: relative;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  border: 1px solid #28363e !important;
  border-color: transparent !important;
  background: #677f8e
    url("data:image/svg+xml;utf8,<svg viewBox='0 0 140 140' width='14' height='14' xmlns='http://www.w3.org/2000/svg'><g><path d='m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z' fill='white'/></g></svg>")
    no-repeat;
  background-position: right 7px top 50%;
}
.modal-padding {
  margin-left: 1rem;
}
/* modal select box end */

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
