# examples


plover示例应用，演示plover的核心功能


## 运行

```
git clone https://github.com/plover-modules/examples.git
cd examples
npm install
npm start
```

访问: `http://127.0.0.1:4000`


开发时开启模块渲染性能时间检测


```
DEBUG_BENCHMARK=1 npm start
```


## 使用PM2运行


### 安装pm2

```
npm install -g pm2
```

### 启动

```
pm2 start pm2.json
```

[参考](http://pm2.keymetrics.io)
