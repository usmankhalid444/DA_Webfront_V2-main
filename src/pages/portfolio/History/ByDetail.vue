<template>
  <div class="wrapper">
    <div class="row mb-3">
      <div class="d-flex justify-content-between">
        <div class="search-datePicker d-flex">
          <form
            class="
              navbar-search navbar-search-dark
              form-inline
              mr-3
              ml-lg-auto
              mt-3
            "
          >
            <div class="mb-0 form-group FDASearch">
              <fieldset class="field-container">
                <div class="icons-container">
                  <div class="icon-search"></div>
                </div>
                <input type="text" placeholder="ค้นหาเหรียญ" class="field" />
              </fieldset>
            </div>
          </form>

          <div class="date-picker-container">
            <date-picker v-model="time3" range lang="eng" :title-format='format'></date-picker>
          </div>
        </div>
        <div class="mt-3">
          <button type="button" class="btn  exportExcel">
            Export to Excel
          </button>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <Dynamic-Table
          :TableHeader="TableHeading"
          :TableData="TableDatas"
          :mycoins="true"
        ></Dynamic-Table>
      </div>
    </div>
  </div>
</template>

<script>
import Table from "./TableByDetail.vue";
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";

export default {
  name: "ByDetail",
  components: {
    "Dynamic-Table": Table,
    DatePicker,
  },
  data: function () {
    return {
      time3: null,
      format: 'dd-MMM-yyyy',

      TableHeading: [
        {
          Date: "Date",
          Coin: "Coin",
          BS: "B/S",
          Actual: "Actual",
          AvrgCost: "Avg. Cost",
          Total: "Total",
          ProfitLoss: "Profit/Loss",
        },
      ],
      TableDatas: [
        {
          Date: "25/09/22 ",
          Time: "19:53",
          CoinSymbol: "BTC",
          BGreen: "B",
          SRed: "S",
          ActualValue: "0.0563",
          AvrgCostValue: "70,723.16",
          TotalValue: "1,000,000.00",
          ProfitLossValue: "+200,000.00",
          ProfitLossPercentage: "(20.00%)",
        },
        {
          Date: "25/09/22 ",
          Time: "19:53",
          CoinSymbol: "BTC",
          BGreen: "B",
          SRed: "S",
          ActualValue: "0.0563",
          AvrgCostValue: "70,723.16",
          TotalValue: "1,000,000.00",
          ProfitLossValue: "+200,000.00",
          ProfitLossPercentage: "(20.00%)",
        },
        {
          Date: "25/09/22 ",
          Time: "19:53",
          CoinSymbol: "BTC",
          BGreen: "B",
          SRed: "S",
          ActualValue: "0.0563",
          AvrgCostValue: "70,723.16",
          TotalValue: "1,000,000.00",
          ProfitLossValue: "+200,000.00",
          ProfitLossPercentage: "(20.00%)",
        },
        {
          Date: "25/09/22 ",
          Time: "19:53",
          CoinSymbol: "BTC",
          BGreen: "B",
          SRed: "S",
          ActualValue: "0.0563",
          AvrgCostValue: "70,723.16",
          TotalValue: "1,000,000.00",
          ProfitLossValue: "+200,000.00",
          ProfitLossPercentage: "(20.00%)",
        },
        {
          Date: "25/09/22 ",
          Time: "19:53",
          CoinSymbol: "BTC",
          BGreen: "B",
          SRed: "S",
          ActualValue: "0.0563",
          AvrgCostValue: "70,723.16",
          TotalValue: "1,000,000.00",
          ProfitLossValue: "+200,000.00",
          ProfitLossPercentage: "(20.00%)",
        },
        {
          Date: "25/09/22 ",
          Time: "19:53",
          CoinSymbol: "BTC",
          BGreen: "B",
          SRed: "S",
          ActualValue: "0.0563",
          AvrgCostValue: "70,723.16",
          TotalValue: "1,000,000.00",
          ProfitLossValue: "+200,000.00",
          ProfitLossPercentage: "(20.00%)",
        },
        {
          Date: "25/09/22 ",
          Time: "19:53",
          CoinSymbol: "BTC",
          BGreen: "B",
          SRed: "S",
          ActualValue: "0.0563",
          AvrgCostValue: "70,723.16",
          TotalValue: "1,000,000.00",
          ProfitLossValue: "+200,000.00",
          ProfitLossPercentage: "(20.00%)",
        },
        {
          Date: "25/09/22 ",
          Time: "19:53",
          CoinSymbol: "BTC",
          BGreen: "B",
          SRed: "S",
          ActualValue: "0.0563",
          AvrgCostValue: "70,723.16",
          TotalValue: "1,000,000.00",
          ProfitLossValue: "+200,000.00",
          ProfitLossPercentage: "(20.00%)",
        },
        {
          Date: "25/09/22 ",
          Time: "19:53",
          CoinSymbol: "BTC",
          BGreen: "B",
          SRed: "S",
          ActualValue: "0.0563",
          AvrgCostValue: "70,723.16",
          TotalValue: "1,000,000.00",
          ProfitLossValue: "+200,000.00",
          ProfitLossPercentage: "(20.00%)",
        },
      ],
    };
  },
  methods: {
    
  },
};
</script>

<style >
.field-container {
  position: relative;
  padding: 0;
  margin: 0;
  border: 0;
  width: 142px;
  height: 40px;
}

.icons-container {
  position: absolute;
  top: 8px;
  left: 8px;
  width: 35px;
  height: 35px;
  overflow: hidden;
}
.icon-search:after {
  content: url("@/assets/images/iconArrow/icon-search.png") !important;
}

input::placeholder {
  color: var(--sub-2) !important;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
}

.field {
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: var(--primary);
  border: 0;
  max-width: 142px;
  height: 40px;
  padding: 8px 40px;
  background-color: #222b2f;
  border-radius: 4px;
  box-shadow: 0px 8px 15px rgba(75, 72, 72, 0.1);
  transition: all 0.4s ease;
}
/* .field:focus {
  outline: none;
  box-shadow: 0px 9px 20px rgba(75, 72, 72, 0.3);
} */
.mx-input-wrapper .mx-input {
  background-color: #222b2f !important;
  color: #d6dde1;
  border: 1px solid #222b2f;
  margin-top: 15px;
  height: 40px;
  margin-left: 10px;
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
.mx-datepicker-range {
  width: 236px;
}
.exportExcel {
  font-weight: 400;
  font-size: 14px;
  color: #677f8e;
  border: 1px solid #28363E;
}
.date-picker-container .mx-datepicker-range {
  /* width: 177px; */
}
</style>
