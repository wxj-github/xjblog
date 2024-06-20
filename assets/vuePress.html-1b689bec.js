import{_ as p,r as o,o as l,c as i,a as s,b as n,d as e,e as t}from"./app-6fcf50f1.js";const c="/xjblog/assets/image-20231006145638648-d7d10cb6.png",r="/xjblog/assets/image-20231006145809552-d14f3ea8.png",u="/xjblog/assets/image-20231006150204607-427153ee.png",d="/xjblog/assets/image-20231006150311345-58f8ac0f.png",v="/xjblog/assets/image-20231006150338128-dfb470c6.png",k="/xjblog/assets/image-20231006151048285-b10d5b9a.png",m="/xjblog/assets/image-20231006152457855-cad4b91e.png",b="/xjblog/assets/image-20231006152525523-98f747dc.png",g="/xjblog/assets/image-20231006152832838-105f0497.png",h="/xjblog/assets/image-20230908102031378-ed6f1bcb.png",y="/xjblog/assets/image-20230908102145888-5c77d2ea.png",q={},x=s("h1",{id:"vuepress",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#vuepress","aria-hidden":"true"},"#"),n(" VuePress")],-1),f=s("code",null,"beta",-1),_={href:"https://github.com/vuepress/vuepress-next/blob/main/CHANGELOG.md",target:"_blank",rel:"noopener noreferrer"},j=t(`<p>目前使用版本为2.0.0-beta.67。</p><h2 id="初始化项目" tabindex="-1"><a class="header-anchor" href="#初始化项目" aria-hidden="true">#</a> 初始化项目</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>//新建项目目录
<span class="token function">mkdir</span> vuepress-starter
<span class="token builtin class-name">cd</span> vuepress-starter

//初始化项目
<span class="token function">git</span> init
<span class="token function">pnpm</span> init

<span class="token function">yarn</span> init

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="路由" tabindex="-1"><a class="header-anchor" href="#路由" aria-hidden="true">#</a> 路由</h2><p>VuePress 是以 Markdown 为中心的。你项目中的每一个 Markdown 文件都是一个单独的页面。</p><p>默认情况下，页面的路由路径是根据你的 Markdown 文件的相对路径决定的。</p><p>假设这是你的 Markdown 文件所处的目录结构：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>└─ docs
   ├─ guide
   │  ├─ getting-started.md
   │  └─ README.md
   ├─ contributing.md
   └─ README.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),w=s("code",null,"docs",-1),E={href:"https://v2.vuepress.vuejs.org/zh/reference/cli.html",target:"_blank",rel:"noopener noreferrer"},P=s("code",null,"vuepress dev docs",-1),A=t("<table><thead><tr><th>相对路径</th><th>路由路径</th></tr></thead><tbody><tr><td><code>/README.md</code></td><td><code>/</code></td></tr><tr><td><code>/index.md</code></td><td><code>/</code></td></tr><tr><td><code>/contributing.md</code></td><td><code>/contributing.html</code></td></tr><tr><td><code>/guide/README.md</code></td><td><code>/guide/</code></td></tr><tr><td><code>/guide/getting-started.md</code></td><td><code>/guide/getting-started.html</code></td></tr></tbody></table><p><strong>提示：</strong></p><p>默认配置下， <code>README.md</code> 和 <code>index.md</code> 都会被转换成 <code>index.html</code> ，并且其对应的路由路径都是由斜杠结尾的。然而，如果你想同时保留这两个文件，就可能会造成冲突。</p>",3),I={href:"https://v2.vuepress.vuejs.org/zh/reference/config.html#pagepatterns",target:"_blank",rel:"noopener noreferrer"},N=s("code",null,"['**/*.md', '!**/README.md', '!.vuepress', '!node_modules']",-1),D=s("code",null,"README.md",-1),V=s("code",null,":",-1),M=s("code",null,"+",-1),R={href:"https://router.vuejs.org/zh/guide/essentials/route-matching-syntax.html",target:"_blank",rel:"noopener noreferrer"},T=s("h2",{id:"静态资源",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#静态资源","aria-hidden":"true"},"#"),n(" 静态资源")],-1),C=s("p",null,"你可以把一些静态资源放在 Public 目录中，它们会被复制到最终生成的网站的根目录下。",-1),L=s("code",null,".vuepress/public",-1),F={href:"https://v2.vuepress.vuejs.org/zh/reference/config#public",target:"_blank",rel:"noopener noreferrer"},G=t(`<p>在下列这些情况中，你可能会用到它：</p><ul><li>你可能需要提供一些静态资源，但是它们并不直接被你的 Markdown 文件引用，比如 favicon 和 PWA 图标。</li><li>你可能想要托管一些共享的静态资源，甚至可能需要在你的网站外部引用它，比如 Logo 图片。</li><li>你可能想在你的 Markdown 内容中通过绝对路径来引入图片。</li></ul><p>以我们文档的源文件为例，我们把 VuePress 的 Logo 放在了 Public 目录下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>└─ docs
   ├─ .vuepress
   <span class="token operator">|</span>  └─ public
   <span class="token operator">|</span>     └─ images
   <span class="token operator">|</span>        └─ hero.png  <span class="token comment"># &lt;- Logo 文件</span>
   └─ guide
      └─ assets.md       <span class="token comment"># &lt;- 我们在这里</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们可以这样在当前页面引用 Logo ：</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token url"><span class="token operator">!</span>[<span class="token content">VuePress Logo</span>](<span class="token url">/images/hero.png</span>)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><h3 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件" aria-hidden="true">#</a> 配置文件</h3><p>.vuepress下新建config.js（ts可以提供更好的类型提示）</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defaultTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuepress/theme-default&#39;</span>  <span class="token comment">//需要先pnpm i -D @vuepress/theme-default@next 安装,版本：2.0.0-beta.67</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  theme<span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// 在这里进行配置</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="首页配置" tabindex="-1"><a class="header-anchor" href="#首页配置" aria-hidden="true">#</a> 首页配置</h3>`,11),$={href:"https://v2.vuepress.vuejs.org/zh/reference/default-theme/frontmatter.html#%E9%A6%96%E9%A1%B5",target:"_blank",rel:"noopener noreferrer"},B=t(`<p>就在docs目录下的README.md文件中编写内容来配置首页</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="侧边栏配置" tabindex="-1"><a class="header-anchor" href="#侧边栏配置" aria-hidden="true">#</a> 侧边栏配置</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 侧边栏数组</span>
<span class="token comment">// 所有页面会使用相同的侧边栏</span>
<span class="token literal-property property">sidebar</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token comment">// SidebarItem</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Foo&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;/foo/&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token comment">// SidebarItem</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;github&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;https://github.com&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// 字符串 - 页面文件路径</span>
      <span class="token string">&#39;/foo/bar.md&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 字符串 - 页面文件路径.这种的话text为页面标题</span>
  <span class="token string">&#39;/bar/README.md&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">// 侧边栏对象</span>
    <span class="token comment">// 不同子路径下的页面会使用不同的侧边栏</span>
    <span class="token comment">// 可折叠的侧边栏</span>
    <span class="token literal-property property">sidebar</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&#39;/reference/&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>  <span class="token comment">//reference以这个路径开头的才会用这个侧边栏</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;VuePress Reference&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">collapsible</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;/reference/cli.md&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;/reference/config.md&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Bundlers Reference&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">collapsible</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;/reference/bundler/vite.md&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;/reference/bundler/webpack.md&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="导航栏" tabindex="-1"><a class="header-anchor" href="#导航栏" aria-hidden="true">#</a> 导航栏</h3><ul><li>类型： <code>false | (NavbarItem | NavbarGroup | string)[]</code></li></ul><p>设置为 <code>false</code> 可以禁用导航栏。</p><p>为了配置导航栏元素，你可以将其设置为 <em>导航栏数组</em> ，其中的每个元素是 <code>NavbarItem</code> 对象、 <code>NavbarGroup</code> 对象、或者字符串：</p><ul><li><code>NavbarItem</code> 对象应该有一个 <code>text</code> 字段和一个 <code>link</code> 字段，还有一个可选的 <code>activeMatch</code> 字段。</li><li><code>NavbarGroup</code> 对象应该有一个 <code>text</code> 字段和一个 <code>children</code> 字段。 <code>children</code> 字段同样是一个 <em>导航栏数组</em> 。</li><li>字符串应为目标页面文件的路径。它将会被转换为 <code>NavbarItem</code> 对象，将页面标题作为 <code>text</code> ，将页面路由路径作为 <code>link</code> 。</li></ul><p>navbar从上到下，在导航栏中展示的顺序是从左到右，即最后一个item或group在页面的右上角</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">navbar</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token comment">// NavbarItem</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Foo&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;/foo/&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// NavbarGroup</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Group&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;/group/foo.md&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;/group/bar.md&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// 字符串 - 页面文件路径.</span>
      <span class="token string">&#39;/bar/README.md&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="logo" tabindex="-1"><a class="header-anchor" href="#logo" aria-hidden="true">#</a> logo</h3><p>此logo为导航栏左上角的logo，</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defaultTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@vuepress/theme-default&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">logo</span><span class="token operator">:</span><span class="token string">&#39;/images/logo.png&#39;</span><span class="token punctuation">,</span> <span class="token comment">//也可使用url</span>
    <span class="token literal-property property">navbar</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;ceshi&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token string">&#39;/blog/README.md&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="home" tabindex="-1"><a class="header-anchor" href="#home" aria-hidden="true">#</a> home</h3><p>首页的路径。默认值为 /</p><p>它将被用于：</p><ul><li>导航栏中 Logo 的链接</li><li>404 页面的 <em>返回首页</em> 链接</li></ul><h3 id="插件" tabindex="-1"><a class="header-anchor" href="#插件" aria-hidden="true">#</a> 插件</h3><p>这个部分是耗费我最多时间的一个内容了，坑太多。</p><p>vuepress2.x版本其实已经整合了比较多实用的插件，比如back-to-top之类的。本来想搞点花里胡哨的，什么落樱花、鼠标点击特效、音乐播放器……结果配置了好几个发现都不生效，最后才意识到全是1.x的，找到了个2.x的，但也是一年前的2.x，1.x在我看来也并不好用，所以也懒得搞了，只按官方文档把全局搜索弄了就算了。</p>`,22),O={href:"https://docsearch.algolia.com/",target:"_blank",rel:"noopener noreferrer"},S=t(`<h3 id="docsearch-内容搜索" tabindex="-1"><a class="header-anchor" href="#docsearch-内容搜索" aria-hidden="true">#</a> docsearch 内容搜索</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> i <span class="token parameter variable">-D</span> @vuepress/plugin-docsearch@next    //2.0.0-beta.67
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>配置config.ts,</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> docsearchPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@vuepress/plugin-docsearch&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">docsearchPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">// 配置项</span>
        apiKey<span class="token operator">:</span><span class="token string">&#39;xx&#39;</span><span class="token punctuation">,</span>
      	indexName<span class="token operator">:</span><span class="token string">&#39;blogIndex&#39;</span><span class="token punctuation">,</span>
      	appId<span class="token operator">:</span><span class="token string">&#39;xx&#39;</span><span class="token punctuation">,</span>
      	placeholder<span class="token operator">:</span><span class="token string">&#39;请输入你的搜索内容&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>主要配置参数是<strong>apiKey、indexName、appId</strong>三个。</p><p>获取方法一是到algolia官网发送邮件申请获取服务，网上的方法也基本都是叫你这么做的，申请成功它就会用邮件把这些参数发回给你。但是，我个人体验感觉是申请成功率非常低，经常以你的网站还在建设阶段驳回你的申请，一开始我部署的网站确实内容稍微简陋，想着后面再补充，第一次被驳回后填满了内容也还是发回一个一模一样的邮件回来，有种被耍的感觉，不知道它的标准是什么。（假设你申请成功了，它是以一周一次的频率来爬取你网站的内容）</p>`,6),z={href:"https://dashboard.algolia.com/users/sign_in",target:"_blank",rel:"noopener noreferrer"},K=t('<p><img src="'+c+'" alt="image-20231006145638648"></p><p><img src="'+r+'" alt="image-20231006145809552"></p><p>第一个是appId、第二个是ApiId，index需要自己去创建。</p><p><img src="'+u+'" alt="image-20231006150204607"></p><p>至此插件所需的参数也配置完成。应该就能在右上角看到搜索插件了。但是还搜索不出任何内容，因为创建的index里并没有任何内容。</p><p><img src="'+d+'" alt="image-20231006150311345"></p><p><img src="'+v+'" alt="image-20231006150338128"></p>',7),H={href:"https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Falgolia%2Fdocsearch-scraper",target:"_blank",rel:"noopener noreferrer"},Y=t('<p><strong>github新建个私有仓库</strong>，按照图片新建两个密钥。密钥内容就是对应上面的apiKey和appId，名字可以随便起，对应后面的配置文件变量即可</p><p><img src="'+k+`" alt="image-20231006151048285"></p><p>然后自己<strong>本地创建一个项目</strong>，<strong>根目录</strong>创建配置 <strong>algolia.json</strong>（爬虫的配置文件）,下面是我的配置（看别人的也踩了不少坑：.theme-default-content就是内容区的类名、爬取不到数据可以自己按F12看看标题的类名）</p><p>index_name应该是需要对应自己创建的那个indexName的。</p><p>start_urls就是要爬取的网址（<strong>vuepress打包后用github静态部署</strong>，尝试过换成自己服务器的部署地址，但是不知道为什么爬取不到内容）。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;index_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;blogIndex&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;start_urls&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;https://wxj-github.github.io/xjblog/&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;rateLimit&quot;</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
  <span class="token property">&quot;maxDepth&quot;</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
  <span class="token property">&quot;selectors&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;lvl0&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;selector&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;defaultValue&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Documentation&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;lvl1&quot;</span><span class="token operator">:</span> <span class="token string">&quot;.theme-default-content h1&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;lvl2&quot;</span><span class="token operator">:</span> <span class="token string">&quot;.theme-default-content h2&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;lvl3&quot;</span><span class="token operator">:</span> <span class="token string">&quot;.theme-default-content h3&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;lvl4&quot;</span><span class="token operator">:</span> <span class="token string">&quot;.theme-default-content h4&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;lvl5&quot;</span><span class="token operator">:</span> <span class="token string">&quot;.theme-default-content h5&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token string">&quot;.theme-default-content p, .theme-default-content li&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;lang&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;selector&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/html/@lang&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xpath&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;global&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token property">&quot;default_value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;zh-CN&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;custom_settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;attributesForFaceting&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;lang&quot;</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>依旧在<strong>根目录</strong>继续创建 .github \\ workflows \\ deploy.yml</p><p>deploy.yml添加内容:</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> Deploy
<span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token key atrule">push</span><span class="token punctuation">:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> master
<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">algolia</span><span class="token punctuation">:</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v2
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Get the content of algolia.json as config
        <span class="token key atrule">id</span><span class="token punctuation">:</span> algolia_config
        <span class="token key atrule">run</span><span class="token punctuation">:</span> echo &quot;<span class="token punctuation">:</span><span class="token punctuation">:</span>set<span class="token punctuation">-</span>output name=config<span class="token punctuation">:</span><span class="token punctuation">:</span>$(cat algolia.json <span class="token punctuation">|</span> jq <span class="token punctuation">-</span>r tostring)&quot;
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Push indices to Algolia
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> signcl/docsearch<span class="token punctuation">-</span>scraper<span class="token punctuation">-</span>action@master
        <span class="token key atrule">env</span><span class="token punctuation">:</span>
          <span class="token key atrule">APPLICATION_ID</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.APPLICATION_ID <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token key atrule">API_KEY</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.API_KEY <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token key atrule">CONFIG</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> steps.algolia_config.outputs.config <span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后把这个项目<strong>推送到github创建的那个私有项目</strong>，每次推送它都会执行爬取。如果是成功爬取了，再去algolia看看index里有没有数据出来。</p><p><img src="`+m+'" alt="image-20231006152457855"></p><p><img src="'+b+'" alt="image-20231006152525523"></p><p>再次测试搜索，发现能够搜索出来内容了。</p><p><img src="'+g+`" alt="image-20231006152832838"></p><p>至此，如果需求只是部署在github上，那项目算是已经搞定了。</p><p>如果是部署在服务器上，还需要一些操作。</p><p>由于爬取的是部署在github上的静态网址，所以鼠标悬浮在搜索结果上时，可以看到左下角的跳转地址是github项目的，但是点击后它的ip仍是服务器ip（我猜测应该是插件内置对点击进行了路径的重写）</p><p>以其中一个点击后的搜索结果url举例：http://alcohol-free.cc:6868/xjblog/ts/TypeScript.html#type%E5%92%8Cinterface%E7%9A%84%E5%BC%82%E5%90%8C</p><p>对比github上的静态网址https://wxj-github.github.io/xjblog/可以发现，xjblog前都被重写为了我的服务器部署的ip和端口，但是xjblog仍然存在，而服务器并没有这个前缀，所以会404。</p><p>首先尝试修改nginx来解决资源访问问题。</p><p>修改服务器nginx.conf</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server {
        listen       6868;
        server_name  localhost;
        #charset koi8-r;
        charset utf-8;
        #access_log  logs/host.access.log  main;
        error_log    logs/error6666.log    error;

	location / {
	     root /root/vuepressblog/;
	     index  index.html index.htm;
             try_files $uri $uri/ /index.html;
	}

	# 添加重定向规则,也能解决vuepress带base路径打包后样式丢失问题（文件请求路径），最新发现-用重写首页会出现bug，header的内容会出现两份
    	#location ~ ^/xjblog/(.*)$ {
        #	rewrite ^/xjblog/(.*)$ /$1 permanent;
    	#}
	
	  # 这种写法好像也是可以解决静态资源路径的问题.且没有上面所说的首页bug
	   location /xjblog/ {                                      
		proxy_pass http://localhost:6868/;  
        }
        
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
        
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再次点击搜索结果，会发现仍然是404，但是刷新网页它却重定向成功，能正确访问内容，浏览器url上的xjblog被重写掉了。但我不明白为什么点击跳转请求资源的时候没有重写url。</p><p>我们仍需最后一步，修改config.ts，修改项目根路径，重新打包部署到服务器</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>base<span class="token operator">:</span> <span class="token string">&quot;/xjblog/&quot;</span><span class="token punctuation">,</span> <span class="token comment">//修改为github的静态项目名。注意，打包部署到github上时也是需要这个配置的，不然静态资源文件也会访问错误</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>由于我们的项目已经带上了xjblog的根路径，所以搜索出来的内容跳转成功。</p><p>（最后还有一点小疑惑就是，浏览器输入url+端口号后，url为什么会自动重定向到了项目设置的根路径--6868/xjblog）</p><h2 id="覆盖样式" tabindex="-1"><a class="header-anchor" href="#覆盖样式" aria-hidden="true">#</a> 覆盖样式</h2><p>Style 文件的路径是 <code>.vuepress/styles/index.scss</code></p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">:root </span><span class="token punctuation">{</span>
  <span class="token property">--content-width</span><span class="token punctuation">:</span>1000px<span class="token punctuation">;</span>  <span class="token comment">//覆盖原来的内容最大宽度</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="打包失败" tabindex="-1"><a class="header-anchor" href="#打包失败" aria-hidden="true">#</a> 打包失败</h2><p><img src="`+h+'" alt="image-20230908102031378"></p><p>一开始我还以为全部图片都有问题，发现这些打包失败的图片在网站上也都无法显示。</p><p><img src="'+y+`" alt="image-20230908102145888"></p><p>经过对比，显示失败的图片都是以img标签形式的图片引入，而这些本来都是以下面的形式引入的，但是右键进行缩放图片就会变成img标签，没想到当初这样给自己埋下坑</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>改回这种形式即可 ![](url)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="页面侧边栏目录失效" tabindex="-1"><a class="header-anchor" href="#页面侧边栏目录失效" aria-hidden="true">#</a> 页面侧边栏目录失效</h2><p>看navbar的配置，vue的那项中，配置了link：vue2</p><p>再去配置sidebar里的vue2相关页面。当我们跳转到vue笔记.md会发现没有导航栏</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defaultTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@vuepress/theme-default&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> docsearchPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@vuepress/plugin-docsearch&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;XJ-Blog&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">lang</span><span class="token operator">:</span> <span class="token string">&quot;zh-CN&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token string">&quot;/xjblog/&quot;</span><span class="token punctuation">,</span> <span class="token comment">//打包配置</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">logo</span><span class="token operator">:</span> <span class="token string">&quot;/images/t.png&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">notFound</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;没有这个东西噢&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;木有这个东西噢&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;找错了吧？&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">lastUpdated</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token literal-property property">contributors</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token literal-property property">backToHome</span><span class="token operator">:</span> <span class="token string">&quot;回到首页&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">//导航栏分类:Html、Css、Javascript（包ts）、Vue（2、3）、React、Node.js（服务器、nginx、express）、更多(杂七杂八)</span>
    <span class="token literal-property property">navbar</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;Javascript&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">link</span><span class="token operator">:</span><span class="token string">&quot;/js&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;Vue&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;Vue2&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&quot;/vue2&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;Vue3&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&quot;/vue3&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>

    <span class="token comment">// 在这里进行配置</span>
    <span class="token literal-property property">sidebar</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">//只能对sidebar设为auto，不能&#39;/vue3&#39;:auto</span>
      <span class="token comment">//所以需要对子路径的文件手动加--- sidebar: auto ---了</span>
      <span class="token string-property property">&quot;/vue3&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;Vue3-1&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&quot;/vue3/1.md&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;/vue2&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;Object.defineProperty&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&quot;/vue2/defineProperty.html&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;Vuex&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&quot;/vue2/vuex.html&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;Vue&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&quot;/vue2/vue笔记.md&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;/js&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;javascript&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&quot;/js/js.md&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">docsearchPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">// 配置项</span>
      <span class="token literal-property property">apiKey</span><span class="token operator">:</span><span class="token string">&#39;0406f5f90222d2029f5f458b85bc4bfa&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">indexName</span><span class="token operator">:</span><span class="token string">&#39;blogIndex&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">appId</span><span class="token operator">:</span><span class="token string">&#39;OR7YQUHPZY&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">placeholder</span><span class="token operator">:</span><span class="token string">&#39;请输入你的搜索内容&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解决方法一：在md文件里添加内容</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml">sidebar<span class="token punctuation">:</span>auto</span>
<span class="token punctuation">---</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解决方法二：配置的时候不用.md后缀，改成.html</p><p>这个方法比较好，但是也有缺点，就是名字不能有中文，否则依旧没有侧边栏目录</p><p>还有一个小好处就是，vue2里的其他目录不会消失（如打点击Object.defineProperty，vuex和vue还在），笔记的目录是展开的（如果md文件里配置了上面的siderbar：auto，还用了这种html，那也是只展示当前笔记的目录）</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">sidebar</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;/vue2&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;Object.defineProperty&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&quot;/vue2/defineProperty.html&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;Vuex&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&quot;/vue2/vuex.html&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;Vue&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&quot;/vue2/vueNote.html&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,46);function J(U,Q){const a=o("ExternalLinkIcon");return l(),i("div",null,[x,s("p",null,[n("VuePress v2 目前仍处于 "),f,n(" 阶段。它的配置和 API 还不够稳定，很可能会在 Minor(少数的) 版本中发生 Breaking Changes 。因此，在每次更新 beta 版本之后，请一定要仔细阅读 "),s("a",_,[n("更新日志"),e(a)]),n("。")]),j,s("p",null,[n("将 "),w,n(" 目录作为你的 "),s("a",E,[n("sourceDir"),e(a)]),n(" ，例如你在运行 "),P,n(" 命令。此时，你的 Markdown 文件对应的路由路径为：")]),A,s("p",null,[n("在这种情况下，你可以设置 "),s("a",I,[n("pagePatterns"),e(a)]),n(" 来避免某个文件被 VuePress 处理，例如使用 "),N,n(" 来排除所有的 "),D,n(" 文件。")]),s("p",null,[n("此外，一些符号如 "),V,n(" 和 "),M,n(" 可能对 vue-router 有特殊含义，因此你应该避免使用它们，请参阅 "),s("a",R,[n("vue-router 文档"),e(a)]),n(" 了解更多详情。")]),T,C,s("p",null,[n("默认的 Public 目录是 "),L,n(" ，可以通过 "),s("a",F,[n("public"),e(a)]),n(" 配置项来修改。")]),G,s("p",null,[s("a",$,[n("配置文档"),e(a)])]),B,s("p",null,[n("将 "),s("a",O,[n("Algolia DocSearch"),e(a)]),n(" 集成到 VuePress 中，为你的文档网站提供搜索功能。")]),S,s("p",null,[n("方法二是自己创建一个algolia账号，"),s("a",z,[n("Sign in | Algolia"),e(a)]),n("，登录后创建应用，获取上面所需的参数。")]),K,s("p",null,[n("下面就是最重要的一步，使用 Github Actions 在 Docker 中运行自托管的 Algolia "),s("a",H,[n("DocSearch scraper"),e(a)]),n("来爬取网站的内容。")]),Y])}const X=p(q,[["render",J],["__file","vuePress.html.vue"]]);export{X as default};
