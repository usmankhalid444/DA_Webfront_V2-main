<template>
  <div class="wraper-main">
    <div class="categories-detail mt-3" v-show="!ShowBuySell">
      <Dynamic-Table
        :TableHeader="TableHeading"
        :TableData="TableDatas"
        :ShowCategories="true"
        v-on:child-method="updateParent"
        current_page="categories"
      ></Dynamic-Table>
    </div>
    <div class="buy-sell-detail mt-3" v-show="ShowBuySell">
      <div class="container-fluid">
        <div class="row">
          <div class="col-9 col-md-8 col-lg-10">
            <h2 class="heading-coin">Decentralized Exchange (DEX)</h2>
            <p class="discription-coin thaiLang">
              การอัพเกรดครั้งยิ่งใหญ่ของเหรียญที่มีความยิ่งใหญ่อันดับสองของโลก
              Cryptocurrency ที่จะเปลี่ยนจากการทำงาน PoW เป็น PoS
              ซึ่งจะส่งผลกระทบทางบวกกับเหรียญบางชนิด
              โดยอีเว้นท์นี้มีชื่อเรียกว่า “ The Merge “
            </p>
          </div>
          <!-- <div class="vr"></div> -->
          <div class="col-3 col-md-4 col-lg-2 mt-3 vertical-line px-0">
            <div class="wrpaer-values">
              <div class="change">
                <p class="heading">%Change</p>
                <p class="green-value">+3.78%</p>
              </div>

              <div class="change">
                <p class="heading">MCap</p>
                <p class="value">100,000M</p>
              </div>

              <div class="change">
                <p class="heading">Volume</p>
                <p class="value">100,000M</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Dynamic-Table
        :TableHeader="TableHeading"
        :TableData="TableDatas"
        :Showfavorite="true"
        current_page="categories"
      ></Dynamic-Table>
    </div>
  </div>
</template>

<script>
import Table from "../../components/table/Table.vue";
export default {
  name: "categories",

  components: {
    "Dynamic-Table": Table,
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
          headingDescription: "Description",
          headingCategories: "Categories",
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
          Description:
            "เหรียญที่ถูกสร้างขึ้นมาโดยมีวัตถุประสงค์ว่าจะเป็นสกุล เงินของโลกที่คนใช้จับจ่ายแทนเงิน Fiat",
          Categories: "Currency",
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
          Description:
            "เหรียญที่คงมูลค่าไว้อยู่ที่ 1 ดอลล่าร์ตลอด โดยมีการ Backup ไว้ด้วย Asset ต่างๆ",
          Categories: "Stablecoin",
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
          Description:
            "เหรียญที่ทำ Product เกี่ยวกับการทำ Smart Contract  ที่ทำให้คนสามารถสร้าง App ต่าง ๆ บน Chain ตัวเองได้",
          Categories: "Smart Contract",
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
          Description:
            "เหรียญที่ถูกจ่าย เป็น Reward จากการนำเหรียญ ไปฟาร์ม/ปล่อยกู้",
          Categories: "Governance Token /DeFi",
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
          Description:
            "เหรียญที่ถูกจ่าย เป็น Reward จากการนำเหรียญ ไปฟาร์ม/ปล่อยกู้",
          Categories: "Governance Token /DeFi",
        },
      ],
      ShowBuySell: false,
    };
  },
  methods: {
    updateParent(value_from_child) {
      this.ShowBuySell = value_from_child;
      // alert("hello child" + value_from_child)
    },
  },
};
</script>
<style lang="scss">
.textGrey {
  color: #d6dde1;
}
.textGreyDark {
  color: #677f8e;
}
.heading-coin {
  color: #d6dde1;
  font-size: 24px;
  font-weight: 500;
  margin-top: 1.5rem;
  margin-left: 0.5rem;
  margin-bottom: 1rem;
}
.thaiLang {
  font-family: "Sarabun" !important;
  line-height: 24px;
}
.discription-coin {
  color: #677f8e;
  font-size: 14px;
  font-weight: 400;
  margin-left: 0.5rem;
}
.heading {
  color: #677f8e;
  font-size: 14px;
  font-weight: 400;
  // margin-right: 3rem;
  min-width: 100px;
}
.green-value {
  color: #3fde68;
  font-size: 14px;
  font-weight: 400;
}
.value {
  color: #d6dde1;
  font-size: 14px;
  font-weight: 400;
}
.change {
  justify-content: space-between;
  display: flex;
}
.wrpaer-values {
  width: 28%;
  margin-top: 1rem;
  margin-left: 1rem;
}
.vertical-line {
  border-left: 2px solid #28363e;
}
</style>
