<template>
  <div class="padding-table scroller by-detail-table">
    <table class="table ma-3" id="myTable">
      <thead v-for="(item, index) in TableHeader" :key="index">
        <!-- Heading Date -->
        <th scope="col" class="textGreyDark">
          <div class="d-flex" style="padding-left: 1px">
            <div class="align-Icon-Heading">
              {{ item.Date }}
            </div>
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

        <!-- Heading Coin -->
        <th scope="col" class="textGreyDark">
          <div class="d-flex">
            <div class="align-Icon-Heading">
              {{ item.Coin }}
            </div>
          </div>
        </th>
        <!-- End Heading Coin -->

        <!-- Heading B/S -->
        <th scope="col" class="textGreyDark">
          <div class="d-flex">
            <div class="align-Icon-Heading">
              {{ item.BS }}
            </div>
          </div>
        </th>
        <!-- End Heading B/S -->

        <!-- Heading Actual -->
        <th scope="col" class="textGreyDark">
          <div class="d-flex">
            <div class="align-Icon-Heading">{{ item.Actual }}</div>
            <div class="question-circle" @click="sortTable(0)">
              <!-- <svg
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
              </svg> -->
            </div>
          </div>
        </th>
        <!-- End Heading Actual -->

        <!-- Heading AvrgCost -->
        <th scope="col" class="textGreyDark">
          <div class="d-flex">
            <div class="align-Icon-Heading">{{ item.AvrgCost }}</div>
          </div>
        </th>
        <!-- End Heading AvrgCost -->

        <!-- Heading Total -->
        <th scope="col" class="textGreyDark">
          <div class="d-flex">
            <div class="align-Icon-Heading">{{ item.Total }}</div>
          </div>
        </th>
        <!-- End Heading Total -->

        <!-- Heading ProfitLoss -->
        <th scope="col" class="textGreyDark">
          <div class="d-flex">
            <div class="align-Icon-Heading">{{ item.ProfitLoss }}</div>
          </div>
        </th>
        <!-- End Heading ProfitLoss -->
      </thead>
      <tbody class="mt-2">
        <tr
          class="textDarkgrey-Border"
          v-for="(item, index) in TableData"
          :key="index"
        >
          <!-- {{ index }}: {{ item.lastPrice }} -->

          <!-- Datetime -->
          <td style="width: 120px; padding-left: 1px">
            <p class="Datetime-one" style="margin: 0px; margin-top: 5px">
              <span class="textGrey Coin-Symbol">
                {{ item.Date }}
              </span>
              <span class="textGreyDark-table">
                {{ item.Time }}
              </span>
            </p>

            <p
              class="DateTime-two"
              style="margin: 0px; margin-top: 24px; margin-bottom: 10px"
            >
              <span class="textGrey Coin-Symbol">
                {{ item.Date }}
              </span>
              <span class="textGreyDark-table">
                {{ item.Time }}
              </span>
            </p>
          </td>
          <!-- End Datetime -->

          <!-- CoinSymbol -->
          <td class="textGrey">
            <p style="margin: 0px; margin-top: 5px">{{ item.CoinSymbol }}</p>
            <p style="margin: 0px; margin-top: 24px; margin-bottom: 10px">
              {{ item.CoinSymbol }}
            </p>
          </td>
          <!-- End CoinSymbol -->

          <!-- B/S -->
          <td class="textGrey">
            <p style="color: #40994f; margin: 0px; margin-top: 5px">
              {{ item.BGreen }}
            </p>
            <p
              style="
                color: #de2d40;
                margin: 0px;
                margin-top: 24px;
                margin-bottom: 10px;
              "
            >
              {{ item.SRed }}
            </p>
          </td>
          <!-- End B/S -->

          <!-- last ActualValue -->
          <td class="textGrey">
            <p style="margin: 0px; margin-top: 5px">{{ item.ActualValue }}</p>
            <p style="margin: 0px; margin-top: 24px; margin-bottom: 10px">
              {{ item.ActualValue }}
            </p>
          </td>
          <!-- End ActualValue -->

          <!-- last AvrgCostValue -->
          <td class="textGrey">
            <p style="margin: 0px; margin-top: 5px">{{ item.AvrgCostValue }}</p>
            <p style="margin: 0px; margin-top: 24px; margin-bottom: 10px">
              {{ item.AvrgCostValue }}
            </p>
          </td>
          <!-- End AvrgCostValue -->

          <!-- last TotalValue -->
          <td class="textGrey">
            <p style="margin: 0px; margin-top: 5px">{{ item.TotalValue }}</p>
            <p style="margin: 0px; margin-top: 24px; margin-bottom: 10px">
              {{ item.TotalValue }}
            </p>
          </td>
          <!-- End TotalValue -->

          <!-- profitloss -->
          <td class="align-bottom" style="width: 290px">
            <p class="profitloss-two" style="margin-0">
              <span class="textGrey Coin-Symbol" style="color: #40994f">
                {{ item.ProfitLossValue }}
              </span>
              <span class="textGreyDark-table" style="color: #40994f">
                {{ item.ProfitLossPercentage }}
              </span>
            </p>
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
.dateChevron {
  margin-left: 50px;
  top: 3px;
  position: relative;
}
.textGreen {
  color: #40994f;
  text-align: center;
  // vertical-align: middle;
}
.textRed {
  color: #de2d40;
  text-align: center;
  // vertical-align: middle;
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
  // vertical-align: middle;
}
.textGreyDark {
  color: #677f8e;
  // vertical-align: middle;
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
  // vertical-align: middle;
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
  font-size: 14px;
  font-weight: 400;
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
  height: 335px;
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
