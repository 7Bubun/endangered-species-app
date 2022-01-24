(this["webpackJsonpreact-web-app"]=this["webpackJsonpreact-web-app"]||[]).push([[0],{24:function(e,t,n){},25:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var a,i=n(1),c=n.n(i),s=n(17),r=n.n(s),o=(n(24),n(2)),l=n(3),u=n(5),d=n(4),j=(n(25),n(0)),h=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Welcome!"}),Object(j.jsxs)("div",{className:"info",children:[Object(j.jsx)("h4",{children:"About"}),Object(j.jsx)("p",{children:"The purpose of this app is to make preserving endangered species easy. Currently, 3 functionalities are offered. These are described below and accesible from the navigation bar on top of the page."})]}),Object(j.jsxs)("div",{className:"info",children:[Object(j.jsx)("h4",{children:"Map of Endangered Species"}),Object(j.jsx)("p",{children:'This functionality displays a world map and provides information about location of endangered species inhabiting selected areas. To select an area, simply click on it or choose the option "select my location" to select your current location.'})]}),Object(j.jsx)("div",{id:"guardian-of-responisveness"}),Object(j.jsxs)("div",{className:"info",children:[Object(j.jsx)("h4",{children:"Species Classification"}),Object(j.jsx)("p",{children:'Species Classification helps identify endangered species based on an uploaded photo. To identify an endangered species, upload an image and select "Identify". The photo will be identified as a certain endangered species or it will not be identified as any.'})]}),Object(j.jsxs)("div",{className:"info",children:[Object(j.jsx)("h4",{children:"Encyclopedia"}),Object(j.jsx)("p",{children:"All the endangered species present in our database have a small encyclopedia entry. That way, you can learn more about endangered species in your area and around the world."})]}),Object(j.jsx)("div",{className:"empty"})]})}}]),n}(i.Component),b=h,p=n(6),f=n(9),O=n(8),m=n(19),v=n.n(m),y={authOptions:{authType:O.AuthenticationType.subscriptionKey,subscriptionKey:"ppaDuPVNCUAQBxa6euPFV2nBhNvqGbYfCFG-1SrTKag"}};fetch("countries_codes_and_coordinates.csv").then((function(e){var t=e.body.getReader(),n=new TextDecoder("utf-8");return t.read().then((function(e){var t=n.decode(e.value);a=v.a.parse(t),console.log(a)}))}));var x=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(j.jsx)("div",{style:{height:"600px"},children:Object(j.jsx)(f.c,{children:Object(j.jsx)(f.a,{options:y})})})}}]),n}(i.Component),g=x,N=new O.source.DataSource,w=new O.layer.SymbolLayer(N),k=function(){var e=Math.floor(360*Math.random()-180);return[Math.floor(-180*Math.random()+90),e]},C=function(){var e=Object(i.useContext)(f.b),t=e.mapRef,n=e.isMapReady,a=Object(i.useState)(!0),c=Object(p.a)(a,2),s=c[0];c[1];Object(i.useEffect)((function(){t&&t.setStyle({showTileBoundaries:!s})}),[s]);Object(i.useEffect)((function(){n&&t&&(t.sources.add(N),t.layers.add(w))}),[n]);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{children:"Map Controller"}),Object(j.jsx)("button",{onClick:function(){t&&(t.setCamera({center:k()}),console.log(t))},children:"Do something"}),Object(j.jsx)(g,{})]})},S=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(j.jsxs)(f.c,{children:[Object(j.jsx)("h4",{children:"mapka"}),Object(j.jsx)(C,{})]})}}]),n}(i.Component),T=S,R=n(10),L=function e(){Object(o.a)(this,e)};L.API_URL="https://endangered-species-function.azurewebsites.net";n(30);var F=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={fullName:"Name",category:"Category",links:["Links"]},e.classify=function(e){var t=document.forms.form.file.files[0];if(null!=t){var n=new XMLHttpRequest;n.onreadystatechange=function(){if(4===n.readyState&&200===n.status){var t=JSON.parse(n.responseText).predictions[0];t.probability>.8&&e(t.tagName)}};var a=new FileReader;a.onload=function(){var e=new Uint8Array(this.result);n.open("POST","https://westeurope.api.cognitive.microsoft.com/customvision/v3.0/Prediction/b9a1c1ac-eaca-4965-be2a-47615d7fb885/classify/iterations/Iteration1/image",!0),n.setRequestHeader("Prediction-Key","b3d0774404464793a6117c6d1c89b8c0"),n.setRequestHeader("Content-Type","application/octet-stream"),n.send(e)},a.readAsArrayBuffer(t)}},e.getInfo=function(t){var n=new XMLHttpRequest;n.onreadystatechange=function(){if(4===n.readyState&&200===n.status){var t,a=JSON.parse(n.responseText),i=[],c=Object(R.a)(a.Links);try{for(c.s();!(t=c.n()).done;){var s=t.value;i.push(s.Link)}}catch(r){c.e(r)}finally{c.f()}e.setState({fullName:a.FullName,category:a.Category,links:i})}},n.open("POST",L.API_URL+"/api/species-tag",!0),n.setRequestHeader("Content-Type","application/json"),n.send(JSON.stringify({tag:t}))},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(j.jsxs)("div",{className:"wrapper",children:[Object(j.jsxs)("div",{className:"input-container",children:[Object(j.jsx)("h3",{children:"Check an animal"}),Object(j.jsx)("form",{name:"form",children:Object(j.jsx)("input",{name:"file",type:"file",className:"file-input"})}),Object(j.jsx)("button",{onClick:function(){return e.classify(e.getInfo)},children:"Check"})]}),Object(j.jsxs)("div",{className:"information-container",children:[Object(j.jsx)("div",{className:"half centered-content right-bordered",children:Object(j.jsx)("h4",{children:this.state.fullName})}),Object(j.jsx)("div",{className:"half centered-content",children:Object(j.jsx)("h4",{children:this.state.category})}),Object(j.jsx)("div",{className:"cb"}),Object(j.jsx)("div",{className:"links centered-content",children:Object(j.jsx)("ul",{children:this.state.links.map((function(e){return Object(j.jsx)("li",{children:e},e)}))})})]})]})}}]),n}(i.Component),A=F,M=n.p+"static/media/logo.6ce24c58.svg",P=(n(31),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("div",{className:"sidebar",children:null==this.state.allSpecies?Object(j.jsx)("div",{className:"sidebar-element",children:"Loading..."}):this.state.allSpecies.map((function(t){return Object(j.jsx)("div",{className:"sidebar-element",onClick:function(){return e.getData(t)},children:t},t)}))}),Object(j.jsxs)("div",{className:"content",children:[Object(j.jsx)("div",{className:"title",children:Object(j.jsx)("h2",{className:"header2",children:null==this.state.title?"Encyclopedia":this.state.title})}),Object(j.jsx)("div",{className:"image",children:Object(j.jsx)("img",{src:null==this.state.imageURL?M:this.state.imageURL,alt:""})}),Object(j.jsx)("div",{className:"text",children:null==this.state.text?"Choose species on the sidebar to display information.":this.state.text.map((function(e){return Object(j.jsx)("p",{children:e},e)}))}),Object(j.jsx)("div",{className:"footer",children:Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{children:"Sources:"}),null==this.state.links?"":this.state.links.map((function(e){return Object(j.jsxs)("div",{children:[" ",Object(j.jsx)("a",{href:e,target:"_blank",rel:"noreferrer",children:e})]},e)}))]})})]}),Object(j.jsx)("div",{className:"empty"})]})}},{key:"componentDidMount",value:function(){this.getSpecies()}},{key:"getSpecies",value:function(){var e=this,t=new XMLHttpRequest;t.onload=function(){if(200===t.status){for(var n=JSON.parse(t.responseText),a=0;a<n.length;a++)n[a]=n[a].FullSpeciesName;e.setState({allSpecies:n})}},t.open("GET",L.API_URL+"/api/species",!0),t.send()}},{key:"getData",value:function(e){var t=this,n=new XMLHttpRequest;n.onreadystatechange=function(){if(4===n.readyState){var a,i=JSON.parse(n.responseText),c=[],s=[],r=Object(R.a)(i.Details);try{for(r.s();!(a=r.n()).done;){var o=a.value;c.push(o.Information)}}catch(j){r.e(j)}finally{r.f()}var l,u=Object(R.a)(i.Links);try{for(u.s();!(l=u.n()).done;){var d=l.value;s.push(d.Link)}}catch(j){u.e(j)}finally{u.f()}t.setState({title:e,text:c,imageURL:"data:image/(png|jpg);base64, "+i.Image,links:s})}},n.open("POST",L.API_URL+"/api/encyclopedia",!0),n.setRequestHeader("Content-Type","application/json"),n.send(JSON.stringify({name:e}))}}]),n}(i.Component)),I=P,E=(n(32),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(j.jsx)("div",{className:"Content",children:this.selectView()})}},{key:"selectView",value:function(){switch(this.props.nameOfView){case"homeview":return Object(j.jsx)(b,{});case"mapview":return Object(j.jsx)(T,{});case"imageview":return Object(j.jsx)(A,{});case"infoview":return Object(j.jsx)(I,{});default:return Object(j.jsx)("h1",{children:" ERROR "})}}}]),n}(i.Component)),q=E,D=(n(33),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(j.jsxs)("div",{className:"Navbar",children:[Object(j.jsx)("button",{className:"navbar-button",onClick:function(){return e.props.routingFunction("homeview")},children:"Homepage"}),Object(j.jsx)("a",{href:"map.html",children:Object(j.jsx)("button",{className:"navbar-button",children:"Map of Endangered Species"})}),Object(j.jsx)("button",{className:"navbar-button",onClick:function(){return e.props.routingFunction("imageview")},children:"Species Classification"}),Object(j.jsx)("button",{className:"navbar-button",onClick:function(){return e.props.routingFunction("infoview")},children:"Encyclopedia"})]})}}]),n}(i.Component)),H=D,U=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={nameOfCurrentView:"homeview"},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(j.jsxs)(c.a.Fragment,{children:[Object(j.jsx)(H,{routingFunction:function(t){return e.setState({nameOfCurrentView:t})}}),Object(j.jsx)(q,{nameOfView:this.state.nameOfCurrentView})]})}}]),n}(i.Component),V=U,J=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,35)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),i(e),c(e),s(e)}))};r.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(V,{})}),document.getElementById("root")),J()}},[[34,1,2]]]);
//# sourceMappingURL=main.79615639.chunk.js.map