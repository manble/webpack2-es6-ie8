README
===========================

webpack2 + es6 + ie8

#### 开始：
```
1. git clone https://github.com/manble/webpack2-es6-ie8.git webpack2-es6-ie8 
2. cd webpack2-es6-ie8
3. npm install
4. npm run dev (gulp dev)
5. http://127.0.0.1:8080
```

#### npm run
```
npm run dev (gulp dev) 开发模式
启动本地服务，监听scss js image变化自动刷新浏览器

npm run production (gulp production) 压缩模式
压缩css js重启本地服务

```

#### 备注
```
1. ie8下用npm run production压缩模式进行验证。
2. 路径使用说明。
    image: (scss,jsx,ejs)
    <img src="/images/example.png" alt="">
    background-image: url('/images/example.png');
    
    scss：(scss/目录下路径)
    @import "pages/index/basic.scss";

    js:(scripts/目录下路径)
    import tm from 'common/taskManager';
    let TM = require('common/taskManager');

    ejs: 绝对路径
    <% layout('/partials/layout.ejs') -%>
    <% block('page_title', 'index') -%>
    <% block('page_css', '/styles/page/index.css') -%>
    <% block('page_js', '/scripts/page/index.js') -%>

```


#### 目录结构
```
public/
    images/
        
    scss/
        includes/
            tools/
                rem.scss
        entry/ 页面文件入口
            index.scss
            common.scss 通用文件
        pages/
            index/
                basic.scss
    scripts/
        common/
            tasks/
            modules/
            models/
        libs/
        entry/ 页面文件入口
            index.js
            common.js
        utils/
            observer.js
            dateTool.js
routes/ 
    pages/
        index.js
    entry.js

views/
    pages/
        index.ejs
        error/
            404.ejs
            500.ejs
    partials/
        layout.ejs

dependencies/ 
    conf.js //配置文件
```