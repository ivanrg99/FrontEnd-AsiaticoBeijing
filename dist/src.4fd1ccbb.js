parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"HTLA":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.items=exports.TIPOS=void 0;var i={Entrantes:0,Sopa:1,TallarinesArroz:2,Verduras:3,Pollo:4,Ternera:5,Gambas:6,CerdoPato:7,Especiales:8,DianXin:9,Japonesa:10,"Menús":11};exports.TIPOS=i;var a=[];exports.items=a,a.push({id:"1",tipo:i.Entrantes,desc:"Ensalada con cangrejo",price:3.25}),a.push({id:"2",tipo:i.Entrantes,desc:"Ensalda china",price:2.85}),a.push({id:"3",tipo:i.Entrantes,desc:"Ensalada con gambas",price:3.65}),a.push({id:"4",tipo:i.Entrantes,desc:"Ensalada de la casa",price:5.5}),a.push({id:"4A",tipo:i.Entrantes,desc:"Ensalada con pollo",price:4.85}),a.push({id:"5",tipo:i.Entrantes,desc:"Ensalada de algas japonés",price:3.5}),a.push({id:"6",tipo:i.Entrantes,desc:"Rollito de primavera",price:1.3}),a.push({id:"7",tipo:i.Entrantes,desc:"MIni rollito de primavera (2 und.)",price:1.8}),a.push({id:"8A",tipo:i.Entrantes,desc:"Wan-Tun frito con queso (6 und.)",price:2.9}),a.push({id:"9",tipo:i.Entrantes,desc:"Patatas firtas",price:2.25}),a.push({id:"9A",tipo:i.Entrantes,desc:"Patatas firtas con croquetas",price:2.9}),a.push({id:"9B",tipo:i.Entrantes,desc:"Patatas firtas con pollo rebozado",price:4.5}),a.push({id:"10",tipo:i.Entrantes,desc:"Pan chino",price:1.3}),a.push({id:"10A",tipo:i.Entrantes,desc:"Pan de gambas",price:1.75}),a.push({id:"11",tipo:i.Sopa,desc:"Sopa de la casa",price:2.65}),a.push({id:"12",tipo:i.Sopa,desc:"Sopa de aleta de tiburón",price:2.75}),a.push({id:"13",tipo:i.Sopa,desc:"Sopa agripicante",price:2.6}),a.push({id:"14",tipo:i.Sopa,desc:"Sopa de maíz con pollo",price:2.75}),a.push({id:"15",tipo:i.Sopa,desc:"Sopa de pollo con champiñón",price:2.6}),a.push({id:"16",tipo:i.Sopa,desc:"Sopa de huevo de pollo",price:2.5}),a.push({id:"17",tipo:i.Sopa,desc:"Sopa de fideos",price:2.9}),a.push({id:"17A",tipo:i.Sopa,desc:"Sopa de huevo con tomate",price:2.5}),a.push({id:"18",tipo:i.TallarinesArroz,desc:"Arroz con tres delicias",price:3.2}),a.push({id:"19",tipo:i.TallarinesArroz,desc:"Arroz frito con gambas",price:3.9}),a.push({id:"20",tipo:i.TallarinesArroz,desc:"Arroz frito con curry",price:3.7}),a.push({id:"22",tipo:i.TallarinesArroz,desc:"Arroz frito de la casa",price:4.55}),a.push({id:"23",tipo:i.TallarinesArroz,desc:"Arroz blanco",price:1.5}),a.push({id:"24",tipo:i.TallarinesArroz,desc:"Arroz con soja japonés",price:3.5}),a.push({id:"26",tipo:i.TallarinesArroz,desc:"Tallarines con tres delicias",price:3.75}),a.push({id:"27",tipo:i.TallarinesArroz,desc:"Tallarines con gambas",price:3.9}),a.push({id:"28",tipo:i.TallarinesArroz,desc:"Tallarines chinos a la plancha",price:4.8}),a.push({id:"29",tipo:i.TallarinesArroz,desc:"Tallarines con verduras",price:3.5}),a.push({id:"30",tipo:i.TallarinesArroz,desc:"Fideos con tres delicias",price:4.5}),a.push({id:"30A",tipo:i.TallarinesArroz,desc:"Fideos con gambas",price:4.9}),a.push({id:"31",tipo:i.TallarinesArroz,desc:"Fideos de la casa",price:5.1}),a.push({id:"31A",tipo:i.TallarinesArroz,desc:"Fideos estilo Singapur",price:4.75}),a.push({id:"32",tipo:i.Verduras,desc:"Bambú y setas chinas salteadas",price:4.3}),a.push({id:"33",tipo:i.Verduras,desc:"Verdura variada salteada",price:3.5}),a.push({id:"37",tipo:i.Pollo,desc:"Pollo con verdura",price:4.5}),a.push({id:"37A",tipo:i.Pollo,desc:"Pollo con salsa de ostras",price:4.6}),a.push({id:"38",tipo:i.Pollo,desc:"Pollo con curry",price:4.6}),a.push({id:"39",tipo:i.Pollo,desc:"Pollo con champiñón",price:4.65}),a.push({id:"40",tipo:i.Pollo,desc:"Pollo con bambu y setas chinas",price:4.75}),a.push({id:"41",tipo:i.Pollo,desc:"Pollo con salsa picante",price:4.6}),a.push({id:"42",tipo:i.Pollo,desc:"Pollo con almendras",price:.6}),a.push({id:"42A",tipo:i.Pollo,desc:"Pollo crujiente con almendras",price:5.5}),a.push({id:"43",tipo:i.Pollo,desc:"Pollo con piña",price:5.5}),a.push({id:"44",tipo:i.Pollo,desc:"Pollo agridulce",price:4.5}),a.push({id:"44A",tipo:i.Pollo,desc:"Pollo agripicante",price:4.75}),a.push({id:"45",tipo:i.Pollo,desc:"Pollo con limón",price:4.65}),a.push({id:"46",tipo:i.Pollo,desc:"Bolitas de pollo fritas",price:4.3}),a.push({id:"47",tipo:i.Pollo,desc:"Pollo con patatas fritas",price:4.65}),a.push({id:"48",tipo:i.Pollo,desc:"Pollo fino frito",price:5.5}),a.push({id:"49",tipo:i.Pollo,desc:"Pollo con salsa Gon-Bao (picante)",price:4.5}),a.push({id:"50",tipo:i.Ternera,desc:"Ternera con verduras variadas",price:4.5}),a.push({id:"50A",tipo:i.Ternera,desc:"Ternera con zanahoria (picante)",price:4.75}),a.push({id:"51",tipo:i.Ternera,desc:"Ternera con curry",price:4.75}),a.push({id:"52",tipo:i.Ternera,desc:"Ternera con champiñón",price:4.8}),a.push({id:"53",tipo:i.Ternera,desc:"Ternera con bambú y setas chinas",price:4.95}),a.push({id:"54",tipo:i.Ternera,desc:"Ternera con salsa picante",price:4.75}),a.push({id:"55",tipo:i.Ternera,desc:"Ternera con cebolla",price:4.5}),a.push({id:"56",tipo:i.Ternera,desc:"Ternera con salsa de ostras",price:4.75}),a.push({id:"57",tipo:i.Ternera,desc:"Ternera con pimientos verdes",price:4.65}),a.push({id:"58",tipo:i.Ternera,desc:"Ternera con patatas fritas",price:4.95}),a.push({id:"59",tipo:i.Ternera,desc:"Ternera con salsa Gon-Bao (picante)",price:4.95}),a.push({id:"59A",tipo:i.Ternera,desc:"Ternera con salsa de curry japonés",price:4.95}),a.push({id:"60",tipo:i.Gambas,desc:"Gambas con verdura veriada",price:6.5}),a.push({id:"61",tipo:i.Gambas,desc:"Gambas con curry",price:6.65}),a.push({id:"62",tipo:i.Gambas,desc:"Gambas con champiñones",price:6.95}),a.push({id:"63",tipo:i.Gambas,desc:"Gambas con bambú y setas chinas",price:6.95}),a.push({id:"64",tipo:i.Gambas,desc:"Gambas con salsa de otras",price:6.65}),a.push({id:"64A",tipo:i.Gambas,desc:"Gambas con salsa picante",price:6.65}),a.push({id:"65",tipo:i.Gambas,desc:"Gambas con almendras",price:6.9}),a.push({id:"66",tipo:i.Gambas,desc:"Langostinos fritos",price:6.85}),a.push({id:"68",tipo:i.Gambas,desc:"Calamares con salsa picante",price:5.8}),a.push({id:"70",tipo:i.CerdoPato,desc:"Cerdo agridulce",price:4.5}),a.push({id:"70A",tipo:i.CerdoPato,desc:"Cerdo con verduras",price:4.5}),a.push({id:"71",tipo:i.CerdoPato,desc:"Cerdo con salsa Gon-Bao (picante)",price:4.95}),a.push({id:"71A",tipo:i.CerdoPato,desc:"Cerdo con salsa picante",price:4.5}),a.push({id:"72",tipo:i.CerdoPato,desc:"Costillas de cerdo fritas de la casa",price:6.8}),a.push({id:"73",tipo:i.CerdoPato,desc:"Coastillas con salsa especial",price:5.8}),a.push({id:"74",tipo:i.CerdoPato,desc:"Pato Pekín",price:10.95}),a.push({id:"75",tipo:i.CerdoPato,desc:"Pato frito",price:8.5}),a.push({id:"76",tipo:i.CerdoPato,desc:"Pato con bambú y setas chinas",price:7.8}),a.push({id:"77",tipo:i.CerdoPato,desc:"Pato con piña",price:7.8}),a.push({id:"78",tipo:i.CerdoPato,desc:"Pato con naranja",price:7.8}),a.push({id:"80",tipo:i.Especiales,desc:"Ku-Bak con gambas",price:6.3}),a.push({id:"81",tipo:i.Especiales,desc:"Ku-Bak con tres delicias",price:5.95}),a.push({id:"82",tipo:i.Especiales,desc:"Ternera Tailandés",price:5.5}),a.push({id:"83",tipo:i.Especiales,desc:"Ensalada Tailandés",prce:4.5}),a.push({id:"84",tipo:i.Especiales,desc:"Pato Tailandés",price:8.5}),a.push({id:"85",tipo:i.Especiales,desc:"Familia feliz",price:6.8}),a.push({id:"87",tipo:i.Especiales,desc:"Pollo friito especial (TSAO)",price:5.95}),a.push({id:"87A",tipo:i.Especiales,desc:"Pollo frito estilo Hong Kong con sésamo",price:5.95}),a.push({id:"88",tipo:i.Especiales,desc:"Arroz frito Tailandés",price:3.8}),a.push({id:"89",tipo:i.Especiales,desc:"Arroz con marisco y curry estilo Tailandés",price:4.8}),a.push({id:"90",tipo:i.Especiales,desc:"Pollo frito con salsa japonés",price:4.95}),a.push({id:"002",tipo:i.DianXin,desc:"Empanadillas chinas de cerdo a la plancha (8 und.)",price:4.95}),a.push({id:"004",tipo:i.DianXin,desc:"Xiao Jiao (Relleno de gambas,zanahoria,bambú,etc) (4 unid.)",price:3.95}),a.push({id:"005",tipo:i.DianXin,desc:"Empanadillas chinas con pollo a la plancha (8 unid.) ",price:4.95}),a.push({id:"007",tipo:i.DianXin,desc:"Empanadillas chinas con cerdo al vapor (8 unid.)",price:4.95}),a.push({id:"008",tipo:i.DianXin,desc:"Xiao Lon Bao de verdo al vapor (6 unid.)",price:3.95}),a.push({id:"010",tipo:i.DianXin,desc:"Samosa (Relleno de pollo,curry, verduras, etc ) (6 und.)",price:2.9}),a.push({id:"012",tipo:i.DianXin,desc:"Empanadilla chinas con pollo al vapor (8 unid.)",price:4.95}),a.push({id:"017",tipo:i.DianXin,desc:"Xiao Lon Bao con pollo al vapor (6 unid.)",price:3.95}),a.push({id:"019",tipo:i.DianXin,desc:"Si Ci Jiao (4 unid.)",price:3.95}),a.push({id:"020",tipo:i.DianXin,desc:"Sao Mai (4 unid.)",price:3.95}),a.push({id:"001",tipo:i.DianXin,desc:"Entremeses para 2 personas ( Si Ci Jiao (2) Xiao Lon Bao (2) Sao Mai (2) Xiao Jiao (2))",price:7.5}),a.push({id:"009",tipo:i.DianXin,desc:"Entremeses para 3 personas ( Si Ci Jiao (3) Xiao Lon Bao (3) Sao Mai (3) Xiao Jiao (3))",price0:10.5}),a.push({id:"96",tipo:i.Japonesa,desc:"Tallarines japoneses",price:5.5}),a.push({id:"98",tipo:i.Japonesa,desc:"Sashimi de salmón (9 unid.)",price:5.95}),a.push({id:"99",tipo:i.Japonesa,desc:"Sashimi de atún (9 unid.)",price:5.95}),a.push({id:"102",tipo:i.Japonesa,desc:"Sashimi de gambas (9 unid.)",price:5.95}),a.push({id:"103",tipo:i.Japonesa,desc:"Variado de sashimi (16 unid.)",price:10.95}),a.push({id:"104",tipo:i.Japonesa,desc:"Maki de salmón (8 unid)",price:4.85}),a.push({id:"104A",tipo:i.Japonesa,desc:"Maki con pollo (8 unid)",price:4.85}),a.push({id:"105",tipo:i.Japonesa,desc:"Maki de atún (8 unid)",price:4.95}),a.push({id:"106",tipo:i.Japonesa,desc:"Maki de almendras (8 unid)",price:4.85}),a.push({id:"108",tipo:i.Japonesa,desc:"Maki de gambas (8 unid)",price:4.85}),a.push({id:"109",tipo:i.Japonesa,desc:"Maki de aguacate (8 unid)",price:3.95}),a.push({id:"110",tipo:i.Japonesa,desc:"Maki de pepino (8 unid)",price:3.95}),a.push({id:"112",tipo:i.Japonesa,desc:"Maki de cangrejo (8 unid)",price:4.55}),a.push({id:"113",tipo:i.Japonesa,desc:"Variado de Maki (sushi 6 / maki 8)",price:9.95}),a.push({id:"113A",tipo:i.Japonesa,desc:"Sushi de salmón (6 unid)",price:5.85}),a.push({id:"115",tipo:i.Japonesa,desc:"Sushi de atún (6 unid)",price:5.95}),a.push({id:"118",tipo:i.Japonesa,desc:"Sushi de gambas (6 unid)",price:5.85}),a.push({id:"119",tipo:i.Japonesa,desc:"Sushi Variado (12 unid)",price:10.95}),a.push({id:"120",tipo:i.Japonesa,desc:"Temaki salmón (2 unid)",price:4.55}),a.push({id:"121",tipo:i.Japonesa,desc:"Temaki atún (2 unid)",price:4.95}),a.push({id:"122",tipo:i.Japonesa,desc:"Temaki verdura (2 unid)",price:3.95}),a.push({id:"124",tipo:i.Japonesa,desc:"Ku-Bak agridulce",price:5.95}),a.push({id:"126",tipo:i.Japonesa,desc:"Pollo son salsa curry japonés",price:4.95}),a.push({id:"127",tipo:i.Japonesa,desc:"Arroz con pollo curry japonés",price:3.95});
},{}],"H99C":[function(require,module,exports) {
"use strict";var e,t,n,d,a=require("./items");function i(){e=$("#menu").clone(),u(),d=$("#cover").clone()[0],t=document.getElementById("menu");for(var n=document.getElementsByClassName("card"),a=function(e){n[e].addEventListener("click",function(){o(e)})},i=0;i<n.length;i++)a(i);document.getElementById("form").addEventListener("submit",r)}function c(e){switch(e){case 2:return"Tallarines / Arroz";case 7:return"Cerdo / Pato";case 9:return"Dian Xin";default:return Object.keys(a.TIPOS).find(function(t){return a.TIPOS[t]===e})}}function r(e){document.getElementById("form").addEventListener("submit",r),e.preventDefault();var i=document.getElementById("input").value.toUpperCase();t.innerHTML="";var c=document.createElement("H2"),o=document.createTextNode("Resultados: "+i);c.appendChild(o),t.appendChild(c),t.appendChild(d),document.getElementById("form").addEventListener("submit",r);var s=l(a.items.filter(function(e){return e.desc.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toUpperCase().trim().includes(i.trim())}));t.appendChild(s),t.appendChild(n),window.location.hash="",window.location.hash="menu"}function o(e){t.innerHTML="";var i=document.createElement("H2"),o=c(e),s="error";s=11!=e?document.createTextNode("Menú de "+o):document.createTextNode("Menú del día & promociones"),i.appendChild(s),t.appendChild(i),t.appendChild(d),document.getElementById("form").addEventListener("submit",r);var u=l(a.items.filter(function(t){return t.tipo==e}));t.appendChild(u),t.appendChild(n),window.location.hash="",window.location.hash="menu"}function l(e){var t=document.createElement("DIV");return t.classList.add("list-group"),e.forEach(function(e){var n=document.createElement("A");n.classList.add("list-group-item");var d=document.createElement("DIV");d.classList.add("d-flex"),d.classList.add("w-100"),d.classList.add("justify-content-between");var a=document.createElement("H5");a.classList.add("mb-1");var i=document.createTextNode(e.id);a.appendChild(i);var c=document.createElement("SMALL");i=document.createTextNode(e.price+"€"),c.appendChild(i),d.appendChild(a),d.appendChild(c);var r=document.createElement("P");r.classList.add("mb-1"),i=document.createTextNode(e.desc),r.appendChild(i),n.appendChild(d),n.appendChild(r),t.appendChild(n)}),t}function s(){t.innerHTML=e[0].innerHTML,i(),window.location.hash="",window.location.hash="menu"}function u(){var e=document.createElement("BUTTON"),t=document.createTextNode("Ir al menú");e.appendChild(t),e.addEventListener("click",s),e.classList.add("btn"),e.classList.add("btn-info"),n=e}i();
},{"./items":"HTLA"}]},{},["H99C"], null)
//# sourceMappingURL=/src.4fd1ccbb.js.map