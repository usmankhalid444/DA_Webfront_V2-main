<template>
  <div>
    <b-modal
      class="qr-modal"
      id="deposit-qr-modal"
      :hide-footer="true"
      :hide-header="true"
    >
      <div class="qr-modal">
        <div class="modal-top">
          <p>สแกน QR Code</p>
          <p>ผ่าน Mobile Banking เพื่อฝากเงิน</p>
        </div>
        <img
          class="barcode-image"
          src="@/assets/images/wallet/barcode.png"
          alt="barcode-image"
        />
        <div class="info">
          <div class="row">
            <div class="col-5 title">จำนวนเงินฝาก</div>
            <div class="col-7 n-value" style="font-family: 'Roboto Flex'">
              100,000.00 THB
            </div>
            <div class="col-5 title">ผู้นำฝาก</div>
            <div class="col-7 value">ณัฎฐ์ เพ็ญชาติ</div>
            <div class="col-5 title">ไปยัง</div>
            <div class="col-7 value">Finansia Digital Asset</div>
            <div class="col-5 title">เลขอ้างอิง</div>
            <div class="col-7 value">KDS3409409830239430</div>
          </div>
        </div>
        <div class="ul-c">
          <p>หมายเหตุ</p>
          <ul>
            <li>โอนเงินด้วยบัญชีที่ให้ไว้กับบริษัทเท่านั้น (สูงสุด 2 บัญชี)</li>
            <li>โอนเงินได้ตลอด 24 ชั่วโมง (ขึ้นอยู่กับธนาคารต้นทาง)</li>
            <li class="c-red">
              QR Code นี้ใช้ได้ถึงวันที่ 10 ตุลาคม 2022 21:34 น.
            </li>
          </ul>
        </div>
        <div class="f-btns">
          <button @click="$bvModal.hide('deposit-qr-modal')" class="b-yellow">
            บันทึกรูป
          </button>
          <button @click="$bvModal.hide('deposit-qr-modal')" class="b-gray">
            ยกเลิก
          </button>
        </div>
      </div>
    </b-modal>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style lang="scss">
#deposit-qr-modal___BV_modal_content_ {
  font-family: var(--bs-roboto-font-sans-serif);
  background-color: #141b1f;
  width: 480px;
  margin: auto;
  margin-top: 70px;
  padding: 20px 0;
}

.qr-modal {
  font-family: "Sarabun";
  line-height: 24px;
  .modal-top {
    text-align: center;
    color: #d6dde1;
    font-size: 18px;
    line-height: 27.2px;
    font-family: "Noto Sans Thai";
    p {
      margin: 0;
      margin-bottom: 2px;
    }
  }
  .barcode-image {
    height: 140px;
    width: 140px;
    margin: 20px auto;
    display: block;
  }
  .info {
    background-color: #1c262b;
    width: 332px;
    margin: 10px auto;
    padding: 16px 24px;
    border-radius: 8px;
    .title {
      color: #9bacb6;
      margin-bottom: 5px;
    }
    .value {
      color: #d6dde1;
      margin-bottom: 5px;
    }
    .n-value {
      font-size: 18px;
      color: #d6dde1;
      margin-bottom: 5px;
    }
  }
  .ul-c {
    width: 332px;
    margin: auto;
    margin-top: 20px;
    p {
      margin: 0;
      margin-bottom: 10px;
    }
    ul {
      margin: 0;
      padding-left: 22px;
      list-style: disc;
      li {
        margin-bottom: 5px;
      }
      .c-red {
        color: #de2d40;
      }
    }
  }
  .f-btns {
    text-align: center;
    margin-top: 25px;
    .b-yellow {
      background-color: #f38220;
      color: #0a0d10;
    }
    .b-gray {
      background-color: #38454d;
      color: #ffffff;
    }
    button {
      width: 160px;
      height: 36px;
      margin: 0 10px;
      border-radius: 4px;
    }
  }
}
</style>
