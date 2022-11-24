<template>
  <div class="wrapper">
    <div class="container px-7">
      <div class="row">
        <div class="col">
          <div class="Heading">
            <h1>ข้อมูลส่วนตัว</h1>
          </div>
          <div class="row px-3">
            <div class="col-5">
              <div class="box-personal-info bg-box">
                <div class="firt-line d-flex justify-content-between">
                  <p class="text-box">Krit Samroengraj</p>
                  <p class="text-box">เลขที่บัญชี 123123</p>
                </div>
                <div class="second-line d-flex justify-content-between">
                  <p class="text-box">วงเงินซื้อขาย</p>
                  <p class="text-box">xxx,xxx บาท</p>
                </div>
                <div class="third-line d-flex justify-content-between">
                  <p class="text-box">เงินสดคงเหลือ</p>
                  <p class="text-box">xxx,xxx บาท</p>
                </div>
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
                  <tr class="name-surname border-bottom-table">
                    <td class="table-text name-surname ps-0">
                      <p style="margin-top: 1rem">ชื่อ-นามสกุล</p>
                    </td>
                    <td class="table-text-white">
                      <p style="margin-top: 1rem">กฤษณ์ สำเริงราชย์</p>
                    </td>
                    <td style="width: 7%">
                      <p
                        class="table-text-yellow correct-button"
                        style="margin-top: 1rem"
                        @click="showModalSurnameChange = true"
                      >
                        แก้ไข
                      </p>
                    </td>
                  </tr>

                  <tr class="telephone-number border-bottom-table">
                    <td class="table-text ps-0">
                      <p style="margin-top: 1rem">ชเบอร์โทรศัพท์</p>
                    </td>
                    <td class="table-text-white">
                      <p style="margin-top: 1rem">096-807-9333</p>
                    </td>
                    <td style="width: 7%">
                      <p
                        class="table-text-yellow correct-button"
                        style="margin-top: 1rem"
                        @click="showModalEditPhoneNumber = true"
                      >
                        แก้ไข
                      </p>
                    </td>
                  </tr>

                  <tr class="Email border-bottom-table">
                    <td class="table-text ps-0">
                      <p style="margin-top: 1rem">Email</p>
                    </td>
                    <td class="table-text-white">
                      <p style="margin-top: 1rem">krith2536@gmail.com</p>
                    </td>
                    <td style="width: 7%">
                      <p
                        class="table-text-yellow correct-button"
                        style="margin-top: 1rem"
                        @click="showModalEditEmail = true"
                      >
                        แก้ไข
                      </p>
                    </td>
                  </tr>

                  <tr class="address border-bottom-table">
                    <td class="table-text ps-0">
                      <p style="margin-top: 1rem">ที่อยู่</p>
                    </td>
                    <td class="table-text-white">
                      <p style="margin-top: 1rem">
                        188/56 นวมินทร์42 เขตบึงกุ่ม แขวงคลองกุ่ม กรุงเทพ 10240
                      </p>
                    </td>
                    <td style="width: 7%">
                      <p
                        class="table-text-yellow correct-button"
                        style="margin-top: 1rem"
                        @click="showModalEditAddress = true"
                      >
                        แก้ไข
                      </p>
                    </td>
                  </tr>

                  <tr class="address border-bottom-table">
                    <td class="table-text ps-0">
                      <p style="margin-top: 1rem">ที่อยู่ตามบัตรประชาชน</p>
                    </td>
                    <td class="table-text-white">
                      <p style="margin-top: 1rem">
                        188/56 นวมินทร์42 เขตบึงกุ่ม แขวงคลองกุ่ม กรุงเทพ 10240
                      </p>
                    </td>
                    <td style="width: 7%">
                      <p
                        class="table-text-yellow correct-button"
                        style="margin-top: 1rem"
                        @click="showModalEditAddressIdCard = true"
                      >
                        แก้ไข
                      </p>
                    </td>
                  </tr>

                  <tr class="address border-bottom-table">
                    <td class="table-text ps-0">
                      <p style="margin-top: 1rem">สถานที่ทำงาน</p>
                    </td>
                    <td class="table-text-white">
                      <p style="margin-top: 1rem">
                        ชื่อที่ทำงาน xxxxx อาชีพ xxxxx <br />
                        ตำแหน่งงาน xxxx รายได้ xxxxxxx
                      </p>
                    </td>
                    <td style="width: 7%">
                      <p
                        class="table-text-yellow correct-button"
                        style="margin-top: 1rem"
                        @click="showModalEditWorkplace = true"
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
    <!-- modal Edit Name-Surname change -->
    <div v-if="showModalSurnameChange">
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
                            เปลี่ยนแปลงชื่อ-นามสกุล
                          </h5>
                          <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span
                              aria-hidden="true"
                              @click="showModalSurnameChange = false"
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
                    <div class="row">
                      <div class="col">
                        <div class="current-name d-flex borderBottom-in-modal">
                          <p class="text-grey" style="margin-top: 1rem">
                            ชื่อ-นามสกุลปัจจุบัน
                          </p>
                          <p
                            class="text-dark-grey"
                            style="margin-left: 15px; margin-top: 1rem"
                          >
                            ณัฐฐา มั่นใจ
                          </p>
                        </div>
                      </div>

                      <div class="heading-new-Surname">
                        <p class="mt-4 text-dark-grey">ชื่อ-นามสกุลใหม่</p>
                      </div>
                    </div>
                    <!-- name input -->
                    <div
                      class="wraper-input d-flex justify-content-between"
                      style="width: 90%"
                    >
                      <p class="text-dark-grey mt-2">ชื่อ</p>
                      <div class="name-input" style="width: 75%">
                        <label for="inputPassword2" class="visually-hidden"
                          >ระบุชื่อ</label
                        >
                        <input
                          type="text"
                          class="form-control mb-3 SurnameWidth"
                          placeholder="ระบุชื่อ"
                        />
                      </div>
                    </div>
                    <!-- surname input  -->
                    <div
                      class="wraper-input d-flex justify-content-between"
                      style="width: 90%"
                    >
                      <p class="text-dark-grey mt-2">นามสกุล</p>
                      <div class="name-input" style="width: 75%">
                        <label for="inputPassword2" class="visually-hidden"
                          >ระบุนามสกุล</label
                        >
                        <input
                          type="text"
                          class="form-control mb-4 SurnameWidth"
                          placeholder="ระบุนามสกุล"
                        />
                      </div>
                    </div>

                    <!-- code back of id card -->
                    <div class="id-code">
                      <p class="text-dark-grey mb-4">
                        รหัสหลังบัตรประชาชน (Laser Code)
                      </p>
                      <div class="name-input mb-4">
                        <label for="inputPassword2" class="visually-hidden"
                          >ระบุรหัสหลังบัตรประชาชน</label
                        >
                        <input
                          type="text"
                          class="form-control SurnameWidthPasword"
                          placeholder="ระบุรหัสหลังบัตรประชาชน"
                        />
                      </div>
                    </div>

                    <!-- file attachment -->
                    <div class="id-code">
                      <p class="text-dark-grey">
                        หลักฐานการเปลี่ยนชื่อ-นามสกุล
                      </p>
                      <div class="name-input">
                        <label for="inputPassword2" class="visually-hidden"
                          >ถ่ายรูปของท่าน</label
                        >
                      </div>
                    </div>
                    <div class="attachment-wrap d-flex py-5">
                      <div @click="OpenCameraModel">
                        <img
                          src="../../assets/images/profile-setting/photo_camera.png"
                          alt=""
                          style="cursor: pointer"
                        />
                      </div>
                      <label class="table-text-yellow ms-2">ถ่ายรูป</label>
                      <!-- <input class="form-controls" type="file" id="formFile"> -->
                    </div>
                    <!-- modal button bottom -->
                    <div class="button mt-5 mb-5 text-center">
                      <button
                        type="button"
                        class="btn btn-primary btn-text-sarabun"
                        @click="SurnametoggleOpenOtp"
                      >
                        บันทึก
                      </button>
                      <button
                        type="button"
                        class="btn btn-cancel btn-text-sarabun ms-3"
                        @click="showModalSurnameChange = false"
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
    <div v-if="showModalOTPSurname">
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
                              @click="showModalOTPSurname = false"
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
                              @click="ConfirmOtpSurname"
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
    <div v-if="showModalOpenCamera">
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
                            ถ่ายรูปเซลฟี่หน้าตรง
                          </h5>
                          <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span
                              aria-hidden="true"
                              @click="showModalOpenCamera = false"
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
                  <div class="container">
                    <div class="row">
                      <div class="col">
                        <div class="otp-number">
                          <p
                            class="text-grey text-center"
                            style="margin-top: 1rem; margin-bottom: 37px"
                          >
                            ถ่ายรูปเซลฟี่หน้าตรง
                          </p>
                        </div>
                        <div
                          class="attachment-wrap-skull d-flex justify-content-center py-5"
                        >
                          <img
                            src="../../assets/images/profile-setting/skullImage.png"
                            alt=""
                            style="cursor: pointer"
                          />
                        </div>
                        <div>
                          <p class="image-note">หมายเหตุ</p>
                          <p class="note-list">
                            <span>1.</span> กรุณากด “อนุญาต’ เพื่อเปิดกล้อง
                          </p>
                          <p class="note-list">
                            <span>2.</span> หากท่านยังไม่สามารถกดถ่ายรูปได้
                            กรุณาตรวจสอบการตั้งค่าได้ ที่นี่
                          </p>
                        </div>
                        <div class="button-camera-open">
                          <div
                            class="buttonConfirm d-grid gap-2 mb-4"
                            style="width: 78%"
                          >
                            <button
                              type="button"
                              class="btn btn-primary btn-text-sarabun"
                            >
                              <img
                                src="../../assets/images/profile-setting/photo_camera_black.png"
                                alt=""
                                style="margin-right: 10px"
                              />
                              ถ่ายรูป
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
        </div>
      </transition>
    </div>
    <!-- End modal Edit Name-Surname change -->

    <!-- modal Edit Phone Number -->
    <div v-if="showModalEditPhoneNumber">
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
                            เปลี่ยนแปลงเบอร์โทรศัพท์
                          </h5>
                          <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span
                              aria-hidden="true"
                              @click="showModalEditPhoneNumber = false"
                              style="color: #677f8e; font-size: 24px"
                              >&times;</span
                            >
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="modal-body">
                  <div class="container" style="padding-left: 24px;">
                    <div class="row">
                      <div class="col">
                        <div class="current-name d-flex borderBottom-in-modal">
                          <p class="text-dark-grey" style="margin-top: 1rem">
                            เบอร์โทรศัพท์ปัจจุบัน
                          </p>
                          <p
                            class="text-grey"
                            style="margin-left: 15px; margin-top: 1rem"
                          >
                            096-807-9333
                          </p>
                        </div>
                      </div>
                    </div>
                    <!-- new phone number input -->
                    <div
                      class="wraper-input d-flex justify-content-between"
                      style="width: 90%; margin-top: 24px"
                    >
                      <p class="text-dark-grey mt-2">เบอร์โทรศัพท์ใหม่</p>
                      <div class="name-input" style="width: 70%">
                        <label for="inputPassword2" class="visually-hidden"
                          >ระบุเบอร์โทรศัพท์</label
                        >
                        <input
                          type="text"
                          class="form-control paswordInput-width"
                          placeholder="ระบุเบอร์โทรศัพท์"
                        />
                      </div>
                    </div>

                    <!-- modal button bottom -->
                    <div class="button mt-5 mb-5 text-center">
                      <button
                        type="button"
                        class="btn btn-primary btn-text-sarabun"
                        @click="toggleOpenOtpEditPhone"
                      >
                        บันทึก
                      </button>
                      <button
                        type="button"
                        class="btn btn-cancel btn-text-sarabun ms-3"
                        @click="showModalEditPhoneNumber = false"
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
    <div v-if="showModalOtpPhonenumber">
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
                              @click="showModalOtpPhonenumber = false"
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
                             ระบุ OTP ที่ไดัรับจาก Email (xxxxxx@gmail.com)
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
                              @click="ConfirmOtpPhonenumber"
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
    <!-- end modal Edit phone number -->

    <!-- modal Edit Email -->
    <div v-if="showModalEditEmail">
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
                          <h5 class="modal-title text-center m-auto">
                            เปลี่ยนแปลงอีเมล
                          </h5>
                          <button
                            type="button"
                            class="close mr-2"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span
                              aria-hidden="true"
                              @click="showModalEditEmail = false"
                              style="color: #677f8e; font-size: 24px"
                              >&times;</span
                            >
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="modal-body modal-padding">
                  <div class="container" style="padding-left: 24px;">
                    <div class="row">
                      <div class="col">
                        <div class="current-name d-flex borderBottom-in-modal">
                          <p class="text-dark-grey" style="margin-top: 1rem">
                            อีเมลปัจจุบัน
                          </p>
                          <p
                            class="text-grey"
                            style="margin-left: 15px; margin-top: 1rem"
                          >
                            khembearland@gmail.com
                          </p>
                        </div>
                      </div>
                    </div>
                    <!-- new email input -->
                    <div
                      class="wraper-input d-flex justify-content-between"
                      style="width: 90%; margin-top: 24px"
                    >
                      <p class="text-dark-grey mt-2">อีเมลใหม่</p>
                      <div class="name-input" style="width: 70%">
                        <label for="inputPassword2" class="visually-hidden"
                          >ระบุอีเมล</label
                        >
                        <input
                          type="text"
                          class="form-control mb-3"
                          style="max-width: 240px"
                          placeholder="ระบุอีเมล"
                        />
                      </div>
                    </div>

                    <!-- modal button bottom -->
                    <div class="button mt-3 mb-5 text-center">
                      <button
                        type="button"
                        class="btn btn-primary btn-text-sarabun"
                        @click="toggleOpenOtpEditEmail"
                      >
                        บันทึก
                      </button>
                      <button
                        type="button"
                        class="btn btn-cancel btn-text-sarabun ms-3"
                        @click="showModalEditEmail = false"
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
    <div v-if="showModalOtpEmail">
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
                              @click="showModalOtpEmail = false"
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
                              @click="ConfirmOtpEmail"
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
    <!-- End modal edit Email -->

    <!-- modal Edit Address -->
    <div v-if="showModalEditAddress">
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
                            เปลี่ยนแปลงที่อยู่
                          </h5>
                          <button
                            type="button"
                            class="close mr-1"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span
                              aria-hidden="true"
                              @click="showModalEditAddress = false"
                              style="color: #677f8e; font-size: 24px"
                              >&times;</span
                            >
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="modal-body scroller modal-padding">
                  <div class="container" style="padding-left: 24px;">
                    <div class="row">
                      <div class="col">
                        <div class="current-name d-flex borderBottom-in-modal">
                          <p class="text-dark-grey" style="margin-top: 1rem">
                            ที่อยู่ปัจจุบัน
                          </p>
                          <p
                            class="text-grey"
                            style="margin-left: 15px; margin-top: 1rem"
                          >
                            188/56 นวมินทร์42 เขตบึงกุ่ม แขวงคลองกุ่มn กรุงเทพ
                            10240
                          </p>
                        </div>
                      </div>
                    </div>
                    <!-- new address heading -->
                    <p class="text-dark-grey mt-4">ที่อยู่ใหม่</p>
                    <!-- House number/Soi -->
                    <div
                      class="wraper-input d-flex justify-content-between"
                      style="width: 90%"
                    >
                      <p class="text-dark-grey mt-2">บ้านเลขที่/ซอย</p>
                      <div class="name-input" style="width: 70%">
                        <label for="inputPassword2" class="visually-hidden"
                          >ระบุข้อมูล</label
                        >
                        <input
                          type="text"
                          class="form-control address-input"
                          placeholder="ระบุข้อมูล"
                        />
                      </div>
                    </div>

                    <!-- Province select box -->
                    <div
                      class="wraper-input mt-2 d-flex justify-content-between"
                      style="width: 90%"
                    >
                      <p class="text-dark-grey mt-2">จังหวัด</p>
                      <div class="name-input" style="width: 70%">
                        <select
                          class="form-select form-select-sm w-auto text-light shadow-none borderColor"
                          aria-label=".form-select-sm example"
                          style="background-color: #222b2f"
                        >
                          <option selected>เลือกจังหวัด</option>
                        </select>
                      </div>
                    </div>

                    <!-- District select box -->
                    <div
                      class="wraper-input mt-2 d-flex justify-content-between"
                      style="width: 90%"
                    >
                      <p class="text-dark-grey mt-2">อำเภอ/ เขต</p>
                      <div class="name-input" style="width: 70%">
                        <select
                          class="form-select form-select-sm w-auto text-light shadow-none borderColor"
                          aria-label=".form-select-sm example"
                          style="background-color: #222b2f"
                        >
                          <option selected>เลือกอำเภอ/ เขต</option>
                        </select>
                      </div>
                    </div>

                    <!-- Sub-District select box -->
                    <div
                      class="wraper-input mt-2 d-flex justify-content-between"
                      style="width: 90%"
                    >
                      <p class="text-dark-grey mt-2">ตำบล/ แขวง</p>
                      <div class="name-input" style="width: 70%">
                        <select
                          class="form-select form-select-sm w-auto text-light shadow-none borderColor"
                          aria-label=".form-select-sm example"
                          style="background-color: #222b2f"
                        >
                          <option selected>เลือกตำบล/ แขวง</option>
                        </select>
                      </div>
                    </div>
                    <!-- zip code -->
                    <div
                      class="wraper-input mt-2 d-flex justify-content-between"
                      style="width: 90%"
                    >
                      <p class="text-dark-grey mt-2">รหัสไปรษณีย์</p>
                      <div class="name-input" style="width: 70%">
                        <label for="inputPassword2" class="visually-hidden"
                          >ระบุข้อมูล</label
                        >
                        <input
                          type="text"
                          class="form-control mb-3 address-input"
                          placeholder="ระบุข้อมูล"
                        />
                      </div>
                    </div>

                    <!-- modal button bottom -->
                    <div class="button mt-3 mb-5 text-center">
                      <button
                        type="button"
                        class="btn btn-primary btn-text-sarabun"
                        @click="toggleOpenOtpEditAddress"
                      >
                        บันทึก
                      </button>
                      <button
                        type="button"
                        class="btn btn-cancel btn-text-sarabun ms-3"
                        @click="showModalEditAddress = false"
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
    <div v-if="showModalOtpAddress">
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
                              @click="showModalOtpAddress = false"
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
                              class="btn btn-primary"
                              @click="ConfirmOtpAddress"
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
    <!-- End modal edit Address -->


    <!-- modal Edit Address id card -->
    <div v-if="showModalEditAddressIdCard">
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
                            เปลี่ยนแปลงที่อยู่ตามบัตรประชาชน
                          </h5>
                          <button
                            type="button"
                            class="close mr-1"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span
                              aria-hidden="true"
                              @click="showModalEditAddressIdCard = false"
                              style="color: #677f8e; font-size: 24px"
                              >&times;</span
                            >
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="modal-body scroller modal-padding">
                  <div class="container" style="padding-left: 24px;">
                    <div class="row">
                      <div class="col">
                        <div class="current-name d-flex borderBottom-in-modal">
                          <p class="text-dark-grey" style="margin-top: 1rem">
                            ที่อยู่เดิม
                          </p>
                          <p
                            class="text-grey"
                            style="margin-left: 15px; margin-top: 1rem"
                          >
                            188/56 นวมินทร์42 เขตบึงกุ่ม แขวงคลองกุ่ม กรุงเทพ 10240  
                          </p>
                        </div>
                      </div>
                    </div>
                    <!-- id card  address heading -->
                    <p class="text-dark-grey mt-4">ที่อยู่ใหม่</p>
                     <!-- number and group two input -->
                    <div
                      class="wraper-input d-flex justify-content-between mt-2"
                      style="width: 90%"
                    >
                      <p class="text-dark-grey mt-2">เลขที่</p>
                      <div class="name-input" style="width: 70%">
                        <label for="inputPassword2" class="visually-hidden"
                          >ระบุข้อมูล</label>
                        <div class="left-right-input d-flex">
                        <input
                          type="text"
                          class="form-control two-ipnuts"
                          placeholder="ระบุข้อมูล"
                        />
                        <p class="text-dark-grey mt-2 two-inputs-labelMargin">หมู่</p>
                        <label for="inputPassword2" class="visually-hidden"
                          >ระบุข้อมูล</label>
                        <input
                          type="text"
                          class="form-control two-ipnuts"
                          placeholder="ระบุข้อมูล"
                        />
                        </div>
                      </div>
                    </div>

                    <div
                      class="wraper-input d-flex justify-content-between mt-2"
                      style="width: 90%"
                    >
                      <p class="text-dark-grey mt-2">หมู่บ้าน</p>
                      <div class="name-input" style="width: 70%">
                        <label for="inputPassword2" class="visually-hidden"
                          >ระบุข้อมูล</label
                        >
                        <input
                          type="text"
                          class="form-control address-input"
                          placeholder="ระบุข้อมูล"
                        />
                      </div>
                    </div>

                    <!-- alley input -->
                    <div
                      class="wraper-input d-flex justify-content-between mt-2"
                      style="width: 90%"
                    >
                      <p class="text-dark-grey mt-2">ซอย</p>
                      <div class="name-input" style="width: 70%">
                        <label for="inputPassword2" class="visually-hidden"
                          >ระบุข้อมูล</label
                        >
                        <input
                          type="text"
                          class="form-control address-input"
                          placeholder="ระบุข้อมูล"
                        />
                      </div>
                    </div>
                    <!-- road input -->
                     <div
                      class="wraper-input d-flex justify-content-between mt-2"
                      style="width: 90%"
                    >
                      <p class="text-dark-grey mt-2">ถนน</p>
                      <div class="name-input" style="width: 70%">
                        <label for="inputPassword2" class="visually-hidden"
                          >ระบุข้อมูล</label
                        >
                        <input
                          type="text"
                          class="form-control address-input"
                          placeholder="ระบุข้อมูล"
                        />
                      </div>
                    </div>
                    <!-- subdistrict select box -->
                    <div
                      class="wraper-input mt-2 d-flex justify-content-between"
                      style="width: 90%"
                    >
                      <p class="text-dark-grey mt-2">ตำบล/ แขวง</p>
                      <div class="name-input" style="width: 70%">
                        <select
                          class="form-select form-select-sm w-auto text-light shadow-none borderColor"
                          aria-label=".form-select-sm example"
                          style="background-color: #222b2f"
                        >
                          <option selected>เลือกตำบล/ แขวง</option>
                        </select>
                      </div>
                    </div>


                    <!-- district select box -->
                    <div
                      class="wraper-input mt-2 d-flex justify-content-between"
                      style="width: 90%"
                    >
                      <p class="text-dark-grey mt-2">อำเภอ/ เขต</p>
                      <div class="name-input" style="width: 70%">
                        <select
                          class="form-select form-select-sm w-auto text-light shadow-none borderColor"
                          aria-label=".form-select-sm example"
                          style="background-color: #222b2f"
                        >
                          <option selected>เลือกอำเภอ/ เขต</option>
                        </select>
                      </div>
                    </div>

                    <!-- Province select box -->
                    <div
                      class="wraper-input mt-2 d-flex justify-content-between"
                      style="width: 90%"
                    >
                      <p class="text-dark-grey mt-2">จังหวัด</p>
                      <div class="name-input" style="width: 70%">
                        <select
                          class="form-select form-select-sm w-auto text-light shadow-none borderColor"
                          aria-label=".form-select-sm example"
                          style="background-color: #222b2f"
                        >
                          <option selected>เลือกจังหวัด</option>
                        </select>
                      </div>
                    </div>
                    <!-- zipcode input -->
                     <div
                      class="wraper-input d-flex justify-content-between mt-2"
                      style="width: 90%"
                    >
                      <p class="text-dark-grey mt-2">รหัสไปรษณีย์</p>
                      <div class="name-input" style="width: 70%">
                        <label for="inputPassword2" class="visually-hidden"
                          >ระบุข้อมูล</label
                        >
                        <input
                          type="text"
                          class="form-control address-input"
                          placeholder="ระบุข้อมูล"
                        />
                      </div>
                    </div>

                    <!-- modal button bottom -->
                    <div class="button mt-3 mb-5 text-center">
                      <button
                        type="button"
                        class="btn btn-primary btn-text-sarabun"
                        @click="toggleOpenOtpEditAddressIdCard"
                      >
                        บันทึก
                      </button>
                      <button
                        type="button"
                        class="btn btn-cancel btn-text-sarabun ms-3"
                        @click="showModalEditAddressIdCard = false"
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
    <div v-if="showModalOtpAddressIdCard">
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
                              @click="showModalOtpAddress = false"
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
                              class="btn btn-primary"
                              @click="ConfirmOtpAddressIdCard"
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
    <!-- End modal edit Address id card -->

    <!-- modal Edit workplace -->
    <div v-if="showModalEditWorkplace">
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
                            เปลี่ยนแปลงสถานที่ทำงาน
                          </h5>
                          <button
                            type="button"
                            class="close mr-1"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span
                              aria-hidden="true"
                              @click="showModalEditWorkplace = false"
                              style="color: #677f8e; font-size: 24px"
                              >&times;</span
                            >
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="modal-body scroller modal-padding">
                  <div class="container" style="padding-left: 24px;">
                    <div class="row">
                      <div class="col">
                        <div class="current-name d-flex ">
                          <p class="text-dark-grey" style="margin-top: 1rem">
                            อาชีพและ <br /> รายได้เดิม
                          </p>
                          <p
                            class="text-grey"
                            style="margin-left: 45px; margin-top: 1rem"
                          >
                            ชื่อที่ทำงาน xxxxx  อาชีพ xxxxx <br />ตำแหน่งงาน xxxx   รายได้ xxxxxxx
                          </p>
                        </div>

                        <div class="current-name d-flex borderBottom-in-modal">
                          <p class="text-dark-grey" style="margin-top: 1rem">
                            ที่ตั้งที่ทำงานเดิม
                          </p>
                          <p
                            class="text-grey"
                            style="margin-left: 15px; margin-top: 1rem"
                          >
                            188/56 นวมินทร์42 เขตบึงกุ่ม แขวงคลองกุ่ม กรุงเทพ 10240  
                          </p>
                        </div>
                      </div>
                    </div>
                    <!-- new workplace heading -->
                    <p class="text-dark-grey mt-4">อาขีพและรายได้</p>
                    <!-- work name -->
                    <div
                      class="wraper-input d-flex justify-content-between mt-2"
                      style="width: 90%"
                    >
                      <p class="text-dark-grey mt-2">ชื่อที่ทำงาน</p>
                      <div class="name-input" style="width: 70%">
                        <label for="inputPassword2" class="visually-hidden"
                          >ระบุข้อมูล</label
                        >
                        <input
                          type="text"
                          class="form-control address-input"
                          placeholder="ระบุข้อมูล"
                        />
                      </div>
                    </div>
                     <!-- occupation -->
                    <div
                      class="wraper-input d-flex justify-content-between mt-2"
                      style="width: 90%"
                    >
                      <p class="text-dark-grey mt-2">อาขีพ</p>
                      <div class="name-input" style="width: 70%">
                        <label for="inputPassword2" class="visually-hidden"
                          >ระบุข้อมูล</label
                        >
                        <input
                          type="text"
                          class="form-control address-input"
                          placeholder="ระบุข้อมูล"
                        />
                      </div>
                    </div>
                     <!-- job position -->
                    <div
                      class="wraper-input d-flex justify-content-between mt-2"
                      style="width: 90%"
                    >
                      <p class="text-dark-grey mt-2">ตำแหน่งงาน</p>
                      <div class="name-input" style="width: 70%">
                        <label for="inputPassword2" class="visually-hidden"
                          >ระบุข้อมูล</label
                        >
                        <input
                          type="text"
                          class="form-control address-input"
                          placeholder="ระบุข้อมูล"
                        />
                      </div>
                    </div>
                     <!-- income -->
                    <div
                      class="wraper-input d-flex justify-content-between mt-2 pb-3 borderBottom-in-modal"
                      style="width: 90%"
                    >
                      <p class="text-dark-grey mt-2">รายได้</p>
                      <div class="name-input" style="width: 70%">
                        <label for="inputPassword2" class="visually-hidden"
                          >ระบุข้อมูล</label
                        >
                        <input
                          type="text"
                          class="form-control address-input"
                          placeholder="ระบุข้อมูล"
                        />
                      </div>
                    </div>
                    <!-- new workplace heading -->
                    <p class="text-dark-grey mt-4">ที่ตั้งที่ทำงานใหม่</p>
                    <!-- number and group two input -->
                    <div
                      class="wraper-input d-flex justify-content-between mt-2"
                      style="width: 90%"
                    >
                      <p class="text-dark-grey mt-2">เลขที่</p>
                      <div class="name-input" style="width: 70%">
                        <label for="inputPassword2" class="visually-hidden"
                          >ระบุข้อมูล</label>
                        <div class="left-right-input d-flex">
                        <input
                          type="text"
                          class="form-control two-ipnuts"
                          placeholder="ระบุข้อมูล"
                        />
                        <p class="text-dark-grey mt-2 two-inputs-labelMargin">หมู่</p>
                        <label for="inputPassword2" class="visually-hidden"
                          >ระบุข้อมูล</label>
                        <input
                          type="text"
                          class="form-control two-ipnuts"
                          placeholder="ระบุข้อมูล"
                        />
                        </div>
                      </div>
                    </div>
                    <!-- village workplace -->
                    <div
                      class="wraper-input d-flex justify-content-between mt-2"
                      style="width: 90%"
                    >
                      <p class="text-dark-grey mt-2">หมู่บ้าน</p>
                      <div class="name-input" style="width: 70%">
                        <label for="inputPassword2" class="visually-hidden"
                          >ระบุข้อมูล</label
                        >
                        <input
                          type="text"
                          class="form-control address-input"
                          placeholder="ระบุข้อมูล"
                        />
                      </div>
                    </div>

                    <!-- alley input workplace-->
                    <div
                      class="wraper-input d-flex justify-content-between mt-2"
                      style="width: 90%"
                    >
                      <p class="text-dark-grey mt-2">ซอย</p>
                      <div class="name-input" style="width: 70%">
                        <label for="inputPassword2" class="visually-hidden"
                          >ระบุข้อมูล</label
                        >
                        <input
                          type="text"
                          class="form-control address-input"
                          placeholder="ระบุข้อมูล"
                        />
                      </div>
                    </div>
                    <!-- road input -->
                     <div
                      class="wraper-input d-flex justify-content-between mt-2"
                      style="width: 90%"
                    >
                      <p class="text-dark-grey mt-2">ถนน</p>
                      <div class="name-input" style="width: 70%">
                        <label for="inputPassword2" class="visually-hidden"
                          >ระบุข้อมูล</label
                        >
                        <input
                          type="text"
                          class="form-control address-input"
                          placeholder="ระบุข้อมูล"
                        />
                      </div>
                    </div>
                    <!-- subdistrict select box -->
                    <div
                      class="wraper-input mt-2 d-flex justify-content-between"
                      style="width: 90%"
                    >
                      <p class="text-dark-grey mt-2">ตำบล/ แขวง</p>
                      <div class="name-input" style="width: 70%">
                        <select
                          class="form-select form-select-sm w-auto text-light shadow-none borderColor"
                          aria-label=".form-select-sm example"
                          style="background-color: #222b2f"
                        >
                          <option selected>เลือกตำบล/ แขวง</option>
                        </select>
                      </div>
                    </div>


                    <!-- district select box -->
                    <div
                      class="wraper-input mt-2 d-flex justify-content-between"
                      style="width: 90%"
                    >
                      <p class="text-dark-grey mt-2">อำเภอ/ เขต</p>
                      <div class="name-input" style="width: 70%">
                        <select
                          class="form-select form-select-sm w-auto text-light shadow-none borderColor"
                          aria-label=".form-select-sm example"
                          style="background-color: #222b2f"
                        >
                          <option selected>เลือกอำเภอ/ เขต</option>
                        </select>
                      </div>
                    </div>

                    <!-- Province select box -->
                    <div
                      class="wraper-input mt-2 d-flex justify-content-between"
                      style="width: 90%"
                    >
                      <p class="text-dark-grey mt-2">จังหวัด</p>
                      <div class="name-input" style="width: 70%">
                        <select
                          class="form-select form-select-sm w-auto text-light shadow-none borderColor"
                          aria-label=".form-select-sm example"
                          style="background-color: #222b2f"
                        >
                          <option selected>เลือกจังหวัด</option>
                        </select>
                      </div>
                    </div>
                    <!-- zipcode input -->
                     <div
                      class="wraper-input d-flex justify-content-between mt-2"
                      style="width: 90%"
                    >
                      <p class="text-dark-grey mt-2">รหัสไปรษณีย์</p>
                      <div class="name-input" style="width: 70%">
                        <label for="inputPassword2" class="visually-hidden"
                          >ระบุข้อมูล</label
                        >
                        <input
                          type="text"
                          class="form-control address-input"
                          placeholder="ระบุข้อมูล"
                        />
                      </div>
                    </div>

                    <!-- modal button bottom -->
                    <div class="button mt-3 mb-5 text-center">
                      <button
                        type="button"
                        class="btn btn-primary btn-text-sarabun"
                        @click="toggleOpenOtpEditWorkplace"
                      >
                        บันทึก
                      </button>
                      <button
                        type="button"
                        class="btn btn-cancel btn-text-sarabun ms-3"
                        @click="showModalEditWorkplace = false"
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
    <div v-if="showModalOtpWorkplace">
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
                              @click="showModalOtpWorkplace = false"
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
                              class="btn btn-primary"
                              @click="ConfirmOtpWorkplace"
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
    <!-- End modal workplace -->
  </div>
</template>

<script>
export default {
  name: "PersonalInformation",
  data: function () {
    return {
      showModalOTPSuccess: false,
      showModalOTPError: false,
      showModalSurnameChange: false,
      showModalOTPSurname: false,
      showModalOpenCamera: false,

      showModalEditPhoneNumber: false,
      showModalOtpPhonenumber: false,

      showModalEditEmail: false,
      showModalOtpEmail: false,

      showModalEditAddress: false,
      showModalOtpAddress: false,

      showModalEditAddressIdCard: false,
      showModalOtpAddressIdCard:false,

      showModalEditWorkplace: false,
      showModalOtpWorkplace:false,
      
      
    };
  },
  methods: {
    SurnametoggleOpenOtp() {
      this.showModalSurnameChange = !this.showModalSurnameChange;
      this.showModalOTPSurname = !this.showModalOTPSurname;
    },
    ConfirmOtpSurname() {
      this.showModalOTPSurname = !this.showModalOTPSurname;
      this.showModalOTPSuccess = !this.showModalOTPSuccess;
    },
    OpenCameraModel() {
      this.showModalSurnameChange = !this.showModalSurnameChange;
      this.showModalOpenCamera = !this.showModalOpenCamera;
    },

    toggleOpenOtpEditPhone() {
      this.showModalEditPhoneNumber = !this.showModalEditPhoneNumber;
      this.showModalOtpPhonenumber = !this.showModalOtpPhonenumber;
    },
    ConfirmOtpPhonenumber() {
      this.showModalOtpPhonenumber = !this.showModalOtpPhonenumber;
      this.showModalOTPSuccess = !this.showModalOTPSuccess;
    },

    toggleOpenOtpEditEmail() {
      this.showModalEditEmail = !this.showModalEditEmail;
      this.showModalOtpEmail = !this.showModalOtpEmail;
    },
    ConfirmOtpEmail() {
      this.showModalOtpEmail = !this.showModalOtpEmail;
      this.showModalOTPSuccess = !this.showModalOTPSuccess;
    },

    toggleOpenOtpEditAddress() {
      this.showModalEditAddress = !this.showModalEditAddress;
      this.showModalOtpAddress = !this.showModalOtpAddress;
    },
    ConfirmOtpAddress() {
      this.showModalOtpAddress = !this.showModalOtpAddress;
      this.showModalOTPSuccess = !this.showModalOTPSuccess;
    },

    toggleOpenOtpEditAddressIdCard(){
      this.showModalEditAddressIdCard = !this.showModalEditAddressIdCard;
      this.showModalOtpAddressIdCard  = !this.showModalOtpAddressIdCard
    },
     ConfirmOtpAddressIdCard() {
      this.showModalOtpAddressIdCard = !this.showModalOtpAddressIdCard;
      this.showModalOTPSuccess = !this.showModalOTPSuccess;
    },

    toggleOpenOtpEditWorkplace(){
      this.showModalEditWorkplace = !this.showModalEditWorkplace;
      this.showModalOtpWorkplace  = !this.showModalOtpWorkplace
    },
     ConfirmOtpWorkplace() {
      this.showModalOtpWorkplace = !this.showModalOtpWorkplace;
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

/* modal select box address */
.address-input {
  width: 239px !important;
}
.two-ipnuts{
  width: 102px !important;

}
.two-inputs-labelMargin{
  margin-left: 6px;
    margin-right: 9px;
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
  background: #677f8e url("../../../src/assets/images/profile-setting/dropdownChevron.png") ;
  background-repeat: no-repeat;
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
.box-personal-info{
  width: 290px!important;
}
.text-box{
  font-size: 12px!important;
}
}
</style>
