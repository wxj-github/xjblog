import{_ as e,o as n,c as i,e as a}from"./app-bb14e2a6.js";const s={},d=a(`<h2 id="nginx常用版本" tabindex="-1"><a class="header-anchor" href="#nginx常用版本" aria-hidden="true">#</a> Nginx常用版本</h2><ul><li><h3 id="nginx开源版-http-nginx-org" tabindex="-1"><a class="header-anchor" href="#nginx开源版-http-nginx-org" aria-hidden="true">#</a> Nginx开源版 ：http://nginx.org</h3></li><li><p><strong>Openresty : http://openresty.org</strong></p></li><li><p><strong>Tengine : http://tengine.taobao.org</strong></p></li><li><p><strong>Nginx Plus商业版 ： http://www.nginx.com</strong></p></li></ul><h2 id="centos7安装nginx依赖" tabindex="-1"><a class="header-anchor" href="#centos7安装nginx依赖" aria-hidden="true">#</a> CentOS7安装nginx依赖</h2><h3 id="_1、安装gcc" tabindex="-1"><a class="header-anchor" href="#_1、安装gcc" aria-hidden="true">#</a> 1、安装gcc</h3><p>gcc是linux下的编译器在此不多做解释，它可以编译 C,C++,Ada,Object C和Java等语言</p><p>命令：查看gcc版本</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>gcc <span class="token operator">-</span>v
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>没有安装则使用命令安装:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yum -y install gcc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2、pcre、pcre-devel安装" tabindex="-1"><a class="header-anchor" href="#_2、pcre、pcre-devel安装" aria-hidden="true">#</a> 2、pcre、pcre-devel安装</h3><p>pcre是一个perl库，包括perl兼容的正则表达式库，nginx的http模块使用pcre来解析正则表达式，所以需要安装pcre库。</p><p>安装命令：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yum install -y pcre pcre-devel
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3、zlib安装" tabindex="-1"><a class="header-anchor" href="#_3、zlib安装" aria-hidden="true">#</a> 3、zlib安装</h3><p>zlib库提供了很多种压缩和解压缩方式nginx使用zlib对http包的内容进行gzip，所以需要安装</p><p>安装命令：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yum install -y zlib zlib-devel
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_4、安装openssl" tabindex="-1"><a class="header-anchor" href="#_4、安装openssl" aria-hidden="true">#</a> 4、安装openssl</h3><p>openssl是web安全通信的基石，没有openssl，可以说我们的信息都是在裸奔。。。。。。</p><p>安装命令：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yum install -y openssl openssl-devel
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="安装nginx" tabindex="-1"><a class="header-anchor" href="#安装nginx" aria-hidden="true">#</a> 安装nginx</h2><p>把下载好的gz包放到服务器的目录中，cd到该目录解压</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>tar -zxvf  nginx-1.21.6.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后cd到解压出来的nginx-1.21.6目录中，执行下面的指令进行安装</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>./configure --prefix=/usr/local/nginx       &lt;--指定安装到/usr/local/nginx目录中--&gt;
make
make install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>切换到/usr/local/nginx/sbin进行测试</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cd /usr/local/nginx/sbin
./nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>然后打开ip进行测试</p><h2 id="启动nginx方法" tabindex="-1"><a class="header-anchor" href="#启动nginx方法" aria-hidden="true">#</a> 启动nginx方法</h2><p>进入到nginx的目录</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cd /usr/local/nginx/sbin
./nginx             ==启动
./nginx -s stop     ==快速停止
./nginx -s quit     ==优雅关闭，在退出前完成已经接受的连接请求
./nginx -s reload   ==重新加载配置
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="把nginx配置成系统服务" tabindex="-1"><a class="header-anchor" href="#把nginx配置成系统服务" aria-hidden="true">#</a> 把nginx配置成系统服务</h2><p>创建服务脚本</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>vi /usr/lib/systemd/system/nginx.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>按a进入输入模式，复制脚本内容，按esc，:wq! (强制写入并退出)</p><p>脚本内容：(注意把your nginx path 改成自己安装nginx的路径，我的为/usr/local/nginx)</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[Unit]
Description=nginx - high performance web server
After=network.target remote-fs.target nss-lookup.target
 
[Service]
Type=forking
PIDFile=/your nginx pid file path/nginx.pid
ExecStartPre=/your nginx path/sbin/nginx -t -c /your nginx path/conf/nginx.conf
ExecStart=/your nginx path/sbin/nginx -c /your nginx path/conf/nginx.conf
ExecReload=/your nginx path/sbin/nginx -s reload
ExecStop=/your nginx path/sbin/nginx -s stop
ExecQuit=/your nginx path/sbin/nginx -s quit
PrivateTmp=true
 
[Install]
WantedBy=multi-user.target
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我的：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[Unit]
Description=nginx - high performance web server
After=network.target remote-fs.target nss-lookup.target
 
[Service]
Type=forking
PIDFile=/usr/local/nginx/logs/nginx.pid
ExecStartPre=/usr/local/nginx/sbin/nginx -t -c /usr/local/nginx/conf/nginx.conf
ExecStart=/usr/local/nginx/sbin/nginx -c /usr/local/nginx/conf/nginx.conf
ExecReload=/usr/local/nginx/sbin/nginx -s reload
ExecStop=/usr/local/nginx/sbin/nginx -s stop
ExecQuit=/usr/local/nginx/sbin/nginx -s quit
PrivateTmp=true
 
[Install]
WantedBy=multi-user.target
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>保存后，重启系统服务</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>systemctl daemon-reload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>启动服务</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>systemctl start nginx.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>相关服务指令：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># systemctl start nginx.service　         启动nginx服务
# systemctl stop nginx.service　          停止服务
# systemctl restart nginx.service　       重新启动服务
# systemctl list-units --type=service     查看所有已启动的服务
# systemctl status nginx.service          查看服务当前状态
# systemctl enable nginx.service          设置开机自启动
# systemctl disable nginx.service         停止开机自启动
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="添加nginx配置" tabindex="-1"><a class="header-anchor" href="#添加nginx配置" aria-hidden="true">#</a> 添加nginx配置</h2><p>这是一些gzip压缩相关的配置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    gzip  on;

    gzip_min_length 1k;

    gzip_buffers 4 8k;

    gzip_comp_level 4;

    gzip_proxied any;

    gzip_vary on;

    gzip_types text/* text/css text/plain application/javascript application/x-javascript application/xml application/json image/jpeg image/png image/gif application/octet_stream;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,49),l=[d];function r(t,c){return n(),i("div",null,l)}const u=e(s,[["render",r],["__file","nginx.html.vue"]]);export{u as default};
