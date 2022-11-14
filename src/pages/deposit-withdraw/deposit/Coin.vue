<template>
  <div>
    <div class="deposite-coin-container">
      <div class="container-fluid">
        <!-- top section start -->
        <div class="row dcc-head">
          <div class="col-12">
            <router-link to="/deposit/cash"
              ><button class="not-active">Deposit Cash</button></router-link
            >
            <router-link to="/deposit/coin"
              ><button class="active">Deposit Coin</button></router-link
            >
          </div>
        </div>
        <!-- top section end -->
        <!-- center section start -->
        <div class="row center-section">
          <div class="col-12">
            <div class="row mt-3">
              <div class="col-5 col-md-4 my-auto thai-font">
                เลือกช่องทางการฝาก
              </div>
              <div class="col-7 col-md-8 input-container">
                <input type="text" placeholder="0.00" value="BTC" />
                <span
                  ><svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.9167 9.66667H10.2583L10.025 9.44167C10.8417 8.49167 11.3333 7.25833 11.3333 5.91667C11.3333 2.925 8.90833 0.5 5.91667 0.5C2.925 0.5 0.5 2.925 0.5 5.91667C0.5 8.90833 2.925 11.3333 5.91667 11.3333C7.25833 11.3333 8.49167 10.8417 9.44167 10.025L9.66667 10.2583V10.9167L13.8333 15.075L15.075 13.8333L10.9167 9.66667ZM5.91667 9.66667C3.84167 9.66667 2.16667 7.99167 2.16667 5.91667C2.16667 3.84167 3.84167 2.16667 5.91667 2.16667C7.99167 2.16667 9.66667 3.84167 9.66667 5.91667C9.66667 7.99167 7.99167 9.66667 5.91667 9.66667Z"
                      fill="#677F8E"
                    />
                  </svg>
                </span>
                <span class="coin-image"
                  ><img
                    class="coin-img"
                    src="../../../assets/images/coin_32/btc.png"
                    alt="coin-image"
                /></span>
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-5 col-md-4 my-auto thai-font">Network</div>
              <div class="col-7 col-md-8 select-container">
                <select>
                  <option>เลือก Network</option>
                  <option>option1</option>
                  <option>option1</option>
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
            <div class="row mt-4 info">
              <div class="col-12 col-md-4"></div>
              <div class="col-12 col-md-8 thai-font mb-3">
                กรุณาเลือก Network ของผู้รับ Address ให้ตรงกับ Network
                ของเหรียญที่คุณเลือก มิเช่นนั้นทรัพย์สินของคุณอาจสูญหายได้
              </div>
            </div>
          </div>
        </div>
        <!-- center section start -->
        <!-- bottom section start -->
        <div class="bottom-section thai-font">
          <div class="last-btn">
            <button class="thai-font">ยืนยันการฝากเหรียญ</button>
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
.deposite-coin-container {
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
      position: relative;
      input {
        background-color: #222b2f;
        color: #d6dde1;
        border-radius: 4px;
        height: 40px;
        padding: 0 40px;
        text-transform: capitalize;
        &::placeholder {
          color: #566a76;
        }
      }
      span {
        color: #9bacb6;
        margin-left: -30px;
      }
      .coin-image {
        position: absolute;
        left: 50px;
        top: 7.5px;
        pointer-events: none;
        img {
          width: 23px;
        }
      }
    }
    .info {
      color: #de2d40;
      p {
        margin: 0;
      }
    }
  }

  .bottom-section {
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
        width: 152px;
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
      margin-bottom: 8px;
      cursor: pointer;
    }
  }
}
@media (max-width: 640px) {
  .deposite-coin-container {
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
  .deposite-coin-container {
    width: 616px;
    height: 330px;
    padding-bottom: 0;
    .center-section {
      padding: 0 1rem;
    }
    .select-container {
      select {
        width: 340px;
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
@media (min-width: 1366px) {
  .right-info {
    display: block;
  }
}
</style>
