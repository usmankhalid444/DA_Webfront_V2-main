<template>
  <div id="app">
    <MainHeader v-if="$route.name != 'Login'"></MainHeader>
    <TradeBarHeader
      v-if="$route.name == 'Chart' || $route.name == 'ChartPair'"
    ></TradeBarHeader>
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from "vue";
import MainHeader from "./components/header/MainHeader.vue";
import TradeBarHeader from "./components/header/TradeBarHeader.vue";

export default Vue.extend({
  components: { MainHeader, TradeBarHeader },
});
</script>

<style>
#app {
  font-family: "Roboto Flex";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* color: #2c3e50; */
}
/* input[type="checkbox"] {
  background: #222b2f !important;
  border: 1px solid #3c515d !important;
  border-radius: 2px !important;
  height: 17px !important;
  width: 17px !important;
}

input[type="checkbox"]:checked {
  background-color: #f38220 !important;
  border: 1px solid #3c515d !important;
} */

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
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
