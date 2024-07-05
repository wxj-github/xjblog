import{_ as n,o as s,c as a,e}from"./app-c984cf19.js";const t="/xjblog/assets/image-20230907142152903-f7a4a5b1.png",p="/xjblog/assets/image-20220222225049161-cfeb334f.png",o={},c=e('<p><img src="'+t+`" alt="image-20230907142152903"></p><p>当看到。。。的时候就意味着它底层用的是Object.defineProperty ，点击之后就调用它的get方法来获取属性。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//模拟vue的data选项</span>
<span class="token keyword">let</span> data <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">username</span><span class="token operator">:</span><span class="token string">&#39;curry&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">33</span>
<span class="token punctuation">}</span>

<span class="token comment">//模拟组件的实例,让_this拥有data的所有属性</span>
<span class="token keyword">let</span> _this <span class="token operator">=</span><span class="token punctuation">{</span>
    <span class="token literal-property property">test</span><span class="token operator">:</span><span class="token string">&#39;xxx&#39;</span> 
<span class="token punctuation">}</span>

<span class="token comment">//利用Obejct.defineProperty()实现</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> item <span class="token keyword">in</span> data<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//第一个参数为目标，第二个参数为要添加的属性</span>
    Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>_this<span class="token punctuation">,</span> item<span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token comment">//用来获取扩展属性值 ，当获取值时会调用该方法。通过该方法添加的拓展属性不能直接通过obj.val的方法来修改，需要用set()</span>
    	<span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;get()&#39;</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span> data<span class="token punctuation">[</span>item<span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">//监视拓展属性，一修改就调用</span>
        <span class="token function">set</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span><span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;set()&#39;</span><span class="token punctuation">)</span>
            <span class="token comment">//_this.username=&#39;durant&#39;    //千万不要在set方法中修改当前拓展属性的值，否则会陷入死循环</span>
            data<span class="token punctuation">[</span>item<span class="token punctuation">]</span><span class="token operator">=</span>newValue
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;this&#39;</span><span class="token punctuation">,</span>_this<span class="token punctuation">)</span> <span class="token comment">//在预览时，里面的test属性肯定没有三个。。。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code> Obejct<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> newProperty<span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span><span class="token string">&#39;18&#39;</span><span class="token punctuation">,</span><span class="token comment">//给newProperty赋值</span>
     	<span class="token literal-property property">enumerable</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token comment">//控制是否可枚举，默认false</span>
     	<span class="token literal-property property">writable</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//控制是否可修改，默认false</span>
     	<span class="token literal-property property">configurable</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token comment">//控制是否可删除，默认false</span>
        
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数据代理-通过一个对象代理对另一个对象中属性的操作-读、写" tabindex="-1"><a class="header-anchor" href="#数据代理-通过一个对象代理对另一个对象中属性的操作-读、写" aria-hidden="true">#</a> 数据代理：通过一个对象代理对另一个对象中属性的操作（读、写）</h2><p><img src="`+p+'" alt="image-20220222225049161"></p><p>通过vm对象来代理data中的属性。</p><p>先完整的将data复制到vue实例的_data中，并做了数据劫持（实现监听数据的变化引起视图层的变化）</p><p>在_data里通过object.definedProperty把data中所有的属性都添加到vm上，并为每一个添加到vm上的属性指定一个getter和setter。</p><p>在getter和setter内部去操作（读/写）data中对应的属性。</p>',10),i=[c];function l(r,u){return s(),a("div",null,i)}const k=n(o,[["render",l],["__file","defineProperty.html.vue"]]);export{k as default};
