/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from 'react';
import { enquireScreen } from 'enquire-js';

import Banner3 from './Banner3';
import Feature4 from './Feature4';
import Feature5 from './Feature5';
import Content0 from './Content0';
import Content1 from './Content1';
import Content3 from './Content3';
import Nav3 from '../Home/Nav3';
import Footer1 from '../Home/Footer1';
import Content13 from '../Home/Content13';
import { Nav30DataSource,Footer10DataSource,Content130DataSource } from '../Home/data.source';

import {
  Banner30DataSource,
  Feature40DataSource,
  Feature50DataSource,
  Content00DataSource,
  Content10DataSource,
  Content30DataSource,
} from './data.source';
import './less/antMotionStyle.less';

import CarLevel from '@/assets/car_level.png'

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

const { location = {} } = typeof window !== 'undefined' ? window : {};

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
      show: !location.port, // 如果不是 dva 2.0 请删除
    };
  }

  componentDidMount() {
    // 适配手机屏幕;
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
    // dva 2.0 样式在组件渲染之后动态加载，导致滚动组件不生效；线上不影响；
    /* 如果不是 dva 2.0 请删除 start */
    if (location.port) {
      // 样式 build 时间在 200-300ms 之间;
      setTimeout(() => {
        this.setState({
          show: true,
        });
      }, 500);
    }
    /* 如果不是 dva 2.0 请删除 end */
  }

  render() {
    const children = [
      <Nav3
        id="Nav3_0"
        key="Nav3_0"
        dataSource={Nav30DataSource}
        isMobile={this.state.isMobile}
      />,
      <Banner3
        id="Banner3_0"
        key="Banner3_0"
        dataSource={Banner30DataSource}
        isMobile={this.state.isMobile}
      />,
      <h1 className='home-title' id='car-detail-start' style={{marginTop:48}}>车辆监控定位系统方案</h1>,
      <Feature4
        id="Feature4_0"
        key="Feature4_0"
        dataSource={Feature40DataSource}
        isMobile={this.state.isMobile}
      />,
      <h1 className='home-title' style={{marginTop:48,marginBottom:48}}>车辆监控定位系统功能</h1>,
      <img src={CarLevel} className='hover-scale' style={{display: 'block',width:'100%',height:'auto',margin: 'auto',padding: '0 24px',maxWidth: '1200px'}} />,
      <Feature5
        id="Feature5_0"
        key="Feature5_0"
        dataSource={Feature50DataSource}
        isMobile={this.state.isMobile}
      />,
      // <Content0
      //   id="Content0_0"
      //   key="Content0_0"
      //   dataSource={Content00DataSource}
      //   isMobile={this.state.isMobile}
      // />,
      // <Content1
      //   id="Content1_0"
      //   key="Content1_0"
      //   dataSource={Content10DataSource}
      //   isMobile={this.state.isMobile}
      // />,
      // <Content3
      //   id="Content3_0"
      //   key="Content3_0"
      //   dataSource={Content30DataSource}
      //   isMobile={this.state.isMobile}
      // />,
      <Content13
        id="Content13_0"
        key="Content13_0"
        dataSource={Content130DataSource}
        isMobile={this.state.isMobile}
      />,
      <Footer1
        id="Footer0_0"
        key="Footer0_0"
        dataSource={Footer10DataSource}
        isMobile={this.state.isMobile}
      />,
    ];
    return (
      <div
        className="templates-wrapper"
        ref={(d) => {
          this.dom = d;
        }}
      >
        {/* 如果不是 dva 2.0 替换成 {children} start */}
        {this.state.show && children}
        {/* 如果不是 dva 2.0 替换成 {children} end */}
      </div>
    );
  }
}
