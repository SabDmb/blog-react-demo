(this.webpackJsonpproject=this.webpackJsonpproject||[]).push([[0],{143:function(t,e,a){},144:function(t,e,a){},179:function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),r=a(34),i=a.n(r),c=(a(143),a(144),a(14)),s=a(230),l=a(232),m=a(239),d=a(240),p=a(7),j=a(17),b=a(236),u=a(120),f=a(234),g=a(228),x=a(115),h=a.n(x),O=a(30),v=a.n(O),N=a(1),w=Object(l.a)((function(t){return{root:{color:"#fff !important",fontSize:"2rem !important"},container:{background:"rgba(0, 0, 0, 0.5)!important",maxwidth:"100%"},item:{marginLeft:"0.5rem !important"}}}));function F(){var t=w(),e=n.useState(null),a=Object(p.a)(e,2),o=a[0],r=a[1],i=Boolean(o),c=function(){r(null)},s=Object(n.useState)([]),l=Object(p.a)(s,2),m=l[0],d=l[1],x=Object(n.useState)(!1),O=Object(p.a)(x,2),F=O[0],y=O[1];return Object(n.useEffect)((function(){v.a.get("https://blog-react-demo.000webhostapp.com/wp-json/wp-api-menus/v2/menus/16").then((function(t){d(t.data),y(!0)}))}),[]),Object(N.jsxs)("div",{children:[Object(N.jsx)(b.a,{className:t.root,id:"fade-button","aria-controls":"fade-menu","aria-haspopup":"true","aria-expanded":i?"true":void 0,onClick:function(t){r(t.currentTarget)},children:Object(N.jsx)(h.a,{})}),Object(N.jsxs)(u.a,{className:t.container,id:"fade-menu",MenuListProps:{"aria-labelledby":"fade-button"},anchorEl:o,open:i,onClose:c,TransitionComponent:g.a,children:[Object(N.jsx)(f.a,{className:t.item,component:j.b,to:"/",children:"Home"}),!1===F?"":m.items.map((function(e,a){return Object(N.jsx)(f.a,{className:t.item,onClick:c,component:j.b,to:"/".concat(e.object_id),children:e.title},a)}))]})]})}var y=a(116),S=a.n(y),k=Object(l.a)((function(t){return{root:{color:"#fff !important",fontSize:"2rem !important"},container:{background:"rgba(0, 0, 0, 0.5)!important",maxwidth:"100%"},item:{marginLeft:"0.5rem !important"}}}));function C(){var t=k(),e=n.useState(null),a=Object(p.a)(e,2),o=a[0],r=a[1],i=Boolean(o),c=function(){r(null)};return Object(N.jsxs)("div",{children:[Object(N.jsx)(b.a,{className:t.root,id:"fade-button","aria-controls":"fade-menu","aria-haspopup":"true","aria-expanded":i?"true":void 0,onClick:function(t){r(t.currentTarget)},children:Object(N.jsx)(S.a,{})}),Object(N.jsxs)(u.a,{className:t.container,id:"fade-menu",MenuListProps:{"aria-labelledby":"fade-button"},anchorEl:o,open:i,onClose:c,TransitionComponent:g.a,children:[Object(N.jsx)(f.a,{className:t.item,onClick:c,component:j.b,to:"/sign-in",children:"Accedi"}),Object(N.jsx)(f.a,{className:t.item,onClick:c,component:j.b,to:"/sign-up",children:"Registrati"})]})]})}var z=Object(l.a)((function(t){return{root:{display:"flex",justifyContent:"center",alignItems:"center"},appbar:{background:"none !important",fontFamily:"Nunito"},appbarTitle:{flexGrow:"1",color:"#5AFF3D"},appbarWrapper:{width:"80%",margin:"0 auto"},icon:{color:"#fff",fontSize:"2rem"},colorText:{color:"#fff"},container:{textAlign:"center"},title:{color:"#fff",fontFamily:"Nunito",fontSize:"4.5rem"},goDown:{color:"#5AFF3D",fontSize:"4rem !important"}}}));function A(){var t=z();return Object(N.jsx)("div",{className:t.root,id:"header",children:Object(N.jsx)(m.a,{className:t.appbar,elevation:0,children:Object(N.jsxs)(d.a,{className:t.appbarWrapper,children:[Object(N.jsxs)("h1",{className:t.appbarTitle,children:["Voyager",Object(N.jsx)("span",{className:t.colorText,children:" . "})]}),Object(N.jsx)(F,{}),Object(N.jsx)(C,{})]})})})}var D=a(237),T=a(231),I=a(241),W=Object(l.a)({root:{width:650,background:"rgba(0, 0, 0, 0.5)!important",margin:" 45px 15px",padding:"25px",borderRadius:"25px"},title:{color:"#fff !important",fontFamily:"Nunito !important",fontWeight:"bold !important",fontSize:"2rem !important",width:"95% !important"},green:{color:"#5AFF3D!important"},text:{color:"#fff !important",fontFamily:"Nunito !important",fontWeight:"bold !important",width:"95% !important",paddingTop:"15px !important",paddingBottom:"15px !important"},bottom:{backgroundColor:"#fff!important",fontFamily:"Nunito !important",fontWeight:"bold !important",fontSize:"0.9rem !important",color:"#000 !important",margin:"10px !important",padding:"0.5rem !important",textAlign:"center"},bgGreen:{backgroundColor:"#5AFF3D!important",fontFamily:"Nunito !important",fontWeight:"bold !important",fontSize:"0.9rem !important",color:"#000 !important",margin:"10px !important",padding:"0.5rem !important",textAlign:"center"}});function E(t){var e=t.handleInput,a=t.signIn,n=W();return Object(N.jsxs)(D.a,{className:n.root,component:"form",sx:{"& .MuiTextField-root":{m:1,width:"25ch"}},noValidate:!0,autoComplete:"off",children:[Object(N.jsxs)(I.a,{gutterBottom:!0,variant:"h5",component:"h2",className:n.title,children:[" Accedi al tuo Account ",Object(N.jsx)("span",{className:n.green,children:"Voyager"}),"."]}),Object(N.jsx)("div",{children:Object(N.jsx)(T.a,{className:n.text,id:"standard-textarea",label:"Email",name:"username",placeholder:"email",multiline:!0,variant:"standard",onChange:e})}),Object(N.jsx)("div",{children:Object(N.jsx)(T.a,{className:n.text,id:"standard-textarea",label:"Password",name:"password",placeholder:"Password",multiline:!0,variant:"standard",onChange:e})}),Object(N.jsx)(b.a,{component:j.b,to:"/sign-up",className:n.bottom,size:"small",children:"Crea un Account"}),Object(N.jsx)(b.a,{className:n.bgGreen,size:"small",onClick:function(){return a()},children:"Accedi"})]})}function _(t){var e=Object(n.useState)(!1),a=Object(p.a)(e,2),o=a[0],r=a[1];return Object(n.useLayoutEffect)((function(){function e(){var e=window.document.getElementById(t).offsetHeight;window.pageYOffset>.7*e&&r(!0)}return window.addEventListener("scroll",e),e(),function(){return window.removeEventListener("scroll",e)}}),[t]),o}var L=[],B=Object(n.createContext)(L),H=function(t){var e=Object(n.useState)(L),a=Object(p.a)(e,2),o=a[0],r=a[1];return Object(N.jsx)(B.Provider,{value:[o,r],children:t.children})},P=Object(l.a)((function(t){return{root:{minHeight:"100vh",display:"flex",flexWrap:"wrap",flexDirection:"row",justifyContent:"center",alignItems:"center"}}}));function G(){var t=P(),e=_("header"),a=Object(n.useContext)(B),o=Object(p.a)(a,2),r=o[0],i=o[1],s=Object(n.useState)({}),l=Object(p.a)(s,2),m=l[0],d=l[1],j=Object(c.f)();Object(n.useEffect)((function(){r===[]&&j("/")}),[r,j]);return Object(N.jsx)("div",{className:t.root,id:"place-to-visit",children:Object(N.jsx)(E,{handleInput:function(t){var e=Object.assign({},m);e[t.target.name]=t.target.value,console.log(e),d(e)},signIn:function(){v.a.post("https://blog-react-demo.000webhostapp.com/wp-json/jwt-auth/v1/token",m).then((function(t){console.log(t.data),i(t.data),sessionStorage.setItem("token",t.data.token),sessionStorage.setItem("user_nicename",t.data.user_nicename),sessionStorage.setItem("user_email",t.data.user_email),sessionStorage.setItem("user_display_name",t.data.user_display_name)})).catch((function(t){console.log(t)}))},checked:e})})}var M=Object(l.a)({root:{height:"100vh",backgroundImage:"url(".concat("/blog-react-demo/assets/log.jpeg",")"),backgroundRepeat:"no-repeat",backgroundSize:"cover"}});function R(){var t=M();return Object(N.jsxs)("div",{className:t.root,children:[Object(N.jsx)(s.a,{}),Object(N.jsx)(A,{}),Object(N.jsx)(G,{})]})}var V=Object(l.a)({root:{width:650,background:"rgba(0, 0, 0, 0.5)!important",margin:" 45px 15px",padding:"25px",color:"#fff",borderRadius:"25px"},title:{color:"#fff !important",fontFamily:"Nunito !important",fontWeight:"bold !important",fontSize:"2rem !important",width:"95% !important"},green:{color:"#5AFF3D!important"},text:{color:"#fff !important",fontFamily:"Nunito !important",fontWeight:"bold !important",width:"95% !important",paddingTop:"15px !important",paddingBottom:"15px !important"},bottom:{backgroundColor:"#fff!important",fontFamily:"Nunito !important",fontWeight:"bold !important",fontSize:"0.9rem !important",color:"#000 !important",margin:"10px !important",padding:"0.5rem !important",textAlign:"center"},bgGreen:{backgroundColor:"#5AFF3D!important",fontFamily:"Nunito !important",fontWeight:"bold !important",fontSize:"0.9rem !important",color:"#000 !important",margin:"10px !important",padding:"0.5rem !important",textAlign:"center"}});function U(t){var e=t.handleNewUser,a=t.signUp,n=V();return Object(N.jsxs)(D.a,{className:n.root,component:"form",sx:{"& .MuiTextField-root":{m:1,width:"25ch"}},noValidate:!0,autoComplete:"off",children:[Object(N.jsxs)(I.a,{gutterBottom:!0,variant:"h5",component:"h2",className:n.title,children:[" Crea il tuo Account ",Object(N.jsx)("span",{className:n.green,children:"Voyager"}),"."]}),Object(N.jsx)("div",{children:Object(N.jsx)(T.a,{className:n.text,id:"standard-textarea",label:"Nome",placeholder:"Nome",name:"username",multiline:!0,variant:"standard",onChange:e})}),Object(N.jsx)("div",{children:Object(N.jsx)(T.a,{className:n.text,id:"standard-textarea",label:"Email",placeholder:"Email",name:"email",type:"email",multiline:!0,variant:"standard",onChange:e})}),Object(N.jsx)("div",{children:Object(N.jsx)(T.a,{className:n.text,id:"standard-textarea",label:"Password",placeholder:"Password",name:"password",multiline:!0,variant:"standard",onChange:e})}),Object(N.jsx)(b.a,{component:j.b,to:"/sign-in",className:n.bottom,size:"small",children:"Accedi"}),Object(N.jsx)(b.a,{component:j.b,to:"/",className:n.bgGreen,onClick:function(){return a()},size:"small",children:"Registrati"})]})}var J=Object(l.a)((function(t){return{root:{minHeight:"100vh",display:"flex",flexWrap:"wrap",flexDirection:"row",justifyContent:"center",alignItems:"center"}}}));function Y(){var t=J(),e=_("header"),a=Object(n.useState)({}),o=Object(p.a)(a,2),r=o[0],i=o[1],s=Object(c.f)();return Object(N.jsx)("div",{className:t.root,id:"place-to-visit",children:Object(N.jsx)(U,{handleNewUser:function(t){var e=Object.assign({},r);e[t.target.name]=t.target.value,i(e),console.log(e)},signUp:function(){v.a.post("https://blog-react-demo.000webhostapp.com/wp-json/wp/v2/users/register",r).then((function(t){console.log(t.data),s("/")}))},checked:e})})}var q=Object(l.a)({root:{height:"100vh",backgroundImage:"url(".concat("/blog-react-demo/assets/log.jpeg",")"),backgroundRepeat:"no-repeat",backgroundSize:"cover"}});function K(){var t=q();return Object(N.jsxs)("div",{className:t.root,children:[Object(N.jsx)(s.a,{}),Object(N.jsx)(A,{}),Object(N.jsx)(Y,{})]})}var Q=a(27),X=a(242),Z=a(243),$=a(49),tt=a.n($),et=a(74),at=Object(l.a)((function(t){return{root:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},appbar:{background:"none !important",fontFamily:"Nunito"},appbarTitle:{flexGrow:"1",color:"#5AFF3D"},appbarWrapper:{width:"80%",margin:"0 auto"},icon:{color:"#fff",fontSize:"2rem"},colorText:{color:"#fff"},container:{textAlign:"center"},title:{color:"#fff",fontFamily:"Nunito",fontSize:"4.5rem"},goDown:{color:"#5AFF3D",fontSize:"4rem !important"}}}));function nt(){var t=at(),e=Object(n.useState)(!1),a=Object(p.a)(e,2),o=(a[0],a[1]);return Object(n.useEffect)((function(){o(!0)}),[]),Object(N.jsx)("div",{className:t.root,id:"header",children:Object(N.jsx)(m.a,{className:t.appbar,elevation:0,children:Object(N.jsxs)(d.a,{className:t.appbarWrapper,children:[Object(N.jsxs)("h1",{className:t.appbarTitle,children:["Voyager",Object(N.jsx)("span",{className:t.colorText,children:" . "})]}),Object(N.jsx)(F,{}),Object(N.jsx)(C,{})]})})})}var ot=Object(l.a)((function(t){return{root:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},appbar:{background:"none !important",fontFamily:"Nunito"},appbarTitle:{flexGrow:"1"},appbarWrapper:{width:"80%",margin:"0 auto"},icon:{color:"#fff",fontSize:"2rem"},colorText:{color:"#5AFF3D"},container:{textAlign:"center"},title:{color:"#fff",fontFamily:"Nunito",fontSize:"4.5rem"},goDown:{color:"#5AFF3D",fontSize:"4rem !important"}}}));function rt(){var t=ot(),e=Object(n.useState)(!1),a=Object(p.a)(e,2),o=a[0],r=a[1];return Object(n.useEffect)((function(){r(!0)}),[]),Object(N.jsxs)("div",{className:t.root,id:"header",children:[Object(N.jsx)(nt,{}),Object(N.jsx)(X.a,Object(Q.a)(Object(Q.a)({in:o},o?{timeout:1e3}:{}),{},{collapsedHeight:50,children:Object(N.jsxs)("div",{className:t.container,children:[Object(N.jsxs)("h1",{className:t.title,children:["Welcome to ",Object(N.jsx)("br",{}),"My ",Object(N.jsx)("span",{className:t.colorText,children:"Explorations"}),"."]}),Object(N.jsx)(et.Link,{to:"place-to-visit",smooth:!0,children:Object(N.jsx)(Z.a,{children:Object(N.jsx)(tt.a,{className:t.goDown})})})]})}))]})}var it=a(244),ct=a(247),st=a(246),lt=a(245),mt=Object(l.a)({root:{width:545,background:"rgba(0, 0, 0, 0.5)!important",margin:" 40px 40px"},media:{height:440},title:{fontFamily:"Nunito !important",fontWeight:"bold !important",fontSize:"2rem !important",color:"#fff"},desc:{fontFamily:"Nunito !important",fontSize:"1.1rem !important",color:"#ddd !important",maxHeight:250},bottom:{backgroundColor:"#5AFF3D!important",fontFamily:"Nunito !important",fontWeight:"bold !important",fontSize:"0.9rem !important",color:"#000 !important",margin:"15px !important",padding:"0.5rem !important",textAlign:"center"}}),dt=[{image:"/blog-react-demo/assets/image-canarie.jpeg"},{image:"/blog-react-demo/assets/image-italy.jpeg"},{image:"/blog-react-demo/assets/image-norvegia.jpeg"},{image:"/blog-react-demo/assets/image-ny.jpeg"}];function pt(t){var e=t.place,a=t.checked,n=t.index,o=mt();return Object(N.jsx)(X.a,Object(Q.a)(Object(Q.a)({in:a},a?{timeout:1e3}:{}),{},{children:Object(N.jsxs)(it.a,{className:o.root,children:[Object(N.jsx)(lt.a,{className:o.media,component:"img",height:"140",image:dt[n].image}),Object(N.jsxs)(st.a,{children:[Object(N.jsx)(I.a,{gutterBottom:!0,variant:"h5",component:"h2",className:o.title,children:e.name}),Object(N.jsx)(I.a,{variant:"body2",color:"text.secondary",component:"p",className:o.desc,dangerouslySetInnerHTML:{__html:e.description}})]}),Object(N.jsx)(ct.a,{children:Object(N.jsx)(b.a,{component:j.b,to:"".concat(e.id),className:o.bottom,size:"small",children:"Scopri"})})]})}))}var jt=Object(l.a)((function(t){return{root:{minHeight:"100vh",display:"flex",flexWrap:"wrap",flexDirection:"row",justifyContent:"center",alignItems:"center"}}}));function bt(){var t=jt(),e=_("header"),a=Object(n.useState)([]),o=Object(p.a)(a,2),r=o[0],i=o[1];return Object(n.useEffect)((function(){v.a.get("https://blog-react-demo.000webhostapp.com/wp-json/wp/v2/categories?parent=2").then((function(t){return i(t.data)}))}),[]),Object(N.jsx)("div",{className:t.root,id:"place-to-visit",children:r.map((function(t,a){return Object(N.jsx)(pt,{index:a,place:t,checked:e},a)}))})}var ut=Object(l.a)({root:{minHeight:"100vh",backgroundImage:"url(".concat("/blog-react-demo/assets/bg11.jpeg",")"),backgroundRepeat:"no-repeat",backgroundSize:"cover"}});function ft(){var t=ut();return Object(N.jsxs)("div",{className:t.root,children:[Object(N.jsx)(s.a,{}),Object(N.jsx)(rt,{}),Object(N.jsx)(bt,{})]})}var gt=[],xt=Object(n.createContext)(gt),ht=function(t){var e=Object(n.useState)(gt),a=Object(p.a)(e,2),o=a[0],r=a[1];return Object(N.jsx)(xt.Provider,{value:[o,r],children:t.children})},Ot=a(117),vt=a(3),Nt=a(118),wt=a.n(Nt),Ft=a(119),yt=a.n(Ft),St=["expand"],kt=Object(l.a)({root:{width:545,background:"rgba(0, 0, 0, 0.5)!important",margin:" 40px 40px"},media:{height:440},title:{fontFamily:"Nunito !important",fontWeight:"bold !important",fontSize:"2rem !important",marginLeft:"15px !important",color:"#fff"},desc:{fontFamily:"Nunito !important",fontSize:"1.2rem !important",color:"#ddd !important"},bottom:{fontFamily:"Nunito !important",color:"#5AFF3D !important",fontSize:"2rem !important"},bottomExpand:{fontFamily:"Nunito !important",backgroundColor:"#5AFF3D !important",color:"#000 !important"}}),Ct=Object(vt.a)((function(t){t.expand;var e=Object(Ot.a)(t,St);return Object(N.jsx)(Z.a,Object(Q.a)({},e))}))((function(t){var e=t.theme;return{transform:t.expand?"rotate(180deg)":"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})}}));function zt(t){var e=t.place,a=t.checked,o=kt(),r=n.useState(!1),i=Object(p.a)(r,2),c=i[0],s=i[1];return Object(N.jsx)(X.a,Object(Q.a)(Object(Q.a)({in:a},a?{timeout:1e3}:{}),{},{children:Object(N.jsxs)(it.a,{className:o.root,children:[Object(N.jsx)(lt.a,{className:o.media,component:"img",height:"140",image:e.featured_media_src_url}),Object(N.jsxs)(st.a,{children:[Object(N.jsx)(I.a,{gutterBottom:!0,variant:"h5",component:"h2",className:o.title,children:e.title.rendered}),Object(N.jsxs)(ct.a,{disableSpacing:!0,children:[Object(N.jsx)(Z.a,{"aria-label":"add to favorites",children:Object(N.jsx)(wt.a,{className:o.bottom})}),Object(N.jsx)(Z.a,{"aria-label":"share",children:Object(N.jsx)(yt.a,{className:o.bottom})}),Object(N.jsx)(Ct,{className:o.bottomExpand,sx:{fontSize:40},expand:c,onClick:function(){s(!c)},"aria-expanded":c,"aria-label":"show more",children:Object(N.jsx)(tt.a,{})})]}),Object(N.jsx)(X.a,{in:c,timeout:"auto",unmountOnExit:!0,children:Object(N.jsx)(st.a,{children:Object(N.jsx)(I.a,{paragraph:!0,dangerouslySetInnerHTML:{__html:e.content.rendered},className:o.desc})})})]})]})}))}var At=Object(l.a)((function(t){return{root:{minHeight:"100vh",display:"flex",flexWrap:"wrap",flexDirection:"row",justifyContent:"center",alignItems:"center"}}}));function Dt(){var t=At(),e=_("header"),a=Object(n.useContext)(xt),o=Object(p.a)(a,1)[0];return Object(N.jsx)("div",{className:t.root,id:"place-to-visit",children:o.map((function(t,a){return Object(N.jsx)(zt,{index:a,place:t,checked:e},a)}))})}var Tt=Object(l.a)((function(t){return{root:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},appbar:{background:"none !important",fontFamily:"Nunito"},appbarTitle:{flexGrow:"1"},appbarWrapper:{width:"80%",margin:"0 auto"},icon:{color:"#fff",fontSize:"2rem"},colorText:{color:"#5AFF3D"},container:{textAlign:"center"},title:{color:"#fff",fontFamily:"Nunito",fontSize:"4.5rem"},goDown:{color:"#5AFF3D",fontSize:"4rem !important"}}}));function It(t){t.load;var e=Tt(),a=Object(n.useState)(!1),o=Object(p.a)(a,2),r=o[0],i=o[1],s=Object(n.useState)(),l=Object(p.a)(s,2),m=l[0],d=l[1],j=Object(n.useState)(!1),b=Object(p.a)(j,2),u=b[0],f=b[1],g=Object(c.g)();Object(n.useEffect)((function(){i(!0)}),[]),Object(n.useEffect)((function(){v.a.get("https://blog-react-demo.000webhostapp.com/wp-json/wp/v2/categories?parent=2").then((function(t){d(t.data),f(!0)}))}),[]);var x=[];return!0===u&&(x=m.filter((function(t){return+t.id===+g.id}))),Object(N.jsxs)("div",{className:e.root,id:"header",children:[Object(N.jsx)(nt,{}),Object(N.jsx)(X.a,Object(Q.a)(Object(Q.a)({in:r},r?{timeout:1e3}:{}),{},{collapsedHeight:50,children:Object(N.jsxs)("div",{className:e.container,children:[Object(N.jsxs)("h1",{className:e.title,children:["Explore ",Object(N.jsx)("br",{}),!1!==u?Object(N.jsx)("span",{className:e.colorText,children:x[0].name}):"."]}),Object(N.jsx)(et.Link,{to:"place-to-visit",smooth:!0,children:Object(N.jsx)(Z.a,{children:Object(N.jsx)(tt.a,{className:e.goDown})})})]})}))]})}var Wt=Object(l.a)({root:{minHeight:"100vh",backgroundImage:"url(".concat("/blog-react-demo/assets/bg-italia.jpeg",")"),backgroundRepeat:"no-repeat",backgroundSize:"cover"}});function Et(){var t=Wt(),e=Object(n.useContext)(xt),a=Object(p.a)(e,2),o=(a[0],a[1]),r=Object(c.g)(),i=Object(n.useState)(!1),l=Object(p.a)(i,2),m=l[0],d=l[1];return Object(n.useEffect)((function(){v.a.get("https://blog-react-demo.000webhostapp.com/wp-json/wp/v2/posts?categories="+r.id).then((function(t){o(t.data),d(!0)}))}),[r]),Object(N.jsxs)("div",{className:t.root,children:[Object(N.jsx)(s.a,{}),Object(N.jsx)(It,{load:m}),Object(N.jsx)(Dt,{})]})}var _t=Object(l.a)({root:{width:650,background:"rgba(0, 0, 0, 0.5)!important",margin:" 45px 15px",padding:"25px",borderRadius:"25px"},title:{color:"#fff !important",fontFamily:"Nunito !important",fontWeight:"bold !important",fontSize:"2rem !important",width:"95% !important"},green:{color:"#5AFF3D!important"},text:{color:"#fff !important",fontFamily:"Nunito !important",fontWeight:"bold !important",width:"95% !important",paddingTop:"15px !important",paddingBottom:"15px !important"},bottom:{backgroundColor:"#fff!important",fontFamily:"Nunito !important",fontWeight:"bold !important",fontSize:"0.9rem !important",color:"#000 !important",margin:"10px !important",padding:"0.5rem !important",textAlign:"center"},bgGreen:{backgroundColor:"#5AFF3D!important",fontFamily:"Nunito !important",fontWeight:"bold !important",fontSize:"0.9rem !important",color:"#000 !important",margin:"10px !important",padding:"0.5rem !important",textAlign:"center"}});function Lt(t){var e=t.handleInput,a=t.signIn,n=_t();return Object(N.jsxs)(D.a,{className:n.root,component:"form",sx:{"& .MuiTextField-root":{m:1,width:"25ch"}},noValidate:!0,autoComplete:"off",children:[Object(N.jsxs)(I.a,{gutterBottom:!0,variant:"h5",component:"h2",className:n.title,children:[" Benvenuto al tuo Account ",Object(N.jsx)("span",{className:n.green,children:"Voyager"}),"."]}),Object(N.jsx)("div",{children:Object(N.jsx)(T.a,{className:n.text,id:"standard-textarea",label:"Email",name:"username",placeholder:"email",multiline:!0,variant:"standard",onChange:e})}),Object(N.jsx)("div",{children:Object(N.jsx)(T.a,{className:n.text,id:"standard-textarea",label:"Password",name:"password",placeholder:"Password",multiline:!0,variant:"standard",onChange:e})}),Object(N.jsx)(b.a,{component:j.b,to:"/sign-up",className:n.bottom,size:"small",children:"Crea un Account"}),Object(N.jsx)(b.a,{className:n.bgGreen,size:"small",onClick:function(){return a()},children:"Accedi"})]})}var Bt=function(){return Object(N.jsx)("div",{className:"App",children:Object(N.jsx)(H,{children:Object(N.jsx)(ht,{children:Object(N.jsxs)(c.c,{children:[Object(N.jsx)(c.a,{path:"/",element:Object(N.jsx)(ft,{})}),Object(N.jsx)(c.a,{path:"sign-in",element:Object(N.jsx)(R,{})}),Object(N.jsx)(c.a,{path:"sign-up",element:Object(N.jsx)(K,{})}),Object(N.jsx)(c.a,{path:"/:id",element:Object(N.jsx)(Et,{})}),Object(N.jsx)(c.a,{path:"/dashboard",element:Object(N.jsx)(Lt,{})})]})})})})},Ht=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,249)).then((function(e){var a=e.getCLS,n=e.getFID,o=e.getFCP,r=e.getLCP,i=e.getTTFB;a(t),n(t),o(t),r(t),i(t)}))};i.a.render(Object(N.jsx)(o.a.StrictMode,{children:Object(N.jsx)(j.a,{children:Object(N.jsx)(Bt,{})})}),document.getElementById("root")),Ht()}},[[179,1,2]]]);
//# sourceMappingURL=main.63b1fc57.chunk.js.map