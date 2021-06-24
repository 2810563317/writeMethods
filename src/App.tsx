import './App.scss';
import React from 'react';

import { BrowserRouter as Router, Route} from 'react-router-dom';
import { ConfigProvider } from '@alifd/next';
import AppNav from '../src/components/appNav'
const Home = () => (<div>首页</div>)
const About = () => (<div>关于我们</div>)
// const App = () => (
  // <Router history={createBrowserHistory()}>
  //   <div>
  //     <Route path={"/"} component={Home} />
  //     <Route path={"/about"} component={About} />
  //   </div>
  // </Router>
// )

// export default App;
type ComponentState={

}
export default class App extends React.Component<{}, ComponentState>{
  constructor(props: any){
    super(props);
    this.state={

    }
  }
  render(){
    return <ConfigProvider device='desktop'>
      <div className='app-main'>
        <div className='app-header'>
          head
        </div>
        <div className="app-bottom">
          <div className="app-nav">
            <AppNav />
          </div>
          <div className="app-content">
            <Router>
              <div>
                <Route path={"/home"} component={Home} />
                <Route path={"/about"} component={About} />
              </div>
            </Router>
          </div>
        </div>
      </div>
    </ConfigProvider>
  }
}