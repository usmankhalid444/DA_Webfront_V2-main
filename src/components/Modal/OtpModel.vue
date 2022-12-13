<template>
  <div>
    <!-- cash withdraw modal -->

    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <div class="modalHeading">
              <label>ยืนยันการถอนเงิน</label>
              <span @click="closeModel()">&times;</span>
            </div>

            <!-- further heading -->

            <div class="modalHeadingWithdraw">
              <label style="color: #9bacb6; font-size: 14px; font-weight: 400"
                >ระบุ OTP ที่ไดัรับจาก SMS (068-123-1444)</label
              >
            </div>

            <!-- OTP INPUT FIELD -->

            <div class="OTPInput">
              <input
                type="number"
                maxlength="1"
                oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                @input="next"
              />
              <input
                type="number"
                maxlength="1"
                oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                @input="next"
              />
              <input
                type="number"
                maxlength="1"
                oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                @input="next"
              />
              <input
                type="number"
                maxlength="1"
                oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                @input="next"
              />
              <input
                type="number"
                maxlength="1"
                oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                @input="next"
              />
              <input
                type="number"
                maxlength="1"
                oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                @input="next"
              />
            </div>

            <!-- buttons -->

            <div class="flexCoinWithdraw">
              <button class="btn1" @click="onOTPSubmitted()">ยืนยัน</button>
              <!-- <button class="btn2">ยกเลิกการฝากเงิน</button> -->
            </div>

            <div class="bottomLine">
              <label>หากไม่ได้รับ OTP </label>
              <label style="color: #f38220">กดส่งอีกครั้ง</label>
            </div>
            <label class="l-info"
              >กรณีไม่สามารถยืนยัน OTP ได้ โทร. XX-XXX-XXXX</label
            >
            <!-- <div v-if="copyAlert" class="copyAlert">
                <div class="tickImg">
                  <img src="@/assets/images/wallet/tick.png" />
                </div>
                <label>Copy Address สำเร็จแล้ว</label>
              </div> -->
          </div>
        </div>
      </div>
    </transition>
    <!-- cash withdraw done modal -->
  </div>
</template>
<script>
export default {
  name: "model",
  data() {
    return {
      showWithdrawOTPModal: true,
    };
  },
  methods: {
    next(e) {
      if (e.data == null) {
        e.target?.previousSibling?.focus();
      } else {
        e.target?.nextSibling?.focus();
        // console.log(e.data);
      }
    },
    onOTPSubmitted() {
      this.showWithdrawOTPModal = false;
      //showWithdrawDoneAlert = true;
      this.$emit("onOTPSubmitted");
    },
    closeModel() {
      this.$emit("closeModel");
    },
  },
};
</script>
<style scoped lang="scss">
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: table;
  transition: opacity 0.3s ease;
}
.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
.modal-container {
  max-width: 424px;
  min-height: 411px;
  /* left: 0px; */
  /* top: 75px; */
  background: #141b1f;
  border-radius: 8px 8px 8px 8px;
  margin: 0px auto;
  box-shadow: 0 2px 8px rgb(0 0 0 / 33%);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
  padding: 0px 25px;
}
.modalHeading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 75px;
  position: relative;
  line-height: 75px;
}
.modalHeading > span {
  position: absolute;
  right: 0px;
  font-size: 30px;
  color: rgb(155, 172, 182);
  cursor: pointer;
}
.modalHeading label {
  margin: 0px;
  font-weight: 600;
  font-size: 18px;
  color: #d6dde1;
}
.modalHeadingWithdraw {
  display: flex;
  margin-top: 24px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.OTPInput {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
  gap: 10px;
  input {
    caret-color: #f38220;
  }
}
.flexCoinWithdraw {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.bottomLine {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
  gap: 8px;
}
.bottomLine label {
  color: #9bacb6;
  font-size: 14px;
  font-weight: 400;
}
.flexCoinWithdraw .btn1 {
  background-color: #f38220;
  margin-top: 40px;
  padding: 0px 16px;
  color: #0a0d10;
  width: 340px;
  height: 40px;
  cursor: pointer;
  border-radius: 4px;
  border-style: none;
  font-size: 14px;
  font-weight: 400;
}
.OTPInput input {
  width: 44px;
  height: 56px;
  background-color: #222b2f;
  border-radius: 4px;
  color: #fff;
  padding: 12px;
  font-size: 30px;
  border-style: none;
  outline: none;
}
.l-info {
  color: #677f8e;
  font-size: 14px;
  text-align: center;
  display: block;
  line-height: 24px;
  margin-top: 32px;
}
</style>
