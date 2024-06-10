/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from 'react';
import { enquireScreen } from 'enquire-js';

import Banner3 from './Banner3';
import Feature4 from './Feature4';
import Content3 from './Content3';

import Nav3 from '../Home/Nav3';
import Footer1 from '../Home/Footer1';
import Content13 from '../Home/Content13';


import {
  Banner30DataSource,
  Feature40DataSource,
  Content30DataSource,
} from './data.source';
import { Nav30DataSource,Footer10DataSource,Content130DataSource } from '../Home/data.source';

import './less/antMotionStyle.less';

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

const { location = {} } = typeof window !== 'undefined' ? window : {};

export default class Box extends React.Component {
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
      
      <h1 className='home-title' id='box-detail-start' style={{marginTop:68}}>智能硬件方案</h1>,
      <Feature4
        id="box_Feature4_0"
        key="Feature4_0"
        dataSource={Feature40DataSource}
        isMobile={this.state.isMobile}
      />,

      <h1 className='home-title' style={{marginTop:68}}>硬件软件一体化解决方案</h1>,
      <Content3
        id="Content3_0"
        key="Content3_0"
        dataSource={Content30DataSource}
        isMobile={this.state.isMobile}
      />,



      <Content13
        id="Content13_0"
        key="Content13_0"
        dataSource={Content130DataSource}
        isMobile={this.state.isMobile}
      />,
      <Footer1
        id="Footer1_0"
        key="Footer1_0"
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
