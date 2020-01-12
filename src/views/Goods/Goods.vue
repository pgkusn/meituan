<template>
    <div class="goods" v-if="foods">
        <div class="menu" ref="menu">
            <ul>
                <li :class="{ active: currentIndex === 0 }" @click="selectMenu(0)">
                    <p><img :src="top.tag_icon" v-if="top.tag_icon">{{top.tag_name}}</p>
                </li>
                <li :class="{ active: currentIndex === idx + 1 }" v-for="(item, idx) in foods" :key="item.name" @click="selectMenu(idx + 1)">
                    <p><img :src="item.icon" v-if="item.icon">{{item.name}}</p>
                </li>
            </ul>
        </div>
        <div class="foods" ref="foods">
            <ul>
                <li class="foods__top-list js-list-hook">
                    <div v-for="item in top.operation_source_list" :key="item.pic_url">
                        <img :src="item.pic_url">
                    </div>
                </li>
                <li class="foods__food-list js-list-hook" v-for="item in foods" :key="item.name">
                    <h3 class="foods__food-list--title">{{item.name}}</h3>
                    <ul>
                        <li class="foods__food-list--item" v-for="spu in item.spus" :key="spu.name">
                            <div class="icon" :style="{ backgroundImage: `url(${spu.picture})` }"></div>
                            <h3>{{spu.name}}</h3>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <Shopcart :poi-info="poiInfo"></Shopcart>
    </div>
</template>

<script>
import BScroll from 'better-scroll';
import Shopcart from '@/components/Shopcart/Shopcart.vue';
export default {
    name: 'goods',
    data() {
        return {
            menuBScroll: null,
            foodsBScroll: null,
            listHeight: [0],
            scrollY: 0,
        }
    },
    components: {
        Shopcart,
    },
    computed: {
        goods() {
            return this.$store.state.goods;
        },
        poiInfo() {
            return this.$store.state.goods && this.$store.state.goods.poi_info;
        },
        top() {
            return this.$store.state.goods && this.$store.state.goods.container_operation_source;
        },
        foods() {
            return this.$store.state.goods && this.$store.state.goods.food_spu_tags;
        },
        topImgs() {
            return this.top.operation_source_list.map(value => value.pic_url);
        },
        currentIndex() {
            for (let i = 0; i < this.listHeight.length; i++) {
                if (this.scrollY >= this.listHeight[i] && this.scrollY < this.listHeight[i + 1]) {
                    return i;
                }
            }
        },
    },
    methods: {
        preloadImg(imgs) {
            return new Promise(resolve => {
                if (!imgs.length) resolve();
                let loaded = 0;
                for (let i = 0; i < imgs.length; i++) {
                    const element = imgs[i];
                    let img = document.createElement('IMG');
                    img.src = element;
                    img.onload = () => {
                        loaded++;
                        if (loaded === imgs.length) {
                            resolve();
                        }
                    };
                }
            });
        },
        initBScroll() {
            this.menuBScroll = new BScroll(this.$refs.menu, { click: true });
            this.foodsBScroll = new BScroll(this.$refs.foods, { probeType: 3 });
            this.foodsBScroll.on('scroll', pos => {
                this.scrollY = Math.abs(Math.round(pos.y));
            });
            // 原生JS
            // this.$refs.foods.addEventListener('scroll', () => {
            //     this.scrollY = event.target.scrollTop;
            // });
        },
        getListHeight() {
            let height = 0;
            document.querySelectorAll('.js-list-hook').forEach(el => {
                height += el.offsetHeight;
                this.listHeight.push(height);
            });
        },
        selectMenu(index) {
            this.foodsBScroll.scrollTo(0, -this.listHeight[index], 250);
            // 原生JS
            // this.$refs.foods.scroll({ top: this.listHeight[index], behavior: 'smooth' });
        }
    },
    watch: {
        goods(value) {
            this.$nextTick(() => {
                this.initBScroll();
                this.preloadImg(this.topImgs).then(() => this.getListHeight());
            });
        }
    },
}
</script>

<style lang="scss" scoped>
.goods {
    display: flex;
    flex: auto;
    overflow: hidden;
    padding-bottom: 51px;
}
.menu {
    flex: none;
    overflow: hidden;
    // overflow: auto; // 原生JS
    width: 85px;
    li {
        padding: 17px 11px;
        background-color: rgb(244, 244, 244);
        &.active {
            border-top-color: rgb(244, 244, 244);
            background-color: #fff;
            font-weight: bold;
        }
        + li {
            border-top: 1px solid rgb(228, 228, 228);
        }
    }
    p {
        display: -webkit-box;
        overflow: hidden;
        font-size: 13px;
        line-height: 1.3;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    img {
        margin-right: 6px;
        width: 15px;
    }
}
.foods {
    flex: auto;
    overflow: hidden;
    // overflow: auto; // 原生JS
    &__top-list {
        padding: 11px 11px 0 11px;
        border-bottom: 1px solid #e4e4e4;
        img {
            margin-bottom: 11px;
            width: 100%;
            border-radius: 5px;
        }
    }
    &__food-list {
        padding: 11px;
        &--title {
            margin-bottom: 12px;
            padding-left: 7px;
            height: 13px;
            background: url(btn_yellow_highlighted@2x.png) no-repeat left center;
            background-size: 2px 10px;
            font-size: 13px;
        }
        &--item {
            position: relative;
            display: flex;
            margin-bottom: 25px;
            height: 75px;
            align-items: center;
            > .icon {
                flex: 0 0 63px;
                margin-right: 11px;
                height: 75px;
                background-position: center;
                background-size: 120% 100%;
                background-repeat: no-repeat;
            }
        }
    }
}
</style>