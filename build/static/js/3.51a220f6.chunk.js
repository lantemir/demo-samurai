(this["webpackJsonpreact-kabzda-1"]=this["webpackJsonpreact-kabzda-1"]||[]).push([[3],{293:function(e,t,a){e.exports={content:"ProfileInfo_content__2t9Ni",descriptionBlock:"ProfileInfo_descriptionBlock__3g_FI"}},294:function(e,t,a){},295:function(e,t,a){e.exports={postsBlock:"MyPosts_postsBlock__fPe8k",posts:"MyPosts_posts__WPb7O"}},296:function(e,t,a){e.exports={item:"Post_item__29pAT"}},297:function(e,t,a){"use strict";a.r(t);var n=a(27),s=a(28),o=a(30),r=a(29),u=a(0),i=a.n(u),c=(a(294),a(94)),l=a(39),p=a(295),m=a.n(p),f=a(296),d=a.n(f),b=function(e){return i.a.createElement("div",{className:d.a.item},i.a.createElement("img",{src:"https://www.kinonews.ru/insimgs/2019/newsimg/newsimg87089.jpg"}),e.message,i.a.createElement("div",null,i.a.createElement("span",null,"like ",e.likesCount)))},h=a(126),E=a(127),g=a(74),v=a(64),P=Object(g.a)(10),k=i.a.memo((function(e){var t=Object(l.a)(e.posts).reverse().map((function(e){return i.a.createElement(b,{message:e.message,likesCount:e.likesCount,id:e.id})}));i.a.createRef();return i.a.createElement("div",{className:m.a.postsBlock},i.a.createElement("h3",null,"My posts"),i.a.createElement(j,{onSubmit:function(t){e.addPost(t.newPostText)}}),i.a.createElement("div",{className:m.a.posts},t))})),j=Object(E.a)({form:"ProfileAddNewPostForm"})((function(e){return i.a.createElement("form",{onSubmit:e.handleSubmit},i.a.createElement("div",null,i.a.createElement(h.a,{name:"newPostText",component:v.b,placeholder:"Post message",validate:[g.b,P]})),i.a.createElement("div",null,i.a.createElement("button",null,"Add post")))})),O=k,_=a(9),S=Object(_.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),(function(e){return{addPost:function(t){e(Object(c.a)(t))}}}))(O),w=a(293),x=a.n(w),y=a(38),B=(i.a.Component,a(128)),C=function(e){var t=Object(u.useState)(!1),a=Object(B.a)(t,2),n=a[0],s=a[1],o=Object(u.useState)(e.status),r=Object(B.a)(o,2),c=r[0],l=r[1];Object(u.useEffect)((function(){l(e.status)}),[e.status]);return i.a.createElement("div",null,!n&&i.a.createElement("div",null,i.a.createElement("span",{onDoubleClick:function(){s(!0)}},e.status||"----"," ")),n&&i.a.createElement("div",null,i.a.createElement("input",{onChange:function(e){l(e.currentTarget.value)},autoFocus:!0,onBlur:function(){s(!1),e.updateStatus(c)},value:c})))},I=function(e){var t=e.profile,a=e.status,n=e.updateStatus;return t?i.a.createElement("div",null,i.a.createElement("div",{className:x.a.descriptionBlock},i.a.createElement("img",{src:t.photos.large}),i.a.createElement(C,{status:a,updateStatus:n}))):i.a.createElement(y.a,null)},N=function(e){return i.a.createElement("div",null,i.a.createElement(I,{profile:e.profile,status:e.status,updateStatus:e.updateStatus}),i.a.createElement(S,null))},T=(a(73),a(23)),A=a(7),z=(a(139),function(e){Object(o.a)(a,e);var t=Object(r.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"render",value:function(){return i.a.createElement(N,Object.assign({},this.props,{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),a}(i.a.Component));t.default=Object(A.d)(Object(_.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{getUserProfile:c.d,getStatus:c.c,updateStatus:c.e}),T.f)(z)}}]);
//# sourceMappingURL=3.51a220f6.chunk.js.map