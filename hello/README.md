# Hello Plover


## 目标

- 从零搭建plover应用。
- 了解应用的基本结构。


## 示例

在开始之前可以运行以下示例：

```shell
git clone git@github.com:ploverjs/examples.git
cd examples/hello
npm install
npm start
```

启动成功后访问 `http://127.0.0.1:4000` 就可以看到结果。  


## 应用结构

如果没有下载示例，也可以在github上查看应用结构 [hello](https://github.com/ploverjs/examples/tree/master/hello)。 


```
hello/
  config/     # 配置
    app.js      # 应用配置
    routes.js   # 路由配置

  modules/    # 模块
    home/       # 一个叫`home`的模块
      views/      # 模板目录
        index.ejs   # ejs模板文伯

      index.js    # 控制器

    layouts/    # 一个叫`layouts`的模块，用于布局。
      views/
        index.ejs

      index.js    # 布局控制器

  node_modules/

  app.js      # 入口
  package.json
```

一个应用主要包括：**Plover模块**、**配置**、**应用级代码**、**依赖库**、**入口** 和 **相关脚本** 等。  

我们简单看一下相关文件的内容。


### package.json

引入plover依赖，定义启动入口。

```js
dependencies: {
  "ploverx": "^4.0.0"
}
```

[plover](https://github.com/ploverjs/plover) 核心主要提供了模块管理和渲染的功能。web应用需要的其他功能都是以插件形式提供的。为了方便使用，[ploverx](https://github.com/ploverjs/ploverx)模块聚合一组最常用的模块，所以只要使用这个模块即可。[ploverjs](https://github.com/ploverjs)组中维护着许多插件。


```js
scripts: {
  "start": "node app.js"
}
```

当我们运行`npm start`时，相当于运行`node app.js`。


### app.js

应用入口文件。应用启动时就是运行这个文件。

```js
const ploverx = require('ploverx');

const app = ploverx({ applicationRoot: __dirname });
app.run();
```


### config/

应用的配置都是放在这个目录下。


### config/app.js

可以对应用进行配置。比如配置应用启动端口号，还可以对各插件进行配置。


### config/routes.js

路由配置。这是个非常重要的文件，我们对外提供的服务主要是通过这个文件配置的。

```js
module.exports = ({ get }) => {
  get('/', 'home#index');
}
```

以上表示将`/` 路由到`home`模块的`index`action。


### modules/

承载应用相关模块的主目录。刚才的示例有一个`home`模块和一个`layouts`模块。  
一个模块包含涉及功能的所有资源。由控制器、模板、js、css和图片资源等组成。  

比如`home`模块包含一个控制器**index.js**和一个模板文件**index.ejs**。


### index 模块

- index.js

```js
exports.index = (ctx) => {
  ctx.render({ title: 'Hello Plover' });
};
```

控制器向模板传递数据用于展示。


- views/index.ejs

```ejs
<h1><%= title %></h1>
```

模板使用数据渲染输出。

以上模板只包含HTML片断，但渲染结果却是完整的HTML页面，这是通过layout来完成的。layout本身也是一个模块，默认为**layouts**模块。


### layouts 模块


- index.js

```js
exports.index = (ctx) => {
  const data = {
    pageTitle: 'plover示例'
  };
  ctx.render(data);
};
```

和index模块相比较，layout模块的控制器也没有特别的地方，同样向模板传递数据用于渲染。


- views/index.ejs


```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title><%= pageTitle %></title>
  </head>
  <body>
    <%- content %>
  </body>
</html>
```

- `pageTitle`变量来自于layouts模块的控制器。
- `content` 即为 index 模块的渲染结果。

