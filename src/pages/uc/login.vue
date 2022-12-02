<template>
  <div class="fda0112982022-login">
    <section class="fdaLogin">
      <div class="fdaLogin-content">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-6 col-lg-4">
              <div class="login-wrap p-0">
                <b-link class="logo-wrap">
                  <b-img
                    :src="require('../../assets/img-fss-logo.png')"
                    fluid
                    alt="FINANSIA Project || Website"
                  >
                  </b-img>
                </b-link>
                <b-form
                  class="fdaForm"
                  ref="formInline"
                  :model="formInline"
                  :rules="ruleInline"
                >
                  <b-form-group class="mb16">
                    <label class="text-title">Username</label>
                    <b-form-input
                      type="text"
                      id="name"
                      v-model="formInline.user"
                    >
                    </b-form-input>
                  </b-form-group>
                  <!-- PASSWORD -->
                  <b-form-group class="login-psw mb16">
                    <label class="text-title">Password</label>
                    <span class="fr-right">
                      <span class="forgot-pass" @click="openModalForgetPass">
                        ลืมรหัสผ่าน
                      </span>
                    </span>
                    <b-form-input
                      v-if="showPassword"
                      type="text"
                      class="input"
                      id="text-password"
                      v-model="formInline.password"
                    >
                    </b-form-input>
                    <b-form-input
                      v-else
                      type="password"
                      class="input"
                      v-model="formInline.password"
                    >
                    </b-form-input>
                    <!-- ICON -->
                    <span class="fdaPass_close">
                      <span class="button-icon" @click="toggleShow">
                        <svg
                          font-scale="1"
                          v-if="showPassword"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <mask
                            id="mask0_3_154"
                            style="mask-type: alpha"
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="24"
                            height="24"
                          >
                            <rect width="24" height="24" fill="#D9D9D9" />
                          </mask>
                          <g mask="url(#mask0_3_154)">
                            <path
                              d="M12.0031 15.85C13.2198 15.85 14.2491 15.425 15.0911 14.575C15.9325 13.725 16.3531 12.7 16.3531 11.5C16.3531 10.2833 15.9325 9.254 15.0911 8.412C14.2491 7.57067 13.2198 7.15 12.0031 7.15C10.8031 7.15 9.77813 7.57067 8.92813 8.412C8.07813 9.254 7.65313 10.2833 7.65313 11.5C7.65313 12.7 8.07813 13.725 8.92813 14.575C9.77813 15.425 10.8031 15.85 12.0031 15.85ZM12.0031 13.85C11.3531 13.85 10.7991 13.6207 10.3411 13.162C9.88246 12.704 9.65312 12.15 9.65312 11.5C9.65312 10.85 9.88246 10.2957 10.3411 9.837C10.7991 9.379 11.3531 9.15 12.0031 9.15C12.6531 9.15 13.2075 9.379 13.6661 9.837C14.1241 10.2957 14.3531 10.85 14.3531 11.5C14.3531 12.15 14.1241 12.704 13.6661 13.162C13.2075 13.6207 12.6531 13.85 12.0031 13.85ZM12.0031 19.25C9.51979 19.25 7.26979 18.5377 5.25313 17.113C3.23646 15.6877 1.76146 13.8167 0.828125 11.5C1.76146 9.18333 3.23646 7.31233 5.25313 5.887C7.26979 4.46233 9.51979 3.75 12.0031 3.75C14.4865 3.75 16.7365 4.46233 18.7531 5.887C20.7698 7.31233 22.2448 9.18333 23.1781 11.5C22.2448 13.8167 20.7698 15.6877 18.7531 17.113C16.7365 18.5377 14.4865 19.25 12.0031 19.25Z"
                              fill="#677F8E"
                            />
                          </g>
                        </svg>

                        <svg
                          font-scale="1"
                          v-else
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 5.99922C15.79 5.99922 19.17 8.12922 20.82 11.4992C20.23 12.7192 19.4 13.7692 18.41 14.6192L19.82 16.0292C21.21 14.7992 22.31 13.2592 23 11.4992C21.27 7.10922 17 3.99922 12 3.99922C10.73 3.99922 9.51 4.19922 8.36 4.56922L10.01 6.21922C10.66 6.08922 11.32 5.99922 12 5.99922ZM10.93 7.13922L13 9.20922C13.57 9.45922 14.03 9.91922 14.28 10.4892L16.35 12.5592C16.43 12.2192 16.49 11.8592 16.49 11.4892C16.5 9.00922 14.48 6.99922 12 6.99922C11.63 6.99922 11.28 7.04922 10.93 7.13922ZM2.01 3.86922L4.69 6.54922C3.06 7.82922 1.77 9.52922 1 11.4992C2.73 15.8892 7 18.9992 12 18.9992C13.52 18.9992 14.98 18.7092 16.32 18.1792L19.74 21.5992L21.15 20.1892L3.42 2.44922L2.01 3.86922ZM9.51 11.3692L12.12 13.9792C12.08 13.9892 12.04 13.9992 12 13.9992C10.62 13.9992 9.5 12.8792 9.5 11.4992C9.5 11.4492 9.51 11.4192 9.51 11.3692V11.3692ZM6.11 7.96922L7.86 9.71922C7.63 10.2692 7.5 10.8692 7.5 11.4992C7.5 13.9792 9.52 15.9992 12 15.9992C12.63 15.9992 13.23 15.8692 13.77 15.6392L14.75 16.6192C13.87 16.8592 12.95 16.9992 12 16.9992C8.21 16.9992 4.83 14.8692 3.18 11.4992C3.88 10.0692 4.9 8.88922 6.11 7.96922Z"
                            fill="#677F8E"
                          />
                        </svg>
                      </span>
                    </span>
                  </b-form-group>

                  <!-- PIN -->
                  <b-form-group class="login-psw" v-if="savePin">
                    <label class="text-title">PIN</label>
                    <b-form-input
                      v-if="showPin"
                      type="text"
                      class="input"
                      id="text-password"
                      v-model="pin"
                    >
                    </b-form-input>
                    <b-form-input
                      v-else
                      type="password"
                      class="input"
                      v-model="pin"
                    >
                    </b-form-input>
                    <!-- ICON -->
                    <span class="fdaPass_close">
                      <span class="button-icon" @click="toggleShowPin">
                        <svg
                          font-scale="1"
                          v-if="showPin"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <mask
                            id="mask0_3_154"
                            style="mask-type: alpha"
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="24"
                            height="24"
                          >
                            <rect width="24" height="24" fill="#D9D9D9" />
                          </mask>
                          <g mask="url(#mask0_3_154)">
                            <path
                              d="M12.0031 15.85C13.2198 15.85 14.2491 15.425 15.0911 14.575C15.9325 13.725 16.3531 12.7 16.3531 11.5C16.3531 10.2833 15.9325 9.254 15.0911 8.412C14.2491 7.57067 13.2198 7.15 12.0031 7.15C10.8031 7.15 9.77813 7.57067 8.92813 8.412C8.07813 9.254 7.65313 10.2833 7.65313 11.5C7.65313 12.7 8.07813 13.725 8.92813 14.575C9.77813 15.425 10.8031 15.85 12.0031 15.85ZM12.0031 13.85C11.3531 13.85 10.7991 13.6207 10.3411 13.162C9.88246 12.704 9.65312 12.15 9.65312 11.5C9.65312 10.85 9.88246 10.2957 10.3411 9.837C10.7991 9.379 11.3531 9.15 12.0031 9.15C12.6531 9.15 13.2075 9.379 13.6661 9.837C14.1241 10.2957 14.3531 10.85 14.3531 11.5C14.3531 12.15 14.1241 12.704 13.6661 13.162C13.2075 13.6207 12.6531 13.85 12.0031 13.85ZM12.0031 19.25C9.51979 19.25 7.26979 18.5377 5.25313 17.113C3.23646 15.6877 1.76146 13.8167 0.828125 11.5C1.76146 9.18333 3.23646 7.31233 5.25313 5.887C7.26979 4.46233 9.51979 3.75 12.0031 3.75C14.4865 3.75 16.7365 4.46233 18.7531 5.887C20.7698 7.31233 22.2448 9.18333 23.1781 11.5C22.2448 13.8167 20.7698 15.6877 18.7531 17.113C16.7365 18.5377 14.4865 19.25 12.0031 19.25Z"
                              fill="#677F8E"
                            />
                          </g>
                        </svg>

                        <svg
                          font-scale="1"
                          v-else
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 5.99922C15.79 5.99922 19.17 8.12922 20.82 11.4992C20.23 12.7192 19.4 13.7692 18.41 14.6192L19.82 16.0292C21.21 14.7992 22.31 13.2592 23 11.4992C21.27 7.10922 17 3.99922 12 3.99922C10.73 3.99922 9.51 4.19922 8.36 4.56922L10.01 6.21922C10.66 6.08922 11.32 5.99922 12 5.99922ZM10.93 7.13922L13 9.20922C13.57 9.45922 14.03 9.91922 14.28 10.4892L16.35 12.5592C16.43 12.2192 16.49 11.8592 16.49 11.4892C16.5 9.00922 14.48 6.99922 12 6.99922C11.63 6.99922 11.28 7.04922 10.93 7.13922ZM2.01 3.86922L4.69 6.54922C3.06 7.82922 1.77 9.52922 1 11.4992C2.73 15.8892 7 18.9992 12 18.9992C13.52 18.9992 14.98 18.7092 16.32 18.1792L19.74 21.5992L21.15 20.1892L3.42 2.44922L2.01 3.86922ZM9.51 11.3692L12.12 13.9792C12.08 13.9892 12.04 13.9992 12 13.9992C10.62 13.9992 9.5 12.8792 9.5 11.4992C9.5 11.4492 9.51 11.4192 9.51 11.3692V11.3692ZM6.11 7.96922L7.86 9.71922C7.63 10.2692 7.5 10.8692 7.5 11.4992C7.5 13.9792 9.52 15.9992 12 15.9992C12.63 15.9992 13.23 15.8692 13.77 15.6392L14.75 16.6192C13.87 16.8592 12.95 16.9992 12 16.9992C8.21 16.9992 4.83 14.8692 3.18 11.4992C3.88 10.0692 4.9 8.88922 6.11 7.96922Z"
                            fill="#677F8E"
                          />
                        </svg>
                      </span>
                    </span>
                  </b-form-group>

                  <!-- Check box -->
                  <div class="cover-chk">
                    <input
                      type="checkbox"
                      id="cbx"
                      class="inp-cbx"
                      style="display: none"
                      v-model="savePin"
                    />
                    <label for="cbx" class="cbx">
                      <span class="inp-cbx">
                        <svg width="12px" height="10px" viewBox="0 0 12 10">
                          <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                        </svg>
                      </span>
                      <span>Save PIN</span>
                    </label>
                  </div>

                  <!-- Modal -->
                  <section class="modal-psw">
                    <!-- <button type="button" @click="openModalForgetPass">Open modal</button> -->
                    <div
                      v-if="showModal == true"
                      class="modal"
                      id="myModal"
                      :style="{ display: showModal == true ? 'block' : 'none' }"
                    >
                      <div class="modal-content modal-dialog">
                        <div class="modal-header">
                          <h5
                            class="modal-title"
                            style="font-family: Noto Sans Thai"
                          >
                            ลืมรหัสผ่าน
                          </h5>
                        </div>
                        <div class="modal-body thai-font">
                          <b-form class="fdaForm-psw">
                            <b-form-group class="pad-16">
                              <label class="text-title font-sarabun"
                                >รหัสผู้ใช้งาน (Username)
                              </label>
                              <b-form-input type="text" id="name">
                              </b-form-input>
                            </b-form-group>

                            <b-form-group class="pad-16">
                              <label class="text-title1 font-sarabun"
                                >อีเมล (Email) เพื่อรับรหัสผ่านใหม่
                              </label>
                              <b-form-input
                                type="text"
                                id="name"
                                placeholder="ระบุอีเมลที่ได้ลงทะเบียนไว้"
                                class="place-hold"
                              >
                              </b-form-input>
                            </b-form-group>

                            <!-- button -->
                            <div class="cover-button d-flex">
                              <b-button class="buttons-C font-sarabun" href="#"
                                >ยืนยัน</b-button
                              >
                              <b-button
                                class="buttons-D font-sarabun"
                                href="/login"
                                >ยกเลิก</b-button
                              >
                            </div>

                            <div class="contact font-sarabun">
                              กรณีติดปัญหา กรุณาติดต่อ 02-252-2525
                            </div>
                          </b-form>
                        </div>
                        <!-- <div class="modal-footer"></div> -->
                      </div>
                    </div>
                  </section>
                  <!-- Modal -->
                  <!-- Register Modal -->

                  <section class="modal-psw">
                    <!-- <button type="button" @click="openModalForgetPass">Open modal</button> -->
                    <div
                      v-if="showRegisterModal"
                      class="modal"
                      id="myModal"
                      :style="{
                        display: showRegisterModal == true ? 'block' : 'none',
                      }"
                    >
                      <div class="modal-content modal-register modal-dialog">
                        <div
                          class="modal-header"
                          style="border-bottom: 1px solid #28363e !important"
                        >
                          <h5 class="modal-title font-sarabun text-center">
                            ลงทะเบียน ทดลองใช้งานฟรี
                          </h5>
                        </div>
                        <div class="modal-body register">
                          <b-form class="fdaForm-psw">
                            <div
                              class="pad-16"
                              v-if="eventNameField"
                              :style="{
                                display:
                                  eventNameField == true ? 'block' : 'none',
                              }"
                            >
                              <p class="text-dark-grey mt-2 mb-2">
                                {ชื่อกิจกรรม - ถ้าระบบมี}
                              </p>
                              <div class="wraper-input mb-2">
                                <select>
                                  <option>เลือกกิจกรรม</option>
                                  <option>เลือกกิจกรรม</option>
                                  <option>เลือกกิจกรรม</option>
                                </select>
                                <span
                                  ><svg
                                    width="12"
                                    height="8"
                                    viewBox="0 0 12 8"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M1.41 0.589844L6 5.16984L10.59 0.589844L12 1.99984L6 7.99984L0 1.99984L1.41 0.589844Z"
                                      fill="#677F8E"
                                    />
                                  </svg>
                                </span>
                              </div>
                            </div>
                            <div class="pad-16">
                              <p class="text-dark-grey mt-2 mb-2">
                                Title (คำนำหน้าชื่อ)
                              </p>
                              <div
                                class="wraper-input mb-2"
                                style="width: 160px"
                              >
                                <select>
                                  <option>เลือกคำนำหน้า</option>
                                  <option>เลือกคำนำหน้า</option>
                                  <option>เลือกคำนำหน้า</option>
                                </select>
                                <span
                                  ><svg
                                    width="12"
                                    height="8"
                                    viewBox="0 0 12 8"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M1.41 0.589844L6 5.16984L10.59 0.589844L12 1.99984L6 7.99984L0 1.99984L1.41 0.589844Z"
                                      fill="#677F8E"
                                    />
                                  </svg>
                                </span>
                              </div>
                            </div>
                            <div class="d-flex pad-16">
                              <b-form-group class="pad-8">
                                <label class="text-title font-sarabun"
                                  >First Name (ชื่อภาษาอังกฤษ)
                                </label>
                                <b-form-input
                                  type="text"
                                  id="firstName"
                                  style="max-width: 256px"
                                  placeholder="Pre Text"
                                >
                                </b-form-input>
                              </b-form-group>
                              <!-- </div> -->
                              <!-- <div class="col-6"> -->
                              <b-form-group class="pad-8">
                                <label class="text-title font-sarabun"
                                  >Last Name (นามสกุลภาษาอังกฤษ)
                                </label>
                                <b-form-input
                                  style="max-width: 256px"
                                  type="text"
                                  id="firstName"
                                  placeholder="Pre Text"
                                >
                                </b-form-input>
                              </b-form-group>
                            </div>

                            <b-form-group class="pad-16">
                              <div class="pad-8">
                                <label
                                  style="margin-top: 0px"
                                  class="text-title1 font-sarabun"
                                  >Mobile Number
                                </label>
                                <b-form-input
                                  type="text"
                                  id="name"
                                  placeholder="เช่น 080-XXX-XXXX"
                                  class="place-hold"
                                  style="max-width: 256px"
                                >
                                </b-form-input>
                              </div>
                            </b-form-group>
                            <b-form-group class="pad-16">
                              <div class="pad-8">
                                <label
                                  style="margin-top: 0px"
                                  class="text-title1 font-sarabun"
                                  >Email
                                </label>
                                <b-form-input
                                  type="text"
                                  id="name"
                                  class="place-hold"
                                  style="max-width: 256px"
                                >
                                </b-form-input>
                              </div>
                            </b-form-group>
                            <!-- button -->
                            <div class="cover-button cover-button-register">
                              <b-button
                                class="buttons-C font-sarabun"
                                @click="showOtpModal"
                                >ยืนยัน</b-button
                              >
                              <b-button
                                class="buttons-D font-sarabun"
                                @click="showRegisterModal = false"
                                >ยกเลิก</b-button
                              >
                            </div>

                            <div class="contact font-sarabun text-center">
                              กรณีติดปัญหา กรุณาติดต่อ 02-252-2525
                            </div>
                          </b-form>
                        </div>
                        <!-- <div class="modal-footer"></div> -->
                      </div>
                    </div>
                  </section>

                  <!-- Register Modal -->
                  <!-- OTP Modal -->
                  <div v-if="showOtp">
                    <transition name="modal">
                      <div class="modal-mask">
                        <div class="modal-wrapper">
                          <div class="modal-dialog" role="document">
                            <div class="modal-content">
                              <div class="modal-header">
                                <div class="container">
                                  <div class="row">
                                    <div class="tf-heading mt-3 mb-2">
                                      <h2>Two-Factor Authentication</h2>

                                      <span
                                        aria-hidden="true"
                                        @click="showOtp = false"
                                        style="
                                          color: #677f8e;
                                          font-size: 24px;
                                          cursor: pointer;
                                        "
                                        ><svg
                                          width="14"
                                          height="15"
                                          viewBox="0 0 14 15"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M14 1.91L12.59 0.5L7 6.09L1.41 0.5L0 1.91L5.59 7.5L0 13.09L1.41 14.5L7 8.91L12.59 14.5L14 13.09L8.41 7.5L14 1.91Z"
                                            fill="#677F8E"
                                          />
                                        </svg>
                                      </span>
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
                                          style="
                                            margin-top: 1rem;
                                            margin-bottom: 20px;
                                          "
                                        >
                                          ระบุ OTP ที่ไดัรับจาก SMS
                                          (068-123-1444)
                                        </p>
                                      </div>
                                      <div
                                        class="otp-inputs d-flex justify-content-center"
                                        style="margin-bottom: 48px"
                                      >
                                        <input
                                          type="text"
                                          class="form-control otp-input"
                                          style="margin-left: 0px !important"
                                        />
                                        <input
                                          type="text"
                                          class="form-control otp-input"
                                        />
                                        <input
                                          type="text"
                                          class="form-control otp-input"
                                        />
                                        <input
                                          type="text"
                                          class="form-control otp-input"
                                        />
                                        <input
                                          type="text"
                                          class="form-control otp-input"
                                        />
                                        <input
                                          type="text"
                                          class="form-control otp-input"
                                        />
                                      </div>
                                      <div
                                        class="d-flex justify-content-center"
                                      >
                                        <div
                                          class="buttonConfirm d-grid gap-2 mb-4"
                                          style="width: 78%"
                                        >
                                          <button
                                            type="button"
                                            class="btn btn-primary btn-text-sarabun"
                                            @click="confirmOtpEmail"
                                          >
                                            ยืนยัน
                                          </button>
                                        </div>
                                      </div>
                                      <div
                                        class="d-flex justify-content-center"
                                      >
                                        <p
                                          class="text-grey text-center"
                                          style="
                                            margin-top: 1rem;
                                            margin-bottom: 20px;
                                          "
                                        >
                                          หากไม่ได้รับ OTP
                                        </p>

                                        <p
                                          class="text-center"
                                          style="
                                            margin-top: 1rem;
                                            margin-bottom: 20px;
                                            margin-left: 0.5rem;
                                            color: #f38220 !important;
                                          "
                                        >
                                          กดส่งอีกครั้ง
                                        </p>
                                      </div>

                                      <div class="bottom-detail">
                                        <p
                                          class="text-center"
                                          style="color: #677f8e"
                                        >
                                          กรณีไม่สามารถยืนยัน OTP ได ้โทร.
                                          063-393-4664
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
                  <!-- OTP Modal -->
                  <!-- Success Modal -->
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
                                      <div class="success-message m-auto">
                                        <p class="success-heading">
                                          สมัคร Free Trial เรียบร้อย
                                        </p>
                                        <p class="success-message-otp">
                                          กรุณาตรวจสอบอีเมลของท่านเพื่อดำเนินการ
                                          ขั้นตอนต่อไป
                                        </p>
                                      </div>
                                      <div
                                        class="finisButton-SuccesOtp"
                                        @click="showModalOTPSuccess = false"
                                      >
                                        <button
                                          type="button"
                                          class="btn btn-text-sarabun success-btn"
                                        >
                                          กลับหน้าเข้าสู่ระบบ
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
                  <!-- Success Modal -->
                  <b-button
                    class="font-family_th mt-32 fda_submit_btn-primary"
                    @click="handler"
                    variant="primary"
                  >
                    เข้าสู่ระบบ
                  </b-button>
                  <div class="text-center p-t-32 thai-font">
                    <b-link
                      class="textLink-ftLogin"
                      @click="showRegisterModal = true"
                      >เปิดบัญชี</b-link
                    >
                    <span class="mlr-8 text_sub-ftLogin">หรือ</span>
                    <b-link
                      class="textLink-ftLogin"
                      @click="openModalRegisterSpecialLink"
                      >ทดลองใช้งานฟรี</b-link
                    >
                  </div>
                </b-form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      showPassword: false,
      formInline: {
        user: "",
        password: "",
      },
      ruleInline: {
        user: [
          {
            required: true,
            message: "loginvalidate",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "pwdvalidate1",
            trigger: "blur",
          },
          {
            type: "string",
            min: 6,
            message: "pwdvalidate2",
            trigger: "blur",
          },
        ],
      },
      pin: "",
      showPin: false,
      savePin: false,
      showModal: false,
      showRegisterModal: false,
      eventNameField: false,
      showOtp: false,
      showModalOTPSuccess: false,
      selected: null,
    };
  },
  created: function () {
    this.init();
  },
  computed: {
    isLogin: function () {
      return this.$store.getters.isLogin;
    },
  },
  methods: {
    init() {
      console.log(this.isLogin);
      this.$store.state.HeaderActiveName = "0";

      if (this.isLogin) {
        this.$router.push("/test");
      }
    },
    handler() {
      let reg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/,
        tel = this.formInline.user,
        flagtel = reg.test(tel),
        flagpass = this.formInline.password.length >= 6 ? true : false;
      flagtel && flagpass;
      (!flagtel || !flagpass) &&
        console.log("Please fill in the complete information");
      this.handleSubmit("formInline");
    },
    logout() {
      this.$http.post(this.host + this.api.uc.logout, {}).then((response) => {
        var resp = response.body;
        if (resp.code == 0) {
          localStorage.setItem("MEMBER", JSON.stringify(null));
          localStorage.setItem("TOKEN", null);
          localStorage.removeItem("USERKEY", null);
        } else {
          console.log(resp.message);
        }
      });
    },
    handleSubmit(name) {
      var params = {};
      params["username"] = this.formInline.user;
      params["password"] = this.formInline.password;
      this.$http
        .post(this.host + this.api.uc.login, params)
        .then((response) => {
          var resp = response.body;
          if (resp.code == 0) {
            this.$store.commit("setMember", response.body.data);
            if (this.$route.query.key != null && this.$route.query.key != "") {
              localStorage.setItem("USERKEY", this.$route.query.key);
            }
            this.$router.push("/home");
          } else {
            console.log(resp.message);
          }
        });
    },
    toggleShow() {
      this.showPassword = !this.showPassword;
    },
    toggleShowPin() {
      this.showPin = !this.showPin;
    },
    openModalForgetPass() {
      this.showModal = true;
    },

    openModalRegisterSpecialLink() {
      this.showRegisterModal = !this.showRegisterModal;
      this.eventNameField = !this.eventNameField;
    },
    showOtpModal() {
      this.showRegisterModal = !this.showRegisterModal;
      this.showOtp = !this.showOtp;
    },

    confirmOtpEmail() {
      this.showOtp = !this.showOtp;
      this.showModalOTPSuccess = !this.showModalOTPSuccess;
    },
  },
});
</script>

<style lang="scss" scoped>
.fda0112982022-login {
  input:focus {
    outline: none !important;
    box-shadow: none !important;
  }
  select:focus-visible {
    outline: none !important;
    box-shadow: none !important;
  }
  .logo-wrap {
    display: grid;
    place-items: center;
    width: 344px;
  }

  @media (max-width: 768px) {
    .fdaLogin-content {
      padding: 240px 0 !important;
    }
  }
  .fdaLogin-content {
    padding: 72px 0;
  }

  .fdaLogin-container {
    height: 100vh;
    width: 100%;
    position: absolute;
    top: 0;
    right: 0;
  }

  .fdaForm {
    width: 344px;
    margin-top: 32px;
    .text-title {
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
      color: var(--primary);
    }
    .mb16 {
      margin-bottom: 16px;
    }

    .login-psw {
      position: relative;
      .fdaPass_close {
        width: 20px;
        height: 20px;
        position: absolute;
        right: 10px;
        top: 47.45%;
        bottom: 0;
        margin: auto 0;
      }
      .fdaPass_close svg {
        width: 20px;
        height: 20px;
        color: var(--sub-icon) !important;
      }
      .button-icon {
        cursor: pointer;
      }
    }

    .fr-right {
      font-family: "sarabun";
      float: right;
      .forgot-pass {
        position: relative;
        top: 0;
        cursor: pointer;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        color: var(--orange-accent) !important;
        text-decoration: none;
      }
    }

    .fda_submit_btn-primary.btn-primary {
      width: 344px !important;
      height: 36px !important;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      font-family: "sarabun";
      padding: 0px 16px;
    }

    .mt-32 {
      margin-top: 32px;
    }

    .p-t-32 {
      padding-top: 32px;
    }
    .mlr-8 {
      margin: 0 8px;
    }

    .textLink-ftLogin {
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
      text-decoration: none;
    }
    .text_sub-ftLogin {
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
      color: var(--sub-1) !important;
    }
  }

  .cover-chk {
    margin-left: 0px;
    margin-bottom: 16px;
    margin-top: 16px;
  }

  .cbx {
    margin: auto;
    -webkit-user-select: none;
    user-select: none;
    cursor: pointer;
  }
  .inp-cbx {
    background-color: rgba(34, 43, 47, 1) !important;
    border-color: rgba(60, 81, 93, 1) !important;
  }
  .cbx span {
    padding-top: 2px;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    padding-left: 10px !important;
    display: inline-block;
    vertical-align: middle;
    transform: translate3d(0, 0, 0);
    border-radius: 2px !important;
  }
  .cbx span:first-child {
    position: relative;
    width: 18px;
    height: 18px;
    border-radius: 0px;
    transform: scale(1);
    vertical-align: middle;
    border: 1px solid #222b2f;
    transition: all 0.2s ease;
  }
  .cbx span:first-child svg {
    position: absolute;
    top: 3px;
    left: 2px;
    fill: none;
    stroke: #0a0d10;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-dasharray: 16px;
    stroke-dashoffset: 16px;
    transition: all 0.3s ease;
    transition-delay: 0.1s;
    transform: translate3d(0, 0, 0);
  }
  .cbx span:first-child:before {
    content: "";
    width: 100%;
    height: 100%;
    background: #222b2f;
    display: block;
    transform: scale(0);
    opacity: 1;
    border-radius: 2px;
  }
  .cbx span:last-child {
    padding-left: 3px;
  }
  .cbx:hover span:first-child {
    border-color: #222b2f;
  }

  .inp-cbx:checked + .cbx span:first-child {
    background: #f38220 !important;
    border-color: #f38220 !important;
    animation: wave 0.4s ease;
  }
  .inp-cbx:checked + .cbx span:first-child svg {
    stroke-dashoffset: 0;
  }
  .inp-cbx:checked + .cbx span:first-child:before {
    transform: scale(3.5);
    opacity: 0;
    transition: all 0.6s ease;
  }

  .modal-psw {
    .modal {
      z-index: 1;
      background-color: #080b0c;
      width: 100%;
      height: 100%;
    }
    .modal-register {
      max-width: 560px !important;
      width: 560px !important;
    }
    .modal-content {
      background-color: rgba(20, 27, 31, 1) !important;
      margin-top: 88px;
      width: 482px;
      .modal-header {
        border-bottom: none !important;
        justify-content: center;
        height: 75px;
        width: 90%;
        margin: 8px auto;

        .modal-title {
          font-weight: 600;
          font-size: 18px;
          line-height: 27px;
          color: var(--primary);
          text-align: center;
        }
      }
      .register {
        display: flex;
        justify-content: center;
        padding: 8px !important;
        width: 560px !important ;
        height: auto !important;
      }
      .modal-body {
        height: 324px;
        padding: 16px 68px 32px 68px;
        .fdaForm-psw {
          padding: 0;
          .pad-16 {
            .pad-8 {
              padding: 0px 8px 8px 0px;
            }
            .text-title {
              font-weight: 400;
              font-size: 14px;
              line-height: 24px;
              color: var(--primary);
            }
            .text-title1 {
              margin-top: 16px;
              font-weight: 400;
              font-size: 14px;
              line-height: 24px;
              color: var(--primary);
            }
            .font-sarabun {
              font-family: "Sarabun" !important;
            }
            .place-hold {
              font-weight: 400;
              font-size: 14px;
              line-height: 24px;
            }
          }
        }
      }
      .modal-footer {
        border-top: none !important;
        display: none;
      }
    }
    //  button

    .cover-button-register {
      justify-content: center;
      display: flex;
      margin: 24px 0 0 0 !important;

      padding: 24px;
      border-top: 1px solid #28363e !important;
    }
    .cover-button {
      margin-top: 48px;
      .buttons-C {
        background-color: var(--orange-accent);
        border-color: var(--orange-accent);
        color: var(--Black) !important;
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        width: 120px;
        height: 36px;
        margin-right: 12px;
        margin-left: 6px;
      }
      .buttons-D {
        background-color: var(--gray-active-state);
        border-color: var(--gray-active-state);
        color: var(--white) !important;
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        width: 120px;
        height: 36px;
        margin-right: 6px;
      }
    }
    .contact {
      margin-top: 16px;
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
      color: var(--sub-2);
      padding-bottom: 20px;
    }
  }
  .font-sarabun {
    font-family: "Sarabun" !important;
  }
  .p-8 {
    padding: 8px !important;
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
    background-color: #141b1f;
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
  .otp-input {
    width: 44px !important;
    height: 56px !important;
    border-radius: 4px !important;
    margin-left: 16px !important;
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
    padding-bottom: 32px;
  }
  .finisButton-SuccesOtp {
    padding-bottom: 100px;
  }
  .success-heading {
    font-family: "Noto Sans Thai";
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    text-align: center;
    color: #d6dde1 !important;
    margin-bottom: 0px;
  }
  .success-message-otp {
    margin: 0 auto;
    max-width: 70%;
    font-family: "Sarabun";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    text-align: center;
    color: #9bacb6;
  }
  .success-btn {
    background: #38454d;
    border-radius: 4px;
  }
  .wraper-input {
    position: relative;
    width: 256px;
    height: 40px;
    background: #222b2f;
    border-radius: 4px;
    span {
      position: absolute;
      right: 17px;
      top: 9px;
    }
    select {
      width: 100%;
      height: 100%;
      color: #d6dde1;
      padding: 0 15px;
    }
  }
  ::-webkit-input-placeholder {
    color: #566a76;
  }
  .tf-heading {
    position: relative;
    h2 {
      font-size: 18px;
      font-weight: 600;
      color: #d6dde1;
      text-align: center;
      font-family: "Noto Sans Thai";
      padding-top: 9px;
    }
    span {
      position: absolute;
      right: 30px;
      top: 0;
    }
  }
}
</style>
