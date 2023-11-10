var k=(e,o,t)=>{if(!o.has(e))throw TypeError("Cannot "+t)};var a=(e,o,t)=>(k(e,o,"read from private field"),t?t.call(e):o.get(e)),p=(e,o,t)=>{if(o.has(e))throw TypeError("Cannot add the same private member more than once");o instanceof WeakSet?o.add(e):o.set(e,t)};/* empty css                      */import{a as d}from"./assets/vendor-26fe51b3.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();var c;class h{constructor(o,t){p(this,c,"https://books-backend.p.goit.global/");this.selectedCategory=o,this.bookId=t}booksGategoryListRequest(){return d.get(`${a(this,c)}books/category-list`)}topBooksRequest(){return d.get(`${a(this,c)}books/top-books`)}categoryRequest(){return d.get(`${a(this,c)}books/category?category=${selectedCategory}`)}bookIdRequest(){return d.get(`${a(this,c)}books/${this.bookId}`)}}c=new WeakMap;const m=document.querySelector(".books-gallery"),b=new h;async function L(e){const o=await b.categoryRequest(e);console.log(o);const t=await o.data;console.log(t);function l(n){let i=n.split(" ");return i.pop(),i.join(" ")}function s(n){var i=n.trim().split(" ");return i[i.length-1]}function r(){return`<h1 class="collection-title">${l(e)} <span>${s(e)}</span></h1>
    <ul class="top-books rendering-gap js-list-rendering">

    ${t.map(({title:n,book_image:i,author:g,_id:y})=>`<li class="book-card" data-id="${y}">
        <div class="book-thumb">
      <img class="book-cover" src="${i}" alt="${n}">
      <div class="quick-view">
                <p class="quick-view-text">QUICK VIEW</p>
                </div>
                </div>
                <div class="book-descr">
      <h2 class="book-name">${n}</h2>
      <h3 class="book-author">${g}</h3>
      </div>
  </li>`).join("")}
    </ul>
    
    `}m.innerHTML=r()}const f=new h;async function w(){try{return(await f.booksGategoryListRequest()).data}catch{console.log("Error")}}const u=document.querySelector(".category-list");console.log(u);async function v(){const o=(await w()).map(t=>`<li class="book-category__list-item">${t.list_name}</li>`).join("");u.insertAdjacentHTML("beforeend",o)}u&&(v(),u.addEventListener("click",$));async function $(e){if(e.target.nodeName!=="LI")return;const o=e.target.textContent;q(o),o!=="All categories"?await L(o):await renderCategories()}function q(e){const o=document.querySelectorAll(".book-category__list-item");for(const t of o)t.textContent===e?t.classList.add("active"):t.classList.remove("active")}async function C(){try{return(await f.topBooksRequest()).data}catch{console.log("Error")}}C();const B={btn:document.querySelector(".scrollBtn"),show(){this.btn.classList.remove("scrollBtn-hide")},hide(){this.btn.classList.add("scrollBtn-hide")},addEventListener(){this.btn&&(window.addEventListener("scroll",()=>{(window.scrollY||document.documentElement.scrollTop)>100?this.show():this.hide()}),this.btn.onclick=()=>{window.scrollTo({top:0,behavior:"smooth"})})}};B.addEventListener();
//# sourceMappingURL=commonHelpers2.js.map
