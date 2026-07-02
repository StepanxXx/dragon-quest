var g=Object.defineProperty;var E=(s,e,t)=>e in s?g(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var i=(s,e,t)=>E(s,typeof e!="symbol"?e+"":e,t);import{f as w,h as v,e as y,E as a,g as p,c as C,j as o,k as f,s as b,i as x}from"./rating.controller-SVQXQmK8.js";const S=s=>w.test(s),k=()=>{const s=document.querySelector(".scroll-up-btn");s&&(window.addEventListener("scroll",()=>{window.scrollY>300?s.classList.add("show"):s.classList.remove("show")}),s.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}))},n=document.getElementById("loader");function u(){n&&n.classList.add("is-active")}function m(){n&&n.classList.remove("is-active")}const q=()=>{const s=document.querySelector("[data-burger-modal]"),e=document.querySelector(".site-menu-button");if(!s||!e)return;const t=v(s);e.addEventListener("click",()=>{t.open()})};class L{async getQuote(){return y()}}class M{constructor(e){i(this,"quoteText");i(this,"quoteAuthor");this.root=e,this.quoteText=this.getElement('[data-role="quote-text"]'),this.quoteAuthor=this.getElement('[data-role="quote-author"]')}renderQuote(e,t){this.quoteText.textContent=e,this.quoteAuthor.textContent=t}renderError(){this.quoteText.textContent="Unable to load the quote of the day.",this.quoteAuthor.textContent=""}getElement(e){const t=this.root.querySelector(e);if(!t)throw new Error(`Element not found: ${e}`);return t}}class T{constructor(e,t){this.model=e,this.view=t}async init(){try{const{quote:e,author:t}=await this.model.getQuote();this.view.renderQuote(e,t)}catch(e){console.error("Error loading quote of the day:",e),this.view.renderError()}}}const F="favorite-exercises-list";class ${getFavorites(){const e=localStorage.getItem(F);if(e===null)return null;try{const t=JSON.parse(e);return Array.isArray(t)?t:null}catch{return null}}}const I="It appears that you haven't added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future.";class A{constructor(e){i(this,"list");this.root=e,this.list=this.getElement(".favor-exercises-list")}renderEmptyState(){this.root.classList.add("favor-exercises-noitems");const e=document.createElement("p");e.className="favor-exercises-text",e.textContent=I,this.list.append(e)}getElement(e){const t=this.root.querySelector(e);if(!t)throw new Error(`Element not found: ${e}`);return t}}class H{constructor(e,t){this.model=e,this.view=t}init(){const e=this.model.getFavorites();(!e||e.length===0)&&this.view.renderEmptyState()}}const R=12,N=10;class U{constructor(){i(this,"state",{selectedFilter:a.MUSCLES,selectedCategory:null,keyword:"",categories:[],exercises:[]})}getState(){return this.state}async loadCategories(e){const t=await p({filter:e,page:1,limit:R});return this.state={...this.state,selectedFilter:e,selectedCategory:null,keyword:"",categories:t.results,exercises:[]},this.state}async selectCategory(e){return this.state={...this.state,selectedCategory:e,keyword:""},this.loadExercises()}async searchExercises(e){return this.state={...this.state,keyword:e.trim()},this.loadExercises()}async loadExercises(){if(!this.state.selectedCategory)return this.state;const e=await C(this.buildExercisesParams());return this.state={...this.state,exercises:e.results},this.state}buildExercisesParams(){const e={keyword:this.state.keyword,page:1,limit:N};switch(this.state.selectedFilter){case a.BODY_PARTS:e.bodypart=this.state.selectedCategory;break;case a.EQUIPMENT:e.equipment=this.state.selectedCategory;break;case a.MUSCLES:default:e.muscles=this.state.selectedCategory;break}return e}}class D{constructor(e){i(this,"searchContainer");i(this,"searchForm");i(this,"searchInput");i(this,"exercisesSlash");i(this,"selectedCategoryText");i(this,"listContainer");i(this,"categoriesContainer");this.root=e,this.searchContainer=this.getElement("[data-exercises-search]"),this.searchForm=this.getElement("[data-exercises-search] .search-form"),this.searchInput=this.getElement("[data-exercises-search] .search-input"),this.exercisesSlash=this.getElement("[data-exercises-slash]"),this.selectedCategoryText=this.getElement("[data-exercises-selected-category]"),this.listContainer=this.getElement("[data-exercises-list]"),this.categoriesContainer=this.getElement("[data-exercises-categories]")}renderExerciseCategories(){this.categoriesContainer.innerHTML=Object.values(a).map(e=>`
        <li class="exercises-category">
          <button
            class="category-btn btnFilters"
            type="button"
            data-filter="${e}"
            aria-pressed="false"
          >
            ${e}
          </button>
        </li>
      `).join("")}onFilterClick(e){this.categoriesContainer.addEventListener("click",t=>{const r=this.getClosestElement(t.target,"[data-filter]");r&&e(r.dataset.filter)})}onCategoryCardClick(e){this.listContainer.addEventListener("click",t=>{const r=this.getCategoryFromEvent(t.target);r&&e(r)}),this.listContainer.addEventListener("keydown",t=>{if(t.key!=="Enter"&&t.key!==" ")return;const r=this.getCategoryFromEvent(t.target);r&&(t.preventDefault(),e(r))})}onSearchSubmit(e){this.searchForm.addEventListener("submit",t=>{t.preventDefault(),e(this.searchInput.value)})}onSearchClear(e){const t=this.searchForm.querySelector(".input-btn-clear");t==null||t.addEventListener("click",()=>{this.searchInput.value!==""&&(this.searchInput.value="",e(),this.searchInput.focus())})}renderCategoryCards(e){if(this.showCategoriesMode(),this.listContainer.innerHTML="",e.length===0){this.renderMessage("No categories were found for this filter.");return}this.listContainer.innerHTML=e.map(t=>this.createCategoryCard(t)).join("")}renderExercises(e){if(this.showExercisesMode(e),this.listContainer.innerHTML="",e.exercises.length===0){this.renderMessage("No exercises were found for this request.");return}this.listContainer.innerHTML=e.exercises.map(t=>this.createWorkoutCard(t)).join("")}setActiveFilter(e){this.categoriesContainer.querySelectorAll("[data-filter]").forEach(t=>{const r=t.dataset.filter===e;t.classList.toggle("active",r),t.setAttribute("aria-pressed",String(r))})}setLoading(e){this.root.setAttribute("aria-busy",String(e)),this.root.querySelectorAll("button").forEach(t=>{t.disabled=e}),this.searchInput.disabled=e}renderError(e){const t=e instanceof Error?e.message:"Unknown error";this.renderMessage(`Sorry, something went wrong. ${t}`)}showCategoriesMode(){this.searchContainer.classList.add("hidden"),this.exercisesSlash.classList.add("hidden"),this.selectedCategoryText.classList.add("hidden"),this.selectedCategoryText.textContent="",this.searchInput.value="",this.listContainer.classList.remove("exercises-list--workouts")}showExercisesMode(e){this.searchContainer.classList.remove("hidden"),this.exercisesSlash.classList.remove("hidden"),this.selectedCategoryText.classList.remove("hidden"),this.selectedCategoryText.textContent=e.selectedCategory?this.formatDisplayName(e.selectedCategory):"",this.searchInput.value=e.keyword,this.listContainer.classList.add("exercises-list--workouts")}renderMessage(e){this.listContainer.innerHTML=`
      <li class="exercises-message">${this.escapeHtml(e)}</li>
    `}createWorkoutCard(e){const t=Number.isFinite(e.rating)?e.rating.toFixed(1):"0.0";return`
      <li class="exercises-workout-item">
        <div class="workout-card" data-workout-id="${this.escapeHtml(e._id)}">
          <div class="workout-header">
            <div class="workout-badge-wrap">
              <div class="workout-badge">Workout</div>
              <div class="workout-rating" aria-label="Rating ${t}">
                <span>${t}</span>
                <svg class="workout-rating-icon" width="18" height="18">
                  <use href="img/sprite.svg#icon-star"></use>
                </svg>
              </div>
            </div>

            <button
              class="workout-btn-start"
              type="button"
              aria-label="Start ${this.escapeHtml(e.name)}"
              data-action="start"
              data-exercise-id="${this.escapeHtml(e._id)}"
            >
              Start
              <svg class="btn-icon" width="20" height="20">
                <use href="img/sprite.svg#icon-arrow-right"></use>
              </svg>
            </button>
          </div>

          <div class="workout-title-container">
            <div class="workout-icon-wrap">
              <svg class="workout-icon" width="16" height="16">
                <use href="img/sprite.svg#icon-running-stick-figure"></use>
              </svg>
            </div>
            <h3 class="workout-title">${this.escapeHtml(this.formatDisplayName(e.name))}</h3>
          </div>

          <ul class="workout-info-list">
            <li class="workout-info-item">
              <span class="info-label">Burned calories:</span>
              <span class="info-value">${e.burnedCalories} / 3 min</span>
            </li>
            <li class="workout-info-item">
              <span class="info-label">Body part:</span>
              <span class="info-value">${this.escapeHtml(this.formatDisplayName(e.bodyPart))}</span>
            </li>
            <li class="workout-info-item">
              <span class="info-label">Target:</span>
              <span class="info-value">${this.escapeHtml(this.formatDisplayName(e.target))}</span>
            </li>
          </ul>
        </div>
      </li>
    `}createCategoryCard(e){const t=this.formatDisplayName(e.name),r=e.imgUrl??e.imgURL??"";return`
      <li
        class="exercises-item"
        data-category-name="${this.escapeHtml(e.name)}"
        role="button"
        tabindex="0"
        aria-label="Show ${this.escapeHtml(t)} exercises"
      >
        <img
          class="item-image"
          src="${this.escapeHtml(r)}"
          alt="${this.escapeHtml(e.name)}"
        />
        <div class="item-content">
          <h3 class="content-title">${this.escapeHtml(t)}</h3>
          <p class="content-description">${this.escapeHtml(e.filter)}</p>
        </div>
      </li>
    `}getCategoryFromEvent(e){const t=this.getClosestElement(e,"[data-category-name]");return(t==null?void 0:t.dataset.categoryName)??null}getClosestElement(e,t){return e instanceof HTMLElement?e.closest(t):null}getElement(e){const t=this.root.querySelector(e);if(!t)throw new Error(`Element not found: ${e}`);return t}formatDisplayName(e){return e.charAt(0).toUpperCase()+e.slice(1)}escapeHtml(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]??t)}}class P{constructor(e,t){this.model=e,this.view=t}async init(){this.view.renderExerciseCategories(),this.bindEvents(),this.view.setActiveFilter(a.MUSCLES),await this.loadCategories(a.MUSCLES)}bindEvents(){this.view.onFilterClick(e=>{this.loadCategories(e)}),this.view.onCategoryCardClick(e=>{this.selectCategory(e)}),this.view.onSearchSubmit(e=>{this.searchExercises(e)}),this.view.onSearchClear(()=>{this.searchExercises("")})}async loadCategories(e){await this.runRequest(()=>this.model.loadCategories(e))}async selectCategory(e){await this.runRequest(()=>this.model.selectCategory(e))}async searchExercises(e){await this.runRequest(()=>this.model.searchExercises(e))}async runRequest(e){this.view.setLoading(!0);try{await e(),this.render()}catch(t){this.view.renderError(t)}finally{this.view.setLoading(!1)}}render(){const e=this.model.getState();if(this.view.setActiveFilter(e.selectedFilter),e.selectedCategory){this.view.renderExercises(e);return}this.view.renderCategoryCards(e.categories)}}class _{constructor(e,t){this.model=e,this.view=t}init(){this.bindEvents(),this.view.enableSubmit()}bindEvents(){this.view.onSubscribe(e=>{this.handleSubscription(e)})}async handleSubscription(e){if(!e){o("Email is required","error");return}if(!S(e)){o("Please enter a valid email address.","error");return}const r={email:e};await this.runRequest(()=>this.model.subscribe(r))}async runRequest(e){this.view.setLoading(!0),u();try{const t=await e();o(t.message,"success"),this.view.resetForm()}catch(t){const r=f(t);o(r,"error")}finally{this.view.setLoading(!1),m()}}}class B{async subscribe(e){return b(e)}}class Q{constructor(e){i(this,"emailInputElement");i(this,"subscribeButtonElement");this.root=e,this.emailInputElement=this.getElement("#subscribe-email"),this.subscribeButtonElement=this.getElement('#subscribe-form button[type="submit"]')}getElement(e){const t=this.root.querySelector(e);if(!t)throw new Error(`Element not found: ${e}`);return t}onSubscribe(e){this.root.addEventListener("submit",t=>{t.preventDefault(),e(this.getEmailInputValue())})}getEmailInputValue(){return this.emailInputElement.value.trim()}resetForm(){this.root.reset()}setLoading(e){this.emailInputElement.disabled=e,this.subscribeButtonElement.disabled=e}enableSubmit(){this.subscribeButtonElement.disabled=!1}}x();k();q();const l=document.querySelector("[data-favorites]");l&&new H(new $,new A(l)).init();const c=document.querySelector("[data-quote]");c&&new T(new L,new M(c)).init();const h=document.querySelector("[data-exercises-section]");h&&new P(new U,new D(h)).init();const d=document.querySelector("[data-subscribe-form]");d&&new _(new B,new Q(d)).init();u();m();
//# sourceMappingURL=main-MAe5CCU6.js.map
