import{_ as n,o as e,c as s,e as a}from"./app-35be892a.js";const i={},t=a(`<h2 id="执行打包" tabindex="-1"><a class="header-anchor" href="#执行打包" aria-hidden="true">#</a> 执行打包</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm run build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="根目录新增ecosystem-config-js" tabindex="-1"><a class="header-anchor" href="#根目录新增ecosystem-config-js" aria-hidden="true">#</a> 根目录新增ecosystem.config.js</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">apps</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;nuxt-blog&#39;</span><span class="token punctuation">,</span><span class="token comment">//自定义的pm2中name唯一值</span>
      <span class="token literal-property property">exec_mode</span><span class="token operator">:</span> <span class="token string">&#39;cluster&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">script</span><span class="token operator">:</span> <span class="token string">&#39;./node_modules/nuxt/bin/nuxt.js&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">args</span><span class="token operator">:</span> <span class="token string">&#39;start&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用于pm2的启动文件。</p><h2 id="转移打包文件到服务器" tabindex="-1"><a class="header-anchor" href="#转移打包文件到服务器" aria-hidden="true">#</a> 转移打包文件到服务器</h2><ol><li><strong>.nuxt</strong></li><li><strong>static</strong></li><li><strong>nuxt.config.js</strong></li><li><strong>package.json</strong></li></ol><p>cd到该目录，执行</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install 或   yarn
npm run start //启动项目
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="nginx反向代理" tabindex="-1"><a class="header-anchor" href="#nginx反向代理" aria-hidden="true">#</a> Nginx反向代理</h2><p>修改nginx.conf</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>upstream nodenuxt {   //这个名字随便起，上下对应即可
    server 0.0.0.0:1234;    //nuxt项目端口号
    keepalive 64;
}
server {
    listen   4567;     //服务器对外开启的端口号,访问服务器的4567就可以代理到端口号1234的项目
    location / {
        proxy_pass   http://nodenuxt;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重启nginx</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>systemctl restart nginx.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="pm2启动" tabindex="-1"><a class="header-anchor" href="#pm2启动" aria-hidden="true">#</a> pm2启动</h2><p>可以先用npm run start运行一会，看看有没有什么报错，再用PM2运行。</p><p>在项目根目录下执行</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pm2 start 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>需要上述的ecosystem.config.js文件</p>`,19),r=[t];function l(d,c){return e(),s("div",null,r)}const o=n(i,[["render",l],["__file","部署nuxt项目.html.vue"]]);export{o as default};
