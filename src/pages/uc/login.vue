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
                  <b-form-group class="login-psw">
                    <label class="text-title">Password</label>
                    <span class="fr-right">
                      <a href="#" class="forgot-pass"> ลืมรหัสผ่าน </a>
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
                  <b-button
                    class="font-family_th mt-32 fda_submit_btn-primary"
                    @click="handler"
                    variant="primary"
                  >
                    เข้าสู่ระบบ
                  </b-button>
                  <div class="text-center p-t-32">
                    <b-link class="textLink-ftLogin">เปิดบัญชี</b-link>
                    <span class="mlr-8 text_sub-ftLogin">หรือ</span>
                    <b-link class="textLink-ftLogin">ทดลองใช้งานฟรี</b-link>
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
  },
});
</script>

<style lang="scss" scoped>
.fda0112982022-login {
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
      font-family: var(--bs-roboto-font-sans-serif);
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
        position: absolute;
        right: 10px;
        top: 40.45%;
        bottom: 0;
        margin: auto 0;
        height: 0.01em;
        display: flex;
        max-height: 2em;
        align-items: center;
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
      float: right;
      .forgot-pass {
        position: relative;
        top: 0;
        font-family: var(--bs-nst-font-sans-serif) !important;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        color: var(--orange-accent) !important;
        text-decoration: none;
      }
    }

    .font-family_th {
      font-family: var(--bs-nst-font-sans-serif) !important;
    }

    .fda_submit_btn-primary.btn-primary {
      width: 344px !important;
      height: 36px !important;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
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
      font-family: var(--bs-nst-font-sans-serif) !important;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
      text-decoration: none;
    }
    .text_sub-ftLogin {
      font-family: var(--bs-nst-font-sans-serif) !important;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
      color: var(--sub-1) !important;
    }
  }
}
</style>
