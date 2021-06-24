import './App.scss';
import React from 'react';

import { BrowserRouter as Router, Route} from 'react-router-dom';
import router from './router'

type ComponentState={

}

export default class AppRouter extends React.Component<{}, ComponentState>{
  constructor(props: any){
    super(props);
    this.state={

    }
  }
  getComponent(){
    // const {basePath, routes} = router
    // require('./')
  }
  render(){
    return <Router>
      <div>
        {/* <Route path={"/home"} component={Home} />
        <Route path={"/about"} component={About} /> */}
      </div>
    </Router>
  }
}