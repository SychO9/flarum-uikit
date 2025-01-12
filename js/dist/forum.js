(()=>{var e={n:t=>{var s=t&&t.__esModule?()=>t.default:()=>t;return e.d(s,{a:s}),s},d:(t,s)=>{for(var r in s)e.o(s,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:s[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};(()=>{"use strict";const t=flarum.reg.get("core","forum/app");var s=e.n(t);const r=flarum.reg.get("core","forum/components/Search");var a=e.n(r);const o=flarum.reg.get("core","common/utils/ItemList");var i=e.n(o);function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function c(e,t,s){return(t=function(e){var t=function(e){if("object"!=n(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var s=t.call(e,"string");if("object"!=n(s))return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==n(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}const l=flarum.reg.get("core","common/helpers/highlight");var u=e.n(l);const h=flarum.reg.get("core","common/components/Button");var d=e.n(h);class g{constructor(e,t){c(this,"results",new Map),c(this,"onSelect",void 0),c(this,"ignore",void 0),this.results=new Map,this.onSelect=e,this.ignore=t}search(e){e=e.toLowerCase(),this.results.set(e,[]);const t={filter:{q:e},page:{limit:3}},r=Number(e);return Number.isNaN(r)||r===Number(this.ignore)?s().store.find("discussions",t).then((t=>{this.results.set(e,t.filter((e=>e.id()!==this.ignore)))})):s().store.find("discussions",String(r)).then((t=>{this.results.set(e,[t])}))}view(e){return e=e.toLowerCase(),(this.results.get(e)||[]).map((t=>m("li",{className:"DiscussionSearchResult","data-index":"discussions"+t.id()},m(d(),{onclick:()=>this.onSelect(t)},m("div",{className:"DiscussionSearchResult-id"},t.id()),m("div",{className:"DiscussionSearchResult-title"},u()(t.title(),e))))))}}flarum.reg.add("sycho-uikit","forum/components/DiscussionSearchSource",g);const p=flarum.reg.get("core","common/utils/extractText");var f=e.n(p);const v=flarum.reg.get("core","common/utils/classList");var S=e.n(v);const b=flarum.reg.get("core","common/components/Input");var y=e.n(b);class N extends(a()){view(){const e=this.searchState.getInitialSearch();if(this.sources||(this.sources=this.sourceItems().toArray()),!this.sources.length)return m("div",null);const t=f()(s().translator.trans("core.forum.header.search_placeholder")),r=!!e,a=!(!this.searchState.getValue()||!this.hasFocus),o=!(this.loadingSources||!this.searchState.getValue());return m("div",{role:"search","aria-label":s().translator.trans("core.forum.header.search_role_label"),className:S()("Search","UiKit-Search",{open:this.searchState.getValue()&&this.hasFocus,focused:this.hasFocus,active:r,loading:!!this.loadingSources})},m(y(),{"aria-label":t,className:"Search-input",type:"search",placeholder:t,value:this.searchState.getValue(),onchange:e=>this.searchState.setValue(e),clearable:o,loading:this.loadingSources,inputAttrs:{onfocus:()=>this.hasFocus=!0,onblur:()=>this.hasFocus=!1}}),m("ul",{className:"Dropdown-menu Search-results","aria-hidden":!a||void 0,"aria-live":a?"polite":void 0},a&&this.sources.map((e=>e.view(this.searchState.getValue())))))}sourceItems(){const e=new(i());return e.add("discussions",new g((e=>{this.searchState.setValue(e.title()),this.attrs.onSelect(e)}),this.attrs.ignore)),e}}flarum.reg.add("sycho-uikit","forum/components/DiscussionSearch",N);const w=flarum.reg.get("core","common/Component");var P=e.n(w);class x extends(P()){view(){let e=["UiKit-ProgressBar"];return this.attrs.className&&e.push(this.attrs.className),this.attrs.mini&&e.push("UiKit-ProgressBar--mini"),this.attrs.fancy&&e.push("UiKit-ProgressBar--fancy"),this.attrs.alternate&&e.push("UiKit-ProgressBar--alternate"),m("div",{className:e.join(" ")},m("div",{className:"UiKit-ProgressBar-bar",style:{width:"".concat(this.getProgress(),"%")}}))}getProgress(){return this.attrs.progress}}flarum.reg.add("sycho-uikit","common/components/ProgressBar",x);class K extends(P()){view(e){let t={},s=["UiKit-Label"];return this.attrs.className&&s.push(this.attrs.className),this.attrs.color&&(t.backgroundColor="#".concat(this.attrs.color),s.push("colored")),m("span",{className:s.join(" "),style:t},m("span",{className:"UiKit-Label-text"},e.children))}}flarum.reg.add("sycho-uikit","common/components/Label",K);class L extends(P()){view(e){let t=["UiKit-LabelGroup"];return this.attrs.className&&t.push(this.attrs.className),m("span",{className:t.join(" ")},e.children)}}flarum.reg.add("sycho-uikit","common/components/LabelGroup",L)})(),module.exports={}})();
//# sourceMappingURL=forum.js.map