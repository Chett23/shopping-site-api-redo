(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,n,t){e.exports=t(40)},30:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(13),u=t.n(c),o=(t(30),t(3)),i=t(1),l=t(8),m=t(9),s=t(2);function f(){var e=Object(i.a)(["\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n"]);return f=function(){return e},e}var d=s.a.div(f());function b(){var e=Object(i.a)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n"]);return b=function(){return e},e}var p=s.a.div(b());function g(){var e=Object(i.a)(["\n  font-size: 12pt;\n  margin: 0;\n  color: black;\n"]);return g=function(){return e},e}function h(){var e=Object(i.a)(["\n  font-size: 14pt;\n  margin: 0;\n  color: black;\n"]);return h=function(){return e},e}var j=s.a.p(h()),E=s.a.p(g());function O(){var e=Object(i.a)(["\n  font-weight: bold;\n"]);return O=function(){return e},e}var v=s.a.div(O());function x(){var e=Object(i.a)(["\nbackground-color: #133564;\nwidth: 100%;\nmargin: 18px auto;\ncolor: white;\ntext-align: center;\npadding: 10px 0;\nalign-self: center;\ncursor: pointer;\nborder-radius: 10px;\n"]);return x=function(){return e},e}var w=s.a.div(x());function y(){var e=Object(i.a)(["\n  background-color: #E4E4E4;\n  border: 2px solid #133564;\n  color: #AAAAAA;\n"]);return y=function(){return e},e}function S(){var e=Object(i.a)(["\n  width: 150px;\n  height: 300px;\n  box-shadow: 0px 0px 5px grey;\n  margin: 10px;\n  padding: 10px;\n  justify-content: space-between;\n"]);return S=function(){return e},e}var C=Object(s.a)(d)(S()),k=Object(s.a)(w)(y());function P(e){var n=e.item,t=n.name,a=n.price,c=n.url,u=n._id,o=n.stock,i=e.func;return r.a.createElement(C,null,r.a.createElement(d,null,r.a.createElement(E,null,"Name: ".concat(t)),r.a.createElement(E,null,"Price: $".concat(a))),r.a.createElement("img",{style:{width:150,height:150},src:c,alt:""}),o<1?r.a.createElement(k,{disabled:!0},"Temporarily out of stock"):r.a.createElement(w,{onClick:i(u)},"Add to Cart"))}function N(){var e=Object(i.a)(["\n  width: 150px;\n  height: 300px;\n  box-shadow: 0px 0px 5px grey;\n  margin: 10px;\n  padding: 10px;\n  justify-content: space-between;\n"]);return N=function(){return e},e}var A=Object(s.a)(d)(N());function I(e){var n=e.item,t=n.name,a=n.price,c=n.url,u=n._id,o=n.qty,i=e.func;return r.a.createElement(A,null,r.a.createElement(d,null,r.a.createElement(E,null,"Name: ".concat(t)),r.a.createElement(E,null,"Price: $".concat((a*o).toFixed(2))),r.a.createElement(E,null,"Quantity: ".concat(o))),r.a.createElement("img",{style:{width:150,height:150},src:c,alt:""}),r.a.createElement(w,{onClick:i(u)},"Remove From Cart"))}var T="https://shop-v2-helio.herokuapp.com",F=function(){return fetch("".concat(T,"/items")).then(function(e){return e.json()}).catch(function(e){return e})},_=function(e){return fetch("".concat(T,"/items"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(function(e){return e})},U=function(e){return fetch("".concat(T,"/items/").concat(e),{method:"DELETE"}).then(function(e){return e})},J=function(){return fetch("".concat(T,"/cart")).then(function(e){return e.json()})},z=function(e){return fetch("".concat(T,"/cart"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})},L=function(e){return fetch("".concat(T,"/cart/").concat(e),{method:"DELETE"})},D=function(e){return fetch("".concat(T,"/cart/dec"),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})},R=function(e){return fetch("".concat(T,"/cart/inc"),{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify(e)})};function B(){var e=Object(i.a)(["\n  width: 100%;\n  text-align: center;\n"]);return B=function(){return e},e}function q(){var e=Object(i.a)(["\n  width: auto;\n  box-shadow: 0px 0px 5px grey;\n  border-radius: 10px;\n  margin 20px;\n  justify-content: center;\n"]);return q=function(){return e},e}function W(){var e=Object(i.a)(["\n  width: auto;\n  min-width: 150px;\n  min-height: 300px;\n  border-radius: 10px;\n  box-shadow: 0px 0px 5px grey;\n  margin 20px;\n  justify-content: center;\n"]);return W=function(){return e},e}function $(){var e=Object(i.a)(["\n  width: 80%;\n  margin: 0 auto;\n  justify-items: space-between;\n"]);return $=function(){return e},e}var G=Object(s.a)(p)($()),H=Object(s.a)(p)(W()),Q=Object(s.a)(p)(q()),K=Object(s.a)(j)(B());var M=function(e){var n=e.showCart,t=Object(a.useState)([]),c=Object(o.a)(t,2),u=c[0],i=c[1],l=Object(a.useState)([]),m=Object(o.a)(l,2),s=m[0],f=m[1];return Object(a.useEffect)(function(){F().then(function(e){i(e||[])}),J().then(function(e){f(e||[])})},[]),r.a.createElement(d,null,r.a.createElement(G,null,r.a.createElement(H,null,r.a.createElement(d,null,r.a.createElement(K,null,"Store"),r.a.createElement(p,null,u.map(function(e,n){return r.a.createElement(P,{key:n,item:e,func:function(){return function(e){var n=e._id,t=e.name,a=e.price,r=e.url;return function(){var e={_id:n,name:t,price:a,url:r};s.findIndex(function(n){return n._id===e._id})>=0?R(e).then(function(){J().then(function(e){return f(e)}),F().then(function(e){return i(e)})}):z(e).then(function(){J().then(function(e){return f(e)}),F().then(function(e){return i(e)})})}}(e)}})})))),n&&r.a.createElement(Q,null,r.a.createElement(d,null,r.a.createElement(K,null,"Cart"),r.a.createElement(p,null,s.length?s.map(function(e,n){return r.a.createElement(I,{key:n,item:e,func:function(){return function(e){return function(){1===e.qty?L(e._id).then(function(){J().then(function(e){return f(e)}),F().then(function(e){return i(e)})}):e.qty>1&&D(e).then(function(){J().then(function(e){return f(e)}),F().then(function(e){return i(e)})})}}(e)}})}):r.a.createElement(v,null,"Nothing in your Cart"))))))};function V(){var e=Object(i.a)(["\n  justify-content: center;\n"]);return V=function(){return e},e}var X=Object(s.a)(p)(V()),Y=function(){return r.a.createElement(X,null,r.a.createElement(d,null,r.a.createElement(v,null,"Tacos for Edmundo!!!"),r.a.createElement("img",{src:"https://media.tenor.com/images/c80c99b8d22f51ed585cefa4d2d7562f/tenor.gif",alt:""})))},Z=function(e){return new Promise(function(n,t){fetch("".concat(T,"/login"),{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(e)}).then(function(e){n(e.json())}).catch(function(e){console.log(e),t(e)})})},ee=function(e){return new Promise(function(n,t){fetch("".concat(T,"/login/create"),{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(e)}).then(function(e){n(e.json())}).catch(function(e){t(e)})})},ne=function(){return fetch("".concat(T,"/users")).then(function(e){return e.json()}).catch(function(e){return e})},te=function(e){return fetch("".concat(T,"/users/").concat(e),{method:"DELETE"}).then(function(e){return e})},ae=function(e){return new Promise(function(n,t){fetch("".concat(T,"/login/users/password-reset"),{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(e)}).then(function(e){n(e.json())}).catch(function(e){t(e)})})};function re(){var e=Object(i.a)(["\n  margin: 0;\n  color: #909090;\n  border-radius: 0;\n  font-weight: bold;\n"]);return re=function(){return e},e}function ce(){var e=Object(i.a)(["\n  text-decoration: none;\n"]);return ce=function(){return e},e}function ue(){var e=Object(i.a)(["\n  width: 100%;\n"]);return ue=function(){return e},e}function oe(){var e=Object(i.a)(["\n  width: 98%;\n  margin-bottom: 3px;\n"]);return oe=function(){return e},e}function ie(){var e=Object(i.a)(["\n  margin: 1.5px 5px;\n  width: 80px;\n  height: 15px;\n  justify-content: center;\n"]);return ie=function(){return e},e}function le(){var e=Object(i.a)(["\n  flex: 1;\n  display: flex;\n  min-wisth: -webkit-min-contnet;\n  justify-content: flex-end;\n"]);return le=function(){return e},e}function me(){var e=Object(i.a)(["\n  flex: 1;\n  display: flex;\n  min-wisth: -webkit-min-contnet;\n"]);return me=function(){return e},e}function se(){var e=Object(i.a)(["\n  flex: 1;\n  display: flex;\n  min-wisth: -webkit-min-contnet;\n"]);return se=function(){return e},e}function fe(){var e=Object(i.a)(["\n  border-bottom: 1px solid black;\n  justify-content: center;\n  margin: 5px;\n  height: auto;\n  width: 100%;\n"]);return fe=function(){return e},e}function de(){var e=Object(i.a)(["\n  background-color: #909090;\n  margin: 2% auto;\n  padding: 20px;\n  width: 45%;\n  height: auto;\n  flex-wrap: wrap;\n  border-radius: 15px;\n  justify-content: flex-start;\n  box-shadow: 0px 0px 5px grey;\n"]);return de=function(){return e},e}function be(){var e=Object(i.a)(["\n  margin: 2px 5px;\n  width: 45%;\n  height: 15px;\n  justify-content: center;\n"]);return be=function(){return e},e}function pe(){var e=Object(i.a)(["\nmargin: 10px;\ntext-align: center;\nfont-size: 18pt;\n"]);return pe=function(){return e},e}function ge(){var e=Object(i.a)(["\n  width: 15%;\n"]);return ge=function(){return e},e}function he(){var e=Object(i.a)(["\n  width: 80%;\n  height: 20px;\n"]);return he=function(){return e},e}function je(){var e=Object(i.a)(["\n  justify-content: center;\n  align-content: coneter;\n  margin: 5px;\n"]);return je=function(){return e},e}function Ee(){var e=Object(i.a)(["\n  background-color: #909090;\n  margin: 2% auto;\n  padding: 20px;\n  width: 45%;\n  height: 300px;\n  border-radius: 15px;\n  box-shadow: 0px 0px 5px grey;\n"]);return Ee=function(){return e},e}function Oe(){var e=Object(i.a)(["\n  width: 95%;\n  margin: 5% auto;\n"]);return Oe=function(){return e},e}var ve=Object(s.a)(p)(Oe()),xe=Object(s.a)(d)(Ee()),we=Object(s.a)(p)(je()),ye=s.a.input(he()),Se=Object(s.a)(j)(ge()),Ce=Object(s.a)(v)(pe()),ke=Object(s.a)(w)(be()),Pe=Object(s.a)(d)(de()),Ne=Object(s.a)(p)(fe()),Ae=Object(s.a)(d)(se()),Ie=Object(s.a)(d)(me()),Te=Object(s.a)(p)(le()),Fe=Object(s.a)(w)(ie()),_e=Object(s.a)(Fe)(oe()),Ue=Object(s.a)(d)(ue()),Je=Object(s.a)(l.b)(ce()),ze=Object(s.a)(w)(re());function Le(e){e.loggedIn;var n=Object(a.useState)([]),t=Object(o.a)(n,2),c=t[0],u=t[1],i=Object(a.useState)(""),l=Object(o.a)(i,2),s=l[0],f=l[1],b=Object(a.useState)(""),g=Object(o.a)(b,2),h=g[0],E=g[1],O=Object(a.useState)(""),v=Object(o.a)(O,2),x=v[0],y=v[1],S=Object(a.useState)(""),C=Object(o.a)(S,2),k=C[0],P=C[1],N=Object(a.useState)(""),A=Object(o.a)(N,2),I=A[0],T=A[1],J=Object(a.useState)(""),z=Object(o.a)(J,2),L=z[0],D=z[1],R=Object(a.useState)(""),B=Object(o.a)(R,2),q=B[0],W=B[1],$=Object(a.useState)(""),G=Object(o.a)($,2),H=G[0],Q=G[1],K=Object(a.useState)([]),M=Object(o.a)(K,2),V=M[0],X=M[1],Y=Object(a.useState)(""),Z=Object(o.a)(Y,2),ae=Z[0],re=Z[1],ce=Object(a.useState)(""),ue=Object(o.a)(ce,2),oe=ue[0],ie=ue[1],le=Object(a.useState)(!0),me=Object(o.a)(le,2),se=me[0],fe=me[1],de=function(e){"setName"===e.target.name&&f(e.target.value),"setPrice"===e.target.name&&E(e.target.value),"setUrl"===e.target.name&&y(e.target.value),"setStock"===e.target.name&&P(e.target.value),"setFname"===e.target.name&&D(e.target.value),"setLname"===e.target.name&&W(e.target.value),"setUserName"===e.target.name&&Q(e.target.value)},be=function(e){if(e.preventDefault(),ae){var n={firstname:L,lastname:q,username:H,_id:ae};D(""),W(""),Q(""),re(""),ee(n).then(function(){return ne().then(function(e){return X(e)})})}else if(s&&h&&x&&""!==k){var t=I?{name:s,price:h,url:x,stock:k,_id:I}:{name:s,price:h,stock:k,url:x};f(""),E(""),y(""),T(""),P(""),_(t).then(function(){return F().then(function(e){return u(e)})})}},pe=function(e){return function(){U(e).then(function(){return ne().then(function(e){return X(e)})})}},ge=function(e){return function(){te(e).then(function(){return ne().then(function(e){return X(e)})})}};return Object(a.useEffect)(function(){var e=JSON.parse(sessionStorage.getItem("user"));e?(ie(e),fe(!1)):fe(!1),F().then(function(e){return u(e)}),ne().then(function(e){return X(e)})},[]),se||oe?r.a.createElement(r.a.Fragment,null,r.a.createElement(ze,{onClick:function(){sessionStorage.removeItem("user"),fe(!1),ie("")}},"Loggout"),r.a.createElement(ve,null,ae?r.a.createElement(xe,null,r.a.createElement(Ce,null,"Edit Admin Profile"),r.a.createElement(we,null,r.a.createElement(Se,null,"First Name: "),r.a.createElement(ye,{name:"setFname",value:L,onChange:de})),r.a.createElement(we,null,r.a.createElement(Se,null,"Last Name: "),r.a.createElement(ye,{name:"setLname",value:q,onChange:de})),r.a.createElement(we,null,r.a.createElement(Se,null,"Username: "),r.a.createElement(ye,{name:"setUserName",value:H,onChange:de})),r.a.createElement(we,null,r.a.createElement(ke,{onClick:be},"Submit Changes"),r.a.createElement(ke,{onClick:function(){re(""),D(""),W(""),Q("")}},"Add Item"))):r.a.createElement(xe,null,I?r.a.createElement(Ce,null,"Edit Item In Inventory"):r.a.createElement(Ce,null,"Add Item To Inventory"),r.a.createElement(we,null,r.a.createElement(Se,null,"Name: "),r.a.createElement(ye,{placeholder:"Please enter item name. . . ",name:"setName",value:s,onChange:de})),r.a.createElement(we,null,r.a.createElement(Se,null,"Price: "),r.a.createElement(ye,{placeholder:"Please enter item price . . . ",name:"setPrice",value:h,onChange:de})),r.a.createElement(we,null,r.a.createElement(Se,null,"Url: "),r.a.createElement(ye,{placeholder:"Please enter item url . . . ",name:"setUrl",value:x,onChange:de})),r.a.createElement(we,null,r.a.createElement(Se,null,"in stock: "),r.a.createElement(ye,{placeholder:"Please enter amount in stock . . . ",name:"setStock",value:k,onChange:de})),r.a.createElement(we,null,I?r.a.createElement(r.a.Fragment,null,r.a.createElement(ke,{onClick:be},"Submit Changes"),r.a.createElement(ke,{onClick:function(){T(""),f(""),E(""),P(""),y("")}},"Add Item")):r.a.createElement(w,{onClick:be},"Add Item to Inventory"))),r.a.createElement(Pe,null,r.a.createElement(Ce,null,"Current Inventory"),r.a.createElement(Ue,null,c.map(function(e,n){return r.a.createElement(Ne,{key:n},r.a.createElement(Ae,null,r.a.createElement(j,null,"Name: ".concat(e.name)),r.a.createElement(j,null,"Price: ".concat(e.price))),r.a.createElement(Ie,null,r.a.createElement(j,null,"In Stock: ".concat(e.stock)),r.a.createElement(j,null,"Product Id: ".concat(e._id))),r.a.createElement(Te,null,r.a.createElement(Fe,{onClick:(t=e._id,function(){F().then(function(e){var n=e.find(function(e){return e._id===t});f(n.name),E(n.price),y(n.url),P(n.stock),T(n._id),D(""),W(""),Q(""),re("")})})},"Edit"),r.a.createElement(Fe,{onClick:pe(e._id)},"Remove")));var t}))),r.a.createElement(Pe,null,r.a.createElement(Ce,null,"Current Admins"),r.a.createElement(Ue,null,V.map(function(e,n){return r.a.createElement(Ne,{key:n},r.a.createElement(Ae,null,r.a.createElement(j,null,"First Name: ".concat(e.firstname)),r.a.createElement(j,null,"Last Name: ".concat(e.lastname)),r.a.createElement(j,null,"Username: ".concat(e.username))),r.a.createElement(d,null,r.a.createElement(p,null,r.a.createElement(Fe,{onClick:(t=e._id,function(){ne().then(function(e){var n=e.find(function(e){return e._id===t});D(n.firstname),W(n.lastname),Q(n.username),re(n._id),f(""),E(""),y(""),T(""),P("")})})},"Edit"),r.a.createElement(Fe,{onClick:ge(e._id)},"Remove")),r.a.createElement(d,null,r.a.createElement(Je,{to:"/admin/login/password/reset"},r.a.createElement(_e,null,"Reset Password")))));var t})),r.a.createElement(d,null,r.a.createElement(Je,{to:"/admin/login/create"},r.a.createElement(w,null,"Create new user")))))):r.a.createElement(m.a,{to:"/admin/login"})}function De(){var e=Object(i.a)(["\n  color: #FF0000;\n  font-size: 20pt;\n  margin: 15px 0 10px 0;\n  text-align: center;\n"]);return De=function(){return e},e}function Re(){var e=Object(i.a)(["\n  color: white;\n  font-size: 14pt;\n  margin: 0;\n"]);return Re=function(){return e},e}function Be(){var e=Object(i.a)(["\n  background-color: #133564;\n  width: 45%;\n  margin: 18px auto;\n  padding: 0;\n  margin-bottom: 0;\n  color: white;\n  text-align: center;\n  padding: 10px 0;\n  align-self: center;\n  border: 1px solid #133564;\n  border-radius: 10px;\n"]);return Be=function(){return e},e}function qe(){var e=Object(i.a)(["\n  color: white;\n  text-decoration: none;\n"]);return qe=function(){return e},e}function We(){var e=Object(i.a)(["\n  width: 70%;\n"]);return We=function(){return e},e}function $e(){var e=Object(i.a)(["\n  width: 40px;\n"]);return $e=function(){return e},e}function Ge(){var e=Object(i.a)(["\n  width: 100%;\n  justify-content: space-around;\n  margin: 5px;\n"]);return Ge=function(){return e},e}function He(){var e=Object(i.a)(["\n  text-align: center;\n"]);return He=function(){return e},e}function Qe(){var e=Object(i.a)(["\n  width: 40%;\n  margin: 10% auto;\n  padding-bottom: 20px;\n  border-radius: 10px;\n  background-color: #909090;\n  box-shadow: 0px 0px 5px grey;\n"]);return Qe=function(){return e},e}var Ke=Object(s.a)(d)(Qe()),Me=s.a.h1(He()),Ve=Object(s.a)(p)(Ge()),Xe=Object(s.a)(j)($e()),Ye=s.a.input(We()),Ze=Object(s.a)(l.b)(qe()),en=s.a.button(Be()),nn=Object(s.a)(j)(Re()),tn=Object(s.a)(j)(De());function an(e){var n=e.loggedIn,t=Object(a.useState)(""),c=Object(o.a)(t,2),u=c[0],i=c[1],l=Object(a.useState)(""),s=Object(o.a)(l,2),f=s[0],d=s[1],b=Object(a.useState)(""),g=Object(o.a)(b,2),h=g[0],j=g[1],E=Object(a.useState)(!1),O=Object(o.a)(E,2),v=O[0],x=O[1],w=function(e){e.preventDefault();var n={username:f,password:h};console.log(n),Z(n).then(function(e){sessionStorage.setItem("user",JSON.stringify(e)),i(e)}).catch(function(e){x(!0)})};return Object(a.useEffect)(function(){var e=JSON.parse(sessionStorage.getItem("user"));e&&i(e),n||i(null)},[n]),u?r.a.createElement(m.a,{to:"/admin"}):r.a.createElement("form",{onSubmit:w},r.a.createElement(Ke,null,r.a.createElement(Me,null,"Admin Login"),v&&r.a.createElement(tn,null,"Incorrect credentials"),r.a.createElement(Ve,null,r.a.createElement(Xe,null,"Username: "),r.a.createElement(Ye,{type:"text",onChange:function(e){return d(e.target.value)},onClick:function(){x(!1),d("")},value:f,placeholder:"username . . ."})),r.a.createElement(Ve,null,r.a.createElement(Xe,null,"Password: "),r.a.createElement(Ye,{type:"password",onChange:function(e){return j(e.target.value)},onClick:function(){x(!1),j("")},value:h,placeholder:"password . . ."})),r.a.createElement(p,null,r.a.createElement(en,{onClick:w,type:"submit"},r.a.createElement(nn,null,"Submit")),r.a.createElement(en,null,r.a.createElement(Ze,{to:"/admin/login/create"},r.a.createElement(nn,null,"Create User"))))))}function rn(){var e=Object(i.a)(["\n  margin: 0;\n  color: #909090;\n  border-radius: 0;\n  font-weight: bold;\n"]);return rn=function(){return e},e}function cn(){var e=Object(i.a)(["\n  color: #FF0000;\n  font-size: 20pt;\n  text-align: center;\n  margin: 15px;\n"]);return cn=function(){return e},e}function un(){var e=Object(i.a)(["\n  color: white;\n  font-size: 14pt;\n  margin: 0;\n"]);return un=function(){return e},e}function on(){var e=Object(i.a)(["\n  background-color: #E4E4E4;\n  color: #AAAAAA;\n  font-size: 14pt;\n  margin: 0;\n"]);return on=function(){return e},e}function ln(){var e=Object(i.a)(["\n  background-color: #133564;\n  width: 90%;\n  margin: 20px auto;\n  margin-bottom: 0;\n  padding: 0;\n  color: white;\n  text-align: center;\n  align-self: center;\n  padding: 10px 0;\n  border: 2px solid #133564;\n  border-radius: 10px;\n"]);return ln=function(){return e},e}function mn(){var e=Object(i.a)(["\n  width: 75%;\n  height: 15px;\n"]);return mn=function(){return e},e}function sn(){var e=Object(i.a)(["\n  width: auto;\n  justify-content: space-between;\n  align-content: space-around;\n  margin: 1px;\n  padding: 0 25px;\n"]);return sn=function(){return e},e}function fn(){var e=Object(i.a)(["\n  text-align: center;\n"]);return fn=function(){return e},e}function dn(){var e=Object(i.a)(["\n  width: 50%;\n  margin: 10% auto;\n  padding-bottom: 20px;\n  border-radius: 10px;\n  background-color: #909090;\n  box-shadow: 0px 0px 5px grey;\n"]);return dn=function(){return e},e}var bn=Object(s.a)(d)(dn()),pn=s.a.h1(fn()),gn=Object(s.a)(p)(sn()),hn=s.a.input(mn()),jn=s.a.button(ln()),En=Object(s.a)(jn)(on()),On=Object(s.a)(j)(un()),vn=Object(s.a)(j)(cn()),xn=Object(s.a)(w)(rn());function wn(){var e=Object(a.useState)(!1),n=Object(o.a)(e,2),t=n[0],c=n[1],u=Object(a.useState)(""),i=Object(o.a)(u,2),l=i[0],s=i[1],f=Object(a.useState)(""),d=Object(o.a)(f,2),b=d[0],p=d[1],g=Object(a.useState)(""),h=Object(o.a)(g,2),E=h[0],O=h[1],v=Object(a.useState)(""),x=Object(o.a)(v,2),w=x[0],y=x[1],S=Object(a.useState)(""),C=Object(o.a)(S,2),k=C[0],P=C[1],N=Object(a.useState)(""),A=Object(o.a)(N,2),I=A[0],T=A[1],F=Object(a.useState)(!0),_=Object(o.a)(F,2),U=_[0],J=_[1],z=function(e){e.preventDefault();var n={firstname:l,lastname:b,username:E,password:w};console.log(n),ee(n).then(function(e){c(!0)})};return Object(a.useEffect)(function(){var e=JSON.parse(sessionStorage.getItem("user"));e?(T(e),J(!1)):J(!1)},[]),U||I?t?r.a.createElement(m.a,{to:"/admin/login"}):r.a.createElement(r.a.Fragment,null,r.a.createElement(xn,{onClick:function(){sessionStorage.removeItem("user"),J(!1),T("")}},"Loggout"),r.a.createElement("form",{onSubmit:z},r.a.createElement(bn,null,r.a.createElement(pn,null,"Create Admin User"),r.a.createElement(gn,null,r.a.createElement(j,null,"First Name: "),r.a.createElement(hn,{type:"text",onChange:function(e){return s(e.target.value)},value:l,placeholder:"first name . . ."})),r.a.createElement(gn,null,r.a.createElement(j,null,"Last Name: "),r.a.createElement(hn,{type:"text",onChange:function(e){return p(e.target.value)},value:b,placeholder:"last name . . ."})),r.a.createElement(gn,null,r.a.createElement(j,null,"Username: "),r.a.createElement(hn,{type:"text",onChange:function(e){return O(e.target.value)},value:E,placeholder:"username . . ."})),r.a.createElement(gn,null,r.a.createElement(j,null,"Password: "),r.a.createElement(hn,{type:"password",onChange:function(e){return y(e.target.value)},value:w,placeholder:"password . . ."})),r.a.createElement(gn,null,r.a.createElement(j,null,"Confirm Password: "),r.a.createElement(hn,{type:"password",onChange:function(e){return P(e.target.value)},value:k,placeholder:"confirm password . . ."})),w===k?r.a.createElement(jn,{onClick:z,type:"submit"},r.a.createElement(On,null,"Create User")):r.a.createElement(r.a.Fragment,null,r.a.createElement(vn,null,"Passwords do not match"),r.a.createElement(En,{disabled:!0,onClick:z,type:"submit"},"Create User"))))):r.a.createElement(m.a,{to:"/admin/login"})}function yn(){var e=Object(i.a)(["\n  margin: 0;\n  color: #909090;\n  border-radius: 0;\n  font-weight: bold;\n"]);return yn=function(){return e},e}function Sn(){var e=Object(i.a)(["\n  text-decoration: none;\n  width: 45%;\n"]);return Sn=function(){return e},e}function Cn(){var e=Object(i.a)(["\n  width: 80%;\n  margin: 5 auto;\n"]);return Cn=function(){return e},e}function kn(){var e=Object(i.a)(["\n  width: 45%;\n  margin: 5px auto;\n"]);return kn=function(){return e},e}function Pn(){var e=Object(i.a)(["\n  color: #228B22;\n  font-size: 20pt;\n  text-align: center;\n  margin: 15px 0 10px 0;\n"]);return Pn=function(){return e},e}function Nn(){var e=Object(i.a)(["\n  color: #FF0000;\n  font-size: 20pt;\n  margin: 15px 0 10px 0;\n  text-align: center;\n"]);return Nn=function(){return e},e}function An(){var e=Object(i.a)(["\n  color: white;\n  font-size: 14pt;\n  margin: 0;\n"]);return An=function(){return e},e}function In(){var e=Object(i.a)(["\n  background-color: #E4E4E4;\n  color: #AAAAAA;\n  font-size: 14pt;\n  margin: 0 auto;\n"]);return In=function(){return e},e}function Tn(){var e=Object(i.a)(["\n  background-color: #133564;\n  width: 80%;\n  margin: 18px auto;\n  padding: 0;\n  cursor: pointer;\n  margin-bottom: 0;\n  color: white;\n  text-align: center;\n  padding: 10px 0;\n  align-self: center;\n  border: 1px solid #133564;\n  border-radius: 10px;\n"]);return Tn=function(){return e},e}function Fn(){var e=Object(i.a)(["\n  height: 20px;\n  width: 65%;\n  align-self: center;\n"]);return Fn=function(){return e},e}function _n(){var e=Object(i.a)(["\n  width: 160px;\n  margin: 0;\n"]);return _n=function(){return e},e}function Un(){var e=Object(i.a)(["\n  width: 100%;\n  justify-content: space-around;\n  margin: 5px;\n"]);return Un=function(){return e},e}function Jn(){var e=Object(i.a)(["\n  text-align: center;\n"]);return Jn=function(){return e},e}function zn(){var e=Object(i.a)(["\n  width: 40%;\n  margin: 10% auto;\n  padding-bottom: 20px;\n  border-radius: 10px;\n  background-color: #909090;\n  box-shadow: 0px 0px 5px grey;\n"]);return zn=function(){return e},e}var Ln=Object(s.a)(d)(zn()),Dn=s.a.h1(Jn()),Rn=Object(s.a)(p)(Un()),Bn=Object(s.a)(j)(_n()),qn=s.a.input(Fn()),Wn=s.a.button(Tn()),$n=Object(s.a)(Wn)(In()),Gn=Object(s.a)(j)(An()),Hn=Object(s.a)(j)(Nn()),Qn=Object(s.a)(j)(Pn()),Kn=Object(s.a)(Wn)(kn()),Mn=Object(s.a)(Wn)(Cn()),Vn=Object(s.a)(l.b)(Sn()),Xn=Object(s.a)(w)(yn());function Yn(){var e=Object(a.useState)(""),n=Object(o.a)(e,2),t=n[0],c=n[1],u=Object(a.useState)(""),i=Object(o.a)(u,2),l=i[0],s=i[1],f=Object(a.useState)(""),d=Object(o.a)(f,2),b=d[0],g=d[1],h=Object(a.useState)(!1),j=Object(o.a)(h,2),E=j[0],O=j[1],v=Object(a.useState)(!1),x=Object(o.a)(v,2),w=x[0],y=x[1],S=Object(a.useState)(""),C=Object(o.a)(S,2),k=C[0],P=C[1],N=Object(a.useState)(!0),A=Object(o.a)(N,2),I=A[0],T=A[1],F=function(e){e.preventDefault(),ae({username:t,password:l}).then(function(e){O(!0),y(!1),c(""),s(""),g("")}).catch(function(e){y(!0),O(!1)})};return Object(a.useEffect)(function(){var e=JSON.parse(sessionStorage.getItem("user"));e?(P(e),T(!1)):T(!1)},[]),I||k?r.a.createElement(r.a.Fragment,null,r.a.createElement(Xn,{onClick:function(){sessionStorage.removeItem("user"),T(!1),P("")}},"Loggout"),r.a.createElement("form",{onSubmit:F},r.a.createElement(Ln,null,r.a.createElement(Dn,null,"Password Reset"),r.a.createElement(Rn,null,r.a.createElement(Bn,null,"Username: "),r.a.createElement(qn,{type:"text",onChange:function(e){return c(e.target.value)},value:t,placeholder:"username . . .",onClick:function(){y(!1),O(!1)}})),r.a.createElement(Rn,null,r.a.createElement(Bn,null,"New Password: "),r.a.createElement(qn,{type:"password",onChange:function(e){return s(e.target.value)},value:l,placeholder:"new password . . .",onClick:function(){y(!1),O(!1)}})),r.a.createElement(Rn,null,r.a.createElement(Bn,null,"Confirm Password: "),r.a.createElement(qn,{type:"password",onChange:function(e){return g(e.target.value)},value:b,placeholder:"confirm new password . . .",onClick:function(){y(!1),O(!1)}})),l!==b&&r.a.createElement(Hn,null,"Passwords do not match"),E&&r.a.createElement(Qn,null,"Password was successfully changed"),w&&r.a.createElement(Hn,null,"We encountered a problem please try again"),r.a.createElement(p,null,l===b?E?r.a.createElement(Rn,null,r.a.createElement(Kn,{onClick:F,type:"submit"},r.a.createElement(Gn,null,"Submit")),r.a.createElement(Vn,{to:"/admin"},r.a.createElement(Mn,null,r.a.createElement(Gn,null,"Go Back")))):r.a.createElement(Wn,{onClick:F,type:"submit"},r.a.createElement(Gn,null,"Submit")):r.a.createElement($n,{disabled:!0,onClick:F,type:"submit"},r.a.createElement(Gn,null,"Submit")))))):r.a.createElement(m.a,{to:"/admin/login"})}function Zn(){var e=Object(i.a)(["\n  margin 0 5px;\n  color: #909090;\n  cursor: pointer;\n"]);return Zn=function(){return e},e}function et(){var e=Object(i.a)(["\n  margin: 0 5px;\n  text-decoration: none;\n  font-weight: bold;\n  color: #909090;\n"]);return et=function(){return e},e}function nt(){var e=Object(i.a)(["\n  justify-content: space-between;\n  background-color: #133564;\n  height: 60px;\n  align-items: center;\n  padding: 0px 25px;\n"]);return nt=function(){return e},e}var tt=Object(s.a)(p)(nt()),at=Object(s.a)(l.c)(et()),rt=Object(s.a)(v)(Zn());var ct=function(){var e=Object(a.useState)(!1),n=Object(o.a)(e,2),t=n[0],c=n[1],u=Object(a.useState)(!1),i=Object(o.a)(u,2),s=i[0],f=i[1];return Object(a.useEffect)(function(){JSON.parse(sessionStorage.getItem("user"))&&c(!0)},[t]),r.a.createElement(d,null,r.a.createElement(l.a,null,r.a.createElement(tt,null,r.a.createElement(at,{to:"/"},"Home"),r.a.createElement(p,null,r.a.createElement(rt,{onClick:function(){return f(!s)}},"Cart"),r.a.createElement(at,{to:"/admin"},"Admin"))),r.a.createElement(m.d,null,r.a.createElement(m.b,{exact:!0,path:"/",render:function(){return r.a.createElement(M,{showCart:s})}}),r.a.createElement(m.b,{exact:!0,path:"/admin",component:Le}),r.a.createElement(m.b,{exact:!0,path:"/admin/login",component:an}),r.a.createElement(m.b,{path:"/admin/login/create",component:wn}),r.a.createElement(m.b,{path:"/admin/login/password/reset",component:Yn}),r.a.createElement(m.b,{exact:!0,path:"/easter-eggs/tacos",component:Y}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(r.a.createElement(ct,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,1,2]]]);
//# sourceMappingURL=main.a280eec9.chunk.js.map