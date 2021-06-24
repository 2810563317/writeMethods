import {createBrowserHistory} from "history";

export function HistoryGo(pathname: string, state?: any) {
  let history: any = createBrowserHistory()
    history.push({
      pathname,
      state: state || {}
    });
    history.go();
}

export function getPages(){
  let files = require.context('@/pages', true, /index.tsx$/);// 批量导入导出，webpack自带方法
  let pages: any = {};
  
  files.keys().forEach((filePath: any) => {
          let key = filePath.match(/.*\/(.*)\/index.tsx$/)[1];
          pages[key] = files(filePath).default;
  });
  return pages
}