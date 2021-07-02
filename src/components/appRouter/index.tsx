import React from 'react';
import { renderRoutes } from "react-router-config";
import { BrowserRouter} from 'react-router-dom';
import routeConfig from './router'
type ComponentState={

}

export default class AppRouter extends React.Component<{}, ComponentState>{
  constructor(props: any){
    super(props);
    this.state={

    }
  }

  render(){
    return <BrowserRouter>
        {
          renderRoutes(routeConfig)
        }
    </BrowserRouter>  }
}