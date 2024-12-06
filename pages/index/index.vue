<template>
	<view class="big_box">
		<view class="top_box">
			<image src="@/static/index/topImg.jpg" mode="aspectFill"
				style="width: 100%;height: 100%;position: absolute;"></image>
			<view class="top_boxsamll" :style="'top:'+top+'px'">
				<view class="top_box_flx">
					<view class="icon_img">
						<image src="@/static/index/diwei.png" mode="aspectFill"
							style="width: 32rpx;height: 32rpx;margin-top: 25rpx;"></image>
					</view>
					<view class="icon_text">重庆市</view>
					<view class="icon_img1">
						<u-icon name="arrow-right" size="20"></u-icon>
					</view>
				</view>
				<view class="top_title">
					<span>HI!</span>
					<span style="margin-left: 30rpx;">李南方</span>
				</view>
				<view class="top_ren" style="font-size:28rpx;">
					<view class="">您还未进行村民认证，<span style="color:#02A7F0;margin-left: 15rpx;">前去认证</span></view>
				</view>
				<view class="carouselBox">
					<swiper class="swiper" circular :indicator-dots="indicatorDots" :current="current" :autoplay="true"
						@change="changeCurrent">
						<swiper-item v-for="(item,i) in swpier" :key="i">
							<view class="swiper-item">
								<image class="picMain" :src="item.imgUrl" mode="aspectFill"></image>
							</view>
						</swiper-item>
					</swiper>
					<view class="indicator">
						<view class="dot" :class="{'active':i==current}" v-for="(item,i) in swpier.length"></view>
					</view>
				</view>
			</view>
		</view>
		<view class="" style="height: 120rpx;"></view>
		<view class="two_box">
			<image src="@/static/index/huizhong.png" @click="huodong" mode="aspectFill" class="two_beiImg"></image>
			<image src="@/static/index/jishi.png" mode="aspectFill" class="two_beiImg"></image>
		</view>

		<view>
			<view class="three_box">
				<view class="three_title">镇村风采</view>
				<view class="three_flx">
					<view>更多</view>
					<u-icon style="margin-top: 10rpx;" name="arrow-right" size="16"></u-icon>
				</view>
			</view>
			<view class="three_top">
				<view @click="cont=i" :class="cont==i ? 'three_topBox':'three_topBox1'" v-for="(item,i) in videoXuan">
					{{item}}
				</view>
			</view>
			<scroll-view scroll-x="true">
				<view class="video_box">
					<view class="videoBox">
						<image src="@/static/index/lubo.jpg" mode="aspectFill" class="videoImg"></image>
						<view class="bofang">
							<u-icon name="play-circle" color="#fff" size="28"></u-icon>
						</view>
						<view class="videotxxt">
							<view class="video_title">
								<view class="">重庆市 巫溪县尖山镇</view>
							</view>
							<view class="video_desc">一起来观看尖山镇的家乡美景</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
		<view>
			<view class="three_box">
				<view class="three_title">产品列表</view>
				<view class="three_flx">
					<view>更多</view>
					<u-icon style="margin-top: 10rpx;" name="arrow-right" size="16"></u-icon>
				</view>
			</view>
			<scroll-view scroll-x="true">
				<view class="product_box">
					<view class="product">
						<image src="@/static/index/lubo.jpg" mode="aspectFill" class="product_img"></image>
						<view class="product_txxt">
							<view class="product_title">
								<view class="">新鲜牛肉</view>
								<view class="icon_img1" style="margin-left: 10rpx;">
									<u-icon name="arrow-right" color="#333" size="15"></u-icon>
								</view>
							</view>
							<view class="product_desc">￥33/斤</view>
						</view>
						<view class="product_dibu">净重500g</view>
					</view>
				</view>
			</scroll-view>
		</view>
		<view class="jiaru">
			<image @click="toJiaru" src="@/static/index/jiaru.png" mode="aspectFill" class="jiaru_img"></image>
		</view>
		<view class="jiaru">
			<image src="@/static/index/qun.png" mode="aspectFill" class="jiaru_img"></image>
		</view>
		<view class="" style="height: 100rpx;"></view>
	</view>
</template>


<script>
	import {
		getWXStatusHeight
	} from '@/common/getWXStatusHeight.js'
	export default {
		data() {
			return {
				top: 0,
				indicatorDots: false,
				current: 0,
				videoXuan: ['镇宣传视频', '乐和宣传视频', '产教社模式宣传视频'],
				cont: 0,
				swpier: [{
						imgUrl: '../../static/index/lubo.jpg'
					},
					{
						imgUrl: '../../static/index/lubo.jpg'
					}
				]
			}
		},
		onLoad() {
			this.top = getWXStatusHeight().barTop
		},
		methods: {
			changeCurrent(e) {
				this.current = e.detail.current
			},
			toJiaru() {
				uni.navigateTo({
					url: '/subPackages/Join/Join'
				})
			},
			huodong() {
				uni.navigateTo({
					url: '/subPackages/Activity/Activity'
				})
			}
		}
	}
</script>


<style scoped lang="scss">
	.jiaru_img {
		width: 100%;
		height: 100%;
		border-radius: 16rpx;
		position: absolute;
	}

	.jiaru {
		width: 686rpx;
		height: 296rpx;
		border-radius: 16rpx;
		margin-left: 32rpx;
		margin-top: 25rpx;
		position: relative;
	}

	.product_dibu {
		margin-top: 10rpx;
		margin-left: 12rpx;
		font-size: 24rpx;
		color: #999999;
	}

	.product_desc {
		font-size: 24rpx;
		color: #EF2323;
	}

	.product_title {
		display: flex;
		align-items: center;
		font-size: 32rpx;
		font-weight: 600;
	}

	.product_txxt {
		width: 308rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 20rpx;
		margin-left: 12rpx;
	}

	.product_img {
		width: 308rpx;
		height: 180rpx;
		border-radius: 16rpx;
		margin-left: 12rpx;
		margin-top: 15rpx;
	}

	.product {
		width: 332rpx;
		height: 322rpx;
		border-radius: 16rpx;
		background-color: #fff;
	}

	.product_box {
		margin-top: 15rpx;
		width: 686rpx;
		height: 322rpx;
		margin-left: 32rpx;
		display: flex;
		align-items: center;
		padding-right: 20rpx;
	}

	.videotxxt {
		position: absolute;
		left: 5%;
		bottom: 5%;
	}

	.video_title {
		color: #fff;
		font-size: 24rpx;
	}

	.video_desc {
		margin-top: 15rpx;
		color: #fff;
		font-size: 28rpx;
	}

	.bofang {
		position: absolute;
		top: 40%;
		left: 42%;
	}

	.videoImg {
		width: 100%;
		height: 100%;
		border-radius: 16rpx;
		position: absolute;
	}

	.videoBox {
		width: 350rpx;
		height: 392rpx;
		border-radius: 16rpx;
		background-color: #007FE7;
		margin-right: 15rpx;
		position: relative;
	}

	.video_box {
		width: 686rpx;
		height: 450rpx;
		margin-left: 32rpx;
		display: flex;
		align-items: center;
		padding-right: 20rpx;
	}

	.three_topBox1 {
		padding: 12rpx 8rpx;
		border-radius: 8rpx;
		background-color: #EDEDED;
		color: #999999;
		margin-right: 15rpx;
	}

	.three_topBox {
		padding: 12rpx 8rpx;
		border-radius: 8rpx;
		background-color: #2869FE;
		color: #fff;
		margin-right: 15rpx;
	}

	.three_top {
		display: flex;
		align-items: center;
		margin-left: 32rpx;
		margin-top: 20rpx;
	}

	.three_flx {
		display: flex;
		font-size: 24rpx;
		color: #999999;
		align-items: center;
	}

	.three_box {
		width: 686rpx;
		margin-left: 32rpx;
		display: flex;
		justify-content: space-between;
		font-size: 32rpx;
		font-weight: 600;
		margin-top: 35rpx;
	}

	.two_beiImg {
		width: 332rpx;
		height: 180rpx;
		border-radius: 12rpx;
	}

	.two_box {
		display: flex;
		justify-content: space-between;
		width: 686rpx;
		margin-left: 32rpx;
	}

	.big_box {}

	.top_box {
		width: 750rpx;
		height: 612rpx;
		position: relative;
	}

	.top_box_flx {
		display: flex;
		align-items: center;
		line-height: 40px;
		width: 100%;
	}

	.icon_img {
		margin-right: 20rpx;
	}

	.icon_img1 {
		margin-left: 20rpx;
	}


	.top_title {
		font-size: 40rpx;
		font-weight: 600;
		position: absolute;
		margin-top: 30rpx;
	}

	.top_boxsamll {
		position: absolute;
		padding-left: 30rpx;
		width: 100%;
	}

	.top_ren {
		position: absolute;
		margin-top: 100rpx;
	}




	.carouselBox {
		width: 686rpx;
		height: 310rpx;
		border-radius: 16rpx;
		opacity: 0px;
		position: absolute;
		margin-top: 180rpx;

		.swiper {
			width: 686rpx;
			height: 310rpx;
			border-radius: 16rpx;

			.swiper-item {
				.picMain {
					width: 686rpx;
					height: 310rpx;
					z-index: 400;
					border-radius: 16rpx;
				}
			}
		}
	}

	.indicator {
		width: 100%;
		justify-content: center;
		display: flex;
		margin-top: 30rpx;

		.dot {
			width: 12rpx;
			height: 12rpx;
			background: #C9DAFB;
			border-radius: 50%;
			margin-right: 15rpx;

			&.active {
				animation: change 0.5s;
				animation-fill-mode: forwards;
				height: 12rpx;
				background: #007FE7;
				border-radius: 12rpx;
			}
		}

		@keyframes change {
			0% {
				width: 13rpx;
			}

			10% {
				width: 16rpx;
			}

			20% {
				width: 19rpx;
			}

			30% {
				width: 22rpx;
			}

			40% {
				width: 25rpx;
			}

			50% {
				width: 28rpx;
			}

			60% {
				width: 31rpx;
			}

			70% {
				width: 34rpx;
			}

			80% {
				width: 37rpx;
			}

			90% {
				width: 39rpx;
			}

			100% {
				width: 41rpx;
			}
		}
	}
</style>