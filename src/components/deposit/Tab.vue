<template>
    <div class="tab-content" v-show="title == selectedTitle">
        <slot />
    </div>
</template>
 
   
<script>
import { inject } from 'vue'
export default {
    props: ['title'],
    setup() {
        const selectedTitle = inject('selectedTitle')
        return {
            selectedTitle,
        }
    },
}
</script>

<style>
.tab-content {
    min-height: 400px;
    padding: 20px;
    /* font-size: 16px; */
    border-radius: 5px;
    /* box-shadow: 0 3px 5px 5px rgb(0, 0, 0,0.05); */
}
</style>