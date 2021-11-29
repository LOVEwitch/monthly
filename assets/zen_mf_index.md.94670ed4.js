import{_ as n,c as a,o as s,e}from"./app.fc0211f0.js";const m='{"title":"Webpack module fedoration","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4F7F\u7528","slug":"\u4F7F\u7528"},{"level":3,"title":"\u6784\u5EFA\u6A21\u5757","slug":"\u6784\u5EFA\u6A21\u5757"},{"level":3,"title":"\u58F0\u660E\u6A21\u5757\uFF08\u53EF\u9009\uFF09","slug":"\u58F0\u660E\u6A21\u5757\uFF08\u53EF\u9009\uFF09"},{"level":3,"title":"\u4F7F\u7528\u6A21\u5757","slug":"\u4F7F\u7528\u6A21\u5757"},{"level":2,"title":"\u4E0E\u5FAE\u524D\u7AEF\u76F8\u6BD4","slug":"\u4E0E\u5FAE\u524D\u7AEF\u76F8\u6BD4"},{"level":2,"title":"DX","slug":"dx"},{"level":2,"title":"Refs","slug":"refs"}],"relativePath":"zen/mf/index.md","lastUpdated":1638151703347}',t={},p=e(`<h1 id="webpack-module-fedoration" tabindex="-1">Webpack module fedoration <a class="header-anchor" href="#webpack-module-fedoration" aria-hidden="true">#</a></h1><p>module fedoration \u662F webpack 5 \u63A8\u51FA\u7684\u4E00\u9879\u5168\u65B0\u529F\u80FD\u3002\u5B83\u80FD\u591F\u4E3A webpack \u63D0\u4F9B\u8FDC\u7A0B\u6A21\u5757</p><p>\u4EE5\u4E0B\u4F7F\u7528 mf \u7B80\u79F0</p><h2 id="\u4F7F\u7528" tabindex="-1">\u4F7F\u7528 <a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a></h2><h3 id="\u6784\u5EFA\u6A21\u5757" tabindex="-1">\u6784\u5EFA\u6A21\u5757 <a class="header-anchor" href="#\u6784\u5EFA\u6A21\u5757" aria-hidden="true">#</a></h3><p>\u6307\u5B9A\u8FDC\u7A0B\u5165\u53E3\u6587\u4EF6 scope \u4EE5\u53CA\u8981\u66B4\u9732\u7684\u6A21\u5757</p><div class="language-jsx"><pre><code><span class="token comment">// shell</span>
<span class="token keyword">new</span> <span class="token class-name">ModuleFederationPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&quot;shell&quot;</span><span class="token punctuation">,</span>
  filename<span class="token operator">:</span> <span class="token string">&quot;remoteEntry.js&quot;</span><span class="token punctuation">,</span>
  exposes<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;./shell&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./src/Shell.tsx&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
</code></pre></div><h3 id="\u58F0\u660E\u6A21\u5757\uFF08\u53EF\u9009\uFF09" tabindex="-1">\u58F0\u660E\u6A21\u5757\uFF08\u53EF\u9009\uFF09 <a class="header-anchor" href="#\u58F0\u660E\u6A21\u5757\uFF08\u53EF\u9009\uFF09" aria-hidden="true">#</a></h3><p>\u9700\u8981\u5728 plugin \u4E2D\u58F0\u660E\u6240\u7528\u7684\u8FDC\u7A0B\u6A21\u5757</p><div class="language-jsx"><pre><code><span class="token comment">// app</span>
<span class="token keyword">new</span> <span class="token class-name">ModuleFederationPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  remotes<span class="token operator">:</span> <span class="token punctuation">{</span>
    shell<span class="token operator">:</span> <span class="token string">&quot;shell@https://cl-shell.vercel.app/remoteEntry.js&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
</code></pre></div><h3 id="\u4F7F\u7528\u6A21\u5757" tabindex="-1">\u4F7F\u7528\u6A21\u5757 <a class="header-anchor" href="#\u4F7F\u7528\u6A21\u5757" aria-hidden="true">#</a></h3><p>\u4E00\u822C\u4F1A\u4F7F\u7528\u5F02\u6B65\u52A0\u8F7D\u6765\u6D88\u8D39\u6A21\u5757</p><div class="language-jsx"><pre><code><span class="token keyword">const</span> Shell <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">lazy</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&quot;shell/shell&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><div class="language-jsx"><pre><code><span class="token keyword">import</span> shell <span class="token keyword">from</span> <span class="token string">&quot;shell/shell&quot;</span><span class="token punctuation">;</span>
</code></pre></div><p>\u539F\u751F\u4E0D\u652F\u6301\u540C\u6B65\u52A0\u8F7D\uFF0C\u9700\u8981\u793E\u533A <a href="https://www.npmjs.com/package/external-remotes-plugin" target="_blank" rel="noopener noreferrer">plugin</a> \u652F\u6301</p><p><a href="https://github.com/webpack/webpack/issues/12258" target="_blank" rel="noopener noreferrer">https://github.com/webpack/webpack/issues/12258</a></p><p>\u5728\u4E0D\u4F7F\u7528 ModuleFederationPlugin \u9009\u62E9\u5728\u8FD0\u884C\u65F6\u52A0\u8F7D mf \u6A21\u5757\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528\u4E0B\u9762 API</p><div class="language-jsx"><pre><code><span class="token comment">// \u52A0\u8F7D remoteEntry.js \u4E4B\u540E</span>
<span class="token comment">// scope -&gt; name</span>
<span class="token comment">// module -&gt; expose</span>
<span class="token keyword">function</span> <span class="token function">loadComponent</span><span class="token punctuation">(</span><span class="token parameter">scope<span class="token operator">:</span> any<span class="token punctuation">,</span> module<span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">await</span> <span class="token function">__webpack_init_sharing__</span><span class="token punctuation">(</span><span class="token string">&quot;default&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> container <span class="token operator">=</span> window<span class="token punctuation">[</span>scope<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">await</span> container<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span>__webpack_share_scopes__<span class="token punctuation">.</span>default<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> factory <span class="token operator">=</span> <span class="token keyword">await</span> window<span class="token punctuation">[</span>cpm<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>module<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> Module <span class="token operator">=</span> <span class="token function">factory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> Module<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u4E0E\u5FAE\u524D\u7AEF\u76F8\u6BD4" tabindex="-1">\u4E0E\u5FAE\u524D\u7AEF\u76F8\u6BD4 <a class="header-anchor" href="#\u4E0E\u5FAE\u524D\u7AEF\u76F8\u6BD4" aria-hidden="true">#</a></h2><p>mf \u7ECF\u5E38\u4E0E\u5FAE\u524D\u7AEF\u76F8\u63D0\u5E76\u8BBA\uFF0C\u4F46\u5176\u5B9E \u5FAE\u524D\u7AEF\u4E00\u822C\u503E\u5411\u4E8E\u5C06 app \u89C6\u4E3A\u57FA\u7840\u9897\u7C92\u5EA6\uFF0C\u800C mf \u5219\u5C06\u66F4\u52A0\u7EC6\u7684\u6A21\u5757\u89C6\u4E3A\u57FA\u7840\u9897\u7C92\u5EA6\u3002\u4E0E \u8BF8\u5982 qiankun \u4E4B\u7C7B\u7684\u5FAE\u524D\u7AEF\u6846\u67B6\u76F8\u6BD4\uFF0Cmf</p><ul><li>\u65E0 js \u6C99\u76D2</li><li>\u65E0\u6837\u5F0F\u9694\u79BB</li></ul><p>\u4F46\u662F mf \u5728 <strong>\u4F9D\u8D56\u5171\u4EAB</strong> \u4E0A\u6709\u7740\u4F20\u7EDF\u5FAE\u524D\u7AEF\u505A\u4E0D\u5230\u7684\u80FD\u529B\uFF0C\u4F20\u7EDF\u5FAE\u524D\u7AEF\u6846\u67B6\u8981\u60F3\u5171\u4EAB\u4F9D\u8D56\uFF0C\u4E00\u822C\u505A\u6CD5\u662F\u4F7F\u7528 external + CDN\uFF0C\u4F46\u662F\u8FD9\u4F1A\u6C61\u67D3\u5168\u5C40\u53D8\u91CF\uFF0C\u4E00\u65E6\u78B0\u5230\u50CF Vue2 \u548C Vue3 \u5171\u5B58\u7684\u573A\u666F\u5C31\u65E0\u529B\u89E3\u51B3\u3002\u53E6\u5916\u8FD8\u9700\u53BB\u4FDD\u8BC1\u6D88\u8D39\u65B9\u63D0\u4F9B\u7684\u76F8\u5E94\u7684\u4F9D\u8D56\u3002\u800C mf \u5219\u4F1A\u9ED8\u8BA4\u4E3A shared \u4F9D\u8D56\u5728\u6BCF\u4E2A\u5E94\u7528\u6253\u5305\u4E00\u4EFD fallback \u4F9D\u8D56\uFF0C\u5C3D\u7BA1\u5728\u4F7F\u7528\u7684\u65F6\u5019\u53EF\u80FD\u4E0D\u4F1A\u52A0\u8F7D\uFF0C\u4F46\u662F\u80FD\u786E\u4FDD\u7A33\u5B9A\u3002</p><div class="language-jsx"><pre><code><span class="token keyword">new</span> <span class="token class-name">ModuleFederationPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  shared<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;react&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;lodash&#39;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
</code></pre></div><h2 id="dx" tabindex="-1">DX <a class="header-anchor" href="#dx" aria-hidden="true">#</a></h2><p>\u8DE8\u9879\u76EE\u7684\u5F00\u53D1\uFF0C\u8FDC\u7A0B\u6A21\u5757\u5BF9 TypeScript \u7684\u6D88\u8D39\u7AEF\u6781\u5176\u4E0D\u53CB\u597D\uFF0C\u4F20\u7EDF\u5FAE\u524D\u7AEF\u66B4\u9732\u7ED9\u6D88\u8D39\u8005\u7684 API \u8F83\u5C11\uFF0C\u6240\u4EE5\u95EE\u9898\u4E0D\u5927\u3002\u4F46\u662F mf \u5219\u53EF\u80FD\u66B4\u9732\u6BD4\u8F83\u591A\u7684 API\uFF0C\u8FD9\u65F6\u6211\u4EEC\u5FC5\u987B\u63D0\u4F9B d.ts \u6765\u63D0\u5347\u5F00\u53D1\u4F53\u9A8C\uFF0C\u76EE\u524D\u5B98\u65B9\u65E0\u76F8\u5E94\u65B9\u6848\uFF0C\u9700\u8981\u5468\u8FB9\u5DE5\u5177\u6765\u5F25\u8865\u8FD9\u4E00\u7F3A\u9677 <a href="https://github.com/efoxTeam/emp/blob/main/packages/emp-tune-dts-plugin/README-zh_CN.md" target="_blank" rel="noopener noreferrer">@efox/emp-tune-dts-plugin</a></p><h2 id="refs" tabindex="-1">Refs <a class="header-anchor" href="#refs" aria-hidden="true">#</a></h2><ul><li><a href="https://github.com/module-federation/module-federation-examples/issues/566" target="_blank" rel="noopener noreferrer">https://github.com/module-federation/module-federation-examples/issues/566</a></li></ul>`,27),o=[p];function c(l,u,r,i,k,d){return s(),a("div",null,o)}var f=n(t,[["render",c]]);export{m as __pageData,f as default};
