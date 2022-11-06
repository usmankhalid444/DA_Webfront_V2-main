<template>
  <div>
          <b-modal id="bv-modal-example" class="container">
            <div class="modai_detail-popup">
              <div class="headingcover">
                <h1 class="heading">Order Confimation</h1>
              </div>
              <span class="para">
                <div class="textbold">
                  <div class="gaptextbold">Order</div>
                  <div class="gaptextbold">Coin</div>
                  <div class="gaptextbold">Price</div>
                  <div class="gaptextbold">Amount</div>
                  <div class="gaptextbold">Total</div>
                </div>
                <div class="textstrandard">
                  <div
                    class="gaptext"
                    style="
                      background-color: rgb(64, 153, 79);
                      width: 40px;
                      height: 22px;
                      border-radius: 2px;
                      text-align: center;
                    "
                  >
                    BUY
                  </div>
                  <div class="gaptext">BTC/THB</div>
                  <div class="gaptext">1,025,500.10(Limit)</div>
                  <div class="gaptext">10,000 THB</div>
                  <div class="gaptext">0.01535 BTC</div>
                </div>
              </span>
            </div>
            <div class="agreement">
              <div
                style="margin-left: 16px; margin-bottom: 15px; margin-top: 15px"
              >
                <input
                  type="checkbox"
                  id="cbx"
                  class="inp-cbx"
                  style="display: none"
                />
                <label for="cbx" class="cbx">
                  <span>
                    <svg width="12px" height="10px" viewBox="0 0 12 10">
                      <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                    </svg>
                  </span>
                  <span style="padding-left: 10px">ไม่ต้องแจ้งเตือนอีก</span>
                </label>
              </div>
            </div>
            <div class="buttons-AB">
              <b-button
                class="buttons-A"
                style="
                  background-color: rgb(243, 130, 32);
                  color: #0a0d10;
                  border-color: rgb(243, 130, 32);
                "
                >ยืนยัน</b-button
              >
              <b-button
                class="buttons-B"
                style="
                  background-color: #222b2f;
                  color: #ffffff;
                  border-color: #222b2f;
                "
                >ยกเลิก</b-button
              >
            </div>
          </b-modal>
  </div>
</template>

<script>
export default {
    props: ['title']
}
</script>

<style lang="scss">
// DEFALUT THE MODAL
.modal.fade .modal-dialog {
  margin-top: 181px !important;
}
.modal-content {
  background-color: #141b1f !important;
  width: 430px !important;
}
.modal-body {
  background-color: #141b1f !important;
  border-radius: 8px 8px 8px 8px !important;
}
.modal-header,
.modal-footer {
  display: none !important;
}
END DEFALUT THE MODAL BUTTON DEFALUT .btn .buttons-A .btn-secondary {
  background-color: #fff !important;
}

//INSIDE POPUP
.container {
  background: #141b1f;
  color: #d6dde1;
  width: 100%;
  max-width: 360px;
  padding: 40px;
  border-radius: 15px;
  margin: 0 auto;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.heading {
  padding-top: 20.5px;
  font-size: 18px;
  text-align: center;
  padding-bottom: 5px;
}
.gaptextbold {
  padding-left: 16px !important;
  color: #677f8e;
  margin-block: 11px;
}
.textbold {
  display: inline-block;
  padding-top: 20px;
}
.textstrandard {
  display: inline-block;
  padding-left: 50px;
  padding-top: 20px;
}
.gaptext {
  padding-block: 0px;
  color: #d6dde1;
  margin-block: 10.8px;
}
.row {
  display: inline;
  padding-left: 100px;
}
.para {
  font-weight: 600;
}
// checkbox
.cbx {
  margin: auto;
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
}
.cbx span {
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
  background: #f38220;
  border-color: #f38220;
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

@keyframes wave {
  50% {
    transform: scale(0.9);
  }
}
// END checkbox

BUTTONS .buttons-A {
  display: inline-flex;
  justify-content: flex-start;
  padding: 0px 0px;
  width: 175px;
  height: 36px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
}
.buttons-B {
  display: inline-flex;
  justify-content: flex-end;
  padding: 0px;
  width: 175px;
  height: 36px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
}
.buttons-AB {
  padding-top: 10spx;
  padding-left: 16px !important;
  display: inline-flex;
  gap: 16px;
  display: inline-flex;
  justify-content: flex;
  text-align: center;
  padding-bottom: 10px;
}
.buttons-A a {
  background: white;
  width: 170px;
  padding: 10px;
  text-align: center;
  border-radius: 4px;
}
.buttons-A a:hover {
  opacity: 0.9;
}
.buttons-A a:nth-child(1) {
  background-color: #f38220;
  color: #0a0d10;
}
.buttons-B a {
  background: #222b2f;
  width: 165px;
  padding: 10px;
  text-align: center;
  border-radius: 4px;
}
.buttons-B a:hover {
  opacity: 0.9;
}
.buttons-B a:nth-child(1) {
  background-color: #222b2f;
  color: #ffffff;
}
// END INSIDE POPUP
</style>
