(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{611:function(e){e.exports={"/":{title:"Overview"},guidelines:{title:"Guidelines","sub-nav":{accessibility:{title:"Accessibility"},content:{title:"Content"},color:{title:"Color"},iconography:{title:"Iconography"},layout:{title:"Layout"},motion:{title:"Motion"},spacing:{title:"Spacing"},themes:{title:"Themes"},typography:{title:"Typography"}}},"your-product-on-ibm-cloud":{title:"Your product on IBM Cloud",internal:!0,"sub-nav":{principles:{title:"Principles"},"user-flow":{title:"User flow"},"service-providers":{title:"Service providers"},"catalog-entry":{title:"Catalog entry"}}},components:{title:"Components","sub-nav":{overview:{title:"Overview"},"component-status":{title:"Component status"},accordion:{title:"Accordion"},breadcrumb:{title:"Breadcrumb"},button:{title:"Button"},checkbox:{title:"Checkbox"},"code-snippet":{title:"Code snippet"},"content-switcher":{title:"Content switcher"},"data-table":{title:"Data table"},"date-picker":{title:"Date picker"},dropdown:{title:"Dropdown"},"file-uploader":{title:"File uploader"},form:{title:"Form"},"inline-loading":{title:"Inline loading"},"link/code":{title:"Link"},list:{title:"List"},loading:{title:"Loading"},modal:{title:"Modal"},notification:{title:"Notification"},"number-input":{title:"Number input"},"overflow-menu":{title:"Overflow menu"},pagination:{title:"Pagination"},"progress-indicator":{title:"Progress indicator"},"radio-button":{title:"Radio button"},search:{title:"Search"},select:{title:"Select"},slider:{title:"Slider"},"structured-list":{title:"Structured list"},tabs:{title:"Tabs"},tag:{title:"Tag"},"text-input":{title:"Text input"},tile:{title:"Tile"},toggle:{title:"Toggle"},tooltip:{title:"Tooltip"}}},experimental:{title:"Experimental","sub-nav":{about:{title:"About"},"ui-shell":{title:"UI shell"}}},patterns:{title:"Patterns","sub-nav":{overview:{title:"Overview"},"common-actions":{title:"Common actions"},"disabled-states":{title:"Disabled states"},filtering:{title:"Filtering"},"overflow-content":{title:"Overflow content"}}},resources:{title:"Resources"},contributing:{title:"Contributing","sub-nav":{governance:{title:"Governance"},designers:{title:"Designers"},developers:{title:"Developers"},"add-ons":{title:"Add-ons"}}},updates:{title:"Updates","sub-nav":{"release-information":{title:"Release information"},"v10-migration":{title:"v10 Migration guide"},roadmap:{title:"Roadmap"}}},help:{title:"Help","sub-nav":{support:{title:"Support"},faq:{title:"FAQ"}}}}},612:function(e,t,n){"use strict";n(635);var a=n(10),i=n.n(a),r=n(636),o=n(1),l=n.n(o),s=n(0),c=n.n(s),p=n(637),m=n.n(p),u=n(53),d=n(170),h=n(24),f=(n(166),function(e){function t(t){var n;return(n=e.call(this,t)||this).textInput=l.a.createRef(),n}i()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;setTimeout(function(){e.textInput.current.focus()})},n.render=function(){var e=this.props;e.id,e.className,e.value;return l.a.createElement("input",Object.assign({},this.props,{ref:this.textInput}))},t}(l.a.Component)),g=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))||this).state={inputValue:""},t}i()(t,e);var n=t.prototype;return n.componentDidMount=function(){"undefined"==typeof window||void 0===window.docsearch?console.warn("Search has failed to load and now is being disabled"):window.docsearch({apiKey:"296ea0c1d0e96b2b04900d0f4d1a6329",indexName:"carbondesignsystem",inputSelector:"#doc-search",debug:!1})},n.render=function(){var e=this;return l.a.createElement("div",{className:"bx--search bx--search--lg bx--search--dark",role:"search"},l.a.createElement(h.Search20,{description:"Search Maginfier",className:"bx--search-magnifier"}),l.a.createElement("label",{htmlFor:"doc-search",className:"bx--label"},"Search by element, component, or token, etc"),l.a.createElement(f,{"aria-label":"Search",type:"text",className:"bx--search-input",id:"doc-search",placeholder:"Search by element, component, or token, etc",value:this.state.inputValue,onChange:function(t){return e.setState({inputValue:t.target.value})}}),l.a.createElement("button",{className:"bx--search-close",title:"Clear search input","aria-label":"Clear search input",onClick:function(){return e.setState({inputValue:""})}},l.a.createElement(h.Close20,{description:"Search Clear",className:"bx--search-clear"})))},t}(l.a.Component),v=(n(167),n(168),n(46),n(43),n(41),n(78),n(69)),b=n(2),w=n.n(b),E=(n(55),n(163),n(603)),y=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))||this).state={open:!1},t.toggleSubNav=function(){t.setState({open:!t.state.open})},t.renderSubNavItems=function(e,n,a){return Object.keys(e).map(function(i){var r="internal"!=={}.GATSBY_CARBON_ENV&&e[i].internal,o=N(n,[a,i]),s={href:"javascript:void(0)",element:u.a,to:"/"+t.props.itemSlug+"/"+i,key:i};return o&&(s["aria-current"]="page"),r?"":l.a.createElement(E.SideNavMenuItem,s,e[i].title)})},t}return i()(t,e),t.getDerivedStateFromProps=function(e,t){var n=e.location,a=e.itemSlug,i=t.open,r=t.prevLocation,o=t.prevItemSlug;return r===n&&o===a?null:{open:i||n&&a&&N(n,a),prevLocation:n,prevItemSlug:a}},t.prototype.render=function(){var e=this.props,t=e.item,n=e.itemSlug,a=e.location,i=e.isCurrentCategory,r=!(void 0===t["sub-nav"]),o=N(a,n),s={icon:l.a.createElement(h.Awake16,null),title:t.title,isActive:i};return o&&(s.defaultExpanded=!0),l.a.createElement(l.a.Fragment,null,r?l.a.createElement(E.SideNavMenu,s,this.renderSubNavItems(t["sub-nav"],a,n)):l.a.createElement(E.SideNavLink,{icon:l.a.createElement(h.Awake16,null),href:"javascript:void(0)",to:"/"+n,element:u.a},t.title))},t}(l.a.Component);function k(e){return(Array.isArray(e)?e:[e]).reduce(function(e,t){return[].concat(e,t.replace("","").split("/").filter(Boolean))},[])}function N(e,t){var n=k(t),a=k(e.pathname);return n.every(function(e,t){return e===a[t]})}y.propTypes={item:c.a.shape({title:c.a.string}),itemSlug:c.a.string,location:c.a.object};var S=n(611),C=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))||this).renderNavItems=function(e,t){return Object.keys(e).map(function(n){return"internal"!=={}.GATSBY_CARBON_ENV&&e[n].internal?"":l.a.createElement(y,{isCurrentCategory:!!t.pathname.includes(n),itemSlug:n,item:e[n],key:n,location:t})})},t}return i()(t,e),t.prototype.render=function(){var e=this,t=this.props,n=t.isLeftNavOpen,a=t.isLeftNavFinal,i=t.is404Page,r=w()({"side-nav-click-to-close":!0,"side-nav-click-to-close__closed":!n,"side-nav-click-to-close__closed--final":a&&!n});return l.a.createElement(v.Location,null,function(t){var o=t.location,s=e.renderNavItems(S,o),c=w()("side-nav",{"side-nav__closed":!n,"side-nav__closed--final":a&&!n,"bx--side-nav--website--light":"/"!==o.pathname&&"/design/product/"!==o.pathname&&!i,"bx--side-nav--website":!0});return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:r,onClick:function(){e.props.clickToClose()}}),l.a.createElement(E.SideNav,{"aria-label":"Side navigation",className:c},l.a.createElement(E.SideNavItems,null,s,l.a.createElement("hr",{className:"bx--side-nav__divider"}),l.a.createElement(E.SideNavLink,{icon:l.a.createElement(h.Launch16,null),href:"https://github.com/ibm/carbon-design-kit",className:"bx--side-nav--website-link"},"Design Kit"),l.a.createElement(E.SideNavLink,{icon:l.a.createElement(h.Launch16,null),href:"javascript:void(0)",to:"/resources#github-repos",className:"bx--side-nav--website-link",element:u.a},"GitHub Repos"))))})},t}(l.a.Component),A=n(668),L=n.n(A),x=n(94),T=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e,t=this.props.children;e=Array.isArray(t[1].props.children)?t[1].props.children[0].props.children.length:t[1].props.children.props.children.length;var n=w()({"ibm--col-lg-8 ibm--col-md-6":e<4,"ibm--col-lg-12":e>3,"ibm--offset-lg-4 ibm--col-bleed":!0,"page-table__container":!0});return l.a.createElement("div",{className:"ibm--row"},l.a.createElement("div",{className:n},l.a.createElement("table",{className:"page-table"},t)))},t}(l.a.Component);T.propTypes={children:c.a.node};var O=T,B=(n(79),n(38)),M=(l.a.Component,function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){return l.a.createElement("div",{className:"ibm--row"},l.a.createElement("div",{className:"ibm--col-lg-7 ibm--offset-lg-4"},l.a.createElement("h1",{className:"page-h1"},this.props.children)))},t}(l.a.Component)),D=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this;return l.a.createElement(v.Location,null,function(t){var n=t.location,a="string"!=typeof e.props.children?void 0:e.props.children.replace(/[:&?’‘“”'",.]/g,"").toLowerCase().split(" ").join("-"),i=n.pathname;return l.a.createElement("div",{className:"ibm--row"},l.a.createElement("div",{className:"ibm--col-lg-7 ibm--offset-lg-4"},l.a.createElement("h2",{className:"page-h2",id:a},a&&l.a.createElement(u.a,{className:"anchor-link",to:i+"#"+a},l.a.createElement(h.Link20,{className:"anchor-link__icon","aria-label":"Anchor Link"})),e.props.children)))})},t}(l.a.Component),I=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this;return l.a.createElement(v.Location,null,function(t){var n=t.location,a="string"!=typeof e.props.children?void 0:e.props.children.replace(/[:&?’‘“”'",.]/g,"").toLowerCase().split(" ").join("-"),i=n.pathname;return l.a.createElement("div",{className:"ibm--row"},l.a.createElement("div",{className:"ibm--col-lg-7 ibm--col-md-6 ibm--offset-lg-4"},l.a.createElement("h3",{className:"page-h3",id:a},a&&l.a.createElement(u.a,{className:"anchor-link",to:i+"#"+a},l.a.createElement(h.Link20,{className:"anchor-link__icon","aria-label":"Anchor Link"})),e.props.children)))})},t}(l.a.Component),_=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this;return l.a.createElement(v.Location,null,function(t){var n=t.location,a="string"!=typeof e.props.children?void 0:e.props.children.replace(/[:&?’‘“”'",.]/g,"").toLowerCase().split(" ").join("-"),i=n.pathname;return l.a.createElement("div",{className:"ibm--row"},l.a.createElement("div",{className:"ibm--col-lg-7 ibm--offset-lg-4"},l.a.createElement("h4",{className:"page-h4",id:a},a&&l.a.createElement(u.a,{className:"anchor-link",to:i+"#"+a},l.a.createElement(h.Link20,{className:"anchor-link__icon","aria-label":"Anchor Link"})),e.props.children)))})},t}(l.a.Component),F=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){return l.a.createElement("div",{className:"ibm--row"},l.a.createElement("div",{className:"ibm--col-lg-7 ibm--offset-lg-4"},l.a.createElement("h5",{className:"page-h5"},this.props.children)))},t}(l.a.Component),G=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){return l.a.createElement("div",{className:"ibm--row"},l.a.createElement("div",{className:"ibm--col-lg-7 ibm--offset-lg-4"},l.a.createElement("ul",{className:"page-ul"},this.props.children)))},t}(l.a.Component),R=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){return l.a.createElement("div",{className:"ibm--row"},l.a.createElement("div",{className:"ibm--col-lg-7 ibm--offset-lg-4"},l.a.createElement("ol",{className:"page-ol"},this.props.children)))},t}(l.a.Component),H=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){return l.a.createElement("div",{className:"ibm--row"},l.a.createElement("div",{className:"ibm--col-lg-7 ibm--col-md-6 ibm--offset-lg-4"},l.a.createElement("p",{className:"page-p"},this.props.children)))},t}(l.a.Component),j=n(669),V=n.n(j),X=(n(670),n(19)),P=function(e){function t(){for(var t,a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(t=e.call.apply(e,[this].concat(i))||this).state={isLeftNavOpen:!1,isLeftNavFinal:!1,isSearchOpen:!1,isSwitcherOpen:!1,isSwitcherFinal:!1},t.handleSearchClick=function(e){var n;t.setState(((n={})[e]=!t.state.isSearchOpen,n),t.handleSearchEventListener)},t.handleSearchEventListener=function(){t.state.isSearchOpen?document.body.addEventListener("click",t.handleCloseSearchClick):document.body.removeEventListener("click",t.handleCloseSearchClick)},t.handleCloseSearchClick=function(e){console.log(e.target);var n=e.target.classList[0];console.log(n);-1===["bx--search","bx--search-input","bx--search-magnifier","ds-dataset-1"].indexOf(n)&&t.handleSearchClick("isSearchOpen")},t.onToggleBtnClick=function(e,n,a,i){var r,o;t.state[e]?(t.setState(((r={})[e]=!1,r)),setTimeout(function(){var e;t.setState(((e={})[n]=!0,e))},5)):(t.setState(((o={})[n]=!1,o[i]=!0,o)),setTimeout(function(){var n;t.setState(((n={})[e]=!0,n[a]=!1,n))},5))},t.handleClose=function(e){var n=!1;e.target.classList&&e.target.classList.contains("main-nav-item__heading")&&e.target.classList.contains("main-nav-item__list")&&(n=!0);var a=window.innerWidth<1056||screen.width<1056;!n&&a&&t.setState({isLeftNavOpen:!1})},t.clickToClose=function(){t.setState({isLeftNavOpen:!1})},t.checkWidth=function(){"undefined"!=typeof window&&(window.innerWidth<1056&&t.setState({isLeftNavOpen:!1}),document.addEventListener("keydown",function(e){27===e.which&&t.state.isLeftNavOpen&&t.setState({isLeftNavOpen:!1})}))},t.addSmoothScroll=function(){var e=new(n(671))('a[href*="#"]',{speed:400,durationMin:250,durationMax:700,easing:"easeInOutCubic",offset:87,topOnEmptyHash:!1,clip:!0});if(window.location.hash){var t=document.querySelector(window.location.hash);t.offsetTop?window.scrollTo(0,t.offsetTop):e.animateScroll(t)}},t}i()(t,e);var a=t.prototype;return a.componentDidMount=function(){this.checkWidth(),this.addSmoothScroll()},a.render=function(){var e=this,t="internal"=={}.GATSBY_CARBON_ENV,n=this.props.children,a=d.dependencies["carbon-components"],i=d.dependencies["carbon-components-react"],o=(new Date).getFullYear(),s=new Intl.DateTimeFormat(void 0,{year:"numeric",month:"long",day:"numeric"}).format(new Date(Number(V.a))),c=this.state.isLeftNavOpen,p=null===n.key;return l.a.createElement(u.b,{query:"3100997888",render:function(r){return l.a.createElement(l.a.Fragment,null,l.a.createElement(m.a,{title:t?r.site.siteMetadata.titleInternal:r.site.siteMetadata.title,meta:[{name:"description",content:"IBM Design Research helps teams uncover insights and inform the experiences we create for people. It is at the heart of Enterprise Design thinking."},{name:"keywords",content:"IBM, design, research, design research, design thinking, human-centered design, interviewing, user research, interviews, user experience research, service design, ux research, design strategy, people, practice, observation, user interviews, anthropology"}],link:[{rel:"shortcut icon",type:"image/png",href:""+L.a}]},l.a.createElement("html",{lang:"en"})),l.a.createElement(E.Header,{"aria-label":"Header",className:"bx--header--website"},l.a.createElement(E.SkipToContent,null),l.a.createElement(E.HeaderMenuButton,{className:"bx--header__action--menu","aria-label":"Open menu",onClick:function(){return e.onToggleBtnClick("isLeftNavOpen","isLeftNavFinal","isSwitcherOpen","isSwitcherFinal")},isActive:c}),l.a.createElement(E.HeaderName,{prefix:"",to:"/",element:u.a},"IBM ",l.a.createElement("span",null,"Design Research")),l.a.createElement(E.HeaderGlobalBar,null,e.state.isSearchOpen?l.a.createElement(g,null):l.a.createElement(E.HeaderGlobalAction,{className:"bx--header__action--search","aria-label":"Search Website",onClick:function(){return e.handleSearchClick("isSearchOpen")}},l.a.createElement(h.Search20,null)),l.a.createElement(E.HeaderGlobalAction,{className:"bx--header__action--switcher","aria-label":"Switch",onClick:function(){return e.onToggleBtnClick("isSwitcherOpen","isSwitcherFinal","isLeftNavOpen","isLeftNavFinal")}},e.state.isSwitcherOpen?l.a.createElement(h.Close20,null):l.a.createElement(h.AppSwitcher20,null)))),l.a.createElement(x.g,{isSwitcherFinal:e.state.isSwitcherFinal,isSwitcherOpen:e.state.isSwitcherOpen,links:[{href:"https://www.ibm.com/design/",linkText:"IBM Design"},{href:"https://www.ibm.com/design/language/",linkText:"IBM Design Language"},{href:"https://www.carbondesignsystem.com",linkText:"IBM Product Design"},{href:"https://www.ibm.com/standards/web/",linkText:"IBM Digital Design"},{href:"https://www.ibm.com/design/research/",linkText:"IBM Design Research"},{href:"https://www.ibm.com/design/thinking/",linkText:"Enterprise Design Thinking"},{href:"https://www.ibm.com/services/ibmix/",linkText:"IBM iX"}]}),l.a.createElement(C,{is404Page:p,isLeftNavFinal:e.state.isLeftNavFinal,isLeftNavOpen:e.state.isLeftNavOpen,location:e.props.location,clickToClose:e.clickToClose}),l.a.createElement("div",{className:"container"},l.a.createElement(X.MDXProvider,{components:{p:H,h1:M,h2:D,h3:I,h4:_,h5:F,ul:G,ol:R,pre:x.e,table:O}},n),l.a.createElement(x.f,{logoOffset:!0,linksCol1:[{href:"/contributing/designers",linkText:"Contribute"},{href:"https://www.ibm.com/privacy",linkText:"Privacy"},{href:"https://www.ibm.com/legal",linkText:"Terms of Use"},{href:"https://www.ibm.com",linkText:"IBM.com"}],linksCol2:[{href:"https://dribbble.com/_carbondesign",linkText:"Dribbble"},{href:"https://medium.com/@_carbondesign",linkText:"Medium"},{href:"https://twitter.com/_carbondesign",linkText:"Twitter"}]},l.a.createElement("p",null,"Have questions? Email us or open",l.a.createElement("br",null)," an issue in"," ",l.a.createElement("a",{href:"https://github.com/carbon-design-system/carbon-website/issues/new/choose"},"GitHub.")),l.a.createElement("p",null,"Vanilla Components version ",a,l.a.createElement("br",null),"React Components version ",i,l.a.createElement("br",null),"Last updated ",s,l.a.createElement("br",null),"Copyright © ",o," IBM"))))},data:r})},t}(l.a.Component);P.propTypes={children:c.a.any};t.a=P},613:function(e,t,n){"use strict";n(614),n(259),n(167),n(616),n(166),n(618),n(92),n(168),n(620),n(622);var a=n(626),i=n.n(a);(function(){try{new CustomEvent("test-event")}catch(e){return!0}})()&&"undefined"!=typeof window&&(window.CustomEvent=i.a);n(627),n(628),n(629)},627:function(e,t){"undefined"!=typeof Element&&"function"!=typeof Element.prototype.closest&&(Element.prototype.closest=function(e){for(var t=this.ownerDocument,n=this;n&&n!==t;n=n.parentNode)if(n.matches(e))return n;return null})},628:function(e,t,n){if(n(79),"undefined"!=typeof Element){var a=["matches","webkitMatchesSelector","msMatchesSelector"].filter(function(e){return"function"==typeof Element.prototype[e]})[0];"matches"!==a&&(Element.prototype.matches=Element.prototype[a])}},629:function(e,t,n){var a,i,r;(n(630),n(41),"undefined"!=typeof DOMTokenList)&&((i=document.createElement("div"),r="_random_class_"+Math.random().toString(36).slice(2),i.classList.toggle(r,!1),i.classList.contains(r))&&(a=DOMTokenList.prototype.toggle,DOMTokenList.prototype.toggle=function(e,t){return arguments.length<2||this.contains(e)===!t?a.call(this,e):t}))},636:function(e){e.exports={data:{site:{siteMetadata:{title:"IBM Design Research",titleInternal:"IBM Design Research"}}}}},668:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsSAAALEgHS3X78AAABJ0lEQVRYhe2X/Q2DIBDF32s6gCM4giM4giM4QkdgFEfoCI7QERyhG9BcigmlknCA2j9KQggCdz8+Hie01uLMdCn1TbIhOZGcXdmoDMgK5GYABsBTzHhZ6ibVZpZzAAOAJXA8BXVpH6oCAOgAzIGjO4DWtbeu7rdL/64IwBkOZyiG+0j/fgN0WkFzAG7B0o6J48Zgq5bsLQDwcIeuUW5b48bZ95n/bD/sHiBpnerof1fdA8Wa30qKpSzSfGwLDtO8GqC25pMB9tK8BmDBDprXAKwGqmo++R6I6VUp1y8bMbvXXCfaFJtQ8Q9JafoD/AF+F4Ck0YZbF66NiuCoqzg67qhglAywVzhWA3gg1R4hWQAeSPEzrAjAC7cye5mxlKpwvZXPfZ4DeAHGrB1d6fXQCwAAAABJRU5ErkJggg=="},669:function(e,t){e.exports="1554410921000\n"},670:function(e,t,n){}}]);
//# sourceMappingURL=1-41061c234213e54c1e64.js.map