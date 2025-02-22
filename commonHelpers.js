(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const b of l.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&r(b)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();(()=>{const e={closeModal:document.querySelector("[data-close-modal]"),closeModalBtn:document.querySelector("[data-close-modal-button]"),modal:document.querySelector("[data-modal]"),input:document.querySelector(".modal__input")};e.closeModal.addEventListener("click",t),e.closeModalBtn.addEventListener("click",n);function t(){e.modal.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}function n(){e.input.value.trim()===""?(alert("Будь ласка, введіть своє ім’я!"),e.input.focus()):t()}})();const F=document.querySelector("#header-button1"),z=document.querySelector("#header-button2");document.querySelectorAll("h1, h2, h3, h4, h5, h6, a, p, input, button, svg, section");document.querySelectorAll("section");document.querySelector("header");const p=document.querySelector("#alternate-styles");F.addEventListener("click",()=>{F.style.display="none",z.style.display="inherit",document.body.classList.add("dark-mode"),p&&(p.disabled=!p.disabled),console.log(p)});z.addEventListener("click",()=>{z.style.display="none",F.style.display="inherit",document.body.classList.remove("dark-mode"),p&&(p.disabled=!p.disabled)});const ee=document.querySelector(".check-age__button"),O=document.querySelector(".check-age__text"),U=document.querySelector(".check-age__input");function G(e){return e%4===0&&e%100!==0||e%400===0}ee.addEventListener("click",()=>{G(Number(U.value))===!0?O.innerHTML="Ви народилися у високосний рік!":isNaN(U.value)?O.innerHTML="Ви ввели не рік":G(Number(U.value))===!1&&(O.innerHTML="Ви народилися у звичайному році!")});const te=document.querySelector(".guess-number__button"),M=document.querySelector(".guess-number__text"),k=document.querySelector(".guess-number__input");te.addEventListener("click",()=>{let e=Math.round(Math.random()*9+1);Number(k.value)===e?M.innerHTML=`Вітаю, ви вгадали число! (${e})`:isNaN(k.value)?M.innerHTML="Ви ввели не число":Number(k.value)>10?M.innerHTML="Ваше число занадто велике":Number(k.value)!==e&&(M.innerHTML=`Ви не вгадали! Загадане число було (${e})`)});const J=["rock","scissors","paper"];let A={user:0,computer:0};const ne=document.querySelector(".r-p-s__result"),oe=document.querySelector("#user-score"),re=document.querySelector("#computer-score"),le=document.querySelector(".r-p-s__computer-choice"),se=document.querySelectorAll(".r-p-s__button");se.forEach(e=>{const t=e.querySelector("img");t&&(e.dataset.choice=t.alt,e.addEventListener("click",()=>ue(e.dataset.choice)))});function ce(){return J[Math.floor(Math.random()*J.length)]}function ie(e,t){return e===t?"Нічия!":{rock:"scissors",scissors:"paper",paper:"rock"}[e]===t?"Ви виграли раунд!":"Комп'ютер виграв раунд!"}function ue(e){const t=ce(),n=ie(e,t);n==="Ви виграли раунд!"&&A.user++,n==="Комп'ютер виграв раунд!"&&A.computer++,ae(n,t)}function ae(e,t){ne.textContent=e,oe.textContent=A.user,re.textContent=A.computer,le.innerText=`Комп'ютер вибрав: ${t}`}const C=document.querySelector(".calculator__input1"),N=document.querySelector(".calculator__input2"),H=document.querySelector(".calculator__input3"),de=document.querySelector("#button1"),me=document.querySelector("#button2"),ye=document.querySelector("#button3"),fe=document.querySelector("#button4"),pe=document.querySelector(".calculator__equals");function be(e,t){return e+t}function ve(e,t){return e*t}function ge(e,t){return e-t}function he(e,t){return e/t}let S=!1,L=!1,q=!1,_=!1;de.addEventListener("click",()=>{S=!0,_=!1,L=!1,q=!1});me.addEventListener("click",()=>{L=!0,S=!1,_=!1,q=!1});ye.addEventListener("click",()=>{q=!0,S=!1,L=!1,_=!1});fe.addEventListener("click",()=>{_=!0,S=!1,L=!1,q=!1});pe.addEventListener("click",()=>{S?H.value=be(Number(C.value),Number(N.value)):L?H.value=ve(Number(C.value),Number(N.value)):q?H.value=ge(Number(C.value),Number(N.value)):_&&(H.value=he(Number(C.value),Number(N.value)))});document.querySelectorAll(".three-numbers__input");const c=document.querySelector("#num1"),i=document.querySelector("#num2"),u=document.querySelector("#num3"),d=document.querySelector(".three-numbers__text");let B,D,W;c.addEventListener("change",()=>{B=!0,(B===!0||D===!0||W===!0)&&(c.value===""||i.value===""||u.value===""?d.innerHTML="В вас є пустий інпут":isNaN(c.value)||isNaN(i.value)||isNaN(u.value)?d.innerHTML="Ви не ввели число в інпуті":d.innerHTML=`Найбільше число, яке ви ввели - (${Math.max(Number(c.value),Number(i.value),Number(u.value))})`)});i.addEventListener("change",()=>{D=!0,(B===!0||D===!0||W===!0)&&(c.value===""||i.value===""||u.value===""?d.innerHTML="В вас є пустий інпут":isNaN(c.value)||isNaN(i.value)||isNaN(u.value)?d.innerHTML="Ви не ввели число в інпуті":d.innerHTML=`Найбільше число, яке ви ввели - (${Math.max(Number(c.value),Number(i.value),Number(u.value))})`)});u.addEventListener("change",()=>{W=!0,(B===!0||D===!0||W===!0)&&(c.value===""||i.value===""||u.value===""?d.innerHTML="В вас є пустий інпут":isNaN(c.value)||isNaN(i.value)||isNaN(u.value)?d.innerHTML="Ви не ввели число в інпуті":d.innerHTML=`Найбільше число, яке ви ввели - (${Math.max(Number(c.value),Number(i.value),Number(u.value))})`)});const Se=document.querySelector(".age-calculator__input"),Le=document.querySelector(".age-calculator__button"),K=document.querySelector(".age-calculator__text");function qe(){let e=parseInt(Se.value,10);if(isNaN(e)||e<0){K.textContent="Будь ласка, введіть коректне додатне число!";return}let t=Math.floor(e/60),n=e%60;K.textContent=`Результат: ${t}:${n}`}Le.addEventListener("click",qe);const s=document.querySelector("#dinosour"),f=document.querySelector("#cactus"),_e=document.querySelector(".dino__button");let T=1,I,w,$;const Y=document.querySelector("#points");let R=!1,E;function Me(){s.src=`./img/dino_run${T}.png`,T==2?T=1:T+=1,console.log("Image path:",s.src)}function ke(){Y.innerHTML=Number(Y.innerHTML)+1}function Ce(){let e=parseInt(window.getComputedStyle(f).left),t=parseInt(window.getComputedStyle(s).left),n=f.offsetWidth,r=s.offsetWidth,o=parseInt(window.getComputedStyle(f).top),l=parseInt(window.getComputedStyle(s).top),b=f.offsetHeight,v=s.offsetHeight;if(e<=t+r-20&&e+n>=t&&o<=l+v-20&&o+b>=l){clearInterval(I),clearInterval(w),clearInterval($),alert(`Ви програли, в вас було ${Y.innerHTML} очків`),s.style.left="350px",f.style.left="730px",s.src="./img/standing_still.png";const Z=document.querySelector("#game");Z.style.animation="none",Y.innerHTML="0",s.style.top="222px"}else e<=165?f.style.left="885px":f.style.left=`${e-2}px`}function Ne(){const e=document.querySelector("#game");e.style.animation="moveGround 1.1s linear infinite"}function He(){if(E&&clearInterval(E),R)return;s.style.top="222px",R=!0;let e=0;E=setInterval(()=>{e<80?(s.style.top=`${parseInt(window.getComputedStyle(s).top)-5}px`,e+=5):e>=80&&e<130?(s.style.top=`${parseInt(window.getComputedStyle(s).top)+8}px`,e+=5):(clearInterval(E),R=!1)},25)}document.addEventListener("keydown",e=>{e.code==="Space"&&He()});_e.addEventListener("click",()=>{I&&clearInterval(I),w&&clearInterval(w),$&&clearInterval($),w=setInterval(Ce,7),$=setInterval(Ne,10),I=setInterval(()=>{ke(),Me()},100)});const x=document.querySelector(".football__field"),X=document.querySelector(".football__img");x.addEventListener("click",e=>{const t=x.getBoundingClientRect(),n=X.offsetWidth;let r=e.clientX-t.left-n/2,o=e.clientY-t.top-n/2;r=Math.max(0,Math.min(r,x.clientWidth-n)),o=Math.max(0,Math.min(o,x.clientHeight-n)),X.style.transform=`translate(${r}px, ${o}px)`});const Te=document.querySelectorAll(".select-scientist__overlay"),h=document.querySelectorAll(".scientist-name"),Q=document.querySelectorAll(".scientist-surname"),a=document.querySelectorAll(".scientist-born"),Ee=document.querySelectorAll(".scientist-dead"),V=document.querySelector("#button1id"),xe=document.querySelector("#button2id"),Ie=document.querySelector("#button3id"),we=document.querySelector("#button4id"),$e=document.querySelector("#button5id"),Ae=document.querySelector("#button6id"),Be=document.querySelector("#button7id"),De=document.querySelector("#button8id"),We=document.querySelector("#button9id"),Ye=document.querySelector("#button10id");console.log(V);Ye.addEventListener("click",()=>{for(let e of Te)e.style.backgroundColor="transparent"});V.addEventListener("click",()=>{for(let e of a){const t=Number(e.innerHTML),n=e.closest(".select-scientist__div-item").lastElementChild;t<1900&&t>1799?n.style.backgroundColor="transparent":n.style.backgroundColor="rgb(217, 217, 217)"}});xe.addEventListener("click",()=>{for(let e of h)if(e.innerHTML==="Albert"){const t=e.closest(".select-scientist__div-item").lastElementChild;t.style.backgroundColor=t.style.backgroundColor="transparent"}else{const t=e.closest(".select-scientist__div-item").lastElementChild;t.style.backgroundColor="rgb(217, 217, 217)"}});we.addEventListener("click",()=>{for(let e of Q)if(e.innerHTML.startsWith("C")){const t=e.closest(".select-scientist__div-item").lastElementChild;t.style.backgroundColor=t.style.backgroundColor="transparent"}else{const t=e.closest(".select-scientist__div-item").lastElementChild;t.style.backgroundColor="rgb(217, 217, 217)"}});Ae.addEventListener("click",()=>{for(let e of h)if(e.innerHTML.startsWith("A")){const t=e.closest(".select-scientist__div-item").lastElementChild;t.style.backgroundColor=t.style.backgroundColor="rgb(217, 217, 217)"}else{const t=e.closest(".select-scientist__div-item").lastElementChild;t.style.backgroundColor="transparent"}});Be.addEventListener("click",()=>{let e=0,t=0;for(let n=0;n<a.length;n++){const r=Number(a[n].innerHTML);r>e&&(e=r,t=n)}for(let n=0;n<a.length;n++){const r=a[n].closest(".select-scientist__div-item").lastElementChild;n===t?r.style.backgroundColor="transparent":r.style.backgroundColor="rgb(217, 217, 217)"}});De.addEventListener("click",()=>{let e=0,t=0,n=0,r=1/0;for(let o=0;o<a.length;o++){const l=Number(a[o].innerHTML),v=Number(Ee[o].innerHTML)-l;v<r&&(r=v,n=o),v>t&&(t=v,e=o)}for(let o=0;o<a.length;o++){const l=a[o].closest(".select-scientist__div-item").lastElementChild;o===n||o===e?l.style.backgroundColor="transparent":l.style.backgroundColor="rgb(217, 217, 217)"}});We.addEventListener("click",()=>{for(let e=0;e<h.length;e++){const t=h[e].closest(".select-scientist__div-item").lastElementChild;h[e].innerHTML.trim().charAt(0).toUpperCase()===Q[e].innerHTML.trim().charAt(0).toUpperCase()?t.style.backgroundColor="transparent":t.style.backgroundColor="rgb(217, 217, 217)"}});Ie.addEventListener("click",()=>{const e=document.querySelector(".select-scientist__div-list"),t=[...e.querySelectorAll(".select-scientist__div-item")];t.sort((n,r)=>{const o=n.querySelector(".scientist-name").innerHTML.trim().toUpperCase(),l=r.querySelector(".scientist-name").innerHTML.trim().toUpperCase();return e.innerHTML="",o.localeCompare(l)}),t.forEach(n=>{e.appendChild(n);const r=n.lastElementChild;r.style.backgroundColor="transparent"});for(let n=0;n<t.length;n++){const r=t[n].querySelector(".select-scientist__id");r.innerHTML=`${n+1}.`}});$e.addEventListener("click",()=>{const e=document.querySelector(".select-scientist__div-list"),t=[...e.querySelectorAll(".select-scientist__div-item")];t.sort((n,r)=>{const o=Number(n.querySelector(".scientist-born").innerHTML)-Number(n.querySelector(".scientist-dead").innerHTML),l=Number(r.querySelector(".scientist-born").innerHTML)-Number(r.querySelector(".scientist-dead").innerHTML);return e.innerHTML="",o-l}),t.forEach(n=>{e.appendChild(n);const r=n.lastElementChild;r.style.backgroundColor="transparent"});for(let n=0;n<t.length;n++){const r=t[n].querySelector(".select-scientist__id");r.innerHTML=`${n+1}.`}});const je=document.querySelector("#button-arrow-left"),Pe=document.querySelector("#button-arrow-right"),j=document.querySelector(".our-team__text"),P=document.querySelector(".our-team__name"),g=document.querySelector(".our-team__image"),m=document.querySelector("#element1"),y=document.querySelector("#element2");je.addEventListener("click",()=>{g.src.endsWith("andrey.jpg")?(g.src="./team-2/src/img/stas.jpg",P.innerHTML="Стас Трунов",j.innerHTML="Зробив секції header, check-age, calculator, guess-number, select-scinetist, our-team, three-numbers, google dino",y.style.width="30px",y.style.backgroundColor="#797979",m.style.width="18px",m.style.backgroundColor="#D9D9D9"):(g.src="./team-2/src/img/andrey.jpg",P.innerHTML="Андрій Норик",j.innerHTML="Зробив модалку, футер та секції age-calculator, rock-paper-scissors та football",m.style.width="30px",m.style.backgroundColor="#797979",y.style.width="18px",y.style.backgroundColor="#D9D9D9")});Pe.addEventListener("click",()=>{g.src.endsWith("andrey.jpg")?(g.src="./team-2/src/img/stas.jpg",P.innerHTML="Стас Трунов",j.innerHTML="Зробив секції header, check-age, calculator, guess-number, select-scinetist, our-team, three-numbers, google dino",y.style.width="30px",y.style.backgroundColor="#797979",m.style.width="18px",m.style.backgroundColor="#D9D9D9"):(g.src="./team-2/src/img/andrey.jpg",P.innerHTML="Андрій Норик",j.innerHTML="Зробив модалку, футер та секції age-calculator, rock-paper-scissors та football",m.style.width="30px",m.style.backgroundColor="#797979",y.style.width="18px",y.style.backgroundColor="#D9D9D9")});(()=>{const e={openModalBtn:document.querySelector("[data-footer-modal-open]"),closeModal:document.querySelector("[data-close-footer-modal]"),footerModal:document.querySelector("[data-footer-modal]")};e.openModalBtn.addEventListener("click",function(){const r=document.querySelector("#emailInput").value.trim();if(r===""||!r.includes("@")){alert("Будь ласка, введіть коректну електронну адресу.");return}t()}),e.closeModal.addEventListener("click",t);function t(){e.footerModal.classList.toggle("is-hidden")}})();
//# sourceMappingURL=commonHelpers.js.map
