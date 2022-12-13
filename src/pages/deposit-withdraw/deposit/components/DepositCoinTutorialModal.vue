<template>
  <b-modal id="deposit-coin-tutorial" :hide-footer="true" :hide-header="true">
    <div class="row">
      <div class="col-12 modal-th">
        <h5>ฝากเหรียญ</h5>
        <span
          class="modal-close-button"
          @click="$bvModal.hide('deposit-coin-tutorial')"
        >
          <svg
            width="14"
            height="15"
            viewBox="0 0 14 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 1.91L12.59 0.5L7 6.09L1.41 0.5L0 1.91L5.59 7.5L0 13.09L1.41 14.5L7 8.91L12.59 14.5L14 13.09L8.41 7.5L14 1.91Z"
              fill="#677F8E"
            />
          </svg>
        </span>
      </div>
    </div>

    <div class="row body thai-font">
      <div class="col-md-12">
        <p>ฝากเหรียญคริปโตเข้าแพลตฟอร์มได้ง่ายๆ</p>
        <p
          class="d-inline"
          style="width: 107px; height: 24px; margin-right: 16px; color: #f38220"
        >
          อ่านคู่มือการใช้งาน
        </p>
        <p class="d-inline" style="width: 24; height: 24px; margin-right: 16px">
          หรือ
        </p>
        <p
          class="d-inline"
          style="width: 99px; height: 24px; margin-right: 16px; color: #f38220"
        >
          ดูวิดีโอสอนใช้งาน
        </p>

        <div class="form-group form-check mt-3">
          <label class="checkbox-input">
            <input type="checkbox" class="form-check-input" />
            <span>ไม่ต้องแจ้งเตือนอีก</span></label
          >
        </div>

        <button
          @click="$bvModal.hide('deposit-coin-tutorial')"
          type="button"
          class="tut-btn text-center"
        >
          เริ่มต้นฝากเหรียญ
        </button>
      </div>
    </div>
  </b-modal>
</template>
<script>
export default {};
</script>
<style lang="scss">
#deposit-coin-tutorial___BV_modal_content_ {
  width: 360px;
  #deposit-coin-tutorial___BV_modal_body_ {
    background-color: #141b1f;
    .modal-close-button {
      cursor: pointer;
    }
    h5 {
      font-family: "Noto Sans Thai";
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      color: #d6dde1;
      line-height: 27px;
      display: inline-block;
    }
    .modal-th {
      text-align: center;
      span {
        float: right;
      }
    }
    p {
      color: #677f8e;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
    }

    span {
      color: #d6dde1;
    }
    label {
      font-family: "Sarabun";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      color: #d6dde1;
    }

    .checkbox-input {
      input {
        background-color: #222b2f;
        border: 1px solid #3c515d;
        border-radius: 2px;
        height: 17px;
        width: 17px;
      }
      input:checked {
        background-color: #f38220;
        border: 1px solid #3c515d;
      }
      span {
        display: inline-block;
        margin-left: 8px;
        margin-top: 3px;
      }
    }
    .tut-btn {
      width: 100%;
      height: 40px;
      border-radius: 4px;
      background: #f38220;
      color: #0a0d10;
      font-family: "sarabun";
      font-weight: 500;
      margin-top: 16px;
      margin-bottom: 16px;
      &:hover {
        background-color: #f28e38;
      }
    }
  }
}
</style>
