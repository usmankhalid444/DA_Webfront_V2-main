<template>
  <div class="tabs"> 
    <ul class="tabs_header">
      <li
        v-for="title in tabTitles"
        :key="title"
        :class="{ selected: title == selectedTitle }"
        @click="selectedTitle = title"
      >
        {{ title }}
        <hr v-if="title == selectedTitle" style="margin-top: 10px;border-color:#F38220;" />
      </li>
    </ul>
    <slot />
  </div>
</template>

<script>
import { ref, provide } from "vue";
export default {
  setup(props, { slots }) {
    const tabTitles = ref(slots.default().map((tab) => tab.props.title));
    const selectedTitle = ref(tabTitles.value[0]);

    provide("selectedTitle", selectedTitle);

    return {
      selectedTitle,
      tabTitles,
    };
  },
};
</script>

<style scoped>
.tabs {
  width: 616px;
  height: 458px;
  background-color: #192126;
  margin: 0 auto;
  border-radius: 8px;
  box-shadow: 0 3px 5px 5px rgb(0, 0, 0, 0.05);
}

.tabs_header {
  list-style: none;
  padding: 0;
  display: flex;
}

/* .tabs_header li.active,
.tabs_header li:hover { */
/* border-width: 2px; */
/* background-color: #444; */
/* border-color: orange; */
/* } */

.tabs_header li {
  width: 140px;
  border-width: 1px;
  text-align: center;
  padding: 10px 20px;
  margin-right: 10px;
  margin-top: 10px;
  color: #677f8e;
  font-size: 14px;
  /* font-family: 'Roboto Flex'; */
  border-radius: 5px;

  cursor: pointer;
  transition: 0.4s all ease-out;
}

.tabs_header li.selected {
  /* background-color: #0984e3; */
  color: white;
  border-color: #F38220;
}
</style>