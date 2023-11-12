import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as n,c as o,a as e,d as a,b as d,e as h}from"./app-66ff4079.js";const c={},s={class:"hint-container warning"},l=e("p",{class:"hint-container-title"},"注意",-1),_={id:"删除好友",tabindex:"-1"},p=e("a",{class:"header-anchor",href:"#删除好友","aria-hidden":"true"},"#",-1),b=h('<p>该接口用于删除好友。</p><h3 id="api-端点" tabindex="-1"><a class="header-anchor" href="#api-端点" aria-hidden="true">#</a> API 端点</h3><p><code>/delete_friend</code></p><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3><table><thead><tr><th>字段名</th><th>数据类型</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td><code>user_id</code></td><td>int64</td><td>-</td><td>好友 QQ 号</td></tr></tbody></table><h3 id="响应" tabindex="-1"><a class="header-anchor" href="#响应" aria-hidden="true">#</a> 响应</h3><p>该接口将返回处理结果，其中 <code>data</code> 字段无数据。</p>',7),u={id:"删除单向好友",tabindex:"-1"},f=e("a",{class:"header-anchor",href:"#删除单向好友","aria-hidden":"true"},"#",-1),x=h('<p>该接口用于删除单向好友。</p><h3 id="api-端点-1" tabindex="-1"><a class="header-anchor" href="#api-端点-1" aria-hidden="true">#</a> API 端点</h3><p><code>/delete_unidirectional_friend</code></p><h3 id="参数-1" tabindex="-1"><a class="header-anchor" href="#参数-1" aria-hidden="true">#</a> 参数</h3><table><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td><code>user_id</code></td><td>int64</td><td>单向好友QQ号</td></tr></tbody></table><h3 id="响应-1" tabindex="-1"><a class="header-anchor" href="#响应-1" aria-hidden="true">#</a> 响应</h3><p>该接口将返回处理结果，其中 <code>data</code> 字段无数据。</p><h2 id="撤回消息" tabindex="-1"><a class="header-anchor" href="#撤回消息" aria-hidden="true">#</a> 撤回消息</h2><p>该接口用于撤回消息。</p><h3 id="api-端点-2" tabindex="-1"><a class="header-anchor" href="#api-端点-2" aria-hidden="true">#</a> API 端点</h3><p><code>/delete_msg</code></p><h3 id="参数-2" tabindex="-1"><a class="header-anchor" href="#参数-2" aria-hidden="true">#</a> 参数</h3><table><thead><tr><th>字段</th><th>类型</th><th>必须</th><th>说明</th></tr></thead><tbody><tr><td>message_id</td><td>int32</td><td>是</td><td>消息ID</td></tr></tbody></table><h3 id="响应-2" tabindex="-1"><a class="header-anchor" href="#响应-2" aria-hidden="true">#</a> 响应</h3><p>该接口将返回处理结果，其中 <code>data</code> 字段无数据。。</p>',15);function m(y,g){const t=i("Badge");return n(),o("div",null,[e("div",s,[l,e("p",null,[a("对于 Shamrock 尚未实现的 API，会在标题添加标记 "),d(t,{text:"未实现",type:"danger",vertical:"baseline"})])]),e("h2",_,[p,a(" 删除好友 "),d(t,{text:"未实现",type:"danger"})]),b,e("h2",u,[f,a(" 删除单向好友 "),d(t,{text:"未实现",type:"danger"})]),x])}const I=r(c,[["render",m],["__file","user.html.vue"]]);export{I as default};
