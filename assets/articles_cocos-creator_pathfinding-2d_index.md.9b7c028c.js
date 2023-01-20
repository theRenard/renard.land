import{_ as t,c as a,o as i,a as n,b as e}from"./app.e3ba997c.js";const o="/assets/pathfinding-2d.56196e39.png",s="/assets/pathfinding.b9b92cb2.gif",_=JSON.parse('{"title":"Pathfinding 2D in Cocos Creator","titleTemplate":"Pathfinding","description":"Pathfinding 2D in Cocos Creator","frontmatter":{"title":"Pathfinding 2D in Cocos Creator","titleTemplate":"Pathfinding","description":"Pathfinding 2D in Cocos Creator","Author":"Daniele Tabanella","head":[["meta",{"name":"keywords","content":"cocos creator"}]],"Updated":"2022-12-16T00:00:00.000Z","lastUpdated":false},"headers":[{"level":3,"title":"Pathfinding is a common feature in games. In this tutorial, we will show you how to implement a pathfinding system in Cocos Creator to move a swarm of enemies toward the player","slug":"pathfinding-is-a-common-feature-in-games-in-this-tutorial-we-will-show-you-how-to-implement-a-pathfinding-system-in-cocos-creator-to-move-a-swarm-of-enemies-toward-the-player","link":"#pathfinding-is-a-common-feature-in-games-in-this-tutorial-we-will-show-you-how-to-implement-a-pathfinding-system-in-cocos-creator-to-move-a-swarm-of-enemies-toward-the-player","children":[]},{"level":2,"title":"What is Pathfinding?","slug":"what-is-pathfinding","link":"#what-is-pathfinding","children":[]},{"level":2,"title":"TL;DR","slug":"tl-dr","link":"#tl-dr","children":[]},{"level":2,"title":"Demo","slug":"demo","link":"#demo","children":[]}],"relativePath":"articles/cocos-creator/pathfinding-2d/index.md","lastUpdated":1674247530000}'),r={name:"articles/cocos-creator/pathfinding-2d/index.md"},h=n('<p><img src="'+o+'" alt="Pathfinding 2D in Cocos Creator"></p><h1 id="pathfinding-2d-in-cocos-creator" tabindex="-1">Pathfinding 2D in Cocos Creator <a class="header-anchor" href="#pathfinding-2d-in-cocos-creator" aria-hidden="true">#</a></h1><h3 id="pathfinding-is-a-common-feature-in-games-in-this-tutorial-we-will-show-you-how-to-implement-a-pathfinding-system-in-cocos-creator-to-move-a-swarm-of-enemies-toward-the-player" tabindex="-1">Pathfinding is a common feature in games. In this tutorial, we will show you how to implement a pathfinding system in Cocos Creator to move a swarm of enemies toward the player <a class="header-anchor" href="#pathfinding-is-a-common-feature-in-games-in-this-tutorial-we-will-show-you-how-to-implement-a-pathfinding-system-in-cocos-creator-to-move-a-swarm-of-enemies-toward-the-player" aria-hidden="true">#</a></h3><h2 id="what-is-pathfinding" tabindex="-1">What is Pathfinding? <a class="header-anchor" href="#what-is-pathfinding" aria-hidden="true">#</a></h2><p>Pathfinding is a common feature in games. It is used to find a path between two points in a game world. The pathfinding system is used to make the game characters move from one point to another. It is also used to make the game characters avoid obstacles and other characters. It is used in many games, such as strategy games, role-playing games, and action games. In this tutorial, we will show you how to implement a pathfinding system in Cocos Creator. We will use the A* algorithm (one of the fastest) to find the shortest path between two points and avoid obstacles. In this picture, you can see the pathfinding system in action. The green square is the starting point (the enemy). The red square is the destination point (the player). There are obstacles like walls or buildings. The yellow line is the path found by the pathfinding system. The enemy character will follow this path to reach the player.</p><p><img src="'+s+'" alt="A* Algorithm"></p><p>We will use <a href="https://github.com/qiao/PathFinding.js" target="_blank" rel="noreferrer">Pathfinding.js</a> to implement the pathfinding system. Pathfinding.js is a JavaScript library that implements the A* algorithm (and many others). It is very easy to use and well-documented.</p><h2 id="tl-dr" tabindex="-1">TL;DR <a class="header-anchor" href="#tl-dr" aria-hidden="true">#</a></h2><p>You can find all the code in this <a href="https://github.com/theRenard/cocos-creator-2d-pathfind" target="_blank" rel="noreferrer">repository</a></p><h2 id="demo" tabindex="-1">Demo <a class="header-anchor" href="#demo" aria-hidden="true">#</a></h2><p>You can use the arrow keys to move.</p>',11),d=e("div",{class:"game-iframe"},[e("iframe",{src:"/games/path-finding/index.html",title:"pathfinding",frameborder:"0",style:{"aspect-ratio":"1 / 1"}})],-1),l=[h,d];function m(c,p,f,g,w,u){return i(),a("div",null,l)}const b=t(r,[["render",m]]);export{_ as __pageData,b as default};
