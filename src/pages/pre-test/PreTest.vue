<template>
  <div>
    <img
      class="pretest-site-logo"
      :src="require('../../assets/img-fss-logo.png')"
      alt="site-logo"
    />
    <div class="pretest-container">
      <h1>แบบทดสอบความรู้</h1>
      <div class="detail thai-font mt-3">
        <p>กรุณาทำแบบทดสอบความรู้ตามเกณฑ์กลต.</p>
        <ul>
          <li>แบบทดสอบต้องผ่าน 11 จาก 15 ข้อ</li>
          <li>หากไม่ผ่าน สามารถทำแบบทดสอบใหม่ได้ทันที</li>
        </ul>
      </div>
      <div class="questions row thai-font mt-3">
        <div class="col-1">1.</div>
        <div class="col-11 q-text">
          คริปโทเคอร์เรนซี ทำงานอยู่บนเทคโนโลยีที่ชื่อว่า “บล็อกเชน” Blockchain
          ทำให้มีความ ปลอดภัยต่ำ ต้นทุนการทำธุรกรรมสูง ไม่มีความเป็นส่วนตัว
          ใช่หรือไม่?
        </div>
        <div class="answer mt-3">
          <div class="radio_btn a1">
            <input @click="q1 = true" type="radio" id="option1" name="q1" />
            <label for="option1">ใช่</label>
          </div>
          <div class="radio_btn a2">
            <input @click="q1 = false" type="radio" id="option2" name="q1" />
            <label for="option2">ไม่ใช่</label>
          </div>
        </div>
        <div class="correct-answer" v-if="q1">
          คำตอบที่ถูกคือ “ไม่ใช่” เพราะ “บล็อกเชน” Blockchain ทำให้มีความ
          ปลอดภัยต่ำ ต้นทุนการทำธุรกรรมสูง ไม่มีความเป็นส่วนตัว
        </div>
      </div>
      <div class="questions row thai-font mt-3">
        <div class="col-1">2.</div>
        <div class="col-11 q-text">
          คริปโทเคอร์เรนซี ทำงานอยู่บนเทคโนโลยีที่ชื่อว่า “บล็อกเชน” Blockchain
          ทำให้มีความ ปลอดภัยต่ำ ต้นทุนการทำธุรกรรมสูง ไม่มีความเป็นส่วนตัว
          ใช่หรือไม่?
        </div>
        <div class="answer mt-3">
          <div class="radio_btn a1">
            <input @click="q2 = true" type="radio" id="option3" name="q2" />
            <label for="option3">ใช่</label>
          </div>
          <div class="radio_btn a2">
            <input @click="q2 = false" type="radio" id="option4" name="q2" />
            <label for="option4">ไม่ใช่</label>
          </div>
        </div>
        <div class="correct-answer" v-if="q2">
          คำตอบที่ถูกคือ “ไม่ใช่” เพราะ “บล็อกเชน” Blockchain ทำให้มีความ
          ปลอดภัยต่ำ ต้นทุนการทำธุรกรรมสูง ไม่มีความเป็นส่วนตัว
        </div>
      </div>
      <div class="questions row thai-font mt-3">
        <div class="col-1">3.</div>
        <div class="col-11 q-text">
          คริปโทเคอร์เรนซี ทำงานอยู่บนเทคโนโลยีที่ชื่อว่า “บล็อกเชน” Blockchain
          ทำให้มีความ ปลอดภัยต่ำ ต้นทุนการทำธุรกรรมสูง ไม่มีความเป็นส่วนตัว
          ใช่หรือไม่?
        </div>
        <div class="answer mt-3">
          <div class="radio_btn a1">
            <input @click="q3 = true" type="radio" id="option5" name="q3" />
            <label for="option5">ใช่</label>
          </div>
          <div class="radio_btn a2">
            <input @click="q3 = false" type="radio" id="option6" name="q3" />
            <label for="option6">ไม่ใช่</label>
          </div>
        </div>
        <div class="correct-answer" v-if="q3">
          คำตอบที่ถูกคือ “ไม่ใช่” เพราะ “บล็อกเชน” Blockchain ทำให้มีความ
          ปลอดภัยต่ำ ต้นทุนการทำธุรกรรมสูง ไม่มีความเป็นส่วนตัว
        </div>
      </div>
      <div class="f-section">
        <router-link to="/pre-test/pass"><button>ส่งคำตอบ</button></router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      q1: false,
      q2: false,
      q3: false,
    };
  },
};
</script>
<style lang="scss">
.pretest-site-logo {
  margin: auto;
  margin-top: 25px;
  display: block;
}
.pretest-container {
  background-color: #192126;
  border-radius: 4px;
  width: 560px;
  min-height: 588px;
  margin: auto;
  margin-top: 25px;
  padding: 16px;
  h1 {
    text-align: center;
    color: #d6dde1;
    font-family: "Noto Sans Thai";
    font-weight: 500;
    font-size: 24px;
    padding: 5px 0;
  }
  .detail {
    color: #9bacb6;
    border-bottom: 1px solid #28363e;
    p {
      margin: 0;
    }
    ul {
      list-style-type: disc;
      li {
        margin-top: 3px;
      }
    }
  }
  .questions {
    color: #d6dde1;
    .q-text {
      margin-left: -30px;
    }
    .answer {
      .radio_btn {
        display: inline-block;
        label {
          padding-left: 10px;
        }

        input[type="radio"]:after {
          width: 20px;
          height: 20px;
          border-radius: 20px;
          top: -4px;
          right: 4px;
          position: relative;
          background-color: #222b2f;
          content: "";
          display: inline-block;
          visibility: visible;
          border: 3px solid #38454d;
        }

        input[type="radio"]:checked:after {
          width: 20px;
          height: 20px;
          border-radius: 20px;
          position: relative;
          background-color: #d6dde1;
          content: "";
          display: inline-block;
          visibility: visible;
          border: 3px solid #f38220;
        }
      }
      .a1 {
        margin-left: 20px;
      }
      .a2 {
        margin-left: 40px;
      }
    }
    .correct-answer {
      width: 90%;
      color: #de2d40;
      margin-left: 15px;
    }
  }
  .f-section {
    margin-top: 10px;
    border-top: 1px solid #28363e;
    button {
      display: block;
      width: 89px;
      height: 40px;
      margin: auto;
      margin-top: 35px;
      color: #0a0d10;
      background-color: #f38220;
      border-radius: 4px;
      &:hover {
        background-color: #f28e38;
      }
    }
  }
}
</style>
