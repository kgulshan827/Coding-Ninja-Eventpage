(this.webpackJsonpcoding_ninja=this.webpackJsonpcoding_ninja||[]).push([[0],{30:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){},70:function(e,t,c){},89:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),a=c(15),i=c.n(a),r=(c(63),c(64),c(97)),l=c(94),j=c(58),o=c(96),d=c(1),b=function(){return Object(d.jsx)("div",{className:"header",children:Object(d.jsx)(r.a,{className:"Nav",bg:"light",expand:"lg",children:Object(d.jsxs)(l.a,{children:[Object(d.jsx)(r.a.Brand,{href:"https://www.codingninjas.com/",children:Object(d.jsx)("img",{src:"https://www.codingninjas.com/assets-landing/images/CNLOGO.svg",width:"90",height:"90"})}),Object(d.jsx)(r.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(d.jsx)(r.a.Collapse,{id:"basic-navbar-nav",children:Object(d.jsxs)(j.a,{className:"me-auto",children:[Object(d.jsx)(j.a.Link,{href:"#home",children:"Home"}),Object(d.jsxs)(o.a,{title:"Courses",id:"basic-nav-dropdown",children:[Object(d.jsx)(o.a.Item,{href:"#action/3.1",children:"C++ Foundation With DSA"}),Object(d.jsx)(o.a.Item,{href:"#action/3.2",children:"JAVA Foundation With DSA"}),Object(d.jsx)(o.a.Item,{href:"#action/3.3",children:"Interview Preparation Course"}),Object(d.jsx)(o.a.Divider,{})]}),Object(d.jsxs)(o.a,{title:"Practice",id:"basic-nav-dropdown",children:[Object(d.jsx)(o.a.Item,{href:"#action/3.1",children:"Code problems"}),Object(d.jsx)(o.a.Item,{href:"#action/3.2",children:"Interview Experience"}),Object(d.jsx)(o.a.Item,{href:"#action/3.3",children:"Guided Path"}),Object(d.jsx)(o.a.Divider,{})]}),Object(d.jsx)(j.a.Link,{href:"#home",children:"Events"}),Object(d.jsx)(j.a.Link,{href:"#home",children:"Codingninjas"}),Object(d.jsx)(j.a.Link,{href:"#home",children:"Blogs"})]})})]})})})},v=(c(70),c(16)),h=c(27),g=c.n(h),O=(c(30),c(98)),x=function(e){var t=e.events.start_time.toString(),c=new Date(1e3*t).toLocaleString();return c=c.replaceAll("/","-"),Object(d.jsx)("div",{className:"box",children:Object(d.jsxs)(O.a,{children:[Object(d.jsx)(O.a.Img,{variant:"top",src:e.events.cover_picture}),Object(d.jsxs)(O.a.Body,{children:[Object(d.jsx)(O.a.Title,{children:e.events.name}),Object(d.jsxs)("div",{className:"detail",children:[Object(d.jsxs)("div",{className:"event-info-item",children:[Object(d.jsx)("p",{className:"item-label",children:Object(d.jsx)("b",{children:"Starts on"})}),Object(d.jsx)("p",{className:"item-value",children:c})]}),Object(d.jsxs)("div",{className:"event-info-item",children:[Object(d.jsx)("p",{className:"item-label",children:Object(d.jsx)("b",{children:"Entry Fee"})}),Object(d.jsxs)("p",{className:"item-value",children:[e.events.currency," ",e.events.fees]})]}),Object(d.jsxs)("div",{className:"event-info-item",children:[Object(d.jsx)("p",{className:"item-label",children:Object(d.jsx)("b",{children:"Venue"})}),Object(d.jsx)("p",{className:"item-value",children:e.events.venue})]})]}),Object(d.jsx)(O.a.Text,{children:e.events.short_desc}),Object(d.jsx)("div",{className:"tag-container",children:e.events.card_tags.map((function(e){return Object(d.jsx)("div",{className:"tag",children:e})}))}),Object(d.jsxs)("div",{className:"registered-user",children:[Object(d.jsx)("div",{className:"profile-image-container",children:e.events.registered_users.top_users.map((function(e){return Object(d.jsx)("div",{className:"image",children:Object(d.jsx)("img",{className:"img",src:e.image_url})})}))}),e.events.registered_users.other_users_count>0?Object(d.jsxs)("p",{className:"count",children:["and ",e.events.registered_users.other_users_count," others registered"]}):""]})]})]})})},m=c(99),u=c(95),_=function(e){var t=Object(n.useState)(["tag_list="]),c=Object(v.a)(t,2),s=c[0],a=c[1],i="https://api.codingninjas.com/api/v3/events?event_category="+e.event_category+"&event_sub_category="+e.event_sub_category+"&"+s+"&offset=0",r=Object(n.useState)([i]),l=Object(v.a)(r,2),j=l[0],o=l[1];Object(n.useEffect)((function(){b(),o("https://api.codingninjas.com/api/v3/events?event_category="+e.event_category+"&event_sub_category="+e.event_sub_category+"&"+s+"&offset=0")}),[]);var b=function(){void 0===e.tag_list[e.tag_list.length-1]?a("tag_list="):a(e.tag_list[0])},h=Object(n.useState)([]),O=Object(v.a)(h,2),m=O[0],u=O[1];Object(n.useEffect)((function(){_()}),[]),console.log(j);var _=function(){g.a.get("".concat(j)).then((function(e){var t=e.data,c=JSON.parse(JSON.stringify(t));u(c.data.events)})).catch((function(e){return console.error("Error': ".concat(e))}))};return Object(d.jsx)("div",{className:"eventbody",children:Object(d.jsx)("div",{className:"grid",children:m.length>0?m.map((function(e){return Object(d.jsx)(x,{events:e})})):Object(d.jsx)("h3",{children:"No Events Found"})})})},f=function(e){return Object(d.jsx)("div",{className:"event-sub-categories",children:Object(d.jsxs)(m.a,{defaultActiveKey:"Upcoming",id:"uncontrolled-tab-example",className:"mb-3",children:[Object(d.jsx)(u.a,{eventKey:"Upcoming",title:"Upcoming",children:Object(d.jsx)("div",{className:"events-body",children:Object(d.jsx)(_,{event_category:e.event_category,event_sub_category:"Upcoming",tag_list:e.tag_list})})}),Object(d.jsx)(u.a,{eventKey:"Archived",title:"Archived",children:Object(d.jsx)("div",{className:"events-body",children:Object(d.jsx)(_,{event_category:e.event_category,event_sub_category:"Archived",tag_list:e.tag_list})})}),Object(d.jsx)(u.a,{eventKey:"All Times Favourite",title:"All Times Favourite",children:Object(d.jsx)("div",{className:"events-body",children:Object(d.jsx)(_,{event_category:e.event_category,event_sub_category:"All Time Favorites",tag_list:e.tag_list})})})]})})},p=c(57),N=function(e){var t=Object(n.useState)([]),c=Object(v.a)(t,2),s=c[0],a=c[1];Object(n.useEffect)((function(){var t=new URLSearchParams({tag_list:s});e.tags_list[0]=t.toString()}),[s]);var i=["Interview Preparation","Contest Solutions","Competitive Programming","Futuristic Tech","Coding Concepts","Career Guidance","Web Development","Android","Machine Learning","Campus Event","Online Coding Event","Hackathon","Women Who Code","GSoC","Placement","Aptitude Preparation","Efficient Coding","Programming Contest","Coding Marathon","All Night Coding","Code Wars","Scholarship Test"].map((function(t){return Object(d.jsx)(y,{name:t,onclick:function(e){document.getElementById(e).style.backgroundColor="#ff7328",a([].concat(Object(p.a)(s),[t]))},catg:e.catg,ondbclick:function(e){console.log(e),document.getElementById(e).style.backgroundColor="#eee"}})}));return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Tags"}),i]})};function y(e){var t=e.name,c=e.onclick,n=e.ondbclick,s=e.catg;return Object(d.jsx)("div",{className:"tags",children:Object(d.jsx)("p",{id:t+s,onClick:function(){c(t+s)},onDoubleClick:function(){n(t+s)},children:t})})}var C=function(e){console.log(e.tag_list);var t=[];return Object(d.jsxs)("div",{className:"content",children:[Object(d.jsxs)("div",{className:"event",children:[Object(d.jsx)("div",{className:"eventitle",children:Object(d.jsx)("h3",{children:"Events & News"})}),Object(d.jsx)("div",{className:"eventSubtitle",children:"Learn,Compete and Grow"})]}),Object(d.jsx)("div",{className:"eventslist",children:Object(d.jsx)("div",{className:"events-wrapper",children:Object(d.jsx)("div",{className:"event-categories",children:Object(d.jsxs)(m.a,{defaultActiveKey:"All Events",id:"uncontrolled-tab-example",className:"mb-3",children:[Object(d.jsx)(u.a,{eventKey:"All Events",title:"All Events",children:Object(d.jsxs)("div",{class:"show-event",children:[Object(d.jsx)("div",{class:"tab-conatiner",children:Object(d.jsx)(f,{event_category:"ALL_EVENTS",tag_list:t})}),Object(d.jsx)(N,{tags_list:t,catg:"all"})]})}),Object(d.jsx)(u.a,{eventKey:"Webinar",title:"Webinar",children:Object(d.jsxs)("div",{class:"show-event",children:[Object(d.jsx)("div",{class:"tab-conatiner",children:Object(d.jsx)(f,{event_category:"WEBINAR",tag_list:t})}),Object(d.jsx)(N,{tags_list:t,catg:"webinar"})]})}),Object(d.jsx)(u.a,{eventKey:"Coding Events",title:"Coding Events",children:Object(d.jsxs)("div",{class:"show-event",children:[Object(d.jsx)("div",{class:"tab-conatiner",children:Object(d.jsx)(f,{event_category:"CODING_EVENT",tag_list:t})}),Object(d.jsx)(N,{tags_list:t,catg:"coding"})]})}),Object(d.jsx)(u.a,{eventKey:"Bootcamp",title:"Bootcamp Events",children:Object(d.jsxs)("div",{class:"show-event",children:[Object(d.jsx)("div",{class:"tab-conatiner",children:Object(d.jsx)(f,{event_category:"BOOTCAMP_EVENTS",tag_list:t})}),Object(d.jsx)(N,{tags_list:t,catg:"Bootcamp"})]})}),Object(d.jsx)(u.a,{eventKey:"Workshop",title:"Workshop",children:Object(d.jsxs)("div",{class:"show-event",children:[Object(d.jsx)("div",{class:"tab-conatiner",children:Object(d.jsx)(f,{event_category:"WORKSHOP",tag_list:t})}),Object(d.jsx)(N,{tags_list:t,catg:"workshop"})]})})]})})})})]})};c(54);var E=function(){return Object(d.jsxs)("div",{className:"content",children:[Object(d.jsx)(b,{className:"header"}),Object(d.jsx)(C,{})]})},w=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,100)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),a(e),i(e)}))};i.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(E,{})}),document.getElementById("root")),w()}},[[89,1,2]]]);
//# sourceMappingURL=main.a9dc7caa.chunk.js.map