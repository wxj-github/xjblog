import{_ as a,o as t,c as p,a as e,t as o,e as n}from"./app-bb14e2a6.js";const c="/assets/image-20220312182421720-04e94261.png",l={},i=n(`<h2 id="v-bind" tabindex="-1"><a class="header-anchor" href="#v-bind" aria-hidden="true">#</a> v-bind</h2><p>给标签绑定属性，修饰符:</p><p>vue2: .prop .camel .sync</p><p>vue3: .prop .camel .attr</p><p><strong>.prop</strong> 作为一个 DOM property 绑定而不是作为 attribute 绑定。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">:name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>666<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    //控制台可以看到name属性
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">:name.prop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>666<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    //控制台看不到name属性
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>.attr</strong> 绑定为DOM attribute ，v-bind默认绑定为attribute，在控制台可以看到绑定的属性</p><p><strong>.camel</strong> 将短横线命名的 attribute 转变为驼峰式命名.但测试发现属性名只是把横线去了，全部转小写</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">:test-Te-name.camel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>11<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
看到的效果：
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">testtename</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>11<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

//通过ref获取的时候就可以
tRef.value.attributes.testTeName获取属性和值
tRef.value.attributes.testtename也是可以获取的
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>.sync</strong> 语法糖,实现父子组件的数据双向绑定。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>//父元素
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Child</span> <span class="token attr-name">:num</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>num<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@test</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>test<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Child</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span> Child <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">num</span><span class="token operator">:</span> <span class="token number">1</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">test</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>num <span class="token operator">=</span> val
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
//子元素
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>num<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@input</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleInput<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;num&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">handleInput</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">&#39;test&#39;</span><span class="token punctuation">,</span> event<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用.sync语法糖：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>//父元素
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Child</span> <span class="token attr-name">:num.sync</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>num<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Child</span><span class="token punctuation">&gt;</span></span>
//等同于 给子元素绑定num值，并绑定自定义事件update:变量名
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Child</span> <span class="token attr-name">:num</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>num<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">@update:</span>num</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>xxx<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Child</span><span class="token punctuation">&gt;</span></span>
//在vue3中被v-model取代
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Child</span> <span class="token attr-name"><span class="token namespace">v-model:</span>num</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>num<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Child</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span> Child <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">num</span><span class="token operator">:</span> <span class="token number">1</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span>
      <span class="token comment">//methods: {</span>
      <span class="token comment">//  xxx(val) {</span>
      <span class="token comment">//    this.num = val</span>
      <span class="token comment">//   }</span>
      <span class="token comment">//}</span>
      <span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

//子元素
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>num<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@input</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleInput<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;num&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">handleInput</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">&#39;update:num&#39;</span><span class="token punctuation">,</span> event<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span>  <span class="token comment">//触发的事件名要改为update:变量名</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="click绑定事件传参" tabindex="-1"><a class="header-anchor" href="#click绑定事件传参" aria-hidden="true">#</a> @click绑定事件传参</h2><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>clickMethod<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>  //不传时，默认第一个参数e为event
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>clickMethod(66)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>    //会丢失event对象,下面函数里e是66，number为undefiend
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>clickMethod($event,66)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>  //把$event传入即可获得event对象，位置任意

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">export</span> <span class="token keyword">default</span><span class="token punctuation">{</span>
        <span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token punctuation">{</span>
			<span class="token function">clickMethod</span><span class="token punctuation">(</span><span class="token parameter">e<span class="token punctuation">,</span>number</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
				console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;event&#39;</span><span class="token punctuation">,</span>e<span class="token punctuation">)</span> <span class="token comment">//通过$event传参不会把event对象弄丢</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>指令语法可以执行一些简单的语句。插值表达式里必须写表达式（有返回值）</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>x=!x;y++<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>  //执行了x的取反并用分号分隔开，执行y+1，
//但并不是所有语句都能在里面执行，比如alert(&#39;666&#39;)，vue首先会在data和methods等管理的属性里找，找不到不会去外层找window的

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">export</span> <span class="token keyword">default</span><span class="token punctuation">{</span>
        <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">return</span><span class="token punctuation">{</span>
            <span class="token literal-property property">x</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token literal-property property">y</span><span class="token operator">:</span><span class="token number">1</span>
        	<span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="事件修饰符-以click为例" tabindex="-1"><a class="header-anchor" href="#事件修饰符-以click为例" aria-hidden="true">#</a> 事件修饰符(以click为例)</h2><h3 id="click-prevent阻止事件的默认行为" tabindex="-1"><a class="header-anchor" href="#click-prevent阻止事件的默认行为" aria-hidden="true">#</a> @click.prevent阻止事件的默认行为</h3><p>等同于e.preventDefault()</p><h3 id="click-stop阻止冒泡" tabindex="-1"><a class="header-anchor" href="#click-stop阻止冒泡" aria-hidden="true">#</a> @click.stop阻止冒泡</h3><p>等同于e.stopPropagation()</p><h3 id="click-once只执行一次" tabindex="-1"><a class="header-anchor" href="#click-once只执行一次" aria-hidden="true">#</a> @click.once只执行一次</h3><h3 id="click-capture使用事件的捕获模式" tabindex="-1"><a class="header-anchor" href="#click-capture使用事件的捕获模式" aria-hidden="true">#</a> @click.capture使用事件的捕获模式</h3><p>事件流默认是先捕获再冒泡，在冒泡阶段开始执行事件。而使用了这个修饰符，捕获阶段就执行该绑定事件</p><h3 id="click-self只有event-target为当前操作元素才触发事件" tabindex="-1"><a class="header-anchor" href="#click-self只有event-target为当前操作元素才触发事件" aria-hidden="true">#</a> @click.self只有event.target为当前操作元素才触发事件</h3><h3 id="click-passive事件的默认行为立即执行-无需等待事件回调执行完毕。-使用频率不高-一般用于移动端" tabindex="-1"><a class="header-anchor" href="#click-passive事件的默认行为立即执行-无需等待事件回调执行完毕。-使用频率不高-一般用于移动端" aria-hidden="true">#</a> @click.passive事件的默认行为立即执行，无需等待事件回调执行完毕。（使用频率不高，一般用于移动端）</h3><p>动作事件一般是先执行自身的默认行为，再执行绑定的事件。比如scroll。</p><p>而wheel先执行绑定事件，再进行滚动条的滚动。</p><p>scroll触发滚动事件，但滚动条到底的时候，继续往下滚动滑轮不会触发。 -----滑动触发频率高，方向键，拖动滚动条也能触发。</p><p>wheel触发鼠标滑轮，滚动条到底的时候，继续往下滚动仍然触发。 -----滑动触发频率低，只有滑轮能触发。</p><h3 id="修饰符可以连续修饰" tabindex="-1"><a class="header-anchor" href="#修饰符可以连续修饰" aria-hidden="true">#</a> 修饰符可以连续修饰</h3><p>比如@click.stop.prevent先停止冒泡，再阻止默认行为</p><h2 id="键盘事件" tabindex="-1"><a class="header-anchor" href="#键盘事件" aria-hidden="true">#</a> 键盘事件</h2><h3 id="keyup" tabindex="-1"><a class="header-anchor" href="#keyup" aria-hidden="true">#</a> @keyup</h3><p>按下按键抬起来才触发</p><h3 id="keydown" tabindex="-1"><a class="header-anchor" href="#keydown" aria-hidden="true">#</a> @keydown</h3><p>按下按键就触发</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span><span class="token punctuation">{</span>
	<span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token function">click</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;keyCode&quot;</span><span class="token punctuation">,</span>e<span class="token punctuation">.</span>keyCode<span class="token punctuation">,</span>e<span class="token punctuation">.</span>key<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>e.keyCode为按键的keyCode编码。e.key是按键的名字，字符串格式</p><p>回车enter为13，可以写成@keyup.13 (vue3移除)</p><h3 id="keyup-enter就可以单独识别enter的键盘响应事件" tabindex="-1"><a class="header-anchor" href="#keyup-enter就可以单独识别enter的键盘响应事件" aria-hidden="true">#</a> @keyup.enter就可以单独识别enter的键盘响应事件</h3><p>enter、delete （删除键和退格键都可触发）、esc、space、tab、up、down、left、right都是Vue直接提供的别名</p><p>Vue未提供别名的，可以通过该按键e.key的值去绑定它。但是要以短横线命名，比如切换大小写的e.key值为CapsLock，但是绑定的时候要用@keyup.caps-lock=</p><h3 id="tab键要用-keydown-tab才能触发" tabindex="-1"><a class="header-anchor" href="#tab键要用-keydown-tab才能触发" aria-hidden="true">#</a> tab键要用@keydown.tab才能触发</h3><h3 id="系统修饰键-ctrl、alt、shift、meta-windows键" tabindex="-1"><a class="header-anchor" href="#系统修饰键-ctrl、alt、shift、meta-windows键" aria-hidden="true">#</a> 系统修饰键 ctrl、alt、shift、meta（windows键）</h3><p>搭配keyup时，为组合键触发，例如ctrl+w,+x都能触发事件，如果只想ctrl+x才触发，可以**@keyup.ctrl.x**，顺序不分先后</p><p>搭配keydown时，按下ctrl就触发事件</p><h3 id="自定义-不能带大写-不推荐使用" tabindex="-1"><a class="header-anchor" href="#自定义-不能带大写-不推荐使用" aria-hidden="true">#</a> 自定义（不能带大写，不推荐使用）</h3><p>Vue.config.keyCodes.自定义键名=键码</p><p>如Vue.config.keyCodes.huiche=13；</p><p>绑定时：@keyup.huiche=</p><h2 id="计算属性computed" tabindex="-1"><a class="header-anchor" href="#计算属性computed" aria-hidden="true">#</a> 计算属性computed</h2><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">export</span> <span class="token keyword">default</span><span class="token punctuation">{</span>
        <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token keyword">return</span><span class="token punctuation">{</span>
                <span class="token literal-property property">x</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span>
                <span class="token literal-property property">y</span><span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">,</span>
                <span class="token literal-property property">a</span><span class="token operator">:</span><span class="token string">&quot;66&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">computed</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token comment">//完整写法</span>
            <span class="token literal-property property">fullName</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                    <span class="token comment">//当有人读取fullName时，会调用get方法，且返回值为fullName的值</span>
                    <span class="token comment">//内部有缓存机制。数据会缓存，不会多次调用</span>
                    <span class="token comment">//当依赖的数据发生改变，会重新调用.</span>
                    <span class="token comment">//只要有data里的属性出现在这里的，发生了改变都会重新触发</span>
                    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;xx&#39;</span><span class="token punctuation">,</span><span class="token keyword">this</span><span class="token punctuation">.</span>a<span class="token punctuation">)</span><span class="token comment">//尽管只是log了a，只要a改变了就会触发</span>
                    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>x<span class="token operator">+</span><span class="token keyword">this</span><span class="token punctuation">.</span>y
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token function">set</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">{</span>
				<span class="token comment">//当fullName被修改时调用.只有fullName=xxx才回调用到set，修改x和y后fullName的改变并不会调用set</span>
                    <span class="token keyword">this</span><span class="token punctuation">.</span>x<span class="token operator">=</span><span class="token string">&#39;xxx&#39;</span>
                    <span class="token keyword">this</span><span class="token punctuation">.</span>y<span class="token operator">=</span><span class="token string">&#39;yyy&#39;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
            <span class="token comment">//简写，确定只读不改时用这种方式</span>
            <span class="token function">fullName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
				<span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>x<span class="token operator">+</span><span class="token keyword">this</span><span class="token punctuation">.</span>y
    		<span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="监视属性watch" tabindex="-1"><a class="header-anchor" href="#监视属性watch" aria-hidden="true">#</a> 监视属性watch</h2><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">export</span> <span class="token keyword">default</span><span class="token punctuation">{</span>
        <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token keyword">return</span><span class="token punctuation">{</span>
                <span class="token literal-property property">x</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span>
                <span class="token literal-property property">y</span><span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">,</span>
                <span class="token literal-property property">isHot</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>
                <span class="token literal-property property">numbers</span><span class="token operator">:</span><span class="token punctuation">{</span>
                    <span class="token literal-property property">a</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">b</span><span class="token operator">:</span><span class="token number">2</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">watch</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token literal-property property">isHot</span><span class="token operator">:</span><span class="token punctuation">{</span>  <span class="token comment">//甚至可以检测computed的属性</span>
                <span class="token literal-property property">immediate</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token comment">//立即执行。默认为false，为true时会默认执行一次handler</span>
                <span class="token function">handler</span><span class="token punctuation">(</span><span class="token parameter">newValue<span class="token punctuation">,</span>oldValue</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                    <span class="token comment">//当isHot发生改变时调用</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token string-property property">&#39;numbers.a&#39;</span><span class="token operator">:</span><span class="token punctuation">{</span>   <span class="token comment">//监视多级结构中某个属性的变化</span>
                <span class="token function">handler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
					console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;xxx&#39;</span><span class="token punctuation">)</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">numbers</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token literal-property property">deep</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>  <span class="token comment">//开启深度检测，监视结构中所有属性的变化</span>
                <span class="token function">handler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
					console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;xxx&#39;</span><span class="token punctuation">)</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">//也可以用这种方式监听，注意第一个值为字符串格式，第二个参数为配置性，和watch里一样</span>
            <span class="token comment">//这种方式常用于后续才知道想监视某个属性</span>
			<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$watch</span><span class="token punctuation">(</span><span class="token string">&#39;x&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span>  <span class="token comment">//如果监视了data和computed都不存在的值也不会报错</span>
      		<span class="token literal-property property">immediate</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>
     		<span class="token function">handler</span><span class="token punctuation">(</span><span class="token parameter">newV</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;newvalue&#39;</span><span class="token punctuation">,</span>newV<span class="token punctuation">)</span><span class="token punctuation">;</span>
      			<span class="token punctuation">}</span>
   			<span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>watch默认不检测对象内部值的改变，需要开启deep=true</p><p>只有handler的时候可以用简写方式</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">watch</span><span class="token operator">:</span><span class="token punctuation">{</span>
	<span class="token function">isHot</span><span class="token punctuation">(</span><span class="token parameter">newValue<span class="token punctuation">,</span>oldValue</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
          xxxxx
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$watch</span><span class="token punctuation">(</span><span class="token string">&#39;isHot&#39;</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		xxxxx
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="computed和watch对比" tabindex="-1"><a class="header-anchor" href="#computed和watch对比" aria-hidden="true">#</a> computed和watch对比</h2><p>computed能完成的，watch都能完成</p><p>watch能完成的，computed不一定能完成。</p><p>如果需要异步的计算，则要用watch，computed无法进行异步</p><h2 id="绑定样式" tabindex="-1"><a class="header-anchor" href="#绑定样式" aria-hidden="true">#</a> 绑定样式</h2><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
	//绑定class样式，字符串格式---适用于样式的类名不确定，需要动态指定。
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>font<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>a<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>  //样式red会和font汇总而不是覆盖
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

	//绑定class样式，数组格式---适用于要绑定的样式个数不确定，名字也不确定
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>font<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>arr<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

	//绑定class样式，对象格式---适用于要绑定的样式个数确定，名字也确定,但要动态决定
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>font<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>classObj<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

	
	=======绑定style的不太常用===========
	
	//绑定style样式----写法1   对象
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>font<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{fontSize:fSize}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

	//绑定style样式----写法2   对象
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>font<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>styleObj<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

	//绑定style样式----写法3   数组--数组中为对象
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>font<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[styleObj,styleObj2]<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>font<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>styleObj3<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

	//三元表达式，用数组的格式存放
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">:style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[1 == 1 ? styleObj : &#39;&#39;,styleObj2]<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>6666<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">export</span> <span class="token keyword">default</span><span class="token punctuation">{</span>
		<span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">return</span><span class="token punctuation">{</span>
            <span class="token literal-property property">a</span><span class="token operator">:</span><span class="token string">&#39;red&#39;</span><span class="token punctuation">,</span>       <span class="token comment">//类名</span>
            <span class="token literal-property property">arr</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&#39;big&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;red&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>   <span class="token comment">//类名</span>
            <span class="token literal-property property">classObj</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token literal-property property">big</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span>
                <span class="token literal-property property">red</span><span class="token operator">:</span><span class="token boolean">false</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">fSize</span><span class="token operator">:</span><span class="token string">&#39;40px&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">styleObj</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token literal-property property">fontSize</span><span class="token operator">:</span><span class="token string">&#39;40px&#39;</span>     <span class="token comment">//多个单词的要用驼峰命名法,font-size   ==&gt;   fontSize</span>
                					<span class="token comment">//background-color  ==&gt;  backgroundColor</span>
                <span class="token comment">//也可以不用驼峰，但是要用引号包起来</span>
                <span class="token string-property property">&#39;font-size&#39;</span><span class="token operator">:</span><span class="token string">&#39;40px&#39;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">styleObj2</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token literal-property property">color</span><span class="token operator">:</span><span class="token string">&#39;red&#39;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">styleObj3</span><span class="token operator">:</span><span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token literal-property property">fontSize</span><span class="token operator">:</span><span class="token string">&#39;40px&#39;</span> 
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                	<span class="token literal-property property">color</span><span class="token operator">:</span><span class="token string">&#39;red&#39;</span>
            	<span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">.red</span><span class="token punctuation">{</span>
        <span class="token property">color</span><span class="token punctuation">:</span>red
    <span class="token punctuation">}</span>
    <span class="token selector">.font</span><span class="token punctuation">{</span>
        <span class="token property">height</span><span class="token punctuation">:</span>200px<span class="token punctuation">;</span>
        <span class="token property">width</span><span class="token punctuation">:</span>200px
    <span class="token punctuation">}</span>
    <span class="token selector">.big</span><span class="token punctuation">{</span>
        <span class="token property">font-size</span><span class="token punctuation">:</span>16px
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="折叠注释-vscode的bug" tabindex="-1"><a class="header-anchor" href="#折叠注释-vscode的bug" aria-hidden="true">#</a> 折叠注释--vscode的bug</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//#region


//#endregion 
里面的注释就可以折叠了
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vue-set" tabindex="-1"><a class="header-anchor" href="#vue-set" aria-hidden="true">#</a> Vue.set()</h2><p>往响应式对象里添加新属性后，该属性是不具备响应式的，比如设置一个按钮执行this.a.age=16;在页面是不会展示这个新属性的。就需要使用Vue.set()来添加新属性并实现响应式且触发视图更新</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//在组件中
export default{
	data(){
		return {
			a:{
			
			}
		}
	},
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第一个参数为data里的某个对象，第二个为要添加的属性名，第三个参数为值。无法给data自身追加属性</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>//在组件中
export default{
	data(){
		return {
			obj:{}
		}
	},
	methods:{
		a(){
			this.$set(this.obj,key,value)  //第一个参数为目标
		}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>直接通过索引修改data里的数组数据，vue是无法监控到的。比如this.arr[0]=&#39;test&#39;</p><p>只有通过push pop shift unshift splice sort reverse这些会直接修改原数组的api。vue才会检测到数组的变化</p><p>之所以用这些api能监控到，是因为vue重写了这些api，并不是array上的原生api。</p><p>除此之外，也可以用Vue.set()来修改数组。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>this.$set(this.arr,0,&#39;value&#39;)  //第二个参数为索引
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="vue监视数据的总结" tabindex="-1"><a class="header-anchor" href="#vue监视数据的总结" aria-hidden="true">#</a> Vue监视数据的总结</h2><p>如何监视对象中的数据：</p><p>通过setter实现监视，且要在new Vue的时候就传入监控的数据。</p><p>​ （1）对象中后追加的属性，vue默认不做响应式处理</p><p>​ （2）如需给后添加的属性做响应式，通过Vue.set（target，propertyName/index，value）来实现。target不能为this.data,即不能对根对象进行属性的添加</p><p>如何监视数组中的数据：</p><p>通过包裹数据更新元素的方法实现，本质就是做了两件事：</p><p>​ （1）通过原生的api或者Vue.set（）或者直接重新赋值替换，对数组进行更新（会对原数组造成变化的）</p><p>​ （2）重新解析模板，进而更新页面</p><p><strong>把data中的数据都经过数据代理的过程就是数据劫持</strong>，即用户修改data中的数据，被setter劫持了，收到数据后重新解析模板。</p><h2 id="收集表单数据" tabindex="-1"><a class="header-anchor" href="#收集表单数据" aria-hidden="true">#</a> 收集表单数据</h2><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>demo1<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>帐号<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>text<span class="token punctuation">&#39;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>demo1<span class="token punctuation">&#39;</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>obj.account<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
        密码：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>password<span class="token punctuation">&#39;</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>obj.<span class="token punctuation">&quot;</span></span><span class="token attr-name">password</span><span class="token punctuation">/&gt;</span></span>
        性别：男 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>radio<span class="token punctuation">&#39;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>sex<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>man<span class="token punctuation">&#39;</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>obj.sex<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
        女 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>radio<span class="token punctuation">&#39;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>sex<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>woman<span class="token punctuation">&#39;</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>obj.sex<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
        爱好：
        A<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>checkbox<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>a<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>obj.hobby<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>  //checkbox如果没有配置value值则收集的是boolean值
         B<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>checkbox<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>b<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>obj.hobby<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span> //配置了value后，v-model的初始值是非数组，则收集的是boolean值。如果是初始值是数组，则收集的是value组成的数组
         C<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>checkbox<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>c<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>obj.hobby<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
        所属校区：
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>obj.school<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">&gt;</span></span>
        	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">&gt;</span></span>
        	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>3<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">&gt;</span></span>
    	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span><span class="token punctuation">{</span>
	<span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token punctuation">{</span>
			<span class="token literal-property property">obj</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="v-model的修饰符" tabindex="-1"><a class="header-anchor" href="#v-model的修饰符" aria-hidden="true">#</a> v-model的修饰符</h3><p><strong>v-model.number=&quot;obj.age&quot;可以直接把数据变成nubmer型</strong></p><p><strong>v-model.lazy表示失去焦点的时候才收集数据</strong></p><p><strong>v-model.trim表示去掉前后的空格</strong></p><h2 id="过滤器" tabindex="-1"><a class="header-anchor" href="#过滤器" aria-hidden="true">#</a> 过滤器</h2><p>对要显示的数据进行特定格式化后再显示。</p><p>在v-bind中也可以使用：</p><p><strong>:name=&quot;time | timeformat&quot;</strong></p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>
        {{ time | timeformat}}  //通过管道符间隔，用timeformat过滤器处理time。最终timeformat的返回值替换整个插值里的内容
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
     {{ time | timeformat(YYYY-MM-DD)}} //传参的时候，过滤器第二个参数才是传进去的（YYYY-MM-DD）  
    {{ time | timeformat(YYYY-MM-DD) | format2}}  //可以进行多次过滤
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">export</span> <span class="token keyword">default</span><span class="token punctuation">{</span>
        <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">time</span><span class="token operator">:</span><span class="token number">1231654813115</span><span class="token punctuation">,</span>
        	<span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">filters</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token function">timeformat</span><span class="token punctuation">(</span>val<span class="token punctuation">,</span>format<span class="token operator">=</span><span class="token string">&#39;yyyy-mm-dd&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>  <span class="token comment">//给format设初始值</span>
				<span class="token keyword">return</span> <span class="token string">&#39;&#39;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token function">format2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>全局过滤器：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Vue.filter(&#39;filterName&#39;,function(val){
	return &#39;&#39;
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="v-html不要用在用户提交的数据上-可能造成xss攻击-跨域脚本攻击" tabindex="-1"><a class="header-anchor" href="#v-html不要用在用户提交的数据上-可能造成xss攻击-跨域脚本攻击" aria-hidden="true">#</a> v-html不要用在用户提交的数据上，可能造成xss攻击（跨域脚本攻击）</h2><h2 id="v-cloak-没有值" tabindex="-1"><a class="header-anchor" href="#v-cloak-没有值" aria-hidden="true">#</a> v-cloak(没有值)</h2><p>本质是一个特殊的属性，vue实例创建完毕并接管容器后，会删除掉v-cloak属性。</p>`,103),u=n(`<div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">[v-cloak]</span><span class="token punctuation">{</span>
        <span class="token property">display</span><span class="token punctuation">:</span>none
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="v-once-没有值-只渲染一次" tabindex="-1"><a class="header-anchor" href="#v-once-没有值-只渲染一次" aria-hidden="true">#</a> v-once(没有值)只渲染一次</h2><h2 id="v-pre-没有值" tabindex="-1"><a class="header-anchor" href="#v-pre-没有值" aria-hidden="true">#</a> v-pre（没有值）</h2><p>用了该指令的节点，vue不会去解析编译。</p><h2 id="自定义指令" tabindex="-1"><a class="header-anchor" href="#自定义指令" aria-hidden="true">#</a> 自定义指令</h2><p>指令里的this指向的都是window。</p><p>指令名如果用多个单词，用-连接单词。（驼峰现在也没报错）</p><p>声明的时候就要用引号包起来。‘f-bind’:{ } 使用：v-f-bind=&quot; &quot;</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span> <span class="token attr-name">v-big</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>n<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">v-fbind</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>n<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
============
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-demo</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ color: &#39;white&#39;, text: &#39;hello!&#39; }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

Vue.directive(&#39;demo&#39;, function (el, binding) {
  console.log(binding.value.color) // =&gt; &quot;white&quot;
  console.log(binding.value.text)  // =&gt; &quot;hello!&quot;
})
===============
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">export</span> <span class="token keyword">default</span><span class="token punctuation">{</span>
        <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">n</span><span class="token operator">:</span><span class="token number">1</span>
        	<span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">directives</span><span class="token operator">:</span><span class="token punctuation">{</span> <span class="token comment">//自定义指令.   </span>
            <span class="token comment">//调用时机：1、当指令与元素成功绑定。2、指令所在模板被重新解析时就会被重新调用</span>
            <span class="token function">big</span><span class="token punctuation">(</span><span class="token parameter">element<span class="token punctuation">,</span>binding</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//函数式.</span>
                <span class="token comment">//element为真实元素，binding为该元素的所有绑定属性</span>
                element<span class="token punctuation">.</span>innerText<span class="token operator">=</span>binding<span class="token punctuation">.</span>value<span class="token operator">*</span><span class="token number">10</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">fbind</span><span class="token operator">:</span><span class="token punctuation">{</span> <span class="token comment">//对象式</span>
                <span class="token comment">//指令与元素成功绑定时调用</span>
                <span class="token function">bind</span><span class="token punctuation">(</span><span class="token parameter">element<span class="token punctuation">,</span>binding</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                    el<span class="token punctuation">.</span>value<span class="token operator">=</span>binding<span class="token punctuation">.</span>value    <span class="token comment">//binding.value就是v-fbind里返回的值</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token comment">//指令所在元素被插入页面时调用.(仅保证父节点存在，但不一定已被插入文档中)</span>
                <span class="token function">inserted</span><span class="token punctuation">(</span><span class="token parameter">element<span class="token punctuation">,</span>binding</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                    element<span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token comment">//指令所在模板被重新解析时就会被重新调用</span>
                <span class="token function">update</span><span class="token punctuation">(</span><span class="token parameter">element<span class="token punctuation">,</span>binding</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                    el<span class="token punctuation">.</span>value<span class="token operator">=</span>binding<span class="token punctuation">.</span>value		<span class="token comment">//update里也必须要写。逻辑基本和bind里的一致</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token function">componentUpdated</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token comment">//指令所在组件的 VNode 及其子 VNode 全部更新后调用。</span>
            	<span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>定义全局指令：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Vue.directive(&#39;name&#39;,{
	bind(){
	
	}
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="全局注册组件" tabindex="-1"><a class="header-anchor" href="#全局注册组件" aria-hidden="true">#</a> 全局注册组件</h2><p>import xxx from &#39;./xxx&#39;</p><p>Vue.component(&#39;name&#39;,xxx)</p><h2 id="ref" tabindex="-1"><a class="header-anchor" href="#ref" aria-hidden="true">#</a> ref</h2><p>用来给元素或子组件注册引用信息。</p><p><strong>用在html标签上获取的是真实dom，用在子组件上获取的是组件实例对象</strong></p><p><strong>通过this.$refs.xxx获取</strong></p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>test<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>
    
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>


<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">export</span> <span class="token keyword">default</span><span class="token punctuation">{</span>
        <span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token function">a</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>test<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> props</h2><p>和data重名时，data优先级更高</p><p><strong>props是在实例创建之前进行验证的，所以data、computed在default和validator中都获取不了</strong></p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>父组件：
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>my-child</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>test<span class="token punctuation">&#39;</span></span> <span class="token attr-name">age</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>18<span class="token punctuation">&#39;</span></span> <span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>my-child</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>


子组件my-child：
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>
        {{name}}  {{age}}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">export</span> <span class="token keyword">default</span><span class="token punctuation">{</span>
        <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token keyword">return</span><span class="token punctuation">{</span>
                <span class="token literal-property property">myAge</span><span class="token operator">:</span><span class="token keyword">this</span><span class="token punctuation">.</span>age    <span class="token comment">//这种情况适用于非要修改传过来的age，在data中用另外一个变量接收。或者在computed转换</span>
                				<span class="token comment">//vue处理数据时先进行props的处理再处理data里的，所以可以这样进行操作复制</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token literal-property property">props</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;age&#39;</span><span class="token punctuation">]</span>   <span class="token comment">//写法1</span>
        <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>    <span class="token comment">//写法2</span>
    		<span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token punctuation">[</span>String<span class="token punctuation">,</span> Number<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 多个可能的类型</span>
    		<span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      			<span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span> <span class="token comment">//类型</span>
      			<span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//必传</span>
    		<span class="token punctuation">}</span><span class="token punctuation">,</span>
    		<span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      			<span class="token literal-property property">type</span><span class="token operator">:</span> Number<span class="token punctuation">,</span>
      			<span class="token keyword">default</span><span class="token operator">:</span> <span class="token number">23</span><span class="token punctuation">,</span>
    			<span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">obj</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token literal-property property">type</span><span class="token operator">:</span>Object<span class="token punctuation">,</span>     <span class="token comment">//对象或数组的默认值必须通过函数返回</span>
                    <span class="token function-variable function">default</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                        <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token literal-property property">mes</span><span class="token operator">:</span><span class="token string">&#39;xxx&#39;</span><span class="token punctuation">}</span>
                    <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
                
                
             <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token punctuation">{</span>   
      			<span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      			<span class="token function-variable function">validator</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>   <span class="token comment">//校验.校验失败会在控制台弹出警告</span>
        			<span class="token comment">// 这个值必须匹配下列字符串中的一个</span>
        			console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;匹配&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        			<span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token string">&quot;success&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;warning&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;danger&quot;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
     			 <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你想要将一个对象的所有 属性都作为 prop 传入，例如，对于一个给定的对象 <code>post</code>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>post: {
  id: 1,
  title: &#39;My Journey with Vue&#39;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面的模板：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;blog-post v-bind=&quot;post&quot;&gt;&lt;/blog-post&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>等价于：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;blog-post
  :id=&quot;post.id&quot;
  :title=&quot;post.title&quot;
&gt;&lt;/blog-post&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="混入文件mixin" tabindex="-1"><a class="header-anchor" href="#混入文件mixin" aria-hidden="true">#</a> 混入文件mixin</h2><p>把多个组件共用的配置提取成一个混入对象</p><p>新建一个混入文件 -- test.js:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span><span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">a</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token literal-property property">b</span><span class="token operator">:</span><span class="token number">2</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token punctuation">{</span>
    	<span class="token function">c</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            
        <span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>在其他组件中使用：（局部）</strong></p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>import testMix from &#39;../mixins/testMix&#39;
export default {
    mixins: [testMix],
    data() {
        return {
        }
    }
    mounted() {
        this.c()   //就可以使用混入文件里的方法
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>属性冲突时，以组件的为准。</p><p>如果是生命周期函数，则全部都执行</p><p><strong>全局混合</strong></p><p>在main.js中：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> mixin <span class="token keyword">from</span> <span class="token string">&#39;./common/mixin/mixin.js&#39;</span>
<span class="token keyword">import</span> mixin2 <span class="token keyword">from</span> <span class="token string">&#39;./common/mixin/mixin.js&#39;</span>
Vue<span class="token punctuation">.</span><span class="token function">mixin</span><span class="token punctuation">(</span>mixin<span class="token punctuation">)</span>
Vue<span class="token punctuation">.</span><span class="token function">mixin</span><span class="token punctuation">(</span>mixin2<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="插件" tabindex="-1"><a class="header-anchor" href="#插件" aria-hidden="true">#</a> 插件</h2><p>本质是一个包含install的对象。</p><p>新建一个plugin.js</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span><span class="token punctuation">{</span>
	<span class="token function">install</span><span class="token punctuation">(</span><span class="token parameter">Vue</span><span class="token punctuation">)</span><span class="token punctuation">{</span>    <span class="token comment">//必须要有这一个函数</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;install&#39;</span><span class="token punctuation">)</span>
       
        <span class="token comment">//可以在里面执行以下很多方法</span>
        Vue<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        Vue<span class="token punctuation">.</span><span class="token function">directive</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        Vue<span class="token punctuation">.</span><span class="token function">mixin</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">hello</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在main.js中使用：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> plugins <span class="token keyword">from</span> <span class="token string">&#39;../plugin.js&#39;</span>

Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>plugins<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="唯一标识库" tabindex="-1"><a class="header-anchor" href="#唯一标识库" aria-hidden="true">#</a> 唯一标识库</h2><h2 id="uuid" tabindex="-1"><a class="header-anchor" href="#uuid" aria-hidden="true">#</a> uuid</h2><h2 id="uuid的精简版-nanoid" tabindex="-1"><a class="header-anchor" href="#uuid的精简版-nanoid" aria-hidden="true">#</a> uuid的精简版 nanoid</h2><p>npm install nanoid</p><p>import { nanoid } from &#39;nanoid</p><p>直接调用 nanoid() 生成唯一标识字符串</p><h2 id="自定义事件-组件的通信方式之一-适用与-子-》父" tabindex="-1"><a class="header-anchor" href="#自定义事件-组件的通信方式之一-适用与-子-》父" aria-hidden="true">#</a> 自定义事件（组件的通信方式之一，适用与 子==》父 ）</h2><p>父组件： 通过父组件给子组件绑定一个自定义事件实现子传父</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>//第一种写法
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>School</span> <span class="token attr-name"><span class="token namespace">v-on:</span>test</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>zMethod<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>School</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>School</span> <span class="token attr-name">@test</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>zMethod<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>School</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>School</span> <span class="token attr-name">@test.once</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>zMethod<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>School</span><span class="token punctuation">&gt;</span></span>  //只触发一次

//第二种写法
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>School</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>school<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>School</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">export</span> <span class="token keyword">default</span><span class="token punctuation">{</span>
		<span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token function">zMethod</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>school<span class="token punctuation">.</span><span class="token function">$on</span><span class="token punctuation">(</span><span class="token string">&#39;test&#39;</span><span class="token punctuation">,</span><span class="token keyword">this</span><span class="token punctuation">.</span>zMethod<span class="token punctuation">)</span>  <span class="token comment">//第二种写法。在子组件中还是通过$emit(&#39;xxx&#39;)来调用</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>school<span class="token punctuation">.</span><span class="token function">$once</span><span class="token punctuation">(</span><span class="token string">&#39;test&#39;</span><span class="token punctuation">,</span><span class="token keyword">this</span><span class="token punctuation">.</span>zMethod<span class="token punctuation">)</span>  <span class="token comment">//只允许调用一次 </span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>school<span class="token punctuation">.</span><span class="token function">$once</span><span class="token punctuation">(</span><span class="token string">&#39;test&#39;</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token comment">//这里面的this指向的是school组件，因为是它调用的该函数。可以用箭头函数解决</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>  
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>子组件：&lt;school&gt;</p><p>在script中通过</p><p><strong>this.$emit(&#39; zMethod &#39; , 参数 )</strong></p><p>触发父组件传过来的方法</p><h3 id="解绑事件" tabindex="-1"><a class="header-anchor" href="#解绑事件" aria-hidden="true">#</a> 解绑事件</h3><p>在beforeDestroy生命周期触发。 主动销毁组件 （ this.$destroy() ）</p><p><strong>this.$off(&#39;zMethod&#39;)</strong></p><p><strong>this.$off( [ &#39;a &#39;, &#39; b &#39; ] )</strong> 解绑多个</p><p><strong>this.$off( )</strong> 不传解绑所有自定义事件</p><h3 id="绑定原生事件" tabindex="-1"><a class="header-anchor" href="#绑定原生事件" aria-hidden="true">#</a> 绑定原生事件</h3><p>要是给组件绑定click事件，需要用修饰符， <strong>@click.native=“ ”</strong> ，不然vue会把click当作自定义事件</p><h2 id="全局事件总线" tabindex="-1"><a class="header-anchor" href="#全局事件总线" aria-hidden="true">#</a> 全局事件总线</h2><p>在main.js中：</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>new Vue({
	el:&#39;#app&#39;,
	render: h=&gt; h(App),
	beforeCreated(){
		Vue.prototype.$bus=this;   //标准写法.安装事件全局总线
	}
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>谁调用谁去绑定$on</p><p>或者在new Vue之前</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Vue.prototype.$bus = new Vue();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="消息订阅与发布" tabindex="-1"><a class="header-anchor" href="#消息订阅与发布" aria-hidden="true">#</a> 消息订阅与发布</h2><p>安装pubsub-js库</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install pubsub-js 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">import</span> pubsub <span class="token keyword">from</span> <span class="token string">&#39;pubsub-js&#39;</span>
	<span class="token keyword">export</span> <span class="token keyword">default</span><span class="token punctuation">{</span>
		<span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token function">test</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
           <span class="token keyword">this</span><span class="token punctuation">.</span>pubId<span class="token operator">=</span>pubsub<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span>b</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>   <span class="token comment">//相当于$on监听hello事件.第一个参数为监听名，第二个才是参数</span>
               <span class="token comment">//hello的回调</span>
               <span class="token comment">//如果不用箭头函数，this为undefined</span>
           <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">beforeDestroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            pubsub<span class="token punctuation">.</span><span class="token function">unsubscribe</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>pubId<span class="token punctuation">)</span>  <span class="token comment">//通过接收变量id才能清除监听</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">import</span> pubsub <span class="token keyword">from</span> <span class="token string">&#39;pubsub-js&#39;</span>
	<span class="token keyword">export</span> <span class="token keyword">default</span><span class="token punctuation">{</span>
		<span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token function">go</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
               pubsub<span class="token punctuation">.</span><span class="token function">publish</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span><span class="token number">666</span><span class="token punctuation">)</span>   <span class="token comment">//触发hello </span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="nexttick" tabindex="-1"><a class="header-anchor" href="#nexttick" aria-hidden="true">#</a> $nextTick</h2><p>在下一次dom更新后执行的回调</p><p>调用时机：当改变数据后，要基于更新后的新dom进行某些操作</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>this.$nextTick(function(){
	//
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="动画效果" tabindex="-1"><a class="header-anchor" href="#动画效果" aria-hidden="true">#</a> 动画效果</h2><h2 id="动画库" tabindex="-1"><a class="header-anchor" href="#动画库" aria-hidden="true">#</a> 动画库</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install animate.css
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在script中导入</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import &#39;animate.css&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="解决跨域" tabindex="-1"><a class="header-anchor" href="#解决跨域" aria-hidden="true">#</a> 解决跨域</h2><p>1.cors解决。（后端解决）</p><p>在后端服务响应添加特殊的请求头</p><p>2.jsonp（前后端都需要做处理）</p><p>通过script标签解决同源策略，只能处理get请求</p><p>3.nginx（配置转发代理）</p><p>4.脚手架proxy转发代理</p><p>vue.config.js:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">disableHostCheck</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&#39;/api&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>  <span class="token comment">//请求前缀</span>
                <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&#39;http://localhost:3000/&#39;</span><span class="token punctuation">,</span>
                <span class="token comment">//changeOrigin，ws默认为true。react中不是</span>
                <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>  <span class="token comment">//用于控制请求头中的host值。为true时，请求服务器查看的来源是同端口号的，</span>
                <span class="token literal-property property">ws</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>  <span class="token comment">//用于支持websocket</span>
                <span class="token literal-property property">pathRewrite</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token string-property property">&#39;^/api&#39;</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="默认插槽" tabindex="-1"><a class="header-anchor" href="#默认插槽" aria-hidden="true">#</a> 默认插槽</h2><p>父组件：</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>School</span><span class="token punctuation">&gt;</span></span>    //子组件
    	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>text</span><span class="token punctuation">&gt;</span></span>666<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>text</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>School</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>子组件：school</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>
        test
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span><span class="token punctuation">&gt;</span></span>
    	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>
            默认内容，当父组件没传时，显示这些内容
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">&gt;</span></span>     //通过slot标签接收school标签闭合的内容
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="具名插槽" tabindex="-1"><a class="header-anchor" href="#具名插槽" aria-hidden="true">#</a> 具名插槽</h2><p>拥有多个插槽时使用</p><p>一个不带 <code>name</code> 的 <code>&lt;slot&gt;</code> 出口会带有隐含的名字“default”。</p><p>父组件：</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>School</span><span class="token punctuation">&gt;</span></span>    //子组件
    	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>test1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>666<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
    	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>test2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>888<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
		//在template标签中用slot有另一种写法：
    	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name"><span class="token namespace">v-slot:</span>test2</span><span class="token punctuation">&gt;</span></span>888<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>School</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>子组件：school</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>
        test
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>test1<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>
    	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>
            默认内容，当父组件没传时，显示这些内容
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">&gt;</span></span>     //通过slot标签接收school标签闭合的内容
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>test2<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>
    	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>
            777
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">&gt;</span></span>    
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="作用域插槽" tabindex="-1"><a class="header-anchor" href="#作用域插槽" aria-hidden="true">#</a> 作用域插槽</h2><p>父组件：</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>School</span><span class="token punctuation">&gt;</span></span>    //子组件
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">scope</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hello<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>   //要使用作用域插槽必须使用template标签包裹，通过scope指定变量名接收（随便起）
            //通过变量.xxx来获取数据   或者直接解构赋值   {students,x}
        		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span>  <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item in hello.students<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item.id<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
            	{{hello.x}}
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
    	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span>  <span class="token attr-name">slot-scope</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hello<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>  //新的api，效果和scope一样
		6666
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>School</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

//父组件中无students数据，数据在子组件中
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>子组件：school</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>
        test
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">:testData</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>students<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:x</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>x<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">&gt;</span></span>  //在slot标签里动态绑定数据，就可以把students反向传给父组件里的插槽使用者.
    
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span><span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span><span class="token punctuation">{</span>
            <span class="token literal-property property">students</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token literal-property property">x</span><span class="token operator">:</span><span class="token number">1</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vuex" tabindex="-1"><a class="header-anchor" href="#vuex" aria-hidden="true">#</a> Vuex</h2><p><img src="`+c+`" alt="image-20220312182421720"></p><p>组件通过dispatch调用actions，在actions里调用commit来调用mutations，mutations来修改state，触发视图更新。</p><p>如果没有异步操作，组件可以直接commit来调用mutations。</p><h3 id="步骤及核心api" tabindex="-1"><a class="header-anchor" href="#步骤及核心api" aria-hidden="true">#</a> 步骤及核心api：</h3><p><strong>1.npm i vuex（默认安装了Vuex 4.x版本，只有vue3能用。vue2对应的版本是Vuex 3.x） 在后面补充@3</strong></p><p><strong>2.store</strong></p><p>在src目录下新建一个store目录，新建index.js文件</p><p>index.js:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> Vuex <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>
vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Vuex<span class="token punctuation">)</span>
<span class="token comment">//状态对象</span>
<span class="token keyword">const</span> state<span class="token operator">=</span><span class="token punctuation">{</span>
    <span class="token literal-property property">count</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>    <span class="token comment">//在组件中通过$store.state.count使用，如果是在script中要加this</span>
<span class="token punctuation">}</span>

<span class="token comment">//用于响应组件中的动作</span>
<span class="token keyword">const</span> actions<span class="token operator">=</span><span class="token punctuation">{</span>
    <span class="token comment">//在组件中通过this.$store.dispatch(&#39;increment&#39;,66)调用.</span>
    <span class="token comment">//第一个参数为store的上下文对象(里面有state可以获取当前state的数据)，第二个为组件传过来的参数</span>
    <span class="token function">increment</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>commit<span class="token punctuation">}</span><span class="token punctuation">,</span>n</span><span class="token punctuation">)</span><span class="token punctuation">{</span>   <span class="token comment">//除了commit，也可以继续dispatch给其他actions进行数据判断或处理</span>
        <span class="token comment">//提交mutation</span>
        <span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;INCREMENT&#39;</span><span class="token punctuation">,</span>n<span class="token punctuation">)</span>     <span class="token comment">//通过commit调用mutations改变state</span>
        <span class="token comment">//在actions中其实可以直接修改state里的数据，页面也能正常响应，但是开发者工具只能捕捉到mutation的事件</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">incrementIfOdd</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>commit<span class="token punctuation">,</span>state<span class="token punctuation">}</span></span><span class="token punctuation">)</span><span class="token punctuation">{</span>	<span class="token comment">//带条件查询，需要用到state</span>
    	<span class="token keyword">if</span><span class="token punctuation">(</span>state<span class="token punctuation">.</span>count<span class="token operator">%</span><span class="token number">2</span><span class="token operator">===</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token operator">...</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
    
<span class="token comment">//用于操作数据（state）</span>
<span class="token keyword">const</span> mutations<span class="token operator">=</span><span class="token punctuation">{</span>
    <span class="token comment">//在组件中通过this.$store.commit(&#39;INCREMENT&#39;,66)调用.</span>
    <span class="token comment">//如果没有什么业务逻辑，可以直接commit调用mutation来修改状态而不惊过action</span>
    <span class="token constant">INCREMENT</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span>n</span><span class="token punctuation">)</span><span class="token punctuation">{</span>   <span class="token comment">//第一个参数为当前的state，第二个为传递过来的参数</span>
        state<span class="token punctuation">.</span>count<span class="token operator">+=</span>n<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//包含多个计算属性（get）的对象</span>
<span class="token keyword">const</span> getters<span class="token operator">=</span><span class="token punctuation">{</span>
    <span class="token function">bigSum</span><span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span><span class="token punctuation">{</span>  <span class="token comment">//在组件中通过this.$store.getters.bigSum调用</span>
		<span class="token keyword">return</span> state<span class="token punctuation">.</span>sum<span class="token operator">*</span><span class="token number">10</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    state<span class="token punctuation">,</span>
    actions<span class="token punctuation">,</span>
    mutations<span class="token punctuation">,</span>
    getters
<span class="token punctuation">}</span><span class="token punctuation">)</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>main.js:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">&#39;./store/index&#39;</span>    <span class="token comment">//注意这个导入要在use之后，因为要use了，才能全局使用</span>

<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">el</span><span class="token operator">:</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">render</span><span class="token operator">:</span><span class="token parameter">h</span><span class="token operator">=&gt;</span><span class="token function">h</span><span class="token punctuation">(</span><span class="token constant">APP</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    store<span class="token punctuation">,</span>
    <span class="token function">beforeCreate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>$bus<span class="token operator">=</span><span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>mutation里不要写异步的代码</strong>，写在action里。主要是体现在vuex的开发者工具主要是监视mutation的状态，如果是异步的，状态的捕捉就是错误的，在动作回滚的时候就会出现问题。</p><p>在组件中使用时，为了避免过多的写this.$store.state.xxx。vue提供了几个api：</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>mapState<span class="token punctuation">,</span>mapGetters<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span><span class="token punctuation">{</span>
    <span class="token literal-property property">computed</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token operator">...</span><span class="token function">mapState</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">he</span><span class="token operator">:</span><span class="token string">&#39;sum&#39;</span><span class="token punctuation">,</span><span class="token literal-property property">xuexiao</span><span class="token operator">:</span><span class="token string">&#39;school&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>  
        <span class="token comment">//等同于给你生成计算属性：</span>
        <span class="token comment">//he(){</span>
	   		<span class="token comment">//return this.$store.state.sum</span>
        <span class="token comment">//}</span>
        <span class="token comment">//如果是同名的，则要用数组的方式去声明.不能简写成...mapState({sum,school}),因为会解析成找sum和school这个变量而不是字符串 </span>
        <span class="token operator">...</span><span class="token function">mapState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;sum&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;school&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token comment">//getters和state同理</span>
        <span class="token operator">...</span><span class="token function">mapGetters</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;xxx&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;aa&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同样的actions和mutations也有相似的api：</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>mapMutations<span class="token punctuation">,</span>mapActions<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span><span class="token punctuation">{</span>
   <span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token punctuation">{</span>
       <span class="token operator">...</span><span class="token function">mapMutations</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">increment</span><span class="token operator">:</span><span class="token string">&#39;JIA&#39;</span><span class="token punctuation">,</span><span class="token literal-property property">decrement</span><span class="token operator">:</span><span class="token string">&#39;JIAN&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
       <span class="token comment">//等同于给你生成：</span>
       <span class="token comment">//increment(n){    如果要传参，调用的时候记得传，不然就会默认把点击事件传过去</span>
		<span class="token comment">//	this.$store.commit(&#39;JIA&#39;,n)    </span>
	  <span class="token comment">//}</span>
       <span class="token comment">//同理同名时：</span>
       <span class="token operator">...</span><span class="token function">mapMutations</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;JIA&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;JIAN&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
       
       <span class="token operator">...</span><span class="token function">mapActions</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">incrementOdd</span><span class="token operator">:</span><span class="token string">&#39;jia&#39;</span><span class="token punctuation">,</span><span class="token literal-property property">decrementAwait</span><span class="token operator">:</span><span class="token string">&#39;jian&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
       <span class="token comment">//等同于给你生成：</span>
       <span class="token comment">//incrementOdd(n){    如果要传参，调用的时候记得传，不然就会默认把点击事件传过去</span>
		<span class="token comment">//	this.$store.dispatch(&#39;jia&#39;,n)    </span>
	  <span class="token comment">//}</span>
       <span class="token comment">//同理同名时：</span>
       <span class="token operator">...</span><span class="token function">mapActions</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;jia&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;jian&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vuex模块化" tabindex="-1"><a class="header-anchor" href="#vuex模块化" aria-hidden="true">#</a> vuex模块化</h3><p>在store/index.js中：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//计算模块</span>
<span class="token keyword">const</span> countOptions<span class="token operator">=</span><span class="token punctuation">{</span>
	<span class="token literal-property property">actions</span><span class="token operator">:</span><span class="token punctuation">{</span>
	
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token literal-property property">mutations</span><span class="token operator">:</span><span class="token punctuation">{</span>
	
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token literal-property property">state</span><span class="token operator">:</span><span class="token punctuation">{</span>
	
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token literal-property property">getters</span><span class="token operator">:</span><span class="token punctuation">{</span>
		<span class="token comment">//这里的state是当前局部的，不是全局的state</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">//学校模块</span>
<span class="token keyword">const</span> schoolOptions<span class="token operator">=</span><span class="token punctuation">{</span>
    <span class="token literal-property property">namespaced</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token comment">//默认为false，开启后就能在mapState的api中以命名的方式单独取出数据</span>
	<span class="token literal-property property">actions</span><span class="token operator">:</span><span class="token punctuation">{</span>
	
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token literal-property property">mutations</span><span class="token operator">:</span><span class="token punctuation">{</span>
	
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token literal-property property">state</span><span class="token operator">:</span><span class="token punctuation">{</span>
	
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token literal-property property">getters</span><span class="token operator">:</span><span class="token punctuation">{</span>
	
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">modules</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token literal-property property">a</span><span class="token operator">:</span>countOptions<span class="token punctuation">,</span>
        <span class="token literal-property property">b</span><span class="token operator">:</span>schoolOptions
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再使用map的api就要修改写法了：</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>mapState<span class="token punctuation">,</span>mapGetters<span class="token punctuation">,</span>mapActions<span class="token punctuation">,</span>mapMutations<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span><span class="token punctuation">{</span>
    <span class="token literal-property property">computed</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token operator">...</span><span class="token function">mapState</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">aModule</span><span class="token operator">:</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span><span class="token literal-property property">bModule</span><span class="token operator">:</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>    <span class="token comment">//取别名</span>
        <span class="token operator">...</span><span class="token function">mapState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>  <span class="token comment">//要想读取a模块里state的sum就要a.sum</span>
        
        <span class="token operator">...</span><span class="token function">mapState</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token string">&#39;sum&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;count&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token comment">//这种方式就可以直接取出a中的sum和count，而不用a.count。但是模块化配置时需要加上namespaced：true</span>
        <span class="token comment">//如果用这种方式两个模块有重名的，则是后面的覆盖前面的</span>
        
        <span class="token comment">//getters,actions,mutations同理</span>
        <span class="token operator">...</span><span class="token function">mapGetters</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token string">&#39;xxx&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;aa&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">//取出a模块中名为xxx和aa的getters</span>
         <span class="token operator">...</span><span class="token function">mapGetters</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">x</span><span class="token operator">:</span><span class="token string">&#39;xxx&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>   <span class="token comment">//取别名</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token punctuation">{</span>
       <span class="token operator">...</span><span class="token function">mapMutations</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token string">&#39;JIA&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;JIAN&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
       <span class="token operator">...</span><span class="token function">mapActions</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">incrementOdd</span><span class="token operator">:</span><span class="token string">&#39;jia&#39;</span><span class="token punctuation">,</span><span class="token literal-property property">decrementAwait</span><span class="token operator">:</span><span class="token string">&#39;jian&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>  
           
       <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;a/JIA&#39;</span><span class="token punctuation">,</span>参数<span class="token punctuation">)</span>   <span class="token comment">//模块化时，普通调用的写法，   模块名+/+方法名，参数</span>
       <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;$$$&#39;</span><span class="token punctuation">,</span><span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">)</span>  <span class="token comment">//可以看到$store.state里有a，b</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>


//模块化时普通写法
state:
this.$store.state.moduleName.xxx

commit:
this.$store.commit(&#39;moduleName/functionName&#39;,property)

dispatch:
this.$store.dispatch(&#39;moduleName/functionName&#39;,property)

getters:
this.$store.getters[&#39;moduleName/functionName&#39;]

//模块化api写法
state:(在computed中):   ==========a,b为两个模块名
...mapState({aModule:&#39;a&#39;,bModule:&#39;b&#39;}),    //取别名
...mapState([&#39;a&#39;,&#39;b&#39;]),  //原名，要想读取a模块里state的sum就要a.sum
...mapState(&#39;a&#39;,[&#39;sum&#39;,&#39;count&#39;])  //直接用sum就取了a.sum，如果其他模块也有sum，后面的会覆盖
...mapState(&#39;a&#39;,{aSum:&#39;sum&#39;,aCount:&#39;count&#39;})  //取别名

getters:(在computed中):
...mapGetters(&#39;a&#39;,[&#39;property&#39;])    //取别名等其他东西同state

dispatch:(在methods中):
...mapActions(&#39;moduleName&#39;,[&#39;functionName&#39;])    //取别名也是用对象格式

commit:(在methods中):
...mapMutation(&#39;moduleName&#39;,[&#39;functionName&#39;])    //同dispatch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="路由vue-router" tabindex="-1"><a class="header-anchor" href="#路由vue-router" aria-hidden="true">#</a> 路由vue-router</h2><p>1.路由就是一组key-value的对应管理</p><p>2.多个路由，需要惊过路由器（router）的管理</p><p>vue-router最新的默认版本为4，且只能用于vue3，要安装vue-router@3版本。vue2才能使用</p><p>在router/index.js中：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> vueRouter <span class="token keyword">from</span> <span class="token string">&#39;vue-router&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> xxx <span class="token keyword">from</span> <span class="token string">&#39;./components/xxx&#39;</span>  <span class="token comment">//组件</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">vueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">mode</span><span class="token operator">:</span><span class="token string">&#39;hash&#39;</span><span class="token punctuation">,</span><span class="token comment">//还有history模式，默认为hash，hash模式下，路由地址有#。history兼容性略差</span>
    <span class="token comment">//对于一个url来说，#后面的就是hash值，hash值不会包含在http请求中。即不会带给服务器</span>
	<span class="token literal-property property">routes</span><span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">&#39;/test&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">component</span><span class="token operator">:</span>xxx<span class="token punctuation">,</span>  <span class="token comment">//() =&gt; import(&#39;../components/xxx.vue&#39;)</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span><span class="token punctuation">[</span>  <span class="token comment">//二级路由</span>
                <span class="token punctuation">{</span>
                    <span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">&#39;news&#39;</span><span class="token punctuation">,</span>   <span class="token comment">//前面的/不要写，要么就直接写成/test/news才能正确访问到组件</span>
                    <span class="token literal-property property">components</span><span class="token operator">:</span>xxx
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在组件中：</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/test<span class="token punctuation">&quot;</span></span> <span class="token attr-name">active-class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>active<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">&gt;</span></span>    //特殊标签跳转路由
//active-class=&quot;active&quot;路由激活时添加active的样式
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-view</span><span class="token punctuation">&gt;</span></span>    //指定路由组件的呈现位置
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>每个路由都有自己的$route,整个应用只有一个$router</p><h3 id="路由传参" tabindex="-1"><a class="header-anchor" href="#路由传参" aria-hidden="true">#</a> 路由传参</h3><p>query：</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">:to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\`/test?id=\${666}&amp;title=abc\`<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">&gt;</span></span>  // 注意用变量时to前面要加冒号，不然就当成字符串了

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">:to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
                      path:&#39;/test&#39;,
                      query:{
                      id:11,
                      title:&#39;abc&#39;
                      }
                  }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">&gt;</span></span>

//取值
this.$route.query.xxx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>params：必须配置路由文件</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">vueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	<span class="token literal-property property">routes</span><span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">&#39;/test&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">component</span><span class="token operator">:</span>xxx<span class="token punctuation">,</span>  <span class="token comment">//() =&gt; import(&#39;../components/xxx.vue&#39;)</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span><span class="token punctuation">[</span>  <span class="token comment">//二级路由</span>
                <span class="token punctuation">{</span>
                    <span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">&#39;news&#39;</span><span class="token punctuation">,</span>   <span class="token comment">//前面的/不要写，要么就直接写成/test/news才能正确访问到组件</span>
                    <span class="token literal-property property">component</span><span class="token operator">:</span>xxx
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">&#39;detail/:id/:title&#39;</span><span class="token punctuation">,</span>   
                    <span class="token comment">//跳转方式：</span>
                    <span class="token comment">//&lt;router-link :to=&quot;\`/detail/\${666}/\${&#39;string&#39;}\`&quot;&gt;&lt;/router-link&gt;</span>
                    <span class="token literal-property property">component</span><span class="token operator">:</span>xxx
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>params：</p><p>1、路由文件里需要在path里声明占位符，如果要用对象写法，需要配置name</p><p>2、用params对象写法时传参必须用name，不能用path</p><p>=====注意======</p><p><strong>如果路由里配置没有占位符，通过name用对象式params跳转传参，刷新后params参数会消失</strong></p><p>==============</p><p>传参：</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">:to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\`/test/detail/\${id}/\${title}\`<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">:to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
                  	name:&#39;xiangqing&#39;,   //注意是name不是path
                  	params:{
                  		id:11,
                  		title
                  	}
                  }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>获取：</p><p>this.$route.params.xxx</p><h3 id="props-让路由组件更方便的接收到参数" tabindex="-1"><a class="header-anchor" href="#props-让路由组件更方便的接收到参数" aria-hidden="true">#</a> props：让路由组件更方便的接收到参数</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">children</span><span class="token operator">:</span><span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;xiangqing&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">&#39;detail/:id/:title&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">component</span><span class="token operator">:</span>xxx<span class="token punctuation">,</span>
        <span class="token comment">//第一种写法---对象。对象中所有key-value都会以props的形式传给detail组件</span>
        <span class="token literal-property property">props</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token literal-property property">a</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token literal-property property">b</span><span class="token operator">:</span><span class="token number">2</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">//第二种写法---布尔值。若props为真，路由组件会把收到的所有params参数以props的形式传给detail组件</span>
        <span class="token literal-property property">props</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token comment">//第三种写法---函数。query和params都可以以props的形式传给detail组件</span>
        <span class="token function">props</span><span class="token punctuation">(</span><span class="token parameter">$route</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span>$route<span class="token punctuation">.</span>query<span class="token punctuation">.</span>id<span class="token punctuation">,</span><span class="token literal-property property">title</span><span class="token operator">:</span>$route<span class="token punctuation">.</span>query<span class="token punctuation">.</span>title<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
        <span class="token comment">//疯狂解构赋值</span>
        <span class="token function">props</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span><span class="token literal-property property">query</span><span class="token operator">:</span> <span class="token punctuation">{</span>id<span class="token punctuation">,</span>title<span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">{</span>id<span class="token punctuation">,</span> title<span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>组件中：</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">export</span> <span class="token keyword">default</span><span class="token punctuation">{</span>
		<span class="token literal-property property">props</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="命名路由" tabindex="-1"><a class="header-anchor" href="#命名路由" aria-hidden="true">#</a> 命名路由</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">vueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	<span class="token literal-property property">routes</span><span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">&#39;/test&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;Test&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">component</span><span class="token operator">:</span>xxx<span class="token punctuation">,</span>  <span class="token comment">//() =&gt; import(&#39;../components/xxx.vue&#39;)</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span><span class="token punctuation">[</span>  <span class="token comment">//二级路由</span>
                <span class="token punctuation">{</span>
                    <span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">&#39;news&#39;</span><span class="token punctuation">,</span>   <span class="token comment">//前面的/不要写，要么就直接写成/test/news才能正确访问到组件</span>
                    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;xinwen&#39;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">components</span><span class="token operator">:</span>xxx
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>跳转的时候：(只有路由较长时才有简化的意义)</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">:to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{name:&#39;Test&#39;}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">&gt;</span></span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="router-link的replace模式" tabindex="-1"><a class="header-anchor" href="#router-link的replace模式" aria-hidden="true">#</a> router-link的replace模式</h3><p>开启后不会产生历史记录，直接替换当前栈指针的记录。默认为push模式</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">replace</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>this.$router.back() 网页回退</p><p>this.$router.forward() 网页前进</p><p>this.$router.go( n ) n为正数则前进n页，为负数则后退n页，为0时刷新页面</p><p>router-link怎么跳转，编程式的路由跳转就怎么写：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span>$router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>    <span class="token comment">//或replace</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">&#39;xxx&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">params</span><span class="token operator">:</span><span class="token punctuation">{</span>
        
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">query</span><span class="token operator">:</span><span class="token punctuation">{</span>
        
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;xxx&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">this</span><span class="token punctuation">.</span>$router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&#39;/xxx&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="缓存路由组件keep-alive" tabindex="-1"><a class="header-anchor" href="#缓存路由组件keep-alive" aria-hidden="true">#</a> 缓存路由组件keep-alive</h3><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>keep-alive</span>  <span class="token attr-name">include</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>news<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>  //不写include则全部路由组件都缓存。   字符串或正则  :include=&quot;/a|b/&quot;
    并且这里的名字指的是export default里的name配置项--组件名   
    
    多个用逗号隔开  include=&quot;a,b&quot;或者  :include=[&#39;a&#39;,&#39;b&#39;]
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>keep-alive</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="activated-和-deactivated-路由组件独有的生命周期函数" tabindex="-1"><a class="header-anchor" href="#activated-和-deactivated-路由组件独有的生命周期函数" aria-hidden="true">#</a> activated 和 deactivated (路由组件独有的生命周期函数)</h3><p>在keep-alive中才有效，且在服务端渲染期间不被调用</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>activated(){   //当组件被激活时调用

}

deactivated(){   //当组件失活时调用

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="路由守卫" tabindex="-1"><a class="header-anchor" href="#路由守卫" aria-hidden="true">#</a> 路由守卫</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> router<span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">vueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	<span class="token literal-property property">routes</span><span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">&#39;/test&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;Test&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">component</span><span class="token operator">:</span>xxx<span class="token punctuation">,</span>  
            <span class="token literal-property property">meta</span><span class="token operator">:</span><span class="token punctuation">{</span> <span class="token literal-property property">isAuth</span><span class="token operator">:</span><span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>   <span class="token comment">//添加自定义属性</span>
            <span class="token function-variable function">beforeEnter</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span>from<span class="token punctuation">,</span>next</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
				<span class="token comment">//逻辑和beforeEach一样。是这个路由独享的守卫.</span>
                <span class="token comment">//如果独享和全局同时存在，先进入全局的再进行独享的判断</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span><span class="token punctuation">[</span>  <span class="token comment">//二级路由</span>
                <span class="token punctuation">{</span>
                    <span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">&#39;news&#39;</span><span class="token punctuation">,</span>   
                    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;xinwen&#39;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">components</span><span class="token operator">:</span>xxx
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

router<span class="token punctuation">.</span><span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span>from<span class="token punctuation">,</span>next</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token comment">//每次切换路由时都调用</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>to<span class="token punctuation">.</span>meta<span class="token punctuation">.</span>isAuth<span class="token punctuation">)</span><span class="token punctuation">{</span>  <span class="token comment">//判断是否需要校验</span>
        
    <span class="token punctuation">}</span>
    <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">//调用才能放行</span>
    
    <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
		<span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">&#39;/c&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;test&#39;</span>  <span class="token comment">//可以通过next重定向</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    
    <span class="token keyword">return</span> <span class="token boolean">false</span> <span class="token comment">//取消当前的路由导航</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

router<span class="token punctuation">.</span><span class="token function">afterEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span><span class="token keyword">from</span></span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token comment">//后置路由守卫，切换路由后执行，两个参数和beforeEach一样。用的比较少</span>
    
<span class="token punctuation">}</span><span class="token punctuation">)</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="组件路由守卫" tabindex="-1"><a class="header-anchor" href="#组件路由守卫" aria-hidden="true">#</a> 组件路由守卫</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//组件内的声明周期函数</span>
<span class="token function">beforeRouteEnter</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span>from<span class="token punctuation">,</span>next</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token comment">//通过路由规则进入才回调用。比如直接import组件，然后放在template里是不会触发该函数</span>
    <span class="token comment">//与其他路由守卫(beforeEach,beforeEnter)同时存在时，这是最后调用的</span>
    <span class="token comment">//不能调用到this</span>
<span class="token punctuation">}</span>

<span class="token function">beforeRouteLeave</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span>from<span class="token punctuation">,</span>next</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//离开当前路由组件时调用</span>
<span class="token punctuation">}</span>

<span class="token function">beforeRouteUpdate</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span>from<span class="token punctuation">,</span>next</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// 在当前路由改变，但是该组件被复用时调用</span>
    <span class="token comment">// 举例来说，对于一个带有动态参数的路径 \`/users/:id\`，在 \`/users/1\` 和 \`/users/2\` 之间跳转的时候，</span>
    <span class="token comment">// 由于会渲染同样的 \`UserDetails\` 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。</span>
    <span class="token comment">// 因为在这种情况发生的时候，组件已经挂载好了，导航守卫可以访问组件实例 \`this\`</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="elementui按需引入、更换主题色" tabindex="-1"><a class="header-anchor" href="#elementui按需引入、更换主题色" aria-hidden="true">#</a> elementUI按需引入、更换主题色</h2><h3 id="按需引入" tabindex="-1"><a class="header-anchor" href="#按需引入" aria-hidden="true">#</a> 按需引入</h3><p>安装babel插件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm i babel-plugin-component -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>修改babel.config.js：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;@vue/cli-plugin-babel/preset&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>
      <span class="token string">&quot;@babel/preset-env&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;modules&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
      <span class="token string">&quot;component&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;libraryName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;element-ui&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;styleLibraryName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;theme-chalk&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>src下新建一个element文件夹，新建一个index.js文件：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token string">&#39;../theme/element/index.css&#39;</span>    <span class="token comment">//如果没有修改主题色，就不用引入主题色的css文件</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> Button<span class="token punctuation">,</span> DatePicker <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;element-ui&#39;</span>

Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Button<span class="token punctuation">)</span><span class="token punctuation">;</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>DatePicker<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在main.js中引入该文件：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">&#39;./element/index.js&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="更换主题色" tabindex="-1"><a class="header-anchor" href="#更换主题色" aria-hidden="true">#</a> 更换主题色</h3><p>使用在线主题生成工具</p><p>https://elementui.github.io/theme-chalk-preview/#/zh-CN</p><p>选完颜色后下载主题。</p><p>在src目录下新建一个theme文件夹，再新建一个element文件夹，把下载的东西解压进去。</p><p>在main.js中：引入里面的index.css文件</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">&#39;./theme/element/index.css&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,200);function r(s,d){return t(),p("div",null,[i,e("p",null,"使用css配合v-cloak可以解决网速慢时，页面展示出"+o(s.xx)+"的问题",1),u])}const v=a(l,[["render",r],["__file","vue笔记.html.vue"]]);export{v as default};
