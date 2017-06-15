# Network

# 引用 Flash

```
 修改 views/flash/nestingflash.html
 src = "https://192.168.0.111:8443/" 批向正确的服务器地址
```

***若跨域启动浏览器：***
> open -a "Google Chrome" --args --disable-web-security  --user-data-dir


## 发布生产环境

1. 修改 assets/javascripts/AC_OETags.js

    args[i+1] = "https://192.168.0.103:8443/" + AC_AddExtension(args[i+1], ext);

    指向正确的地址

2. 修改  assets/javascripts/controllers/SidebarController.js

    注解 **开发环境** 部分代码
    启用 **生产环境** 部分代码


