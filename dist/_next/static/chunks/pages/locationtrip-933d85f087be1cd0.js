(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[276],{6744:function(e,i,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/locationtrip",function(){return t(1406)}])},1406:function(e,i,t){"use strict";t.r(i),t.d(i,{default:function(){return x}});var r=t(5893),n=t(5106),s=t(7294),l=t(5341);function o(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"5px"},children:[(0,r.jsx)("div",{style:{marginRight:"2vw"},children:(0,r.jsx)("button",{style:{marginLeft:"4vw",backgroundColor:"#0EC3EB",padding:"3px",borderRadius:"5px",color:"black",border:"none"},children:"Start Date"})}),(0,r.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,r.jsxs)("div",{style:{display:"flex",alignItems:"center",marginRight:"5vw"},children:[(0,r.jsx)("button",{style:{backgroundColor:"#0EC3EB",padding:"3px",borderRadius:"5px",color:"black",border:"none"},children:"Price"}),(0,r.jsx)(l.vpR,{style:{marginLeft:"5px",fontSize:"30px",color:"black"}})]}),(0,r.jsxs)("div",{style:{display:"flex",alignItems:"center",marginRight:"5vw"},children:[(0,r.jsx)("button",{style:{backgroundColor:"#0EC3EB",padding:"3px",borderRadius:"5px",color:"black",border:"none"},children:"Distance"}),(0,r.jsx)(l.vpR,{style:{marginLeft:"5px",fontSize:"30px",color:"black"}})]}),(0,r.jsxs)("div",{style:{display:"flex",alignItems:"center",marginRight:"4vw"},children:[(0,r.jsx)("button",{style:{backgroundColor:"#0EC3EB",padding:"3px",borderRadius:"5px",color:"black",border:"none"},children:"Night"}),(0,r.jsx)(l.vpR,{style:{marginLeft:"5px",fontSize:"30px",color:"black"}})]})]})]})})}var a=t(8348),d=t(1163),c=t(7066);function x(){let{city:e}=(0,d.useRouter)().query,[i,t]=(0,s.useState)([]);(0,s.useEffect)(()=>{l()},[]);let l=async()=>{try{let e=await c.Z.get("http://13.127.108.60:6060/website/all-website-trips");console.log(e.data),t(e.data)}catch(e){console.error(e)}},x=i.filter(i=>i.location.city===e);return console.log(x),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{style:{width:"100%"},children:(0,r.jsx)(n.Z,{})}),(0,r.jsx)("div",{style:{marginTop:"20px"},children:(0,r.jsx)(o,{})}),(0,r.jsxs)("div",{style:{marginLeft:"4vw",marginTop:"1vw",fontSize:"20px",color:"black"},children:[e," Trip packages under INR 6,000"]}),(0,r.jsx)("div",{style:{display:"flex",marginLeft:"0",flexWrap:"wrap",marginTop:"20px"},children:x.map(e=>(0,r.jsx)(a.Z,{tripId:e.id,title:e.name,duration:e.location.days+" days & "+(e.location.days-1)+" nights",price:e.tripleSeatPricing,description:e.description,image:e.image,style:{width:"calc(50% - 15px)",margin:"10px"}},e.id))})]})}},8348:function(e,i,t){"use strict";t.d(i,{Z:function(){return g}});var r=t(5893);t(7294);var n=t(6242),s=t(2023),l=t(4267),o=t(3965),a=t(9417),d=t(5861),c=t(3132),x=t(1664),p=t.n(x);function g(e){let{title:i,duration:t,price:x,description:g,image:u,style:h,tripId:y}=e;return(0,r.jsx)(p(),{href:{pathname:"/itinerary",query:{tripId:y}},style:{textDecoration:"none"},children:(0,r.jsxs)(n.Z,{sx:{maxWidth:345,marginBottom:"20px",marginLeft:"50px",borderRadius:"10px"},children:[(0,r.jsx)(o.Z,{sx:{height:238,width:325,objectFit:"cover",marginLeft:"10px",marginRight:"10px",marginTop:"10px",borderRadius:"10px"},image:"../Pawna.jpeg",title:"green iguana"}),(0,r.jsxs)(l.Z,{sx:{pb:0},children:[(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,r.jsx)("div",{style:{color:"black"},children:t}),(0,r.jsxs)("div",{style:{display:"flex"},children:[(0,r.jsx)(c._t2,{style:{color:"red",fontSize:"18px"}}),(0,r.jsx)("div",{style:{color:"red"},children:"5.0 (15.2k)"})]})]}),(0,r.jsx)(d.Z,{style:{marginTop:"5px"},children:i}),(0,r.jsxs)(d.Z,{style:{marginTop:"2px"},children:[(0,r.jsx)("span",{style:{textDecoration:"line-through",color:"black"},children:"INR 1900"}),x]})]}),(0,r.jsxs)(s.Z,{sx:{justifyContent:"space-between",pt:1,pl:2,pr:2},children:[(0,r.jsx)(a.Z,{sx:{width:"auto",backgroundColor:"#0EC3EB",color:"white",padding:"0.5rem",borderRadius:"6px",opacity:"90%","&:hover":{backgroundColor:"#0EC3EB"}},children:"View Details"}),(0,r.jsx)(a.Z,{sx:{width:"auto",backgroundColor:"#0EC3EB",color:"white",padding:"0.5rem",borderRadius:"6px",opacity:"90%","&:hover":{backgroundColor:"#0EC3EB"}},children:"Request Callback"})]})]})})}}},function(e){e.O(0,[123,768,712,585,106,888,774,179],function(){return e(e.s=6744)}),_N_E=e.O()}]);