<template>
  <div class="wrapper">
    <div class="container px-7">
      <div class="row">
        <div class="col">
          <div class="Heading pt-6">
            <h4>บัญชีธนาคาร</h4>
          </div>
        </div>
      </div>
      <div class="lightBlackBox">
        <div class="row">
          <div class="col-3">
            <p class="text-box">ชื่อบัญชี</p>
            <p class="text-box pt-4">ธนาคาร</p>
            <p class="text-box pt-4">ชื่อสาขา</p>
            <p class="text-box pt-4">เลขที่บัญชี</p>
          </div>
          <div class="col-4">
            <p class="table-text-white">นางสาว ณัฐฐา นากาโมโตะ</p>
            <p class="table-text-white pt-4">ไทยพาณิชย์</p>
            <p class="table-text-white pt-4">อารีย์</p>
            <p class="table-text-white pt-4">299-219934-9</p>
          </div>
          <div class="col-5">
            <p class="table-text-yellow correct-button float-end">
              <b-icon @click="$refs.deletDialog.show()" class="iconsTrash" icon="trash"></b-icon>
            </p>
          </div>
        </div>
      </div>
      <div class="divider"></div>
      <div class="text-center">
        <b-button @click="$refs.bankAccount.show()" class="primaryBtn" size="lg"
          >+ เพิ่มบัญชีธนาคาร</b-button
        >
      </div>
    </div>
    <deleteDialog ref="deletDialog" />
    <bankAccountDialog ref="bankAccount" />
  </div>
</template>

<script>
import deleteDialog from "@/components/dialogs/delete.vue";
import bankAccountDialog from "@/components/dialogs/bankAccount.vue";
export default {
  data() {
    return {
      toggle: false,
    };
  },
  components: {
    deleteDialog,
    bankAccountDialog
  },
};
</script>

<style scoped>
.primaryBtn {
  background: #f38220;
  border: none;
}
.divider {
  background-color: #28363e;
  height: 2px;
  display: block;
  width: 95%;
  text-align: center;
  margin: 40px 0;
}
.lightBlackBox {
  background: #192126;
  border-radius: 4px;
  padding: 24px 34px;
}
.iconsTrash {
  font-size: 18px;
}
.bg-box {
  background-color: #1c262b;
}
p {
  margin-bottom: 0;
}
.Heading {
  color: #d6dde1;
  font-size: 24px;
  font-weight: 500;
  font-family: "Noto Sans Thai" !important;
  line-height: 24px;
  padding: 24px 0px 0px 0px;
}
.table-text-yellow {
  color: #f38220;
  font-size: 14px;
  font-weight: 400;
  font-family: "Sarabun" !important;
  cursor: pointer;
}
.text-box {
  color: #9bacb6;
  font-size: 14px;
  font-weight: 400;
  font-family: "Sarabun" !important;
  cursor: pointer;
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
