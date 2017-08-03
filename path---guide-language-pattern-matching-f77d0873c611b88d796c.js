webpackJsonp([23],{"./node_modules/json-loader/index.js!./.cache/json/guide-language-pattern-matching.json":function(e,a){e.exports={data:{allFile:{edges:[{node:{relativePath:"guide/examples.md",childMarkdownRemark:{frontmatter:{title:"Examples",order:60}}}},{node:{relativePath:"guide/what-and-why.md",childMarkdownRemark:{frontmatter:{title:"What & Why",order:0}}}},{node:{relativePath:"guide/ocaml.md",childMarkdownRemark:{frontmatter:{title:"Comparison to OCaml",order:50}}}},{node:{relativePath:"guide/index.md",childMarkdownRemark:{frontmatter:{title:"The Reason Guide",order:0}}}},{node:{relativePath:"guide/javascript/converting.md",childMarkdownRemark:{frontmatter:{title:"Converting from JS",order:5}}}},{node:{relativePath:"guide/javascript/index.md",childMarkdownRemark:{frontmatter:{title:"JavaScript",order:30}}}},{node:{relativePath:"guide/javascript/quickstart.md",childMarkdownRemark:{frontmatter:{title:"Quickstart",order:0}}}},{node:{relativePath:"guide/javascript/interop.md",childMarkdownRemark:{frontmatter:{title:"Interop",order:1}}}},{node:{relativePath:"guide/javascript/libraries.md",childMarkdownRemark:{frontmatter:{title:"Libraries",order:2}}}},{node:{relativePath:"guide/editor-tools/extra-goodies.md",childMarkdownRemark:{frontmatter:{title:"Extra Goodies",order:30}}}},{node:{relativePath:"guide/editor-tools/editors-plugins.md",childMarkdownRemark:{frontmatter:{title:"Editors Plugins",order:20}}}},{node:{relativePath:"guide/editor-tools/index.md",childMarkdownRemark:{frontmatter:{title:"Editor Setup",order:10}}}},{node:{relativePath:"guide/javascript/syntax-cheatsheet.md",childMarkdownRemark:{frontmatter:{title:"Syntax Cheatsheet",order:1}}}},{node:{relativePath:"guide/editor-tools/global-installation.md",childMarkdownRemark:{frontmatter:{title:"Global Installation",order:10}}}},{node:{relativePath:"guide/native/index.md",childMarkdownRemark:{frontmatter:{title:"Native",order:40}}}},{node:{relativePath:"guide/native/convert-from-ocaml.md",childMarkdownRemark:{frontmatter:{title:"Converting from OCaml",order:4}}}},{node:{relativePath:"guide/native/quickstart.md",childMarkdownRemark:{frontmatter:{title:"Quickstart",order:0}}}},{node:{relativePath:"guide/language/destructuring.md",childMarkdownRemark:{frontmatter:{title:"Destructuring",order:130}}}},{node:{relativePath:"guide/language/boolean.md",childMarkdownRemark:{frontmatter:{title:"Boolean",order:30}}}},{node:{relativePath:"guide/language/exception.md",childMarkdownRemark:{frontmatter:{title:"Exception",order:175}}}},{node:{relativePath:"guide/language/function.md",childMarkdownRemark:{frontmatter:{title:"Function",order:100}}}},{node:{relativePath:"guide/language/if-else.md",childMarkdownRemark:{frontmatter:{title:"If-Else",order:110}}}},{node:{relativePath:"guide/language/imperative-loops.md",childMarkdownRemark:{frontmatter:{title:"Imperative Loops",order:150}}}},{node:{relativePath:"guide/language/external.md",childMarkdownRemark:{frontmatter:{title:"External",order:170}}}},{node:{relativePath:"guide/language/index.md",childMarkdownRemark:{frontmatter:{title:"Language basics",order:20}}}},{node:{relativePath:"guide/language/jsx.md",childMarkdownRemark:{frontmatter:{title:"JSX",order:160}}}},{node:{relativePath:"guide/language/integer-and-float.md",childMarkdownRemark:{frontmatter:{title:"Integer & Float",order:40}}}},{node:{relativePath:"guide/language/let-binding.md",childMarkdownRemark:{frontmatter:{title:"Let Binding",order:10}}}},{node:{relativePath:"guide/language/list-and-array.md",childMarkdownRemark:{frontmatter:{title:"List & Array",order:80}}}},{node:{relativePath:"guide/language/module.md",childMarkdownRemark:{frontmatter:{title:"Module",order:180}}}},{node:{relativePath:"guide/language/more-on-type.md",childMarkdownRemark:{frontmatter:{title:"More on Type",order:120}}}},{node:{relativePath:"guide/language/mutation.md",childMarkdownRemark:{frontmatter:{title:"Mutation",order:140}}}},{node:{relativePath:"guide/language/object.md",childMarkdownRemark:{frontmatter:{title:"Object",order:175}}}},{node:{relativePath:"guide/language/overview.md",childMarkdownRemark:{frontmatter:{title:"Overview",order:0}}}},{node:{relativePath:"guide/language/record.md",childMarkdownRemark:{frontmatter:{title:"Record",order:60}}}},{node:{relativePath:"guide/language/pattern-matching.md",childMarkdownRemark:{frontmatter:{title:"Pattern Matching!",order:135}}}},{node:{relativePath:"guide/language/string-and-char.md",childMarkdownRemark:{frontmatter:{title:"String & Char",order:20}}}},{node:{relativePath:"guide/language/tuple.md",childMarkdownRemark:{frontmatter:{title:"Tuple",order:50}}}},{node:{relativePath:"guide/language/type.md",childMarkdownRemark:{frontmatter:{title:"Type!",order:15}}}},{node:{relativePath:"guide/language/variant.md",childMarkdownRemark:{frontmatter:{title:"Variant!",order:70}}}}]},file:{relativePath:"guide/language/pattern-matching.md",childMarkdownRemark:{html:'<p><em>Make sure you\'ve read on <a href="/guide/language/variant">Variant</a> first</em>.</p>\n<p><strong>We\'re finally here</strong>! Pattern matching is one of <em>the</em> best features of the language. It\'s like destructuring, but comes with even more help from the type system.</p>\n<h3 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h3>\n<p>Consider a variant:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">type</span> payload =\n| <span class="hljs-type">BadResult</span> int\n| <span class="hljs-type">GoodResult</span> string\n| <span class="hljs-type">NoResult</span>;</code></pre>\n      </div>\n<p>While using the <code>switch</code> expression on it, you can "destructure" it:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> data = <span class="hljs-type">GoodResult</span> <span class="hljs-string">"Product shipped!"</span>;\n\n<span class="hljs-keyword">let</span> message =\n  <span class="hljs-keyword">switch</span> data {\n  | <span class="hljs-type">GoodResult</span> theMessage =&gt; <span class="hljs-string">"Success! "</span> ^ theMessage\n  | <span class="hljs-type">BadResult</span> errorCode =&gt;\n    <span class="hljs-string">"Something\'s wrong. The error code is: "</span> ^ (string_of_int errorCode)\n  };</code></pre>\n      </div>\n<p>Notice how we\'ve destructured <code>data</code> while handling each different case. The above <code>switch</code> will give you a compiler warning:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-none"><code><span class="hljs-type">Warning</span> <span class="hljs-number">8</span>: this pattern-matching <span class="hljs-keyword">is</span> not exhaustive.\n<span class="hljs-type">Here</span> <span class="hljs-keyword">is</span> an example <span class="hljs-keyword">of</span> a value that <span class="hljs-keyword">is</span> not matched:\n<span class="hljs-type">NoResult</span></code></pre>\n      </div>\n<p>Isn\'t that great? While matching on the shape of your data, the type system warned of an unhandled case. This <strong>conditional</strong> aspect is what makes it pattern matching rather than plain destructuring. Most data structures with a "<strong>if this then that</strong>" aspect works with it:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">switch</span> myList {\n| [] =&gt; print_endline <span class="hljs-string">"Empty list"</span>\n| [a, ...theRest] =&gt; print_endline (<span class="hljs-string">"list with the head value "</span> ^ a)\n};\n\n<span class="hljs-keyword">switch</span> myArray {\n| [|<span class="hljs-number">1</span>, <span class="hljs-number">2</span>|] =&gt; print_endline <span class="hljs-string">"This is an array with item 1 and 2"</span>\n| [||] =&gt; print_endline <span class="hljs-string">"This array has no element"</span>\n| <span class="hljs-number">_</span> =&gt; print_endline <span class="hljs-string">"This is an array"</span>\n}</code></pre>\n      </div>\n<p>The <code>_</code> case is a special fall-through case that allows all unmatched conditions to go to that branch.</p>\n<p>You can even switch on string, int and others. You can even have many patterns going to the same result!</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> reply =\n  <span class="hljs-keyword">switch</span> message {\n  | <span class="hljs-string">"Reason\'s pretty cool"</span> =&gt; <span class="hljs-string">"Yep"</span>\n  | <span class="hljs-string">"good night"</span> =&gt; <span class="hljs-string">"See ya!"</span>\n  | <span class="hljs-string">"hello"</span> | <span class="hljs-string">"hi"</span> | <span class="hljs-string">"heya"</span> | <span class="hljs-string">"hey"</span> =&gt; <span class="hljs-string">"hello to you too!"</span>\n  | <span class="hljs-number">_</span> =&gt; <span class="hljs-string">"Nice to meet you!"</span>\n  };</code></pre>\n      </div>\n<p>Combined with other data structures, pattern matching can produce extremely concise, compiler-verified, performant code:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> message =\n  <span class="hljs-keyword">switch</span> data {\n  | <span class="hljs-type">GoodResult</span> theMessage =&gt; <span class="hljs-string">"Success! "</span> ^ theMessage\n  | <span class="hljs-type">BadResult</span> (<span class="hljs-number">0</span> | <span class="hljs-number">1</span> | <span class="hljs-number">5</span>) =&gt; <span class="hljs-string">"Something\'s wrong. It\'s a server side problem."</span>\n  | <span class="hljs-type">BadResult</span> errorCode =&gt; <span class="hljs-string">"Unknown error occurred. Code: "</span> ^ string_of_int errorCode\n  | <span class="hljs-type">NoResult</span> =&gt; <span class="hljs-string">"Things look fine"</span>\n  };</code></pre>\n      </div>\n<h4 id="when-clauses"><a href="#when-clauses" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>When clauses</h4>\n<p>When you really need to use arbitrary logic with an otherwise clean pattern match, you can slip in some <code>when</code> clauses, which are basically <code>if</code> sugar:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> message =\n  <span class="hljs-keyword">switch</span> data {\n  | <span class="hljs-type">GoodResult</span> theMessage =&gt; ...\n  | <span class="hljs-type">BadResult</span> errorCode when isServerError errorCode =&gt; ...\n  | <span class="hljs-type">BadResult</span> errorCode =&gt; ... <span class="hljs-comment">/* otherwise */</span>\n  | <span class="hljs-type">NoResult</span> =&gt; ...\n  };</code></pre>\n      </div>\n<h3 id="tips--tricks"><a href="#tips--tricks" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Tips &#x26; Tricks</h3>\n<p>Do not abuse the fall-through <code>_</code> case too much. This prevents the compiler from sometimes telling you that you\'ve forgotten to cover a case.</p>\n<p>Whenever you\'d like to use an if-else with many branches, prefer pattern matching instead. It\'s more <a href="/guide/language/variant#design-decisions">performant</a> and concise</p>\n<p>See the example of switch + tuple <a href="/guide/language/tuple#tips--tricks">here</a>.</p>\n<h3 id="design-notes"><a href="#design-notes" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Design Notes</h3>\n<p>Pattern matching corresponds to case analysis in math. Using it for the first time might make you feel like you\'ve been missing out all these years.</p>\n<p>If you\'ve tried to refactor a big, nested if-else logic, you might realize it\'s very hard to get the logic right. On the other hand, pattern matching + tuple conceptually maps to a 2D table, where each cell can be independently filled. This ensures that whenever you need to add a case in the <code>switch</code>, you can target that and only that table cell, without messing other cells up.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">type</span> animal = <span class="hljs-type">Dog</span> | <span class="hljs-type">Cat</span> | <span class="hljs-type">Bird</span>;\n<span class="hljs-keyword">let</span> result = <span class="hljs-keyword">switch</span> (isBig, myAnimal) {\n| (<span class="hljs-literal">true</span>, <span class="hljs-type">Dog</span>) =&gt; <span class="hljs-number">1</span>\n| (<span class="hljs-literal">true</span>, <span class="hljs-type">Cat</span>) =&gt; <span class="hljs-number">2</span>\n| (<span class="hljs-literal">true</span>, <span class="hljs-type">Bird</span>) =&gt; <span class="hljs-number">3</span>\n| (<span class="hljs-literal">false</span>, <span class="hljs-type">Dog</span> | <span class="hljs-type">Cat</span>) =&gt; <span class="hljs-number">4</span>\n| (<span class="hljs-literal">false</span>, <span class="hljs-type">Bird</span>) =&gt; <span class="hljs-number">5</span>\n};</code></pre>\n      </div>\n<table>\n<thead>\n<tr>\n<th>isBig \\ myAnimal</th>\n<th>Dog</th>\n<th>Cat</th>\n<th>Bird</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>true</td>\n<td>1</td>\n<td>2</td>\n<td>3</td>\n</tr>\n<tr>\n<td>false</td>\n<td>4</td>\n<td>4</td>\n<td>5</td>\n</tr>\n</tbody>\n</table>',frontmatter:{title:"Pattern Matching!"}}}},pathContext:{section:"guide",sectionTitle:"Guide",relativePath:"guide/language/pattern-matching.md",relatedFiles:"/^guide\\/.*\\.md$/"}}}});
//# sourceMappingURL=path---guide-language-pattern-matching-f77d0873c611b88d796c.js.map