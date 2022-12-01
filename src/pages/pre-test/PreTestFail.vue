<template>
  <div class="pre-test-fail-c">
    <img
      class="site-logo"
      :src="require('../../assets/img-fss-logo.png')"
      alt="site-logo"
    />
    <div class="cross-img">
      <img src="@/assets/images/wallet/cross.png" alt="cross-image" />
    </div>
    <div class="text mt-4">
      <p class="thai-font">
        คุณทำแบบทดสอบไม่ถึงเกณฑ์ที่กำหนด (อย่างน้อย 11/15 ข้อ)
      </p>
      <p class="thai-font">กรุณาเลือกคำตอบใหม่อีกครั้ง</p>
      <button>แก้ไขแบบทดสอบ</button>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.pre-test-fail-c {
  margin: auto;
  margin-top: 35px;
  .site-logo {
    width: 200px;
    margin: auto;
    display: flex;
    justify-content: center;
  }
  .cross-img {
    display: flex;
    justify-content: center;
    margin-top: 35px;
  }
  .text {
    p {
      margin: 0;
      text-align: center;
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
