import{_ as s,o as a,c as o,a as e,b as n}from"./app.7576047d.js";const t="/assets/shoot-em-up.8af19194.png",A=JSON.parse(`{"title":"Cocos Creator","titleTemplate":"Shoot 'em up in Cocos Creator","description":"Shoot 'em up in Cocos Creator","frontmatter":{"title":"Cocos Creator","titleTemplate":"Shoot 'em up in Cocos Creator","description":"Shoot 'em up in Cocos Creator","Author":"Daniele Tabanella","head":[["meta",{"name":"keywords","content":"cocos creator"}]],"Updated":"2022-12-16T00:00:00.000Z","lastUpdated":false,"image":"/images/shoot-em-up.png"},"headers":[{"level":3,"title":"Developing a simple game like a Shoot 'Em Up in Cocos Creator is not hard, but if you are new to this engine you may have a hard time understanding how to do it. In this article, I'll try to explain the logic behind the code of a simple Shoot 'Em UP and how the different pieces work togheter.","slug":"developing-a-simple-game-like-a-shoot-em-up-in-cocos-creator-is-not-hard-but-if-you-are-new-to-this-engine-you-may-have-a-hard-time-understanding-how-to-do-it-in-this-article-i-ll-try-to-explain-the-logic-behind-the-code-of-a-simple-shoot-em-up-and-how-the-different-pieces-work-togheter","link":"#developing-a-simple-game-like-a-shoot-em-up-in-cocos-creator-is-not-hard-but-if-you-are-new-to-this-engine-you-may-have-a-hard-time-understanding-how-to-do-it-in-this-article-i-ll-try-to-explain-the-logic-behind-the-code-of-a-simple-shoot-em-up-and-how-the-different-pieces-work-togheter","children":[]},{"level":2,"title":"⚠️ Disclaimer","slug":"disclaimer","link":"#disclaimer","children":[]},{"level":2,"title":"The Assets folder","slug":"the-assets-folder","link":"#the-assets-folder","children":[]},{"level":2,"title":"The Scenes","slug":"the-scenes","link":"#the-scenes","children":[]},{"level":2,"title":"The Preload Scene","slug":"the-preload-scene","link":"#the-preload-scene","children":[]},{"level":2,"title":"The Game Scene Hierarchy","slug":"the-game-scene-hierarchy","link":"#the-game-scene-hierarchy","children":[]},{"level":2,"title":"The Camera node","slug":"the-camera-node","link":"#the-camera-node","children":[]},{"level":2,"title":"Background and Foreground Nodes","slug":"background-and-foreground-nodes","link":"#background-and-foreground-nodes","children":[]},{"level":2,"title":"The Player Node","slug":"the-player-node","link":"#the-player-node","children":[]}],"relativePath":"articles/cocos-creator/shoot-em-up-in-cocos-creator/index.md","lastUpdated":1673219820000}`),r={name:"articles/cocos-creator/shoot-em-up-in-cocos-creator/index.md"},l=e('<p><img src="'+t+'" alt="Shoot &#39;em up in Cocos Creator"></p><h1 id="shoot-em-up-in-cocos-creator" tabindex="-1">Shoot &#39;em up in Cocos Creator <a class="header-anchor" href="#shoot-em-up-in-cocos-creator" aria-hidden="true">#</a></h1><h3 id="developing-a-simple-game-like-a-shoot-em-up-in-cocos-creator-is-not-hard-but-if-you-are-new-to-this-engine-you-may-have-a-hard-time-understanding-how-to-do-it-in-this-article-i-ll-try-to-explain-the-logic-behind-the-code-of-a-simple-shoot-em-up-and-how-the-different-pieces-work-togheter" tabindex="-1">Developing a simple game like a Shoot &#39;Em Up in Cocos Creator is not hard, but if you are new to this engine you may have a hard time understanding how to do it. In this article, I&#39;ll try to explain the logic behind the code of a simple Shoot &#39;Em UP and how the different pieces work togheter. <a class="header-anchor" href="#developing-a-simple-game-like-a-shoot-em-up-in-cocos-creator-is-not-hard-but-if-you-are-new-to-this-engine-you-may-have-a-hard-time-understanding-how-to-do-it-in-this-article-i-ll-try-to-explain-the-logic-behind-the-code-of-a-simple-shoot-em-up-and-how-the-different-pieces-work-togheter" aria-hidden="true">#</a></h3>',3),i=n("iframe",{class:"game-iframe",src:"/games/laser-defender/index.html",title:"laser defender",width:"450",height:"800",frameborder:"0"},null,-1),c=e(`<h2 id="disclaimer" tabindex="-1">⚠️ Disclaimer <a class="header-anchor" href="#disclaimer" aria-hidden="true">#</a></h2><p>I will not describe the code line by line for two reasons:</p><ol><li>I assume you have a basic knowledge of Cocos Creator engine and its API but if this is not the case I strongly suggest to start reading the <a href="https://docs.cocos.com/creator/manual/en/" target="_blank" rel="noreferrer">official documentation</a> and come back here once you have a basic grasp of it.</li><li>I also assume that you know how to code. The game&#39;s code is pretty simple and straighforward, also the components are really small. If you don&#39;t know how to code maybe a game is not the first thing you wanna do... even though it&#39;s a great way to learn.</li></ol><p>I will instead describe the logic behind the code and how the different scenes, node and components work togheter.</p><p>Laser Defender is a game I&#39;ve learned thanks to this <a href="https://www.udemy.com/course/unitycourse/" target="_blank" rel="noreferrer">Udemy course</a>. I&#39;ve decided to port it to Cocos Creator to see how it works and to compare it with Unity. I&#39;ve used Cocos Creator 3.6.2.</p><p>Another thing, I&#39;m not a game developer, I&#39;m a web developer, so I&#39;m sure there are better ways to do this, but this is how I did it.</p><p>All assets are from <a href="https://kenney.nl/assets" target="_blank" rel="noreferrer">Kenney</a>! Really great work!</p><p>If you want to follow along, you can download the project from <a href="https://github.com/theRenard/cocos-creator-laser-defender" target="_blank" rel="noreferrer">github</a> and start reading.</p><h2 id="the-assets-folder" tabindex="-1">The <code>Assets</code> folder <a class="header-anchor" href="#the-assets-folder" aria-hidden="true">#</a></h2><p>With time you will find that the <code>Assets</code> folder will become a mess, so I suggest to organize it in a way that makes sense to you. I&#39;ve used the following structure:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">Assets</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ Textures</span></span>
<span class="line"><span style="color:#A6ACCD;">│  └─ 🖼️</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ Fonts</span></span>
<span class="line"><span style="color:#A6ACCD;">│  └─ 🖼️</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ Music</span></span>
<span class="line"><span style="color:#A6ACCD;">│  └─ 🎹</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ Particles</span></span>
<span class="line"><span style="color:#A6ACCD;">│  └─ 💥</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ Prefabs</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ Effects</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ Enemies</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ Particles</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ Paths</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ Projectiles</span></span>
<span class="line"><span style="color:#A6ACCD;">│  └─ Waves</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ Scenes</span></span>
<span class="line"><span style="color:#A6ACCD;">│  └─ 🎬</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ Scripts</span></span>
<span class="line"><span style="color:#A6ACCD;">│  └─ xxx.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">└─ Sounds</span></span>
<span class="line"><span style="color:#A6ACCD;">   └─ 🔔</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>I had a lot of issues with system fonts so I&#39;ve finally used a bitmap one. I&#39;ve used <a href="https://www.bmglyph.com" target="_blank" rel="noreferrer">bmGlyph</a>, which is a great app that does plenty of things like gradient and other effects.</p></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Save your time and just use <code>mp3</code> files for music and sound effects, <code>ogg</code> files are not supported in some browsers.</p></div><h2 id="the-scenes" tabindex="-1">The <code>Scenes</code> <a class="header-anchor" href="#the-scenes" aria-hidden="true">#</a></h2><p>First thing first, the game is composed of 4 scenes. The <code>Preload</code> scene is where the game starts it loads immediatly the <code>MainMenu</code> scene that is the first scene that is shown to the player when the game is launched. The <code>Game</code> scene is the main scene, where the game is played. The <code>GameOver</code> scene is shown when the player loses.</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">Scenes</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ Preload</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ MainMenu</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ Game</span></span>
<span class="line"><span style="color:#A6ACCD;">└─ GameOver</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>You set the game starting scene not in preferences but during the build phase so that you can, for instance, start with a different scene according to the target platform.</p></div><h2 id="the-preload-scene" tabindex="-1">The <code>Preload</code> Scene <a class="header-anchor" href="#the-preload-scene" aria-hidden="true">#</a></h2><p>The <code>Preload</code> scene is used to instantiate two <a href="https://refactoring.guru/design-patterns/singleton" target="_blank" rel="noreferrer">singletons</a>. One is for managing levels and the other to play the game music. Singletons are used to share data between scenes. This tecnique is also used in <a href="https://gamedevbeginner.com/singletons-in-unity-the-right-way/" target="_blank" rel="noreferrer">Unity</a>.</p><p>/// add the singletons</p><h2 id="the-game-scene-hierarchy" tabindex="-1">The <code>Game</code> Scene Hierarchy <a class="header-anchor" href="#the-game-scene-hierarchy" aria-hidden="true">#</a></h2><p>The game scene hieararchy is very simple, there&#39;s a <code>Canvas</code>, a <code>Camera</code>, a <code>Player</code> node of course, scrolling <code>Background</code> / <code>Foreground</code> nodes and <code>Enemies</code> prefabs that are instantiated that move towards the player. The player can shoot <code>Projectiles</code> that destroy enemies. The game is over when the player&#39;s health is over. The UI is composed of a <code>ProgressBar</code> and a <code>Score</code>. There is also a <code>GameManager</code> node that hosts the script that manages the game as the <code>EnemySpawner</code> and the <code>ScoreKeeper</code>. We will see how these work in the next sections. You will also notice a parent node for the <code>Player</code> which is <code>ShipBoundaries</code>. It&#39;s used to limit the player&#39;s movement inside the canvas and it uses the <code>Widget</code> component to stick to the canvas (even if the game is not responsive).</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">Game</span></span>
<span class="line"><span style="color:#A6ACCD;">└─ Canvas</span></span>
<span class="line"><span style="color:#A6ACCD;">   ├─ Camera</span></span>
<span class="line"><span style="color:#A6ACCD;">   │</span></span>
<span class="line"><span style="color:#A6ACCD;">   ├─ Background</span></span>
<span class="line"><span style="color:#A6ACCD;">   │  ├─ Stars</span></span>
<span class="line"><span style="color:#A6ACCD;">   │  └─ Clouds</span></span>
<span class="line"><span style="color:#A6ACCD;">   │</span></span>
<span class="line"><span style="color:#A6ACCD;">   ├─ ShipBoundaries</span></span>
<span class="line"><span style="color:#A6ACCD;">   │  └─ Player</span></span>
<span class="line"><span style="color:#A6ACCD;">   │     ├─ Engine</span></span>
<span class="line"><span style="color:#A6ACCD;">   │     └─ Ship</span></span>
<span class="line"><span style="color:#A6ACCD;">   │</span></span>
<span class="line"><span style="color:#A6ACCD;">   ├─ Foreground</span></span>
<span class="line"><span style="color:#A6ACCD;">   │  └─ Clouds</span></span>
<span class="line"><span style="color:#A6ACCD;">   │</span></span>
<span class="line"><span style="color:#A6ACCD;">   ├─ UI</span></span>
<span class="line"><span style="color:#A6ACCD;">   │  ├─ ProgressBar</span></span>
<span class="line"><span style="color:#A6ACCD;">   │  │  └─ Bar</span></span>
<span class="line"><span style="color:#A6ACCD;">   │  └─ Score</span></span>
<span class="line"><span style="color:#A6ACCD;">   │</span></span>
<span class="line"><span style="color:#A6ACCD;">   └─ GameManager</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="the-camera-node" tabindex="-1">The <code>Camera</code> node <a class="header-anchor" href="#the-camera-node" aria-hidden="true">#</a></h2><p>The camera node is a child of the <code>Canvas</code> node, it&#39;s used to follow the player. The script attached to the camera is <a href="https://github.com/theRenard/cocos-creator-laser-defender/blob/master/assets/Scripts/CameraShake.ts" target="_blank" rel="noreferrer"><code>CameraShake.ts</code></a> and it does exactly what it says, it shakes the camera. It&#39;s used when the player is hit by an enemy. The script is very simple, it just moves the camera in a random direction for a given amount of time. The camera is moved by changing the <code>position</code> and the <code>rotation</code> property of the node.</p><h2 id="background-and-foreground-nodes" tabindex="-1"><code>Background</code> and <code>Foreground</code> Nodes <a class="header-anchor" href="#background-and-foreground-nodes" aria-hidden="true">#</a></h2><p>These two nodes are placeholder for textures, the <code>Background</code> node has <code>Stars</code> and <code>Clouds</code> textures, those nodes are just sprites with a script attached. The script is <a href="https://github.com/theRenard/cocos-creator-laser-defender/blob/master/assets/Scripts/Scroller.ts" target="_blank" rel="noreferrer"><code>Scroller.ts</code></a> and it does just one thing, it scrolls the texture. How ? It clones the node so that it can scroll infinitely. The two nodes forms a column that begin to scroll at a given speed, when the bottom one reaches the end of the canvas (and it is out of sight) it moves at the top of the other and the process repeats. This is how the scrolling effect is achieved.</p><h2 id="the-player-node" tabindex="-1">The <code>Player</code> Node <a class="header-anchor" href="#the-player-node" aria-hidden="true">#</a></h2><p>The <code>Player</code> node is the most complex node in the game, it has a lot of scripts attached to it, so it deserves a <a href="/articles/cocos-creator/shoot-em-up-in-cocos-creator/the_player.html">section of its own</a>.</p>`,29),d=[l,i,c];function h(p,m,u,g,y,C){return a(),o("div",null,d)}const w=s(r,[["render",h]]);export{A as __pageData,w as default};
