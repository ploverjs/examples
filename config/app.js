'use strict';


/* eslint no-process-env: 0 */


const pathUtil = require('path');


module.exports = {

  /**
   * 服务器相关配置
   */
  server: {
    port: 4000
  },

  /**
   * 应用根目录
   */
  applicationRoot: pathUtil.join(__dirname, '..'),

  /**
   * 环境
   */
  env: process.env.NODE_ENV,

  /**
   * 配置根目录
   */
  configRoot: __dirname,

  /**
   * 路由规则
   */
  routes: {

  },

  /**
   * 中间件
   */
  middlewares: [

  ],

  /**
   * 服务
   */
  services: {
  },


  /**
   * 模板帮助方法
   */
  helpers: {
  },


  /**
   * web中间件相关配置
   */
  web: {
  },


  /**
   * 安全相关配置
   */
  security: {
  },


  /**
   * 前端资源相关配置
   */
  assets: {

  },


  /**
   * xview插件相关配置
   */
  xview: {
  }
};
