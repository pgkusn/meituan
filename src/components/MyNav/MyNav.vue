<template>
    <div class="nav">
        <router-link to="/">點菜</router-link>
        <router-link to="/ratings">評價</router-link>
        <router-link to="/seller">商家</router-link>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.nav {
    display: flex;
    height: 40px;
    a {
        position: relative;
        color: #fb2;
        color: #666;
        text-align: center;
        font-size: 13px;
        line-height: 40px;
        flex-grow: 1;
        &.active {
            color: #fb2;
            &::after {
                position: absolute;
                bottom: 0;
                left: 50%;
                width: 2em;
                height: 2px;
                background-color: #fb2;
                content: '';
                transform: translateX(-50%);
            }
        }
    }
}
</style>