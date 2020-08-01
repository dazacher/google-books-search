(this["webpackJsonpgoogle-books-search"]=this["webpackJsonpgoogle-books-search"]||[]).push([[0],{120:function(e,t,a){},122:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),o=a(13),c=a.n(o),r=(a(76),a(77),a(60)),i=function(){return l.a.createElement(r.a,{fluid:!0},l.a.createElement("h1",null,"(React) Googles Book Search"),l.a.createElement("h4",null,"Search for and Save Books of Interest"))},u=a(27),m=a(70),s=a(15),E=(a(78),function(){return l.a.createElement(u.a,{className:"navbar",responisve:"true",variant:"dark",expand:"lg"},l.a.createElement(s.c,{to:"/"},l.a.createElement(u.a.Brand,null,l.a.createElement("span",{className:"navbar-title"},"Google Book Search"))),l.a.createElement(u.a.Toggle,{"aria-controls":"basic-navbar-nav"}),l.a.createElement(u.a.Collapse,{id:"basic-navbar-nav"},l.a.createElement(m.a,null,l.a.createElement(s.c,{to:"/search",className:"nav-link"},"Search "),l.a.createElement(s.c,{className:"nav-link",to:"/saved"},"Saved"))))}),g=a(31),h=a(38),f=a(19),b=a(10),p=a(26),v=a.n(p),k={getBooks:function(e){return console.log(e),v.a.get("https://www.googleapis.com/books/v1/volumes?q="+e.split(" ").join("+")).then((function(e){return e.data.items.map((function(e){return{id:e.id,author:e.volumeInfo.authors,title:e.volumeInfo.title,description:e.volumeInfo.description,image:e.volumeInfo.imageLinks.thumbnail,link:e.volumeInfo.previewLink}}))})).catch((function(e){return console.log(e)}))},saveBook:function(e){return v.a.post("/api/books",e)},getSavedBooks:function(){return v.a.get("/api/books")},deleteBook:function(e){return v.a.delete("/api/books/"+e)}},d=a(24);a(120);var B=function(e){console.log(e);var t=Object(n.useState)([]),a=Object(f.a)(t,2);return a[0],a[1],l.a.createElement(b.i,{className:"rowBoarders"},l.a.createElement(b.a,{lg:12},l.a.createElement(b.i,null,l.a.createElement(b.a,{lg:8},l.a.createElement("label",{className:"title"},e.title),l.a.createElement("br",null),l.a.createElement("label",{className:"author"},e.author)),l.a.createElement(b.a,{lg:2,className:"alignCenter"},l.a.createElement("button",{className:"submitButton"},l.a.createElement("a",{className:"anchorFormat",href:e.link,target:"_blank",rel:"noopener noreferrer"},"View"))),l.a.createElement(b.a,{lg:2,className:"alignCenter"},e.save?l.a.createElement("button",{className:"submitButton",onClick:function(){k.saveBookclassName="submitButton"({author:e.author,title:e.title,description:e.description,image:e.image,link:e.link})}},"Save"):l.a.createElement("button",{className:"submitButton",onClick:function(){k.deleteBook({id:e.id})}},"Delete"))),l.a.createElement(b.i,null,l.a.createElement(b.a,{lg:3},l.a.createElement("img",{src:e.image,alt:"test"})),l.a.createElement(b.a,{lg:9},l.a.createElement("label",null,e.description)))))};var S=function(){var e=Object(n.useState)({search:""}),t=Object(f.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)([]),r=Object(f.a)(c,2),i=r[0],u=r[1];return Object(n.useEffect)((function(){}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement(d.a,null,l.a.createElement(b.i,null,l.a.createElement(b.a,{lg:12},l.a.createElement("h1",null," Book Search"),l.a.createElement(b.e,{label:"Search",name:"search",value:a.search,onChange:function(e){var t=e.target,n=t.name,l=t.value;o(Object(h.a)(Object(h.a)({},a),{},Object(g.a)({},n,l)))},icon:"text",group:!0,type:"text",placeHolder:"Enter Your Search Request"}),l.a.createElement("button",{type:"submit",className:"submitButton",onClick:function(e){e.preventDefault(),k.getBooks(a.search).then((function(e){!function(e){u(e)}(e)})).catch((function(e){return console.log(e)}))}},"Search")))),l.a.createElement(d.a,null,i.map((function(e){return l.a.createElement(B,{key:e.id,author:e.author.join(" "),title:e.title,description:e.description,image:e.image,link:e.link,save:!0})}))))};var j=function(){var e=Object(n.useState)([]),t=Object(f.a)(e,2),a=t[0],o=t[1];return Object(n.useEffect)((function(){k.getSavedBooks().then((function(e){o(e.data),console.log(e)})).catch((function(e){return console.log(e)}))}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement(d.a,null,a.map((function(e){return l.a.createElement(B,{key:e._id,author:e.author,title:e.title,description:e.description,image:e.image,link:e.link})}))))},N=a(128),O=a(129);var w=function(){return l.a.createElement(d.a,{fluid:!0},l.a.createElement(N.a,null,l.a.createElement(O.a,{lg:12},l.a.createElement("h1",null,"404 Page Not Found"),l.a.createElement("h1",null,l.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44")))))},x=(a(121),a(8));var C=function(){return l.a.createElement(s.a,{basename:"/google-book-search"},l.a.createElement(E,null),l.a.createElement(i,null),l.a.createElement(x.c,null,l.a.createElement(x.a,{exact:!0,path:"/",component:S}),l.a.createElement(x.a,{exact:!0,path:"/search",component:S}),l.a.createElement(x.a,{exact:!0,path:"/saved",component:j}),l.a.createElement(x.a,{component:w})))};c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(C,null)),document.getElementById("root"))},71:function(e,t,a){e.exports=a(122)},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){}},[[71,1,2]]]);
//# sourceMappingURL=main.2108f75e.chunk.js.map