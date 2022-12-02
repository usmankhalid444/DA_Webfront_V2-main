<template>
      <div class="padding-table scroller">
        <table class="table ma-3" id="myTable">
            <thead v-for="(item, index) in TableHeading" :key="index">
        <!-- Heading Coin -->
        <th scope="col" class="textGreyDark">
          <div class="d-flex px-0">
            <div
              class="align-Icon-Heading Header-Name"
            >
              {{ item.headingCoin }}
            </div>
            <div @click="headCoinDown = !headCoinDown">
              <div class="chevronUp" @click="sortTable(0)">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="8"
                  fill="currentColor"
                  class="bi bi-caret-up-fill innerChevronUp"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"
                  />
                </svg>
              </div>
              <div class="chevronDown" @click="sortTable(0)">
                <svg
                  :class="{ yellow: !headCoinDown }"
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="8"
                  fill="currentColor"
                  class="bi bi-caret-down-fill innerChevronDown"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </th>
        <!-- End Heading Coin -->
         <!-- Heading LastPrice -->
         <th
          scope="col"
          class="textGreyDark"
        >
          <div class="d-flex justify-content-left">
            <div class="align-Icon-Heading">{{ item.headingLastPrice }}</div>
            <div @click="(headLastPriceDown = !headLastPriceDown)">
              <div class="chevronUp" @click="sortTables(0)">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="8"
                  fill="currentColor"
                  class="bi bi-caret-up-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"
                  />
                </svg>
              </div>
              <div class="chevronDown" @click="sortTables(0)">
                <svg
                  :class="{ yellow: !headLastPriceDown }"
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="8"
                  fill="currentColor"
                  class="bi bi-caret-down-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </th>
        <!-- End Heading LastPrice -->

        <th
          scope="col"
          class="textGreyDark"
        >
          <div class="d-flex justify-content-left">
            <div class="align-Icon-Heading">{{ item.headingHourChange }}</div>
            <div @click="(headHourChangeDown = !headHourChangeDown)">
              <div class="chevronUp" @click="sortTables(0)">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="8"
                  fill="currentColor"
                  class="bi bi-caret-up-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"
                  />
                </svg>
              </div>
              <div class="chevronDown" @click="sortTables(0)">
                <svg
                  :class="{ yellow: !headHourChangeDown }"
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="8"
                  fill="currentColor"
                  class="bi bi-caret-down-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </th>

        <th
          scope="col"
          class="textGreyDark"
        >
          <div class="d-flex justify-content-left">
            <div class="align-Icon-Heading">{{ item.headingVolumeHour }}</div>
            <div @click="(headingVolumeHourDown = !headingVolumeHourDown)">
              <div class="chevronUp" @click="sortTables(0)">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="8"
                  fill="currentColor"
                  class="bi bi-caret-up-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"
                  />
                </svg>
              </div>
              <div class="chevronDown" @click="sortTables(0)">
                <svg
                  :class="{ yellow: !headingVolumeHourDown }"
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="8"
                  fill="currentColor"
                  class="bi bi-caret-down-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </th>
        <th
          scope="col"
          class="textGreyDark"
        >
          <div class="d-flex justify-content-left">
            <div class="align-Icon-Heading">{{ item.headingVolume }}</div>
            <div @click="(headingVolumeDown = !headingVolumeDown)">
              <div class="chevronUp" @click="sortTables(0)">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="8"
                  fill="currentColor"
                  class="bi bi-caret-up-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"
                  />
                </svg>
              </div>
              <div class="chevronDown" @click="sortTables(0)">
                <svg
                  :class="{ yellow: !headingVolumeDown }"
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="8"
                  fill="currentColor"
                  class="bi bi-caret-down-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </th>
        <th
          scope="col"
          class="textGreyDark"
        >
          <div class="d-flex justify-content-left">
            <div class="align-Icon-Heading">{{ item.headingVolumeUP }}</div>
            <div @click="(headingVolumeUpDown = !headingVolumeUpDown)">
              <div class="chevronUp" @click="sortTables(0)">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="8"
                  fill="currentColor"
                  class="bi bi-caret-up-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"
                  />
                </svg>
              </div>
              <div class="chevronDown" @click="sortTables(0)">
                <svg
                  :class="{ yellow: !headingVolumeUpDown }"
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="8"
                  fill="currentColor"
                  class="bi bi-caret-down-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </th>
        <th
          scope="col"
          class="textGreyDark"
        >
          <div class="d-flex justify-content-left">
            <div class="align-Icon-Heading">{{ item.headingUp }}</div>
            <div @click="(headingUpDown = !headingUpDown)">
              <div class="chevronUp" @click="sortTables(0)">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="8"
                  fill="currentColor"
                  class="bi bi-caret-up-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"
                  />
                </svg>
              </div>
              <div class="chevronDown" @click="sortTables(0)">
                <svg
                  :class="{ yellow: !headingUpDown }"
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="8"
                  fill="currentColor"
                  class="bi bi-caret-down-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </th>
        <th></th>
</thead>
 <tbody>
        <tr
          class="textDarkgrey-Border px-0 mx-2"
          v-for="(item, index) in TableDatas"
          :key="index"
        >
          <!-- {{ index }}: {{ item.lastPrice }} -->

          <!-- coin data without start in gainloss -->
          <td  class="px-0">
            <div class="d-flex flex-wrap px-0">
              <div class="">
                <div :class="`${item.StarIcon ? 'icon-image-with-star' : 'icon-image'}`">
                  <b-img
                    width="20"
                    v-if="item.StarIcon"
                    class="imageIcon-star"
                    :src="item.StarIcon"
                    fluid
                    alt="#"
                  >
                  </b-img>
                  <b-img
                    width="20"
                    class="imageIcon-bitcoin"
                    :src="item.CoinImage"
                    fluid
                    alt="#"
                  >
                  </b-img>
                </div>
              </div>
              <div class="coin-symbol-container">
                <span class="coin-symbol"> {{ item.Coinsybmol }} </span>
                <span class="textGreyDark-table"> / THB </span>
              </div>
              <div class="">
                <span class="textGreyDark-table ms-2">
                  {{ item.CoinName }}
                </span>
              </div>
            </div>
          </td>
          <td
            class="textGrey justify-content-left px-2 tableData-white" style="color:#4FA15D"
          >
            {{ item.lastPrice }}
          </td>
          <td
            class="textGrey justify-content-left px-2 tableData-white" style="color:#4FA15D"
          >
            {{ item.hourChange }}
          </td>
          <td
            class="textGrey justify-content-left px-2 tableData-white"
          >
            {{ item.hourVolume }}
          </td>
          <td
            class="textGrey justify-content-left px-2 tableData-white"
          >
            {{ item.volume }}
          </td>
          <td
            class="textGrey justify-content-left px-2 tableData-white"
          >
            {{ item.volumeUp }}
          </td>
          <td
            class="textGrey justify-content-left px-2 tableData-white" style="color:#4FA15D"
          >
            {{ item.volumepersent }}
          </td>
          <td
            class="px-0"
            style="text-align: end; vertical-align: middle"
          >
            <span class="textYellow">Detail</span>
            <span class="textSeprator mx-2">|</span>
            <span class="textYellow">Buy/Sell</span>
          </td>
        </tr>
        </tbody>
        </table>
    </div>
</template>
<script >
export default{
    name:'VolumeTable',
  data()
  {
    return{
      headCoinDown: true,
      headLastPriceDown: true,
      headHourChangeDown: true,
      headingVolumeHourDown: true,
      headingVolumeDown: true,
      headingVolumeUpDown:true,
      headingUpDown:true,
        TableHeading: [
        {
          headingCoin: "Coin :",
          headingLastPrice: "Last Price",
          headingHourChange: "%Change",
          headingVolumeHour:"Vol. (1 hour ago)",
          headingVolume: "Volume",
          headingVolumeUP:"Vol Up",
          headingUp:'%Vol Up',
        },
      ],
      TableDatas: [
        {
          StarIcon: require("../../assets/images/favoriteTable/star.png"),
          CoinImage: require("../../assets/images/favoriteTable/bitcoin.png"),
          Coinsybmol: "WBTC",
          CoinName: "Bitcoin",
          lastPrice: "98,500,000",
          hourChange: "+1.78%",
          hourVolume:'10.00',
          volume: "11.00",
          volumeUp: "11.00",
          volumepersent: "+10.00%",
        },
        {
          StarIcon: require("../../assets/images/favoriteTable/star.png"),
          CoinImage: require("../../assets/images/favoriteTable/bitcoin.png"),
          Coinsybmol: "WBTC",
          CoinName: "Bitcoin",
          lastPrice: "98,500,000",
          hourChange: "+1.78%",
          hourVolume:'10.00',
          volume: "11.00",
          volumeUp: "11.00",
          volumepersent: "+10.00%",
        },
        {
          StarIcon: require("../../assets/images/favoriteTable/star.png"),
          CoinImage: require("../../assets/images/favoriteTable/bitcoin.png"),
          Coinsybmol: "WBTC",
          CoinName: "Bitcoin",
          lastPrice: "98,500,000",
          hourChange: "+1.78%",
          hourVolume:'10.00',
          volume: "11.00",
          volumeUp: "11.00",
          volumepersent: "+10.00%",
        },
        {
          StarIcon: require("../../assets/images/favoriteTable/star.png"),
          CoinImage: require("../../assets/images/favoriteTable/bitcoin.png"),
          Coinsybmol: "WBTC",
          CoinName: "Bitcoin",
          lastPrice: "98,500,000",
          hourChange: "+1.78%",
          hourVolume:'10.00',
          volume: "11.00",
          volumeUp: "11.00",
          volumepersent: "+10.00%",
        },
      ],
    }
  },
  methods:{
    sortTable(n) {
      var table,
        rows,
        switching,
        i,
        x,
        y,
        shouldSwitch,
        dir,
        switchcount = 0;
      table = document.getElementById("myTable");
      switching = true;
      //Set the sorting direction to ascending:
      dir = "asc";
      /*Make a loop that will continue until
  no switching has been done:*/
      while (switching) {
        //start by saying: no switching is done:
        switching = false;
        rows = table.rows;
        /*Loop through all table rows (except the
    first, which contains table headers):*/
        for (i = 0; i < rows.length - 1; i++) {
          //start by saying there should be no switching:
          shouldSwitch = false;
          /*Get the two elements you want to compare,
      one from current row and one from the next:*/
          x = rows[i].getElementsByTagName("TD")[n];
          y = rows[i + 1].getElementsByTagName("TD")[n];
          /*check if the two rows should switch place,
      based on the direction, asc or desc:*/
          if (dir == "asc") {
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
              //if so, mark as a switch and break the loop:
              shouldSwitch = true;
              break;
            }
          } else if (dir == "desc") {
            if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
              //if so, mark as a switch and break the loop:
              shouldSwitch = true;
              break;
            }
          }
        }
        if (shouldSwitch) {
          /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
          rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
          switching = true;
          //Each time a switch is done, increase this count by 1:
          switchcount++;
        } else {
          /*If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again.*/
          if (switchcount == 0 && dir == "asc") {
            dir = "desc";
            switching = true;
          }
        }
      }
    },
    sortTables(x) {
      var table, rows, switching, i, x, y, shouldSwitch;
      table = document.getElementById("myTable");
      switching = true;
      /*Make a loop that will continue until
  no switching has been done:*/
      while (switching) {
        //start by saying: no switching is done:
        switching = false;
        rows = table.rows;
        /*Loop through all table rows (except the
    first, which contains table headers):*/
        for (i = 1; i < rows.length - 1; i++) {
          //start by saying there should be no switching:
          shouldSwitch = false;
          /*Get the two elements you want to compare,
      one from current row and one from the next:*/
          x = rows[i].getElementsByTagName("TD")[x];
          y = rows[i + 1].getElementsByTagName("TD")[x];
          //check if the two rows should switch place:
          if (Number(x.innerHTML) > Number(y.innerHTML)) {
            //if so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        }
        if (shouldSwitch) {
          /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
          rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
          switching = true;
        }
      }
    },
  }
}
</script>
<style lang="scss" scoped>
table thead th {
  // border: 1px solid red;
}
table tbody td {
  // border: 1px solid red;
}
.icon-image {
  width: 40px;
}
.icon-image-with-star {
  width: 60px;
  .imageIcon-star {
    width: 15px;
    margin-right: 10px;
  }
  .imageIcon-bitcoin {
    width: 30px;
  }
}
.coin-symbol-container {
  display: flex;
  width: 100px;
  padding: 0;
  .coin-symbol {
    align-items: center;
    text-align: center;
    margin-left: 5px;
    font-size: 16px;
    font-weight: 600;
    color: #d6dde1;
    vertical-align: middle;
    margin-right: 5px;
  }
  .coin-text {
    color: #677f8e;
    vertical-align: middle;
    font-size: 14px;
    font-family: "Sarabun";
    font-weight: 400;
    margin-left: 5px;
  }
}

.thaiLang {
  font-family: "Sarabun" !important;
  line-height: 24px;
}
.image-wrapper {
}

.tableData-white {
  font-family: "Roboto Flex";
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
}
.yellow {
  color: #f38220;
}
.padding-table {
  // padding: 0px 18px 0px 18px;
  padding: 0px 0px 0px 18px;
  margin-right: 18px;
}
.imageIcon-Star {
  height: auto;
  // max-width: 100%;
  // padding-left: 6px;
  border-radius: 50%;
}
.imageIcon-bitcoin {
  height: auto;
  max-width: 24px;
  // margin-left: 20px;
  margin-right: 5px;

  border-radius: 50%;
}
.imageIcon-bitcoin-gainloss {
  height: auto;
  max-width: 30%;
  // margin-left: 32px;
  margin-right: 18px;
  border-radius: 50%;
}
.textGreen {
  color: #40994f;

  vertical-align: middle;
  font-size: 16px;
}
.textYellow {
  color: #f38220;
  font-size: 16px;

  cursor: pointer;
}
.textYellow:hover {
  color: #d6dde1;
}
.textSeprator {
  color: #28363e;
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
  vertical-align: middle;
  font-size: 14px;
  font-family: "Sarabun";
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
.margin-top {
  margin-top: 3px;
}
.imageCoinTable {
  width: 23px;
  border-radius: 50%;
  height: 20px;
  top: 0px;
  border-left: 3px solid black;
}
.imageBitCoinTable {
  height: auto;
  width: 100%;
  max-width: 20px;
  border-radius: 50%;
  // margin-bottom: 15px;
  position: absolute;
  top: 0px;
}

#img1Table {
  position: relative;
  z-index: 10;
}
#img2Table {
  position: relative;
  z-index: 20;
  // right: 2%;
  right: 6px;
}
#img3Table {
  position: relative;
  z-index: 30;
  // right: 4%;
  right: 13px;
}
.Header-Name {
  // padding-left: 27px;
  padding-left: 20px;
}
.align-Icon-Heading {
  width: max-content;
  position: relative;
  bottom: 2px;
  font-size: 12px;
  font-weight: 400;
  color: #677f8e;
}
.chevronUp {
  position: relative;
  margin-top: -8px;
  left: 6px;
  cursor: pointer;
}
.chevronDown {
  cursor: pointer;
  position: relative;
  // left: -2px;
  left: 6px;
  bottom: 14px;
}
.Graphalign {
  position: relative;
  top: 5px;
  right: 40px;
}
.Coin-Symbol {
  align-items: center;
  text-align: center;
  margin-left: 5px;
  font-size: 16px;
  font-weight: 600;
}

.align-marketcap-data {
  // position: relative;
  // left: 12px;
  text-align: center;
}

.scroller:hover {
  // width: 300px;
  //height: 300px;
  // overflow-y: scroll;
  // scrollbar-color: rebeccapurple green;
  // scrollbar-width: thin;
}

// .scroller:hover{
//   // width: 300px;
//   height: 200px;
//   overflow-y: scroll;
//   // scrollbar-color: rebeccapurple green;
//   // scrollbar-width: thin;
// }

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