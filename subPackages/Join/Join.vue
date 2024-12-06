<template>
	<view>
		<view class="input_box">
			<view class="input_">
				<view style="height: 80rpx;line-height: 80rpx;">姓名</view>
				<input type="text" placeholder="请输入姓名" class="input" />
			</view>
			<view class="input_">
				<view style="height: 80rpx;line-height: 80rpx;">手机号码</view>
				<input type="number" placeholder="请输入手机号码" class="input" />
			</view>
			<view class="input_">
				<view style="height: 80rpx;line-height: 80rpx;">身份证号码</view>
				<input type="text" placeholder="请输入身份证号码" class="input" />
			</view>
			<view class="input_" @click="show=true">
				<view style="height: 80rpx;line-height: 80rpx;">性别</view>
				<view class="icon_img1">
					<view class="">男</view>
					<u-icon name="arrow-right" size="20"></u-icon>
				</view>
			</view>
			<view class="input_">
				<view style="height: 80rpx;line-height: 80rpx;">紧急联系人电话</view>
				<input type="number" placeholder="请输入紧急联系人电话" class="input" />
			</view>
			<view class="input_">
				<view style="height: 80rpx;line-height: 80rpx;">居住地址</view>
				<input type="text" placeholder="请输入居住地址" class="input" />
			</view>
		</view>
		<view class="btn_fix">
			<view class="btn">提交</view>
		</view>
		<u-picker :show="show" @cancel='show=false' @close='show=false' @confirm='confirm' :columns="columns"
			keyName="label"></u-picker>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
				columns: [
					[{
						label: '男',
						id: 0
					}, {
						label: '女',
						id: 1
					}]
				],
			}
		},
		methods: {
			confirm(e) {
				this.show = false
			}
		}
	}
</script>

<style>
	.btn {
		width: 686rpx;
		height: 80rpx;
		text-align: center;
		line-height: 80rpx;
		color: #fff;
		background-color: #2869FE;
		border-radius: 8rpx;
	}

	.btn_fix {
		position: fixed;
		bottom: 5%;
		left: 32rpx;
	}

	.icon_img1 {
		display: flex;
		align-items: center;
	}

	.input {
		width: 400rpx;
		height: 80rpx;
		text-align: right;
	}

	.input_box {
		width: 710rpx;
		padding: 20rpx 30rpx;
		background-color: #fff;
		margin-left: 20rpx;
		margin-top: 30rpx;
	}

	.input_ {
		display: flex;
		align-items: center;
		font-size: 28rpx;
		justify-content: space-between;
		margin-top: 25rpx;
	}
</style>