var m=(o,e,t)=>{if(!e.has(o))throw TypeError("Cannot "+t)};var i=(o,e,t)=>(m(o,e,"read from private field"),t?t.call(o):e.get(o)),b=(o,e,t)=>{if(e.has(o))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(o):e.set(o,t)};/* empty css                      */import{a as d}from"./assets/vendor-26fe51b3.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();var c;class k{constructor(e,t){b(this,c,"https://books-backend.p.goit.global/");this.selectedCategory=e,this.bookId=t}fetchBooksCategoryList(){return d.get(`${i(this,c)}books/category-list`)}fetchBestSellersBooks(){return d.get(`${i(this,c)}books/top-books`)}fetchBooksByCategory(e){return d.get(`${i(this,c)}books/category?category=${e}`)}fetchBookById(e){return d.get(`${i(this,c)}books/${e}`)}}c=new WeakMap;const v=document.querySelector(".books-gallery"),$=new k;async function L(o){const t=await(await $.fetchBooksByCategory(o)).data;function a(){return`<h1 class="collection-title">${o} <span>${o}</span></h1>
    <ul class="top-books rendering-gap js-list-rendering">

    ${t.map(({title:s,book_image:r,author:n,_id:u})=>`<li class="book-card" data-id="${u}">
        <div class="book-thumb">
      <img class="book-cover" src="${r}" alt="${s}">
      <div class="quick-view">
                <p class="quick-view-text">QUICK VIEW</p>
                </div>
                </div>
                <div class="book-descr">
      <h2 class="book-name">${s}</h2>
      <h3 class="book-author">${n}</h3>
      </div>
  </li>`).join("")}
    </ul>
    
    `}v.innerHTML=a()}const w=new k,g=document.querySelector(".book-category__list");async function B(){try{return await(await w.fetchBooksCategoryList()).data}catch(o){console.log(o)}}async function C(){const e=(await B()).map(t=>`<li class="book-category__list-item">${t.list_name}</li>`).join("");g.insertAdjacentHTML("beforeend",e)}g&&(C(),g.addEventListener("click",S));async function S(o){if(o.target.nodeName!=="LI")return;const e=o.target.textContent;p(e),e!=="All categories"?await L(e):await y()}function p(o){const e=document.querySelectorAll(".book-category__list-item");for(const t of e)t.textContent===o?t.classList.add("active"):t.classList.remove("active")}const f=new k,l=document.querySelector(".books-gallery");async function q(){try{return await(await f.fetchBestSellersBooks()).data}catch(o){console.log(o)}}function M(o){return console.log(o),`
    <li class="book-category-item">
      <p class="book-category">${o.list_name}</p>
      <ul class="top-books bestsel-books js-list-rendering">
        ${o.books.map(e=>`
              <li class="book-card flex-element" data-id="${e._id}">
              <div class="book-thumb">
                <img class="book-cover" src="${e.book_image}" alt="${e.title}"/>
                <div class="quick-view">
                <p class="quick-view-text">QUICK VIEW</p>
                </div>
                </div>
                <div class="book-descr">
                <h2 class="book-name">${e.title}</h2>
                <h3 class="book-author">${e.author}</h3>
                </div>
              </li>
            `).join("")}
      </ul>
      <button class="book-card-btn" type="button" data-category="${o.list_name}">see more</button>
    </li>
  `}async function y(){let o='<ul class="top-books rendering-gap js-list-rendering">';try{const e=await q();for(let a of e)o+=M(a);o+="</ul>",l.innerHTML='<h1 class="collection-title">Best Sellers <span>Books</span></h1>';const t=document.createElement("div");t.className="books-collection",t.innerHTML=o,t.addEventListener("click",_),l.appendChild(t)}catch(e){console.log(e)}}if(l)try{y()}catch(o){console.log(o)}async function _(o){if(o.target.nodeName!=="BUTTON")return;const e=o.target;try{if(e.matches("button[data-category]")){const t=e.dataset.category,a=l.querySelector(".collection-title");a.innerHTML=`${I(t)} <span>${j(t)}</span>`,p(t),await E(t)}}catch(t){console.log(t)}}function I(o){let e=o.split(" ");return e.pop(),e.join(" ")}function j(o){var e=o.trim().split(" ");return e[e.length-1]}async function E(o){try{let a=function(){return`
    <ul class="top-books rendering-gap js-list-rendering">
    ${t.map(({title:r,book_image:n,author:u,_id:h})=>`
        <li class="book-card" data-id=${h}>
        <div class="book-thumb">
         <img class="book-cover" src="${n}" alt="${r}">
         <div class="quick-view">
          <p class="quick-view-text">QUICK VIEW</p>
         </div>
        </div>
        <div class="book-descr">
      <h2 class="book-name">${r}</h2>
      <h3 class="book-author">${u}</h3>
      </div>
  </li>
  `).join("")}
    </ul>`};Loading.standard("Loading...");const t=await(await f.fetchBooksByCategory(o)).data;Loading.remove("Loading...");const s=l.querySelector(".books-collection");s.innerHTML=a()}catch(e){console.log(e),Loading.remove("Loading..."),reportsFailure("Sorry, no books  were found. Please try again.")}}
//# sourceMappingURL=commonHelpers2.js.map
