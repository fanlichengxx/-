export default {
	//分享给好友
	onShareAppMessage(e) {
		let that = this
		console.log(e, '分享好友')
		// from分享事件来源：button（页面内分享按钮）、menu（右上角分享按钮）
		if (e.from == 'button' && that.shareType == '商品分享') { //button（页面内分享按钮）
			let pages = getCurrentPages() //获取当前页面路由地址及参数
			pages = pages[pages.length - 1].$page.fullPath
			// console.log({
			// 	title: that.mood.title,
			// 	imageUrl: that.mood.coverPictureId,
			// 	path:pages
			// })
			return {
				title: that.mood.title,
				imageUrl: that.mood.coverPictureId,
				path: pages
			}
		} else if (e.from == 'button' && that.shareType == '认养分享') {
			let pages = getCurrentPages() //获取当前页面路由地址及参数
			pages = pages[pages.length - 1].$page.fullPath
			// console.log({
			// 	title: that.mood.fosterName,
			// 	imageUrl: that.mood.imgId,
			// 	path: pages
			// })
			return {
				title: that.mood.fosterName,
				imageUrl: that.mood.imgId,
				path: pages
			}
		}
	},
	// 分享到朋友圈
	onShareTimeline() {
		return {
			title: '冒丰农业',
			path: '/pages/home',
			imageUrl: '/static/logo.png'
		};
	}
}