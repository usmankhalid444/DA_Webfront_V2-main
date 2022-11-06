<template>
  <div class="wraper">
    <div class="container-fluid">
      <div class="row">
        <div class="col-3 background-tabs">
            <div class="setting-heading">
            <h1>การตั้งค่า</h1>
        </div>
          <ul class="nav flex-column mx-auto">
            <li class="nav-item menu-item">
              <div class="menu-item">
                <b-link
                  class="colormiddle"
                  :to="{ path: '/ProfileSetting' }"
                  :active="$route.name == 'PersonalInformation'"
                  >ข้อมูลส่วนตัว</b-link
                >
              </div>
            </li>

            <li class="nav-item menu-item">
              <div class="menu-item">
                <b-link
                  class="colormiddle d-flex justify-content-between"
                  :to="{ path: '/ProfileSetting/BankAccountSuccessful' }"
                  :active="$route.name == 'BankAccountSuccessful'"
                  ><span>บัญชีธนาคาร</span> <span class="green">สำเร็จ</span></b-link
                >
              </div>
            </li>
            <li class="nav-item menu-item">
              <div class="menu-item">
                <b-link
                  class="colormiddle"
                  :to="{ path: '/ProfileSetting/PinPassword' }"
                  :active="$route.name == 'PinPassword'"
                  >PIN / Password</b-link
                >
              </div>
              <div class="hr"></div>
            </li>
            <li class="nav-item menu-item">
              <div class="menu-item">
                <b-link
                  class="colormiddle"
                  :to="{ path: '/ProfileSetting/RequestIncrease' }"
                  :active="$route.name == 'RequestIncrease'"
                  >ขอเพิ่มวงเงินซื้อขาย</b-link
                >
              </div>
            </li>
            <li class="nav-item menu-item">
              <div class="menu-item">
                <b-link
                  class="colormiddle"
                  :to="{ path: '/ProfileSetting/DetermineCost' }"
                  :active="$route.name == 'DetermineCost'"
                  >กำหนดต้นทุนการฝากเหรียญ</b-link
                >
              </div>
            </li>
            <li class="nav-item menu-item">
              <div class="menu-item">
                <b-link
                  class="colormiddle"
                  :to="{ path: '/ProfileSetting/ReceivingInformation' }"
                  :active="$route.name == 'ReceivingInformation'"
                  >การรับข้อมูลข่าวสาร</b-link
                >
              </div>
            </li>
            <li class="nav-item menu-item">
              <div class="menu-item">
                <b-link
                  class="colormiddle"
                  :to="{ path: '/ProfileSetting/LoginHistory' }"
                  :active="$route.name == 'LoginHistory'"
                  >ประวัติการเข้าสู่ระบบ</b-link
                >
              </div>
            </li>
            <li class="nav-item menu-item">
              <div class="menu-item">
                <b-link
                  class="colormiddle"
                  :to="{ path: '/ProfileSetting/SetNotifications' }"
                  :active="$route.name == 'SetNotifications'"
                  >ตั้งค่าการแจ้งเตือน</b-link
                >
              </div>
            </li>
            <div class="hr"></div>
            <li class="nav-item menu-item">
              <div class="menu-item">
                <b-link
                  class="colormiddle"
                  :to="{ path: '/ProfileSetting/AboutUs' }"
                  :active="$route.name == 'AboutUs'"
                  >เกี่ยวกับเรา</b-link
                >
              </div>
            </li>
            <li class="nav-item menu-item">
              <div class="menu-item">
                <b-link
                  class="colormiddle"
                  :to="{ path: '/ProfileSetting/ContactUs' }"
                  :active="$route.name == 'ContactUs'"
                  >ติดต่อเรา</b-link
                >
              </div>
            </li>
            <li class="nav-item menu-item">
              <div class="menu-item">
                <b-link
                  class="colormiddle"
                  :to="{ path: '/ProfileSetting/LogOut' }"
                  :active="$route.name == 'LogOut'"
                  >ออกจากระบบ</b-link
                >
              </div>
            </li>
          </ul>
        </div>
        <div class="col-9">
          <section>
            <router-view></router-view>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      pathName: "",
    };
  },
  methods: {
    getRouteName() {
      let path = this.$route.path;
      console.log(path);
      let pathArr = path.split("/");
      this.pathName = pathArr[1];
    },
  },
  mounted() {
    this.getRouteName();
  },
});
</script>

<style scoped>
.background-tabs{
    background-color: #192126;
    padding-left: 0px;
    padding-bottom: 15%;
}
.setting-heading{
  padding: 24px 0px 10px 24px;
}
.green{
    color: var(--green-positive);;
}
.hr{
    border-bottom: 1px solid #677F8E;
    margin: 24px;
}




.mx-auto {
  display: flex;
  gap: 0px !important;
}
.colormiddle {
  text-decoration: none;
  color: #677f8e !important;
}
.menu-item {
  /* margin-right: 32px !important; */
  position: relative !important;
  font-weight: 400 !important;
  font-size: 16px !important;
  line-height: 19px !important;
    font-family: 'sarabun'!important;

}

.mx-auto .colormiddle {
  padding: 10px 20px;
  text-align: center;
  /* height: 64px; */
  border-bottom: 2px solid transparent;
  display: flex;
  transition: 0.4s;
  cursor: pointer !important;
}
.mx-auto .colormiddle.active {
  border-left: 4px solid #f38220 !important;
  /* text-align: center; */
  color: var(--primary) !important;
  background-color: #38454D;
  font-weight: 400 !important;
  font-size: 14px !important;
}
.mx-auto .colormiddle:hover {
  /* border-left-color: #f38220 !important; */
  border-left: 4px solid #f38220 !important;
  text-align: center;
  color: var(--primary) !important;
  font-weight: 400 !important;
  font-size: 14px !important;
  /* font-family: Sarabun; */
  /* background-color: #38454D; */
}
</style>
