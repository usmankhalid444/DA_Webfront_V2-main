<template>
    <div>
        <h1>chart</h1>
    </div>
</template>
<script>
export default {
    data() {
        return {
            defaultPath: "btc_usdt",
        }
    },
    created: function() {
        this.init();
    },
    methods: {
        init() {
            var params = this.$route.params.pair;
            if (params == undefined) {
                this.$router.push("/chart/" + this.defaultPath);
                params = this.defaultPath;
            }
        }
    }
}
</script>