(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{169:function(e,t,a){"use strict";a.r(t);a(69);var n=a(0),r=a.n(n),i=a(171),l=a(173),c=function(e){var t=e.data,a=t.site.siteMetadata.title,n=t.site.siteMetadata.description;return r.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",fontFamily:"avenir"}},r.a.createElement("h2",{style:{marginBottom:0}},"Title: ",a),r.a.createElement("p",{style:{marginTop:0,opacity:.5}},"Description: ",n))},u=function(e){return r.a.createElement(i.b,{query:"3501179355",render:function(e){return r.a.createElement(c,{data:e})},data:l})};a.d(t,"query",function(){return o});var o="1719201889";t.default=function(e){var t=e.data.allMarkdownRemark.edges;return r.a.createElement("div",null,r.a.createElement(u,null),r.a.createElement("ul",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",fontFamily:"avenir",listStyle:"none"}},t.map(function(e){var t=e.node,a=t.id,n=t.frontmatter,l=n.title,c=n.date,u=n.path;return r.a.createElement("li",{key:n.path,style:{marginBottom:"1rem"}},r.a.createElement("div",null,r.a.createElement(i.a,{to:n.path},r.a.createElement("h3",null,l)),r.a.createElement("p",null,"id: ",a),r.a.createElement("span",null,"date: ",c),r.a.createElement("p",null,"path: ",u)))})),r.a.createElement(i.a,{to:"/tags"},"Browse By Tag"))}},170:function(e,t,a){var n;e.exports=(n=a(172))&&n.default||n},171:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var n=a(0),r=a.n(n),i=a(6),l=a.n(i),c=a(43),u=a.n(c);a.d(t,"a",function(){return u.a});a(170);var o=r.a.createContext({});function s(e){var t=e.staticQueryData,a=e.data,n=e.query,i=e.render,l=a?a.data:t[n]&&t[n].data;return r.a.createElement(r.a.Fragment,null,l&&i(l),!l&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var d=function(e){var t=e.data,a=e.query,n=e.render,i=e.children;return r.a.createElement(o.Consumer,null,function(e){return r.a.createElement(s,{data:t,query:a,render:n||i,staticQueryData:e})})};d.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},172:function(e,t,a){"use strict";a.r(t);a(44);var n=a(0),r=a.n(n),i=a(6),l=a.n(i),c=a(70),u=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null};u.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=u},173:function(e){e.exports={data:{site:{siteMetadata:{title:"My-Blog",description:"This is my cool blog."}}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-c3dc68a2880bef8c591c.js.map