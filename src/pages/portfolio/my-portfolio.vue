<template>
  <div class="wraper">
    <div
      class="
        container-fluid
        coin-nav
        justify-content-center
        align-items-center
        background-darkgrey
      "
    >
      <div class="container">
        <div class="row justify-content-center align-items-center">
          <div class="col">
            <div class="my-portfolio-header">
              <p class="font-18 light-grey">My Portfolio Value</p>
              <h3>161,980.97 THB</h3>
            </div>
          </div>
          <div class="col">
            <div class="coin-header">
              <p class="font-18 light-grey">Coin</p>
              <h4>121,191.91 THB</h4>
            </div>
          </div>
          <div class="col">
            <div class="cash-header">
              <p class="font-18 light-grey">Cash</p>
              <h4>40,000.00 THB</h4>
            </div>
          </div>
          <div class="col">
            <div class="unRealized-header">
              <p class="font-18 light-grey">P/L Unrealized (Est.)</p>
              <h4 class="greent-text mt-1">+37.02 (0.03%)</h4>
            </div>
          </div>
          <div class="col">
            <div class="Realized-header">
              <p class="font-18 light-grey">P/L Realized (Today)</p>
              <h4>0 (0%)</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <section>
        <b-container
          fluid
          class="
            pLR-24
            bg-MarKetHeader
            d-flex
            justify-content-between
            border-bottom
          "
        >
          <div class="page-MarKetHeader">
            <b-navbar>
              <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
              <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                  <div class="mx-auto">
                    <div class="menu-item">
                      <b-link
                        class="colormiddle"
                        :to="{ path: '/uc/my-portfolio' }"
                        :active="$route.name == 'MyCoins'"
                        >My Coins</b-link
                      >
                    </div>
                    <div class="menu-item">
                      <b-link
                        class="colormiddle"
                        :to="{ path: '/uc/my-portfolio/Coinheatmap' }"
                        :active="$route.name == 'CoinHeatmap'"
                        >Coin Heatmap</b-link
                      >
                    </div>
                  </div>
                </b-navbar-nav>
              </b-collapse>
            </b-navbar>
          </div>
          <div class="checkbox d-flex align-items-center">
            <input
              type="checkbox"
              class="form-check-input shadow custom-checkbox"
            />
            <p class="ms-2 mb-0">ซ่อนเหรียญมูลค่าน้อย</p>
          </div>
        </b-container>
        <router-view></router-view>
      </section>
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
.font-18 {
  font-size: 18px;
  font-family: "Roboto Flex";
  margin-bottom: 0px;
}
.font-14 {
  font-size: 18px;
  font-family: "Roboto Flex";
}
.custom-checkbox {
  background: #222b2f;
  border: 1px solid #3c515d;
  border-radius: 2px;
  height: 17px;
  width: 17px;
}
.border-bottom {
  border-bottom: 1px solid #28363e !important;
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
  padding: 22px 0px;
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
.coin-nav {
  height: 80px;
}
</style>
