import{_,o,c as n,b as e,t as a,e as l,F as u,r as h,u as m}from"./app.9a25bd44.js";const p={props:{name:{type:String,required:!0},subtitle:{type:String,required:!0}}},f={class:"hero"},g={class:"hero-body"},x={class:"container"},v={class:"title"},y={class:"subtitle"};function b(i,r,t,s,c,d){return o(),n("div",f,[e("div",g,[e("div",x,[e("h1",v,"Hey, I'm "+a(t.name||"John Doe")+".",1),e("h2",y,a(t.subtitle),1)])])])}const q=_(p,[["render",b]]);const S={props:{title:{type:String,required:!0},excerpt:{type:String,required:!0},image:{type:String,required:!0},author:{type:String,required:!0},date:{type:String,required:!0},href:{type:String,required:!0}},methods:{truncateText(i,r){return i.length>r?i.substring(0,r)+"...":i}}},w=["href"],A={class:"card"},D={class:"flex"},H={class:"media"},$=["src","alt"],B={class:"details"},I={class:"title"},M={class:"excerpt"},T={class:"author"},U={class:"name"},k={class:"date"};function C(i,r,t,s,c,d){return o(),n("a",{href:t.href},[e("div",A,[e("div",D,[e("div",H,[e("img",{src:t.image,alt:t.title},null,8,$)]),e("div",B,[e("h2",I,a(t.title),1),e("p",M,a(d.truncateText(t.excerpt,50)),1),e("div",T,[e("div",null,[e("h3",U,a(t.author),1),e("p",k,a(t.date),1)])])])])])],8,w)}const N=_(S,[["render",C],["__scopeId","data-v-e39ef13a"]]),V=[{Author:"Daniele",Updated:"2022-21-16T00:00:00.000Z",image:"public/images/five-ways-to-move-in-cocos-creator.png",title:"Si pace ad caput",path:"articles/five-ways-to-move-in-cocos-creator/index.html",excerpt:"lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"},{Author:"Author 2",Updated:"2022-06-01T00:00:00.000Z",image:"https://images.unsplash.com/photo-1665129059445-b31f47edf843?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",title:"Maiorque sermonibus nectare",path:"articles/article2.html",excerpt:"lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"}],F=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"old_index.md","lastUpdated":1672266612000}'),j={name:"old_index.md"},G=Object.assign(j,{setup(i){return(r,t)=>(o(),n("div",null,[l(q,{name:"Daniele",subtitle:"Welcome to my blog. I'll write about Cocos Engine, mostly things I'm discovering"}),(o(!0),n(u,null,h(m(V),(s,c)=>(o(),n("div",{key:c},[l(N,{title:s.title,excerpt:s.excerpt,image:s.image,author:s.Author,href:s.path,date:s.Updated},null,8,["title","excerpt","image","author","href","date"])]))),128))]))}});export{F as __pageData,G as default};