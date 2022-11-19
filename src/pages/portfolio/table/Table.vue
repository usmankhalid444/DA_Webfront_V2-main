<template>
  <div class="padding-table scroller">
    <table class="table ma-3" id="myTable">
      <thead v-for="(item, index) in TableHeader" :key="index">
        <!-- Heading Coin -->
        <th scope="col" class="textGreyDark">
          <div class="d-flex">
            <div class="align-Icon-Heading">
              {{ item.headingCoin }}
            </div>
          </div>
        </th>
        <!-- End Heading Coin -->

        <!-- Heading Actual -->
        <th scope="col" class="textGreyDark">
          <div class="d-flex justify-content-end">
            <div class="align-Icon-Heading">
              {{ item.Actual }}
            </div>
            <div class="question-circle" @click="sortTable(0)">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                fill="currentColor"
                class="bi bi-question-circle"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                />
                <path
                  d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"
                />
              </svg>
            </div>
          </div>
        </th>
        <!-- End Heading Actual -->

        <!-- Heading AvrgCost -->
        <th scope="col" class="textGreyDark">
          <div class="d-flex justify-content-end">
            <div class="align-Icon-Heading">{{ item.AvrgCost }}</div>
          </div>
        </th>
        <!-- End Heading AvrgCost -->

        <!-- Heading lastPrice -->
        <th scope="col" class="textGreyDark">
          <div class="d-flex justify-content-end">
            <div class="align-Icon-Heading">{{ item.lastPrice }}</div>
          </div>
        </th>
        <!-- End Heading lastPrice -->

        <!-- Heading Total -->
        <th scope="col" class="textGreyDark">
          <div class="d-flex justify-content-end">
            <div class="align-Icon-Heading">{{ item.Total }}</div>
          </div>
        </th>
        <!-- End Heading Total -->

        <!-- Heading Unrealized -->
        <th scope="col" class="textGreyDark">
          <div class="d-flex justify-content-end">
            <div class="align-Icon-Heading">{{ item.Unrealized }}</div>
          </div>
        </th>
        <!-- End Heading Unrealized -->

        <!-- Heading realized -->
        <th scope="col" class="textGreyDark">
          <div class="d-flex justify-content-end">
            <div class="align-Icon-Heading">{{ item.realized }}</div>
          </div>
        </th>
        <!-- End Heading realized -->
      </thead>
      <tbody>
        <tr
          class="textDarkgrey-Border"
          v-for="(item, index) in TableData"
          :key="index"
        >
          <!-- {{ index }}: {{ item.lastPrice }} -->

          <!-- coin data without start in gainloss -->
          <td v-if="mycoins || coinheatmap">
            <span class="textGrey Coin-Symbol">
              {{ item.Coinsybmol }}
            </span>
            <span class="textGreyDark-table">
              {{ item.CoinName }}
            </span>
          </td>
          <!-- End coin data without star in gainloss -->

          <!-- last ActualValue -->
          <td v-if="mycoins || coinheatmap" class="textGrey text-end">
            {{ item.ActualValue }}
          </td>
          <!-- End ActualValue -->

          <!-- last AvrgCostValue -->
          <td v-if="mycoins || coinheatmap" class="textGrey text-end">
            {{ item.AvrgCostValue }}
          </td>
          <!-- End AvrgCostValue -->

          <!-- last lastPriceValue -->
          <td v-if="mycoins || coinheatmap" class="textGrey text-end">
            {{ item.lastPriceValue }}
          </td>
          <!-- End lastPriceValue -->

          <!-- last TotalValue -->
          <td v-if="mycoins || coinheatmap" class="textGrey text-end">
            {{ item.TotalValue }}
          </td>
          <!-- End TotalValue -->

          <!-- UnrealizedValue  -->
          <td
            v-if="mycoins"
            class="textGreen"
            style="padding-left: 30px !important; width: 10%"
          >
            {{ item.UnrealizedValue }}
          </td>
          <!--End UnrealizedValue  -->

          <!-- RedUnrealizedValue  -->
          <td
            v-if="coinheatmap"
            class="textRed"
            style="padding-left: 30px !important; width: 10%"
          >
            {{ item.UnrealizedValue }}
          </td>
          <!--End RedUnrealizedValue  -->

          <!-- last realizedValue -->
          <td v-if="mycoins || coinheatmap" class="textGrey text-end">
            {{ item.realizedValue }}
          </td>
          <!-- End realizedValue -->

          <!-- buysell button -->
          <td style="text-align: end; vertical-align: middle">
            <span class="textYellow" @click="handleDetail">ดูรายละเอียด</span>
          </td>
          <!-- End BuySell Button -->
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "tablePortfolio",
  props: ["TableHeader", "TableData", "mycoins", "coinheatmap"],
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
.padding-table {
  padding: 15px 18px 0px 18px;
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
  // position: relative;
  // bottom: 2px;
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

// %%%  scroller  start %%%%

.scroller {
  // width: 300px;
  height: 200px;
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
