import{_ as t,r as l,o as c,c as p,a as s,b as n,d as e,e as i}from"./app-c984cf19.js";const o={},r=s("h1",{id:"vuepress",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#vuepress","aria-hidden":"true"},"#"),n(" VuePress")],-1),d=s("code",null,"beta",-1),u={href:"https://github.com/vuepress/vuepress-next/blob/main/CHANGELOG.md",target:"_blank",rel:"noopener noreferrer"},v=i(`<h2 id="初始化项目" tabindex="-1"><a class="header-anchor" href="#初始化项目" aria-hidden="true">#</a> 初始化项目</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>//新建项目目录
<span class="token function">mkdir</span> vuepress-starter
<span class="token builtin class-name">cd</span> vuepress-starter

//初始化项目
<span class="token function">git</span> init
<span class="token function">pnpm</span> init

//将 VuePress 安装为本地依赖
<span class="token function">pnpm</span> <span class="token function">add</span> <span class="token parameter variable">-D</span> vuepress@next @vuepress/client@next vue

// 在 package.json 中添加一些 scripts
<span class="token punctuation">{</span>
  <span class="token string">&quot;scripts&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;docs:dev&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;vuepress dev docs&quot;</span>,
    <span class="token string">&quot;docs:build&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;vuepress build docs&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

//将默认的临时目录和缓存目录添加到 .gitignore 文件中
node_modules
.temp
.cache
/dist
docs/.vuepress/dist

//创建你的第一篇文档,根目录新建docs目录，新建README.md和.vuepress文件夹<span class="token punctuation">(</span>启动项目也会自动创建该文件夹<span class="token punctuation">)</span>

//启动项目
<span class="token function">pnpm</span> docs:dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><h3 id="首页配置" tabindex="-1"><a class="header-anchor" href="#首页配置" aria-hidden="true">#</a> 首页配置</h3>`,4),m={href:"https://v2.vuepress.vuejs.org/zh/reference/default-theme/frontmatter.html#%E9%A6%96%E9%A1%B5",target:"_blank",rel:"noopener noreferrer"},k=i(`<p>就在docs目录下的README.md文件中编写内容来配置首页</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">home</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">heroImage</span><span class="token punctuation">:</span> /images/logo.png
<span class="token key atrule">heroText</span><span class="token punctuation">:</span> 煎包博客
<span class="token key atrule">tagline</span><span class="token punctuation">:</span> 煎包的笔记记录之地
<span class="token key atrule">actions</span><span class="token punctuation">:</span> 
    <span class="token punctuation">-</span> <span class="token key atrule">text</span><span class="token punctuation">:</span> 开始回忆
      <span class="token key atrule">link</span><span class="token punctuation">:</span> /
      <span class="token key atrule">type</span><span class="token punctuation">:</span> primary
    <span class="token punctuation">-</span> <span class="token key atrule">text</span><span class="token punctuation">:</span> 开始回忆2
      <span class="token key atrule">link</span><span class="token punctuation">:</span> /
      <span class="token key atrule">type</span><span class="token punctuation">:</span> secondary
<span class="token key atrule">features</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 特性1
      <span class="token key atrule">details</span><span class="token punctuation">:</span> 描述1
    <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 特性2
      <span class="token key atrule">details</span><span class="token punctuation">:</span> 描述2
    <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 特性3
      <span class="token key atrule">details</span><span class="token punctuation">:</span> 描述3
<span class="token key atrule">footer</span><span class="token punctuation">:</span> 联系方式：www.wenxinjian@qq.com</span>
<span class="token punctuation">---</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="新建页面" tabindex="-1"><a class="header-anchor" href="#新建页面" aria-hidden="true">#</a> 新建页面</h2><h2 id="静态资源" tabindex="-1"><a class="header-anchor" href="#静态资源" aria-hidden="true">#</a> 静态资源</h2><p>你可以把一些静态资源放在 Public 目录中，它们会被复制到最终生成的网站的根目录下。</p>`,5),b=s("code",null,".vuepress/public",-1),h={href:"https://v2.vuepress.vuejs.org/zh/reference/config#public",target:"_blank",rel:"noopener noreferrer"},g=i(`<p>在下列这些情况中，你可能会用到它：</p><ul><li>你可能需要提供一些静态资源，但是它们并不直接被你的 Markdown 文件引用，比如 favicon 和 PWA 图标。</li><li>你可能想要托管一些共享的静态资源，甚至可能需要在你的网站外部引用它，比如 Logo 图片。</li><li>你可能想在你的 Markdown 内容中通过绝对路径来引入图片。</li></ul><p>以我们文档的源文件为例，我们把 VuePress 的 Logo 放在了 Public 目录下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>└─ docs
   ├─ .vuepress
   <span class="token operator">|</span>  └─ public
   <span class="token operator">|</span>     └─ images
   <span class="token operator">|</span>        └─ hero.png  <span class="token comment"># &lt;- Logo 文件</span>
   └─ guide
      └─ assets.md       <span class="token comment"># &lt;- 我们在这里</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们可以这样在当前页面引用 Logo ：</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token url"><span class="token operator">!</span>[<span class="token content">VuePress Logo</span>](<span class="token url">/images/hero.png</span>)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,6);function _(f,x){const a=l("ExternalLinkIcon");return c(),p("div",null,[r,s("p",null,[n("VuePress v2 目前仍处于 "),d,n(" 阶段。它的配置和 API 还不够稳定，很可能会在 Minor(少数的) 版本中发生 Breaking Changes 。因此，在每次更新 beta 版本之后，请一定要仔细阅读 "),s("a",u,[n("更新日志"),e(a)]),n("。")]),v,s("p",null,[s("a",m,[n("配置文档"),e(a)])]),k,s("p",null,[n("默认的 Public 目录是 "),b,n(" ，可以通过 "),s("a",h,[n("public"),e(a)]),n(" 配置项来修改。")]),g])}const q=t(o,[["render",_],["__file","index.html.vue"]]);export{q as default};
