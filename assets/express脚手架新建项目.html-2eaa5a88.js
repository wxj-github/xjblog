import{_ as n,o as s,c as a,e}from"./app-7863bad7.js";const t={},i=e(`<h2 id="安装express脚手架" tabindex="-1"><a class="header-anchor" href="#安装express脚手架" aria-hidden="true">#</a> 安装express脚手架</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install -g express-generator
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="创建项目" tabindex="-1"><a class="header-anchor" href="#创建项目" aria-hidden="true">#</a> 创建项目</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>express blogBackEnd --view=ejs    
等价于
express blogBackEnd -e
//创建名为blogBackEnd的项目，并且模板引擎为ejs，默认为jade。不需要模板引擎改为   --no-view
//服务端只做数据响应的话，一般用ejs就行，如果不用模板引擎，就会在一些接口报错404之类的时候没有那么直观。

cd blogBackEnd
npm install
npm start //启动
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="热更新" tabindex="-1"><a class="header-anchor" href="#热更新" aria-hidden="true">#</a> 热更新</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install nodemon
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>修改package.json启动命令node--&gt;nodemon：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&quot;scripts&quot;:{
	&quot;start&quot;:&quot;nodemon  ./bin/www&quot;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装数据库相关依赖" tabindex="-1"><a class="header-anchor" href="#安装数据库相关依赖" aria-hidden="true">#</a> 安装数据库相关依赖</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install sequelize mysql2   //安装操作数据库的orm框架和数据库支持
npm install sequelize-cli -g	//通过命令行创建sequelize所需的目录和相关代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="在express创建的项目根目录进行sequelize初始化" tabindex="-1"><a class="header-anchor" href="#在express创建的项目根目录进行sequelize初始化" aria-hidden="true">#</a> 在express创建的项目根目录进行sequelize初始化</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sequelize init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>会新增四个文件夹：</p><ol><li>config <ul><li>存放config.json，存储连接数据库的配置。</li></ul></li><li>migrations <ul><li>迁移。<strong>如果需要对数据库做新增表，删除表，修改字段等操作需要在这里添加迁移文件</strong></li></ul></li><li>models <ul><li>模型文件。增删查改需要用到这里的模型，每个模型对应数据库的一张表</li></ul></li><li>seeders <ul><li><strong>种子文件，需要添加到数据库的数据存放到这里，只需一个命令，数据表就会自动填充</strong></li></ul></li></ol><h2 id="新建数据表" tabindex="-1"><a class="header-anchor" href="#新建数据表" aria-hidden="true">#</a> 新建数据表</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sequelize model:generate --name user --attributes username:string,password:string
//新建一个模型为user的表，字段为username和password，类型都为string
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>执行完就会创建一个模型文件和迁移文件，migrations和models文件夹就会新增相应的文件。</p><h2 id="navicat创建数据库" tabindex="-1"><a class="header-anchor" href="#navicat创建数据库" aria-hidden="true">#</a> navicat创建数据库</h2><p>创建名为blog的数据库，字符集为utf-8，排序顺序utf8_general_ci</p><p>修改config中config.json中development的用户名、密码、数据库名。</p><h2 id="执行迁移" tabindex="-1"><a class="header-anchor" href="#执行迁移" aria-hidden="true">#</a> 执行迁移</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sequelize db:migrate
//执行完就可以在数据库看到新增的表了
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="种子文件-非必要操作" tabindex="-1"><a class="header-anchor" href="#种子文件-非必要操作" aria-hidden="true">#</a> 种子文件（非必要操作）</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sequelize seed:generate --name user     
//新建名为user的种子文件。名字无所谓，因为真正执行时参照的是文件里对应的表名，最好起和操作表相同的名字
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>修改xxxx-user.js（种子文件）:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string">&#39;use strict&#39;</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">async</span> <span class="token function">up</span><span class="token punctuation">(</span><span class="token parameter">queryInterface<span class="token punctuation">,</span> Sequelize</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">await</span> queryInterface<span class="token punctuation">.</span><span class="token function">bulkInsert</span><span class="token punctuation">(</span><span class="token string">&#39;users&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>   <span class="token comment">//修改表名.要注意表名要和数据库里的一致。</span>
      <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">&#39;John&#39;</span><span class="token punctuation">,</span>    <span class="token comment">//修改要添加的字段和值</span>
      <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token string">&#39;test&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">createdAt</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">updatedAt</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token keyword">async</span> <span class="token function">down</span><span class="token punctuation">(</span><span class="token parameter">queryInterface<span class="token punctuation">,</span> Sequelize</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete(&#39;People&#39;, null, <span class="token punctuation">{</span><span class="token punctuation">}</span>);
     */</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sequelize db:seed:all
//运行迁移，把上面的数据添加到user表中
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="测试查询数据" tabindex="-1"><a class="header-anchor" href="#测试查询数据" aria-hidden="true">#</a> 测试查询数据</h2><p>routes/index.js:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> router <span class="token operator">=</span> express<span class="token punctuation">.</span><span class="token function">Router</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> models <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;../models&#39;</span><span class="token punctuation">)</span>  <span class="token comment">//引入模型文件</span>


router<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> data <span class="token operator">=</span> <span class="token keyword">await</span> models<span class="token punctuation">.</span>users<span class="token punctuation">.</span><span class="token function">findAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">//models.xxx取决于models对应表文件里，modelName的值</span>
  res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    data
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> router<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>随后访问该接口测试是否成功返回数据。</p><h2 id="models模型文件" tabindex="-1"><a class="header-anchor" href="#models模型文件" aria-hidden="true">#</a> models模型文件</h2><p>以某个模型文件为例。</p><p>models/user.js:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string">&#39;use strict&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span>
  Model
<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;sequelize&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">sequelize<span class="token punctuation">,</span> DataTypes</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">class</span> <span class="token class-name">user</span> <span class="token keyword">extends</span> <span class="token class-name">Model</span> <span class="token punctuation">{</span>
    <span class="token keyword">static</span> <span class="token function">associate</span><span class="token punctuation">(</span><span class="token parameter">models</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// define association here</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  user<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">username</span><span class="token operator">:</span> DataTypes<span class="token punctuation">.</span><span class="token constant">STRING</span><span class="token punctuation">,</span>
    <span class="token literal-property property">password</span><span class="token operator">:</span> DataTypes<span class="token punctuation">.</span><span class="token constant">STRING</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    sequelize<span class="token punctuation">,</span>
    <span class="token literal-property property">modelName</span><span class="token operator">:</span> <span class="token string">&#39;user&#39;</span><span class="token punctuation">,</span>     <span class="token comment">//要操作表时调用的名称，models.user</span>
      
      
    <span class="token comment">// =======freezeTableName: true,  =============</span>
    <span class="token comment">// 停止 Sequelize 执行自动复数化,就是查询时models.user,就会去找user表，为flase时会执行自动复数，去找users表。默认为false</span>
      
      
    <span class="token comment">//========= timestamps: false,  ============</span>
    <span class="token comment">// 关闭时间戳。使用Sequelize 创建或更新内容时，createdAt、updatedAt字段都会被自动设置。默认为true</span>
    <span class="token comment">// 只有使用Sequelize本身的方法操作数据库时时间戳才会更新，使用其他插件的方法或者使用原生SQL操作时，时间戳不会更新。</span>
      
    <span class="token comment">//===========自定义开启，关闭其中一个时间戳字段=========</span>
    <span class="token literal-property property">createdAt</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 关闭createdAt</span>
    <span class="token literal-property property">updatedAt</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// 开启updatedAt</span>
      
    <span class="token comment">//=========自定义时间戳字段===========</span>
    <span class="token literal-property property">createdAt</span><span class="token operator">:</span> <span class="token string">&quot;createdTime&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 将createdAt设为自定义字段createdTime。后续的sequelize操作，createdAt的值只会更新在createdTime字段上。</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> user<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>更改时区：models/index.js:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span>__dirname <span class="token operator">+</span> <span class="token string">&#39;/../config/config.json&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span>env<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">//=======改变时区，防止数据库时间更新错误。sequelize的时间戳默认比北京慢八个小时。因为我们处于东八区，所以我们的时间快8小时。</span>
config<span class="token punctuation">.</span>timezone <span class="token operator">=</span> <span class="token string">&#39;+08:00&#39;</span><span class="token punctuation">;</span>   <span class="token comment">//新增---慢几小时就加几小时，快则减。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,37),p=[i];function l(c,o){return s(),a("div",null,p)}const u=n(t,[["render",l],["__file","express脚手架新建项目.html.vue"]]);export{u as default};
