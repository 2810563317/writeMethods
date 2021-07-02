const routers = [
  {
    name: 'home',
    path: '/home',
  }, 
  {
    name: 'about',
    path: '/about',

  }, 
  {
    name: 'detail',
    path: '/detail',
  }
]

function getPages(){
  let files = require.context('@/pages', true, /index.tsx$/);// 批量导入导出，webpack自带方法
  let pages: any = {};
  files.keys().forEach((filePath: any) => {
            const key = filePath.match(/.*\/(.*)\/index.tsx$/)[1];
            const current = routers.find(v => v.name === key)
            current && (pages[key] = {
              path: current.path,
              component: files(filePath).default
            });
  });
  return pages
}


const routeConfig = () => {
  const pages = getPages()
  return Object.keys(pages).map(key => {
    return {
      name: key,
      path: pages[key].path,
      component: pages[key].component
      
    }
  })
}

export default routeConfig()