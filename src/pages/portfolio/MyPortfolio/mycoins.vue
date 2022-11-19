<template>
  <div class="wrapper">
    <button @click="showModal = true">modal temp</button>
    <div class="row">
      <div class="col-5">
        <div id="chart" class="custom-charts">
          <div class="coin-allocation">Coin Allocation</div>
          <apexchart
            type="donut"
            width="400"
            :options="chartOptions"
            :series="series"
          ></apexchart>
        </div>
      </div>
      <div class="col-6">
        <div class="chart-values">
          <div class="ETH d-flex">
            <p class="coinvalue">120,089.00</p>
            <p class="ms-1 coinshortform">THB</p>
          </div>

          <div class="BTC d-flex">
            <p class="coinvalue">8,009.00</p>
            <p class="ms-1 coinshortform">THB</p>
          </div>

          <div class="THB d-flex">
            <p class="coinvalue">989.00</p>
            <p class="ms-1 coinshortform">THB</p>
          </div>

          <div class="DOGE d-flex">
            <p class="coinvalue">300.00</p>
            <p class="ms-1 coinshortform">THB</p>
          </div>

          <div class="Others d-flex">
            <p class="coinvalue">400.00</p>
            <p class="ms-1 coinshortform">THB</p>
          </div>
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
    <!-- modal box -->
    <div v-if="showModal">
      <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <div class="container">
                    <div
                      class="row"
                      style="padding-top: 5%; padding-bottom: 5%"
                    >
                      <div class="col-10">
                        <h5 class="modal-title text-center">Auto Mode</h5>
                      </div>
                      <div class="col">
                        <button
                          type="button"
                          class="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span
                            aria-hidden="true"
                            @click="showModal = false"
                            style="color: #677f8e; font-size: 24px"
                            >&times;</span
                          >
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="modal-body">
                  <div class="container">
                    <div class="row">
                      <div class="col">
                        <p class="text-start">
                          เพื่อให้คุณเทรด Crypto ได้สบายใจ แม้ไม่ได้อยู่เฝ้าจอ
                          ให้เราช่วยคุณตั้งขายกำไร และ ตัดขาดทุนอัตโนมัติ
                          ไว้ล่วงหน้า
                        </p>
                      </div>

                      <div class="user-man d-flex">
                        <p style="color: #f38220; margin-right: 10px">
                          อ่านคู่มือการใช้งาน
                        </p>
                        <p style="color: #677f8e; margin-right: 10px">หรือ</p>
                        <p style="color: #f38220">ดูวีดีโอสอนใช้งาน</p>
                      </div>

                      <div class="checkbox d-flex align-items-center">
                        <input
                          type="checkbox"
                          class="form-check-input shadow custom-checkbox"
                        />
                        <p class="ms-2 mb-0">ซ่อนเหรียญมูลค่าน้อย</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="Get-started d-grid gap-2 mb-4">
                  <button type="button" class="btn btn-primary">
                    เริ่มต้นใช้งาน
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
import Table from "../table/Table.vue";

export default {
  name: "mycoins",
  components: {
    apexchart: VueApexCharts,
    "Dynamic-Table": Table,
  },
  data: function () {
    return {
      showModal: false,
      series: [44, 20, 10, 30, 10],
      chartOptions: {
        labels: ["ETH", "BTC", "THB", "DOGE", "Others"],
        colors: ["#20A3FF", "#3FDE68", "#B554FF", "#F8C417", "grey"],
        chart: {
          type: "donut",
        },
        stroke: {
          show: false,
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
        legend: {
          position: "right",
          offsetY: 20,
          height: 230,
          itemMargin: {
            horizontal: 0,
            vertical: 8,
          },
        },
      },
      TableHeading: [
        {
          headingCoin: "Coin :",
          Unrealized: "Unrealized (Est.)",
          Actual: "Actual",
          AvrgCost: "Avg. Cost",
          lastPrice: "Last Price",
          Total: "Total",
          realized: "Realized (Today)",
        },
      ],
      TableDatas: [
        {
          Coinsybmol: "WBTC",
          CoinName: "Bitcoin",
          UnrealizedValue: "+29,775.29(+42.10%)",
          ActualValue: "1.00",
          AvrgCostValue: "70,723.16",
          lastPriceValue: "39,720.00",
          TotalValue: "1,000,000.00",
          realizedValue: "0.00 (0.00%)",
        },
        {
          Coinsybmol: "ETH",
          CoinName: "Ethereum",
          UnrealizedValue: "+29,775.29(+42.10%)",
          ActualValue: "2.00",
          AvrgCostValue: "71,723.16",
          lastPriceValue: "39,720.00",
          TotalValue: "1,000,000.00",
          realizedValue: "1.00 (0.00%)",
        },
        {
          Coinsybmol: "USDT",
          CoinName: "Tether",
          UnrealizedValue: "+29,775.29(+42.10%)",
          ActualValue: "3.00",
          AvrgCostValue: "72,723.16",
          lastPriceValue: "39,720.00",
          TotalValue: "1,000,000.00",
          realizedValue: "2.00 (0.00%)",
        },
        {
          Coinsybmol: "USDC",
          CoinName: "USD Coin",
          UnrealizedValue: "+29,775.29(+42.10%)",
          ActualValue: "4.00",
          AvrgCostValue: "73,723.16",
          lastPriceValue: "39,720.00",
          TotalValue: "1,000,000.00",
          realizedValue: "3.00 (0.00%)",
        },
        {
          Coinsybmol: "BNB",
          CoinName: "BNB",
          UnrealizedValue: "+29,775.29(+42.10%)",
          ActualValue: "5.00",
          AvrgCostValue: "74,723.16",
          lastPriceValue: "39,720.00",
          TotalValue: "1,000,000.00",
          realizedValue: "4.00 (0.00%)",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style scoped>
.wrapper {
  margin-top: 4%;
}
.light-grey {
  color: #d6dde1;
  font-size: 14px;
  font-family: "Roboto Flex";
}
.coinvalue {
  color: #ffff;
  font-size: 16px;
  font-family: "Roboto Flex";
  font-weight: 400;
}
.coinshortform {
  color: #677f8e;
  font-size: 16px;
  font-family: "Roboto Flex";
  font-weight: 400;
}
.chart-values {
  position: relative;
  top: 44px;
}
.chart-values p {
  margin-bottom: 8px;
}

/* modal */
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
.modal-dialog {
  background-color: #141b1f;
  max-width: 27%;
  border-radius: 8px;
}

.custom-checkbox {
  background: #222b2f;
  border: 1px solid #3c515d;
  border-radius: 2px;
  height: 17px;
  width: 17px;
}
.Get-started {
  margin: 20px;
}
.custom-charts {
  position: relative;
}
.coin-allocation {
  position: absolute;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #677f8e;
  top: 14px;
  right: calc(1.45rem + 1px);
}
</style>
