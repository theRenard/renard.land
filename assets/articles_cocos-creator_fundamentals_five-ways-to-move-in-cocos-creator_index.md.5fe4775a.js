import{_ as e,c as s,o as a,a as t,b as o,d as n}from"./app.e3ba997c.js";const l="/assets/5-ways-to-move.348d6cf0.png",g=JSON.parse(`{"title":"Five ways to move an element in Cocos Creator","description":"Five ways to move an element in Cocos Creator","frontmatter":{"title":"Five ways to move an element in Cocos Creator","description":"Five ways to move an element in Cocos Creator","Author":"Daniele Tabanella","head":[["meta",{"name":"keywords","content":"cocos creator"}]],"Updated":"2022-12-16T00:00:00.000Z","lastUpdated":false,"image":"/images/5-ways-to-move.png"},"headers":[{"level":3,"title":"One of the first things you'll want to do for your game is probably to move something from point A to point B. There are various ways to move an element in Cocos Creator, some affect the ridigBody and the others on the position of the Node, based on what you want to achieve you might choose one or another, let's see them together.","slug":"one-of-the-first-things-you-ll-want-to-do-for-your-game-is-probably-to-move-something-from-point-a-to-point-b-there-are-various-ways-to-move-an-element-in-cocos-creator-some-affect-the-ridigbody-and-the-others-on-the-position-of-the-node-based-on-what-you-want-to-achieve-you-might-choose-one-or-another-let-s-see-them-together","link":"#one-of-the-first-things-you-ll-want-to-do-for-your-game-is-probably-to-move-something-from-point-a-to-point-b-there-are-various-ways-to-move-an-element-in-cocos-creator-some-affect-the-ridigbody-and-the-others-on-the-position-of-the-node-based-on-what-you-want-to-achieve-you-might-choose-one-or-another-let-s-see-them-together","children":[]},{"level":2,"title":"1. Position","slug":"_1-position","link":"#_1-position","children":[]},{"level":2,"title":"2. Translation","slug":"_2-translation","link":"#_2-translation","children":[]},{"level":2,"title":"3. Force","slug":"_3-force","link":"#_3-force","children":[]},{"level":2,"title":"4. Impulse","slug":"_4-impulse","link":"#_4-impulse","children":[]},{"level":2,"title":"5. Velocity","slug":"_5-velocity","link":"#_5-velocity","children":[]},{"level":2,"title":"Demo","slug":"demo","link":"#demo","children":[]}],"relativePath":"articles/cocos-creator/fundamentals/five-ways-to-move-in-cocos-creator/index.md","lastUpdated":1674247530000}`),p={name:"articles/cocos-creator/fundamentals/five-ways-to-move-in-cocos-creator/index.md"},c=t('<p><img src="'+l+`" alt="5 ways to move in cocos creator"></p><h1 id="five-ways-to-move-an-element-in-cocos-creator" tabindex="-1">Five ways to move an element in Cocos Creator <a class="header-anchor" href="#five-ways-to-move-an-element-in-cocos-creator" aria-hidden="true">#</a></h1><h3 id="one-of-the-first-things-you-ll-want-to-do-for-your-game-is-probably-to-move-something-from-point-a-to-point-b-there-are-various-ways-to-move-an-element-in-cocos-creator-some-affect-the-ridigbody-and-the-others-on-the-position-of-the-node-based-on-what-you-want-to-achieve-you-might-choose-one-or-another-let-s-see-them-together" tabindex="-1">One of the first things you&#39;ll want to do for your game is probably to move something from point <em>A</em> to point <em>B</em>. There are various ways to move an element in Cocos Creator, some affect the <code>ridigBody</code> and the others on the position of the <code>Node</code>, based on what you want to achieve you might choose one or another, let&#39;s see them together. <a class="header-anchor" href="#one-of-the-first-things-you-ll-want-to-do-for-your-game-is-probably-to-move-something-from-point-a-to-point-b-there-are-various-ways-to-move-an-element-in-cocos-creator-some-affect-the-ridigbody-and-the-others-on-the-position-of-the-node-based-on-what-you-want-to-achieve-you-might-choose-one-or-another-let-s-see-them-together" aria-hidden="true">#</a></h3><h2 id="_1-position" tabindex="-1">1. Position <a class="header-anchor" href="#_1-position" aria-hidden="true">#</a></h2><p>Changing the position of an element is probably the easiest solution, just assign a new position to the <code>Node</code>. The position is relative to the parent <code>Node</code>. Using position is like teleporting the element to a new position so it&#39;s not affected by the <code>RigidBody</code> or the <code>Physics</code> of the game. Strange things can happen if you use position and physics together (for instance partial or no collisions). You can use <code>setPosition</code> or <code>setWorldPosition</code> to set the position of the <code>Node</code>.</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// get the current position</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> newPosition </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">node</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getPosition</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// set the new position</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">node</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setPosition</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Vec3</span><span style="color:#A6ACCD;">(newPosition</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">x </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> newPosition</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">y </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#A6ACCD;">))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>You can choose to use <code>setPosition</code> or <code>setWorldPosition</code> based on the coordinate space you want to use. <code>setPosition</code> uses the coordinate space of the parent <code>Node</code> while <code>setWorldPosition</code> uses the coordinate space of the <code>World</code>.</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">node</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setWorldPosition</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Vec3</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="_2-translation" tabindex="-1">2. Translation <a class="header-anchor" href="#_2-translation" aria-hidden="true">#</a></h2><p>Similar to position, but perform a translation instead of a teleport. The translation is relative to the parent <code>Node</code>. You can use a second parameter <code>nodeSpace</code> to set the coordinate space <code>WORLD</code> or <code>LOCAL</code>.</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">node</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">translate</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Vec3</span><span style="color:#A6ACCD;">(ammount</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> NodeSpace</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">WORLD)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="_3-force" tabindex="-1">3. Force <a class="header-anchor" href="#_3-force" aria-hidden="true">#</a></h2><p>The force is applied to the <code>RigidBody</code> of the element. You can use <code>applyForceToCenter</code> or <code>applyForce</code> to apply the force to the center of the <code>RigidBody</code> or to a specific point. This is a literal pushing motion where the bigger the mass of the Object, the slower it will speed up. You can use a second parameter <code>wake</code> to wake up the <code>RigidBody</code> if it&#39;s sleeping. Force Add a continuous force to the rigidbody, using its mass.</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">rigidBody</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">applyForceToCenter</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Vec2</span><span style="color:#A6ACCD;">(ammount</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="_4-impulse" tabindex="-1">4. Impulse <a class="header-anchor" href="#_4-impulse" aria-hidden="true">#</a></h2><p>The impulse is applied to the <code>RigidBody</code> of the element. You can use <code>applyLinearImpulseToCenter</code> or <code>applyLinearImpulse</code> to apply the impulse to the center of the <code>RigidBody</code> or to a specific point. You can use a second parameter <code>wake</code> to wake up the <code>RigidBody</code> if it&#39;s sleeping. Impulse Add an instant force impulse to the rigidbody, using its mass.</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">rigidBody</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">applyLinearImpulseToCenter</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Vec2</span><span style="color:#A6ACCD;">(ammount</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h2 id="_5-velocity" tabindex="-1">5. Velocity <a class="header-anchor" href="#_5-velocity" aria-hidden="true">#</a></h2><p>The velocity is applied to the <code>RigidBody</code> of the element. You can use <code>linearVelocity</code> to set the velocity of the <code>RigidBody</code>. You can use a second parameter <code>wake</code> to wake up the <code>RigidBody</code> if it&#39;s sleeping.</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">rigidBody</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">linearVelocity </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Vec2</span><span style="color:#A6ACCD;">(velocity</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">x </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> ammount</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> velocity</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">y)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="demo" tabindex="-1">Demo <a class="header-anchor" href="#demo" aria-hidden="true">#</a></h2><p>You can move with arrow keys and choose if update in a loop or not.</p>`,22),r=o("div",{class:"game-iframe"},[o("iframe",{src:"/games/5-ways-to-move/index.html",title:"laser defender",frameborder:"0",style:{"aspect-ratio":"6 / 4"}})],-1),i=o("p",null,[n("The repository of the project is here: "),o("a",{href:"https://github.com/theRenard/cocos-engine-5-ways-to-move",target:"_blank",rel:"noreferrer"},"https://github.com/theRenard/cocos-engine-5-ways-to-move")],-1),d=[c,r,i];function h(y,C,D,A,m,F){return a(),s("div",null,d)}const f=e(p,[["render",h]]);export{g as __pageData,f as default};