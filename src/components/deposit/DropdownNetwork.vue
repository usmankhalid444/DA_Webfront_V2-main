<template>
  <div class="menu-item" @click="isOpen = !isOpen">
   
    
      <svg viewBox="0 0 1030 638" width="10">
        <path
          d="M1017 68L541 626q-11 12-26 12t-26-12L13 68Q-3 49 6 24.5T39 0h952q24 0 33 24.5t-7 43.5z"
          fill="#FFF"
        ></path>
      </svg>
    

    <transition name="fade" appear>
      <div class="sub-menu" v-if="isOpen">
        <div v-for="(item, i) in items" :key="i" class="menu-item">
          <label @click="showOption(item.title)">{{ item.title }}</label>
          <label class="optionShow" v-if="item.title === 'Ronin'"
            >Suspend</label
          >
          <label class="optionCongest" v-if="item.title === 'Network A'"
            >Congest</label
          >
        </div>
      </div>
    </transition>
  </div>
</template>
  
<script>
export default {
  emits: ["set-network"],
  name: "DropdownNetwork",
  props: ["title", "items"],
  data() {
    return {
      isOpen: false,
      option: "",
    };
  },
  methods: {
    showOption(val) {
      this.option = val;
      this.$emit("set-network", this.option);
    },
  },
};
</script>
<style scoped>
.menu-item {
  display: flex;
  flex-direction: row;
  /* align-items: center; */
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 10px;
}

.menu-item svg {
  width: 10px;
  /* position: fixed; */
  margin-bottom: 10px;
  /* margin-left: 10px; */
  /* left: calc(30%); */
}

.optionCongest {
  color: #f8c417;
  text-decoration: none;
  margin-top: 20px;
  font-size: 14px;
}

.optionShow {
  color: #de2d40;
  text-decoration: none;
  margin-top: 20px;
  font-size: 14px;
}

label {
  color: #fff;
  text-decoration: none;
  margin-top: 20px;
  font-size: 14px;
}

.menu-item .sub-menu {
  position: absolute;
  background-color: #222b2f;
  color: #fff;
  margin-top: 16px;
  transform: translateX(-89%);
  width: 380px;
  border-radius: 0px 0px 6px 6px;
  padding: 10px 16px;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>