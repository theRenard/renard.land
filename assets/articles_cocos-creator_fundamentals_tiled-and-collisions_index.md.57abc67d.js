import{_ as o,c as s,o as a,a as t,b as e}from"./app.62d2a848.js";const i="/assets/tiled-and-collisions.26464682.png",l="/assets/tiles-to-polygon-collider.f6915503.png",n="/assets/tiled.cbbeea73.png",r="/assets/example-cocos.e4342e3c.png",c="/assets/example-cocos-2.1618cbeb.png",_=JSON.parse(`{"title":"Tiled and collisions in Cocos Creator","description":"Tiled and collisions in Cocos Creator","frontmatter":{"title":"Tiled and collisions in Cocos Creator","description":"Tiled and collisions in Cocos Creator","Author":"Daniele Tabanella","head":[["meta",{"name":"keywords","content":"cocos creator"}]],"Updated":"2022-12-16T00:00:00.000Z","lastUpdated":false},"headers":[{"level":3,"title":"If you've tried to figure out how to use collisions with Tiled tiled maps and Cocos Creator probably you had no luck. This is because out of the box, this configuration is unsupported. But there is a way to make it work.","slug":"if-you-ve-tried-to-figure-out-how-to-use-collisions-with-tiled-tiled-maps-and-cocos-creator-probably-you-had-no-luck-this-is-because-out-of-the-box-this-configuration-is-unsupported-but-there-is-a-way-to-make-it-work","link":"#if-you-ve-tried-to-figure-out-how-to-use-collisions-with-tiled-tiled-maps-and-cocos-creator-probably-you-had-no-luck-this-is-because-out-of-the-box-this-configuration-is-unsupported-but-there-is-a-way-to-make-it-work","children":[]},{"level":2,"title":"TL;DR","slug":"tl-dr","link":"#tl-dr","children":[]},{"level":2,"title":"How does it work?","slug":"how-does-it-work","link":"#how-does-it-work","children":[]},{"level":2,"title":"Example","slug":"example","link":"#example","children":[]}],"relativePath":"articles/cocos-creator/fundamentals/tiled-and-collisions/index.md","lastUpdated":1674247530000}`),d={name:"articles/cocos-creator/fundamentals/tiled-and-collisions/index.md"},p=t('<p><img src="'+i+'" alt="Tiled and collisions in Cocos Creator"></p><h1 id="tiled-and-collisions-in-cocos-creator" tabindex="-1">Tiled and collisions in Cocos Creator <a class="header-anchor" href="#tiled-and-collisions-in-cocos-creator" aria-hidden="true">#</a></h1><h3 id="if-you-ve-tried-to-figure-out-how-to-use-collisions-with-tiled-tiled-maps-and-cocos-creator-probably-you-had-no-luck-this-is-because-out-of-the-box-this-configuration-is-unsupported-but-there-is-a-way-to-make-it-work" tabindex="-1">If you&#39;ve tried to figure out how to use collisions with Tiled tiled maps and Cocos Creator probably you had no luck. This is because out of the box, this configuration is unsupported. But there is a way to make it work. <a class="header-anchor" href="#if-you-ve-tried-to-figure-out-how-to-use-collisions-with-tiled-tiled-maps-and-cocos-creator-probably-you-had-no-luck-this-is-because-out-of-the-box-this-configuration-is-unsupported-but-there-is-a-way-to-make-it-work" aria-hidden="true">#</a></h3><h2 id="tl-dr" tabindex="-1">TL;DR <a class="header-anchor" href="#tl-dr" aria-hidden="true">#</a></h2><p>You can find all the code in this <a href="https://github.com/theRenard/cocos-creator-tiled-collider-creator" target="_blank" rel="noreferrer">repository</a></p><h2 id="how-does-it-work" tabindex="-1">How does it work? <a class="header-anchor" href="#how-does-it-work" aria-hidden="true">#</a></h2><p>The <a href="https://github.com/theRenard/cocos-creator-tiled-collider-creator/blob/master/assets/Scripts/Tilemap.ts" target="_blank" rel="noreferrer"><code>Tiledmap.js</code></a> component can be applied on any <code>TiledLayer</code> node which are sub-layers of a <code>TiledMap</code>. The script uses <a href="https://github.com/AndriiHeonia/hull" target="_blank" rel="noreferrer"><code>Hull.js</code></a> and <a href="https://github.com/uhho/density-clustering" target="_blank" rel="noreferrer"><code>DBSCAN</code></a> to generate the collision shapes from the cloud of points of the coordinates of the tiles of that node and apply a <code>PolygonCollider2D</code> for every cluster of points.</p><p><img src="'+l+'" alt="Tiled and collisions in Cocos Creator"></p><p>The component has four parameters:</p><ol><li><strong>Debug</strong>: if true it will draw the collision shapes in the scene.</li><li><strong>Hull Concavity</strong>: the concavity of the hull, the higher the value the more concave the hull will be. You can leave it at 1.0.</li><li><strong>Neighbour Radius</strong>: the radius of the circle that will be used to find the neighbours of a point.</li><li><strong>Cluster Neighbours</strong> Points: the number of neighbours that a point must have to be considered a cluster.</li></ol><p>You may need to tweak parameters 3 and 4 to get the best results.</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-hidden="true">#</a></h2><p>This is an example of a tiledmap with collisions. I&#39;ve created 5 different layers, I want to apply rigidbodies only to the platforms and traps. The other layers are just decorations and I don&#39;t want to apply any rigidbody to them.</p><p><img src="'+n+`" alt="Tiled and collisions in Cocos Creator"></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">Tiled layers</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ Traps</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ Decorations</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ Stairs</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ Platforms</span></span>
<span class="line"><span style="color:#A6ACCD;">└─ Water</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>I Cocos Creator I&#39;ve just added the <code>TiledMap</code> and the <code>RigidBody</code> components to the layers I wanted to apply collisions to. Remember to set the rigidbody type to <code>Static</code> if you use gravity or the layer will fall.</p><p><img src="`+r+'" alt="Example in Cocos"></p><p>And voilà, as you can see the <code>PolygonCollider</code> was generated automatically from the tiles of the layer.</p><p><img src="'+c+`" alt="Example in Cocos"></p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>I&#39;ve found some glitches with the TiledMap when scrolling, some layers were not drawn correctly. I&#39;ve fixed it by adding a rigidbody to the <code>TiledMap</code>.</p></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p><code>TiledMap</code> can&#39;t work on _borders, for instance, if you need to have a frame-like border you need to create 4 different layers and apply the <code>TiledMap</code> component to each of them. If not Hull.js will consider them as a whole and will generate a single collision shape for the whole border.</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">  ┌─────────┐         ──────────</span></span>
<span class="line"><span style="color:#A6ACCD;">  │         │       │            │</span></span>
<span class="line"><span style="color:#A6ACCD;">  │         │       │            │</span></span>
<span class="line"><span style="color:#A6ACCD;">  │         │   =&gt;  │            │</span></span>
<span class="line"><span style="color:#A6ACCD;">  │         │       │            │</span></span>
<span class="line"><span style="color:#A6ACCD;">  │         │       │            │</span></span>
<span class="line"><span style="color:#A6ACCD;">  └─────────┘         ───────────</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></div><h1 id="demo" tabindex="-1">Demo <a class="header-anchor" href="#demo" aria-hidden="true">#</a></h1>`,22),h=e("div",{class:"game-iframe"},[e("iframe",{src:"/games/tiled-collisions/index.html",title:"laser defender",frameborder:"0",style:{"aspect-ratio":"6 / 4"}})],-1),u=[p,h];function m(f,y,b,g,C,w){return a(),s("div",null,u)}const T=o(d,[["render",m]]);export{_ as __pageData,T as default};