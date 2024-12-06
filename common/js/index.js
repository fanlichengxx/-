
//导入当前目录下的所有.js文件
const requireApi = require.context('.',false,/.js$/)

let module = {}
requireApi.keys().forEach((api,key)=>{
	if(api==='./index.js')return
	Object.assign(module,requireApi(api)['default'])
})


export default module