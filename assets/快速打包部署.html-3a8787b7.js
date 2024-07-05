import{_ as e,o as i,c as s,e as n}from"./app-c984cf19.js";const a={},d=n(`<h2 id="_1、插件版" tabindex="-1"><a class="header-anchor" href="#_1、插件版" aria-hidden="true">#</a> 1、插件版</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm i serve -g
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>移动到打包项目的根目录，cmd 执行serve即可启动部署。</p><h2 id="_2、express" tabindex="-1"><a class="header-anchor" href="#_2、express" aria-hidden="true">#</a> 2、express</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1.创建一个包，安装express
npm init -y 
npm i express 

2.新建文件  server.js
const express = require (&#39;express&#39;);
const app = express()
app.listen(8000,(err)=&gt;{
	//开启端口8000
	if(!err){
		console.log(&#39;启动成功&#39;)
	}
})

3.把打包好的文件放到项目的static或public文件夹下
server.js:
app.use(express.static(__dirname+&#39;/static&#39;))    //如果放在了public后面的就改成/public,或相应的文件夹名

4.node server.js 启动服务器

5.访问localhost:8000  就会自动找到static文件夹下的index.html

如果用history打包，网页进入到其他路由，比如localhost:8000/a/b，是正常的，但是一刷新，它就会去请求/a/b的服务器资源，就会报404错误。用hash模式打包就不会有这个错误。如果非用history模式打包，就要用nginx进行处理或者node的插件
connect-history-api-fallback

6.npm i connect-history-api-fallback  (用了history模式打包)

const history = require(&#39;connect-history-api-fallback&#39;)
app.use(history())  //在下面的use前调用
app.use(express.static(__dirname+&#39;/static&#39;)) 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),l=[d];function r(c,t){return i(),s("div",null,l)}const u=e(a,[["render",r],["__file","快速打包部署.html.vue"]]);export{u as default};
