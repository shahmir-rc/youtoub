(this["webpackJsonpyoutube-extension-popup"]=this["webpackJsonpyoutube-extension-popup"]||[]).push([[0],{60:function(e,t,s){},69:function(e,t,s){"use strict";s.r(t);var n=s(1),i=s.n(n),a=s(31),c=s.n(a),o=s(33),r=s(2),l=s(4),d=s(10),u=s(11),h=s(12),p=s(14),j=s(13),b=s(22),m=s(18),g=s(5),A=s.n(g),v=s(15),x=s(0),O=function(e){Object(p.a)(s,e);var t=Object(j.a)(s);function s(){return Object(d.a)(this,s),t.apply(this,arguments)}return Object(u.a)(s,[{key:"render",value:function(){return Object(x.jsxs)("div",{className:"loader",children:[Object(x.jsx)("div",{children:Object(x.jsx)("div",{})}),Object(x.jsx)("div",{children:Object(x.jsx)("div",{})}),Object(x.jsx)("div",{children:Object(x.jsx)("div",{})}),Object(x.jsx)("div",{children:Object(x.jsx)("div",{})}),Object(x.jsx)("div",{children:Object(x.jsx)("div",{})}),Object(x.jsx)("div",{children:Object(x.jsx)("div",{})}),Object(x.jsx)("div",{children:Object(x.jsx)("div",{})}),Object(x.jsx)("div",{children:Object(x.jsx)("div",{})}),Object(x.jsx)("div",{children:Object(x.jsx)("div",{})}),Object(x.jsx)("div",{children:Object(x.jsx)("div",{})}),Object(x.jsx)("div",{children:Object(x.jsx)("div",{})}),Object(x.jsx)("div",{children:Object(x.jsx)("div",{})})]})}}]),s}(i.a.Component),f=function(e){Object(p.a)(s,e);var t=Object(j.a)(s);function s(){return Object(d.a)(this,s),t.apply(this,arguments)}return Object(u.a)(s,[{key:"render",value:function(){var e=this.props,t=e.isSelected,s=e.assets,n=e.selectedAssetList,i=e.handleSelect,a=e.loadContent,c=e.totalAssets,o=e.checkFiles,r=t?n:s;return Object(x.jsx)("ul",{className:"grid-layout",children:Object(x.jsx)("div",{className:"grid-body",children:r.length>0?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("ul",{children:null===r||void 0===r?void 0:r.map((function(e){var t=n.some((function(t){return t.id===e.id}));return Object(x.jsxs)("li",{title:e.name,id:e.id,className:t?"active":"",onClick:function(s){var n=s.currentTarget;t||e.id!==n.id?n.classList.remove("active"):n.classList.add("active"),i(e);var a=n.childNodes[0].childNodes[0].childNodes[0];a.checked=!a.checked},children:[Object(x.jsx)("div",{className:"cs-checkbox",children:Object(x.jsxs)("label",{children:[Object(x.jsx)("input",{type:"checkbox",className:"cs",defaultChecked:t,id:"checkbox-".concat(e.id),onChange:function(s){var n=s.target.parentNode.parentNode.parentNode;t||e.id!==n.id?n.classList.remove("active"):n.classList.add("active"),i(e)}}),Object(x.jsx)("span",{className:"lbl"})]})}),Object(x.jsxs)("div",{className:"item",children:[Object(x.jsx)("span",{className:"img",style:{backgroundImage:"url(".concat(e.thumbnail,")")}}),Object(x.jsx)("span",{className:"name",children:e.name})]})]},e.id)}))}),Object(x.jsx)("div",{className:"load-more",onClick:a,style:{display:t||s.length+1>c?"none":"block"},children:Object(x.jsx)("a",{children:"Load More"})})]}):o?Object(x.jsx)("div",{className:"file-not-found",children:"File Not Found!"}):Object(x.jsx)(O,{})})})}}]),s}(i.a.PureComponent),w=function(e){Object(p.a)(s,e);var t=Object(j.a)(s);function s(){return Object(d.a)(this,s),t.apply(this,arguments)}return Object(u.a)(s,[{key:"render",value:function(){var e=this.props,t=e.isSelected,s=e.assets,n=e.selectedAssetList,i=e.handleSelect,a=e.loadContent,c=e.totalAssets,o=e.checkFiles,r=t?n:s;return Object(x.jsxs)("ul",{className:"list-layout",children:[Object(x.jsxs)("li",{className:"table-head",children:[Object(x.jsx)("div",{className:"table-cell w-5"}),Object(x.jsx)("div",{className:"table-cell w-35",children:"Name"}),Object(x.jsx)("div",{className:"table-cell w-30",children:"Modified By"}),Object(x.jsx)("div",{className:"table-cell w-30",children:"Last Modified"})]}),Object(x.jsx)("div",{className:"table-body",children:r.length>0?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("ul",{className:"video-list",children:null===r||void 0===r?void 0:r.map((function(e){var t=n.some((function(t){return t.id===e.id}));return Object(x.jsxs)("li",{title:e.name,id:e.id,className:t?"active":"",onClick:function(s){var n=s.currentTarget;t||e.id!==n.id?n.classList.remove("active"):n.classList.add("active"),i(e);var a=n.childNodes[0].childNodes[0].childNodes[0];a.checked=!a.checked},children:[Object(x.jsx)("div",{className:"cs-checkbox",children:Object(x.jsxs)("label",{children:[Object(x.jsx)("input",{type:"checkbox",className:"cs",id:"checkbox-".concat(e.id),defaultChecked:t,onChange:function(s){var n=s.target.parentNode.parentNode.parentNode;t||e.id!==n.id?n.classList.remove("active"):n.classList.add("active"),i(e)}}),Object(x.jsx)("span",{className:"lbl"})]})}),Object(x.jsx)("div",{className:"table-cell w-35",children:e.name})]},e.id)}))}),Object(x.jsx)("div",{className:"load-more",onClick:a,style:{display:t||s.length+1>c?"none":"block"},children:Object(x.jsx)("a",{children:"Load More"})})]}):o?Object(x.jsx)("div",{className:"file-not-found",children:"File Not Found!"}):Object(x.jsx)(O,{})})]})}}]),s}(i.a.PureComponent),N=s(32),y=s.n(N),S=function(){function e(t){var s=t.apiKey,n=t.channelId;Object(d.a)(this,e),this.apiKey=s,this.channelId=n}return Object(u.a)(e,[{key:"getVideos",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:8,s=arguments.length>2?arguments[2]:void 0,n=this;return new Promise((function(i,a){var c={method:"GET",baseURL:"https://www.googleapis.com/youtube/v3/",url:"/search?part=snippet&maxResults=".concat(t,"&key=").concat(n.apiKey,"&channelId=").concat(n.channelId,"&type=video").concat(e?"&q=".concat(e):"&order=date","&pageToken=").concat(s||"")};y()(c).then((function(e){return i(e)})).catch((function(e){a(e)}))}))}}]),e}(),k=function(e,t,s){return Object(v.a)(A.a.mark((function n(){var i;return A.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=new S(e),n.next=3,i.getVideos(t,8,s);case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})))()},I=function(e,t){return Object(v.a)(A.a.mark((function s(){var n;return A.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return n=new S(e),s.next=3,n.getVideos(t,8,"");case 3:return s.abrupt("return",s.sent);case 4:case"end":return s.stop()}}),s)})))()},C=function(e){Object(p.a)(s,e);var t=Object(j.a)(s);function s(e){var n;return Object(d.a)(this,s),(n=t.call(this,e)).handleLoginSubmit=function(){var e=Object(v.a)(A.a.mark((function e(t){var s,i,a,c,o,r,d;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n.setState({loginLoading:!0}),s=n.state.loginFormData,i=s.url,a=s.email,c=s.password,console.log("Login Form Data:",{url:i,email:a,password:c}),"https://apiau.intelligencebank.com/webapp/1.0/login",(o=new Headers).append("Content-Type","application/x-www-form-urlencoded"),(r=new URLSearchParams).append("p70",a),r.append("p80",c),r.append("p90",i),d={method:"POST",headers:o,body:r,redirect:"follow"},e.next=14,fetch("https://apiau.intelligencebank.com/webapp/1.0/login",d).then((function(e){return e.text()})).then(function(){var e=Object(v.a)(A.a.mark((function e(t){var s,i,a,c,o,r,d,u,h,p;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=null,i=null,a=JSON.parse(t),c=a.apiV3url,o=a.clientid,r=a.sid,d=a.logintimeoutperiod,u=Date.now()+1e3*d,!n.isAuthenticated(r,u)){e.next=18;break}return e.next=9,n.getFolders(c,r,o);case 9:return h=e.sent,e.next=12,n.getResources(c,r,o);case 12:p=e.sent,h.error||(console.log("folders got here >>>>>>>>>>",h),s=h),p.error||(console.log("resources here >>>>",p),i=p),n.setState((function(e){return Object(l.a)(Object(l.a)({},e),{},{baseApiUrl:c,clientId:o,sessionID:r,renderFolders:s,renderAssets:i,fullResponse:a})})),e.next=19;break;case 18:console.log("user authentication failed >>>>>>>>");case 19:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){return console.log("error",e)})).finally((function(){console.log("finalley >>>>>>!")}));case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.getFolders=function(){var e=Object(v.a)(A.a.mark((function e(t,s,n){var i,a,c,o,r,l,d,u;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(i=new Headers).append("sid",s),a={method:"GET",headers:i,redirect:"follow"},e.prev=3,e.next=6,fetch("".concat(t,"/api/3.0.0/").concat(n,"/folder.limit(100)"),a);case 6:return r=e.sent,e.next=9,r.text();case 9:return l=e.sent,d=JSON.parse(l),u=null===d||void 0===d||null===(c=d.response)||void 0===c||null===(o=c.rows)||void 0===o?void 0:o.map((function(e){return{thumbnail:null===e||void 0===e?void 0:e.thumbnail,name:null===e||void 0===e?void 0:e.name,id:null===e||void 0===e?void 0:e._id,folders_count:null===e||void 0===e?void 0:e.folders_count,resources_count:null===e||void 0===e?void 0:e.resources_count,parent:null===e||void 0===e?void 0:e.parent}})),e.abrupt("return",u);case 15:throw e.prev=15,e.t0=e.catch(3),console.log("error",e.t0),e.t0;case 19:case"end":return e.stop()}}),e,null,[[3,15]])})));return function(t,s,n){return e.apply(this,arguments)}}(),n.getResources=function(){var e=Object(v.a)(A.a.mark((function e(t,s){var n,i,a,c,o,r;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new Headers).append("Content-Type","application/json"),n.append("sid",s),i=JSON.stringify({method:"GET",version:"3.0.0",client:"8yqy",table:"resource.limit(100)",query_params:{searchParams:{ib_folder_s:"",isSearching:!0,wrapped_conditions:[[]]}}}),a={method:"POST",headers:n,body:i,redirect:"follow"},e.prev=5,e.next=8,fetch("".concat(t,"/api/json"),a);case 8:return c=e.sent,e.next=11,c.text();case 11:return o=e.sent,r=JSON.parse(o),e.abrupt("return",r);case 16:throw e.prev=16,e.t0=e.catch(5),console.log("error",e.t0),e.t0;case 20:case"end":return e.stop()}}),e,null,[[5,16]])})));return function(t,s){return e.apply(this,arguments)}}(),n.handleInputChange=function(e){var t=e.target,s=t.name,i=t.value;n.setState((function(e){return{loginFormData:Object(l.a)(Object(l.a)({},e.loginFormData),{},Object(m.a)({},s,i))}}))},n.selectingVideos=function(e){var t=n.state.selectedVideoList;if(t.some((function(t){return t.id.videoId===e.id.videoId})))t.splice(t.findIndex((function(t){return t.id.videoId===e.id.videoId})),1),n.setState({selectedVideoList:Object(b.a)(t)});else{var s=Object(b.a)(t);s.push(e),n.setState({selectedVideoList:s})}},n.refreshHandler=function(){var e=n.props.config;k(e).then((function(e){n.setState({initialReqVideo:e.data,renderAssets:e.data.items,nextPageToken:e.data.nextPageToken})})).catch((function(e){console.log(e)}))},n.loadMore=function(e){var t=n.props.config,s=n.state,i=s.searchQuery,a=s.nextPageToken,c=s.renderAssets,o=s.initialReqVideo;c.length!==o.pageInfo.totalResults?k(t,i,a).then((function(t){var s=n.state.renderAssets;(s=s.concat(t.data.items)).length+1>=o.pageInfo.totalResults&&(e.target.style.display="none");var i=0===s.length;n.setState({renderAssets:s,nextPageToken:t.data.nextPageToken,errorFound:i})})).catch((function(e){console.log(e),n.setState({errorFound:!0})})):e.target.style.display="none"},n.sendAndClose=function(e){var t=n.state,s=t.selectedVideoList,i=t.fullResponse;e?n.props.closeWindow(s,i):n.props.closeWindow([],i)},n.changeLayout=function(){n.setState((function(e){return{isGrid:!e.isGrid}}))},n.showAllVideos=function(){n.setState((function(e){return{isSelected:!e.isSelected}}))},n.showSelectedVideos=function(){n.setState((function(e){return{isSelected:!e.isSelected}}))},n.searchQueryHandler=function(e){var t=n.props.config,s=e.target.value.toLowerCase();n.setState({searchQuery:s}),13===e.charCode&&I(t,s).then((function(e){var t=0===e.data.items.length;n.setState({initialReqVideo:e.data,renderAssets:e.data.items,nextPageToken:e.data.nextPageToken,errorFound:t})}))},n.fetchQueryVideos=function(){var e=n.props.config,t=n.state.searchQuery;I(e,t).then((function(e){n.setState({initialReqVideo:e.data,renderAssets:e.data.items,nextPageToken:e.data.nextPageToken})}))},n.state={isGrid:!0,searchQuery:"",renderAssets:[],renderFolders:[],errorFound:!1,isSelected:!1,nextPageToken:void 0,initialReqVideo:void 0,selectedVideoList:e.selectedVideos,sessionID:n.props.sessionID,clienId:n.props.clientid,expirationTime:n.props.expirationTime,baseApiUrl:n.props.baseApiUrl,resources:null,fullResponse:{},loginFormData:{url:"",email:"",password:""},loginLoading:!1,isAuthenticatedUser:!1},n.loadMore=n.loadMore.bind(Object(h.a)(n)),n.changeLayout=n.changeLayout.bind(Object(h.a)(n)),n.refreshHandler=n.refreshHandler.bind(Object(h.a)(n)),n.selectingVideos=n.selectingVideos.bind(Object(h.a)(n)),n.fetchQueryVideos=n.fetchQueryVideos.bind(Object(h.a)(n)),n.searchQueryHandler=n.searchQueryHandler.bind(Object(h.a)(n)),n}return Object(u.a)(s,[{key:"componentDidUpdate",value:function(e){var t=this;e.sessionID!==this.props.sessionID&&this.setState((function(e){return Object(l.a)(Object(l.a)({},e),{},{sessionID:t.props.sessionID})})),e.clientid!==this.props.clientid&&this.setState((function(e){return Object(l.a)(Object(l.a)({},e),{},{clientId:t.props.clientid})})),e.expirationTime!==this.props.expirationTime&&this.setState((function(e){return Object(l.a)(Object(l.a)({},e),{},{expirationTime:t.props.expirationTime})})),e.baseApiUrl!==this.props.baseApiUrl&&(this.setState({baseApiUrl:this.props.baseApiUrl}),this.setState((function(e){return Object(l.a)(Object(l.a)({},e),{},{baseApiUrl:t.props.baseApiUrl})}))),e.sessionID===this.props.sessionID&&e.clientid===this.props.clientid&&e.expirationTime===this.props.expirationTime&&e.baseApiUrl===this.props.baseApiUrl||this.isAuthenticated(this.props.sessionID,this.props.expirationTime)}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){var t=this.props.selectedVideos;e.selectedVideos!==t&&this.setState({selectedVideoList:e.selectedVideos})}},{key:"handleClick",value:function(){this.setState((function(e){return{isGrid:!e.isGrid}}))}},{key:"isAuthenticated",value:function(e,t){return!!(e&&t&&Date.now()<parseInt(t,10))&&(this.setState((function(e){return Object(l.a)(Object(l.a)({},e),{},{isAuthenticatedUser:!0})})),!0)}},{key:"render",value:function(){var e=this,t=this.state,s=t.renderAssets,n=t.selectedVideoList,i=t.initialReqVideo,a=t.isSelected,c=t.errorFound,o=t.loginFormData,r=t.loginLoading,l=t.isAuthenticatedUser,d=t.folders,u=t.resources;return console.log("auth user here in modal >>>>>",l,d,u),l?Object(x.jsx)("div",{className:"modal display-block",children:Object(x.jsxs)("section",{className:"modal-main",children:[this.props.children,Object(x.jsx)("div",{className:"modal-header",children:Object(x.jsx)("h2",{children:"Select Asset"})}),Object(x.jsx)("div",{className:"search-bar",children:Object(x.jsxs)("div",{className:"cs-form-group search-box no-margin",children:[Object(x.jsx)("span",{className:"search-input",children:Object(x.jsx)("input",{type:"search",id:"search",className:"cs-text-box cs-global-search",placeholder:"Search Videos"})}),Object(x.jsx)("span",{className:"search-icon",children:Object(x.jsx)("i",{className:"icon-search"})})]})}),Object(x.jsxs)("div",{className:"modal-body",children:[Object(x.jsxs)("div",{className:"video-section",children:[Object(x.jsx)("span",{children:"All Assets"}),Object(x.jsxs)("div",{className:"icons",children:[Object(x.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAF5SURBVHgB1ZNNTsJAFIDfqyUiK47QI3CEeoO6gxW4MXVFEyxxJ+4MkEhX7c6ywcaNvUE5AjegR2AlTYQ+Z/oj08bWxJ0vaWY68773N+8hVIhmGO1mBG2+95xFWKWH5YOubg7YYZ9t1ZLmhggsgM91brCrjx/wBBoKYuMdCDoCFmarIp4hoBsnNmmC3zA0glQRQ4hja986uP5iscup3s1IIwmHDFaLgfFL3dymMC33zYMhgmXp3Zo8Si3/l3jOueffYJ6zCHORkWgIyLKB+Loe5sWlAZzqkl+MXvgH/1YQ/iisJkna2NPH2x/MTl7t6bIavlNZPwRIuJHZ2ytFlh5X9rwS5jOCESbeYyRLKnpGf+XMJ3VwKzp/hqxvPGfmygUNIo11ZXBEtN7sqS+CFx/yACIcsn5JYALpEtIamMTDTodD6hdTYnORWlaEHNlUnl15zlNyJyc5Z2F39XsX4Khm3dkpGqM1AS49e+aKQdc+I59SvkZN2FW1+ReWDaDM6q25YAAAAABJRU5ErkJggg==",alt:"refresh-icon"}),Object(x.jsx)("img",{src:this.state.isGrid?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAQCAYAAAD0xERiAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB8SURBVHgB7dKxDYAgEEDRuwuDMImJJQuY2OEkuol0Ji5AaeIkTAIGI52Q01DyG4p7uebAzR6SgDRk8uDNqHrHcSICIpohr2ILxxFUrC37nognfS722j1PL8NVC3d7aiRccyD4MA2qMxxHAYKEQmnOce2f/ViGgK4E0pzjLuIGN5tNMdeEAAAAAElFTkSuQmCC":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADVSURBVHgBzZSxEcIwDEW/FA+SQYBLGjiOGhoKWIEJgE3S5SAD5KCJIQtkBEbIAJyMlQAD+FLkFfY/FbIsfZuKW+2gEOx6Pk0v5ePEzEcEwhgYIyJnFQR69Sew9TGMBiruddUpR816MTlcy+eeItohEAOHpE/dz8bBxeQoQSCa0OJbYZdXe/mLjQFS33XCV7ZZzrKirBOBJAjE/E1M3TUzTTYqYw8O5b5nKkTe7XaVNnlZxb4TMQIxhtEbOzLWr6l/entmjOhzgCBV4SJudfdTzljYIpAPogJIB3xnhUwAAAAASUVORK5CYII=",onClick:this.changeLayout,alt:"view-option"})]})]}),Object(x.jsxs)("div",{className:"video-section",children:[this.state.isSelected?Object(x.jsxs)("span",{className:"select-count",children:["Show all Assets(",null===i||void 0===i?void 0:i.pageInfo.totalResults,")"]}):Object(x.jsxs)("span",{className:"select-count",children:["Show selected Assets(",n.length,")"]}),Object(x.jsxs)("span",{className:"video-count",children:["showing ",s.length," of"," ",null===i||void 0===i?void 0:i.pageInfo.totalResults," assets"]})]}),this.state.isGrid?Object(x.jsx)(f,{assets:s,isSelected:a,checkFiles:c,loadContent:this.loadMore,handleSelect:this.selectingVideos,selectedAssetList:n,totalAssets:i&&i.pageInfo.totalResults}):Object(x.jsx)(w,{assets:s,isSelected:a,checkFiles:c,loadContent:this.loadMore,handleSelect:this.selectingVideos,selectedAssetList:n,totalAssets:i&&i.pageInfo.totalResults})]}),Object(x.jsx)("div",{className:"modal-footer",children:Object(x.jsxs)("div",{className:"right",children:[Object(x.jsx)("button",{className:"cancel-btn btn",onClick:function(){return e.sendAndClose(!1)},children:"Cancel"}),Object(x.jsxs)("button",{className:"add-btn btn",children:["Add Selected assets ",n.length]})]})})]})}):Object(x.jsx)("div",{className:"modal display-block",children:Object(x.jsx)("section",{className:"modal-main",children:Object(x.jsx)("div",{className:"container",children:Object(x.jsx)("form",{className:"main-container",onSubmit:this.handleLoginSubmit,children:Object(x.jsxs)("div",{className:"image-container",children:[Object(x.jsx)("img",{src:"https://images.contentstack.io/v3/assets/blt221fb47986d5e67e/blt2cb29b8ea92a9836/65a7bfeebad37d43f89df7de/download.png",alt:"",className:"logo"}),Object(x.jsxs)("div",{className:"parent-container",children:[Object(x.jsx)("div",{children:Object(x.jsx)("p",{children:"Login to your intelliganceBank account by entering your credentials below."})}),Object(x.jsxs)("div",{className:"child-container",children:[Object(x.jsx)("span",{htmlFor:"url",className:"urltext",children:"URL (without https://)"}),Object(x.jsxs)("div",{className:"url-container",children:[Object(x.jsx)("input",{type:"text",id:"url",name:"url",className:"ib-url",value:o.url,onChange:this.handleInputChange,required:!0}),Object(x.jsx)("span",{children:".intelligencebank.com"})]}),Object(x.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(x.jsx)("input",{type:"email",id:"email",name:"email",value:o.email,onChange:this.handleInputChange,className:"input-email",required:!0}),Object(x.jsx)("label",{htmlFor:"password",className:"password-field",children:"Password:"}),Object(x.jsx)("input",{type:"password",id:"password",name:"password",value:o.password,onChange:this.handleInputChange,className:"input-password",required:!0}),Object(x.jsx)("button",{type:"submit",className:"login-button",children:r?"Loading...":"Login"})]})]})]})})})})})}}]),s}(i.a.PureComponent),L=function(e){Object(p.a)(s,e);var t=Object(j.a)(s);function s(e){var n;return Object(d.a)(this,s),console.log("props here in pop js"),(n=t.call(this,e)).onCloseWindow=function(e,t){console.log("sessionData on the close window >>>>>",t),e.length>0?window.opener.postMessage({message:"sending selected videos",selectedVideosList:e,sessionData:t},"*"):window.opener.postMessage({message:"Window closed sending selected videos",sessionData:t},"*"),window.close()},n.state={message:"",config:void 0,selectedVideosList:[],sessionID:null,baseApiUrl:null,expirationTime:null,clientid:null},n.onCloseWindow=n.onCloseWindow.bind(Object(h.a)(n)),n}return Object(u.a)(s,[{key:"componentDidMount",value:function(){var e=this;window.opener||window.close(),window.opener.postMessage({message:"get config and selected assets",getConfig:!0},"*"),window.opener.postMessage({message:"get session data",getSessionConfig:!0},"*");window.addEventListener("message",(function(t){var s=t.data;if(console.log("recieved message in popup>>>>>>>>>>>>>>>",s),s.config&&e.setState({message:s.message,config:s.config}),s.selectedVideos&&e.setState({message:s.message,selectedVideosList:s.selectedVideos}),s.sessionData){console.log("session data recieved in popup >>>>>>>>>",s.sessionData);var n=s.sessionData,i=n.sessionID,a=n.expirationTime,c=n.clientid,o=n.baseApiUrl;e.setState((function(e){return Object(l.a)(Object(l.a)({},e),{},{baseApiUrl:o,clientid:c,sessionID:i,expirationTime:a})}))}}),!1)}},{key:"render",value:function(){var e=this.state,t=e.config,s=e.selectedVideosList,n=e.sessionID,i=e.clientid,a=e.expirationTime,c=e.baseApiUrl;return console.log("config here >>>>> in modal",t),Object(x.jsx)("div",{children:t&&Object(x.jsx)(C,{config:t,closeWindow:this.onCloseWindow,selectedVideos:s,sessionID:n,clientid:i,expirationTime:a,baseApiUrl:c})})}}]),s}(i.a.Component);s(60);var T=function(){return Object(x.jsx)("div",{className:"App",children:Object(x.jsx)(o.a,{children:Object(x.jsx)(r.c,{children:Object(x.jsx)(r.a,{exact:!0,path:"/",component:L})})})})},V=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,70)).then((function(t){var s=t.getCLS,n=t.getFID,i=t.getFCP,a=t.getLCP,c=t.getTTFB;s(e),n(e),i(e),a(e),c(e)}))};c.a.render(Object(x.jsx)(i.a.StrictMode,{children:Object(x.jsx)(T,{})}),document.getElementById("root")),V()}},[[69,1,2]]]);