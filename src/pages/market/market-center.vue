<template>
  <div class="fda1212982022-MarKetHeader">
    <section class="MarKetHeader11289292022">
      <b-container fluid class="pLR-24 bg-MarKetHeader">
        <div class="page-MarKetHeader">
          <b-navbar>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
              <b-navbar-nav>
                <!-- <div v-if="pathName == 'market'">buy-sell</div> -->
                <div class="mx-auto">
                  <div class="menu-item">
                    <b-link
                      class="colormiddle"
                      :to="{ path: '/market/favorite' }"
                      :active="$route.name == 'MarketFavorite'"
                      >Favorite</b-link
                    >
                  </div>
                  <div class="menu-item">
                    <b-link
                      class="colormiddle"
                      :to="{ path: '/market/all-coins' }"
                      :active="$route.name == 'MarketAllCoin'"
                      >All Coins</b-link
                    >
                  </div>
                  <div class="menu-item">
                    <b-link
                      class="colormiddle"
                      :to="{ path: '/market/categories' }"
                      :active="$route.name == 'MarketCategories'"
                      >Categories</b-link
                    >
                  </div>
                  <div class="menu-item">
                    <b-link
                      class="colormiddle"
                      :to="{ path: '/market/themes' }"
                      :active="
                        $route.name == 'MarketThemes' ||
                        $route.name == 'MarketCategoryCoinList'
                      "
                      >Theme</b-link
                    >
                  </div>
                  <div class="menu-item">
                    <b-link
                      class="colormiddle"
                      :to="{ path: '/market/heatmap' }"
                      :active="
                        $route.name == 'MarketHeatmap' ||
                        $route.name == 'MarketThemesCoinList'
                      "
                      >Heatmap</b-link
                    >
                  </div>
                </div>
              </b-navbar-nav>
            </b-collapse>
          </b-navbar>
          <form class="navbar-search navbar-search-dark form-inline mr-3 ml-lg-auto">
            <div class="mb-0 form-group FDASearch">
              <fieldset class="field-container">
                <div class="icons-container">
                  <div class="icon-search"></div>
                </div>
                <input type="text" placeholder="Search Coin" class="field" />
              </fieldset>
            </div>
          </form>
        </div>
      </b-container>
      <router-view></router-view>
    </section>
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

<style lang="scss" scoped>
.MarKetHeader11289292022 {
  .bg-MarKetHeader {
    background-color: var(--ui-layer-0p5);
  }
  .pLR-24 {
    padding-left: 24px !important;
    padding-right: 24px !important;
  }
  .page-MarKetHeader {
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

  .FDASearch {
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

  .icon-search {
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
}
</style>
