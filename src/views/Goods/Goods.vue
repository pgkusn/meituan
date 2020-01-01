<template>
    <div class="goods">
        <div class="menu"></div>
        <div class="foods"></div>
    </div>
</template>

<script>
export default {
    name: 'goods',
    computed: {
        container() {
            return this.$store.state.goods && this.$store.state.goods.container_operation_source;
        },
        goods() {
            return this.$store.state.goods && this.$store.state.goods.food_spu_tags;
        }
    },
}
</script>

<style lang="scss" scoped>
.goods {
    display: flex;
    flex: auto;
    padding-bottom: 51px;
}
.menu {
    flex: none;
    width: 85px;
    background-color: #faa;
}
.foods {
    flex: auto;
    background-color: #aaf;
}
</style>