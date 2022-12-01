<template>
    <div>
      <b-modal
        class="otp-verify-modal"
        id="main-verify-modal"
        :hide-footer="true"
        :hide-header="true"
        centered
      >
        <div class="otp-verify-modal">
          <div class="tick-img">
            <img src="@/assets/images/wallet/tick-svg.png" alt="tick-image" width="67px" />
          </div>
          <div class="m-center">
            <p class="c-title">เพิ่มบัญชีหลักเรียบร้อยเเล้ว</p>
            <p class="c-value">เมื่อมีการถอนเงินบริษัทจะโอนเงินเข้าบัญชีหลัก<br/>ที่ท่านเลือก</p>
          </div>
          <button class="f-btn">
            เสร็จสิ้น
          </button>
        </div>
      </b-modal>
    </div>
  </template>
  <script>
  export default {

    methods:{
       
    }
  };
  </script>
  <style lang="scss">
  #main-verify-modal___BV_modal_content_ {
    width: 345px;
    height: 313px;
/* UI-Layout/UI Layer #1 */
    border-radius: 15px;
    background-color: #141b1f;
    margin: auto;
    font-family: "Noto Sans Thai";
    #main-verify-modal___BV_modal_body_ {
        padding: 0px;
      .close-btn {
        cursor: pointer;
        position: absolute;
        top: 20px;
        right: 30px;
        
      }
      .tick-img {
        display: flex;
        justify-content: center;
        margin-top: 42px;
        margin-bottom: 22px;
      }
      .m-center {
        text-align: center;
      
        p {
          margin: 0;
        }
        .c-title {
          color: #d6dde1;
          font-size: 18px;
          font-weight: 700;
          line-height: 28px;
        }
        .c-value {
          color: #677f8e;
          line-height: 19px;
        }
      }
      .f-btn {
        width: 163px;  
        height: 44px;
        display: block;
        margin: auto;
        border-radius: 4px;
        color: white;
        font-size: 16px;
        font-weight: 700;
        margin-top: 32px;
        background-color: #222b2f;
      }
    }
  }
  </style>
  <style scoped>
  hr{
    color: #28363E;
    width: 80%;
    margin:24px auto !important;
    opacity: 1;
  }
  .col-5{
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    color: #677F8E;
  }
  .col-5 >span{
    width: 88px;
    display: block;
    margin-left: auto;

  }
  .col-7{
    line-height: 19px;
  }
  .tp{
    margin-top:9px
  }
</style>
  