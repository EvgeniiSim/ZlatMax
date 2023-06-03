const domElements={results:document.querySelector("#results"),search:{input:document.querySelector("#search-input"),button:document.querySelector("#search-button")},filter:{rating:document.querySelectorAll("#ratingFilter"),producer:document.querySelectorAll("#filter-producer"),price:document.querySelectorAll(".filterPrice"),size:document.querySelectorAll(".filterSize")}};function generateCards(r){const i=[];for(let e=0;e<r.length;e++){var n=r[e].rating,s=parseInt(n[0]);let t=[];for(let e=0;e<s;e++)t.push('<img src="images/knife-card/Star 3star.svg" alt="star">');i.push(`<div class="goods__cards-card knife">
        <div class="knife__main">
            <a href class="knife__pic">
                <span class="knife__pic-wrap">
                    <img src="${r[e].img}" alt="knife">
                </span>
            </a>
            <h4 class="knife__name">
                <a href="#" class="">
                    ${r[e].name}
                </a>
            </h4>
            <div class="knife__info">
                <div class="knife__info-size">
                    29х3см
                </div>
                <div class="knife__info-madeOf">
                    ELMAX
                </div>
            </div>
            <div class="knife__recall">
                <div class="knife__recall-stars">
                    ${t.join("")}
                </div>
                <div class="knife__recall-num">
                    30 отзывов
                </div>
            </div>
            <div class="knife__line">
            </div>
        </div>
        <div class="knife__footer">
            <div class="knife__footer-row">
                <div class="knife__footer-price">
                ${r[e].price} р.
                </div>
                <div class="knife__footer-icons">
                    <img src="images/knife-card/compare.svg" alt="Сравнить">
                    <img src="images/knife-card/liked.svg" alt="Понравилось">
                </div>
            </div>
            <div class="knife__btn-wrap">
                <button class="knife__btn">
                    В корзину
                </button>
            </div>
        </div>
    </div>`)}return i}const cardsArr=generateCards(cardsData);domElements.results.innerHTML=cardsArr.join("");{let i="";function filterSearch(){const t=new RegExp(i,"i");var e=cardsData.filter(e=>!!t.test(e.name));const r=generateCards(checkOtherFilters(filterTypes,e));domElements.results.innerHTML=r.join("")}domElements.search.input.oninput=e=>{i=e.target.value,filterSearch()},domElements.search.button.onclick=()=>{filterSearch()}}const filterTypes=["rating","producer","price","size"];function handleChangeFilter(n){if("price"==n||"size"==n){const s=domElements.filter[n];s.forEach(e=>{e.addEventListener("input",e=>{var t=parseInt(s[0].value),r=parseInt(s[1].value),t=filterCardsByRange(n,t,r);const i=generateCards(checkOtherFilters(filterTypes,t));domElements.results.innerHTML=i.join("")})})}"rating"!=n&&"producer"!=n||domElements.filter[n].forEach(e=>{const r=new RegExp(e.getAttribute("data-filterValue"),"i");e.addEventListener("change",()=>{var e=filterCardsByCheckBox(n,r);const t=generateCards(checkOtherFilters(filterTypes,e));domElements.results.innerHTML=t.join("")})})}function filterCardsByRange(t,r,i){return cardsData.filter(e=>r<=e[t]&&e[t]<=i)}function filterCardsByCheckBox(t,r){return cardsData.filter(e=>!!r.test(e[t]))}function checkOtherFilters(e,t){let a=t;return e.forEach(s=>{"rating"!=s&&"producer"!=s||domElements.filter[s].forEach(e=>{const t=e.nextElementSibling;if(t.classList.contains("_active")){const r=new RegExp(e.getAttribute("data-filterValue"),"i");e=a.filter(e=>!!r.test(e[s]));a=e,console.log(a)}}),"price"!=s&&"size"!=s||domElements.filter[s].forEach(e=>{const n=domElements.filter[s];n.forEach(e=>{const t=n[0].value,r=n[1].value;var i=a.filter(e=>t<=e[s]&&e[s]<=r);a=i,console.log(a)})})}),a}filterTypes.forEach(e=>{handleChangeFilter(e)});
