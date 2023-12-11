(()=>{"use strict";var s={844:(s,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0});const i=t(553);t(812);const c=()=>{(0,i.isLimitPassed)(i.circles)&&i.canvas.removeEventListener("click",i.handleClick),requestAnimationFrame(c),i.ctx&&i.ctx.clearRect(0,0,i.canvas.width,i.canvas.height),i.circles.forEach((s=>{s.update(i.circles)}))};c()},812:(s,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0});const i=t(553);i.canvas.addEventListener("click",i.handleClick),i.destinies.forEach((({element:s,click:e})=>{null==s||s.addEventListener("click",e)}))},179:(s,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.createCircle=void 0;const i=t(553),c=t(553);class a{constructor({x:s,y:e,radius:t,color:a,mass:n}){this.x=s,this.y=e,this.radius=t,this.color=a,this.velocityY=0,this.gravity=c.gravity,this.energy=i.canvas.height-e,this.mass=n}draw(){const{x:s,y:e,radius:t,color:c}=this;i.ctx&&(i.ctx.beginPath(),i.ctx.arc(s,e,t,0,2*Math.PI),i.ctx.fillStyle=c,i.ctx.fill(),i.ctx.closePath())}update(s){this.velocityY<0&&(this.energy-=c.gravity),this.velocityY+=this.gravity,this.y+=this.velocityY,this.y+this.radius>=i.canvas.height&&(this.energy-=this.mass*this.velocityY,this.velocityY*=-1/this.mass-.5,this.y=i.canvas.height-this.radius,this.y-=10,this.energy<=0&&(this.velocityY=0,this.y=i.canvas.height-this.radius)),this.handleCollisions(s),this.draw()}handleCollisions(s){s.forEach((s=>{if(s!==this){const e=s.x-this.x,t=s.y-this.y,i=Math.sqrt(e*e+t*t);if(i<this.radius+s.radius){this.energy-=this.velocityY*(50*this.mass/100),console.log(this.energy);const c=e/i,a=t/i,n=this.radius+s.radius-i,r=n*c*.5,o=n*a*.5;this.x-=r,this.y-=o,s.x+=r,s.y+=o;const l=(s.velocityY-this.velocityY)*c+(s.velocityY-this.velocityY)*a;if(l<0){const e=2*l/(this.mass+this.mass);this.velocityY+=e*this.mass*a,s.velocityY-=e*this.mass*a}}}}))}}e.createCircle=function({x:s,y:e,radius:t,color:i,mass:c}){return new a({x:s,y:e,radius:t,color:i,mass:c})}},553:(s,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.destinies=e.rubber=e.air=e.iron=e.isLimitPassed=e.circles=e.mass=e.gravity=e.handleClick=e.ctx=e.canvas=void 0;const i=t(179);e.canvas=document.getElementById("myCanvas"),e.ctx=e.canvas.getContext("2d"),e.handleClick=({clientX:s,clientY:t})=>{const c=s-e.canvas.offsetLeft,a=t-e.canvas.offsetTop,n=`rgb(${255*Math.random()},${255*Math.random()},${255*Math.random()})`,r=function(s){switch(document.getElementsByClassName("chosen")[0].id){case"iron":default:return 7;case"rubber":return 3}}();e.circles.push((0,i.createCircle)({x:c,y:a,radius:20,color:n,mass:r}))},e.gravity=.5,e.mass=7,e.circles=[],e.isLimitPassed=s=>s.length>=15,e.iron=document.getElementById("iron"),e.air=document.getElementById("air"),e.rubber=document.getElementById("rubber");const c=function(){var s,e,t,i;const c=document.getElementsByClassName("chosen");console.log({elements:c}),null===(e=null===(s=c[0])||void 0===s?void 0:s.classList)||void 0===e||e.remove("chosen"),null===(i=null===(t=null==this?void 0:this.element)||void 0===t?void 0:t.classList)||void 0===i||i.add("chosen")};e.destinies=[{element:e.iron,click:()=>{}},{element:e.air,click:()=>{}},{element:e.rubber,click:()=>{}}],e.destinies=e.destinies.map((s=>Object.assign(Object.assign({},s),{click:c.bind(s)})))}},e={};!function t(i){var c=e[i];if(void 0!==c)return c.exports;var a=e[i]={exports:{}};return s[i](a,a.exports,t),a.exports}(844)})();