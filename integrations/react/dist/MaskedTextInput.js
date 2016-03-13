!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("react/lib/ReactInputSelection")):"function"==typeof define&&define.amd?define(["react","react/lib/ReactInputSelection"],t):"object"==typeof exports?exports.MaskedTextInput=t(require("react"),require("react/lib/ReactInputSelection")):e.MaskedTextInput=t(e.React,e["react/lib/ReactInputSelection"])}(this,function(e,t){return function(e){function t(n){if(r[n])return r[n].exports;var a=r[n]={exports:{},id:n,loaded:!1};return e[n].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=r(7),u=n(o),i=r(8),s=r(6);t["default"]=u["default"].createClass({displayName:"MaskedTextInput",propTypes:{mask:o.PropTypes.string.isRequired},getInitialState:function(){return{previousValue:"",conformToMaskResults:{},currentCaretPosition:null}},componentWillReceiveProps:function(e){e.mask!==this.props.mask&&this.setState(this.getInitialState())},componentDidUpdate:function(){if(this.refs.inputElement===document.activeElement){var e=(0,s.adjustCaretPosition)({previousInput:this.state.previousValue,conformToMaskResults:this.state.conformToMaskResults,currentCaretPosition:this.state.currentCaretPosition});(0,i.setSelection)(this.refs.inputElement,{start:e,end:e})}},render:function(){var e=this.props,t=this.state,r=this.onChange,n=e.placeholder||(0,s.convertMaskToPlaceholder)(this.props.mask),o=t.conformToMaskResults.output!==n?t.conformToMaskResults.output:"";return u["default"].createElement("input",a({},e,{type:"text",onChange:r,value:o,placeholder:n,ref:"inputElement"}))},onChange:function(e){var t={conformToMaskResults:(0,s.conformToMask)(e.target.value,this.props.mask),previousValue:this.state.conformToMaskResults.output||this.state.previousValue,currentCaretPosition:(0,i.getSelection)(this.refs.inputElement).start};this.setState(t),"function"==typeof this.props.onChange&&this.props.onChange(e)}})},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.maskingCharactersEnums={numeric:"1",alphabetic:"A",alphanumeric:"?",uppercase:"U",lowercase:"L",any:"*"},t.maskingCharactersWithDescription={1:"Any number",A:"Any letter","?":"Any number or letter",U:"Any letter (will be transformed to uppercase)",L:"Any letter (will be transformed to lowercase)","*":"Any character"},t.maskingCharacters=["1","A","?","U","L","*"],t.placeholderCharacter="_"},function(e,t,r){"use strict";function n(){var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0];return o(e).map(function(e){return-1!==l.maskingCharacters.indexOf(e)?l.placeholderCharacter:e}).join("")}function a(){var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0];return o(e).reduce(function(e,t){return-1===l.maskingCharacters.indexOf(t)&&-1===e.indexOf(t)&&e.push(t),e},[])}function o(){var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0];return e.split("")}function u(){var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0],t=arguments[1];switch(t){case l.maskingCharactersEnums.numeric:return s(e);case l.maskingCharactersEnums.uppercase:case l.maskingCharactersEnums.lowercase:case l.maskingCharactersEnums.alphabetic:return c(e);case l.maskingCharactersEnums.alphanumeric:return s(e)||c(e);default:return!0}}function i(){var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0],t=arguments[1];switch(t){case l.maskingCharactersEnums.uppercase:return e.toUpperCase();case l.maskingCharactersEnums.lowercase:return e.toLowerCase();default:return e}}function s(e){return!isNaN(e)}function c(e){return/^[a-zA-Z]+$/.test(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.convertMaskToPlaceholder=n,t.getDelimiters=a,t.tokenize=o,t.isAcceptableCharacter=u,t.potentiallyTransformCharacter=i;var l=r(1)},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function a(e){var t=e.previousInput,r=void 0===t?"":t,n=e.conformToMaskResults,a=void 0===n?{}:n,i=e.currentCaretPosition,c=void 0===i?0:i;a.input=a.input||"",a.output=a.output||"",a.mask=a.mask||"";var l=(0,o.convertMaskToPlaceholder)(a.mask),f=r!==l&&(a.output.length<r.length||a.input.length<r.length);if(f===!1){if(r===a.output)return c-1;var p=(0,s["default"])(r||l,a.output);if(p.indexOfLastChange-c>1)return c;for(var h=p.indexOfLastChange+1;h<l.length;h++)if(l[h]===u.placeholderCharacter)return h;return a.output.length}if(f===!0){if(r===a.output){if(l[c]===u.placeholderCharacter)return c;for(var d=c;d>0;d--)if(l[d]===u.placeholderCharacter)return d+1}else{var m=(0,s["default"])(r,a.output);if(m.indexOfFirstChange-c>1)return c;if(l[c-1]===u.placeholderCharacter)return c;for(var v=m.indexOfFirstChange-1;v>0;v--)if(l[v]===u.placeholderCharacter)return v+1}return 0}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=a;var o=r(2),u=r(1),i=r(5),s=n(i)},function(e,t,r){"use strict";function n(){var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0],t=arguments.length<=1||void 0===arguments[1]?"":arguments[1],r=(0,a.convertMaskToPlaceholder)(t),n=(0,a.getDelimiters)(t),u=e.length;return{input:e,mask:t,output:(0,a.tokenize)(r).map(function(r,i){if(r===o.placeholderCharacter&&u>0)for(var s=e.length-u;s<e.length;s++){var c=e[s];if(u--,c===o.placeholderCharacter||-1===n.indexOf(c)&&(0,a.isAcceptableCharacter)(c,t[i])===!0)return(0,a.potentiallyTransformCharacter)(c,t[i])}return r}).join("")}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n;var a=r(2),o=r(1)},function(e,t){"use strict";function r(){for(var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0],t=arguments.length<=1||void 0===arguments[1]?"":arguments[1],r={indexOfFirstChange:null,indexOfLastChange:null,numberOfChanges:0},n=0;n<e.length;n++)e[n]!==t[n]&&(null===r.indexOfFirstChange&&(r.indexOfFirstChange=n),r.indexOfLastChange=n,r.numberOfChanges++);return r}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=r},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(4);Object.defineProperty(t,"conformToMask",{enumerable:!0,get:function(){return n(a)["default"]}});var o=r(3);Object.defineProperty(t,"adjustCaretPosition",{enumerable:!0,get:function(){return n(o)["default"]}});var u=r(2);Object.defineProperty(t,"convertMaskToPlaceholder",{enumerable:!0,get:function(){return u.convertMaskToPlaceholder}})},function(t,r){t.exports=e},function(e,r){e.exports=t}])});