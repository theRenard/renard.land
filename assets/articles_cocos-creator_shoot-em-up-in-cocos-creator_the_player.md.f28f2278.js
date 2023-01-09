import{_ as e,o as t,c as o,a}from"./app.3e7883db.js";const s="/assets/player.585492ff.png",n="/assets/collision_matrix.98b7017c.png",g=JSON.parse(`{"title":"Cocos Creator","titleTemplate":"Shoot 'em up in Cocos Creator the Player Node","description":"Shoot 'em up in Cocos Creator the Player Node","frontmatter":{"title":"Cocos Creator","titleTemplate":"Shoot 'em up in Cocos Creator the Player Node","description":"Shoot 'em up in Cocos Creator the Player Node","Author":"Daniele Tabanella","head":[["meta",{"name":"keywords","content":"cocos creator"}]],"Updated":"2022-12-16T00:00:00.000Z","lastUpdated":false},"headers":[{"level":2,"title":"The Player Children Nodes","slug":"the-player-children-nodes","link":"#the-player-children-nodes","children":[]},{"level":2,"title":"The Components","slug":"the-components","link":"#the-components","children":[]},{"level":2,"title":"The built-in Components","slug":"the-built-in-components","link":"#the-built-in-components","children":[]},{"level":2,"title":"The Player component","slug":"the-player-component","link":"#the-player-component","children":[]},{"level":2,"title":"The PlayerInput component","slug":"the-playerinput-component","link":"#the-playerinput-component","children":[]},{"level":2,"title":"The Health component","slug":"the-health-component","link":"#the-health-component","children":[]},{"level":2,"title":"The DamageDealer component","slug":"the-damagedealer-component","link":"#the-damagedealer-component","children":[]},{"level":2,"title":"The Shooter component","slug":"the-shooter-component","link":"#the-shooter-component","children":[]},{"level":2,"title":"The FireHomingMissile component","slug":"the-firehomingmissile-component","link":"#the-firehomingmissile-component","children":[]}],"relativePath":"articles/cocos-creator/shoot-em-up-in-cocos-creator/the_player.md","lastUpdated":1673296743000}`),r={name:"articles/cocos-creator/shoot-em-up-in-cocos-creator/the_player.md"},l=a('<h1 id="🚀-the-player" tabindex="-1">🚀 The Player <a class="header-anchor" href="#🚀-the-player" aria-hidden="true">#</a></h1><p><img src="'+s+`" alt="The player"></p><h2 id="the-player-children-nodes" tabindex="-1">The <code>Player</code> Children Nodes <a class="header-anchor" href="#the-player-children-nodes" aria-hidden="true">#</a></h2><p>The Player has 2 children nodes, the <code>Engine</code>, which is a particle system, and the <code>Ship</code> which is a sprite. I&#39;ve found that in many tutorials the player node contains the sprite component, but I think it&#39;s better to use a sprite as a child of a node, so you can add other components (sprite or particles) to the player node.</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">Player</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ Engine</span></span>
<span class="line"><span style="color:#A6ACCD;">└─ Ship</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>The particle system in Cocos Creator is not bad, but it&#39;s not as good as the one in Unity. I&#39;ve made a small investiment and bought the <a href="https://www.71squared.com/particledesigner" target="_blank" rel="noreferrer">ParticleDesigner</a> app, it&#39;s really good and it&#39;s worth the money.</p></div><h2 id="the-components" tabindex="-1">The Components <a class="header-anchor" href="#the-components" aria-hidden="true">#</a></h2><p>The Player Node has 9 components, 3 of them are built-in components, the others are custom scripts. We will see them one by one.</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">Player</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ cc.UITransform</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ cc.CircleCollider2D</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ cc.RigidBody2D</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ Player.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ PlayerInput.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ Health.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ DamageDealer.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ Shooter.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">└─ FireHomingMissile.ts</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="the-built-in-components" tabindex="-1">The built-in Components <a class="header-anchor" href="#the-built-in-components" aria-hidden="true">#</a></h2><p><code>cc.UITransform</code> is a built-in component that allows you to position the node in the UI. It&#39;s not necessary for the player, but it&#39;s useful to see the position of the node in the editor. <code>cc.CircleCollider2D</code> is a built-in component that allows you to add a circle collider to the node. A circle in this case is better to handle the shape of the ship. <code>cc.RigidBody2D</code> is a built-in component that allows you to add a rigid body to the node, as there&#39;s no physic involved in this game we use it only to detect collisions and to assign the node to the matrix collision group.</p><h2 id="the-player-component" tabindex="-1">The <code>Player</code> component <a class="header-anchor" href="#the-player-component" aria-hidden="true">#</a></h2><p>The <a href="https://github.com/theRenard/cocos-creator-laser-defender/blob/master/assets/Scripts/Player.ts" target="_blank" rel="noreferrer"><code>Player.ts</code></a> script handles the player position, it respect the boundaries of the parent node with the <code>math.clamp</code> utility. the <code>move</code> method is called in the <code>update</code> method and it take into account both <code>deltatime</code> (<a href="https://drewcampbell92.medium.com/understanding-delta-time-b53bf4781a03" target="_blank" rel="noreferrer">why?</a>) and <code>movespeed</code> variables. It exposes also the <code>onMove</code> and <code>onFire</code> methods that are called by the <code>PlayerInput.ts</code> script.</p><h2 id="the-playerinput-component" tabindex="-1">The <code>PlayerInput</code> component <a class="header-anchor" href="#the-playerinput-component" aria-hidden="true">#</a></h2><p>The <a href="https://github.com/theRenard/cocos-creator-laser-defender/blob/master/assets/Scripts/PlayerInput.ts" target="_blank" rel="noreferrer"><code>PlayerInput.ts</code></a> script handles the player input, it&#39;s a very simple script that uses the <code>input.on</code> method for events <code>KEY_DOWN</code>, <code>KEY_DOWN</code> and <code>GAMEPAD_INPUT</code>. When the event occurs it calls the <code>onMove</code> or <code>onFire</code> methods of the <code>Player.ts</code> class. It handles also the deadzone of the gamepad to avoid drift.</p><h2 id="the-health-component" tabindex="-1">The <code>Health</code> component <a class="header-anchor" href="#the-health-component" aria-hidden="true">#</a></h2><p>The <a href="https://github.com/theRenard/cocos-creator-laser-defender/blob/master/assets/Scripts/Health.ts" target="_blank" rel="noreferrer"><code>Health.ts</code></a> script handles the health of the player or of the enemies. It handles multiple things, let me explain them one by one:</p><ul><li>It uses the <code>boxCollider</code> of the node to know when the player is hit by something (a projectile or an enemy for the player), when this event occours it calls the <code>onBeginContact</code> method to get the <code>damageDealer</code> (<code>DamageDealer.ts</code>) component from the other collider and subtracts the damage value of the latter from the health property. If the health is less than half it plays the smoke effect, if is less or 0 it destroys the node with <code>die</code> method.</li><li>It handles the smoking, hit and explosion particle effect, it instantiates them (they are prefabs) and plays them when needed.</li><li>It handles the player health property with some methods, like <code>getHealth</code>, <code>setHealth</code>, <code>fillHealth</code>.</li><li>It calls the camera shake method when the player is hit.</li><li>It adds the score when the node has the <code>Score</code> component (the enemies have it).</li></ul><p>It is very important to set the collision matrix to avoid the player to collide with his own projectiles, and the same for the enemies. You can set it in Cocos Creator Preferences collision matrix.</p><p><img src="`+n+'" alt="The Collision Matrix"></p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>For some reasons the <code>destroy</code> method is asynchronous and it can be called on an already destroyed node, even if you check if is valid it can fail. The soultion is to use the next loop with a <code>setTimeout</code> set to 0 to avoid this problem.</p></div><h2 id="the-damagedealer-component" tabindex="-1">The <code>DamageDealer</code> component <a class="header-anchor" href="#the-damagedealer-component" aria-hidden="true">#</a></h2><p>The <a href="https://github.com/theRenard/cocos-creator-laser-defender/blob/master/assets/Scripts/DamageDealer.ts" target="_blank" rel="noreferrer"><code>DamageDealer.ts</code></a> script handles the damage of the player or of the enemies. It&#39;s a very simple script that exposes the <code>damage</code> property with <code>getDamage</code> method. It has also the <code>hit</code> method that is called for the bullets (they don&#39;t have any health and just get destroyed after collision).</p><h2 id="the-shooter-component" tabindex="-1">The <code>Shooter</code> component <a class="header-anchor" href="#the-shooter-component" aria-hidden="true">#</a></h2><p>The <a href="https://github.com/theRenard/cocos-creator-laser-defender/blob/master/assets/Scripts/Shooter.ts" target="_blank" rel="noreferrer"><code>Shooter.ts</code></a> script, like the <code>Health.ts</code> script is used by the player and the enemies. It handles the shooting, it instantiates a <code>Projectile</code> prefab. Every enemmy has a different shooting pattern, so the <code>Shooter.ts</code> script is used to handle the shooting of the player and the enemies. An enemy can have a different firing rate and different kinds of projectiles.</p><h2 id="the-firehomingmissile-component" tabindex="-1">The <code>FireHomingMissile</code> component <a class="header-anchor" href="#the-firehomingmissile-component" aria-hidden="true">#</a></h2><p>The <a href="https://github.com/theRenard/cocos-creator-laser-defender/blob/master/assets/Scripts/FireHomingMissile.ts" target="_blank" rel="noreferrer"><code>FireHomingMissile.ts</code></a> handles the homing missile, it just instantiate the missile prefab, all the missile logic is in the prefab itself. Code is not mine, I&#39;ve just followed this <a href="https://www.youtube.com/watch?v=0v_H3oOR0aU&amp;t=396s" target="_blank" rel="noreferrer">tutorial</a>.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>You can find a lot of useful scripts in the Unity communities, you can often rewrite Unity code for Cocos Creator, they have very similar APIs.</p></div>',28),i=[l];function c(h,d,p,m,y,u){return t(),o("div",null,i)}const b=e(r,[["render",c]]);export{g as __pageData,b as default};
