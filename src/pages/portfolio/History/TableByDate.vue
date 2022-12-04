<template>
  <div class="padding-table scroller">
    <table class="table ma-3" id="myTable">
      <thead v-for="(item, index) in TableHeader" :key="index">
        <!-- Heading Date -->
        <th scope="col" class="textGreyDark ">
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

        <!-- Heading TotalBuy -->
        <th scope="col" class="textGreyDark">
          <p class="align-Icon-Heading mb-0" style="margin-left: 14%;">
            {{ item.TotalBuy }}
          </p>
        </th>
        <!-- End Heading TotalBuy -->

        <!-- Heading TotalSell -->
        <th scope="col" class="textGreyDark">
          <p class="align-Icon-Heading mb-0" style="margin-left: 14%;">
            {{ item.TotalSell }}
          </p>
        </th>
        <!-- End Heading TotalSell -->

        <!-- Heading FreeVAT -->
        <th scope="col" class="textGreyDark">
          <p class="align-Icon-Heading mb-0" >{{ item.FreeVAT }}</p>
        </th>
        <!-- End Heading FreeVAT -->

        <!-- Heading ProfitLoss -->
        <th scope="col" class="textGreyDark" style="width:50%">
          <p class="align-Icon-Heading mb-0" style="margin-left: 14%;">{{ item.ProfitLoss }}</p>
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

          <!-- TotalBuy -->
          <td class="textGrey">
            <p class="mb-0">{{ item.TotalBuyValue }}</p>
          </td>
          <!-- End TotalBuy -->

          <!-- TotalSellValue -->
          <td>
            <p class="mb-0 textGrey">{{ item.TotalSellValue }}</p>
          </td>
          <!-- End TotalSellValue -->

          <!-- last FreeVAT -->
          <td>
            <p class="mb-0 textGrey">{{ item.FreeVATValue }}</p>
          </td>
          <!-- End FreeVAT -->

          <!-- profitloss -->
          <td >
            <span
              class="textGrey Coin-Symbol profitloss-one mb-0"
              style="color: #40994f"
            >
              {{ item.ProfitLossValue }}
            </span>
            <span
              class="textGrey profitloss-one mb-0 "
              style="color: #40994f"
            >
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
.dateChevron{
  margin-left: 50px;
  top: 3px;
  position: relative;
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
