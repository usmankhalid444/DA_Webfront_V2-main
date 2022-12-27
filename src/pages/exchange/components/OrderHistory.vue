<template>
  <div class="grid order-history ">
    <div class="row m-0">
      <h1 class="p-0">Order History</h1>
      <div class="menu-tabs p-0">
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
        <date-picker v-model="time3" format="DD/MM/YY" range style="width:221px"></date-picker>
      </div>
      <div class="export-button">
        <button>Export to Exel</button>
      </div>
    </div>
    <div v-if="active_tab === 'Limit & Market Orders'" class="row m-0">
      <div
        class="col-md-12 table-responsive p-0 m-0"
        style="height: 297px; overflow: auto"
      >
        <table class="table table-borderless text-start p-0">
          <thead>
            <tr>
              <th scope="col">
                Date
                <svg
                  width="6"
                  height="12"
                  viewBox="0 0 6 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_4623_9379)">
                    <path d="M0 8L3 11L6 8H0Z" fill="#677F8E" />
                    <path d="M6 4L3 1L0 4L6 4Z" fill="#677F8E" />
                  </g>
                  <defs>
                    <clipPath id="clip0_4623_9379">
                      <rect width="6" height="12" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </th>
              <th scope="col">
                B/S
                <svg
                  width="6"
                  height="12"
                  viewBox="0 0 6 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_4623_9379)">
                    <path d="M0 8L3 11L6 8H0Z" fill="#677F8E" />
                    <path d="M6 4L3 1L0 4L6 4Z" fill="#677F8E" />
                  </g>
                  <defs>
                    <clipPath id="clip0_4623_9379">
                      <rect width="6" height="12" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </th>
              <th scope="col">
                Coin
                <svg
                  width="6"
                  height="12"
                  viewBox="0 0 6 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_4623_9379)">
                    <path d="M0 8L3 11L6 8H0Z" fill="#677F8E" />
                    <path d="M6 4L3 1L0 4L6 4Z" fill="#677F8E" />
                  </g>
                  <defs>
                    <clipPath id="clip0_4623_9379">
                      <rect width="6" height="12" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </th>
              <th scope="col">
                Status
                <svg
                  width="6"
                  height="12"
                  viewBox="0 0 6 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_4623_9379)">
                    <path d="M0 8L3 11L6 8H0Z" fill="#677F8E" />
                    <path d="M6 4L3 1L0 4L6 4Z" fill="#677F8E" />
                  </g>
                  <defs>
                    <clipPath id="clip0_4623_9379">
                      <rect width="6" height="12" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </th>
              <th scope="col">
                Amount
                <svg
                  width="6"
                  height="12"
                  viewBox="0 0 6 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_4623_9379)">
                    <path d="M0 8L3 11L6 8H0Z" fill="#677F8E" />
                    <path d="M6 4L3 1L0 4L6 4Z" fill="#677F8E" />
                  </g>
                  <defs>
                    <clipPath id="clip0_4623_9379">
                      <rect width="6" height="12" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </th>
              <th scope="col">
                Price
                <svg
                  width="6"
                  height="12"
                  viewBox="0 0 6 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_4623_9379)">
                    <path d="M0 8L3 11L6 8H0Z" fill="#677F8E" />
                    <path d="M6 4L3 1L0 4L6 4Z" fill="#677F8E" />
                  </g>
                  <defs>
                    <clipPath id="clip0_4623_9379">
                      <rect width="6" height="12" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </th>
              <th scope="col">
                Fee + VAT
                <svg
                  width="6"
                  height="12"
                  viewBox="0 0 6 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_4623_9379)">
                    <path d="M0 8L3 11L6 8H0Z" fill="#677F8E" />
                    <path d="M6 4L3 1L0 4L6 4Z" fill="#677F8E" />
                  </g>
                  <defs>
                    <clipPath id="clip0_4623_9379">
                      <rect width="6" height="12" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </th>
              <th scope="col">
                Total
                <svg
                  width="6"
                  height="12"
                  viewBox="0 0 6 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_4623_9379)">
                    <path d="M0 8L3 11L6 8H0Z" fill="#677F8E" />
                    <path d="M6 4L3 1L0 4L6 4Z" fill="#677F8E" />
                  </g>
                  <defs>
                    <clipPath id="clip0_4623_9379">
                      <rect width="6" height="12" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </th>
              <th scope="col">
                Type
                <svg
                  width="6"
                  height="12"
                  viewBox="0 0 6 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_4623_9379)">
                    <path d="M0 8L3 11L6 8H0Z" fill="#677F8E" />
                    <path d="M6 4L3 1L0 4L6 4Z" fill="#677F8E" />
                  </g>
                  <defs>
                    <clipPath id="clip0_4623_9379">
                      <rect width="6" height="12" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </th>
              <th scope="col">
                TP/SL Conditions
                <svg
                  width="6"
                  height="12"
                  viewBox="0 0 6 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_4623_9379)">
                    <path d="M0 8L3 11L6 8H0Z" fill="#677F8E" />
                    <path d="M6 4L3 1L0 4L6 4Z" fill="#677F8E" />
                  </g>
                  <defs>
                    <clipPath id="clip0_4623_9379">
                      <rect width="6" height="12" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </th>
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
    <div v-if="active_tab === 'Trailing Stop'" class="row m-0">
      <div
        class="col-md-12 table-responsive p-0"
        style="height: 297px; overflow: auto"
      >
        <table class="table table-borderless text-start p-0">
          <thead>
            <tr>
              <th scope="col">
                Date
                <svg
                  width="6"
                  height="12"
                  viewBox="0 0 6 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_4623_9379)">
                    <path d="M0 8L3 11L6 8H0Z" fill="#677F8E" />
                    <path d="M6 4L3 1L0 4L6 4Z" fill="#677F8E" />
                  </g>
                  <defs>
                    <clipPath id="clip0_4623_9379">
                      <rect width="6" height="12" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </th>
              <th scope="col">
                B/S
                <svg
                  width="6"
                  height="12"
                  viewBox="0 0 6 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_4623_9379)">
                    <path d="M0 8L3 11L6 8H0Z" fill="#677F8E" />
                    <path d="M6 4L3 1L0 4L6 4Z" fill="#677F8E" />
                  </g>
                  <defs>
                    <clipPath id="clip0_4623_9379">
                      <rect width="6" height="12" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </th>
              <th scope="col">
                Coin
                <svg
                  width="6"
                  height="12"
                  viewBox="0 0 6 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_4623_9379)">
                    <path d="M0 8L3 11L6 8H0Z" fill="#677F8E" />
                    <path d="M6 4L3 1L0 4L6 4Z" fill="#677F8E" />
                  </g>
                  <defs>
                    <clipPath id="clip0_4623_9379">
                      <rect width="6" height="12" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </th>
              <th scope="col">
                Status
                <svg
                  width="6"
                  height="12"
                  viewBox="0 0 6 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_4623_9379)">
                    <path d="M0 8L3 11L6 8H0Z" fill="#677F8E" />
                    <path d="M6 4L3 1L0 4L6 4Z" fill="#677F8E" />
                  </g>
                  <defs>
                    <clipPath id="clip0_4623_9379">
                      <rect width="6" height="12" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </th>
              <th scope="col">
                Amount
                <svg
                  width="6"
                  height="12"
                  viewBox="0 0 6 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_4623_9379)">
                    <path d="M0 8L3 11L6 8H0Z" fill="#677F8E" />
                    <path d="M6 4L3 1L0 4L6 4Z" fill="#677F8E" />
                  </g>
                  <defs>
                    <clipPath id="clip0_4623_9379">
                      <rect width="6" height="12" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </th>
              <th scope="col">
                Price
                <svg
                  width="6"
                  height="12"
                  viewBox="0 0 6 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_4623_9379)">
                    <path d="M0 8L3 11L6 8H0Z" fill="#677F8E" />
                    <path d="M6 4L3 1L0 4L6 4Z" fill="#677F8E" />
                  </g>
                  <defs>
                    <clipPath id="clip0_4623_9379">
                      <rect width="6" height="12" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </th>
              <th scope="col">
                Fee + VAT
                <svg
                  width="6"
                  height="12"
                  viewBox="0 0 6 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_4623_9379)">
                    <path d="M0 8L3 11L6 8H0Z" fill="#677F8E" />
                    <path d="M6 4L3 1L0 4L6 4Z" fill="#677F8E" />
                  </g>
                  <defs>
                    <clipPath id="clip0_4623_9379">
                      <rect width="6" height="12" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </th>
              <th scope="col">
                Total
                <svg
                  width="6"
                  height="12"
                  viewBox="0 0 6 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_4623_9379)">
                    <path d="M0 8L3 11L6 8H0Z" fill="#677F8E" />
                    <path d="M6 4L3 1L0 4L6 4Z" fill="#677F8E" />
                  </g>
                  <defs>
                    <clipPath id="clip0_4623_9379">
                      <rect width="6" height="12" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </th>
              <th scope="col">
                Trailing Cond.
                <svg
                  width="6"
                  height="12"
                  viewBox="0 0 6 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_4623_9379)">
                    <path d="M0 8L3 11L6 8H0Z" fill="#677F8E" />
                    <path d="M6 4L3 1L0 4L6 4Z" fill="#677F8E" />
                  </g>
                  <defs>
                    <clipPath id="clip0_4623_9379">
                      <rect width="6" height="12" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </th>
              <th scope="col">
                Start Price (THB)
                <svg
                  width="6"
                  height="12"
                  viewBox="0 0 6 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_4623_9379)">
                    <path d="M0 8L3 11L6 8H0Z" fill="#677F8E" />
                    <path d="M6 4L3 1L0 4L6 4Z" fill="#677F8E" />
                  </g>
                  <defs>
                    <clipPath id="clip0_4623_9379">
                      <rect width="6" height="12" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </th>
              <th scope="col">
                Expired Date
                <svg
                  width="6"
                  height="12"
                  viewBox="0 0 6 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_4623_9379)">
                    <path d="M0 8L3 11L6 8H0Z" fill="#677F8E" />
                    <path d="M6 4L3 1L0 4L6 4Z" fill="#677F8E" />
                  </g>
                  <defs>
                    <clipPath id="clip0_4623_9379">
                      <rect width="6" height="12" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </th>
              <th scope="col">
                SL Conditon
                <svg
                  width="6"
                  height="12"
                  viewBox="0 0 6 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_4623_9379)">
                    <path d="M0 8L3 11L6 8H0Z" fill="#677F8E" />
                    <path d="M6 4L3 1L0 4L6 4Z" fill="#677F8E" />
                  </g>
                  <defs>
                    <clipPath id="clip0_4623_9379">
                      <rect width="6" height="12" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </th>
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
              <td>+5,000.00</td>
              <td>1,000,000.00</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>28/09/22 <span>20:53</span></td>
              <td class="green">B</td>
              <td>ETH</td>
              <td>Matched</td>
              <td>5.00</td>
              <td>9,038,938.56</td>
              <td>800.00</td>
              <td>50,000.98</td>
              <td>+5,000.00</td>
              <td>1,000,000.00</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>28/09/22 <span>20:53</span></td>
              <td class="red">B</td>
              <td>BTC</td>
              <td>Matched</td>
              <td>5.00</td>
              <td>9,038,938.56</td>
              <td>800.00</td>
              <td>50,000.98</td>
              <td>+5,000.00</td>
              <td>1,000,000.00</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>28/09/22 <span>20:53</span></td>
              <td class="green">B</td>
              <td>ETH</td>
              <td>Matched</td>
              <td>5.00</td>
              <td>9,038,938.56</td>
              <td>800.00</td>
              <td>50,000.98</td>
              <td>+5,000.00</td>
              <td>1,000,000.00</td>
              <td>-</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
export default {
  components: { DatePicker },
  data() {
    return {
      time3: null,
      active_tab: "Limit & Market Orders",
      activeBtn: "all",
    };
  },
};
</script>
<style scoped>
.order-history
{
  padding: 24px 25px 24px 26px !important;
}
.order-history table{
  border-spacing: 0px 24px;
  border-collapse: separate;
  margin-top: 0px;
}
.order-history table th:nth-child(1){
  padding-left: 0px !important;
}
.order-history table th
{
  text-align: left;
  padding: 0px;
}
.order-history table td{
  padding: 0px;
}
.order-history table td:nth-child(1){
  padding-left: 0px !important;
}
</style>
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
.mx-input-wrapper .mx-input {
  background-color: #222b2f !important;
  color: #d6dde1;
  border: 1px solid #222b2f;
  height: 40px;
}
.mx-input-wrapper .mx-input:hover {
  border: 1px solid #222b2f !important;
}
.mx-icon-calendar {
  color: #677f8e !important;
  padding-top: 12px;
}
.mx-icon-clear {
  color: #677f8e !important;
  padding-top: 12px;
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
  }
  .export-button {
    display: inline-block;
    button {
      width: 124px;
      height: 40px;
      color: #677f8e;
      border-radius: 4px;
      border: 1px solid #28363e;
      &:active{
        border: 1px solid white;
        color: white;
        background-color: #38454d;
      }
    }
    // button:hover {
    //   color: #d6dde1;
    //   border: 1px solid #d6dde1;
    // }
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
      svg {
        // margin-left: 4px;
      }
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
  .mx-input-wrapper .mx-input {
    margin-top: 15px;
    margin-left: 10px;
  }
}
</style>
