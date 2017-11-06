# 路由和RESTful


演示基本的路由配置和RESTful。


```shell
git clone git@github.com:ploverjs/examples.git
cd routes
yarn install
npm start
```

访问 `http://127.0.0.1:4000/books/`


## 其他

```shell
npm run dev
```

相当于 `pm2 start app.js --no-daemon --watch` 用于开发。修改文件会自动重启应用。


```shell
npm run build
```

编译资源到 `/public` 目录，可以将资源上传到`CDN`托管。  

参考配置 `config/app.js`
