<template>
  <div
    class="padding-table"
    :class="
      current_page === 'categories' || current_page === 'theme'
        ? 'scroller'
        : ''
    "
  >
    <table
      class="table ma-3 table-responsive"
      :class="
        current_page === 'categories' || current_page === 'theme'
          ? 'category-theme-w-setting'
          : 'table-w-setting'
      "
      id="myTable"
    >
      <thead v-for="(item, index) in TableHeader" :key="index">
        <!-- Heading Coin -->
        <th scope="col" class="textGreyDark" v-if="Showfavorite || ShowTreeMap">
          <div class="d-flex px-0">
            <div
              class="align-Icon-Heading"
              :class="`${Showfavorite ? 'Header-Name' : ''}`"
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

        <!-- Heading CoinGain/Loss -->
        <th scope="col" class="textGreyDark" v-if="ShowGainLoss">
          <div class="d-flex px-0">
            <div class="px-0 align-Icon-Heading">{{ item.headingCoin }}</div>
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
          class="textGreyDark my-auto"
          v-if="ShowCategories || ShowThemes || ShowAllCategoriesCurrency"
        >
          <div class="d-flex px-0">
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
        <th scope="col" v-if="Showfavorite || ShowCategories">
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
          <div class="d-flex justify-content-left">
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
          <div class="d-flex justify-content-left">
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
          <div class="d-flex justify-content-left">
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
          <div class="d-flex justify-content-left">
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
        <th scope="col" class="textGreyDark" v-if="ShowAllCategoriesCurrency">
          <div class="d-flex justify-content-left">
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
          <div class="d-flex justify-content-left">
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
        <th scope="col" class="textGreyDark" v-if="ShowAllCategoriesCurrency">
          <div class="d-flex justify-content-left">
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
          <div class="d-flex justify-content-left">
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
        >
          <div class="d-flex justify-content-left" style="margin-bottom: 15px">
            <div class="align-Icon-Heading">{{ item.headingDescription }}</div>
          </div>
        </th>
        <!-- End Heading Description -->
      </thead>
      <tbody>
        <tr
          class="textDarkgrey-Border px-0 mx-2"
          v-for="(item, index) in TableData"
          :key="index"
        >
          <!-- {{ index }}: {{ item.lastPrice }} -->

          <!-- coin data without start in gainloss -->
          <td v-if="ShowGainLoss" class="px-0">
            <div class="d-flex flex-wrap px-0">
              <div class="icon-image">
                <b-img
                  class="imageIcon-bitcoin"
                  :src="item.CoinImage"
                  fluid
                  alt="#"
                >
                </b-img>
              </div>
              <div class="coin-symbol-container">
                <span class="coin-symbol"> {{ item.Coinsybmol }} </span>
                <span class="textGreyDark-table thai-font"> / THB </span>
              </div>
              <div class="">
                <span class="textGreyDark-table ms-2">
                  {{ item.CoinName }}
                </span>
              </div>
            </div>
          </td>
          <!-- End coin data without star in gainloss -->
          <!-- coin data with star in showfavorite and all coins -->

          <!-- End coin data without star in gainloss -->
          <!-- coin data with star in showfavorite and all coins -->
          <td v-if="Showfavorite || ShowTreeMap" class="px-0">
            <div class="d-flex flex-wrap px-0">
              <div class="">
                <div
                  :class="`${
                    item.StarIcon ? 'icon-image-with-star' : 'icon-image'
                  }`"
                >
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
                <span class="textGreyDark-table thai-font h-t"> / THB </span>
              </div>
              <div class="h-t">
                <span class="textGreyDark-table ms-2">
                  {{ item.CoinName }}
                </span>
              </div>
            </div>
          </td>
          <!-- End coin data with star in showfavorite and all coins -->
          <!-- Categories data with three image -->
          <td
            class="texdtGrey px-0"
            v-if="ShowCategories || ShowThemes || ShowAllCategoriesCurrency"
          >
            <div class="d-flex flex-wrap px-0">
              <div class="image-wrapper d-flex">
                <b-img
                  id="img1Table"
                  class="imageCoinTable"
                  :src="
                    require('../../assets/images/favoriteTable/bitcoin.png')
                  "
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
                  :src="
                    require('../../assets/images/favoriteTable/Ethereum.png')
                  "
                  fluid
                  alt="#"
                >
                </b-img>
              </div>

              <div class="">
                <span class="textGrey Coin-Symbol">{{ item.Categories }}</span>
              </div>
            </div>
          </td>
          <!-- End Categories data with three image -->
          <!-- Chart PLoting in table -->
          <td
            class="textGrey p-0 my-0"
            style="position: relative; width: 140px"
            v-if="Showfavorite || ShowCategories"
          >
            <div id="chart" style="position: absolute; top: -10px; left: -9px">
              <apexchart
                type="area"
                height="80"
                width="130"
                :options="chartOptions"
                :series="series"
              ></apexchart>
            </div>
          </td>
          <!-- End Chart PLoting in table -->
          <!-- last price data -->
          <td
            class="textGrey justify-content-left tableData-white"
            v-if="Showfavorite || ShowTreeMap || ShowGainLoss"
          >
            {{ item.lastPrice }}
          </td>
          <!-- End last price data -->
          <!-- marketCap data -->
          <td
            class="textGrey justify-content-left tableData-white"
            v-if="ShowCategories || ShowThemes || ShowTreeMap"
          >
            {{ item.marketCap }}
          </td>
          <!--End marketCap data -->
          <!-- hour change data -->
          <td
            class="textGreen justify-content-left tableData-white"
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
            class="textGrey text-left tableData-white"
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
          <td class="textGreen" v-if="ShowAllCategoriesCurrency">
            {{ item.hourChange }}
          </td>
          <!--End hour change data -->
          <!-- marketCap data at end in show favorite tab -->
          <td
            class="textGrey tableData-white"
            v-if="Showfavorite || ShowGainLoss"
          >
            {{ item.marketCap }}
          </td>
          <!-- End marketCap data at end in show favorite tab -->
          <!-- Description data -->
          <td class="textGreyDark thaiLang" v-if="ShowCategories || ShowThemes">
            {{ item.Description }}
          </td>
          <!--End Description data -->

          <!-- marketCapM in nested ShowAllCategoriesCurrency data -->
          <td class="textGrey" v-if="ShowAllCategoriesCurrency">
            {{ item.marketCapM }}
          </td>
          <!-- End  marketCapM in nested ShowAllCategoriesCurrency data -->
          <!-- MarketCapPercentage data -->
          <td
            class="textGrey tableData-white"
            v-if="ShowTreeMap || ShowAllCategoriesCurrency"
          >
            {{ item.MarketCapPercentage }}
          </td>
          <!-- End MarketCapPercentage data -->
          <!--Description ShowAllCategoriesCurrency data  -->
          <td class="textGreyDark thaiLang" v-if="ShowAllCategoriesCurrency">
            {{ item.Description }}
          </td>
          <!--End Description ShowAllCategoriesCurrency data  -->
          <!-- buysell button -->
          <td
            class="px-0"
            v-if="Showfavorite || ShowTreeMap || ShowGainLoss"
            style="text-align: end; vertical-align: middle"
          >
            <span class="textYellow" @click="handleDetail">Detail</span>
            <span class="textSeprator mx-2"></span>
            <span class="textYellow" @click="handleBuySell">Buy/Sell</span>
          </td>
          <!-- End BuySell Button -->
          <!-- Detaiol Button -->
          <td
            class="px-0"
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
// import Chart from "chart.js";
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
    "current_page",
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
      series: [
        {
          name: "STOCK ABC",
          data: [10, 20, 10, 25, 30],
        },
      ],
      chartOptions: {
        chart: {
          type: "area",
          height: 350,
          zoom: {
            enabled: false,
          },
          toolbar: {
            show: false,
          },
        },
        dataLabels: {
          enabled: false,
        },

        stroke: {
          curve: "straight",
        },
        colors: ["#40994F", "#40994F", "#40994F"],
        fill: {
          type: "gradient",
          gradient: {
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0.3,
            opacityTo: 0.05,
            stops: [50, 100, 100, 100],
          },
        },
        grid: {
          show: false, // you can either change hear to disable all grids
          xaxis: {
            lines: {
              show: false, //or just here to disable only x axis grids
            },
          },
          yaxis: {
            lines: {
              show: false, //or just here to disable only y axis
            },
          },
        },
        xaxis: {
          show: false,
          labels: {
            show: false,
          },
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
        },
        yaxis: {
          show: false,
          labels: {
            show: false,
          },
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
        },
        labels: [10, 11, 12, 13, 14],
        legend: {
          horizontalAlign: "left",
        },
        tooltip: {
          enabled: false,
        },
        stroke: {
          width: 1,
          curve: "straight",
        },
      },
    };
  },

  mounted() {
    let start = this.Showfavorite;
    let themeschart = this.ShowThemes;

    // if (start == true || themeschart) {
    //   for (let i = 0; i < this.TableData.length; i++) {
    //     //   console.log("===length",this.TableData?.length)
    //     //   console.log("=== i",i)
    //     const ctx = document.getElementById(`favoriteGraph${i}`);

    //     var ss = document.getElementById(`favoriteGraph${i}`).getContext("2d");

    //     /*** Gradient ***/
    //     var gradient = ss.createLinearGradient(0, 0, 0, 150);
    //     gradient.addColorStop(0, "green");
    //     gradient.addColorStop(0.27, "#141B1F");

    //     this.favoriteGraph.data.datasets.forEach((g) => {
    //       g.backgroundColor = gradient;
    //     });

    //     new Chart(ctx, this.favoriteGraph);
    //   }
    // }
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
.table > :not(caption) > * > * {
  padding: 22px 0;
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
  line-height: 18.75px;
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
  border-right: 2px solid;
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
  font-weight: 400;
}
.textGreyDark-description {
  color: #677f8e;
  vertical-align: middle;
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
.scroller {
  overflow: auto;
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

@media only screen and (max-width: 880px) {
  .table-w-setting {
    // width: 120%;
    margin: auto;
  }

  .h-t {
    display: none;
  }
  .coin-symbol-container {
    width: auto;
  }
  .scroller {
    // overflow: unset;
  }
}
@media only screen and (max-width: 1024px) {
  .category-theme-w-setting {
    width: 200%;
    margin: auto;
  }
}
/* width */
::-webkit-scrollbar {
  width: 5px;
  height: 5px;
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
