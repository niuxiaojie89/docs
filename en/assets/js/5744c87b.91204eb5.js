"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8550],{3905:function(e,n,r){r.d(n,{Zo:function(){return d},kt:function(){return p}});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function u(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=t.createContext({}),l=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},d=function(e){var n=l(e.components);return t.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),m=l(r),p=a,b=m["".concat(s,".").concat(p)]||m[p]||c[p]||o;return r?t.createElement(b,i(i({ref:n},d),{},{components:r})):t.createElement(b,i({ref:n},d))}));function p(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var u={};for(var s in n)hasOwnProperty.call(n,s)&&(u[s]=n[s]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var l=2;l<o;l++)i[l]=r[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8999:function(e,n,r){r.r(n),r.d(n,{contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return d}});var t=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],u={id:"get_vrf_random_number",title:"Get a Random Number",sidebar_label:"Get a Random Number"},s=void 0,l={unversionedId:"get_vrf_random_number",id:"get_vrf_random_number",isDocsHomePage:!1,title:"Get a Random Number",description:"Overview",source:"@site/../docs/\u83b7\u53d6\u968f\u673a\u6570\u6559\u7a0b.md",sourceDirName:".",slug:"/get_vrf_random_number",permalink:"/docs/en/get_vrf_random_number",editUrl:"https://github.com/PlatONnetwork/docs/tree/master/docs/\u83b7\u53d6\u968f\u673a\u6570\u6559\u7a0b.md",version:"current",frontMatter:{id:"get_vrf_random_number",title:"Get a Random Number",sidebar_label:"Get a Random Number"},sidebar:"docs",previous:{title:"WalletConnect integration Tutorial",permalink:"/docs/en/DApp_integration_with_WalletConnect_for_ATON"},next:{title:"ATON Wallet User Manual",permalink:"/docs/en/ATON-user-manual"}},d=[{value:"Overview",id:"overview",children:[]},{value:"Input parameters",id:"input-parameters",children:[]},{value:"return value",id:"return-value",children:[]},{value:"Code Example",id:"code-example",children:[]}],c={toc:d};function m(e){var n=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,t.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"overview"},"Overview"),(0,o.kt)("p",null,"PlatON built-in system contract (contract address: lat1xqqqqqqqqqqqqqqqqqqqqqqqqqqqqpe9fgva) provides the function of generating VRF random numbers. The contract supports returning up to 500 random numbers, and the return value is an array of []bytes, where each 32 bytes represents a random number."),(0,o.kt)("h3",{id:"input-parameters"},"Input parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"input []byte: The number of random numbers to be obtained, which cannot exceed 500. The input parameter is expressed as a uint64 value, padded to 32 bytes. For example: 0x00000000000000000000000000000000000000000000000000000000000006 means get 6 random numbers")),(0,o.kt)("h3",{id:"return-value"},"return value"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"ret[]byte: every 32 bytes represents a random number")),(0,o.kt)("h3",{id:"code-example"},"Code Example"),(0,o.kt)("h4",{id:"python-sdk-calls"},"Python SDK calls"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"from client_sdk_python import Web3, WebsocketProvider\n\nw3 = Web3(WebsocketProvider('ws://192.168.120.121:7789'))\n\ntxn = {\n    \"to\": 'lat1xqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpe9fgva',\n    \"data\": 0x000000000000000000000000000000000000000000000000000000000000001f4,\n}\n\ncrypt_hex = w3.platon.call(txn).hex()[2:]\ncrypts = [crypt_hex[i: i + 64] for i in range(len(crypt_hex)) if i % 64 == 0]\n\nprint(len(crypts), crypts)\n")),(0,o.kt)("h4",{id:"solidity-cross-contract-calls"},"Solidity cross-contract calls"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'// SPDX-License-Identifier: MIT\npragma solidity ^0.8.0;\n\ncontract VRF {\n\n  error InvalidRandomWords(uint32 numWords, uint256 returnValueLength);\n\n  // VrfInnerContract system contract\n  address vrfInnerContractAddr = 0x3000000000000000000000000000000000000001;\n\n  // every 32 bytes represents a random number\n  uint32 base = 32;\n\n  /**\n   * Get Random Number\n   * @param numWords \n   */\n  function requestRandomWords(uint32 numWords) internal returns (uint256[] memory) {\n    bytes memory data = abi.encode(numWords);\n    bytes memory returnValue = assemblyCall(data, vrfInnerContractAddr);\n\n    if (numWords * base != returnValue.length) {\n        revert InvalidRandomWords(\n            numWords,\n            returnValue.length\n        );\n    }\n\n    uint256[] memory randomWords = new uint256[](numWords);\n    for(uint i = 0; i < numWords; i++) {\n        uint start = i * base;\n        randomWords[i] = sliceUint(returnValue, start);\n    }\n\n    return randomWords;\n  }\n\n  /**\n   * delegatecall\n   * @param data contract input data\n   * @param addr contract address\n   */\n    function assemblyCall(bytes memory data, address addr) internal returns (bytes memory) {\n        uint256 len = data.length;\n        uint retsize;\n        bytes memory resval;\n        assembly {\n            let result := delegatecall(gas(), addr, add(data, 0x20), len, 0, 0)\n            retsize := returndatasize()\n        }\n        resval = new bytes(retsize);\n        assembly {\n            returndatacopy(add(resval, 0x20), 0, returndatasize())\n        }\n        return resval;\n    }\n\n    function sliceUint(bytes memory bs, uint start) internal pure returns (uint256) {\n        require(bs.length >= start + 32, "slicing out of range");\n        uint256 x;\n        assembly {\n            x := mload(add(bs, add(0x20, start)))\n        }\n        return x;\n    }\n}\n')))}m.isMDXComponent=!0}}]);