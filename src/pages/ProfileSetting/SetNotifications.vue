<template>
  <div class="wrapper">
    <div class="container px-7">
      <div class="row">
        <div class="col">
          <div class="Heading">
            <h4 class="page-heading">ตั้งค่าการแจ้งเตือน</h4>
          </div>
        </div>
        <div class="row px-4">
          <div class="col-10">
           <div v-for="(item, index) in toggleTitles" :key="index" class="py-3 d-flex justify-content-between align-content-center border-bottom-table">
            <p class="table-text-white ">{{item.title}}</p>
               <toggle-button :value="true"
               :color="{checked: '#40994F'}"
               :height="24"
               :width="55"
               class="mb-0"
               :labels="{checked: 'ON', unchecked: 'OFF'}"/>
           </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            toggle: false,
            toggleTitles:[
                {
                    title: 'เตือนเมื่อมีการฝาก/ถอนเงินบาท'
                },
                {
                    title: 'เตือนเมื่อมีการฝาก/ถอนเหรียญ'
                },
                {
                    title: 'เตือนเมื่อมีการซื้อขายสำเร็จ (Order Matched)'
                },
                {
                    title: 'ยืนยันก่อนส่งคำสั่งซื้อขาย'
                },
                {
                    title: 'เตือนเมื่อมีการล็อคอิน'
                },
                {
                    title: 'ไม่ต้องแจ้งเตือนอีก'
                },
               
            ]
        }
    }
};
</script>

<style scoped>
.bg-box {
  background-color: #1c262b;
}
p{
    margin-bottom: 0;
}
.Heading {
  padding: 24px 0px 21px 24px;
}

.page-heading{
  font-weight: 600 !important;
  font-size: 24px !important;
  line-height: 36px !important;
  font-family: "Noto Sans Thai" !important;
  color: #d6dde1;
}

.table-text-white {
  color: #fff;
  font-size: 14px;
  font-weight: 400;
  font-family: "Sarabun" !important;
  cursor: pointer;
}


.border-bottom-table {
  border-bottom: 1px solid #28363e;
}

</style>
