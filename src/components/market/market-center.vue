<template>
  <div class="fda1212982022-MarKetHeader">
    <section class="MarKetHeader11289292022">
      <b-container fluid class="pLR-24 bg-MarKetHeader">
        <div class="page-MarKetHeader">
          <b-navbar>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
              <b-navbar-nav>
                <div class="mx-auto">
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
                      :to="{ path: '/market/favorite' }"
                      :active="$route.name == 'MarketFavorite'"
                      >Favorite</b-link
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
                  <div class="menu-item">
                    <b-link
                      class="colormiddle"
                      :to="{ path: '/market/Gain/Loss' }"
                      :active="$route.name == 'Gainloss'"
                      >Top Gain/Loss</b-link
                    >
                  </div>
                  <div class="menu-item">
                    <b-link
                      class="colormiddle"
                      :to="{ path: '/market/marketupdate' }"
                      :active="$route.name == 'marketupdate'"
                      >Market Update</b-link
                    >
                  </div>
                  <div class="menu-item">
                    <b-link
                      class="colormiddle"
                      :to="{ path: '/market/news' }"
                      :active="$route.name == 'news'"
                      >News</b-link
                    >
                  </div>
                </div>
              </b-navbar-nav>
            </b-collapse>
          </b-navbar>
          <div class="form-div">
            <form
              class="navbar-search navbar-search-dark form-inline mr-3 ml-lg-auto"
            >
              <div class="mb-0 form-group FDASearch">
                <fieldset class="field-container" style="position: relative">
                  <div class="icons-container">
                    <span style="position: absolute; right: 13px"
                      ><svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z"
                          fill="#9BACB6"
                        />
                      </svg>
                    </span>
                    <!-- <div class="icon-search"></div> -->
                  </div>
                  <input type="text" placeholder="Search Coin" class="field" />
                </fieldset>
              </div>
            </form>
          </div>
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
@media (min-width: 768px) and (max-width: 1076px) {
  .form-div {
    display: flex;
    width: 100%;
    align-items: right;
    justify-content: right;
  }
  form {
    position: relative;
    top: 0 !important;
    margin-bottom: 5px;
    margin-right: 9px;
    align-items: flex-end;
  }
}
//
.MarKetHeader11289292022 {
  .bg-MarKetHeader {
    background-color: var(--ui-layer-0p5);
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
    font-weight: 400 !important;
    font-family: var(--bs-roboto-font-sans-serif);
  }
  .menu-item {
    margin-right: 32px !important;
    position: relative !important;
    font-weight: 400 !important;
    font-size: 16px !important;
    line-height: 19px !important;
  }

  .mx-auto .colormiddle {
    padding: 19px 0px;
    text-align: center;
    height: 56px;
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
    // position: relative;
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

  // .icon-search {
  // }
  // .icon-search:after {
  //   content: url("@/assets/images/iconArrow/icon-search.png") !important;
  // }

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
@media (max-width: 848px) {
  .pLR-24 {
    padding-left: 16px;
    padding-right: 16px;
  }
}
@media (min-width: 848px) {
  .pLR-24 {
    padding-left: 24px;
    padding-right: 24px;
  }
}
</style>
