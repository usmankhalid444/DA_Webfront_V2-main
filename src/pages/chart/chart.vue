<template>
    <div>
        <iframe src="http://27.254.47.24/libchart/chart?symbol=BTC%2FTHB" style="width: 100vw;height: 85vh;"></iframe>
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