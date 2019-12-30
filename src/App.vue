<template>
    <div id="app">
        <MyHeader :poi-info="poiInfo" v-if="poiInfo"></MyHeader>
        <MyNav></MyNav>
        <router-view/>
    </div>
</template>

<script>
import axios from 'axios';
import MyHeader from '@/components/MyHeader/MyHeader.vue';
import MyNav from '@/components/MyNav/MyNav.vue';
export default {
    components: {
        MyHeader,
        MyNav,
    },
    data() {
        return {
            poiInfo: null,
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
@import '~@/assets/reset';
.container {
    padding: 0 10px;
}

// transition
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
