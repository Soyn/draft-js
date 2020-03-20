(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{205:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(227),o=a(221),c=a(235),i=a(266),s=a(225),m=a.n(s),d=a(383),u=(a(189),a(190),a(191),n.a.useState),b=n.a.useRef,g=n.a.useCallback;var h={CODE:{backgroundColor:"rgba(0, 0, 0, 0.05)",fontFamily:'"Inconsolata", "Menlo", "Consolas", monospace',fontSize:16,padding:2}};function E(e){switch(e.getType()){case"blockquote":return"RichEditor-blockquote";default:return null}}function f(e){var t=e.onToggle,a=e.active,l=e.label,r=e.style,o="RichEditor-styleButton";return a&&(o+=" RichEditor-activeButton"),n.a.createElement("span",{className:o,onMouseDown:function(e){e.preventDefault(),t(r)}},l)}var y=[{label:"H1",style:"header-one"},{label:"H2",style:"header-two"},{label:"H3",style:"header-three"},{label:"H4",style:"header-four"},{label:"H5",style:"header-five"},{label:"H6",style:"header-six"},{label:"Blockquote",style:"blockquote"},{label:"UL",style:"unordered-list-item"},{label:"OL",style:"ordered-list-item"},{label:"Code Block",style:"code-block"}];function v(e){var t=e.editorState,a=e.onToggle,l=t.getSelection(),r=t.getCurrentContent().getBlockForKey(l.getStartKey()).getType();return n.a.createElement("div",{className:"RichEditor-controls"},y.map((function(e){return n.a.createElement(f,{key:e.label,active:e.style===r,label:e.label,onToggle:a,style:e.style})})))}var p=[{label:"Bold",style:"BOLD"},{label:"Italic",style:"ITALIC"},{label:"Underline",style:"UNDERLINE"},{label:"Monospace",style:"CODE"}];function N(e){var t=e.editorState,a=e.onToggle,l=t.getCurrentInlineStyle();return n.a.createElement("div",{className:"RichEditor-controls"},p.map((function(e){return n.a.createElement(f,{key:e.label,active:l.has(e.style),label:e.label,onToggle:a,style:e.style})})))}var k=function(e){var t=u(d.EditorState.createEmpty()),a=t[0],l=t[1],r=b(null),o=g((function(e,t){var a=d.RichUtils.handleKeyCommand(t,e);return a?(l(a),"handled"):"not-handled"}),[a,l]),c=g((function(e){switch(e.keyCode){case 9:var t=d.RichUtils.onTab(e,a,4);return t!==a&&l(t),null}return Object(d.getDefaultKeyBinding)(e)}),[a,l]),i="RichEditor-editor",s=a.getCurrentContent();return s.hasText()||"unstyled"!==s.getBlockMap().first().getType()&&(i+=" RichEditor-hidePlaceholder"),n.a.createElement("div",{className:"RichEditor-root"},n.a.createElement(v,{editorState:a,onToggle:function(e){var t=d.RichUtils.toggleBlockType(a,e);l(t)}}),n.a.createElement(N,{editorState:a,onToggle:function(e){var t=d.RichUtils.toggleInlineStyle(a,e);l(t)}}),n.a.createElement("div",{className:i,onClick:function(){r.current&&r.current.focus()}},n.a.createElement(d.Editor,{blockStyleFn:E,customStyleMap:h,editorState:a,handleKeyCommand:o,keyBindingFn:c,onChange:l,placeholder:"Tell a story...",ref:r,spellCheck:!0})))},w=a(192),C=a.n(w);function T(e){var t=e.children,a=e.fallback;return"undefined"==typeof window?a||null:t}t.default=function(){var e=Object(o.a)().siteConfig,t=void 0===e?{}:e;return n.a.createElement(i.a,{permalink:"/",description:t.tagline},n.a.createElement("div",{className:"hero hero--primary shadow--lw"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col"},n.a.createElement("h1",{className:"hero__title"},t.title),n.a.createElement("p",{className:"hero__subtitle"},t.tagline),n.a.createElement("div",null,n.a.createElement(r.a,{className:"button button--secondary button--lg",to:Object(c.a)("docs/getting-started")},"Get Started"))),n.a.createElement("div",{className:"col text--center"},n.a.createElement("img",{className:C.a.demoGif,src:Object(c.a)("/img/demo.gif")}))))),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"margin-vert--xl"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col"},n.a.createElement("h3",null,"Extensible and Customizable"),n.a.createElement("p",null,"We provide the building blocks to enable the creation of a broad variety of rich text composition experiences, from basic text styles to embedded media.")),n.a.createElement("div",{className:"col"},n.a.createElement("h3",null,"Declarative Rich Text"),n.a.createElement("p",null,"Draft.js fits seamlessly into React applications, abstracting away the details of rendering, selection, and input behavior with a familiar declarative API.")),n.a.createElement("div",{className:"col"},n.a.createElement("h3",null,"Immutable Editor State"),n.a.createElement("p",null,"The Draft.js model is built with"," ",n.a.createElement("a",{href:"https://immutable-js.github.io/immutable-js/",target:"_blank",rel:"noreferrer noopener"},"immutable-js"),", offering an API with functional state updates and aggressively leveraging data persistence for scalable memory usage.")))),n.a.createElement("div",{className:m()("row","margin-vert--xl",C.a.hideOnTabletAndSmaller)},n.a.createElement(T,{fallback:null},n.a.createElement("div",{className:"col col--6 col--offset-3"},n.a.createElement("h2",null,"Try it out!"),n.a.createElement("p",null,"Here's a simple example of a rich text editor built in Draft.js."),n.a.createElement("div",{id:"rich-example"},n.a.createElement(k,null))))),n.a.createElement("div",{className:"margin-vert--xl text--center"},n.a.createElement(r.a,{className:"button button--primary button--lg",to:Object(c.a)("docs/getting-started")},"Learn more about Draft.js"))))}}}]);