# static


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

```
http://127.0.0.1:4000/logo.png
```
