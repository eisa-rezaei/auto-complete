(this.webpackJsonplist=this.webpackJsonplist||[]).push([[0],{26:function(n,e,t){"use strict";t.r(e);var i=t(1),r=t.n(i),o=t(12),c=t.n(o),a=t(18),s=t(6),l=t(16),d=t(17);var u,f,b,p,j,x,h,g,m,O,v,w=t(3),y=t(4),S=y.b.section(u||(u=Object(w.a)(["\n  width: 100%;\n  height: 500px;\n  padding: 8vh 10vw;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: flex-start;\n  overflow: hidden;\n  background-color: #fff;\n  transition: all 0.5s;\n  :hover {\n    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);\n  }\n\n  @media (max-width: 700px) {\n    padding: 5vh 5vw;\n  }\n"]))),k=y.b.div(f||(f=Object(w.a)(["\n  width: 100%;\n  min-height: 60vh;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: flex-start;\n  & input {\n    min-width: 100%;\n    padding: 10px;\n    border-bottom: 2px solid #e0eeee;\n    :hover,\n    :focus {\n      border-bottom: 2px solid #00dd00;\n    }\n  }\n  & h3 {\n    margin-bottom: 10px;\n    align-self: center;\n    letter-spacing: 2px;\n    text-transform: uppercase;\n  }\n"]))),C=y.b.ul(b||(b=Object(w.a)(["\n  width: 100%;\n  height: clamp(30px, 60px);\n  margin: 10px 0;\n  border: 1px solid #f0ffff;\n  display: flex;\n  align-self: center;\n  flex-wrap: wrap;\n"]))),E=y.b.ul(p||(p=Object(w.a)(["\n  height: 30px;\n  padding: 5px;\n  font-size: 0.8rem;\n  display: flex;\n  align-items: center;\n  margin-right: 10px;\n  border: 1px solid saddlebrown;\n  background-color: #f0f0f0;\n  & svg {\n    color: #ffaaaa;\n    align-self: center;\n    cursor: pointer;\n  }\n"]))),W=y.b.ul(j||(j=Object(w.a)(["\n  width: 100%;\n  height: 300px;\n  padding: 10px;\n  height: auto;\n  overflow: auto;\n"]))),L=y.b.li(x||(x=Object(w.a)(["\n  height: auto;\n  padding: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background-color: ",";\n  & svg {\n    color: #00dd00;\n  }\n  :hover {\n    background-color: #f5f8fb;\n    cursor: pointer;\n  }\n"])),(function(n){return n.isSelected?"#f5fcf8":"#fff"})),B=t(2),R=[{title:"BTC",isSelected:!1,keyWords:"bitcoin \u0628\u06cc\u062a \u06a9\u0648\u06cc\u0646"},{title:"ETH",isSelected:!1,keyWords:"etherum \u0627\u062a\u0631\u06cc\u0648\u0645"},{title:"DOGE",isSelected:!1,keyWords:"doge coin \u062f\u0648\u062c \u06a9\u0648\u06cc\u0646"},{title:"BNB",isSelected:!1,keyWords:"binance coin \u0628\u0627\u06cc\u0646\u0646\u0633 \u06a9\u0648\u06cc\u0646"},{title:"RTX",isSelected:!1,keyWords:"tron \u062a\u0631\u0648\u0646"},{title:"XRP",isSelected:!1,keyWords:"ripple \u0631\u06cc\u067e\u0644"}],F=function(){var n=Object(i.useState)(R),e=Object(s.a)(n,2),t=e[0],r=e[1],o=Object(i.useState)(!1),c=Object(s.a)(o,2),u=c[0],f=c[1],b=Object(i.useState)([]),p=Object(s.a)(b,2),j=p[0],x=p[1],h=Object(i.useState)(""),g=Object(s.a)(h,2),m=g[0],O=g[1],v=Object(i.useRef)();!function(n,e){Object(i.useEffect)((function(){var t=function(t){n.current&&!n.current.contains(t.target)&&e(t)};return document.addEventListener("mousedown",t),document.addEventListener("touchstart",t),function(){document.removeEventListener("mousedown",t),document.removeEventListener("touchstart",t)}}),[n,e])}(v,(function(){return f(!1)}));return Object(B.jsx)(S,{children:Object(B.jsxs)(k,{ref:v,children:[Object(B.jsx)("h3",{children:"Auto Complete"}),Object(B.jsx)("input",{placeholder:"Search Here ... (EN/FA)",onChange:function(n){return O(n.target.value)},onClick:function(){return f(!0)},value:m,autoFocus:!0}),Object(B.jsx)(C,{children:null===j||void 0===j?void 0:j.map((function(n,e){return Object(B.jsxs)(E,{children:[n,Object(B.jsx)(l.a,{onClick:(i=n,function(){var n=j.filter((function(n){return n!==i})),e=t.map((function(n){return n.title===i&&n.isSelected&&(n.isSelected=!1),n}));x(n),r(e),O("")})})]},e);var i}))}),u?Object(B.jsx)(W,{children:t.filter((function(n){var e=n.title,t=n.keyWords;return e.toLowerCase().indexOf(m.toLowerCase())>=0||(null===t||void 0===t?void 0:t.indexOf(m))>=0})).map((function(n,e){var i,o=n.title,c=n.isSelected;return Object(B.jsxs)(L,{onClick:(i=o,function(){var n=t.map((function(n){return n.title!==i||n.isSelected||(n.isSelected=!0,x([].concat(Object(a.a)(j),[n.title]))),n}));r(n),O("")}),isSelected:c,children:[o,c?Object(B.jsx)(d.a,{}):null]},e)}))}):null]})})},H=y.b.main(h||(h=Object(w.a)(["\n  min-width: 100vw;\n  min-height: 100vh;\n  padding: 10vh 20vw;\n  user-select: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  @media (max-width: 700px) {\n    padding: 5vh 10vw;\n  }\n"]))),N=Object(y.a)(g||(g=Object(w.a)(["\n*,\n::after,\n::before {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nbody{\n    background-color: #f5f8fb;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\ninput{\n    outline: none;\n    border: none;\n}\nli {\n    list-style: none;\n}\nul{\n    padding: 0;\n}\n"]))),T=function(n){var e=n.children;return Object(B.jsxs)(H,{children:[e,Object(B.jsx)(N,{})]})},z=Object(y.c)(m||(m=Object(w.a)(["\nform{\n  transform: rotate(0deg);\n}\nto{\n  transform: rotate(360deg);\n\n}\n"]))),A=y.b.section(O||(O=Object(w.a)(["\n  min-width: 100vw;\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),I=y.b.div(v||(v=Object(w.a)(["\n  width: 70px;\n  height: 70px;\n  border-radius: 50%;\n  border: 2px solid #f0f0f0;\n  border-top: 3px solid green;\n  animation: "," 0.5s linear infinite;\n"])),z),J=function(){return Object(B.jsx)(A,{children:Object(B.jsx)(I,{})})};var M=function(){return Object(B.jsx)(i.Suspense,{fallback:Object(B.jsx)(J,{}),children:Object(B.jsx)(T,{children:Object(B.jsx)(F,{})})})};c.a.render(Object(B.jsx)(r.a.StrictMode,{children:Object(B.jsx)(M,{})}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.969e6a52.chunk.js.map