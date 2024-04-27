import React from 'react';
import { history } from 'umi';

import Logo from '../assets/logo.png';
import HomeBoxPng from '@/assets/home_box.png'
import CarPng from '@/assets/car.png'
import FirePng from '@/assets/fire.png'

export const Nav30DataSource = {
  wrapper: { className: 'header3 home-page-wrapper' },
  page: { className: 'home-page' },
  logo: {
    className: 'header3-logo',
    children: Logo,
  },
  Menu: {
    className: 'header3-menu',
    children: [
      {
        name: 'item0',
        className: 'header3-item',
        children: {
          href: '/',
          children: [{ children: '首页', name: 'text' }],
        },

      },
      {
        name: 'item1',
        className: 'header3-item',
        children: {
          href: '#',
          children: [{ children: '核心产品', name: 'text' }],
        },
        subItem: [
          {
            name: 'sub0',
            className: 'item-sub',
            href: '/car',
            onClick: () => history.push('/car'),
            children: {
              className: 'item-sub-item',
              children: [
                {
                  name: 'title',
                  className: 'item-title',
                  children: '高精度车辆监控定位',
                },
                {
                  name: 'content',
                  className: 'item-content',
                  children: 'UWB超宽带 + VRH视觉识别系统级方案',
                },
              ],
            },
          },
          {
            name: 'sub1',
            className: 'item-sub',
            onClick: () => history.push('/fire'),
            children: {
              className: 'item-sub-item',
              children: [
                {
                  name: 'title',
                  className: 'item-title',
                  children: 'AI火焰识别',
                },
                {
                  name: 'content',
                  className: 'item-content',
                  children: '实时识别火灾隐患',
                },
              ],
            },
          },
        ],
      },
      {
        name: 'item2',
        className: 'header3-item',
        children: {
          href: '#',
          children: [{ children: '关于我们', name: 'text' }],
        },
      },

    ],
  },
  mobileMenu: { className: 'header3-mobile-menu' },
};
export const Banner10DataSource = {
  wrapper: { className: 'banner1' },
  BannerAnim: {
    children: [
      {
        name: 'elem0',
        BannerElement: { className: 'banner-user-elem' },
        textWrapper: { className: 'banner1-text-wrapper' },
        bg: { className: 'bg bg0' },
        title: {
          className: 'banner1-title',
          children: '拓晟数创视觉科技',
        },
        content: {
          className: 'banner1-content',
          children: 'AI视觉识别解决方案提供商',
        },
        button: { className: 'banner1-button', children: '' },
      },
      {
        name: 'elem1',
        BannerElement: { className: 'banner-user-elem' },
        textWrapper: { className: 'banner1-text-wrapper' },
        bg: { className: 'bg bg1' },
        title: {
          className: 'banner1-title',
          children: '高精度车辆监控定位系统',
        },
        content: {
          className: 'banner1-content',
          children: '厂区人员定位、车站作业车辆监控、仓储物料监管等场景解决方案',
        },
        button: { className: 'banner1-button', children: 'Learn More' },
      },
      {
        name: 'elem2',
        BannerElement: { className: 'banner-user-elem' },
        textWrapper: { className: 'banner1-text-wrapper' },
        bg: { className: 'bg bg2' },
        title: {
          className: 'banner1-title',
          children: 'AI火焰识别系统',
        },
        content: {
          className: 'banner1-content',
          children: '实时检测识别各种类型的火焰，有效预防火灾隐患',
        },
        button: { className: 'banner1-button', children: 'Learn More' },
      },
    ],
  },
};

export const Feature10DataSource = {
  wrapper: { className: 'home-page-wrapper content1-wrapper' },
  OverPack: { className: 'home-page content1', playScale: 0.3 },
  imgWrapper: { className: 'content1-img', md: 10, xs: 24 },
  img: {
    children: HomeBoxPng,
  },
  textWrapper: { className: 'content1-text', md: 14, xs: 24 },
  title: { className: 'content1-title', children: '边缘计算智能分析盒' },
  content: {
    className: 'content1-content',
    children: '集视频接入、数据传输、数据存储、视觉分析算法、视频流媒体等多种技术为一体的边缘计算产品。',
  },
};

export const Feature00DataSource = {
  wrapper: { className: 'home-page-wrapper home-content0-wrapper' },
  page: { className: 'home-page home-content0' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [],
  },
  childWrapper: {
    className: 'home-content0-block-wrapper',
    children: [
      {
        name: 'block1',
        className: 'home-content0-block hover-scale',
        md: 12,
        xs: 24,
        children: {
          className: 'home-content0-block-item',
          children: [
            {
              name: 'image',
              className: 'home-content0-block-icon',
              children: <img src={CarPng} alt="car" />,
            },
            {
              name: 'title',
              className: 'home-content0-block-title',
              children: '高精度车辆监控定位系统',
            },
            {
              name: 'content',
              children: '利用UWB(超宽带)技术定位和VRH(视觉识别)视频监控的系统级方案',
            },
          ],
        },
      },
      {
        name: 'block2',
        className: 'home-content0-block  hover-scale',
        md: 12,
        xs: 24,
        children: {
          className: 'home-content0-block-item',
          children: [
            {
              name: 'image',
              className: 'home-content0-block-icon',
              children: <img src={FirePng} alt="fire" />,
            },
            {
              name: 'title',
              className: 'home-content0-block-title',
              children: '人工智能火焰识别系统',
            },
            {
              name: 'content',
              children: '实时检测识别各种类型的火焰，有效预防火灾隐患',
            },
          ],
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
        ©2024 <a href="#">苏州拓晟数创视觉科技有限公司</a> All Rights
        Reserved
      </span>
    ),
  },
};
