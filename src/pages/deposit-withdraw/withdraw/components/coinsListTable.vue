<template>
  <div>
    <div v-if="!showWithdrawCoinDetails">
      <span class="top-heading px-2 my-3">1. เลือก Wallet ที่รับเหรียญ</span>

      <div class="row px-2 mb-2">
        <div class="col-9">
          <div class="coversearch">
            <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
              <div class="form-group has-search search-wrapper">
                <svg
                  class="form-control-feedback"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z"
                    fill="#9BACB6"
                  />
                </svg>
              </div>
              <b-form-input
                class="inline-form-input-Search"
                placeholder="ค้นหาข่าว, เหรียญ, หัวข้อที่สนใจ"
              ></b-form-input>
            </b-input-group>
          </div>
        </div>

        <div class="col-3 last-btn">
          <button class="thai-font">+ เพิ่ม Address ใหม่</button>
        </div>
      </div>

      <div class="padding-table scroller">
        <table class="table px-0" id="myTable">
          <thead>
            <!-- Heading Unrealized -->
            <th
              v-for="(item, index) in TableHeader"
              :key="index"
              scope="col"
              class="textGreyDark"
            >
              <div class="align-Icon-Heading ps-4">{{ item }}</div>
            </th>
            <!-- End Heading Unrealized -->

            <!-- End Heading realized -->
          </thead>
          <tbody>
            <tr
              class="textDarkgrey-Border px-0"
              v-for="(item, index) in TableData"
              :key="index"
            >
              <td class="textGrey px-0">
                <div class="d-flex">
                  <input type="radio" class="me-3" id="min" name="time" />
                  {{ item.wallet }}
                </div>
              </td>
              <td class="textGrey text-center px-0">
                {{ item.coin }}
              </td>
              <td class="textGrey text-center px-0">
                {{ item.network }}
              </td>
              <td class="textGrey text-center px-0">
                {{ item.address }}
              </td>
              <!-- buysell button -->
              <td class="textGrey text-center px-0">
                <span class="textYellow" @click="showWithdrawCoinDetails = true"
                  >แก้ไข</span
                >
              </td>
              <!-- End BuySell Button -->
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div v-else>
      <span class="top-heading px-2 my-3">2. ระบุจำนวนและยืนยันการถอนเหรียญ </span>
      <withdrawCoinDetails
        @onCancelClicked="showWithdrawCoinDetails = false"
      ></withdrawCoinDetails>
    </div>
  </div>
</template>

<script>
import withdrawCoinDetails from "./withdrawCoinDetails.vue";
export default {
  components: { withdrawCoinDetails },
  data() {
    return {
      showWithdrawCoinDetails: false,
      TableHeader: ["Wallet", "Coin", "Network", "Address", "Action"],
      TableData: [
        {
          id: 0,
          wallet: "Natt1",
          coin: "ETH",
          network: "Ethereum(ERC20)",
          address: "0xfA...22a6",
        },
        {
          id: 1,
          wallet: "Natt1",
          coin: "ETH",
          network: "Ethereum(ERC20)",
          address: "0xfA...22a6",
        },
        {
          id: 2,
          wallet: "Natt1",
          coin: "ETH",
          network: "Ethereum(ERC20)",
          address: "0xfA...22a6",
        },
        {
          id: 3,
          wallet: "Natt1",
          coin: "ETH",
          network: "Ethereum(ERC20)",
          address: "0xfA...22a6",
        },
        {
          id: 4,
          wallet: "Natt1",
          coin: "ETH",
          network: "Ethereum(ERC20)",
          address: "0xfA...22a6",
        },
        {
          id: 5,
          wallet: "Natt1",
          coin: "ETH",
          network: "Ethereum(ERC20)",
          address: "0xfA...22a6",
        },
        {
          id: 6,
          wallet: "Natt1",
          coin: "ETH",
          network: "Ethereum(ERC20)",
          address: "0xfA...22a6",
        },
        {
          id: 7,
          wallet: "Natt1",
          coin: "ETH",
          network: "Ethereum(ERC20)",
          address: "0xfA...22a6",
        },
      ],
      child_msg: true,
    };
  },

  methods: {},
};
</script>
<style lang="scss" scoped>
input[type="radio"]:after {
  width: 20px;
  height: 20px;
  border-radius: 20px;
  right: 0px;
  position: relative;
  background-color: #222b2f;
  content: "";
  display: inline-block;
  visibility: visible;
  border: 3px solid #38454d;
}

input[type="radio"]:checked:after {
  width: 20px;
  height: 20px;
  border-radius: 20px;
  position: relative;
  background-color: #d6dde1;
  content: "";
  display: inline-block;
  visibility: visible;
  border: 3px solid #f38220;
}
.last-btn {
  text-align: center;
  justify-content: center;
  button {
    height: 38px;
    width: 132px !important;
    color: #fff;
    background-color: #38454d;
    border-radius: 4px;
    &:hover {
      background-color: #222b2f;
    }
  }
}
.coversearch {
  font-family: var(--bs-nst-font-sans-serif);
}

.search-wrapper {
  background-color: #222b2f;
  border-radius: 4px 0px 0px 4px;
  padding-left: 9px;
  padding-right: 3px;
  display: flex;
  align-items: center;
}
.top-heading {
  font-family: "Noto Sans Thai";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
}
.padding-table {
  padding: 10px 10px 10px 10px;
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
