<template>
    <div class="shopcart">
        <div class="shopcart-wrapper">
            <div class="content-left">
				<div class="logo-wrapper" :class="{ highlight: selectFoods.length }">
					<span class="icon-shopping_cart logo" :class="{ highlight: selectFoods.length }"></span>
					<i class="num" v-show="totalCount">{{totalCount}}</i>
				</div>
				<div class="desc-wrapper">
					<p class="total-price" v-show="totalPrice">￥{{totalPrice}}</p>
					<p class="tip" :class="{ highlight: selectFoods.length }">另需{{poiInfo.shipping_fee_tip}}</p>
				</div>
			</div>

			<div class="content-right" :class="{ highlight: selectFoods.length }">
				{{selectFoods.length ? '去結算' : poiInfo.min_price_tip}}
			</div>

			<div class="shopcart-list">
				<div class="list-top">
					新用户立减17元,首次使用银行卡支付最高再减3元
				</div>
				<div class="list-header">
					<h3 class="title">1号口袋</h3>
					<div class="empty">
						<img src="./ash_bin.png" />
						<span>清空购物车</span>
					</div>
				</div>
				<div class="list-content" ref='listContent'>
					<ul>
						<li class="food-item">
							<div class="desc-wrapper">
								<div class="desc-left">
									<p class="name">脆香油条</p>
									<p class="unit">例</p>
									<p class="description"></p>
								</div>
								<div class="desc-right">
									<span class="price">￥5.5</span>
								</div>
							</div>
							<div class="cartcontrol-wrapper">
								<!-- <Cartcontrol :food='food'></Cartcontrol> -->
							</div>
						</li>
					</ul>
				</div>
				<div class="list-bottom"></div>
			</div>

            <!-- <div class="shopcart-mask"></div> -->
        </div>
    </div>
</template>

<script>
export default {
    name: 'Shopcart',
    props: {
        poiInfo: {
            type: Object,
            default: {}
        },
        selectFoods: {
            type: Array,
            default() {
                return [
                    {
                        count: 1,
                        min_price: 100
                    },
                    {
                        count: 2,
                        min_price: 200
                    },
                ]
            }
        },
    },
    computed: {
        totalCount() {
            return this.selectFoods.reduce((accu, current) => {
                return accu + current.count;
            }, 0);
        },
        totalPrice() {
            return this.selectFoods.reduce((accu, current) => {
                return accu + current.count * current.min_price;
            }, 0);
        },
    },
}
</script>

<style>
.shopcart-wrapper {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 99;
    display: flex;
    width: 100%;
    height: 51px;
    background: #514f4f;
}
.shopcart-wrapper.highlight {
    background: #2d2b2a;
}


.shopcart-wrapper .content-left {
    flex: 1;
}
.shopcart-wrapper .content-left .logo-wrapper {
    position: relative;
    top: -14px;
    left: 10px;
    float: left;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #666;
    text-align: center;
}
.shopcart-wrapper .content-left .logo-wrapper.highlight {
    background: #ffd161;
}
.shopcart-wrapper .content-left .logo-wrapper .logo {
    color: #c4c4c4;
    font-size: 28px;
    line-height: 50px;
}
.shopcart-wrapper .content-left .logo-wrapper .logo.highlight {
    color: #2d2b2a;
}
.shopcart-wrapper .content-left .logo-wrapper .num {
    position: absolute;
    top: 0;
    right: 0;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: red;
    color: white;
    font-size: 9px;
    line-height: 15px;
}
.shopcart-wrapper .content-left .desc-wrapper {
    float: left;
    margin-left: 13px;
}
.shopcart-wrapper .content-left .desc-wrapper .total-price {
    color: white;
    font-size: 18px;
    line-height: 33px;
}
.shopcart-wrapper .content-left .desc-wrapper .tip {
    color: #bab9b9;
    font-size: 12px;
    line-height: 51px;
}
.shopcart-wrapper .content-left .desc-wrapper .tip.highlight {
    line-height: 12px;
}


.shopcart-wrapper .content-right {
    flex: 0 0 110px;
    color: #bab9b9;
    text-align: center;
    font-weight: bold;
    font-size: 15px;
    line-height: 51px;
}
.shopcart-wrapper .content-right.highlight {
    background: #ffd161;
    color: #2d2b2a;
}




.shopcart-wrapper .shopcart-list {
    position: absolute;
    bottom: 51px;
    left: 0;
    z-index: -1;
    width: 100%;
}
.shopcart-wrapper .shopcart-list.show {
    transform: translateY(-100%);
}

.shopcart-wrapper .shopcart-list .list-top {
    height: 30px;
    background: #f3e6c6;
    color: #646158;
    text-align: center;
    font-size: 11px;
    line-height: 30px;
}

.shopcart-wrapper .shopcart-list .list-header {
    height: 30px;
    background: #f4f4f4;
}
.shopcart-wrapper .shopcart-list .list-header .title {
    float: left;
    padding-left: 6px;
    border-left: 4px solid #53c123;
    font-size: 12px;
    line-height: 30px;
}
.shopcart-wrapper .shopcart-list .list-header .empty {
    float: right;
    margin-right: 10px;
    font-size: 0;
    line-height: 30px;
}
.shopcart-wrapper .shopcart-list .list-header .empty img {
    margin-right: 9px;
    height: 14px;
    vertical-align: middle;
}
.shopcart-wrapper .shopcart-list .list-header .empty span {
    vertical-align: middle;
    font-size: 12px;
}

.shopcart-wrapper .shopcart-list .list-content {
    overflow: hidden;
    max-height: 360px;
    background: white;
}
.shopcart-wrapper .shopcart-list .list-content .food-item {
    padding: 12px 12px 10px 12px;
    height: 38px;
    border-bottom: 1px solid #f4f4f4;
}
.shopcart-wrapper .shopcart-list .list-content .food-item .desc-wrapper {
    float: left;
    width: 240px;
}
.shopcart-wrapper .shopcart-list .list-content .food-item .desc-wrapper .desc-left {
    float: left;
    width: 170px;
}
.shopcart-wrapper .shopcart-list .list-content .food-item .desc-wrapper .desc-left .name {
    display: -webkit-box;
    overflow: hidden;
    margin-bottom: 8px;
    height: 16px;
    font-size: 16px;
    /* 超出部分隐藏*/
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
}
.shopcart-wrapper .shopcart-list .list-content .food-item .desc-wrapper .desc-left .unit {
    color: #b4b4b4;
    font-size: 12px;
}
.shopcart-wrapper .shopcart-list .list-content .food-item .desc-wrapper .desc-left .description {
    /* 超出部分隐藏*/
    overflow: hidden;
    height: 12px;
    color: #b4b4b4;
    font-size: 12px;
}
.shopcart-wrapper .shopcart-list .list-content .food-item .desc-wrapper .desc-right {
    float: right;
    width: 70px;
    text-align: right;
}
.shopcart-wrapper .shopcart-list .list-content .food-item .desc-wrapper .desc-right .price {
    font-size: 12px;
    line-height: 38px;
}

.shopcart-wrapper .shopcart-list .list-content .food-item .cartcontrol-wrapper {
    float: right;
    margin-top: 6px;
}


.shopcart .shopcart-mask {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 98px;
    width: 100%;
    height: 100%;
    background: rgba(7,17,27,.6);
}
</style>