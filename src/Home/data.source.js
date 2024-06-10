import React from "react";
import { history } from "umi";

import Logo from "../assets/logo.png";
import HomeBoxPng from "@/assets/home_box.png";
import CarPng from "@/assets/car.png";
import FirePng from "@/assets/fire.png";
import HomeAlgoIcon1 from "@/assets/home_algo_icon/xiaofanggongcheng.svg";
import HomeAlgoIcon2 from "@/assets/home_algo_icon/renyuananquan.svg";
import HomeAlgoIcon3 from "@/assets/home_algo_icon/chelianganquan.svg";
import HomeAlgoIcon4 from "@/assets/home_algo_icon/hangweifenxi.svg";
import HomeAlgoIcon5 from "@/assets/home_algo_icon/anfangjiankong.svg";
import HomeAlgoIcon6 from "@/assets/home_algo_icon/huanbaojiankong.svg";

import HomeSceneGIcon1 from "@/assets/home_scene_icon/gaokongpaowu.svg";
import HomeSceneGIcon2 from "@/assets/home_scene_icon/yanhuojiance.svg";
import HomeSceneGIcon3 from "@/assets/home_scene_icon/face-mask.svg";
import HomeSceneGIcon4 from "@/assets/home_scene_icon/maozi.svg";
import HomeSceneGIcon5 from "@/assets/home_scene_icon/fanguangyi.svg";
import HomeSceneGIcon6 from "@/assets/home_scene_icon/shuaidao.svg";
import HomeSceneGIcon7 from "@/assets/home_scene_icon/mbile.svg";
import HomeSceneGIcon8 from "@/assets/home_scene_icon/ligang.svg";
import HomeSceneGIcon9 from "@/assets/home_scene_icon/shuigangjiance.svg";
import HomeSceneGIcon10 from "@/assets/home_scene_icon/fenxiangchaxun_bodashouji.svg";
import HomeSceneGIcon11 from "@/assets/home_scene_icon/wanshoujijiance.svg";
import HomeSceneGIcon12 from "@/assets/home_scene_icon/renyuanxiyan.svg";
import HomeSceneGIcon13 from "@/assets/home_scene_icon/quyuruqin.svg";
import HomeSceneGIcon14 from "@/assets/home_scene_icon/vehicle-violation.svg";
import HomeSceneGIcon15 from "@/assets/home_scene_icon/keliutongji.svg";
import HomeSceneGIcon16 from "@/assets/home_scene_icon/renshutongji.svg";
import HomeSceneGIcon17 from "@/assets/home_scene_icon/gongfujiance.svg";
import HomeSceneGIcon18 from "@/assets/home_scene_icon/xiaofangtongdaozhanyong.svg";
import HomeSceneGIcon19 from "@/assets/home_scene_icon/lajitongmanyi.svg";
import HomeSceneGIcon20 from "@/assets/home_scene_icon/chuyulaji-guopi.svg";
import HomeSceneGIcon21 from "@/assets/home_scene_icon/erji-renyuanchuangru.svg";
import HomeSceneGIcon22 from "@/assets/home_scene_icon/knife-kitchen.svg";
import HomeSceneGIcon23 from "@/assets/home_scene_icon/baojinghangwei-renshuyichang.svg";
import HomeSceneGIcon24 from "@/assets/home_scene_icon/paihuai.svg";



export const Nav30DataSource = {
  wrapper: { className: "header3 home-page-wrapper" },
  page: { className: "home-page" },
  logo: {
    className: "header3-logo",
    onClick: () => history.push("/"),
    children: Logo,
  },
  Menu: {
    className: "header3-menu",
    children: [
      {
        name: "item0",
        className: "header3-item",
        children: {
          href: "/",
          children: [{ children: "首页", name: "text" }],
        },
      },
      {
        name: "item1",
        className: "header3-item",
        children: {
          href: "#",
          children: [{ children: "核心产品", name: "text" }],
        },
        subItem: [
          {
            name: "box",
            className: "item-sub",
            href: "/box",
            onClick: () => history.push("/box"),
            children: {
              className: "item-sub-item",
              children: [
                {
                  name: "title",
                  className: "item-title",
                  children: "前端计算智能分析一体机",
                },
                {
                  name: "content",
                  className: "item-content",
                  children: "国产供应链联合打造，百分百自主可控",
                },
              ],
            },
          },
          {
            name: "car",
            className: "item-sub",
            href: "/car",
            onClick: () => history.push("/car"),
            children: {
              className: "item-sub-item",
              children: [
                {
                  name: "title",
                  className: "item-title",
                  children: "高精度车辆监控定位",
                },
                {
                  name: "content",
                  className: "item-content",
                  children: "UWB超宽带 + VRH视觉识别系统级方案",
                },
              ],
            },
          },
          {
            name: "fire",
            className: "item-sub",
            onClick: () => history.push("/fire"),
            children: {
              className: "item-sub-item",
              children: [
                {
                  name: "title",
                  className: "item-title",
                  children: "AI火焰识别",
                },
                {
                  name: "content",
                  className: "item-content",
                  children: "实时识别火灾隐患",
                },
              ],
            },
          },
        ],
      },
      {
        name: "about",
        className: "header3-item",
        children: {
          href: "/about",
          children: [{ children: "关于我们", name: "text" }],
        },
      },
    ],
  },
  mobileMenu: { className: "header3-mobile-menu" },
};
export const Banner10DataSource = {
  wrapper: { className: "banner1" },
  BannerAnim: {
    children: [
      {
        name: "elem0",
        BannerElement: { className: "banner-user-elem" },
        textWrapper: { className: "banner1-text-wrapper" },
        bg: { className: "bg bg0" },
        title: {
          className: "banner1-title",
          children: "拓晟数创视觉科技",
        },
        content: {
          className: "banner1-content",
          children: "AI视觉识别解决方案提供商",
        },
        button: { className: "banner1-button", children: "" },
      },
      {
        name: "elem1",
        BannerElement: { className: "banner-user-elem" },
        textWrapper: { className: "banner1-text-wrapper" },
        bg: { className: "bg bg1" },
        title: {
          className: "banner1-title",
          children: "高精度车辆监控定位系统",
        },
        content: {
          className: "banner1-content",
          children:
            "厂区人员定位、车站作业车辆监控、仓储物料监管等场景解决方案",
        },
        button: {
          className: "banner1-button",
          children: "了解更多",
          onClick: () => history.push("/car"),
        },
      },
      {
        name: "elem2",
        BannerElement: { className: "banner-user-elem" },
        textWrapper: { className: "banner1-text-wrapper" },
        bg: { className: "bg bg2" },
        title: {
          className: "banner1-title",
          children: "AI火焰识别系统",
        },
        content: {
          className: "banner1-content",
          children: "实时检测识别各种类型的火焰，有效预防火灾隐患",
        },
        button: {
          className: "banner1-button",
          children: "了解更多",
          onClick: () => history.push("/fire"),
        },
      },
    ],
  },
};

export const Feature10DataSource = {
  wrapper: { className: "homepage-content1-wrapper home-page-wrapper" },
  OverPack: { className: "home-page homepage-content1", playScale: 0.3 },
  imgWrapper: { className: "homepage-content1-img", md: 10, xs: 24 },
  img: {
    children: HomeBoxPng,
  },
  textWrapper: { className: "homepage-content1-text", md: 14, xs: 24 },
  title: {
    className: "homepage-content1-title",
    style: { marginBpttom: "12px" },
    children: "前端计算智能分析一体机",
  },
  content: {
    className: "homepage-content1-content",
    children: (
      <div>
        <p>
          集视频接入、数据传输、数据存储、视觉分析算法、视频流媒体等多种技术为一体的前端计算智能AI分析微服务器产品。
        </p>
        <br/>
        <p>
          支持4路、8路、16路、32路等多路视频接入，支持H.264、H.265、MJPEG等多种视频编码格式，支持RTSP、RTMP、HTTP、ONVIF等多种视频流传输协议，支持本地存储、云存储、FTP存储等多种存储方式，覆盖工业、家用多种应用场景。
        </p>
      </div>
    ),
  },
};

export const Feature00DataSource = {
  wrapper: { className: "home-content0-wrapper home-page-wrapper " },
  page: { className: " home-content0 home-page" },
  OverPack: { playScale: 0.3, className: "" },
  childWrapper: {
    className: "home-content0-block-wrapper",
    children: [
      {
        name: "block1",
        className: "home-content0-block hover-scale",
        md: 12,
        xs: 24,
        onClick: () => history.push("/car"),
        children: {
          className: "home-content0-block-item",
          children: [
            {
              name: "image",
              className: "home-content0-block-icon",
              children: <img src={CarPng} alt="car" />,
            },
            {
              name: "title",
              className: "home-content0-block-title",
              children: "高精度车辆监控定位系统",
            },
            {
              name: "content",
              children:
                "利用UWB(超宽带)技术定位和VRH(视觉识别)视频监控的系统级方案",
            },
          ],
        },
      },
      {
        name: "block2",
        className: "home-content0-block  hover-scale",
        md: 12,
        xs: 24,
        onClick: () => history.push("/fire"),
        children: {
          className: "home-content0-block-item",
          children: [
            {
              name: "image",
              className: "home-content0-block-icon",
              children: <img src={FirePng} alt="fire" />,
            },
            {
              name: "title",
              className: "home-content0-block-title",
              children: "人工智能火焰识别系统",
            },
            {
              name: "content",
              children: "实时检测识别各种类型的火焰，有效预防火灾隐患",
            },
          ],
        },
      },
    ],
  },
};

export const Content130DataSource = {
  OverPack: {
    className: "home-page-wrapper content13-wrapper",
    playScale: 0.3,
  },
  titleWrapper: {
    className: "title-wrapper",
    children: [
      {
        name: "image",
        children: "",
        className: "title-image",
      },
      {
        name: "title",
        children: "提供视觉识别解决方案 共创AI智能新商业",
        className: "title-h1",
      },
      {
        name: "content",
        children: "拓晟真诚希望与您交流，请联系我们",
        className: "title-content",
      },
      {
        name: "content2",
        children: (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "48px",
              fontSize: "38px",
            }}
          >
            <div style={{ display: "inline-block" }}>
              <svg
                style={{ width: "54px", height: "54px" }}
                t="1670553992630"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="44383"
                data-spm-anchor-id="a313x.7781069.0.i13"
                width="200"
                height="200"
              >
                <path
                  d="M512 0C230.4 0 0 230.4 0 512s230.4 512 512 512 512-230.4 512-512-230.4-512-512-512z m243.2 704l-25.6 25.6-6.4 6.4-6.4 6.4c-32 32-140.8 76.8-332.8-108.8-179.2-179.2-128-288-102.4-320l44.8-44.8c19.2-19.2 51.2-19.2 70.4 0l64 64c19.2 19.2 19.2 51.2 0 70.4l-38.4 32-6.4 12.8c-19.2 19.2-19.2 25.6 6.4 51.2l96 89.6c44.8 38.4 51.2 38.4 70.4 25.6l32-38.4c19.2-19.2 51.2-25.6 70.4-6.4l64 64c19.2 19.2 19.2 51.2 0 70.4z"
                  p-id="44384"
                  data-spm-anchor-id="a313x.7781069.0.i14"
                  class=""
                  fill="#00afa9"
                ></path>
              </svg>
            </div>
            <a
              href="tel:13677066692"
              style={{
                display: "inline-block",
                lineHeight: "54px",
                color: "white",
              }}
            >
              136-7706-6692
            </a>
          </div>
        ),
        className: "title-content",
      },
    ],
  },
};

export const Content50DataSource = {
  wrapper: { className: "home-page-wrapper home-content5-wrapper" },
  page: { className: "home-page home-content5" },
  OverPack: { playScale: 0.3, className: "" },
  titleWrapper: {
    className: "title-wrapper",
    children: [
      // { name: 'title', children: '客户案例', className: 'title-h1' },
      {
        name: "content",
        className: "title-content",
        children: "算法多样化，全场景AI监控预警",
      },
    ],
  },
  block: {
    className: "home-content5-img-wrapper",
    gutter: 16,
    children: [
      {
        name: "block0",
        className: "block",
        md: 3,
        xs: 24,
        children: {
          wrapper: { className: "content5-block-content" },
          img: {
            children: window.location.protocol + '//' + window.location.host + HomeSceneGIcon1,
          },
          content: { children: "高空抛物检测" },
        },
      },
      {
        name: "block1",
        className: "block",
        md: 3,
        xs: 24,
        children: {
          wrapper: { className: "content5-block-content" },
          img: {
            children:
            window.location.protocol + '//' + window.location.host + HomeSceneGIcon2,
          },
          content: { children: "烟火检测" },
        },
      },
      {
        name: "block2",
        className: "block",
        md: 3,
        xs: 24,
        children: {
          wrapper: { className: "content5-block-content" },
          img: {
            children:
              window.location.protocol + '//' + window.location.host + HomeSceneGIcon3,
          },
          content: { children: "未佩戴口罩检测" },
        },
      },
      {
        name: "block3",
        className: "block",
        md: 3,
        xs: 24,
        children: {
          wrapper: { className: "content5-block-content" },
          img: {
            children:
            window.location.protocol + '//' + window.location.host + HomeSceneGIcon4,
          },
          content: { children: "安全帽检测" },
        },
      },
      {
        name: "block4",
        className: "block",
        md: 3,
        xs: 24,
        children: {
          wrapper: { className: "content5-block-content" },
          img: {
            children:
              window.location.protocol + '//' + window.location.host + HomeSceneGIcon5,
          },
          content: { children: "反光衣检测" },
        },
      },
      {
        name: "block5",
        className: "block",
        md: 3,
        xs: 24,
        children: {
          wrapper: { className: "content5-block-content" },
          img: {
            children:
              window.location.protocol + '//' + window.location.host + HomeSceneGIcon6,
          },
          content: { children: "人员摔倒检测" },
        },
      },
      {
        name: "block6",
        className: "block",
        md: 3,
        xs: 24,
        children: {
          wrapper: { className: "content5-block-content" },
          img: {
            children:
              window.location.protocol + '//' + window.location.host + HomeSceneGIcon7,
          },
          content: { children: "电瓶车检测" },
        },
      },
      {
        name: "block7",
        className: "block",
        md: 3,
        xs: 24,
        children: {
          wrapper: { className: "content5-block-content" },
          img: {
            children:
              window.location.protocol + '//' + window.location.host + HomeSceneGIcon8,
          },
          content: { children: "人员离岗检测" },
        },
      },
      {
        name: "block8",
        className: "block",
        md: 3,
        xs: 24,
        children: {
          wrapper: { className: "content5-block-content" },
          img: {
            children:
              window.location.protocol + '//' + window.location.host + HomeSceneGIcon9,
          },
          content: { children: "人员睡岗检测" },
        },
      },
      {
        name: "block9",
        className: "block",
        md: 3,
        xs: 24,
        children: {
          wrapper: { className: "content5-block-content" },
          img: {
            children:
              window.location.protocol + '//' + window.location.host + HomeSceneGIcon10,
          },
          content: { children: "人员打手机检测" },
        },
      },
      {
        name: "block10",
        className: "block",
        md: 3,
        xs: 24,
        children: {
          wrapper: { className: "content5-block-content" },
          img: {
            children:
              window.location.protocol + '//' + window.location.host + HomeSceneGIcon11,
          },
          content: { children: "人员玩手机检测" },
        },
      },
      {
        name: "block11",
        className: "block",
        md: 3,
        xs: 24,
        children: {
          wrapper: { className: "content5-block-content" },
          img: {
            children:
              window.location.protocol + '//' + window.location.host + HomeSceneGIcon12,
          },
          content: { children: "人员吸烟检测" },
        },
      },
      {
        name: "block12",
        className: "block",
        md: 3,
        xs: 24,
        children: {
          wrapper: { className: "content5-block-content" },
          img: {
            children:
              window.location.protocol + '//' + window.location.host + HomeSceneGIcon13,
          },
          content: { children: "区域入侵检测" },
        },
      },
      {
        name: "block13",
        className: "block",
        md: 3,
        xs: 24,
        children: {
          wrapper: { className: "content5-block-content" },
          img: {
            children:
              window.location.protocol + '//' + window.location.host + HomeSceneGIcon14,
          },
          content: { children: "车辆违停检测" },
        },
      },
      {
        name: "block14",
        className: "block",
        md: 3,
        xs: 24,
        children: {
          wrapper: { className: "content5-block-content" },
          img: {
            children:
              window.location.protocol + '//' + window.location.host + HomeSceneGIcon15,
          },
          content: { children: "出入口客流统计" },
        },
      },
      {
        name: "block15",
        className: "block",
        md: 3,
        xs: 24,
        children: {
          wrapper: { className: "content5-block-content" },
          img: {
            children:
              window.location.protocol + '//' + window.location.host + HomeSceneGIcon16,
          },
          content: { children: "区域人数统计" },
        },
      },
      {
        name: "block16",
        className: "block",
        md: 3,
        xs: 24,
        children: {
          wrapper: { className: "content5-block-content" },
          img: {
            children:
              window.location.protocol + '//' + window.location.host + HomeSceneGIcon17,
          },
          content: { children: "工服检测" },
        },
      },
      {
        name: "block17",
        className: "block",
        md: 3,
        xs: 24,
        children: {
          wrapper: { className: "content5-block-content" },
          img: {
            children:
              window.location.protocol + '//' + window.location.host + HomeSceneGIcon18,
          },
          content: { children: "消防逃生通道占用检测" },
        },
      },
      {
        name: "block18",
        className: "block",
        md: 3,
        xs: 24,
        children: {
          wrapper: { className: "content5-block-content" },
          img: {
            children:
              window.location.protocol + '//' + window.location.host + HomeSceneGIcon19,
          },
          content: { children: "垃圾桶满溢检测" },
        },
      },
      {
        name: "block19",
        className: "block",
        md: 3,
        xs: 24,
        children: {
          wrapper: { className: "content5-block-content" },
          img: {
            children:
              window.location.protocol + '//' + window.location.host + HomeSceneGIcon20,
          },
          content: { children: "垃圾乱投落地检测" },
        },
      },
      {
        name: "block20",
        className: "block",
        md: 3,
        xs: 24,
        children: {
          wrapper: { className: "content5-block-content" },
          img: {
            children:
              window.location.protocol + '//' + window.location.host + HomeSceneGIcon21,
          },
          content: { children: "来人提醒" },
        },
      },
      {
        name: "block21",
        className: "block",
        md: 3,
        xs: 24,
        children: {
          wrapper: { className: "content5-block-content" },
          img: {
            children:
            window.location.protocol + '//' + window.location.host + HomeSceneGIcon22,
          },
          content: { children: "刀具检测" },
        },
      },
      {
        name: "block23",
        className: "block",
        md: 3,
        xs: 24,
        children: {
          wrapper: { className: "content5-block-content" },
          img: {
            children:
            window.location.protocol + '//' + window.location.host + HomeSceneGIcon23,
          },
          content: { children: "区域人数异常检测" },
        },
      },
      {
        name: "block22",
        className: "block",
        md: 3,
        xs: 24,
        children: {
          wrapper: { className: "content5-block-content" },
          img: {
            children:
            window.location.protocol + '//' + window.location.host + HomeSceneGIcon24,
          },
          content: { children: "人员徘徊检测" },
        },
      },
      
    ],
  },
};


export const Content00DataSource = {
  wrapper: { className: 'home-page-wrapper home-content0-wrapper' },
  page: { className: 'home-page home-content0' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper home-title',
    style: {marginTop: 118, fontWeight: 'bold'},
    children: [{ name: 'title', children: '多样化行业算法' }],
  },
  childWrapper: {
    className: 'home-content0-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'home-content0-block  hover-scale',
        md: 4,
        xs: 24,
        children: {
          className: 'home-content0-block-item',
          children: [
            {
              name: 'image',
              className: 'home-content0-block-icon',
              children: <img src={HomeAlgoIcon1} />,
            },
            {
              name: 'title',
              className: 'home-content0-block-title',
              children: '消防安全',
            },
            { name: 'content', children: '' },
          ],
        },
      },
      {
        name: 'block1',
        className: 'home-content0-block  hover-scale',
        md: 4,
        xs: 24,
        children: {
          className: 'home-content0-block-item',
          children: [
            {
              name: 'image',
              className: 'home-content0-block-icon',
              children: <img src={HomeAlgoIcon2} />,
            },
            {
              name: 'title',
              className: 'home-content0-block-title',
              children: '人员安全',
            },
            {
              name: 'content',
              children: '',
            },
          ],
        },
      },
      {
        name: 'block2',
        className: 'home-content0-block  hover-scale',
        md: 4,
        xs: 24,
        children: {
          className: 'home-content0-block-item',
          children: [
            {
              name: 'image',
              className: 'home-content0-block-icon',
              children: <img src={HomeAlgoIcon3} />,
            },
            {
              name: 'title',
              className: 'home-content0-block-title',
              children: '车辆安全',
            },
            {
              name: 'content',
              children: '',
            },
          ],
        },
      },
      {
        name: 'block0',
        className: 'home-content0-block  hover-scale',
        md: 4,
        xs: 24,
        children: {
          className: 'home-content0-block-item',
          children: [
            {
              name: 'image',
              className: 'home-content0-block-icon',
              children: <img src={HomeAlgoIcon4} />,
            },
            {
              name: 'title',
              className: 'home-content0-block-title',
              children: '行为分析',
            },
            { name: 'content', children: '' },
          ],
        },
      },
      {
        name: 'block1',
        className: 'home-content0-block  hover-scale',
        md: 4,
        xs: 24,
        children: {
          className: 'home-content0-block-item',
          children: [
            {
              name: 'image',
              className: 'home-content0-block-icon',
              children: <img src={HomeAlgoIcon5} />,
            },
            {
              name: 'title',
              className: 'home-content0-block-title',
              children: '环保监控',
            },
            {
              name: 'content',
              children: '',
            },
          ],
        },
      },
      {
        name: 'block2',
        className: 'home-content0-block  hover-scale',
        md: 4,
        xs: 24,
        children: {
          className: 'home-content0-block-item',
          children: [
            {
              name: 'image',
              className: 'home-content0-block-icon',
              children: <img src={HomeAlgoIcon6} />,
            },
            {
              name: 'title',
              className: 'home-content0-block-title',
              children: '区域监测',
            },
            {
              name: 'content',
              children: '',
            },
          ],
        },
      },
    ],
  },
};

export const Content90DataSource = {
  wrapper: { className: "home-page-wrapper content9-wrapper" },
  page: { className: "home-page content9" },
  titleWrapper: {
    className: "title-wrapper",
    children: [
      {
        name: "image",
        children: "",
        className: "title-image",
      },
      { name: "title", children: "", className: "title-h1" },
    ],
  },
  block: {
    className: "timeline",
    children: [
      {
        name: "block0",
        className: "block-wrapper",
        playScale: 0.3,
        children: {
          imgWrapper: { className: "image-wrapper" },
          textWrapper: { className: "text-wrapper" },
          img: {
            className: "block-img",
            children:
              "https://gw.alipayobjects.com/zos/rmsportal/SlFgHDtOTLzccvFrQHLg.png",
          },
          icon: {
            className: "block-icon",
            children:
              "https://gw.alipayobjects.com/zos/rmsportal/qJnGrvjXPxdKETlVSrbe.svg",
          },
          name: { className: "block-name", children: "姓名" },
          post: { className: "block-post", children: "公司 职位" },
          time: { className: "block-time", children: "09:00 - 10:00" },
          title: { className: "block-title", children: "开幕致辞" },
          content: { className: "block-content", children: "" },
        },
      },
      {
        name: "block1",
        className: "block-wrapper",
        playScale: 0.3,
        children: {
          imgWrapper: { className: "image-wrapper" },
          textWrapper: { className: "text-wrapper" },
          img: {
            className: "block-img",
            children:
              "https://gw.alipayobjects.com/zos/rmsportal/SlFgHDtOTLzccvFrQHLg.png",
          },
          icon: {
            className: "block-icon",
            children:
              "https://gw.alipayobjects.com/zos/rmsportal/QviGtUPvTFxdhsTUAacr.svg",
          },
          name: { className: "block-name", children: "姓名" },
          post: { className: "block-post", children: "公司 职位" },
          time: { className: "block-time", children: "09:00 - 10:00" },
          title: { className: "block-title", children: "演示标题 - XYZ" },
          content: {
            className: "block-content",
            children:
              "经过近 3 年的打磨，在助力中台产品研发效能提升的目标之上，包含设计语言、UI 资产、可视化以及产品体验相关的蚂蚁中台设计体系正在逐步成型。此次分享包含两部分，在介绍蚂蚁设计体系的同时，也会和大家分享我们在设计语言的部分探索。",
          },
        },
      },
      {
        name: "block2",
        className: "block-wrapper",
        playScale: 0.3,
        children: {
          imgWrapper: { className: "image-wrapper" },
          textWrapper: { className: "text-wrapper" },
          img: {
            className: "block-img",
            children:
              "https://gw.alipayobjects.com/zos/rmsportal/SlFgHDtOTLzccvFrQHLg.png",
          },
          icon: {
            className: "block-icon",
            children:
              "https://gw.alipayobjects.com/zos/rmsportal/QviGtUPvTFxdhsTUAacr.svg",
          },
          name: { className: "block-name", children: "姓名" },
          post: { className: "block-post", children: "公司 职位" },
          time: { className: "block-time", children: "09:00 - 10:00" },
          title: { className: "block-title", children: "演示标题 - XYZ" },
          content: {
            className: "block-content",
            children:
              "经过近 3 年的打磨，在助力中台产品研发效能提升的目标之上，包含设计语言、UI 资产、可视化以及产品体验相关的蚂蚁中台设计体系正在逐步成型。此次分享包含两部分，在介绍蚂蚁设计体系的同时，也会和大家分享我们在设计语言的部分探索。",
          },
        },
      },
      {
        name: "block3",
        className: "block-wrapper",
        playScale: 0.3,
        children: {
          imgWrapper: { className: "image-wrapper" },
          textWrapper: { className: "text-wrapper" },
          img: {
            className: "block-img",
            children:
              "https://gw.alipayobjects.com/zos/rmsportal/SlFgHDtOTLzccvFrQHLg.png",
          },
          icon: {
            className: "block-icon",
            children:
              "https://gw.alipayobjects.com/zos/rmsportal/agOOBdKEIJlQhfeYhHJc.svg",
          },
          name: { className: "block-name", children: "姓名" },
          post: { className: "block-post", children: "公司 职位" },
          time: { className: "block-time", children: "09:00 - 10:00" },
          title: { className: "block-title", children: "演示标题 - XYZ" },
          content: {
            className: "block-content",
            children:
              "经过近 3 年的打磨，在助力中台产品研发效能提升的目标之上，包含设计语言、UI 资产、可视化以及产品体验相关的蚂蚁中台设计体系正在逐步成型。此次分享包含两部分，在介绍蚂蚁设计体系的同时，也会和大家分享我们在设计语言的部分探索。",
          },
        },
      },
    ],
  },
};
export const Footer10DataSource = {
  wrapper: { className: "home-page-wrapper footer1-wrapper" },
  OverPack: { className: "footer1", playScale: 0.2 },
  block: {
    className: "home-page",
    gutter: 0,
    children: [
      {
        name: "block0",
        xs: 24,
        md: 10,
        className: "block",
        title: {
          className: "logo",
          children: (
            <img
              src={Logo}
              alt="logo"
              style={{ width: "180px", height: "52px", objectFit: "cover" }}
            />
          ),
        },
        childWrapper: {
          className: "slogan",
          children: [
            {
              name: "content0",
              children: `Torsun Vision Technology CO., LTD`,
            },
          ],
        },
      },
      {
        name: "block1",
        xs: 24,
        md: 7,
        className: "block",
        title: { children: "产品" },
        childWrapper: {
          children: [
            { name: "link0", href: "/", children: "首页" },
            { name: "link1", href: "/car", children: "高精度车辆监控定位系统" },
            { name: "link2", href: "/fire", children: "AI火焰识别系统" },
          ],
        },
      },
      {
        name: "block2",
        xs: 24,
        md: 7,
        className: "block",
        title: { children: "关于" },
        childWrapper: {
          children: [{ href: "/about", name: "link1", children: "联系我们" }],
        },
      },
    ],
  },
  copyrightWrapper: { className: "copyright-wrapper" },
  copyrightPage: { className: "home-page" },
  copyright: {
    className: "copyright",
    children: (
      <div>
        <span>
          ©2024 <a href="#">苏州拓晟数创视觉科技有限公司</a> All Rights
          Reserved.
        </span>
        <span>LTD苏ICP备2024099080号</span>
      </div>
    ),
  },
};
