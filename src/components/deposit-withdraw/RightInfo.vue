<template>
  <div class="right-info-tablet thai-font">
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
</template>
<script>
export default {};
</script>
<style lang="scss">
.right-info-tablet {
  width: 616px;
  margin: auto;
  margin-top: 40px;
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

@media (min-width: 1366px) {
  .right-info-tablet {
    display: none;
  }
}
</style>
