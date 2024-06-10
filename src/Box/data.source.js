import React from "react";
import { history } from "umi";

import BoxDetail from "@/assets/box_detail.png";
import TsArch from "@/assets/ts_arch.png"

import BoxFeatureIcon1 from "@/assets/box_feature_icon/shebeiguanli.svg";
import BoxFeatureIcon2 from "@/assets/box_feature_icon/gaojingzhongxin.svg";
import BoxFeatureIcon3 from "@/assets/box_feature_icon/jiashicang.svg";
import BoxFeatureIcon4 from "@/assets/box_feature_icon/suanfazhongxin_normal.svg";
import BoxFeatureIcon5 from "@/assets/box_feature_icon/shebeileiqiujizhinengfenxi.svg";
import BoxFeatureIcon6 from "@/assets/box_feature_icon/a-lujing89.svg";

import ItemPointIcon from "@/assets/item_point.svg";
import { smoothScroll } from "../Car/data.source";

export const Banner30DataSource = {
  wrapper: { className: "banner3 box" },
  textWrapper: {
    className: "banner3-text-wrapper",
    children: [
      {
        name: "slogan",
        className: "banner3-slogan",
        children: "前端计算智能分析一体机",
        texty: true,
      },
      {
        name: "name",
        className: "banner3-name",
        children:
          "国产供应链联合打造，百分百自主可控，支持自由组合算法，满足各种不同需求",
      },
      {
        name: "button",
        className: "banner3-button",
        children: "了解更多",
        onClick: () => smoothScroll("box-detail-start"),
      },
    ],
  },
};

export const Feature40DataSource = {
  wrapper: { className: "home-page-wrapper box-content6-wrapper" },
  OverPack: { className: "home-page box-content6" },
  textWrapper: { className: "box-content6-text", xs: 24, md: 10 },
  titleWrapper: {
    className: "title-wrapper",
    children: [
      {
        name: "title",
        children: "",
        className: "title-h1",
      },
      {
        name: "content",
        className: "title-content",
        children:
          "依托国产供应链，联合打造，百分百自主可控，纯国产化的前端计算智能分析一体机，可根据不同场景需求，自由组合算法，满足各种不同需求",
      },
    ],
  },
  img: {
    children: BoxDetail,
    className: "box-content6-img hover-scale",
    xs: 24,
    md: 14,
  },
  block: {
    children: [
      {
        name: "block0",
        img: {
          children:
            window.location.protocol +
            "//" +
            window.location.host +
            ItemPointIcon,
          className: "box-content6-icon",
        },
        title: { className: "box-content6-title", children: "" },
        content: {
          className: "box-content6-content",
          children: "支持4路、8路、16路、32路、64路网络视频接入",
        },
      },
      {
        name: "block1",
        img: {
          className: "box-content6-icon",
          children:
            window.location.protocol +
            "//" +
            window.location.host +
            ItemPointIcon,
        },
        title: { className: "box-content6-title", children: "" },
        content: {
          className: "box-content6-content",
          children: "支持主流品牌监控摄像头",
        },
      },
      {
        name: "block2",
        img: {
          className: "box-content6-icon",
          children:
            window.location.protocol +
            "//" +
            window.location.host +
            ItemPointIcon,
        },
        title: { className: "box-content6-title", children: "" },
        content: {
          className: "box-content6-content",
          children: "支持视频与图片混合存储",
        },
      },
      {
        name: "block2",
        img: {
          className: "box-content6-icon",
          children:
            window.location.protocol +
            "//" +
            window.location.host +
            ItemPointIcon,
        },
        title: { className: "box-content6-title", children: "" },
        content: {
          className: "box-content6-content",
          children: "支持算法在线更新和离线更新",
        },
      },
      {
        name: "block2",
        img: {
          className: "box-content6-icon",
          children:
            window.location.protocol +
            "//" +
            window.location.host +
            ItemPointIcon,
        },
        title: { className: "box-content6-title", children: "" },
        content: {
          className: "box-content6-content",
          children: "支持单机运行，支持集成平台",
        },
      },
      {
        name: "block2",
        img: {
          className: "box-content6-icon",
          children:
            window.location.protocol +
            "//" +
            window.location.host +
            ItemPointIcon,
        },
        title: { className: "box-content6-title", children: "" },
        content: {
          className: "box-content6-content",
          children: "纯国产AI算力芯片、纯国产操作系统",
        },
      },
      {
        name: "block2",
        img: {
          className: "box-content6-icon",
          children:
            window.location.protocol +
            "//" +
            window.location.host +
            ItemPointIcon,
        },
        title: { className: "box-content6-title", children: "" },
        content: {
          className: "box-content6-content",
          children: "视频格式 h.264,h.265,mpeg，图片格式 jpg,bmp,png",
        },
      },
      {
        name: "block2",
        img: {
          className: "box-content6-icon",
          children:
            window.location.protocol +
            "//" +
            window.location.host +
            ItemPointIcon,
        },
        title: { className: "box-content6-title", children: "" },
        content: {
          className: "box-content6-content",
          children: "同时支持图片、视频存储/预览/回放",
        },
      },
      {
        name: "block2",
        img: {
          className: "box-content6-icon",
          children:
            window.location.protocol +
            "//" +
            window.location.host +
            ItemPointIcon,
        },
        title: { className: "box-content6-title", children: "" },
        content: {
          className: "box-content6-content",
          children:
            "内置一体化平台，可脱离服务器，bs架构，实现单机“算、存、管”",
        },
      },
    ],
  },
};

export const Content30DataSource = {
  wrapper: { className: "home-page-wrapper content3-wrapper" },
  page: { className: "home-page content3" },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: "title-wrapper",
    children: [
      {
        name: "title",
        children: "",
        className: "title-h1",
      },
      {
        name: "content",
        className: "title-content",
        children:
          "硬件软件一体化管理平台可根据不同场景需求，自由组合算法，满足各种不同需求。支持各类算法接入、告警管理回溯、态势感知大屏展示、数据分析等功能。同时支持在线升级、远程维护，满足多种场景的综合管理智能化平台。",
      },
    ],
  },
  block: {
    className: "content3-block-wrapper",
    children: [
      {
        name: "block0",
        className: "content3-block",
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: "content3-icon",
            children:
              window.location.protocol +
              "//" +
              window.location.host +
              BoxFeatureIcon1,
          },
          textWrapper: { className: "content3-text" },
          title: { className: "content3-title", children: "设备管理中心" },
          content: {
            className: "content3-content",
            children: "支持设备管理、设备告警、设备状态、设备上下架等功能。",
          },
        },
      },
      {
        name: "block1",
        className: "content3-block",
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: "content3-icon",
            children:
              window.location.protocol +
              "//" +
              window.location.host +
              BoxFeatureIcon2,
          },
          textWrapper: { className: "content3-text" },
          title: { className: "content3-title", children: "告警中心" },
          content: {
            className: "content3-content",
            children: "管理和查询设备告警信息，支持告警信息的回溯和管理。",
          },
        },
      },
      {
        name: "block2",
        className: "content3-block",
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: "content3-icon",
            children:
              window.location.protocol +
              "//" +
              window.location.host +
              BoxFeatureIcon3,
          },
          textWrapper: { className: "content3-text" },
          title: { className: "content3-title", children: "智能驾驶舱" },
          content: {
            className: "content3-content",
            children: "支持数据可视化展示，支持态势感知大屏展示。",
          },
        },
      },
      {
        name: "block3",
        className: "content3-block",
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: "content3-icon",
            children:
              window.location.protocol +
              "//" +
              window.location.host +
              BoxFeatureIcon4,
          },
          textWrapper: { className: "content3-text" },
          title: { className: "content3-title", children: "算法中心" },
          content: {
            className: "content3-content",
            children: "场景算法管理，支持算法在线更新和离线更新。",
          },
        },
      },
      {
        name: "block4",
        className: "content3-block",
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: "content3-icon",
            children:
              window.location.protocol +
              "//" +
              window.location.host +
              BoxFeatureIcon5,
          },
          textWrapper: { className: "content3-text" },
          title: { className: "content3-title", children: "智能分析" },
          content: {
            className: "content3-content",
            children: "实时数据分析，结合算法智能识别。",
          },
        },
      },
      {
        name: "block5",
        className: "content3-block",
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: "content3-icon",
            children:
              window.location.protocol +
              "//" +
              window.location.host +
              BoxFeatureIcon6,
          },
          textWrapper: { className: "content3-text" },
          title: { className: "content3-title", children: "应用接口" },
          content: {
            className: "content3-content",
            children: "提供各类接口支持数据对接，支持数据导入导出。",
          },
        },
      },
    ],
  },
};


export const Feature41DataSource = {
  wrapper: { className: "home-page-wrapper box-content6-wrapper" },
  OverPack: { className: "home-page box-content6" },
  textWrapper: { className: "box-content6-text", xs: 24, md: 10 },
  titleWrapper: {
    className: "title-wrapper",
    children: [
      {
        name: "title",
        children: "",
        className: "title-h1",
      },
      {
        name: "content",
        className: "title-content",
        children:
          "拓晟智能节点管理平台经典架构方案，支持一个平台统管多个边缘节点，支持节点水平扩展，支持节点快速上下线",
      },
    ],
  },
  img: {
    children: TsArch,
    className: "box-content6-img hover-scale",
    xs: 24,
    md: 24,
  },
  block: {
    children: [
      
    ],
  },
};