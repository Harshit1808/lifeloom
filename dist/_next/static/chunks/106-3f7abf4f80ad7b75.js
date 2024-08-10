"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[106],{5106:function(e,r,o){o.d(r,{Z:function(){return _}});var n=o(5893),s=o(7294),l=o(948),t=o(2293),i=o(5616),a=o(155),c=o(3946),d=o(5861),p=o(4674),u=o(8245),h=o(9840),x=o(5070),g=o(2761),j=o(2529),b=o(6448),y=o(5817),k=o(657),m=o(1425),f=o(6514),v=o(7645),w=o(9417),E=o(8462),Z=o(7212),C=o(8619),F=o(9334),S=o(326);function B(){let[e,r]=s.useState(!1),o=e=>()=>{r(e)},l=(0,n.jsxs)(i.Z,{sx:{width:250,background:"#0EC3EB",position:"fixed",top:64,left:e?0:-250,height:"100%",transition:"left 0.3s ease-in-out",zIndex:1e4},onClick:o(!1),children:[(0,n.jsx)(E.Z,{children:["Blogs","Destination Guides","Testimonials","Reviews","How it works","FAQs","Logout"].map((e,r)=>(0,n.jsx)(Z.ZP,{disablePadding:!0,children:(0,n.jsx)(C.Z,{style:{background:"white",margin:"10px",height:"25px",textAlign:"center",borderRadius:"5px",color:"black"},children:(0,n.jsx)(F.Z,{primary:e})})},e))}),(0,n.jsx)("div",{style:{background:"white",height:"400px",color:"black",textAlign:"center"},children:(0,n.jsx)("div",{style:{paddingTop:"30px"},children:"Lifeloom Pvt. Ltd."})})]});return(0,n.jsxs)("div",{children:[(0,n.jsx)(w.Z,{onClick:o(!e),children:(0,n.jsx)(S.Z,{style:{color:"#0EC3EB",fontSize:"36px"}})}),e&&l," "]})}var L=o(4962);let z=o(7066).Z.create({baseURL:"http://13.127.108.60:6060",headers:{Accept:"application/json","Content-Type":"application/json"}});var A={login:async e=>{console.log("payload",e);try{let r=await z.post("/auth/login",e);return console.log("AuthService login response:",r),r}catch(e){throw console.error("AuthService login error:",e),e}},register:async e=>{console.log("payload",e);try{let r=await z.post("/user/register",e);return console.log("AuthService register response:",r),r}catch(e){throw console.error("AuthService register error:",e),e}},logout:async e=>{try{let r=await z.delete("/auth/logout",{headers:{Authorization:"JWT ".concat(e)}});return console.log("AuthService logout response:",r),r}catch(e){throw console.error("AuthService logout error:",e),e}},refreshToken:async e=>{try{let r=await z.post("/auth/refresh-token",{token:e});return console.log("AuthService refreshToken response:",r),r}catch(e){throw console.error("AuthService refreshToken error:",e),e}}},R=o(6426),T=()=>(0,n.jsx)(R.rg,{clientId:"457435363093-kiipu69vm2o0t6jt9orr3c28oc8gs2ka.apps.googleusercontent.com",children:(0,n.jsx)(R.kZ,{onSuccess:e=>{console.log("Login Success: currentUser:",e)},onFailure:e=>{console.error("Login Failed: res:",e)},cookiePolicy:"single_host_origin"})}),P=()=>{let{login:e,errors:r,loading:o}=(0,L.a)();console.log("errors",r),console.log("loading",o),console.log("login",e);let[l,t]=(0,s.useState)("login"),[i,a]=(0,s.useState)(""),[c,d]=(0,s.useState)(""),[p,u]=(0,s.useState)(""),[h,x]=(0,s.useState)(""),[g,j]=(0,s.useState)(""),[b,y]=(0,s.useState)(null),k=e=>{t(e),y(null)},m=async r=>{r.preventDefault(),y(null);try{let r=await A.login({email:i,password:c});if(console.log("Login response:",r),r&&r.data){let{accessToken:o,refreshToken:n,user:s}=r.data;if(console.log("User:",s),console.log("Access Token:",o),console.log("Refresh Token:",n),s&&o&&n)e(s);else throw Error("Invalid response structure")}else throw Error("Invalid response data")}catch(e){console.error("Login error:",e),e.response&&(console.error("Error response data:",e.response.data),console.error("Error response status:",e.response.status),console.error("Error response headers:",e.response.headers)),y("Invalid credentials, please try again.")}},f=async r=>{if(r.preventDefault(),c!==g){y("Passwords do not match");return}y(null);try{let r=await A.register({fullName:p,email:i,phoneNumber:h,password1:c,password2:g});if(console.log("Login response:",r),r&&r.data){let{accessToken:o,refreshToken:n,user:s}=r.data;if(console.log("User:",s),console.log("Access Token:",o),console.log("Refresh Token:",n),s&&o&&n)e(s);else throw Error("Invalid response structure")}else throw Error("Invalid response data")}catch(e){console.error("Login error:",e),e.response&&(console.error("Error response data:",e.response.data),console.error("Error response status:",e.response.status),console.error("Error response headers:",e.response.headers)),y("Invalid credentials, please try again.")}},v=(0,n.jsxs)("div",{style:{textAlign:"center"},children:[(0,n.jsx)("h3",{children:"Login into your account"}),(0,n.jsxs)("form",{style:{margin:"auto",maxWidth:"300px"},onSubmit:m,children:[(0,n.jsx)("div",{style:{marginBottom:"15px"},children:(0,n.jsx)("input",{type:"email",placeholder:"Email",value:i,onChange:e=>a(e.target.value),style:{width:"100%",padding:"10px",borderRadius:"5px",background:"#FFFFFF",stroke:"#000000",border:"1px solid #E7E7E7",color:"black"},required:!0})}),(0,n.jsx)("div",{style:{marginBottom:"15px"},children:(0,n.jsx)("input",{type:"password",placeholder:"Password",value:c,onChange:e=>d(e.target.value),style:{width:"100%",padding:"10px",borderRadius:"5px",background:"#FFFFFF",stroke:"#000000",border:"1px solid #E7E7E7",color:"black"},required:!0})}),(0,n.jsx)("div",{style:{marginBottom:"15px"},children:(0,n.jsx)("button",{type:"button",style:{padding:"0px",borderRadius:"5px",color:"#0EC3EB",border:"none",fontOpacity:"90%",background:"none"},children:"Forgot Password"})}),(0,n.jsxs)("div",{style:{marginBottom:"15px"},children:["Dont have an account?"," ",(0,n.jsx)("button",{type:"button",style:{color:"black",border:"none",background:"none",cursor:"pointer",fontSize:"15px"},onClick:()=>k("signup"),children:"Sign Up"})]}),(0,n.jsx)("button",{type:"submit",style:{width:"100%",padding:"10px",borderRadius:"5px",background:"#0EC3EB",opacity:"90%",color:"#fff",border:"none",marginBottom:"15px"},disabled:o,children:o?"Logging in...":"Login & Continue"}),b&&(0,n.jsx)("p",{style:{color:"red"},children:b}),r&&(0,n.jsx)("p",{style:{color:"red"},children:r}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h1",{children:"Sign In"}),(0,n.jsx)(T,{onSuccess:e=>{console.log("Login Success: currentUser:",e)}})]})]})]}),w=(0,n.jsxs)("div",{style:{textAlign:"center"},children:[(0,n.jsx)("h3",{children:"Create your account"}),(0,n.jsxs)("form",{style:{margin:"auto",maxWidth:"300px"},onSubmit:f,children:[(0,n.jsx)("div",{style:{marginBottom:"15px"},children:(0,n.jsx)("input",{type:"text",placeholder:"Full Name",value:p,onChange:e=>u(e.target.value),style:{width:"100%",padding:"10px",borderRadius:"5px",background:"#FFFFFF",stroke:"#000000",border:"1px solid #E7E7E7",color:"black"},required:!0})}),(0,n.jsx)("div",{style:{marginBottom:"15px"},children:(0,n.jsx)("input",{type:"email",placeholder:"Email",value:i,onChange:e=>a(e.target.value),style:{width:"100%",padding:"10px",borderRadius:"5px",background:"#FFFFFF",stroke:"#000000",border:"1px solid #E7E7E7",color:"black"},required:!0})}),(0,n.jsx)("div",{style:{marginBottom:"15px"},children:(0,n.jsx)("input",{type:"tel",placeholder:"Phone Number",value:h,onChange:e=>x(e.target.value),style:{width:"100%",padding:"10px",borderRadius:"5px",background:"#FFFFFF",stroke:"#000000",border:"1px solid #E7E7E7",color:"black"},required:!0})}),(0,n.jsx)("div",{style:{marginBottom:"15px"},children:(0,n.jsx)("input",{type:"password",placeholder:"Password",value:c,onChange:e=>d(e.target.value),style:{width:"100%",padding:"10px",borderRadius:"5px",background:"#FFFFFF",stroke:"#000000",border:"1px solid #E7E7E7",color:"black"},required:!0})}),(0,n.jsx)("div",{style:{marginBottom:"15px"},children:(0,n.jsx)("input",{type:"password",placeholder:"Confirm Password",value:g,onChange:e=>j(e.target.value),style:{width:"100%",padding:"10px",borderRadius:"5px",background:"#FFFFFF",stroke:"#000000",border:"1px solid #E7E7E7",color:"black"},required:!0})}),(0,n.jsx)("button",{type:"submit",style:{width:"100%",padding:"10px",borderRadius:"5px",background:"#0EC3EB",opacity:"90%",color:"#fff",border:"none",marginBottom:"15px"},disabled:o,children:o?"Signing up...":"Sign Up"}),b&&(0,n.jsx)("p",{style:{color:"red"},children:b}),r&&(0,n.jsx)("p",{style:{color:"red"},children:r}),(0,n.jsxs)("div",{style:{marginBottom:"15px"},children:["Already have an account?"," ",(0,n.jsx)("button",{type:"button",style:{color:"black",border:"none",background:"none",cursor:"pointer",fontSize:"15px"},onClick:()=>k("login"),children:"Login"})]})]})]});return(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{style:{display:"flex",margin:"auto",maxWidth:"300px"},children:[(0,n.jsx)("div",{style:{flex:1,textAlign:"center"},children:(0,n.jsx)("button",{style:{border:"none",background:"none",color:"login"===l?"#0EC3EB":"black",borderBottom:"login"===l?"2px solid #0EC3EB":"none"},onClick:()=>k("login"),children:"Login"})}),(0,n.jsx)("div",{style:{flex:1,textAlign:"center"},children:(0,n.jsx)("button",{style:{border:"none",background:"none",color:"signup"===l?"#0EC3EB":"black",borderBottom:"signup"===l?"2px solid #0EC3EB":"none"},onClick:()=>k("signup"),children:"Sign Up"})})]}),(0,n.jsx)("hr",{style:{width:"300px"}}),"login"===l?v:w]})},I=o(3795);o(1163);let U=(0,l.ZP)("div")(e=>{let{theme:r}=e;return{backgroundColor:"#ffffff",color:"#000000",position:"relative",borderRadius:r.shape.borderRadius,"&:hover":{backgroundColor:"#f0f0f0"},marginRight:r.spacing(2),marginLeft:0,width:"100%",[r.breakpoints.up("sm")]:{marginLeft:r.spacing(3),width:"auto"}}}),N=(0,l.ZP)("div")(e=>{let{theme:r}=e;return{padding:r.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"}}),q=(0,l.ZP)(p.ZP)(e=>{let{theme:r}=e;return{color:"inherit","& .MuiInputBase-input":{padding:r.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(r.spacing(4),")"),transition:r.transitions.create("width"),width:"100%",[r.breakpoints.up("md")]:{width:"20ch"}}}});function _(){let[e,r]=s.useState(null),[o,l]=s.useState(null),[p,E]=s.useState(!1),{user:Z,login:C,logout:F}=(0,L.a)();s.useEffect(()=>{console.log("user0090",Z),Z&&E(!1)},[Z]);let S=e=>{r(e.currentTarget)},z=()=>{l(null)},A=()=>{r(null),z()},R=()=>{E(!0)},T=()=>{E(!1)},_="primary-search-account-menu",D=(0,n.jsxs)(x.Z,{anchorEl:e,anchorOrigin:{vertical:"top",horizontal:"right"},id:_,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:!!e,onClose:A,style:{marginTop:"40px"},children:[Z?(0,n.jsx)("div",{style:{padding:"10px"},children:Z.email}):(0,n.jsx)("div",{}),(0,n.jsx)("hr",{}),(0,n.jsx)(h.Z,{onClick:A,children:"Your Trips"}),(0,n.jsx)(h.Z,{onClick:A,children:"Your reiews"}),(0,n.jsx)(h.Z,{onClick:()=>{F(),A(),alert("Logout successful")},children:"Logout"})]}),O="primary-search-account-menu-mobile",W=(0,n.jsxs)(x.Z,{anchorEl:o,anchorOrigin:{vertical:"top",horizontal:"right"},id:O,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:!!o,onClose:z,children:[(0,n.jsxs)(h.Z,{children:[(0,n.jsx)(c.Z,{size:"large",color:"inherit",children:(0,n.jsx)(u.Z,{color:"error",style:{color:"black"},children:(0,n.jsx)(b.Z,{})})}),(0,n.jsx)("p",{children:"Messages"})]}),(0,n.jsxs)(h.Z,{children:[(0,n.jsx)(c.Z,{size:"large","aria-label":"show 17 new notifications",color:"inherit",children:(0,n.jsx)(u.Z,{badgeContent:17,color:"error",children:(0,n.jsx)(y.Z,{})})}),(0,n.jsx)("p",{children:"Notifications"})]}),Z?(0,n.jsxs)(h.Z,{onClick:S,children:[(0,n.jsx)(c.Z,{size:"large","aria-label":"account of current user","aria-controls":"primary-search-account-menu","aria-haspopup":"true",color:"inherit",children:(0,n.jsx)(j.Z,{})}),(0,n.jsx)("div",{style:{color:"red",border:"1px solid black"},children:Z.fullName})]}):(0,n.jsx)(h.Z,{onClick:R,children:(0,n.jsx)(c.Z,{size:"large","aria-label":"show more","aria-controls":O,"aria-haspopup":"true",style:{color:"black",fontSize:"24px"},children:"Login"})})]});return(0,n.jsxs)(i.Z,{sx:{flexGrow:1},children:[(0,n.jsx)(t.Z,{position:"static",style:{backgroundColor:"white"},children:(0,n.jsxs)(a.Z,{children:[(0,n.jsx)(B,{}),(0,n.jsx)(I.Z,{href:"http://www.easenix.com/",style:{textDecoration:"none"},children:(0,n.jsx)(d.Z,{variant:"h6",noWrap:!0,component:"div",sx:{display:{xs:"none",sm:"block"},color:"#000000"},children:"Easenix"})}),(0,n.jsxs)(U,{children:[(0,n.jsx)(N,{children:(0,n.jsx)(g.Z,{})}),(0,n.jsx)(q,{placeholder:"Search…",inputProps:{"aria-label":"search"}})]}),(0,n.jsx)(i.Z,{sx:{flexGrow:1}}),(0,n.jsxs)(i.Z,{sx:{display:{xs:"none",md:"flex"}},children:[(0,n.jsx)(c.Z,{size:"small",color:"black",children:(0,n.jsx)(u.Z,{color:"error",children:"Your Trips"})}),(0,n.jsx)(c.Z,{size:"small",color:"black",children:(0,n.jsx)(u.Z,{children:"Contact Us"})}),Z?(0,n.jsx)(c.Z,{size:"small",edge:"end","aria-label":"account of current user","aria-controls":_,"aria-haspopup":"true",color:"black",onClick:S,children:Z.fullName}):(0,n.jsx)(c.Z,{size:"small",edge:"end","aria-label":"account of current user","aria-controls":_,"aria-haspopup":"true",color:"black",onClick:R,children:"Login"})]}),(0,n.jsxs)(i.Z,{sx:{display:{xs:"flex",md:"none"}},children:[(0,n.jsx)(c.Z,{size:"large","aria-label":"show more","aria-controls":O,"aria-haspopup":"true",onClick:e=>{l(e.currentTarget)},style:{color:"black"},children:(0,n.jsx)(b.Z,{})}),Z?(0,n.jsx)(c.Z,{size:"small",edge:"end","aria-label":"account of current user","aria-controls":_,"aria-haspopup":"true",color:"black",onClick:S,children:Z.fullName}):(0,n.jsx)(c.Z,{size:"small",edge:"end","aria-label":"account of current user","aria-controls":_,"aria-haspopup":"true",color:"black",onClick:R,children:"Login"})]})]})}),W,D,(0,n.jsxs)(k.Z,{open:p,onClose:T,children:[(0,n.jsx)(v.Z,{children:"Login"}),(0,n.jsxs)(f.Z,{children:[(0,n.jsx)(P,{})," "]}),(0,n.jsx)(m.Z,{children:(0,n.jsx)(w.Z,{onClick:T,color:"primary",children:"Cancel"})})]})]})}}}]);