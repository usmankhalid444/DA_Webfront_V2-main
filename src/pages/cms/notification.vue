<template>
  <div>
    <!-- d-sm-none -->
    <section class="Notification11189292022">
      <b-container class="mt32">
        <div class="notification_card">
          <div class="notification_card_header">
            <div class="main-title">
              <h1>Notification</h1>
            </div>
          </div>
          <div id="inputContainer">
            <fieldset id="aspectRatio--group" class="inputGroup">
              <!-- <legend class="label">Select Image Aspect Ratio</legend> -->
              <div class="segmentedControl">
                <span class="segmentedControl--group">
                  <input
                    type="radio"
                    name="aspectRatio"
                    id="aspectRatio--16x9"
                    checked
                  />
                  <label class="label" for="aspectRatio--16x9">ทั้งหมด</label>
                </span>
                <span class="segmentedControl--group">
                  <input
                    type="radio"
                    name="aspectRatio"
                    id="aspectRatio--1x1"
                  />
                  <label class="label" for="aspectRatio--1x1">ยังไม่อ่าน</label>
                </span>
              </div>
            </fieldset>
          </div>

          <div class="notification_details">
            <ul class="top-cat-list">
              <li>
                <div class="activity_bell bell_lite"></div>
                <div class="border-line">
                  <div class="widget-content">
                    <div class="widget-content-left">
                      <div class="widget-heading">
                        คุณได้รับ 30 AXS กรุณากดยืนยันการรับเหรียญและกำหนดต้นทุน
                      </div>
                      <div class="widget-date">วันนี้ | 15:04:58</div>
                    </div>
                    <div class="widget-content-right">
                      <div class="widget-btn">
                        <b-button
                          class="btn-modalNoti"
                          id="show-btn"
                          @click="$bvModal.show('bv-modal-example')"
                        >
                          ระบุต้นทุน
                        </b-button>

                        <b-modal id="bv-modal-example" hide-footer>
                          <div class="d-block text-center">
                            <h3>ฝากเหรียญ</h3>
                            <p class="price_detail">0.034 BTC</p>
                            <div>
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM12.5 7H11V13L16.25 16.15L17 14.92L12.5 12.25V7Z"
                                  fill="#F38220"
                                />
                              </svg>

                              <span> รอการระบุต้นทุนเหรียญของท่าน </span>
                            </div>
                          </div>

                          <b-form class="StyleForm">
                            <b-form-group>
                              <b-row>
                                <label class="col-sm-3 col-form-label">
                                  Last Name
                                </label>
                                <div class="col-sm-9">
                                  <input type="text" class="form-control" />
                                </div>
                              </b-row>
                            </b-form-group>
                          </b-form>
                          <!-- <b-button
                            class="mt-3"
                            block
                            @click="$bvModal.hide('bv-modal-example')"
                          ></b-button> -->
                          <!-- HTML !-->
                          <div class="mt-5">
                            <b-button class="btn-confirmPrice">
                              บันทึกราคาต้นทุน
                            </b-button>
                          </div>
                        </b-modal>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div class="activity_bell bell_lite"></div>
                <div class="border-line">
                  <div class="widget-content">
                    <div class="widget-content-left">
                      <div class="widget-heading">
                        เหรียญ BTC จำนวน 0.00021 ของคุณถูกขายแล้วที่ราคา
                        1,200,000 THB
                      </div>
                      <div class="widget-date">วันนี้ | 15:04:58</div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div class="activity_bell bell_lite"></div>
                <div class="border-line">
                  <div class="widget-content">
                    <div class="widget-content-left">
                      <div class="widget-heading">
                        เหรียญ BTC จำนวน 0.00021 ของคุณถูกขายแล้วที่ราคา
                        1,200,000 THB
                      </div>
                      <div class="widget-date">1 วันที่แล้ว | 15:04:58</div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </b-container>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.Notification11189292022 {
  max-width: 560px;
  margin-left: auto;
  margin-right: auto;
}

// .container,
// .container-fluid,
// .container-sm,
// .container-md,
// .container-lg,
// .container-xl,
// .container-xxl {
//   width: 100%;
//   padding-right: var(--bs-gutter-x, 0.75rem);
//   padding-left: var(--bs-gutter-x, 0.75rem);
//   margin-right: auto;
//   margin-left: auto;
// }

// @media (min-width: 1400px) {
//   .container,
//   .container-sm,
//   .container-md,
//   .container-lg,
//   .container-xl,
//   .container-xxl {
//     max-width: 560px !important;
//   }
// }
.mt32 {
  margin-top: 32px;
}

.notification_card {
  background-color: #192126;
  border-radius: 8px;
  position: absolute;
  width: 560px;
  height: 784px;
  padding: 24px 16px;
}

.main-title {
  margin-bottom: 24px;
}
​ .main-title h1 {
  font-style: normal;
  color: #d6dde1;
  font-weight: 500;
  font-size: 24px;
  line-height: 24px;
  margin: 0;
}

#inputContainer {
  //   height: 100vh;
  //   margin: 0 auto;
  //   max-width: 50em;
  //   padding: 2em;

  display: flex;
  flex-flow: column;
  justify-content: center;
}

.inputGroup {
  font-family: var(--bs-nst-font-sans-serif);
  display: block;
  //   margin: 0 0 1.5em;
}

.label {
  display: block;
  font-size: 1.5em;
  font-weight: 700;
  font-family: var(--font-barlowCondensed);
  line-height: 1.25em;
  margin: 0 0 0.6em;
  padding: 0;
  text-transform: uppercase;
}

.segmentedControl {
  background: var(--ui-layer-0p5);
  border: solid 1px var(--ui-layer-2);
  border-radius: 0.25em;
  position: relative;
  display: flex;
  flex-flow: row;
  justify-content: flex-start;
  width: 160px;
  //   height: 28px;
  //   --options: 2;
  //   --options-active: 1;
  //   --options-gap: 0.5em;

  //   background: var(--ui-layer-0p5);
  //   border: solid 1px var(--ui-layer-2);
  //   border-radius: 0.25em;
  //   position: relative;

  //   display: flex;
  //   flex-flow: row;
  //   justify-content: flex-start;
  .segmentedControl--group {
    flex: 0 0 auto;
    margin: 2px;
    /* width: calc( (100% - ((var(--options) * var(--options-gap)) * 2)) / var(--options)); */
    /* width: 160px; */
    /* height: 28px; */
    display: flex;
    flex-flow: row;
    justify-content: stretch;
    align-items: stretch;
    // flex: 0 0 auto;
    // margin: var(--options-gap);
    // width: calc(
    //   (100% - ((var(--options) * var(--options-gap)) * 2)) / var(--options)
    // );

    // display: flex;
    // flex-flow: row;
    // justify-content: stretch;
    // align-items: stretch;
    input {
      opacity: 0;
      position: absolute;
    }
    input + label {
      border-radius: 2px;
      flex: 1 1 100%;
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 24px;
      margin: 0;
      /* padding: 0.5em 0; */
      position: relative;
      text-align: center;
      -webkit-tap-highlight-color: transparent;
      z-index: 1;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 4px 8px;
      gap: 8px;
      width: 78px;
      height: 24px;
      &::before,
      &::after {
        border-radius: inherit;
        content: "";
        display: block;
        height: 100%;
        opacity: 0;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        z-index: -1;
      }
      &::before {
        background: var(--color-grey-20);
        transition: opacity 0.15s ease;
      }
      &::after {
        background: var(--color-fire);
        box-shadow: var(--shadow-fire);
        transition: opacity 0.15s ease;
      }
      &:hover {
        &::before {
          opacity: 1;
        }
      }
    }
    input:focus + label {
      outline: none;
    }
    input:focus-visible + label {
      outline: var(--focus-style);
      outline-offset: var(--focus-offset);
    }
    input:-moz-focusring + label {
      outline: var(--focus-style);
      outline-offset: var(--focus-offset);
    }
    input:checked + label {
      //   background: var(--ui-layer-3);
      //   color: var(--white);
      //   font-weight: 700;
      background: var(--ui-layer-3);
      color: var(--white);
      font-weight: 700;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      /* padding: 4px 8px; */
      /* gap: 8px; */
      width: 78px;
      /* height: 24px; */
      &::after {
        opacity: 1;
        transform: scale(1);
      }
    }
  }
}

@media (prefers-reduced-motion: no-preference) {
  .segmentedControl {
    .segmentedControl--group {
      input + label {
        transition: color 0.2s ease;
        &::before {
          transition: opacity 0.3s ease;
        }
        &::after {
          transform: scale(0.85, 0.5);
          transition: opacity 0.15s ease,
            transform 0.3s cubic-bezier(0, 0.99, 0.52, 1.29);
        }
      }
    }
    &.useSlidingAnimation {
      &::before {
        background: var(--color-fire);
        border-radius: 0.375em;
        box-shadow: var(--shadow-fire);
        content: "";
        display: block;
        height: calc(100% - (var(--options-gap) * 2));
        position: absolute;
        top: var(--options-gap);
        left: var(--options-gap);
        transform: translateX(
          calc((100% + (var(--options-gap) * 2)) * (var(--options-active) - 1))
        );
        transition: transform cubic-bezier(0.8, 0.34, 0.28, 1.15) 0.35s;
        width: calc(
          (100% - ((var(--options) * var(--options-gap)) * 2)) / var(--options)
        );
      }
      .segmentedControl--group {
        input + label {
          background: none;
          transition: color 0.3s ease;
          &::before {
          }
          &::after {
            content: none;
          }
        }
        input:checked + label {
          &:hover {
            &::before {
              opacity: 0;
            }
          }
        }
      }
    }
  }
}

/* utilities */
.visually-hidden:not(:focus):not(:active) {
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

.hidden {
  display: none !important;
}

.offscreen {
  height: 1px;
  left: -10000px;
  overflow: hidden;
  position: absolute;
  top: auto;
  width: 1px;
}

.notification_details {
  margin-top: 18px;
  .top-cat-list {
    padding: 0;

    .activity_bell.bell_lite {
      background-color: var(--red-negative);
      width: 8px;
      height: 8px;
      border-radius: 50%;
      position: absolute;
      top: 22px;
    }

    li {
      position: relative;
      //   width: 560px;
      //   height: 76px;
    }
  }

  .top-cat-list .border-line {
    display: block;
    // padding-top: 10px;
    // padding-bottom: 10px;
    border-bottom: 1px solid var(--ui-layer-line);
    width: 528px;
    height: 76px;

    .widget-content {
      position: relative;
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      padding: 12px 16px;
      gap: 16px;
      width: 528px;
      height: 76px;
      //   display: flex;
      //   flex: 1;
      //   position: relative;
      //   align-items: center;

      .widget-content-left {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0px;
        gap: 4px;
        // width: 405px;
        // height: 52px;
        .widget-heading {
          color: var(--primary);
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 24px;
        }
        .widget-date {
          color: var(--sub-1);
          font-style: normal;
          font-weight: 400;
          font-size: 12px;
          line-height: 24px;
        }
      }

      .widget-content-right {
        margin-left: auto;

        /* CSS */
        .btn-modalNoti {
          font-family: var(--bs-nst-font-sans-serif);
          background-color: var(--orange-accent);
          border-radius: 4px;
          border-style: none;
          color: var(--Black);
          font-style: normal;
          font-weight: 400;
          font-size: 12px;
          line-height: 24px;
          outline: none;
          overflow: hidden;
          position: relative;
          text-align: center;
          text-decoration: none;
          transform: translate3d(0, 0, 0);
          transition: all 0.3s;
          touch-action: manipulation;
          vertical-align: top;
          white-space: nowrap;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          padding: 2px 16px;
          gap: 4px;
          width: 83px;
          height: 28px;
          cursor: pointer;
        }
        .btn-modalNoti:hover {
          background-color: var(--orange-AccentHover);
          opacity: 1;
          transform: translateY(0);
          transition-duration: 0.35s;
        }
        .btn-modalNoti:active {
          transform: translateY(2px);
          transition-duration: 0.35s;
        }
      }
    }
  }
  .modal-content {
    background-color: #141b1f !important;
  }
  .modal-header {
    border-bottom: none !important;
  }

  .StyleForm {
    margin: 24px 0 0 0;
  }

  /* CSS */
  .btn-confirmPrice {
    background-color: var(--orange-accent) !important;
    border-radius: 4px !important;
    border-style: none !important;
    color: var(--Black) !important;
    cursor: pointer !important;
    font-style: normal !important;
    font-weight: 500 !important;
    font-size: 14px !important;
    line-height: 24px !important;
    outline: none !important;
    overflow: hidden !important;
    position: relative !important;
    display: flex !important;
    flex-direction: row !important;
    justify-content: center !important;
    align-items: center !important;
    padding: 0px 16px !important;
    gap: 4px !important;
    width: 133px !important;
    height: 36px !important;
    text-align: center !important;
    text-decoration: none !important;
    transform: translate3d(0, 0, 0) !important;
    transition: all 0.3s !important;
  }
  .btn-confirmPrice:hover {
    background-color: #1e8449;
    opacity: 1;
    transform: translateY(0);
    transition-duration: 0.35s;
  }
  .btn-confirmPrice:active {
    transform: translateY(2px);
    transition-duration: 0.35s;
  }
  .btn-confirmPrice:hover {
    box-shadow: rgba(39, 174, 96, 0.2) 0 6px 12px;
  }
}
</style>
