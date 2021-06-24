import './App.scss';
import React from 'react';
import { ConfigProvider } from '@alifd/next';
import AppNav from '../src/components/appNav'
import AppRouter from '../src/components/appRouter'
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
            <AppRouter/>
          </div>
        </div>
      </div>
    </ConfigProvider>
  }
}