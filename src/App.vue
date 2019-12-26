<template>
    <div id="app">
        <MyHeader :poi-info="poiInfo"></MyHeader>
        <MyNav></MyNav>
        <router-view/>
    </div>
</template>

<script>
import axios from 'axios';
import MyHeader from '@/components/MyHeader.vue';
import MyNav from '@/components/MyNav.vue';
export default {
    components: {
        MyHeader,
        MyNav,
    },
    data() {
        return {
            poiInfo: {},
        }
    },
    created() {
        axios.get('data/goods.json')
            .then(res => {
                if (res.data.code === 0) {
                    this.poiInfo = res.data.data.poi_info;
                }
            })
            .catch(err => console.error(err));
    },
}
</script>

<style lang="scss">
@import '~@/assets/sass/reset';
</style>
