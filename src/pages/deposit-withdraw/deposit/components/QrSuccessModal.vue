<template>
  <div>
    <b-modal
      class="qr-success-modal"
      id="qr-success-modal"
      :hide-footer="true"
      :hide-header="true"
    >
      <div class="qr-success-modal">
        <div>
          <span class="close-btn" @click="$bvModal.hide('qr-success-modal')"
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
        <div class="tick-img">
          <img src="@/assets/images/wallet/tick-svg.png" alt="tick-image" />
        </div>
        <div class="m-center">
          <p class="c-title">บันทึก QR Code สำเร็จ</p>
          <p class="c-value">นำ QR Code</p>
          <p class="c-value">ที่ได้รับไปสแกนจากแอปพลิเคชั่นต้นทาง</p>
          <p class="c-value">เพื่อฝากเหรียญเข้าสู่ Portfolio ของท่าน</p>
        </div>
        <button @click="$bvModal.hide('qr-success-modal')" class="f-btn">
          เสร็จสิ้น
        </button>
      </div>
    </b-modal>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
#qr-success-modal___BV_modal_content_ {
  background-color: #141b1f;
  min-height: 480px;
  font-family: "Noto Sans Thai";
  #qr-success-modal___BV_modal_body_ {
    .close-btn {
      cursor: pointer;
      position: absolute;
      top: 20px;
      right: 30px;
    }
    .tick-img {
      display: flex;
      justify-content: center;
      margin-top: 55px;
    }
    .m-center {
      text-align: center;
      margin-top: 40px;
      p {
        margin: 0;
      }
      .c-title {
        color: #d6dde1;
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 10px;
      }
      .c-value {
        color: #677f8e;
      }
    }
    .f-btn {
      width: 163px;
      height: 44px;
      display: block;
      margin: auto;
      border-radius: 4px;
      color: white;
      font-size: 16px;
      font-weight: 700;
      margin-top: 40px;
      background-color: #222b2f;
    }
  }
}
</style>
