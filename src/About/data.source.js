import React from "react";
import { history } from "umi";

import Logo from "../assets/logo.png";
import HomeBoxPng from "@/assets/home_box.png";
import CarPng from "@/assets/car.png";
import FirePng from "@/assets/fire.png";


export const Feature10DataSource = {
  wrapper: { className: "aboutpage-content1-wrapper home-page-wrapper" },
  OverPack: { className: "home-page aboutpage-content1", playScale: 0.3 },
  imgWrapper: { className: "aboutpage-content1-img", md: 5, xs: 24 },
  textWrapper: { className: "aboutpage-content1-text", md: 14, xs: 24 },
  title: { className: "aboutpage-content1-title", children: "" },
  content: {
    className: "aboutpage-content1-content",
    children:
      "苏州拓晟数创视觉科技有限公司是一家专注于视觉识别技术的研发和应用的高科技企业，公司致力于为客户提供高精度车辆监控定位系统和人工智能火焰识别系统等解决方案。我们的产品和服务广泛应用于智慧城市、智能交通、智能安防、智能制造等领域，为客户提供更安全、更高效、更智能的解决方案。",
  },
};

export const Feature00DataSource = {
  wrapper: { className: "home-page-wrapper home-content0-wrapper" },
  page: { className: "home-page home-content0" },
  OverPack: { playScale: 0.3, className: "" },
  titleWrapper: {
    className: "title-wrapper",
    children: [],
  },
  childWrapper: {
    className: "home-content0-block-wrapper",
    children: [
      {
        name: "block1",
        className: "home-content0-block hover-scale",
        md: 12,
        xs: 24,
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
          <div style={{ display: "flex", justifyContent: "center", marginTop: '48px', fontSize: '38px' }}>
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
            <a href='tel:15641696908' style={{ display: "inline-block", lineHeight: "54px", color: 'white' }}>
              156-4169-6908
            </a>
          </div>
        ),
        className: "title-content",
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
          children: <img src={Logo} alt="logo" style={{ width: '180px', height: '52px', objectFit: 'cover' }} />,
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
            { name: "link0", href: "#", children: "首页" },
            { name: "link1", href: "#", children: "高精度车辆监控定位系统" },
            { name: "link2", href: "#", children: "AI火焰识别系统" },
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
          children: [
            { href: "#", name: "link1", children: "联系我们" },
          ],
        },
      },

    ],
  },
  copyrightWrapper: { className: "copyright-wrapper" },
  copyrightPage: { className: "home-page" },
  copyright: {
    className: "copyright",
    children: (
      <div><span>
        ©2024 <a href="#">苏州拓晟数创视觉科技有限公司</a> All Rights Reserved.
      </span>
      <span>LTD苏ICP备11111111号</span></div>
    ),
  },
};