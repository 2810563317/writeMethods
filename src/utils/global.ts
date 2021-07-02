import {createBrowserHistory} from "history";

export function HistoryGo(pathname: string, state?: any) {
  let history: any = createBrowserHistory()
    history.push({
      pathname,
      state: state || {}
    });
    history.go();
}
