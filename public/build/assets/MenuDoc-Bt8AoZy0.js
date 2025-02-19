import{B as z,O as S,aS as H,a4 as b,m as l,G as Y,J as M,K as Q,f as m,c as d,F as L,a5 as O,a as p,L as R,j as y,N as k,i as I,n as E,t as V,b as g,e as x,Y as se,T as q,aC as J,S as P,v as K,bh as ne,ap as T,X as _,W as j,M as C,at as re,Z as B,a7 as ue,aD as U,aa as ze,aT as He,b4 as _e,A as Be,al as Re,am as Ne,E as Ge,H as je,ai as Ue,aj as ie,r as A,d as D}from"./app-BTf9-ai_.js";import{U as F}from"./index-C0ODo9Cv.js";import{s as ce}from"./index-CxUVlT2R.js";import{s as $}from"./index-BnyLwSUA.js";import{s as qe}from"./index-DbUcpvGf.js";import{s as We}from"./index-Bq4RKSB8.js";import{s as le}from"./index-DY3rV8CR.js";import{s as Ze}from"./index-BkBcl6jt.js";import{s as Xe}from"./index-BJ_iSKDy.js";import{s as Ye}from"./index-a2LizQTD.js";import{s as Qe,a as Je,b as $e}from"./index-bNnTNEzi.js";import{s as et}from"./index-hzYV07QI.js";import{s as tt,a as nt}from"./index-B136gTNq.js";import{s as it}from"./index-B8j82Sw8.js";import"./index-CFeuG2SP.js";import"./index-DJmDEk1T.js";import"./index-O2dGe2CM.js";var at=function(e){var t=e.dt;return`
.p-panelmenu {
    display: flex;
    flex-direction: column;
    gap: `.concat(t("panelmenu.gap"),`;
}

.p-panelmenu-panel {
    background: `).concat(t("panelmenu.panel.background"),`;
    border-width: `).concat(t("panelmenu.panel.border.width"),`;
    border-style: solid;
    border-color: `).concat(t("panelmenu.panel.border.color"),`;
    color: `).concat(t("panelmenu.panel.color"),`;
    border-radius: `).concat(t("panelmenu.panel.border.radius"),`;
    padding: `).concat(t("panelmenu.panel.padding"),`;
}

.p-panelmenu-panel:first-child {
    border-width: `).concat(t("panelmenu.panel.first.border.width"),`;
    border-start-start-radius: `).concat(t("panelmenu.panel.first.top.border.radius"),`;
    border-start-end-radius: `).concat(t("panelmenu.panel.first.top.border.radius"),`;
}

.p-panelmenu-panel:last-child {
    border-width: `).concat(t("panelmenu.panel.last.border.width"),`;
    border-end-start-radius: `).concat(t("panelmenu.panel.last.bottom.border.radius"),`;
    border-end-end-radius: `).concat(t("panelmenu.panel.last.bottom.border.radius"),`;
}

.p-panelmenu-header {
    outline: 0 none;
}

.p-panelmenu-header-content {
    border-radius: `).concat(t("panelmenu.item.border.radius"),`;
    transition: background `).concat(t("panelmenu.transition.duration"),", color ").concat(t("panelmenu.transition.duration"),", outline-color ").concat(t("panelmenu.transition.duration"),", box-shadow ").concat(t("panelmenu.transition.duration"),`;
    outline-color: transparent;
    color: `).concat(t("panelmenu.item.color"),`;
}

.p-panelmenu-header-link {
    display: flex;
    gap: `).concat(t("panelmenu.item.gap"),`;
    padding: `).concat(t("panelmenu.item.padding"),`;
    align-items: center;
    user-select: none;
    cursor: pointer;
    position: relative;
    text-decoration: none;
    color: inherit;
}

.p-panelmenu-header-icon,
.p-panelmenu-item-icon {
    color: `).concat(t("panelmenu.item.icon.color"),`;
}

.p-panelmenu-submenu-icon {
    color: `).concat(t("panelmenu.submenu.icon.color"),`;
}

.p-panelmenu-submenu-icon:dir(rtl) {
    transform: rotate(180deg);
}

.p-panelmenu-header:not(.p-disabled):focus-visible .p-panelmenu-header-content {
    background: `).concat(t("panelmenu.item.focus.background"),`;
    color: `).concat(t("panelmenu.item.focus.color"),`;
}

.p-panelmenu-header:not(.p-disabled):focus-visible .p-panelmenu-header-content .p-panelmenu-header-icon {
    color: `).concat(t("panelmenu.item.icon.focus.color"),`;
}

.p-panelmenu-header:not(.p-disabled):focus-visible .p-panelmenu-header-content .p-panelmenu-submenu-icon {
    color: `).concat(t("panelmenu.submenu.icon.focus.color"),`;
}

.p-panelmenu-header:not(.p-disabled) .p-panelmenu-header-content:hover {
    background: `).concat(t("panelmenu.item.focus.background"),`;
    color: `).concat(t("panelmenu.item.focus.color"),`;
}

.p-panelmenu-header:not(.p-disabled) .p-panelmenu-header-content:hover .p-panelmenu-header-icon {
    color: `).concat(t("panelmenu.item.icon.focus.color"),`;
}

.p-panelmenu-header:not(.p-disabled) .p-panelmenu-header-content:hover .p-panelmenu-submenu-icon {
    color: `).concat(t("panelmenu.submenu.icon.focus.color"),`;
}

.p-panelmenu-submenu {
    margin: 0;
    padding: 0 0 0 `).concat(t("panelmenu.submenu.indent"),`;
    outline: 0;
    list-style: none;
}

.p-panelmenu-submenu:dir(rtl) {
    padding: 0 `).concat(t("panelmenu.submenu.indent"),` 0 0;
}

.p-panelmenu-item-link {
    display: flex;
    gap: `).concat(t("panelmenu.item.gap"),`;
    padding: `).concat(t("panelmenu.item.padding"),`;
    align-items: center;
    user-select: none;
    cursor: pointer;
    text-decoration: none;
    color: inherit;
    position: relative;
    overflow: hidden;
}

.p-panelmenu-item-label {
    line-height: 1;
}

.p-panelmenu-item-content {
    border-radius: `).concat(t("panelmenu.item.border.radius"),`;
    transition: background `).concat(t("panelmenu.transition.duration"),", color ").concat(t("panelmenu.transition.duration"),", outline-color ").concat(t("panelmenu.transition.duration"),", box-shadow ").concat(t("panelmenu.transition.duration"),`;
    color: `).concat(t("panelmenu.item.color"),`;
    outline-color: transparent;
}

.p-panelmenu-item.p-focus > .p-panelmenu-item-content {
    background: `).concat(t("panelmenu.item.focus.background"),`;
    color: `).concat(t("panelmenu.item.focus.color"),`;
}

.p-panelmenu-item.p-focus > .p-panelmenu-item-content .p-panelmenu-item-icon {
    color: `).concat(t("panelmenu.item.focus.color"),`;
}

.p-panelmenu-item.p-focus > .p-panelmenu-item-content .p-panelmenu-submenu-icon {
    color: `).concat(t("panelmenu.submenu.icon.focus.color"),`;
}

.p-panelmenu-item:not(.p-disabled) > .p-panelmenu-item-content:hover {
    background: `).concat(t("panelmenu.item.focus.background"),`;
    color: `).concat(t("panelmenu.item.focus.color"),`;
}

.p-panelmenu-item:not(.p-disabled) > .p-panelmenu-item-content:hover .p-panelmenu-item-icon {
    color: `).concat(t("panelmenu.item.icon.focus.color"),`;
}

.p-panelmenu-item:not(.p-disabled) > .p-panelmenu-item-content:hover .p-panelmenu-submenu-icon {
    color: `).concat(t("panelmenu.submenu.icon.focus.color"),`;
}
`)},ot={root:"p-panelmenu p-component",panel:"p-panelmenu-panel",header:function(e){var t=e.instance,a=e.item;return["p-panelmenu-header",{"p-panelmenu-header-active":t.isItemActive(a)&&!!a.items,"p-disabled":t.isItemDisabled(a)}]},headerContent:"p-panelmenu-header-content",headerLink:"p-panelmenu-header-link",headerIcon:"p-panelmenu-header-icon",headerLabel:"p-panelmenu-header-label",contentContainer:"p-panelmenu-content-container",content:"p-panelmenu-content",rootList:"p-panelmenu-root-list",item:function(e){var t=e.instance,a=e.processedItem;return["p-panelmenu-item",{"p-focus":t.isItemFocused(a),"p-disabled":t.isItemDisabled(a)}]},itemContent:"p-panelmenu-item-content",itemLink:"p-panelmenu-item-link",itemIcon:"p-panelmenu-item-icon",itemLabel:"p-panelmenu-item-label",submenuIcon:"p-panelmenu-submenu-icon",submenu:"p-panelmenu-submenu",separator:"p-menuitem-separator"},st=z.extend({name:"panelmenu",theme:at,classes:ot}),rt={name:"BasePanelMenu",extends:S,props:{model:{type:Array,default:null},expandedKeys:{type:Object,default:null},multiple:{type:Boolean,default:!1},tabindex:{type:Number,default:0}},style:st,provide:function(){return{$pcPanelMenu:this,$parentInstance:this}}},me={name:"PanelMenuSub",hostName:"PanelMenu",extends:S,emits:["item-toggle","item-mousemove"],props:{panelId:{type:String,default:null},focusedItemId:{type:String,default:null},items:{type:Array,default:null},level:{type:Number,default:0},templates:{type:Object,default:null},activeItemPath:{type:Object,default:null},tabindex:{type:Number,default:-1}},methods:{getItemId:function(e){return"".concat(this.panelId,"_").concat(e.key)},getItemKey:function(e){return this.getItemId(e)},getItemProp:function(e,t,a){return e&&e.item?H(e.item[t],a):void 0},getItemLabel:function(e){return this.getItemProp(e,"label")},getPTOptions:function(e,t,a){return this.ptm(e,{context:{item:t.item,index:a,active:this.isItemActive(t),focused:this.isItemFocused(t),disabled:this.isItemDisabled(t)}})},isItemActive:function(e){return this.activeItemPath.some(function(t){return t.key===e.key})},isItemVisible:function(e){return this.getItemProp(e,"visible")!==!1},isItemDisabled:function(e){return this.getItemProp(e,"disabled")},isItemFocused:function(e){return this.focusedItemId===this.getItemId(e)},isItemGroup:function(e){return b(e.items)},onItemClick:function(e,t){this.getItemProp(t,"command",{originalEvent:e,item:t.item}),this.$emit("item-toggle",{processedItem:t,expanded:!this.isItemActive(t)})},onItemToggle:function(e){this.$emit("item-toggle",e)},onItemMouseMove:function(e,t){this.$emit("item-mousemove",{originalEvent:e,processedItem:t})},getAriaSetSize:function(){var e=this;return this.items.filter(function(t){return e.isItemVisible(t)&&!e.getItemProp(t,"separator")}).length},getAriaPosInset:function(e){var t=this;return e-this.items.slice(0,e).filter(function(a){return t.isItemVisible(a)&&t.getItemProp(a,"separator")}).length+1},getMenuItemProps:function(e,t){return{action:l({class:this.cx("itemLink"),tabindex:-1},this.getPTOptions("itemLink",e,t)),icon:l({class:[this.cx("itemIcon"),this.getItemProp(e,"icon")]},this.getPTOptions("itemIcon",e,t)),label:l({class:this.cx("itemLabel")},this.getPTOptions("itemLabel",e,t)),submenuicon:l({class:this.cx("submenuIcon")},this.getPTOptions("submenuicon",e,t))}}},components:{ChevronRightIcon:$,ChevronDownIcon:ce},directives:{ripple:Y}},ut=["tabindex"],ct=["id","aria-label","aria-expanded","aria-level","aria-setsize","aria-posinset","data-p-focused","data-p-disabled"],lt=["onClick","onMousemove"],mt=["href","target"];function dt(n,e,t,a,o,i){var c=M("PanelMenuSub",!0),u=Q("ripple");return m(),d("ul",{class:E(n.cx("submenu")),tabindex:t.tabindex},[(m(!0),d(L,null,O(t.items,function(s,r){return m(),d(L,{key:i.getItemKey(s)},[i.isItemVisible(s)&&!i.getItemProp(s,"separator")?(m(),d("li",l({key:0,id:i.getItemId(s),class:[n.cx("item",{processedItem:s}),i.getItemProp(s,"class")],style:i.getItemProp(s,"style"),role:"treeitem","aria-label":i.getItemLabel(s),"aria-expanded":i.isItemGroup(s)?i.isItemActive(s):void 0,"aria-level":t.level+1,"aria-setsize":i.getAriaSetSize(),"aria-posinset":i.getAriaPosInset(r),ref_for:!0},i.getPTOptions("item",s,r),{"data-p-focused":i.isItemFocused(s),"data-p-disabled":i.isItemDisabled(s)}),[p("div",l({class:n.cx("itemContent"),onClick:function(v){return i.onItemClick(v,s)},onMousemove:function(v){return i.onItemMouseMove(v,s)},ref_for:!0},i.getPTOptions("itemContent",s,r)),[t.templates.item?(m(),y(k(t.templates.item),{key:1,item:s.item,root:!1,active:i.isItemActive(s),hasSubmenu:i.isItemGroup(s),label:i.getItemLabel(s),props:i.getMenuItemProps(s,r)},null,8,["item","active","hasSubmenu","label","props"])):R((m(),d("a",l({key:0,href:i.getItemProp(s,"url"),class:n.cx("itemLink"),target:i.getItemProp(s,"target"),tabindex:"-1",ref_for:!0},i.getPTOptions("itemLink",s,r)),[i.isItemGroup(s)?(m(),d(L,{key:0},[t.templates.submenuicon?(m(),y(k(t.templates.submenuicon),l({key:0,class:n.cx("submenuIcon"),active:i.isItemActive(s),ref_for:!0},i.getPTOptions("submenuIcon",s,r)),null,16,["class","active"])):(m(),y(k(i.isItemActive(s)?"ChevronDownIcon":"ChevronRightIcon"),l({key:1,class:n.cx("submenuIcon"),ref_for:!0},i.getPTOptions("submenuIcon",s,r)),null,16,["class"]))],64)):I("",!0),t.templates.itemicon?(m(),y(k(t.templates.itemicon),{key:1,item:s.item,class:E(n.cx("itemIcon"))},null,8,["item","class"])):i.getItemProp(s,"icon")?(m(),d("span",l({key:2,class:[n.cx("itemIcon"),i.getItemProp(s,"icon")],ref_for:!0},i.getPTOptions("itemIcon",s,r)),null,16)):I("",!0),p("span",l({class:n.cx("itemLabel"),ref_for:!0},i.getPTOptions("itemLabel",s,r)),V(i.getItemLabel(s)),17)],16,mt)),[[u]])],16,lt),g(q,l({name:"p-toggleable-content",ref_for:!0},n.ptm("transition")),{default:x(function(){return[R(p("div",l({class:n.cx("contentContainer"),ref_for:!0},n.ptm("contentContainer")),[i.isItemVisible(s)&&i.isItemGroup(s)?(m(),y(c,l({key:0,id:i.getItemId(s)+"_list",role:"group",panelId:t.panelId,focusedItemId:t.focusedItemId,items:s.items,level:t.level+1,templates:t.templates,activeItemPath:t.activeItemPath,onItemToggle:i.onItemToggle,onItemMousemove:e[0]||(e[0]=function(f){return n.$emit("item-mousemove",f)}),pt:n.pt,unstyled:n.unstyled,ref_for:!0},n.ptm("submenu")),null,16,["id","panelId","focusedItemId","items","level","templates","activeItemPath","onItemToggle","pt","unstyled"])):I("",!0)],16),[[se,i.isItemActive(s)]])]}),_:2},1040)],16,ct)):I("",!0),i.isItemVisible(s)&&i.getItemProp(s,"separator")?(m(),d("li",l({key:1,style:i.getItemProp(s,"style"),class:[n.cx("separator"),i.getItemProp(s,"class")],role:"separator",ref_for:!0},n.ptm("separator")),null,16)):I("",!0)],64)}),128))],10,ut)}me.render=dt;function pt(n,e){return It(n)||bt(n,e)||ht(n,e)||ft()}function ft(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ht(n,e){if(n){if(typeof n=="string")return ae(n,e);var t={}.toString.call(n).slice(8,-1);return t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set"?Array.from(n):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?ae(n,e):void 0}}function ae(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,a=Array(e);t<e;t++)a[t]=n[t];return a}function bt(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var a,o,i,c,u=[],s=!0,r=!1;try{if(i=(t=t.call(n)).next,e!==0)for(;!(s=(a=i.call(t)).done)&&(u.push(a.value),u.length!==e);s=!0);}catch(f){r=!0,o=f}finally{try{if(!s&&t.return!=null&&(c=t.return(),Object(c)!==c))return}finally{if(r)throw o}}return u}}function It(n){if(Array.isArray(n))return n}var de={name:"PanelMenuList",hostName:"PanelMenu",extends:S,emits:["item-toggle","header-focus"],props:{panelId:{type:String,default:null},items:{type:Array,default:null},templates:{type:Object,default:null},expandedKeys:{type:Object,default:null}},searchTimeout:null,searchValue:null,data:function(){return{focused:!1,focusedItem:null,activeItemPath:[]}},watch:{expandedKeys:function(e){this.autoUpdateActiveItemPath(e)}},mounted:function(){this.autoUpdateActiveItemPath(this.expandedKeys)},methods:{getItemProp:function(e,t){return e&&e.item?H(e.item[t]):void 0},getItemLabel:function(e){return this.getItemProp(e,"label")},isItemVisible:function(e){return this.getItemProp(e,"visible")!==!1},isItemDisabled:function(e){return this.getItemProp(e,"disabled")},isItemActive:function(e){return this.activeItemPath.some(function(t){return t.key===e.parentKey})},isItemGroup:function(e){return b(e.items)},onFocus:function(e){this.focused=!0,this.focusedItem=this.focusedItem||(this.isElementInPanel(e,e.relatedTarget)?this.findFirstItem():this.findLastItem())},onBlur:function(){this.focused=!1,this.focusedItem=null,this.searchValue=""},onKeyDown:function(e){var t=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Space":this.onSpaceKey(e);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Escape":case"Tab":case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!t&&J(e.key)&&this.searchItems(e,e.key);break}},onArrowDownKey:function(e){var t=b(this.focusedItem)?this.findNextItem(this.focusedItem):this.findFirstItem();this.changeFocusedItem({originalEvent:e,processedItem:t,focusOnNext:!0}),e.preventDefault()},onArrowUpKey:function(e){var t=b(this.focusedItem)?this.findPrevItem(this.focusedItem):this.findLastItem();this.changeFocusedItem({originalEvent:e,processedItem:t,selfCheck:!0}),e.preventDefault()},onArrowLeftKey:function(e){var t=this;if(b(this.focusedItem)){var a=this.activeItemPath.some(function(o){return o.key===t.focusedItem.key});a?this.activeItemPath=this.activeItemPath.filter(function(o){return o.key!==t.focusedItem.key}):this.focusedItem=b(this.focusedItem.parent)?this.focusedItem.parent:this.focusedItem,e.preventDefault()}},onArrowRightKey:function(e){var t=this;if(b(this.focusedItem)){var a=this.isItemGroup(this.focusedItem);if(a){var o=this.activeItemPath.some(function(i){return i.key===t.focusedItem.key});o?this.onArrowDownKey(e):(this.activeItemPath=this.activeItemPath.filter(function(i){return i.parentKey!==t.focusedItem.parentKey}),this.activeItemPath.push(this.focusedItem))}e.preventDefault()}},onHomeKey:function(e){this.changeFocusedItem({originalEvent:e,processedItem:this.findFirstItem(),allowHeaderFocus:!1}),e.preventDefault()},onEndKey:function(e){this.changeFocusedItem({originalEvent:e,processedItem:this.findLastItem(),focusOnNext:!0,allowHeaderFocus:!1}),e.preventDefault()},onEnterKey:function(e){if(b(this.focusedItem)){var t=P(this.$el,'li[id="'.concat("".concat(this.focusedItemId),'"]')),a=t&&(P(t,'[data-pc-section="itemlink"]')||P(t,"a,button"));a?a.click():t&&t.click()}e.preventDefault()},onSpaceKey:function(e){this.onEnterKey(e)},onItemToggle:function(e){var t=e.processedItem,a=e.expanded;this.expandedKeys?this.$emit("item-toggle",{item:t.item,expanded:a}):(this.activeItemPath=this.activeItemPath.filter(function(o){return o.parentKey!==t.parentKey}),a&&this.activeItemPath.push(t)),this.focusedItem=t,K(this.$el)},onItemMouseMove:function(e){this.focused&&(this.focusedItem=e.processedItem)},isElementInPanel:function(e,t){var a=e.currentTarget.closest('[data-pc-section="panel"]');return a&&a.contains(t)},isItemMatched:function(e){var t;return this.isValidItem(e)&&((t=this.getItemLabel(e))===null||t===void 0?void 0:t.toLocaleLowerCase(this.searchLocale).startsWith(this.searchValue.toLocaleLowerCase(this.searchLocale)))},isVisibleItem:function(e){return!!e&&(e.level===0||this.isItemActive(e))&&this.isItemVisible(e)},isValidItem:function(e){return!!e&&!this.isItemDisabled(e)&&!this.getItemProp(e,"separator")},findFirstItem:function(){var e=this;return this.visibleItems.find(function(t){return e.isValidItem(t)})},findLastItem:function(){var e=this;return ne(this.visibleItems,function(t){return e.isValidItem(t)})},findNextItem:function(e){var t=this,a=this.visibleItems.findIndex(function(i){return i.key===e.key}),o=a<this.visibleItems.length-1?this.visibleItems.slice(a+1).find(function(i){return t.isValidItem(i)}):void 0;return o||e},findPrevItem:function(e){var t=this,a=this.visibleItems.findIndex(function(i){return i.key===e.key}),o=a>0?ne(this.visibleItems.slice(0,a),function(i){return t.isValidItem(i)}):void 0;return o||e},searchItems:function(e,t){var a=this;this.searchValue=(this.searchValue||"")+t;var o=null,i=!1;if(b(this.focusedItem)){var c=this.visibleItems.findIndex(function(u){return u.key===a.focusedItem.key});o=this.visibleItems.slice(c).find(function(u){return a.isItemMatched(u)}),o=T(o)?this.visibleItems.slice(0,c).find(function(u){return a.isItemMatched(u)}):o}else o=this.visibleItems.find(function(u){return a.isItemMatched(u)});return b(o)&&(i=!0),T(o)&&T(this.focusedItem)&&(o=this.findFirstItem()),b(o)&&this.changeFocusedItem({originalEvent:e,processedItem:o,allowHeaderFocus:!1}),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(function(){a.searchValue="",a.searchTimeout=null},500),i},changeFocusedItem:function(e){var t=e.originalEvent,a=e.processedItem,o=e.focusOnNext,i=e.selfCheck,c=e.allowHeaderFocus,u=c===void 0?!0:c;b(this.focusedItem)&&this.focusedItem.key!==a.key?(this.focusedItem=a,this.scrollInView()):u&&this.$emit("header-focus",{originalEvent:t,focusOnNext:o,selfCheck:i})},scrollInView:function(){var e=P(this.$el,'li[id="'.concat("".concat(this.focusedItemId),'"]'));e&&e.scrollIntoView&&e.scrollIntoView({block:"nearest",inline:"start"})},autoUpdateActiveItemPath:function(e){var t=this;this.activeItemPath=Object.entries(e||{}).reduce(function(a,o){var i=pt(o,2),c=i[0],u=i[1];if(u){var s=t.findProcessedItemByItemKey(c);s&&a.push(s)}return a},[])},findProcessedItemByItemKey:function(e,t){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0;if(t=t||a===0&&this.processedItems,!t)return null;for(var o=0;o<t.length;o++){var i=t[o];if(this.getItemProp(i,"key")===e)return i;var c=this.findProcessedItemByItemKey(e,i.items,a+1);if(c)return c}},createProcessedItems:function(e){var t=this,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"",c=[];return e&&e.forEach(function(u,s){var r=(i!==""?i+"_":"")+s,f={item:u,index:s,level:a,key:r,parent:o,parentKey:i};f.items=t.createProcessedItems(u.items,a+1,f,r),c.push(f)}),c},flatItems:function(e){var t=this,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return e&&e.forEach(function(o){t.isVisibleItem(o)&&(a.push(o),t.flatItems(o.items,a))}),a}},computed:{processedItems:function(){return this.createProcessedItems(this.items||[])},visibleItems:function(){return this.flatItems(this.processedItems)},focusedItemId:function(){return b(this.focusedItem)?"".concat(this.panelId,"_").concat(this.focusedItem.key):null}},components:{PanelMenuSub:me}};function gt(n,e,t,a,o,i){var c=M("PanelMenuSub");return m(),y(c,l({id:t.panelId+"_list",class:n.cx("rootList"),role:"tree",tabindex:-1,"aria-activedescendant":o.focused?i.focusedItemId:void 0,panelId:t.panelId,focusedItemId:o.focused?i.focusedItemId:void 0,items:i.processedItems,templates:t.templates,activeItemPath:o.activeItemPath,onFocus:i.onFocus,onBlur:i.onBlur,onKeydown:i.onKeyDown,onItemToggle:i.onItemToggle,onItemMousemove:i.onItemMouseMove,pt:n.pt,unstyled:n.unstyled},n.ptm("rootList")),null,16,["id","class","aria-activedescendant","panelId","focusedItemId","items","templates","activeItemPath","onFocus","onBlur","onKeydown","onItemToggle","onItemMousemove","pt","unstyled"])}de.render=gt;function N(n){"@babel/helpers - typeof";return N=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},N(n)}function oe(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable})),t.push.apply(t,a)}return t}function vt(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?oe(Object(t),!0).forEach(function(a){yt(n,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):oe(Object(t)).forEach(function(a){Object.defineProperty(n,a,Object.getOwnPropertyDescriptor(t,a))})}return n}function yt(n,e,t){return(e=xt(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function xt(n){var e=kt(n,"string");return N(e)=="symbol"?e:e+""}function kt(n,e){if(N(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var a=t.call(n,e||"default");if(N(a)!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var pe={name:"PanelMenu",extends:rt,inheritAttrs:!1,emits:["update:expandedKeys","panel-open","panel-close"],data:function(){return{id:this.$attrs.id,activeItem:null,activeItems:[]}},watch:{"$attrs.id":function(e){this.id=e||F()}},mounted:function(){this.id=this.id||F()},methods:{getItemProp:function(e,t){return e?H(e[t]):void 0},getItemLabel:function(e){return this.getItemProp(e,"label")},getPTOptions:function(e,t,a){return this.ptm(e,{context:{index:a,active:this.isItemActive(t),focused:this.isItemFocused(t),disabled:this.isItemDisabled(t)}})},isItemActive:function(e){return this.expandedKeys?this.expandedKeys[this.getItemProp(e,"key")]:this.multiple?this.activeItems.some(function(t){return _(e,t)}):_(e,this.activeItem)},isItemVisible:function(e){return this.getItemProp(e,"visible")!==!1},isItemDisabled:function(e){return this.getItemProp(e,"disabled")},isItemFocused:function(e){return _(e,this.activeItem)},isItemGroup:function(e){return b(e.items)},getPanelId:function(e){return"".concat(this.id,"_").concat(e)},getPanelKey:function(e){return this.getPanelId(e)},getHeaderId:function(e){return"".concat(this.getPanelId(e),"_header")},getContentId:function(e){return"".concat(this.getPanelId(e),"_content")},onHeaderClick:function(e,t){if(this.isItemDisabled(t)){e.preventDefault();return}t.command&&t.command({originalEvent:e,item:t}),this.changeActiveItem(e,t),K(e.currentTarget)},onHeaderKeyDown:function(e,t){switch(e.code){case"ArrowDown":this.onHeaderArrowDownKey(e);break;case"ArrowUp":this.onHeaderArrowUpKey(e);break;case"Home":this.onHeaderHomeKey(e);break;case"End":this.onHeaderEndKey(e);break;case"Enter":case"NumpadEnter":case"Space":this.onHeaderEnterKey(e,t);break}},onHeaderArrowDownKey:function(e){var t=j(e.currentTarget,"data-p-active")===!0?P(e.currentTarget.nextElementSibling,'[data-pc-section="rootlist"]'):null;t?K(t):this.updateFocusedHeader({originalEvent:e,focusOnNext:!0}),e.preventDefault()},onHeaderArrowUpKey:function(e){var t=this.findPrevHeader(e.currentTarget.parentElement)||this.findLastHeader(),a=j(t,"data-p-active")===!0?P(t.nextElementSibling,'[data-pc-section="rootlist"]'):null;a?K(a):this.updateFocusedHeader({originalEvent:e,focusOnNext:!1}),e.preventDefault()},onHeaderHomeKey:function(e){this.changeFocusedHeader(e,this.findFirstHeader()),e.preventDefault()},onHeaderEndKey:function(e){this.changeFocusedHeader(e,this.findLastHeader()),e.preventDefault()},onHeaderEnterKey:function(e,t){var a=P(e.currentTarget,'[data-pc-section="headerlink"]');a?a.click():this.onHeaderClick(e,t),e.preventDefault()},findNextHeader:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=t?e:e.nextElementSibling,o=P(a,'[data-pc-section="header"]');return o?j(o,"data-p-disabled")?this.findNextHeader(o.parentElement):o:null},findPrevHeader:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=t?e:e.previousElementSibling,o=P(a,'[data-pc-section="header"]');return o?j(o,"data-p-disabled")?this.findPrevHeader(o.parentElement):o:null},findFirstHeader:function(){return this.findNextHeader(this.$el.firstElementChild,!0)},findLastHeader:function(){return this.findPrevHeader(this.$el.lastElementChild,!0)},updateFocusedHeader:function(e){var t=e.originalEvent,a=e.focusOnNext,o=e.selfCheck,i=t.currentTarget.closest('[data-pc-section="panel"]'),c=o?P(i,'[data-pc-section="header"]'):a?this.findNextHeader(i):this.findPrevHeader(i);c?this.changeFocusedHeader(t,c):a?this.onHeaderHomeKey(t):this.onHeaderEndKey(t)},changeActiveItem:function(e,t){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;if(!this.isItemDisabled(t)){var o=this.isItemActive(t),i=o?"panel-close":"panel-open";this.activeItem=a?t:this.activeItem&&_(t,this.activeItem)?null:t,this.multiple&&(this.activeItems.some(function(c){return _(t,c)})?this.activeItems=this.activeItems.filter(function(c){return!_(t,c)}):this.activeItems.push(t)),this.changeExpandedKeys({item:t,expanded:!o}),this.$emit(i,{originalEvent:e,item:t})}},changeExpandedKeys:function(e){var t=e.item,a=e.expanded,o=a===void 0?!1:a;if(this.expandedKeys){var i=vt({},this.expandedKeys);o?i[t.key]=!0:delete i[t.key],this.$emit("update:expandedKeys",i)}},changeFocusedHeader:function(e,t){t&&K(t)},getMenuItemProps:function(e,t){return{icon:l({class:[this.cx("headerIcon"),this.getItemProp(e,"icon")]},this.getPTOptions("headerIcon",e,t)),label:l({class:this.cx("headerLabel")},this.getPTOptions("headerLabel",e,t))}}},components:{PanelMenuList:de,ChevronRightIcon:$,ChevronDownIcon:ce}},wt=["id"],Pt=["id","tabindex","aria-label","aria-expanded","aria-controls","aria-disabled","onClick","onKeydown","data-p-active","data-p-disabled"],Lt=["href"],Kt=["id","aria-labelledby"];function Mt(n,e,t,a,o,i){var c=M("PanelMenuList");return m(),d("div",l({id:o.id,class:n.cx("root")},n.ptmi("root")),[(m(!0),d(L,null,O(n.model,function(u,s){return m(),d(L,{key:i.getPanelKey(s)},[i.isItemVisible(u)?(m(),d("div",l({key:0,style:i.getItemProp(u,"style"),class:[n.cx("panel"),i.getItemProp(u,"class")],ref_for:!0},n.ptm("panel")),[p("div",l({id:i.getHeaderId(s),class:[n.cx("header",{item:u}),i.getItemProp(u,"headerClass")],tabindex:i.isItemDisabled(u)?-1:n.tabindex,role:"button","aria-label":i.getItemLabel(u),"aria-expanded":i.isItemActive(u),"aria-controls":i.getContentId(s),"aria-disabled":i.isItemDisabled(u),onClick:function(f){return i.onHeaderClick(f,u)},onKeydown:function(f){return i.onHeaderKeyDown(f,u)},ref_for:!0},i.getPTOptions("header",u,s),{"data-p-active":i.isItemActive(u),"data-p-disabled":i.isItemDisabled(u)}),[p("div",l({class:n.cx("headerContent"),ref_for:!0},i.getPTOptions("headerContent",u,s)),[n.$slots.item?(m(),y(k(n.$slots.item),{key:1,item:u,root:!0,active:i.isItemActive(u),hasSubmenu:i.isItemGroup(u),label:i.getItemLabel(u),props:i.getMenuItemProps(u,s)},null,8,["item","active","hasSubmenu","label","props"])):(m(),d("a",l({key:0,href:i.getItemProp(u,"url"),class:n.cx("headerLink"),tabindex:-1,ref_for:!0},i.getPTOptions("headerLink",u,s)),[i.getItemProp(u,"items")?C(n.$slots,"submenuicon",{key:0,active:i.isItemActive(u)},function(){return[(m(),y(k(i.isItemActive(u)?"ChevronDownIcon":"ChevronRightIcon"),l({class:n.cx("submenuIcon"),ref_for:!0},i.getPTOptions("submenuIcon",u,s)),null,16,["class"]))]}):I("",!0),n.$slots.headericon?(m(),y(k(n.$slots.headericon),{key:1,item:u,class:E([n.cx("headerIcon"),i.getItemProp(u,"icon")])},null,8,["item","class"])):i.getItemProp(u,"icon")?(m(),d("span",l({key:2,class:[n.cx("headerIcon"),i.getItemProp(u,"icon")],ref_for:!0},i.getPTOptions("headerIcon",u,s)),null,16)):I("",!0),p("span",l({class:n.cx("headerLabel"),ref_for:!0},i.getPTOptions("headerLabel",u,s)),V(i.getItemLabel(u)),17)],16,Lt))],16)],16,Pt),g(q,l({name:"p-toggleable-content",ref_for:!0},n.ptm("transition")),{default:x(function(){return[R(p("div",l({id:i.getContentId(s),class:n.cx("contentContainer"),role:"region","aria-labelledby":i.getHeaderId(s),ref_for:!0},n.ptm("contentContainer")),[i.getItemProp(u,"items")?(m(),d("div",l({key:0,class:n.cx("content"),ref_for:!0},n.ptm("content")),[g(c,{panelId:i.getPanelId(s),items:i.getItemProp(u,"items"),templates:n.$slots,expandedKeys:n.expandedKeys,onItemToggle:i.changeExpandedKeys,onHeaderFocus:i.updateFocusedHeader,pt:n.pt,unstyled:n.unstyled},null,8,["panelId","items","templates","expandedKeys","onItemToggle","onHeaderFocus","pt","unstyled"])],16)):I("",!0)],16,Kt),[[se,i.isItemActive(u)]])]}),_:2},1040)],16)):I("",!0)],64)}),128))],16,wt)}pe.render=Mt;var St=function(e){var t=e.dt;return`
.p-megamenu {
    position: relative;
    display: flex;
    align-items: center;
    background: `.concat(t("megamenu.background"),`;
    border: 1px solid `).concat(t("megamenu.border.color"),`;
    border-radius: `).concat(t("megamenu.border.radius"),`;
    color: `).concat(t("megamenu.color"),`;
    gap: `).concat(t("megamenu.gap"),`;
}

.p-megamenu-start,
.p-megamenu-end {
    display: flex;
    align-items: center;
}

.p-megamenu-root-list {
    margin: 0;
    padding: 0;
    list-style: none;
    outline: 0 none;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    gap: `).concat(t("megamenu.gap"),`;
}

.p-megamenu-root-list > .p-megamenu-item > .p-megamenu-item-content {
    border-radius: `).concat(t("megamenu.base.item.border.radius"),`;
}

.p-megamenu-root-list > .p-megamenu-item > .p-megamenu-item-content > .p-megamenu-item-link {
    padding: `).concat(t("megamenu.base.item.padding"),`;
}

.p-megamenu-item-content {
    transition: background `).concat(t("megamenu.transition.duration"),", color ").concat(t("megamenu.transition.duration"),`;
    border-radius: `).concat(t("megamenu.item.border.radius"),`;
    color: `).concat(t("megamenu.item.color"),`;
}

.p-megamenu-item-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    overflow: hidden;
    position: relative;
    color: inherit;
    padding: `).concat(t("megamenu.item.padding"),`;
    gap: `).concat(t("megamenu.item.gap"),`;
    user-select: none;
    outline: 0 none;
}

.p-megamenu-item-label {
    line-height: 1;
}

.p-megamenu-item-icon {
    color: `).concat(t("megamenu.item.icon.color"),`;
}

.p-megamenu-submenu-icon {
    color: `).concat(t("megamenu.submenu.icon.color"),`;
    font-size: `).concat(t("megamenu.submenu.icon.size"),`;
    width: `).concat(t("megamenu.submenu.icon.size"),`;
    height: `).concat(t("megamenu.submenu.icon.size"),`;
}

.p-megamenu-item.p-focus > .p-megamenu-item-content {
    color: `).concat(t("megamenu.item.focus.color"),`;
    background: `).concat(t("megamenu.item.focus.background"),`;
}

.p-megamenu-item.p-focus > .p-megamenu-item-content .p-megamenu-item-icon {
    color: `).concat(t("megamenu.item.icon.focus.color"),`;
}

.p-megamenu-item.p-focus > .p-megamenu-item-content .p-megamenu-submenu-icon {
    color: `).concat(t("megamenu.submenu.icon.focus.color"),`;
}

.p-megamenu-item:not(.p-disabled) > .p-megamenu-item-content:hover {
    color: `).concat(t("megamenu.item.focus.color"),`;
    background: `).concat(t("megamenu.item.focus.background"),`;
}

.p-megamenu-item:not(.p-disabled) > .p-megamenu-item-content:hover .p-megamenu-item-icon {
    color: `).concat(t("megamenu.item.icon.focus.color"),`;
}

.p-megamenu-item:not(.p-disabled) > .p-megamenu-item-content:hover .p-megamenu-submenu-icon {
    color: `).concat(t("megamenu.submenu.icon.focus.color"),`;
}

.p-megamenu-item-active > .p-megamenu-item-content {
    color: `).concat(t("megamenu.item.active.color"),`;
    background: `).concat(t("megamenu.item.active.background"),`;
}

.p-megamenu-item-active > .p-megamenu-item-content .p-megamenu-item-icon {
    color: `).concat(t("megamenu.item.icon.active.color"),`;
}

.p-megamenu-item-active > .p-megamenu-item-content .p-megamenu-submenu-icon {
    color: `).concat(t("megamenu.submenu.icon.active.color"),`;
}

.p-megamenu-overlay {
    display: none;
    position: absolute;
    width: auto;
    z-index: 1;
    left: 0;
    min-width: 100%;
    padding: `).concat(t("megamenu.overlay.padding"),`;
    background: `).concat(t("megamenu.overlay.background"),`;
    color: `).concat(t("megamenu.overlay.color"),`;
    border: 1px solid `).concat(t("megamenu.overlay.border.color"),`;
    border-radius: `).concat(t("megamenu.overlay.border.radius"),`;
    box-shadow: `).concat(t("megamenu.overlay.shadow"),`;
}

.p-megamenu-overlay:dir(rtl) {
    left: auto;
    right: 0;
}

.p-megamenu-root-list > .p-megamenu-item-active > .p-megamenu-overlay {
    display: block;
}

.p-megamenu-submenu {
    margin: 0;
    list-style: none;
    padding: `).concat(t("megamenu.submenu.padding"),`;
    min-width: 12.5rem;
    display: flex;
    flex-direction: column;
    gap: `).concat(t("megamenu.submenu.gap"),`
}

.p-megamenu-submenu-label {
    padding: `).concat(t("megamenu.submenu.label.padding"),`;
    color: `).concat(t("megamenu.submenu.label.color"),`;
    font-weight: `).concat(t("megamenu.submenu.label.font.weight"),`;
    background: `).concat(t("megamenu.submenu.label.background"),`;
}

.p-megamenu-separator {
    border-block-start: 1px solid `).concat(t("megamenu.separator.border.color"),`;
}

.p-megamenu-horizontal {
    align-items: center;
    padding: `).concat(t("megamenu.horizontal.orientation.padding"),`;
}

.p-megamenu-horizontal .p-megamenu-root-list {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: `).concat(t("megamenu.horizontal.orientation.gap"),`;
}

.p-megamenu-horizontal .p-megamenu-end {
    margin-left: auto;
    align-self: center;
}

.p-megamenu-horizontal .p-megamenu-end:dir(rtl) {
    margin-left: 0;
    margin-right: auto;
}

.p-megamenu-vertical {
    display: inline-flex;
    min-width: 12.5rem;
    flex-direction: column;
    align-items: stretch;
    padding: `).concat(t("megamenu.vertical.orientation.padding"),`;
}

.p-megamenu-vertical .p-megamenu-root-list {
    align-items: stretch;
    flex-direction: column;
    gap: `).concat(t("megamenu.vertical.orientation.gap"),`;
}

.p-megamenu-vertical .p-megamenu-root-list > .p-megamenu-item-active > .p-megamenu-overlay {
    left: 100%;
    top: 0;
}

.p-megamenu-vertical .p-megamenu-root-list > .p-megamenu-item-active > .p-megamenu-overlay:dir(rtl) {
    left: auto;
    right: 100%;
}

.p-megamenu-vertical .p-megamenu-root-list > .p-megamenu-item > .p-megamenu-item-content .p-megamenu-submenu-icon {
    margin-left: auto;
}

.p-megamenu-vertical .p-megamenu-root-list > .p-megamenu-item > .p-megamenu-item-content .p-megamenu-submenu-icon:dir(rtl) {
    margin-left: 0;
    margin-right: auto;
    transform: rotate(180deg);
}

.p-megamenu-grid {
    display: flex;
}

.p-megamenu-col-2,
.p-megamenu-col-3,
.p-megamenu-col-4,
.p-megamenu-col-6,
.p-megamenu-col-12 {
    flex: 0 0 auto;
    padding: `).concat(t("megamenu.overlay.gap"),`;
}

.p-megamenu-col-2 {
    width: 16.6667%;
}

.p-megamenu-col-3 {
    width: 25%;
}

.p-megamenu-col-4 {
    width: 33.3333%;
}

.p-megamenu-col-6 {
    width: 50%;
}

.p-megamenu-col-12 {
    width: 100%;
}

.p-megamenu-button {
    display: none;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: `).concat(t("megamenu.mobile.button.size"),`;
    height: `).concat(t("megamenu.mobile.button.size"),`;
    position: relative;
    color: `).concat(t("megamenu.mobile.button.color"),`;
    border: 0 none;
    background: transparent;
    border-radius: `).concat(t("megamenu.mobile.button.border.radius"),`;
    transition: background `).concat(t("megamenu.transition.duration"),", color ").concat(t("megamenu.transition.duration"),", outline-color ").concat(t("megamenu.transition.duration"),", box-shadow ").concat(t("megamenu.transition.duration"),`;
    outline-color: transparent;
}

.p-megamenu-button:hover {
    color: `).concat(t("megamenu.mobile.button.hover.color"),`;
    background: `).concat(t("megamenu.mobile.button.hover.background"),`;
}

.p-megamenu-button:focus-visible {
    box-shadow: `).concat(t("megamenu.mobile.button.focus.ring.shadow"),`;
    outline: `).concat(t("megamenu.mobile.button.focus.ring.width")," ").concat(t("megamenu.mobile.button.focus.ring.style")," ").concat(t("megamenu.mobile.button.focus.ring.color"),`;
    outline-offset: `).concat(t("megamenu.mobile.button.focus.ring.offset"),`;
}

.p-megamenu-mobile {
    display: flex;
}

.p-megamenu-mobile .p-megamenu-button {
    display: flex;
}

.p-megamenu-mobile .p-megamenu-root-list {
    position: absolute;
    display: none;
    flex-direction: column;
    top: 100%;
    left: 0;
    z-index: 1;
    width: 100%;
    padding: `).concat(t("megamenu.submenu.padding"),`;
    gap: `).concat(t("megamenu.submenu.gap"),`;
    background: `).concat(t("megamenu.overlay.background"),`;
    border: 1px solid `).concat(t("megamenu.overlay.border.color"),`;
    box-shadow: `).concat(t("megamenu.overlay.shadow"),`;
}

.p-megamenu-mobile .p-megamenu-root-list:dir(rtl) {
    left: auto;
    right: 0;
}

.p-megamenu-mobile-active .p-megamenu-root-list {
    display: block;
}

.p-megamenu-mobile .p-megamenu-root-list .p-megamenu-item {
    width: 100%;
    position: static;
}

.p-megamenu-mobile .p-megamenu-overlay {
    position: static;
    border: 0 none;
    border-radius: 0;
    box-shadow: none;
}

.p-megamenu-mobile .p-megamenu-grid {
    flex-wrap: wrap;
    overflow: auto;
    max-height: 90%;
}

.p-megamenu-mobile .p-megamenu-root-list > .p-megamenu-item > .p-megamenu-item-content .p-megamenu-submenu-icon {
    margin-left: auto;
    transition: transform 0.2s;
}

.p-megamenu-mobile .p-megamenu-root-list > .p-megamenu-item > .p-megamenu-item-content .p-megamenu-submenu-icon:dir(rtl) {
    margin-left: 0;
    margin-right: auto;
}

.p-megamenu-mobile .p-megamenu-root-list > .p-megamenu-item-active > .p-megamenu-item-content .p-megamenu-submenu-icon {
    transform: rotate(-180deg);
}
`)},Ct={rootList:function(e){var t=e.props;return{"max-height":t.scrollHeight,overflow:"auto"}}},At={root:function(e){var t=e.instance;return["p-megamenu p-component",{"p-megamenu-mobile":t.queryMatches,"p-megamenu-mobile-active":t.mobileActive,"p-megamenu-horizontal":t.horizontal,"p-megamenu-vertical":t.vertical}]},start:"p-megamenu-start",button:"p-megamenu-button",rootList:"p-megamenu-root-list",submenuLabel:function(e){var t=e.instance,a=e.processedItem;return["p-megamenu-submenu-label",{"p-disabled":t.isItemDisabled(a)}]},item:function(e){var t=e.instance,a=e.processedItem;return["p-megamenu-item",{"p-megamenu-item-active":t.isItemActive(a),"p-focus":t.isItemFocused(a),"p-disabled":t.isItemDisabled(a)}]},itemContent:"p-megamenu-item-content",itemLink:"p-megamenu-item-link",itemIcon:"p-megamenu-item-icon",itemLabel:"p-megamenu-item-label",submenuIcon:"p-megamenu-submenu-icon",overlay:"p-megamenu-overlay",grid:"p-megamenu-grid",column:function(e){var t=e.instance,a=e.processedItem,o=t.isItemGroup(a)?a.items.length:0,i;if(t.$parentInstance.queryMatches)i="p-megamenu-col-12";else switch(o){case 2:i="p-megamenu-col-6";break;case 3:i="p-megamenu-col-4";break;case 4:i="p-megamenu-col-3";break;case 6:i="p-megamenu-col-2";break;default:i="p-megamenu-col-12";break}return i},submenu:"p-megamenu-submenu",separator:"p-megamenu-separator",end:"p-megamenu-end"},Et=z.extend({name:"megamenu",theme:St,classes:At,inlineStyles:Ct}),Ft={name:"BaseMegaMenu",extends:S,props:{model:{type:Array,default:null},orientation:{type:String,default:"horizontal"},breakpoint:{type:String,default:"960px"},disabled:{type:Boolean,default:!1},tabindex:{type:Number,default:0},scrollHeight:{type:String,default:"20rem"},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:Et,provide:function(){return{$pcMegaMenu:this,$parentInstance:this}}},fe={name:"MegaMenuSub",hostName:"MegaMenu",extends:S,emits:["item-click","item-mouseenter"],props:{menuId:{type:String,default:null},focusedItemId:{type:String,default:null},horizontal:{type:Boolean,default:!1},submenu:{type:Object,default:null},mobileActive:{type:Boolean,default:!1},items:{type:Array,default:null},level:{type:Number,default:0},templates:{type:Object,default:null},activeItem:{type:Object,default:null},tabindex:{type:Number,default:0}},methods:{getSubListId:function(e){return"".concat(this.getItemId(e),"_list")},getSubListKey:function(e){return this.getSubListId(e)},getItemId:function(e){return"".concat(this.menuId,"_").concat(e.key)},getItemKey:function(e){return this.getItemId(e)},getItemProp:function(e,t,a){return e&&e.item?H(e.item[t],a):void 0},getItemLabel:function(e){return this.getItemProp(e,"label")},getPTOptions:function(e,t,a){return this.ptm(a,{context:{item:e.item,index:t,active:this.isItemActive(e),focused:this.isItemFocused(e),disabled:this.isItemDisabled(e)}})},isItemActive:function(e){return b(this.activeItem)?this.activeItem.key===e.key:!1},isItemVisible:function(e){return this.getItemProp(e,"visible")!==!1},isItemDisabled:function(e){return this.getItemProp(e,"disabled")},isItemFocused:function(e){return this.focusedItemId===this.getItemId(e)},isItemGroup:function(e){return b(e.items)},onItemClick:function(e,t){this.getItemProp(t,"command",{originalEvent:e,item:t.item}),this.$emit("item-click",{originalEvent:e,processedItem:t,isFocus:!0})},onItemMouseEnter:function(e,t){this.$emit("item-mouseenter",{originalEvent:e,processedItem:t})},getAriaSetSize:function(){var e=this;return this.items.filter(function(t){return e.isItemVisible(t)&&!e.getItemProp(t,"separator")}).length},getAriaPosInset:function(e){var t=this;return e-this.items.slice(0,e).filter(function(a){return t.isItemVisible(a)&&t.getItemProp(a,"separator")}).length+1},getMenuItemProps:function(e,t){return{action:l({class:this.cx("itemLink"),tabindex:-1},this.getPTOptions(e,t,"itemLink")),icon:l({class:[this.cx("itemIcon"),this.getItemProp(e,"icon")]},this.getPTOptions(e,t,"itemIcon")),label:l({class:this.cx("label")},this.getPTOptions(e,t,"label")),submenuicon:l({class:this.cx("submenuIcon")},this.getPTOptions(e,t,"submenuIcon"))}}},components:{AngleRightIcon:le,AngleDownIcon:We},directives:{ripple:Y}},Dt=["tabindex"],Ot=["id","aria-label","aria-disabled","aria-expanded","aria-haspopup","aria-level","aria-setsize","aria-posinset","data-p-active","data-p-focused","data-p-disabled"],Tt=["onClick","onMouseenter"],Vt=["href","target"],zt=["id"];function Ht(n,e,t,a,o,i){var c=M("MegaMenuSub",!0),u=Q("ripple");return m(),d("ul",l({class:t.level===0?n.cx("rootList"):n.cx("submenu"),tabindex:t.tabindex},t.level===0?n.ptm("rootList"):n.ptm("submenu")),[t.submenu?(m(),d("li",l({key:0,class:[n.cx("submenuLabel",{submenu:t.submenu}),i.getItemProp(t.submenu,"class")],style:i.getItemProp(t.submenu,"style"),role:"presentation"},n.ptm("submenuLabel")),V(i.getItemLabel(t.submenu)),17)):I("",!0),(m(!0),d(L,null,O(t.items,function(s,r){return m(),d(L,{key:i.getItemKey(s)},[i.isItemVisible(s)&&!i.getItemProp(s,"separator")?(m(),d("li",l({key:0,id:i.getItemId(s),style:i.getItemProp(s,"style"),class:[n.cx("item",{processedItem:s}),i.getItemProp(s,"class")],role:"menuitem","aria-label":i.getItemLabel(s),"aria-disabled":i.isItemDisabled(s)||void 0,"aria-expanded":i.isItemGroup(s)?i.isItemActive(s):void 0,"aria-haspopup":i.isItemGroup(s)&&!i.getItemProp(s,"to")?"menu":void 0,"aria-level":t.level+1,"aria-setsize":i.getAriaSetSize(),"aria-posinset":i.getAriaPosInset(r),ref_for:!0},i.getPTOptions(s,r,"item"),{"data-p-active":i.isItemActive(s),"data-p-focused":i.isItemFocused(s),"data-p-disabled":i.isItemDisabled(s)}),[p("div",l({class:n.cx("itemContent"),onClick:function(v){return i.onItemClick(v,s)},onMouseenter:function(v){return i.onItemMouseEnter(v,s)},ref_for:!0},i.getPTOptions(s,r,"itemContent")),[t.templates.item?(m(),y(k(t.templates.item),{key:1,item:s.item,hasSubmenu:i.isItemGroup(s),label:i.getItemLabel(s),props:i.getMenuItemProps(s,r)},null,8,["item","hasSubmenu","label","props"])):R((m(),d("a",l({key:0,href:i.getItemProp(s,"url"),class:n.cx("itemLink"),target:i.getItemProp(s,"target"),tabindex:"-1",ref_for:!0},i.getPTOptions(s,r,"itemLink")),[t.templates.itemicon?(m(),y(k(t.templates.itemicon),{key:0,item:s.item,class:E(n.cx("itemIcon"))},null,8,["item","class"])):i.getItemProp(s,"icon")?(m(),d("span",l({key:1,class:[n.cx("itemIcon"),i.getItemProp(s,"icon")],ref_for:!0},i.getPTOptions(s,r,"itemIcon")),null,16)):I("",!0),p("span",l({class:n.cx("itemLabel"),ref_for:!0},i.getPTOptions(s,r,"itemLabel")),V(i.getItemLabel(s)),17),i.isItemGroup(s)?(m(),d(L,{key:2},[t.templates.submenuicon?(m(),y(k(t.templates.submenuicon),l({key:0,active:i.isItemActive(s),class:n.cx("submenuIcon"),ref_for:!0},i.getPTOptions(s,r,"submenuIcon")),null,16,["active","class"])):(m(),y(k(t.horizontal||t.mobileActive?"AngleDownIcon":"AngleRightIcon"),l({key:1,class:n.cx("submenuIcon"),ref_for:!0},i.getPTOptions(s,r,"submenuIcon")),null,16,["class"]))],64)):I("",!0)],16,Vt)),[[u]])],16,Tt),i.isItemVisible(s)&&i.isItemGroup(s)?(m(),d("div",l({key:0,class:n.cx("overlay"),ref_for:!0},n.ptm("overlay")),[p("div",l({class:n.cx("grid"),ref_for:!0},n.ptm("grid")),[(m(!0),d(L,null,O(s.items,function(f){return m(),d("div",l({key:i.getItemKey(f),class:n.cx("column",{processedItem:s}),ref_for:!0},n.ptm("column")),[(m(!0),d(L,null,O(f,function(v){return m(),y(c,{key:i.getSubListKey(v),id:i.getSubListId(v),style:re(n.sx("submenu",!0,{processedItem:s})),role:"menu",menuId:t.menuId,focusedItemId:t.focusedItemId,submenu:v,items:v.items,templates:t.templates,level:t.level+1,mobileActive:t.mobileActive,pt:n.pt,unstyled:n.unstyled,onItemClick:e[0]||(e[0]=function(w){return n.$emit("item-click",w)}),onItemMouseenter:e[1]||(e[1]=function(w){return n.$emit("item-mouseenter",w)})},null,8,["id","style","menuId","focusedItemId","submenu","items","templates","level","mobileActive","pt","unstyled"])}),128))],16)}),128))],16)],16)):I("",!0)],16,Ot)):I("",!0),i.isItemVisible(s)&&i.getItemProp(s,"separator")?(m(),d("li",l({key:1,id:i.getItemId(s),class:[n.cx("separator"),i.getItemProp(s,"class")],style:i.getItemProp(s,"style"),role:"separator",ref_for:!0},n.ptm("separator")),null,16,zt)):I("",!0)],64)}),128))],16,Dt)}fe.render=Ht;var he={name:"MegaMenu",extends:Ft,inheritAttrs:!1,emits:["focus","blur"],outsideClickListener:null,resizeListener:null,matchMediaListener:null,container:null,menubar:null,searchTimeout:null,searchValue:null,data:function(){return{id:this.$attrs.id,mobileActive:!1,focused:!1,focusedItemInfo:{index:-1,key:"",parentKey:""},activeItem:null,dirty:!1,query:null,queryMatches:!1}},watch:{"$attrs.id":function(e){this.id=e||F()},activeItem:function(e){b(e)?(this.bindOutsideClickListener(),this.bindResizeListener()):(this.unbindOutsideClickListener(),this.unbindResizeListener())}},mounted:function(){this.id=this.id||F(),this.bindMatchMediaListener()},beforeUnmount:function(){this.mobileActive=!1,this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindMatchMediaListener()},methods:{getItemProp:function(e,t){return e?H(e[t]):void 0},getItemLabel:function(e){return this.getItemProp(e,"label")},isItemDisabled:function(e){return this.getItemProp(e,"disabled")},isItemVisible:function(e){return this.getItemProp(e,"visible")!==!1},isItemGroup:function(e){return b(this.getItemProp(e,"items"))},isItemSeparator:function(e){return this.getItemProp(e,"separator")},getProccessedItemLabel:function(e){return e?this.getItemLabel(e.item):void 0},isProccessedItemGroup:function(e){return e&&b(e.items)},toggle:function(e){var t=this;this.mobileActive?(this.mobileActive=!1,B.clear(this.menubar),this.hide()):(this.mobileActive=!0,B.set("menu",this.menubar,this.$primevue.config.zIndex.menu),setTimeout(function(){t.show()},1)),this.bindOutsideClickListener(),e.preventDefault()},show:function(){this.focusedItemInfo={index:this.findFirstFocusedItemIndex(),level:0,parentKey:""},K(this.menubar)},hide:function(e,t){var a=this;this.mobileActive&&(this.mobileActive=!1,setTimeout(function(){K(a.$refs.menubutton,{preventScroll:!0})},1)),this.activeItem=null,this.focusedItemInfo={index:-1,key:"",parentKey:""},t&&K(this.menubar),this.dirty=!1},onFocus:function(e){if(this.focused=!0,this.focusedItemInfo.index===-1){var t=this.findFirstFocusedItemIndex(),a=this.findVisibleItem(t);this.focusedItemInfo={index:t,key:a.key,parentKey:a.parentKey}}this.$emit("focus",e)},onBlur:function(e){this.focused=!1,this.focusedItemInfo={index:-1,key:"",parentKey:""},this.searchValue="",this.dirty=!1,this.$emit("blur",e)},onKeyDown:function(e){if(this.disabled){e.preventDefault();return}var t=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Space":this.onSpaceKey(e);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!t&&J(e.key)&&this.searchItems(e,e.key);break}},onItemChange:function(e){var t=e.processedItem,a=e.isFocus;if(!T(t)){var o=t.index,i=t.key,c=t.parentKey,u=t.items,s=b(u);s&&(this.activeItem=t),this.focusedItemInfo={index:o,key:i,parentKey:c},s&&(this.dirty=!0),a&&K(this.menubar)}},onItemClick:function(e){var t=e.originalEvent,a=e.processedItem,o=this.isProccessedItemGroup(a),i=T(a.parent),c=this.isSelected(a);if(c){var u=a.index,s=a.key,r=a.parentKey;this.activeItem=null,this.focusedItemInfo={index:u,key:s,parentKey:r},this.dirty=!i,this.mobileActive||K(this.menubar,{preventScroll:!0})}else o?this.onItemChange(e):this.hide(t)},onItemMouseEnter:function(e){!this.mobileActive&&this.dirty&&this.onItemChange(e)},menuButtonClick:function(e){this.toggle(e)},menuButtonKeydown:function(e){(e.code==="Enter"||e.code==="NumpadEnter"||e.code==="Space")&&this.menuButtonClick(e)},onArrowDownKey:function(e){if(this.horizontal)if(b(this.activeItem)&&this.activeItem.key===this.focusedItemInfo.key)this.focusedItemInfo={index:-1,key:"",parentKey:this.activeItem.key};else{var t=this.findVisibleItem(this.focusedItemInfo.index),a=this.isProccessedItemGroup(t);a&&(this.onItemChange({originalEvent:e,processedItem:t}),this.focusedItemInfo={index:-1,key:t.key,parentKey:t.parentKey},this.searchValue="")}var o=this.focusedItemInfo.index!==-1?this.findNextItemIndex(this.focusedItemInfo.index):this.findFirstFocusedItemIndex();this.changeFocusedItemInfo(e,o),e.preventDefault()},onArrowUpKey:function(e){if(e.altKey&&this.horizontal){if(this.focusedItemInfo.index!==-1){var t=this.findVisibleItem(this.focusedItemInfo.index),a=this.isProccessedItemGroup(t);!a&&b(this.activeItem)&&(this.focusedItemInfo.index===0?(this.focusedItemInfo={index:this.activeItem.index,key:this.activeItem.key,parentKey:this.activeItem.parentKey},this.activeItem=null):this.changeFocusedItemInfo(e,this.findFirstItemIndex()))}e.preventDefault()}else{var o=this.focusedItemInfo.index!==-1?this.findPrevItemIndex(this.focusedItemInfo.index):this.findLastFocusedItemIndex();this.changeFocusedItemInfo(e,o),e.preventDefault()}},onArrowLeftKey:function(e){var t=this.findVisibleItem(this.focusedItemInfo.index),a=this.isProccessedItemGroup(t);if(a){if(this.horizontal){var o=this.focusedItemInfo.index!==-1?this.findPrevItemIndex(this.focusedItemInfo.index):this.findLastFocusedItemIndex();this.changeFocusedItemInfo(e,o)}}else{this.vertical&&b(this.activeItem)&&t.columnIndex===0&&(this.focusedItemInfo={index:this.activeItem.index,key:this.activeItem.key,parentKey:this.activeItem.parentKey},this.activeItem=null);var i=t.columnIndex-1,c=this.visibleItems.findIndex(function(u){return u.columnIndex===i});c!==-1&&this.changeFocusedItemInfo(e,c)}e.preventDefault()},onArrowRightKey:function(e){var t=this.findVisibleItem(this.focusedItemInfo.index),a=this.isProccessedItemGroup(t);if(a){if(this.vertical)if(b(this.activeItem)&&this.activeItem.key===t.key)this.focusedItemInfo={index:-1,key:"",parentKey:this.activeItem.key};else{var o=this.findVisibleItem(this.focusedItemInfo.index),i=this.isProccessedItemGroup(o);i&&(this.onItemChange({originalEvent:e,processedItem:o}),this.focusedItemInfo={index:-1,key:o.key,parentKey:o.parentKey},this.searchValue="")}var c=this.focusedItemInfo.index!==-1?this.findNextItemIndex(this.focusedItemInfo.index):this.findFirstFocusedItemIndex();this.changeFocusedItemInfo(e,c)}else{var u=t.columnIndex+1,s=this.visibleItems.findIndex(function(r){return r.columnIndex===u});s!==-1&&this.changeFocusedItemInfo(e,s)}e.preventDefault()},onHomeKey:function(e){this.changeFocusedItemInfo(e,this.findFirstItemIndex()),e.preventDefault()},onEndKey:function(e){this.changeFocusedItemInfo(e,this.findLastItemIndex()),e.preventDefault()},onEnterKey:function(e){if(this.focusedItemInfo.index!==-1){var t=P(this.menubar,'li[id="'.concat("".concat(this.focusedItemId),'"]')),a=t&&P(t,'a[data-pc-section="itemlink"]');a?a.click():t&&t.click();var o=this.visibleItems[this.focusedItemInfo.index],i=this.isProccessedItemGroup(o);!i&&this.changeFocusedItemInfo(e,this.findFirstFocusedItemIndex())}e.preventDefault()},onSpaceKey:function(e){this.onEnterKey(e)},onEscapeKey:function(e){b(this.activeItem)&&(this.focusedItemInfo={index:this.activeItem.index,key:this.activeItem.key},this.activeItem=null),e.preventDefault()},onTabKey:function(e){if(this.focusedItemInfo.index!==-1){var t=this.findVisibleItem(this.focusedItemInfo.index),a=this.isProccessedItemGroup(t);!a&&this.onItemChange({originalEvent:e,processedItem:t})}this.hide()},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(t){var a=e.container&&!e.container.contains(t.target),o=!(e.target&&(e.target===t.target||e.target.contains(t.target)));a&&o&&e.hide()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(t){ue()||e.hide(t,!0),e.mobileActive=!1},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},bindMatchMediaListener:function(){var e=this;if(!this.matchMediaListener){var t=matchMedia("(max-width: ".concat(this.breakpoint,")"));this.query=t,this.queryMatches=t.matches,this.matchMediaListener=function(){e.queryMatches=t.matches,e.mobileActive=!1},this.query.addEventListener("change",this.matchMediaListener)}},unbindMatchMediaListener:function(){this.matchMediaListener&&(this.query.removeEventListener("change",this.matchMediaListener),this.matchMediaListener=null)},isItemMatched:function(e){var t;return this.isValidItem(e)&&((t=this.getProccessedItemLabel(e))===null||t===void 0?void 0:t.toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase()))},isValidItem:function(e){return!!e&&!this.isItemDisabled(e.item)&&!this.isItemSeparator(e.item)&&this.isItemVisible(e.item)},isValidSelectedItem:function(e){return this.isValidItem(e)&&this.isSelected(e)},isSelected:function(e){return b(this.activeItem)?this.activeItem.key===e.key:!1},findFirstItemIndex:function(){var e=this;return this.visibleItems.findIndex(function(t){return e.isValidItem(t)})},findLastItemIndex:function(){var e=this;return U(this.visibleItems,function(t){return e.isValidItem(t)})},findNextItemIndex:function(e){var t=this,a=e<this.visibleItems.length-1?this.visibleItems.slice(e+1).findIndex(function(o){return t.isValidItem(o)}):-1;return a>-1?a+e+1:e},findPrevItemIndex:function(e){var t=this,a=e>0?U(this.visibleItems.slice(0,e),function(o){return t.isValidItem(o)}):-1;return a>-1?a:e},findSelectedItemIndex:function(){var e=this;return this.visibleItems.findIndex(function(t){return e.isValidSelectedItem(t)})},findFirstFocusedItemIndex:function(){var e=this.findSelectedItemIndex();return e<0?this.findFirstItemIndex():e},findLastFocusedItemIndex:function(){var e=this.findSelectedItemIndex();return e<0?this.findLastItemIndex():e},findVisibleItem:function(e){return b(this.visibleItems)?this.visibleItems[e]:null},searchItems:function(e,t){var a=this;this.searchValue=(this.searchValue||"")+t;var o=-1,i=!1;return this.focusedItemInfo.index!==-1?(o=this.visibleItems.slice(this.focusedItemInfo.index).findIndex(function(c){return a.isItemMatched(c)}),o=o===-1?this.visibleItems.slice(0,this.focusedItemInfo.index).findIndex(function(c){return a.isItemMatched(c)}):o+this.focusedItemInfo.index):o=this.visibleItems.findIndex(function(c){return a.isItemMatched(c)}),o!==-1&&(i=!0),o===-1&&this.focusedItemInfo.index===-1&&(o=this.findFirstFocusedItemIndex()),o!==-1&&this.changeFocusedItemInfo(e,o),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(function(){a.searchValue="",a.searchTimeout=null},500),i},changeFocusedItemInfo:function(e,t){var a=this.findVisibleItem(t);this.focusedItemInfo.index=t,this.focusedItemInfo.key=b(a)?a.key:"",this.scrollInView()},scrollInView:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:-1,t=e!==-1?"".concat(this.id,"_").concat(e):this.focusedItemId,a;t===null&&this.queryMatches?a=this.$refs.menubutton:a=P(this.menubar,'li[id="'.concat(t,'"]')),a&&a.scrollIntoView&&a.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})},createProcessedItems:function(e){var t=this,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"",c=arguments.length>4?arguments[4]:void 0,u=[];return e&&e.forEach(function(s,r){var f=(i!==""?i+"_":"")+(c!==void 0?c+"_":"")+r,v={item:s,index:r,level:a,key:f,parent:o,parentKey:i,columnIndex:c!==void 0?c:o.columnIndex!==void 0?o.columnIndex:r};v.items=a===0&&s.items&&s.items.length>0?s.items.map(function(w,W){return t.createProcessedItems(w,a+1,v,f,W)}):t.createProcessedItems(s.items,a+1,v,f),u.push(v)}),u},containerRef:function(e){this.container=e},menubarRef:function(e){this.menubar=e?e.$el:void 0}},computed:{processedItems:function(){return this.createProcessedItems(this.model||[])},visibleItems:function(){var e=b(this.activeItem)?this.activeItem:null;return e&&e.key===this.focusedItemInfo.parentKey?e.items.reduce(function(t,a){return a.forEach(function(o){o.items.forEach(function(i){t.push(i)})}),t},[]):this.processedItems},horizontal:function(){return this.orientation==="horizontal"},vertical:function(){return this.orientation==="vertical"},focusedItemId:function(){return b(this.focusedItemInfo.key)?"".concat(this.id,"_").concat(this.focusedItemInfo.key):null}},components:{MegaMenuSub:fe,BarsIcon:qe}},_t=["id"],Bt=["aria-haspopup","aria-expanded","aria-controls","aria-label"];function Rt(n,e,t,a,o,i){var c=M("BarsIcon"),u=M("MegaMenuSub");return m(),d("div",l({ref:i.containerRef,id:o.id,class:n.cx("root")},n.ptmi("root")),[n.$slots.start?(m(),d("div",l({key:0,class:n.cx("start")},n.ptm("start")),[C(n.$slots,"start")],16)):I("",!0),C(n.$slots,n.$slots.button?"button":"menubutton",{id:o.id,class:E(n.cx("button")),toggleCallback:function(r){return i.menuButtonClick(r)}},function(){var s;return[n.model&&n.model.length>0?(m(),d("a",l({key:0,ref:"menubutton",role:"button",tabindex:"0",class:n.cx("button"),"aria-haspopup":!!(n.model.length&&n.model.length>0),"aria-expanded":o.mobileActive,"aria-controls":o.id,"aria-label":(s=n.$primevue.config.locale.aria)===null||s===void 0?void 0:s.navigation,onClick:e[0]||(e[0]=function(r){return i.menuButtonClick(r)}),onKeydown:e[1]||(e[1]=function(r){return i.menuButtonKeydown(r)})},n.ptm("button")),[C(n.$slots,n.$slots.buttonicon?"buttonicon":"menubuttonicon",{},function(){return[g(c,ze(He(n.ptm("buttonIcon"))),null,16)]})],16,Bt)):I("",!0)]}),g(u,{ref:i.menubarRef,id:o.id+"_list",tabindex:n.disabled?-1:n.tabindex,role:"menubar","aria-label":n.ariaLabel,"aria-labelledby":n.ariaLabelledby,"aria-disabled":n.disabled||void 0,"aria-orientation":n.orientation,"aria-activedescendant":o.focused?i.focusedItemId:void 0,menuId:o.id,focusedItemId:o.focused?i.focusedItemId:void 0,items:i.processedItems,horizontal:i.horizontal,templates:n.$slots,activeItem:o.activeItem,mobileActive:o.mobileActive,level:0,style:re(n.sx("rootList")),pt:n.pt,unstyled:n.unstyled,onFocus:i.onFocus,onBlur:i.onBlur,onKeydown:i.onKeyDown,onItemClick:i.onItemClick,onItemMouseenter:i.onItemMouseEnter},null,8,["id","tabindex","aria-label","aria-labelledby","aria-disabled","aria-orientation","aria-activedescendant","menuId","focusedItemId","items","horizontal","templates","activeItem","mobileActive","style","pt","unstyled","onFocus","onBlur","onKeydown","onItemClick","onItemMouseenter"]),n.$slots.end?(m(),d("div",l({key:1,class:n.cx("end")},n.ptm("end")),[C(n.$slots,"end")],16)):I("",!0)],16,_t)}he.render=Rt;var Nt=function(e){var t=e.dt;return`
.p-contextmenu {
    background: `.concat(t("contextmenu.background"),`;
    color: `).concat(t("contextmenu.color"),`;
    border: 1px solid `).concat(t("contextmenu.border.color"),`;
    border-radius: `).concat(t("contextmenu.border.radius"),`;
    box-shadow: `).concat(t("contextmenu.shadow"),`;
    min-width: 12.5rem;
}

.p-contextmenu-root-list,
.p-contextmenu-submenu {
    margin: 0;
    padding: `).concat(t("contextmenu.list.padding"),`;
    list-style: none;
    outline: 0 none;
    display: flex;
    flex-direction: column;
    gap: `).concat(t("contextmenu.list.gap"),`;
}

.p-contextmenu-submenu {
    position: absolute;
    display: flex;
    flex-direction: column;
    min-width: 100%;
    z-index: 1;
    background: `).concat(t("contextmenu.background"),`;
    color: `).concat(t("contextmenu.color"),`;
    border: 1px solid `).concat(t("contextmenu.border.color"),`;
    border-radius: `).concat(t("contextmenu.border.radius"),`;
    box-shadow: `).concat(t("contextmenu.shadow"),`;
}

.p-contextmenu-item {
    position: relative;
}

.p-contextmenu-item-content {
    transition: background `).concat(t("contextmenu.transition.duration"),", color ").concat(t("contextmenu.transition.duration"),`;
    border-radius: `).concat(t("contextmenu.item.border.radius"),`;
    color: `).concat(t("contextmenu.item.color"),`;
}

.p-contextmenu-item-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    overflow: hidden;
    position: relative;
    color: inherit;
    padding: `).concat(t("contextmenu.item.padding"),`;
    gap: `).concat(t("contextmenu.item.gap"),`;
    user-select: none;
}

.p-contextmenu-item-label {
    line-height: 1;
}

.p-contextmenu-item-icon {
    color: `).concat(t("contextmenu.item.icon.color"),`;
}

.p-contextmenu-submenu-icon {
    color: `).concat(t("contextmenu.submenu.icon.color"),`;
    margin-left: auto;
    font-size: `).concat(t("contextmenu.submenu.icon.size"),`;
    width: `).concat(t("contextmenu.submenu.icon.size"),`;
    height: `).concat(t("contextmenu.submenu.icon.size"),`;
}

.p-contextmenu-submenu-icon:dir(rtl) {
    margin-left: 0;
    margin-right: auto;
}

.p-contextmenu-item.p-focus > .p-contextmenu-item-content {
    color: `).concat(t("contextmenu.item.focus.color"),`;
    background: `).concat(t("contextmenu.item.focus.background"),`;
}

.p-contextmenu-item.p-focus > .p-contextmenu-item-content .p-contextmenu-item-icon {
    color: `).concat(t("contextmenu.item.icon.focus.color"),`;
}

.p-contextmenu-item.p-focus > .p-contextmenu-item-content .p-contextmenu-submenu-icon {
    color: `).concat(t("contextmenu.submenu.icon.focus.color"),`;
}

.p-contextmenu-item:not(.p-disabled) > .p-contextmenu-item-content:hover {
    color: `).concat(t("contextmenu.item.focus.color"),`;
    background: `).concat(t("contextmenu.item.focus.background"),`;
}

.p-contextmenu-item:not(.p-disabled) > .p-contextmenu-item-content:hover .p-contextmenu-item-icon {
    color: `).concat(t("contextmenu.item.icon.focus.color"),`;
}

.p-contextmenu-item:not(.p-disabled) > .p-contextmenu-item-content:hover .p-contextmenu-submenu-icon {
    color: `).concat(t("contextmenu.submenu.icon.focus.color"),`;
}

.p-contextmenu-item-active > .p-contextmenu-item-content {
    color: `).concat(t("contextmenu.item.active.color"),`;
    background: `).concat(t("contextmenu.item.active.background"),`;
}

.p-contextmenu-item-active > .p-contextmenu-item-content .p-contextmenu-item-icon {
    color: `).concat(t("contextmenu.item.icon.active.color"),`;
}

.p-contextmenu-item-active > .p-contextmenu-item-content .p-contextmenu-submenu-icon {
    color: `).concat(t("contextmenu.submenu.icon.active.color"),`;
}

.p-contextmenu-separator {
    border-block-start: 1px solid `).concat(t("contextmenu.separator.border.color"),`;
}

.p-contextmenu-enter-from,
.p-contextmenu-leave-active {
    opacity: 0;
}

.p-contextmenu-enter-active {
    transition: opacity 250ms;
}

.p-contextmenu-mobile .p-contextmenu-submenu {
    position: static;
    box-shadow: none;
    border: 0 none;
    padding-inline-start: `).concat(t("tieredmenu.submenu.mobile.indent"),`;
    padding-inline-end: 0;
}

.p-contextmenu-mobile .p-contextmenu-submenu-icon {
    transition: transform 0.2s;
    transform: rotate(90deg);
}

.p-contextmenu-mobile .p-contextmenu-item-active > .p-contextmenu-item-content .p-contextmenu-submenu-icon {
    transform: rotate(-90deg);
}
`)},Gt={root:function(e){var t=e.instance;return["p-contextmenu p-component",{"p-contextmenu-mobile":t.queryMatches}]},rootList:"p-contextmenu-root-list",item:function(e){var t=e.instance,a=e.processedItem;return["p-contextmenu-item",{"p-contextmenu-item-active":t.isItemActive(a),"p-focus":t.isItemFocused(a),"p-disabled":t.isItemDisabled(a)}]},itemContent:"p-contextmenu-item-content",itemLink:"p-contextmenu-item-link",itemIcon:"p-contextmenu-item-icon",itemLabel:"p-contextmenu-item-label",submenuIcon:"p-contextmenu-submenu-icon",submenu:"p-contextmenu-submenu",separator:"p-contextmenu-separator"},jt=z.extend({name:"contextmenu",theme:Nt,classes:Gt}),Ut={name:"BaseContextMenu",extends:S,props:{model:{type:Array,default:null},appendTo:{type:[String,Object],default:"body"},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},global:{type:Boolean,default:!1},breakpoint:{type:String,default:"960px"},tabindex:{type:Number,default:0},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:jt,provide:function(){return{$pcContextMenu:this,$parentInstance:this}}},be={name:"ContextMenuSub",hostName:"ContextMenu",extends:S,emits:["item-click","item-mouseenter","item-mousemove"],props:{items:{type:Array,default:null},menuId:{type:String,default:null},focusedItemId:{type:String,default:null},root:{type:Boolean,default:!1},visible:{type:Boolean,default:!1},level:{type:Number,default:0},templates:{type:Object,default:null},activeItemPath:{type:Object,default:null},tabindex:{type:Number,default:0}},methods:{getItemId:function(e){return"".concat(this.menuId,"_").concat(e.key)},getItemKey:function(e){return this.getItemId(e)},getItemProp:function(e,t,a){return e&&e.item?H(e.item[t],a):void 0},getItemLabel:function(e){return this.getItemProp(e,"label")},getItemLabelId:function(e){return"".concat(this.menuId,"_").concat(e.key,"_label")},getPTOptions:function(e,t,a){return this.ptm(e,{context:{item:t.item,active:this.isItemActive(t),focused:this.isItemFocused(t),disabled:this.isItemDisabled(t),index:a}})},isItemActive:function(e){return this.activeItemPath.some(function(t){return t.key===e.key})},isItemVisible:function(e){return this.getItemProp(e,"visible")!==!1},isItemDisabled:function(e){return this.getItemProp(e,"disabled")},isItemFocused:function(e){return this.focusedItemId===this.getItemId(e)},isItemGroup:function(e){return b(e.items)},onItemClick:function(e,t){this.getItemProp(t,"command",{originalEvent:e,item:t.item}),this.$emit("item-click",{originalEvent:e,processedItem:t,isFocus:!0})},onItemMouseEnter:function(e,t){this.$emit("item-mouseenter",{originalEvent:e,processedItem:t})},onItemMouseMove:function(e,t){this.$emit("item-mousemove",{originalEvent:e,processedItem:t,isFocus:!0})},getAriaSetSize:function(){var e=this;return this.items.filter(function(t){return e.isItemVisible(t)&&!e.getItemProp(t,"separator")}).length},getAriaPosInset:function(e){var t=this;return e-this.items.slice(0,e).filter(function(a){return t.isItemVisible(a)&&t.getItemProp(a,"separator")}).length+1},onEnter:function(){_e(this.$refs.container,this.level)},getMenuItemProps:function(e,t){return{action:l({class:this.cx("itemLink"),tabindex:-1},this.getPTOptions("itemLink",e,t)),icon:l({class:[this.cx("itemIcon"),this.getItemProp(e,"icon")]},this.getPTOptions("itemIcon",e,t)),label:l({class:this.cx("itemLabel")},this.getPTOptions("itemLabel",e,t)),submenuicon:l({class:this.cx("submenuIcon")},this.getPTOptions("submenuicon",e,t))}}},components:{AngleRightIcon:le},directives:{ripple:Y}},qt=["tabindex"],Wt=["id","aria-label","aria-disabled","aria-expanded","aria-haspopup","aria-level","aria-setsize","aria-posinset","data-p-active","data-p-focused","data-p-disabled"],Zt=["onClick","onMouseenter","onMousemove"],Xt=["href","target"],Yt=["id"],Qt=["id"];function Jt(n,e,t,a,o,i){var c=M("AngleRightIcon"),u=M("ContextMenuSub",!0),s=Q("ripple");return m(),y(q,l({name:"p-contextmenusub",onEnter:i.onEnter},n.ptm("menu.transition")),{default:x(function(){return[t.root||t.visible?(m(),d("ul",l({key:0,ref:"container",tabindex:t.tabindex},n.ptm("rootList")),[(m(!0),d(L,null,O(t.items,function(r,f){return m(),d(L,{key:i.getItemKey(r)},[i.isItemVisible(r)&&!i.getItemProp(r,"separator")?(m(),d("li",l({key:0,id:i.getItemId(r),style:i.getItemProp(r,"style"),class:[n.cx("item",{processedItem:r}),i.getItemProp(r,"class")],role:"menuitem","aria-label":i.getItemLabel(r),"aria-disabled":i.isItemDisabled(r)||void 0,"aria-expanded":i.isItemGroup(r)?i.isItemActive(r):void 0,"aria-haspopup":i.isItemGroup(r)&&!i.getItemProp(r,"to")?"menu":void 0,"aria-level":t.level+1,"aria-setsize":i.getAriaSetSize(),"aria-posinset":i.getAriaPosInset(f),ref_for:!0},i.getPTOptions("item",r,f),{"data-p-active":i.isItemActive(r),"data-p-focused":i.isItemFocused(r),"data-p-disabled":i.isItemDisabled(r)}),[p("div",l({class:n.cx("itemContent"),onClick:function(w){return i.onItemClick(w,r)},onMouseenter:function(w){return i.onItemMouseEnter(w,r)},onMousemove:function(w){return i.onItemMouseMove(w,r)},ref_for:!0},i.getPTOptions("itemContent",r,f)),[t.templates.item?(m(),y(k(t.templates.item),{key:1,item:r.item,hasSubmenu:i.getItemProp(r,"items"),label:i.getItemLabel(r),props:i.getMenuItemProps(r,f)},null,8,["item","hasSubmenu","label","props"])):R((m(),d("a",l({key:0,href:i.getItemProp(r,"url"),class:n.cx("itemLink"),target:i.getItemProp(r,"target"),tabindex:"-1",ref_for:!0},i.getPTOptions("itemLink",r,f)),[t.templates.itemicon?(m(),y(k(t.templates.itemicon),{key:0,item:r.item,class:E(n.cx("itemIcon"))},null,8,["item","class"])):i.getItemProp(r,"icon")?(m(),d("span",l({key:1,class:[n.cx("itemIcon"),i.getItemProp(r,"icon")],ref_for:!0},i.getPTOptions("itemIcon",r,f)),null,16)):I("",!0),p("span",l({id:i.getItemLabelId(r),class:n.cx("itemLabel"),ref_for:!0},i.getPTOptions("itemLabel",r,f)),V(i.getItemLabel(r)),17,Yt),i.getItemProp(r,"items")?(m(),d(L,{key:2},[t.templates.submenuicon?(m(),y(k(t.templates.submenuicon),{key:0,active:i.isItemActive(r),class:E(n.cx("submenuIcon"))},null,8,["active","class"])):(m(),y(c,l({key:1,class:n.cx("submenuIcon"),ref_for:!0},i.getPTOptions("submenuicon",r,f)),null,16,["class"]))],64)):I("",!0)],16,Xt)),[[s]])],16,Zt),i.isItemVisible(r)&&i.isItemGroup(r)?(m(),y(u,l({key:0,id:i.getItemId(r)+"_list",role:"menu",class:n.cx("submenu"),menuId:t.menuId,focusedItemId:t.focusedItemId,items:r.items,templates:t.templates,activeItemPath:t.activeItemPath,level:t.level+1,visible:i.isItemActive(r)&&i.isItemGroup(r),pt:n.pt,unstyled:n.unstyled,onItemClick:e[0]||(e[0]=function(v){return n.$emit("item-click",v)}),onItemMouseenter:e[1]||(e[1]=function(v){return n.$emit("item-mouseenter",v)}),onItemMousemove:e[2]||(e[2]=function(v){return n.$emit("item-mousemove",v)}),"aria-labelledby":i.getItemLabelId(r),ref_for:!0},n.ptm("submenu")),null,16,["id","class","menuId","focusedItemId","items","templates","activeItemPath","level","visible","pt","unstyled","aria-labelledby"])):I("",!0)],16,Wt)):I("",!0),i.isItemVisible(r)&&i.getItemProp(r,"separator")?(m(),d("li",l({key:1,id:i.getItemId(r),style:i.getItemProp(r,"style"),class:[n.cx("separator"),i.getItemProp(r,"class")],role:"separator",ref_for:!0},n.ptm("separator")),null,16,Qt)):I("",!0)],64)}),128))],16,qt)):I("",!0)]}),_:1},16,["onEnter"])}be.render=Jt;var Ie={name:"ContextMenu",extends:Ut,inheritAttrs:!1,emits:["focus","blur","show","hide","before-show","before-hide"],target:null,outsideClickListener:null,resizeListener:null,documentContextMenuListener:null,matchMediaListener:null,pageX:null,pageY:null,container:null,list:null,data:function(){return{id:this.$attrs.id,focused:!1,focusedItemInfo:{index:-1,level:0,parentKey:""},activeItemPath:[],visible:!1,submenuVisible:!1,query:null,queryMatches:!1}},watch:{"$attrs.id":function(e){this.id=e||F()},activeItemPath:function(e){b(e)?(this.bindOutsideClickListener(),this.bindResizeListener()):this.visible||(this.unbindOutsideClickListener(),this.unbindResizeListener())}},mounted:function(){this.id=this.id||F(),this.bindMatchMediaListener(),this.global&&this.bindDocumentContextMenuListener()},beforeUnmount:function(){this.unbindResizeListener(),this.unbindOutsideClickListener(),this.unbindDocumentContextMenuListener(),this.unbindMatchMediaListener(),this.container&&this.autoZIndex&&B.clear(this.container),this.target=null,this.container=null},methods:{getItemProp:function(e,t){return e?H(e[t]):void 0},getItemLabel:function(e){return this.getItemProp(e,"label")},isItemDisabled:function(e){return this.getItemProp(e,"disabled")},isItemVisible:function(e){return this.getItemProp(e,"visible")!==!1},isItemGroup:function(e){return b(this.getItemProp(e,"items"))},isItemSeparator:function(e){return this.getItemProp(e,"separator")},getProccessedItemLabel:function(e){return e?this.getItemLabel(e.item):void 0},isProccessedItemGroup:function(e){return e&&b(e.items)},toggle:function(e){this.visible?this.hide():this.show(e)},show:function(e){this.$emit("before-show"),this.activeItemPath=[],this.focusedItemInfo={index:-1,level:0,parentKey:""},K(this.list),this.pageX=e.pageX,this.pageY=e.pageY,this.visible?this.position():this.visible=!0,e.stopPropagation(),e.preventDefault()},hide:function(){this.$emit("before-hide"),this.visible=!1,this.activeItemPath=[],this.focusedItemInfo={index:-1,level:0,parentKey:""}},onFocus:function(e){this.focused=!0,this.focusedItemInfo=this.focusedItemInfo.index!==-1?this.focusedItemInfo:{index:-1,level:0,parentKey:""},this.$emit("focus",e)},onBlur:function(e){this.focused=!1,this.focusedItemInfo={index:-1,level:0,parentKey:""},this.searchValue="",this.$emit("blur",e)},onKeyDown:function(e){var t=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Space":this.onSpaceKey(e);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!t&&J(e.key)&&this.searchItems(e,e.key);break}},onItemChange:function(e,t){var a=e.processedItem,o=e.isFocus;if(!T(a)){var i=a.index,c=a.key,u=a.level,s=a.parentKey,r=a.items,f=b(r),v=this.activeItemPath.filter(function(w){return w.parentKey!==s&&w.parentKey!==c});f&&(v.push(a),this.submenuVisible=!0),this.focusedItemInfo={index:i,level:u,parentKey:s},o&&K(this.list),!(t==="hover"&&this.queryMatches)&&(this.activeItemPath=v)}},onItemClick:function(e){var t=e.processedItem,a=this.isProccessedItemGroup(t),o=this.isSelected(t);if(o){var i=t.index,c=t.key,u=t.level,s=t.parentKey;this.activeItemPath=this.activeItemPath.filter(function(r){return c!==r.key&&c.startsWith(r.key)}),this.focusedItemInfo={index:i,level:u,parentKey:s},K(this.list)}else a?this.onItemChange(e):this.hide()},onItemMouseEnter:function(e){this.onItemChange(e,"hover")},onItemMouseMove:function(e){this.focused&&this.changeFocusedItemIndex(e,e.processedItem.index)},onArrowDownKey:function(e){var t=this.focusedItemInfo.index!==-1?this.findNextItemIndex(this.focusedItemInfo.index):this.findFirstFocusedItemIndex();this.changeFocusedItemIndex(e,t),e.preventDefault()},onArrowUpKey:function(e){if(e.altKey){if(this.focusedItemInfo.index!==-1){var t=this.visibleItems[this.focusedItemInfo.index],a=this.isProccessedItemGroup(t);!a&&this.onItemChange({originalEvent:e,processedItem:t})}this.popup&&this.hide(),e.preventDefault()}else{var o=this.focusedItemInfo.index!==-1?this.findPrevItemIndex(this.focusedItemInfo.index):this.findLastFocusedItemIndex();this.changeFocusedItemIndex(e,o),e.preventDefault()}},onArrowLeftKey:function(e){var t=this,a=this.visibleItems[this.focusedItemInfo.index],o=this.activeItemPath.find(function(c){return c.key===a.parentKey}),i=T(a.parent);i||(this.focusedItemInfo={index:-1,parentKey:o?o.parentKey:""},this.searchValue="",this.onArrowDownKey(e)),this.activeItemPath=this.activeItemPath.filter(function(c){return c.parentKey!==t.focusedItemInfo.parentKey}),e.preventDefault()},onArrowRightKey:function(e){var t=this.visibleItems[this.focusedItemInfo.index],a=this.isProccessedItemGroup(t);a&&(this.onItemChange({originalEvent:e,processedItem:t}),this.focusedItemInfo={index:-1,parentKey:t.key},this.searchValue="",this.onArrowDownKey(e)),e.preventDefault()},onHomeKey:function(e){this.changeFocusedItemIndex(e,this.findFirstItemIndex()),e.preventDefault()},onEndKey:function(e){this.changeFocusedItemIndex(e,this.findLastItemIndex()),e.preventDefault()},onEnterKey:function(e){if(this.focusedItemInfo.index!==-1){var t=P(this.list,'li[id="'.concat("".concat(this.focusedItemIdx),'"]')),a=t&&P(t,'[data-pc-section="itemlink"]');a?a.click():t&&t.click();var o=this.visibleItems[this.focusedItemInfo.index],i=this.isProccessedItemGroup(o);!i&&(this.focusedItemInfo.index=this.findFirstFocusedItemIndex())}e.preventDefault()},onSpaceKey:function(e){this.onEnterKey(e)},onEscapeKey:function(e){this.hide(),!this.popup&&(this.focusedItemInfo.index=this.findFirstFocusedItemIndex()),e.preventDefault()},onTabKey:function(e){if(this.focusedItemInfo.index!==-1){var t=this.visibleItems[this.focusedItemInfo.index],a=this.isProccessedItemGroup(t);!a&&this.onItemChange({originalEvent:e,processedItem:t})}this.hide()},onEnter:function(e){Be(e,{position:"absolute"}),this.position(),this.autoZIndex&&B.set("menu",e,this.baseZIndex+this.$primevue.config.zIndex.menu)},onAfterEnter:function(){this.bindOutsideClickListener(),this.bindResizeListener(),this.$emit("show"),K(this.list)},onLeave:function(){this.$emit("hide"),this.container=null},onAfterLeave:function(e){this.autoZIndex&&B.clear(e),this.unbindOutsideClickListener(),this.unbindResizeListener()},position:function(){var e=this.pageX+1,t=this.pageY+1,a=this.container.offsetParent?this.container.offsetWidth:Re(this.container),o=this.container.offsetParent?this.container.offsetHeight:Ne(this.container),i=Ge(),c=window.scrollY||document.documentElement.scrollTop||document.body.scrollTop||0,u=window.scrollX||document.documentElement.scrollLeft||document.body.scrollLeft||0;e+a-u>i.width&&(e-=a),t+o-c>i.height&&(t-=o),e<u&&(e=u),t<c&&(t=c),this.container.style.left=e+"px",this.container.style.top=t+"px"},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(t){var a=e.container&&!e.container.contains(t.target),o=e.visible?!(e.target&&(e.target===t.target||e.target.contains(t.target))):!0;a&&o&&e.hide()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(){e.visible&&!ue()&&e.hide()},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},bindDocumentContextMenuListener:function(){var e=this;this.documentContextMenuListener||(this.documentContextMenuListener=function(t){t.button===2&&e.show(t)},document.addEventListener("contextmenu",this.documentContextMenuListener))},unbindDocumentContextMenuListener:function(){this.documentContextMenuListener&&(document.removeEventListener("contextmenu",this.documentContextMenuListener),this.documentContextMenuListener=null)},bindMatchMediaListener:function(){var e=this;if(!this.matchMediaListener){var t=matchMedia("(max-width: ".concat(this.breakpoint,")"));this.query=t,this.queryMatches=t.matches,this.matchMediaListener=function(){e.queryMatches=t.matches},this.query.addEventListener("change",this.matchMediaListener)}},unbindMatchMediaListener:function(){this.matchMediaListener&&(this.query.removeEventListener("change",this.matchMediaListener),this.matchMediaListener=null)},isItemMatched:function(e){var t;return this.isValidItem(e)&&((t=this.getProccessedItemLabel(e))===null||t===void 0?void 0:t.toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase()))},isValidItem:function(e){return!!e&&!this.isItemDisabled(e.item)&&!this.isItemSeparator(e.item)&&this.isItemVisible(e.item)},isValidSelectedItem:function(e){return this.isValidItem(e)&&this.isSelected(e)},isSelected:function(e){return this.activeItemPath.some(function(t){return t.key===e.key})},findFirstItemIndex:function(){var e=this;return this.visibleItems.findIndex(function(t){return e.isValidItem(t)})},findLastItemIndex:function(){var e=this;return U(this.visibleItems,function(t){return e.isValidItem(t)})},findNextItemIndex:function(e){var t=this,a=e<this.visibleItems.length-1?this.visibleItems.slice(e+1).findIndex(function(o){return t.isValidItem(o)}):-1;return a>-1?a+e+1:e},findPrevItemIndex:function(e){var t=this,a=e>0?U(this.visibleItems.slice(0,e),function(o){return t.isValidItem(o)}):-1;return a>-1?a:e},findSelectedItemIndex:function(){var e=this;return this.visibleItems.findIndex(function(t){return e.isValidSelectedItem(t)})},findFirstFocusedItemIndex:function(){var e=this.findSelectedItemIndex();return e<0?this.findFirstItemIndex():e},findLastFocusedItemIndex:function(){var e=this.findSelectedItemIndex();return e<0?this.findLastItemIndex():e},searchItems:function(e,t){var a=this;this.searchValue=(this.searchValue||"")+t;var o=-1,i=!1;return this.focusedItemInfo.index!==-1?(o=this.visibleItems.slice(this.focusedItemInfo.index).findIndex(function(c){return a.isItemMatched(c)}),o=o===-1?this.visibleItems.slice(0,this.focusedItemInfo.index).findIndex(function(c){return a.isItemMatched(c)}):o+this.focusedItemInfo.index):o=this.visibleItems.findIndex(function(c){return a.isItemMatched(c)}),o!==-1&&(i=!0),o===-1&&this.focusedItemInfo.index===-1&&(o=this.findFirstFocusedItemIndex()),o!==-1&&this.changeFocusedItemIndex(e,o),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(function(){a.searchValue="",a.searchTimeout=null},500),i},changeFocusedItemIndex:function(e,t){this.focusedItemInfo.index!==t&&(this.focusedItemInfo.index=t,this.scrollInView())},scrollInView:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:-1,t=e!==-1?"".concat(this.id,"_").concat(e):this.focusedItemIdx,a=P(this.list,'li[id="'.concat(t,'"]'));a&&a.scrollIntoView&&a.scrollIntoView({block:"nearest",inline:"start"})},createProcessedItems:function(e){var t=this,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"",c=[];return e&&e.forEach(function(u,s){var r=(i!==""?i+"_":"")+s,f={item:u,index:s,level:a,key:r,parent:o,parentKey:i};f.items=t.createProcessedItems(u.items,a+1,f,r),c.push(f)}),c},containerRef:function(e){this.container=e},listRef:function(e){this.list=e?e.$el:void 0}},computed:{processedItems:function(){return this.createProcessedItems(this.model||[])},visibleItems:function(){var e=this,t=this.activeItemPath.find(function(a){return a.key===e.focusedItemInfo.parentKey});return t?t.items:this.processedItems},focusedItemIdx:function(){return this.focusedItemInfo.index!==-1?"".concat(this.id).concat(b(this.focusedItemInfo.parentKey)?"_"+this.focusedItemInfo.parentKey:"","_").concat(this.focusedItemInfo.index):null}},components:{ContextMenuSub:be,Portal:je}};function $t(n,e,t,a,o,i){var c=M("ContextMenuSub"),u=M("Portal");return m(),y(u,{appendTo:n.appendTo},{default:x(function(){return[g(q,l({name:"p-contextmenu",onEnter:i.onEnter,onAfterEnter:i.onAfterEnter,onLeave:i.onLeave,onAfterLeave:i.onAfterLeave},n.ptm("transition")),{default:x(function(){return[o.visible?(m(),d("div",l({key:0,ref:i.containerRef,class:n.cx("root")},n.ptmi("root")),[g(c,{ref:i.listRef,id:o.id+"_list",class:E(n.cx("rootList")),role:"menubar",root:!0,tabindex:n.tabindex,"aria-orientation":"vertical","aria-activedescendant":o.focused?i.focusedItemIdx:void 0,menuId:o.id,focusedItemId:o.focused?i.focusedItemIdx:void 0,items:i.processedItems,templates:n.$slots,activeItemPath:o.activeItemPath,"aria-labelledby":n.ariaLabelledby,"aria-label":n.ariaLabel,level:0,visible:o.submenuVisible,pt:n.pt,unstyled:n.unstyled,onFocus:i.onFocus,onBlur:i.onBlur,onKeydown:i.onKeyDown,onItemClick:i.onItemClick,onItemMouseenter:i.onItemMouseEnter,onItemMousemove:i.onItemMouseMove},null,8,["id","class","tabindex","aria-activedescendant","menuId","focusedItemId","items","templates","activeItemPath","aria-labelledby","aria-label","visible","pt","unstyled","onFocus","onBlur","onKeydown","onItemClick","onItemMouseenter","onItemMousemove"])],16)):I("",!0)]}),_:1},16,["onEnter","onAfterEnter","onLeave","onAfterLeave"])]}),_:1},8,["appendTo"])}Ie.render=$t;var en=function(e){var t=e.dt;return`
.p-steplist {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    padding: 0;
    list-style-type: none;
    overflow-x: auto;
}

.p-step {
    position: relative;
    display: flex;
    flex: 1 1 auto;
    align-items: center;
    gap: `.concat(t("stepper.step.gap"),`;
    padding: `).concat(t("stepper.step.padding"),`;
}

.p-step:last-of-type {
    flex: initial;
}

.p-step-header {
    border: 0 none;
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    transition: background `).concat(t("stepper.transition.duration"),", color ").concat(t("stepper.transition.duration"),", border-color ").concat(t("stepper.transition.duration"),", outline-color ").concat(t("stepper.transition.duration"),", box-shadow ").concat(t("stepper.transition.duration"),`;
    border-radius: `).concat(t("stepper.step.header.border.radius"),`;
    outline-color: transparent;
    background: transparent;
    padding: `).concat(t("stepper.step.header.padding"),`;
    gap: `).concat(t("stepper.step.header.gap"),`;
}

.p-step-header:focus-visible {
    box-shadow: `).concat(t("stepper.step.header.focus.ring.shadow"),`;
    outline: `).concat(t("stepper.step.header.focus.ring.width")," ").concat(t("stepper.step.header.focus.ring.style")," ").concat(t("stepper.step.header.focus.ring.color"),`;
    outline-offset: `).concat(t("stepper.step.header.focus.ring.offset"),`;
}

.p-stepper.p-stepper-readonly .p-step {
    cursor: auto;
}

.p-step-title {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
    color: `).concat(t("stepper.step.title.color"),`;
    font-weight: `).concat(t("stepper.step.title.font.weight"),`;
    transition: background `).concat(t("stepper.transition.duration"),", color ").concat(t("stepper.transition.duration"),", border-color ").concat(t("stepper.transition.duration"),", box-shadow ").concat(t("stepper.transition.duration"),", outline-color ").concat(t("stepper.transition.duration"),`;
}

.p-step-number {
    display: flex;
    align-items: center;
    justify-content: center;
    color: `).concat(t("stepper.step.number.color"),`;
    border: 2px solid `).concat(t("stepper.step.number.border.color"),`;
    background: `).concat(t("stepper.step.number.background"),`;
    min-width: `).concat(t("stepper.step.number.size"),`;
    height: `).concat(t("stepper.step.number.size"),`;
    line-height: `).concat(t("stepper.step.number.size"),`;
    font-size: `).concat(t("stepper.step.number.font.size"),`;
    z-index: 1;
    border-radius: `).concat(t("stepper.step.number.border.radius"),`;
    position: relative;
    font-weight: `).concat(t("stepper.step.number.font.weight"),`;
}

.p-step-number::after {
    content: " ";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: `).concat(t("stepper.step.number.border.radius"),`;
    box-shadow: `).concat(t("stepper.step.number.shadow"),`;
}

.p-step-active .p-step-header {
    cursor: default;
}

.p-step-active .p-step-number {
    background: `).concat(t("stepper.step.number.active.background"),`;
    border-color: `).concat(t("stepper.step.number.active.border.color"),`;
    color: `).concat(t("stepper.step.number.active.color"),`;
}

.p-step-active .p-step-title {
    color: `).concat(t("stepper.step.title.active.color"),`;
}

.p-step:not(.p-disabled):focus-visible {
    outline: `).concat(t("focus.ring.width")," ").concat(t("focus.ring.style")," ").concat(t("focus.ring.color"),`;
    outline-offset: `).concat(t("focus.ring.offset"),`;
}

.p-step:has(~ .p-step-active) .p-stepper-separator {
    background: `).concat(t("stepper.separator.active.background"),`;
}

.p-stepper-separator {
    flex: 1 1 0;
    background: `).concat(t("stepper.separator.background"),`;
    width: 100%;
    height: `).concat(t("stepper.separator.size"),`;
    transition: background `).concat(t("stepper.transition.duration"),", color ").concat(t("stepper.transition.duration"),", border-color ").concat(t("stepper.transition.duration"),", box-shadow ").concat(t("stepper.transition.duration"),", outline-color ").concat(t("stepper.transition.duration"),`;
}

.p-steppanels {
    padding: `).concat(t("stepper.steppanels.padding"),`;
}

.p-steppanel {
    background: `).concat(t("stepper.steppanel.background"),`;
    color: `).concat(t("stepper.steppanel.color"),`;
}

.p-stepper:has(.p-stepitem) {
    display: flex;
    flex-direction: column;
}

.p-stepitem {
    display: flex;
    flex-direction: column;
    flex: initial;
}

.p-stepitem.p-stepitem-active {
    flex: 1 1 auto;
}

.p-stepitem .p-step {
    flex: initial;
}

.p-stepitem .p-steppanel-content {
    width: 100%;
    padding: `).concat(t("stepper.steppanel.padding"),`;
    margin-inline-start: 1rem;
}

.p-stepitem .p-steppanel {
    display: flex;
    flex: 1 1 auto;
}

.p-stepitem .p-stepper-separator {
    flex: 0 0 auto;
    width: `).concat(t("stepper.separator.size"),`;
    height: auto;
    margin: `).concat(t("stepper.separator.margin"),`;
    position: relative;
    left: calc(-1 * `).concat(t("stepper.separator.size"),`);
}

.p-stepitem .p-stepper-separator:dir(rtl) {
    left: calc(-9 * `).concat(t("stepper.separator.size"),`);
}

.p-stepitem:has(~ .p-stepitem-active) .p-stepper-separator {
    background: `).concat(t("stepper.separator.active.background"),`;
}

.p-stepitem:last-of-type .p-steppanel {
    padding-inline-start: `).concat(t("stepper.step.number.size"),`;
}
`)},tn={root:function(e){var t=e.props;return["p-stepper p-component",{"p-readonly":t.linear}]},separator:"p-stepper-separator"},nn=z.extend({name:"stepper",theme:en,classes:tn}),an={name:"BaseStepper",extends:S,props:{value:{type:[String,Number],default:void 0},linear:{type:Boolean,default:!1}},style:nn,provide:function(){return{$pcStepper:this,$parentInstance:this}}},ge={name:"Stepper",extends:an,inheritAttrs:!1,emits:["update:value"],data:function(){return{id:this.$attrs.id,d_value:this.value}},watch:{"$attrs.id":function(e){this.id=e||F()},value:function(e){this.d_value=e}},mounted:function(){this.id=this.id||F()},methods:{updateValue:function(e){this.d_value!==e&&(this.d_value=e,this.$emit("update:value",e))},isStepActive:function(e){return this.d_value===e},isStepDisabled:function(){return this.linear}}};function on(n,e,t,a,o,i){return m(),d("div",l({class:n.cx("root"),role:"tablist"},n.ptmi("root")),[n.$slots.start?C(n.$slots,"start",{key:0}):I("",!0),C(n.$slots,"default"),n.$slots.end?C(n.$slots,"end",{key:1}):I("",!0)],16)}ge.render=on;var sn={root:"p-steplist"},rn=z.extend({name:"steplist",classes:sn}),un={name:"BaseStepList",extends:S,style:rn,provide:function(){return{$pcStepList:this,$parentInstance:this}}},ve={name:"StepList",extends:un,inheritAttrs:!1};function cn(n,e,t,a,o,i){return m(),d("div",l({class:n.cx("root")},n.ptmi("root")),[C(n.$slots,"default")],16)}ve.render=cn;var ln={root:function(e){var t=e.instance;return["p-step",{"p-step-active":t.active,"p-disabled":t.isStepDisabled}]},header:"p-step-header",number:"p-step-number",title:"p-step-title"},mn=z.extend({name:"step",classes:ln}),ye={name:"StepperSeparator",hostName:"Stepper",extends:S};function dn(n,e,t,a,o,i){return m(),d("span",l({class:n.cx("separator")},n.ptm("separator")),null,16)}ye.render=dn;var pn={name:"BaseStep",extends:S,props:{value:{type:[String,Number],default:void 0},disabled:{type:Boolean,default:!1},asChild:{type:Boolean,default:!1},as:{type:[String,Object],default:"DIV"}},style:mn,provide:function(){return{$pcStep:this,$parentInstance:this}}},xe={name:"Step",extends:pn,inheritAttrs:!1,inject:{$pcStepper:{default:null},$pcStepList:{default:null},$pcStepItem:{default:null}},data:function(){return{isSeparatorVisible:!1}},mounted:function(){if(this.$el&&this.$pcStepList){var e=Ue(this.$el,ie(this.$pcStepper.$el,'[data-pc-name="step"]')),t=ie(this.$pcStepper.$el,'[data-pc-name="step"]').length;this.isSeparatorVisible=e!==t-1}},methods:{getPTOptions:function(e){var t=e==="root"?this.ptmi:this.ptm;return t(e,{context:{active:this.active,disabled:this.isStepDisabled}})},onStepClick:function(){this.$pcStepper.updateValue(this.activeValue)}},computed:{active:function(){return this.$pcStepper.isStepActive(this.activeValue)},activeValue:function(){var e;return this.$pcStepItem?(e=this.$pcStepItem)===null||e===void 0?void 0:e.value:this.value},isStepDisabled:function(){return!this.active&&(this.$pcStepper.isStepDisabled()||this.disabled)},id:function(){var e;return"".concat((e=this.$pcStepper)===null||e===void 0?void 0:e.id,"_step_").concat(this.activeValue)},ariaControls:function(){var e;return"".concat((e=this.$pcStepper)===null||e===void 0?void 0:e.id,"_steppanel_").concat(this.activeValue)},a11yAttrs:function(){return{root:{role:"presentation","aria-current":this.active?"step":void 0,"data-pc-name":"step","data-pc-section":"root","data-p-disabled":this.isStepDisabled,"data-p-active":this.active},header:{id:this.id,role:"tab",taindex:this.disabled?-1:void 0,"aria-controls":this.ariaControls,"data-pc-section":"header",disabled:this.isStepDisabled,onClick:this.onStepClick}}}},components:{StepperSeparator:ye}},fn=["id","tabindex","aria-controls","disabled"];function hn(n,e,t,a,o,i){var c=M("StepperSeparator");return n.asChild?C(n.$slots,"default",{key:1,class:E(n.cx("root")),active:i.active,value:n.value,a11yAttrs:i.a11yAttrs,activateCallback:i.onStepClick}):(m(),y(k(n.as),l({key:0,class:n.cx("root"),"aria-current":i.active?"step":void 0,role:"presentation","data-p-active":i.active,"data-p-disabled":i.isStepDisabled},i.getPTOptions("root")),{default:x(function(){return[p("button",l({id:i.id,class:n.cx("header"),role:"tab",type:"button",tabindex:i.isStepDisabled?-1:void 0,"aria-controls":i.ariaControls,disabled:i.isStepDisabled,onClick:e[0]||(e[0]=function(){return i.onStepClick&&i.onStepClick.apply(i,arguments)})},i.getPTOptions("header")),[p("span",l({class:n.cx("number")},i.getPTOptions("number")),V(i.activeValue),17),p("span",l({class:n.cx("title")},i.getPTOptions("title")),[C(n.$slots,"default")],16)],16,fn),o.isSeparatorVisible?(m(),y(c,{key:0})):I("",!0)]}),_:3},16,["class","aria-current","data-p-active","data-p-disabled"]))}xe.render=hn;var bn=function(e){var t=e.dt;return`
.p-breadcrumb {
    background: `.concat(t("breadcrumb.background"),`;
    padding: `).concat(t("breadcrumb.padding"),`;
    overflow-x: auto;
}

.p-breadcrumb-list {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    gap: `).concat(t("breadcrumb.gap"),`;
}

.p-breadcrumb-separator {
    display: flex;
    align-items: center;
    color: `).concat(t("breadcrumb.separator.color"),`;
}

.p-breadcrumb-separator-icon:dir(rtl) {
    transform: rotate(180deg);
}

.p-breadcrumb::-webkit-scrollbar {
    display: none;
}

.p-breadcrumb-item-link {
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: `).concat(t("breadcrumb.item.gap"),`;
    transition: background `).concat(t("breadcrumb.transition.duration"),", color ").concat(t("breadcrumb.transition.duration"),", outline-color ").concat(t("breadcrumb.transition.duration"),", box-shadow ").concat(t("breadcrumb.transition.duration"),`;
    border-radius: `).concat(t("breadcrumb.item.border.radius"),`;
    outline-color: transparent;
    color: `).concat(t("breadcrumb.item.color"),`;
}

.p-breadcrumb-item-link:focus-visible {
    box-shadow: `).concat(t("breadcrumb.item.focus.ring.shadow"),`;
    outline: `).concat(t("breadcrumb.item.focus.ring.width")," ").concat(t("breadcrumb.item.focus.ring.style")," ").concat(t("breadcrumb.item.focus.ring.color"),`;
    outline-offset: `).concat(t("breadcrumb.item.focus.ring.offset"),`;
}

.p-breadcrumb-item-link:hover .p-breadcrumb-item-label {
    color: `).concat(t("breadcrumb.item.hover.color"),`;
}

.p-breadcrumb-item-label {
    transition: inherit;
}

.p-breadcrumb-item-icon {
    color: `).concat(t("breadcrumb.item.icon.color"),`;
    transition: inherit;
}

.p-breadcrumb-item-link:hover .p-breadcrumb-item-icon {
    color: `).concat(t("breadcrumb.item.icon.hover.color"),`;
}
`)},In={root:"p-breadcrumb p-component",list:"p-breadcrumb-list",homeItem:"p-breadcrumb-home-item",separator:"p-breadcrumb-separator",separatorIcon:"p-breadcrumb-separator-icon",item:function(e){var t=e.instance;return["p-breadcrumb-item",{"p-disabled":t.disabled()}]},itemLink:"p-breadcrumb-item-link",itemIcon:"p-breadcrumb-item-icon",itemLabel:"p-breadcrumb-item-label"},gn=z.extend({name:"breadcrumb",theme:bn,classes:In}),vn={name:"BaseBreadcrumb",extends:S,props:{model:{type:Array,default:null},home:{type:null,default:null}},style:gn,provide:function(){return{$pcBreadcrumb:this,$parentInstance:this}}},ke={name:"BreadcrumbItem",hostName:"Breadcrumb",extends:S,props:{item:null,templates:null,index:null},methods:{onClick:function(e){this.item.command&&this.item.command({originalEvent:e,item:this.item})},visible:function(){return typeof this.item.visible=="function"?this.item.visible():this.item.visible!==!1},disabled:function(){return typeof this.item.disabled=="function"?this.item.disabled():this.item.disabled},label:function(){return typeof this.item.label=="function"?this.item.label():this.item.label},isCurrentUrl:function(){var e=this.item,t=e.to,a=e.url,o=typeof window<"u"?window.location.pathname:"";return t===o||a===o?"page":void 0}},computed:{ptmOptions:function(){return{context:{item:this.item,index:this.index}}},getMenuItemProps:function(){var e=this;return{action:l({class:this.cx("itemLink"),"aria-current":this.isCurrentUrl(),onClick:function(a){return e.onClick(a)}},this.ptm("itemLink",this.ptmOptions)),icon:l({class:[this.cx("icon"),this.item.icon]},this.ptm("icon",this.ptmOptions)),label:l({class:this.cx("label")},this.ptm("label",this.ptmOptions))}}}},yn=["href","target","aria-current"];function xn(n,e,t,a,o,i){return i.visible()?(m(),d("li",l({key:0,class:[n.cx("item"),t.item.class]},n.ptm("item",i.ptmOptions)),[t.templates.item?(m(),y(k(t.templates.item),{key:1,item:t.item,label:i.label(),props:i.getMenuItemProps},null,8,["item","label","props"])):(m(),d("a",l({key:0,href:t.item.url||"#",class:n.cx("itemLink"),target:t.item.target,"aria-current":i.isCurrentUrl(),onClick:e[0]||(e[0]=function(){return i.onClick&&i.onClick.apply(i,arguments)})},n.ptm("itemLink",i.ptmOptions)),[t.templates&&t.templates.itemicon?(m(),y(k(t.templates.itemicon),{key:0,item:t.item,class:E(n.cx("itemIcon",i.ptmOptions))},null,8,["item","class"])):t.item.icon?(m(),d("span",l({key:1,class:[n.cx("itemIcon"),t.item.icon]},n.ptm("itemIcon",i.ptmOptions)),null,16)):I("",!0),t.item.label?(m(),d("span",l({key:2,class:n.cx("itemLabel")},n.ptm("itemLabel",i.ptmOptions)),V(i.label()),17)):I("",!0)],16,yn))],16)):I("",!0)}ke.render=xn;var we={name:"Breadcrumb",extends:vn,inheritAttrs:!1,components:{BreadcrumbItem:ke,ChevronRightIcon:$}};function kn(n,e,t,a,o,i){var c=M("BreadcrumbItem"),u=M("ChevronRightIcon");return m(),d("nav",l({class:n.cx("root")},n.ptmi("root")),[p("ol",l({class:n.cx("list")},n.ptm("list")),[n.home?(m(),y(c,l({key:0,item:n.home,class:n.cx("homeItem"),templates:n.$slots,pt:n.pt,unstyled:n.unstyled},n.ptm("homeItem")),null,16,["item","class","templates","pt","unstyled"])):I("",!0),(m(!0),d(L,null,O(n.model,function(s,r){return m(),d(L,{key:s.label+"_"+r},[n.home||r!==0?(m(),d("li",l({key:0,class:n.cx("separator"),ref_for:!0},n.ptm("separator")),[C(n.$slots,"separator",{},function(){return[g(u,l({"aria-hidden":"true",class:n.cx("separatorIcon"),ref_for:!0},n.ptm("separatorIcon")),null,16,["class"])]})],16)):I("",!0),g(c,{item:s,index:r,templates:n.$slots,pt:n.pt,unstyled:n.unstyled},null,8,["item","index","templates","pt","unstyled"])],64)}),128))],16)],16)}we.render=kn;const wn={class:"card"},Pn={class:"card"},Ln={class:"flex flex-col md:flex-row gap-8"},Kn={class:"md:w-1/2"},Mn={class:"card"},Sn={class:"md:w-1/2"},Cn={class:"card"},An={class:"flex flex-col md:flex-row gap-8 mt-6"},En={class:"md:w-1/3"},Fn={class:"card"},Dn={class:"md:w-1/3"},On={class:"card"},Tn={class:"md:w-1/3"},Vn={class:"card"},zn={class:"flex flex-col md:flex-row gap-8 mt-8"},Hn={class:"md:w-1/2"},_n={class:"card"},Bn={class:"md:w-1/2"},Rn={class:"card"},oi={__name:"MenuDoc",setup(n){const e=A(null),t=A(null),a=A([{label:"Customers",icon:"pi pi-fw pi-table",items:[{label:"New",icon:"pi pi-fw pi-user-plus",items:[{label:"Customer",icon:"pi pi-fw pi-plus"},{label:"Duplicate",icon:"pi pi-fw pi-copy"}]},{label:"Edit",icon:"pi pi-fw pi-user-edit"}]},{label:"Orders",icon:"pi pi-fw pi-shopping-cart",items:[{label:"View",icon:"pi pi-fw pi-list"},{label:"Search",icon:"pi pi-fw pi-search"}]},{label:"Shipments",icon:"pi pi-fw pi-envelope",items:[{label:"Tracker",icon:"pi pi-fw pi-compass"},{label:"Map",icon:"pi pi-fw pi-map-marker"},{label:"Manage",icon:"pi pi-fw pi-pencil"}]},{label:"Profile",icon:"pi pi-fw pi-user",items:[{label:"Settings",icon:"pi pi-fw pi-cog"},{label:"Billing",icon:"pi pi-fw pi-file"}]},{label:"Quit",icon:"pi pi-fw pi-sign-out"}]),o=A({icon:"pi pi-home",to:"/"}),i=A([{label:"Computer"},{label:"Notebook"},{label:"Accessories"},{label:"Backpacks"},{label:"Item"}]),c=A([{label:"Customers",icon:"pi pi-fw pi-table",items:[{label:"New",icon:"pi pi-fw pi-user-plus",items:[{label:"Customer",icon:"pi pi-fw pi-plus"},{label:"Duplicate",icon:"pi pi-fw pi-copy"}]},{label:"Edit",icon:"pi pi-fw pi-user-edit"}]},{label:"Orders",icon:"pi pi-fw pi-shopping-cart",items:[{label:"View",icon:"pi pi-fw pi-list"},{label:"Search",icon:"pi pi-fw pi-search"}]},{label:"Shipments",icon:"pi pi-fw pi-envelope",items:[{label:"Tracker",icon:"pi pi-fw pi-compass"},{label:"Map",icon:"pi pi-fw pi-map-marker"},{label:"Manage",icon:"pi pi-fw pi-pencil"}]},{label:"Profile",icon:"pi pi-fw pi-user",items:[{label:"Settings",icon:"pi pi-fw pi-cog"},{label:"Billing",icon:"pi pi-fw pi-file"}]},{separator:!0},{label:"Quit",icon:"pi pi-fw pi-sign-out"}]),u=A([{label:"Save",icon:"pi pi-save"},{label:"Update",icon:"pi pi-refresh"},{label:"Delete",icon:"pi pi-trash"},{separator:!0},{label:"Home",icon:"pi pi-home"}]),s=A([{label:"Customers",items:[{label:"New",icon:"pi pi-fw pi-plus"},{label:"Edit",icon:"pi pi-fw pi-user-edit"}]},{label:"Orders",items:[{label:"View",icon:"pi pi-fw pi-list"},{label:"Search",icon:"pi pi-fw pi-search"}]}]),r=A([{label:"Save",icon:"pi pi-save"},{label:"Update",icon:"pi pi-refresh"},{label:"Delete",icon:"pi pi-trash"},{separator:!0},{label:"Options",icon:"pi pi-cog"}]),f=A([{label:"Fashion",icon:"pi pi-fw pi-tag",items:[[{label:"Woman",items:[{label:"Woman Item"},{label:"Woman Item"},{label:"Woman Item"}]},{label:"Men",items:[{label:"Men Item"},{label:"Men Item"},{label:"Men Item"}]}],[{label:"Kids",items:[{label:"Kids Item"},{label:"Kids Item"}]},{label:"Luggage",items:[{label:"Luggage Item"},{label:"Luggage Item"},{label:"Luggage Item"}]}]]},{label:"Electronics",icon:"pi pi-fw pi-desktop",items:[[{label:"Computer",items:[{label:"Computer Item"},{label:"Computer Item"}]},{label:"Camcorder",items:[{label:"Camcorder Item"},{label:"Camcorder Item"},{label:"Camcorder Item"}]}],[{label:"TV",items:[{label:"TV Item"},{label:"TV Item"}]},{label:"Audio",items:[{label:"Audio Item"},{label:"Audio Item"},{label:"Audio Item"}]}],[{label:"Sports.7",items:[{label:"Sports.7.1"},{label:"Sports.7.2"}]}]]},{label:"Furniture",icon:"pi pi-fw pi-image",items:[[{label:"Living Room",items:[{label:"Living Room Item"},{label:"Living Room Item"}]},{label:"Kitchen",items:[{label:"Kitchen Item"},{label:"Kitchen Item"},{label:"Kitchen Item"}]}],[{label:"Bedroom",items:[{label:"Bedroom Item"},{label:"Bedroom Item"}]},{label:"Outdoor",items:[{label:"Outdoor Item"},{label:"Outdoor Item"},{label:"Outdoor Item"}]}]]},{label:"Sports",icon:"pi pi-fw pi-star",items:[[{label:"Basketball",items:[{label:"Basketball Item"},{label:"Basketball Item"}]},{label:"Football",items:[{label:"Football Item"},{label:"Football Item"},{label:"Football Item"}]}],[{label:"Tennis",items:[{label:"Tennis Item"},{label:"Tennis Item"}]}]]}]),v=A([{label:"Customers",icon:"pi pi-fw pi-table",items:[{label:"New",icon:"pi pi-fw pi-user-plus",items:[{label:"Customer",icon:"pi pi-fw pi-plus"},{label:"Duplicate",icon:"pi pi-fw pi-copy"}]},{label:"Edit",icon:"pi pi-fw pi-user-edit"}]},{label:"Orders",icon:"pi pi-fw pi-shopping-cart",items:[{label:"View",icon:"pi pi-fw pi-list"},{label:"Search",icon:"pi pi-fw pi-search"}]},{label:"Shipments",icon:"pi pi-fw pi-envelope",items:[{label:"Tracker",icon:"pi pi-fw pi-compass"},{label:"Map",icon:"pi pi-fw pi-map-marker"},{label:"Manage",icon:"pi pi-fw pi-pencil"}]},{label:"Profile",icon:"pi pi-fw pi-user",items:[{label:"Settings",icon:"pi pi-fw pi-cog"},{label:"Billing",icon:"pi pi-fw pi-file"}]}]);function w(G){e.value.toggle(G)}function W(G){t.value.show(G)}return(G,h)=>{const Pe=tt,Le=it,Ke=nt,Me=et,Se=we,Z=xe,Ce=ve,Ae=ge,X=Je,Ee=$e,Fe=Qe,De=Ye,ee=Xe,Oe=Ze,Te=Ie,te=he,Ve=pe;return m(),d(L,null,[p("div",wn,[h[0]||(h[0]=p("div",{class:"font-semibold text-xl mb-4"},"Menubar",-1)),g(Me,{model:a.value},{end:x(()=>[g(Ke,{iconPosition:"left"},{default:x(()=>[g(Pe,{class:"pi pi-search"}),g(Le,{type:"text",placeholder:"Search"})]),_:1})]),_:1},8,["model"])]),p("div",Pn,[h[1]||(h[1]=p("div",{class:"font-semibold text-xl mb-4"},"Breadcrumb",-1)),g(Se,{home:o.value,model:i.value},null,8,["home","model"])]),p("div",Ln,[p("div",Kn,[p("div",Mn,[h[5]||(h[5]=p("div",{class:"font-semibold text-xl mb-4"},"Steps",-1)),g(Ae,{value:"1"},{default:x(()=>[g(Ce,null,{default:x(()=>[g(Z,{value:"1"},{default:x(()=>h[2]||(h[2]=[D("Header I")])),_:1}),g(Z,{value:"2"},{default:x(()=>h[3]||(h[3]=[D("Header II")])),_:1}),g(Z,{value:"3"},{default:x(()=>h[4]||(h[4]=[D("Header III")])),_:1})]),_:1})]),_:1})])]),p("div",Sn,[p("div",Cn,[h[9]||(h[9]=p("div",{class:"font-semibold text-xl mb-4"},"TabMenu",-1)),g(Fe,{value:"0"},{default:x(()=>[g(Ee,null,{default:x(()=>[g(X,{value:"0"},{default:x(()=>h[6]||(h[6]=[D("Header I")])),_:1}),g(X,{value:"1"},{default:x(()=>h[7]||(h[7]=[D("Header II")])),_:1}),g(X,{value:"2"},{default:x(()=>h[8]||(h[8]=[D("Header III")])),_:1})]),_:1})]),_:1})])])]),p("div",An,[p("div",En,[p("div",Fn,[h[10]||(h[10]=p("div",{class:"font-semibold text-xl mb-4"},"Tiered Menu",-1)),g(De,{model:c.value},null,8,["model"])])]),p("div",Dn,[p("div",On,[h[11]||(h[11]=p("div",{class:"font-semibold text-xl mb-4"},"Plain Menu",-1)),g(ee,{model:s.value},null,8,["model"])])]),p("div",Tn,[p("div",Vn,[h[12]||(h[12]=p("div",{class:"font-semibold text-xl mb-4"},"Overlay Menu",-1)),g(ee,{ref_key:"menu",ref:e,model:u.value,popup:!0},null,8,["model"]),g(Oe,{type:"button",label:"Options",icon:"pi pi-angle-down",onClick:w,style:{width:"auto"}})]),p("div",{class:"card",onContextmenu:W},[h[13]||(h[13]=p("div",{class:"font-semibold text-xl mb-4"},"Context Menu",-1)),h[14]||(h[14]=D(" Right click to display. ")),g(Te,{ref_key:"contextMenu",ref:t,model:r.value},null,8,["model"])],32)])]),p("div",zn,[p("div",Hn,[p("div",_n,[h[15]||(h[15]=p("div",{class:"font-semibold text-xl mb-4"},"MegaMenu | Horizontal",-1)),g(te,{model:f.value},null,8,["model"]),h[16]||(h[16]=p("div",{class:"font-semibold text-xl mb-4 mt-8"},"MegaMenu | Vertical",-1)),g(te,{model:f.value,orientation:"vertical"},null,8,["model"])])]),p("div",Bn,[p("div",Rn,[h[17]||(h[17]=p("div",{class:"font-semibold text-xl mb-4"},"PanelMenu",-1)),g(Ve,{model:v.value},null,8,["model"])])])])],64)}}};export{oi as default};
