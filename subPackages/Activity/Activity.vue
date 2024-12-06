<template>
	<view>
		<view>
			<view class="three_box">
				<view class="three_flx">
					<view class="three_line"></view>
					<view class="three_title">党政动态</view>
				</view>
				<view class="three_flx">
					<view>更多</view>
					<u-icon style="margin-top: 10rpx;" name="arrow-right" size="16"></u-icon>
				</view>
			</view>
			<view class="box">
				<view v-for="(item,i) in 3">
					<view class="box_saml">
						<view class="box_samlOne">
							<view class="box_title text">来凤县残疾人联合会关于2024年11月第三批残疾人证的公示</view>
							<view class="box_desc text">为加强对残疾人证核发工作的监督，确保残疾人证的严肃性和严肃性和严肃性和</view>
							<view class="box_two">
								<view class="box_twoFlx">
									<image src="@/static/index/my.png" mode="aspectFill"></image>
									<view>1000</view>
								</view>
								<view class="box_twoTime">2023-07-26</view>
							</view>
						</view>
						<image src="../../static/index/qun.png" mode="aspectFill" class="box_samlImg"></image>
					</view>
						<view class="line"></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {

		}
	}
</script>

<style>
	.line{
		margin-top: 30rpx;
		margin-bottom: 30rpx;
		width: 638rpx;
		height: 2rpx;
		background-color: F8F8F8;
	}
	.box_samlImg {
		width: 240rpx;
		height: 240rpx;
		border-radius: 16rpx;
	}

	.box_twoFlx image {
		width: 32rpx;
		height: 32rpx;
		margin-right: 10rpx;
	}

	.box_twoFlx {
		display: flex;
		align-items: center;
	}

	.box_two {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 28rpx;
		color: #999;
		margin-top: 20rpx;
	}

	.text {
		text-overflow: -o-ellipsis-lastline;
		overflow: hidden; //溢出内容隐藏
		text-overflow: ellipsis; //文本溢出部分用省略号表示
		display: -webkit-box; //特别显示模式
		-webkit-line-clamp: 2; //行数
		line-clamp: 2;
		-webkit-box-orient: vertical; //盒子中内容竖直排列
	}

	.box_desc {
		color: #9999;
		margin-top: 10rpx;
		font-size: 24rpx;
	}

	.box_title {
		font-size: 28rpx;
		font-weight: 600;
		color: #333;
	}

	.box_samlOne {
		width: 382rpx;

	}

	.box_saml {
		width: 638rpx;
		height: 206rpx;
		margin-left: 25rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.box {
		width: 686rpx;
		
		background-color: #fff;
		border-radius: 16rpx;
		margin-left: 32rpx;
		margin-top: 20rpx;
		padding-top: 20rpx;
	}

	.three_line {
		width: 4rpx;
		height: 24rpx;
		background-color: #2869FE;
		margin-right: 20rpx;
	}

	.three_title {
		font-size: 30rpx;
		font-weight: 600;
		color: #333;
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
</style>