/*! For license information please see main.1ea78677.js.LICENSE.txt */
  :root,
  :host {
    --chakra-vh: 100vh;
  }

  @supports (height: -webkit-fill-available) {
    :root,
    :host {
      --chakra-vh: -webkit-fill-available;
    }
  }

  @supports (height: -moz-fill-available) {
    :root,
    :host {
      --chakra-vh: -moz-fill-available;
    }
  }

  @supports (height: 100dvh) {
    :root,
    :host {
      --chakra-vh: 100dvh;
    }
  }
`,pFe=()=>(0,Yt.jsx)(fv.mL,{styles:hFe}),gFe=e=>{let{scope:t=""}=e;return(0,Yt.jsx)(fv.mL,{styles:dFe`
      html {
        line-height: 1.5;
        -webkit-text-size-adjust: 100%;
        font-family: system-ui, sans-serif;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        -moz-osx-font-smoothing: grayscale;
        touch-action: manipulation;
      }

      body {
        position: relative;
        min-height: 100%;
        margin: 0;
        font-feature-settings: "kern";
      }

      ${t} :where(*, *::before, *::after) {
        border-width: 0;
        border-style: solid;
        box-sizing: border-box;
        word-wrap: break-word;
      }

      main {
        display: block;
      }

      ${t} hr {
        border-top-width: 1px;
        box-sizing: content-box;
        height: 0;
        overflow: visible;
      }

      ${t} :where(pre, code, kbd,samp) {
        font-family: SFMono-Regular, Menlo, Monaco, Consolas, monospace;
        font-size: 1em;
      }

      ${t} a {
        background-color: transparent;
        color: inherit;
        text-decoration: inherit;
      }

      ${t} abbr[title] {
        border-bottom: none;
        text-decoration: underline;
        -webkit-text-decoration: underline dotted;
        text-decoration: underline dotted;
      }

      ${t} :where(b, strong) {
        font-weight: bold;
      }

      ${t} small {
        font-size: 80%;
      }

      ${t} :where(sub,sup) {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
      }

      ${t} sub {
        bottom: -0.25em;
      }

      ${t} sup {
        top: -0.5em;
      }

      ${t} img {
        border-style: none;
      }

      ${t} :where(button, input, optgroup, select, textarea) {
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
      }

      ${t} :where(button, input) {
        overflow: visible;
      }

      ${t} :where(button, select) {
        text-transform: none;
      }

      ${t} :where(
          button::-moz-focus-inner,
          [type="button"]::-moz-focus-inner,
          [type="reset"]::-moz-focus-inner,
          [type="submit"]::-moz-focus-inner
        ) {
        border-style: none;
        padding: 0;
      }

      ${t} fieldset {
        padding: 0.35em 0.75em 0.625em;
      }

      ${t} legend {
        box-sizing: border-box;
        color: inherit;
        display: table;
        max-width: 100%;
        padding: 0;
        white-space: normal;
      }

      ${t} progress {
        vertical-align: baseline;
      }

      ${t} textarea {
        overflow: auto;
      }

      ${t} :where([type="checkbox"], [type="radio"]) {
        box-sizing: border-box;
        padding: 0;
      }

      ${t} input[type="number"]::-webkit-inner-spin-button,
      ${t} input[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none !important;
      }

      ${t} input[type="number"] {
        -moz-appearance: textfield;
      }

      ${t} input[type="search"] {
        -webkit-appearance: textfield;
        outline-offset: -2px;
      }

      ${t} input[type="search"]::-webkit-search-decoration {
        -webkit-appearance: none !important;
      }

      ${t} ::-webkit-file-upload-button {
        -webkit-appearance: button;
        font: inherit;
      }

      ${t} details {
        display: block;
      }

      ${t} summary {
        display: list-item;
      }

      template {
        display: none;
      }

      [hidden] {
        display: none !important;
      }

      ${t} :where(
          blockquote,
          dl,
          dd,
          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          hr,
          figure,
          p,
          pre
        ) {
        margin: 0;
      }

      ${t} button {
        background: transparent;
        padding: 0;
      }

      ${t} fieldset {
        margin: 0;
        padding: 0;
      }

      ${t} :where(ol, ul) {
        margin: 0;
        padding: 0;
      }

      ${t} textarea {
        resize: vertical;
      }

      ${t} :where(button, [role="button"]) {
        cursor: pointer;
      }

      ${t} button::-moz-focus-inner {
        border: 0 !important;
      }

      ${t} table {
        border-collapse: collapse;
      }

      ${t} :where(h1, h2, h3, h4, h5, h6) {
        font-size: inherit;
        font-weight: inherit;
      }

      ${t} :where(button, input, optgroup, select, textarea) {
        padding: 0;
        line-height: inherit;
        color: inherit;
      }

      ${t} :where(img, svg, video, canvas, audio, iframe, embed, object) {
        display: block;
      }

      ${t} :where(img, video) {
        max-width: 100%;
        height: auto;
      }

      [data-js-focus-visible]
        :focus:not([data-focus-visible-added]):not(
          [data-focus-visible-disabled]
        ) {
        outline: none;
        box-shadow: none;
      }

      ${t} select::-ms-expand {
        display: none;
      }

      ${hFe}
    `})};function mFe(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const{stop:r,getKey:i}=n;return function e(n){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if(sn(n)||Array.isArray(n)){const o={};for(const[s,l]of Object.entries(n)){const u=i?.(s)??s,c=[...a,u];if(r?.(n,c))return t(n,a);o[u]=e(l,c)}return o}return t(n,a)}(e)}const yFe=["colors","borders","borderWidths","borderStyles","fonts","fontSizes","fontWeights","gradients","letterSpacings","lineHeights","radii","space","shadows","sizes","zIndices","transition","blur","breakpoints"];function vFe(e){return TP(e,yFe)}function bFe(e,t){return qP(String(e).replace(/\./g,"-"),void 0,t)}function xFe(e){const t=function(e){const t=vFe(e),n=function(e){return e.semanticTokens}(e),r=qn(e),i=e=>r.includes(e)||"default"===e,a={};return mFe(t,((e,t)=>{null!=e&&(a[t.join(".")]={isSemantic:!1,value:e})})),mFe(n,((e,t)=>{null!=e&&(a[t.join(".")]={isSemantic:!0,value:e})}),{stop:e=>Object.keys(e).every(i)}),a}(e),n=e.config?.cssVarPrefix,r=Wn(e);let i={};const a={};function o(e,r){const i=[String(e).split(".")[0],r].join(".");if(!t[i])return r;const{reference:a}=bFe(i,n);return a}for(const[s,l]of Object.entries(t)){const{isSemantic:e,value:t}=l,{variable:u,reference:c}=bFe(s,n);if(!e){if(s.startsWith("space")){const e=s.split("."),[n,...r]=e,i=`${n}.-${r.join(".")}`,o=_ze.negate(t),l=_ze.negate(c);a[i]={value:o,var:u,varRef:l}}i[u]=t,a[s]={value:t,var:u,varRef:c};continue}const f=sn(t)?t:{default:t};i=yn(i,Object.entries(f).reduce(((e,t)=>{let[n,i]=t;if(!i)return e;const a=o(s,`${i}`);if("default"===n)return e[u]=a,e;return e[r?.[n]??n]={[u]:a},e}),{})),a[s]={value:c,var:u,varRef:c}}return{cssVars:i,cssMap:a}}function wFe(e){const t=function(e){const{__cssMap:t,__cssVars:n,__breakpoints:r,...i}=e;return i}(e),{cssMap:n,cssVars:r}=xFe(t),i=(e=>{const t=Wn(e),n={...Er,...t};return e=>Object.hasOwnProperty.call(n,e)})(t);return Object.assign(t,{__cssVars:{"--chakra-ring-inset":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-ring-offset-width":"0px","--chakra-ring-offset-color":"#fff","--chakra-ring-color":"rgba(66, 153, 225, 0.6)","--chakra-ring-offset-shadow":"0 0 #0000","--chakra-ring-shadow":"0 0 #0000","--chakra-space-x-reverse":"0","--chakra-space-y-reverse":"0",...r},__cssMap:n,__breakpoints:gn(t.breakpoints),__isStyleProp:i}),t}function SFe(e){const{cssVarsRoot:t,theme:n,children:r}=e,i=(0,m.useMemo)((()=>wFe(n)),[n]);return(0,Yt.jsxs)(_n.a,{theme:i,children:[(0,Yt.jsx)(_Fe,{root:t}),r]})}function _Fe(e){let{root:t=":host, :root"}=e;const n=[t,"[data-theme]"].join(",");return(0,Yt.jsx)(fv.mL,{styles:e=>({[n]:e.__cssVars})})}const[MFe,CFe]=rn({name:"StylesContext",errorMessage:"useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` "});function kFe(){const{colorMode:e}=kn();return(0,Yt.jsx)(fv.mL,{styles:t=>{const n=mn(xn(t,"styles.global"),{theme:t,colorMode:e});if(!n)return;return Br(n)(t)}})}const LFe=(0,m.createContext)({getDocument:()=>document,getWindow:()=>window});function AFe(e){const{children:t,environment:n,disabled:r}=e,i=(0,m.useRef)(null),a=(0,m.useMemo)((()=>n||{getDocument:()=>i.current?.ownerDocument??document,getWindow:()=>i.current?.ownerDocument.defaultView??window}),[n]),o=!r||!n;return(0,Yt.jsxs)(LFe.Provider,{value:a,children:[t,o&&(0,Yt.jsx)("span",{id:"__chakra_env",hidden:!0,ref:i})]})}LFe.displayName="EnvironmentContext",AFe.displayName="EnvironmentProvider";const TFe=e=>{const{children:t,colorModeManager:n,portalZIndex:r,resetScope:i,resetCSS:a=!0,theme:o={},environment:s,cssVarsRoot:l,disableEnvironment:u,disableGlobalStyle:c}=e,f=(0,Yt.jsx)(AFe,{environment:s,disabled:u,children:t});return(0,Yt.jsx)(SFe,{theme:o,cssVarsRoot:l,children:(0,Yt.jsxs)(fFe,{colorModeManager:n,options:o.config,children:[a?(0,Yt.jsx)(gFe,{scope:i}):(0,Yt.jsx)(pFe,{}),!c&&(0,Yt.jsx)(kFe,{}),r?(0,Yt.jsx)(Np,{zIndex:r,children:f}):f]})})};const NFe=(e,t)=>e.find((e=>e.id===t));function jFe(e,t){const n=IFe(e,t);return{position:n,index:n?e[n].findIndex((e=>e.id===t)):-1}}function IFe(e,t){for(const[n,r]of Object.entries(e))if(NFe(r,t))return n}function EFe(e){return{position:"fixed",zIndex:"var(--toast-z-index, 5500)",pointerEvents:"none",display:"flex",flexDirection:"column",margin:"top"===e||"bottom"===e?"0 auto":void 0,top:e.includes("top")?"env(safe-area-inset-top, 0px)":void 0,bottom:e.includes("bottom")?"env(safe-area-inset-bottom, 0px)":void 0,right:e.includes("left")?void 0:"env(safe-area-inset-right, 0px)",left:e.includes("right")?void 0:"env(safe-area-inset-left, 0px)"}}const PFe={initial:e=>{const{position:t}=e,n=["top","bottom"].includes(t)?"y":"x";let r=["top-right","bottom-right"].includes(t)?1:-1;return"bottom"===t&&(r=1),{opacity:0,[n]:24*r}},animate:{opacity:1,y:0,x:0,scale:1,transition:{duration:.4,ease:[.4,0,.2,1]}},exit:{opacity:0,scale:.85,transition:{duration:.2,ease:[.4,0,1,1]}}},DFe=(0,m.memo)((e=>{const{id:t,message:n,onCloseComplete:r,onRequestRemove:i,requestClose:a=!1,position:o="bottom",duration:s=5e3,containerStyle:l,motionVariants:u=PFe,toastSpacing:c="0.5rem"}=e,[f,d]=(0,m.useState)(s),h=ju();mI((()=>{h||r?.()}),[h]),mI((()=>{d(s)}),[s]);const p=()=>{h&&i()};(0,m.useEffect)((()=>{h&&a&&i()}),[h,a,i]),function(e,t){const n=ai(e);(0,m.useEffect)((()=>{if(null==t)return;let e=null;return e=window.setTimeout((()=>{n()}),t),()=>{e&&window.clearTimeout(e)}}),[t,n])}(p,f);const g=(0,m.useMemo)((()=>({pointerEvents:"auto",maxWidth:560,minWidth:300,margin:c,...l})),[l,c]),y=(0,m.useMemo)((()=>function(e){let t="center";return e.includes("right")&&(t="flex-end"),e.includes("left")&&(t="flex-start"),{display:"flex",flexDirection:"column",alignItems:t}}(o)),[o]);return(0,Yt.jsx)(yd.div,{layout:!0,className:"chakra-toast",variants:u,initial:"initial",animate:"animate",exit:"exit",onHoverStart:()=>d(null),onHoverEnd:()=>d(s),custom:{position:o},style:y,children:(0,Yt.jsx)(Zr.div,{role:"status","aria-atomic":"true",className:"chakra-toast__inner",__css:g,children:mn(n,{id:t,onClose:p})})})}));function OFe(e){return(0,Yt.jsx)(nv,{viewBox:"0 0 24 24",...e,children:(0,Yt.jsx)("path",{fill:"currentColor",d:"M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"})})}DFe.displayName="ToastComponent";const[RFe,zFe]=rn({name:"AlertContext",hookName:"useAlertContext",providerName:"<Alert />"}),[BFe,FFe]=rn({name:"AlertStylesContext",hookName:"useAlertStyles",providerName:"<Alert />"}),VFe={info:{icon:function(e){return(0,Yt.jsx)(nv,{viewBox:"0 0 24 24",...e,children:(0,Yt.jsx)("path",{fill:"currentColor",d:"M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z"})})},colorScheme:"blue"},warning:{icon:OFe,colorScheme:"orange"},success:{icon:function(e){return(0,Yt.jsx)(nv,{viewBox:"0 0 24 24",...e,children:(0,Yt.jsx)("path",{fill:"currentColor",d:"M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"})})},colorScheme:"green"},error:{icon:OFe,colorScheme:"red"},loading:{icon:hv,colorScheme:"blue"}};const HFe=an((function(e,t){const{status:n="info",addRole:r=!0,...i}=$t(e),a=e.colorScheme??function(e){return VFe[e].colorScheme}(n),o=Nn("Alert",{...e,colorScheme:a}),s={width:"100%",display:"flex",alignItems:"center",position:"relative",overflow:"hidden",...o.container};return(0,Yt.jsx)(RFe,{value:{status:n},children:(0,Yt.jsx)(BFe,{value:o,children:(0,Yt.jsx)(Zr.div,{"data-status":n,role:r?"alert":void 0,ref:t,...i,className:Kt("chakra-alert",e.className),__css:s})})})}));function GFe(e){const{status:t}=zFe(),n=function(e){return VFe[e].icon}(t),r=FFe(),i="loading"===t?r.spinner:r.icon;return(0,Yt.jsx)(Zr.span,{display:"inherit","data-status":t,...e,className:Kt("chakra-alert__icon",e.className),__css:i,children:e.children||(0,Yt.jsx)(n,{h:"100%",w:"100%"})})}HFe.displayName="Alert",GFe.displayName="AlertIcon";const UFe=an((function(e,t){const n=FFe(),{status:r}=zFe();return(0,Yt.jsx)(Zr.div,{ref:t,"data-status":r,...e,className:Kt("chakra-alert__title",e.className),__css:n.title})}));UFe.displayName="AlertTitle";const WFe=an((function(e,t){const{status:n}=zFe(),r={display:"inline",...FFe().description};return(0,Yt.jsx)(Zr.div,{ref:t,"data-status":n,...e,className:Kt("chakra-alert__desc",e.className),__css:r})}));WFe.displayName="AlertDescription";const qFe=e=>{const{status:t,variant:n="solid",id:r,title:i,isClosable:a,onClose:o,description:s,colorScheme:l,icon:u}=e,c=r?{root:`toast-${r}`,title:`toast-${r}-title`,description:`toast-${r}-description`}:void 0;return(0,Yt.jsxs)(HFe,{addRole:!1,status:t,variant:n,id:c?.root,alignItems:"start",borderRadius:"md",boxShadow:"lg",paddingEnd:8,textAlign:"start",width:"auto",colorScheme:l,children:[(0,Yt.jsx)(GFe,{children:u}),(0,Yt.jsxs)(Zr.div,{flex:"1",maxWidth:"100%",children:[i&&(0,Yt.jsx)(UFe,{id:c?.title,children:i}),s&&(0,Yt.jsx)(WFe,{id:c?.description,display:"block",children:s})]}),a&&(0,Yt.jsx)(iv,{size:"sm",onClick:o,position:"absolute",insetEnd:1,top:1})]})};function YFe(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{render:t,toastComponent:n=qFe}=e;return r=>"function"===typeof t?t({...r,...e}):(0,Yt.jsx)(n,{...r,...e})}const ZFe=function(e){let t=e;const n=new Set,r=e=>{t=e(t),n.forEach((e=>e()))};return{getState:()=>t,subscribe:t=>(n.add(t),()=>{r((()=>e)),n.delete(t)}),removeToast:(e,t)=>{r((n=>({...n,[t]:n[t].filter((t=>t.id!=e))})))},notify:(e,t)=>{const n=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};$Fe+=1;const n=t.id??$Fe,r=t.position??"bottom";return{id:n,message:e,position:r,duration:t.duration,onCloseComplete:t.onCloseComplete,onRequestRemove:()=>ZFe.removeToast(String(n),r),status:t.status,requestClose:!1,containerStyle:t.containerStyle}}(e,t),{position:i,id:a}=n;return r((e=>{const t=i.includes("top")?[n,...e[i]??[]]:[...e[i]??[],n];return{...e,[i]:t}})),a},update:(e,t)=>{e&&r((n=>{const r={...n},{position:i,index:a}=jFe(r,e);return i&&-1!==a&&(r[i][a]={...r[i][a],...t,message:YFe(t)}),r}))},closeAll:function(){let{positions:e}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};r((t=>(e??["bottom","bottom-right","bottom-left","top","top-left","top-right"]).reduce(((e,n)=>(e[n]=t[n].map((e=>({...e,requestClose:!0}))),e)),{...t})))},close:e=>{r((t=>{const n=IFe(t,e);return n?{...t,[n]:t[n].map((t=>t.id==e?{...t,requestClose:!0}:t))}:t}))},isActive:e=>Boolean(jFe(ZFe.getState(),e).position)}}({top:[],"top-left":[],"top-right":[],"bottom-left":[],bottom:[],"bottom-right":[]});let $Fe=0;const[KFe,QFe]=rn({name:"ToastOptionsContext",strict:!1}),JFe=e=>{const t=(0,m.useSyncExternalStore)(ZFe.subscribe,ZFe.getState,ZFe.getState),{motionVariants:n,component:r=DFe,portalProps:i,animatePresenceProps:a}=e,o=Object.keys(t).map((e=>{const i=t[e];return(0,Yt.jsx)("div",{role:"region","aria-live":"polite","aria-label":`Notifications-${e}`,id:`chakra-toast-manager-${e}`,style:EFe(e),children:(0,Yt.jsx)(fp,{...a,initial:!1,children:i.map((e=>(0,Yt.jsx)(r,{motionVariants:n,...e},e.id)))})},e)}));return(0,Yt.jsx)(Rp,{...i,children:o})},XFe=(eVe=eFe,function(e){let{children:t,theme:n=eVe,toastOptions:r,...i}=e;return(0,Yt.jsxs)(TFe,{theme:n,...i,children:[(0,Yt.jsx)(KFe,{value:r?.defaultOptions,children:t}),(0,Yt.jsx)(JFe,{...r})]})});var eVe,tVe=class extends eD{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};super(),this.config=e,this.#O=new Map}#O;build(e,t,n){const r=t.queryKey,i=t.queryHash??uD(r,t);let a=this.get(i);return a||(a=new ID({cache:this,queryKey:r,queryHash:i,options:e.defaultQueryOptions(t),state:n,defaultOptions:e.getQueryDefaults(r)}),this.add(a)),a}add(e){this.#O.has(e.queryHash)||(this.#O.set(e.queryHash,e),this.notify({type:"added",query:e}))}remove(e){const t=this.#O.get(e.queryHash);t&&(e.destroy(),t===e&&this.#O.delete(e.queryHash),this.notify({type:"removed",query:e}))}clear(){_D.batch((()=>{this.getAll().forEach((e=>{this.remove(e)}))}))}get(e){return this.#O.get(e)}getAll(){return[...this.#O.values()]}find(e){const t={exact:!0,...e};return this.getAll().find((e=>sD(t,e)))}findAll(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t=this.getAll();return Object.keys(e).length>0?t.filter((t=>sD(e,t))):t}notify(e){_D.batch((()=>{this.listeners.forEach((t=>{t(e)}))}))}onFocus(){_D.batch((()=>{this.getAll().forEach((e=>{e.onFocus()}))}))}onOnline(){_D.batch((()=>{this.getAll().forEach((e=>{e.onOnline()}))}))}},nVe=class extends jD{#R;#z;#l;constructor(e){super(),this.mutationId=e.mutationId,this.#z=e.mutationCache,this.#R=[],this.state=e.state||{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0},this.setOptions(e.options),this.scheduleGc()}setOptions(e){this.options=e,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(e){this.#R.includes(e)||(this.#R.push(e),this.clearGcTimeout(),this.#z.notify({type:"observerAdded",mutation:this,observer:e}))}removeObserver(e){this.#R=this.#R.filter((t=>t!==e)),this.scheduleGc(),this.#z.notify({type:"observerRemoved",mutation:this,observer:e})}optionalRemove(){this.#R.length||("pending"===this.state.status?this.scheduleGc():this.#z.remove(this))}continue(){return this.#l?.continue()??this.execute(this.state.variables)}async execute(e){this.#l=ND({fn:()=>this.options.mutationFn?this.options.mutationFn(e):Promise.reject(new Error("No mutationFn found")),onFail:(e,t)=>{this.#f({type:"failed",failureCount:e,error:t})},onPause:()=>{this.#f({type:"pause"})},onContinue:()=>{this.#f({type:"continue"})},retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>this.#z.canRun(this)});const t="pending"===this.state.status,n=!this.#l.canStart();try{if(!t){this.#f({type:"pending",variables:e,isPaused:n}),await(this.#z.config.onMutate?.(e,this));const t=await(this.options.onMutate?.(e));t!==this.state.context&&this.#f({type:"pending",context:t,variables:e,isPaused:n})}const r=await this.#l.start();return await(this.#z.config.onSuccess?.(r,e,this.state.context,this)),await(this.options.onSuccess?.(r,e,this.state.context)),await(this.#z.config.onSettled?.(r,null,this.state.variables,this.state.context,this)),await(this.options.onSettled?.(r,null,e,this.state.context)),this.#f({type:"success",data:r}),r}catch(r){try{throw await(this.#z.config.onError?.(r,e,this.state.context,this)),await(this.options.onError?.(r,e,this.state.context)),await(this.#z.config.onSettled?.(void 0,r,this.state.variables,this.state.context,this)),await(this.options.onSettled?.(void 0,r,e,this.state.context)),r}finally{this.#f({type:"error",error:r})}}finally{this.#z.runNext(this)}}#f(e){this.state=(t=>{switch(e.type){case"failed":return{...t,failureCount:e.failureCount,failureReason:e.error};case"pause":return{...t,isPaused:!0};case"continue":return{...t,isPaused:!1};case"pending":return{...t,context:e.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:e.isPaused,status:"pending",variables:e.variables,submittedAt:Date.now()};case"success":return{...t,data:e.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...t,data:void 0,error:e.error,failureCount:t.failureCount+1,failureReason:e.error,isPaused:!1,status:"error"}}})(this.state),_D.batch((()=>{this.#R.forEach((t=>{t.onMutationUpdate(e)})),this.#z.notify({mutation:this,type:"updated",action:e})}))}};var rVe=class extends eD{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};super(),this.config=e,this.#B=new Map,this.#F=Date.now()}#B;#F;build(e,t,n){const r=new nVe({mutationCache:this,mutationId:++this.#F,options:e.defaultMutationOptions(t),state:n});return this.add(r),r}add(e){const t=iVe(e),n=this.#B.get(t)??[];n.push(e),this.#B.set(t,n),this.notify({type:"added",mutation:e})}remove(e){const t=iVe(e);if(this.#B.has(t)){const n=this.#B.get(t)?.filter((t=>t!==e));n&&(0===n.length?this.#B.delete(t):this.#B.set(t,n))}this.notify({type:"removed",mutation:e})}canRun(e){const t=this.#B.get(iVe(e))?.find((e=>"pending"===e.state.status));return!t||t===e}runNext(e){const t=this.#B.get(iVe(e))?.find((t=>t!==e&&t.state.isPaused));return t?.continue()??Promise.resolve()}clear(){_D.batch((()=>{this.getAll().forEach((e=>{this.remove(e)}))}))}getAll(){return[...this.#B.values()].flat()}find(e){const t={exact:!0,...e};return this.getAll().find((e=>lD(t,e)))}findAll(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.getAll().filter((t=>lD(e,t)))}notify(e){_D.batch((()=>{this.listeners.forEach((t=>{t(e)}))}))}resumePausedMutations(){const e=this.getAll().filter((e=>e.state.isPaused));return _D.batch((()=>Promise.all(e.map((e=>e.continue().catch(nD))))))}};function iVe(e){return e.options.scope?.id??String(e.mutationId)}function aVe(e){return{onFetch:(t,n)=>{const r=t.options,i=t.fetchOptions?.meta?.fetchMore?.direction,a=t.state.data?.pages||[],o=t.state.data?.pageParams||[];let s={pages:[],pageParams:[]},l=0;const u=async()=>{let n=!1;const u=wD(t.options,t.fetchOptions),c=async(e,r,i)=>{if(n)return Promise.reject();if(null==r&&e.pages.length)return Promise.resolve(e);const a={queryKey:t.queryKey,pageParam:r,direction:i?"backward":"forward",meta:t.options.meta};(e=>{Object.defineProperty(e,"signal",{enumerable:!0,get:()=>(t.signal.aborted?n=!0:t.signal.addEventListener("abort",(()=>{n=!0})),t.signal)})})(a);const o=await u(a),{maxPages:s}=t.options,l=i?bD:vD;return{pages:l(e.pages,o,s),pageParams:l(e.pageParams,r,s)}};if(i&&a.length){const e="backward"===i,t={pages:a,pageParams:o},n=(e?sVe:oVe)(r,t);s=await c(t,n,e)}else{const t=e??a.length;do{const e=0===l?o[0]??r.initialPageParam:oVe(r,s);if(l>0&&null==e)break;s=await c(s,e),l++}while(l<t)}return s};t.options.persister?t.fetchFn=()=>t.options.persister?.(u,{queryKey:t.queryKey,meta:t.options.meta,signal:t.signal},n):t.fetchFn=u}}}function oVe(e,t){let{pages:n,pageParams:r}=t;const i=n.length-1;return n.length>0?e.getNextPageParam(n[i],n,r[i],r):void 0}function sVe(e,t){let{pages:n,pageParams:r}=t;return n.length>0?e.getPreviousPageParam?.(n[0],n,r[0],r):void 0}const lVe=new class{#V;#z;#u;#H;#G;#U;#W;#q;constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.#V=e.queryCache||new tVe,this.#z=e.mutationCache||new rVe,this.#u=e.defaultOptions||{},this.#H=new Map,this.#G=new Map,this.#U=0}mount(){this.#U++,1===this.#U&&(this.#W=SD.subscribe((async e=>{e&&(await this.resumePausedMutations(),this.#V.onFocus())})),this.#q=MD.subscribe((async e=>{e&&(await this.resumePausedMutations(),this.#V.onOnline())})))}unmount(){this.#U--,0===this.#U&&(this.#W?.(),this.#W=void 0,this.#q?.(),this.#q=void 0)}isFetching(e){return this.#V.findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return this.#z.findAll({...e,status:"pending"}).length}getQueryData(e){const t=this.defaultQueryOptions({queryKey:e});return this.#V.get(t.queryHash)?.state.data}ensureQueryData(e){const t=this.getQueryData(e.queryKey);if(void 0===t)return this.fetchQuery(e);{const n=this.defaultQueryOptions(e),r=this.#V.build(this,n);return e.revalidateIfStale&&r.isStaleByTime(aD(n.staleTime,r))&&this.prefetchQuery(n),Promise.resolve(t)}}getQueriesData(e){return this.#V.findAll(e).map((e=>{let{queryKey:t,state:n}=e;return[t,n.data]}))}setQueryData(e,t,n){const r=this.defaultQueryOptions({queryKey:e}),i=this.#V.get(r.queryHash),a=i?.state.data,o=function(e,t){return"function"===typeof e?e(t):e}(t,a);if(void 0!==o)return this.#V.build(this,r).setData(o,{...n,manual:!0})}setQueriesData(e,t,n){return _D.batch((()=>this.#V.findAll(e).map((e=>{let{queryKey:r}=e;return[r,this.setQueryData(r,t,n)]}))))}getQueryState(e){const t=this.defaultQueryOptions({queryKey:e});return this.#V.get(t.queryHash)?.state}removeQueries(e){const t=this.#V;_D.batch((()=>{t.findAll(e).forEach((e=>{t.remove(e)}))}))}resetQueries(e,t){const n=this.#V,r={type:"active",...e};return _D.batch((()=>(n.findAll(e).forEach((e=>{e.reset()})),this.refetchQueries(r,t))))}cancelQueries(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t={revert:!0,...arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}},n=_D.batch((()=>this.#V.findAll(e).map((e=>e.cancel(t)))));return Promise.all(n).then(nD).catch(nD)}invalidateQueries(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return _D.batch((()=>{if(this.#V.findAll(e).forEach((e=>{e.invalidate()})),"none"===e.refetchType)return Promise.resolve();const n={...e,type:e.refetchType??e.type??"active"};return this.refetchQueries(n,t)}))}refetchQueries(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;const n={...t,cancelRefetch:t?.cancelRefetch??!0},r=_D.batch((()=>this.#V.findAll(e).filter((e=>!e.isDisabled())).map((e=>{let t=e.fetch(void 0,n);return n.throwOnError||(t=t.catch(nD)),"paused"===e.state.fetchStatus?Promise.resolve():t}))));return Promise.all(r).then(nD)}fetchQuery(e){const t=this.defaultQueryOptions(e);void 0===t.retry&&(t.retry=!1);const n=this.#V.build(this,t);return n.isStaleByTime(aD(t.staleTime,n))?n.fetch(t):Promise.resolve(n.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(nD).catch(nD)}fetchInfiniteQuery(e){return e.behavior=aVe(e.pages),this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(nD).catch(nD)}ensureInfiniteQueryData(e){return e.behavior=aVe(e.pages),this.ensureQueryData(e)}resumePausedMutations(){return MD.isOnline()?this.#z.resumePausedMutations():Promise.resolve()}getQueryCache(){return this.#V}getMutationCache(){return this.#z}getDefaultOptions(){return this.#u}setDefaultOptions(e){this.#u=e}setQueryDefaults(e,t){this.#H.set(cD(e),{queryKey:e,defaultOptions:t})}getQueryDefaults(e){const t=[...this.#H.values()];let n={};return t.forEach((t=>{fD(e,t.queryKey)&&(n={...n,...t.defaultOptions})})),n}setMutationDefaults(e,t){this.#G.set(cD(e),{mutationKey:e,defaultOptions:t})}getMutationDefaults(e){const t=[...this.#G.values()];let n={};return t.forEach((t=>{fD(e,t.mutationKey)&&(n={...n,...t.defaultOptions})})),n}defaultQueryOptions(e){if(e._defaulted)return e;const t={...this.#u.queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return t.queryHash||(t.queryHash=uD(t.queryKey,t)),void 0===t.refetchOnReconnect&&(t.refetchOnReconnect="always"!==t.networkMode),void 0===t.throwOnError&&(t.throwOnError=!!t.suspense),!t.networkMode&&t.persister&&(t.networkMode="offlineFirst"),!0!==t.enabled&&t.queryFn===xD&&(t.enabled=!1),t}defaultMutationOptions(e){return e?._defaulted?e:{...this.#u.mutations,...e?.mutationKey&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){this.#V.clear(),this.#z.clear()}},uVe=e=>{let{children:t}=e;return(0,Yt.jsx)(FD,{client:lVe,children:(0,Yt.jsx)(Vk,{children:(0,Yt.jsx)(qk,{children:(0,Yt.jsx)(XFe,{children:(0,Yt.jsx)(VR,{children:t})})})})})};v.createRoot(document.getElementById("root")).render((0,Yt.jsx)(Sk,{children:(0,Yt.jsxs)(m.StrictMode,{children:[(0,Yt.jsx)(uVe,{children:(0,Yt.jsx)(UEe,{})}),(0,Yt.jsx)(JC,{position:"top-center"})]})}))})()})();
//# sourceMappingURL=main.1ea78677.js.map