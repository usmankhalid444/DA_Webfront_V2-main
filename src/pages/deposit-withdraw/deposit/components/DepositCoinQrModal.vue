<template>
  <div>
    <b-modal
      class="dc-qr-modal"
      id="deposit-coin-qr-modal"
      :hide-footer="true"
      :hide-header="true"
    >
      <div class="dc-qr-modal">
        <div class="modal-head">
          <p>สแกน QR Code หรือ Copy Address</p>
          <p>เพื่อฝากเหรียญเข้า Portfolio ของท่าน</p>
          <span @click="$bvModal.hide('deposit-coin-qr-modal')"
            ><svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
                fill="#677F8E"
              />
            </svg>
          </span>
        </div>
        <img
          class="barcode-image"
          src="@/assets/images/wallet/barcode.png"
          alt="barcode-image"
        />
        <div class="body-content">
          <p class="body-title">AXS Deposit Address</p>
          <div class="body-value">
            <p>d3o30493jflkei309eioldkeoi20293kdoe93930 9eioldkeoi2</p>
            <span @click="copySuccess('Address')"
              ><svg
                width="17"
                height="20"
                viewBox="0 0 17 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.3332 0.833252H2.33317C1.4165 0.833252 0.666504 1.58325 0.666504 2.49992V14.1666H2.33317V2.49992H12.3332V0.833252ZM14.8332 4.16658H5.6665C4.74984 4.16658 3.99984 4.91658 3.99984 5.83325V17.4999C3.99984 18.4166 4.74984 19.1666 5.6665 19.1666H14.8332C15.7498 19.1666 16.4998 18.4166 16.4998 17.4999V5.83325C16.4998 4.91658 15.7498 4.16658 14.8332 4.16658ZM14.8332 17.4999H5.6665V5.83325H14.8332V17.4999Z"
                  fill="#677F8E"
                />
              </svg>
            </span>
          </div>
          <p class="body-title" style="margin-top: 24px">MEMO</p>
          <div class="body-value">
            <p>1209394</p>
            <span @click="copySuccess('MEMO')"
              ><svg
                width="17"
                height="20"
                viewBox="0 0 17 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.3332 0.833252H2.33317C1.4165 0.833252 0.666504 1.58325 0.666504 2.49992V14.1666H2.33317V2.49992H12.3332V0.833252ZM14.8332 4.16658H5.6665C4.74984 4.16658 3.99984 4.91658 3.99984 5.83325V17.4999C3.99984 18.4166 4.74984 19.1666 5.6665 19.1666H14.8332C15.7498 19.1666 16.4998 18.4166 16.4998 17.4999V5.83325C16.4998 4.91658 15.7498 4.16658 14.8332 4.16658ZM14.8332 17.4999H5.6665V5.83325H14.8332V17.4999Z"
                  fill="#677F8E"
                />
              </svg>
            </span>
          </div>
          <button
            class="f-btn"
            @click="
              $bvModal.hide('deposit-coin-qr-modal'),
                $bvModal.show('qr-success-modal')
            "
          >
            บันทึกรูป
          </button>
        </div>
      </div>
    </b-modal>
    <QrSuccessModal />
    <notifications position="center center" classes="my-custom-class">
      <template slot="body" slot-scope="{ item, close }">
        <div class="my-notification">
          <p class="title">
            {{ item.title }}
          </p>
          <button class="close" @click="close">
            <i class="fa fa-fw fa-close"></i>
          </button>
          <div class="success-notification">
            <span
              ><svg
                width="16"
                height="12"
                viewBox="0 0 16 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.4987 9.49984L1.9987 5.99984L0.832031 7.1665L5.4987 11.8332L15.4987 1.83317L14.332 0.666504L5.4987 9.49984Z"
                  fill="white"
                />
              </svg>
            </span>
            <span>Copy {{ success_text }} สำเร็จแล้ว</span>
          </div>
        </div>
      </template>
    </notifications>
  </div>
</template>
<script>
import QrSuccessModal from "./QrSuccessModal.vue";
export default {
  components: { QrSuccessModal },
  data() {
    return {
      success_text: "",
    };
  },
  methods: {
    copySuccess(e) {
      console.log("hi");
      this.success_text = e;
      this.$notify("Hello!");
    },
  },
};
</script>
<style lang="scss">
#deposit-coin-qr-modal___BV_modal_content_ {
  background-color: #141b1f;
  width: 480px;
  #deposit-coin-qr-modal___BV_modal_body_ {
    font-family: var(--bs-roboto-font-sans-serif);
    margin-top: 5px;
    .barcode-image {
      height: 140px;
      width: 140px;
      margin: 24px auto;
      display: block;
    }
    p {
      margin: 0;
    }
    .modal-head {
      text-align: center;
      position: relative;
      p {
        font-size: 18px;
        font-family: "Noto Sans Thai";
        font-weight: 600;
        color: #d6dde1;
      }
      span {
        float: right;
        position: absolute;
        top: 10px;
        right: 20px;
        cursor: pointer;
      }
    }
    .body-content {
      width: 332px;
      margin: auto;
      padding-bottom: 20px;
      .body-title {
        color: #9bacb6;
        line-height: 24px;
      }
      .body-value {
        display: flex;
        align-items: center;
        position: relative;
        width: 332px;
        min-height: 40px;
        background-color: #222b2f;
        color: #d6dde1;
        padding: 10px 0;
        padding-left: 6px;
        border-radius: 4px;
        margin-top: 4px;
        span {
          position: absolute;
          right: 13px;
          top: 50%;
          transform: translateY(-50%);
          cursor: pointer;
        }
      }
      .f-btn {
        width: 332px;
        height: 36px;
        display: block;
        margin: auto;
        border-radius: 4px;
        color: #0a0d10;
        margin-top: 32px;
        background-color: #f38220;
        &:hover {
          background-color: #f28e38;
        }
      }
    }
  }
}
.success-notification {
  position: absolute;
  top: 180px;
  left: 50px;
  padding: 8px 0px;
  background: #40994f;
  width: 206px;
  color: white;
  border-radius: 3px;
  text-align: center;
  span {
    margin: 0 3px;
  }
}
</style>
