(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:(e,t,a)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(7246)}])},7246:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>A});var l=a(5893),s=a(9008),n=a.n(s),o=a(4711),i=a(9083),r=a(7963),c=a(7294),d=a(684),u=a(209),p=a(5346),g=a(3604),m=a(7744),h=a(3544),v=a(8784),x=a(9554),f=a(9603),C=a(3024),j=a(9417),S=a(5338),y=[],k=[];let w={CriticScore:{logic:"and",filters:[]},Source:{logic:"and",filters:[]},ReleaseYear:{logic:"and",filters:[]},Hidden:{logic:"and",filters:[]},Name:{logic:"and",filters:[]},CompletionStatus:{logic:"and",filters:[]},Genres:{logic:"and",filters:[]},Tags:{logic:"and",filters:[]},Features:{logic:"and",filters:[]},Categories:{logic:"and",filters:[]},CommunityScore:{logic:"and",filters:[]},CommunityScoreGroup:{logic:"and",filters:[]},CriticScoreGroup:{logic:"and",filters:[]},ReviewCategory:{logic:"and",filters:[]},PlayerCount:{logic:"and",filters:[]},ReleaseMonth:{logic:"and",filters:[]},AddedMonth:{logic:"and",filters:[]},LastActivityYear:{logic:"and",filters:[]},IsInstalled:{logic:"and",filters:[]}},b=[],N=[],P=[],R=[],G=[];function A(){let[e,t]=(0,c.useState)(!1),[a,s]=(0,c.useState)({games:[],group:[],take:300}),[A,F]=(0,c.useState)("Installed"),[M,I]=(0,c.useState)({skip:0,take:1}),{skip:D}=M,[T,E]=(0,c.useState)(!1),[O,z]=(0,c.useState)({logic:"and",filters:[]}),[B,L]=(0,c.useState)(0),H=(0,c.useRef)(null),[U,Y]=(0,c.useState)([]),[_,X]=(0,c.useState)([]),[q,V]=(0,c.useState)([]),[$,Q]=(0,c.useState)([]),[W,J]=(0,c.useState)([]),[K,Z]=(0,c.useState)([]),[ee,et]=(0,c.useState)([]),[ea,el]=(0,c.useState)([]),[es,en]=(0,c.useState)([]),[eo,ei]=(0,c.useState)([]),[er,ec]=(0,c.useState)([]),[ed,eu]=(0,c.useState)([]);function ep(e){let t=e.dataItem,a=t.items;return(0,l.jsxs)("div",{className:"k-listview-item",children:[(0,l.jsx)("h4",{className:"k-group-title",children:t.value}),(0,l.jsx)("div",{className:"cards",children:a.map(e=>(0,l.jsx)(em,{item:e}))})]})}function eg(e,t,a,l,s,n){return'\n            <tr>\n                <td style="white-space: nowrap; padding: 2px 5px;"><i class="'.concat(e,'"></i> <strong>').concat(t,':</strong></td>\n                <td style="padding: 2px 5px;">').concat(a,'</td>\n                <td style="white-space: nowrap; padding: 2px 5px;"><i class="').concat(l,'"></i> <strong>').concat(s,':</strong></td>\n                <td style="padding: 2px 5px;">').concat(n,"</td>\n            </tr>\n        ")}function em(e){var t,a,s,n;let o=e.item;return(0,l.jsxs)("div",{"data-tooltip-id":"tltip","data-tooltip-html":'\n            <div style="padding: 10px; font-family: Arial, sans-serif; font-size: 0.9em;">\n                <h3 style="margin: 0 0 5px 0; font-size: 1.1em;">'.concat(o.Name,'</h3>\n                <table style="width: 100%; border-collapse: collapse;">\n                    ').concat(eg("fas fa-clock","Playtime","".concat(Math.round(100*o.Playtime/3600)/100," hours"),"fas fa-hdd","Size","".concat(Math.round(100*o.InstallSize/1024/1024/1024)/100," GB")),"\n                    ").concat(eg("fas fa-users","Community Score",o.CommunityScore,"fas fa-star","Reviews",o.Reviews),"\n                    ").concat(eg("fas fa-thumbs-up","Critic Score",o.CriticScore,"fas fa-gamepad","Player Count",o.PlayerCount),"\n                    ").concat(eg("fas fa-calendar-alt","Released",o.ReleaseDate,"fas fa-history","Last Activity",function(e){let t=new Date(e),a=String(t.getDate()).padStart(2,"0"),l=String(t.getMonth()+1).padStart(2,"0"),s=t.getFullYear(),n=String(t.getHours()).padStart(2,"0"),o=String(t.getMinutes()).padStart(2,"0"),i=String(t.getSeconds()).padStart(2,"0");return"".concat(a,"/").concat(l,"/").concat(s," ").concat(n,":").concat(o,":").concat(i)}(o.LastActivity)),"\n                    ").concat(eg("fas fa-calendar-plus","Added",o.AddedMonth,"fas fa-database","Source",o.Source),"\n                    ").concat(eg("fas fa-book-open","Main","".concat(Math.round(o.HlMS/3600)," hrs"),"fas fa-plus","Extra","".concat(Math.round(o.HlME/3600),' hrs / <i class="fas fa-check"></i>').concat(Math.round(o.HLC/3600)," hrs")),"\n                    ").concat(eg("fas fa-tachometer-alt","FPS","".concat(Math.round(o.avgfps)),"fas fa-microchip","CPU Power","".concat(Math.round(o.cpupwravg))),'\n                    <tr><td><br></td></tr><tr><td colspan="4" style="padding: 2px 5px;"><i class="fas fa-book"></i> <strong>Genres:</strong> ').concat(null===(t=o.Genres)||void 0===t?void 0:t.toString().split("|").map(e=>'<span class="badge">'.concat(e,"</span>")).join(" "),'</td></tr>\n                    <tr><td><br></td></tr><tr><td colspan="4" style="padding: 2px 5px;"><i class="fas fa-book"></i> <strong>Tags:</strong> ').concat(null===(a=o.Tags)||void 0===a?void 0:a.toString().split("|").map(e=>'<span class="badge">'.concat(e,"</span>")).join(" "),'</td></tr>\n                    <tr><td><br></td></tr><tr><td colspan="4" style="padding: 2px 5px;"><i class="fas fa-book"></i> <strong>Features:</strong> ').concat(null===(s=o.Features)||void 0===s?void 0:s.toString().split("|").map(e=>'<span class="badge">'.concat(e,"</span>")).join(" "),"</td></tr>")+(o.Categories&&'<tr><td><br></td></tr><tr><td colspan="4" style="padding: 2px 5px;"><i class="fas fa-book"></i> <strong>Categories:</strong> '.concat(null===(n=o.Categories)||void 0===n?void 0:n.toString().split("|").map(e=>'<span class="badge">'.concat(e,"</span>")).join(" "),"</td></tr>"))+"<tr><td colspan=\"4\">\n                    <img className='tooltip-image' src=".concat("back/"+o.Id+".jpg"," loading='lazy' /></td></tr></table>\n            </div>\n        "),className:"k-card",children:[(0,l.jsx)("a",{href:o.uri,children:(0,l.jsx)("img",{className:"imgOverlay",src:"ico/"+o.Source+".png"})}),(0,l.jsxs)("a",{href:o.Steam,children:[(0,l.jsx)("img",{className:"k-card-media",height:"270",width:"180",src:"img/"+o.Id+".jpg",loading:"lazy"}),T&&(0,l.jsxs)("span",{className:"infoSpan",children:[(0,l.jsxs)("span",{children:[Math.round(100*o.InstallSize/1024/1024/1024)/100,"gb"]}),(0,l.jsxs)("span",{className:"midspan",children:[Math.round(o.Playtime/3600),"h",(0,l.jsx)("span",{className:"k-icon k-font-icon k-i-clock"}),Math.round(o.HlME/3600),"h"]}),(0,l.jsxs)("span",{children:[o.CriticScoreGroup,(0,l.jsx)("span",{className:"k-icon k-font-icon k-i-star"}),o.CommunityScore,"%"]})]}),T&&(o.avgfps>0||o.cpupwravg>0)&&(0,l.jsxs)("span",{className:"infoSpan",style:{marginTop:-6},children:[(0,l.jsxs)("span",{children:[Math.round(o.avgfps)," fps"]}),(0,l.jsxs)("span",{className:"midspan",children:[Math.round(o.cpupwravg),(0,l.jsx)("span",{className:"k-icon k-font-icon k-i-link-vertical"}),Math.round(o.cpupwrmax)]}),(0,l.jsxs)("span",{children:[Math.round(o.gpupwravg),(0,l.jsx)("span",{className:"k-icon k-font-icon k-i-eye"}),Math.round(o.gpupwrmax)]})]})]})]},o.id)}function eh(e,t,a,l){s({games:y.sort((t,a)=>a[e]-t[e]).filter(t),group:[{field:a,dir:"desc"}],take:l})}function ev(e){var t,a;let l=null!==(a=null===(t=e.currentTarget)||void 0===t?void 0:t.title)&&void 0!==a?a:null;switch(F(l),l){case"Everything":eh("Added",e=>!e.Hidden,"AddedMonth",300);break;case"Installed":eh("LastActivity",e=>e.IsInstalled&&!e.Hidden,"test",1e3);break;case"Completed":eh("LastActivity",e=>{var t,a;return!e.Hidden&&(null!==(a=["⭐","⭐⭐","⭐⭐⭐","⭐⭐⭐⭐","⭐⭐⭐⭐⭐","Abandoned","Beaten","Completed"].indexOf(null!==(t=e.CompletionStatus)&&void 0!==t?t:"-1"))&&void 0!==a?a:-1)>-1},"CompletionStatus",1e3);break;case"Not Completed":eh("CriticScore",e=>{var t,a,l;return!e.Hidden&&(null!==(a=e.ReleaseYear)&&void 0!==a?a:-1)>=2007&&(null!==(l=null===(t=e.Features)||void 0===t?void 0:t.indexOf("Single Player"))&&void 0!==l?l:-1)>-1&&[null,"Not Played","Played"].indexOf(e.CompletionStatus)>-1&&(e.CriticScore||!0)},"CriticScoreGroup",300);break;case"Popular":eh("Reviews",e=>{var t,a,l;return!e.Hidden&&(null!==(a=e.ReleaseYear)&&void 0!==a?a:-1)>=2007&&(null!==(l=null===(t=e.Features)||void 0===t?void 0:t.indexOf("Single Player"))&&void 0!==l?l:-1)>-1&&[null,"Not Played","Played"].indexOf(e.CompletionStatus)>-1&&(e.CriticScore||!0)},"ReviewCategory",300);break;case"FriendShared":eh("Added",e=>null!=e.Features&&e.Features.indexOf("Borrowed")>-1&&[null,"Not Played","Played"].indexOf(e.CompletionStatus)>-1,"AddedMonth",300);break;case"Top":eh("CriticScore",e=>{var t,a,l,s,n,o;return!e.Hidden&&[null,"Not Played","Played"].indexOf(e.CompletionStatus)>-1&&((null!==(t=e.CriticScore)&&void 0!==t?t:-1)>=80&&(null!==(a=e.CommunityScore)&&void 0!==a?a:-1)>=80||(null!==(l=e.CommunityScore)&&void 0!==l?l:-1)>=90&&(null!==(n=null!==(s=e.CriticScore)&&void 0!==s?s:-1)&&void 0!==n?n:1e3)>=7&&(null!==(o=e.Reviews)&&void 0!==o?o:-1)>1e3)},"ReleaseYear",300);break;case"Co-op":eh("CommunityScoreGroup",e=>{var t,a,l,s;return!e.Hidden&&((null!==(l=null===(t=e.Tags)||void 0===t?void 0:t.indexOf("Local Co-Op"))&&void 0!==l?l:-1)>-1||(null!==(s=null===(a=e.Tags)||void 0===a?void 0:a.indexOf("Local Multiplayer"))&&void 0!==s?s:-1)>-1)&&[null,"Not Played","Played"].indexOf(e.CompletionStatus)>-1},"CommunityScoreGroup",300);break;case"4x":eh("CommunityScoreGroup",e=>{var t,a;return!e.Hidden&&(null!==(a=null===(t=e.Tags)||void 0===t?void 0:t.indexOf("4X"))&&void 0!==a?a:-1)>-1},"ReleaseYear",1e3);break;case"Colony Sim":eh("CommunityScoreGroup",e=>{var t,a;return!e.Hidden&&(null!==(a=null===(t=e.Tags)||void 0===t?void 0:t.indexOf("Colony Sim"))&&void 0!==a?a:-1)>-1},"ReleaseYear",1e3);break;case"Adventures":eh("CommunityScoreGroup",e=>{var t,a,l,s;return!e.Hidden&&((null!==(l=null===(t=e.Tags)||void 0===t?void 0:t.indexOf("Point"))&&void 0!==l?l:-1)>-1||(null!==(s=null===(a=e.Genres)||void 0===a?void 0:a.indexOf("Point"))&&void 0!==s?s:-1)>-1)},"ReleaseYear",300);break;case"Game Pass":eh("Added",e=>{var t;return["Xbox Game Pass","Xbox","EA Pass"].indexOf(null!==(t=e.Source)&&void 0!==t?t:"-1")>-1},"AddedMonth",300);break;case"Steam Deck":eh("CriticScore",e=>{var t,a;return!e.Hidden&&(null!==(a=null===(t=e.Categories)||void 0===t?void 0:t.indexOf("Deck"))&&void 0!==a?a:-1)>-1},"ReleaseYear",300)}}async function ex(){if(void 0==y||0==y.length){var e,t,a=document.getElementsByTagName("script")[0],l=document.createElement("script");l.type="text/javascript",l.async=!0,l.src="scripts/gameperf.json.js?v="+Math.random();let s=a.parentNode;null!=s&&s.insertBefore(l,a);var l=document.createElement("script");l.type="text/javascript",l.async=!0,l.src="scripts/games.json.js?v="+Math.random(),null!=(s=a.parentNode)&&s.insertBefore(l,a),l.addEventListener("load",function(){y=window.games,k=window.gameperf,console.log("Got Games")})}for(;0==y.length;)await new Promise(e=>setTimeout(e,1e3));for(let e of(console.log("Init"),y)){let a=e,l=k.find(e=>e.id==a.Id);if(a.IsInstalled,null!=l)for(let e in l)a[e]=l[e];null==a.CriticScore&&(a.CriticScoreGroup=null),null==a.CommunityScore&&(a.CommunityScoreGroup=null),null!=a.ReleaseDate&&""!=a.ReleaseDate&&(a.ReleaseMonth=a.ReleaseDate.split("/")[2]+"-"+a.ReleaseDate.split("/")[1].padStart(2,"0")),null!=a.Added&&(a.Added=new Date(parseInt(a.Added.replace("/Date(","").replace(")/",""))),a.AddedMonth=a.Added.getFullYear()+"-"+(a.Added.getMonth()+1).toString().padStart(2,"0")),null!=a.LastActivity&&(a.LastActivity=new Date(parseInt(a.LastActivity.replace("/Date(","").replace(")/",""))),a.LastActivityYear=a.LastActivity.getFullYear()),"Xbox"==a.Source&&(a.Source="Xbox Game Pass"),null!=a.Reviews&&(a.Reviews>2e5?a.ReviewCategory=2e5:a.Reviews>5e4?a.ReviewCategory=5e4:a.Reviews>1e4?a.ReviewCategory=1e4:a.Reviews>1e3?a.ReviewCategory=1e3:a.Reviews>500?a.ReviewCategory=500:a.Reviews>10?a.ReviewCategory=10:a.Reviews>0&&(a.ReviewCategory=0)),a.uri="plgame://"+a.Id+"?game="+encodeURI(a.GameId)+"&source="+encodeURI(null!==(t=a.Source)&&void 0!==t?t:"-1")+"&name="+encodeURI(a.Name)}b=[...new Set((e=y).map(e=>e.Source))].sort((e,t)=>e.localeCompare(t)),N=[...new Set(e.map(e=>e.Tags.split("|")).flat())].sort((e,t)=>e.localeCompare(t)),R=[...new Set(e.map(e=>e.Genres.split("|")).flat())].sort((e,t)=>e.localeCompare(t)),[...new Set(e.map(e=>e.Categories.split("|")).flat())].sort((e,t)=>e.localeCompare(t)),G=[...new Set(e.map(e=>e.ReleaseYear))].filter(e=>null!=e).sort((e,t)=>t-e).map(e=>e.toString()),P=[...new Set(e.map(e=>e.Features.split("|")).flat())].sort((e,t)=>e.localeCompare(t)),s({games:y.sort((e,t)=>t.LastActivity-e.LastActivity).filter(e=>e.IsInstalled&&!e.Hidden),group:[{field:"test",dir:"desc"}],take:1e3})}(0,c.useEffect)(()=>{H.current&&H.current.querySelectorAll(".k-card").forEach((e,t)=>{t===B?(e.classList.add("focused"),e.scrollIntoView({behavior:"smooth",block:"center"})):e.classList.remove("focused")})},[B]),(0,c.useEffect)(()=>{ex()},[]);let ef=(e,t)=>{if("Name"==t)w[t]={logic:"and",filters:[{field:"Name",operator:"contains",value:e.value}]};else for(let a of Object.keys(w))if(t==a){let t="eq";["Genres","Features","Categories","Tags"].indexOf(a)>-1&&(t="contains");let l=e.value.map(e=>({field:a,operator:t,value:"true"==e||"false"!=e&&e})).flat();w[a]={logic:"or",filters:l}}let a={logic:"and",filters:[]};for(let e of Object.values(w))e&&e.filters.length>0&&a.filters.push(e);console.log(a),z(a)},eC=e=>{let t=["Installed","Top","Completed","Not Completed","Everything","Popular","FriendShared","Game Pass","Steam Deck","4x","Colony Sim","Co-op","Adventures"],a=t.indexOf(null!=A?A:""),l=a;"LEFT"===e?l=(a+1)%t.length:"RIGHT"===e&&(l=(a-1+t.length)%t.length),F(t[l]),ev({currentTarget:{title:t[l]}})},ej=(0,S.QS)({onSwipedLeft:()=>eC("LEFT"),onSwipedRight:()=>eC("RIGHT")});return(0,l.jsx)(u.ZP,{onButtonDown:e=>{let t=Math.floor(window.innerWidth/200);switch(console.log(e),e){case"DPadUp":L(e=>Math.max(e-t,0));break;case"DPadDown":L(e=>Math.min(e+t,a.games.length-1));break;case"DPadLeft":L(e=>Math.max(e-1,0));break;case"DPadRight":L(e=>Math.min(e+1,a.games.length-1));break;case"X":let l=a.games[B];l&&l.Steam&&window.open(l.Steam,"_blank");break;case"A":let s=a.games[B];s&&s.uri&&window.open(s.uri,"_blank")}},children:(0,l.jsxs)("div",{ref:H,style:{display:"contents"},children:[(0,l.jsxs)(n(),{children:[(0,l.jsx)("title",{children:"Playnite"}),(0,l.jsx)("meta",{name:"description",content:"Playnite Web"}),(0,l.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=0.58, maximum-scale=0.58, user-scalable=0"}),(0,l.jsx)("meta",{"http-equiv":"Content-Type",content:"text/html;charset=utf-8"}),(0,l.jsx)("meta",{"http-equiv":"Cache-Control",content:"no-cache, no-store, must-revalidate"}),(0,l.jsx)("meta",{name:"mobile-web-app-capable",content:"yes"}),(0,l.jsx)("meta",{"http-equiv":"Pragma",content:"no-cache"}),(0,l.jsx)("meta",{"http-equiv":"Expires",content:"0"}),(0,l.jsx)("link",{rel:"icon",href:"favicon.ico"}),(0,l.jsx)("link",{href:"https://kendo.cdn.telerik.com/themes/8.0.1/default/default-main-dark.css",rel:"stylesheet"}),(0,l.jsx)("link",{rel:"stylesheet",href:"Home.module.css"}),(0,l.jsx)("link",{rel:"stylesheet",href:"https://unpkg.com/@progress/kendo-font-icons/dist/index.css"}),(0,l.jsx)("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"})]}),(0,l.jsx)(d.u,{id:"tltip"}),(0,l.jsxs)(g.o,{id:"toolbar",className:"mainToolbar",children:[(0,l.jsxs)("div",{className:"leftButtons",children:[(0,l.jsx)(o.z,{togglable:!0,onClick:ev,title:"Installed",selected:"Installed"==A,children:(0,l.jsx)(f.G,{icon:j.qAL,color:"#ADD8E6"})}),(0,l.jsx)(o.z,{togglable:!0,onClick:ev,title:"Top",selected:"Top"==A,children:(0,l.jsx)(f.G,{icon:j.FPD,color:"#90EE90"})}),(0,l.jsx)(o.z,{togglable:!0,onClick:ev,title:"Completed",selected:"Completed"==A,children:(0,l.jsx)(f.G,{icon:j.LEp,color:"#D8BFD8"})}),(0,l.jsx)(o.z,{togglable:!0,onClick:ev,title:"Not Completed",selected:"Not Completed"==A,children:(0,l.jsx)(f.G,{icon:j.NBC,color:"#F08080"})}),(0,l.jsx)(o.z,{togglable:!0,onClick:ev,title:"Everything",selected:"Everything"==A,children:(0,l.jsx)(f.G,{icon:j.$X1,color:"#FFD700"})}),(0,l.jsx)(o.z,{togglable:!0,onClick:ev,title:"Popular",selected:"Popular"==A,children:(0,l.jsx)(f.G,{icon:j.Tab,color:"#FFFFE0"})})]}),(0,l.jsxs)("div",{className:"leftButtons",children:[(0,l.jsx)(o.z,{togglable:!0,onClick:ev,title:"FriendShared",selected:"FriendShared"==A,children:(0,l.jsx)(f.G,{icon:j.FVb,color:"#FFB6C1"})}),(0,l.jsx)(o.z,{togglable:!0,onClick:ev,title:"Game Pass",selected:"Game Pass"==A,children:(0,l.jsx)(f.G,{icon:C.ovy,color:"#98FB98"})}),(0,l.jsx)(o.z,{togglable:!0,onClick:ev,title:"Steam Deck",selected:"Steam Deck"==A,children:(0,l.jsx)(f.G,{icon:j.yn$,color:"#E0FFFF"})})]}),(0,l.jsxs)("div",{className:"leftButtons",children:[(0,l.jsx)(o.z,{togglable:!0,onClick:ev,title:"4x",selected:"4x"==A,children:(0,l.jsx)(f.G,{icon:j.g4A,color:"#D2B48C"})}),(0,l.jsx)(o.z,{togglable:!0,onClick:ev,title:"Colony Sim",selected:"Colony Sim"==A,children:(0,l.jsx)(f.G,{icon:j.SBo,color:"#20B2AA"})}),(0,l.jsx)(o.z,{togglable:!0,onClick:ev,title:"Co-op",selected:"Co-op"==A,children:(0,l.jsx)(f.G,{icon:j.yOe,color:"#FF69B4"})}),(0,l.jsx)(o.z,{togglable:!0,onClick:ev,title:"Adventures",selected:"Adventures"==A,children:(0,l.jsx)(f.G,{icon:j.kwz,color:"#B0C4DE"})})]}),(0,l.jsxs)("div",{className:"rightButtons",children:[(0,l.jsx)(o.z,{togglable:!0,onClick:()=>{t(!e)},selected:e,children:(0,l.jsx)(p.ulB,{})}),(0,l.jsx)(o.z,{togglable:!0,onClick:function(e){E(!T)},selected:T,children:(0,l.jsx)(p.DAO,{})})]})]}),e&&(0,l.jsxs)(g.o,{id:"toolbar3",className:"mainToolbar",children:[(0,l.jsxs)("span",{children:[" ",(0,l.jsx)(p.Xws,{}),(0,l.jsx)(m.z,{placeholder:"Name",onChange:e=>{eu(e.value),ef(e,"Name")},id:"shape",value:ed})]}),(0,l.jsxs)("span",{children:[(0,l.jsx)(p.dSq,{}),(0,l.jsx)(i.NU,{autoClose:!1,data:["true","false"],value:eo,onChange:e=>{ei(e.value),ef(e,"Hidden")},placeholder:"Hidden"})]}),(0,l.jsxs)("span",{children:[(0,l.jsx)(p.aBF,{}),(0,l.jsx)(i.NU,{autoClose:!1,data:["true","false"],value:er,onChange:e=>{ec(e.value),ef(e,"IsInstalled")},placeholder:"Installed"})]}),(0,l.jsxs)("span",{children:[(0,l.jsx)(p.QJe,{}),(0,l.jsx)(i.NU,{autoClose:!1,data:["0","1","2","3","4","5","6","7","8","9","10"].reverse(),value:U,onChange:e=>{Y(e.value),ef(e,"CriticScoreGroup")},placeholder:"Critic"})]}),(0,l.jsxs)("span",{children:[(0,l.jsx)(p.i1q,{}),(0,l.jsx)(i.NU,{autoClose:!1,data:b,value:_,onChange:e=>{X(e.value),ef(e,"Source")},placeholder:"Source"})," "]}),(0,l.jsxs)("span",{children:[(0,l.jsx)(p.fxx,{}),(0,l.jsx)(i.NU,{autoClose:!1,data:N,value:ee,onChange:e=>{et(e.value),ef(e,"Tags")},placeholder:"Tag"})," "]}),(0,l.jsxs)("span",{children:[(0,l.jsx)(p.iVx,{}),(0,l.jsx)(i.NU,{autoClose:!1,data:R,value:es,onChange:e=>{en(e.value),ef(e,"Genres")},placeholder:"Genres"})," "]}),(0,l.jsxs)("span",{children:[(0,l.jsx)(p.Kc5,{}),(0,l.jsx)(i.NU,{autoClose:!1,data:P,value:ea,onChange:e=>{el(e.value),ef(e,"Features")},placeholder:"Feature"})," "]}),(0,l.jsxs)("span",{children:[(0,l.jsx)(p.l_A,{}),(0,l.jsx)(i.NU,{autoClose:!1,data:["Not Played","Played","Beaten","Completed","Abandoned","*","**","***","****","*****"].reverse(),value:q,onChange:e=>{V(e.value),ef(e,"CompletionStatus")},placeholder:"Completion"})," "]}),(0,l.jsxs)("span",{children:[(0,l.jsx)(p.I$,{}),(0,l.jsx)(i.NU,{autoClose:!1,data:["0","1","2","3","4","5","6","7","8","9","10"].reverse(),value:$,onChange:e=>{Q(e.value),ef(e,"CommunityScoreGroup")},placeholder:"Community"})," "]}),(0,l.jsxs)("span",{children:[(0,l.jsx)(p.DCG,{}),(0,l.jsx)(i.NU,{autoClose:!1,data:["0","10","500","1000","10000","50000","200000"].reverse(),value:W,onChange:e=>{J(e.value),ef(e,"ReviewCategory")},placeholder:"Reviews"})," "]}),(0,l.jsxs)("span",{children:[(0,l.jsx)(p.XdU,{}),(0,l.jsx)(i.NU,{autoClose:!1,data:G,value:K,onChange:e=>{Z(e.value),ef(e,"ReleaseYear")},placeholder:"Released"})]})]}),(0,l.jsxs)("div",{style:{display:"contents"},...ej,children:[(0,l.jsx)(r.B,{item:function(e){let t=e.dataItem,a=t.items;return a[0].hasOwnProperty("items")?(0,l.jsxs)("div",{className:"k-listview-item",style:{overflow:"hidden"},children:[(0,l.jsx)("div",{className:"sep",children:t.value}),a.sort((e,t)=>t.value.length-e.value.length).map(e=>(0,l.jsx)(ep,{dataItem:e}))]}):(0,l.jsx)(ep,{dataItem:t})},data:(0,h.vM)((0,v.j)(a.games,[O],"").slice(D,D+a.take),a.group).sort((e,t)=>t.value-e.value)}),a.games.length>a.take&&(0,l.jsx)(x.u,{className:"k-listview-pager",skip:D,take:a.take,onPageChange:e=>{I({skip:e.skip,take:e.take})},total:a.games.length})]})]})})}}},e=>{var t=t=>e(e.s=t);e.O(0,[365,976,948,253,940,888,774,179],()=>t(8312)),_N_E=e.O()}]);