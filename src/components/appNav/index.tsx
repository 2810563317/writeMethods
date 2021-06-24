import React from 'react';
import './index.scss';
import { Nav } from '@alifd/next';
import utils from "../../utils";
import {NAV_LIST, NavItem} from './content'

const { Item, SubNav } = Nav;

type ComponentState={

}
export default class AppNav extends React.Component<{}, ComponentState>{
  constructor(props: any){
    super(props);
    this.state={

    }
  }
  handelItemClick=(key:string)=>{
    utils.HistoryGo(key)
  }
  renderItem(list: NavItem){
    const {key, type, label, children} = list;
    
    if(children){
      return <SubNav key={key} icon={type} label={label}>
        {children.map((child: NavItem) => this.renderItem(child))}
      </SubNav>
    }else {
      return <Item icon={type} key={key}>{label}</Item>
    }
  }
  render() {
    
    return <Nav
      style={{ width: "200px" }}
      embeddable={true}
      defaultOpenAll
      defaultSelectedKeys={["0-1"]}
      iconOnly={false}
      hasArrow={false}
      hasTooltip
      mode={'inline'}
      onItemClick={this.handelItemClick}
    >
      {NAV_LIST.length ? 
        NAV_LIST.map((child: NavItem) => this.renderItem(child))
        : null
      }
    </Nav>
  }
};
