"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9860],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=o.createContext({}),s=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),h=a,m=u["".concat(i,".").concat(h)]||u[h]||d[h]||r;return n?o.createElement(m,c(c({ref:t},p),{},{components:n})):o.createElement(m,c({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,c=new Array(r);c[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var s=2;s<r;s++)c[s]=n[s];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5281:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),c=["components"],l={id:"DApp_integration_with_WalletConnect_for_ATON",title:"DApp integration with WalletConnect for ATON",sidebar_label:"WalletConnect integration Tutorial"},i=void 0,s={unversionedId:"DApp_integration_with_WalletConnect_for_ATON",id:"DApp_integration_with_WalletConnect_for_ATON",isDocsHomePage:!1,title:"DApp integration with WalletConnect for ATON",description:"Overview",source:"@site/../docs/DApp\u901a\u8fc7WalletConnect\u63a5\u5165ATON.md",sourceDirName:".",slug:"/DApp_integration_with_WalletConnect_for_ATON",permalink:"/docs/DApp_integration_with_WalletConnect_for_ATON",editUrl:"https://github.com/PlatONnetwork/docs/tree/master/docs/DApp\u901a\u8fc7WalletConnect\u63a5\u5165ATON.md",version:"current",frontMatter:{id:"DApp_integration_with_WalletConnect_for_ATON",title:"DApp integration with WalletConnect for ATON",sidebar_label:"WalletConnect integration Tutorial"},sidebar:"docs",previous:{title:"WalletConnect",permalink:"/docs/walletconnect_tutorial"},next:{title:"Get a Random Number",permalink:"/docs/get_vrf_random_number"}},p=[{value:"Overview",id:"overview",children:[]},{value:"What is WalletConnect",id:"what-is-walletconnect",children:[]},{value:"Instructions for Developers",id:"instructions-for-developers",children:[]},{value:"Conclusion",id:"conclusion",children:[]},{value:"Video Demo",id:"video-demo",children:[]}],d={toc:p};function u(e){var t=e.components,n=(0,a.Z)(e,c);return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"overview"},"Overview"),(0,r.kt)("p",null,"ATON version 1.1.0 already supports the WalletConnect protocol. You can connect with DApps and sign transactions without disclosing the private key to DApps as it will not leave your mobile device."),(0,r.kt)("h3",{id:"what-is-walletconnect"},"What is WalletConnect"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.walletconnect.com/1.0/tech-spec"},"WalletConnect")," is an open protocol designed to enable secure communications between wallets and Dapps. The protocol establishes a remote connection between two apps and/or devices, and the actual data (payloads) are transmitted through the bridge server. These payloads are symmetrically encrypted through a shared key between the two peers. The connection is initiated by one peer displaying a QR Code or deep link with a standard WalletConnect URI and is established when the counter-party approves this connection request."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"As a DApp developer, you should first learn the basics of integrating WalletConnection in DApps. With the help of this tutorial, you can help users generate an unsigned transaction request in your DApp and have it sent to the ATON wallet through WalletConnect for signature authorization.")),(0,r.kt)("h3",{id:"instructions-for-developers"},"Instructions for Developers"),(0,r.kt)("p",null,"Firstly, you should provide two buttons (WalletConnect and sendTransaction) in your DApp for building connections and sending transactions."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"You can refer to the example codes in this tutorial ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/PlatONnetwork/WalletConnect-Example"},"PlatON WalletConnect Example"),".")),(0,r.kt)("h4",{id:"1-integrating-walletconnection-in-dapp"},"1. Integrating WalletConnection in DApp"),(0,r.kt)("p",null,"To begin with, you\u2019ll first have to generate a QR code in the standard WalletConnect URI format (",(0,r.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-1328"},"EIP-1328"),") for the subsequent connection with ATON (the relevant UI component is provided by the WalletConnect library)."),(0,r.kt)("p",null,"In the DApp, one clicks the button to build connections and execute the  ",(0,r.kt)("inlineCode",{parentName:"p"},"walletConnectInit"),"  method"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Installation")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"yarn")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"yarn add @walletconnect/client @walletconnect/qrcode-modal\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"npm")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm install @walletconnect/client @walletconnect/qrcode-modal\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Developers are advised to keep track of the official updates of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/WalletConnect/walletconnect-monorepo/releases"},"walletconnect-monorepo")," to ensure that DApps have access to the latest features and performance improvements.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"The WalletConnect button")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<SButtonContainer>\n  <SConnectButton left onClick={this.walletConnectInit} fetching={fetching}>\n    {"Connect to WalletConnect"}\n  </SConnectButton>\n</SButtonContainer>\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Build WalletConnect connections")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import WalletConnect from "@walletconnect/client";\nimport QRCodeModal from "@walletconnect/qrcode-modal";\n\nwalletConnectInit = async () => {\n  // bridge url\n  const bridge = "https://bridge.walletconnect.org";\n\n  // create new connector\n  const connector = new WalletConnect({ bridge, qrcodeModal: QRCodeModal });\n\n  await this.setState({ connector });\n\n  // check if already connected\n  if (!connector.connected) {\n    // create new session\n    await connector.createSession();\n  }\n\n  // subscribe to events\n  this.subscribeToEvents();\n};\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"subscribeToEvents")," will engage in the event listening of connectors defined by ",(0,r.kt)("inlineCode",{parentName:"p"},"walletConnectInit"),". ",(0,r.kt)("a",{parentName:"p",href:"https://docs.walletconnect.com/1.0/client-api"},"connector API")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'subscribeToEvents = () => {\n  const { connector } = this.state;\n\n  if (!connector) {\n    return;\n  }\n\n  // When the DApp is connected to the wallet, if the wallet info changes (chainId or address in most cases), the session_update callback will be triggered\n  connector.on("session_update", async (error, payload) => {\n    console.log(`connector.on("session_update")`, payload);\n\n    if (error) {\n      throw error;\n    }\n\n    const { chainId, accounts } = payload.params[0];\n\n    // Obtain accounts and chainId through payload.params and update the state of the DApp\n    this.onSessionUpdate(accounts, chainId);\n  });\n\n  connector.on("connect", (error, payload) => {\n    console.log(`connector.on("connect")`, payload);\n\n    if (error) {\n      throw error;\n    }\n\n    this.onConnect(payload);\n  });\n\n  connector.on("disconnect", (error, payload) => {\n    console.log(`connector.on("disconnect")`, payload);\n\n    if (error) {\n      throw error;\n    }\n\n    this.onDisconnect();\n  });\n\n  // If the connection already exists, the QR code popup will not be triggered after walletConnectInit is executed, and you\u2019ll only have to update the state of the DApp\n  if (connector.connected) {\n    const { chainId, accounts } = connector;\n    const address = accounts[0];\n    this.setState({\n      connected: true,\n      chainId,\n      accounts,\n      address,\n    });\n    this.onSessionUpdate(accounts, chainId);\n  }\n\n  this.setState({ connector });\n};\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: The example above does not use react hook. Therefore, if ",(0,r.kt)("inlineCode",{parentName:"p"},"await this.setState()")," in the code should be converted into hook, the developer needs to comb through the state and the update logic of the DApp.")),(0,r.kt)("h4",{id:"2-connecting-to-aton"},"2. Connecting to ATON"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Through Step 1, the ATON wallet will be able to scan the QR code in WalletConnect URI format to build a connection. After reading the URI, ATON will immediately receive and decrypt the request data of the connection. The wallet will then show users the details of the request provided by the Dapp. To be more specific:")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/15320265/147226794-df8a2ca7-aebb-41c6-afb4-ca0bd5c1384b.png",alt:"Initiate Connection"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Users will approve or reject the connection.")),(0,r.kt)("p",null,"Where the connection is rejected, ATON will initiate a rejection request, and the DApp will go through a \u201cdisconnect\u201d event, immediately disconnecting itself from the bridge server. You can refer to the message of payload for error handling and prompts."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'payload: {\n  event: "disconnect";\n  params: [{ message: "Session update rejected" }];\n}\n')),(0,r.kt)("p",null,"If approved, ATON will show a successful connection, and the DApp will go through a \u201cconnect\u201d event and receive the account and ChainID provided in the payload returned from the wallet."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/15320265/147227578-af61fe02-daa3-41d2-9328-9e2000a0d8ff.png",alt:"Approve Connection"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"payload: {\n  event: \"connect\"\n  params: [\n    accounts: ['0xdc8c0f103dc8523c82d38064f746dda9fa28bf7f']\n    chainId: 210309\n    peerId: \"BC246E88-ACC0-4FD6-BF10-DEF314EF42BE\"\n    peerMeta: {description: \"hello\uff0ci'm Platon.\", icons: Array(0), name: 'ATON', url: 'https://safe.gnosis.io'}\n  ]\n}\n")),(0,r.kt)("h4",{id:"3-transaction-signature"},"3. Transaction Signature"),(0,r.kt)("p",null,"Once the connection is built, the DApp will be able to send any JSON-RPC call request processed by the wallet to read data from its nodes or issue signature requests for a transaction or message."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"The \u201cSend\u201d button")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"<Button onClick={this.send}>Send</Button>\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Generate the signature request")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'sendTransaction = async () => {\n  const tx = {\n    from,\n    to,\n    nonce,\n    gasPrice,\n    gasLimit,\n    value,\n    data,\n  };\n\n  // send transaction\n  const result = await connector.sendTransaction(tx);\n\n  console.log("connector.sendTransaction result txHash: ", result);\n};\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Display of transaction results")),(0,r.kt)("p",null,"Obtain txHash, which provides browser links and display of transaction details in the DApp"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'// format displayed result\nconst formattedResult = {\n  method: "eth_sendTransaction",\n  txHash: result,\n  from: address,\n  to: address,\n  value: "0 ETH",\n};\n\n// display result\nthis.setState({\n  connector,\n  result: formattedResult || null,\n});\n')),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/15320265/147228148-0a6ddc59-fc36-451d-87cc-e39453311957.png",alt:"Confirm Transaction"})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/15320265/147228172-b7765f6c-0e0a-47a5-b85f-80282a9b0741.png",alt:"Transaction Success@3x"})),(0,r.kt)("h3",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"After the three steps are completed, users of your DApp will be able to connect with ATON in the DApp and send signature requests through sendTransaction provided by WalletConnect."),(0,r.kt)("h3",{id:"video-demo"},"Video Demo"),(0,r.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/MRyAcVnDjrY",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}u.isMDXComponent=!0}}]);