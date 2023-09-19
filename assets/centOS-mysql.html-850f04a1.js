const l=JSON.parse('{"key":"v-6571ffc4","path":"/node/centOS-mysql.html","title":"CentOS安装mysql","lang":"zh-CN","frontmatter":{"sidebar":"auto"},"headers":[{"level":3,"title":"由于CentOS 的yum源中没有mysql，需要到mysql的官网下载yum Repository配置文件。","slug":"由于centos-的yum源中没有mysql-需要到mysql的官网下载yum-repository配置文件。","link":"#由于centos-的yum源中没有mysql-需要到mysql的官网下载yum-repository配置文件。","children":[]},{"level":2,"title":"1、下载并安装MySQL官方的 Yum Repository","slug":"_1、下载并安装mysql官方的-yum-repository","link":"#_1、下载并安装mysql官方的-yum-repository","children":[]},{"level":2,"title":"2、 MySQL数据库设置","slug":"_2、-mysql数据库设置","link":"#_2、-mysql数据库设置","children":[]},{"level":2,"title":"3、 开启mysql的远程访问","slug":"_3、-开启mysql的远程访问","link":"#_3、-开启mysql的远程访问","children":[]},{"level":2,"title":"4、 为firewalld添加开放端口","slug":"_4、-为firewalld添加开放端口","link":"#_4、-为firewalld添加开放端口","children":[]},{"level":2,"title":"5、 更改mysql的语言","slug":"_5、-更改mysql的语言","link":"#_5、-更改mysql的语言","children":[]},{"level":2,"title":"6、连接测试","slug":"_6、连接测试","link":"#_6、连接测试","children":[]},{"level":2,"title":"7、参考网址","slug":"_7、参考网址","link":"#_7、参考网址","children":[]},{"level":2,"title":"1、从官网下下载最新的nodejs","slug":"_1、从官网下下载最新的nodejs","link":"#_1、从官网下下载最新的nodejs","children":[]},{"level":2,"title":"2、通过ftp工具上传到linux服务，解压安装包","slug":"_2、通过ftp工具上传到linux服务-解压安装包","link":"#_2、通过ftp工具上传到linux服务-解压安装包","children":[]},{"level":2,"title":"启动服务","slug":"启动服务","link":"#启动服务","children":[]},{"level":2,"title":"停止服务","slug":"停止服务","link":"#停止服务","children":[]},{"level":2,"title":"删除应用","slug":"删除应用","link":"#删除应用","children":[]},{"level":2,"title":"pm2 list查看启动列表","slug":"pm2-list查看启动列表","link":"#pm2-list查看启动列表","children":[]},{"level":2,"title":"显示应用程序所有信息","slug":"显示应用程序所有信息","link":"#显示应用程序所有信息","children":[]},{"level":2,"title":"查看日志","slug":"查看日志","link":"#查看日志","children":[]},{"level":2,"title":"清理日志","slug":"清理日志","link":"#清理日志","children":[]},{"level":2,"title":"监听模式","slug":"监听模式","link":"#监听模式","children":[]},{"level":2,"title":"静态服务器","slug":"静态服务器","link":"#静态服务器","children":[]},{"level":2,"title":"0秒停机重新加载","slug":"_0秒停机重新加载","link":"#_0秒停机重新加载","children":[]},{"level":2,"title":"pm2常用指令","slug":"pm2常用指令","link":"#pm2常用指令","children":[]},{"level":2,"title":"pm2部署前端打包项目","slug":"pm2部署前端打包项目","link":"#pm2部署前端打包项目","children":[]},{"level":2,"title":"yum安装","slug":"yum安装","link":"#yum安装","children":[]},{"level":2,"title":"源码安装：安装所需插件","slug":"源码安装-安装所需插件","link":"#源码安装-安装所需插件","children":[{"level":3,"title":"1、安装gcc","slug":"_1、安装gcc","link":"#_1、安装gcc","children":[]},{"level":3,"title":"2、pcre、pcre-devel安装","slug":"_2、pcre、pcre-devel安装","link":"#_2、pcre、pcre-devel安装","children":[]},{"level":3,"title":"3、zlib安装","slug":"_3、zlib安装","link":"#_3、zlib安装","children":[]},{"level":3,"title":"4、安装openssl","slug":"_4、安装openssl","link":"#_4、安装openssl","children":[]}]},{"level":2,"title":"安装nginx","slug":"安装nginx","link":"#安装nginx","children":[{"level":3,"title":"1、下载nginx安装包","slug":"_1、下载nginx安装包","link":"#_1、下载nginx安装包","children":[]},{"level":3,"title":"2、把压缩包解压到usr/local/java","slug":"_2、把压缩包解压到usr-local-java","link":"#_2、把压缩包解压到usr-local-java","children":[]},{"level":3,"title":"3、切换到cd /usr/local/java/nginx-1.9.9/下面","slug":"_3、切换到cd-usr-local-java-nginx-1-9-9-下面","link":"#_3、切换到cd-usr-local-java-nginx-1-9-9-下面","children":[]},{"level":3,"title":"4、切换到/usr/local/nginx安装目录","slug":"_4、切换到-usr-local-nginx安装目录","link":"#_4、切换到-usr-local-nginx安装目录","children":[]},{"level":3,"title":"5、配置nginx的配置文件nginx.conf文件，主要也就是端口","slug":"_5、配置nginx的配置文件nginx-conf文件-主要也就是端口","link":"#_5、配置nginx的配置文件nginx-conf文件-主要也就是端口","children":[]},{"level":3,"title":"6、启动nginx服务","slug":"_6、启动nginx服务","link":"#_6、启动nginx服务","children":[]},{"level":3,"title":"7、查看nginx服务是否启动成功","slug":"_7、查看nginx服务是否启动成功","link":"#_7、查看nginx服务是否启动成功","children":[]},{"level":3,"title":"示例","slug":"示例","link":"#示例","children":[]}]},{"level":2,"title":"1、执行:# vim /etc/init.d/nginx","slug":"_1、执行-vim-etc-init-d-nginx","link":"#_1、执行-vim-etc-init-d-nginx","children":[]},{"level":2,"title":"2、插入代码，为了方便复制，我是通过xftp创建文件，并粘贴以下代码的，同时引出下面的问题。","slug":"_2、插入代码-为了方便复制-我是通过xftp创建文件-并粘贴以下代码的-同时引出下面的问题。","link":"#_2、插入代码-为了方便复制-我是通过xftp创建文件-并粘贴以下代码的-同时引出下面的问题。","children":[]},{"level":2,"title":"3、如果直接往下执行到启动服务那一步，会出现env: /etc/init.d/nginx: No such file or directory","slug":"_3、如果直接往下执行到启动服务那一步-会出现env-etc-init-d-nginx-no-such-file-or-directory","link":"#_3、如果直接往下执行到启动服务那一步-会出现env-etc-init-d-nginx-no-such-file-or-directory","children":[]},{"level":2,"title":"4、","slug":"_4、","link":"#_4、","children":[]},{"level":2,"title":"5、启动服务时出现报错，按照提示查看报错信息","slug":"_5、启动服务时出现报错-按照提示查看报错信息","link":"#_5、启动服务时出现报错-按照提示查看报错信息","children":[]},{"level":2,"title":"服务的启动/停止/刷新配置文件/查看状态","slug":"服务的启动-停止-刷新配置文件-查看状态","link":"#服务的启动-停止-刷新配置文件-查看状态","children":[]},{"level":2,"title":"解决方法1：","slug":"解决方法1","link":"#解决方法1","children":[]},{"level":2,"title":"解决方法2：","slug":"解决方法2","link":"#解决方法2","children":[]},{"level":2,"title":"1、nginx部署。修改nginx.conf","slug":"_1、nginx部署。修改nginx-conf","link":"#_1、nginx部署。修改nginx-conf","children":[]},{"level":2,"title":"2、nodejs部署","slug":"_2、nodejs部署","link":"#_2、nodejs部署","children":[]},{"level":2,"title":"1.nginx的proxy_pass配置路径，加与不加“/”差异巨大","slug":"_1-nginx的proxy-pass配置路径-加与不加-差异巨大","link":"#_1-nginx的proxy-pass配置路径-加与不加-差异巨大","children":[{"level":3,"title":"1.1 绝对路径","slug":"_1-1-绝对路径","link":"#_1-1-绝对路径","children":[]},{"level":3,"title":"1.2 相对路径","slug":"_1-2-相对路径","link":"#_1-2-相对路径","children":[]},{"level":3,"title":"1.3 代理路径添加uri","slug":"_1-3-代理路径添加uri","link":"#_1-3-代理路径添加uri","children":[]}]},{"level":2,"title":"2.nginx反向代理去掉前缀的另一种方法","slug":"_2-nginx反向代理去掉前缀的另一种方法","link":"#_2-nginx反向代理去掉前缀的另一种方法","children":[{"level":3,"title":"3.参考","slug":"_3-参考","link":"#_3-参考","children":[]}]}],"git":{},"filePathRelative":"node/centOS-mysql.md"}');export{l as data};