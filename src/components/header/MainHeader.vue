<template>
  <div>
    <NavDrawer></NavDrawer>
    <header class="container-fluid site-main-header pmd">
      <div class="row">
        <div class="col-md-12 col-lg-1 my-auto main-header-logo">
          <span>
            <b-link :to="{ path: '/' }">
              <b-img
                :src="require('../../assets/images/logo-mh/logo.png')"
                fluid
                alt="FINANSIA Project || Website"
              >
              </b-img>
            </b-link>
          </span>
        </div>
        <div class="col-md-12 col-lg-10 my-auto Nav1">
          <div class="main-NavMenu">
            <ul>
              <li class="listmenu">
                <div class="dropdown dropdown-togglemenu">
                  <button
                    class="dropbtn"
                    :class="$route.name == 'Home' ? 'active' : ''"
                  >
                    Home
                    <span
                      ><svg
                        width="10"
                        height="7"
                        viewBox="0 0 10 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.175 0.158447L5 3.97511L8.825 0.158447L10 1.33345L5 6.33345L0 1.33345L1.175 0.158447Z"
                          fill="#677F8E"
                        />
                      </svg>
                    </span>
                  </button>
                  <div class="dropdown-content">
                    <b-link href="#" class="fontdropdownLeft">Link 1</b-link>
                    <b-link href="#" class="fontdropdownmiddle">Link 2</b-link>
                    <b-link href="#" class="fontdropdownRight">Link 3</b-link>
                  </div>
                </div>
              </li>
              <li class="listmenu">
                <div class="dropbtn">
                  <b-link
                    :to="{ path: '/market' }"
                    class="hovername"
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
                    Market
                  </b-link>
                </div>
              </li>
              <li class="listmenu">
                <div class="dropbtn">
                  <b-link
                    :to="{ path: '/scan' }"
                    class="hovername"
                    :class="$route.name == 'ScannerList' ? 'active' : ''"
                    >scan</b-link
                  >
                </div>
              </li>
              <li class="listmenu">
                <div class="dropbtn dropdown-togglemenu">
                  <b-link
                    :to="{ path: '/exchange' }"
                    class="hovername"
                    :class="$route.name == 'exchange' ? 'active' : ''"
                  >
                    Buy/Sell<span
                      ><svg
                        width="10"
                        height="7"
                        viewBox="0 0 10 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.175 0.158447L5 3.97511L8.825 0.158447L10 1.33345L5 6.33345L0 1.33345L1.175 0.158447Z"
                          fill="#677F8E"
                        />
                      </svg>
                    </span>
                  </b-link>
                </div>
              </li>
              <li class="listmenu">
                <div class="dropbtn">
                  <b-link
                    :to="{ path: '/chart' }"
                    class="hovername"
                    :class="$route.name == 'ChartPair' ? 'active' : ''"
                    >Chart</b-link
                  >
                </div>
              </li>
              <li class="listmenu">
                <div class="dropdown dropdown-togglemenu">
                  <button
                    class="dropbtn"
                    :class="
                      $route.name == 'AutoMode' ||
                      $route.name == 'MyPortfolio' ||
                      $route.name == 'OrderHistory' ||
                      $route.name == 'history' ||
                      $route.name == 'DepositWithdrawReport'
                        ? 'active'
                        : ''
                    "
                  >
                    Portfolio<span
                      ><svg
                        width="10"
                        height="7"
                        viewBox="0 0 10 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.175 0.158447L5 3.97511L8.825 0.158447L10 1.33345L5 6.33345L0 1.33345L1.175 0.158447Z"
                          fill="#677F8E"
                        />
                      </svg>
                    </span>
                  </button>
                  <div class="dropdown-content">
                    <b-link
                      :to="{ path: '/uc/my-portfolio' }"
                      class="fontdropdownLeft"
                      >My Portfolio
                    </b-link>
                    <!-- <b-link
                        :to="{ path: '/uc/auto-mode' }"
                        class="fontdropdownmiddle"
                        >Auto Mode</b-link
                      >
                      <b-link
                        :to="{ path: '/uc/order-history' }"
                        class="fontdropdownmiddle"
                        >Order History</b-link
                      > -->
                    <b-link
                      :to="{ path: '/uc/history' }"
                      class="fontdropdownmiddle"
                      >History</b-link
                    >
                    <!-- <b-link
                        :to="{ path: '/uc/deposit-withdraw-report' }"
                        class="fontdropdownRight"
                        >Deposit/Withdraw Report</b-link
                      > -->
                  </div>
                </div>
              </li>

              <!-- new deposit and withdraw -->
              <li class="listmenu">
                <div class="dropdown dropdown-togglemenu">
                  <button
                    class="dropbtn"
                    :class="
                      $route.name == 'DepositCashWallet' ||
                      $route.name == 'DepositCoinWallet' ||
                      $route.name == 'WithdrawCashWallet' ||
                      $route.name == 'WithdrawCoinWallet'
                        ? 'active'
                        : ''
                    "
                  >
                    Deposit/Withdraw
                    <span
                      ><svg
                        width="10"
                        height="7"
                        viewBox="0 0 10 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.175 0.158447L5 3.97511L8.825 0.158447L10 1.33345L5 6.33345L0 1.33345L1.175 0.158447Z"
                          fill="#677F8E"
                        />
                      </svg>
                    </span>
                  </button>
                  <div class="dropdown-content">
                    <b-link
                      :to="{ path: '/deposit/cash' }"
                      class="fontdropdownLeft"
                      >Deposit</b-link
                    >
                    <b-link
                      :to="{ path: '/deposit/coin' }"
                      class="fontdropdownRight"
                      >Withdraw</b-link
                    >
                  </div>
                </div>
              </li>
              <li class="listmenu">
                <div class="dropbtn">
                  <b-link
                    :to="{ path: '/news' }"
                    class="hovername"
                    :class="
                      $route.name == 'News' || $route.name == 'NewsDetail'
                        ? 'active'
                        : ''
                    "
                    >News</b-link
                  >
                </div>
              </li>
              <li class="listmenu">
                <div class="dropbtn">
                  <b-link
                    :to="{ path: '/download' }"
                    class="hovername"
                    :class="$route.name == 'Download' ? 'active' : ''"
                    >Download</b-link
                  >
                </div>
              </li>
            </ul>
          </div>
        </div>
        <!-- ******** BUTTON Login AND Add   Open Account ******** -->
        <div
          class="col-3 border icon-navbar_right"
          v-if="$route.name == 'Login'"
        >
          <b-button
            class="FDA-BTnLogin"
            role="button"
            @click="$router.push('/login')"
            >Login</b-button
          >
          <b-button class="FDA-BTnOpenAcc" role="button">
            Open Account
          </b-button>
        </div>
        <!-- ******** BUTTON Login AND Add   Open Account ******** -->
        <!-- ******** BUTTON Add Favorite AND Add Price Alert ******** -->
        <div
          class="col-md-12 col-lg-1 icon-navbar_right my-auto"
          v-if="$route.name != 'Login'"
        >
          <ul class="header-dots">
            <li>
              <span class="btn__dropdownIcon">
                <b-link class="count-indicator" :to="{ path: '/notification' }">
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
                          <b-link class="p8" :to="{ path: '/ProfileSetting' }"
                            >Profile & Setting</b-link
                          >
                        </li>
                        <br />
                        <li class="name">
                          <b-link class="p8">Menu X</b-link>
                        </li>
                        <br />
                        <li class="name">
                          <b-link class="p8" @click="logout">Logout</b-link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </li>
          </ul>
        </div>
        <!-- ******** BUTTON Add Favorite AND Add Price Alert ******** -->
      </div>
    </header>
  </div>
</template>

<script>
import NavDrawer from "./NavDrawer.vue";
export default {
  components: { NavDrawer },
  methods: {
    logout() {
      location.href = "/login";
      // this.$http.post(this.host + "/uc/loginout", {}).then(response => {
      //   var resp = response.body;
      //   if (resp.code == 0) {
      //     this.$Message.success(resp.message);
      //     this.$store.commit("setMember", null);
      //     setTimeout(() => {
      //       location.href = "/";
      //     }, 1500);
      //   } else {
      //     this.$Message.error(resp.message);
      //   }
      // });
    },
  },
};
</script>
<style lang="scss" scoped>
.site-main-header {
  background-color: #0a0d10;
  padding: 14px 24px;
  height: 64px;
  // ================================= Middle menu
  .main-NavMenu {
    .dropbtn {
      background-color: #0a0d10;
      color: #d6dde1;
      font-size: 16px;
      border: none;
      text-align: left !important;
      position: relative;
      padding: 0px 0px 17px 0px;
    }
    .dropdown {
      position: relative;
      display: inline-block;
      padding-left: 0px;
      padding-bottom: 8px !important;
      padding-right: 13px;
    }
    .dropdown-togglemenu {
      span {
        margin-left: 3px;
      }
    }
    .dropdown-content {
      margin-top: 4px;
      display: none;
      min-width: 183px;
      position: absolute;
      border-radius: 4px;
      background-color: #222b2f;
      z-index: 1;
    }
    .dropdown-content a {
      color: black;
      padding: 8px;
      text-decoration: none;
      display: block;
    }
    .dropdown-content a:hover {
      background-color: #38454d !important;
    }
    .dropdown:hover .dropdown-content {
      display: block;
    }
    .dropdown:hover .dropbtn {
      background-color: #0a0d10;
      border-bottom: 2px solid #f38220;
    }
    .dropdown .dropbtn.active {
      background-color: #0a0d10;
      border-bottom: 2px solid #f38220;
    }
    a {
      text-decoration: none;
    }
    ul {
      display: flex;
      // gap: 32px;
      list-style: none;
      margin: 0;
      padding-left: 0;
      justify-content: center;
    }
    li {
      transition-duration: 0.5s;
      height: 24px;
    }
    li a {
      color: #d6dde1 !important;
    }
    li:hover {
      cursor: pointer;
    }
    .hovername {
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
    }
    .hovername:hover {
      padding-bottom: 19px;
      border-bottom: 2px solid #f38220;
    }
    .hovername.active {
      padding-bottom: 19px;
      border-bottom: 2px solid #f38220;
    }
    ul li ul {
      background: #38454d;
      display: none;
    }
    ul li:hover > ul,
    ul li ul:hover {
      visibility: visible;
      opacity: 1;
      display: block;
    }
    ul li ul li {
      clear: both;
      width: 100%;
    }
  }
  /* CSS */
  .button-38 {
    border: 0;
    border-radius: 0.5rem;
    box-sizing: border-box;
    color: #111827;
    font-weight: 600;
    line-height: 1.25rem;
    text-align: center;
    text-decoration: none #d1d5db solid;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
  }

  .button-38:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
  }
  .button-38:focus-visible {
    box-shadow: none;
  }
  // ================================================== hover submenu
  .fontdropdownLeft {
    color: #d6dde1 !important;
    border-top-left-radius: 4px 4px 0px 0px !important;
  }
  .fontdropdownRight {
    color: #d6dde1 !important;
    border-top-left-radius: 0px 0px 4px 4px !important;
  }
  .fontdropdownmiddle {
    color: #d6dde1 !important;
    border-radius: 0px !important;
  }
  .fontdropdownLeft:hover {
    color: #9bacb6 !important;
    background-color: #38454d;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
  .fontdropdownRight:hover {
    color: #9bacb6 !important;
    background-color: #38454d;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }
  .fontdropdownmiddle:hover {
    color: #9bacb6 !important;
    background-color: #38454d;
    border-radius: 0px;
  }
  // ================================================== hover submenu

  // ================================================== notification
  .dropbtn-icon {
    background-color: #0a0d10;
    border: none;
    text-align: left !important;
    position: relative;
    padding: 20px 10px 18px 10px !important;
  }

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
    right: 0px;
    border-radius: 4px;
    top: 60px;
  }

  .dropdown-content-icon a {
    color: black;
    text-decoration: none;
    display: block;
  }

  // .dropdown-content-icon a:hover {
  //   background-color: #0a0d10;
  // }

  .dropdown-icon:hover .dropdown-content-icon {
    display: block;
  }

  .dropdown-icon:hover .dropbtn-icon {
    background-color: #0a0d10;
  }
  ul.Nameiofo {
    padding: 8px 8px;
  }
  li.accountnum {
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
  ul.coverp8 {
    padding: 0px !important;
    margin-left: 8px !important;
  }
  li.name a.p8 {
    padding: 8px !important;
  }
  // .icon-navbar_right .header-dots .btn__dropdownIcon a {
  //   color: #d6dde1 !important;
  // }
  .line-icon {
    border-bottom: 1px solid #28363e;
    width: 167px;
    position: absolute;
    right: 8px;
  }
  .coverp0 {
    padding: 0;
  }
  .dropbtn-icon {
    border-bottom-width: 17px !important;
    border-top-width: 17px !important;
    font-size: none !important;
  }
  // ================================================== End notification

  // <!-- ******** BUTTON Login AND Add   Open Account ******** -->
  .icon-navbar_right {
    // display: flex;
    // flex-direction: row;
    // justify-content: center;
    // align-items: center;
    // padding: 0px;
    // gap: 16px;
    /* Style Login */
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
  // <!-- ******** BUTTON Login AND Add   Open Account ******** -->

  // <!-- ******** BUTTON Add Favorite AND Add Price Alert ******** -->
  .icon-navbar_right {
    .header-dots {
      display: flex;
      flex-direction: row;
      // justify-content: flex-end;
      align-items: center;
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
      .open-account {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .open-account button {
        background-color: #f38220;
        color: black;
        padding: 6px 16px;
        border-radius: 4px;
        border-style: none;
      }
      .login-button button {
        background-color: #222b2f;
        color: #fff;
        padding: 6px 16px;
        border-radius: 4px;
        border-style: none;
      }
    }
  }
  // <!-- ******** BUTTON Add Favorite AND Add Price Alert ******** -->
}

/* Small devices (portrait tablets and large phones, 600px and up) */

@media (max-width: 767px) {
  .site-main-header {
    display: none;
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media (min-width: 768px) {
  .main-NavMenu {
    ul {
      li {
        margin: 0 5px;
      }
    }
  }
  .icon-navbar_right {
    .header-dots {
      justify-content: end;
      // margin-top: 20px;
      margin-bottom: 0;
    }
  }
  .main-header-logo {
    display: flex;
    justify-content: center;
    // padding-bottom: 20px;
  }
}
@media (min-width: 768px) {
  .pmd {
    padding-bottom: 140px;
  }
}
@media (min-width: 768px) and (max-width: 992px) {
  .main-NavMenu {
    margin-top: 10px;
  }
  .Nav1 {
    order: 3;
  }
  .icon-navbar_right {
    order: 2;
  }
  .pmd {
    padding-bottom: 110px;
  }
}

@media (min-width: 992px) {
  .pmd {
    padding-bottom: 0;
  }
  .site-main-header .main-NavMenu .dropbtn {
    padding: 0px 0px 0px 0px;
  }
}
/* Large devices (laptops/desktops, 992px and up) */
@media (min-width: 1024px) {
  .site-main-header .main-NavMenu .dropbtn {
    padding: 0px 0px 18px 0px;
  }
  .pmd {
    padding-bottom: 0;
  }
  .main-NavMenu {
    ul {
      li {
        margin: 0 10px;
      }
    }
  }
  .icon-navbar_right {
    .header-dots {
      justify-content: end;
      margin: 0;
    }
  }
  .main-header-logo {
    // padding-bottom: 0px;
  }
}
@media (min-width: 1366px) {
  .main-NavMenu {
    ul {
      li {
        margin: 0 25px;
      }
    }
  }
}
</style>
