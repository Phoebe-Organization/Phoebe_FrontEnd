import{_ as E,O as y,Q as j,R as C,T as A,$ as b,U as T,W as k,X as V,r as x,Y as D,u as R,Z as M,P as w,a0 as F,j as N,a1 as $,G as H,s as o}from"./index.a07af031.js";var z=function(r){E(n,r);function n(s,e){var t;return t=r.call(this)||this,t.client=s,t.setOptions(e),t.bindMethods(),t.updateResult(),t}var i=n.prototype;return i.bindMethods=function(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)},i.setOptions=function(e){this.options=this.client.defaultMutationOptions(e)},i.onUnsubscribe=function(){if(!this.listeners.length){var e;(e=this.currentMutation)==null||e.removeObserver(this)}},i.onMutationUpdate=function(e){this.updateResult();var t={listeners:!0};e.type==="success"?t.onSuccess=!0:e.type==="error"&&(t.onError=!0),this.notify(t)},i.getCurrentResult=function(){return this.currentResult},i.reset=function(){this.currentMutation=void 0,this.updateResult(),this.notify({listeners:!0})},i.mutate=function(e,t){return this.mutateOptions=t,this.currentMutation&&this.currentMutation.removeObserver(this),this.currentMutation=this.client.getMutationCache().build(this.client,y({},this.options,{variables:typeof e<"u"?e:this.options.variables})),this.currentMutation.addObserver(this),this.currentMutation.execute()},i.updateResult=function(){var e=this.currentMutation?this.currentMutation.state:j(),t=y({},e,{isLoading:e.status==="loading",isSuccess:e.status==="success",isError:e.status==="error",isIdle:e.status==="idle",mutate:this.mutate,reset:this.reset});this.currentResult=t},i.notify=function(e){var t=this;C.batch(function(){t.mutateOptions&&(e.onSuccess?(t.mutateOptions.onSuccess==null||t.mutateOptions.onSuccess(t.currentResult.data,t.currentResult.variables,t.currentResult.context),t.mutateOptions.onSettled==null||t.mutateOptions.onSettled(t.currentResult.data,null,t.currentResult.variables,t.currentResult.context)):e.onError&&(t.mutateOptions.onError==null||t.mutateOptions.onError(t.currentResult.error,t.currentResult.variables,t.currentResult.context),t.mutateOptions.onSettled==null||t.mutateOptions.onSettled(void 0,t.currentResult.error,t.currentResult.variables,t.currentResult.context))),e.listeners&&t.listeners.forEach(function(p){p(t.currentResult)})})},n}(A);function B(r,n,i){return typeof n=="function"?n.apply(void 0,i):typeof n=="boolean"?n:!!r}function O(r,n,i){var s=b.useRef(!1),e=b.useState(0),t=e[1],p=T(r,n,i),g=k(),u=b.useRef();u.current?u.current.setOptions(p):u.current=new z(g,p);var d=u.current.getCurrentResult();b.useEffect(function(){s.current=!0;var f=u.current.subscribe(C.batchCalls(function(){s.current&&t(function(m){return m+1})}));return function(){s.current=!1,f()}},[]);var h=b.useCallback(function(f,m){u.current.mutate(f,m).catch(V)},[]);if(d.error&&B(void 0,u.current.options.useErrorBoundary,[d.error]))throw d.error;return y({},d,{mutate:h,mutateAsync:d.mutate})}const U=r=>{localStorage.setItem("token",r)},L=()=>{const r={email:"Test",password:"Paperplanes1"},[n,i]=x.exports.useState(r),[s,e]=x.exports.useState(""),{setIsAuthenticated:t}=x.exports.useContext(D),p=a=>{const{name:l,value:v}=a.currentTarget;i({...n,[l]:v})},g=a=>{e(a.message)},u="http://localhost:3000/v1/auth/login",d=R(),{mutate:h,data:f,status:m,isError:S}=O({mutationFn:a=>M.post(u,a),onError:(a,l,v)=>{g(a.response.data),t(!1)},onSuccess:(a,l,v)=>{console.log(a,l,v),U(a.data.tokens.access.token),t(!0),d(w.DASHBOARD)}});return{signIn:()=>{h(n)},signInResponse:f==null?void 0:f.data,signInStatus:m,inputChange:p,signInVals:n,signInError:S,signInErrorMessage:s}},Q=()=>{const r={firstName:"Test",lastName:"Me",email:"test@test.com",userName:"Test",password:"Paperplanes1",cpassword:"Paperplanes1"},[n,i]=x.exports.useState(r),s="http://localhost:3000/v1/auth/register",e=R(),t=c=>{const{name:a,value:l}=c.currentTarget;i({...n,[a]:l})},[p,g]=x.exports.useState(""),u=c=>{g(c.message)},{mutate:d,data:h,status:f,isError:m}=O({mutationFn:c=>M.post(s,c),onError:(c,a,l)=>{u(c.response.data)},onSuccess:(c,a,l)=>{console.log(c,a,l),U(c.data.tokens.access.token),e(w.DASHBOARD)}});return{signUp:()=>{if(n.cpassword!==n.password){g("Passwords do not match");return}const{firstName:c,userName:a,email:l,password:v,lastName:I}=n;d({firstName:c,userName:a,email:l,password:v,lastName:I})},signUpResponse:h==null?void 0:h.data,signUpStatus:f,inputChange:t,signUpVals:n,signUpError:m,signUpErrorMessage:p}},P=x.exports.forwardRef(({bsPrefix:r,variant:n,animation:i="border",size:s,as:e="div",className:t,...p},g)=>{r=F(r,"spinner");const u=`${r}-${i}`;return N(e,{ref:g,...p,className:$(t,u,s&&`${u}-${s}`,n&&`text-${n}`)})});P.displayName="Spinner";function W(r){return H({tag:"svg",attr:{version:"1.1",x:"0px",y:"0px",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"path",attr:{fill:"#FFC107",d:`M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12\r
	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24\r
	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z`}},{tag:"path",attr:{fill:"#FF3D00",d:`M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657\r
	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z`}},{tag:"path",attr:{fill:"#4CAF50",d:`M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36\r
	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z`}},{tag:"path",attr:{fill:"#1976D2",d:`M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571\r
	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z`}}]})(r)}const _=o.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  max-height: 100vh;
`,q=o.div`
  width: 50%;
  margin-bottom: 5em;
  margin-top: 2em;
  height: 100%;
`,X=o.div`
  margin-top: 2em;
  width: 50%;
`;o.div`
  outline: none;
  border: none;
  background-color: transparent;
  display: flex;
  margin-left: 3em;
  :hover {
    outline: none;
    border: none;
  }
`;const Y=o.div`
  min-height: 600px;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
`,Z=o.div`
  min-height: 800px;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
`,J=o.div`
  position: relative;
  width: 50%;
  overflow: hidden;
  max-height: 100vh;
  display: flex;
  justify-content: flex-end;
`,K=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
`,tt=o.h1`
  font-family: Dancing Script, cursive;
  margin: 10px 0;
`,et=o.h4`
  font-family: Times New Roman, Times, serif;
  color: #a3a3a3;
  font-size: 20px;
  letter-spacing: -1px;
  span {
    font-family: Dancing Script, cursive;
  }
`;o.span`
  font-family: Dancing Script, cursive;
`;const nt=o.div`
  color: red;
  width: 300px;
  display: flex;
  margin: auto;
`,st=o.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  button {
    margin: 10px 0;
  }
`,rt=o.button(({fontSize:r,color:n="inherit"})=>`
  width: 350px;
  display:flex;
  align-items: center;
  justify-content: center;
  background-color: #f2f9ff;
  margin: 10px 0;
  :hover {
    color: #9797f1;
  }
  span {
    margin: 0px 5px;
    svg {
      font-size: ${r};
      color: ${n};
    }
  }
`),it=o.video`
  position: fixed;
  top: 0;
  background-size: cover;
  height: 100%;
  background-position: center;
  width: 50vw;
  object-fit: cover;
  overflow: hidden;
`,ot=o.div`
  margin: 20px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  span {
    width: 140px;
    height: 1px;
    background-color: #cfcfcf;
    margin: 0px 10px;
  }
  p {
    margin: 0px;
    font-size: 10px;
  }
`,at=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 4em;
  div {
    margin: 10px 0;
  }
`;o.div`
  display: flex;
  justify-content: space-evenly;
`;const ut=o.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1em;
  margin-bottom: 10em;
`;export{_ as A,st as B,rt as C,ot as D,nt as E,W as F,X as S,K as T,it as V,Y as a,tt as b,et as c,P as d,ut as e,J as f,Q as g,q as h,Z as i,at as j,L as u};
