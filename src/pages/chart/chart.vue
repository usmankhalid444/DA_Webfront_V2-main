<template>
    <div>
        <iframe src="https://www.missionsoftwarethailand.com/stockchartxrtc/chart.aspx" style="width: 100vw;height: 85vh;"></iframe>
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