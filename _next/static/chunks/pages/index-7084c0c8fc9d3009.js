(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:(e,l,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(1573)}])},1573:(e,l,t)=>{"use strict";t.r(l),t.d(l,{default:()=>R});var i=t(5893),a=t(9008),s=t.n(a),o=t(4711),n=t(9083),r=t(7963),u=t(7294),d=t(684),c=t(209),p=t(5346),h=t(8784),m=t(3604),v=t(7744),g=t(3544),f=t(9554);class x{copyPropertyValuesFrom(e){var l,t,i,a,s,o,n,r,u,d,c,p,h,m,v,g,f,x,C,S,y,j,w,k,b,O,N,M,P,L,R,F,G,A,I,T,D,H,E,z,B,U,Y,V,_,X,q,$,W,Q,J,K,Z,ee;e.id&&(this.id=e.id),e.Id&&(this.Id=e.Id),e.GameId&&(this.GameId=e.GameId),e.Name&&(this.Name=e.Name),e.uri&&(this.uri=e.uri),e.Uri&&(this.Uri=e.Uri),null!==e.ReviewCategory&&(this.ReviewCategory=e.ReviewCategory),null!==e.LastActivityYear&&(this.LastActivityYear=e.LastActivityYear),e.ReleaseMonth&&(this.ReleaseMonth=e.ReleaseMonth),e.AddedMonth&&(this.AddedMonth=e.AddedMonth),e.Added&&(this.Added=e.Added),this.Hidden=null!==(w=e.Hidden)&&void 0!==w&&w,null!==e.CommunityScore&&(this.CommunityScore=e.CommunityScore),e.ReleaseDate&&(this.ReleaseDate=e.ReleaseDate),this.IsInstalled=null!==(k=e.IsInstalled)&&void 0!==k&&k,null!==e.Playtime&&(this.Playtime=e.Playtime),null!==e.InstallSize&&(this.InstallSize=e.InstallSize),null!==e.CriticScore&&(this.CriticScore=e.CriticScore),e.Tags&&(this.Tags=e.Tags),e.Genres&&(this.Genres=e.Genres),e.Features&&(this.Features=e.Features),e.Categories&&(this.Categories=e.Categories),e.Source&&(this.Source=e.Source),e.CompletionStatus&&(this.CompletionStatus=e.CompletionStatus),null!==e.CriticScoreGroup&&(this.CriticScoreGroup=e.CriticScoreGroup),null!==e.CommunityScoreGroup&&(this.CommunityScoreGroup=e.CommunityScoreGroup),null!==e.ReleaseYear&&(this.ReleaseYear=e.ReleaseYear),e.LastActivity&&(this.LastActivity=e.LastActivity),e.Notes&&(this.Notes=e.Notes),e.Steam&&(this.Steam=e.Steam),null!==e.HlMS&&(this.HlMS=e.HlMS),null!==e.HlME&&(this.HlME=e.HlME),null!==e.HLC&&(this.HLC=e.HLC),null!==e.Reviews&&(this.Reviews=e.Reviews),null!==e.PlayerCount&&(this.PlayerCount=e.PlayerCount),null!==e.avgfps&&(this.avgfps=e.avgfps),null!==e.minfps&&(this.minfps=e.minfps),null!==e.maxfps&&(this.maxfps=e.maxfps),null!==e.cpupwravg&&(this.cpupwravg=e.cpupwravg),null!==e.cpupwrmin&&(this.cpupwrmin=e.cpupwrmin),null!==e.cpupwrmax&&(this.cpupwrmax=e.cpupwrmax),null!==e.gpupwravg&&(this.gpupwravg=e.gpupwravg),null!==e.gpupwrmin&&(this.gpupwrmin=e.gpupwrmin),null!==e.gpupwrmax&&(this.gpupwrmax=e.gpupwrmax),null!==e.cputempavg&&(this.cputempavg=e.cputempavg),null!==e.cputempmin&&(this.cputempmin=e.cputempmin),null!==e.cputempmax&&(this.cputempmax=e.cputempmax),null!==e.gputempavg&&(this.gputempavg=e.gputempavg),null!==e.gputempmin&&(this.gputempmin=e.gputempmin),null!==e.gputempmax&&(this.gputempmax=e.gputempmax),null!==e.mobotempavg&&(this.mobotempavg=e.mobotempavg),null!==e.mobotempmin&&(this.mobotempmin=e.mobotempmin),null!==e.mobotempmax&&(this.mobotempmax=e.mobotempmax),null!==e.totpwravg&&(this.totpwravg=e.totpwravg),null!==e.totpwrmin&&(this.totpwrmin=e.totpwrmin),null!==e.totpwrmax&&(this.totpwrmax=e.totpwrmax),null!==e.cpuutilavg&&(this.cpuutilavg=e.cpuutilavg),null!==e.cpuutilmin&&(this.cpuutilmin=e.cpuutilmin),null!==e.cpuutilmax&&(this.cpuutilmax=e.cpuutilmax),null!==e.gpuutilavg&&(this.gpuutilavg=e.gpuutilavg),null!==e.gpuutilmin&&(this.gpuutilmin=e.gpuutilmin),null!==e.gpuutilmax&&(this.gpuutilmax=e.gpuutilmax),null!==e.vramutilavg&&(this.vramutilavg=e.vramutilavg),null!==e.vramutilmin&&(this.vramutilmin=e.vramutilmin),null!==e.vramutilmax&&(this.vramutilmax=e.vramutilmax),e.OtherSources&&(this.OtherSources=e.OtherSources),null==this.CriticScore&&(this.CriticScoreGroup=null),null==this.CommunityScore&&(this.CommunityScoreGroup=null),null!=this.ReleaseDate&&""!=this.ReleaseDate&&(this.ReleaseMonth=this.ReleaseDate.split("/")[2]+"-"+this.ReleaseDate.split("/")[1].padStart(2,"0")),null!=this.Added&&(this.Added=new Date(parseInt(this.Added.replace("/Date(","").replace(")/",""))),this.AddedMonth=this.Added.getFullYear()+"-"+(this.Added.getMonth()+1).toString().padStart(2,"0")),null!=this.LastActivity&&(this.LastActivity=new Date(parseInt(this.LastActivity.replace("/Date(","").replace(")/",""))),this.LastActivityYear=this.LastActivity.getFullYear()),"Xbox"==this.Source&&(this.Source="Xbox Game Pass"),null!=this.Reviews&&(this.Reviews>2e5?this.ReviewCategory=2e5:this.Reviews>5e4?this.ReviewCategory=5e4:this.Reviews>1e4?this.ReviewCategory=1e4:this.Reviews>1e3?this.ReviewCategory=1e3:this.Reviews>500?this.ReviewCategory=500:this.Reviews>10?this.ReviewCategory=10:this.Reviews>0&&(this.ReviewCategory=0)),this.uri="plgame://"+this.Id+"?game="+encodeURI(this.GameId)+"&source="+encodeURI(null!==(b=this.Source)&&void 0!==b?b:"-1")+"&name="+encodeURI(this.Name),(null!==(O=null===(l=this.Features)||void 0===l?void 0:l.indexOf("Local Multiplayer: Co-op"))&&void 0!==O?O:-1)>-1&&(null!==(N=null===(t=this.Features)||void 0===t?void 0:t.indexOf("Local Multiplayer: Versus"))&&void 0!==N?N:-1)>-1?this.Coop="Co-op & Versus":(null!==(M=null===(i=this.Features)||void 0===i?void 0:i.indexOf("Local Multiplayer: Co-op"))&&void 0!==M?M:-1)>-1?this.Coop="Co-op":(null!==(P=null===(a=this.Features)||void 0===a?void 0:a.indexOf("Local Multiplayer: Versus"))&&void 0!==P?P:-1)>-1?this.Coop="Versus":(null!==(L=null===(s=this.Tags)||void 0===s?void 0:s.indexOf("Local Co-op"))&&void 0!==L?L:-1)>-1||(null!==(R=null===(o=this.Tags)||void 0===o?void 0:o.indexOf("Local Multiplayer"))&&void 0!==R?R:-1)>-1?(null!==(A=null===(F=this.Features)||void 0===F?void 0:F.indexOf("Online Multiplayer: Versus"))&&void 0!==A?A:-1)>-1?this.Coop="Versus":(null!==(I=null===(G=this.Features)||void 0===G?void 0:G.indexOf("Co-Op Campaign"))&&void 0!==I?I:-1)>-1?this.Coop="Co-op":this.Coop="Unknown":this.Coop=null;let el=null!==(T=null===(n=this.Features)||void 0===n?void 0:n.split("|"))&&void 0!==T?T:[];(null!==(D=null===(r=this.Features)||void 0===r?void 0:r.indexOf("Local Co-Op: "))&&void 0!==D?D:-1)>-1?this.LocalCoop="["+(null===(Y=el.find(e=>e.indexOf("Local Co-Op: ")>-1))||void 0===Y?void 0:Y.replace("Local Co-Op: ","").replace(" Players",""))+"]":(null!==(H=null===(u=this.Features)||void 0===u?void 0:u.indexOf(" Player Local"))&&void 0!==H?H:-1)>-1?this.LocalCoop="["+(null===(V=el.find(e=>e.indexOf(" Player Local")>-1))||void 0===V?void 0:V.replace(" Player Local",""))+"]":(null!==(E=null===(d=this.Features)||void 0===d?void 0:d.indexOf("Local Multiplayer: 2-4"))&&void 0!==E?E:-1)>-1?this.LocalCoop="[3 , 4]":(null!==(z=null===(c=this.Features)||void 0===c?void 0:c.indexOf("Local Multiplayer: 2"))&&void 0!==z?z:-1)>-1?this.LocalCoop="[2]":(null!==(B=null===(p=this.Features)||void 0===p?void 0:p.indexOf("Local Multiplayer: 4-8"))&&void 0!==B?B:-1)>-1?this.LocalCoop="[5, 6, 7, 8]":(null!==(U=null===(h=this.Features)||void 0===h?void 0:h.indexOf("Local Multiplayer: 8+"))&&void 0!==U?U:-1)>-1&&(this.LocalCoop="[9]"),(null!==(_=null===(m=this.Features)||void 0===m?void 0:m.indexOf("Online Co-Op: "))&&void 0!==_?_:-1)>-1?this.OnlineCoop="["+(null===(Q=el.find(e=>e.indexOf("Online Co-Op: ")>-1))||void 0===Q?void 0:Q.replace("Online Co-Op: ","").replace(" Players",""))+"]":(null!==(X=null===(v=this.Features)||void 0===v?void 0:v.indexOf("Online Multiplayer: 2-4"))&&void 0!==X?X:-1)>-1?this.OnlineCoop="[3, 4]":(null!==(q=null===(g=this.Features)||void 0===g?void 0:g.indexOf("Online Multiplayer: 2"))&&void 0!==q?q:-1)>-1?this.OnlineCoop="[2]":(null!==($=null===(f=this.Features)||void 0===f?void 0:f.indexOf("Online Multiplayer: 4-8"))&&void 0!==$?$:-1)>-1?this.OnlineCoop="[5, 6, 7, 8]":(null!==(W=null===(x=this.Features)||void 0===x?void 0:x.indexOf("Online Multiplayer: 8+"))&&void 0!==W?W:-1)>-1&&(this.OnlineCoop="[9]");let et=null===(C=this.Tags)||void 0===C?void 0:C.split("|").find(e=>e.includes("Steam Deck"));this.SteamDeck=null!==(J=null==et?void 0:et.replace("Steam Deck ",""))&&void 0!==J?J:null,this.Tags=null!==(K=null===(S=this.Tags)||void 0===S?void 0:S.split("|").filter(e=>!e.includes("Steam Deck")).join("|"))&&void 0!==K?K:null;let ei=null!==(Z=null===(y=this.Tags)||void 0===y?void 0:y.split("|"))&&void 0!==Z?Z:[],ea=null!==(ee=null===(j=this.Features)||void 0===j?void 0:j.split("|"))&&void 0!==ee?ee:[],es=["Split Screen","PvE","PvP","Multiplayer","Co-Op","Co-op","Singleplayer","Versus","Online","Local"],eo=["Multiplayer","Co-Op","Single Player","Co-op","Versus","Online","Local"],en=["Controller","Light Bar","Haptic","Adaptive Trigger","PlayStation"],er=ei.filter(e=>es.some(l=>e.includes(l)));this.Tags=ei.filter(e=>!es.some(l=>e.includes(l))).join("|")||null;let eu=ea.filter(e=>eo.some(l=>e.includes(l))),ed=(ea=ea.filter(e=>!eo.some(l=>e.includes(l)))).filter(e=>en.some(l=>e.includes(l)));this.Features=ea.filter(e=>!en.some(l=>e.includes(l))).join("|")||null,this.ControllerSupport=ed.join("|")||null;let ec=[...null!=er?er:[],...null!=eu?eu:[]],ep=["Local Co-Op: ","Online Co-Op: "," Player Local","Multiplayer: 2","Multiplayer: 4","Multiplayer: 8","OSX","Linux","Downloadable"];ec=(ec=ec.filter(e=>!ep.some(l=>e.includes(l)))).map(e=>e.replace("Co-Op Extras: ","")),("?"!==this.LocalCoop||"?"!==this.OnlineCoop)&&(ec=ec.filter(e=>!["Multiplayer","Co-op","Versus","Online","Local"].some(l=>e.includes(l)))),(ec.includes("Single Player")||ec.includes("Singleplayer"))&&(ec=ec.filter(e=>"Single Player"!==e&&"Singleplayer"!==e)).push("Single Player"),this.Coop&&("Co-op & Versus"===this.Coop?ec.push("Co-Op","Versus"):ec.push(this.Coop)),"?"!==this.LocalCoop&&ec.push("Local: ".concat(this.LocalCoop)),"?"!==this.OnlineCoop&&ec.push("Online: ".concat(this.OnlineCoop)),this.Multi=ec.join("|")}constructor(){this.OtherSources=[],this.Coop=null,this.LocalCoop="?",this.OnlineCoop="?",this.SteamDeck=null,this.ControllerSupport=null,this.Hidden=!1,this.CommunityScore=null,this.ReleaseDate="",this.IsInstalled=!1,this.Playtime=0,this.InstallSize=null,this.CriticScore=null,this.Tags="",this.Multi="",this.Genres="",this.Features="",this.Categories="",this.Source="",this.CompletionStatus="",this.CriticScoreGroup=10,this.CommunityScoreGroup=10,this.ReleaseYear=null,this.LastActivity=null,this.Notes=null,this.Steam=null,this.HlMS=null,this.HlME=null,this.HLC=null,this.Reviews=null,this.PlayerCount=null,this.avgfps=null,this.minfps=null,this.maxfps=null,this.cpupwravg=null,this.cpupwrmin=null,this.cpupwrmax=null,this.gpupwravg=null,this.gpupwrmin=null,this.gpupwrmax=null,this.cputempavg=null,this.cputempmin=null,this.cputempmax=null,this.gputempavg=null,this.gputempmin=null,this.gputempmax=null,this.mobotempavg=null,this.mobotempmin=null,this.mobotempmax=null,this.totpwravg=null,this.totpwrmin=null,this.totpwrmax=null,this.cpuutilavg=null,this.cpuutilmin=null,this.cpuutilmax=null,this.gpuutilavg=null,this.gpuutilmin=null,this.gpuutilmax=null,this.vramutilavg=null,this.vramutilmin=null,this.vramutilmax=null,this.id=null,this.Id="",this.GameId="",this.Name="",this.uri="",this.Uri="",this.ReviewCategory=null,this.LastActivityYear=null,this.ReleaseMonth="",this.AddedMonth="",this.Added=""}}var C=t(9603),S=t(3024),y=t(9417),j=t(5338),w=[],k=[];let b={CriticScore:{logic:"and",filters:[]},Source:{logic:"and",filters:[]},ReleaseYear:{logic:"and",filters:[]},Hidden:{logic:"and",filters:[]},Name:{logic:"and",filters:[]},CompletionStatus:{logic:"and",filters:[]},Genres:{logic:"and",filters:[]},Tags:{logic:"and",filters:[]},Features:{logic:"and",filters:[]},Categories:{logic:"and",filters:[]},CommunityScore:{logic:"and",filters:[]},CommunityScoreGroup:{logic:"and",filters:[]},CriticScoreGroup:{logic:"and",filters:[]},ReviewCategory:{logic:"and",filters:[]},PlayerCount:{logic:"and",filters:[]},ReleaseMonth:{logic:"and",filters:[]},AddedMonth:{logic:"and",filters:[]},LastActivityYear:{logic:"and",filters:[]},IsInstalled:{logic:"and",filters:[]}},O=[],N=[],M=[],P=[],L=[];function R(){let[e,l]=(0,u.useState)(!1),[t,a]=(0,u.useState)({games:[],group:[],take:300}),[R,F]=(0,u.useState)("Installed"),[G,A]=(0,u.useState)({skip:0,take:1}),{skip:I}=G,[T,D]=(0,u.useState)(!1),[H,E]=(0,u.useState)({logic:"and",filters:[]}),[z,B]=(0,u.useState)(0),U=(0,u.useRef)(null),[Y,V]=(0,u.useState)([]),[_,X]=(0,u.useState)([]),[q,$]=(0,u.useState)([]),[W,Q]=(0,u.useState)([]),[J,K]=(0,u.useState)([]),[Z,ee]=(0,u.useState)([]),[el,et]=(0,u.useState)([]),[ei,ea]=(0,u.useState)([]),[es,eo]=(0,u.useState)([]),[en,er]=(0,u.useState)([]),[eu,ed]=(0,u.useState)([]),[ec,ep]=(0,u.useState)([]);function eh(e){var l;let t=e.dataItem,a=null!==(l=null==t?void 0:t.items)&&void 0!==l?l:[];return(0,i.jsxs)("div",{className:"k-listview-item",children:[(0,i.jsx)("h4",{className:"k-group-title",children:t.value}),(0,i.jsx)("div",{className:"cards",children:a.map(e=>(0,i.jsx)(ev,{item:e},e.Id))})]})}function em(e,l,t,i,a,s){return'\n            <tr>\n                <td style="white-space: nowrap; padding: 2px 5px;"><i class="'.concat(e,'"></i> <strong>').concat(l,':</strong></td>\n                <td style="white-space: nowrap; padding: 2px 5px;">').concat(t,'</td>\n                <td style="white-space: nowrap; padding: 2px 5px;"><i class="').concat(i,'"></i> <strong>').concat(a,':</strong></td>\n                <td style="white-space: nowrap; padding: 2px 5px;">').concat(s,"</td>\n            </tr>\n        ")}function ev(e){var l,t,a,s,o,n,r,u,d,c,h,m,v,g,f,x,C,S,y,j,w,k,b,O,N,M,P,L,R,F,G;let A=e.item;return(0,i.jsxs)("div",{"data-tooltip-id":"tltip","data-tooltip-html":'<div style="padding: 10px; font-family: Arial, sans-serif; font-size: 0.9em;">\n                <table style="width: 100%; border-collapse: collapse;">\n                <tr><td colspan="4">\n                        <div class=\'image-container\'>\n                        <img class=\'background-image\' src=\'back/'.concat(A.Id,".jpg' loading='lazy' />\n                        <img class='logo-image' src='logo/").concat(A.Id,'.png\' loading=\'lazy\' />\n                        </div>\n                    </td></tr>\n                    <tr><td colspan="4"><br><h3 style="margin: 0 0 5px 0;">').concat(A.Name,"</h3></td></tr\n                    ").concat(em("fas fa-clock","Playtime","".concat(null==A.Playtime?"":(0==Math.floor(A.Playtime/3600)?"":Math.floor(A.Playtime/3600)+"h ")+Math.floor(A.Playtime%3600/60)+"m"),"fas fa-history","Last Activity",function(e){if(null==e)return"";let l=new Date(e),t=String(l.getDate()).padStart(2,"0"),i=String(l.getMonth()+1).padStart(2,"0"),a=l.getFullYear();return"".concat(t,"/").concat(i,"/").concat(a)}(A.LastActivity)),"\n                    ").concat(em("fas fa-users","Community",(null!==(j=null===(l=A.CommunityScore)||void 0===l?void 0:l.toString())&&void 0!==j?j:"")+" ("+(null!==(w=null===(t=A.Reviews)||void 0===t?void 0:t.toString())&&void 0!==w?w:"")+")","fas fa-thumbs-up","Critic Score",null!==(k=null===(a=A.CriticScore)||void 0===a?void 0:a.toString())&&void 0!==k?k:""),"\n                    ").concat(em("fas fa-book-open","HLTB","".concat([A.HlMS,A.HlME,A.HLC].filter(e=>null!=e).map(e=>Math.round(e/3600)).join(" / ")+" hrs"),"fas fa-gamepad","Player Count",null!==(b=null===(s=A.PlayerCount)||void 0===s?void 0:s.toString())&&void 0!==b?b:""),"\n                    ").concat(em("fas fa-calendar-alt","Released",A.ReleaseDate,"fas fa-hdd","Size","".concat(A.InstallSize&&Math.round(100*A.InstallSize/1024/1024/1024)/100+" GB")),"\n                    ").concat(em("fas fa-calendar-plus","Added",A.AddedMonth,"fas fa-database","Source",null!==(O=A.Source)&&void 0!==O?O:""),"\n                    ").concat(null==A.avgfps?"":em("fas fa-tachometer-alt","FPS","".concat(null==A.avgfps?"":Math.round(A.avgfps)),"fas fa-microchip","Power","CPU: ".concat(null==A.cpupwravg?"":Math.round(A.cpupwravg)," GPU: ").concat(null==A.gpupwravg?"":Math.round(A.gpupwravg))),"\n                    ").concat(null==A.SteamDeck?"":em("fas fa-calendar-plus","Deck",A.SteamDeck,"","",""))+((null!==(N=null===(o=A.Genres)||void 0===o?void 0:o.length)&&void 0!==N?N:0)==0?"":'<tr><td><br></td></tr><tr><td colspan="4" style="padding: 2px 5px;"><i class="fas fa-book"></i> <strong>Genres:</strong> '.concat(null===(n=A.Genres)||void 0===n?void 0:n.toString().split("|").map(e=>'<span class="badge">'.concat(e,"</span>")).join(" "),"</td></tr>"))+((null!==(M=null===(r=A.Tags)||void 0===r?void 0:r.length)&&void 0!==M?M:0)==0?"":'<tr><td><br></td></tr><tr><td colspan="4" style="padding: 2px 5px;"><i class="fas fa-book"></i> <strong>Tags:</strong> '.concat(null===(u=A.Tags)||void 0===u?void 0:u.toString().split("|").map(e=>'<span class="badge">'.concat(e,"</span>")).join(" "),"</td></tr>"))+((null!==(P=null===(d=A.Features)||void 0===d?void 0:d.length)&&void 0!==P?P:0)==0?"":'<tr><td><br></td></tr><tr><td colspan="4" style="padding: 2px 5px;"><i class="fas fa-book"></i> <strong>Features:</strong> '.concat(null===(c=A.Features)||void 0===c?void 0:c.toString().split("|").map(e=>'<span class="badge">'.concat(e,"</span>")).join(" "),"</td></tr>"))+((null!==(L=null===(h=A.Categories)||void 0===h?void 0:h.length)&&void 0!==L?L:0)==0?"":'<tr><td><br></td></tr><tr><td colspan="4" style="padding: 2px 5px;"><i class="fas fa-book"></i> <strong>Categories:</strong> '.concat(null===(m=A.Categories)||void 0===m?void 0:m.toString().split("|").map(e=>'<span class="badge">'.concat(e,"</span>")).join(" "),"</td></tr>"))+((null!==(R=null===(v=A.OtherSources)||void 0===v?void 0:v.length)&&void 0!==R?R:0)==0?"":'<tr><td><br></td></tr><tr><td colspan="4" style="padding: 2px 5px;"><i class="fas fa-book"></i> <strong>Other Sources:</strong> '.concat(null===(g=A.OtherSources)||void 0===g?void 0:g.map(e=>'<span class="badge">'.concat(e,"</span>")).join(" "),"</td></tr>"))+(null==A.Notes?"":'<tr><td><br></td></tr><tr><td colspan="4" style="padding: 2px 5px;"><i class="fas fa-book"></i> <strong>Library:</strong> '.concat(null===(f=A.Notes)||void 0===f?void 0:f.toString().trim().split(" ").map(e=>'<span class="badge">'.concat(e,"</span>")).join(" "),"</td></tr>"))+((null!==(F=null===(x=A.Multi)||void 0===x?void 0:x.length)&&void 0!==F?F:0)==0?"":'<tr><td><br></td></tr><tr><td colspan="4" style="padding: 2px 5px;"><i class="fas fa-book"></i> <strong>Multiplayer:</strong> '.concat(null===(C=A.Multi)||void 0===C?void 0:C.toString().trim().split("|").map(e=>'<span class="badge">'.concat(e,"</span>")).join(" "),"</td></tr>"))+((null!==(G=null===(S=A.ControllerSupport)||void 0===S?void 0:S.length)&&void 0!==G?G:0)==0?"":'<tr><td><br></td></tr><tr><td colspan="4" style="padding: 2px 5px;"><i class="fas fa-book"></i> <strong>Controller:</strong> '.concat(null===(y=A.ControllerSupport)||void 0===y?void 0:y.toString().trim().split("|").map(e=>'<span class="badge">'.concat(e,"</span>")).join(" "),"</td></tr>"))+"</table>\n            </div>",className:"k-card",children:[(0,i.jsx)("a",{href:A.uri,children:(0,i.jsx)("img",{className:"imgOverlay",src:"ico/"+A.Source+".png"})}),(0,i.jsxs)("a",{href:A.Steam,children:[(0,i.jsx)("img",{className:"k-card-media",height:"270",width:"180",src:"img/"+A.Id+".jpg",loading:"lazy"}),A.Notes&&(0,i.jsx)("div",{className:"libOverlay",children:A.Notes}),-1==A.Tags.indexOf("Co-op Campaign")&&("Co-op"==A.Coop||"Co-op & Versus"==A.Coop)&&(0,i.jsx)("div",{className:"libCoop",children:(0,i.jsx)(p.I$,{})}),A.Tags.indexOf("Co-op Campaign")>-1&&(0,i.jsx)("div",{className:"libCoopCampaign",children:(0,i.jsx)(p.I$,{})}),T&&(0,i.jsxs)("span",{className:"infoSpan",children:[(0,i.jsxs)("span",{children:[Math.round(100*A.InstallSize/1024/1024/1024)/100,"gb"]}),(0,i.jsxs)("span",{className:"midspan",children:[Math.round(A.Playtime/3600),"h",(0,i.jsx)("span",{className:"k-icon k-font-icon k-i-clock"}),Math.round(A.HlME/3600),"h"]}),(0,i.jsxs)("span",{children:[A.CriticScoreGroup,(0,i.jsx)("span",{className:"k-icon k-font-icon k-i-star"}),A.CommunityScore,"%"]})]}),T&&(A.avgfps>0||A.cpupwravg>0)&&(0,i.jsxs)("span",{className:"infoSpan",style:{marginTop:-6},children:[(0,i.jsxs)("span",{children:[Math.round(A.avgfps)," fps"]}),(0,i.jsxs)("span",{className:"midspan",children:[Math.round(A.cpupwravg),(0,i.jsx)("span",{className:"k-icon k-font-icon k-i-link-vertical"}),Math.round(A.cpupwrmax)]}),(0,i.jsxs)("span",{children:[Math.round(A.gpupwravg),(0,i.jsx)("span",{className:"k-icon k-font-icon k-i-eye"}),Math.round(A.gpupwrmax)]})]})]})]},A.id)}function eg(e,l,t,i){let s=w.sort((l,t)=>t[e]-l[e]).filter(l);s=(0,h.Xo)(w,[{field:e,dir:"desc"},{field:"Added",dir:"desc"}],"").filter(l),t.indexOf(",")>-1?a({games:s,group:t.split(",").map(e=>({field:e,dir:"desc"})),take:i}):a({games:s,group:[{field:t,dir:"desc"}],take:i})}function ef(e){var l,t;let i=null!==(t=null===(l=e.currentTarget)||void 0===l?void 0:l.title)&&void 0!==t?t:null;switch(F(i),i){case"Everything":eg("Added",e=>!e.Hidden,"AddedMonth",300);break;case"Installed":eg("LastActivity",e=>e.IsInstalled&&!e.Hidden,"test",1e3);break;case"Completed":eg("LastActivity",e=>{var l,t;return!e.Hidden&&(null!==(t=["⭐","⭐⭐","⭐⭐⭐","⭐⭐⭐⭐","⭐⭐⭐⭐⭐","Abandoned","Beaten","Completed"].indexOf(null!==(l=e.CompletionStatus)&&void 0!==l?l:"-1"))&&void 0!==t?t:-1)>-1},"Categories,CompletionStatus",1e3);break;case"Not Completed":eg("CriticScore",e=>{var l,t,i;return!e.Hidden&&(null!==(t=e.ReleaseYear)&&void 0!==t?t:-1)>=2007&&(null!==(i=null===(l=e.Multi)||void 0===l?void 0:l.indexOf("Single Player"))&&void 0!==i?i:-1)>-1&&[null,"Not Played","Played"].indexOf(e.CompletionStatus)>-1&&(e.CriticScore||100)>=80},"CriticScoreGroup",300);break;case"Popular":eg("Reviews",e=>{var l,t,i;return!e.Hidden&&(null!==(t=e.ReleaseYear)&&void 0!==t?t:-1)>=2007&&(null!==(i=null===(l=e.Multi)||void 0===l?void 0:l.indexOf("Single Player"))&&void 0!==i?i:-1)>-1&&[null,"Not Played","Played"].indexOf(e.CompletionStatus)>-1&&(e.CriticScore||100)>=80},"ReviewCategory",300);break;case"FriendShared":eg("Added",e=>null!=e.Features&&e.Features.indexOf("Borrowed")>-1&&[null,"Not Played","Played"].indexOf(e.CompletionStatus)>-1,"AddedMonth",300);break;case"Top":eg("CriticScore",e=>{var l,t,i,a,s,o;return!e.Hidden&&[null,"Not Played","Played"].indexOf(e.CompletionStatus)>-1&&((null!==(l=e.CriticScore)&&void 0!==l?l:-1)>=80&&(null!==(t=e.CommunityScore)&&void 0!==t?t:-1)>=80||(null!==(i=e.CommunityScore)&&void 0!==i?i:-1)>=90&&(null!==(s=null!==(a=e.CriticScore)&&void 0!==a?a:-1)&&void 0!==s?s:1e3)>=7&&(null!==(o=e.Reviews)&&void 0!==o?o:-1)>1e3)},"ReleaseYear",300);break;case"Co-op":eg("CommunityScore",e=>!e.Hidden&&null!=e.Coop&&[null,"Not Played","Played"].indexOf(e.CompletionStatus)>-1,"LocalCoop",1e3);break;case"4x":eg("CommunityScoreGroup",e=>{var l,t;return!e.Hidden&&(null!==(t=null===(l=e.Tags)||void 0===l?void 0:l.indexOf("4X"))&&void 0!==t?t:-1)>-1},"ReleaseYear",1e3);break;case"Colony Sim":eg("CommunityScoreGroup",e=>{var l,t;return!e.Hidden&&(null!==(t=null===(l=e.Tags)||void 0===l?void 0:l.indexOf("Colony Sim"))&&void 0!==t?t:-1)>-1},"ReleaseYear",1e3);break;case"Adventures":eg("CommunityScoreGroup",e=>{var l,t,i,a;return!e.Hidden&&((null!==(i=null===(l=e.Tags)||void 0===l?void 0:l.indexOf("Point"))&&void 0!==i?i:-1)>-1||(null!==(a=null===(t=e.Genres)||void 0===t?void 0:t.indexOf("Point"))&&void 0!==a?a:-1)>-1)},"ReleaseYear",300);break;case"Game Pass":eg("Added",e=>{var l;return["Xbox Game Pass","Xbox","EA Pass"].indexOf(null!==(l=e.Source)&&void 0!==l?l:"-1")>-1},"AddedMonth",300);break;case"Steam Deck":eg("CriticScore",e=>{var l,t;return!e.Hidden&&(null!==(t=null===(l=e.Categories)||void 0===l?void 0:l.indexOf("Deck"))&&void 0!==t?t:-1)>-1},"ReleaseYear",300)}}async function ex(){var e;console.log("Init"),O=[...new Set((e=w).map(e=>e.Source).filter(e=>""!=e))].sort((e,l)=>e.localeCompare(l)),N=[...new Set(e.map(e=>{var l;return null===(l=e.Tags)||void 0===l?void 0:l.split("|")}).flat().filter(e=>""!=e))].sort((e,l)=>e.localeCompare(l)),P=[...new Set(e.map(e=>{var l;return null===(l=e.Genres)||void 0===l?void 0:l.split("|")}).flat().filter(e=>""!=e))].sort((e,l)=>e.localeCompare(l)),[...new Set(e.map(e=>{var l;return null===(l=e.Categories)||void 0===l?void 0:l.split("|")}).flat().filter(e=>""!=e))].sort((e,l)=>e.localeCompare(l)),L=[...new Set(e.map(e=>e.ReleaseYear).filter(e=>null!=e))].sort((e,l)=>l-e).map(e=>e.toString()),M=[...new Set(e.map(e=>{var l;return null===(l=e.Features)||void 0===l?void 0:l.split("|")}).flat().filter(e=>""!=e))].sort((e,l)=>e.localeCompare(l)),a({games:w.sort((e,l)=>l.LastActivity-e.LastActivity).filter(e=>e.IsInstalled&&!e.Hidden),group:[{field:"test",dir:"desc"}],take:1e3})}(0,u.useEffect)(()=>{U.current&&U.current.querySelectorAll(".k-card").forEach((e,l)=>{l===z?(e.classList.add("focused"),e.scrollIntoView({behavior:"smooth",block:"center"})):e.classList.remove("focused")})},[z]),(0,u.useEffect)(()=>{if(window.location.href.indexOf("fullscreen")>-1){console.log("fullscreen");let e=document.createElement("style");e.innerHTML=".k-card {  width: 400px !important }",document.head.appendChild(e)}(async()=>{let e=await fetch("scripts/gameperf.json?v="+Math.random()),l=await fetch("scripts/games.json?v="+Math.random());k=await e.json();let t={},i={};for(let e of w=(w=await l.json()).map(e=>{let l=new x,t=k.find(l=>l.id==e.Id);if(null!=t)for(let l in t)e[l]=t[l];return l.copyPropertyValuesFrom(e),l})){let l=w.filter(l=>l.Name==e.Name);l.length>1&&null==t[e.Name]&&(t[e.Name]=l.map(e=>e.Playtime).reduce((e,l)=>(null!=e?e:0)+(null!=l?l:0),0))}for(let e of w){let l=w.filter(l=>l.Name==e.Name);l.length>1&&null==i[e.Name]&&(i[e.Name]=l.filter(l=>l.Source!=e.Source).map(e=>e.Source).filter(e=>null!=e))}for(let e of w)null!=t[e.Name]&&(e.Playtime=t[e.Name]),null!=i[e.Name]&&(e.OtherSources=i[e.Name])})().then(()=>ex())},[]);let eC=(e,l)=>{if("Name"==l)b[l]={logic:"and",filters:[{field:"Name",operator:"contains",value:e.value}]};else for(let t of Object.keys(b))if(l==t){let l="eq";["Genres","Features","Categories","Tags"].indexOf(t)>-1&&(l="contains");let i=e.value.map(e=>"null"===e?["Genres","Features","Categories","Tags"].indexOf(t)>-1?{field:t,operator:"eq",value:""}:{field:t,operator:"isnull",value:!0}:{field:t,operator:l,value:"true"==e||"false"!=e&&e}).flat();b[t]={logic:"or",filters:i}}let t={logic:"and",filters:[]};for(let e of Object.values(b))e&&e.filters.length>0&&t.filters.push(e);console.log(t),E(t)},eS=e=>{let l=["Installed","Top","Completed","Not Completed","Everything","Popular","FriendShared","Game Pass","Steam Deck","4x","Colony Sim","Co-op","Adventures"],t=l.indexOf(null!=R?R:""),i=t;"LEFT"===e?i=(t+1)%l.length:"RIGHT"===e&&(i=(t-1+l.length)%l.length),F(l[i]),ef({currentTarget:{title:l[i]}})},ey=(0,j.QS)({onSwipedLeft:()=>eS("LEFT"),onSwipedRight:()=>eS("RIGHT")});return(0,i.jsx)(c.ZP,{onButtonDown:e=>{var l;let i=Math.floor(window.innerWidth/(U.current&&(null===(l=U.current.querySelector(".k-card"))||void 0===l?void 0:l.clientWidth)||200));switch(e){case"DPadUp":B(e=>Math.max(e-i,0));break;case"DPadDown":B(e=>Math.min(e+i,t.games.length-1));break;case"DPadLeft":B(e=>Math.max(e-1,0));break;case"DPadRight":B(e=>Math.min(e+1,t.games.length-1));break;case"X":let a=t.games[z];a&&a.Steam&&window.open(a.Steam,"_blank");break;case"A":let s=t.games[z];s&&s.uri&&window.open(s.uri);break;case"RB":eS("LEFT");break;case"LB":eS("RIGHT");break;default:console.log(e)}},children:(0,i.jsxs)("div",{ref:U,style:{display:"contents"},children:[(0,i.jsxs)(s(),{children:[(0,i.jsx)("title",{children:"PlayniteWeb"}),(0,i.jsx)("meta",{name:"description",content:"Playnite Web"}),(0,i.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=0.58, maximum-scale=0.58, user-scalable=0"}),(0,i.jsx)("meta",{"http-equiv":"Content-Type",content:"text/html;charset=utf-8"}),(0,i.jsx)("meta",{"http-equiv":"Cache-Control",content:"no-cache, no-store, must-revalidate"}),(0,i.jsx)("meta",{name:"mobile-web-app-capable",content:"yes"}),(0,i.jsx)("meta",{"http-equiv":"Pragma",content:"no-cache"}),(0,i.jsx)("meta",{"http-equiv":"Expires",content:"0"}),(0,i.jsx)("link",{rel:"icon",href:"favicon.ico"}),(0,i.jsx)("link",{href:"https://kendo.cdn.telerik.com/themes/8.0.1/default/default-main-dark.css",rel:"stylesheet"}),(0,i.jsx)("link",{rel:"stylesheet",href:"https://unpkg.com/@progress/kendo-font-icons/dist/index.css"}),(0,i.jsx)("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"})]}),(0,i.jsx)(d.u,{id:"tltip"}),(0,i.jsxs)(m.o,{id:"toolbar",className:"mainToolbar",children:[(0,i.jsxs)("div",{className:"leftButtons",children:[(0,i.jsx)(o.z,{togglable:!0,onClick:ef,title:"Installed",selected:"Installed"==R,children:(0,i.jsx)(C.G,{icon:y.qAL,color:"#ADD8E6"})}),(0,i.jsx)(o.z,{togglable:!0,onClick:ef,title:"Top",selected:"Top"==R,children:(0,i.jsx)(C.G,{icon:y.FPD,color:"#90EE90"})}),(0,i.jsx)(o.z,{togglable:!0,onClick:ef,title:"Completed",selected:"Completed"==R,children:(0,i.jsx)(C.G,{icon:y.LEp,color:"#D8BFD8"})}),(0,i.jsx)(o.z,{togglable:!0,onClick:ef,title:"Not Completed",selected:"Not Completed"==R,children:(0,i.jsx)(C.G,{icon:y.NBC,color:"#F08080"})}),(0,i.jsx)(o.z,{togglable:!0,onClick:ef,title:"Everything",selected:"Everything"==R,children:(0,i.jsx)(C.G,{icon:y.$X1,color:"#FFD700"})}),(0,i.jsx)(o.z,{togglable:!0,onClick:ef,title:"Popular",selected:"Popular"==R,children:(0,i.jsx)(C.G,{icon:y.Tab,color:"#FFFFE0"})})]}),(0,i.jsxs)("div",{className:"leftButtons",children:[(0,i.jsx)(o.z,{togglable:!0,onClick:ef,title:"FriendShared",selected:"FriendShared"==R,children:(0,i.jsx)(C.G,{icon:y.FVb,color:"#FFB6C1"})}),(0,i.jsx)(o.z,{togglable:!0,onClick:ef,title:"Game Pass",selected:"Game Pass"==R,children:(0,i.jsx)(C.G,{icon:S.ovy,color:"#98FB98"})}),(0,i.jsx)(o.z,{togglable:!0,onClick:ef,title:"Steam Deck",selected:"Steam Deck"==R,children:(0,i.jsx)(C.G,{icon:y.yn$,color:"#E0FFFF"})})]}),(0,i.jsxs)("div",{className:"leftButtons",children:[(0,i.jsx)(o.z,{togglable:!0,onClick:ef,title:"4x",selected:"4x"==R,children:(0,i.jsx)(C.G,{icon:y.g4A,color:"#D2B48C"})}),(0,i.jsx)(o.z,{togglable:!0,onClick:ef,title:"Colony Sim",selected:"Colony Sim"==R,children:(0,i.jsx)(C.G,{icon:y.SBo,color:"#20B2AA"})}),(0,i.jsx)(o.z,{togglable:!0,onClick:ef,title:"Co-op",selected:"Co-op"==R,children:(0,i.jsx)(C.G,{icon:y.yOe,color:"#FF69B4"})}),(0,i.jsx)(o.z,{togglable:!0,onClick:ef,title:"Adventures",selected:"Adventures"==R,children:(0,i.jsx)(C.G,{icon:y.kwz,color:"#B0C4DE"})})]}),(0,i.jsxs)("div",{className:"rightButtons",children:[(0,i.jsx)(o.z,{togglable:!0,onClick:()=>{l(!e)},selected:e,children:(0,i.jsx)(p.ulB,{})}),(0,i.jsx)(o.z,{togglable:!0,onClick:function(e){D(!T)},selected:T,children:(0,i.jsx)(p.DAO,{})})]})]}),e&&(0,i.jsxs)(m.o,{id:"toolbar3",className:"mainToolbar",children:[(0,i.jsxs)("span",{children:[" ",(0,i.jsx)(p.Xws,{}),(0,i.jsx)(v.z,{placeholder:"Name",onChange:e=>{ep(e.value),eC(e,"Name")},id:"shape",value:ec})]}),(0,i.jsxs)("span",{children:[(0,i.jsx)(p.dSq,{}),(0,i.jsx)(n.NU,{autoClose:!1,data:["true","false"],value:en,onChange:e=>{er(e.value),eC(e,"Hidden")},placeholder:"Hidden"})]}),(0,i.jsxs)("span",{children:[(0,i.jsx)(p.aBF,{}),(0,i.jsx)(n.NU,{autoClose:!1,data:["true","false"],value:eu,onChange:e=>{ed(e.value),eC(e,"IsInstalled")},placeholder:"Installed"})]}),(0,i.jsxs)("span",{children:[(0,i.jsx)(p.QJe,{}),(0,i.jsx)(n.NU,{autoClose:!1,data:["null","0","1","2","3","4","5","6","7","8","9","10"].reverse(),value:Y,onChange:e=>{V(e.value),eC(e,"CriticScoreGroup")},placeholder:"Critic"})]}),(0,i.jsxs)("span",{children:[(0,i.jsx)(p.i1q,{}),(0,i.jsx)(n.NU,{autoClose:!1,data:["null",...O],value:_,onChange:e=>{X(e.value),eC(e,"Source")},placeholder:"Source"})," "]}),(0,i.jsxs)("span",{children:[(0,i.jsx)(p.fxx,{}),(0,i.jsx)(n.NU,{autoClose:!1,data:["null",...N],value:el,onChange:e=>{et(e.value),eC(e,"Tags")},placeholder:"Tag"})," "]}),(0,i.jsxs)("span",{children:[(0,i.jsx)(p.iVx,{}),(0,i.jsx)(n.NU,{autoClose:!1,data:["null",...P],value:es,onChange:e=>{eo(e.value),eC(e,"Genres")},placeholder:"Genres"})," "]}),(0,i.jsxs)("span",{children:[(0,i.jsx)(p.Kc5,{}),(0,i.jsx)(n.NU,{autoClose:!1,data:["null",...M],value:ei,onChange:e=>{ea(e.value),eC(e,"Features")},placeholder:"Feature"})," "]}),(0,i.jsxs)("span",{children:[(0,i.jsx)(p.l_A,{}),(0,i.jsx)(n.NU,{autoClose:!1,data:["null","Not Played","Played","Beaten","Completed","Abandoned","*","**","***","****","*****"].reverse(),value:q,onChange:e=>{$(e.value),eC(e,"CompletionStatus")},placeholder:"Completion"})," "]}),(0,i.jsxs)("span",{children:[(0,i.jsx)(p.I$,{}),(0,i.jsx)(n.NU,{autoClose:!1,data:["null","0","1","2","3","4","5","6","7","8","9","10"].reverse(),value:W,onChange:e=>{Q(e.value),eC(e,"CommunityScoreGroup")},placeholder:"Community"})," "]}),(0,i.jsxs)("span",{children:[(0,i.jsx)(p.DCG,{}),(0,i.jsx)(n.NU,{autoClose:!1,data:["null","0","10","500","1000","10000","50000","200000"].reverse(),value:J,onChange:e=>{K(e.value),eC(e,"ReviewCategory")},placeholder:"Reviews"})," "]}),(0,i.jsxs)("span",{children:[(0,i.jsx)(p.XdU,{}),(0,i.jsx)(n.NU,{autoClose:!1,data:["null",...L],value:Z,onChange:e=>{ee(e.value),eC(e,"ReleaseYear")},placeholder:"Released"})]})]}),(0,i.jsxs)("div",{style:{display:"contents"},...ey,children:[(0,i.jsx)(r.B,{item:function(e){let l=e.dataItem,t=l.items;return t[0].hasOwnProperty("items")?(0,i.jsxs)("div",{className:"k-listview-item",style:{overflow:"hidden"},children:[(0,i.jsx)("div",{className:"sep",children:l.value}),t.sort((e,l)=>l.value.length-e.value.length).map(e=>(0,i.jsx)(eh,{dataItem:e},e.value))]}):(0,i.jsx)(eh,{dataItem:l})},data:(0,g.vM)((0,h.j)(t.games,[H],"").slice(I,I+t.take),t.group).sort((e,l)=>l.value-e.value)}),t.games.length>t.take&&(0,i.jsx)(f.u,{className:"k-listview-pager",skip:I,take:t.take,onPageChange:e=>{A({skip:e.skip,take:e.take})},total:t.games.length})]})]})})}}},e=>{var l=l=>e(e.s=l);e.O(0,[365,976,948,253,940,888,774,179],()=>l(8312)),_N_E=e.O()}]);