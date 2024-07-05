import{_ as n,o as s,c as a,e as t}from"./app-c984cf19.js";const p="/xjblog/assets/image-20210201170527732-d32e0ae4.png",e={},o=t(`<h2 id="vuex核心概念和api" tabindex="-1"><a class="header-anchor" href="#vuex核心概念和api" aria-hidden="true">#</a> vuex核心概念和API</h2><p><strong>state</strong>：vuex管理的状态<strong>对象</strong></p><p><strong>actions</strong>：包含多个事件回调函数的<strong>对象</strong></p><p>通过commit（）来触发mutation的调用，间接更新state</p><p>谁来触发：组件中：$store.dispatch(&#39;action名称&#39;)</p><p>可以包含异步代码，定时器，ajax，</p><p><strong>mutations</strong>：包含多个直接更新state的方法（回调函数）的<strong>对象</strong></p><p>谁来触发：action中的commit（‘mutation名称’）</p><p>只能包含同步代码，不能写异步代码</p><p><strong>getters</strong>：包含多个计算属性（get）的对象</p><p>谁来读取：组件中: $store.getters.xxx</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> getters<span class="token operator">=</span><span class="token punctuation">{</span>
	<span class="token function">mmm</span><span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token punctuation">.</span><span class="token punctuation">.</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>modules</strong>:包含的多个modules</p><p>一个module是一个store的配置对象</p><p>与一个组件（包含有共享属性）对应</p><p><strong>向外暴露store对象</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    state<span class="token punctuation">,</span>
    mutations<span class="token punctuation">,</span>
    actions<span class="token punctuation">,</span>
    getters
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>组件中：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>mapState<span class="token punctuation">,</span>mapGetters<span class="token punctuation">,</span>mapActions<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span><span class="token punctuation">{</span>
    <span class="token literal-property property">computed</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token operator">...</span><span class="token function">mapState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;xxx&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token operator">...</span><span class="token function">mapGetters</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;mmm&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token function">mapActions</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;zzz&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token punctuation">{</span><span class="token punctuation">{</span>xxx<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">{</span><span class="token punctuation">{</span>mmm<span class="token punctuation">}</span><span class="token punctuation">}</span> @click<span class="token operator">=</span><span class="token string">&quot;zzz(data)&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>映射store</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">&#39;store&#39;</span>
<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	store
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>store对象</p><p>所有用vuex管理的组件中都多了一个属性$store,它就是一个store</p><p>属性：</p><p>state：注册的state对象</p><p>getters：注册的getters对象</p><p>方法：</p><p>dispatch（actionName，data）：分发调用action</p><p>npm install --save vuex</p><p>创建一个核心模块store.js</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">import</span> Vuex <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>

vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Vuex<span class="token punctuation">)</span>
<span class="token comment">//状态对象</span>
<span class="token keyword">const</span> state<span class="token operator">=</span><span class="token punctuation">{</span>
    <span class="token literal-property property">count</span><span class="token operator">:</span><span class="token number">0</span>
<span class="token punctuation">}</span>

<span class="token comment">//包含多个更新state函数的对象</span>
<span class="token keyword">const</span> mutations<span class="token operator">=</span><span class="token punctuation">{</span>
    <span class="token constant">INCREMENT</span><span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        state<span class="token punctuation">.</span>count<span class="token operator">++</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//包含多个对应事件回调函数的对象</span>
<span class="token keyword">const</span> actions<span class="token operator">=</span><span class="token punctuation">{</span>
    <span class="token function">increment</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>commit<span class="token punctuation">}</span></span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//提交mutation</span>
        <span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;INCREMENT&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">incrementIfOdd</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>commit<span class="token punctuation">,</span>state<span class="token punctuation">}</span></span><span class="token punctuation">)</span><span class="token punctuation">{</span>	<span class="token comment">//带条件查询，需要用到state</span>
    	<span class="token keyword">if</span><span class="token punctuation">(</span>state<span class="token punctuation">.</span>count<span class="token operator">%</span><span class="token number">2</span><span class="token operator">===</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token operator">...</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//包含多个getters计算属性函数的对象</span>
<span class="token keyword">const</span> getters<span class="token operator">=</span><span class="token punctuation">{</span>
    <span class="token function">evenOrOdd</span><span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span><span class="token punctuation">{</span>	<span class="token comment">//这里的state是否可以不加</span>
        <span class="token keyword">return</span> state<span class="token punctuation">.</span>count<span class="token operator">%</span><span class="token number">2</span><span class="token operator">===</span><span class="token number">0</span> <span class="token operator">?</span> <span class="token string">&#39;偶数&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;奇数&#39;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span>

	state<span class="token punctuation">,</span>

	mutations<span class="token punctuation">,</span>

	actions<span class="token punctuation">,</span>

	getters

<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在main.js中配置</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">&#39;./store&#39;</span>
<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">el</span><span class="token operator">:</span>xx<span class="token punctuation">,</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span>xx<span class="token punctuation">,</span>
    <span class="token literal-property property">template</span><span class="token operator">:</span><span class="token string">&#39;&lt;APP /&gt;&#39;</span><span class="token punctuation">,</span>
    store
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>组件中</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>//在模板里写$store不用加this，在js里写要加this

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>{{$store.state.count}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>	//取值count
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>{{evenOrAdd}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">import</span> <span class="token punctuation">{</span>mapState<span class="token punctuation">,</span>mapGetters<span class="token punctuation">,</span>mapActions<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span><span class="token punctuation">{</span>
    
    <span class="token literal-property property">computed</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token function">evenOrOdd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span>getters<span class="token punctuation">.</span>evenOrOdd
        <span class="token punctuation">}</span>
        
        <span class="token operator">...</span>mapState<span class="token operator">:</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;count&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>		<span class="token comment">//用了这种方式，在template中就不需要$store.state了，直接写count和evenOrOdd </span>
            						<span class="token comment">//mapState()返回值：{ count(){	return this.$store.state.count }}</span>
        <span class="token operator">...</span>mapGetters<span class="token operator">:</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;evenOrOdd&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>	<span class="token comment">//mapGetters()返回值：{ evenOrOdd(){	return this.$store.getters.evenOrOdd }}</span>
    
    	<span class="token operator">...</span>mapGetters<span class="token operator">:</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">evenOrOdd</span><span class="token operator">:</span><span class="token string">&#39;evenOrOdd2&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>  <span class="token comment">//当名字不一样时用这种结构，前面的是当前文件计算属性命名，后者是store文件中的计算属性名字</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
        
    <span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">//通知vuex去增加</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">&#39;increment&#39;</span><span class="token punctuation">)</span>	<span class="token comment">//触发store中对应的action</span>
        <span class="token punctuation">}</span>
        <span class="token operator">...</span><span class="token function">mapActions</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;increment&#39;</span>，<span class="token string">&#39;decrement&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>	<span class="token comment">//这种书写方式的条件是函数名和dispatch的名字是一样的</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+p+'" alt="image-20210201170527732"></p>',36),c=[o];function i(l,u){return s(),a("div",null,c)}const d=n(e,[["render",i],["__file","VUEX.html.vue"]]);export{d as default};
