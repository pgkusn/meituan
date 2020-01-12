<template>
    <div id="app">
        <MyHeader :poi-info="poiInfo" v-if="poiInfo"></MyHeader>
        <MyNav></MyNav>
        <keep-alive>
            <router-view/>
        </keep-alive>
    </div>
</template>

<script>
import MyHeader from '@/components/MyHeader/MyHeader.vue';
import MyNav from '@/components/MyNav/MyNav.vue';
export default {
    components: {
        MyHeader,
        MyNav,
    },
    computed: {
        poiInfo() {
            return this.$store.state.goods && this.$store.state.goods.poi_info;
        }
    },
    created() {
        this.$store.dispatch('getGoods');
    },
}
</script>

<style lang="scss">
@import '~@/assets/reset';
html,
body {
    height: 100%;
}
#app {
    display: flex;
    flex-direction: column;
    height: 100%;
}
.container {
    padding: 0 10px;
}

// transition
.fade-enter-active,
.fade-leave-active {
    transition: opacity .5s;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
