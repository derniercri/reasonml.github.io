webpackJsonp([104],{"./node_modules/json-loader/index.js!./.cache/json/api-type-num-html.json":function(x,A){x.exports={data:{file:{relativePath:"api/type_Num.html",childRawHtml:{content:'<div class="ocamldoc"><pre>sig\n\n&#xA0;&#xA0;type&#xA0;num&#xA0;=&#xA0;Int&#xA0;of&#xA0;int&#xA0;|&#xA0;Big_int&#xA0;of&#xA0;Big_int.big_int&#xA0;|&#xA0;Ratio&#xA0;of&#xA0;Ratio.ratio\n&#xA0;&#xA0;val&#xA0;(&#xA0;+/&#xA0;)&#xA0;:&#xA0;Num.num&#xA0;-&gt;&#xA0;Num.num&#xA0;-&gt;&#xA0;Num.num\n&#xA0;&#xA0;val&#xA0;add_num&#xA0;:&#xA0;Num.num&#xA0;-&gt;&#xA0;Num.num&#xA0;-&gt;&#xA0;Num.num\n&#xA0;&#xA0;val&#xA0;minus_num&#xA0;:&#xA0;Num.num&#xA0;-&gt;&#xA0;Num.num\n&#xA0;&#xA0;val&#xA0;(&#xA0;-/&#xA0;)&#xA0;:&#xA0;Num.num&#xA0;-&gt;&#xA0;Num.num&#xA0;-&gt;&#xA0;Num.num\n&#xA0;&#xA0;val&#xA0;sub_num&#xA0;:&#xA0;Num.num&#xA0;-&gt;&#xA0;Num.num&#xA0;-&gt;&#xA0;Num.num\n&#xA0;&#xA0;val&#xA0;(&#xA0;*/&#xA0;)&#xA0;:&#xA0;Num.num&#xA0;-&gt;&#xA0;Num.num&#xA0;-&gt;&#xA0;Num.num\n&#xA0;&#xA0;val&#xA0;mult_num&#xA0;:&#xA0;Num.num&#xA0;-&gt;&#xA0;Num.num&#xA0;-&gt;&#xA0;Num.num\n&#xA0;&#xA0;val&#xA0;square_num&#xA0;:&#xA0;Num.num&#xA0;-&gt;&#xA0;Num.num\n&#xA0;&#xA0;val&#xA0;(&#xA0;//&#xA0;)&#xA0;:&#xA0;Num.num&#xA0;-&gt;&#xA0;Num.num&#xA0;-&gt;&#xA0;Num.num\n&#xA0;&#xA0;val&#xA0;div_num&#xA0;:&#xA0;Num.num&#xA0;-&gt;&#xA0;Num.num&#xA0;-&gt;&#xA0;Num.num\n&#xA0;&#xA0;val&#xA0;quo_num&#xA0;:&#xA0;Num.num&#xA0;-&gt;&#xA0;Num.num&#xA0;-&gt;&#xA0;Num.num\n&#xA0;&#xA0;val&#xA0;mod_num&#xA0;:&#xA0;Num.num&#xA0;-&gt;&#xA0;Num.num&#xA0;-&gt;&#xA0;Num.num\n&#xA0;&#xA0;val&#xA0;(&#xA0;**/&#xA0;)&#xA0;:&#xA0;Num.num&#xA0;-&gt;&#xA0;Num.num&#xA0;-&gt;&#xA0;Num.num\n&#xA0;&#xA0;val&#xA0;power_num&#xA0;:&#xA0;Num.num&#xA0;-&gt;&#xA0;Num.num&#xA0;-&gt;&#xA0;Num.num\n&#xA0;&#xA0;val&#xA0;abs_num&#xA0;:&#xA0;Num.num&#xA0;-&gt;&#xA0;Num.num\n&#xA0;&#xA0;val&#xA0;succ_num&#xA0;:&#xA0;Num.num&#xA0;-&gt;&#xA0;Num.num\n&#xA0;&#xA0;val&#xA0;pred_num&#xA0;:&#xA0;Num.num&#xA0;-&gt;&#xA0;Num.num\n&#xA0;&#xA0;val&#xA0;incr_num&#xA0;:&#xA0;Num.num&#xA0;Pervasives.ref&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;val&#xA0;decr_num&#xA0;:&#xA0;Num.num&#xA0;Pervasives.ref&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;val&#xA0;is_integer_num&#xA0;:&#xA0;Num.num&#xA0;-&gt;&#xA0;bool\n&#xA0;&#xA0;val&#xA0;integer_num&#xA0;:&#xA0;Num.num&#xA0;-&gt;&#xA0;Num.num\n&#xA0;&#xA0;val&#xA0;floor_num&#xA0;:&#xA0;Num.num&#xA0;-&gt;&#xA0;Num.num\n&#xA0;&#xA0;val&#xA0;round_num&#xA0;:&#xA0;Num.num&#xA0;-&gt;&#xA0;Num.num\n&#xA0;&#xA0;val&#xA0;ceiling_num&#xA0;:&#xA0;Num.num&#xA0;-&gt;&#xA0;Num.num\n&#xA0;&#xA0;val&#xA0;sign_num&#xA0;:&#xA0;Num.num&#xA0;-&gt;&#xA0;int\n&#xA0;&#xA0;val&#xA0;(&#xA0;=/&#xA0;)&#xA0;:&#xA0;Num.num&#xA0;-&gt;&#xA0;Num.num&#xA0;-&gt;&#xA0;bool\n&#xA0;&#xA0;val&#xA0;(&#xA0;&lt;/&#xA0;)&#xA0;:&#xA0;Num.num&#xA0;-&gt;&#xA0;Num.num&#xA0;-&gt;&#xA0;bool\n&#xA0;&#xA0;val&#xA0;(&#xA0;&gt;/&#xA0;)&#xA0;:&#xA0;Num.num&#xA0;-&gt;&#xA0;Num.num&#xA0;-&gt;&#xA0;bool\n&#xA0;&#xA0;val&#xA0;(&#xA0;&lt;=/&#xA0;)&#xA0;:&#xA0;Num.num&#xA0;-&gt;&#xA0;Num.num&#xA0;-&gt;&#xA0;bool\n&#xA0;&#xA0;val&#xA0;(&#xA0;&gt;=/&#xA0;)&#xA0;:&#xA0;Num.num&#xA0;-&gt;&#xA0;Num.num&#xA0;-&gt;&#xA0;bool\n&#xA0;&#xA0;val&#xA0;(&#xA0;&lt;&gt;/&#xA0;)&#xA0;:&#xA0;Num.num&#xA0;-&gt;&#xA0;Num.num&#xA0;-&gt;&#xA0;bool\n&#xA0;&#xA0;val&#xA0;eq_num&#xA0;:&#xA0;Num.num&#xA0;-&gt;&#xA0;Num.num&#xA0;-&gt;&#xA0;bool\n&#xA0;&#xA0;val&#xA0;lt_num&#xA0;:&#xA0;Num.num&#xA0;-&gt;&#xA0;Num.num&#xA0;-&gt;&#xA0;bool\n&#xA0;&#xA0;val&#xA0;le_num&#xA0;:&#xA0;Num.num&#xA0;-&gt;&#xA0;Num.num&#xA0;-&gt;&#xA0;bool\n&#xA0;&#xA0;val&#xA0;gt_num&#xA0;:&#xA0;Num.num&#xA0;-&gt;&#xA0;Num.num&#xA0;-&gt;&#xA0;bool\n&#xA0;&#xA0;val&#xA0;ge_num&#xA0;:&#xA0;Num.num&#xA0;-&gt;&#xA0;Num.num&#xA0;-&gt;&#xA0;bool\n&#xA0;&#xA0;val&#xA0;compare_num&#xA0;:&#xA0;Num.num&#xA0;-&gt;&#xA0;Num.num&#xA0;-&gt;&#xA0;int\n&#xA0;&#xA0;val&#xA0;max_num&#xA0;:&#xA0;Num.num&#xA0;-&gt;&#xA0;Num.num&#xA0;-&gt;&#xA0;Num.num\n&#xA0;&#xA0;val&#xA0;min_num&#xA0;:&#xA0;Num.num&#xA0;-&gt;&#xA0;Num.num&#xA0;-&gt;&#xA0;Num.num\n&#xA0;&#xA0;val&#xA0;string_of_num&#xA0;:&#xA0;Num.num&#xA0;-&gt;&#xA0;string\n&#xA0;&#xA0;val&#xA0;approx_num_fix&#xA0;:&#xA0;int&#xA0;-&gt;&#xA0;Num.num&#xA0;-&gt;&#xA0;string\n&#xA0;&#xA0;val&#xA0;approx_num_exp&#xA0;:&#xA0;int&#xA0;-&gt;&#xA0;Num.num&#xA0;-&gt;&#xA0;string\n&#xA0;&#xA0;val&#xA0;num_of_string&#xA0;:&#xA0;string&#xA0;-&gt;&#xA0;Num.num\n&#xA0;&#xA0;val&#xA0;int_of_num&#xA0;:&#xA0;Num.num&#xA0;-&gt;&#xA0;int\n&#xA0;&#xA0;val&#xA0;num_of_int&#xA0;:&#xA0;int&#xA0;-&gt;&#xA0;Num.num\n&#xA0;&#xA0;val&#xA0;nat_of_num&#xA0;:&#xA0;Num.num&#xA0;-&gt;&#xA0;Nat.nat\n&#xA0;&#xA0;val&#xA0;num_of_nat&#xA0;:&#xA0;Nat.nat&#xA0;-&gt;&#xA0;Num.num\n&#xA0;&#xA0;val&#xA0;num_of_big_int&#xA0;:&#xA0;Big_int.big_int&#xA0;-&gt;&#xA0;Num.num\n&#xA0;&#xA0;val&#xA0;big_int_of_num&#xA0;:&#xA0;Num.num&#xA0;-&gt;&#xA0;Big_int.big_int\n&#xA0;&#xA0;val&#xA0;ratio_of_num&#xA0;:&#xA0;Num.num&#xA0;-&gt;&#xA0;Ratio.ratio\n&#xA0;&#xA0;val&#xA0;num_of_ratio&#xA0;:&#xA0;Ratio.ratio&#xA0;-&gt;&#xA0;Num.num\n&#xA0;&#xA0;val&#xA0;float_of_num&#xA0;:&#xA0;Num.num&#xA0;-&gt;&#xA0;float\nend</pre></div>'}}},pathContext:{relativePath:"api/type_Num.html"}}}});
//# sourceMappingURL=path---api-type-num-html-01d704d69d9f1f3d88bf.js.map