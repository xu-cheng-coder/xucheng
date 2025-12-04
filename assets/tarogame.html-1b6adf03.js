import{_ as n,o as s,c as a,b as t}from"./app-45e1adad.js";const e={},p=t(`<p>要求包含</p><p>1、 react 版本 2、 ts//数据类型的定义 3、 less 或 tailwindcss -- css框架 4、 umijs 或 vite 或 next.js 5、 hooks 6、 本地nginx部署前端项目 或 云部署基于nginx 7、 是否使用canvas实现方式任选， H5或小程序（原生或taro）任选， 8、 题目四选二 9、 包含eslint、 stylelint 、 prettier -- 代码格式化 10、 验收： 演示口诉代码实现逻辑， 禁止雷同； 预计5.16第一次验收</p><p>1、实现双人五子棋游戏（黑白棋子交替落子）。 棋盘为15x15或19x19的格子。 判断胜负：横、竖、斜向连续5个同色棋子即获胜。 显示当前玩家（黑方/白方）和游戏状态（胜负或平局）。 提供“重新开始”功能。</p><p>2、实现贪吃蛇游戏。 游戏在一个固定大小的网格（如20x20）中进行。 玩家通过键盘（上下左右或WASD）控制蛇移动，蛇每次移动一格。 蛇吃到食物后增长一节，食物随机出现在网格中。 游戏结束条件：蛇撞到边界或自身。 显示当前得分（吃到的食物数量）。 提供“重新开始”功能。</p><p>3、实现数独游戏。 提供9x9标准数独棋盘，部分格子预填数字，剩余格子由玩家填写。 玩家可通过键盘或点击输入1-9的数字，非法输入（如违反数独规则）应被阻止或提示。 验证数独解法：检查玩家填写的数字是否满足数独规则（每行、每列、每个3x3宫格内数字1-9不重复）。 显示游戏状态：完成时提示成功，未完成或错误时提示问题。 提供“重新开始”功能和“检查答案”功能</p><p>4、 实现连连看游戏 实现一个NxM的游戏网格（例如8x8或10x6），填充成对的相同图案（如数字、图标或图片）。 玩家点击两个相同图案，若它们可以通过不超过3条直线（水平或垂直）连接且路径无障碍，则消除这对图案。 游戏目标：消除所有图案对，棋盘清空则获胜。 显示游戏状态：剩余图案数、计时器或得分。 提供“重新开始”功能。 检测无解情况（无可用连接对）并自动洗牌。</p><h2 id="_1-五子棋小游戏" tabindex="-1"><a class="header-anchor" href="#_1-五子棋小游戏" aria-hidden="true">#</a> 1,五子棋小游戏</h2><blockquote><p>技术栈：react+vite+TypeScript+less+taro+eslint、 stylelint 、 prettier</p></blockquote><h3 id="_1-1大致思路" tabindex="-1"><a class="header-anchor" href="#_1-1大致思路" aria-hidden="true">#</a> 1.1大致思路</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1编写静态页面
2交互
3两种角色（当前玩家和对手）
4棋盘设计
5棋子状态
6输赢规则
7悔棋和重开

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2eslint、-stylelint-、-prettier-代码格式化" tabindex="-1"><a class="header-anchor" href="#_1-2eslint、-stylelint-、-prettier-代码格式化" aria-hidden="true">#</a> 1.2eslint、 stylelint 、 prettier -- 代码格式化</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token number">1.</span> ESLint（JavaScript<span class="token operator">/</span>TypeScript 代码检查）
作用
静态代码分析工具，用于检测 JavaScript<span class="token operator">/</span>TypeScript 代码中的潜在问题和风格问题。

支持 语法错误检查、代码风格规范、最佳实践建议。

可以 自动修复 部分问题（如缩进、引号、分号等）。

适用场景
检查 <span class="token constant">JS</span><span class="token operator">/</span><span class="token constant">TS</span> 代码是否符合团队规范（如 Airbnb、Standard、Google 等风格）。

避免常见错误（如未使用的变量、未定义的变量、不安全的代码等）。

结合 React、Vue 等框架，检查特定规则（如 Hook 规则、<span class="token constant">JSX</span> 语法等）。

示例配置（<span class="token punctuation">.</span>eslintrc<span class="token punctuation">.</span>js）
javascript
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;eslint:recommended&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;plugin:react/recommended&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;semi&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;always&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 必须加分号</span>
    <span class="token string-property property">&quot;quotes&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;double&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 使用双引号</span>
    <span class="token string-property property">&quot;react-hooks/rules-of-hooks&quot;</span><span class="token operator">:</span> <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 检查 Hook 规则</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
常用命令
bash
eslint src<span class="token comment">/**/</span><span class="token operator">*</span><span class="token punctuation">.</span><span class="token punctuation">{</span>js<span class="token punctuation">,</span>jsx<span class="token punctuation">,</span>ts<span class="token punctuation">,</span>tsx<span class="token punctuation">}</span> <span class="token operator">--</span>fix  # 检查并自动修复
<span class="token number">2.</span> Stylelint（<span class="token constant">CSS</span><span class="token operator">/</span><span class="token constant">SASS</span><span class="token operator">/</span><span class="token constant">LESS</span> 样式检查）
作用
<span class="token constant">CSS</span><span class="token operator">/</span><span class="token constant">SCSS</span><span class="token operator">/</span><span class="token constant">LESS</span> 代码检查工具，用于检测样式代码的问题。

支持 语法检查、样式规范（如命名、选择器嵌套、属性顺序等）。

可以 自动修复 部分问题（如空格、分号、缩进等）。

适用场景
检查 <span class="token constant">CSS</span><span class="token operator">/</span><span class="token constant">SCSS</span><span class="token operator">/</span><span class="token constant">LESS</span> 是否符合团队规范（如 <span class="token constant">BEM</span> 命名、属性顺序等）。

避免样式错误（如无效属性、重复样式、浏览器兼容性问题）。

结合 PostCSS、<span class="token constant">SASS</span> 等预处理器使用。

示例配置（<span class="token punctuation">.</span>stylelintrc<span class="token punctuation">.</span>json）
json
<span class="token punctuation">{</span>
  <span class="token string-property property">&quot;extends&quot;</span><span class="token operator">:</span> <span class="token string">&quot;stylelint-config-standard&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;indentation&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token comment">// 缩进 2 空格</span>
    <span class="token string-property property">&quot;color-hex-case&quot;</span><span class="token operator">:</span> <span class="token string">&quot;lower&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 16进制颜色小写</span>
    <span class="token string-property property">&quot;selector-class-pattern&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^[a-z][a-z0-9]*(-[a-z0-9]+)*$&quot;</span> <span class="token comment">// BEM 命名规范</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
常用命令
bash
stylelint <span class="token string">&quot;src/**/*.{css,scss,less}&quot;</span> <span class="token operator">--</span>fix  # 检查并自动修复
<span class="token number">3.</span> Prettier（代码格式化工具）
作用
代码格式化工具，专注于 代码风格统一（如缩进、换行、引号、分号等）。

不进行代码质量检查（如变量未使用、逻辑错误等），只负责格式化。

支持 多种语言（<span class="token constant">JS</span><span class="token operator">/</span><span class="token constant">TS</span><span class="token operator">/</span><span class="token constant">HTML</span><span class="token operator">/</span><span class="token constant">CSS</span><span class="token operator">/</span><span class="token constant">JSON</span><span class="token operator">/</span>Markdown 等）。

适用场景
团队协作时，统一代码风格（避免因空格、换行、引号等引发冲突）。

与 ESLint<span class="token operator">/</span>Stylelint 配合使用，Prettier 负责格式化，ESLint 负责逻辑检查。

示例配置（<span class="token punctuation">.</span>prettierrc<span class="token punctuation">.</span>js）
javascript
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">semi</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 加分号</span>
  <span class="token literal-property property">singleQuote</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 使用双引号</span>
  <span class="token literal-property property">tabWidth</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token comment">// 缩进 2 空格</span>
  <span class="token literal-property property">trailingComma</span><span class="token operator">:</span> <span class="token string">&quot;all&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 对象/数组末尾加逗号</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
常用命令
bash
prettier <span class="token operator">--</span>write src<span class="token comment">/**/</span><span class="token operator">*</span><span class="token punctuation">.</span><span class="token punctuation">{</span>js<span class="token punctuation">,</span>jsx<span class="token punctuation">,</span>ts<span class="token punctuation">,</span>tsx<span class="token punctuation">,</span>css<span class="token punctuation">,</span>scss<span class="token punctuation">}</span>  # 格式化代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3" tabindex="-1"><a class="header-anchor" href="#_1-3" aria-hidden="true">#</a> 1.3</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>当依赖项问题
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="二-贪吃蛇" tabindex="-1"><a class="header-anchor" href="#二-贪吃蛇" aria-hidden="true">#</a> 二.贪吃蛇</h2><blockquote><p>Hooks的闭包陷阱</p></blockquote><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code>React Hooks 的闭包陷阱发生在 useState 钩子函数中的示例：
<span class="token keyword">function</span> <span class="token function">Counter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token function-variable function">handleClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token function">setCount</span><span class="token punctuation">(</span>count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token function-variable function">handleReset</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">setCount</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Count: </span><span class="token punctuation">{</span>count<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleClick<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Increment</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleReset<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Reset</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code>解决方案
<span class="token comment">//在调用set函数时获取最新的count值</span>
<span class="token keyword">const</span> <span class="token function-variable function">handleClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token function">setCount</span><span class="token punctuation">(</span><span class="token parameter">count</span> <span class="token operator">=&gt;</span> count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>


<span class="token comment">//取值通过useRef存储最新值，通过currentRef.current获取</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18),o=[p];function c(i,l){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","tarogame.html.vue"]]);export{r as default};
