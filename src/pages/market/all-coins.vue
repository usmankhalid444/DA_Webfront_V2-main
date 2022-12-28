<template>
  <div>
    <div class="container-fluid">
      <P class="textGrey-heading marginTop32 ms-pt marginBottom16"
        >Popular Theme</P
      >
      <!-- cards -->

      <VueSlickCarousel
        class="carousel-cards"
        :arrows="true"
        :dots="false"
        :infinite="true"
        :initialSlide="2"
        :speed="500"
        :slidesToShow="3"
        :slidesToScroll="1"
        :swipeToSlide="true"
      >
        <div v-for="(card, index) in cards" :key="index">
          <!-- {{ card }} -->
          <div class="card shadow backgroundColor mx-1">
            <div class="card-body mt-2">
              <div class="d-flex justify-content-between">
                <!-- card images coin -->
                <div class="wraper">
                  <div class="card-coins mb-1 image-wrapper d-flex">
                    <b-img
                      id="Cardimg1"
                      class="CardimageBitCoin"
                      :src="card.image1"
                      fluid
                      alt="#"
                    >
                    </b-img>

                    <b-img
                      id="Cardimg2"
                      class="CardimageCoin2"
                      :src="card.image2"
                      fluid
                      alt="#"
                    >
                    </b-img>

                    <b-img
                      id="Cardimg3"
                      class="CardimageCoin3"
                      :src="card.image3"
                      fluid
                      alt="#"
                    >
                    </b-img>
                  </div>
                  <p class="textGrey-heading mb-0 font-roboto">
                    {{ card.CoinName }}
                  </p>
                </div>

                <!-- End card images coin -->

                <div class="mt-2">
                  <p class="textGreyDark font-roboto mb-0">{{ card.Mcap }}</p>
                  <p class="mb-0 card-percentage font-roboto red-value">
                    {{ card.perentage }}
                  </p>
                </div>
              </div>
              <!-- <p class="textGrey-heading mb-0">{{ card.CoinName }}</p> -->

              <p class="detail-warper font-sarabun">
                {{ card.detail }}
              </p>
            </div>
          </div>
        </div>
        <template #prevArrow="arrowOption">
          <!-- custom prev-button -->

          <div class="custom-arrow">
            {{ arrowOption.currentSlide }}/{{ arrowOption.slideCount }}
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          </div>
        </template>
        <template #nextArrow="arrowOption">
          <!-- custom next-button -->
          <div class="custom-arrow">
            {{ arrowOption.currentSlide }}/{{ arrowOption.slideCount }}
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
          </div>
        </template>
      </VueSlickCarousel>

      <!-- cards end  -->

      <P class="textGrey-heading marginTop32 marginBottom16 ms-pt">All Coins</P>
    </div>
    <Dynamic-Table
      :TableHeader="TableHeading"
      :TableData="TableDatas"
      :Showfavorite="true"
    ></Dynamic-Table>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import Table from "../../components/table/Table.vue";
export default {
  name: "all-coins",

  components: {
    "Dynamic-Table": Table,
    VueSlickCarousel,
  },
  data() {
    return {
      TableHeading: [
        {
          headingCoin: "Coin ",
          headingLastPrice: "Last Price",
          headingHourChange: "24h Change",
          headingVolume: "Volume",
          headingMarketCap: "Market Cap",
          headingChart: "24h Chart",
        },
      ],
      TableDatas: [
        {
          StarIcon: require("../../assets/images/favoriteTable/star.png"),
          CoinImage: require("../../assets/images/favoriteTable/bitcoin.png"),
          Coinsybmol: "WBTC",
          CoinName: "Bitcoin",
          lastPrice: "98,500,000",
          hourChange: "+1.78%",
          volume: "100,000M",
          marketCap: "168,987M",
        },
        {
          StarIcon: require("../../assets/images/favoriteTable/star.png"),
          CoinImage: require("../../assets/images/favoriteTable/bitcoin.png"),
          Coinsybmol: "ETH",
          CoinName: "Ethereum",
          lastPrice: "97,500,000",
          hourChange: "+2.78%",
          volume: "200,000M",
          marketCap: "268,987M",
        },
        {
          StarIcon: require("../../assets/images/favoriteTable/star.png"),
          CoinImage: require("../../assets/images/favoriteTable/bitcoin.png"),
          Coinsybmol: "USDT",
          CoinName: "Tether",
          lastPrice: "96,500,000",
          hourChange: "+3.78%",
          volume: "300,000M",
          marketCap: "368,987M",
        },
        {
          StarIcon: require("../../assets/images/favoriteTable/star.png"),
          CoinImage: require("../../assets/images/favoriteTable/bitcoin.png"),
          Coinsybmol: "USDC",
          CoinName: "USD Coin",
          lastPrice: "95,500,000",
          hourChange: "+4.78%",
          volume: "400,000M",
          marketCap: "468,987M",
        },
        {
          StarIcon: require("../../assets/images/favoriteTable/star.png"),
          CoinImage: require("../../assets/images/favoriteTable/bitcoin.png"),
          Coinsybmol: "BNB",
          CoinName: "BNB",
          lastPrice: "94,500,000",
          hourChange: "+5.78%",
          volume: "500,000M",
          marketCap: "568,987M",
        },
      ],
      cards: [
        {
          CoinName: "ETH2.0",
          Mcap: "Mcap 420M",
          perentage: "-4.82%",
          detail:
            "การอัพเกรดครั้งยิ่งใหญ่ของเหรียญที่มีความยิ่งใหญ่อันดับสองของโลก Cryptocurrency ที่จะเปลี่ยนจากการทำงาน PoW เป็น PoS...",
          image1: require("../../assets/images/favoriteTable/bitcoin.png"),
          image2: require("../../assets/images/favoriteTable/BNB.png"),
          image3: require("../../assets/images/favoriteTable/Ethereum.png"),
        },
        {
          CoinName: "BIT3.0",
          Mcap: "Mcap 320M",
          perentage: "-2.82%",
          detail:
            "การอัพเกรดครั้งยิ่งใหญ่ของเหรียญที่มีความยิ่งใหญ่อันดับสองของโลก Cryptocurrency ที่จะเปลี่ยนจากการทำงาน PoW เป็น PoS...",
          image1: require("../../assets/images/favoriteTable/bitcoin.png"),
          image2: require("../../assets/images/favoriteTable/BNB.png"),
          image3: require("../../assets/images/favoriteTable/Ethereum.png"),
        },
        {
          CoinName: "USDT.2",
          Mcap: "Mcap 120M",
          perentage: "-1.82%",
          detail:
            "การอัพเกรดครั้งยิ่งใหญ่ของเหรียญที่มีความยิ่งใหญ่อันดับสองของโลก Cryptocurrency ที่จะเปลี่ยนจากการทำงาน PoW เป็น PoS...",
          image1: require("../../assets/images/favoriteTable/bitcoin.png"),
          image2: require("../../assets/images/favoriteTable/BNB.png"),
          image3: require("../../assets/images/favoriteTable/Ethereum.png"),
        },
        {
          CoinName: "BNB.2",
          Mcap: "Mcap 520M",
          perentage: "-7.82%",
          detail:
            "การอัพเกรดครั้งยิ่งใหญ่ของเหรียญที่มีความยิ่งใหญ่อันดับสองของโลก Cryptocurrency ที่จะเปลี่ยนจากการทำงาน PoW เป็น PoS...",
          image1: require("../../assets/images/favoriteTable/bitcoin.png"),
          image2: require("../../assets/images/favoriteTable/BNB.png"),
          image3: require("../../assets/images/favoriteTable/Ethereum.png"),
        },
        {
          CoinName: "USDC.2",
          Mcap: "Mcap 520M",
          perentage: "-7.82%",
          detail:
            "การอัพเกรดครั้งยิ่งใหญ่ของเหรียญที่มีความยิ่งใหญ่อันดับสองของโลก Cryptocurrency ที่จะเปลี่ยนจากการทำงาน PoW เป็น PoS...",
          image1: require("../../assets/images/favoriteTable/bitcoin.png"),
          image2: require("../../assets/images/favoriteTable/BNB.png"),
          image3: require("../../assets/images/favoriteTable/Ethereum.png"),
        },
      ],
    };
  },
  mounted() {},

  methods: {},
};
</script>
<style lang="scss" scoped>
.carousel-cards {
  margin: 0 40px;
}
.marginTop32 {
  margin-top: 32px;
}
.marginBottom32 {
  margin-bottom: 32px;
}
.marginBottom16 {
  margin-bottom: 16px;
}
.marginRight {
  margin-right: 16px !important;
}
.font-sarabun {
  font-family: "Sarabun" !important;
}
.font-roboto {
  font-family: var(--bs-roboto-font-sans-serif) !important;
}
.card {
  border-radius: 8px !important;
}
.card-percentage {
  color: #de2d40;
  font-size: 18px;
  font-weight: 600;
  text-align: right;
}
.textGrey-heading {
  color: #d6dde1;
  font-size: 18px;
  font-weight: 600;
}

.textGreyDark {
  color: #677f8e;
  font-family: "Sarabun";
  font-size: 12px;
  vertical-align: middle;
  font-weight: 400;
}
.detail-warper {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  white-space: pre-line;
  color: #677f8e;
  font-family: "Sarabun";
  font-size: 14px;
  font-weight: 400;
  margin-top: 12px;
  line-height: 24px;
}
.backgroundColor {
  background-color: #1c262b;
  //   width: 434px!important;
  // height: 184px!important;
}
.CardimageBitCoin {
  height: auto;
  width: 100%;
  max-width: 20px;
  border-radius: 50%;
  max-height: 20px;
  // margin-bottom: 15px;
}
.CardimageCoin2 {
  height: auto;
  width: 100%;
  max-width: 22px;
  border-radius: 50%;
  max-height: 20px;
  border-left: 3px solid black;
}
.CardimageCoin3 {
  height: auto;
  width: 100%;
  max-width: 22px;
  border-radius: 50%;
  max-height: 20px;
  border-left: 3px solid black;
}
#Cardimg1 {
  position: relative;
  z-index: 10;
}
#Cardimg2 {
  position: relative;
  z-index: 20;
  right: 10%;
}
#Cardimg3 {
  position: relative;
  z-index: 30;
  right: 18%;
}

.prev-button {
  position: relative;
  top: 110px;
  right: 40px;
}
.next-button {
  // position: relative;
  // left: 1125px;
  // bottom: 125px;
  float: right;
  clear: both;
  position: relative;
  top: -120px;
  left: 4%;
}
.slick-prev {
  //left: -40px !important;
}
.slick-next {
  // left: -40px!important;
}
.slick-prev:before {
  // content: "<";
  // color: red;
  // font-size: 30px;
  display: none;
}

.slick-next:before {
  // content: ">";
  // color: red;
  // font-size: 30px;
  display: none;
}
.carousel-control-prev-icon {
  background-image: url(../../../src/assets/images/iconArrow/icon-arrow-left.png);
  width: 100%;
}
.carousel-control-next-icon {
  background-image: url(../../../src/assets/images/iconArrow/icon-arrow-right.png);
  width: 100%;
}
@media (max-width: 848px) {
  .ms-pt {
    margin-left: 16px;
    margin-right: 16px;
  }
}
@media (min-width: 848px) {
  .ms-pt {
    margin-left: 24px;
    margin-right: 24px;
  }
}
</style>
