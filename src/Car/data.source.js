import React from 'react';
import CarArch from '@/assets/car_arch.png'
import PointLine from '@/assets/point_line.png'

export function smoothScroll (targetId) {
  let target = document.getElementById(targetId);
  let scrollContainer = document.getElementById(targetId);
  do { 
      scrollContainer = scrollContainer.parentNode;
      if (!scrollContainer) return;
      scrollContainer.scrollTop += 1;
  } while (scrollContainer.scrollTop == 0);

  let targetY = 0;
  do { 
      if (target == scrollContainer) break;
      targetY += target.offsetTop;
  } while (target = target.offsetParent);

  scroll = function(c, a, b, i) {
      i++; if (i > 30) return;
      c.scrollTop = a + (b - a) / 30 * i;
      setTimeout(function(){ scroll(c, a, b, i); }, 20);
  }
  scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}

export const Banner30DataSource = {
  wrapper: { className: 'banner3' },
  textWrapper: {
    className: 'banner3-text-wrapper',
    children: [
      {
        name: 'slogan',
        className: 'banner3-slogan',
        children: '高精度车辆监控定位系统',
        texty: true,
      },
      {
        name: 'name',
        className: 'banner3-name',
        children: '厂区人员定位、车站作业车辆监控、仓储物料监管等场景解决方案',
      },
      { name: 'button', className: 'banner3-button', children: '了解更多', onClick:() => smoothScroll("car-detail-start") },

    ],
  },
};
export const Feature40DataSource = {
  wrapper: { className: 'home-page-wrapper car-content6-wrapper' },
  OverPack: { className: 'home-page car-content6' },
  textWrapper: { className: 'car-content6-text', xs: 24, md: 10 },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'content',
        className: 'title-content',
        children: '车辆监控定位系统工作过程',
      },
    ],
  },
  img: {
    children: CarArch,
    className: 'car-content6-img hover-scale',
    xs: 24,
    md: 14,
  },
  block: {
    children: [
      {
        name: 'block0',
        img: {
          children:
            'https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png',
          className: 'car-content6-icon',
        },
        title: { className: 'car-content6-title', children: '' },
        content: {
          className: 'car-content6-content',
          children:
            'UWB信标通过光纤组建蜂窝定位网格     ',
        },
      },
      {
        name: 'block1',
        img: {
          className: 'car-content6-icon',
          children:
            'https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png',
        },
        title: { className: 'car-content6-title', children: '' },
        content: {
          className: 'car-content6-content',
          children:
            '电子标签解码UWB信标信号计算坐标',
        },
      },
      {
        name: 'block2',
        img: {
          className: 'car-content6-icon',
          children:
            'https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png',
        },
        title: { className: 'car-content6-title', children: '' },
        content: {
          className: 'car-content6-content',
          children:
            '电子标签利用LORA通讯回传坐标数据',
        },
      },
      {
        name: 'block2',
        img: {
          className: 'car-content6-icon',
          children:
            'https://zos.alipayobjects.com/rmsportal/MNdlBNhmDBLuzqp.png',
        },
        title: { className: 'car-content6-title', children: '' },
        content: {
          className: 'car-content6-content',
          children:
            '相机通过局域网向视频平台推送视频',
        },
      },
      {
        name: 'block2',
        img: {
          className: 'car-content6-icon',
          children:
            'https://zos.alipayobjects.com/rmsportal/MNdlBNhmDBLuzqp.png',
        },
        title: { className: 'car-content6-title', children: '' },
        content: {
          className: 'car-content6-content',
          children:
            'AI视频服务器实时分析和识别视频内容',
        },
      },
      {
        name: 'block2',
        img: {
          className: 'car-content6-icon',
          children:
            'https://zos.alipayobjects.com/rmsportal/MNdlBNhmDBLuzqp.png',
        },
        title: { className: 'car-content6-title', children: '' },
        content: {
          className: 'car-content6-content',
          children:
            '服务融合标签坐标和AI识别结果信息实时预警',
        },
      },

    ],
  },
};
export const Feature50DataSource = {
  wrapper: { className: 'home-page-wrapper car-content7-wrapper' },
  page: { className: 'home-page car-content7' },
  OverPack: {},
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: '车辆监控定位系统服务',
        className: 'title-h1',
      },
      { name: 'content', children: '' },
    ],
  },
  tabsWrapper: { className: 'car-content7-tabs-wrapper' },
  block: {
    children: [
      {
        name: 'block0',
        tag: {
          className: 'car-content7-tag',
          text: { children: 'AI视频服务', className: 'car-content7-tag-name' },
          icon: { children: 'mobile' },
        },
        content: {
          className: 'car-content7-content',
          text: {
            className: 'car-content7-text',
            md: 14,
            xs: 24,
            children: (
              <span>
                <h3>图像采集</h3>
                <p>
                  接入监控相机并获取图片
                </p>
                <br />
                <h3>作业车识别</h3>
                <p>
                  利用AI算法识别图像车辆
                </p>
                <br />
                <h3>
                  车轮视觉定位
                </h3>
                <p>
                  利用AI算法识别图像车辆轮子并判断轮子区域和电子围栏区域的交集
                </p>
                <br />
                <h3>
                  视频展示
                </h3>
                <p>
                  通过浏览器实时监控或抓拍存档的视频
                </p>
                <br />
                <h3>
                  车轮传感器定位
                </h3>
                通过安装在车辆四个角上的电子标签定位
              </span>
            ),
          },
          img: {
            className: 'car-content7-img rotating-image',
            children: PointLine,
            md: 10,
            xs: 24,
          },
        },
      },
      {
        name: 'block1',
        tag: {
          className: 'car-content7-tag',
          icon: { children: 'tablet' },
          text: { className: 'car-content7-tag-name', children: '应用服务' },
        },
        content: {
          className: 'car-content7-content',
          text: {
            className: 'car-content7-text',
            md: 14,
            xs: 24,
            children: (
              <span>
                <h3>相机管理</h3>
                <p>
                  管理监控相机接入AI视频服务器
                </p>
                <br />
                <h3>相机视野标定</h3>
                <p>
                  标定相机电子围栏以及空间坐标位置
                </p>
                <br />
                <h3>
                  电子围栏标定
                </h3>
                <p>
                  通过地图标记特定监控区域
                </p>
                <br />
                <h3>
                  地图展示
                </h3>
                <p>
                  车辆位置在地图上实时显示
                </p>
                <br />
                <h3>
                  报警处理
                </h3>
                <p>
                  联动电子标签和监控相机进行抓拍存档
                </p><br />
                <h3>
                  信号融合
                </h3>
                <p>
                  结合电子标签位置和监控相机数据判别是否报警
                </p><br />
                <h3>
                  标签管理
                </h3>
                <p>
                  标签数据维护
                </p>
              </span>
            ),
          },
          img: {
            className: 'car-content7-img rotating-image',
            children: PointLine,
            md: 10,
            xs: 24,
          },
        },
      },
      {
        name: 'block2',
        tag: {
          className: 'car-content7-tag',
          text: { children: '定位引擎服务', className: 'car-content7-tag-name' },
          icon: { children: 'laptop' },
        },
        content: {
          className: 'car-content7-content',
          text: {
            className: 'car-content7-text',
            md: 14,
            xs: 24,
            children: (
              <span>
                <h3>作业车管理</h3>
                <p>
                作业车辆数据维护
                </p>
                <br />
                <h3>违章统计</h3>
                <p>
                违章数据报表
                </p>
                <br />
                <h3>
                报警提示
                </h3>通知现场作业人员注意安全
              </span>
            ),
          },
          img: {
            className: 'car-content7-img rotating-image',
            children: PointLine,
            md: 10,
            xs: 24,
          },
        },
      },
    ],
  },
};
export const Content00DataSource = {
  wrapper: { className: 'home-page-wrapper content0-wrapper' },
  page: { className: 'home-page content0' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [{ name: 'title', children: '产品与服务' }],
  },
  childWrapper: {
    className: 'content0-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
                'https://zos.alipayobjects.com/rmsportal/WBnVOjtIlGWbzyQivuyq.png',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: '一站式业务接入',
            },
            { name: 'content', children: '支付、结算、核算接入产品效率翻四倍' },
          ],
        },
      },
      {
        name: 'block1',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
                'https://zos.alipayobjects.com/rmsportal/YPMsLQuCEXtuEkmXTTdk.png',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: '一站式事中风险监控',
            },
            {
              name: 'content',
              children: '在所有需求配置环节事前风险控制和质量控制能力',
            },
          ],
        },
      },
      {
        name: 'block2',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
                'https://zos.alipayobjects.com/rmsportal/EkXWVvAaFJKCzhMmQYiX.png',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: '一站式数据运营',
            },
            {
              name: 'content',
              children: '沉淀产品接入效率和运营小二工作效率数据',
            },
          ],
        },
      },
    ],
  },
};
export const Content10DataSource = {
  wrapper: { className: 'home-page-wrapper content1-wrapper' },
  OverPack: { className: 'home-page content1', playScale: 0.3 },
  imgWrapper: { className: 'content1-img', md: 10, xs: 24 },
  img: {
    children: 'https://zos.alipayobjects.com/rmsportal/nLzbeGQLPyBJoli.png',
  },
  textWrapper: { className: 'content1-text', md: 14, xs: 24 },
  title: { className: 'content1-title', children: '企业资源管理' },
  content: {
    className: 'content1-content',
    children:
      '云资源集中编排、弹性伸缩、持续发布和部署，高可用及容灾。云资源集中编排、弹性伸缩、持续发布和部署，高可用及容灾。云资源集中编排、弹性伸缩、持续发布和部署，高可用及容灾。',
  },
};
export const Content30DataSource = {
  wrapper: { className: 'home-page-wrapper content3-wrapper' },
  page: { className: 'home-page content3' },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: '蚂蚁金融云提供专业的服务',
        className: 'title-h1',
      },
      {
        name: 'content',
        className: 'title-content',
        children: '基于阿里云强大的基础资源',
      },
    ],
  },
  block: {
    className: 'content3-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/ScHBSdwpTkAHZkJ.png',
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: '企业资源管理' },
          content: {
            className: 'content3-content',
            children:
              '云资源集中编排、弹性伸缩、持续发布和部署，高可用及容灾。',
          },
        },
      },
      {
        name: 'block1',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png',
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: '云安全' },
          content: {
            className: 'content3-content',
            children:
              '按金融企业安全要求打造的完整云上安全体系，全方位保障金融应用及数据安全。',
          },
        },
      },
      {
        name: 'block2',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png',
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: '云监控' },
          content: {
            className: 'content3-content',
            children:
              '分布式云环境集中监控，统一资源及应用状态视图，智能分析及故障定位。',
          },
        },
      },
      {
        name: 'block3',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/MNdlBNhmDBLuzqp.png',
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: '移动' },
          content: {
            className: 'content3-content',
            children:
              '一站式移动金融APP开发及全面监控；丰富可用组件，动态发布和故障热修复。',
          },
        },
      },
      {
        name: 'block4',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/UsUmoBRyLvkIQeO.png',
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: '分布式中间件' },
          content: {
            className: 'content3-content',
            children:
              '金融级联机交易处理中间件，大规模分布式计算机，数万笔/秒级并发能力，严格保证交易数据统一性。',
          },
        },
      },
      {
        name: 'block5',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/ipwaQLBLflRfUrg.png',
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: '大数据' },
          content: {
            className: 'content3-content',
            children:
              '一站式、全周期大数据协同工作平台，PB级数据处理、毫秒级数据分析工具。',
          },
        },
      },
    ],
  },
};
export const Footer00DataSource = {
  wrapper: { className: 'home-page-wrapper footer0-wrapper' },
  OverPack: { className: 'home-page footer0', playScale: 0.05 },
  copyright: {
    className: 'copyright',
    children: (
      <span>
        ©2018 <a href="https://motion.ant.design">Ant Motion</a> All Rights
        Reserved
      </span>
    ),
  },
};
