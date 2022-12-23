<template>
  <div>
    <div v-if="!showWithdrawCoinDetails">
      <span class="top-heading px-2 my-3">1. เลือก Wallet ที่รับเหรียญ</span>

      <div class="row">
        <div class="col-9 w-search-c">
          <input type="text" placeholder="Search Coin" />
          <span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.9167 9.66667H10.2583L10.025 9.44167C10.8417 8.49167 11.3333 7.25833 11.3333 5.91667C11.3333 2.925 8.90833 0.5 5.91667 0.5C2.925 0.5 0.5 2.925 0.5 5.91667C0.5 8.90833 2.925 11.3333 5.91667 11.3333C7.25833 11.3333 8.49167 10.8417 9.44167 10.025L9.66667 10.2583V10.9167L13.8333 15.075L15.075 13.8333L10.9167 9.66667ZM5.91667 9.66667C3.84167 9.66667 2.16667 7.99167 2.16667 5.91667C2.16667 3.84167 3.84167 2.16667 5.91667 2.16667C7.99167 2.16667 9.66667 3.84167 9.66667 5.91667C9.66667 7.99167 7.99167 9.66667 5.91667 9.66667Z"
                fill="#677F8E"
              />
            </svg>
          </span>
        </div>
        <div class="col-3">
          <button class="srb">+ เพิ่ม Address ใหม่</button>
        </div>
      </div>

      <div class="scroller mt-3">
        <table class="table px-0" id="myTable">
          <thead>
            <!-- Heading Unrealized -->
            <th
              v-for="(item, index) in TableHeader"
              :key="index"
              scope="col"
              class="textGreyDark"
            >
              <div
                v-if="item === 'Wallet'"
                class="align-Icon-Heading py-0"
                style="position: relative; left: 27px"
              >
                {{ item }}
              </div>
              <div v-else class="align-Icon-Heading p-0">
                {{ item }}
              </div>
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
              <td class="textGrey px-1 font-roboto">
                <div class="d-flex">
                  <input type="radio" class="me-3" id="min" name="time" />
                  {{ item.wallet }}
                </div>
              </td>
              <td class="textGrey px-0 font-roboto">
                {{ item.coin }}
              </td>
              <td class="textGrey px-0 font-roboto">
                {{ item.network }}
              </td>
              <td class="textGrey px-0 thai-font">
                {{ item.address }}
              </td>
              <!-- buysell button -->
              <td class="textGrey px-0 thai-font">
                <span class="textYellow" @click="showWithdrawCoinDetails = true"
                  >แก้ไข</span
                >
              </td>
              <!-- End BuySell Button -->
            </tr>
          </tbody>
        </table>
      </div>
      <div class="wbb">
        <button>ยืนยัน</button>
      </div>
    </div>
    <div v-else>
      <span class="top-heading px-2 my-3"
        >2. ระบุจำนวนและยืนยันการถอนเหรียญ
      </span>
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
      showWithdrawCoinDetails: true,
      TableHeader: ["Wallet", "Coin", "Network", "Address"],
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
  right: 1px;
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

.w-search-c {
  position: relative;
  height: 28px;
  input {
    width: 424px;
    height: 100%;
    background: #222b2f;
    padding: 0 30px;
    color: white;
  }
  input::placeholder {
    color: #566a76;
  }
  span {
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
  }
}
.srb {
  width: 128px;
  height: 28px;
  background-color: #38454d;
  border-radius: 4px;
  font-family: "Sarabun";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 24px;
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
  border-color: transparent;
  // font-family: "Sarabun";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
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
  height: 230px;
  overflow-y: scroll;
  // scrollbar-color: rebeccapurple green;
  // scrollbar-width: thin;
}
.wbb {
  margin-top: 16px;
  border-top: 1px solid #28363e;
  button {
    margin: auto;
    margin-top: 22px;
    width: 102px;
    height: 28px;
    display: block;
    background-color: #f38220;
    border-radius: 4px;
    font-family: "Sarabun";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    color: #0a0d10;
    line-height: 24px;
    &:hover {
      background-color: #f28e38;
    }
  }
}
/* width */
::-webkit-scrollbar {
  width: 4px;
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
