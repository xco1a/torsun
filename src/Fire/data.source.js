import React from 'react';
import FireArch from '@/assets/fire_arch.png';
import PointLine from '@/assets/point_line.png'
import FireFeature1 from '@/assets/fire_feature1.png'
import FireFeature2 from '@/assets/fire_feature2.png'
import FireFeature3 from '@/assets/fire_feature3.png'
import FireFeature4 from '@/assets/fire_feature4.png'
import FireFeature5 from '@/assets/fire_feature5.png'
import FireFeature6 from '@/assets/fire_feature6.png'
import {smoothScroll} from '../Car/data.source'

export const Banner30DataSource = {
  wrapper: { className: 'banner3' },
  textWrapper: {
    className: 'banner3-text-wrapper',
    children: [
      {
        name: 'slogan',
        className: 'banner3-slogan',
        children: '人工智能火焰识别系统',
        texty: true,
      },
      {
        name: 'name',
        className: 'banner3-name',
        children: '实时识别火灾隐患，提供全方位的安全防护',
      },
      { name: 'button', className: 'banner3-button', children: '了解更多', onClick: () => smoothScroll('Feature4_0') },
    ],
  },
};
export const Feature40DataSource = {
  wrapper: { className: 'home-page-wrapper fire-content6-wrapper' },
  OverPack: { className: 'home-page fire-content6' },
  textWrapper: { className: 'fire-content6-text' },
  titleWrapper: {
    className: 'fire-title-wrapper',
    children: [
      {
        name: 'title',
        children: 'AI火焰识别系统架构',
        className: 'title-h1',
      },
      {
        name: 'content',
        className: 'title-content',
        children: '在国家的相关政策要求指导下，基于智能边缘计算单元，搭建“云+边”协同的智能视频分析系统，实时监管生产环境风险，主要是火灾预警问题，并自动预警、上报、联动应急指挥。有效解决传统监管难度大、人工排查易疏漏、事前预防能力差和响应慢等痛点，构建了可升级、轻部署、易管理的智慧安监解决方案',
      },
    ],
  },
  img: {
    children: FireArch,
    className: 'fire-content6-img hover-scale',
    // xs: 24,
    // md: 14,
  },
  block: {
    children: [
      {
        name: 'block0',
        img: {
          children:
            'https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png',
          className: 'fire-content6-icon',
        },
        title: { className: 'fire-content6-title', children: '技术' },
        content: {
          className: 'fire-content6-content',
          children:
            '丰富的技术组件，简单组装即可快速搭建金融级应用，丰富的技术组件，简单组装即可快速搭建金融级应用。',
        },
      },
      {
        name: 'block1',
        img: {
          className: 'fire-content6-icon',
          children:
            'https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png',
        },
        title: { className: 'fire-content6-title', children: '融合' },
        content: {
          className: 'fire-content6-content',
          children:
            '解放业务及技术生产力，推动金融服务底层创新，推动金融服务底层创新。解放业务及技术生产力，推动金融服务底层创新。',
        },
      },
      {
        name: 'block2',
        img: {
          className: 'fire-content6-icon',
          children:
            'https://zos.alipayobjects.com/rmsportal/MNdlBNhmDBLuzqp.png',
        },
        title: { className: 'fire-content6-title', children: '开发' },
        content: {
          className: 'fire-content6-content',
          children:
            '符合金融及要求的安全可靠、高可用、高性能的服务能力，符合金融及要求的安全可靠、高可用、高性能的服务能力。',
        },
      },
    ],
  },
};
export const Feature50DataSource = {
  wrapper: { className: 'home-page-wrapper fire-content7-wrapper' },
  page: { className: 'home-page fire-content7' },
  OverPack: {},
  titleWrapper: {
    className: 'fire-title-wrapper',
    children: [
      {
        name: 'title',
        children: '产品服务',
        className: 'title-h1',
      },
      { name: 'content', children: '' },
    ],
  },
  tabsWrapper: { className: 'fire-content7-tabs-wrapper' },
  block: {
    children: [
      {
        name: 'block0',
        tag: {
          className: 'fire-content7-tag',
          text: { children: '边缘计算单元', className: 'fire-content7-tag-name' },
          icon: { children: 'mobile' },
        },
        content: {
          className: 'fire-content7-content',
          text: {
            className: 'fire-content7-text',
            md: 14,
            xs: 24,
            children: (
              <span>
                <h3>算法丰富，灵活调度</h3>
                <p>
                  多算法并行，多视角同步云端加载不同算法，灵活按需配置
                </p>
                <br />
                <h3>更轻量，易部署</h3>
                <p>
                  自带轻量web，无需专业机房，安装简单5G、WiFi、网口连接，即插即用
                </p>
                <br />
                <h3>
                  设备兼容性强
                </h3>标准技术协议，主流IPC、NVR设备全兼容低成本利旧升级，相互独立，互不影响
              </span>
            ),
          },
          img: {
            className: 'fire-content7-img rotating-image  ',
            children:
              PointLine,
            md: 10,
            xs: 24,
          },
        },
      },
      {
        name: 'block1',
        tag: {
          className: 'fire-content7-tag',
          icon: { children: 'tablet' },
          text: { className: 'fire-content7-tag-name', children: '智能视觉管理系统' },
        },
        content: {
          className: 'fire-content7-content',
          text: {
            className: 'fire-content7-text',
            md: 14,
            xs: 24,
            children: (
              <span>
                <h3>多端兼容</h3>
                <p>
                  支持多样化应用终端
                </p>
                <br />
                <h3>智能盯屏</h3>
                <p>
                  实时处理预警信息及分析预警情况
                </p>
                <br />
                <h3>
                  风险预警
                </h3>及时排查违规行为、安全隐患等问题
              </span>
            ),
          },
          img: {
            className: 'fire-content7-img rotating-image ',
            md: 10,
            xs: 24,
            children:
              PointLine,
          },
        },
      },
      // {
      //   name: 'block2',
      //   tag: {
      //     className: 'fire-content7-tag',
      //     text: { children: 'DESKTOP', className: 'fire-content7-tag-name' },
      //     icon: { children: 'laptop' },
      //   },
      //   content: {
      //     className: 'fire-content7-content',
      //     text: {
      //       className: 'fire-content7-text',
      //       md: 14,
      //       xs: 24,
      //       children: (
      //         <span>
      //           <h3>技术</h3>
      //           <p>
      //             丰富的技术组件，简单组装即可快速搭建金融级应用，丰富的技术组件，简单组装即可快速搭建金融级应用。
      //           </p>
      //           <br />
      //           <h3>融合</h3>
      //           <p>
      //             解放业务及技术生产力，推动金融服务底层创新，推动金融服务底层创新。解放业务及技术生产力，推动金融服务底层创新。
      //           </p>
      //           <br />
      //           <h3>
      //             开放
      //           </h3>符合金融及要求的安全可靠、高可用、高性能的服务能力，符合金融及要求的安全可靠、高可用、高性能的服务能力。
      //         </span>
      //       ),
      //     },
      //     img: {
      //       className: 'fire-content7-img rotating-image ',
      //       md: 10,
      //       xs: 24,
      //       children:
      //         PointLine,
      //     },
      //   },
      // },
    ],
  },
};
export const Content00DataSource = {
  wrapper: { className: 'home-page-wrapper fire-content0-wrapper' },
  page: { className: 'home-page fire-content0' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper home-title',
    children: [{ name: 'title', children: '产品功能' }],
  },
  childWrapper: {
    className: 'fire-content0-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'fire-content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'fire-content0-block-item',
          children: [
            {
              name: 'image',
              className: 'fire-content0-block-icon',
              children: <img src={FireFeature1} />,
            },
            {
              name: 'title',
              className: 'fire-content0-block-title',
              children: '火焰识别功能',
            },
            { name: 'content', children: '基于火焰识别技术，快速识别并定位火灾现场的火源。能够准确识别并区分真实火灾情况和误报信号，有效减少误警率' },
          ],
        },
      },
      {
        name: 'block1',
        className: 'fire-content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'fire-content0-block-item',
          children: [
            {
              name: 'image',
              className: 'fire-content0-block-icon',
              children: <img src={FireFeature2} />,
            },
            {
              name: 'title',
              className: 'fire-content0-block-title',
              children: '烟雾探测功能',
            },
            {
              name: 'content',
              children: '火灾初期通常引起烟雾，烟雾探测功能是火灾报警摄像头的重要功能之一。摄像头能够实时检测并识别烟雾并发出警报，帮助预防和控制火灾的发生',
            },
          ],
        },
      },
      {
        name: 'block2',
        className: 'fire-content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'fire-content0-block-item',
          children: [
            {
              name: 'image',
              className: 'fire-content0-block-icon',
              children: <img src={FireFeature3} />,
            },
            {
              name: 'title',
              className: 'fire-content0-block-title',
              children: '视频监控功能',
            },
            {
              name: 'content',
              children: '除了实时监测火情外，火灾报警摄像头还具备高清视频监控功能。可以捕捉并传输实时的监控画面，供相关人员查看和分析',
            },
          ],
        },
      },
      {
        name: 'block0',
        className: 'fire-content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'fire-content0-block-item',
          children: [
            {
              name: 'image',
              className: 'fire-content0-block-icon',
              children: <img src={FireFeature4} />,
            },
            {
              name: 'title',
              className: 'fire-content0-block-title',
              children: '智能分析功能',
            },
            { name: 'content', children: '现代火灾报警摄像头内置智能分析算法，能够学习并优化自身的识别能力。通过智能分析，摄像头可以更准确地识别火焰和烟雾，并根据火势的大小和蔓延速度，智能评估火灾风险，提前发出预警' },
          ],
        },
      },
      {
        name: 'block1',
        className: 'fire-content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'fire-content0-block-item',
          children: [
            {
              name: 'image',
              className: 'fire-content0-block-icon',
              children: <img src={FireFeature5} />,
            },
            {
              name: 'title',
              className: 'fire-content0-block-title',
              children: '联动报警系统',
            },
            {
              name: 'content',
              children: '火灾报警摄像头检测到火源时，不仅可以发出本地声光报警，还能与建筑内的其他安全系统（如消防报警系统、门禁系统等）进行联动。确保在火灾发生时相关信息能够迅速传达给相关人员，从而快速响应',
            },
          ],
        },
      },
      {
        name: 'block2',
        className: 'fire-content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'fire-content0-block-item',
          children: [
            {
              name: 'image',
              className: 'fire-content0-block-icon',
              children: <img src={FireFeature6} />,
            },
            {
              name: 'title',
              className: 'fire-content0-block-title',
              children: '数据存储与分析功能',
            },
            {
              name: 'content',
              children: '为了便于后续分析和取证，火灾报警摄像头通常配备了大容量存储设备，能够长时间保存监控视频和报警记录',
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
  wrapper: { className: 'home-page-wrapper fire-content3-wrapper' },
  page: { className: 'home-page fire-content3' },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: 'fire-title-wrapper home-title',
    children: [
      {
        name: 'title',
        children: '产品优势',
        className: 'title-h1',
      },
      {
        name: 'content',
        className: 'title-content',
        children: '',
      },
    ],
  },
  block: {
    className: 'fire-content3-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'fire-content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'fire-content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/ScHBSdwpTkAHZkJ.png',
          },
          textWrapper: { className: 'fire-content3-text' },
          title: { className: 'fire-content3-title', children: '7*24小时实时智能视频分析' },
          content: {
            className: 'fire-content3-content',
            children: '全时间段全方位分析火灾隐患',
          },
        },
      },
      {
        name: 'block1',
        className: 'fire-content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'fire-content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/UsUmoBRyLvkIQeO.png',
          },
          textWrapper: { className: 'fire-content3-text' },
          title: { className: 'fire-content3-title', children: '低成本利旧升级' },
          content: {
            className: 'fire-content3-content',
            children: '利用现有硬件设备，低成本升级',
          },
        },
      },
      {
        name: 'block2',
        className: 'fire-content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'fire-content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png',
          },
          textWrapper: { className: 'fire-content3-text' },
          title: { className: 'fire-content3-title', children: '可视化平台监管' },
          content: {
            className: 'fire-content3-content',
            children: '可视化平台监管，实时监控火灾隐患',
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
