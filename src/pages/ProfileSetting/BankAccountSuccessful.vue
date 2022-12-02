<template>
  <div class="wrapper">
    <div class="container px-7">
      <div class="row">
        <div class="col">
          <div class="Heading">
            <h4 class="page-heading">บัญชีธนาคาร</h4>
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
              <b-icon
                @click="$refs.deletDialog.show()"
                class="iconsTrash"
                icon="trash"
              ></b-icon>
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
    bankAccountDialog,
  },
};
</script>

<style scoped>
.page-heading {
  font-weight: 600 !important;
  font-size: 24px !important;
  line-height: 36px !important;
  font-family: "Noto Sans Thai" !important;
  color: #d6dde1;
}
.primaryBtn {
  background: #f38220;
  border: none;
  font-family: 'Sarabun';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 24px;
color: #0A0D10;
}
.divider {
  background-color: #28363e;
  height: 2px;
  display: block;
  width: 80%;
  text-align: center;
  margin: 40px 65px;
}
.lightBlackBox {
  background: #192126;
  border-radius: 4px;
  padding: 24px 34px;
  width: 90%;
  margin-left: 22px;
}
.iconsTrash {
  font-size: 16px;
}
.bg-box {
  background-color: #1c262b;
}
p {
  margin-bottom: 0;
}
.Heading {
  padding: 24px 0px 21px 24px;
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
