<template>
  <div class="padding-table scroller">
    <table class="table ma-3" id="myTable">
      <thead v-for="(item, index) in TableHeader" :key="index">
        <!-- Heading Coin -->
        <th scope="col" class="textGreyDark" v-if="Showfavorite || ShowTreeMap">
          <div class="d-flex">
            <div class="Header-Name align-Icon-Heading">
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

        <!-- Heading CoinGain/Loss -->
        <th scope="col" class="textGreyDark" v-if="ShowGainLoss">
          <div class="d-flex">
            <div class="align-Icon-Heading">
              {{ item.headingCoin }}
            </div>
            <div @click="headGainLossDown = !headGainLossDown">
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
                  :class="{ yellow: !headGainLossDown }"
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
        <!-- End Heading CoinGain/Loss -->

        <!-- Hedaing Categories -->
        <th
          scope="col"
          class="textGreyDark"
          v-if="ShowCategories || ShowThemes || ShowAllCategoriesCurrency"
        >
          <div class="d-flex">
            <div class="align-Icon-Heading">{{ item.headingCategories }}</div>
            <div @click="headCategories = !headCategories">
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
                  :class="{ yellow: !headCategories }"
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
        <!-- End Hedaing Categories -->
        <!-- Heading Chart -->
        <th scope="col" class="align-Icon-Heading" v-if="Showfavorite">
          <div class="align-Icon-Heading" style="margin-bottom: 15px">
            {{ item.headingChart }}
          </div>
        </th>
        <!-- End Heading Chart -->
        <!-- Heading LastPrice -->
        <th
          scope="col"
          class="textGreyDark"
          v-if="Showfavorite || ShowTreeMap || ShowGainLoss"
        >
          <div class="d-flex justify-content-center">
            <div class="align-Icon-Heading">{{ item.headingLastPrice }}</div>
            <div @click="headCategories = !headCategories">
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
        <!-- Hedaing MarketCap -->
        <th
          scope="col"
          class="textGreyDark"
          v-if="ShowCategories || ShowThemes || ShowTreeMap"
        >
          <div class="d-flex justify-content-center">
            <div class="align-Icon-Heading">{{ item.headingMarketCap }}</div>
            <div @click="headMarketCapDown = !headMarketCapDown">
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
                  :class="{ yellow: !headMarketCapDown }"
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
        <!-- End Hedaing MarketCap -->
        <!-- Heading HourChange -->
        <th
          scope="col"
          class="textGreyDark"
          v-if="
            Showfavorite ||
            ShowCategories ||
            ShowThemes ||
            ShowTreeMap ||
            ShowGainLoss
          "
        >
          <div class="d-flex justify-content-center">
            <div class="align-Icon-Heading">{{ item.headingHourChange }}</div>
            <div @click="headHourChangeDown = !headHourChangeDown">
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
                  :class="{ yellow: !headHourChangeDown }"
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
        <!-- End Heading HourChange -->
        <!-- Heading Volume -->
        <th
          scope="col"
          class="textGreyDark"
          v-if="
            Showfavorite ||
            ShowCategories ||
            ShowThemes ||
            ShowTreeMap ||
            ShowAllCategoriesCurrency ||
            ShowGainLoss
          "
          
        >
          <div class="d-flex justify-content-center">
            <div class="align-Icon-Heading">{{ item.headingVolume }}</div>
            <div @click="headVolumeDown = !headVolumeDown">
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
                  :class="{ yellow: !headVolumeDown }"
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
        <!-- End Heading Volume -->
        <!-- Heading HourChange for nested table ShowAllCategoriesCurrency with three dropdown  -->
        <th
          scope="col"
          class="textGreyDark"
          v-if="ShowAllCategoriesCurrency"
        >
          <div class="d-flex justify-content-center">
            <div class="align-Icon-Heading">{{ item.headingHourChange }}</div>
            <div @click="headHourChangeDown = !headHourChangeDown">
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
                  :class="{ yellow: !headHourChangeDown }"
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
        <!-- End Heading HourChange -->
        <!-- Heading marketcap on end as on favorite tab -->
        <th
          scope="col"
          class="textGreyDark"
          v-if="Showfavorite || ShowGainLoss"
        >
          <div class="d-flex justify-content-center">
            <div class="align-Icon-Heading">{{ item.headingMarketCap }}</div>
            <div @click="headMarketCapFavDown = !headMarketCapFavDown">
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
                  :class="{ yellow: !headMarketCapFavDown }"
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
        <!-- End Heading marketcap on end as on favorite tab -->
        <!-- Heading marketcap on end as on nested tab ShowAllCategoriesCurrency -->
        <th
          scope="col"
          class="textGreyDark"
          v-if="ShowAllCategoriesCurrency"
        >
          <div class="d-flex justify-content-center">
            <div class="align-Icon-Heading">{{ item.headingMarketCapM }}</div>
            <div @click="headMarketCapFavDown = !headMarketCapFavDown">
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
                  :class="{ yellow: !headMarketCapFavDown }"
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
        <!-- End Heading marketcap on end as on nested tab ShowAllCategoriesCurrency-->
        <!-- Heading MarketCap Percentage -->
        <th
          scope="col"
          class="textGreyDark"
          v-if="ShowTreeMap || ShowAllCategoriesCurrency"
        >
          <div class="d-flex justify-content-center">
            <div class="align-Icon-Heading">
              {{ item.headingMarketCapPercentage }}
            </div>
            <div @click="headMarketCapPercDown = !headMarketCapPercDown">
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
                  :class="{ yellow: !headMarketCapPercDown }"
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
        <!--End Heading MarketCap Percentage -->
        <!-- Heading Description -->
        <th
          scope="col"
          class="textGreyDark-description"
          v-if="ShowCategories || ShowThemes || ShowAllCategoriesCurrency"
          style="
    padding-left: 16px;
"
        >
          <div class="d-flex" style="margin-bottom: 15px">
            <div class="align-Icon-Heading">{{ item.headingDescription }}</div>
          </div>
        </th>
        <!-- End Heading Description -->
      </thead>
      <tbody>
        <tr
          class="textDarkgrey-Border "
          v-for="(item, index) in TableData"
          :key="index"
        >
          <!-- {{ index }}: {{ item.lastPrice }} -->

          <!-- coin data without start in gainloss -->
          <td v-if="ShowGainLoss">
            <div class="container">
              <div class="row">
                <div class="col-2 p-0">
                  <!-- <b-img class="imageIcon-star" :src="item.StarIcon" fluid alt="#">
            </b-img> -->

                  <b-img
                    class="imageIcon-bitcoin"
                    :src="item.CoinImage"
                    fluid
                    alt="#"
                  >
                  </b-img>
                </div>
                <div class="col-3 p-0">
                  <span class="textGrey Coin-Symbol">
                    {{ item.Coinsybmol }}
                  </span>
                  <span class="textGreyDark-table"> / THB </span>
                </div>
                <div class="col p-0 ">
                  <span class="textGreyDark-table ms-2">
                    {{ item.CoinName }}
                  </span>
                </div>
              </div>
            </div>
          </td>
          <!-- End coin data without star in gainloss -->
          <!-- coin data with star in showfavorite and all coins -->
          <td v-if="Showfavorite || ShowTreeMap">
            <div class="container">
              <div class="row">
                <div class="col-3 pe-0">
                  <b-img
                    class="imageIcon-star"
                    :src="item.StarIcon"
                    fluid
                    alt="#"
                  >
                  </b-img>

                  <b-img
                    class="imageIcon-bitcoin"
                    :src="item.CoinImage"
                    fluid
                    alt="#"
                  >
                  </b-img>
                </div>
                <div class="col-3 p-0">
                  <span class="textGrey Coin-Symbol">
                    {{ item.Coinsybmol }}
                  </span>
                  <span class="textGreyDark-table"> / THB </span>
                </div>
                <div class="col p-0">
                  <span class="textGreyDark-table ms-2">
                    {{ item.CoinName }}
                  </span>
                </div>
              </div>
            </div>
          </td>
          <!-- End coin data with star in showfavorite and all coins -->
          <!-- Categories data with three image -->
          <td
            class="textGrey"
            v-if="ShowCategories || ShowThemes || ShowAllCategoriesCurrency"
            style="width: 30%"
          >
            <div class="image-wrapper d-flex">
              <b-img
                id="img1Table"
                class="imageBitCoinTable"
                :src="require('../../assets/images/favoriteTable/bitcoin.png')"
                fluid
                alt="#"
              >
              </b-img>
              <b-img
                id="img2Table"
                class="imageCoinTable"
                :src="require('../../assets/images/favoriteTable/BNB.png')"
                fluid
                alt="#"
              >
              </b-img>
              <b-img
                id="img3Table"
                class="imageCoinTable"
                :src="require('../../assets/images/favoriteTable/Ethereum.png')"
                fluid
                alt="#"
              >
              </b-img>
              <span class="textGrey mb-0" style="margin-left: 17px;">{{ item.Categories }}</span>
            </div>
          </td>
          <!-- End Categories data with three image -->
          <!-- Chart PLoting in table -->
          <td
            class="textGrey Graphalign"
            v-if="Showfavorite"
            style="width: 12%"
          >
            <div>
              <canvas
                v-bind:id="'favoriteGraph' + index"
                width="102"
                height="30"
              ></canvas>
            </div>
          </td>
          <!-- End Chart PLoting in table -->
          <!-- last price data -->
          <td
            class="textGrey text-center tableData-white"
            v-if="Showfavorite || ShowTreeMap || ShowGainLoss"
          >
            {{ item.lastPrice }}
          </td>
          <!-- End last price data -->
          <!-- marketCap data -->
          <td
            class="textGrey align-marketcap-data tableData-white"
            v-if="ShowCategories || ShowThemes || ShowTreeMap"
            style="width: 8%"
          >
            {{ item.marketCap }}
          </td>
          <!--End marketCap data -->
          <!-- hour change data -->
          <td
            class="textGreen"
            style="padding-left: 30px !important; width: 10%"
            v-if="
              Showfavorite ||
              ShowCategories ||
              ShowThemes ||
              ShowTreeMap ||
              ShowGainLoss
            "
          >
            {{ item.hourChange }}
          </td>
          <!--End hour change data -->
          <!-- Volume data -->
          <td
            class="textGrey text-center tableData-white"
            v-if="
              Showfavorite ||
              ShowCategories ||
              ShowThemes ||
              ShowTreeMap ||
              ShowAllCategoriesCurrency ||
              ShowGainLoss
            "
          >
            {{ item.volume }}
          </td>
          <!-- End Volume data -->
          <!-- hour change data -->
          <td
            class="textGreen"
            style="padding-left: 30px !important; width: 10%"
            v-if="ShowAllCategoriesCurrency"
          >
            {{ item.hourChange }}
          </td>
          <!--End hour change data -->
          <!-- marketCap data at end in show favorite tab -->
          <td
            class="textGrey align-marketcap-data tableData-white"
            v-if="Showfavorite || ShowGainLoss"
          >
            {{ item.marketCap }}
          </td>
          <!-- End marketCap data at end in show favorite tab -->
          <!-- Description data -->
          <td class="textGreyDark thaiLang" v-if="ShowCategories || ShowThemes" style="padding-left: 25px;">
            {{ item.Description }}
          </td>
          <!--End Description data -->
          
          <!-- marketCapM in nested ShowAllCategoriesCurrency data -->
          <td
            class="textGrey align-marketcap-data"
            v-if="ShowAllCategoriesCurrency"
            style="width: 10%;"
          >
            {{ item.marketCapM }}
          </td>
          <!-- End  marketCapM in nested ShowAllCategoriesCurrency data -->
          <!-- MarketCapPercentage data -->
          <td
            class="textGrey align-marketcap-data tableData-white"
            v-if="ShowTreeMap || ShowAllCategoriesCurrency"
            style="width: 10%;"
          >
            {{ item.MarketCapPercentage }}
          </td>
          <!-- End MarketCapPercentage data -->
          <!--Description ShowAllCategoriesCurrency data  -->
          <td class="textGreyDark thaiLang" v-if="ShowAllCategoriesCurrency"  style="padding-left: 25px;">
            {{ item.Description }}
          </td>
          <!--End Description ShowAllCategoriesCurrency data  -->
          <!-- buysell button -->
          <td
            v-if="Showfavorite || ShowTreeMap || ShowGainLoss"
            style="text-align: end; vertical-align: middle"
          >
            <span class="textYellow" @click="handleDetail">Detail</span>
            <span class="textSeprator mx-2">|</span>
            <span class="textYellow" @click="handleBuySell">BuySell</span>
          </td>
          <!-- End BuySell Button -->
          <!-- Detaiol Button -->
          <td
            v-if="ShowCategories || ShowThemes || ShowAllCategoriesCurrency"
            style="text-align: end; vertical-align: middle"
          >
            <span class="textYellow" @click="childMethod">Detail</span>
          </td>
          <!-- End Detaiol Button -->
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Chart from "chart.js";
import favoriteGraph from "./Graph-data.js";
export default {
  name: "favorite",
  Showfavorite: "",
  ShowThemes: "",
  props: [
    "TableHeader",
    "TableData",
    "Showfavorite",
    "ShowCategories",
    "ShowThemes",
    "ShowTreeMap",
    "ShowAllCategoriesCurrency",
    "ShowGainLoss",
  ],
  data() {
    return {
      headCoinDown: true,
      headGainLossDown: true,
      headCategories: true,
      headLastPriceDown: true,
      headMarketCapDown: true,
      headHourChangeDown: true,
      headVolumeDown: true,
      headMarketCapFavDown: true,
      headMarketCapPercDown: true,

      favoriteGraph: favoriteGraph,
      // child_msg: "message from child"
      child_msg: true,
    };
  },

  mounted() {
    let start = this.Showfavorite;
    let themeschart = this.ShowThemes;
    if (start == true || themeschart) {
      for (let i = 0; i < this.TableData.length; i++) {
        //   console.log("===length",this.TableData?.length)
        //   console.log("=== i",i)
        const ctx = document.getElementById(`favoriteGraph${i}`);
        new Chart(ctx, this.favoriteGraph);
      }
    }
  },
  methods: {
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
.thaiLang{
  font-family: "Sarabun"!important;
	    line-height: 24px;
}
.tableData-white{
  font-family: 'Roboto Flex';
	    font-weight: 400;
	    font-size: 16px;
	    line-height: 19px;
}
.yellow {
  color: #f38220;
}
.padding-table {
  padding: 0px 18px 0px 18px;
}
.imageIcon-Star {
  height: auto;
  max-width: 100%;
  padding-left: 6px;
  border-radius: 50%;
}
.imageIcon-bitcoin {
  height: auto;
  max-width: 30%;
  margin-left: 13px;
  margin-right: 18px;
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
  text-align: center;
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
  height: auto;
  width: 100%;
  max-width: 24px;
  max-height: 24px;
  border-radius: 50%;
  margin-bottom: 15px;
  top: 0px;
  border-left: 3px solid black;
}
.imageBitCoinTable {
  height: auto;
  width: 100%;
  max-width: 20px;
  border-radius: 50%;
  margin-bottom: 15px;
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
  padding-left: 40px;
}
.align-Icon-Heading {
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
  font-size: 16px;
  font-weight: 600;
}

.align-marketcap-data {
  // position: relative;
  // left: 12px;
  text-align: center;
}
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
