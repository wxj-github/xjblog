import{_ as n,o as s,c as a,e}from"./app-6fcf50f1.js";const i={},l=e(`<p>常见的包管理工具：npm、pnpm、cnpm、yarn</p><p>包管理器可以轻松升级、卸载包，管理包的依赖。</p><h2 id="nvm" tabindex="-1"><a class="header-anchor" href="#nvm" aria-hidden="true">#</a> nvm</h2><p>nvm是管理node版本的工具，通过它可以在一台电脑上安装多个版本的node，并可随时切换。</p><p>安装前需要先卸载安装过的nodeJs</p><p>下载地址：https://github.com/coreybutler/nvm-windows/releases</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>nvm <span class="token parameter variable">-v</span>	<span class="token comment">#安装成功后，查看版本</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>修改镜像源</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>nvm root	<span class="token comment">#查看安装根路径,找不到文件夹的可能是因为文件夹被隐藏了。也可以直接复制显示的路径打开</span>
<span class="token comment">#找到路径下的setting.txt文件，添加以下内容保存即可</span>
node_mirror: https://npm.taobao.org/mirrors/node/
npm_mirror: https://npm.taobao.org/mirrors/npm/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>nvm常用命令</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#查看当前安装和使用的node版本</span>
nvm list
nvm list available   <span class="token comment">#显示所有可以下载的node版本</span>

<span class="token comment">#安装某个node版本</span>
nvm <span class="token function">install</span> 版本号
nvm <span class="token function">install</span> <span class="token number">18.12</span>.1	<span class="token comment">#安装18.12.1版本的node</span>
nvm <span class="token function">install</span> latest	<span class="token comment">#安装最新版的node</span>

<span class="token comment">#切换node版本</span>
nvm use 版本号
nvm use <span class="token number">18.12</span>.1	<span class="token comment">#切换18.12.1版本的node</span>

<span class="token comment">#设置默认版本</span>
nvm <span class="token builtin class-name">alias</span> 版本号

<span class="token comment">#删除18.12.1版本的node</span>
nvm uninstall 版本号	
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装好node后，对应的npm的源可能会是默认指向npm官网的，需要重新修改npm的源</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> config get registry 
<span class="token function">npm</span> config <span class="token builtin class-name">set</span> registry https://registry.npm.taobao.org
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="node查找包的顺序" tabindex="-1"><a class="header-anchor" href="#node查找包的顺序" aria-hidden="true">#</a> node查找包的顺序</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol><li>查找是否有内置模块a</li><li>查找当前目录的node_modules中是否有a</li><li>依次查找上级目录的node_modules中是否有a，直到根目录</li></ol><h2 id="npm" tabindex="-1"><a class="header-anchor" href="#npm" aria-hidden="true">#</a> npm</h2><p>安装node后就会自带npm,其实现在不推荐用npm了，pnpm和yarn都是更好的选择</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token parameter variable">-v</span>	<span class="token comment">#查看npm版本</span>
<span class="token function">npm</span> config get registry  <span class="token comment">#查看源,官方源下载速度很慢，换成国内的淘宝镜像源，其他管理工具可能也需要换源，自行百度即可</span>
<span class="token function">npm</span> config <span class="token builtin class-name">set</span> registry https://registry.npm.taobao.org
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在工程项目里才能安装包，包会被下载到命令行所在目录的node_modules中</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> init <span class="token parameter variable">-y</span> 	<span class="token comment">#初始化工程,会生成一个package.json文件</span>

<span class="token function">npm</span> <span class="token function">install</span> <span class="token comment">#下载package.json里的所有依赖</span>
<span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">--production</span> <span class="token comment">#只下载生产环境依赖</span>

<span class="token comment">#下面的install可以简写为i、uninstall可以简写为un、view可以简写为v</span>

<span class="token comment">#默认安装为生产环境依赖，即项目实际上线运行所需要的依赖</span>
<span class="token function">npm</span> <span class="token function">install</span> 包名
<span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">--save</span> 包名
<span class="token function">npm</span> <span class="token function">install</span> 包名@版本号

<span class="token comment">#若仅作为开发依赖，只在开发阶段所需要的依赖，则添加参数-D</span>
<span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-D</span> 包名
<span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-D</span> 包名@版本号

<span class="token comment">#卸载、删除包</span>
<span class="token function">npm</span> uninstall 包名

<span class="token comment">#全局安装，添加参数-g，在任意目录都可以使用该依赖的命令，如脚手架之类</span>
<span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> 包名
<span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> 包名@版本号

<span class="token comment">#全局卸载</span>
<span class="token function">npm</span> uninstall <span class="token parameter variable">-g</span> 包名

<span class="token comment">#查看包的所有版本</span>
<span class="token function">npm</span> view 包名 versions

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Npm导入包时，先在当前文件夹下node_modules中寻找同名文件夹，如果找不到，就从上一级目录的node_modules中找同名文件夹,直到磁盘根目录</p><p><strong>npm安装机制</strong></p><p>1.npm会检查本地的node_modules目录中是否已经安装过该模块，如果已经安装，则不再重新安装</p><p>2.npm检查缓存中是否有相同的模块，如果有，直接从缓存中读取安装</p><p>3.如果本地和缓存中均不存在，npm会从registry指定的地址下载安装包，然后将其写入到本地的node_modules目录中，同时缓存起来。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 清除缓存</span>
<span class="token function">npm</span> cache clean <span class="token parameter variable">-f</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="pnpm" tabindex="-1"><a class="header-anchor" href="#pnpm" aria-hidden="true">#</a> pnpm</h2><h2 id="cnpm" tabindex="-1"><a class="header-anchor" href="#cnpm" aria-hidden="true">#</a> cnpm</h2><h2 id="yarn" tabindex="-1"><a class="header-anchor" href="#yarn" aria-hidden="true">#</a> yarn</h2><h2 id="npx" tabindex="-1"><a class="header-anchor" href="#npx" aria-hidden="true">#</a> npx</h2><p>当你使用 npx 执行可执行文件时，npx 会首先检查本地是否已经存在该可执行文件。如果本地已经安装了这个可执行文件（位于项目的 <code>node_modules/.bin</code> 目录中），npx 会直接运行它，而无需下载。</p><p>如果本地不存在该可执行文件，npx 会自动下载对应的包，并将其安装在一个临时目录中，然后执行该可执行文件。这意味着 npx 会在需要时临时下载所需的包，而不会将其全局安装或污染项目的依赖。</p><p>临时下载的包会被存储在一个缓存目录中，以便下次使用相同的包时可以快速加载。</p><p>比如临时需要一个库prettyjson来转换json文件的格式</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>npx prettyjson test.json  <span class="token comment"># prettyjson库和执行命令同名</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>而库和执行命令不同名，则需要-p指示需要下载哪个库，再接执行命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>npx <span class="token parameter variable">-p</span> @vue/cli vue create vue-app
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>npm init</strong> 通常是用于初始化工程的package.json文件，除此之外，有时也可以充当npx的作用</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> init 包名 <span class="token comment"># 等效于 npx create-包名</span>
<span class="token function">npm</span> init @命名空间 <span class="token comment"># 等效于 npx @命名空间/create</span>
<span class="token function">npm</span> init @命名空间/包名 <span class="token comment"># 等效于 npx @命名空间/create-包名</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="版本号-和-的区别" tabindex="-1"><a class="header-anchor" href="#版本号-和-的区别" aria-hidden="true">#</a> 版本号~和^的区别</h2><ul><li>~会匹配最近的小版本依赖包，比如~1.2.3会匹配所有1.2.x版本，但不包括1.3.0</li><li>^会匹配最近的大版本依赖包，比如^1.2.3会匹配所有的1.x.x的包，但不包括2.x.x</li></ul>`,42),p=[l];function c(t,d){return s(),a("div",null,p)}const r=n(i,[["render",c],["__file","package.html.vue"]]);export{r as default};
