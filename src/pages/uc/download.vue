<template>
  <div class="fda1212982022-DowLoadHeader">
    <section class="DowLoad11289292022">
      <b-container class="p-0">
        <b-row>
          <b-col md="12" sm="12" lg="6" class="mb-5">
            <div class="title-head text-center mx-md-auto">
              <h2>Download Mobile Application</h2>
              <p>iOS and Android</p>
            </div>
            <div class="Images-download">
              <div class="Images_phone">
                <b-img
                  class="img-fluid"
                  :src="require('../../assets/images/image-0110091538.png')"
                  alt="picture"
                >
                </b-img>
                <b-img
                  class="img-fluid"
                  :src="require('../../assets/images/image-0120091538.png')"
                  alt="picture"
                >
                </b-img>
              </div>
            </div>
            <div class="Images-download-store">
              <div class="Images_phone_app">
                <b-img
                  class="img-fluid"
                  :src="
                    require('../../assets/images/image-0120091538app_store.png')
                  "
                  alt="picture"
                >
                </b-img>
                <b-img
                  class="img-fluid"
                  :src="
                    require('../../assets/images/image-0120091538google_play.png')
                  "
                  alt="picture"
                >
                </b-img>
              </div>
            </div>
          </b-col>
          <b-col md="12" sm="12" lg="6" class="mb-6">
            <div class="desktop-media">
              <div class="title-head mb-64 text-center mx-md-auto">
                <h2>Download Desktop Programme</h2>
                <p>Windows Only</p>
              </div>
              <div class="Images-sesktop">
                <b-img
                  class="img-fluid"
                  :src="require('../../assets/images/image-01320091538.png')"
                  alt="picture"
                >
                </b-img>
              </div>
            </div>
            <div class="center-h-download">
              <button class="btn-download" role="button">Download</button>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>
<style lang="scss" scoped>
.fda1212982022-DowLoadHeader {
  margin: 61px 0 0 0;
  .container,
  .container-fluid,
  .container-sm,
  .container-md,
  .container-lg,
  .container-xl,
  .container-xxl {
    width: 100%;
    padding-right: 16px !important;
    padding-left: 16px !important;
    margin-right: auto !important;
    margin-left: auto !important;
  }
  @media (max-width: 576px) {
    .desktop-media {
      display: none !important;
    }
    .Images_phone_app {
      display: none !important;
    }
  }
  @media (max-width: 768px) and (min-width: 577px) {
    .desktop-media {
      display: none !important;
    }
    .Images_phone_app {
      display: block !important;
    }
    .btn-download {
      display: none !important;
    }
  }
  @media (min-width: 992px) {
    .container,
    .container-sm,
    .container-md,
    .container-lg,
    .container-xl,
    .container-xxl {
      max-width: 960px;
    }
  }
  .desktop-media {
    margin-bottom: 64px;
  }
  .mb-64 {
    margin-bottom: 64px !important;
  }
  .title-head {
    margin-bottom: 31px;
    h2 {
      font-style: normal;
      color: var(--white);
      font-weight: 600;
      font-size: 18px;
      line-height: 24px;
      margin-bottom: 8px;
    }
    p {
      font-style: normal;
      color: var(--primary);
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      margin: 0;
    }
  }
  .Images-download {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 32px;
  }
  .Images_phone {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 12px;
    width: 284.77px;
    height: 280px;
  }
  .Images_phone_app {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 8px;
  }
  .Images-download-store {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .Images-sesktop {
    display: grid;
    place-items: center;
    img {
      width: 363.09px;
      height: 215px;
    }
  }
  .center-h-download {
    display: flex;
    justify-content: center;
    .btn-download {
      background-color: var(--orange-accent);
      border-radius: 4px;
      border-style: none;
      color: var(--Black);
      cursor: pointer;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;
      outline: none;
      overflow: hidden;
      text-align: center;
      text-decoration: none;
      transform: translate3d(0, 0, 0);
      transition: all 0.3s;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 0px 16px;
      gap: 4px;
      position: absolute;
      width: 142px;
      height: 40px;
    }
    .btn-download:hover {
      background-color: var(--orange-AccentHover);
      opacity: 1;
      transform: translateY(0);
      transition-duration: 0.35s;
    }
    .btn-download:active {
      transform: translateY(2px);
      transition-duration: 0.35s;
    }
  }
}
</style>
