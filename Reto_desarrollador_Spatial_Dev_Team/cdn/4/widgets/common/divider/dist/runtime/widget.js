System.register(["jimu-core"],(function(t,e){var o={};return{setters:[function(t){o.AppMode=t.AppMode,o.BrowserSizeMode=t.BrowserSizeMode,o.Immutable=t.Immutable,o.React=t.React,o.appActions=t.appActions,o.classNames=t.classNames,o.css=t.css,o.jsx=t.jsx}],execute:function(){t((()=>{var t={79244:t=>{"use strict";t.exports=o}},e={};function i(o){var n=e[o];if(void 0!==n)return n.exports;var r=e[o]={exports:{}};return t[o](r,r.exports,i),r.exports}i.d=(t,e)=>{for(var o in e)i.o(e,o)&&!i.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),i.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.p="";var n={};return i.p=window.jimuConfig.baseUrl,(()=>{"use strict";i.r(n),i.d(n,{Widget:()=>$,__set_webpack_public_path__:()=>g,default:()=>h});var t,e,o,r,s,l=i(79244);function a(t,e=1.5,o=null){if(!t)return"0px";const i=o?Number(o.split("px")[0]):0;let n=Number(t.split("px")[0]);return n=i>n?i:n,n*e<1?"1px":`${Math.round(n*e)}px`}!function(t){t.Regular="REGULAR",t.Hover="HOVER"}(t||(t={})),function(t){t.Horizontal="Horizontal",t.Vertical="Vertical"}(e||(e={})),function(t){t.Style0="Style0",t.Style1="Style1",t.Style2="Style2",t.Style3="Style3",t.Style4="Style4",t.Style5="Style5",t.Style6="Style6",t.Style7="Style7",t.Style8="Style8",t.Style9="Style9",t.Style10="Style10"}(o||(o={})),function(t){t.None="None",t.Point0="Point0",t.Point1="Point1",t.Point2="Point2",t.Point3="Point3",t.Point4="Point4",t.Point5="Point5",t.Point6="Point6",t.Point7="Point7",t.Point8="Point8"}(r||(r={})),function(t){t.None="None",t.Default="Default",t.Style1="Style1",t.Style2="Style2",t.Style3="Style3",t.Style4="Style4",t.Style5="Style5",t.Style6="Style6",t.Style7="Style7",t.Style8="Style8",t.Style9="Style9",t.Style10="Style10",t.Style11="Style11",t.Style12="Style12",t.Style13="Style13",t.Style14="Style14",t.Style15="Style15",t.Style16="Style16",t.Style17="Style17",t.Style18="Style18",t.Style19="Style19"}(s||(s={}));const d=t=>{const{direction:o}=t,{size:i,color:n,type:r}=t.strokeStyle;return function(t,o,i=e.Horizontal,n=!1){const r=i===e.Horizontal,s={},d={};return o=o||"transparent",s.Style0=l.css`
    & {
      border-bottom: ${t} solid ${o};
    }
  `,s.Style1=l.css`
    & {
      border-bottom: ${t} dashed ${o};
    }
  `,s.Style2=l.css`
    & {
      border-bottom: ${t} dotted ${o};
    }
  `,s.Style3=l.css`
    & {
      height: ${t};
      position: relative;
    }
    &:before {
      position: absolute;
      content: '';
      height: ${t};
      left: ${a(t,4)};
      right: 0;
      background-image: repeating-linear-gradient(
        to right,
        ${o} 0,
        ${o} ${a(t,1)},
        transparent 0,
        transparent ${a(t,6)}
      );
    }
    &:after {
      position: absolute;
      content: '';
      height: ${t};
      left: 0;
      right: 0;
      background-image: repeating-linear-gradient(
        to right,
        ${o} 0,
        ${o} ${a(t,3)},
        transparent 0,
        transparent ${a(t,6)}
      );
    }
  `,s.Style6=l.css`
    & {
      height: ${t};
      background-image: repeating-linear-gradient(
        to right,
        ${o} 0,
        ${o} ${a(t,4)},
        transparent 0,
        transparent ${a(t,6)}
      );
    }
  `,s.Style7=l.css`
    & {
      border-color: ${o};
      border-bottom-style: double;
      border-bottom-width: ${n?"4px":t};
    }
  `,s.Style8=l.css`
    & {
      height: ${t};
      min-height: ${n?"6px":"unset"};
      position: relative;
    }
    &:before {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      height: ${a(t,.2,"4px")};
      background: ${o};
    }
    &:after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: ${a(t,.4,"4px")};
      background: ${o};
    }
  `,s.Style9=l.css`
    & {
      height: ${t};
      min-height: ${n?"6px":"unset"};
      position: relative;
    }
    &:before {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      height: ${a(t,.4,"4px")};
      background: ${o};
    }
    &:after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: ${a(t,.2,"4px")};
      background: ${o};
    }
  `,s.Style10=l.css`
    & {
      height: ${t};
      min-height: ${n?"8px":"unset"};
      position: relative;
      background-clip: content-box;
      border-top: ${a(t,.167)} solid ${o};
      border-bottom: ${a(t,.167)} solid ${o};
    }
    &:before {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      top: 50%;
      height: ${n?"2px":a(t,.3)};
      background: ${o};
      transform: translateY(-50%);
    }
  `,d.Style0=l.css`
    & {
      border-left: ${t} solid ${o};
    }
  `,d.Style1=l.css`
    & {
      border-left: ${t} dashed ${o};
    }
  `,d.Style2=l.css`
    & {
      border-left: ${t} dotted ${o};
    }
  `,d.Style3=l.css`
    & {
      width: ${t};
      position: relative;
    }
    &:before {
      position: absolute;
      content: '';
      width: ${t};
      top: ${a(t,3.8)};
      bottom: 0;
      background-image: repeating-linear-gradient(
        to bottom,
        ${o} 0,
        ${o} ${a(t,1)},
        transparent 0,
        transparent ${a(t,6)}
      );
    }
    &:after {
      position: absolute;
      content: '';
      width: ${t};
      top: 0;
      bottom: 0;
      background-image: repeating-linear-gradient(
        to bottom,
        ${o} 0,
        ${o} ${a(t,2.5)},
        transparent 0,
        transparent ${a(t,6)}
      );
    }
  `,d.Style6=l.css`
    & {
      width: ${t};
      background-image: repeating-linear-gradient(
        to bottom,
        ${o} 0,
        ${o} ${a(t,4)},
        transparent 0,
        transparent ${a(t,6)}
      );
    }
  `,d.Style7=l.css`
    & {
      border-left: ${t} double ${o};
    }
  `,d.Style8=l.css`
    & {
      width: ${t};
      position: relative;
    }
    &:before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      width: ${a(t,.2,"4px")};
      background: ${o};
    }
    &:after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      width: ${a(t,.4,"4px")};
      background: ${o};
    }
  `,d.Style9=l.css`
    & {
      width: ${t};
      position: relative;
    }
    &:before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      width: ${a(t,.4,"4px")};
      background: ${o};
    }
    &:after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      width: ${a(t,.2,"4px")};
      background: ${o};
    }
  `,d.Style10=l.css`
    & {
      width: ${t};
      position: relative;
      background-clip: content-box;
      border-left: ${a(t,.167)} solid ${o};
      border-right: ${a(t,.167)} solid ${o};
    }
    &:before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 50%;
      width: ${n?"2px":a(t,.3)};
      background: ${o};
      transform: translateX(-50%);
    }
  `,r?s:d}(i,n,o)[r]},p=t=>{const{direction:o,pointEnd:i,pointStart:n,strokeStyle:s}=t,a=o===e.Horizontal,d=n.pointStyle,p=n.pointSize*c(null==s?void 0:s.size),u=i.pointStyle,$=i.pointSize*c(null==s?void 0:s.size);return function(t,e,o,i,n){const r=e?i/2+"px":0,s=e?i/2.5+"px":0,a=o?n/2+"px":0,d=o?n/2.5+"px":0,p=l.css`
    left: ${r};
    right: ${a};
    top: 50%;
    transform: translateY(-50%);
    &.point-start-Point1,
    &.point-start-Point2,
    &.point-start-Point5 {
      left: 0;
    }
    &.point-end-Point1,
    &.point-end-Point2,
    &.point-end-Point5 {
      right: 0;
    }
    &.point-start-Point7 {
      left: ${s};
    }
    &.point-end-Point7 {
      right: ${d};
    }
  `,u=l.css`
    top: ${r};
    bottom: ${a};
    left: 50%;
    transform: translateX(-50%);
    &.point-start-Point1,
    &.point-start-Point2,
    &.point-start-Point5 {
      top: 0;
    }
    &.point-end-Point1,
    &.point-end-Point2,
    &.point-end-Point5 {
      bottom: 0;
    }
  `;return t?p:u}(a,d!==r.None,u!==r.None,p,$)},u=(t,o=!0)=>{const{pointEnd:i,pointStart:n,strokeStyle:r,direction:s}=t,d=Number(c(r.size)),p=(o?n.pointSize*d:i.pointSize*d)+"px",u=null==r?void 0:r.color,$=o?n.pointStyle:i.pointStyle,h=function(t,o,i=e.Horizontal,n=!0){const r=a(t,1),s=a(t,.5),d=a(t,.1),p=a(t,.3);o=o||"transparent";const u=i===e.Horizontal;let c={None:"None"},$={None:"None"};c.Point0=l.css`
    & {
      width: ${r};
      height: ${r};
      border-radius: 50%;
      background-color: ${o};
      left: ${n?0:"unset"};
      right: ${n?"unset":0};
      top: 50%;
      transform: translateY(-50%);
    }
  `,c.Point1=l.css`
    & {
      width: ${p};
      height: ${r};
      background-color: ${o};
      left: ${n?"4%":"unset"};
      right: ${n?"unset":"4%"};
      top: 50%;
      transform: translateY(-50%);
    }
  `,c.Point2=l.css`
    & {
      width: ${p};
      height: ${r};
      background-color: ${o};
      left: ${n?0:"unset"};
      right: ${n?"unset":0};
      top: 50%;
      transform: translateY(-50%);
    }
  `,c.Point3=l.css`
    & {
      width: ${r};
      height: ${r};
      background-color: ${o};
      left: ${n?0:"unset"};
      right: ${n?"unset":0};
      top: 50%;
      transform: translateY(-50%);
    }
  `,c.Point4=l.css`
    & {
      width: ${a(t,.71)};
      height: ${a(t,.71)};
      background-color: ${o};
      left: ${n?a(t,.2):"unset"};
      right: ${n?"unset":a(t,.2)};
      top: 50%;
      transform: translateY(-50%) rotate(45deg);
    }
  `;const h=l.css`
    .jimu-rtl & {
      border-color: transparent ${o} transparent transparent;
    }
    & {
      width: 0;
      height: 0;
      border-width: ${s};
      border-style: solid;
      border-color: transparent transparent transparent ${o};
      left: ${n?0:"unset"};
      right: ${n?"unset":`-${a(t,.5)}`};
      top: 50%;
      transform: translateY(-50%);
    }
  `,g=l.css`
    .jimu-rtl & {
      border-color: transparent transparent transparent ${o};
    }
    & {
      width: 0;
      height: 0;
      border-width: ${s};
      border-style: solid;
      border-color: transparent ${o} transparent transparent;
      left: ${n?`-${a(t,.5)}`:"unset"};
      right: ${n?"unset":0};
      top: 50%;
      transform: translateY(-50%);
    }
  `,b=l.css`
    .jimu-rtl & {
      border-top: ${p} solid ${o};
      border-left: ${p} solid ${o};
    }
    .jimu-ltr & {
      border-bottom: ${p} solid ${o};
      border-left: ${p} solid ${o};
    }
    & {
      width: ${a(t,.8)};
      height: ${a(t,.8)};
      left: ${n?`${a(t,.2)}`:"unset"};
      right: ${n?"unset":`-${a(t,.2)}`};
      top: 50%;
      border-radius: ${d};
      transform: translateY(-50%) rotate(45deg);
    }
  `,S=l.css`
    .jimu-rtl & {
      border-right: ${p} solid ${o};
      border-bottom: ${p} solid ${o};
    }
    .jimu-ltr & {
      border-top: ${p} solid ${o};
      border-right: ${p} solid ${o};
    }
    & {
      width: ${a(t,.8)};
      height: ${a(t,.8)};
      left: ${n?`-${a(t,.2)}`:"unset"};
      right: ${n?"unset":`${a(t,.2)}`};
      top: 50%;
      border-radius: ${d};
      transform: translateY(-50%) rotate(45deg);
    }
  `;$.Point0=l.css`
    & {
      width: ${r};
      height: ${r};
      border-radius: 50%;
      background-color: ${o};
      top: ${n?0:"unset"};
      bottom: ${n?"unset":0};
      left: 50%;
      transform: translateX(-50%);
    }
  `,$.Point1=l.css`
    & {
      width: ${r};
      height: ${p};
      background-color: ${o};
      top: ${n?"4%":"unset"};
      bottom: ${n?"unset":"4%"};
      left: 50%;
      transform: translateX(-50%);
    }
  `,$.Point2=l.css`
    & {
      width: ${r};
      height: ${p};
      background-color: ${o};
      top: ${n?0:"unset"};
      bottom: ${n?"unset":0};
      left: 50%;
      transform: translateX(-50%);
    }
  `,$.Point3=l.css`
    & {
      width: ${r};
      height: ${r};
      background-color: ${o};
      top: ${n?0:"unset"};
      bottom: ${n?"unset":0};
      left: 50%;
      transform: translateX(-50%);
    }
  `,$.Point4=l.css`
    & {
      width: ${a(t,.71)};
      height: ${a(t,.71)};
      background-color: ${o};
      top: ${n?a(t,.2):"unset"};
      bottom: ${n?"unset":a(t,.2)};
      left: 50%;
      transform: translateX(-50%) rotate(45deg);
    }
  `;const y=l.css`
    & {
      width: 0;
      height: 0;
      border-width: ${s};
      border-style: solid;
      border-color: transparent transparent ${o} transparent;
      top: ${n?`-${a(t,.5)}`:"unset"};
      bottom: ${n?"unset":0};
      left: 50%;
      transform: translateX(-50%);
    }
  `,f=l.css`
    & {
      width: 0;
      height: 0;
      border-width: ${s};
      border-style: solid;
      border-color: ${o} transparent transparent transparent;
      top: ${n?0:"unset"};
      bottom: ${n?"unset":`-${a(t,.5)}`};
      left: 50%;
      transform: translateX(-50%);
    }
  `,m=l.css`
    .jimu-rtl & {
      border-bottom: ${p} solid ${o};
      border-left: ${p} solid ${o};
    }
    .jimu-ltr & {
      border-bottom: ${p} solid ${o};
      border-right: ${p} solid ${o};
    }
    & {
      width: ${a(t,.8)};
      height: ${a(t,.8)};
      top: ${n?`-${a(t,.2)}`:"unset"};
      bottom: ${n?"unset":`${a(t,.2)}`};
      left: 50%;
      transform: translateX(-50%) rotate(45deg);
      border-radius: ${d};
    }
  `,v=l.css`
    .jimu-rtl & {
      border-top: ${p} solid ${o};
      border-right: ${p} solid ${o};
    }
    .jimu-ltr & {
      border-top: ${p} solid ${o};
      border-left: ${p} solid ${o};
    }
    & {
      width: ${a(t,.8)};
      height: ${a(t,.8)};
      top: ${n?`${a(t,.2)}`:"unset"};
      bottom: ${n?"unset":`-${a(t,.2)}`};
      left: 50%;
      transform: translateX(-50%) rotate(45deg);
      border-radius: ${d};
    }
  `;let w,P;return n?(w={Point5:h,Point6:g,Point7:b,Point8:S},P={Point5:f,Point6:y,Point7:v,Point8:m}):(w={Point5:g,Point6:h,Point7:S,Point8:b},P={Point5:y,Point6:f,Point7:m,Point8:v}),c=Object.assign(Object.assign({},c),w),$=Object.assign(Object.assign({},$),P),u?c:$}(p,u,s,o);return h[$]},c=t=>{const e=t.split("px")[0];return Number(e)};class $ extends l.React.PureComponent{constructor(t){super(t),this.editWidgetConfig=t=>{if(!window.jimuConfig.isInBuilder)return;this.props.builderSupportModules.jimuForBuilderLib.getAppConfigAction().editWidgetConfig(this.props.id,t).exec()},this.getStyle=()=>l.css`
      & {
        height: 100%;
        width: 100%;
        box-sizing: border-box;
      }
      .divider-con {
        height: 100%;
        width: 100%;
      }
    `,this.onQuickStyleChange=t=>{var e;const o=this.props.id,i=this.props.builderSupportModules,n=null===(e=null==i?void 0:i.jimuForBuilderLib)||void 0===e?void 0:e.getAppConfigAction;n&&n().editWidgetProperty(o,"config",t).exec()},this.toggleQuickStyle=(t=!1)=>{this.props.dispatch(l.appActions.widgetStatePropChange(this.props.id,"showQuickStyle",t))},this.getQuickStyleComponent=()=>{var t,e,o;const{showQuickStyle:i,active:n,id:r,browserSizeMode:s,onInitDragHandler:a,onInitResizeHandler:d}=this.props,{isMount:p}=this.state,u=null===(o=null===(e=null===(t=null==this?void 0:this.props)||void 0===t?void 0:t.builderSupportModules)||void 0===e?void 0:e.widgetModules)||void 0===o?void 0:o.QuickStyle;return s===l.BrowserSizeMode.Small||!u&&p?null:(0,l.jsx)(u,{isOpen:i&&n,onSettingChange:this.onQuickStyleChange,reference:null==this?void 0:this.domNode,id:r,usePopper:!0,onInitDragHandler:a,onInitResizeHandler:d})},this.state={isMount:!1}}componentDidMount(){const{active:t,hasEverMount:e,id:o,appMode:i}=this.props;window.jimuConfig.isInBuilder&&t&&!e&&i===l.AppMode.Design&&this.toggleQuickStyle(!0),this.props.hasEverMount||this.props.dispatch(l.appActions.widgetStatePropChange(o,"hasEverMount",!0)),this.setState({isMount:!0})}componentDidUpdate(t,e){const{id:o,uri:i,appMode:n,active:r,showQuickStyle:s,browserSizeMode:a,builderSupportModules:d}=this.props;(n!==t.appMode&&n===l.AppMode.Run||r!==t.active)&&this.toggleQuickStyle();const p=s!==t.showQuickStyle||r!==t.active,u=a===l.BrowserSizeMode.Small,c=s&&r;p&&u&&d.widgetModules.appBuilderSync.publishSidePanelToApp({type:"dividerQuickStyle",widgetId:o,uri:i,onChange:this.onQuickStyleChange,active:c})}render(){const{config:t,id:o}=this.props,{direction:i,pointEnd:n,pointStart:s}=t,a=(0,l.classNames)("jimu-widget","widget-divider","position-relative","divider-widget-"+o),c=i===e.Horizontal?"horizontal":"vertical",$=d(t),h=p(t),g=u(t,!0),b=u(t,!1),S=(0,l.classNames)("divider-line","position-absolute",c,`point-start-${s.pointStyle}`,`point-end-${n.pointStyle}`);return(0,l.jsx)("div",{className:a,css:this.getStyle(),ref:t=>this.domNode=t},(0,l.jsx)("div",{className:"position-relative divider-con"},(0,l.jsx)("div",{className:"point-con"},s.pointStyle!==r.None&&(0,l.jsx)("span",{"data-testid":"divider-point-start",className:"point-start position-absolute",css:g}),n.pointStyle!==r.None&&(0,l.jsx)("span",{"data-testid":"divider-point-end",className:"point-end position-absolute",css:b})),(0,l.jsx)("div",{"data-testid":"divider-line",className:S,css:[$,h]}),window.jimuConfig.isInBuilder&&this.getQuickStyleComponent()))}}$.mapExtraStateProps=(t,e)=>{var o,i,n;let r=!1;const s=t.appRuntimeInfo.selection;if(s&&t.appConfig.layouts[s.layoutId]){const o=t.appConfig.layouts[s.layoutId].content[s.layoutItemId];r=o&&o.widgetId===e.id}const a=t.appContext.isInBuilder&&r,d=t.widgetsState[e.id]||(0,l.Immutable)({}),p=!!d.showQuickStyle;return{appMode:s?null===(o=null==t?void 0:t.appRuntimeInfo)||void 0===o?void 0:o.appMode:null,browserSizeMode:null==t?void 0:t.browserSizeMode,active:a,showQuickStyle:p,hasEverMount:d.hasEverMount,uri:null===(n=null===(i=t.appConfig.widgets)||void 0===i?void 0:i[e.id])||void 0===n?void 0:n.uri}};const h=$;function g(t){i.p=t}})(),n})())}}}));