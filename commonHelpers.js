(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const S of l.addedNodes)S.tagName==="LINK"&&S.rel==="modulepreload"&&r(S)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();(()=>{const e={closeModal:document.querySelector("[data-close-modal]"),closeModalBtn:document.querySelector("[data-close-modal-button]"),modal:document.querySelector("[data-modal]")};e.closeModal.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t);function t(){e.modal.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}})();const Y=document.querySelector("#header-button1"),I=document.querySelector("#header-button2");document.querySelectorAll("h1, h2, h3, h4, h5, h6, a, p, input, button, svg, section");document.querySelectorAll("section");document.querySelector("header");const y=document.querySelector("#alternate-styles");Y.addEventListener("click",()=>{Y.style.display="none",I.style.display="inherit",document.body.classList.add("dark-mode"),y&&(y.disabled=!y.disabled)});I.addEventListener("click",()=>{I.style.display="none",Y.style.display="inherit",document.body.classList.remove("dark-mode"),y&&(y.disabled=!y.disabled)});const R=document.querySelector(".check-age__button"),w=document.querySelector(".check-age__text"),B=document.querySelector(".check-age__input");function W(e){return e%4===0&&e%100!==0||e%400===0}R.addEventListener("click",()=>{W(Number(B.value))===!0?w.innerHTML="Ви народилися у високосний рік!":isNaN(B.value)?w.innerHTML="Ви ввели не рік":W(Number(B.value))===!1&&(w.innerHTML="Ви народилися у звичайному році!")});const z=document.querySelector(".guess-number__button"),q=document.querySelector(".guess-number__text"),_=document.querySelector(".guess-number__input");z.addEventListener("click",()=>{let e=Math.round(Math.random()*9+1);Number(_.value)===e?q.innerHTML=`Вітаю, ви вгадали число! (${e})`:isNaN(_.value)?q.innerHTML="Ви ввели не число":Number(_.value)>10?q.innerHTML="Ваше число занадто велике":Number(_.value)!==e&&(q.innerHTML=`Ви не вгадали! Загадане число було (${e})`)});const M=document.querySelector(".calculator__input1"),k=document.querySelector(".calculator__input2"),N=document.querySelector(".calculator__input3"),F=document.querySelector("#button1"),G=document.querySelector("#button2"),K=document.querySelector("#button3"),X=document.querySelector("#button4"),J=document.querySelector(".calculator__equals");function Q(e,t){return e+t}function V(e,t){return e*t}function Z(e,t){return e-t}function ee(e,t){return e/t}let v=!1,g=!1,p=!1,h=!1;F.addEventListener("click",()=>{v=!0,h=!1,g=!1,p=!1});G.addEventListener("click",()=>{g=!0,v=!1,h=!1,p=!1});K.addEventListener("click",()=>{p=!0,v=!1,g=!1,h=!1});X.addEventListener("click",()=>{h=!0,v=!1,g=!1,p=!1});J.addEventListener("click",()=>{v?N.value=Q(Number(M.value),Number(k.value)):g?N.value=V(Number(M.value),Number(k.value)):p?N.value=Z(Number(M.value),Number(k.value)):h&&(N.value=ee(Number(M.value),Number(k.value)))});document.querySelectorAll(".three-numbers__input");const s=document.querySelector("#num1"),c=document.querySelector("#num2"),i=document.querySelector("#num3"),a=document.querySelector(".three-numbers__text");let E,T,x;s.addEventListener("change",()=>{E=!0,(E===!0||T===!0||x===!0)&&(s.value===""||c.value===""||i.value===""?a.innerHTML="В вас є пустий інпут":isNaN(s.value)||isNaN(c.value)||isNaN(i.value)?a.innerHTML="Ви не ввели число в інпуті":a.innerHTML=`Найбільше число, яке ви ввели - (${Math.max(Number(s.value),Number(c.value),Number(i.value))})`)});c.addEventListener("change",()=>{T=!0,(E===!0||T===!0||x===!0)&&(s.value===""||c.value===""||i.value===""?a.innerHTML="В вас є пустий інпут":isNaN(s.value)||isNaN(c.value)||isNaN(i.value)?a.innerHTML="Ви не ввели число в інпуті":a.innerHTML=`Найбільше число, яке ви ввели - (${Math.max(Number(s.value),Number(c.value),Number(i.value))})`)});i.addEventListener("change",()=>{x=!0,(E===!0||T===!0||x===!0)&&(s.value===""||c.value===""||i.value===""?a.innerHTML="В вас є пустий інпут":isNaN(s.value)||isNaN(c.value)||isNaN(i.value)?a.innerHTML="Ви не ввели число в інпуті":a.innerHTML=`Найбільше число, яке ви ввели - (${Math.max(Number(s.value),Number(c.value),Number(i.value))})`)});const te=document.querySelector("#dinosour"),D=document.querySelector("#cactus"),ne=document.querySelector(".dino__button");let C=1;const j=document.querySelector("#points");function oe(){te.src=`./img/dino_run${C}.png`,C==2?C=1:C+=1}function re(){j.innerHTML=Number(j.innerHTML)+1}function le(){let e=parseInt(window.getComputedStyle(D).left);e<=165?D.style.left="885px":D.style.left=`${e-2}px`}function se(){const e=document.querySelector("#game");e.style.animation="moveGround 1.5s linear infinite"}ne.addEventListener("click",()=>{setInterval(oe,100),setInterval(le,10),setInterval(se,5),setInterval(re,100)});const H=document.querySelector(".football__field"),O=document.querySelector(".football__img");H.addEventListener("click",e=>{const t=H.getBoundingClientRect(),n=O.offsetWidth;let r=e.clientX-t.left-n/2,o=e.clientY-t.top-n/2;r=Math.max(0,Math.min(r,H.clientWidth-n)),o=Math.max(0,Math.min(o,H.clientHeight-n)),O.style.transform=`translate(${r}px, ${o}px)`});const ce=document.querySelectorAll(".select-scientist__overlay"),f=document.querySelectorAll(".scientist-name"),P=document.querySelectorAll(".scientist-surname"),u=document.querySelectorAll(".scientist-born"),ie=document.querySelectorAll(".scientist-dead"),U=document.querySelector("#button1id"),ue=document.querySelector("#button2id"),ae=document.querySelector("#button3id"),de=document.querySelector("#button4id"),me=document.querySelector("#button5id"),ye=document.querySelector("#button6id"),be=document.querySelector("#button7id"),fe=document.querySelector("#button8id"),ve=document.querySelector("#button9id"),ge=document.querySelector("#button10id");console.log(U);ge.addEventListener("click",()=>{for(let e of ce)e.style.backgroundColor="transparent"});U.addEventListener("click",()=>{for(let e of u){const t=Number(e.innerHTML),n=e.closest(".select-scientist__div-item").lastElementChild;t<1900&&t>1799?n.style.backgroundColor="transparent":n.style.backgroundColor="rgb(217, 217, 217)"}});ue.addEventListener("click",()=>{for(let e of f)if(e.innerHTML==="Albert"){const t=e.closest(".select-scientist__div-item").lastElementChild;t.style.backgroundColor=t.style.backgroundColor="transparent"}else{const t=e.closest(".select-scientist__div-item").lastElementChild;t.style.backgroundColor="rgb(217, 217, 217)"}});de.addEventListener("click",()=>{for(let e of P)if(e.innerHTML.startsWith("C")){const t=e.closest(".select-scientist__div-item").lastElementChild;t.style.backgroundColor=t.style.backgroundColor="transparent"}else{const t=e.closest(".select-scientist__div-item").lastElementChild;t.style.backgroundColor="rgb(217, 217, 217)"}});ye.addEventListener("click",()=>{for(let e of f)if(e.innerHTML.startsWith("A")){const t=e.closest(".select-scientist__div-item").lastElementChild;t.style.backgroundColor=t.style.backgroundColor="rgb(217, 217, 217)"}else{const t=e.closest(".select-scientist__div-item").lastElementChild;t.style.backgroundColor="transparent"}});be.addEventListener("click",()=>{let e=0,t=0;for(let n=0;n<u.length;n++){const r=Number(u[n].innerHTML);r>e&&(e=r,t=n)}for(let n=0;n<u.length;n++){const r=u[n].closest(".select-scientist__div-item").lastElementChild;n===t?r.style.backgroundColor="transparent":r.style.backgroundColor="rgb(217, 217, 217)"}});fe.addEventListener("click",()=>{let e=0,t=0,n=0,r=1/0;for(let o=0;o<u.length;o++){const l=Number(u[o].innerHTML),L=Number(ie[o].innerHTML)-l;L<r&&(r=L,n=o),L>t&&(t=L,e=o)}for(let o=0;o<u.length;o++){const l=u[o].closest(".select-scientist__div-item").lastElementChild;o===n||o===e?l.style.backgroundColor="transparent":l.style.backgroundColor="rgb(217, 217, 217)"}});ve.addEventListener("click",()=>{for(let e=0;e<f.length;e++){const t=f[e].closest(".select-scientist__div-item").lastElementChild;f[e].innerHTML.trim().charAt(0).toUpperCase()===P[e].innerHTML.trim().charAt(0).toUpperCase()?t.style.backgroundColor="transparent":t.style.backgroundColor="rgb(217, 217, 217)"}});ae.addEventListener("click",()=>{const e=document.querySelector(".select-scientist__div-list"),t=[...e.querySelectorAll(".select-scientist__div-item")];t.sort((n,r)=>{const o=n.querySelector(".scientist-name").innerHTML.trim().toUpperCase(),l=r.querySelector(".scientist-name").innerHTML.trim().toUpperCase();return e.innerHTML="",o.localeCompare(l)}),t.forEach(n=>{e.appendChild(n);const r=n.lastElementChild;r.style.backgroundColor="transparent"});for(let n=0;n<t.length;n++){const r=t[n].querySelector(".select-scientist__id");r.innerHTML=`${n+1}.`}});me.addEventListener("click",()=>{const e=document.querySelector(".select-scientist__div-list"),t=[...e.querySelectorAll(".select-scientist__div-item")];t.sort((n,r)=>{const o=Number(n.querySelector(".scientist-born").innerHTML)-Number(n.querySelector(".scientist-dead").innerHTML),l=Number(r.querySelector(".scientist-born").innerHTML)-Number(r.querySelector(".scientist-dead").innerHTML);return e.innerHTML="",o-l}),t.forEach(n=>{e.appendChild(n);const r=n.lastElementChild;r.style.backgroundColor="transparent"});for(let n=0;n<t.length;n++){const r=t[n].querySelector(".select-scientist__id");r.innerHTML=`${n+1}.`}});const pe=document.querySelector("#button-arrow-left"),he=document.querySelector("#button-arrow-right"),$=document.querySelector(".our-team__text"),A=document.querySelector(".our-team__name"),b=document.querySelector(".our-team__image"),d=document.querySelector("#element1"),m=document.querySelector("#element2");pe.addEventListener("click",()=>{b.src.endsWith("andrey.jpg")?(b.src="../img/stas.jpg",A.innerHTML="Стас Трунов",$.innerHTML="Зробив секції header, check-age, calculator, guess-number, select-scinetist, our-team, three-numbers, google dino",m.style.width="30px",m.style.backgroundColor="#797979",d.style.width="18px",d.style.backgroundColor="#D9D9D9"):(b.src="../img/andrey.jpg",A.innerHTML="Андрій Норик",$.innerHTML="Зробив модалку, футер та секції age-calculator, rock-paper-scissors та football",d.style.width="30px",d.style.backgroundColor="#797979",m.style.width="18px",m.style.backgroundColor="#D9D9D9")});he.addEventListener("click",()=>{b.src.endsWith("andrey.jpg")?(b.src="../img/stas.jpg",A.innerHTML="Стас Трунов",$.innerHTML="Зробив секції header, check-age, calculator, guess-number, select-scinetist, our-team, three-numbers, google dino",m.style.width="30px",m.style.backgroundColor="#797979",d.style.width="18px",d.style.backgroundColor="#D9D9D9"):(b.src="../img/andrey.jpg",A.innerHTML="Андрій Норик",$.innerHTML="Зробив модалку, футер та секції age-calculator, rock-paper-scissors та football",d.style.width="30px",d.style.backgroundColor="#797979",m.style.width="18px",m.style.backgroundColor="#D9D9D9")});(()=>{const e={openModalBtn:document.querySelector("[data-footer-modal-open]"),closeModal:document.querySelector("[data-close-footer-modal]"),footerModal:document.querySelector("[data-footer-modal]")};e.openModalBtn.addEventListener("click",t),e.closeModal.addEventListener("click",t);function t(){e.footerModal.classList.toggle("is-hidden")}})();
//# sourceMappingURL=commonHelpers.js.map
