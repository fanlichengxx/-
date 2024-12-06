<template>
	<view class="">
		<view style="width:622rpx; height:622rpx"><l-echart ref="chartRef" @finished="init"></l-echart></view>
	</view>
</template>

<script>
	// 插件内的 三选一
	import * as echarts from '@/uni_modules/lime-echart/static/echarts.min'

	export default {
		data() {
			return {
				option: {
					xAxis: {
						type: 'category',
						boundaryGap: false,
						data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
					},
					yAxis: {
						type: 'value'
					},
					series: [{
						data: [820, 932, 901, 934, 1290, 1330, 1320],
						type: 'line',
						symbolSize: 10,
						itemStyle: {
							normal: {
								label: {
									show: true
								},
								color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
									offset: 0,
									color: '#FFAF37' // 0% 处的颜色
								}, {
									offset: 0.4,
									color: '#eed076' // 100% 处的颜色
								}, {
									offset: 1,
									color: '#fff' // 100% 处的颜色
								}]), //背景渐变色   

								lineStyle: {
									width: 3,
									type: 'solid',
									color: "#FFAF37" //折线的颜色
								}
							}
						},
						areaStyle: {}
					}]
				},
			};
		},
		// 组件能被调用必须是组件的节点已经被渲染到页面上
		methods: {
			async init() {
				// chart 图表实例不能存在data里
				const chart = await this.$refs.chartRef.init(echarts);
				chart.setOption(this.option)
			}
		}
	}
</script>

<style>
</style>