import{_ as a,r as e,o as p,c as t,a as n,b as c,d as i,e as o}from"./app-c984cf19.js";const l={},u={href:"https://www.sassmeister.com/",target:"_blank",rel:"noopener noreferrer"},d=o(`<p>Sass 有两种语法！SCSS 语法 (<code>.scss</code>) 最常用。它是 CSS 的超集，这意味着所有有效的 CSS 也是有效的 SCSS。缩进语法 (<code>.sass</code>) 更不寻常：它使用缩进而不是大括号来嵌套语句，并使用换行符而不是分号来分隔它们</p><p>Sass 的<code>缩排语法</code>，对于写惯 CSS 前端的 Web 开发者来说很不直观，也不能将 CSS 代码加入到 Sass 里面，因此 Sass 语法进行了改良，Sass3 就变成了 <strong>Scss(Sassy CSS)</strong> 。与原来的语法兼容，只是用 <code>{}</code> 取代了原来的缩进。所以 Sass 包括两套语法，通常情况下，这两套语法通过 <code>.sass</code> 和 <code>.scss</code> 两个文件扩展名区分开。</p><h2 id="变量" tabindex="-1"><a class="header-anchor" href="#变量" aria-hidden="true">#</a> 变量</h2><p>用$开头定义</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$font-stack</span></span><span class="token punctuation">:</span> Helvetica<span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$primary-color</span></span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>

<span class="token selector">body </span><span class="token punctuation">{</span>
  <span class="token property">font</span><span class="token punctuation">:</span> 100% <span class="token variable">$font-stack</span><span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$primary-color</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="嵌套" tabindex="-1"><a class="header-anchor" href="#嵌套" aria-hidden="true">#</a> 嵌套</h2><p>不解释了，和less一样</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">nav </span><span class="token punctuation">{</span>
  <span class="token selector">ul </span><span class="token punctuation">{</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">list-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="模块" tabindex="-1"><a class="header-anchor" href="#模块" aria-hidden="true">#</a> 模块</h2><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// _base.scss</span>
<span class="token property"><span class="token variable">$font-stack</span></span><span class="token punctuation">:</span> Helvetica<span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$primary-color</span></span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>

<span class="token selector">body </span><span class="token punctuation">{</span>
  <span class="token property">font</span><span class="token punctuation">:</span> 100% <span class="token variable">$font-stack</span><span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$primary-color</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// styles.scss</span>
<span class="token keyword">@use</span> <span class="token string">&#39;base&#39;</span><span class="token punctuation">;</span>

<span class="token selector">.inverse </span><span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> base.<span class="token variable">$primary-color</span><span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//编译后</span>
<span class="token selector">body </span><span class="token punctuation">{</span>
  <span class="token property">font</span><span class="token punctuation">:</span> 100% Helvetica<span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.inverse </span><span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请注意，我们在 <code>styles.scss</code> 文件中使用 <code>@use &#39;base&#39;;</code>。使用文件时不需要包含文件扩展名</p><h2 id="混入" tabindex="-1"><a class="header-anchor" href="#混入" aria-hidden="true">#</a> 混入</h2><p>要创建 mixin，你可以使用 <code>@mixin</code> 指令并为其命名，可以将其用作 CSS 声明，以 <code>@include</code> 开头，后跟 mixin 的名称。</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token keyword">@mixin</span> <span class="token function">theme</span><span class="token punctuation">(</span><span class="token property"><span class="token variable">$theme</span></span><span class="token punctuation">:</span> DarkGray<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token variable">$theme</span><span class="token punctuation">;</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 1px <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token variable">$theme</span><span class="token punctuation">,</span> .25<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.info </span><span class="token punctuation">{</span>
  <span class="token keyword">@include</span> theme<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.alert </span><span class="token punctuation">{</span>
  <span class="token keyword">@include</span> <span class="token function">theme</span><span class="token punctuation">(</span><span class="token property"><span class="token variable">$theme</span></span><span class="token punctuation">:</span> DarkRed<span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">//$theme: 这部分不是必写的，像正常调用函数一样就行   @include theme(DarkRed)</span>
<span class="token punctuation">}</span>

<span class="token comment">//编译后</span>
<span class="token selector">.info </span><span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> DarkGray<span class="token punctuation">;</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 1px <span class="token function">rgba</span><span class="token punctuation">(</span>169<span class="token punctuation">,</span> 169<span class="token punctuation">,</span> 169<span class="token punctuation">,</span> 0.25<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.alert </span><span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> DarkRed<span class="token punctuation">;</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 1px <span class="token function">rgba</span><span class="token punctuation">(</span>139<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.25<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="继承" tabindex="-1"><a class="header-anchor" href="#继承" aria-hidden="true">#</a> 继承</h2><p>使用 <code>@extend</code> 可以让你从一个选择器到另一个选择器共享一组 CSS 属性,%是占位符</p><p>占位符类是一种特殊类型的类，仅在扩展时才打印，并且可以帮助保持编译后的 CSS 整洁</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector"><span class="token placeholder">%message-shared</span> </span><span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #ccc<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//message-shared和equal-heights 都不会出现在最终编译结果里，但message-shared被继承了，它的样式就会出现在编译结果里</span>
<span class="token selector"><span class="token placeholder">%equal-heights</span> </span><span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">flex-wrap</span><span class="token punctuation">:</span> wrap<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.test</span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span>100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.message </span><span class="token punctuation">{</span>
  <span class="token keyword">@extend</span> <span class="token placeholder selector">%message-shared</span><span class="token punctuation">;</span>
  <span class="token keyword">@extend</span> .test<span class="token punctuation">;</span>    <span class="token comment">//也可以直接继承类</span>
<span class="token punctuation">}</span>

<span class="token selector">.success </span><span class="token punctuation">{</span>
  <span class="token keyword">@extend</span> <span class="token placeholder selector">%message-shared</span><span class="token punctuation">;</span>
  <span class="token property">border-color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token comment">//编译后：</span>
<span class="token selector">.success, .message </span><span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #ccc<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.test, .message </span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.success </span><span class="token punctuation">{</span>
  <span class="token property">border-color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="运算符" tabindex="-1"><a class="header-anchor" href="#运算符" aria-hidden="true">#</a> 运算符</h2><p>Sass 有一些标准数学运算符，例如 <code>+</code>、<code>-</code>、<code>*</code>、<code>math.div()</code> 和 <code>%</code></p><p>我们创建了一个非常简单的基于 960px 的flex布局。下面的操作是：获取像素值并将它们转换为百分比</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token keyword">@use</span> <span class="token string">&quot;sass:math&quot;</span><span class="token punctuation">;</span>

<span class="token selector">.container </span><span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">article[role=&quot;main&quot;] </span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> math.<span class="token function">div</span><span class="token punctuation">(</span>600px<span class="token punctuation">,</span> 960px<span class="token punctuation">)</span> <span class="token operator">*</span> 100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">aside[role=&quot;complementary&quot;] </span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> math.<span class="token function">div</span><span class="token punctuation">(</span>300px<span class="token punctuation">,</span> 960px<span class="token punctuation">)</span> <span class="token operator">*</span> 100%<span class="token punctuation">;</span>
  <span class="token property">margin-left</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//编译后</span>
<span class="token selector">.container </span><span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">article[role=main] </span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 62.5%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">aside[role=complementary] </span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 31.25%<span class="token punctuation">;</span>
  <span class="token property">margin-left</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="less和sass的异同" tabindex="-1"><a class="header-anchor" href="#less和sass的异同" aria-hidden="true">#</a> less和sass的异同</h2><p>相同：两者都属于 CSS 预处理器，功能上大同小异，都具有变量、混入、嵌套、函数等特性</p><p>不同：</p><ul><li>主要是语法上，比如定义变量，less是@，sass是$。继承复用样式，sass需要用@extend或用混入@mixin和@include,less可以直接嵌套类名复用</li><li>sass有两种文件格式，sass和scss，sass是缩进语法，scss才是我们平时习惯用的格式</li><li>sass支持更多条件语句，if、else if，less我知道的有if，when</li></ul>`,26);function r(k,v){const s=e("ExternalLinkIcon");return p(),t("div",null,[n("p",null,[n("a",u,[c("sass在线转换工具"),i(s)])]),d])}const b=a(l,[["render",r],["__file","sass.html.vue"]]);export{b as default};
