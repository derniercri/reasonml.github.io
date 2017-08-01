webpackJsonp([208],{"./node_modules/json-loader/index.js!./.cache/json/api-set-ordered-type-html.json":function(e,t){e.exports={data:{file:{relativePath:"api/Set.OrderedType.html",childRawHtml:{content:'<div class="ocamldoc">\n<div class="navbar">&#xA0;<a class="up" href="Set.html" title="Set">Up</a>\n&#xA0;<a class="post" href="Set.S.html" title="Set.S">Next</a>\n</div>\n<h1>Module type <a href="type_Set.OrderedType.html">Set.OrderedType</a></h1>\n\n<pre><span class="keyword">module</span> type OrderedType = sig .. end</pre><div class="info modtype top">\nInput signature of the functor <a href="Set.Make.html"><code class="code">Set.Make</code></a>.<br>\n</div>\n<hr width="100%">\n\n<pre><span class="keyword">type</span> t;\n</pre>\n<div class="info ">\nThe type of the set elements.<br>\n</div>\n\n\n<pre><span class="keyword">let</span> compare: t =&gt; t =&gt; int;\n</pre><div class="info ">\nA total ordering function over the set elements.\n          This is a two-argument function <code class="code">f</code> such that\n          <code class="code">f e1 e2</code> is zero if the elements <code class="code">e1</code> and <code class="code">e2</code> are equal,\n          <code class="code">f e1 e2</code> is strictly negative if <code class="code">e1</code> is smaller than <code class="code">e2</code>,\n          and <code class="code">f e1 e2</code> is strictly positive if <code class="code">e1</code> is greater than <code class="code">e2</code>.\n          Example: a suitable ordering function is the generic structural\n          comparison function <a href="Pervasives.html#VALcompare"><code class="code">Pervasives.compare</code></a>.<br>\n</div>\n</div>'}}},pathContext:{relativePath:"api/Set.OrderedType.html"}}}});
//# sourceMappingURL=path---api-set-ordered-type-html-57bd651c30c64733225d.js.map