(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{141:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),i=r(232),l=r.n(i),o=(r(233),r(234),r(81),r(7)),s=r.n(o),c=r(60),d=r(79),h=function(e){var t=e.className,i=Object(a.useRef)(null),l=Object(c.c)(d.layoutContext),o=l[0],h=l[1],u=o.width/2,m=o.height/2;return Object(c.b)(h),Object(a.useEffect)(function(){var e=r(239),t=function(t){function r(r,a,n,i,l,o){var s;return(s=t.call(this)||this).x=r,s.y=a,s.dx=n,s.dy=i,s.size=l,s.color=o,s.blendMode=e.BLEND_MODES.ADD,l>0&&(s.beginFill(o),s.drawCircle(0,0,l),s.endFill()),s}return s()(r,t),r.prototype.move=function(e,t,r){this.x+=this.dx,this.y+=this.dy,(this.x<-this.size||this.x>t+this.size||this.y<-this.size||this.y>r+this.size)&&e.removeChild(this)},r.gen=function(e,t,a){var n=a*(Math.max(e,t)/5),i=.1*n+5,l=Math.random()*Math.PI*2;return new r(e/2,t/2,Math.cos(l)*i,Math.sin(l)*i,n,16777215*Math.random()&3355443)},r}(e.Graphics),a=function(e){function t(t,r,a,n,i,l,o,s){var c;return void 0===t&&(t=1),void 0===r&&(r=1),void 0===a&&(a=1),void 0===n&&(n=1),void 0===i&&(i=0),void 0===l&&(l=0),void 0===o&&(o=0),void 0===s&&(s=0),(c=e.call(this)||this).matrix=[t,0,0,0,i/255,0,r,0,0,l/255,0,0,a,0,o/255,0,0,0,n,s/255],c}return s()(t,e),t}(e.filters.ColorMatrixFilter),n=o.width/2,l=o.height/2,c=new e.Container,d=new e.Container,u=new e.Matrix;u.translate(50,50);var m=e.RenderTexture.create(n+100,l+100),f=e.RenderTexture.create(n+100,l+100),v=new e.Sprite(m);v.x=-50,v.y=-50;var x=new e.Sprite(f);x.x=-50,x.y=-50;var w=new e.filters.DisplacementFilter(x),b=new a(.9,.9,.9);v.filters=[w,b],c.addChild(d,v);var g=0,p=e.autoDetectRenderer(n,l,{view:i.current});return h.on("update",function(e){n=e.width/2,l=e.height/2,m.resize(n+100,l+100),f.resize(n+100,l+100),p.resize(n,l)}),h.on("animation-frame",function(){var e=Math.random(),r=Math.max(n,l)/4;g+=(4*Math.random()-2)*e,d.addChild(t.gen(n,l,e)),d.addChild(t.gen(n,l,e));var a=d.children,i=Array.isArray(a),o=0;for(a=i?a:a[Symbol.iterator]();;){var s;if(i){if(o>=a.length)break;s=a[o++]}else{if((o=a.next()).done)break;s=o.value}s.move(d,n,l)}w.scale.x=Math.cos(g)*e*r,w.scale.y=Math.sin(g)*e*r,p.render(v,m,!1,u),p.render(d,m,!1),p.render(c,f,!1,u),p.render(c)}),function(){return h.removeAllListeners()}},c.a),n.a.createElement("canvas",{className:t,ref:i,width:u,height:m})},u=r(341);t.default=function(){return n.a.createElement("div",{className:u.page},n.a.createElement(h,{className:l()(u.background,u.layer)}),n.a.createElement("div",{className:u.layer},n.a.createElement("h1",null,"JongChan Choi"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{href:"https://0xabcdef.com/resume/"},"resume")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://github.com/disjukr"},"github")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://twitter.com/disjukr"},"twitter")))))}},341:function(e,t,r){e.exports={page:"index-module--page--2nb-E",layer:"index-module--layer--12eg-",background:"index-module--background--1Lh-R"}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-81d97b717536b96b80d6.js.map