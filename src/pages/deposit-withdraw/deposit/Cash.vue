<template>
  <div>
    <div class="deposite-cash-container">
      <div class="container-fluid">
        <!-- top section start -->
        <div class="row dcc-head">
          <div class="col-12">
            <router-link to="/deposit/cash"
              ><button class="active">Deposit Cash</button></router-link
            >
            <router-link to="/deposit/coin"
              ><button class="not-active">Deposit Coin</button></router-link
            >
          </div>
        </div>
        <!-- top section end -->
        <!-- center section start -->
        <div class="row mt-3 center-section">
          <div class="col-12">
            <div class="row">
              <div class="col-5 col-md-4 my-auto thai-font">
                เลือกช่องทางการฝาก
              </div>
              <div class="col-7 col-md-8 select-container">
                <select>
                  <option>QR Code (Prompt Pay)</option>
                  <option>Bank Transfer</option>
                  <option>option3</option>
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
                      d="M1.41 0.589966L6 5.16997L10.59 0.589966L12 1.99997L6 7.99997L0 1.99997L1.41 0.589966Z"
                      fill="#677F8E"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-5 col-md-4 my-auto thai-font">
                เลือกช่องทางการฝาก
              </div>
              <div class="col-7 col-md-8 input-container">
                <input type="text" placeholder="0.00" />
                <span>THB</span>
              </div>
            </div>
            <div class="row mt-4">
              <div class="col-12 info thai-font">
                <p>ยอมรับเงื่อนไขการฝากเงิน</p>
                <ul>
                  <li>
                    โอนเงินด้วยบัญชีที่ให้ไว้กับบริษัทเท่านั้น (สูงสุด 2 บัญชี)
                  </li>
                  <li>โอนเงินได้ตลอด 24 ชั่วโมง (ขึ้นอยู่กับธนาคารต้นทาง)</li>
                  <li>QR Code ใช้งานได้ไม่เกิน 24 ชั่วโมง</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <!-- center section start -->
        <!-- bottom section start -->
        <div class="mx-3 pt-4 bottom-section thai-font">
          <label>
            <input class="form-check-input" type="checkbox" />
            <span>ยอมรับเงื่อนไขทั้งหมด</span>
          </label>
          <div class="last-btn">
            <button class="thai-font">ยืนยันการฝากเงิน</button>
          </div>
        </div>
        <!-- bottom section end -->
      </div>
    </div>
    <div class="right-info thai-font">
      <p>คำถามที่พบบ่อย</p>
      <ul>
        <li>วิธีการฝากเงินผ่านระบบทำอย่างไร?</li>
        <li>วิธีการฝากเงินผ่านระบบทำอย่างไร?</li>
        <li>วิธีการฝากเงินผ่านระบบทำอย่างไร?</li>
        <li>วิธีการฝากเงินผ่านระบบทำอย่างไร?</li>
        <li>วิธีการฝากเงินผ่านระบบทำอย่างไร?</li>
        <li>วิธีการฝากเงินผ่านระบบทำอย่างไร?</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.deposite-cash-container {
  background-color: #192126;
  border-radius: 8px;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  .dcc-head {
    border-bottom: 1px solid #28363e;
    button {
      display: inline-block;
      font-size: 16px;
      padding: 15px 0;
      margin-left: 20px;
      border-bottom: 2px solid transparent;
      color: #677f8e;
      &:hover {
        border-bottom: 2px solid #f38220;
        color: #d6dde1;
      }
    }

    button.active {
      border-bottom: 2px solid #f38220;
      color: #d6dde1;
    }
  }
  .center-section {
    .select-container {
      select {
        background-color: #222b2f;
        color: #d6dde1;
        border-radius: 4px;
        height: 40px;
        padding: 0 18px;
      }
      span {
        margin-left: -25px;
      }
    }
    .input-container {
      input {
        background-color: #222b2f;
        color: #d6dde1;
        border-radius: 4px;
        height: 40px;
        padding: 0 18px;
        &::placeholder {
          color: #566a76;
        }
      }
      span {
        color: #9bacb6;
        margin-left: -40px;
      }
    }
    .info {
      color: #d6dde1;
      p {
        margin: 0;
      }
      ul {
        list-style: disc;
      }
    }
  }

  .bottom-section {
    border-top: 1px solid #28363e;
    input {
      background: #222b2f;
      border: 1px solid #3c515d;
      border-radius: 2px;
      height: 17px;
      width: 17px;
      margin-top: -0.1px;
    }
    input:checked {
      background-color: #f38220;
      border: 1px solid #3c515d;
    }
    span {
      margin-left: 10px;
    }
    .last-btn {
      text-align: center;
      margin-top: 20px;
      button {
        color: #0a0d10;
        background-color: #f38220;
        border-radius: 4px;
        height: 36px;
        width: 132px;
        &:hover {
          background-color: #f28e38;
        }
      }
    }
  }
}
.right-info {
  position: absolute;
  right: 100px;
  top: 100px;
  color: #677f8e;
  ul {
    list-style: disc;
    li {
      &:hover {
        color: #d6dde1;
      }
      margin-bottom: 8px;
      cursor: pointer;
    }
  }
}
@media (max-width: 640px) {
  .deposite-cash-container {
    width: auto;
    height: auto;
    margin-left: 10px;
    margin-right: 10px;
    padding-bottom: 20px;
    .center-section {
      padding: 0;
    }
    .select-container {
      select {
        width: 190px;
      }
    }
    .input-container {
      input {
        width: 190px;
      }
    }
  }
}
@media (min-width: 640px) {
  .deposite-cash-container {
    width: 616px;
    height: 458px;
    padding-bottom: 0;
    .center-section {
      padding: 0 1rem;
    }
    .select-container {
      select {
        width: 240px;
      }
    }
    .input-container {
      input {
        width: 240px;
      }
    }
  }
}
@media (min-width: 100px) {
  .right-info {
    display: none;
  }
}
@media (min-width: 1024px) {
  .right-info {
    display: block;
  }
}
</style>
