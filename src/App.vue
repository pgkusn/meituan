<template>
    <div id="app">
        <MyHeader></MyHeader>
        <MyNav></MyNav>
        <router-view/>
    </div>
</template>

<script>
import MyHeader from '@/components/MyHeader.vue';
import MyNav from '@/components/MyNav.vue';
export default {
    components: {
        MyHeader,
        MyNav,
    }
}
</script>

<style lang="scss">
@import '~@/assets/sass/reset';
</style>
