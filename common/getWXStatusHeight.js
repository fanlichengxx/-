 function getWXStatusHeight() {
    // 获取距上
    const barTop = wx.getSystemInfoSync().statusBarHeight
    // 获取胶囊按钮位置信息
    const menuButtonInfo = wx.getMenuButtonBoundingClientRect()
    // 获取导航栏高度
    const barHeight = menuButtonInfo.height + (menuButtonInfo.top - barTop) * 2
    let barWidth = menuButtonInfo.width
 
 
    return {
        barHeight,
        barTop,
        barWidth
    }
 
}
 
export {
    getWXStatusHeight
}