<template>
  <div class="padding-table scroller">
    <table class="table ma-3" id="myTable">
      <thead>
        <tr>
          <th></th>
          <th></th>
          <th
            scope="colgroup"
            colspan="3"
            class="HeadingBuyGroup BuySellHeading-table"
          >
            Buy
          </th>
          <th
            scope="colgroup"
            colspan="3"
            class="HeadingSellGroup BuySellHeading-table"
          >
            sell
          </th>
        </tr>
      </thead>
      <thead v-for="(item, index) in TableHeader" :key="index">
        <!-- Heading Date -->
        <th scope="col" class="textGreyDark">
          <div class="d-flex">
          <p class="align-Icon-Heading mb-0">
            {{ item.Date }}
          </p>
          <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="10"
                  fill="currentColor"
                  class="bi bi-caret-down-fill dateChevron"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
                  />
                </svg>
          </div>
        </th>
        <!-- End Heading Date -->

        <!-- Heading CoinSymbolHeading -->
        <th scope="col" class="textGreyDark">
          <p class="align-Icon-Heading mb-0">
            {{ item.CoinSymbolHeading }}
          </p>
        </th>
        <!-- End Heading CoinSymbolHeading -->

        <!-- Heading BuyActualHeading -->
        <th
          scope="col"
          class="textGreyDark border-left-table borderTopBottom text-center"
        >
          <p class="align-Icon-Heading mb-0">
            {{ item.BuyActualHeading }}
          </p>
        </th>
        <!-- End Heading BuyActualHeading -->

        <!-- Heading BuyAvrgCostHeading -->
        <th scope="col" class="textGreyDark borderTopBottom text-center">
          <p class="align-Icon-Heading mb-0">
            {{ item.BuyAvrgCostHeading }}
          </p>
        </th>
        <!-- End Heading BuyAvrgCostHeading -->

        <!-- Heading BuyTotalHeading -->
        <th scope="col" class="textGreyDark borderTopBottom text-center">
          <p class="align-Icon-Heading mb-0">
            {{ item.BuyTotalHeading }}
          </p>
        </th>
        <!-- End Heading BuyTotalHeading -->

        <!-- Heading SellActualHeading -->
        <th
          scope="col"
          class="textGreyDark border-left-table borderTopBottom text-center"
        >
          <p class="align-Icon-Heading mb-0">
            {{ item.SellActualHeading }}
          </p>
        </th>
        <!-- End Heading SellActualHeading -->

        <!-- Heading SellAvrgCostHeading -->
        <th scope="col" class="textGreyDark borderTopBottom text-center">
          <p class="align-Icon-Heading mb-0">
            {{ item.SellAvrgCostHeading }}
          </p>
        </th>
        <!-- End Heading SellAvrgCostHeading -->

        <!-- Heading SellTotalHeading -->
        <th
          scope="col"
          class="textGreyDark border-right-table borderTopBottom text-center"
        >
          <p class="align-Icon-Heading mb-0">
            {{ item.SellTotalHeading }}
          </p>
        </th>
        <!-- End Heading SellTotalHeading -->

        <!-- Heading Total -->
        <th scope="col" class="textGreyDark text-center">
          <p class="align-Icon-Heading mb-0">
            {{ item.Total }}
          </p>
        </th>
        <!-- End Heading Total -->

        <!-- Heading FreeVAT -->
        <th scope="col" class="textGreyDark">
          <p class="align-Icon-Heading mb-0">
            {{ item.FreeVAT }}
          </p>
        </th>
        <!-- End Heading FreeVAT -->

        <!-- Heading ProfitLoss -->
        <th scope="col" class="textGreyDark text-center">
          <p class="align-Icon-Heading mb-0">{{ item.ProfitLoss }}</p>
        </th>
        <!-- End Heading ProfitLoss -->
      </thead>
      <tbody>
        <tr
          class="textDarkgrey-Border"
          v-for="(item, index) in TableData"
          :key="index"
        >
          <!-- {{ index }}: {{ item.lastPrice }} -->

          <!-- Datetime -->
          <td>
            <p class="Datetime-one textGrey mb-0">
              {{ item.Date }}
            </p>
          </td>
          <!-- End Datetime -->

          <!-- CoinSymbol -->
          <td>
            <p class="CoinSymbol-one textGrey mb-0">
              {{ item.CoinSymbol }}
            </p>
          </td>
          <!-- End CoinSymbol -->

          <!-- BuyActualValue -->
          <td class="border-left-table text-center">
            <p class="BuyActualValue-one textGrey mb-0">
              {{ item.BuyActualValue }}
            </p>
          </td>
          <!-- End BuyActualValue -->

          <!-- BuyAvrgCostValue -->
          <td class="text-center">
            <p class="BuyAvrgCostValue-one textGrey mb-0">
              {{ item.BuyAvrgCostValue }}
            </p>
          </td>
          <!-- End BuyAvrgCostValue -->

          <!-- BuyTotalValue -->
          <td class="text-center">
            <p class="BuyTotalValue-one textGrey mb-0">
              {{ item.BuyTotalValue }}
            </p>
          </td>
          <!-- End BuyTotalValue -->

          <!-- SellActualValue -->
          <td class="border-left-table text-center">
            <p class="SellActualValue-one textGrey mb-0">
              {{ item.SellActualValue }}
            </p>
          </td>
          <!-- End SellActualValue -->

          <!-- SellAvrgCostValue -->
          <td class="text-center">
            <p class="SellAvrgCostValue-one textGrey mb-0">
              {{ item.SellAvrgCostValue }}
            </p>
          </td>
          <!-- End SellAvrgCostValue -->

          <!-- SellTotalValue -->
          <td class="border-right-table text-center">
            <p class="SellTotalValue-one textGrey mb-0">
              {{ item.SellTotalValue }}
            </p>
          </td>
          <!-- End SellTotalValue -->

          <!-- TotalValue -->
          <td class="textGrey">
            <p class="mb-0">{{ item.TotalValue }}</p>
          </td>
          <!-- End TotalValue -->

          <!-- last FreeVAT -->
          <td>
            <p class="mb-0 textGrey">{{ item.FreeVATValue }}</p>
          </td>
          <!-- End FreeVAT -->

          <!-- profitloss -->
          <td>
            <span
              class="textGrey Coin-Symbol profitloss-one mb-0"
              style="color: #40994f"
            >
              {{ item.ProfitLossValue }}
            </span>
            <span class="textGrey profitloss-one mb-0" style="color: #40994f">
              {{ item.ProfitLossPercentage }}
            </span>
          </td>
          <!-- end profitloss -->
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "tableBydetail",
  props: ["TableHeader", "TableData"],
  data() {
    return {
      // child_msg: "message from child"
      child_msg: true,
    };
  },

  methods: {
    childMethod() {
      this.$emit("child-method", this.child_msg);
    },
    handleBuySell() {
      this.$router.push("/exchange");
    },
    handleDetail() {
      this.$router.push("/coin-detail");
    },
  },
};
</script>
<style lang="scss" scoped>
tbody tr td{
  padding: 20px 0px 20px 10px;
}
.dateChevron{
  margin-left: 50px;
  top: 3px;
  position: relative;
}
.textGreen {
  color: #40994f;
  text-align: center;
  vertical-align: middle;
}
.textRed {
  color: #de2d40;
  text-align: center;
  vertical-align: middle;
}
.textYellow {
  color: #f38220;
  cursor: pointer;
}
.textYellow:hover {
  color: #d6dde1;
}

.textGrey {
  color: #d6dde1;
  vertical-align: middle;
}
.textGreyDark {
  color: #677f8e;
  vertical-align: middle;
}
.textGreyDark-table {
  color: #677f8e;
  // vertical-align: sub;
  font-size: 14px;
  // font-family: "Roboto Flex";
  font-weight: 400;
}
.textGreyDark-description {
  color: #677f8e;
  vertical-align: middle;
  font-family: "Sarabun";
}
.textDarkgrey-Border {
  border-color: #28363e;
}

.align-Icon-Heading {
  font-size: 12px;
  font-weight: 400;
  color: #677f8e;
  font-family: "Roboto Flex";
}

.Coin-Symbol {
  font-size: 16px;
  font-weight: 600;
}
.question-circle {
  position: relative;
  margin-top: -3px;
  left: 8px;
  cursor: pointer;
}
.border-left-table {
  border-left: 1px solid #28363e;
}
.border-right-table {
  border-right: 1px solid #28363e;
}
.borderTopBottom {
  border-bottom: 1px solid #28363e;
  border-top: 1px solid #28363e;
}
.BuySellHeading-table {
  color: #ffff;
  font-size: 12px;
  // font-family: "Roboto Flex";
  font-weight: 400;
  text-transform: uppercase;
}
.HeadingBuyGroup {
  text-align: center;
  border: none;
  border-right: 1px solid #28363e;
  border-left: 1px solid #28363e;
}
.HeadingSellGroup {
  text-align: center;
  border: none;
  border-right: 1px solid #28363e;
  // border-left: 1px solid #28363E;
}

// %%%  scroller  start %%%%

.scroller {
  // width: 300px;
  height: 420px;
  overflow-y: scroll;
  // scrollbar-color: rebeccapurple green;
  // scrollbar-width: thin;
}
/* width */
::-webkit-scrollbar {
  width: 5px;
}
/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px #28363e;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #3c515d;
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #192126;
}
</style>
