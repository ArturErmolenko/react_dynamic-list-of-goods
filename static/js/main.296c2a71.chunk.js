(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{15:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var r=n(5),o=n.n(r),s=n(2),a=n(6),c=n(7),i=n(9),u=n(8),d=n(1),f=n.n(d),l=n(3),b=n.n(l),h=(n(15),n(0)),p=function(t){var e=t.goods;return Object(h.jsx)("ul",{children:e.map((function(t){return Object(h.jsx)("li",{style:{color:t.color},children:t.name},t.id)}))})};function j(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}))}var v=function(){var t=Object(s.a)(f.a.mark((function t(){var e;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j();case 2:return e=t.sent,t.abrupt("return",e.filter((function(t){return t.id<=5})));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),w=function(){var t=Object(s.a)(f.a.mark((function t(){var e;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j();case 2:return e=t.sent,t.abrupt("return",e.filter((function(t){return"red"===t.color})));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),m=function(t){Object(i.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(a.a)(this,n);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={goods:[]},t.showAllGoods=Object(s.a)(f.a.mark((function e(){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j();case 2:n=e.sent,t.setState({goods:n});case 4:case"end":return e.stop()}}),e)}))),t.showFirstFive=Object(s.a)(f.a.mark((function e(){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v();case 2:n=e.sent,t.setState({goods:n});case 4:case"end":return e.stop()}}),e)}))),t.showRed=Object(s.a)(f.a.mark((function e(){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w();case 2:n=e.sent,t.setState({goods:n});case 4:case"end":return e.stop()}}),e)}))),t}return Object(c.a)(n,[{key:"render",value:function(){var t=this.state.goods;return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"Dynamic list of Goods"}),Object(h.jsx)("button",{className:"ui brown basic button",type:"button",onClick:this.showAllGoods,children:"Load All goods"}),Object(h.jsx)("button",{className:"ui brown basic button",type:"button",onClick:this.showFirstFive,children:"Load 5 first goods"}),Object(h.jsx)("button",{className:"ui brown basic button",type:"button",onClick:this.showRed,children:"Load red goods"}),Object(h.jsx)(p,{goods:t})]})}}]),n}(b.a.Component),x=m;o.a.render(Object(h.jsx)(x,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.296c2a71.chunk.js.map