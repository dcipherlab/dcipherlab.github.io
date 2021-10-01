(this.webpackJsonpfrontend_base_dapp=this.webpackJsonpfrontend_base_dapp||[]).push([[0],{213:function(A){A.exports=JSON.parse('[{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"string","name":"_initBaseURI","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseExtension","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxMintAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_mintAmount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"removeWhitelistUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseExtension","type":"string"}],"name":"setBaseExtension","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newCost","type":"uint256"}],"name":"setCost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newmaxMintAmount","type":"uint256"}],"name":"setmaxMintAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"walletOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"whitelistUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"whitelisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"payable","type":"function"}]')},241:function(A,e){},250:function(A,e){},268:function(A,e){},270:function(A,e){},289:function(A,e){},290:function(A,e){},358:function(A,e){},360:function(A,e){},370:function(A,e){},372:function(A,e){},397:function(A,e){},399:function(A,e){},400:function(A,e){},405:function(A,e){},407:function(A,e){},420:function(A,e){},432:function(A,e){},435:function(A,e){},440:function(A,e){},448:function(A,e){},523:function(A,e,t){},524:function(A,e,t){},525:function(A,e,t){"use strict";t.r(e);var n,a,r,i,s,c,g,o,u,p,C,d,l,w=t(1),E=t(78),y=t.n(E),I=t(79),b=t(17),O=t(55),D=t(19),h=t.n(D),f=t(63),B=t(62),R=t.n(B),m=t(212),x=t.n(m),j=t(213),M=t(64),v=t(214),H=t(16),T={loading:!1,account:null,smartContract:null,web3:null,errorMsg:""},G=function(){var A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"CONNECTION_REQUEST":return Object(H.a)(Object(H.a)({},T),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(H.a)(Object(H.a)({},A),{},{loading:!1,account:e.payload.account,smartContract:e.payload.smartContract,web3:e.payload.web3});case"CONNECTION_FAILED":return Object(H.a)(Object(H.a)({},T),{},{loading:!1,errorMsg:e.payload});case"UPDATE_ACCOUNT":return Object(H.a)(Object(H.a)({},A),{},{account:e.payload.account});default:return A}},Y={loading:!1,name:"",totalSupply:0,cost:0,error:!1,errorMsg:""},Q=function(){var A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"CHECK_DATA_REQUEST":return Object(H.a)(Object(H.a)({},A),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(H.a)(Object(H.a)({},A),{},{loading:!1,name:e.payload.name,totalSupply:e.payload.totalSupply,cost:e.payload.cost,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(H.a)(Object(H.a)({},Y),{},{loading:!1,error:!0,errorMsg:e.payload});default:return A}},k=Object(M.b)({blockchain:G,data:Q}),z=[v.a],N=Object(M.c)(M.a.apply(void 0,z)),P=Object(M.d)(k,N),S=function(A){return{type:"CHECK_DATA_FAILED",payload:A}},F=function(A){return function(){var A=Object(f.a)(h.a.mark((function A(e){var t,n,a;return h.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return e({type:"CHECK_DATA_REQUEST"}),A.prev=1,A.next=4,P.getState().blockchain.smartContract.methods.name().call();case 4:return t=A.sent,A.next=7,P.getState().blockchain.smartContract.methods.totalSupply().call();case 7:return n=A.sent,A.next=10,P.getState().blockchain.smartContract.methods.cost().call();case 10:a=A.sent,e({type:"CHECK_DATA_SUCCESS",payload:{name:t,totalSupply:n,cost:a}}),A.next=18;break;case 14:A.prev=14,A.t0=A.catch(1),console.log(A.t0),e(S("Could not load data from contract."));case 18:case"end":return A.stop()}}),A,null,[[1,14]])})));return function(e){return A.apply(this,arguments)}}()},U=function(A){return{type:"CONNECTION_FAILED",payload:A}},Z=function(A){return function(){var e=Object(f.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"UPDATE_ACCOUNT",payload:{account:A}}),t(F());case 2:case"end":return e.stop()}}),e)})));return function(A){return e.apply(this,arguments)}}()},W=t(18),X=W.a.div(n||(n=Object(b.a)(["\n  background-color: var(--black);\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n"])),(function(A){var e=A.image;return e?"url(".concat(e,")"):"none"})),L=W.a.div(a||(a=Object(b.a)(["\n  height: 8px;\n  width: 8px;\n"]))),V=W.a.div(r||(r=Object(b.a)(["\n  height: 16px;\n  width: 16px;\n"]))),_=W.a.div(i||(i=Object(b.a)(["\n  height: 24px;\n  width: 24px;\n"]))),J=W.a.div(s||(s=Object(b.a)(["\n  height: 32px;\n  width: 32px;\n"]))),K=W.a.div(c||(c=Object(b.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  background-color: ",";\n  width: 100%;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n"])),(function(A){var e=A.flex;return e||0}),(function(A){var e=A.fd;return e||"column"}),(function(A){var e=A.jc;return e||"flex-start"}),(function(A){var e=A.ai;return e||"flex-start"}),(function(A){return A.test?"pink":"none"}),(function(A){var e=A.image;return e?"url(".concat(e,")"):"none"})),q=W.a.p(g||(g=Object(b.a)(["\n  color: var(--white);\n  font-size: 30px;\n  font-weight: 500;\n  line-height: 1.6;\n"]))),$=(W.a.p(o||(o=Object(b.a)(["\n  color: var(--white);\n  font-size: 14px;\n  line-height: 1.6;\n"]))),W.a.p(u||(u=Object(b.a)(["\n  color: var(--white);\n  font-size: 18px;\n  line-height: 1.6;\n"])))),AA=(W.a.div(p||(p=Object(b.a)(["\n  :active {\n    opacity: 0.6;\n  }\n"]))),t(5)),eA=W.a.button(C||(C=Object(b.a)(["\n  padding: 10px;\n  border-radius: 50px;\n  border: none;\n  background-color: #ffffff;\n  padding: 10px;\n  font-weight: bold;\n  color: #000000;\n  width: 300px;\n  cursor: pointer;\n  box-shadow: 2px 8px 4px -2px rgba(250, 250, 0, 0.5);\n  -webkit-box-shadow: 2px 3px 10px -2px rgba(250, 250, 0, 0.5);\n  -moz-box-shadow: 2px 8px 4px -2px rgba(250, 250, 0, 0.5);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n  :hover {\n    -webkit-box-shadow: 2px 3px 40px -2px rgba(250, 250, 0, 0.9);\n  }\n"]))),tA=W.a.div(d||(d=Object(b.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: stretched;\n  align-items: stretched;\n  width: 100%;\n  @media (min-width: 767px) {\n    flex-direction: column;\n  }\n"]))),nA=W.a.img(l||(l=Object(b.a)(["\n  width: 200px;\n  height: 200px;\n  @media (min-width: 1px) {\n    width: 800px;\n    height: 300px;\n  }\n  transition: width 0.5s;\n  transition: height 0.5s;\n"])));var aA=function(){var A=Object(O.b)(),e=Object(O.c)((function(A){return A.blockchain})),t=Object(O.c)((function(A){return A.data})),n=Object(w.useState)("Can you really decrypt your dcipher NFT?"),a=Object(I.a)(n,2),r=a[0],i=a[1],s=Object(w.useState)(!1),c=Object(I.a)(s,2),g=c[0],o=c[1],u=Object(w.useState)(""),p=Object(I.a)(u,2),C=p[0],d=p[1],l=function(){""!==e.account&&null!==e.smartContract&&A(F(e.account))};return Object(w.useEffect)((function(){l()}),[e.account]),Object(AA.jsx)(X,{style:{backgroundColor:"var(--black)"},children:Object(AA.jsxs)(K,{flex:1,ai:"center",style:{padding:36},children:[Object(AA.jsx)(q,{style:{textAlign:"center",fontSize:36},children:"Generated by dcipherlab"}),Object(AA.jsx)(_,{}),Object(AA.jsxs)(tA,{flex:1,style:{padding:12},children:[Object(AA.jsxs)(K,{flex:1,jc:"center",ai:"center",children:[Object(AA.jsx)(nA,{alt:"example",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAB8EAAAKHCAYAAAAR5zlHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAhdEVYdENyZWF0aW9uIFRpbWUAMjAyMTowOTozMCAxODo1MDoxNPzT4ywAACCdSURBVHhe7d0xbBzluoDhn9saUYY+xZZIUKZ0aQmJMljpkHAkl9SnSueaSAhRUKEoSmcJgRRSBXpMZwl63Lv2xcvcK87B94LxzsZ553mkT/wDPpZmdnZWf95j540xxsVvAwAAAAAAAACvvf+a/gkAAAAAAAAArz0RHAAAAAAAAIAMERwAAAAAAACADBEcAAAAAAAAgAwRHAAAAAAAAIAMERwAAAAAAACADBEcAAAAAAAAgAwRHAAAAAAAAIAMERwAAAAAAACADBEcAAAAAAAAgAwRHAAAAAAAAIAMERwAAAAAAACADBEcAAAAAAAAgAwRHAAAAAAAAIAMERwAAAAAAACADBEcAAAAAAAAgAwRHAAAAAAAAIAMERwAAAAAAACADBEcAAAAAAAAgAwRHAAAAAAAAIAMERwAAAAAAACADBEcAAAAAAAAgAwRHAAAAAAAAIAMERwAAAAAAACADBEcAAAAAAAAgAwRHAAAAAAAAIAMERwAAAAAAACADBEcAAAAAAAAgAwRHAAAAAAAAIAMERwAAAAAAACADBEcAAAAAAAAgAwRHAAAAAAAAIAMERwAAAAAAACADBEcAAAAAAAAgAwRHAAAAAAAAIAMERwAAAAAAACADBEcAAAAAAAAgAwRHAAAAAAAAIAMERwAAAAAAACADBEcAAAAAAAAgAwRHAAAAAAAAIAMERwAAAAAAACADBEcAAAAAAAAgAwRHAAAAAAAAIAMERwAAAAAAACADBEcAAAAAAAAgAwRHAAAAAAAAIAMERwAAAAAAACADBEcAAAAAAAAgAwRHAAAAAAAAIAMERwAAAAAAACADBEcAAAAAAAAgAwRHAAAAAAAAIAMERwAAAAAAACADBEcAAAAAAAAgAwRHAAAAAAAAIAMERwAAAAAAACADBEcAAAAAAAAgAwRHAAAAAAAAIAMERwAAAAAAACADBEcAAAAAAAAgAwRHAAAAAAAAIAMERwAAAAAAACADBEcAAAAAAAAgAwRHAAAAAAAAIAMERwAAAAAAACADBEcAAAAAAAAgAwRHAAAAAAAAIAMERwAAAAAAACADBEcAAAAAAAAgAwRHAAAAAAAAIAMERwAAAAAAACADBEcAAAAAAAAgAwRHAAAAAAAAIAMERwAAAAAAACADBEcAAAAAAAAgAwRHAAAAAAAAIAMERwAAAAAAACADBEcAAAAAAAAgAwRHAAAAAAAAIAMERwAAAAAAACADBEcAAAAAAAAgAwRHAAAAAAAAIAMERwAAAAAAACADBEcAAAAAAAAgAwRHAAAAAAAAIAMERwAAAAAAACADBEcAAAAAAAAgAwRHAAAAAAAAIAMERwAAAAAAACADBEcAAAAAAAAgAwRHAAAAAAAAIAMERwAAAAAAACADBEcAAAAAAAAgAwRHAAAAAAAAIAMERwAAAAAAACADBEcAAAAAAAAgAwRHAAAAAAAAIAMERwAAAAAAACADBEcAAAAAAAAgAwRHAAAAAAAAIAMERwAAAAAAACADBEcAAAAAAAAgAwRHAAAAAAAAIAMERwAAAAAAACADBEcAAAAAAAAgAwRHAAAAAAAAIAMERwAAAAAAACADBEcAAAAAAAAgAwRHAAAAAAAAIAMERwAAAAAAACADBEcAAAAAAAAgAwRHAAAAAAAAIAMERwAAAAAAACADBEcAAAAAAAAgAwRHAAAAAAAAIAMERwAAAAAAACADBEcAAAAAAAAgAwRHAAAAAAAAIAMERwAAAAAAACADBEcAAAAAAAAgAwRHAAAAAAAAIAMERwAAAAAAACADBEcAAAAAAAAgAwRHAAAAAAAAIAMERwAAAAAAACADBEcAAAAAAAAgAwRHAAAAAAAAIAMERwAAAAAAACADBEcAAAAAAAAgAwRHAAAAAAAAIAMERwAAAAAAACADBEcAAAAAAAAgAwRHAAAAAAAAIAMERwAAAAAAACADBEcAAAAAAAAgAwRHAAAAAAAAIAMERwAAAAAAACADBEcAAAAAAAAgAwRHAAAAAAAAIAMERwAAAAAAACADBEcAAAAAAAAgAwRHAAAAAAAAIAMERwAAAAAAACADBEcAAAAAAAAgAwRHAAAAAAAAIAMERwAAAAAAACADBEcAAAAAAAAgAwRHAAAAAAAAIAMERwAAAAAAACADBEcAAAAAAAAgAwRHAAAAAAAAIAMERwAAAAAAACADBEcAAAAAAAAgAwRHAAAAAAAAIAMERwAAAAAAACADBEcAAAAAAAAgAwRHAAAAAAAAIAMERwAAAAAAACADBEcAAAAAAAAgAwRHAAAAAAAAIAMERwAAAAAAACADBEcAAAAAAAAgAwRHAAAAAAAAIAMERwAAAAAAACADBEcAAAAAAAAgAwRHAAAAAAAAIAMERwAAAAAAACADBEcAAAAAAAAgAwRHAAAAAAAAIAMERwAAAAAAACADBEcAAAAAAAAgAwRHAAAAAAAAIAMERwAAAAAAACADBEcAAAAAAAAgAwRHAAAAAAAAIAMERwAAAAAAACADBEcAAAAAAAAgAwRHAAAAAAAAIAMERwAAAAAAACADBEcAAAAAAAAgAwRHAAAAAAAAIAMERwAAAAAAACADBEcAAAAAAAAgAwRHAAAAAAAAIAMERwAAAAAAACADBEcAAAAAAAAgAwRHAAAAAAAAIAMERwAAAAAAACADBEcAAAAAAAAgAwRHAAAAAAAAIAMERwAAAAAAACADBEcAAAAAAAAgAwRHAAAAAAAAIAMERwAAAAAAACADBEcAAAAAAAAgAwRHAAAAAAAAIAMERwAAAAAAACADBEcAAAAAAAAgAwRHAAAAAAAAIAMERwAAAAAAACADBEcAAAAAAAAgAwRHAAAAAAAAIAMERwAAAAAAACADBEcAAAAAAAAgAwRHAAAAAAAAIAMERwAAAAAAACADBEcAAAAAAAAgAwRHAAAAAAAAIAMERwAAAAAAACADBEcAAAAAAAAgAwRHAAAAAAAAIAMERwAAAAAAACADBEcAAAAAAAAgAwRHAAAAAAAAIAMERwAAAAAAACADBEcAAAAAAAAgAwRHAAAAAAAAIAMERwAAAAAAACADBEcAAAAAAAAgAwRHAAAAAAAAIAMERwAAAAAAACADBEcAAAAAAAAgAwRHAAAAAAAAIAMERwAAAAAAACADBEcAAAAAAAAgAwRHAAAAAAAAIAMERwAAAAAAACADBEcAAAAAAAAgAwRHAAAAAAAAIAMERwAAAAAAACADBEcAAAAAAAAgAwRHAAAAAAAAIAMERwAAAAAAACADBEcAAAAAAAAgAwRHAAAAAAAAIAMERwAAAAAAACADBEcAAAAAAAAgAwRHAAAAAAAAIAMERwAAAAAAACADBEcAAAAAAAAgAwRHAAAAAAAAIAMERwAAAAAAACADBEcAAAAAAAAgAwRHAAAAAAAAIAMERwAAAAAAACA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AAAAAAAAQIYIDgAAAAAAAECGCA4AAAAAAABAhggOAAAAAAAAQIYIDgAAAAAAAECGCA4AAAAAAABAhggOAAAAAAAAQIYIDgAAAAAAAECGCA4AAAAAAABAhggOAAAAAAAAQIYIDgAAAAAAAECGCA4AAAAAAABAhggOAAAAAAAAQIYIDgAAAAAAAECGCA4AAAAAAABAhggOAAAAAAAAQIYIDgAAAAAAAECGCA4AAAAAAABAhggOAAAAAAAAQIYIDgAAAAAAAECGCA4AAAAAAABAhggOAAAAAAAAQIYIDgAAAAAAAECGCA4AAAAAAABAhggOAAAAAAAAQIYIDgAAAAAAAECGCA4AAAAAAABAhggOAAAAAAAAQIYIDgAAAAAAAECGCA4AAAAAAABAhggOAAAAAAAAQIYIDgAAAAAAAECGCA4AAAAAAABAhggOAAAAAAAAQIYIDgAAAAAAAECGCA4AAAAAAABAhggOAAAAAAAAQIYIDgAAAAAAAECGCA4AAAAAAABAhggOAAAAAAAAQIYIDgAAAAAAAECGCA4AAAAAAABAhggOAAAAAAAAQIYIDgAAAAAAAECGCA4AAAAAAABAhggOAAAAAAAAQIYIDgAAAAAAAECGCA4AAAAAAABAhggOAAAAAAAAQIYIDgAAAAAAAECGCA4AAAAAAABAhggOAAAAAAAAQIYIDgAAAAAAAECGCA4AAAAAAABAhggOAAAAAAAAQIYIDgAAAAAAAECGCA4AAAAAAABAhggOAAAAAAAAQIYIDgAAAAAAAECGCA4AAAAAAABAhggOAAAAAAAAQIYIDgAAAAAAAECGCA4AAAAAAABAhggOAAAAAAAAQIYIDgAAAAAAAECGCA4AAAAAAABAhggOAAAAAAAAQIYIDgAAAAAAAECGCA4AAAAAAABAhggOAAAAAAAAQIYIDgAAAAAAAECGCA4AAAAAAABAhggOAAAAAAAAQIYIDgAAAAAAAECGCA4AAAAAAABAhggOAAAAAAAAQIYIDgAAAAAAAECGCA4AAAAAAABAhggOAAAAAAAAQIYIDgAAAAAAAECGCA4AAAAAAABAhggOAAAAAAAAQIYIDgAAAAAAAECGCA4AAAAAAABAhggOAAAAAAAAQIYIDgAAAAAAAECGCA4AAAAAAABAhggOAAAAAAAAQIYIDgAAAAAAAECGCA4AAAAAAABAhggOAAAAAAAAQIYIDgAAAAAAAECGCA4AAAAAAABAhggOAAAAAAAAQIYIDgAAAAAAAECGCA4AAAAAAABAhggOAAAAAAAAQIYIDgAAAAAAAECGCA4AAAAAAABAhggOAAAAAAAAQIYIDgAAAAAAAECGCA4AAAAAAABAhggOAAAAAAAAQIYIDgAAAAAAAECGCA4AAAAAAABAhggOAAAAAAAAQIYIDgAAAAAAAECGCA4AAAAAAABAhggOAAAAAAAAQIYIDgAAAAAAAECGCA4AAAAAAABAhggOAAAAAAAAQIYIDgAAAAAAAECGCA4AAAAAAABAhggOAAAAAAAAQIYIDgAAAAAAAECGCA4AAAAAAABAhggOAAAAAAAAQIYIDgAAAAAAAECGCA4AAAAAAABAhggOAAAAAAAAQIYIDgAAAAAAAECGCA4AAAAAAABAhggOAAAAAAAAQIYIDgAAAAAAAECGCA4AAAAAAABAhggOAAAAAAAAQIYIDgAAAAAAAECGCA4AAAAAAABAhggOAAAAAAAAQIYIDgAAAAAAAECGCA4AAAAAAABAhggOAAAAAAAAQIYIDgAAAAAAAECGCA4AAAAAAABAhggOAAAAAAAAQIYIDgAAAAAAAECGCA4AAAAAAABAhggOAAAAAAAAQIYIDgAAAAAAAECGCA4AAAAAAABAhggOAAAAAAAAQIYIDgAAAAAAAECGCA4AAAAAAABAhggOAAAAAAAAQIYIDgAAAAAAAECGCA4AAAAAAABAhggOAAAAAAAAQIYIDgAAAAAAAECGCA4AAAAAAABAhggOAAAAAAAAQIYIDgAAAAAAAECGCA4AAAAAAABAhggOAAAAAAAAQIYIDgAAAAAAAECGCA4AAAAAAABAhggOAAAAAAAAQIYIDgAAAAAAAECGCA4AAAAAAABAhggOAAAAAAAAQIYIDgAAAAAAAECGCA4AAAAAAABAhggOAAAAAAAAQIYIDgAAAAAAAECGCA4AAAAAAABAhggOAAAAAAAAQIYIDgAAAAAAAECGCA4AAAAAAABAhggOAAAAAAAAQIYIDgAAAAAAAECGCA4AAAAAAABAhggOAAAAAAAAQIYIDgAAAAAAAECGCA4AAAAAAABAhggOAAAAAAAAQIYIDgAAAAAAAECGCA4AAAAAAABAhggOAAAAAAAAQIYIDgAAAAAAAECGCA4AAAAAAABAhggOAAAAAAAAQIYIDgAAAAAAAECGCA4AAAAAAABAhggOAAAAAAAAQIYIDgAAAAAAAECGCA4AAAAAAABAhggOAAAAAAAAQIYIDgAAAAAAAECGCA4AAAAAAABAhggOAAAAAAAAQIYIDgAAAAAAAECGCA4AAAAAAABAhggOAAAAAAAAQIYIDgAAAAAAAECGCA4AAAAAAABAhggOAAAAAAAAQIYIDgAAAAAAAECGCA4AAAAAAABAhggOAAAAAAAAQIYIDgAAAAAAAECGCA4AAAAAAABAhggOAAAAAAAAQIYIDgAAAAAAAECGCA4AAAAAAABAhggOAAAAAAAAQIYIDgAAAAAAAECGCA4AAAAAAABAhggOAAAAAAAAQIYIDgAAAAAAAECGCA4AAAAAAABAhggOAAAAAAAAQIYIDgAAAAAAAECGCA4AAAAAAABAhggOAAAAAAAAQIYIDgAAAAAAAECGCA4AAAAAAABAhggOAAAAAAAAQIYIDgAAAAAAAEDEGP8NYBDPT4i1fvIAAAAASUVORK5CYII="}),Object(AA.jsx)(_,{}),Object(AA.jsxs)(q,{style:{textAlign:"center",fontSize:26},children:[t.totalSupply,"/8888"]})]}),Object(AA.jsx)(_,{}),Object(AA.jsx)(K,{flex:1,jc:"center",ai:"center",style:{backgroundColor:"#000000",padding:12},children:8888==Number(t.totalSupply)?Object(AA.jsxs)(AA.Fragment,{children:[Object(AA.jsx)(q,{style:{textAlign:"center"},children:"The sale has ended."}),Object(AA.jsx)(V,{}),Object(AA.jsxs)($,{style:{textAlign:"center"},children:["You can still buy and trade dcipher NFTs on NFT Marketplaces"," ",Object(AA.jsx)("a",{target:"",href:"https://app.nftrade.com/assets/avalanche/0x2f0c0b1496f0065ce0d13a300ac0343c816b8602",children:"NFTrade"})]})]}):Object(AA.jsxs)(AA.Fragment,{children:[Object(AA.jsx)(q,{style:{textAlign:"center"},children:"1 dcipher costs 0.35 AVAX"}),Object(AA.jsx)(L,{}),Object(AA.jsx)($,{style:{textAlign:"center"},children:Object(AA.jsx)("a",{href:"https://cchain.explorer.avax.network/address/0x2f0c0b1496f0065ce0d13a300ac0343c816b8602/",children:"Contract"})}),Object(AA.jsx)(J,{}),Object(AA.jsx)(V,{}),Object(AA.jsx)($,{style:{textAlign:"center"},children:r}),Object(AA.jsx)(_,{}),""===e.account||null===e.smartContract?Object(AA.jsxs)(K,{ai:"center",jc:"center",children:[Object(AA.jsx)($,{style:{textAlign:"center"}}),Object(AA.jsx)(V,{}),Object(AA.jsx)(eA,{onClick:function(e){e.preventDefault(),A(function(){var A=Object(f.a)(h.a.mark((function A(e){var t,n,a,r,i,s;return h.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return e({type:"CONNECTION_REQUEST"}),t=window,n=t.ethereum,a=n&&n.isMetaMask,A.next=5,window.ethereum.request({method:"eth_requestAccounts"});case 5:if(!a){A.next=23;break}return R.a.setProvider(n),r=new x.a(n),A.prev=8,A.next=11,n.request({method:"eth_requestAccounts"});case 11:return i=A.sent,A.next=14,n.request({method:"net_version"});case 14:1==A.sent?(s=new R.a(j,"0x2f0c0b1496f0065ce0d13a300ac0343c816b8602"),e({type:"CONNECTION_SUCCESS",payload:{account:i[0],smartContract:s,web3:r}}),n.on("accountsChanged",(function(A){e(Z(A[0]))})),n.on("chainChanged",(function(){window.location.reload()}))):e(U("Change network to Ethereum")),A.next=21;break;case 18:A.prev=18,A.t0=A.catch(8),e(U("Something went wrong"));case 21:A.next=24;break;case 23:e(U("Install Metamask"));case 24:case"end":return A.stop()}}),A,null,[[8,18]])})));return function(e){return A.apply(this,arguments)}}()),l()},children:"CONNECT WALLET"}),""!==e.errorMsg?Object(AA.jsxs)(AA.Fragment,{children:[Object(AA.jsx)(V,{}),Object(AA.jsx)($,{style:{textAlign:"center"},children:e.errorMsg})]}):null]}):Object(AA.jsxs)(K,{ai:"center",jc:"center",fd:"column",children:[Object(AA.jsx)("input",{id:"num",type:"number",min:"1",max:"20",placeholder:"1`",onChange:function(A){return d(A.target.value)}}),Object(AA.jsx)(_,{}),Object(AA.jsx)(_,{}),Object(AA.jsx)(eA,{disabled:g?1:0,onClick:function(t){var n;t.preventDefault(),(n=C)<=0||(i("Preparing your dcipher NFT..."),o(!0),e.smartContract.methods.mint(e.account,n).send({gasLimit:"3500000",to:"0x2f0c0b1496f0065ce0d13a300ac0343c816b8602",from:e.account,value:e.web3.utils.toWei((.35*n).toString(),"ether")}).once("error",(function(A){console.log(A),i("It seems the transaction was cancelled."),o(!1)})).then((function(t){i("Woohoo! Now you can decrypt and check out the rarity of your NFT"),o(!1),A(F(e.account))}))),l()},children:g?"Busy...":"Buy NFTs"})]})]})})]}),Object(AA.jsx)(V,{}),Object(AA.jsx)(K,{jc:"center",ai:"center",style:{width:"70%"},children:Object(AA.jsx)(V,{})})]})})},rA=function(A){A&&A instanceof Function&&t.e(3).then(t.bind(null,529)).then((function(e){var t=e.getCLS,n=e.getFID,a=e.getFCP,r=e.getLCP,i=e.getTTFB;t(A),n(A),a(A),r(A),i(A)}))};t(523),t(524);y.a.render(Object(AA.jsx)(O.a,{store:P,children:Object(AA.jsx)(aA,{})}),document.getElementById("root")),rA()}},[[525,1,2]]]);
//# sourceMappingURL=main.f80a9882.chunk.js.map
