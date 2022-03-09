(function(){"use strict";var t={1753:function(t,e,n){var a=n(9242),i=n(3396),r=n(7139);const o={key:0};function s(t,e,n,s,c,l){const u=(0,i.up)("Navbar"),d=(0,i.up)("Welcome"),m=(0,i.up)("Data"),h=(0,i.up)("Footer");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(u),(0,i.Wm)(d,{welcometext:["Hi","سلام"]}),(0,i.Wm)(a.uT,null,{default:(0,i.w5)((()=>[c.zaman1?((0,i.wg)(),(0,i.iD)("h1",o,(0,r.zw)(c.personName),1)):(0,i.kq)("",!0)])),_:1}),(0,i.Wm)(a.uT,null,{default:(0,i.w5)((()=>[c.zaman1?((0,i.wg)(),(0,i.j4)(m,{key:0})):(0,i.kq)("",!0)])),_:1}),(0,i.Wm)(a.uT,null,{default:(0,i.w5)((()=>[c.zaman2?((0,i.wg)(),(0,i.j4)(h,{key:0})):(0,i.kq)("",!0)])),_:1})],64)}const c={class:"welcomeContainer"};function l(t,e,n,a,o,s){return(0,i.wg)(),(0,i.iD)("div",c,[(0,i._)("div",{class:(0,r.C_)(["welcometext",{latin:0===o.sozcuk,arab:1===o.sozcuk}])},(0,r.zw)(t.welcometext[o.sozcuk].substr(0,o.mevcutHarf)),3)])}var u={props:["welcometext"],data(){return{mod:0,sureler:[1500,1e3],mevcutHarf:0,sozcuk:0,sayac:0,maxsayac:40}},methods:{adim(){0===this.mod?this.mevcutHarf<this.welcometext[this.sozcuk].length?this.mevcutHarf=this.mevcutHarf+1:this.sayac===this.maxsayac?(this.mod=1,this.sayac=0):this.sayac=this.sayac+1:this.mevcutHarf>0?this.mevcutHarf=this.mevcutHarf-1:(this.mod=0,this.sozcuk=(this.sozcuk+1)%this.welcometext.length)}},mounted(){setInterval(this.adim,200)}},d=n(89);const m=(0,d.Z)(u,[["render",l]]);var h=m;const f={id:"navBar"},p=(0,i._)("div",{id:"rightLinks"},[(0,i._)("a",{href:"#cv"},"CV "),(0,i._)("a",{href:"#contact"}," Contact ")],-1),v=[p];function g(t,e){return(0,i.wg)(),(0,i.iD)("div",f,v)}const y={},w=(0,d.Z)(y,[["render",g]]);var k=w,b=n(4094);const _={class:"mainContent"},z=(0,i._)("div",{id:"leftinfo"},[(0,i._)("img",{src:b,alt:"picture of mohammad"})],-1),x=(0,i._)("div",{id:"rightinfo"},[(0,i._)("p",null,[(0,i.Uk)(" I am an Arabic/English "),(0,i._)("span",{class:"important"},"sworn legal translator"),(0,i.Uk)(" and interpreter since 2008, and I worked with the "),(0,i._)("span",{class:"important"},"United Nations Relief and Work Agency"),(0,i.Uk)(" (UNRWA) in Syria for 11 years, where I carried out different tasks and positions, such as a Public Information Officer deputy and Interpreter for UNRWA’s Front Office. ")]),(0,i._)("p",null," I hold a M.A. in Media Studies from Maastricht University FASOS. In my thesis, I addressed the impact of telepresence technologies and social media platforms on the place attachment of Syrian refugees in the Netherlands. The study touched upon other aspects of refugees’ life including integration. Academically, I am interested in migration studies, particularly education and integration. ")],-1),O=[z,x],C=(0,i.uE)('<div><div id="cvContainer"><h2 id="cv">Curriculum Vitae</h2><iframe src="https://drive.google.com/file/d/1RfhyIu8QmUDMP9e8uO9A9y_0rAUDUxwn/preview" width="800" height="1100"></iframe></div><div id="address"><h2 id="contact">Contact</h2><p>85C, Kasteel Hillenraadweg, Maastricht, 6222XS, The Netherlands</p><p>0031684233631</p><p><a href="mailto:Mohammad.khalaf@maastrichtuniversity.nl">Mohammad.khalaf@maastrichtuniversity.nl</a></p><p><a href="mailto:makholland@gmail.com">makholland@gmail.com</a></p></div></div>',1);function I(t,e,n,r,o,s){return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(a.uT,null,{default:(0,i.w5)((()=>[(0,i.wy)((0,i._)("h2",null," A translator that has experience in academia, intergovernmental instutitions and commercial projects. ",512),[[a.F8,o.zaman1]])])),_:1}),(0,i.Wm)(a.uT,null,{default:(0,i.w5)((()=>[(0,i.wy)((0,i._)("div",_,O,512),[[a.F8,o.zaman1]])])),_:1}),C],64)}var E={data(){return{zaman1:!1}},methods:{isElemVisible(t){var e=t.getBoundingClientRect(),n=e.top+200,a=e.bottom;return n<window.innerHeight&&a>=0&&this.zaman1},handleScroll(t){const e=document.getElementById("cvContainer"),n=document.getElementById("address");this.isElemVisible(e)&&(e.style.opacity="1",e.style.transform="scale(1)"),this.isElemVisible(n)&&(n.style.opacity="1",n.style.transform="scale(1)",document.removeEventListener("scroll",this.handleScroll))}},mounted(){document.addEventListener("scroll",this.handleScroll),setTimeout((()=>this.zaman1=!0),1e3),this.handleScroll()},unmounted(){document.removeEventListener("scroll",this.handleScroll)}};const H=(0,d.Z)(E,[["render",I]]);var T=H;const U=t=>((0,i.dD)("data-v-181ffd68"),t=t(),(0,i.Cn)(),t),W={id:"footer"},A=(0,i.Uk)(" Made by "),D=U((()=>(0,i._)("a",{href:"https://github.com/emrergin",target:"_blank"},"Emre Ergin",-1))),S=(0,i.Uk)(". "),j=[A,D,S];function M(t,e){return(0,i.wg)(),(0,i.iD)("div",W,j)}const N={},F=(0,d.Z)(N,[["render",M],["__scopeId","data-v-181ffd68"]]);var P=F,R={name:"App",components:{Welcome:h,Navbar:k,Data:T,Footer:P},data(){return{personName:"Mohammad Khalaf",zaman1:!1,zaman2:!1}},mounted(){setTimeout((()=>this.zaman1=!0),1e3),setTimeout((()=>this.zaman2=!0),2500)}};const V=(0,d.Z)(R,[["render",s]]);var Z=V;(0,a.ri)(Z).mount("#app")},4094:function(t,e,n){t.exports=n.p+"img/Picture1.fc9bec91.jpg"}},e={};function n(a){var i=e[a];if(void 0!==i)return i.exports;var r=e[a]={exports:{}};return t[a](r,r.exports,n),r.exports}n.m=t,function(){var t=[];n.O=function(e,a,i,r){if(!a){var o=1/0;for(u=0;u<t.length;u++){a=t[u][0],i=t[u][1],r=t[u][2];for(var s=!0,c=0;c<a.length;c++)(!1&r||o>=r)&&Object.keys(n.O).every((function(t){return n.O[t](a[c])}))?a.splice(c--,1):(s=!1,r<o&&(o=r));if(s){t.splice(u--,1);var l=i();void 0!==l&&(e=l)}}return e}r=r||0;for(var u=t.length;u>0&&t[u-1][2]>r;u--)t[u]=t[u-1];t[u]=[a,i,r]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.p="/mak/"}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,a){var i,r,o=a[0],s=a[1],c=a[2],l=0;if(o.some((function(e){return 0!==t[e]}))){for(i in s)n.o(s,i)&&(n.m[i]=s[i]);if(c)var u=c(n)}for(e&&e(a);l<o.length;l++)r=o[l],n.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return n.O(u)},a=self["webpackChunkpersonalpage"]=self["webpackChunkpersonalpage"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(1753)}));a=n.O(a)})();
//# sourceMappingURL=app.136ad0c2.js.map