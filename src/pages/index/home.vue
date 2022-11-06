<template>
    <div>
        <b-button @click="$bvModal.show('bv-modal-example')" >Open Modal</b-button>
        <modal-detail title="home"></modal-detail>
    </div>
</template>
<script>
import modalDetail from "../../components/Modal/modal-center.vue";
export default {
    components: {
        modalDetail
    }
}
</script>