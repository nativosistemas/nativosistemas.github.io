(this.webpackJsonpappdk=this.webpackJsonpappdk||[]).push([[0],{22:function(e,a,t){e.exports=t(34)},27:function(e,a,t){},28:function(e,a,t){},34:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),r=t(19),i=t.n(r),c=(t(27),t(28),t(12)),l=t(1),s=t(20),d=t(5),u=t(6),m=t(10),p=t(8),f=t(7),E=function(e){Object(p.a)(t,e);var a=Object(f.a)(t);function t(e){var n;return Object(d.a)(this,t),(n=a.call(this,e)).state={name:"",password:"",loginErrors:""},n.handleSubmit=n.handleSubmit.bind(Object(m.a)(n)),n.handleChange=n.handleChange.bind(Object(m.a)(n)),n}return Object(u.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(s.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){var a=this.state,t=a.name,n=a.password,o={};o.login=t,o.pass=n;var r=JSON.stringify(o);fetch("http://www.kellerhoff.com.ar:84/api/Authenticate",{method:"POST",headers:{"Content-Type":"application/json"},body:r}).then((function(e){return e.json()})).then((function(e){alert("OK"+e.apNombre)}))}},{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("h3",null,"Inicio sesion"),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null,"Usuario"),o.a.createElement("input",{type:"text",name:"user",className:"form-control",placeholder:"Ingrese usuario",value:this.state.user,onChange:this.handleChange,required:!0})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null,"Contrase\xf1a"),o.a.createElement("input",{type:"password",name:"password",className:"form-control",placeholder:"Ingrese contrase\xf1a",value:this.state.password,onChange:this.handleChange,required:!0})),o.a.createElement("div",{className:"form-group"},o.a.createElement("div",{className:"custom-control custom-checkbox"},o.a.createElement("input",{type:"checkbox",className:"custom-control-input",id:"customCheck1"}),o.a.createElement("label",{className:"custom-control-label",htmlFor:"customCheck1"},"Remember me"))),o.a.createElement("button",{type:"submit",className:"btn btn-primary btn-block"},"Login")))}}]),t}(n.Component),h=function(e){Object(p.a)(t,e);var a=Object(f.a)(t);function t(e){var n;return Object(d.a)(this,t),(n=a.call(this,e)).refrescarCantidad=function(){var e=n.props.getCantidad(n.props.modulo);n.setState({count:e})},n.onClickAccion=function(e,a){e.preventDefault();var t=n.state.count;if(0===t&&-1===a)return null;t+=a,n.setState({count:t},(function(){n.props.setCantidad(n.props.modulo,t)}))},n.FormatoDecimalConDivisorMiles=function(e){var a=e,t=!1;if(e){-1!==e.toString().indexOf("-")&&(t=!0);var n=e.toString().replace("-","").split(".");if(n.length>0){n[0].length;for(var o="",r=n[0];r.length>3;)o="."+r.substr(r.length-3)+o,r=r.substring(0,r.length-3);o=r+o,a=void 0==n[1]?o:o+","+n[1]}t&&(a="-"+a)}return a},n.currencyFormat=function(e){return"$"+n.FormatoDecimalConDivisorMiles(e)},n.state={count:0},n}return Object(u.a)(t,[{key:"render",value:function(){var e=this,a=this.props.modulo.moduloDetalle;return o.a.createElement("div",{className:"card cardModulo"},o.a.createElement("div",{className:"card-body"},a.length>0&&o.a.createElement("table",{className:"table textTable"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",{scope:"col"},"Producto"),o.a.createElement("th",{className:"d-none d-sm-none d-md-table-cell",scope:"col"},"Descripci\xf3n"),o.a.createElement("th",{scope:"col"},"Precio"),o.a.createElement("th",{scope:"col"},"Precio c/ Desc."),o.a.createElement("th",{className:"d-none d-sm-none d-md-table-cell",scope:"col"},"Cant. Unid."))),o.a.createElement("tbody",null,a.map((function(a,t){return o.a.createElement("tr",{key:t},o.a.createElement("td",null,a.producto),o.a.createElement("td",{className:"d-none d-sm-none d-md-table-cell"},a.descripcion),o.a.createElement("td",null,e.currencyFormat(a.precio)),o.a.createElement("td",null,e.currencyFormat(a.precioDescuento)),o.a.createElement("td",{className:"d-none d-sm-none d-md-table-cell"},a.cantidadUnidades))}))))),o.a.createElement("div",{className:"card-footer "},o.a.createElement("div",{className:" row justify-content-center"},o.a.createElement("div",{className:"input-group col-xs-6 col-sm-6 col-md-3 col-lg-2"},o.a.createElement("div",{className:"input-group-prepend"},o.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:function(a){return e.onClickAccion(a,-1)}},"-")),o.a.createElement("input",{type:"number",className:"form-control",placeholder:"Cantidad",value:this.state.count,readOnly:!0}),o.a.createElement("div",{className:"input-group-prepend"},o.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:function(a){return e.onClickAccion(a,1)}},"+"))))))}}]),t}(n.Component),g=function(e){Object(p.a)(t,e);var a=Object(f.a)(t);function t(){var e;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=a.call.apply(a,[this].concat(r))).componentWillMount=function(){e.miMapaRefs=new Map,e.props.modulos.forEach((function(a){e.miMapaRefs.set(a.id,o.a.createRef())}))},e.componentWillUpdate=function(){e.miMapaRefs=new Map,e.props.modulos.forEach((function(a){e.miMapaRefs.set(a.id,o.a.createRef())}))},e.actualizarCantidadEnLosModulos=function(){e.miMapaRefs.forEach((function(e){e.current.refrescarCantidad()}))},e.setCantidad=function(a,t){var n=e.props.farmacia;if(""!==n){var o=localStorage.getItem("l_pedidos")||"",r=!0;if(""!==o&&(o=JSON.parse(o)),Array.isArray(o)){for(var i=0;i<o.length;i++)if(o[i].modulo.id===a.id&&o[i].farmacia.id===n.id){r=!1,o[i].cantidad=t;break}}else o=[];if(r){var c={fechaCreacion:Date.now(),farmacia:n,modulo:a,cantidad:t};o.push(c)}localStorage.setItem("l_pedidos",JSON.stringify(o))}},e.getCantidad=function(a){var t=0,n=e.props.farmacia;if(""===n)return t;var o=localStorage.getItem("l_pedidos")||"";if(""!==o&&(o=JSON.parse(o),Array.isArray(o)))for(var r=0;r<o.length;r++)if(String(o[r].modulo.id)===String(a.id)&&String(o[r].farmacia.id)===String(n.id)){t=o[r].cantidad;break}return t},e}return Object(u.a)(t,[{key:"render",value:function(){var e=this,a=this.props.modulos;return 0===a.length?null:o.a.createElement(o.a.Fragment,null,o.a.createElement(o.a.Fragment,null,a.map((function(a){return o.a.createElement(h,{key:a.id,id:a.id,ref:e.miMapaRefs.get(a.id),modulo:a,setCantidad:e.setCantidad,getCantidad:e.getCantidad})}))))}}]),t}(n.Component);var v=function(e){var a=Object(n.useRef)(null);return o.a.createElement(o.a.Fragment,null,o.a.createElement("nav",{className:"navbar navbar-light bg-gradient-info"},o.a.createElement("form",{onSubmit:function(t){t.preventDefault();var n=a.current.value;e.filtrarModulosApp(n)}},o.a.createElement("div",{className:"form-group row"},o.a.createElement("label",{className:"col-sm-2 col-form-label"},"Farmacia"),o.a.createElement("div",{className:"col-sm-10"},o.a.createElement("select",{className:"form-control ",onChange:e.handleChange},o.a.createElement("option",{disabled:!0,selected:!0,value:"0"}," -- seleccione una opci\xf3n -- "),e.farmacias.map((function(e){return o.a.createElement("option",{key:e.id,value:e.id},String(e.id)+" - "+e.nombre)}))))),o.a.createElement("div",{className:"form-inline"},o.a.createElement("input",{ref:a,className:"form-control mr-sm-2 inputUppercase",type:"search",placeholder:"Filtro","aria-label":"Filtro"}),o.a.createElement("button",{className:"btn btn-outline-success my-2 my-sm-0",type:"submit"},"Busqueda")))))},A=function(e){Object(p.a)(t,e);var a=Object(f.a)(t);function t(e){var n;return Object(d.a)(this,t),(n=a.call(this,e)).cargarDatosInicio_DesdeApi=function(){fetch(n.url+"farmacia?"+new URLSearchParams({ApNombre:"Perez, Nestor"})).then((function(e){return e.json()})).then((function(e){localStorage.setItem("l_farmacias",JSON.stringify(e))})).then((function(){return fetch(n.url+"modulo").then((function(e){return e.json()})).then((function(e){localStorage.setItem("l_modulos",JSON.stringify(e))}))})).then((function(){n.cargarDatosInicio_DesdeLocalStorage()})).catch((function(e){n.cargarDatosInicio_DesdeLocalStorage()}))},n.cargarDatosInicio_DesdeLocalStorage=function(){var e=localStorage.getItem("l_farmacias")||"";""!==e&&(e=JSON.parse(e)),Array.isArray(e)||(e=[]),n.setState({farmacias:e.slice(0,50)});var a=localStorage.getItem("l_modulos")||"";""!==a&&(a=JSON.parse(a)),Array.isArray(a)||(a=[]),n.setState({modulosOriginal:a.slice(0,100)},(function(){n.filtrarModulosApp("")}))},n.filtrarModulosApp=function(e){n.setState({filtrado:e},(function(){if(""===n.state.filtrado)n.setState({modulos:n.state.modulosOriginal});else{var e=n.state.modulosOriginal.filter((function(e){return void 0!==e.moduloDetalle.find((function(e){return String(e.producto).toUpperCase().includes(String(n.state.filtrado).toUpperCase())}))}));n.setState({modulos:e})}}))},n.state={modulosOriginal:[{id:1,cantidadMinimos:2,idLaboratorio:1,laboratorio:null,moduloDetalle:[{id:1,idModulo:1,orden:1,producto:"COLBERT US DEO AER X 250 ML",descripcion:"COLBERT US DEO AER X 250 ML",precio:159.24,precioDescuento:150.24,cantidadUnidades:2},{id:2,idModulo:1,orden:2,producto:"MB FITME BASE N\xba 118 X 30ML",descripcion:"MB FITME BASE N\xba 118 X 30ML",precio:423.45,precioDescuento:403,cantidadUnidades:1}]},{id:2,cantidadMinimos:1,idLaboratorio:2,laboratorio:null,moduloDetalle:[{id:10,idModulo:2,orden:1,producto:"ARCELIGASOL CAP BLANDAS X 60",descripcion:"VOGUE LAB C. MANIAC MATTE ELECTRICA",precio:15024,precioDescuento:2,cantidadUnidades:0},{id:11,idModulo:2,orden:2,producto:"GOICOECHEA CR ULTRA NUTRITIVA X 400 ML",descripcion:"REQUIP PD 8 MG CPR X 28",precio:40300,precioDescuento:1,cantidadUnidades:0},{id:13,idModulo:2,orden:3,producto:"LEVO TIROXINA 112 MCG CPR X 50",descripcion:"PINO COLBERT DEO AER X 150 ML",precio:605,precioDescuento:0,cantidadUnidades:0}]},{id:3,cantidadMinimos:5,idLaboratorio:7,laboratorio:null,moduloDetalle:[{id:6,idModulo:3,orden:1,producto:"DOVE DEO AER ANT. RITUAL ENERG X 150ML",descripcion:"DOVE DEO AER ANT. RITUAL ENERG X 150ML",precio:271.61,precioDescuento:270,cantidadUnidades:1},{id:7,idModulo:3,orden:2,producto:"CARVEDILOL RICHET 12,5 MG CPR X 28",descripcion:"ISSUE COLOR PACK  N 9/1",precio:741.61,precioDescuento:640.25,cantidadUnidades:1},{id:8,idModulo:3,orden:3,producto:"TRANQUINAL 2 MG CPR X 60",descripcion:"TRANQUINAL 2 MG CPR X 60",precio:321.61,precioDescuento:212.61,cantidadUnidades:1},{id:12,idModulo:3,orden:4,producto:null,descripcion:"CAVIAHUE KIT ANTIAGE+HIDRATACION",precio:270050,precioDescuento:1,cantidadUnidades:0},{id:14,idModulo:3,orden:6,producto:"DENTILAC PASTA S/MENTA X 20 GR",descripcion:"TIO NACHO SPRAY ACLARANTE INSTANT.X 245 ML",precio:7061,precioDescuento:3,cantidadUnidades:23},{id:15,idModulo:3,orden:5,producto:"NEUTROGENA BLUE LINE TOAL DESMAQ X 25",descripcion:"MB COL SENS LAB MATTES N\xb0725 TANTALIZI",precio:2e3,precioDescuento:1,cantidadUnidades:0},{id:17,idModulo:3,orden:8,producto:"FRUCTIS OIL REPAIR L COCO P-PEINAR X300GR",descripcion:"MUELITA MORDILLO REFRIGERANTE X 1",precio:261,precioDescuento:1,cantidadUnidades:0}]},{id:4,cantidadMinimos:2,idLaboratorio:7,laboratorio:null,moduloDetalle:[{id:3,idModulo:4,orden:1,producto:"CONTROL K CAP X 60",descripcion:"CONTROL K CAP X 60",precio:2771.61,precioDescuento:2700.5,cantidadUnidades:1},{id:4,idModulo:4,orden:2,producto:"SALICREM BALSAMO SPRAY X 60 ML",descripcion:"SALICREM BALSAMO SPRAY X 60 ML",precio:71.61,precioDescuento:60.25,cantidadUnidades:0},{id:5,idModulo:4,orden:3,producto:"AXE B.SPLASH DARK TEMPT AER X96GR",descripcion:"AXE B.SPLASH DARK TEMPT AER X96GR",precio:478.61,precioDescuento:470.61,cantidadUnidades:3}]}],modulos:[],farmacias:[{id:289,nombre:"AGUIRRE LAURA MARIA",direccion:"AV. FILIPPINI 1872"},{id:5688,nombre:"AIRES DE LORENZETTI MAURICIO",direccion:"BUENOS AIRES 2296"},{id:7620,nombre:"ALEMANA DE LOPERGOLO V. Y CORDEIRO M. S.",direccion:"RIOBAMBA 1814"},{id:1050,nombre:"ALESSO ANDREA",direccion:"SARMIENTO 1296"},{id:5823,nombre:"ALQUIMIA DE DANIEL MARTIN",direccion:"CORRIENTES 2670"},{id:2733,nombre:"AMEN FARMACIA MUTUAL",direccion:"CORRIENTES 370"},{id:4294,nombre:"APOTHEKA SRL",direccion:"SAN JERONIMO 248 LOCAL 4"},{id:1255,nombre:"ARGENTA ETEL",direccion:"SAN MARTIN 4515"},{id:2777,nombre:"ARGUTTI MIRTHA",direccion:"JUAN B JUSTO 371"},{id:1256,nombre:"ASOC ESPA\xd1OLA ROSARIO",direccion:"ENTRE RIOS 701"},{id:7619,nombre:"ASOC MUTUAL 12 DE MAYO - ROSARIO",direccion:"MAIPU 1157"}],farmaciaSeleccionada:"",filtrado:""},n.handleChange=n.handleChange.bind(Object(m.a)(n)),n.elementResultadoModulo=o.a.createRef(),n.url="http://www.kellerhoff.com.ar:84/api/",n}return Object(u.a)(t,[{key:"componentWillMount",value:function(){localStorage.setItem("l_farmacias",this.state.farmacias),localStorage.setItem("l_modulos",this.state.modulosOriginal),this.filtrarModulosApp(""),navigator.onLine}},{key:"handleChange",value:function(e){var a=this,t=this.state.farmacias.find((function(a){return String(a.id)===String(e.target.value)}));this.setState({farmaciaSeleccionada:t},(function(){a.elementResultadoModulo.current.actualizarCantidadEnLosModulos()}))}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"app container-fluid"},o.a.createElement("div",{className:"alert alert-primary text-center  text-uppercase"},o.a.createElement("h2",null,"Pedidos")),o.a.createElement(v,{handleChange:this.handleChange,filtrarModulosApp:this.filtrarModulosApp,farmacias:this.state.farmacias,farmacia:this.state.farmaciaSeleccionada}),o.a.createElement(g,{ref:this.elementResultadoModulo,modulos:this.state.modulos,farmacia:this.state.farmaciaSeleccionada})))}}]),t}(n.Component),b=function(e){Object(p.a)(t,e);var a=Object(f.a)(t);function t(e){var n;Object(d.a)(this,t),(n=a.call(this,e)).l_farmaciaModulos_array=[],n.pedidosFarmaciasRefs=new Map;var r=localStorage.getItem("l_pedidos")||"";return""!==r&&(r=JSON.parse(r)),Array.isArray(r)||(r=[]),r.forEach((function(e){for(var a=!0,t=0;t<n.l_farmaciaModulos_array.length;t++)if(n.l_farmaciaModulos_array[t].farmacia.id===e.farmacia.id){n.l_farmaciaModulos_array[t].modulos.push(e.modulo),a=!1;break}if(a){var o=[];o.push(e.modulo);var r={farmacia:e.farmacia,modulos:o};n.l_farmaciaModulos_array.push(r)}})),n.l_farmaciaModulos_array.forEach((function(e){n.pedidosFarmaciasRefs.set(e.farmacia.id,o.a.createRef())})),n}return Object(u.a)(t,[{key:"componentDidMount",value:function(){this.pedidosFarmaciasRefs.forEach((function(e){e.current.actualizarCantidadEnLosModulos()}))}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"app container-fluid"},o.a.createElement("div",{className:"alert alert-primary text-center  text-uppercase"},o.a.createElement("h2",null,"Pedidos por farmacias")),o.a.createElement("div",{className:"float-right"},o.a.createElement("button",{className:"btn btn-success"},"Enviar Todos los Pedidos")),o.a.createElement("br",null),this.l_farmaciaModulos_array.map((function(a,t){return o.a.createElement(o.a.Fragment,null,o.a.createElement("br",null),o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-header pedidoFarmacia-header"},o.a.createElement("h5",{className:"card-title"},String(a.farmacia.id)+" - "+a.farmacia.nombre)),o.a.createElement("div",{className:"card-body card-body-box-sizing"},o.a.createElement(g,{key:t,ref:e.pedidosFarmaciasRefs.get(a.farmacia.id),modulos:a.modulos,farmacia:a.farmacia})),o.a.createElement("div",{className:"card-footer text-muted pedidoFarmacia-footer"},o.a.createElement("div",{className:"float-right"},o.a.createElement("button",{className:"btn btn-success"},"Enviar Pedido")))),o.a.createElement("br",null))})))}}]),t}(n.Component),N=function(e){Object(p.a)(t,e);var a=Object(f.a)(t);function t(e){var n;return Object(d.a)(this,t),(n=a.call(this,e)).cargarDatosInicio_DesdeApi=function(){fetch(n.url+"farmacia?"+new URLSearchParams({ApNombre:"Perez, Nestor"})).then((function(e){return e.json()})).then((function(e){localStorage.setItem("l_farmacias",JSON.stringify(e))})).then((function(){return fetch(n.url+"modulo").then((function(e){return e.json()})).then((function(e){localStorage.setItem("l_modulos",JSON.stringify(e))}))})).then((function(){n.cargarDatosInicio_DesdeLocalStorage()})).catch((function(e){n.cargarDatosInicio_DesdeLocalStorage()}))},n.cargarDatosInicio_DesdeLocalStorage=function(){var e=localStorage.getItem("l_farmacias")||"";""!==e&&(e=JSON.parse(e)),Array.isArray(e)||(e=[]),n.setState({farmacias:e.slice(0,50)});var a=localStorage.getItem("l_modulos")||"";""!==a&&(a=JSON.parse(a)),Array.isArray(a)||(a=[]),n.setState({modulosOriginal:a.slice(0,100)},(function(){n.filtrarModulosApp("")}))},n.filtrarModulosApp=function(e){n.setState({filtrado:e},(function(){if(""===n.state.filtrado)n.setState({modulos:n.state.modulosOriginal});else{var e=n.state.modulosOriginal.filter((function(e){return void 0!=e.moduloDetalle.find((function(e){return String(e.producto).toUpperCase().includes(String(n.state.filtrado).toUpperCase())}))}));n.setState({modulos:e})}}))},n.state={modulosOriginal:[],modulos:[],farmacias:[],farmaciaSeleccionada:"",filtrado:""},n.handleChange=n.handleChange.bind(Object(m.a)(n)),n.elementResultadoModulo=o.a.createRef(),n.url="http://www.kellerhoff.com.ar:84/api/",n}return Object(u.a)(t,[{key:"componentWillMount",value:function(){}},{key:"handleChange",value:function(e){var a=this,t=this.state.farmacias.find((function(a){return String(a.id)===String(e.target.value)}));this.setState({farmaciaSeleccionada:t},(function(){a.elementResultadoModulo.current.actualizarCantidadEnLosModulos()}))}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"app container-fluid"},o.a.createElement("div",{className:"alert alert-primary text-center  text-uppercase"},o.a.createElement("h2",null,"Historial Pedidos"))))}}]),t}(n.Component);var S=function(){return o.a.createElement(c.a,null,o.a.createElement("div",{className:"app container-fluid"},o.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},o.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"},o.a.createElement("span",{className:"navbar-toggler-icon"})),o.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarText"},o.a.createElement("ul",{className:"navbar-nav mr-auto"},o.a.createElement("li",{className:"nav-item ",activeClassName:"active"},o.a.createElement(c.b,{className:"nav-link",to:"/promociones","data-toggle":"collapse","data-target":".navbar-collapse.show"},"Promociones ",o.a.createElement("span",{class:"sr-only"},"(current)"))),o.a.createElement("li",{className:"nav-item ",activeClassName:"active"},o.a.createElement(c.b,{className:"nav-link",to:"/pedidos","data-toggle":"collapse","data-target":".navbar-collapse.show"},"Pedidos ")),o.a.createElement("li",{className:"nav-item",activeClassName:"active"},o.a.createElement(c.b,{className:"nav-link",to:"/pedidoshistorial","data-toggle":"collapse","data-target":".navbar-collapse.show"},"Historial de pedidos")),o.a.createElement("li",{className:"nav-item",activeClassName:"active"},o.a.createElement(c.b,{className:"nav-link",to:"/sign-in","data-toggle":"collapse","data-target":".navbar-collapse.show"},"Salir"))),o.a.createElement("span",{className:"navbar-text"},o.a.createElement("u",null," Promotor/a: "),"Juan Perez"))),o.a.createElement(l.c,null,o.a.createElement(l.a,{exact:!0,path:"/",component:E}),o.a.createElement(l.a,{path:"/sign-in",component:E}),o.a.createElement(l.a,{path:"/promociones",component:A}),o.a.createElement(l.a,{path:"/pedidos",component:b}),o.a.createElement(l.a,{path:"/pedidoshistorial",component:N}))))},O=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function R(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(S,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("","/service-worker.js");O?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):R(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):R(a,e)}))}}()}},[[22,1,2]]]);
//# sourceMappingURL=main.8b36a0eb.chunk.js.map