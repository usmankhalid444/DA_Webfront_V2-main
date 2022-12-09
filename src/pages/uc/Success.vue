<template>
  <div>
    <img
      class="site-logo"
      :src="require('../../assets/img-fss-logo.png')"
      alt="site-logo"
    />
    <div class="login-success-c">
      <div class="tick-img">
        <img src="@/assets/images/wallet/tick-svg.png" alt="tick-image" />
      </div>
      <div class="text mt-4">
        <p class="text-title thai-font">สมัคร Free Trial เรียบร้อย</p>
        <p class="text-value thai-font mt-1">
          กรุณาตรวจสอบอีเมลของท่านเพื่อดำเนินการ
        </p>
        <p class="text-value thai-font">ขั้นตอนต่อไป</p>
        <router-link to="/">
          <button class="thai-font">กลับหน้าเข้าสู่ระบบ</button>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.site-logo {
  width: 180px;
  margin: auto;
  margin-top: 30px;
  display: flex;
  justify-content: center;
}
.login-success-c {
  width: 458px;
  height: 299px;
  background-color: #192126;
  margin: auto;
  margin-top: 26px;
  border-radius: 8px;

  .tick-img {
    display: flex;
    justify-content: center;
    img {
      margin-top: 26px;
    }
  }
  .text {
    p {
      margin: 0;
      text-align: center;
    }
    .text-title {
      color: #d6dde1;
      font-family: "Noto Sans Thai";
      font-size: 18px;
      font-weight: 600;
    }
    .text-value {
      color: #9bacb6;
    }
    a {
      text-decoration: none;
      button {
        margin: auto;
        margin-top: 35px;
        color: white;
        width: 142px;
        height: 40px;
        border-radius: 4px;
        display: block;
        background-color: #38454d;
      }
    }
  }
}
</style>
