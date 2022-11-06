<template>
  <div class="grid order-history p-3">
    <div class="row">
      <h1>Order History</h1>
      <div class="menu-tabs">
        <ul>
          <li
            @click="active_tab = 'Limit & Market Orders'"
            :class="active_tab === 'Limit & Market Orders' ? 'active' : ''"
          >
            Limit & Market Orders
          </li>
          <li
            @click="active_tab = 'Trailing Stop'"
            :class="active_tab === 'Trailing Stop' ? 'active' : ''"
          >
            Trailing Stop
          </li>
        </ul>
      </div>
    </div>
    <div class="col-12">
      <div class="search-input">
        <input type="text" placeholder="ค้นหาเหรียญ" />
        <span
          ><svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11V11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z"
              fill="#677F8E"
            />
          </svg>
        </span>
      </div>
      <div class="filter-buttons">
        <button
          @click="activeBtn = 'all'"
          class="btn-all"
          :class="activeBtn === 'all' ? 'active' : ''"
        >
          All
        </button>
        <button
          @click="activeBtn = 'buy'"
          class="btn-buy"
          :class="activeBtn === 'buy' ? 'active' : ''"
        >
          Buy
        </button>
        <button
          @click="activeBtn = 'sell'"
          class="btn-sell"
          :class="activeBtn === 'sell' ? 'active' : ''"
        >
          Sell
        </button>
      </div>
      <div class="select-status">
        <select>
          <option value="" selected disabled hidden>All Status</option>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>
        <span
          ><svg
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.41 0.590088L6 5.17009L10.59 0.590088L12 2.00009L6 8.00009L0 2.00009L1.41 0.590088Z"
              fill="#677F8E"
            />
          </svg>
        </span>
      </div>
      <div class="filter-date-picker">
        <input type="date" />
        <span
          ><svg
            width="16"
            height="18"
            viewBox="0 0 16 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 10.6667C7.76389 10.6667 7.56611 10.5867 7.40667 10.4267C7.24667 10.2673 7.16667 10.0695 7.16667 9.83342C7.16667 9.5973 7.24667 9.39925 7.40667 9.23925C7.56611 9.0798 7.76389 9.00008 8 9.00008C8.23611 9.00008 8.43417 9.0798 8.59417 9.23925C8.75361 9.39925 8.83333 9.5973 8.83333 9.83342C8.83333 10.0695 8.75361 10.2673 8.59417 10.4267C8.43417 10.5867 8.23611 10.6667 8 10.6667ZM4.66667 10.6667C4.43056 10.6667 4.2325 10.5867 4.0725 10.4267C3.91306 10.2673 3.83333 10.0695 3.83333 9.83342C3.83333 9.5973 3.91306 9.39925 4.0725 9.23925C4.2325 9.0798 4.43056 9.00008 4.66667 9.00008C4.90278 9.00008 5.10083 9.0798 5.26083 9.23925C5.42028 9.39925 5.5 9.5973 5.5 9.83342C5.5 10.0695 5.42028 10.2673 5.26083 10.4267C5.10083 10.5867 4.90278 10.6667 4.66667 10.6667ZM11.3333 10.6667C11.0972 10.6667 10.8994 10.5867 10.74 10.4267C10.58 10.2673 10.5 10.0695 10.5 9.83342C10.5 9.5973 10.58 9.39925 10.74 9.23925C10.8994 9.0798 11.0972 9.00008 11.3333 9.00008C11.5694 9.00008 11.7672 9.0798 11.9267 9.23925C12.0867 9.39925 12.1667 9.5973 12.1667 9.83342C12.1667 10.0695 12.0867 10.2673 11.9267 10.4267C11.7672 10.5867 11.5694 10.6667 11.3333 10.6667ZM8 14.0001C7.76389 14.0001 7.56611 13.9201 7.40667 13.7601C7.24667 13.6006 7.16667 13.4029 7.16667 13.1667C7.16667 12.9306 7.24667 12.7329 7.40667 12.5734C7.56611 12.4134 7.76389 12.3334 8 12.3334C8.23611 12.3334 8.43417 12.4134 8.59417 12.5734C8.75361 12.7329 8.83333 12.9306 8.83333 13.1667C8.83333 13.4029 8.75361 13.6006 8.59417 13.7601C8.43417 13.9201 8.23611 14.0001 8 14.0001ZM4.66667 14.0001C4.43056 14.0001 4.2325 13.9201 4.0725 13.7601C3.91306 13.6006 3.83333 13.4029 3.83333 13.1667C3.83333 12.9306 3.91306 12.7329 4.0725 12.5734C4.2325 12.4134 4.43056 12.3334 4.66667 12.3334C4.90278 12.3334 5.10083 12.4134 5.26083 12.5734C5.42028 12.7329 5.5 12.9306 5.5 13.1667C5.5 13.4029 5.42028 13.6006 5.26083 13.7601C5.10083 13.9201 4.90278 14.0001 4.66667 14.0001ZM11.3333 14.0001C11.0972 14.0001 10.8994 13.9201 10.74 13.7601C10.58 13.6006 10.5 13.4029 10.5 13.1667C10.5 12.9306 10.58 12.7329 10.74 12.5734C10.8994 12.4134 11.0972 12.3334 11.3333 12.3334C11.5694 12.3334 11.7672 12.4134 11.9267 12.5734C12.0867 12.7329 12.1667 12.9306 12.1667 13.1667C12.1667 13.4029 12.0867 13.6006 11.9267 13.7601C11.7672 13.9201 11.5694 14.0001 11.3333 14.0001ZM2.16667 17.3334C1.70833 17.3334 1.31583 17.1704 0.989167 16.8442C0.663055 16.5176 0.5 16.1251 0.5 15.6667V4.00008C0.5 3.54175 0.663055 3.14953 0.989167 2.82341C1.31583 2.49675 1.70833 2.33341 2.16667 2.33341H3V0.666748H4.66667V2.33341H11.3333V0.666748H13V2.33341H13.8333C14.2917 2.33341 14.6842 2.49675 15.0108 2.82341C15.3369 3.14953 15.5 3.54175 15.5 4.00008V15.6667C15.5 16.1251 15.3369 16.5176 15.0108 16.8442C14.6842 17.1704 14.2917 17.3334 13.8333 17.3334H2.16667ZM2.16667 15.6667H13.8333V7.33342H2.16667V15.6667Z"
              fill="#677F8E"
            />
          </svg>
        </span>
      </div>
      <div class="export-button">
        <button>Export to Exel</button>
      </div>
    </div>
    <div v-if="active_tab === 'Limit & Market Orders'" class="row">
      <div
        class="col-md-12 table-responsive mt-3 p-0"
        style="height: 297px; overflow: auto"
      >
        <table class="table table-borderless text-start p-0">
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">B/S</th>
              <th scope="col">Coin</th>
              <th scope="col">Status</th>
              <th scope="col">Amount</th>
              <th scope="col">Price</th>
              <th scope="col">Fee + VAT</th>
              <th scope="col">Total</th>
              <th scope="col">Type</th>
              <th scope="col">TP/SL Conditions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>25/09/22 <span>19:53</span></td>
              <td class="green">B</td>
              <td>BTC</td>
              <td>Matched</td>
              <td>1.00</td>
              <td>1,038,938.56</td>
              <td>800.00</td>
              <td>50,000.98</td>
              <td>Limit</td>
              <td>TP: 1,000,000.00 (+20%)</td>
            </tr>
            <tr>
              <td>25/09/22 <span>19:53</span></td>
              <td class="red">S</td>
              <td>BTC</td>
              <td>Matched</td>
              <td>1.00</td>
              <td>1,038,938.56</td>
              <td>800.00</td>
              <td>50,000.98</td>
              <td>Limit</td>
              <td>TP: 1,000,000.00 (+20%) | SL: 789,000.00 (-20%)</td>
            </tr>
            <tr>
              <td>25/09/22 <span>19:53</span></td>
              <td class="green">B</td>
              <td>BTC</td>
              <td>Matched</td>
              <td>1.00</td>
              <td>1,038,938.56</td>
              <td>800.00</td>
              <td>50,000.98</td>
              <td>Limit</td>
              <td>-</td>
            </tr>
            <tr>
              <td>25/09/22 <span>19:53</span></td>
              <td class="red">S</td>
              <td>BTC</td>
              <td>Matched</td>
              <td>1.00</td>
              <td>1,038,938.56</td>
              <td>800.00</td>
              <td>50,000.98</td>
              <td>Limit</td>
              <td>TP: 1,000,000.00 (+20%) | SL: 789,000.00 (-20%)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div v-if="active_tab === 'Trailing Stop'" class="row">
      <div
        class="col-md-12 table-responsive mt-3 p-0"
        style="height: 297px; overflow: auto"
      >
        <table class="table table-borderless text-start p-0">
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">B/S</th>
              <th scope="col">Coin</th>
              <th scope="col">Status</th>
              <th scope="col">Amount</th>
              <th scope="col">Price</th>
              <th scope="col">Fee + VAT</th>
              <th scope="col">Total</th>
              <th scope="col">Type</th>
              <th scope="col">TP/SL Conditions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>28/09/22 <span>20:53</span></td>
              <td class="red">B</td>
              <td>ETH</td>
              <td>Matched</td>
              <td>5.00</td>
              <td>9,038,938.56</td>
              <td>800.00</td>
              <td>50,000.98</td>
              <td>Limit</td>
              <td>-</td>
            </tr>
            <tr>
              <td>28/09/22 <span>19:53</span></td>
              <td class="red">S</td>
              <td>BTC</td>
              <td>Matched</td>
              <td>4.00</td>
              <td>5,038,938.56</td>
              <td>800.00</td>
              <td>50,000.98</td>
              <td>Limit</td>
              <td>TP: 1,000,000.00 (+20%) | SL: 789,000.00 (-20%)</td>
            </tr>
            <tr>
              <td>29/09/22 <span>19:53</span></td>
              <td class="green">B</td>
              <td>BTC</td>
              <td>Matched</td>
              <td>1.00</td>
              <td>1,038,938.56</td>
              <td>800.00</td>
              <td>50,000.98</td>
              <td>Limit</td>
              <td>-</td>
            </tr>
            <tr>
              <td>25/09/22 <span>19:53</span></td>
              <td class="red">S</td>
              <td>BTC</td>
              <td>Matched</td>
              <td>1.00</td>
              <td>1,038,938.56</td>
              <td>800.00</td>
              <td>50,000.98</td>
              <td>Limit</td>
              <td>TP: 1,000,000.00 (+20%)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active_tab: "Limit & Market Orders",
      activeBtn: "all",
    };
  },
};
</script>
<style lang="scss">
::-webkit-scrollbar {
  width: 4px;
  height: 4px;
  border-radius: 20px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #28363e;

  border-radius: 20px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  border-radius: 20px;
  background: #3c515d;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #d6dde1;
  border-radius: 20px;
}
.order-history {
  color: #d6dde1;
  // white-space: nowrap;
  h1 {
    font-size: 24px;
    font-weight: 500;
  }
  .menu-tabs ul {
    padding: 0;
    border-bottom: 1px solid #28363e;
    li {
      display: inline-block;
      color: #677f8e;
      font-size: 16px;
      margin-right: 20px;
      padding: 10px 0;
      cursor: pointer;
    }
    li.active {
      color: #d6dde1;
      border-bottom: 2px solid #f38220;
    }
  }
  .search-input {
    position: relative;
    display: inline;
    margin-right: 15px;
    input {
      width: 142px;
      height: 40px;
      padding-left: 40px;
      padding-right: 5px;
      border-radius: 4px;
      background-color: #222b2f;
      color: white;
      &::placeholder {
        font-family: "sarabun";
        color: #566a76;
      }
    }
    span {
      position: absolute;
      left: 10px;
      top: 50%;
      transform: translateY(-50%);
      pointer-events: none;
    }
  }
  .filter-buttons {
    display: inline;
    margin-right: 15px;
    button {
      color: #9bacb6;
      width: 73px;
      height: 40px;
      margin-left: 1px;
      background-color: #222b2f;
    }
    button.active {
      color: white;
      background-color: #38454d;
    }
    .btn-all {
      border-radius: 4px 0px 0px 4px;
    }
    .btn-buy {
      background-color: #222b2f;
    }
    .btn-sell {
      border-radius: 0px 4px 4px 0px;
    }
  }

  .select-status {
    display: inline-block;
    position: relative;
    margin-right: 15px;
    select {
      width: 142px;
      height: 40px;
      background-color: #222b2f;
      border-radius: 4px;
      color: #d6dde1;
      padding: 0 15px;
    }
    span {
      position: absolute;
      right: 15px;
      margin-top: 10px;
    }
  }
  .filter-date-picker {
    display: inline-block;
    position: relative;
    margin-right: 40px;
    input[type="date"]::-webkit-calendar-picker-indicator {
      color: transparent;
      background: none;
    }
    input {
      width: 221px;
      height: 40px;
      border: 1px solid #28363e;
      padding: 0 10px;
      color: #d6dde1;
      &::placeholder {
        color: #677f8e;
      }
    }
    span {
      position: absolute;
      right: 8px;
      margin-top: 8px;
      pointer-events: none;
    }
  }
  .export-button {
    display: inline-block;
    button {
      width: 124px;
      height: 40px;
      color: #677f8e;
      border-radius: 4px;
      border: 1px solid #28363e;
    }
    button:hover {
      color: #d6dde1;
      border: 1px solid #d6dde1;
    }
  }
  table {
    width: 100%;
    margin-top: 10px;
    th {
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 14px;
      /* identical to box height */

      /* Text + Icon/Content - Sub#2, Icon */

      color: #677f8e;
    }
    tr td span {
      color: #677f8e;
      margin-left: 5px;
    }
    tr {
      line-height: 30px;
    }
    input {
      background: #222b2f;
      border: 1px solid #3c515d;
      border-radius: 2px;
      height: 17px;
      width: 17px;
    }
    input:checked {
      background-color: #f38220;
      border: 1px solid #3c515d;
    }
    td {
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      color: #d6dde1;
      border-bottom: 1px solid #28363e;
      vertical-align: middle;
    }
    .green {
      color: #40994f;
    }
    .red {
      color: #de2d40;
    }
    .orange {
      color: #f38220;
      font-weight: 400;
      font-family: "sarabun";
      cursor: pointer;
    }
    button {
      color: #d6dde1;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      padding: 8px 16px;
      background: #38454d;
      border-radius: 4px;
      border: none;
    }
    button:hover {
      color: #d6dde1;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      padding: 8px 16px;
      background: #38454d;
      border-radius: 4px;
      border: none;
    }
  }
}

@media only screen and (min-width: 100px) {
  .select-status {
    margin-top: 10px;
  }
  .filter-date-picker {
    margin-top: 10px;
  }
  .export-button {
    margin-top: 10px;
  }
  .search-input {
    margin-top: 10px;
  }
  .filter-buttons {
    margin-top: 10px;
  }
}
@media only screen and (min-width: 1024px) {
  .select-status {
    margin-top: 0;
  }
  .filter-date-picker {
    margin-top: 0;
  }
  .export-button {
    margin-top: 0;
  }
  .search-input {
    margin-top: 0;
  }
  .filter-buttons {
    margin-top: 0;
  }
}
</style>
