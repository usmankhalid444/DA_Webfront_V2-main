<template>
  <div>
    <section class="NavDrawer11189292022 bg-NavDrawer">
      <b-container fluid class="p-16">
        <div class="page-NavDrawerHeader">
          <div class="item_left">
            <b-navbar class="Menu-NavDrawer">
              <!--====================HAMBURGER========================-->
              <div class="coverhamburger-menu">
                <div class="dropdown">
                  <button class="hamburger-menu">
                    <div class="bar-top"></div>
                    <div class="bar-middle"></div>
                    <div class="bar-bottom"></div>
                  </button>
                  <!--==================== END HAMBURGER========================-->

                  <!--==================== Toggle down========================-->
                  <div class="dropdown-content">
                    <div class="submenu-item">
                      <ul class="cover">
                        <li
                          class="menu-item line"
                          :class="$route.name == 'Home' ? 'active' : ''"
                        >
                          <b-link class="pHome arrow-right"
                            >Home
                            <svg
                              class="icon-right"
                              width="8"
                              height="24"
                              viewBox="0 0 8 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                class="path-arrow-right"
                                d="M0.59 16.59L5.17 12L0.59 7.41L2 6L8 12L2 18L0.59 16.59Z"
                                fill="#677F8E"
                              />
                            </svg>
                          </b-link>
                          <ul class="drop-menu">
                            <li class="drop-menu-item line">
                              <b-link to="#" class="fontdropdownLeft"
                                >Page 1</b-link
                              >
                            </li>
                            <li class="drop-menu-item line">
                              <b-link to="#" class="fontdropdownmiddle"
                                >Page 2</b-link
                              >
                            </li>
                            <li class="drop-menu-item line">
                              <b-link to="#" class="fontdropdownmiddle"
                                >Page 3</b-link
                              >
                            </li>
                            <li class="drop-menu-item">
                              <b-link to="#" class="fontdropdownRight"
                                >Page 4</b-link
                              >
                            </li>
                          </ul>
                        </li>

                        <li
                          class="coverout line"
                          :class="
                            $route.name == 'MarketFavorite' ||
                            $route.name == 'MarketAllCoin' ||
                            $route.name == 'MarketCategories' ||
                            $route.name == 'MarketThemes' ||
                            $route.name == 'MarketHeatmap' ||
                            $route.name == 'MarketCategoryCoinList' ||
                            $route.name == 'MarketThemesCoinList'
                              ? 'active'
                              : ''
                          "
                        >
                          <b-link :to="{ path: '/market' }">Market</b-link>
                        </li>
                        <li
                          class="coverout line"
                          :class="$route.name == 'ExchangePair' ? 'active' : ''"
                        >
                          <b-link :to="{ path: '/exchange' }">Buy/Sell</b-link>
                        </li>

                        <li
                          class="menu-item line"
                          :class="
                            $route.name == 'AutoMode' ||
                            $route.name == 'MyPortfolio' ||
                            $route.name == 'OrderHistory' ||
                            $route.name == 'ProfitLossReport' ||
                            $route.name == 'DepositWithdrawReport'
                              ? 'active'
                              : ''
                          "
                        >
                          <b-link class="pPort arrow-right"
                            >Portfolio
                            <svg
                              class="icon-right"
                              width="8"
                              height="24"
                              viewBox="0 0 8 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                class="path-arrow-right"
                                d="M0.59 16.59L5.17 12L0.59 7.41L2 6L8 12L2 18L0.59 16.59Z"
                                fill="#677F8E"
                              />
                            </svg>
                          </b-link>
                          <ul class="drop-menu">
                            <li class="drop-menu-item line">
                              <b-link
                                :to="{ path: '/uc/my-portfolio' }"
                                class="fontdropdownLeft"
                                >My Portfolio</b-link
                              >
                            </li>
                            <li class="drop-menu-item line">
                              <b-link
                                :to="{ path: '/uc/auto-mode' }"
                                class="fontdropdownmiddle"
                                >Auto Mode</b-link
                              >
                            </li>
                            <li class="drop-menu-item line">
                              <b-link
                                :to="{ path: '/uc/order-history' }"
                                class="fontdropdownmiddle"
                                >Order History</b-link
                              >
                            </li>
                            <li class="drop-menu-item line">
                              <b-link
                                :to="{ path: '/uc/profit-loss-report' }"
                                class="fontdropdownmiddle"
                                >Profit and Loss Report</b-link
                              >
                            </li>
                            <li class="drop-menu-item">
                              <b-link
                                :to="{ path: '/uc/deposit-withdraw-report' }"
                                class="fontdropdownRight"
                                >Deposit/Withdraw Report</b-link
                              >
                            </li>
                          </ul>
                        </li>
                        <br />

                        <li
                          class="menu-item line"
                          :class="
                            $route.name == 'Deposit' ||
                            $route.name == 'Withdraw'
                              ? 'active'
                              : ''
                          "
                        >
                          <b-link class="pDep arrow-right"
                            >Deposit/Withdraw
                            <svg
                              class="icon-right"
                              width="8"
                              height="24"
                              viewBox="0 0 8 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                class="path-arrow-right"
                                d="M0.59 16.59L5.17 12L0.59 7.41L2 6L8 12L2 18L0.59 16.59Z"
                                fill="#677F8E"
                              />
                            </svg>
                          </b-link>
                          <ul class="drop-menu">
                            <li class="drop-menu-item line">
                              <b-link
                                :to="{ path: '/uc/deposit' }"
                                class="fontdropdownLeft"
                                >Deposit</b-link
                              >
                            </li>
                            <li class="drop-menu-item">
                              <b-link
                                :to="{ path: '/uc/withdraw' }"
                                class="fontdropdownRight"
                                >Withdraw</b-link
                              >
                            </li>
                          </ul>
                        </li>

                        <li
                          class="coverout line"
                          :class="
                            $route.name == 'News' || $route.name == 'NewsDetail'
                              ? 'active'
                              : ''
                          "
                        >
                          <b-link :to="{ path: '/news' }">News</b-link>
                        </li>
                        <li
                          class="coverout"
                          :class="$route.name == 'Download' ? 'active' : ''"
                        >
                          <b-link :to="{ path: '/download' }">Download</b-link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <!--==================== END Toggle down========================-->
                </div>
              </div>
            </b-navbar>
            <!--================================ END ===============================-->
            <div class="LogoImage">
              <b-link href="#">
                <b-img
                  :src="require('../../assets/images/logo-mh/logo.png')"
                  fluid
                  alt="FINANSIA Project || Website"
                >
                </b-img>
              </b-link>
            </div>
          </div>

          <!-- ******** BUTTON Login AND Add   Open Account ******** -->
          <div class="icon-navbar_right">
            <!-- <b-button class="FDA-BTnLogin" role="button">Login</b-button>
            <b-button class="FDA-BTnOpenAcc" role="button">
              Open Account
            </b-button> -->
          </div>
          <!-- ******** BUTTON Login AND Add   Open Account ******** -->

          <!-- ******** BUTTON Add Favorite AND Add Price Alert ******** -->
          <div class="btn-responsive__Style">
            <div class="icon-navbar_right">
              <ul class="header-dots">
                <li>
                  <span class="btn__dropdownIcon">
                    <b-link class="count-indicator">
                      <span class="icon icon-shape bg-Icon_bell iconR-16">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M18 16V11C18 7.93 16.36 5.36 13.5 4.68V4C13.5 3.17 12.83 2.5 12 2.5C11.17 2.5 10.5 3.17 10.5 4V4.68C7.63 5.36 6 7.92 6 11V16L4 18V19H20V18L18 16ZM12 22C13.1 22 14 21.1 14 20H10C10 21.1 10.89 22 12 22Z"
                            fill="#677F8E"
                          />
                        </svg>
                        <span class="count count-varient2">3</span>
                      </span>
                    </b-link>
                  </span>
                </li>
                <li>
                  <!-- ================================ User Dropdown ================================= -->
                  <span class="btn__dropdownIcon">
                    <div class="iconcover">
                      <div class="dropdown-icon">
                        <svg
                          width="24"
                          height="80"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_3_255)">
                            <circle cx="12" cy="12" r="9.75" fill="#677F8E" />
                            <path
                              d="M12.0002 0.000183105C5.37615 0.000183105 0.000152588 5.37618 0.000152588 12.0002C0.000152588 18.6242 5.37615 24.0002 12.0002 24.0002C18.6242 24.0002 24.0002 18.6242 24.0002 12.0002C24.0002 5.37618 18.6242 0.000183105 12.0002 0.000183105ZM12.0002 3.60018C13.9922 3.60018 15.6002 5.20818 15.6002 7.20018C15.6002 9.19218 13.9922 10.8002 12.0002 10.8002C10.0082 10.8002 8.40015 9.19218 8.40015 7.20018C8.40015 5.20818 10.0082 3.60018 12.0002 3.60018ZM12.0002 20.6402C9.00015 20.6402 6.34815 19.1042 4.80015 16.7762C4.83615 14.3882 9.60015 13.0802 12.0002 13.0802C14.3882 13.0802 19.1642 14.3882 19.2002 16.7762C17.6522 19.1042 15.0002 20.6402 12.0002 20.6402Z"
                              fill="#222B2F"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_3_255">
                              <rect width="24" height="24" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        <div class="dropdown-content-icon">
                          <ul class="Nameiofo">
                            <li class="name">Nattamoto Shakanani</li>
                            <li class="accountnum">Account No. 123123</li>
                            <li class="accountnum g12">nattamoto@gmail.com</li>
                          </ul>
                          <div class="line-icon"></div>
                          <ul class="coverp0">
                            <li class="name">
                              <b-link class="p8">Profile & Setting</b-link>
                            </li>
                            <br />
                            <li class="name">
                              <b-link class="p8">Menu X</b-link>
                            </li>
                            <br />
                            <li class="name">
                              <b-link class="p8">Logout</b-link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </span>
                  <!-- ================================ User Dropdown ================================= -->
                </li>
              </ul>
            </div>
          </div>
          <!-- ******** BUTTON Add Price Alert AND Add Price Alert ******** -->
        </div>
      </b-container>
    </section>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  components: {},
});
</script>

<style lang="scss" scoped>
@media (min-width: 768px) {
  .NavDrawer11189292022 {
    display: none;
  }
}
.NavDrawer11189292022 {
  .p-16 {
    padding: 16px 16px !important;
  }
  .page-NavDrawerHeader {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    .item_left {
      .Menu-NavDrawer {
        display: inline-block;
      }
      .LogoImage {
        display: inline-block;
      }
    }

    .icon-navbar_right {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 0px;
      gap: 16px;
      .FDA-BTnLogin {
        background-color: var(--gray-default-state);
        border-radius: 4px;
        border-style: none;
        color: #fff;
        cursor: pointer;
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        outline: none;
        overflow: hidden;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 8px 16px;
        gap: 4px;
        width: 68px;
        height: 32px;
        position: relative;
        text-align: center;
        transform: translate3d(0, 0, 0);
        transition: all 0.3s;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
        vertical-align: top;
        white-space: nowrap;
      }

      .FDA-BTnLogin:hover {
        background-color: var(--gray-default-state);
        opacity: 1;
        transform: translateY(0);
        transition-duration: 0.35s;
      }

      .FDA-BTnLogin:active {
        transform: translateY(2px);
        transition-duration: 0.35s;
      }
      /* Style Open Acc */
      .FDA-BTnOpenAcc {
        background-color: var(--orange-accent);
        border-radius: 4px;
        border-style: none;
        color: #fff;
        cursor: pointer;
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        outline: none;
        overflow: hidden;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0px 16px;
        gap: 4px;
        width: 122px;
        height: 32px;
        position: relative;
        text-align: center;
        transform: translate3d(0, 0, 0);
        transition: all 0.3s;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
        vertical-align: top;
        white-space: nowrap;
      }

      .FDA-BTnOpenAcc:hover {
        background-color: var(--orange-AccentHover);
        opacity: 1;
        transform: translateY(0);
        transition-duration: 0.35s;
      }

      .FDA-BTnOpenAcc:active {
        transform: translateY(2px);
        transition-duration: 0.35s;
      }

      .btn-check:checked + .btn:focus,
      .btn-check:active + .btn:focus,
      .btn:active:focus,
      .btn.active:focus,
      .btn.show:focus {
        box-shadow: none !important;
      }

      .btn-check:focus + .btn,
      .btn:focus {
        box-shadow: none !important;
      }
    }

    .btn-responsive__Style {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
      padding: 0px;
      // gap: 16px;
    }
  }

  // <!-- ******** BUTTON Add Favorite AND Add Price Alert ******** -->

  // ==================================================== Tine do it

  // ===================================== hamburger-menu
  .coverhamburger-menu {
    position: relative;
    top: 6px !important;
    margin-right: 15px;
    margin-top: 0;
  }
  .hamburger-menu {
    background-color: #0a0d10;
    border: none;
  }
  .bar-top {
    height: 2px;
    width: 18px;
    margin-bottom: 3px !important;
    background: white;
  }
  .bar-middle {
    height: 2px;
    width: 18px;
    margin-bottom: 3px !important;
    background: white;
  }
  .bar-bottom {
    height: 2px;
    width: 18px;
    margin-bottom: 3px !important;
    background: white;
  }
  // =====================================  END hamburger-menu
  // =====================================
  ul.cover li.coverout {
    list-style: none;
  }
  ul li {
    list-style: none;
  }
  ul.cover {
    padding: 0px !important;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    width: 240px;
    height: 309px;
    padding-left: 0px;
    margin-bottom: 0px;
  }
  li.menu-item,
  li.line {
    width: 100%;
    border-bottom: 1px solid #28363e;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
  }
  .menu-item {
    display: inline-block;
    background-color: #222b2f;
    position: relative;
  }

  .menu-item a {
    position: relative;
  }

  ul.drop-menu {
    display: none;
    position: absolute;
    background-color: #222b2f;
    min-width: 100px;
    padding-left: 0px;
    left: 229px;
    top: 0px;
    width: 240px;
    box-shadow: 0px 8px 12px rgba(10, 13, 16, 0.2);
    border-radius: 8px;
  }

  .drop-menu-item {
    width: 100%;
  }

  .drop-menu-item a {
    color: #555;
  }

  li.menu-item:hover ul.drop-menu {
    display: block;
  }

  //=============================================================
  .dropdown {
    position: relative;
    display: inline-block;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    left: -7px;
    background-color: #222b2f;
    box-shadow: 0px 8px 12px rgba(10, 13, 16, 0.2);
    z-index: 1;
    border-radius: 8px;
  }
  .submenu-item:hover > .dropdown-menu {
    left: 246px;
    background-color: #222b2f;
    border: none;
    top: 0px;
    box-shadow: 0px 8px 12px rgba(10, 13, 16, 0.2);
  }
  .submenu-item:hover > a {
    display: block;
  }
  .dropdown-content a {
    color: #ffffff !important;
    padding: 12px 22px;
    text-decoration: none;
    display: block;
  }
  .dropdown-content a:hover {
    color: #fff !important;
  }

  .dropdown-content .coverout.active a {
    color: #f38220 !important;
  }

  ul.cover li.menu-item:hover a.arrow-right {
    color: #fff !important;
  }
  ul.cover li.menu-item.active a.arrow-right {
    color: #f38220 !important;
  }
  ul.cover li.menu-item:hover a.arrow-right .path-arrow-right {
    fill: #fff !important;
  }
  ul.drop-menu li.drop-menu-item:hover > a {
    color: #f38220 !important;
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }
  ul.drop-menu a:hover {
    background-color: #222b2f;
  }
  // ========================================= ARROW
  // .arrow-right:hover::after {
  //   content: url("@/assets/images/iconArrow/icon-arrow-right-gray1.svg");
  //   position: absolute;
  //   right: 15px;
  //   cursor: pointer;
  // }
  svg.icon-right {
    position: absolute;
    right: 15px;
    cursor: pointer;
  }
  // ========================================= END ARROW

  // ================================================== hover submenu
  .fontdropdownLeft:hover {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
  .fontdropdownRight:hover {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }
  .fontdropdownmiddle:hover {
    border-radius: 0px;
  }
  // ============================================== hover submenu
  .icon-navbar_right {
    .header-dots {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
      padding: 0px;
      margin: 0;
      gap: 16px;
      li {
        display: inline-block;
      }
      .btn__dropdownIcon {
        height: 32px;
        width: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--gray-default-state);
        border-radius: 50%;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        .icon .IconBell {
          width: 16.41px;
          height: 20px;
        }
        .count-indicator {
          position: relative;
          border-radius: 100%;
          text-align: center;
        }
        .count-varient2 {
          background: #de2d40;
        }
        .count {
          border-radius: 100%;
          top: -4px;
          color: #ffffff;
          font-weight: 400;
          font-size: 10px;
          line-height: 12px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 2px 6px;
          position: absolute;
          width: 16px;
          height: 16px;
          left: 21px;
        }
        a {
          color: var(--sub-icon) !important;
        }
        a:hover {
          color: var(--sub-icon) !important;
        }
      }
    }
  }
  // <!-- ******** BUTTON Add Favorite AND Add Price Alert ******** -->

  // ================================================== notification

  .dropdown-icon {
    position: relative;
    display: inline-block;
    // height: 70px;
  }

  .dropdown-content-icon {
    display: none;
    position: absolute;
    background-color: #222b2f;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    width: 183px;
    height: 196px;
    right: -2px;
    border-radius: 4px;
    top: 76px;
  }

  .dropdown-content-icon a {
    color: black;
    text-decoration: none;
    display: block;
  }

  .dropdown-icon:hover .dropdown-content-icon {
    display: block;
  }

  .dropdown-icon:hover .dropbtn-icon {
    background-color: #0a0d10;
  }
  .Nameiofo {
    padding: 8px 8px;
  }
  .accountnum {
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #9bacb6;
  }
  .g12 {
    padding-bottom: 8px;
  }
  ul li {
    text-decoration: none;
  }
  ul.Nameiofo li.name {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #d6dde1;
  }
  ul.Nameiofo li.accountnum {
    width: 167px;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
  }
  ul.coverp0 {
    padding: 0px !important;
    // margin-left: 8px !important;
  }
  li.name a.p8 {
    padding: 8px !important;
  }
  .icon-navbar_right .header-dots .btn__dropdownIcon a {
    color: #d6dde1 !important;
  }
  .line-icon {
    border-bottom: 1px solid #28363e;
    width: 167px;
    position: absolute;
    right: 8px;
  }
  // ================================================== End notification
}
</style>
