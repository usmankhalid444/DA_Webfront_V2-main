<template>
  <div class="pre-test-pass-c">
    <img
      class="site-logo"
      :src="require('../../assets/img-fss-logo.png')"
      alt="site-logo"
    />
    <div class="tick-img">
      <img src="@/assets/images/wallet/tick-svg.png" alt="tick-image" />
    </div>
    <div class="text mt-4">
      <p class="text-title thai-font">Finansia Digital Asset ยินดีต้อนรับ</p>
      <p class="text-value thai-font">
        คุณสามารถฝากเงินเพื่อเริ่มลงทุนได้ทันที !
      </p>
      <router-link to="/pre-test/fail"
        ><button>เริ่มต้นใช้งาน</button></router-link
      >
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.pre-test-pass-c {
  width: 250px;
  margin: auto;
  margin-top: 35px;
  .site-logo {
    width: 200px;
    margin: auto;
    display: flex;
    justify-content: center;
  }
  .tick-img {
    display: flex;
    justify-content: center;
    margin-top: 78.21px;
  }
  .text {
    p {
      margin: 0;
      text-align: center;
    }
    .text-title {
      color: white;
    }
    .text-value {
      color: #9bacb6;
    }
    button {
      color: #141b1f;
      font-family: "Noto Sans Thai";
      font-weight: 600;
      font-size: 16px;
      background-color: #f38220;
      border-radius: 4px;
      width: 250px;
      height: 44px;
      display: block;
      margin: auto;
      margin-top: 32px;
    }
  }
}
</style>
