# react-scaffold

使用 create-react-app 创建的基础项目，新增了 ```react-router-dom```，```react-router```，```react-redux```，```rect-intl```，```styled-components```

# react-router-dom

react路由

# react-redux

react的状态管理库

# styled-components

react样式库

# react-bootstrap

响应式框架

# react-intl

国际化

# project structure

```
|- src
    |- actions              // reducer action
    |- components           // common components
    |- containers           // container component = pages
        |- Layout           // main layout component
            |- Layout.js    
    |- languages            // intl local languages
    |- reducers             // reducer store
    |- styles               // styles include global style, third styles
    |- index.js             // app entry
    |- store.js             // store entry
|- public
```

# 启动

```
npm i
npm run start
```