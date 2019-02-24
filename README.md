# react-scaffold

使用 create-react-app 创建的基础项目，新增了 ```react-router-dom```，```react-router```，```react-redux```，```rect-intl```，```styled-components```

# (react-router-dom)[https://github.com/ReactTraining/react-router#readme]

react路由绑定到dom元素

# (react-redux)[https://github.com/reduxjs/react-redux]

react的状态管理库

# (styled-components)[https://www.styled-components.com/]

css in js解决方案，通过 js 赋能解决了原生 css 所不具备的能力，比如变量、循环、函数等

# (antd)[https://ant.design/docs/react/use-with-create-react-app-cn]

ui组件库

# (react-app-rewired)[https://github.com/timarney/react-app-rewired/]

一个对 create-react-app 进行自定义配置的社区解决方案

# (react-intl)[https://github.com/yahoo/react-intl]

国际化

# project structurem

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