<template>
  <div class="knowledge-test-c">
    <h1>แบบทดสอบความรู้</h1>

    <div class="questions mt-3">
      <div class="q-text">
        1. คริปโทเคอร์เรนซีทำงานอยู่บนเทคโนโลยีที่ชื่อว่า 
        “บล็อกเชน” (Blockchain) ทำให้มีความปลอดภัยต่ำ ต้นทุนการทำธุรกรรมสูง
        ไม่มีความเป็นส่วนตัว
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
        คริปโทเคอร์เรนซี (Cryptocurrency) คือ "สกุลเงินดิจิทัล"
        เกิดจากการรวมศัพท์ 2 คำเข้าไว้ด้วยกัน คือ Cryptography (การเข้ารหัส) และ
        Currency (สกุลเงิน) ดังนั้น
        ทางราชบัณฑิตยสภาจึงกำหนดศัพท์บัญญัติของคำนี้ไว้ว่า "สกุลเงินเข้ารหัส”
        ทำงานอยู่บนเทคโนโลยีที่ชื่อว่า “บล็อกเชน” (Blockchain)
        ทำให้มีความปลอดภัยสูง ต้นทุนการทำธุรกรรมต่ำและความเป็นส่วนตัวสูง
      </div>
    </div>
    <div class="questions mt-3">
      <div class="q-text">
        2. คริปโทเคอร์เรนซี ทำงานอยู่บนเทคโนโลยีที่ชื่อว่า “บล็อกเชน” Blockchain
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
    <div class="questions mt-3">
      <div class="q-text">
        3. คริปโทเคอร์เรนซี ทำงานอยู่บนเทคโนโลยีที่ชื่อว่า “บล็อกเชน” Blockchain
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
.knowledge-test-c {
  background-color: #192126;
  border-radius: 4px;
  width: 375px;
  min-height: 588px;
  margin: auto;
  margin-top: 25px;
  padding: 20px;
  font-family: "Noto Sans Thai";
  font-weight: 600;
  h1 {
    text-align: center;
    color: white;
    font-weight: 700;
    font-size: 16px;
    padding-bottom: 50px;
    border-bottom: 1px solid #28363e;
  }

  .questions {
    color: #d6dde1;
    .q-text {
    }
    .answer {
      .radio_btn {
        display: inline-block;
        label {
          padding-left: 7px;
        }

        input[type="radio"]:after {
          width: 20px;
          height: 20px;
          border-radius: 20px;
          top: -4px;
          right: 8px;
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
        margin-left: 10px;
      }
      .a2 {
        margin-left: 40px;
      }
    }
    .correct-answer {
      width: 90%;
      color: #de2d40;
      margin-left: 5px;
    }
  }
  .f-section {
    margin-top: 10px;
    margin-bottom: 30px;
    button {
      display: block;
      width: 340px;
      height: 40px;
      margin: auto;
      margin-top: 35px;
      color: #0a0d10;
      background-color: #f38220;
      font-weight: 700;
      border-radius: 4px;
      &:hover {
        background-color: #f28e38;
      }
    }
  }
}
</style>
