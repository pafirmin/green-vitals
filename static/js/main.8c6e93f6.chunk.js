(this["webpackJsonpcarbon-intensity"]=this["webpackJsonpcarbon-intensity"]||[]).push([[0],{54:function(t,n,e){"use strict";e.r(n);var r=e(0),a=e(1),i=e.n(a),o=e(23),c=e.n(o),s=e(6),u=e.n(s),l=e(8),f=e(7),d=e(2),b=e(10),j=e.n(b),h=function(){var t=Object(l.a)(u.a.mark((function t(n){var e,r,a,i,o,c,s;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e=n.replace(/\s/g,""),t.next=4,j.a.get("https://api.postcodes.io/postcodes/".concat(e));case 4:return r=t.sent,a=r.data.result,i=a.admin_district,o=a.outcode,c=a.latitude,s=a.longitude,t.abrupt("return",{admin_district:i,outcode:o,latitude:c,longitude:s});case 9:throw t.prev=9,t.t0=t.catch(0),t.t0;case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=Object(l.a)(u.a.mark((function t(n){var e,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e=(new Date).toISOString(),t.next=4,j.a.get("https://api.carbonintensity.org.uk/regional/intensity/".concat(e,"/fw48h/postcode/").concat(n));case 4:return r=t.sent,t.abrupt("return",r.data.data.data[0]);case 8:throw t.prev=8,t.t0=t.catch(0),t.t0;case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(n){return t.apply(this,arguments)}}(),x={fetchLocationData:h,fetchPollutionData:function(){var t=Object(l.a)(u.a.mark((function t(n,e){var r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,j.a.get("https://secret-ocean-49799.herokuapp.com/http://api.openweathermap.org/data/2.5/air_pollution?lat=".concat(n,"&lon=").concat(e,"&appid=").concat("3d1641233d5dc6224b739cf77d08866e"));case 3:return r=t.sent,t.abrupt("return",r.data.list[0]);case 7:throw t.prev=7,t.t0=t.catch(0),t.t0;case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(n,e){return t.apply(this,arguments)}}(),fetchEnergeyData:p},v=e(3);function m(){var t=Object(d.a)(["\n  body {\n    background: linear-gradient(#8ac8ff, #298adf) fixed no-repeat;\n    font-family: 'Inder', sans-serif;\n    color: #fff;\n    overflow-x: hidden;\n  }\n  \n  h1 {\n    text-align: center;\n    font-size: 4rem;\n  }\n\n  h2 {\n    font-size: 2rem;\n  }\n\n  h3 {\n    font-size: 1.5rem;\n  }\n\n  h4 {\n    font-size: 1.4rem;\n    font-weight: 500;\n  }\n\n  * {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n    \n    &:focus {\n      outline: none;\n    }\n  }\n"]);return m=function(){return t},t}var O=Object(v.a)(m());function g(){var t=Object(d.a)(["\n  font-size: 0.6em;\n  text-align: center;\n  margin-top: 0.5rem;\n"]);return g=function(){return t},t}function y(){var t=Object(d.a)(["\n  border: none;\n  padding: 0.6rem 1em;\n  font-size: 1.1em;\n  border-radius: 35px 0 0 35px;\n  width: 6.5em;\n  color: #5c5c5c;\n  caret-color: #8f8f8f;\n"]);return y=function(){return t},t}function w(){var t=Object(d.a)(["\n  border: none;\n  background-color: #85d018;\n  color: #fff;\n  padding: 0.3em 0.5em;\n  cursor: pointer;\n  border-radius: 0 35px 35px 0;\n  font-size: 0.8em;\n"]);return w=function(){return t},t}function k(){var t=Object(d.a)(["\n  position: absolute;\n  top: ",";\n  left: 50%;\n  font-size: ",";\n  transform: translate(-50%);\n  transition: 1s;\n"]);return k=function(){return t},t}var z=/^([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9]?[A-Za-z]))))\s?[0-9][A-Za-z]{2})$/,S=v.b.div(k(),(function(t){return t.style.top}),(function(t){return t.style.fontSize})),A=v.b.button(w()),C=v.b.input(y()),M=v.b.div(g()),D=function(t){var n=t.setLocationData,e=t.setSubmitted,i=Object(a.useRef)(null),o=Object(a.useState)(""),c=Object(f.a)(o,2),s=c[0],d=c[1],b=Object(a.useState)(""),j=Object(f.a)(b,2),h=j[0],p=j[1],v=Object(a.useState)({top:"220px",fontSize:"1.8em",width:"200px"}),m=Object(f.a)(v,2),O=m[0],g=m[1];Object(a.useEffect)((function(){i.current.focus()}),[]);var y=function(){var t=Object(l.a)(u.a.mark((function t(r){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r.preventDefault(),t.prev=1,z.test(h)){t.next=4;break}throw"Please enter a full, valid UK postcode";case 4:return t.next=6,x.fetchLocationData(h);case 6:a=t.sent,d(""),g({top:"40px",fontSize:"1.2em",width:"150px"}),n(a),e(!0),t.next=18;break;case 13:t.prev=13,t.t0=t.catch(1),console.error(t.t0),d(t.t0),setTimeout((function(){return d("")}),4e3);case 18:case"end":return t.stop()}}),t,null,[[1,13]])})));return function(n){return t.apply(this,arguments)}}();return Object(r.jsxs)(S,{style:O,children:[Object(r.jsxs)("form",{style:{display:"flex",justifyContent:"center"},onSubmit:function(t){return y(t)},autoComplete:"off",children:[Object(r.jsx)(C,{ref:i,"aria-label":"post-code",type:"text",name:"postCode",placeholder:"Postcode",value:h,onChange:function(t){return function(t){p(t.target.value.toUpperCase())}(t)}}),Object(r.jsx)(A,{children:"Submit"})]}),s&&Object(r.jsxs)(M,{children:[Object(r.jsx)("i",{class:"fas fa-exclamation-triangle"})," ",Object(r.jsx)("span",{children:s})]})]})};function P(){var t=Object(d.a)(["\n  height: 100%;\n  width: 100%;\n\n  & div {\n    width: 20px;\n    height: 20px;\n    background: #fff;\n    position: relative;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    animation: "," 1.8s linear infinite;\n  }\n\n  & div:nth-child(2) {\n    transform: translate(-50%, -150%);\n    animation-delay: -0.9s;\n  }\n"]);return P=function(){return t},t}function T(){var t=Object(d.a)(["\n  0% {left: 50%; top: 0px; border-radius: 50% 50% 50% 0;}\n  25% {left: 100%; top: 50%; border-radius: 0 50% 50% 50%;}\n  50% {left: 50%; top: 100%; border-radius: 50% 0 50% 50%;}\n  75% {left: 0%; top: 50%; border-radius: 50% 50% 0 50%; }\n  100% {left: 50%; top: 0px; border-radius: 50% 50% 50% 0;}\n"]);return T=function(){return t},t}var E=Object(v.c)(T()),W=v.b.div(P(),E),I=function(){return Object(r.jsxs)("div",{style:{position:"fixed",bottom:"50%",left:"50%",transform:"translate(-50%)",textAlign:"center"},children:[Object(r.jsx)("div",{style:{width:"100px",height:"100px",margin:"auto"},children:Object(r.jsxs)(W,{children:[Object(r.jsx)("div",{}),Object(r.jsx)("div",{})]})}),Object(r.jsx)("div",{style:{marginTop:"40px",fontSize:"1.4rem"},children:Object(r.jsx)("span",{children:"Working on it..."})})]})},Q=function(t){return Object(r.jsx)("div",{style:{position:t.submitted?"block":"absolute",top:t.submitted?"0":"100px",left:t.submitted?"5%":"50%",width:t.submitted?"auto":"100%",transform:t.submitted?"":"translate(-50%)",transition:"1s",display:"inline-block"},children:Object(r.jsxs)("h1",{style:{fontFamily:"'Heebo', sans-serif",fontSize:t.submitted?"2em":"4em",cursor:"default"},children:[Object(r.jsx)("span",{style:{color:"#b9f414"},children:"green"})," vitals"]})})},R=e(4);function Z(){var t=Object(d.a)(["\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 37px 0 158px 16px;\n  border-color: transparent transparent transparent #fff;\n  position: absolute;\n  top: ",";\n  left: ",";\n  transform: rotate(","deg);\n  z-index: -1;\n"]);return Z=function(){return t},t}function F(){var t=Object(d.a)(["\n  position: relative;\n  height: 400px;\n  width: 100%;\n  left: 0;\n  z-index: 3;\n  animation: ",' 3.1s linear infinite;\n\n  :before {\n    content: "";\n    display: block;\n    width: 35px;\n    height: 35px;\n    border-radius: 50%;\n    position: relative;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    background: radial-gradient(#fff, #f1f1f1, #b1b1b1);\n    box-sizing: border-box;\n  }\n']);return F=function(){return t},t}function _(){var t=Object(d.a)(["\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n"]);return _=function(){return t},t}function L(){var t=Object(d.a)(["\n  height: 280px;\n  width: 17px;\n  background: linear-gradient(to left, #b1b1b1, #fff);\n  position: absolute;\n  left: 50%;\n  transform: translate(-50%);\n  top: 34%;\n  z-index: 2;\n  border-radius: 0 0 20px 20px;\n"]);return L=function(){return t},t}function J(){var t=Object(d.a)(["\n  height: 570px;\n  width: 400px;\n  overflow: hidden;\n  box-sizing: content-box;\n  transition: 1.5s;\n  align-self: ",";\n  position: relative;\n  top: ",';\n\n  :after {\n    content: "";\n    display: block;\n    width: 400px;\n    height: 400px;\n    background: linear-gradient(#d3ff84, #3e7e00);\n    position: relative;\n    bottom: -30px;\n    border-radius: 50%;\n  }\n']);return J=function(){return t},t}var H=v.b.div(J(),(function(t){return t.isMobile?"center":"flex-end"}),(function(t){return t.show?"100vh":"0"})),q=v.b.div(L()),G=Object(v.c)(_()),N=v.b.div(F(),G),U=v.b.div(Z(),(function(t){return t.top}),(function(t){return t.left}),(function(t){return t.rotation})),Y=function(t){var n=Object(R.useMediaQuery)({maxWidth:"700px"});return Object(r.jsxs)(H,{show:t.loading,isMobile:n,children:[Object(r.jsxs)(N,{children:[Object(r.jsx)(U,{top:"50%",left:"50%",rotation:"0"}),Object(r.jsx)(U,{top:"61px",left:"105px",rotation:"120"}),Object(r.jsx)(U,{top:"47px",left:"272px",rotation:"240"})]}),Object(r.jsx)(q,{})]})},B=function(t){var n=t.data,e=t.chartColours,i=Object(R.useMediaQuery)({maxWidth:700}),o=Object(a.useRef)(null);Object(a.useEffect)((function(){var t=o.current.getContext("2d");c(t)}),[n,i]);var c=function(t){u(t);var e=0;n.forEach((function(n){s(t,e,n),e+=n.radians}))},s=function(t,n,r){var a=r.label,i=r.value,c=r.radians,s=o.current,u=s.width/2,l=s.height/2,f=s.width/2*.5,d=n+c;t.beginPath(),t.moveTo(u,l),t.arc(u,l,f,n,d,!1),t.closePath(),t.fillStyle=e[a],t.fill();var b=n+(d-n)/2,j=1.1*f,h=u+j*Math.cos(b),p=l+j*Math.sin(b);t.font=".9rem arial",t.fontWeight="400",t.fillStyle="#fff",t.textAlign=h<u?"right":"left",t.fillText("".concat(a,": ").concat(i,"%"),h,p)},u=function(t){var n=o.current;t.clearRect(0,0,n.width,n.height)};return Object(r.jsx)("div",{children:Object(r.jsx)("canvas",{ref:o,width:"520",height:"400",style:{width:i?"100%":"auto"}})})},K=e(27),V=function(t){var n=t.data,e=t.headings,i=Object(R.useMediaQuery)({maxWidth:800});return Object(r.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",width:i?"90%":"30%",margin:"0 .5rem"},children:[Object(r.jsx)("div",{children:Object(r.jsx)("h4",{children:e[0]})}),Object(r.jsx)("div",{style:{textAlign:"right"},children:Object(r.jsx)("h4",{children:e[1]})}),n.map((function(t){return Object(r.jsxs)(a.Fragment,{children:[Object(r.jsx)("div",{children:Object(K.capitalize)(t[0])}),Object(r.jsx)("div",{style:{textAlign:"right"},children:t[1]})]})}))]})},$=function(t){var n=t.children,e=Object(R.useMediaQuery)({maxWidth:800});return Object(r.jsx)("div",{style:{display:"flex",flexDirection:e?"column":"row",justifyContent:e?"center":"space-between",alignItems:e?"center":"stretch"},children:n})};function X(){var t=Object(d.a)(["\n  border-top: 1px solid #fff;\n  padding: 0.5rem 0;\n  animation: ",";\n  animation-duration: 0.5s;\n  animation-iteration-count: 1;\n  animation-timing-function: ease-out;\n"]);return X=function(){return t},t}function tt(){var t=Object(d.a)(["\n  0% {margin-left: -100vw;}\n  100% {margin: 0;} \n"]);return tt=function(){return t},t}var nt={biomass:"#79db88",solar:"#ffb555",wind:"#a8d6ff",hydro:"#00abff",coal:"#443636",nuclear:"#5de6c6",imports:"#e65d5d",gas:"#8d7cdf",other:"#eb2bee"},et=Object(v.c)(tt()),rt=v.b.section(X(),et),at=function(t){var n=t.data,e=Object(R.useMediaQuery)({maxWidth:700}),i=Object(a.useCallback)((function(){var t=n.generationmix.filter((function(t){return t.perc>.5})),e=t.reduce((function(t,n){return t+n.perc}),0);return t.map((function(t){return{value:t.perc,label:t.fuel,radians:t.perc/e*(2*Math.PI)}}))}),[n]),o=Object(a.useCallback)((function(){return n.generationmix.sort((function(t,n){return t.perc<n.perc})).map((function(t){return[t.fuel,t.perc]}))}),[n]);return Object(r.jsxs)(rt,{children:[Object(r.jsxs)("header",{style:{textAlign:"center"},children:[Object(r.jsx)("h3",{children:"Energy Overview"}),Object(r.jsxs)("p",{children:["Carbon Intensity:"," ","".concat(n.intensity.forecast," (").concat(n.intensity.index,")")]})]}),Object(r.jsxs)($,{children:[Object(r.jsx)(V,{headings:["Fuel source","%"],data:o(),style:{order:e?"2":"0"}}),Object(r.jsx)(B,{data:i(),chartColours:nt})]})]})},it=function(t){var n=t.data,e=t.colours,i=Object(R.useMediaQuery)({maxWidth:700}),o=Object(a.useRef)(null),c=30,s=30,u=n.reduce((function(t,n){return n.value>t?10*Math.ceil(n.value/10):t}),0);Object(a.useEffect)((function(){var t=o.current.getContext("2d");l(t)}),[n,i]);var l=function(t){console.log(u),d(t);var e=10+70*n.length,r=o.current.height-c-s;t.font=".9rem arial",t.fontWeight="400",t.fillStyle="#fff",t.strokeStyle="#fff",t.textAlign="right",t.beginPath(),t.moveTo(c,r+s),t.lineTo(e+25,r+s),t.stroke(),t.beginPath(),t.moveTo(c,s),t.lineTo(c,r+s),t.stroke();for(var a=1;a>=0;a-=.1){var i=Math.round(u*a),l=r+s-r*a;t.fillText(i,25,l)}var b=40;n.forEach((function(n){f(t,r,b,n),b+=70}))},f=function(t,n,r,a){var i=o.current,s=a.value/u*100/100*n,l=r,f=i.height-(s+c);t.fillStyle=e[a.label],t.fillRect(l,f,60,s);var d=l+30,b=f+s+20;t.textAlign="center",t.fillStyle="#fff",t.fillText("".concat(a.label),d,b)},d=function(t){var n=o.current;t.clearRect(0,0,n.width,n.height)};return Object(r.jsx)("canvas",{ref:o,width:"550",height:"400",style:{width:i?"100%":"auto"}})};function ot(){var t=Object(d.a)(["\n  border-top: 1px solid #fff;\n  padding: 0.5rem 0;\n  animation: ",";\n  animation-duration: 0.5s;\n  animation-iteration-count: 1;\n  animation-timing-function: ease-out;\n"]);return ot=function(){return t},t}function ct(){var t=Object(d.a)(["\n  0% {margin-right: -100vw;}\n  100% {margin: 0;} \n"]);return ct=function(){return t},t}var st={no:"#79db88",no2:"#ffb555",o3:"#a8d6ff",so2:"#0a5e80",pm2_5:"#443636",pm10:"#a166f7",nh3:"#e65d5d"},ut={1:"Good",2:"Fair",3:"Moderate",4:"Poor",5:"Very Poor"},lt={co:"Carbon monoxide",no:"Nitrous oxide",no2:"Nitrous dioxide",o3:"Ozone",so2:"Sulphur dioxide",pm2_5:"Fine particulates",pm10:"Coarse particulates",nh3:"Ammonia"},ft=Object(v.c)(ct()),dt=v.b.section(ot(),ft),bt=function(t){var n=t.data,e=Object(a.useCallback)((function(){return Object.keys(n.components).filter((function(t){return"co"!==t&&"o3"!==t})).map((function(t){return{label:t,value:n.components[t]}})).sort((function(t,n){return t.value<n.value}))}),[n]),i=Object(a.useCallback)((function(){return Object.entries(n.components).map((function(t){var n=Object(f.a)(t,2),e=n[0],r=n[1];return[lt[e],r]}))}),[n]);return Object(r.jsxs)(dt,{children:[Object(r.jsxs)("header",{style:{textAlign:"center"},children:[Object(r.jsx)("h3",{children:"Pollution Overview"}),Object(r.jsxs)("p",{children:["Air Quality Index: ","".concat(n.main.aqi," (").concat(ut[n.main.aqi],")")]})]}),Object(r.jsxs)($,{children:[Object(r.jsx)(it,{data:e(),colours:st}),Object(r.jsx)(V,{headings:["Pollutant","\u03bcg/m\xb3"],data:i()})]})]})},jt=function(t){var n=t.data,e=t.location;return Object(r.jsx)("div",{style:{marginTop:"140px"},children:n&&Object(r.jsxs)(a.Fragment,{children:[Object(r.jsx)("h2",{style:{marginLeft:"1rem"},children:e}),Object(r.jsx)(at,{data:n.energyData}),Object(r.jsx)(bt,{data:n.pollutionData})]})})};function ht(){var t=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  margin: 0 auto;\n  align-content: center;\n  justify-content: space-between;\n  min-height: 100vh;\n"]);return ht=function(){return t},t}function pt(){var t=Object(d.a)(["\n  max-width: 1100px;\n  margin: auto;\n"]);return pt=function(){return t},t}var xt=v.b.div(pt()),vt=v.b.div(ht()),mt=function(){var t=Object(R.useMediaQuery)({maxWidth:700}),n=Object(a.useState)(!1),e=Object(f.a)(n,2),i=e[0],o=e[1],c=Object(a.useState)(!1),s=Object(f.a)(c,2),d=s[0],b=s[1],j=Object(a.useState)(),h=Object(f.a)(j,2),p=h[0],v=h[1],m=Object(a.useState)(),g=Object(f.a)(m,2),y=g[0],w=g[1];Object(a.useEffect)((function(){p&&k()}),[d,p]);var k=function(){var t=Object(l.a)(u.a.mark((function t(){var n,e,r,a,i,c,s;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,o(!0),n=p.outcode,e=p.latitude,r=p.longitude,t.next=5,Promise.all([x.fetchPollutionData(e,r),x.fetchEnergeyData(n)]);case 5:a=t.sent,i=Object(f.a)(a,2),c=i[0],s=i[1],w({energyData:s,pollutionData:c}),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),console.error(t.t0);case 15:return t.prev=15,o(!1),t.finish(15);case 18:case"end":return t.stop()}}),t,null,[[0,12,15,18]])})));return function(){return t.apply(this,arguments)}}();return Object(r.jsxs)(xt,{children:[Object(r.jsx)(O,{}),i&&Object(r.jsx)(I,{}),Object(r.jsxs)("div",{style:{fontSize:t?".8rem":"1rem"},children:[Object(r.jsx)(Q,{submitted:d}),Object(r.jsx)(D,{setLocationData:v,setSubmitted:b})]}),Object(r.jsxs)(vt,{children:[Object(r.jsx)(jt,{data:y,location:null===p||void 0===p?void 0:p.admin_district}),!t&&Object(r.jsx)(Y,{loading:i})]})]})};c.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(mt,{})}),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.8c6e93f6.chunk.js.map