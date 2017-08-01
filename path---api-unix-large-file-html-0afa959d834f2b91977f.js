webpackJsonp([61],{"./node_modules/json-loader/index.js!./.cache/json/api-unix-large-file-html.json":function(t,e){t.exports={data:{file:{relativePath:"api/Unix.LargeFile.html",childRawHtml:{content:'<div class="ocamldoc">\n<div class="navbar">&#xA0;<a class="up" href="Unix.html" title="Unix">Up</a>\n&#xA0;</div>\n<h1>Module <a href="type_Unix.LargeFile.html">Unix.LargeFile</a></h1>\n\n<pre><span class="keyword">module</span> LargeFile: sig .. end</pre><div class="info module top">\nFile operations on large files.\n  This sub-module provides 64-bit variants of the functions\n  <a href="Unix.html#VALlseek"><code class="code">Unix.lseek</code></a> (for positioning a file descriptor),\n  <a href="Unix.html#VALtruncate"><code class="code">Unix.truncate</code></a> and <a href="Unix.html#VALftruncate"><code class="code">Unix.ftruncate</code></a> (for changing the size of a file),\n  and <a href="Unix.html#VALstat"><code class="code">Unix.stat</code></a>, <a href="Unix.html#VALlstat"><code class="code">Unix.lstat</code></a> and <a href="Unix.html#VALfstat"><code class="code">Unix.fstat</code></a> (for obtaining\n  information on files).  These alternate functions represent\n  positions and sizes by 64-bit integers (type <code class="code">int64</code>) instead of\n  regular integers (type <code class="code">int</code>), thus allowing operating on files\n  whose sizes are greater than <code class="code">max_int</code>.<br>\n</div>\n<hr width="100%">\n\n<pre><span class="keyword">let</span> lseek: Unix.file_descr =&gt; int64 =&gt; Unix.seek_command =&gt; int64;\n</pre>\n<pre><span class="keyword">let</span> truncate: string =&gt; int64 =&gt; unit;\n</pre>\n<pre><span class="keyword">let</span> ftruncate: Unix.file_descr =&gt; int64 =&gt; unit;\n</pre>\n<pre><span class="keyword">type</span> stats = {</pre><table class="typetable">\n<tbody><tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>st_dev&#xA0;: int;</code></td>\n<td class="typefieldcomment" align="left" valign="top"><code>(*</code></td><td class="typefieldcomment" align="left" valign="top"><div class="info ">\nDevice number<br>\n</div>\n</td><td class="typefieldcomment" align="left" valign="bottom"><code>*)</code></td>\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>st_ino&#xA0;: int;</code></td>\n<td class="typefieldcomment" align="left" valign="top"><code>(*</code></td><td class="typefieldcomment" align="left" valign="top"><div class="info ">\nInode number<br>\n</div>\n</td><td class="typefieldcomment" align="left" valign="bottom"><code>*)</code></td>\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>st_kind&#xA0;: Unix.file_kind;</code></td>\n<td class="typefieldcomment" align="left" valign="top"><code>(*</code></td><td class="typefieldcomment" align="left" valign="top"><div class="info ">\nKind of the file<br>\n</div>\n</td><td class="typefieldcomment" align="left" valign="bottom"><code>*)</code></td>\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>st_perm&#xA0;: Unix.file_perm;</code></td>\n<td class="typefieldcomment" align="left" valign="top"><code>(*</code></td><td class="typefieldcomment" align="left" valign="top"><div class="info ">\nAccess rights<br>\n</div>\n</td><td class="typefieldcomment" align="left" valign="bottom"><code>*)</code></td>\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>st_nlink&#xA0;: int;</code></td>\n<td class="typefieldcomment" align="left" valign="top"><code>(*</code></td><td class="typefieldcomment" align="left" valign="top"><div class="info ">\nNumber of links<br>\n</div>\n</td><td class="typefieldcomment" align="left" valign="bottom"><code>*)</code></td>\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>st_uid&#xA0;: int;</code></td>\n<td class="typefieldcomment" align="left" valign="top"><code>(*</code></td><td class="typefieldcomment" align="left" valign="top"><div class="info ">\nUser id of the owner<br>\n</div>\n</td><td class="typefieldcomment" align="left" valign="bottom"><code>*)</code></td>\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>st_gid&#xA0;: int;</code></td>\n<td class="typefieldcomment" align="left" valign="top"><code>(*</code></td><td class="typefieldcomment" align="left" valign="top"><div class="info ">\nGroup ID of the file&apos;s group<br>\n</div>\n</td><td class="typefieldcomment" align="left" valign="bottom"><code>*)</code></td>\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>st_rdev&#xA0;: int;</code></td>\n<td class="typefieldcomment" align="left" valign="top"><code>(*</code></td><td class="typefieldcomment" align="left" valign="top"><div class="info ">\nDevice minor number<br>\n</div>\n</td><td class="typefieldcomment" align="left" valign="bottom"><code>*)</code></td>\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>st_size&#xA0;: int64;</code></td>\n<td class="typefieldcomment" align="left" valign="top"><code>(*</code></td><td class="typefieldcomment" align="left" valign="top"><div class="info ">\nSize in bytes<br>\n</div>\n</td><td class="typefieldcomment" align="left" valign="bottom"><code>*)</code></td>\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>st_atime&#xA0;: float;</code></td>\n<td class="typefieldcomment" align="left" valign="top"><code>(*</code></td><td class="typefieldcomment" align="left" valign="top"><div class="info ">\nLast access time<br>\n</div>\n</td><td class="typefieldcomment" align="left" valign="bottom"><code>*)</code></td>\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>st_mtime&#xA0;: float;</code></td>\n<td class="typefieldcomment" align="left" valign="top"><code>(*</code></td><td class="typefieldcomment" align="left" valign="top"><div class="info ">\nLast modification time<br>\n</div>\n</td><td class="typefieldcomment" align="left" valign="bottom"><code>*)</code></td>\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>st_ctime&#xA0;: float;</code></td>\n<td class="typefieldcomment" align="left" valign="top"><code>(*</code></td><td class="typefieldcomment" align="left" valign="top"><div class="info ">\nLast status change time<br>\n</div>\n</td><td class="typefieldcomment" align="left" valign="bottom"><code>*)</code></td>\n</tr></tbody></table>\n}\n\n\n\n<pre><span class="keyword">let</span> stat: string =&gt; stats;\n</pre>\n<pre><span class="keyword">let</span> lstat: string =&gt; stats;\n</pre>\n<pre><span class="keyword">let</span> fstat: Unix.file_descr =&gt; stats;\n</pre></div>'}}},pathContext:{relativePath:"api/Unix.LargeFile.html"}}}});
//# sourceMappingURL=path---api-unix-large-file-html-0afa959d834f2b91977f.js.map