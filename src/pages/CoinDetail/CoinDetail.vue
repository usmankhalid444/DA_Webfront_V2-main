<template>
  <div class="container-fluid">
    <!-- top bar section start -->
    <div class="row mt-3">
      <div class="col-11 col-md-4 col-lg-3 col-xl-2">
        <div class="position-relative search-container">
          <div>
            <span class="search-svg"
              ><svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z"
                  fill="#677F8E"
                />
              </svg>
            </span>
            <span class="coin-image">
              <img
                class="coin-img"
                src="../../assets/images/coin_32/btc.png"
                alt="coin-image"
              />
              <span class="btc-text">BTC /</span>
            </span>
            <input
              @focus="showSearchBox = true"
              @focusout="showSearchBox = false"
              class="ml-4 coins-search-input text-uppercase"
              type="text"
              placeholder="THB"
              maxlength="4"
            />
          </div>
          <div v-if="showSearchBox" class="searching-box">
            <p class="thai-font search-box-title">ค้นหาล่าสุด</p>
            <div class="grid">
              <div class="row mt-3 sb-row">
                <div class="col-5 col-lg-6">
                  <img
                    class="sb-coin-img d-inline"
                    src="../../assets/images/coin_32/btc.png"
                    alt="coin-image"
                  />
                  <span class="sb-pre-coin">BTC</span
                  ><span class="sb-finding-coin"> / THB</span>
                </div>
                <div class="col-7 col-lg-6">
                  <div class="row">
                    <div class="col-4 sb-amount">Vol. 89.5M</div>
                    <div class="col-4 sb-amount">Vol. 89.5M</div>
                    <div class="col-4 sb-increasing-trend">+3.78%</div>
                  </div>
                </div>
              </div>
              <div class="row mt-3 sb-row">
                <div class="col-5 col-lg-6">
                  <img
                    class="sb-coin-img d-inline"
                    src="../../assets/images/coin_32/btc.png"
                    alt="coin-image"
                  />
                  <span class="sb-pre-coin">BTC</span
                  ><span class="sb-finding-coin"> / THB</span>
                </div>
                <div class="col-7 col-lg-6">
                  <div class="row">
                    <div class="col-4 sb-amount">Vol. 89.5M</div>
                    <div class="col-4 sb-amount">Vol. 89.5M</div>
                    <div class="col-4 sb-increasing-trend">+3.78%</div>
                  </div>
                </div>
              </div>
              <div class="row mt-3 sb-row">
                <div class="col-5 col-lg-6">
                  <img
                    class="sb-coin-img d-inline"
                    src="../../assets/images/coin_32/btc.png"
                    alt="coin-image"
                  />
                  <span class="sb-pre-coin">BTC</span
                  ><span class="sb-finding-coin"> / THB</span>
                </div>
                <div class="col-7 col-lg-6">
                  <div class="row">
                    <div class="col-4 sb-amount">Vol. 89.5M</div>
                    <div class="col-4 sb-amount">Vol. 89.5M</div>
                    <div class="col-4 sb-increasing-trend">+3.78%</div>
                  </div>
                </div>
              </div>
              <div class="row mt-3 sb-row">
                <div class="col-5 col-lg-6">
                  <img
                    class="sb-coin-img d-inline"
                    src="../../assets/images/coin_32/btc.png"
                    alt="coin-image"
                  />
                  <span class="sb-pre-coin">BTC</span
                  ><span class="sb-finding-coin"> / THB</span>
                </div>
                <div class="col-7 col-lg-6">
                  <div class="row">
                    <div class="col-4 sb-amount">Vol. 89.5M</div>
                    <div class="col-4 sb-amount">Vol. 89.5M</div>
                    <div class="col-4 sb-increasing-trend">+3.78%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-8 col-lg-9 col-xl-10 my-auto trading-scores">
        <div class="live-amounts">
          <span class="live-amount-title">896,485.67</span>
          <span class="live-amount-value">(-4.26%)</span>
          <span class="title">24h High:</span>
          <span class="value">986,574.00</span>
          <span class="title">24h Low:</span>
          <span class="value">785,959.84</span>
          <span class="title">24h Volume (BTC):</span>
          <span class="value">4,532.98</span>
        </div>
        <div class="add-alert-buttons d-inline">
          <button>
            <svg
              width="20"
              height="19"
              viewBox="0 0 20 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 7.24L12.81 6.62L10 0L7.19 6.63L0 7.24L5.46 11.97L3.82 19L10 15.27L16.18 19L14.55 11.97L20 7.24ZM10 13.4L6.24 15.67L7.24 11.39L3.92 8.51L8.3 8.13L10 4.1L11.71 8.14L16.09 8.52L12.77 11.4L13.77 15.68L10 13.4Z"
              />
            </svg>
            Add Favorite
          </button>
          <button>
            <svg
              width="16"
              height="19"
              viewBox="0 0 16 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.34167 16.5083C6.34167 17.425 7.08333 18.1667 8 18.1667C8.91667 18.1667 9.65833 17.425 9.65833 16.5083H6.34167ZM8 4C10.3 4 12.1667 5.86667 12.1667 8.16667V14H3.83333V8.16667C3.83333 5.86667 5.7 4 8 4ZM8 0.25C7.30833 0.25 6.75 0.808333 6.75 1.5V2.475C4.13333 3.04167 2.16667 5.375 2.16667 8.16667V13.1667L0.5 14.8333V15.6667H15.5V14.8333L13.8333 13.1667V8.16667C13.8333 5.375 11.8667 3.04167 9.25 2.475V1.5C9.25 0.808333 8.69167 0.25 8 0.25Z"
              />
            </svg>
            Add Price Alert
          </button>
        </div>
      </div>
    </div>
    <!-- top bar section end -->
    <div class="row coin-detail-main-content mt-3">
      <div class="col-12 col-md-6 col-lg-7 col-xl-9">
        <div class="cd-main-chart mt-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni facere
          repellendus aliquid, tenetur impedit at soluta? Ratione maxime beatae
          qui quod odio fugit vero alias quasi animi labore. Saepe, doloremque!
          Recusandae voluptas voluptatum distinctio accusantium odio est itaque.
          Saepe perspiciatis fugiat facilis magni quod, quibusdam similique
          magnam animi aliquam nam neque placeat hic commodi quia sapiente
          libero. Natus, fugiat fugit! Ducimus ratione error tenetur modi animi
          id explicabo consectetur dignissimos iure sint, neque, nostrum eius,
          qui inventore officia reprehenderit illum libero excepturi doloremque
          magni aperiam reiciendis! Reiciendis qui suscipit porro? Vero a nobis
          sequi quidem accusantium. Incidunt explicabo sint debitis laborum.
          Adipisci harum quo sed repellat, eius eum molestiae aliquam sit hic
          recusandae quia enim iste maiores officia. Explicabo, voluptatem.
          Dolore laborum, saepe quo consectetur sequi eaque cum inventore
          praesentium rem sunt atque soluta iure, recusandae harum dolorem quod
          beatae nobis adipisci suscipit enim molestiae. Iusto sequi nobis culpa
          numquam? Unde porro quos, nulla doloremque distinctio accusantium ab
          dolor error natus quo reiciendis. Libero corrupti ullam dolor
          similique reprehenderit. Reiciendis dolorum fugiat quo inventore
          aspernatur a, qui ea. Amet, eius. Doloribus, perferendis alias,
          incidunt id tempora eligendi magni voluptas fuga obcaecati est ducimus
          vel et, ipsum iure laudantium cum nemo quia culpa. Quam deserunt ipsum
          cumque ad error, repellat eligendi. Ducimus aut perspiciatis quae
          vitae ratione optio illum doloribus vero aperiam necessitatibus enim
          at error suscipit cupiditate nam earum delectus, aliquam quibusdam
          voluptatum officia quaerat iure est non consequuntur! Nulla?
        </div>
        <div class="container below-chart-content">
          <div class="row mt-3 mb-3">
            <div class="col-12">
              <p class="heading">Bitcoin (BTC)</p>
              <div class="offer-buttons">
                <button class="green">ซื้อ</button>
                <button class="red">ขาย</button>
              </div>
            </div>
          </div>
          <div class="row th-instructions mt-3">
            <div class="col-12">
              <p>
                Bitcoin (BTC) คือ สกุลเงินดิจิทัลที่ถูกสร้างขึ้น
                เพื่อเป็นช่องทางในการ แลกเปลี่ยนแบบ Peer-to-Peer ผ่านระบบ
                Blockchain ที่เป็น เทคโนโลยีที่ใช้สำหรับ
                การตรวจสอบธุรกรรมที่เกิดขึ้นบน Bitcoin ทำให้มีความโปร่งใส
                และมีหัวใจหลักที่ การกระจายศูนย์ (Decentralized)
                ไม่ถูกควบคุมหรือผ่านตัวกลางเช่น รัฐบาล และธนาคาร
                ซึ่งธุรกรรมที่เกิด ขึ้นผ่าน Blockchain
                จะง่ายต่อการตรวจสอบและยากต่อการย้อนกลับ ดัดแปลง หรือทำลาย
              </p>
            </div>
          </div>
          <div class="row th-instructions mt-3">
            <div class="col-6">
              <p class="title">ข้อเด่น</p>
              <ul>
                <li>
                  Bitcoin เป็นสกุลเงินดิจิทัลอันดับ 1 ในตลาด Cryptocurrency
                  ปัจจุบัน
                </li>
                <li>
                  Bitcoin
                  เป็นเงินดิจิทัลเพียงชนิดเดียวที่มีความกระจายศูนย์ที่แท้จริง
                </li>
                <li>
                  Bitcoin มีการลดอัตราการสร้างทุก 4 ปีซึ่งจะทำให้เกิดความขาดแคลน
                  (Scarcity) และมีโอกาสทำให้มีมูลค่าเพิ่มขึ้นได้
                </li>
                <li>Bitcoin ยังไม่เคยประสบปัญหาความล้มเหลวของเครือข่าย</li>
              </ul>
            </div>
            <div class="col-6">
              <p class="title">ข้อด้อย</p>
              <ul>
                <li>ความล่าช้าในการทำธุรกรรม</li>
                <li>
                  ค่าธรรมเนียมในการโอนเงินค่อนข้างสูงเมื่อเทียบกับ Blockchain
                  อื่น
                </li>
                <li>มีค่าใช้จ่าย และพลังงานสูงในการดำเนินการเครือข่าย</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6 col-lg-5 col-xl-3 cd-rite-side">
        <p class="p-0 m-0 heading">Past Performance</p>
        <div class="row mt-2">
          <div class="col-5"></div>
          <div class="col-2 performance-title">Price</div>
          <div class="col-5 performance-title">Volume</div>
        </div>
        <div class="row mt-2">
          <div class="col-5 performance-title">Last 7 days</div>
          <div class="col-2 performance-value-negative">-37%</div>
          <div class="col-5 performance-value-positive">3.5M (+4.8%)</div>
        </div>
        <div class="row mt-2">
          <div class="col-5 performance-title">Last 30 days</div>
          <div class="col-2 performance-value-negative">-20%</div>
          <div class="col-5 performance-value-negative">3.5M (+4.8%)</div>
        </div>
        <div class="row mt-2">
          <div class="col-5 performance-title">Last 90 days</div>
          <div class="col-2 performance-value-negative">-20%</div>
          <div class="col-5 performance-value-negative">1.5M (-4.8%)</div>
        </div>
        <p class="p-0 mb-2 mt-3 heading">
          Market Status
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.5 13.3333H9.16667V11.6667H7.5V13.3333ZM8.33333 0C3.73333 0 0 3.73333 0 8.33333C0 12.9333 3.73333 16.6667 8.33333 16.6667C12.9333 16.6667 16.6667 12.9333 16.6667 8.33333C16.6667 3.73333 12.9333 0 8.33333 0ZM8.33333 15C4.65833 15 1.66667 12.0083 1.66667 8.33333C1.66667 4.65833 4.65833 1.66667 8.33333 1.66667C12.0083 1.66667 15 4.65833 15 8.33333C15 12.0083 12.0083 15 8.33333 15ZM8.33333 3.33333C6.49167 3.33333 5 4.825 5 6.66667H6.66667C6.66667 5.75 7.41667 5 8.33333 5C9.25 5 10 5.75 10 6.66667C10 8.33333 7.5 8.125 7.5 10.8333H9.16667C9.16667 8.95833 11.6667 8.75 11.6667 6.66667C11.6667 4.825 10.175 3.33333 8.33333 3.33333Z"
              fill="#677F8E"
            />
          </svg>
        </p>
        <div class="row mt-2">
          <div class="col-5 performance-title">Rank by Market Cap</div>
          <div class="col-7">#1</div>
        </div>
        <div class="row mt-2">
          <div class="col-5 performance-title">Market Cap (USD)</div>
          <div class="col-7">18.874 M (35% of all market)</div>
        </div>
        <div class="row mt-2">
          <div class="col-5 performance-title">Total Supply (BTC)</div>
          <div class="col-7">19.066 M</div>
        </div>
        <div class="row mt-2">
          <div class="col-5 performance-title">Max Supply</div>
          <div class="col-7">51,325.58</div>
        </div>
        <div class="row mt-2">
          <div class="col-5 performance-title">Website</div>
          <div class="col-7 performance-link">
            <a href="#">https://www.bitcoin.org/en</a>
          </div>
        </div>
        <p class="p-0 mb-2 mt-4 heading">
          Trend Signal
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.5 13.3333H9.16667V11.6667H7.5V13.3333ZM8.33333 0C3.73333 0 0 3.73333 0 8.33333C0 12.9333 3.73333 16.6667 8.33333 16.6667C12.9333 16.6667 16.6667 12.9333 16.6667 8.33333C16.6667 3.73333 12.9333 0 8.33333 0ZM8.33333 15C4.65833 15 1.66667 12.0083 1.66667 8.33333C1.66667 4.65833 4.65833 1.66667 8.33333 1.66667C12.0083 1.66667 15 4.65833 15 8.33333C15 12.0083 12.0083 15 8.33333 15ZM8.33333 3.33333C6.49167 3.33333 5 4.825 5 6.66667H6.66667C6.66667 5.75 7.41667 5 8.33333 5C9.25 5 10 5.75 10 6.66667C10 8.33333 7.5 8.125 7.5 10.8333H9.16667C9.16667 8.95833 11.6667 8.75 11.6667 6.66667C11.6667 4.825 10.175 3.33333 8.33333 3.33333Z"
              fill="#677F8E"
            />
          </svg>
        </p>
        <div class="row trading-signal">
          <div
            @click="trendSignal = '15m'"
            class="col-2 time"
            :class="trendSignal === '15m' ? 'ts-active-tab' : ''"
          >
            15m
          </div>
          <div
            @click="trendSignal = '30m'"
            class="col-2 time"
            :class="trendSignal === '30m' ? 'ts-active-tab' : ''"
          >
            30m
          </div>
          <div
            @click="trendSignal = '1hr'"
            class="col-2 time"
            :class="trendSignal === '1hr' ? 'ts-active-tab' : ''"
          >
            1hr
          </div>
          <div
            @click="trendSignal = '4hr'"
            class="col-2 time"
            :class="trendSignal === '4hr' ? 'ts-active-tab' : ''"
          >
            4hr
          </div>
          <div
            @click="trendSignal = '1d'"
            class="col-2 time"
            :class="trendSignal === '1d' ? 'ts-active-tab' : ''"
          >
            1d
          </div>
          <div @click="trendSignal = 'more'" class="col-2 time more-time">
            <select
              name="cars"
              id="cars"
              :class="trendSignal === 'more' ? 'ts-active-tab' : ''"
            >
              <option value="" selected disabled hidden>More</option>
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
            <span>
              <svg
                width="7"
                height="5"
                viewBox="0 0 7 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.8225 0.0107422L3.5 2.68241L6.1775 0.0107422L7 0.833242L3.5 4.33324L0 0.833242L0.8225 0.0107422Z"
                />
              </svg>
            </span>
          </div>
        </div>
        <div class="row cd-guage-chart">
          <highcharts class="highcharts" :options="guageOptions"></highcharts>
          <!-- <div class="options">
            <span class="strong-sell">Strong Sell</span>
            <span class="sell">Sell</span>

            <span class="buy">Buy</span>
            <span class="strong-buy">Strong Buy</span>
          </div> -->
        </div>
        <div class="row ts-info mb-5">
          <div class="col-5 title">Strong Trend</div>
          <div class="col-7 info-positive">+</div>
          <div class="col-5 title">Trend Ribbon</div>
          <div class="col-7 info-neutral">Neutral</div>
          <div class="col-5 title">MACD</div>
          <div class="col-7 info-positive">+</div>
          <div class="col-5 title">RSI</div>
          <div class="col-7 info-overbought">Overbought</div>
          <div class="col-5 title">EMA (5,20)</div>
          <div class="col-7 info-positive">+</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      trendSignal: "15m",
      showSearchBox: false,
      guageAttrs: {
        background: "red",
        p1: 100,
        p2: 110,
        p3: 120,
        p4: 130,
        p5: 140,
        p6: 150,
        high_low_value: 0,
      },
    };
  },
  computed: {
    guageOptions() {
      let options = {
        chart: {
          type: "gauge",
          plotBackgroundColor: null,
          plotBackgroundImage: null,
          plotBorderWidth: 0,
          plotShadow: false,
          backgroundColor: "transparent",
          height: 200,
        },
        responsive: {
          rules: [
            {
              condition: {
                maxWidth: 415,
              },
              chartOptions: {
                chart: {
                  height: 130,
                },
              },
            },
          ],
        },
        credits: {
          enabled: false,
        },
        title: {
          text: "",
        },

        pane: {
          startAngle: -90,
          endAngle: 90,
          background: [
            {
              backgroundColor: "transparent",
              borderWidth: 0,
            },
          ],
        },

        // the value axis
        yAxis: {
          min: parseInt(this.guageAttrs.p1),
          max: parseInt(this.guageAttrs.p6),
          tickInterval: 90000000000,
          tickWidth: 0,
          labels: {
            enabled: false,
          },
          title: {
            text: this.guageTitle,
          },
          plotBands: [
            {
              from: parseInt(this.guageAttrs.p1),
              to: parseInt(this.guageAttrs.p2),
              color: "#EB4751",
              innerRadius: "120%",
              outerRadius: "100%",
            },
            {
              from: parseInt(this.guageAttrs.p2),
              to: parseInt(this.guageAttrs.p3),
              color: "#DA868B",
              innerRadius: "120%",
              outerRadius: "100%",
            },
            {
              from: parseInt(this.guageAttrs.p3),
              to: parseInt(this.guageAttrs.p4),
              color: "#677F8E",
              innerRadius: "120%",
              outerRadius: "100%",
            },
            {
              from: parseInt(this.guageAttrs.p4),
              to: parseInt(this.guageAttrs.p5),
              color: "#A4DBB6",
              innerRadius: "120%",
              outerRadius: "100%",
            },
            {
              from: parseInt(this.guageAttrs.p5),
              to: parseInt(this.guageAttrs.p6),
              color: "#44A765",
              innerRadius: "120%",
              outerRadius: "100%",
            },
          ],
        },
        plotOptions: {
          gauge: {
            dataLabels: {
              enabled: false,
            },
            dial: {
              radius: "95%",
              backgroundColor: "#9BACB6",
            },
            pivot: {
              radius: 8,
              backgroundColor: "#9BACB6",
            },
          },
        },
        series: [
          {
            name: "price",
            data: [140],
            backgroundColor: "red",
          },
          {
            name: "price",
            data: [140],
          },
          {
            name: "price",
            data: [140],
          },
        ],
      };
      return options;
    },
  },
};
</script>
<style lang="scss" scoped>
.search-container {
  position: relative;
  width: 100%;
  margin-left: 7px;
  .searching-box {
    z-index: 1;
    position: absolute;
    width: 630px;
    margin-top: 5px;
    height: auto;
    // border: 1px solid blue;
    background-color: #1c262b;
    padding: 15px 20px;
    .search-box-title {
      font-size: 16px;
      font-weight: 700;
      margin: 0;
    }
    .sb-coin-img {
      width: 25px;
      margin-top: -4px;
    }
    .sb-pre-coin {
      font-size: 16px;
      color: #d6dde1;
      margin-left: 10px;
    }
    .sb-row {
      padding: 10px 0;
      &:hover {
        background-color: #28363e;
      }
    }
    .sb-amount {
      color: #d6dde1;
      font-size: 16px;
    }
    .sb-increasing-trend {
      color: #40994f;
      font-size: 16px;
    }
    .sb-finding-coin {
      font-size: 12px;
      color: #677f8e;
    }
  }

  .coins-search-input {
    background-color: #222b2f;
    color: white;
    width: 100%;
    font-size: 18px;
    font-weight: 600;
    padding-left: 90px;
    padding-top: 6.5px;
    padding-bottom: 6.5px;
    padding-right: 60px;
    background-color: #222b2f;
  }
  .coins-search-input::placeholder {
    color: #9bacb6;
  }
  .search-svg {
    position: absolute;
    right: 0;
    margin-right: 38px;
    margin-top: 10px;
  }
  .coin-image {
    position: absolute;
    font-size: 18px;
    left: 10px;
    top: 4.5px;
    pointer-events: none;
    .coin-img {
      width: 23px;
      pointer-events: none;
    }
    .btc-text {
      color: white;
      position: relative;
      top: 1.5px;
      margin-left: 7px;
      display: inline-block;
      pointer-events: none;
    }
  }
}
.cd-rite-side {
  border-left: 1px solid #28363e;
  padding-left: 25px;
  padding-top: 10px;
}
.trading-scores {
  .live-amount-title {
    color: #de2d40;
    font-size: 18px;
  }
  .live-amount-value {
    color: #de2d40;
    font-size: 14px;
    margin-left: 8px;
    margin-right: 16px;
  }
  .title {
    color: #9bacb6;
    font-size: 14px;
    margin-right: 8px;
  }
  .value {
    font-size: 14px;
    margin-right: 16px;
  }
}
.live-amounts {
  display: inline-block;
  margin: 8px 0;
}
.add-alert-buttons {
  float: right;

  button {
    padding: 10px 14px;
    color: #677f8e;
    border: 1px solid #677f8e;
    font-size: 14px;
    margin: 0 10px;
    svg {
      color: #677f8e;
      fill: currentColor;
      position: relative;
      left: -8px;
      top: -2px;
    }
  }
  button:hover {
    color: white;
    border: 1px solid white;
    svg {
      color: white;
    }
  }
}
.coin-detail-main-content {
  border-top: 1px solid #28363e;
  .performance-title {
    color: var(--sub-2);
  }
  .performance-value-positive {
    color: var(--green-positive);
  }
  .performance-value-negative {
    color: var(--red-negative);
  }
  .heading {
    font-size: 16px;
    svg {
      margin-left: 5px;
    }
  }
  .performance-link a {
    color: var(--orange-link);
    text-decoration: underline;
  }
  .trading-signal {
    text-align: center;
    border: 1px solid var(--ui-layer-2);
    width: 75%;
    border-radius: 4px;
    font-size: 12px;
    color: var(--sub-2);
    padding: 4px 2px;
    margin-left: 2px;
    .time {
      padding: 3px 0;
      border-radius: 2px;
      cursor: pointer;
      select {
        cursor: pointer;
        width: 100%;
        height: 100%;
        text-align: center;
        outline: none;
        border: none;
        color: var(--sub-2);
        option {
          color: var(--sub-2);
        }
      }

      & svg {
        fill: currentColor;
      }
    }
    .more-time {
      position: relative;
      & span {
        position: absolute;
        right: 0px;
        pointer-events: none;
      }
    }
    .more-time:hover select {
      color: white;
    }
    .time:hover {
      color: white;
      background-color: var(--ui-layer-2);
    }
    .ts-active-tab {
      color: white;
      background-color: var(--ui-layer-2);
    }
  }
  .cd-guage-chart {
    position: relative;
    margin-left: -135px;
    margin-top: 10px;
    margin-bottom: 30px;
    position: relative;
    .options {
      position: absolute;
      left: 130px;
      .strong-sell {
        color: #eb4751;
        font-size: 14px;
      }
      .sell {
        color: #da868b;
        font-size: 14px;
      }
      .neutural {
        color: #677f8e;
        font-size: 14px;
      }
      .buy {
        color: #a4dbb6;
        font-size: 14px;
      }
      .strong-buy {
        color: #44a765;
        font-size: 14px;
      }
    }
  }
}
.ts-info {
  margin-top: -120px;
  width: 80%;
  font-size: 14px;
  margin-left: 2px;
  .title {
    color: var(--sub-2);
    padding: 7px 0px;
    margin: 10px 0;
  }
  .info-positive {
    color: var(--green-positive);
    background-color: rgba(64, 153, 79, 0.08);
    padding: 7px 0px;
    text-align: center;
    margin: 10px 0;
  }
  .info-neutral {
    color: #8a9ca8;
    background-color: rgba(138, 156, 168, 0.08);
    padding: 7px 0px;
    text-align: center;
    margin: 10px 0;
  }
  .info-overbought {
    color: #de2d40;
    background-color: rgba(222, 45, 64, 0.08);
    padding: 7px 0px;
    text-align: center;
    margin: 10px 0;
  }
}
.below-chart-content {
  .heading {
    font-size: 24px;
    color: white;
    font-weight: 600;
    display: inline;
  }
  .offer-buttons {
    float: right;
    .green {
      color: white;
      background-color: #40994f;
      &:hover {
        background-color: var(--green-positiveHover);
      }
      width: 219px;
      padding: 8px 0;
      border-radius: 4px;
    }
    .red {
      background-color: #de2d40;
      &:hover {
        background-color: var(--red-negativeHover);
      }
      color: white;
      width: 219px;
      padding: 8px 0;
      border-radius: 4px;
      margin-left: 15px;
    }
  }
  .th-instructions {
    color: #9bacb6;
    font-family: sarabun;
    .title {
      color: white;
      font-size: 16px;
      font-weight: 600;
    }
    ul {
      list-style-type: disc;
      li {
        margin-top: 5px;
      }
    }
  }
}
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (max-width: 600px) {
  .search-container {
    // width: 70%;
    margin-bottom: 10px;
    .coins-search-input {
      width: 100%;
    }
    .searching-box {
      width: 350px;
    }
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (max-width: 768px) {
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (max-width: 1024px) {
  .add-alert-buttons {
    float: left;
  }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (max-width: 1200px) {
  .offer-buttons {
    .red,
    .green {
      width: 90px !important;
    }
  }
  .add-alert-buttons {
    margin-top: 10px;
    text-align: center;
    button {
      margin: 0 10px;
      padding: 8px 15px;
    }
  }
}
</style>
