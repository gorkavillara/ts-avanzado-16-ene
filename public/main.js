(()=>{"use strict";var o={972:(o,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.factorial=void 0,t.factorial=o=>{let t=1;for(let r=o;r>1;r--)t*=r;return t}},147:(o,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Libro=void 0;class r{constructor(o){this.nombre=o}saluda(){console.log(`Hola mi nombre es ${this.nombre}`)}}t.Libro=class{constructor(o,t){this.titulo=o,this.autor=new r(t)}obtenDatos(){console.log(`Título: ${this.titulo}, Autor: ${this.autor.nombre}`)}}}},t={};function r(e){var s=t[e];if(void 0!==s)return s.exports;var i=t[e]={exports:{}};return o[e](i,i.exports,r),i.exports}(()=>{const o=r(972);new(r(147).Libro)("El imperio final","Brandon Sanderson").obtenDatos(),console.log((0,o.factorial)(15))})()})();