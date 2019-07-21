// exports.routes 需要是一个数组，数组中的每一个对象是一个路由信息。
export default {
  routes: [{
    path: '/', // path 表示页面访问路径。
    component: '../layout', //component 表示 pages 文件夹下的文件名, 此处设置为 pages 文件夹下的 ../layout 布局文件。
    routes: [ //设置 routes，访问以下页面时会将对应的组件渲染到 layout 布局中 children 部分。
      {
        path: '/', // 此处设置为 /
        component: 'HelloWorld' // 访问 http://localhost:8000/ , 默认展示 HelloWorld 组件。
      },
      {
        path: '/helloWorld', // 此处设置为 /helloWorld
        component: 'HelloWorld' // 访问  http://localhost:8000/helloworld 会出现 HelloWorld 组件。
      },
      {
        path: '/dashboard',
        routes: [
          {
            path: '/dashboard/analysis', // 此处设置为 /dashboard/analysis
            component: 'Dashboard/Analysis' // 访问  http://localhost:8000/dashboard/analysis 会出现 Dashboard/Analysis 组件。
          },
          {
            path: '/dashboard/monitor', // 此处设置为 /dashboard/monitor
            component: 'Dashboard/Monitor' // 访问  http://localhost:8000/dashboard/monitor 会出现 Dashboard/Monitor 组件。
          },
          {
            path: '/dashboard/workplace', // 此处设置为 /dashboard/workplace
            component: 'Dashboard/Workplace' // 访问  http://localhost:8000/dashboard/workplace 会出现 Dashboard/Workplace 组件。
          }
        ]
      },
      {
        path: '/clock',
        component: 'Clock'
      },
      {
        path: '/toggle',
        component: 'Toggle'
      }
    ]
  }],
  plugins: [
    ['umi-plugin-react', {
      antd: true
    }],
  ]
}