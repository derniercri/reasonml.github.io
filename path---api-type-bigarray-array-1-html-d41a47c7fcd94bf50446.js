webpackJsonp([164],{"./node_modules/json-loader/index.js!./.cache/json/api-type-bigarray-array-1-html.json":function(A,x){A.exports={data:{file:{relativePath:"api/type_Bigarray.Array1.html",childRawHtml:{content:'<div class="ocamldoc"><pre>sig\n\n&#xA0;&#xA0;type&#xA0;(&apos;a,&#xA0;&apos;b,&#xA0;&apos;c)&#xA0;t\n&#xA0;&#xA0;val&#xA0;create&#xA0;:\n&#xA0;&#xA0;&#xA0;&#xA0;(&apos;a,&#xA0;&apos;b)&#xA0;Bigarray.kind&#xA0;-&gt;\n&#xA0;&#xA0;&#xA0;&#xA0;&apos;c&#xA0;Bigarray.layout&#xA0;-&gt;&#xA0;int&#xA0;-&gt;&#xA0;(&apos;a,&#xA0;&apos;b,&#xA0;&apos;c)&#xA0;Bigarray.Array1.t\n&#xA0;&#xA0;external&#xA0;dim&#xA0;:&#xA0;(&apos;a,&#xA0;&apos;b,&#xA0;&apos;c)&#xA0;Bigarray.Array1.t&#xA0;-&gt;&#xA0;int&#xA0;=&#xA0;&quot;%caml_ba_dim_1&quot;\n&#xA0;&#xA0;external&#xA0;kind&#xA0;:&#xA0;(&apos;a,&#xA0;&apos;b,&#xA0;&apos;c)&#xA0;Bigarray.Array1.t&#xA0;-&gt;&#xA0;(&apos;a,&#xA0;&apos;b)&#xA0;Bigarray.kind\n&#xA0;&#xA0;&#xA0;&#xA0;=&#xA0;&quot;caml_ba_kind&quot;\n&#xA0;&#xA0;external&#xA0;layout&#xA0;:&#xA0;(&apos;a,&#xA0;&apos;b,&#xA0;&apos;c)&#xA0;Bigarray.Array1.t&#xA0;-&gt;&#xA0;&apos;c&#xA0;Bigarray.layout\n&#xA0;&#xA0;&#xA0;&#xA0;=&#xA0;&quot;caml_ba_layout&quot;\n&#xA0;&#xA0;external&#xA0;get&#xA0;:&#xA0;(&apos;a,&#xA0;&apos;b,&#xA0;&apos;c)&#xA0;Bigarray.Array1.t&#xA0;-&gt;&#xA0;int&#xA0;-&gt;&#xA0;&apos;a\n&#xA0;&#xA0;&#xA0;&#xA0;=&#xA0;&quot;%caml_ba_ref_1&quot;\n&#xA0;&#xA0;external&#xA0;set&#xA0;:&#xA0;(&apos;a,&#xA0;&apos;b,&#xA0;&apos;c)&#xA0;Bigarray.Array1.t&#xA0;-&gt;&#xA0;int&#xA0;-&gt;&#xA0;&apos;a&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;&#xA0;&#xA0;=&#xA0;&quot;%caml_ba_set_1&quot;\n&#xA0;&#xA0;external&#xA0;sub&#xA0;:\n&#xA0;&#xA0;&#xA0;&#xA0;(&apos;a,&#xA0;&apos;b,&#xA0;&apos;c)&#xA0;Bigarray.Array1.t&#xA0;-&gt;\n&#xA0;&#xA0;&#xA0;&#xA0;int&#xA0;-&gt;&#xA0;int&#xA0;-&gt;&#xA0;(&apos;a,&#xA0;&apos;b,&#xA0;&apos;c)&#xA0;Bigarray.Array1.t&#xA0;=&#xA0;&quot;caml_ba_sub&quot;\n&#xA0;&#xA0;external&#xA0;blit&#xA0;:\n&#xA0;&#xA0;&#xA0;&#xA0;(&apos;a,&#xA0;&apos;b,&#xA0;&apos;c)&#xA0;Bigarray.Array1.t&#xA0;-&gt;&#xA0;(&apos;a,&#xA0;&apos;b,&#xA0;&apos;c)&#xA0;Bigarray.Array1.t&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;&#xA0;&#xA0;=&#xA0;&quot;caml_ba_blit&quot;\n&#xA0;&#xA0;external&#xA0;fill&#xA0;:&#xA0;(&apos;a,&#xA0;&apos;b,&#xA0;&apos;c)&#xA0;Bigarray.Array1.t&#xA0;-&gt;&#xA0;&apos;a&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;&#xA0;&#xA0;=&#xA0;&quot;caml_ba_fill&quot;\n&#xA0;&#xA0;val&#xA0;of_array&#xA0;:\n&#xA0;&#xA0;&#xA0;&#xA0;(&apos;a,&#xA0;&apos;b)&#xA0;Bigarray.kind&#xA0;-&gt;\n&#xA0;&#xA0;&#xA0;&#xA0;&apos;c&#xA0;Bigarray.layout&#xA0;-&gt;&#xA0;&apos;a&#xA0;array&#xA0;-&gt;&#xA0;(&apos;a,&#xA0;&apos;b,&#xA0;&apos;c)&#xA0;Bigarray.Array1.t\n&#xA0;&#xA0;val&#xA0;map_file&#xA0;:\n&#xA0;&#xA0;&#xA0;&#xA0;Unix.file_descr&#xA0;-&gt;\n&#xA0;&#xA0;&#xA0;&#xA0;?pos:int64&#xA0;-&gt;\n&#xA0;&#xA0;&#xA0;&#xA0;(&apos;a,&#xA0;&apos;b)&#xA0;Bigarray.kind&#xA0;-&gt;\n&#xA0;&#xA0;&#xA0;&#xA0;&apos;c&#xA0;Bigarray.layout&#xA0;-&gt;&#xA0;bool&#xA0;-&gt;&#xA0;int&#xA0;-&gt;&#xA0;(&apos;a,&#xA0;&apos;b,&#xA0;&apos;c)&#xA0;Bigarray.Array1.t\n&#xA0;&#xA0;external&#xA0;unsafe_get&#xA0;:&#xA0;(&apos;a,&#xA0;&apos;b,&#xA0;&apos;c)&#xA0;Bigarray.Array1.t&#xA0;-&gt;&#xA0;int&#xA0;-&gt;&#xA0;&apos;a\n&#xA0;&#xA0;&#xA0;&#xA0;=&#xA0;&quot;%caml_ba_unsafe_ref_1&quot;\n&#xA0;&#xA0;external&#xA0;unsafe_set&#xA0;:&#xA0;(&apos;a,&#xA0;&apos;b,&#xA0;&apos;c)&#xA0;Bigarray.Array1.t&#xA0;-&gt;&#xA0;int&#xA0;-&gt;&#xA0;&apos;a&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;&#xA0;&#xA0;=&#xA0;&quot;%caml_ba_unsafe_set_1&quot;\nend</pre></div>'}}},pathContext:{relativePath:"api/type_Bigarray.Array1.html"}}}});
//# sourceMappingURL=path---api-type-bigarray-array-1-html-d41a47c7fcd94bf50446.js.map