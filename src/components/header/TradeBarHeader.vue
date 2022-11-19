<template>
  <div>
    <section class="TradeBar11189292022 bg-navbarHeader">
      <b-container fluid class="FDAp-12-24">
        <div class="TradeBar-body">
          <div class="content-header row">
            <div class="content-header-left col-md-9 col-12">
              <div class="mb-0 d-inline-block">
                <div class="form-search">
                  <form
                    class="navbar-search navbar-search-dark form-inline mr-3 ml-lg-auto"
                  >
                    <div class="mb-0 form-group FDASearch">
                      <fieldset class="field-container">
                        <input
                          type="text"
                          placeholder="Search Coin"
                          class="field"
                        />
                        <div class="icons-container">
                          <div class="icon-search"></div>
                        </div>
                      </fieldset>
                    </div>
                  </form>
                </div>
              </div>
              <div class="row d-inline-block">
                <div class="col-12">
                  <div class="FDAPrice-TBH-style">
                    <div class="FDAPrice-TBH">
                      <span class="RedPrice Title-LastPrice">896,485.67</span>
                      <span class="TextRedPrice MarketStat-value"
                        >(-4.26%)</span
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="FDATickerList-style d-inline-block">
                <div class="d-inline-block">
                  <div class="FDATickerListHigh">
                    <span class="TickerItemLabel">24h High:</span>
                    <span class="TickerPriceText">986,574.00</span>
                  </div>
                </div>
                <div class="d-inline-block">
                  <div class="FDATickerListHigh">
                    <span class="TickerItemLabel">24h Low:</span>
                    <span class="TickerPriceText">785,959.84</span>
                  </div>
                </div>
                <div class="d-inline-block">
                  <div class="FDATickerListHigh">
                    <span class="TickerItemLabel">24h Volume (BTC):</span>
                    <span class="TickerPriceText">4,532.98</span>
                  </div>
                </div>
              </div>
            </div>
            ​
            <div class="content-header-right col-md-3 col-12">
              <div class="btn-group float-md-right">
                <!-- ******** BUTTON BUY AND SELL ******** -->
                <div id="btn-style01" class="btn-style">
                  <b-link>
                    <b-button class="FDABtn-buyMKH" role="button">
                      ซื้อ
                    </b-button>
                  </b-link>
                  <b-link>
                    <b-button class="FDABtn-sellMKH" role="button">
                      ขาย
                    </b-button>
                  </b-link>
                </div>
                <!-- ******** BUTTON BUY AND SELL ******** -->
                ​
                <!-- ******** BUTTON Add Favorite AND Add Price Alert ******** -->
                <!-- <div id="btn-style02" class="btn-style02">
                <b-link>
                  <b-button class="FDABtn-AddFavMKH" role="button">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22 9.24L14.81 8.62L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27L18.18 21L16.55 13.97L22 9.24ZM12 15.4L8.24 17.67L9.24 13.39L5.92 10.51L10.3 10.13L12 6.1L13.71 10.14L18.09 10.52L14.77 13.4L15.77 17.68L12 15.4Z"
                        fill="#677F8E"
                      />
                    </svg>
​
                    Add Favorite
                  </b-button>
                </b-link>
                <b-link>
                  <b-button class="FDABtn-AddPriMKH" role="button">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style="width: 20px; height: 20px"
                    >
                      <path
                        d="M10.01 21.01C10.01 22.11 10.9 23 12 23C13.1 23 13.99 22.11 13.99 21.01H10.01ZM12 6C14.76 6 17 8.24 17 11V18H7V11C7 8.24 9.24 6 12 6ZM12 1.5C11.17 1.5 10.5 2.17 10.5 3V4.17C7.36 4.85 5 7.65 5 11V17L3 19V20H21V19L19 17V11C19 7.65 16.64 4.85 13.5 4.17V3C13.5 2.17 12.83 1.5 12 1.5Z"
                        fill="#677F8E"
                      />
                    </svg>
​
                    Add Price Alert
                  </b-button>
                </b-link>
              </div> -->
                <!-- ******** BUTTON Add Favorite AND Add Price Alert ******** -->
              </div>
            </div>

            <div class="style__responsiveX768"></div>
          </div>
        </div>
      </b-container>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@media (max-width: 767px) {
  // .FDATickerListHigh {
  //   display: grid !important;
  // }
}

.TradeBar11189292022 {
  .FDAp-12-24 {
    padding: 12px 24px !important;
  }

  .float-md-right {
    float: right !important;
  }

  .TradeBar-body {
    .form-search {
      margin: 0 16px 0 0;
    }

    .FDAPrice-TBH-style {
      margin: 0 32px 0 0;
      .FDAPrice-TBH {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0;
        gap: 7px;
        position: relative;
        width: 154px;
        height: 24px;
      }
    }

    .FDATickerList-style {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      padding: 0px;
      gap: 24px;
      position: relative;
      // width: 496px;
      height: 24px;
      .TickerItemLabel {
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        color: var(--sub-1);
      }
      .TickerPriceText {
        color: var(--primary);
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
      }
      .FDATickerListHigh {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        padding: 0px;
        margin: 0 24px 0 0;
        gap: 4px;
      }
    }
  }

  // ******** BUTTON BUY AND SELL ******** //
  .btn-style {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 16px;
    width: 296px;
    height: 40px;
    float: right;

    // ******** BUTTON BUY AND SELL ******** //
    /* CSS BUTTON FDABtn buyMKH */
    .FDABtn-buyMKH {
      appearance: none;
      backface-visibility: hidden;
      background-color: var(--green-positive);
      border-radius: 4px;
      border-style: none;
      color: var(--white);
      cursor: pointer;
      display: inline-block;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 8px;
      gap: 4px;
      width: 140px;
      height: 40px;
      font-family: var(--bs-nst-font-sans-serif);
      font-size: 16px;
      font-weight: 600;
      letter-spacing: normal;
      line-height: 1.5;
      outline: none;
      overflow: hidden;
      position: relative;
      text-align: center;
      text-decoration: none;
      transform: translate3d(0, 0, 0);
      transition: all 0.3s;
    }
    .FDABtn-buyMKH:hover {
      background-color: var(--green-positiveHover);
      opacity: 1;
      transform: translateY(0);
      transition-duration: 0.35s;
    }
    .FDABtn-buyMKH:active {
      transform: translateY(2px);
      transition-duration: 0.35s;
    }

    /* CSS BUTTON FDABtn sellMKH */
    .FDABtn-sellMKH {
      background-color: var(--red-negative);
      border-radius: 4px;
      border-style: none;
      color: var(--white);
      cursor: pointer;
      display: inline-block;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 8px;
      gap: 4px;
      width: 140px;
      height: 40px;
      font-family: var(--bs-nst-font-sans-serif);
      font-size: 16px;
      font-weight: 600;
      letter-spacing: normal;
      line-height: 1.5;
      outline: none;
      overflow: hidden;
      position: relative;
      text-align: center;
      text-decoration: none;
      transform: translate3d(0, 0, 0);
      transition: all 0.3s;
    }
    .FDABtn-sellMKH:hover {
      background-color: var(--red-negativeHover);
      opacity: 1;
      transform: translateY(0);
      transition-duration: 0.35s;
    }
    .FDABtn-sellMKH:active {
      transform: translateY(2px);
      transition-duration: 0.35s;
    }
  }
  // ******** End  BUTTON BUY AND SELL ******** //

  // ******** BUTTON Add Favorite AND Add Price Alert ******** //
  .btn-style02 {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 16px;
    float: right;

    a {
      color: transparent !important;
      text-decoration: none !important;
    }

    /* CSS */
    .FDABtn-AddFavMKH {
      background-color: transparent;
      border: 1px solid var(--ui-layer-2);
      border-radius: 4px;
      color: var(--sub-icon);
      cursor: pointer;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 8px 16px;
      gap: 8px;
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
      width: 149px;
      height: 40px;
      letter-spacing: normal;
      outline: none;
      overflow: hidden;
      position: relative;
      text-align: center;
      text-decoration: none;
      transform: translate3d(0, 0, 0);
      transition: all 0.3s;
    }
    .FDABtn-AddFavMKH:hover {
      border: 1px solid var(--sub-3);
      opacity: 1;
      transform: translateY(0);
      transition-duration: 0.35s;
    }
    .FDABtn-AddFavMKH:active {
      transform: translateY(2px);
      transition-duration: 0.35s;
    }

    /* CSS BUTTON FDABtn AddPriMKH */
    .FDABtn-AddPriMKH {
      background-color: transparent;
      border: 1px solid var(--ui-layer-2);
      border-radius: 4px;
      color: var(--sub-icon);
      cursor: pointer;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 8px 16px;
      gap: 8px;
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
      width: 159px;
      height: 40px;
      letter-spacing: normal;
      outline: none;
      overflow: hidden;
      position: relative;
      text-align: center;
      text-decoration: none;
      transform: translate3d(0, 0, 0);
      transition: all 0.3s;
    }
    .FDABtn-AddPriMKH:hover {
      border: 1px solid var(--sub-3);
      opacity: 1;
      transform: translateY(0);
      transition-duration: 0.35s;
    }
    .FDABtn-AddPriMKH:active {
      transform: translateY(2px);
      transition-duration: 0.35s;
    }
  }
  // ******** End  BUTTON Add Favorite AND Add Price Alert ******** //

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
    right: 8px;
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
    padding: 8px 12px;
    background-color: var(--gray-default-state);
    border-radius: 4px;
    box-shadow: 0px 8px 15px rgba(75, 72, 72, 0.1);
    transition: all 0.4s ease;
  }
  .field:focus {
    outline: none;
    box-shadow: 0px 9px 20px rgba(75, 72, 72, 0.3);
  }

  .FDAPrice-TBH-style {
    .FDAPrice-TBH {
      .Title-LastPrice {
        font-weight: 600;
        font-size: 18px;
        line-height: 24px;
      }
      .RedPrice {
        color: var(--red-negative);
      }
      .MarketStat-value {
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
      }
      .TextRedPrice {
        color: var(--red-negative);
      }
    }
  }
}


</style>
<style>
@media (max-width: 1075px) {
  .page-MarKetHeader {
    flex-direction: column;
    align-items: flex-start;
    position: relative;
}
  .page-MarKetHeader  form {
    position: absolute;
    top: 61px;
    right: -4px;
  }
}
@media (min-width:768px) and (max-width:855px){
  .MarKetHeader11289292022 .mx-auto .colormiddle{
    padding: 15px 0px !important;
    height: 50px !important;
    font-size: 13px !important;
  }
  .page-MarKetHeader form {
    top: 53px;
    right: -20px;
}
}
</style>
