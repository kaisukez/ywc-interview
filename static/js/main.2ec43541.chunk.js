(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,n){e.exports=n.p+"static/media/doge.59002b53.jpg"},27:function(e,t,n){e.exports=n(46)},33:function(e,t,n){},42:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(22),o=n.n(i),c=n(48),l=n(49),s=n(50),u=(n(33),n(10)),m=n(11),h=n(16),d=n(12),g=n(8),p=n(17),f=n(6),v=n(5);function w(){var e=Object(f.a)(["\n  border: none;\n  outline: none;\n  background: rgb(42, 73, 92);\n  padding: 0px;\n  float: right;\n  color: white;\n  width: ",";\n  height: ",";\n  transition: all 0.5s;\n  cursor: pointer;\n  &:hover {\n    background: rgb(135, 195, 232);\n    box-shadow: 0px 0 150px 3px rgba(135, 195, 232, 0.1);\n  }\n\n  text-transform: uppercase;\n  font-weight: 600;\n"]);return w=function(){return e},e}function b(){var e=Object(f.a)(["\n  border: none;\n  outline: none;\n  font-size: 18px;\n  padding-left: 10px;\n  width: 100%;\n  height: 100%;\n"]);return b=function(){return e},e}function E(){var e=Object(f.a)(["\n  border-top: 4px solid rgb(42, 73, 92);\n  border-bottom: 4px solid rgb(42, 73, 92);\n  border-left: 4px solid rgb(42, 73, 92);\n  width: ",";\n  height: ",";\n  float: left;\n"]);return E=function(){return e},e}function j(){var e=Object(f.a)(["\n  height: ",";\n  box-shadow: 0px 0 60px 7px rgba(42, 73, 92, 0.8);\n"]);return j=function(){return e},e}var x=v.a.div(j(),function(e){return e.height||"50px"}),k=v.a.div(E(),function(e){return"calc(100% - "+e.width+"px)"||!1},function(e){return e.height+"px"}),N=v.a.input(b()),C=v.a.button(w(),function(e){return e.width+"px"},function(e){return e.height+"px"}),y=function(e){return r.a.createElement(x,{className:"SearchBar"},r.a.createElement(k,{width:120,height:50},r.a.createElement(N,{className:"lang-th",type:"text",value:e.inputValue,placeholder:"\u0e04\u0e49\u0e19\u0e2b\u0e32\u0e0a\u0e37\u0e48\u0e2d",onChange:e.handleInputChange,onKeyDown:e.handleInputKeyPress})),r.a.createElement(C,{id:"clear-button",onClick:e.handleClear,width:120,height:50},"Clear (ESC)"))};function O(){var e=Object(f.a)(["\n  text-align: center;\n  line-height: ",";\n  height: 100%;\n\n  background: ",";\n  box-shadow: ",";\n  color: white;\n  cursor: pointer;\n  transition: all 0.5s;\n  &:hover {\n    background: rgb(135, 195, 232);\n    box-shadow: 0px 0 75px 5px rgba(42, 73, 92, 0.55);\n  }\n\n  text-transform: uppercase;\n  font-weight: 600;\n"]);return O=function(){return e},e}function S(){var e=Object(f.a)(["\n  padding: ",";\n"]);return S=function(){return e},e}function I(){var e=Object(f.a)(["\n  height: ",";\n"]);return I=function(){return e},e}var M=v.a.div(I(),function(e){return e.height+"px"}),R=v.a.div(S(),function(e){return e.padding+"px"}),P=v.a.div(O(),function(e){return e.height-2*e.padding+"px"},function(e){return e.checked?"rgb(135, 195, 232)":"rgb(42, 73, 92)"},function(e){return e.checked?"0px 0 75px 5px rgba(42, 73, 92, 0.40)":"0 0 0 0 rgba(42, 73, 92, 0.85)"}),K=function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"row"},r.a.createElement(M,{className:"col-lg-3 col-sm-6",height:60},r.a.createElement(R,{padding:9},r.a.createElement(P,{height:60,padding:9,checked:"content"===e.major,onClick:function(){e.handleMajorChange("content")}},"Content"))),r.a.createElement(M,{className:"col-lg-3 col-sm-6",height:60},r.a.createElement(R,{padding:9},r.a.createElement(P,{height:60,padding:9,checked:"design"===e.major,onClick:function(){e.handleMajorChange("design")}},"Design"))),r.a.createElement(M,{className:"col-lg-3 col-sm-6",height:60},r.a.createElement(R,{padding:9},r.a.createElement(P,{height:60,padding:9,checked:"marketing"===e.major,onClick:function(){e.handleMajorChange("marketing")}},"Marketing"))),r.a.createElement(M,{className:"col-lg-3 col-sm-6",height:60},r.a.createElement(R,{padding:9},r.a.createElement(P,{height:60,padding:9,checked:"programming"===e.major,onClick:function(){e.handleMajorChange("programming")}},"Programming")))))},V=n(47),L=function(e){var t=0,n=function(e,t){return t.every(function(t){return e.firstName.includes(t)||e.lastName.includes(t)||e.major.includes(t.toLowerCase())||e.interviewRef.includes(t.toUpperCase())})},a=function(){var a,r=e.inputValue.split(" ").filter(function(e){return""!==e});return 0===r.length?a=e.intervieweeList.filter(function(t){return t.major===e.major}):(a=e.intervieweeList.filter(function(e){return n(e,r)}),t=1),a}();return 0===a.length&&0===t?r.a.createElement("div",null,r.a.createElement("p",{className:"text-center white lang-th"},"\u0e01\u0e33\u0e25\u0e31\u0e07\u0e42\u0e2b\u0e25\u0e14\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25")):0===a.length&&1===t?r.a.createElement("div",null,r.a.createElement("p",{className:"text-center white lang-th"},"\u0e02\u0e2d\u0e2d\u0e20\u0e31\u0e22 \u0e44\u0e21\u0e48\u0e40\u0e08\u0e2d\u0e0a\u0e37\u0e48\u0e2d\u0e17\u0e35\u0e48\u0e04\u0e38\u0e13\u0e04\u0e49\u0e19\u0e2b\u0e32"),r.a.createElement("p",{className:"text-center white lang-th"},"\u0e25\u0e2d\u0e07\u0e01\u0e23\u0e2d\u0e01\u0e43\u0e2b\u0e21\u0e48\u0e2d\u0e35\u0e01\u0e04\u0e23\u0e31\u0e49\u0e07")):r.a.createElement("div",null,r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{className:"semi-bold th-left lang-th"},"\u0e23\u0e2b\u0e31\u0e2a"),r.a.createElement("th",{className:"semi-bold th-right lang-th"},"\u0e0a\u0e37\u0e48\u0e2d - \u0e19\u0e32\u0e21\u0e2a\u0e01\u0e38\u0e25"))),r.a.createElement("tbody",null,function(e){return e.map(function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",{className:"semi-bold"},e.interviewRef),r.a.createElement("td",null,r.a.createElement(V.a,{className:"lang-th link",to:"/ywc-interview/ref/".concat(e.interviewRef.toLowerCase())},e.firstName+" "+e.lastName)))})}(a))))};n(42);function z(){var e=Object(f.a)(["\n  margin-top: ","\n"]);return z=function(){return e},e}var U=v.a.div(z(),function(e){return e.margin}),A=[{firstName:"Naruto",lastName:"Uzumaki",major:"content",interviewRef:"CT01"},{firstName:"Sasuke",lastName:"Uchiha",major:"design",interviewRef:"DS01"},{firstName:"Sakura",lastName:"Haruno",major:"marketing",interviewRef:"MK01"},{firstName:"Kakashi",lastName:"Hatake",major:"programming",interviewRef:"PG01"},{firstName:"Boruto",lastName:"Uzumaki",major:"content",interviewRef:"CT02"},{firstName:"Sarada",lastName:"Uchiha",major:"design",interviewRef:"DS02"},{firstName:"Konohamaru",lastName:"Sarutobi",major:"marketing",interviewRef:"MK02"},{firstName:"Zabuza",lastName:"Momochi",major:"programming",interviewRef:"PG02"}],T=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={intervieweeList:[],inputValue:"",major:"content",majorTemp:"content"},n.handleInputChange=n.handleInputChange.bind(Object(g.a)(n)),n.handleMajorChange=n.handleMajorChange.bind(Object(g.a)(n)),n.handleClear=n.handleClear.bind(Object(g.a)(n)),n.handleInputKeyPress=n.handleInputKeyPress.bind(Object(g.a)(n)),n}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.setState({intervieweeList:A})}},{key:"handleInputChange",value:function(e){this.setState({inputValue:e.target.value,major:""===e.target.value?this.state.majorTemp:"none"})}},{key:"handleInputKeyPress",value:function(e){"Escape"===e.key&&this.setState({inputValue:"",major:this.state.majorTemp})}},{key:"handleClear",value:function(){this.setState({inputValue:"",major:this.state.majorTemp})}},{key:"handleMajorChange",value:function(e){this.setState({major:e,majorTemp:e,inputValue:""})}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(U,{margin:"20px"}),r.a.createElement("h1",{className:"header white lang-th"},"\u0e1c\u0e39\u0e49\u0e1c\u0e48\u0e32\u0e19\u0e40\u0e02\u0e49\u0e32\u0e23\u0e2d\u0e1a\u0e2a\u0e31\u0e21\u0e20\u0e32\u0e29\u0e13\u0e4c YWC15"),r.a.createElement(U,{margin:"20px"}),r.a.createElement(y,{inputValue:this.state.inputValue,handleInputChange:this.handleInputChange,handleClear:this.handleClear,handleInputKeyPress:this.handleInputKeyPress}),r.a.createElement(U,{margin:"15px"}),r.a.createElement(K,{major:this.state.major,handleMajorChange:this.handleMajorChange}),r.a.createElement(U,{margin:"20px"}),r.a.createElement(L,{intervieweeList:this.state.intervieweeList,major:this.state.major,inputValue:this.state.inputValue}),r.a.createElement(U,{margin:"20px"}))}}]),t}(a.Component),D=n(25),F=n.n(D);function W(){var e=Object(f.a)(["\n  margin-top: ","\n"]);return W=function(){return e},e}var B=v.a.div(W(),function(e){return e.margin}),G=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={refno:n.props.match.params.refno.toUpperCase(),name:void 0,major:void 0,loadState:"init"},n}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=A.filter(function(t){return t.interviewRef===e.state.refno});this.setState({name:t[0].firstName+" "+t[0].lastName,major:t[0].major,loadState:"success"})}},{key:"capitalize",value:function(e){return e.charAt(0).toUpperCase()+e.slice(1)}},{key:"render",value:function(){return"init"===this.state.loadState?r.a.createElement("div",{className:"IndividualPageApp"},r.a.createElement(B,{margin:"20px"}),r.a.createElement("p",{className:"text-center white lang-th"},"\u0e01\u0e33\u0e25\u0e31\u0e07\u0e42\u0e2b\u0e25\u0e14\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25")):"fail"===this.state.loadState?r.a.createElement("div",{className:"IndividualPageApp"},r.a.createElement(B,{margin:"20px"}),r.a.createElement("p",{className:"text-center white lang-th"},"\u0e02\u0e2d\u0e2d\u0e20\u0e31\u0e22 \u0e44\u0e21\u0e48\u0e40\u0e08\u0e2d\u0e2b\u0e19\u0e49\u0e32\u0e17\u0e35\u0e48\u0e04\u0e38\u0e13\u0e04\u0e49\u0e19\u0e2b\u0e32")):r.a.createElement("div",{className:"IndividualPageApp"},r.a.createElement(B,{margin:"20px"}),r.a.createElement("p",{className:"big-font text-center white lang-th"},"\u0e22\u0e34\u0e19\u0e14\u0e35\u0e14\u0e49\u0e27\u0e22!"),r.a.createElement("p",{className:"big-font text-center white lang-th"},"\u0e04\u0e38\u0e13 ".concat(this.state.name)),r.a.createElement("p",{className:"big-font text-center white lang-th"},"\u0e1c\u0e48\u0e32\u0e19\u0e40\u0e02\u0e49\u0e32\u0e23\u0e2d\u0e1a\u0e2a\u0e31\u0e21\u0e20\u0e32\u0e29\u0e13\u0e4c YWC15 \u0e2a\u0e32\u0e02\u0e32 ".concat(this.capitalize(this.state.major))),r.a.createElement(B,{margin:"40px"}),r.a.createElement("img",{src:F.a,className:"congrat-image",alt:"doge"}),r.a.createElement(B,{margin:"25px"}),r.a.createElement("div",{className:"center"},r.a.createElement("div",{className:"fb-share-button","data-href":"https://kaisukez.github.io/ywc-interview/","data-layout":"button","data-size":"small","data-mobile-iframe":"true"},r.a.createElement("a",{className:"fb-xfbml-parse-ignore ref-link lang-th",href:"https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fkaisukez.github.io%2Fywc-interview%2Fref%2F".concat(this.state.refno,"&amp;src=sdkpreparse")},"\u0e41\u0e0a\u0e23\u0e4c\u0e25\u0e07 Facebook")),r.a.createElement(B,{margin:"10px"}),r.a.createElement(V.a,{to:"/ywc-interview",className:"ref-link lang-th"},"\u0e01\u0e25\u0e31\u0e1a\u0e2b\u0e19\u0e49\u0e32\u0e2b\u0e25\u0e31\u0e01")))}}]),t}(a.Component),H=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function J(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}o.a.render(r.a.createElement(c.a,null,r.a.createElement(l.a,null,r.a.createElement(s.a,{path:"/ywc-interview/ref/:refno",component:G}),r.a.createElement(s.a,{path:"/ywc-interview/",component:T}))),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/ywc-interview",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/ywc-interview","/service-worker.js");H?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):J(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):J(e)})}}()}},[[27,1,2]]]);
//# sourceMappingURL=main.2ec43541.chunk.js.map