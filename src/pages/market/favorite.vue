<template>
  <Dynamic-Table
    :TableHeader="TableHeading"
    :TableData="TableDatas"
    :Showfavorite="true"
  ></Dynamic-Table>
</template>

<script>
import Table from "../../components/table/Table.vue";
export default {
  name: "favorite",

  components: {
    "Dynamic-Table": Table,
  },
  data() {
    return {
      TableHeading: [
        {
          headingCoin: "Coin :",
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
          lastPrice: "92,500,000",
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
    };
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
svg.icon-right {
  position: absolute;
  right: 15px;
  cursor: pointer;
}
</style>
