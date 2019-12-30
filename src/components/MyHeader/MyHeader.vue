<template>
    <div class="header container" :style="{ backgroundImage: `url(${poiInfo.head_pic_url})` }">
        <div class="top">
            <span class="icon-arrow_lift top__back"></span>
            <form>
                <input type="text" placeholder="搜索店內商品">
            </form>
            <button class="top__spelling">拼單</button>
            <button class="top__more">
                <i v-for="n in 3" :key="n"></i>
            </button>
        </div>
        <div class="content">
            <img :srcset="`${poiInfo.pic_url} 2x`" alt="">
            <p>{{poiInfo.name}}</p>
            <a href>收藏</a>
        </div>
        <div class="bulletin">
            <img :srcset="`${poiInfo.discounts2[0].icon_url} 2x`" alt="">
            <p class="bulletin__info">{{poiInfo.discounts2[0].info}}</p>
            <a class="bulletin__detail" @click="showPopup = !showPopup">
                {{poiInfo.discounts2.length}}個活動
                <span class="icon-keyboard_arrow_right"></span>
            </a>
        </div>

        <!-- 公告詳情 -->
        <transition name="fade">
            <div class="bulletin-detail" v-show="showPopup">
                <div class="bulletin-detail__content" :style="{ backgroundImage: `url(${poiInfo.poi_back_pic_url})` }">
                    <img class="bulletin-detail__content--pic" :srcset="`${poiInfo.pic_url} 2x`" alt="">
                    <p class="bulletin-detail__content--name">{{poiInfo.name}}</p>
                    <ul class="bulletin-detail__content--tip">
                        <li>{{poiInfo.min_price_tip}}</li>
                        <li>{{poiInfo.shipping_fee_tip}}</li>
                        <li>{{poiInfo.delivery_time_tip}}</li>
                    </ul>
                    <p class="bulletin-detail__content--time">配送時間：{{poiInfo.shipping_time}}</p>
                    <div class="bulletin-detail__content--info">
                        <img :srcset="`${poiInfo.discounts2[0].icon_url} 2x`" alt="">
                        {{poiInfo.discounts2[0].info}}
                    </div>
                    <a href class="bulletin-detail__close" @click.prevent="showPopup = !showPopup">
                        <span class="icon-close"></span>
                    </a>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    props: {
        poiInfo: {
            type: Object
        }
    },
    data() {
        return {
            showPopup: false,
        }
    },
}
</script>

<style lang="scss" scoped>
@import url('~@/assets/icomoon/style.css');
.header {
    padding-top: 20px;
    height: 162px;
}
.top {
    display: flex;
    margin-bottom: 17px;
    align-items: center;
    &__back {
        margin-right: 20px;
        margin-left: 10px;
        color: #fff;
    }
    form {
        margin-right: 24px;
        flex-grow: 1;
    }
    input {
        padding-left: 3em;
        width: 100%;
        height: 30px;
        outline: none;
        border: none;
        border-radius: 15px;
        background: rgb(204, 204, 204) url('icon-search@2x.png') 1em 50%/15px 15px no-repeat;
    }
    &__spelling {
        border: 1px solid #fff;
        background-color: transparent;
        color: #fff;
    }
    &__more {
        display: flex;
        margin-left: 15px;
        padding: 0;
        border: none;
        background-color: transparent;
        i {
            width: 5px;
            height: 5px;
            border: .5px solid #fff;
            border-radius: 50%;
            + i {
                margin-left: 1px;
            }
        }
    }
}
.content {
    display: flex;
    align-items: center;
    img {
        margin-right: 17px;
    }
    p {
        color: #fff;
        font-weight: bold;
        font-size: 18px;
        flex-grow: 1;
    }
    a {
        display: flex;
        flex-direction: column;
        color: #fff;
        align-items: center;
        &::before {
            margin-bottom: 5px;
            width: 28px;
            height: 28px;
            background: url('icon-star.png') 0/contain;
            content: '';
        }
    }
}
.bulletin {
    display: flex;
    padding: 10px 0;
    color: #fff;
    font-size: 12px;
    align-items: center;
    img {
        margin-right: .5em;
    }
    &__info {
        flex-grow: 1;
    }
}
.bulletin-detail {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 2;
    background-color: rgba(98, 98, 98, .8);
    &__content {
        position: absolute;
        top: 43px;
        right: 20px;
        left: 20px;
        display: flex;
        flex-direction: column;
        padding-top: 40px;
        height: 500px;
        border-radius: 10px;
        align-items: center;
        &--pic {
            margin-bottom: 13px;
        }
        &--name {
            margin-bottom: 6px;
            color: #fff;
            font-size: 15px;
        }
        &--tip {
            display: flex;
            margin-bottom: 13px;
            color: #bababc;
            font-size: 12px;
            li + li {
                margin-left: 7px;
                padding-left: 7px;
                border-left: 1px solid #bababc;
            }
        }
        &--time {
            color: #bababc;
            font-size: 12px;
        }
        &--info {
            display: flex;
            margin-top: 20px;
            padding-top: 20px;
            border-top: 1px solid #bababc;
            color: #bababc;
            font-size: 12px;
            align-items: center;
            img {
                margin-right: 10px;
            }
        }
    }
    &__close {
        position: absolute;
        bottom: -60px;
        left: 50%;
        width: 40px;
        height: 40px;
        border: 1px solid rgba(140, 140, 140, .9);
        border-radius: 50%;
        background-color: rgba(118, 118, 118, .7);
        text-align: center;
        transform: translateX(-50%);
        span {
            color: #fff;
            line-height: 40px;
        }
    }
}
</style>