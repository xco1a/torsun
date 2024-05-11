import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import { Row, Col } from 'antd';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

function Content1(props) {
  const { ...tagProps } = props;
  const { dataSource, isMobile } = tagProps;
  delete tagProps.dataSource;
  delete tagProps.isMobile;
  const animType = {
    queue: isMobile ? 'bottom' : 'right',
    one: isMobile
      ? {
          scaleY: '+=0.3',
          opacity: 0,
          type: 'from',
          ease: 'easeOutQuad',
        }
      : {
          x: '-=30',
          opacity: 0,
          type: 'from',
          ease: 'easeOutQuad',
        },
  };
  return (
    <div {...tagProps} {...dataSource.wrapper}>
      <OverPack {...dataSource.OverPack} component={Row}>
        <QueueAnim
          key="text"
          type={animType.queue}
          leaveReverse
          ease={['easeOutQuad', 'easeInQuad']}
          {...dataSource.textWrapper}
          component={Col}
          componentProps={{
            md: dataSource.textWrapper.md,
            xs: dataSource.textWrapper.xs,
          }}
        >
          <h1 className='home-title' style={{marginTop:48,marginBottom:48}}>关于我们</h1>
          <div key="p" {...dataSource.content} style={{textAlign:"center"}}>
            苏州拓晟数创视觉科技有限公司是一家专注于视觉识别技术的研发和应用的高科技企业，公司致力于为客户提供高精度车辆监控定位系统和人工智能火焰识别系统等解决方案。我们的产品和服务广泛应用于智慧城市、智能交通、智能安防、智能制造等领域，为客户提供更安全、更高效、更智能的解决方案。
          </div>
        </QueueAnim>
      </OverPack>
    </div>
  );
}

export default Content1;
