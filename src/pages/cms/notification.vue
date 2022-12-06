<template>
  <div class="notification-box">
    <h1>Notification</h1>
    <!-- notification start -->
    <div class="row mt-4 notification" v-for="(item, index) in 4" :key="index">
      <div class="col-9 p-0">
        <p>
          <svg
            width="8"
            height="8"
            viewBox="0 0 8 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="4" cy="4" r="4" fill="#DE2D40" />
          </svg>
          คุณได้รับ 30 AXS กรุณากดยืนยันการรับเหรียญและกำหนดต้น
        </p>
      </div>
      <div class="col-3 p-0 notification-button">
        <button class="">ระบุต้นทุน</button>
      </div>
      <div class="col-12 notification-time">วันนี้ | 15:04:58</div>
    </div>
    <!-- notification end -->
  </div>
</template>

<style lang="scss" scoped>
.notification-box {
  width: 560px;
  height: 692px;
  background-color: #192126;
  border-radius: 4px;
  margin: auto;
  margin-top: 30px;
  padding: 15px;
  h1 {
    color: #d6dde1;
    font-weight: 500;
    font-size: 24px;
    padding-left: 12px;
  }
  .notification-button {
    text-align: right;
    button {
      background-color: #f38220;
      width: 83px;
      height: 28px;
      border-radius: 4px;
      font-size: 12px;
      line-height: 24px;
      color: #0a0d10;
      &:hover {
        background-color: #f28e38;
      }
    }
  }
  .notification-time {
    color: #9bacb6;
    font-size: 12px;
    margin-left: 25px;
  }
  .notification {
    border-bottom: 1px solid #28363e;
    padding-bottom: 10px;
    margin: 0 2px;
    font-family: "sarabun";
    p {
      margin: 0;
      svg {
        margin-right: 10px;
      }
    }
  }
}
</style>
