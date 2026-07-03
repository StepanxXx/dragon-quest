var l=Object.defineProperty;var o=(i,t,e)=>t in i?l(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var s=(i,t,e)=>o(i,typeof t!="symbol"?t+"":t,e);import{E as u,B as c,M as d,a as h,b as m,s as E,g as b,c as p,d as g,e as x,i as q}from"./assets/rating.controller-oAi54erw.js";import"./assets/vendor-Dt2AslCP.js";class w{constructor(t,e){this.model=t,this.view=e}init(){this.view.render(this.model.getState()),this.bindEvents(),this.loadApiData()}bindEvents(){this.view.onLoad(()=>{this.loadApiData()}),this.view.onRate(()=>{this.runRequest(()=>this.model.rateSelectedExercise())}),this.view.onSubscribe(()=>{this.runRequest(()=>this.model.subscribe())})}async loadApiData(){await this.runRequest(()=>this.model.loadReadExamples())}async runRequest(t){this.view.setLoading(!0);try{await t(),this.view.render(this.model.getState())}catch(e){this.view.renderError(e)}finally{this.view.setLoading(!1)}}}class v{constructor(){s(this,"state",{filters:[],exercises:[],selectedExercise:null,quote:null,ratingResult:null,subscriptionResult:null,status:"Ready"});s(this,"paginationParams",{page:1,limit:6});s(this,"filtersParams",{filter:u.MUSCLES,...this.paginationParams});s(this,"exercisesParams",{bodypart:c.BACK,muscles:d.LATS,equipment:h.BARBELL,keyword:"pull",...this.paginationParams});s(this,"ratingPayload",{rate:5,email:"student@example.com",review:"MVC example rating request"});s(this,"subscriptionPayload",{email:"student@example.com"})}getState(){return this.state}async loadReadExamples(){this.setStatus("Loading GET requests...");const[t,e,n]=await Promise.all([this.loadFilters(),this.loadExercises(),this.loadQuote()]),a=e.results[0]?await this.loadExerciseDetails(e.results[0]._id):null;return this.state={...this.state,filters:t.results,exercises:e.results,selectedExercise:a,quote:n,status:"GET requests loaded"},this.state}async rateSelectedExercise(){var a;const t=(a=this.state.selectedExercise)==null?void 0:a._id;if(!t)return this.setStatus("Load exercises before rating."),this.state;const e=this.ratingPayload,n=await m(t,e);return this.state={...this.state,ratingResult:n,status:"PATCH rating request sent"},this.state}async subscribe(){const t=this.subscriptionPayload,e=await E(t);return this.state={...this.state,subscriptionResult:e,status:"POST subscription request sent"},this.state}async loadFilters(){return b(this.filtersParams)}async loadExercises(){return p(this.exercisesParams)}async loadExerciseDetails(t){return g(t)}async loadQuote(){return x()}setStatus(t){this.state={...this.state,status:t}}}class y{constructor(t){s(this,"statusElement");s(this,"filtersElement");s(this,"exercisesElement");s(this,"detailsElement");s(this,"quoteElement");s(this,"ratingElement");s(this,"subscriptionElement");s(this,"loadButton");s(this,"ratingButton");s(this,"subscribeButton");this.root=t,this.root.innerHTML=`
      <section class="mvc-example" aria-labelledby="mvc-example-title">
        <h2 id="mvc-example-title">MVC API example</h2>
        <p data-role="status"></p>

        <div>
          <button type="button" data-action="load">Load API data</button>
          <button type="button" data-action="rate">Send rating</button>
          <button type="button" data-action="subscribe">Subscribe</button>
        </div>

        <article>
          <h3>Filters</h3>
          <ul data-role="filters"></ul>
        </article>

        <article>
          <h3>Exercises</h3>
          <ul data-role="exercises"></ul>
        </article>

        <article>
          <h3>Exercise details</h3>
          <div data-role="details"></div>
        </article>

        <article>
          <h3>Quote</h3>
          <blockquote data-role="quote"></blockquote>
        </article>

        <article>
          <h3>Mutation results</h3>
          <p data-role="rating"></p>
          <p data-role="subscription"></p>
        </article>
      </section>
    `,this.statusElement=this.getElement('[data-role="status"]'),this.filtersElement=this.getElement('[data-role="filters"]'),this.exercisesElement=this.getElement('[data-role="exercises"]'),this.detailsElement=this.getElement('[data-role="details"]'),this.quoteElement=this.getElement('[data-role="quote"]'),this.ratingElement=this.getElement('[data-role="rating"]'),this.subscriptionElement=this.getElement('[data-role="subscription"]'),this.loadButton=this.getElement('[data-action="load"]'),this.ratingButton=this.getElement('[data-action="rate"]'),this.subscribeButton=this.getElement('[data-action="subscribe"]')}render(t){this.statusElement.textContent=t.status,this.filtersElement.innerHTML=t.filters.map(e=>`<li>${e.name} (${e.filter})</li>`).join(""),this.exercisesElement.innerHTML=t.exercises.map(e=>`<li>${e.name}: ${e.target}</li>`).join(""),this.detailsElement.textContent=t.selectedExercise?`${t.selectedExercise.name}, ${t.selectedExercise.equipment}, ${t.selectedExercise.time} min`:"No exercise selected",this.quoteElement.textContent=t.quote?`${t.quote.quote} - ${t.quote.author}`:"No quote loaded",this.ratingElement.textContent=t.ratingResult?`Rating updated: ${t.ratingResult.name} (${t.ratingResult.rating})`:"Rating request was not sent",this.subscriptionElement.textContent=t.subscriptionResult?t.subscriptionResult.message:"Subscription request was not sent"}onLoad(t){this.loadButton.addEventListener("click",t)}onRate(t){this.ratingButton.addEventListener("click",t)}onSubscribe(t){this.subscribeButton.addEventListener("click",t)}setLoading(t){this.loadButton.disabled=t,this.ratingButton.disabled=t,this.subscribeButton.disabled=t}renderError(t){const e=t instanceof Error?t.message:"Unknown error";this.statusElement.textContent=`Error: ${e}`}getElement(t){const e=this.root.querySelector(t);if(!e)throw new Error(`Element not found: ${t}`);return e}}const r=document.querySelector("[data-mvc-example]");if(!r)throw new Error("MVC example element not found");const R=new v,f=new y(r),S=new w(R,f);S.init();q();
//# sourceMappingURL=test-components.js.map
