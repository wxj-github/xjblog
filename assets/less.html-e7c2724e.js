import{_ as t,r as i,o as l,c,a as n,b as a,d as e,e as p}from"./app-c984cf19.js";const o={},u={href:"https://www.lesstester.com/",target:"_blank",rel:"noopener noreferrer"},r=p(`<p>https://juejin.cn/post/7283422522535673856?searchId=20240325151703FB8B0D6C3623661AA21F#heading-6</p><h2 id="变量" tabindex="-1"><a class="header-anchor" href="#变量" aria-hidden="true">#</a> 变量</h2><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token variable">@basecolor<span class="token punctuation">:</span></span> #ff6700<span class="token punctuation">;</span>
<span class="token variable">@fsize<span class="token punctuation">:</span></span> 32px<span class="token punctuation">;</span>
<span class="token comment">//在sass中是用$来定义变量</span>

<span class="token selector">.less</span><span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">@basecolor</span><span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token variable">@fsize</span> <span class="token operator">+</span> 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token selector">.test()</span><span class="token punctuation">{</span>  <span class="token comment">//如果类名后面加个(),它就是单纯用来混合的，最后不回编译出来</span>
    <span class="token property">color</span><span class="token punctuation">:</span>red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/*
变量可以 +、-、*、/，运算符的左右两侧必须加个空格
两个数参与运算，
如果只有一个数有单位，最后的结果就以那个单位为准
如果都有单位，结果以第一个单位为准
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="混合" tabindex="-1"><a class="header-anchor" href="#混合" aria-hidden="true">#</a> 混合</h2><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token selector">.bordered</span> <span class="token punctuation">{</span>
  <span class="token property">border-top</span><span class="token punctuation">:</span> dotted 1px black<span class="token punctuation">;</span>
  <span class="token property">border-bottom</span><span class="token punctuation">:</span> solid 2px black<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.menu</span><span class="token punctuation">{</span>     
  <span class="token property">color</span><span class="token punctuation">:</span> #111<span class="token punctuation">;</span>
  <span class="token mixin-usage function">.bordered</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">//menu类中就包含了bordered中所有属性，()可以不写</span>
<span class="token punctuation">}</span>


<span class="token selector">.center(<span class="token variable">@type</span>:relative)</span><span class="token punctuation">{</span>  <span class="token comment">//还可以这么传参,给默认值</span>
    <span class="token property">position</span><span class="token punctuation">:</span><span class="token variable">@type</span><span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span>50%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.one</span><span class="token punctuation">{</span>
    <span class="token mixin-usage function">.center</span><span class="token punctuation">(</span>absolute<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token selector">.two</span><span class="token punctuation">{</span>
    <span class="token mixin-usage function">.center</span><span class="token punctuation">(</span>fixed<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="模式匹配" tabindex="-1"><a class="header-anchor" href="#模式匹配" aria-hidden="true">#</a> 模式匹配</h3><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token selector">.triangle(<span class="token variable">@direction</span>, <span class="token variable">@size</span>, <span class="token variable">@color</span>)</span> <span class="token punctuation">{</span>
  <span class="token property">border-style</span><span class="token punctuation">:</span> solid<span class="token punctuation">;</span>
  <span class="token property">border-color</span><span class="token punctuation">:</span> transparent<span class="token punctuation">;</span>
  <span class="token property">border-width</span><span class="token punctuation">:</span> <span class="token variable">@size</span><span class="token punctuation">;</span>
  <span class="token variable">@base<span class="token punctuation">:</span></span> <span class="token variable">@size</span> <span class="token operator">*</span> 2<span class="token punctuation">;</span>
  <span class="token selector">&amp; when (<span class="token variable">@direction</span> = top)</span> <span class="token punctuation">{</span>
    <span class="token property">border-bottom-color</span><span class="token punctuation">:</span> <span class="token variable">@color</span><span class="token punctuation">;</span>
    <span class="token property">border-bottom-width</span><span class="token punctuation">:</span> <span class="token variable">@base</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 更多方向的模式匹配...</span>
<span class="token punctuation">}</span>

<span class="token selector">.arrow</span> <span class="token punctuation">{</span>
  <span class="token mixin-usage function">.triangle</span><span class="token punctuation">(</span>top<span class="token punctuation">,</span> 5px<span class="token punctuation">,</span> #f00<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//======</span>
<span class="token selector">.arrow</span> <span class="token punctuation">{</span>
  <span class="token property">border-style</span><span class="token punctuation">:</span> solid<span class="token punctuation">;</span>
  <span class="token property">border-color</span><span class="token punctuation">:</span> transparent<span class="token punctuation">;</span>
  <span class="token property">border-width</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
  <span class="token property">border-bottom-color</span><span class="token punctuation">:</span> #f00<span class="token punctuation">;</span>
  <span class="token property">border-bottom-width</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="映射" tabindex="-1"><a class="header-anchor" href="#映射" aria-hidden="true">#</a> 映射</h2><p>从3.5开始，可以将混合（mixins）和规则集（rulesets）作为一组值的映射（map）使用。</p><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token selector">#colors()</span> <span class="token punctuation">{</span>
  <span class="token property">primary</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
  <span class="token property">secondary</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.button</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #colors[primary]<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #colors[secondary]<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="嵌套" tabindex="-1"><a class="header-anchor" href="#嵌套" aria-hidden="true">#</a> 嵌套</h2><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token comment">//原代码</span>
<span class="token selector">#header</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">#header .navigation</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">#header .logo</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token comment">//less可以写成</span>
<span class="token selector">#header</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>
  <span class="token selector">.navigation</span> <span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.logo</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  
<span class="token punctuation">}</span>



<span class="token comment">//=======分隔</span>
<span class="token selector">div</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
  <span class="token selector">&amp;:hover</span> <span class="token punctuation">{</span>   <span class="token comment">//可以写伪类选择器，&amp;表示当前父级选择器</span>
    <span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  
  <span class="token selector">&amp;::before</span><span class="token punctuation">{</span>  <span class="token comment">//伪元素</span>
        
  <span class="token punctuation">}</span>
    
  <span class="token selector">&gt;a</span><span class="token punctuation">{</span>  <span class="token comment">//子代选择器</span>
    <span class="token property">color</span><span class="token punctuation">:</span>black<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
    
<span class="token punctuation">}</span>

<span class="token comment">//=======分隔</span>
<span class="token selector">.button</span> <span class="token punctuation">{</span>
  <span class="token selector">&amp;-ok</span> <span class="token punctuation">{</span>
    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;ok.png&quot;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">&amp;-cancel</span> <span class="token punctuation">{</span>
    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;cancel.png&quot;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">&amp;-custom</span> <span class="token punctuation">{</span>
    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;custom.png&quot;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//输出</span>
<span class="token selector">.button-ok</span> <span class="token punctuation">{</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;ok.png&quot;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.button-cancel</span> <span class="token punctuation">{</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;cancel.png&quot;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.button-custom</span> <span class="token punctuation">{</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;custom.png&quot;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token comment">//=======</span>
<span class="token variable">@min768<span class="token punctuation">:</span></span> ~<span class="token string">&quot;(min-width: 768px)&quot;</span><span class="token punctuation">;</span>
<span class="token variable">@max900<span class="token punctuation">:</span></span> ~<span class="token string">&quot;(min-width: 900px)&quot;</span><span class="token punctuation">;</span>

<span class="token selector">.element</span> <span class="token punctuation">{</span>
  <span class="token atrule">@media @min768 and @max900</span> <span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 1.2rem<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//也可以这种格式</span>
<span class="token atrule">@media @min768 and @max900</span> <span class="token punctuation">{</span>
    <span class="token selector">body</span><span class="token punctuation">{</span>
        <span class="token property">font-size</span><span class="token punctuation">:</span>20px<span class="token punctuation">;</span>    
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="转义" tabindex="-1"><a class="header-anchor" href="#转义" aria-hidden="true">#</a> 转义</h2><p>它允许使用任意字符串作为属性或变量值，内部的任何内容按**~&quot;anything&quot;**原样使用，除了插值没有任何变化。从less3.5+开始就不需要~+引号转义了</p><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token variable">@min768<span class="token punctuation">:</span></span> ~<span class="token string">&quot;(min-width: 768px)&quot;</span><span class="token punctuation">;</span>
<span class="token selector">.element</span> <span class="token punctuation">{</span>
  <span class="token atrule">@media @min768</span> <span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 1.2rem<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//编译为</span>
<span class="token atrule">@media <span class="token punctuation">(</span>min-width<span class="token punctuation">:</span> 768px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token selector">.element</span> <span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 1.2rem<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//从less3.5开始可简写</span>
<span class="token variable">@min768<span class="token punctuation">:</span></span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 768px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token selector">.element</span> <span class="token punctuation">{</span>
  <span class="token atrule">@media @min768</span> <span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 1.2rem<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="函数" tabindex="-1"><a class="header-anchor" href="#函数" aria-hidden="true">#</a> 函数</h2><p>less内置了多种函数用于<strong>转换颜色</strong>、<strong>处理字符串</strong>、<strong>算术运算</strong></p>`,17),d={href:"https://less.bootcss.com/functions/",target:"_blank",rel:"noopener noreferrer"},v=p(`<div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token variable">@color<span class="token punctuation">:</span></span> #f40<span class="token punctuation">;</span>

<span class="token selector">.s1</span><span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">darken</span><span class="token punctuation">(</span><span class="token variable">@color</span><span class="token punctuation">,</span>20%<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//darken函数，颜色加深20%</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">fadein</span><span class="token punctuation">(</span><span class="token variable">@color</span><span class="token punctuation">,</span> 0.5<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// fadein函数，增加50%透明度</span>
<span class="token punctuation">}</span>

<span class="token selector">.s2</span><span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span><span class="token function">lighten</span><span class="token punctuation">(</span><span class="token variable">@color</span><span class="token punctuation">,</span>20%<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//lighten函数，颜色变浅20%</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">fadeout</span><span class="token punctuation">(</span><span class="token variable">@color</span><span class="token punctuation">,</span> 0.5<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// fadeout函数，减少50%透明度</span>
<span class="token punctuation">}</span>

<span class="token function">isnumber</span><span class="token punctuation">(</span>56px<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//true,是否含数字</span>
<span class="token function">iscolor</span><span class="token punctuation">(</span>#fff<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="导入语句" tabindex="-1"><a class="header-anchor" href="#导入语句" aria-hidden="true">#</a> 导入语句</h2><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token variable">@import</span> <span class="token string">&#39;./src/index.less&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="注释" tabindex="-1"><a class="header-anchor" href="#注释" aria-hidden="true">#</a> 注释</h2><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token comment">// 单行注释。less注释，编译后会消失</span>

<span class="token comment">/*
	多行注释。css注释，编译不会消失
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function k(m,b){const s=i("ExternalLinkIcon");return l(),c("div",null,[n("p",null,[n("a",u,[a("less代码在线转换css"),e(s)])]),r,n("p",null,[n("a",d,[a("函数手册"),e(s)])]),v])}const g=t(o,[["render",k],["__file","less.html.vue"]]);export{g as default};
