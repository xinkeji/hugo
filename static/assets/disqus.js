!function(b,a){"object"==typeof exports&&"undefined"!=typeof module?module.exports=a():"function"==typeof define&&define.amd?define(a):(b="undefined"!=typeof globalThis?globalThis:b||self).DisqusJS=a()}(this,function(){"use strict";function V(c,d,e,f,g,h,i){try{var a=c[h](i),b=a.value}catch(j){e(j);return}a.done?d(b):Promise.resolve(b).then(f,g)}function W(a){return function(){var b=this,c=arguments;return new Promise(function(e,f){var g=a.apply(b,c);function d(a){V(g,e,f,d,h,"next",a)}function h(a){V(g,e,f,d,h,"throw",a)}d(void 0)})}}function X(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function Y(d){for(var a=1;a<arguments.length;a++){var c=null!=arguments[a]?arguments[a]:{},b=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(b=b.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),b.forEach(function(a){X(d,a,c[a])})}return d}function Z(a,d){if(null==a)return{};var b,c,e=function(c,f){if(null==c)return{};var a,b,d={},e=Object.keys(c);for(b=0;b<e.length;b++)a=e[b],f.indexOf(a)>=0||(d[a]=c[a]);return d}(a,d);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(c=0;c<f.length;c++)b=f[c],!(d.indexOf(b)>=0)&&Object.prototype.propertyIsEnumerable.call(a,b)&&(e[b]=a[b])}return e}var i,$,_,aa,L,a,M,N,O,ab,P,ac={},Q=[],ad=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function ae(a,b){for(var c in b)a[c]=b[c];return a}function af(a){var b=a.parentNode;b&&b.removeChild(a)}function j(b,d,g){var e,f,a,c={};for(a in d)"key"==a?e=d[a]:"ref"==a?f=d[a]:c[a]=d[a];if(arguments.length>2&&(c.children=arguments.length>3?L.call(arguments,2):g),"function"==typeof b&&null!=b.defaultProps)for(a in b.defaultProps)void 0===c[a]&&(c[a]=b.defaultProps[a]);return ag(b,c,e,f,null)}function ag(d,e,f,g,b){var c={type:d,props:e,key:f,ref:g,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==b?++M:b};return null==b&&null!=a.vnode&&a.vnode(c),c}function k(){return{current:null}}function e(a){return a.children}function c(a,b){this.props=a,this.context=b}function ah(a,b){if(null==b)return a.__?ah(a.__,a.__.__k.indexOf(a)+1):null;for(var c;b<a.__k.length;b++)if(null!=(c=a.__k[b])&&null!=c.__e)return c.__e;return"function"==typeof a.type?ah(a):null}function ai(a){var b,c;if(null!=(a=a.__)&&null!=a.__c){for(a.__e=a.__c.base=null,b=0;b<a.__k.length;b++)if(null!=(c=a.__k[b])&&null!=c.__e){a.__e=a.__c.base=c.__e;break}return ai(a)}}function aj(b){(!b.__d&&(b.__d=!0)&&N.push(b)&&!R.__r++||ab!==a.debounceRendering)&&((ab=a.debounceRendering)||O)(R)}function R(){for(var a;R.__r=N.length;)a=N.sort(function(a,b){return a.__v.__b-b.__v.__b}),N=[],a.some(function(f){var c,d,g,a,b,e;f.__d&&(b=(a=(c=f).__v).__e,(e=c.__P)&&(d=[],(g=ae({},a)).__v=a.__v+1,ar(e,a,g,c.__n,void 0!==e.ownerSVGElement,null!=a.__h?[b]:null,d,null==b?ah(a):b,a.__h),as(d,a),a.__e!=b&&ai(a)))})}function ak(k,n,f,l,p,q,r,s,g,t){var b,i,c,a,j,m,h,d=l&&l.__k||Q,o=d.length;for(f.__k=[],b=0;b<n.length;b++)if(null!=(a=f.__k[b]=null==(a=n[b])||"boolean"==typeof a?null:"string"==typeof a||"number"==typeof a||"bigint"==typeof a?ag(null,a,null,null,a):Array.isArray(a)?ag(e,{children:a},null,null,null):a.__b>0?ag(a.type,a.props,a.key,null,a.__v):a)){if(a.__=f,a.__b=f.__b+1,null===(c=d[b])||c&&a.key==c.key&&a.type===c.type)d[b]=void 0;else for(i=0;i<o;i++){if((c=d[i])&&a.key==c.key&&a.type===c.type){d[i]=void 0;break}c=null}ar(k,a,c=c||ac,p,q,r,s,g,t),j=a.__e,(i=a.ref)&&c.ref!=i&&(h||(h=[]),c.ref&&h.push(c.ref,null,a),h.push(i,a.__c||j,a)),null!=j?(null==m&&(m=j),"function"==typeof a.type&&a.__k===c.__k?a.__d=g=al(a,g,k):g=am(k,a,c,d,j,g),"function"==typeof f.type&&(f.__d=g)):g&&c.__e==g&&g.parentNode!=k&&(g=ah(c))}for(f.__e=m,b=o;b--;)null!=d[b]&&("function"==typeof f.type&&null!=d[b].__e&&d[b].__e==f.__d&&(f.__d=ah(l,b+1)),av(d[b],d[b]));if(h)for(b=0;b<h.length;b++)au(h[b],h[++b],h[++b])}function al(e,b,f){for(var a,c=e.__k,d=0;c&&d<c.length;d++)(a=c[d])&&(a.__=e,b="function"==typeof a.type?al(a,b,f):am(f,a,a,c,a.__e,b));return b}function S(a,b){return b=b||[],null==a||"boolean"==typeof a||(Array.isArray(a)?a.some(function(a){S(a,b)}):b.push(a)),b}function am(e,f,h,i,a,b){var c,d,g;if(void 0!==f.__d)c=f.__d,f.__d=void 0;else if(null==h||a!=b||null==a.parentNode)n:if(null==b||b.parentNode!==e)e.appendChild(a),c=null;else{for(d=b,g=0;(d=d.nextSibling)&&g<i.length;g+=2)if(d==a)break n;e.insertBefore(a,b),c=b}return void 0!==c?c:a.nextSibling}function an(c,b,a){"-"===b[0]?c.setProperty(b,a):c[b]=null==a?"":"number"!=typeof a||ad.test(b)?a:a+"px"}function ao(c,a,b,d,f){var e;n:if("style"===a){if("string"==typeof b)c.style.cssText=b;else{if("string"==typeof d&&(c.style.cssText=d=""),d)for(a in d)b&&a in b||an(c.style,a,"");if(b)for(a in b)d&&b[a]===d[a]||an(c.style,a,b[a])}}else if("o"===a[0]&&"n"===a[1])e=a!==(a=a.replace(/Capture$/,"")),a=a.toLowerCase() in c?a.toLowerCase().slice(2):a.slice(2),c.l||(c.l={}),c.l[a+e]=b,b?d||c.addEventListener(a,e?aq:ap,e):c.removeEventListener(a,e?aq:ap,e);else if("dangerouslySetInnerHTML"!==a){if(f)a=a.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("href"!==a&&"list"!==a&&"form"!==a&&"tabIndex"!==a&&"download"!==a&&a in c)try{c[a]=null==b?"":b;break n}catch(g){}"function"==typeof b||(null!=b&&(!1!==b||"a"===a[0]&&"r"===a[1])?c.setAttribute(a,b):c.removeAttribute(a))}}function ap(b){this.l[b.type+ !1](a.event?a.event(b):b)}function aq(b){this.l[b.type+ !0](a.event?a.event(b):b)}function ar(t,d,f,k,u,l,p,m,n){var g,b,r,s,v,x,w,h,o,j,q,i=d.type;if(void 0!==d.constructor)return null;null!=f.__h&&(n=f.__h,m=d.__e=f.__e,d.__h=null,l=[m]),(g=a.__b)&&g(d);try{n:if("function"==typeof i){if(h=d.props,o=(g=i.contextType)&&k[g.__c],j=g?o?o.props.value:g.__:k,f.__c?w=(b=d.__c=f.__c).__=b.__E:("prototype"in i&&i.prototype.render?d.__c=b=new i(h,j):(d.__c=b=new c(h,j),b.constructor=i,b.render=aw),o&&o.sub(b),b.props=h,b.state||(b.state={}),b.context=j,b.__n=k,r=b.__d=!0,b.__h=[]),null==b.__s&&(b.__s=b.state),null!=i.getDerivedStateFromProps&&(b.__s==b.state&&(b.__s=ae({},b.__s)),ae(b.__s,i.getDerivedStateFromProps(h,b.__s))),s=b.props,v=b.state,r)null==i.getDerivedStateFromProps&&null!=b.componentWillMount&&b.componentWillMount(),null!=b.componentDidMount&&b.__h.push(b.componentDidMount);else{if(null==i.getDerivedStateFromProps&&h!==s&&null!=b.componentWillReceiveProps&&b.componentWillReceiveProps(h,j),!b.__e&&null!=b.shouldComponentUpdate&& !1===b.shouldComponentUpdate(h,b.__s,j)||d.__v===f.__v){b.props=h,b.state=b.__s,d.__v!==f.__v&&(b.__d=!1),b.__v=d,d.__e=f.__e,d.__k=f.__k,d.__k.forEach(function(a){a&&(a.__=d)}),b.__h.length&&p.push(b);break n}null!=b.componentWillUpdate&&b.componentWillUpdate(h,b.__s,j),null!=b.componentDidUpdate&&b.__h.push(function(){b.componentDidUpdate(s,v,x)})}b.context=j,b.props=h,b.state=b.__s,(g=a.__r)&&g(d),b.__d=!1,b.__v=d,b.__P=t,g=b.render(b.props,b.state,b.context),b.state=b.__s,null!=b.getChildContext&&(k=ae(ae({},k),b.getChildContext())),r||null==b.getSnapshotBeforeUpdate||(x=b.getSnapshotBeforeUpdate(s,v)),q=null!=g&&g.type===e&&null==g.key?g.props.children:g,ak(t,Array.isArray(q)?q:[q],d,f,k,u,l,p,m,n),b.base=d.__e,d.__h=null,b.__h.length&&p.push(b),w&&(b.__E=b.__=null),b.__e=!1}else null==l&&d.__v===f.__v?(d.__k=f.__k,d.__e=f.__e):d.__e=at(f.__e,d,f,k,u,l,p,n);(g=a.diffed)&&g(d)}catch(y){d.__v=null,(n||null!=l)&&(d.__e=m,d.__h=!!n,l[l.indexOf(m)]=null),a.__e(y,d,f)}}function as(b,c){a.__c&&a.__c(c,b),b.some(function(c){try{b=c.__h,c.__h=[],b.some(function(a){a.call(c)})}catch(d){a.__e(d,c.__v)}})}function at(b,i,j,n,l,c,o,h){var k,m,f,g=j.props,d=i.props,e=i.type,a=0;if("svg"===e&&(l=!0),null!=c){for(;a<c.length;a++)if((k=c[a])&&"setAttribute"in k== !!e&&(e?k.localName===e:3===k.nodeType)){b=k,c[a]=null;break}}if(null==b){if(null===e)return document.createTextNode(d);b=l?document.createElementNS("http://www.w3.org/2000/svg",e):document.createElement(e,d.is&&d),c=null,h=!1}if(null===e)g===d||h&&b.data===d||(b.data=d);else{if(c=c&&L.call(b.childNodes),m=(g=j.props||ac).dangerouslySetInnerHTML,f=d.dangerouslySetInnerHTML,!h){if(null!=c)for(g={},a=0;a<b.attributes.length;a++)g[b.attributes[a].name]=b.attributes[a].value;(f||m)&&(f&&(m&&f.__html==m.__html||f.__html===b.innerHTML)||(b.innerHTML=f&&f.__html||""))}if(function(d,b,c,e,f){var a;for(a in c)"children"===a||"key"===a||a in b||ao(d,a,null,c[a],e);for(a in b)f&&"function"!=typeof b[a]||"children"===a||"key"===a||"value"===a||"checked"===a||c[a]===b[a]||ao(d,a,b[a],c[a],e)}(b,d,g,l,h),f)i.__k=[];else if(a=i.props.children,ak(b,Array.isArray(a)?a:[a],i,j,n,l&&"foreignObject"!==e,c,o,c?c[0]:j.__k&&ah(j,0),h),null!=c)for(a=c.length;a--;)null!=c[a]&&af(c[a]);h||("value"in d&& void 0!==(a=d.value)&&(a!==b.value||"progress"===e&&!a||"option"===e&&a!==g.value)&&ao(b,"value",a,g.value,!1),"checked"in d&& void 0!==(a=d.checked)&&a!==b.checked&&ao(b,"checked",a,g.checked,!1))}return b}function au(b,c,d){try{"function"==typeof b?b(c):b.current=c}catch(e){a.__e(e,d)}}function av(c,e,f){var b,d;if(a.unmount&&a.unmount(c),(b=c.ref)&&(b.current&&b.current!==c.__e||au(b,null,e)),null!=(b=c.__c)){if(b.componentWillUnmount)try{b.componentWillUnmount()}catch(g){a.__e(g,e)}b.base=b.__P=null}if(b=c.__k)for(d=0;d<b.length;d++)b[d]&&av(b[d],e,"function"!=typeof c.type);f||null==c.__e||af(c.__e),c.__e=c.__d=void 0}function aw(a,c,b){return this.constructor(a,b)}function ax(g,b,c){var d,f,h;a.__&&a.__(g,b),f=(d="function"==typeof c)?null:c&&c.__k||b.__k,h=[],ar(b,g=(!d&&c||b).__k=j(e,null,[g]),f||ac,ac,void 0!==b.ownerSVGElement,!d&&c?[c]:f?null:b.firstChild?L.call(b.childNodes):null,h,!d&&c?c:f?f.__e:b.firstChild,d),as(h,g)}function ay(a,b){ax(a,b,ay)}function az(b,c,g){var e,f,a,d=ae({},b.props);for(a in c)"key"==a?e=c[a]:"ref"==a?f=c[a]:d[a]=c[a];return arguments.length>2&&(d.children=arguments.length>3?L.call(arguments,2):g),ag(b.type,d,e||b.key,f||b.ref,null)}function l(b,c){var a={__c:c="__cC"+P++,__:b,Consumer:function(a,b){return a.children(b)},Provider:function(a){var b,d;return this.getChildContext||(b=[],(d={})[c]=this,this.getChildContext=function(){return d},this.shouldComponentUpdate=function(a){this.props.value!==a.value&&b.some(aj)},this.sub=function(a){b.push(a);var c=a.componentWillUnmount;a.componentWillUnmount=function(){b.splice(b.indexOf(a),1),c&&c.call(a)}}),a.children}};return a.Provider.__=a.Consumer.contextType=a}L=Q.slice,a={__e:function(b,c,h,f){for(var a,d,e;c=c.__;)if((a=c.__c)&&!a.__)try{if((d=a.constructor)&&null!=d.getDerivedStateFromError&&(a.setState(d.getDerivedStateFromError(b)),e=a.__d),null!=a.componentDidCatch&&(a.componentDidCatch(b,f||{}),e=a.__d),e)return a.__E=a}catch(g){b=g}throw b}},M=0,c.prototype.setState=function(a,c){var b;b=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=ae({},this.state),"function"==typeof a&&(a=a(ae({},b),this.props)),a&&ae(b,a),null!=a&&this.__v&&(c&&this.__h.push(c),aj(this))},c.prototype.forceUpdate=function(a){this.__v&&(this.__e=!0,a&&this.__h.push(a),aj(this))},c.prototype.render=e,N=[],O="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,R.__r=0,P=0;var aA,aB,aC,aD=0,aE=[],aF=a.__b,aG=a.__r,aH=a.diffed,aI=a.__c,aJ=a.unmount;function aK(b,d){a.__h&&a.__h(aB,b,aD||d),aD=0;var c=aB.__H||(aB.__H={__:[],__h:[]});return b>=c.__.length&&c.__.push({}),c.__[b]}function m(a){return aD=1,n(aQ,a)}function n(d,b,c){var a=aK(aA++,2);return a.t=d,a.__c||(a.__=[c?c(b):aQ(void 0,b),function(c){var b=a.t(a.__[0],c);a.__[0]!==b&&(a.__=[b,a.__[1]],a.__c.setState({}))}],a.__c=aB),a.__}function o(d,c){var b=aK(aA++,3);!a.__s&&aP(b.__H,c)&&(b.__=d,b.__H=c,aB.__H.__h.push(b))}function p(d,c){var b=aK(aA++,4);!a.__s&&aP(b.__H,c)&&(b.__=d,b.__H=c,aB.__h.push(b))}function q(a){return aD=5,s(function(){return{current:a}},[])}function r(b,c,a){aD=6,p(function(){return"function"==typeof b?(b(c()),function(){return b(null)}):b?(b.current=c(),function(){return b.current=null}):void 0},null==a?a:a.concat(b))}function s(b,c){var a=aK(aA++,7);return aP(a.__H,c)&&(a.__=b(),a.__H=c,a.__h=b),a.__}function t(b,a){return aD=8,s(function(){return b},a)}function u(a){var b=aB.context[a.__c],c=aK(aA++,9);return c.c=a,b?(null==c.__&&(c.__=!0,b.sub(aB)),b.props.value):a.__}function v(b,c){a.useDebugValue&&a.useDebugValue(c?c(b):b)}function aL(){for(var b;b=aE.shift();)if(b.__P)try{b.__H.__h.forEach(aN),b.__H.__h.forEach(aO),b.__H.__h=[]}catch(c){b.__H.__h=[],a.__e(c,b.__v)}}a.__b=function(a){aB=null,aF&&aF(a)},a.__r=function(b){aG&&aG(b),aA=0;var a=(aB=b.__c).__H;a&&(a.__h.forEach(aN),a.__h.forEach(aO),a.__h=[])},a.diffed=function(c){aH&&aH(c);var b=c.__c;b&&b.__H&&b.__H.__h.length&&(1!==aE.push(b)&&aC===a.requestAnimationFrame||((aC=a.requestAnimationFrame)||function(c){var b,a=function(){clearTimeout(d),aM&&cancelAnimationFrame(b),setTimeout(c)},d=setTimeout(a,100);aM&&(b=requestAnimationFrame(a))})(aL)),aB=null},a.__c=function(c,b){b.some(function(c){try{c.__h.forEach(aN),c.__h=c.__h.filter(function(a){return!a.__||aO(a)})}catch(d){b.some(function(a){a.__h&&(a.__h=[])}),b=[],a.__e(d,c.__v)}}),aI&&aI(c,b)},a.unmount=function(c){aJ&&aJ(c);var d,b=c.__c;b&&b.__H&&(b.__H.__.forEach(function(a){try{aN(a)}catch(b){d=b}}),d&&a.__e(d,b.__v))};var aM="function"==typeof requestAnimationFrame;function aN(a){var c=aB,b=a.__c;"function"==typeof b&&(a.__c=void 0,b()),aB=c}function aO(a){var b=aB;a.__c=a.__(),aB=b}function aP(a,b){return!a||a.length!==b.length||b.some(function(b,c){return b!==a[c]})}function aQ(b,a){return"function"==typeof a?a(b):a}function aR(a,b){for(var c in b)a[c]=b[c];return a}function aS(c,a){for(var d in c)if("__source"!==d&&!(d in a))return!0;for(var b in a)if("__source"!==b&&c[b]!==a[b])return!0;return!1}function g(a){this.props=a}function b(b,c){function d(b){var a=this.props.ref,d=a==b.ref;return!d&&a&&(a.call?a(null):a.current=null),c?!c(this.props,b)||!d:aS(this.props,b)}function a(a){return this.shouldComponentUpdate=d,j(b,a)}return a.displayName="Memo("+(b.displayName||b.name)+")",a.prototype.isReactComponent=!0,a.__f=!0,a}(g.prototype=new c).isPureReactComponent=!0,g.prototype.shouldComponentUpdate=function(a,b){return aS(this.props,a)||aS(this.state,b)};var aT=a.__b;a.__b=function(a){a.type&&a.type.__f&&a.ref&&(a.props.ref=a.ref,a.ref=null),aT&&aT(a)};var aU="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function h(b){function a(a){var c=aR({},a);return delete c.ref,b(c,a.ref||null)}return a.$$typeof=aU,a.render=a,a.prototype.isReactComponent=a.__f=!0,a.displayName="ForwardRef("+(b.displayName||b.name)+")",a}var w=function(a,b){return null==a?null:S(S(a).map(b))},x={map:w,forEach:w,count:function(a){return a?S(a).length:0},only:function(b){var a=S(b);if(1!==a.length)throw"Children.only";return a[0]},toArray:S},aV=a.__e;a.__e=function(b,a,c,f){if(b.then){for(var d,e=a;e=e.__;)if((d=e.__c)&&d.__c)return null==a.__e&&(a.__e=c.__e,a.__k=c.__k),d.__c(b,a)}aV(b,a,c,f)};var aW=a.unmount;function f(){this.__u=0,this.t=null,this.__b=null}function aX(b){var a=b.__.__c;return a&&a.__e&&a.__e(b)}function y(b){var c,d,e;function a(a){if(c||(c=b()).then(function(a){d=a.default||a},function(a){e=a}),e)throw e;if(!d)throw c;return j(d,a)}return a.displayName="Lazy",a.__f=!0,a}function d(){this.u=null,this.o=null}a.unmount=function(a){var b=a.__c;b&&b.__R&&b.__R(),b&& !0===a.__h&&(a.type=null),aW&&aW(a)},(f.prototype=new c).__c=function(e,c){var d=c.__c,a=this;null==a.t&&(a.t=[]),a.t.push(d);var g=aX(a.__v),h=!1,b=function(){h||(h=!0,d.__R=null,g?g(i):i())};d.__R=b;var i=function(){if(!--a.__u){if(a.state.__e){var c,b=a.state.__e;a.__v.__k[0]=function d(a,c,b){return a&&(a.__v=null,a.__k=a.__k&&a.__k.map(function(a){return d(a,c,b)}),a.__c&&a.__c.__P===c&&(a.__e&&b.insertBefore(a.__e,a.__d),a.__c.__e=!0,a.__c.__P=b)),a}(b,b.__c.__P,b.__c.__O)}for(a.setState({__e:a.__b=null});c=a.t.pop();)c.forceUpdate()}},f=!0===c.__h;(a.__u++)||f||a.setState({__e:a.__b=a.__v.__k[0]}),e.then(b,b)},f.prototype.componentWillUnmount=function(){this.t=[]},f.prototype.render=function(b,c){if(this.__b){if(this.__v.__k){var f=document.createElement("div"),d=this.__v.__k[0].__c;this.__v.__k[0]=function d(a,b,c){return a&&(a.__c&&a.__c.__H&&(a.__c.__H.__.forEach(function(a){"function"==typeof a.__c&&a.__c()}),a.__c.__H=null),null!=(a=aR({},a)).__c&&(a.__c.__P===c&&(a.__c.__P=b),a.__c=null),a.__k=a.__k&&a.__k.map(function(a){return d(a,b,c)})),a}(this.__b,f,d.__O=d.__P)}this.__b=null}var a=c.__e&&j(e,null,b.fallback);return a&&(a.__h=null),[j(e,null,c.__e?null:b.children),a]};var aY=function(b,c,a){if(++a[1]===a[0]&&b.o.delete(c),b.props.revealOrder&&("t"!==b.props.revealOrder[0]||!b.o.size))for(a=b.u;a;){for(;a.length>3;)a.pop()();if(a[1]<a[0])break;b.u=a=a[2]}};function aZ(a){return this.getChildContext=function(){return a.context},a.children}function a$(b){var a=this,c=b.i;a.componentWillUnmount=function(){ax(null,a.l),a.l=null,a.i=null},a.i&&a.i!==c&&a.componentWillUnmount(),b.__v?(a.l||(a.i=c,a.l={nodeType:1,parentNode:c,childNodes:[],appendChild:function(b){this.childNodes.push(b),a.i.appendChild(b)},insertBefore:function(b,c){this.childNodes.push(b),a.i.appendChild(b)},removeChild:function(b){this.childNodes.splice(this.childNodes.indexOf(b)>>>1,1),a.i.removeChild(b)}}),ax(j(aZ,{context:a.context},b.__v),a.l)):a.l&&a.componentWillUnmount()}function z(c,a){var b=j(a$,{__v:c,i:a});return b.containerInfo=a,b}(d.prototype=new c).__e=function(b){var a=this,d=aX(a.__v),c=a.o.get(b);return c[0]++,function(f){var e=function(){a.props.revealOrder?(c.push(f),aY(a,b,c)):f()};d?d(e):e()}},d.prototype.render=function(a){this.u=null,this.o=new Map;var b=S(a.children);a.revealOrder&&"b"===a.revealOrder[0]&&b.reverse();for(var c=b.length;c--;)this.o.set(b[c],this.u=[1,0,this.u]);return a.children},d.prototype.componentDidUpdate=d.prototype.componentDidMount=function(){var a=this;this.o.forEach(function(b,c){aY(a,c,b)})};var a_="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,a0=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,a1="undefined"!=typeof document;function A(a,b,c){return null==b.__k&&(b.textContent=""),ax(a,b),"function"==typeof c&&c(),a?a.__c:null}function B(a,c,b){return ay(a,c),"function"==typeof b&&b(),a?a.__c:null}c.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(a){Object.defineProperty(c.prototype,a,{configurable:!0,get:function(){return this["UNSAFE_"+a]},set:function(b){Object.defineProperty(this,a,{configurable:!0,writable:!0,value:b})}})});var a2=a.event;function a3(){}function a4(){return this.cancelBubble}function a5(){return this.defaultPrevented}a.event=function(a){return a2&&(a=a2(a)),a.persist=a3,a.isPropagationStopped=a4,a.isDefaultPrevented=a5,a.nativeEvent=a};var a6,a7={configurable:!0,get:function(){return this.class}},a8=a.vnode;a.vnode=function(f){var d=f.type,b=f.props,c=b;if("string"==typeof d){var h=-1===d.indexOf("-");for(var a in c={},b){var g,e=b[a];a1&&"children"===a&&"noscript"===d||"value"===a&&"defaultValue"in b&&null==e||("defaultValue"===a&&"value"in b&&null==b.value?a="value":"download"===a&& !0===e?e="":/ondoubleclick/i.test(a)?a="ondblclick":/^onchange(textarea|input)/i.test(a+d)&&(g=b.type,!("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/i:/fil|che|ra/i).test(g))?a="oninput":/^onfocus$/i.test(a)?a="onfocusin":/^onblur$/i.test(a)?a="onfocusout":/^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(a)?a=a.toLowerCase():h&&a0.test(a)?a=a.replace(/[A-Z0-9]/,"-$&").toLowerCase():null===e&&(e=void 0),c[a]=e)}"select"==d&&c.multiple&&Array.isArray(c.value)&&(c.value=S(b.children).forEach(function(a){a.props.selected=-1!=c.value.indexOf(a.props.value)})),"select"==d&&null!=c.defaultValue&&(c.value=S(b.children).forEach(function(a){a.props.selected=c.multiple?-1!=c.defaultValue.indexOf(a.props.value):c.defaultValue==a.props.value})),f.props=c,b.class!=b.className&&(a7.enumerable="className"in b,null!=b.className&&(c.class=b.className),Object.defineProperty(c,"className",a7))}f.$$typeof=a_,a8&&a8(f)};var a9=a.__r;a.__r=function(a){a9&&a9(a),a6=a.__c};var C={ReactCurrentDispatcher:{current:{readContext:function(a){return a6.__n[a.__c].props.value}}}};function D(a){return j.bind(null,a)}function E(a){return!!a&&a.$$typeof===a_}function F(a){return E(a)?az.apply(null,arguments):a}function G(a){return!!a.__k&&(ax(null,a),!0)}function H(a){return a&&(a.base||1===a.nodeType&&a)||null}var I=function(a,b){return a(b)},J=function(a,b){return a(b)},T=Object.freeze({__proto__:null,"default":{useState:m,useReducer:n,useEffect:o,useLayoutEffect:p,useRef:q,useImperativeHandle:r,useMemo:s,useCallback:t,useContext:u,useDebugValue:v,version:"17.0.2",Children:x,render:A,hydrate:B,unmountComponentAtNode:G,createPortal:z,createElement:j,createContext:l,createFactory:D,cloneElement:F,createRef:k,Fragment:e,isValidElement:E,findDOMNode:H,Component:c,PureComponent:g,memo:b,forwardRef:h,flushSync:J,unstable_batchedUpdates:I,StrictMode:e,Suspense:f,SuspenseList:d,lazy:y,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:C},version:"17.0.2",Children:x,render:A,hydrate:B,unmountComponentAtNode:G,createPortal:z,createFactory:D,cloneElement:F,isValidElement:E,findDOMNode:H,PureComponent:g,memo:b,forwardRef:h,flushSync:J,unstable_batchedUpdates:I,StrictMode:e,Suspense:f,SuspenseList:d,lazy:y,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:C,createElement:j,createContext:l,createRef:k,Fragment:e,Component:c,useState:m,useReducer:n,useEffect:o,useLayoutEffect:p,useRef:q,useImperativeHandle:r,useMemo:s,useCallback:t,useContext:u,useDebugValue:v,useErrorBoundary:function(a){var b=aK(aA++,10),c=m();return b.__=a,aB.componentDidCatch||(aB.componentDidCatch=function(a){b.__&&b.__(a),c[1](a)}),[c[0],function(){c[1](void 0)}]}}),ba=0;function bb(e,f,h,i,j){var c,b,d={};for(b in f)"ref"==b?c=f[b]:d[b]=f[b];var g={type:e,props:d,key:h,ref:c,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--ba,__source:j,__self:i};if("function"==typeof e&&(c=e.defaultProps))for(b in c)void 0===d[b]&&(d[b]=c[b]);return a.vnode&&a.vnode(g),g}let bc=(b,c)=>{let a=new URL(c);return a.searchParams.set("api_key",b),fetch(a.toString()).then(a=>a.json())},bd=a=>new Date(a).getTime(),be=a=>a.replace(/a\.disquscdn\.com/g,"c.disquscdn.com"),bf=null,bg=b=>{let c=be(b).replace(/https?:\/\/disq.us\/url\?url=(.+)%3A[\w-]+&amp;cuid=\d+/gm,(b,a)=>decodeURIComponent(a));bf||(bf=new DOMParser);let a=bf.parseFromString(c,"text/html");return a.querySelectorAll("script").forEach(a=>a.remove()),a.querySelectorAll("a").forEach(a=>{a.target="_blank",a.rel="external noopener nofollow noreferrer"}),a.body.innerHTML},bh=new Date().getTimezoneOffset(),bi=a=>String(a).padStart(2,"0"),bj=b=>{let c=bd(b),a=new Date(c-6e4*bh);return`${a.getFullYear()}-${bi(a.getMonth()+1)}-${bi(a.getDate())} ${bi(a.getHours())}:${bi(a.getMinutes())}`},bk=a=>new Promise((c,d)=>{let b=new Image,e=()=>{b.onload=null,b.onerror=null,b.remove()},f=setTimeout(()=>{e(),d()},3e3);b.onerror=()=>{clearTimeout(f),e(),d()},b.onload=()=>{clearTimeout(f),e(),c()},b.src=`https://${a}/favicon.ico?${+new Date}=${+new Date}`}),bl=d=>{let e,h=new Set,a=(a,c)=>{let b="function"==typeof a?a(e):a;if(b!==e){let d=e;e=c?b:Object.assign({},e,b),h.forEach(a=>a(e,d))}},b=()=>e,f=a=>(h.add(a),()=>h.delete(a)),g=()=>h.clear(),c={setState:a,getState:b,subscribe:f,destroy:g};return e=d(a,b,c),c},bm=a=>a?bl(a):bl;var bn,U={exports:{}},bo={},bp=function(b){var c=b.default;if("function"==typeof c){var a=function(){return c.apply(this,arguments)};a.prototype=c.prototype}else a={};return Object.defineProperty(a,"__esModule",{value:!0}),Object.keys(b).forEach(function(c){var d=Object.getOwnPropertyDescriptor(b,c);Object.defineProperty(a,c,d.get?d:{enumerable:!0,get:function(){return b[c]}})}),a}(T),bq={exports:{}},br={};U.exports=function(){if(aa)return bo;aa=1;var c,a=bp,b=(_||(_=1,bq.exports=function(){if($)return br;$=1;var a=bp,d="function"==typeof Object.is?Object.is:function(a,b){return a===b&&(0!==a||1/a==1/b)||a!=a&&b!=b},e=a.useState,f=a.useEffect,g=a.useLayoutEffect,h=a.useDebugValue;function i(a){var b=a.getSnapshot;a=a.value;try{var c=b();return!d(a,c)}catch(e){return!0}}function b(b,a){return a()}var c=void 0===window.document|| void 0===window.document.createElement?b:function(c,b){var a=b(),d=e({inst:{value:a,getSnapshot:b}}),j=d[0].inst,k=d[1];return g(function(){j.value=a,j.getSnapshot=b,i(j)&&k({inst:j})},[c,a,b]),f(function(){return i(j)&&k({inst:j}),c(function(){i(j)&&k({inst:j})})},[c]),h(a),a};return br.useSyncExternalStore=void 0!==a.useSyncExternalStore?a.useSyncExternalStore:c,br}()),bq.exports),d="function"==typeof Object.is?Object.is:function(a,b){return a===b&&(0!==a||1/a==1/b)||a!=a&&b!=b},e=b.useSyncExternalStore,f=a.useRef,g=a.useEffect,h=a.useMemo,i=a.useDebugValue;return bo.useSyncExternalStoreWithSelector=function(j,k,l,m,n){var a=f(null);if(null===a.current){var c={hasValue:!1,value:null};a.current=c}else c=a.current;a=h(function(){function b(a){if(!g){if(g=!0,e=a,a=m(a),void 0!==n&&c.hasValue){var b=c.value;if(n(b,a))return f=b}return f=a}if(b=f,d(e,a))return b;var h=m(a);return void 0!==n&&n(b,h)?b:(e=a,f=h)}var e,f,g=!1,a=void 0===l?null:l;return[function(){return b(k())},null===a?void 0:function(){return b(a())}]},[k,l,m,n]);var b=e(j,a[0],a[1]);return g(function(){c.hasValue=!0,c.value=b},[b]),i(b),b},bo}();let K=a=>{let c="function"==typeof a?bm(a):a,b=(a,b)=>(function(a,c=a.getState,d){let b=U.exports.useSyncExternalStoreWithSelector(a.subscribe,a.getState,a.getServerState||a.getState,c,d);return v(b),b})(c,a,b);return Object.assign(b,c),b},bs={mode:(()=>{{let a=localStorage.getItem("dsqjs_mode");if("dsqjs"===a||"disqus"===a)return a}return null})(),sortType:(()=>{{let a=localStorage.getItem("dsqjs_sort");if("popular"===a||"asc"===a||"desc"===a)return a}return null})(),error:!1,msg:null,thread:null,posts:[],loadingPosts:!1,morePostsError:!1},bt=(i=(a,b)=>Y({},bs,{setMode(b){a({mode:b}),b&&Promise.resolve().then(()=>{null===b?localStorage.removeItem("dsqjs_mode"):localStorage.setItem("dsqjs_mode",b)})},checkMode(b){a({msg:"\u6B63\u5728\u68C0\u67E5 Disqus \u80FD\u5426\u8BBF\u95EE..."}),Promise.all(["disqus.com",`${b}.disqus.com`].map(bk)).then(()=>{a({mode:"disqus"}),localStorage.setItem("dsqjs_mode","disqus")},()=>{a({mode:"dsqjs"}),localStorage.setItem("dsqjs_mode","dsqjs")})},setSortType(b){a({sortType:b}),b&&Promise.resolve().then(()=>{localStorage.setItem("dsqjs_sort",b)})},setError(b){a({error:b})},setMsg(b){a({msg:b})},fetchThread:(b,c,d,e="https://disqus.skk.moe/disqus/")=>W(function*(){try{let f=yield bc(d,`${e}3.0/threads/list.json?forum=${encodeURIComponent(b)}&thread=${encodeURIComponent("ident:"+c)}`);0===f.code?a({thread:f}):a({error:!0})}catch(g){a({error:!0})}})(),fetchMorePosts:(c,d,e,f="https://disqus.skk.moe/disqus/",g=!1)=>W(function*(){if(!d)return;a(Y({},g&&{posts:[]},{loadingPosts:!0,morePostsError:!1}));let i=g?[]:b().posts,j=b().sortType,h=i.at(-1);if(h&&!h.cursor.hasNext)return;let l=`${f}3.0/threads/listPostsThreaded?forum=${c}&thread=${d}&order=${null!=j?j:"desc"}${0!==i.length&&(null==h?void 0:h.cursor.next)?"&cursor="+encodeURIComponent(h.cursor.next):""}`,k=()=>{0===i.length?a({error:!0,loadingPosts:!1}):a({morePostsError:!0,loadingPosts:!1})};try{let m=yield bc(e,l);0===m.code?a(a=>({posts:a.posts.concat(m),loadingPosts:!1})):k()}catch(n){k()}})(),reset(){a(Y({},bs))}}))?K(i):K;var bu=b(a=>{let{isError:b,isLoading:c}=a,d=Z(a,["isError","isLoading"]);return bb("a",Y({},d,{id:"dsqjs-load-more",className:"dsqjs-load-more "+(b?"is-error":""),role:"button",children:b?"\u52A0\u8F7D\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5":c?"\u6B63\u5728\u52A0\u8F7D...":"\u52A0\u8F7D\u66F4\u591A\u8BC4\u8BBA"}))});let bv=b(a=>{let b=bt(a=>a.setMode),c=t(()=>b("disqus"),[b]);return bb("a",{id:"dsqjs-force-disqus",className:"dsqjs-msg-btn",onClick:c,children:a.children})}),bw=b(a=>{let b=bt(a=>a.setMode),c=t(()=>b(null),[b]);return bb("a",{id:"dsqjs-test-disqus",className:"dsqjs-msg-btn",onClick:c,children:a.children})}),bx=b(a=>{let b=bt(a=>a.setMode),c=t(()=>b("dsqjs"),[b]);return bb("a",{id:"dsqjs-force-dsqjs",className:"dsqjs-msg-btn",onClick:c,children:a.children})}),by=b(a=>{let b=bt(a=>a.setError),c=t(()=>{b(!1)},[b]);return bb("a",{id:"dsqjs-reload-dsqjs",className:"dsqjs-msg-btn",onClick:c,children:a.children})}),bz="disqus_thread",bA="dsq-embed-scr",bB=b(a=>{let b=bt(a=>a.setMsg),[c,d]=m(!1);return o(()=>{b(null);{let e=()=>{{var b;window.disqus_config=void 0;let c=document.getElementById(bA);c&&(document.head.removeChild(c),c.remove()),null===(b=window.DISQUS)|| void 0===b||b.reset({});try{delete window.DISQUS}catch(d){window.DISQUS=void 0}let a=document.getElementById(bz);if(a)for(;a.hasChildNodes();)a.removeChild(a.firstChild);document.querySelectorAll('link[href*="disquscdn.com/next"], link[href*="disqus.com/next"], script[src*="disquscdn.com/next/embed"], script[src*="disqus.com/count-data.js"], iframe[title="Disqus"]').forEach(a=>{var b,c;null===(b=a.parentNode)|| void 0===b||b.removeChild(a),null===(c=a.parentElement)|| void 0===c||c.removeChild(a),a.remove()})}};window.disqus_shortname!==a.shortname&&e();let f=()=>function(){a.identifier&&(this.page.identifier=a.identifier),a.url&&(this.page.url=a.url),a.title&&(this.page.title=a.title),this.callbacks.onReady=[()=>{d(!0)}]};if(window.DISQUS&&document.getElementById(bA))window.DISQUS.reset({reload:!0,config:f()});else{window.disqus_config=f(),window.disqus_shortname=a.shortname;let c=document.createElement("script");c.id=bA,c.src=`https://${a.shortname}.disqus.com/embed.js`,c.async=!0,document.head.appendChild(c)}return e}},[a.shortname,a.identifier,a.url,a.title,b]),bb(e,{children:[bb("div",{id:bz,children:["\u8BC4\u8BBA\u5B8C\u6574\u6A21\u5F0F\u52A0\u8F7D\u4E2D... \u5982\u679C\u957F\u65F6\u95F4\u65E0\u6CD5\u52A0\u8F7D\uFF0C\u8BF7\u9488\u5BF9 disq.us | disquscdn.com | disqus.com \u542F\u7528\u4EE3\u7406\uFF0C\u6216\u5207\u6362\u81F3 ",bb(bx,{children:"\u8BC4\u8BBA\u57FA\u7840\u6A21\u5F0F"})]}),!c&&bb("div",{id:"dsqjs-msg",children:["\u8BC4\u8BBA\u5B8C\u6574\u6A21\u5F0F\u52A0\u8F7D\u4E2D... \u5982\u679C\u957F\u65F6\u95F4\u65E0\u6CD5\u52A0\u8F7D\uFF0C\u8BF7\u9488\u5BF9 disq.us | disquscdn.com | disqus.com \u542F\u7528\u4EE3\u7406\uFF0C\u6216\u5207\u6362\u81F3 ",bb(bx,{children:"\u8BC4\u8BBA\u57FA\u7840\u6A21\u5F0F"})]})]})}),bC=b(()=>bb("div",{id:"dsqjs-msg",children:["\u8BC4\u8BBA\u57FA\u7840\u6A21\u5F0F\u52A0\u8F7D\u5931\u8D25\uFF0C\u8BF7"," ",bb(by,{children:"\u91CD\u8F7D"})," ","\u6216"," ",bb(bw,{children:"\u5C1D\u8BD5\u5B8C\u6574 Disqus \u6A21\u5F0F"})]})),bD=b(()=>bb("div",{id:"dsqjs-msg",children:["\u5F53\u524D Thread \u5C1A\u672A\u521B\u5EFA\u3002\u662F\u5426\u5207\u6362\u81F3"," ",bb(bv,{children:"\u5B8C\u6574 Disqus \u6A21\u5F0F"}),"\uFF1F"]})),bE=b(a=>bb("p",{className:"dsqjs-no-comment",children:a.text}));function bF(a){let b=a.comment.author.profileUrl,c=bg(a.comment.author.avatar.cache);return bb("li",{id:"comment-"+a.comment.id,children:[bb("div",{className:"dsqjs-post-item dsqjs-clearfix",children:[bb("div",{className:"dsqjs-post-avatar",children:b?bb("a",{href:b,target:"_blank",rel:"noreferrer noopenner nofollow external",children:bb("img",{alt:a.comment.author.username,src:c})}):bb("img",{alt:a.comment.author.username,src:c})}),bb("div",{className:"dsqjs-post-body",children:[bb("div",{className:"dsqjs-post-header",children:[b?bb("span",{className:"dsqjs-post-author",children:bb("a",{href:b,target:"_blank",rel:"noreferrer noopenner nofollow external",children:a.comment.author.name})}):bb("span",{className:"dsqjs-post-author",children:a.comment.author.name}),a.admin===a.comment.author.username&&bb("span",{className:"dsqjs-admin-badge",children:a.adminLabel})," ",bb("span",{className:"dsqjs-bullet"})," ",a.comment.createdAt&&bb("span",{className:"dsqjs-meta",children:bb("time",{children:bj(a.comment.createdAt)})})]}),a.comment.isDeleted?bb("div",{className:"dsqjs-post-content",children:bb("small",{children:"\u6B64\u8BC4\u8BBA\u5DF2\u88AB\u5220\u9664"})}):bb("div",{className:"dsqjs-post-content",dangerouslySetInnerHTML:{__html:bg(a.comment.message)}})]})]}),bb(bG,Y({},a,{currentNesting:a.nesting})),a.comment.hasMore&&bb("p",{className:"dsqjs-has-more",children:["\u5207\u6362\u81F3 ",bb(bv,{children:"\u5B8C\u6574 Disqus \u6A21\u5F0F"})," \u663E\u793A\u66F4\u591A\u56DE\u590D"]})]})}function bG(a){var b,c;return a.children&&0!==a.children.length?bb("ul",{className:"dsqjs-post-list "+((null!==(b=a.currentNesting)&& void 0!==b?b:1)<(null!==(c=a.nestingSetting)&& void 0!==c?c:4)?"dsqjs-children":""),children:a.children.map(b=>j(bF,Y({},b,{admin:a.admin,adminLabel:a.adminLabel,key:b.comment.id})))}):null}function bH(a,c,b){let d={comment:a,children:bI(c,Number(a.id),b+1),nesting:b+1};return d}function bI(a,c,d){if(0===a.length)return null;let b=[];return a.forEach(e=>{e.parent===c&&b.unshift(bH(e,a,d))}),b}let bJ=a=>{let b=s(()=>{let b=[],d=[],c=a.comments.slice();return c.map((a,b)=>({i:b,p:a.parent,d:bd(a.createdAt)})).sort((a,b)=>a.p&&b.p?a.d-b.d:0).map(({i:a})=>c[a]).forEach(a=>(a.parent?d:b).push(a)),b.map(a=>bH(a,d,0))},[a.comments]);return bb("ul",{className:"dsqjs-post-list",id:"dsqjs-post-container",children:b.map(b=>j(bF,Y({},b,{key:b.comment.id,admin:a.admin,adminLabel:a.adminLabel})))})},bK=a=>s(()=>{if(Array.isArray(a)){var b,c;return a[b=0,Math.random()*(a.length-1-b+1)+b|0]}return a},[a]),bL=a=>bb(e,{children:[bb("input",{className:"dsqjs-order-radio",id:"dsqjs-order-"+a.sortType,type:"radio",name:"comment-order",value:a.sortType,onChange:a.onChange,checked:a.checked}),bb("label",{className:"dsqjs-order-label",htmlFor:"dsqjs-order-"+a.sortType,title:a.title,children:a.label})]}),bM=b(()=>{let a=bt(a=>a.sortType),c=bt(a=>a.setSortType),b=t(a=>()=>c(a),[c]);return bb("div",{className:"dsqjs-order",children:[bb(bL,{checked:"desc"===a||null===a,sortType:"desc",title:"\u6309\u4ECE\u65B0\u5230\u65E7",label:"\u6700\u65B0",onChange:b("desc")}),bb(bL,{checked:"asc"===a,sortType:"asc",title:"\u6309\u4ECE\u65E7\u5230\u65B0",label:"\u6700\u65E9",onChange:b("asc")}),bb(bL,{checked:"popular"===a,sortType:"popular",title:"\u6309\u8BC4\u5206\u4ECE\u9AD8\u5230\u4F4E",label:"\u6700\u4F73",onChange:b("popular")})]})}),bN=b(a=>bb("header",{className:"dsqjs-header",id:"dsqjs-header",children:bb("nav",{className:"dsqjs-nav dsqjs-clearfix",children:[bb("ul",{children:[bb("li",{className:"dsqjs-nav-tab dsqjs-tab-active",children:bb("span",{children:[a.totalComments," Comments"]})}),bb("li",{className:"dsqjs-nav-tab",children:a.siteName})]}),bb(bM,{})]})})),bO=a=>{let k=q(bK(a.apikey)),b=bt(a=>a.posts),f=bt(a=>a.sortType),l=q(f),h=bt(a=>a.morePostsError),c=bt(a=>a.loadingPosts),g=bt(a=>a.fetchMorePosts),m=q(null),i=t(()=>g(a.shortname,a.id,k.current,a.api,!0),[g,a.api,a.id,a.shortname]),j=t(()=>g(a.shortname,a.id,k.current,a.api,!1),[g,a.api,a.id,a.shortname]);if(o(()=>{m.current!==a.id?(m.current=a.id,i()):l.current!==f&&(l.current=f,m.current=a.id,i())},[b,i,a.id,c,f]),b.length>0){var d;return bb(e,{children:[bb(bJ,{comments:b.filter(Boolean).map(a=>a.response).flat(),admin:a.admin,adminLabel:a.adminLabel}),(null===(d=b.at(-1))|| void 0===d?void 0:d.cursor.hasNext)&&bb(bu,{isLoading:c,isError:h,onClick:c?void 0:j})]})}return null},bP=a=>{var c,d,f,g;let k=q(bK(a.apikey)),b=bt(a=>a.thread),h=bt(a=>a.fetchThread),i=bt(a=>a.setMsg),l=q(null),j=null!==(c=a.identifier)&& void 0!==c?c:document.location.origin+document.location.pathname+document.location.search;return(o(()=>{l.current!==j?(i(bb(e,{children:["\u8BC4\u8BBA\u57FA\u7840\u6A21\u5F0F\u52A0\u8F7D\u4E2D... \u5982\u9700\u5B8C\u6574\u4F53\u9A8C\u8BF7\u9488\u5BF9 disq.us | disquscdn.com | disqus.com \u542F\u7528\u4EE3\u7406\u5E76 ",bb(bw,{children:"\u5C1D\u8BD5\u5B8C\u6574 Disqus \u6A21\u5F0F"})," | ",bb(bv,{children:"\u5F3A\u5236\u5B8C\u6574 Disqus \u6A21\u5F0F"})]})),l.current=j,h(a.shortname,j,k.current,a.api)):i(bb(e,{children:["\u4F60\u53EF\u80FD\u65E0\u6CD5\u8BBF\u95EE Disqus\uFF0C\u5DF2\u542F\u7528\u8BC4\u8BBA\u57FA\u7840\u6A21\u5F0F\u3002\u5982\u9700\u5B8C\u6574\u4F53\u9A8C\u8BF7\u9488\u5BF9 disq.us | disquscdn.com | disqus.com \u542F\u7528\u4EE3\u7406\u5E76 ",bb(bw,{children:"\u5C1D\u8BD5\u5B8C\u6574 Disqus \u6A21\u5F0F"})," | ",bb(bv,{children:"\u5F3A\u5236\u5B8C\u6574 Disqus \u6A21\u5F0F"})]}))},[b,h,j,i,a.shortname,a.api]),b)?1===b.response.length?0===b.response[0].posts?bb(e,{children:[bb(bN,{totalComments:0,siteName:null!==(d=a.siteName)&& void 0!==d?d:""}),bb(bE,{text:null!==(f=a.nocomment)&& void 0!==f?f:"\u8FD9\u91CC\u7A7A\u8361\u8361\u7684\uFF0C\u4E00\u4E2A\u4EBA\u90FD\u6CA1\u6709"})]}):bb(e,{children:[bb(bN,{totalComments:b.response[0].posts,siteName:null!==(g=a.siteName)&& void 0!==g?g:""}),bb(bO,Y({},a,{id:b.response[0].id}))]}):bb(bD,{}):null},bQ=b(()=>bb("footer",{className:"dsqjs-footer-container",children:bb("p",{className:"dsqjs-footer",children:["Powered by ",bb("a",{className:"dsqjs-disqus-logo",href:"https://disqus.com",target:"_blank",rel:"external nofollow noopener noreferrer"})," ","&"," ",bb("a",{className:"dsqjs-dsqjs-logo",href:"https://disqusjs.skk.moe",target:"_blank",rel:"noreferrer",children:"DisqusJS"})]})}));var bR={dsqjs:"__dsqjs_oc95o1"};let bS=a=>{let b=bt(a=>a.mode),c=bt(a=>a.checkMode);return(o(()=>{"disqus"!==b&&"dsqjs"!==b&&c(a.shortname)},[c,b,a.shortname]),"disqus"===b)?bb(bB,{shortname:a.shortname,identifier:a.identifier,url:a.url,title:a.title}):"dsqjs"===b?bb(bP,Y({},a)):null};var bT=h((a,d)=>{let b=bt(a=>a.msg),f=bt(a=>a.error),{shortname:g,siteName:h,identifier:i,url:j,title:k,api:l,apikey:n,nesting:p,nocomment:q,admin:r,adminLabel:s,className:c}=a,t=Z(a,["shortname","siteName","identifier","url","title","api","apikey","nesting","nocomment","admin","adminLabel","className"]),[u,v]=m(!1);return(o(()=>{v(!0)},[]),u)?bb("div",Y({ref:d},t,{className:`${bR.dsqjs} ${null!=c?c:""}`,children:bb("section",{id:"dsqjs",children:[f?bb(bC,{}):bb(e,{children:[b&&bb("div",{id:"dsqjs-msg",children:b}),bb(bS,Y({},{shortname:g,siteName:h,identifier:i,url:j,title:k,api:l,apikey:n,nesting:p,nocomment:q,admin:r,adminLabel:s}))]}),bb(bQ,{})]})})):null});let bU=a=>a?"string"==typeof a?document.querySelector(a):a:document.getElementById("disqusjs");return class{render(b){let a=bU(b);a&&(this.container=a,ax(bb(bT,Y({},this.config)),a))}destroy(){this.container&&ax(null,this.container)}constructor(a){this.config=a}}})
