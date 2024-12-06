//uniapp自己封装的 App(安卓/IOS) 的权限  判断和提示。
// https://wmcs.cqaiston.cn 正式服
// https://wmcs.test.cqaiston.cn 测试服
// const baseRequest = "http://192.168.10.2:18080/app-api/external/"; // 测试域名地址
const baseRequest = "https://www.maofeng2023.com/app-api/external/"; // 正式域名地址
// const baseRequest = "http://192.168.10.2:18080/app-api/external/"; // 测试域名地址
// const baseRequest = "https://377x10f678.goho.co/app-api/external/"; // 测试域名地址
const imgURL = "https://zgz.test.cqaiston.cn/api/v1/" //图片的线上服务器地址
// const imgURL = "https://wmcs.cqaiston.cn/res/project/api/images/" //正式服图片的线上服务器地址

uni.setStorage({
	key: 'baseUrl',
	data: baseRequest
});
/**
 * @function 发起网络请求
 * @description 前后端的接口对接
 * @param {String} $path - 服务器接口地址 必填 
 * @param {String} $method - 请求的类型 必填
 * @param {Object} $param - 请求的参数 必填
 * @param {String} $type - 参数内容类型(默认无) 非必填 
 */
const request = (path, method, param, types) => {
	let header
	if (!types) {
		header = {
			Accept: 'application/json',
			Authorization: 'Bearer ' + uni.getStorageSync('token'),
			deviceid: uni.getStorageSync('deviceId') ? uni.getStorageSync('deviceId') : '',
			// testUser:1, //仅供测试服
		};
	} else {
		header = {
			Accept: 'application/json',
			Authorization: 'Bearer ' + uni.getStorageSync('token'),
			deviceid: uni.getStorageSync('deviceId') ? uni.getStorageSync('deviceId') : '',
			// testUser:1, //仅供测试服
		};
	}
	uni.showLoading({
		title:'加载中...',
		mask:true,
	})
	return new Promise((resolve, reject) => {
		let data = param
		if(method=='post'){
			data = JSON.stringify(data)
		}
		uni.request({
			url: baseRequest + path,
			data: data ?? {},
			method: method ?? 'GET',
			header,
			success: res => {
				uni.hideLoading()
				console.log(res,333)
				if (res.data.code == '200') {
					resolve(res.data)
				}else if(res.data.code=='422'){
					uni.showToast({
						title:res.data.msg,
						icon:'none'
					})
				} else if (res.data.code== '401') {
					uni.showToast({
						title:'请在微信环境下运行',
						icon:'none',
						success() {
							uni.navigateTo({
								url:'/pages/my/login/login'
							})
						}
					})
					
				} else {
					uni.showToast({
						title: res.data.msg,
						icon: 'none'
					})
					resolve(res)
				}
			},
			fail: err => {
				uni.hideLoading()
				// alert(JSON.stringify(err))
				reject(err)
			}
		})
	})
}

//用户是否可以使用微信js-sdk授权



//upFiles 上传文件函数
const upFiles =   (url = '', file={}, date={}, fileType,header = {}) => {
	uni.showLoading({
		title:'加载中...',
		mask:true,
	})
	return new Promise((resolve, reject) => {
		console.log(fileType)
		uni.uploadFile({
			url: baseRequest + url,
			files: file,
			fileType: 'image' || fileType,
			formData: date,
			header: {
				'Accept': 'application/json',
				deviceid: uni.getStorageSync('deviceId') ? uni.getStorageSync('deviceId') : '',
				// testUser:1, //仅供测试服
			} || headedr
		}).then((response) => {
		uni.hideLoading()
			let [error, res] = response;
			res.data = JSON.parse(res.data);
			console.log(res, 'response');
			resolve(res);
		}).catch(error => {
			let [err, res] = error;
			// console.log(err, 'error');
			uni.hideLoading()
			reject(err)
		});
	});
}

/**
 * @function 页面跳转
 * @description 保留当前页面,跳转到应用内的某个页面
 * @param {String} $path - 需要跳转的应用内非 tabBar 的页面的路径,路径后可以带参数。 必填
 * @param {Object} $data - 向被打开页面传送的数据(也可选择通过$path传参) 非必填
 */
const navigateTo = ($path, $data) => {
	uni.navigateTo({
		url: $path,
		success: (res) => {
			if ($data) {
				//通过eventChannel向被打开页面传送数据
				res.eventChannel.emit('acceptDataFromOpenerPage', $data)
			}
		},
		fail: (err) => {
			return 'navigateTo fail'
		}
	})
}

/**
 * @function 页面返回
 * @description 关闭当前页面,返回上一页面或多级页面。
 * @param {Number} $delta - 返回的页面数,如果大于现有页面数,则返回到首页(默认返回1级) 非必填
 */
const navigateBack = ($delta = 1) => {
	uni.navigateBack({
		delta: $delta
	})
}

/**
 * @function 显示消息提示框
 * @description 显示一个提示消息的弹窗,会自动消失
 * @param {String} $title - 提示的内容(长度与icon取值有关) 必填
 * @param {String} $icon - 图标(默认不显示图标) 非必填
 * @param {Object} $duration - 请求的参数(毫秒,默认1500) 非必填
 */
const showToast = ($title, $icon, $duration = 1500) => {
	$icon = $icon ? $icon : 'none';
	uni.showToast({
		title: $title,
		icon: $icon,
		duration: $duration
	})
}

/**
 * @function 显示模态弹窗
 * @description 弹出询问弹窗,可以只有一个确定按钮,也可以同时有确定和取消按钮。类似于一个API整合了html中:alert、confirm。
 * @param {String} $title - 提示的标题 必填
 * @param {String} $content - 提示的内容 必填
 * @param {String} $confirmText - 确定按钮的文字,最多 4 个字符(默认为"好的") 非必填
 * @param {Function} $callback - 回调函数 非必填
 */
const showModal = ($title, $content, $confirmText, $callback) => {
	uni.showModal({
		title: $title,
		content: $content,
		confirmText: $confirmText ? $confirmText : '好的',
		success: res => {
			if ($callback) {
				$callback(res)
			}
		}
	})
}

/**
 * @function 显示选择菜单
 * @description 从底部向上弹出操作菜单
 * @param {Array<String>} $itemList - 按钮的文字数组(微信、百度、字节跳动小程序数组长度最大为6个) 必填
 * @param {Function} $callback - 回调函数 非必填
 */
const showActionSheet = ($itemList, $callback) => {
	uni.showActionSheet({
		itemList: $itemList,
		success: res => {
			if ($callback) {
				$callback(res.tapIndex)
			}
		},
		fail: res => {}
	})
}

/**
 * @function 加载动画
 * @description 整合了uniapp的 uni.showLoading 和 uni.hideLoading 两个api
 * @param {String} $type - 加载动画类型(show 显示loading提示框, hide 隐藏loading提示框) 必填
 * @param {String} $title - 提示的文字内容,显示在loading的下方(默认加载中) 非必填
 * @param {Boolean} $mask - 是否显示透明蒙层，防止触摸穿透(默认false) 非必填 (兼容H5、App、微信小程序、百度小程序)
 */
const Loading = ($type, $title, $mask) => {
	if ($type == 'show') {
		uni.showLoading({
			title: $title ? $title : '加载中',
			mask: $mask ? $mask : false
		})
	} else if ($type == 'hide') {
		uni.hideLoading();
	}
}

/**
 * @function 权限请求
 * @description 判断当前所需手机权限是否已经授权
 * @param {String} $scopeId - 小程序权限scope值 必填(小程序端)
 * @param {String} $permissionID - APP权限id(安卓/IOS) 必填(APP端)
 * @param {String} $tips - 授权提示语 必填 
 * @param {String} $errTips - 授权失败提示语 必填
 */
const gloabSetting = ($scopeId, $permissionID, $tips, $errTips) => {
	//APP端权限请求
	// #ifdef APP-PLUS
	return new Promise((reslove, reject) => {
		if (plus.os.name == "Android") { //判断手机系统
			permision.requestAndroidPermission($permissionID).then(
				result => { //1	已获取授权, 0	未获取授权, -1 被永久拒绝授权
					console.log(result, '安卓端获取权限情况')
					if (result == 1) {
						reslove(true);
					} else if (result == 0) {
						reject(false);
					} else {
						showModal('提醒', $tips, '去授权', status => {
							if (status.confirm) {
								permision.gotoAppPermissionSetting();
							} else {
								showToast($errTips)
							}
						})
						reject(false);
					}
				}
			)

		} else { //苹果IOS端

		}
	})
	//#endif

	//小程序端权限请求 
	// #ifdef MP-WEIXIN
	return new Promise((reslove, reject) => {
		//获取用户的当前设置。
		uni.getSetting({
			success: res => {
				console.log(res, '获取到了')
				console.log(res.authSetting[$scopeId], $scopeId, '真的还是假的')
				if (res.authSetting['scope.camera']) {
					console.log("相机功能已授权")
					// 如果已授权,直接获取对应参数
					reslove(true)
				} else if (!res.authSetting['scope.camera']) {
					// 说明此时要获取的位置功能尚未授权,
					// 则设置进入页面时主动弹出，直接授权
					uni.authorize({
						scope: 'scope.camera',
						success(res) {
							// 授权成功
							console.log(res)
							// 成功后获取对应的位置参数
						},
						fail() {
							console.log("相机功能已授权")
						}
					})
					reject(false)
				} else {}
			},
			fail() {
				console.log("获取授权信息授权失败")
			}
		})
	})
	//#endif
}

/**
 * @function 获取相册图片或使用相机拍照(APP端、小程序端)
 * @description 相册选取图片或者直接拍照
 * @param {Number} $count - 最多可以选择的图片张数，默认9
 */
const chooseImage = ($count) => {
	return new Promise((reslove, reject) => {
		$count = $count ? $count : 9;
		let permissionId = "";
		let sourceType = [];
		// #ifdef APP-PLUS
		showActionSheet(['选择相册', '打开相机'], method => {
			if (plus.os.name == "Android") { //判断手机系统
				permissionId = method == 0 ? 'android.permission.READ_EXTERNAL_STORAGE' :
					'android.permission.CAMERA';
			} else {
				permissionId = method == 0 ? 'photoLibrary' : 'camera';
			}
		})
		gloabSetting('scope.camera', permissionId, "请授权相机相册权限", '无法使用相机相册功能').then(() => {
			sourceType = method == 0 ? ['album'] : ['camera'];
			uni.chooseImage({
				count: $count, //图片张数 默认9
				sizeType: ['original', 'compressed'], //原图还是压缩图 original 原图，compressed 压缩图
				sourceType: sourceType,
				success: res => {
					reslove(res.tempFilePaths);
				},
				fail: err => {
					reject(err);
				}
			})
		})
		//#endif
		// #ifdef MP-WEIXIN
		gloabSetting.then(res => {
			if (res) {
				uni.chooseImage({
					count: $count, //图片张数 默认9
					sizeType: ['original',
						'compressed'
					], //原图还是压缩图 original 原图，compressed 压缩图
					sourceType: ['album', 'camera'],
					success: res => {
						reslove(res.tempFilePaths);
					},
					fail: err => {
						reject(err);
					}
				})
			}
		})
		// #endif


	})
}

/**
 * @function 预览图片
 * @description 展示当前传入的图片数组
 * @param {Number} $current - 为当前显示图片的索引值 必填
 * @param {Array<String>} $urls - 	需要预览的图片链接列表 必填
 */
const previewImage = ($current, $urls) => {
	uni.previewImage({
		current: $current,
		urls: $urls,
		success: res => {
			console.log(res)
		},
		fail: err => {
			console.log(err)
		}
	})
}

/**
 * @function 计算缓存(仅APP端)
 * @description 获取当前app端的系统缓存
 * @return {String} fileSizeString - 计算后的缓存大小
 */
const getStorageSize = () => {
	return new Promise((reslove, reject) => {
		let fileSizeString = null;
		plus.cache.calculate(function(size) {
			let sizeCache = parseInt(size);
			if (sizeCache == 0) {
				fileSizeString = "0B";
			} else if (sizeCache < 1024) {
				fileSizeString = sizeCache + "B";
			} else if (sizeCache < 1048576) {
				fileSizeString = (sizeCache / 1024).toFixed(2) + "K";
			} else if (sizeCache < 1073741824) {
				fileSizeString = (sizeCache / 1048576).toFixed(2) + "M";
			} else {
				fileSizeString = (sizeCache / 1073741824).toFixed(2) + "G";
			}
			if (fileSizeString != null) {
				reslove(fileSizeString);
			} else {
				reject(false)
			}

		});
	})
}

/**
 * @function 清理缓存(仅APP端)
 * @description 清理当前app端的系统缓存
 * @param {Function} $callback - 回调函数(清理成功后的操作)
 */
const clearStorage = ($callback) => {
	showToast('缓存清理中,请稍后...');
	let os = plus.os.name;
	if (os == 'Android') {
		let main = plus.android.runtimeMainActivity();
		let sdRoot = main.getCacheDir();
		let files = plus.android.invoke(sdRoot, "listFiles");
		let len = files.length;
		for (let i = 0; i < len; i++) {
			let filePath = '' + files[i]; // 没有找到合适的方法获取路径，这样写可以转成文件路径
			plus.io.resolveLocalFileSystemURL(filePath, function(entry) {
				if (entry.isDirectory) {
					entry.removeRecursively(function(entry) { //递归删除其下的所有文件及子目录
						showToast('缓存清理完成');
						if ($callback) {
							$callback(true);
						}
					}, function(e) {
						console.log(e.message)
					});
				} else {
					entry.remove();
				}
			}, function(e) {
				console.log('文件路径读取失败')
			});
		}
	} else { // ios
		plus.cache.clear(function() {
			showToast('缓存清理完成');
			if ($callback) {
				$callback(true);
			}
		});
	}
}

/**
 * @function 系统剪贴板
 * @description 复制粘贴
 * @param {String} $data - 剪贴的内容 必填
 */
const setClipboardData = ($data) => {
	uni.setClipboardData({
		data: $data,
		success: function() {
			console.log('复制成功！');
		}
	});
}

/**
 * @function 下载文件资源到本地
 * @description 下载服务器资源(客户端直接发起一个 HTTP GET 请求，返回文件的本地临时路径。)
 * @param {String} $url - 下载资源的 url	 必填
 * @param {Boolean} $additional - 下载资源是否附加路径	 非必填
 */
const downloadFile = ($url, $additional) => {
	return new Promise((reslove, reject) => {
		let additional = $additional ? '' : '/files/get/';
		uni.downloadFile({
			url: baseRequest + additional + $url,
			success: res => {
				if (res.statusCode == 200) {
					uni.saveFile({ //保存到本地
						tempFilePath: res.tempFilePath,
						success: e => {
							reslove(e.savedFilePath)
						},
						fail: er => {
							reject(er)
						}
					})
				} else {
					reject(false)
				}
			},
			fail: err => {
				reject(err)
			}
		});
	})
}

/**
 * @function 新开页面打开文档
 * @description 新开页面打开文档，支持格式：doc, xls, ppt, pdf, docx, xlsx, pptx。
 * @param {String} $url - 需要打开文档的路径 必填
 */
const openDocument = ($url) => {
	uni.openDocument({
		filePath: $url, //文件路径
		success: function(res) {

		}
	})
}

export default {
	imgURL, //图片地址
	// imgURLTWO, //图片地址2号
	request, //发起网络请求
	upFiles, //文件上传
	navigateTo, //页面跳转
	navigateBack, //页面返回
	showToast, //显示消息提示框
	showModal, //显示模态弹窗
	showActionSheet, //显示选择菜单
	Loading, //加载动画
	gloabSetting, //权限请求
	chooseImage, //选取相册图片或手机拍照
	previewImage, //预览图片
	getStorageSize, //获取系统缓存(仅APP端)
	clearStorage, //清除系统缓存(仅APP端)
	setClipboardData, //系统剪贴板
	downloadFile, //下载文件资源到本地
	openDocument, //新开页面打开文档
	baseRequest,
}
