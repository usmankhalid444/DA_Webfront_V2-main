<template>
  <div class="wrapper">
    <div class="container px-7">
      <div class="row">
        <div class="col">
          <div class="Heading">
            <h1>ขอเพิ่มวงเงินซื้อขาย</h1>
          </div>
        </div>
      </div>
      <!-- row1 -->
      <div class="row justify-content-start px-4 marginBottom-48">
        <div class="col-3">
          <p class="text-dark-grey">ชื่อ-นามสกุล</p>
        </div>
        <div class="col-3">
          <p class="text-white">วาเลนติโน่ โปรนันซ่า</p>
        </div>
      </div>
      <!-- row 2 -->
      <div class="row justify-content-start px-4 marginBottom-48">
        <div class="col-3">
          <p class="text-dark-grey">เลขที่บัญชี</p>
        </div>
        <div class="col-3">
          <p class="text-white">123123</p>
        </div>
      </div>
      <!-- row3 -->
      <div class="row justify-content-start px-4 marginBottom-48">
        <div class="col-3">
          <p class="text-dark-grey">วงเงินปัจจุบัน (บาท)</p>
        </div>
        <div class="col-3">
          <p class="text-white">1,000,000.00</p>
        </div>
      </div>

      <!-- row4 -->
      <div class="row justify-content-start px-4 borderBottom">
        <div class="col-3 my-auto">
          <p class="text-dark-grey">ขอเพิ่มวงเงิน (บาท)</p>
        </div>
        <div class="col-5">
          <div class="name-input InputMarginleft">
            <label for="inputPassword2" class="visually-hidden"
              >ขอเพิ่มวงเงิน (บาท)</label
            >
            <input
              type="text"
              class="form-control mb-3 inputIncrement"
              placeholder=""
            />
          </div>
        </div>
      </div>

      <!-- row5 -->
      <!-- <div class="row justify-content-start px-4 mt-3">
        <div class="col-3 my-auto">
          <p class="text-dark-grey">อาชีพ</p>
        </div>
        <div class="col-3">
          <div class="name-input">
            <select
              class="form-select form-select-sm w-auto text-light shadow-none borderColor"
              aria-label=".form-select-sm example"
              style="background-color: #222b2f"
            >
              <option selected>เลือกอาชีพ</option>
            </select>
          </div>
        </div>

        <div class="col-3 my-auto">
          <p class="text-dark-grey">อาชีพ (อื่น)</p>
        </div>
        <div class="col-3">
          <div class="name-input">
            <label for="inputPassword2" class="visually-hidden">
              โปรดระบุ</label
            >
            <input
              type="text"
              class="form-control mb-3 inputIncrement"
              placeholder=" โปรดระบุ"
            />
          </div>
        </div>
      </div> -->

      <!-- row6 -->
      <!-- <div class="row justify-content-start px-4 mt-3">
        <div class="col-3 my-auto">
          <p class="text-dark-grey">แหล่งที่มาของรายได้</p>
        </div>
        <div class="col-3">
          <div class="name-input">
            <select
              class="form-select form-select-sm w-auto text-light shadow-none borderColor"
              aria-label=".form-select-sm example"
              style="background-color: #222b2f"
            >
              <option selected>เลือกแหล่งที่มารายได้</option>
            </select>
          </div>
        </div>
      </div> -->

      <!-- row7 -->
      <!-- <div class="row justify-content-start px-4 mt-3">
        <div class="col-3 my-auto">
          <p class="text-dark-grey">ชื่อที่ทำงาน</p>
        </div>
        <div class="col-3">
          <div class="name-input">
            <label for="inputPassword2" class="visually-hidden"
              >ขอเพิ่มวงเงิน (บาท)</label
            >
            <input
              type="text"
              class="form-control mb-3 inputIncrement"
              placeholder=""
            />
          </div>
        </div>

        <div class="col-3 my-auto">
          <p class="text-dark-grey">ตำแหน่ง</p>
        </div>
        <div class="col-3">
          <div class="name-input">
            <label for="inputPassword2" class="visually-hidden">
              โปรดระบุ</label
            >
            <input
              type="text"
              class="form-control mb-3 inputIncrement"
              placeholder=" โปรดระบุ"
            />
          </div>
        </div>
      </div> -->

      <!-- row8 -->
      <!-- <div class="row justify-content-start px-4 mt-3 borderBottom">
        <div class="col-3 my-auto">
          <p class="text-dark-grey">รายได้ (บาท)</p>
        </div>
        <div class="col-3">
          <div class="name-input InputMarginleft">
            <label for="inputPassword2" class="visually-hidden"
              >ขอเพิ่มวงเงิน (บาท)</label
            >
            <input
              type="text"
              class="form-control mb-3 inputIncrement"
              placeholder=""
            />
          </div>
        </div>
      </div> -->

      <!-- row9 -->
      <div class="row justify-content-start px-4 margin-row9">
        <div class="col-3">
          <p class="text-dark-grey">เอกสารแนบ (เลือก 1 อย่าง)</p>
        </div>
      </div>

      <!-- row10 -->
      <div class="row justify-content-start px-4">
        <div class="col">
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios1"
              value="option1"
              checked
            />
            <label class="form-check-label" for="exampleRadios1">
              สำเนาบัญชีเงินฝากธนาคาร (ย้อนหลัง 3 เดือน)
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios2"
              value="option2"
            />
            <label class="form-check-label" for="exampleRadios2">
              สำเนาเอกสารแสดงเงินเดือน/รายได้ เดือนล่าสุด
            </label>
          </div>

          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios2"
              value="option2"
            />
            <label class="form-check-label" for="exampleRadios2">
              สำเนาหลักฐานการเป็นเจ้าของพันธบัตร
            </label>
          </div>

          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios2"
              value="option2"
            />
            <label class="form-check-label" for="exampleRadios2">
              สำเนาหลักฐานการเป็นเจ้าของหุ้นกู้
            </label>
          </div>

          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios2"
              value="option2"
            />
            <label class="form-check-label" for="exampleRadios2">
              สำเนากองทุนรวม
            </label>
          </div>

          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios2"
              value="option2"
            />
            <label class="form-check-label" for="exampleRadios2">
              สำเนาพอร์ตหุ้น
            </label>
          </div>
        </div>
      </div>
      <!-- attachment -->
      <div class="row justify-content-start px-4">
        <div class="col-5">
          <div class="attachment-wrap d-flex py-5">
            <div>
              <img
                src="../../assets/images/profile-setting/attachmentIcon.png"
                alt=""
                style="cursor: pointer"
              />
            </div>
            <label class="text-yellow ms-2">เพิ่มเอกสาร</label>
          </div>
        </div>
      </div>

      <!-- checkbox -->
      <div class="row justify-content-start px-4">
        <div class="col-8">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label class="form-check-label" for="flexCheckDefault">
              ข้าพเจ้าขอยืนยันว่าข้าพเจ้าได้ทำรายการขอเพิ่มวงเงินซื้อขายฯดังกล่าวข้างต้นโดยได้แนบหลักฐานสำเนาที่บริษัทฯระบุพร้อมลงรองรับสำเนาถูกต้อง
              มาพร้อมกับการเเจ้งการ ทำธุรกรรม ในครั้งนี้เรียบร้อยแล้ว
            </label>
          </div>
        </div>
      </div>
      <!-- buttons -->
      <div class="row justify-content-start px-4">
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
        <div class="modal-mask ">
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
  </div>
</template>

<script>
export default {
  name: "PersonalInformation",
  data: function () {
    return {
        showModalOTPSuccess:false
    };
  },
  methods: {},
};
</script>
<style scoped>
.Heading {
  color: #d6dde1;
  font-size: 24px;
  font-weight: 600;
  font-family: "Noto Sans Thai" !important;
  line-height: 24px;
  padding: 24px 0px 21px 24px;
  margin-bottom: 53px;
}

.btn-text-sarabun {
  font-family: "Sarabun";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
}
.borderBottom {
  border-bottom: 1px solid #28363e;
  padding-bottom: 30px;
  width: 95%;
}
.InputMarginleft {
  margin-left: 18px;
}
.btn-cancel {
  background-color: #222b2f;
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

.text-dark-grey {
  color: #9bacb6;
  font-size: 14px;
  font-weight: 400;
  font-family: "Sarabun" !important;
}
.text-white {
  color: #ffff;
  font-size: 14px;
  font-weight: 400;
  font-family: "Sarabun" !important;
}
.marginBottom-48 {
  margin-bottom: 48px;
}
.inputIncrement {
  width: 170px !important;
}
.margin-row9 {
  margin-top: 14px;
  margin-bottom: 24px;
}
.form-check-input {
  background-color: #38454d !important;
}
.form-check-input:checked {
  background-color: #f38220 !important;
  border-color: #f38220 !important;
  background-image: url("../../../src/assets/images/profile-setting/checkedbox.png");
}
.attachment-wrap {
  background-color: #192126;
  margin-top: 16px;
  margin-bottom: 24px;
  border-radius: 4px;
  justify-content: center;
  border: 1px dashed #28363e;
  width: 332px;
  height: 119px;
}
.buttonWidth {
  width: 140px !important;
}

/*  select box address */
select > option:checked,
select > option:hover {
  color: #f38220 !important;
}
/* select:focus{
    border-color: #f38220;
    outline:none;
} */
select {
  border-radius: 4px;
  height: 40px;
  width: 170px !important;
  color: #566a76 !important;
  font-size: 14px;
  position: relative;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  border: 1px solid #28363e !important;
  background: #677f8e
    url("../../../src/assets/images/profile-setting/dropdownChevron.png");
  background-repeat: no-repeat;
  background-position: right 7px top 50%;
  padding: 6px 0px 6px 8px;
  font-size: 14px;
  font-weight: 400;
  font-family: "Sarabun" !important;
}
.modal-padding {
  margin-left: 1rem;
}
/*  select box end */

/* modal succes */
.otp-input {
  width: 44px !important;
  height: 56px !important;
  border-radius: 4px !important;
  margin-left: 16px !important;
  text-align: center;
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
/* modal  succes end */

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
</style>
