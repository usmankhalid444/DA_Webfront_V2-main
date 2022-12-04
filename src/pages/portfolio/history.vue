<template>
  <div class="wraper">
    <div class="container">
          <p class="history-heading">History</p>

      <section>
        <b-container fluid class="pLR-24 bg-MarKetHeader d-flex justify-content-between border-bottom">
          <div class="page-MarKetHeader">
            <b-navbar>
              <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
              <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                  <div class="mx-auto">
                    <div class="menu-item">
                      <b-link
                        class="colormiddle"
                        :to="{ path: '/uc/history' }"
                        :active="$route.name == 'ByDetail'"
                        >By Detail</b-link
                      >
                    </div>
                    <div class="menu-item">
                      <b-link
                        class="colormiddle"
                        :to="{ path: '/uc/History/ByDate' }"
                        :active="$route.name == 'ByDate'"
                        >By Date</b-link
                      >
                    </div>
                    <div class="menu-item">
                      <b-link
                        class="colormiddle"
                        :to="{ path: '/uc/History/ByCoin' }"
                        :active="$route.name == 'ByCoin'"
                        >By Coin</b-link
                      >
                    </div>
                  </div>
                </b-navbar-nav>
              </b-collapse>
            </b-navbar>
          </div>
                
        </b-container>
        <router-view></router-view>
      </section>
    </div>
    
    <div class="container-fluid background-darkgrey">
      <!--
        
       -->
      <!-- Alert currently this container used in all three tabs -->
      <!-- this should be dynamic through props as we use prop in table using v-if  -->
      <!-- second way to use this container into each three tabs bycoin bydate and bydetail -->
      <div class="container">
        <div class="row pt-3 pb-3">
          <div class="col">
            <div class="my-portfolio-header">
              <p class="font-14 light-grey mb-1">Total Profit and Loss</p>
              <h4 class="font-18">25/08/22-25/09/22</h4>
            </div>
          </div>
          <div class="col">
            <div class="coin-header">
              <p class="font-14 light-grey mb-1">Buy (THB)</p>
              <h4 class="font-18">1,200,000.00</h4>
            </div>
          </div>
          <div class="col">
            <div class="cash-header">
              <p class="font-14 light-grey mb-1">Sell (THB)</p>
              <h4 class="font-18">1,200,000.00</h4>
            </div>
          </div>
          <div class="col">
            <div class="unRealized-header">
              <p class="font-14 light-grey mb-1">Total (THB)</p>
              <h4 class="font-18">3,200,000.00</h4>
            </div>
          </div>
          <div class="col">
            <div class="Realized-header">
              <p class="font-14 light-grey mb-1">Profit/Loss (THB))</p>
              <h4 class="greent-text font-18">+8,000.00</h4>
            </div>
          </div>
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
.background-darkgrey {
  background-color: #192126;
}
.light-grey {
  color: #677f8e;
  font-size: 14px;
  font-family: "Roboto Flex";
}
.greent-text {
  color: #40994f;
  font-size: 18px;
  font-family: "Roboto Flex";
}
.font-14 {
  font-family: 'Roboto Flex';
font-style: normal;
font-weight: 400;
font-size: 14px;
  margin-bottom: 0px;
}
.font-18 {
  font-family: 'Roboto Flex';
font-style: normal;
font-weight: 600;
font-size: 18px;
}
.custom-checkbox{
    background: #222B2F;
    border: 1px solid #3C515D;
    border-radius: 2px;
    height: 17px;
    width: 17px;
}
.border-bottom{
    border-bottom: 1px solid #28363E!important;
}
.pLR-24 {
  padding-left: 0px !important;
  padding-right: 0px !important;
}
.page-MarKetHeader {
  font-family: var(--bs-roboto-font-sans-serif);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
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
  margin-right: 32px !important;
  position: relative !important;
  font-weight: 400 !important;
  font-size: 16px !important;
  line-height: 19px !important;
}
.mx-auto .colormiddle {
  padding: 30px 0px;
  text-align: center;
  height: 64px;
  border-bottom: 2px solid transparent;
  display: flex;
  transition: 0.4s;
  cursor: pointer !important;
}
.mx-auto .colormiddle.active,
.mx-auto .colormiddle:hover {
  border-bottom-color: #f38220 !important;
  text-align: center;
  color: var(--primary) !important;
}
.field-container {
  position: relative;
  padding: 0;
  margin: 0;
  border: 0;
  width: 219px;
  height: 40px;
}

.icons-container {
  position: absolute;
  top: 8px;
  left: 8px;
  width: 35px;
  height: 35px;
  overflow: hidden;
}
.icon-search:after {
  content: url("@/assets/images/iconArrow/icon-search.png") !important;
}

input::placeholder {
  color: var(--sub-2) !important;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
}

.field {
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: var(--primary);
  border: 0;
  width: 219px;
  height: 40px;
  padding: 8px 40px;
  background-color: var(--ui-layer-0);
  border-radius: 4px;
  box-shadow: 0px 8px 15px rgba(75, 72, 72, 0.1);
  transition: all 0.4s ease;
}
.field:focus {
  outline: none;
  box-shadow: 0px 9px 20px rgba(75, 72, 72, 0.3);
}
.history-heading{
  font-family: 'Roboto Flex';
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 24px;
margin-top: 3%;
/* identical to box height, or 100% */


/* Text + Icon/Content - Primary */

color: #D6DDE1;
}
</style>
