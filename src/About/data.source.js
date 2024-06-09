import React from "react";
import { history } from "umi";

import Logo from "../assets/logo.png";
import HomeBoxPng from "@/assets/home_box.png";
import CarPng from "@/assets/car.png";
import FirePng from "@/assets/fire.png";


export const Feature10DataSource = {
  wrapper: { className: "aboutpage-content1-wrapper home-page-wrapper" },
  OverPack: { className: "home-page aboutpage-content1", playScale: 0.3 },
  imgWrapper: { className: "aboutpage-content1-img", md: 24, xs: 1 },
  textWrapper: { className: "aboutpage-content1-text", md: 24, xs: 24 },
  title: { className: "aboutpage-content1-title", children: "" },
  content: {
    className: "aboutpage-content1-content",
    children:
      "苏州拓晟数创视觉科技有限公司是一家专注于视觉识别技术的研发和应用的高科技企业，公司致力于为客户提供高精度车辆监控定位系统和人工智能火焰识别系统等解决方案。我们的产品和服务广泛应用于智慧城市、智能交通、智能安防、智能制造等领域，为客户提供更安全、更高效、更智能的解决方案。",
  },
};
