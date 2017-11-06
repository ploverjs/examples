# 静态资源的访问


plover内置了常用的koa模块，其中就包括[koa-static](https://github.com/koajs/static)，用于应用中静态文件的访问。


## 配置

**confg/app.js**

```js
exports.web = {
  static: {
    root: pathUtil.join(__dirname, '../public')
  }
};
```

然后就可以访问`public/`目录下的资源了。

运行示例后可以访问：

```shell
http://127.0.0.1:4000/logo.png
```

## 备注

plover在插件[plover-web](https://github.com/alibaba/plover/tree/master/packages/plover-web)中集成了常用koa中间件。
