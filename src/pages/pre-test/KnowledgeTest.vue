<template>
  <div class="knowledge-test-c">
    <h1>แบบทดสอบความรู้</h1>

    <div class="qas">
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
          เกิดจากการรวมศัพท์ 2 คำเข้าไว้ด้วยกัน คือ Cryptography (การเข้ารหัส)
          และ Currency (สกุลเงิน) ดังนั้น
          ทางราชบัณฑิตยสภาจึงกำหนดศัพท์บัญญัติของคำนี้ไว้ว่า "สกุลเงินเข้ารหัส”
          ทำงานอยู่บนเทคโนโลยีที่ชื่อว่า “บล็อกเชน” (Blockchain)
          ทำให้มีความปลอดภัยสูง ต้นทุนการทำธุรกรรมต่ำและความเป็นส่วนตัวสูง
        </div>
      </div>
      <div class="questions mt-3">
        <div class="q-text">
          2. Stablecoin เป็นคริปโทเคอร์เรนซีที่มีการตรึงมูลค่าไว้กับ
          สินทรัพย์ที่มีความมั่นคงใช่หรือไม่
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
          Stablecoin
          เป็นคริปโทเคอร์เรนซีที่มีการตรึงมูลค่าไว้กับสินทรัพย์ที่มีความมั่นคง
          เช่น ทองคำ พันธบัตร หรือสกุลเงินต่าง ๆ และมีการรักษามูลค่าให้คงที่
          ทำให้มีความผันผวนน้อยกว่าคริปโทเคอร์เรนซีประเภทอื่น
          จึงมักถูกนำมาใช้เพื่อเป็นสื่อกลางในการซื้อขายแลกเปลี่ยนมากกว่านำมาใช้เพื่อการเก็งกำไร
        </div>
      </div>
      <div class="questions mt-3">
        <div class="q-text">
          3. ข้อแตกต่างของหุ้นและคริปโทเคอร์เรนซีกับโทเคนดิจิทัลคือ
          หุ้นได้รับสิทธิ์ต่าง ๆ เช่น สิทธิ์การโหวต การได้เงินปันผล
          แต่คริปโทเคอร์เรนซีกับโทเคนดิจิทัลอาจจะมีหรือไม่มีก็ได้
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
          การซื้อหรือถือครองคริปโทเคอร์เรนซี อาจจะทำให้ได้รับสิทธิ์ต่าง ๆ เช่น
          สิทธิ์ในการนำไปใช้งาน (Utility), สิทธิ์ในการโหวต,
          สิทธิ์ในการได้รับส่วนแบ่งจากแพลตฟอร์ม เป็นต้น
          ซึ่งแต่ละเหรียญก็อาจจะมีสิทธิ์ต่าง ๆ หรืออาจจะไม่มีก็ได้
          ผู้ลงทุนจึงต้องศึกษาข้อมูลเหรียญให้ครบถ้วนก่อนการตัดสินใจลงทุน
        </div>
      </div>
      <div class="questions mt-3">
        <div class="q-text">
          4. จุดเด่นของบล็อกเชนคือมีความน่าเชื่อถือในการจัดเก็บข้อมูล
          สูงและไม่สามารถเปลี่ยนแปลงข้อมูลได้
        </div>
        <div class="answer mt-3">
          <div class="radio_btn a1">
            <input @click="q4 = true" type="radio" id="option7" name="q4" />
            <label for="option7">ใช่</label>
          </div>
          <div class="radio_btn a2">
            <input @click="q4 = false" type="radio" id="option8" name="q4" />
            <label for="option8">ไม่ใช่</label>
          </div>
        </div>
        <div class="correct-answer" v-if="q4">
          Blockchain คือเทคโนโลยีจัดเก็บข้อมูล (Data Structure) ที่ไม่มีตัวกลาง
          ข้อมูลจะถูกแชร์และจัดเก็บเป็นสำเนาไว้ในเครื่องของทุกคนที่ใช้ฐานข้อมูลเดียวกันเสมือนห่วงโซ่
          (Chain) โดยทุกคนจะรับทราบร่วมกัน
          ว่าใครเป็นเจ้าของและมีสิทธิในข้อมูลตัวจริง เมื่อมีการอัปเดตข้อมูลใด ๆ
          สำเนาข้อมูลในฐานเดียวกันก็จะอัปเดตตามไปด้วยทันที
          ทำให้การปลอมแปลงข้อมูลไม่ใช่เรื่องง่าย
          เพราะทุกคนต้องรับทราบและตรวจสอบความถูกต้องของข้อมูลร่วมกันได้
        </div>
      </div>
      <div class="questions mt-3">
        <div class="q-text">
          5. บล็อกเชนมีความปลอดภัยสูงเพราะข้อมูลทั้งหมดถูกจัดเก็บ
          รักษาไว้ที่เดียว
        </div>
        <div class="answer mt-3">
          <div class="radio_btn a1">
            <input @click="q5 = true" type="radio" id="option9" name="q5" />
            <label for="option9">ใช่</label>
          </div>
          <div class="radio_btn a2">
            <input @click="q5 = false" type="radio" id="option10" name="q5" />
            <label for="option10">ไม่ใช่</label>
          </div>
        </div>
        <div class="correct-answer" v-if="q5">
          Blockchain เป็นเทคโนโลยีที่มีความปลอดภัย น่าเชื่อถือ
          โดยไม่ต้องอาศัยคนกลาง
          มาช่วยทำหน้าที่เป็นคนกลางคอยตรวจสอบความน่าเชื่อถือเวลาทำธุรกรรม
          ทั้งยังกระจายข้อมูลให้ผู้ที่เกี่ยวข้องสามารถตรวจสอบความถูกต้องได้ตลอดเวลา
          Distributed Ledger Technology (DLT)
        </div>
      </div>
      <div class="questions mt-3">
        <div class="q-text">
          6. บล็อกเชนอาจจะมีความผิดพลาดจากมนุษย์ (Human Error)
          ในเรื่องการยืนยันธุรกรรมของการซื้อขาย, โอนคริปโทเคอร์เรนซี
        </div>
        <div class="answer mt-3">
          <div class="radio_btn a1">
            <input @click="q6 = true" type="radio" id="option11" name="q6" />
            <label for="option11">ใช่</label>
          </div>
          <div class="radio_btn a2">
            <input @click="q6 = false" type="radio" id="option12" name="q6" />
            <label for="option12">ไม่ใช่</label>
          </div>
        </div>
        <div class="correct-answer" v-if="q6">
          บล็อกเชน (Blockchain) คือ เทคโนโลยีเก็บข้อมูลแบบกระจายศูนย์
          (Decentralized) ที่สามารถยืนยันธุรกรรมการโอน
          การซื้อขายโดยไม่ต้องมีตัวกลาง
          ทำให้มีความโปร่งใสและลดความผิดพลาดจากมนุษย์ (Human Error)
        </div>
      </div>
      <div class="questions mt-3">
        <div class="q-text">
          7. การเก็บรักษาเหรียญคริปโทเคอร์เรนซีไว้กับผู้ประกอบการที่
          ได้รับใบอนุญาตในการดำเนินธุรกิจสินทรัพย์ดิจิทัลเป็นการ
          ใช้งานกระเป๋าสินทรัพย์ดิจิทัลประเภท Hardware Wallet
        </div>
        <div class="answer mt-3">
          <div class="radio_btn a1">
            <input @click="q7 = true" type="radio" id="option13" name="q7" />
            <label for="option13">ใช่</label>
          </div>
          <div class="radio_btn a2">
            <input @click="q7 = false" type="radio" id="option14" name="q7" />
            <label for="option14">ไม่ใช่</label>
          </div>
        </div>
        <div class="correct-answer" v-if="q7">
          Hardware Wallet เป็นการเก็บรักษาสินทรัพย์ดิจิทัลในลักษณะออฟไลน์
          ซึ่งผู้ใช้งานอาจมีค่าใช้งานเพิ่มเติมสำหรับอุปกรณ์ในการจัดเก็บ
          อีกทั้งต้องเก็บรักษา Private Keys ด้วยตนเอง
        </div>
      </div>
      <div class="questions mt-3">
        <div class="q-text">
          8. เมื่อผู้ประกอบธุรกิจสินทรัพย์ดิจิทัลมีการฝากสินทรัพย์
          ดิจิทัลของลูกค้าไว้กับบุคคลที่สามหากผู้ประกอบธุรกิจ
          ไม่สามารถให้บริการต่อได้ สินทรัพย์ดิจิทัลของลูกค้าจะยังคงอยู่
        </div>
        <div class="answer mt-3">
          <div class="radio_btn a1">
            <input @click="q8 = true" type="radio" id="option15" name="q8" />
            <label for="option15">ใช่</label>
          </div>
          <div class="radio_btn a2">
            <input @click="q8 = false" type="radio" id="option16" name="q8" />
            <label for="option6">ไม่ใช่</label>
          </div>
        </div>
        <div class="correct-answer" v-if="q8">
          ในกรณีที่ผู้ประกอบการมีการเก็บรักษาสินทรัพย์ของลูกค้าไว้กับบุคคลที่สาม
          ทำให้สินทรัพย์ของลูกค้าได้รับการดูแลจากบุคคลที่สาม
          และแยกออกจากสินทรัพย์ของผู้ประกอบการ
        </div>
      </div>
      <div class="questions mt-3">
        <div class="q-text">
          9. หากต้องการโอนสินทรัพย์ดิจิทัลออกจากกระเป๋าสินทรัพย์ ดิจิทัล
          (Wallet) ลูกค้าจำเป็นต้องตรวจสอบรายละเอียดการโอน ให้ถูกต้องและครบถ้วน
          เช่น ตรวจสอบเครือข่าย Blockchain ที่ต้องการทำธุรกรรม,
          ตรวจสอบรายละเอียดกระเป๋าปลายทาง เป็นต้น
        </div>
        <div class="answer mt-3">
          <div class="radio_btn a1">
            <input @click="q9 = true" type="radio" id="option17" name="q9" />
            <label for="option17">ใช่</label>
          </div>
          <div class="radio_btn a2">
            <input @click="q9 = false" type="radio" id="option18" name="q9" />
            <label for="option18">ไม่ใช่</label>
          </div>
        </div>
        <div class="correct-answer" v-if="q9">
          ความเสี่ยงที่มักเกิดขึ้นจากการใช้งานกระเป๋าสินทรัพย์ดิจิทัล (Wallet)
          นั่นคือ ความเสี่ยงจากความผิดพลาดในการโอนสินทรัพย์ดิจิทัล ตัวอย่างเช่น
          การโอนโดยเลือกBlockchain ที่ใช้ทำธุรกรรมไม่ถูกต้อง,
          การกรอกรายละเอียดของกระเป๋าสินทรัพย์ดิจิทัลปลายทางไม่ถูกต้อง เป็นต้น
        </div>
      </div>
      <div class="questions mt-3">
        <div class="q-text">
          10. เหรียญคริปโทเคอร์เรนซีที่มาร์เก็ตแคป (Market Cap) สูงที่สุด ได้แก่
          เหรียญ Bitcoin (BTC)
        </div>
        <div class="answer mt-3">
          <div class="radio_btn a1">
            <input @click="q10 = true" type="radio" id="option19" name="q10" />
            <label for="option19">ใช่</label>
          </div>
          <div class="radio_btn a2">
            <input @click="q10 = false" type="radio" id="option20" name="q10" />
            <label for="option20">ไม่ใช่</label>
          </div>
        </div>
        <div class="correct-answer" v-if="q10">
          เหรียญ Bitcoin (BTC) เป็นเหรียญคริปโทเคอร์เรนซีที่มีมูลค่าตามราคาตลาด
          (Market Cap) สูงที่สุด ประมาณ 40% ของทั้งตลาด (ข้อมูล ณ วันที่ 16
          กันยายน 2565)
        </div>
      </div>
      <div class="questions mt-3">
        <div class="q-text">
          11. มีหลายปัจจัยที่ทำให้การลงทุนในตลาดคริปโทเคอร์เรนซี มีความผันผวน
          เช่น ข่าวสารทางเศรษฐกิจ เงิน Fund Flow ไหลเข้าออก
          สามารถทำธุรกรรมได้ตลอด 24 ชั่วโมง,
          ไม่มีการกำหนดเงื่อนไขการเคลื่อนไหวของราคา เป็นต้น
        </div>
        <div class="answer mt-3">
          <div class="radio_btn a1">
            <input @click="q11 = true" type="radio" id="option21" name="q11" />
            <label for="option21">ใช่</label>
          </div>
          <div class="radio_btn a2">
            <input @click="q11 = false" type="radio" id="option22" name="q11" />
            <label for="option22">ไม่ใช่</label>
          </div>
        </div>
        <div class="correct-answer" v-if="q11">
          ความผันผวนของตลาดคริปโทฯ เกิดขึ้นจากหลายปัจจัย
          ทั้งปัจจัยที่เกิดขึ้นโดยตรงกับเหรียญคริปโทนั้น,
          ปัจจัยที่มากระทบกับเหรียญคริปโทฯ ที่มีขนาดใหญ่
          หรือแม้กระทั่งปัจจัยจากภาพรวมเศรษฐกิจ นอกจากนั้น ตลาดคริปโทฯ
          ยังมีลักษณะและรูปแบบที่แตกต่างจากสินทรัพย์ประเภทอื่น เช่น เปิดทำการ 24
          ชั่วโมง, มีปริมาณความต้องการซื้อและขายจากทั่วโลก,
          ไม่มีข้อกำหนดเรื่องการเคลื่อนไหวของราคา เป็นต้น
        </div>
      </div>
      <div class="questions mt-3">
        <div class="q-text">
          12. รายละเอียดและความคืบหน้าของการพัฒนาโปรเจกต์
          อาจส่งผลกระทบทั้งเชิงบวกและเชิงลบต่อราคาเหรียญคริปโทเคอร์เรนซี
        </div>
        <div class="answer mt-3">
          <div class="radio_btn a1">
            <input @click="q12 = true" type="radio" id="option23" name="q12" />
            <label for="option23">ใช่</label>
          </div>
          <div class="radio_btn a2">
            <input @click="q12 = false" type="radio" id="option24" name="q12" />
            <label for="option24">ไม่ใช่</label>
          </div>
        </div>
        <div class="correct-answer" v-if="q12">
          หนึ่งในปัจจัยที่ส่งผลกระทบโดยตรงต่อราคาซื้อและราคาขายเหรียญคริปโทฯ
          นั่นคือ รายละเอียดและความคืบหน้าของการพัฒนาโปรเจกต์
          ซึ่งอาจเป็นได้ทั้งเชิงบวกและเชิงลบต่อราคาเหรียญคริปโทฯ
        </div>
      </div>
      <div class="questions mt-3">
        <div class="q-text">
          13. Market Cap ของ Bitcoin (BTC) คือการนำมูลค่าที่ควรจะเป็น
          คูณกับราคาปัจจุบัน (Fair Value X Price) ใช่หรือไม่
        </div>
        <div class="answer mt-3">
          <div class="radio_btn a1">
            <input @click="q13 = true" type="radio" id="option25" name="q13" />
            <label for="option25">ใช่</label>
          </div>
          <div class="radio_btn a2">
            <input @click="q13 = false" type="radio" id="option26" name="q13" />
            <label for="option26">ไม่ใช่</label>
          </div>
        </div>
        <div class="correct-answer" v-if="q13">
          Market Cap ของคริปโทเคอร์เรนซีคำนวณจากจำนวนเหรียญ คูณกับราคาปัจจุบัน
          เพื่อที่จะได้เห็นถึงขนาดหรือมูลค่าของเหรียญนั้นว่าใหญ่หรือเล็กเท่าไหร่
          ดังนั้นจะเห็นว่า Market Cap ขึ้นอยู่กับเพียง 2 ปัจจัยเท่านั้น
          โดยเมื่อตัวแปรตัวใดตัวหนึ่งในสองตัวนี้เปลี่ยนไป Market Cap
          ก็จะมีการเปลี่ยนแปลงไปด้วยเช่นเดียวกัน
        </div>
      </div>
      <div class="questions mt-3">
        <div class="q-text">
          14. คริปโทเคอร์เรนซีมีราคาผันผวนสูง
          สาเหตุหนึ่งเพราะตลาดคริปโทเคอร์เรนซีไม่มีเพดาน Ceiling Floor และ
          Circuit Breaker ส่งผลให้ราคาสามารถเปลี่ยนแปลงได้ตลอดเวลา
        </div>
        <div class="answer mt-3">
          <div class="radio_btn a1">
            <input @click="q14 = true" type="radio" id="option27" name="q14" />
            <label for="option27">ใช่</label>
          </div>
          <div class="radio_btn a2">
            <input @click="q14 = false" type="radio" id="option28" name="q14" />
            <label for="option28">ไม่ใช่</label>
          </div>
        </div>
        <div class="correct-answer" v-if="q14">
          ราคาคริปโทเคอร์เรนซีสามารถเปลี่ยนแปลงได้มากกว่า 20-30% ต่อวัน
          เนื่องจากราคาเหรียญคริปโทฯ ขึ้นอยู่กับปัจจัยด้านข่าวสาร,
          สถานการณ์โลกและตลาดมีการซื้อขายตลอดเวลาโดยปราศจาก Ceiling Floor และ
          Circuit Breaker จึงส่งผลให้ราคามีการเปลี่ยนแปลงตลอดเวลา
        </div>
      </div>
      <div class="questions mt-3">
        <div class="q-text">
          15. การ All In
          หรือทุ่มเงินหมดหน้าตักในเหรียญที่มีอนาคตจะสร้างผลตอบแทนได้ยั่งยืน
          เพราะโอกาสสร้างตัวไม่ได้มีมาบ่อย ๆ
        </div>
        <div class="answer mt-3">
          <div class="radio_btn a1">
            <input @click="q15 = true" type="radio" id="option29" name="q15" />
            <label for="option29">ใช่</label>
          </div>
          <div class="radio_btn a2">
            <input @click="q15 = false" type="radio" id="option30" name="q15" />
            <label for="option30">ไม่ใช่</label>
          </div>
        </div>
        <div class="correct-answer" v-if="q15">
          นักลงทุนควรมีการกระจายความเสี่ยง (Diversification) และไม่ควรลงทุนแบบ
          All In ในสินทรัพย์นั้น ๆ เพื่อลดโอกาสขาดทุนหนักหรือหมดตัวในที่สุด
        </div>
        <div class="f-section">
          <router-link to="/pre-test/pass"
            ><button>ส่งคำตอบ</button></router-link
          >
        </div>
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
      q3: false,
      q4: false,
      q5: false,
      q6: false,
      q7: false,
      q8: false,
      q9: false,
      q10: false,
      q11: false,
      q12: false,
      q13: false,
      q14: false,
      q15: false,
    };
  },
};
</script>
<style lang="scss">
.knowledge-test-c {
  background-color: #192126;
  border-radius: 4px;
  width: 375px;
  margin: auto;
  margin-top: 25px;
  padding: 20px;
  padding-right: 0;
  font-family: "Noto Sans Thai";
  font-weight: 600;
  .qas {
    height: 588px;
    overflow-y: auto;
    overflow-x: hidden;
  }

  h1 {
    text-align: center;
    color: white;
    font-weight: 700;
    font-size: 16px;
    padding-bottom: 50px;
    border-bottom: 1px solid #28363e;
  }

  .questions {
    padding-right: 20px;
    color: #d6dde1;
    .q-text {
      font-weight: 600;
      font-size: 14px;
      line-height: 20px;
      /* or 143% */

      /* Text+Icon/Primary */

      color: #d6dde1;
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
      font-size: 16px;
      line-height: 24px;
      border-radius: 4px;
      &:hover {
        background-color: #f28e38;
      }
    }
  }
}
</style>
