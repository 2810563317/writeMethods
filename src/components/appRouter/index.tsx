import React from 'react';

import { BrowserRouter as Router, Route} from 'react-router-dom';
import utils from '../../utils'
type ComponentState={

}

export default class AppRouter extends React.Component<{}, ComponentState>{
  constructor(props: any){
    super(props);
    this.state={

    }
  }

  render(){
    const Pages = utils.getPages()
    return <Router>
      <div>
        {
          Object.keys(Pages).map(key => (
              <Route 
                key={ key } 
                path={ `/${ key.toLowerCase()}` } 
                component={ Pages[key] }></Route>
          ))
        }
      </div>
    </Router>  }
}