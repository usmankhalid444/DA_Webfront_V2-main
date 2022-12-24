<template>
  <div>
    <b-modal
      class="otp-verify-modal"
      id="otp-verify-modal"
      ref="otp-verify-modal"
      :hide-footer="true"
      :hide-header="true"
    >
      <!-- centered -->
      <div class="otp-verify-modal">
        <div class="tick-img">
          <img
            src="@/assets/images/wallet/tick-svg.png"
            alt="tick-image"
            width="67px"
          />
        </div>
        <div class="m-center">
          <p class="c-title">ระบบได้รับคำขอถอนเงินแล้ว</p>
          <p class="c-value thai-font">
            คุณจะได้รับเงินภายใน 1 นาที ถึง 24 ชั่วโมง<br />และจะได้รับอีเมลยืนยันเมื่อการถอนเงินสำเร็จ
          </p>
        </div>
        <div class="row">
          <div class="col-5 thai-font"><span>ธนาคารที่รับเงิน</span></div>
          <div class="col-7 thai-font">
            ธนาคารกรุงไทย (KTB)<br />นาย วาเลนทองคำ<br />098-2-34323-22
          </div>
        </div>
        <div class="row tp">
          <div class="col-5 thai-font"><span>ค่าธรรมเนียม</span></div>
          <div class="col-7 font-roboto-flex">-20.00 THB</div>
        </div>
        <div class="row tp">
          <div class="col-5 thai-font"><span>จำนวนที่ได้รับ</span></div>
          <div class="col-7 font-roboto-flex">999,980.00 THB</div>
        </div>
        <div class="row tp">
          <div class="col-5 thai-font"><span>จำนวนเงิน</span></div>
          <div class="col-7 font-roboto-flex">1,000,000.00 THB</div>
        </div>
        <button @click="mainPage()" class="f-btn">กลับหน้าหลัก</button>
      </div>
    </b-modal>
  </div>
</template>
<script>
export default {
  methods: {
    mainPage() {
      this.$router.push("/withdraw/cash_main_account");
    },
  },
};
</script>
<style lang="scss">
#otp-verify-modal___BV_modal_content_ {
  background-color: #1c262b;
  width: 407px;
  margin: auto;
  margin-top: 150px;
  min-height: 513px;
  border-radius: 15px;

  font-family: "Noto Sans Thai";
  #otp-verify-modal___BV_modal_body_ {
    padding: 0px;
    .close-btn {
      cursor: pointer;
      position: absolute;
      top: 20px;
      right: 30px;
    }
    .tick-img {
      display: flex;
      justify-content: center;
      margin-top: 35px;
      margin-bottom: 26px;
    }
    .m-center {
      text-align: center;
      border-bottom: 1px solid #28363e;
      padding-bottom: 24px;
      margin-bottom: 24px;
      width: 80%;
      margin-left: auto;
      margin-right: auto;
      p {
        margin: 0;
      }
      .c-title {
        color: #d6dde1;
        margin-bottom: 6px;
        font-size: 16px;
        font-weight: 700;
        line-height: 24px;
      }
      .c-value {
        color: #677f8e;
      }
    }
    .f-btn {
      width: 163px;
      height: 55px;
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
<style scoped>
.col-5 {
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #677f8e;
}
.col-5 > span {
  width: 88px;
  display: block;
  margin-left: auto;
}
.col-7 {
  line-height: 19px;
}
.tp {
  margin-top: 9px;
}
</style>
