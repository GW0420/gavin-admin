import SvgIcon from '@/components/SvgIcon'
/**
 * 通过 require.context() 函数来创建自己的 context
 * 该函数提供了三个属性，可以给这个函数传入三个参数：
 * 第一个参数为搜索的目录，
 * 第二个参数为标记表示是否还搜索其子目录，
 * 第三个参数为匹配文件的正则表达式。
 */
// 此时返回一个 require 的函数，可以接受一个 request 的参数，用于 require 的导入。
const svgRequire = require.context('./svg', false, /\.svg$/)
// 可以通过 require.keys() 获取到所有的 svg 图标，
//forEach遍历图标，把图标作为 request 传入到 require 导入函数中，完成本地 svg 图标的导入
svgRequire.keys().forEach(svgIcon => svgRequire(svgIcon))
// 完成全局组件的注册
export default app => {
  app.component('svg-icon', SvgIcon)
}
