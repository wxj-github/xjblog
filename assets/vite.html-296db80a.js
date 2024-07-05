import{_ as t,r as p,o,c as i,a as s,b as n,d as e,e as l}from"./app-c984cf19.js";const c={},r=s("h1",{id:"vite",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#vite","aria-hidden":"true"},"#"),n(" Vite")],-1),u=s("p",null,"Vite是一种新型前端构建工具，能够显著提升前端开发体验。它主要由两部分组成：",-1),d={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules",target:"_blank",rel:"noopener noreferrer"},k={href:"https://cn.vitejs.dev/guide/features.html",target:"_blank",rel:"noopener noreferrer"},v={href:"https://cn.vitejs.dev/guide/features.html#hot-module-replacement",target:"_blank",rel:"noopener noreferrer"},m={href:"https://rollupjs.org/",target:"_blank",rel:"noopener noreferrer"},b={href:"https://cn.vitejs.dev/guide/api-plugin.html",target:"_blank",rel:"noopener noreferrer"},g={href:"https://cn.vitejs.dev/guide/api-javascript.html",target:"_blank",rel:"noopener noreferrer"},y=l(`<h2 id="创建项目" tabindex="-1"><a class="header-anchor" href="#创建项目" aria-hidden="true">#</a> 创建项目</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm create vite@latest
//或
yarn create vite
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>相比于vue/cli，vite创建出来的项目模板几乎是没有东西的，vuex、vue-router等都要自行安装。</p><h2 id="路由配置" tabindex="-1"><a class="header-anchor" href="#路由配置" aria-hidden="true">#</a> 路由配置</h2><p>https://router.vuejs.org/zh/index.html</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install vue-router@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>src目录下新建router文件夹及index.ts</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createRouter<span class="token punctuation">,</span> createWebHistory<span class="token punctuation">,</span> RouteRecordRaw <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-router&#39;</span>

<span class="token comment">//自定义路由类型校验.RouteRecordRaw是官方的</span>
<span class="token keyword">type</span> <span class="token class-name">RouterConfig</span> <span class="token operator">=</span> RouteRecordRaw <span class="token operator">&amp;</span> <span class="token punctuation">{</span>
  showTitle<span class="token operator">?</span><span class="token operator">:</span> Boolean
<span class="token punctuation">}</span>

<span class="token keyword">const</span> routes<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span>RouterConfig<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    path<span class="token operator">:</span> <span class="token string">&#39;/home&#39;</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">&#39;Home&#39;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;../views/Home.vue&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    path<span class="token operator">:</span> <span class="token string">&#39;/about&#39;</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">&#39;About&#39;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;../views/About.vue&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    path<span class="token operator">:</span> <span class="token string">&#39;/:pathMatch(.*)*&#39;</span><span class="token punctuation">,</span>    <span class="token comment">//旧版*即可</span>
    name<span class="token operator">:</span> <span class="token string">&#39;Not Found&#39;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;../views/404.vue&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>


<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>     <span class="token comment">//创建路由</span>
  history<span class="token operator">:</span> <span class="token function">createWebHistory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  routes
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> router<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>main.ts:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span>
<span class="token comment">//引入路由</span>
<span class="token keyword">import</span> router <span class="token keyword">from</span> <span class="token string">&#39;./router/index&#39;</span>

<span class="token comment">// +++ use(router)</span>
<span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>router<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置vuex" tabindex="-1"><a class="header-anchor" href="#配置vuex" aria-hidden="true">#</a> 配置Vuex</h2><p>https://vuex.vuejs.org/zh/index.html</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install vuex@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>src目录下新建store文件夹及index.ts</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>
<span class="token keyword">import</span> moduleB <span class="token keyword">from</span> <span class="token string">&#39;./moduleB&#39;</span>

<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">state</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  <span class="token comment">//和vue2的不一样，变成了类似组件中data函数，返回一个对象</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      count<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      count2<span class="token operator">:</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  actions<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">toAdd</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> payload<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      context<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;add&#39;</span><span class="token punctuation">,</span> payload<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  mutations<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">add</span><span class="token punctuation">(</span>state<span class="token punctuation">,</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      state<span class="token punctuation">.</span>count <span class="token operator">+=</span> value<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  getters<span class="token operator">:</span> <span class="token punctuation">{</span>  <span class="token comment">//getters不再具有缓存作用</span>
    <span class="token function">getSum</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> state<span class="token punctuation">.</span>count <span class="token operator">+</span> state<span class="token punctuation">.</span>count2
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  modules<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token constant">B</span><span class="token operator">:</span> moduleB
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> store<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>main.ts:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span>
<span class="token comment">//引入路由</span>
<span class="token keyword">import</span> router <span class="token keyword">from</span> <span class="token string">&#39;./router/index&#39;</span>
<span class="token comment">//引入vuex仓库</span>
<span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">&#39;./store/index&#39;</span>


<span class="token comment">// +++ use(store)</span>
<span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>router<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>store<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="sass配置" tabindex="-1"><a class="header-anchor" href="#sass配置" aria-hidden="true">#</a> Sass配置</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install sass-loader sass -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>修改vite.config.ts</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite&#39;</span>
<span class="token keyword">import</span> vue <span class="token keyword">from</span> <span class="token string">&#39;@vitejs/plugin-vue&#39;</span>

<span class="token comment">// https://vitejs.dev/config/</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  css<span class="token operator">:</span> <span class="token punctuation">{</span>
    preprocessorOptions<span class="token operator">:</span> <span class="token punctuation">{</span>
      scss<span class="token operator">:</span> <span class="token punctuation">{</span>
        additionalData<span class="token operator">:</span> <span class="token string">&#39;@import &quot;./src/style/scssConfig.scss&quot;;&#39;</span>  
          <span class="token comment">//该属性是引用指定文件作为全局样式文件.根据sass版本的不同，配置属性也不同。</span>
          <span class="token comment">//sass-loader v8-，用data</span>
          <span class="token comment">//sass-loader v8，用prependData</span>
          <span class="token comment">//sass-loader v10+，用additionalData</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置路径别名" tabindex="-1"><a class="header-anchor" href="#配置路径别名" aria-hidden="true">#</a> 配置路径别名</h2><p>修改vite.config.ts</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite&#39;</span>
<span class="token keyword">import</span> vue <span class="token keyword">from</span> <span class="token string">&#39;@vitejs/plugin-vue&#39;</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>  <span class="token comment">//++++</span>

<span class="token comment">// https://vitejs.dev/config/</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">//+++++</span>
  resolve<span class="token operator">:</span> <span class="token punctuation">{</span>  
    alias<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&#39;@&#39;</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;./src&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>   <span class="token comment">//用@代表src目录</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">//+++++</span>
  css<span class="token operator">:</span> <span class="token punctuation">{</span>
    preprocessorOptions<span class="token operator">:</span> <span class="token punctuation">{</span>
      scss<span class="token operator">:</span> <span class="token punctuation">{</span>
        additionalData<span class="token operator">:</span> <span class="token string">&#39;@import &quot;./src/style/scssConfig.scss&quot;;&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>还要修改tsconfig.json，不然使用路径别名的时候，vetur插件会报错标红，虽然对使用没有影响</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esnext&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;useDefineForClassFields&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;module&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esnext&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;moduleResolution&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;strict&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;jsx&quot;</span><span class="token operator">:</span> <span class="token string">&quot;preserve&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;sourceMap&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;resolveJsonModule&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;isolatedModules&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;esModuleInterop&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;lib&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;esnext&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;dom&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;skipLibCheck&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token comment">//++++</span>
    <span class="token property">&quot;baseUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;.&quot;</span><span class="token punctuation">,</span>   
    <span class="token property">&quot;paths&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;@/*&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;src/*&quot;</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
      <span class="token comment">//++++</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="eslint配置" tabindex="-1"><a class="header-anchor" href="#eslint配置" aria-hidden="true">#</a> esLint配置</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install -D eslint

//初始化配置
npx eslint --init
//选择完配置后就会生成相应的eslint配置文件


npm install vite-plugin-eslint @babel/eslint-parser -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置vite.config.js</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite&#39;</span>
<span class="token keyword">import</span> vue <span class="token keyword">from</span> <span class="token string">&#39;@vitejs/plugin-vue&#39;</span>
<span class="token keyword">import</span> eslintPlugin <span class="token keyword">from</span> <span class="token string">&#39;vite-plugin-eslint&#39;</span>   <span class="token comment">//+++++</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// https://vitejs.dev/config/</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&#39;@&#39;</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;./src&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>   <span class="token comment">//用@代表src目录</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">css</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">preprocessorOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">scss</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">additionalData</span><span class="token operator">:</span> <span class="token string">&#39;@import &quot;./src/style/scssConfig.scss&quot;;&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token comment">//+++++</span>
    <span class="token function">eslintPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">include</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;src/**/*.js&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;src/**/*.ts&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;src/**/*.vue&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;src/*.vue&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;src/*.js&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;src/*.ts&#39;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>.eslintrc.js：eslint配置文件</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">env</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">browser</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">es2021</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">node</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;plugin:vue/vue3-essential&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;standard&#39;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">parserOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">ecmaVersion</span><span class="token operator">:</span> <span class="token string">&#39;latest&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">parser</span><span class="token operator">:</span> <span class="token string">&#39;@typescript-eslint/parser&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">sourceType</span><span class="token operator">:</span> <span class="token string">&#39;module&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;vue&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;@typescript-eslint&#39;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">//配置规则 http://eslint.cn/docs/rules/</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置vscode，自动格式化读取eslint配置</p><p>文件==》首选项==》设置==》搜索set==》编辑setting.json==》</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;[vue]&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span><span class="token string">&quot;octref.vetur&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;eslint.options&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>  <span class="token comment">//指定vscode的selint所处理的文件的后缀</span>
        <span class="token property">&quot;extensions&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
            <span class="token string">&quot;.js&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;.vue&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;.ts&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;.tsx&quot;</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">//自动修复</span>
    <span class="token property">&quot;editor.codeActionsOnSave&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;source.fixAll.eslint&quot;</span><span class="token operator">:</span><span class="token boolean">true</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="proxy配置" tabindex="-1"><a class="header-anchor" href="#proxy配置" aria-hidden="true">#</a> proxy配置</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install axios
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>main.ts</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span>
<span class="token keyword">import</span> router <span class="token keyword">from</span> <span class="token string">&#39;./router/index&#39;</span>
<span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">&#39;./store/index&#39;</span>
<span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&#39;axios&#39;</span>


<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//vue3的全局挂载方式</span>
app<span class="token punctuation">.</span>config<span class="token punctuation">.</span>globalProperties<span class="token punctuation">.</span>$axios <span class="token operator">=</span> axios<span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>router<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>store<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>页面中使用：</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>ts<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> getCurrentInstance <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span>proxy<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">getCurrentInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
proxy<span class="token punctuation">.</span>$axios<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&#39;/xxx&#39;</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="打包优化" tabindex="-1"><a class="header-anchor" href="#打包优化" aria-hidden="true">#</a> 打包优化</h2><h3 id="build视图分析依赖文件" tabindex="-1"><a class="header-anchor" href="#build视图分析依赖文件" aria-hidden="true">#</a> build视图分析依赖文件</h3><p>rollup plugin visualizer是一个依赖分析插件，提供了多种模式的依赖分析，包括直观的视图分析，sunburst（循环层次图，像光谱）、treemap（矩形层次图，看起来比较直观，也是默认参数）、network（网格图，查看包含关系）、raw-data（原数据模式，jsno格式），list（列表模式），可以选择任意一种观察模式</p><p>安装：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install --save-dev rollup-plugin-visualizer
或
yarn add --dev rollup-plugin-visualizer
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置vite.config.ts</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>visualizer<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;rollup-plugin-visualizer&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">visualizer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">emitFile</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">file</span><span class="token operator">:</span><span class="token string">&quot;stats.html&quot;</span><span class="token punctuation">,</span>  <span class="token comment">//分析图生成的文件名</span>
        <span class="token literal-property property">open</span><span class="token operator">:</span><span class="token boolean">true</span>  <span class="token comment">//如果村在本地服务端口，将在打包后自动展示</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其他参数：</p><table><thead><tr><th>参数</th><th>类型</th><th>解释</th></tr></thead><tbody><tr><td>filename/file</td><td>string</td><td>生成分析的文件名</td></tr><tr><td>titile</td><td>string</td><td>html标签页标题</td></tr><tr><td>open</td><td>boolean</td><td>以默认服务器代理打开文件</td></tr><tr><td>template</td><td>string</td><td>可选择的图标类型</td></tr><tr><td>BrotliSize</td><td>boolean</td><td>搜集brotli压缩包的大小到图标</td></tr><tr><td>emitFile</td><td>boolean</td><td>使用emitFile生成文件，简答说，为true，打包后的分析文件会出现在打包好的文件包下，否则就在项目目录下</td></tr><tr><td>sourcemap</td><td>boolean</td><td>使用sourcemap计算大小</td></tr><tr><td>projectRoot</td><td>string,RegExp</td><td>文件的根目录，默认在打包好的目录下</td></tr></tbody></table><p>然后npm run build 就可以看到图表</p><h3 id="第三方库cdn引入" tabindex="-1"><a class="header-anchor" href="#第三方库cdn引入" aria-hidden="true">#</a> 第三方库cdn引入</h3><p>cdn是构建在数据网络上的一种分布式的内容分发网。</p><p>cdn的作用是采用流媒体服务器集群技术，克服单机系统输出带宽及并发能力不足的缺点，极大提升系统支持的并发流数目，减少或避免单点失效带来的不良影响。</p><p>比如通过视图分析发现element-plus是最大的文件依赖，就可尝试在vite+vue下配置库的cdn引入来减少请求压力；</p><p>cdn管理插件使用vite-plugin-cdn-import</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install vite-plugin-cdn-import --save-dev
或
yarn add vite-plugin-cdn-import -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>vite.config.ts:(举例)</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> reactRefresh <span class="token keyword">from</span> <span class="token string">&#39;@vitejs/plugin-react-refresh&#39;</span>
<span class="token keyword">import</span> importToCDN <span class="token keyword">from</span> <span class="token string">&#39;vite-plugin-cdn-import&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span><span class="token punctuation">{</span>
    plugins<span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token function">importToCDN</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            modules<span class="token operator">:</span><span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    name<span class="token operator">:</span><span class="token string">&#39;react&#39;</span><span class="token punctuation">,</span>
                    <span class="token keyword">var</span><span class="token operator">:</span><span class="token string">&#39;React&#39;</span><span class="token punctuation">,</span>
                    path<span class="token operator">:</span><span class="token string">&#39;umd/react.production.min.js&#39;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    name<span class="token operator">:</span><span class="token string">&#39;react-dom&#39;</span><span class="token punctuation">,</span>
                    <span class="token keyword">var</span><span class="token operator">:</span><span class="token string">&#39;ReactDOM&#39;</span><span class="token punctuation">,</span>
                    path<span class="token operator">:</span><span class="token string">&#39;umd/react-dom.production.min.js&#39;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>有一些model该插件提供了自动完成</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span><span class="token punctuation">{</span>
	<span class="token literal-property property">plugins</span><span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token function">importToCDN</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">modules</span><span class="token operator">:</span><span class="token punctuation">[</span>
                <span class="token function">autoComplete</span><span class="token punctuation">(</span><span class="token string">&#39;react&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token function">autoComplete</span><span class="token punctuation">(</span><span class="token string">&#39;react-dom&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token function">reactRefresh</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>自动完成的module：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&#39;react&#39;  &#39;react-dom&#39; &#39;react-router-dom&#39;
&#39;antd&#39;   &#39;ahoos&#39;   &#39;@ant-design/charts&#39;
&#39;vue&#39;    &#39;vue2&#39;    &#39;@vueuse/shared&#39;
&#39;@vueuse/core&#39;    &#39;moment&#39;
&#39;eventemitter3&#39;   &#39;file-saver&#39;
&#39;broser-md5-file&#39;  &#39;xlsx&#39;   &#39;crypto-js&#39;
&#39;axios&#39;   &#39;lodash&#39;     &#39;localforage&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>常见cdn网站：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>UNPKG :  https://unpkg.com
jsDelivr : https://www.jsdelivr.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>依赖文件分包</p><p>gzip压缩文件</p><p>部署前配置history路由模式404问题</p>`,68);function h(f,x){const a=p("ExternalLinkIcon");return o(),i("div",null,[r,u,s("ul",null,[s("li",null,[n("一个开发服务器，它基于 "),s("a",d,[n("原生 ES 模块"),e(a)]),n(" 提供了 "),s("a",k,[n("丰富的内建功能"),e(a)]),n("，如速度快到惊人的 "),s("a",v,[n("模块热更新（HMR）"),e(a)]),n("。")]),s("li",null,[n("一套构建指令，它使用 "),s("a",m,[n("Rollup"),e(a)]),n(" 打包你的代码，并且它是预配置的，可输出用于生产环境的高度优化过的静态资源。")])]),s("p",null,[n("Vite 意在提供开箱即用的配置，同时它的 "),s("a",b,[n("插件 API"),e(a)]),n(" 和 "),s("a",g,[n("JavaScript API"),e(a)]),n(" 带来了高度的可扩展性，并有完整的类型支持。")]),y])}const q=t(c,[["render",h],["__file","vite.html.vue"]]);export{q as default};
