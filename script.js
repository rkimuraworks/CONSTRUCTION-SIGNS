const progress=document.getElementById('progress');const rotateSign=document.getElementById('rotateSign');const heroObject=document.querySelector('.hero-object');let ticking=false;function update(){const max=document.documentElement.scrollHeight-innerHeight;const y=scrollY;progress.style.width=(max>0?y/max*100:0)+'%';const stage=document.querySelector('.stage');const rect=stage.getBoundingClientRect();const p=Math.max(0,Math.min(1,(innerHeight-rect.top)/(innerHeight+rect.height)));rotateSign.style.transform=`perspective(950px) rotateY(${(p-.5)*100}deg) rotateZ(${(p-.5)*25}deg) translateY(${(p-.5)*-45}px)`;heroObject.style.rotate=Math.min(30,y*.04)+'deg';ticking=false}addEventListener('scroll',()=>{if(!ticking){requestAnimationFrame(update);ticking=true}},{passive:true});addEventListener('resize',update);update();const observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}})},{threshold:.25});observer.observe(document.querySelector('.pictos'));

// Native scroll-driven camera: no dependencies or build step required.
const parallaxSection=document.getElementById('parallax');
const depthBack=document.getElementById('depthBack');
const depthMiddle=document.getElementById('depthMiddle');
const depthFront=document.getElementById('depthFront');
const parallaxMeter=document.getElementById('parallaxMeter');
const parallaxPercent=document.getElementById('parallaxPercent');
const reduceMotion=matchMedia('(prefers-reduced-motion: reduce)');
let cameraTicking=false;
function updateCamera(){
 const rect=parallaxSection.getBoundingClientRect();
 const distance=Math.max(1,rect.height-innerHeight);
 const t=Math.max(0,Math.min(1,-rect.top/distance));
 const q=t-.5;
 if(!reduceMotion.matches){
  depthBack.style.transform=`translate3d(${q*-65}px,${q*-30}px,0) scale(1.035)`;
  depthMiddle.style.transform=`translate3d(${q*-210}px,${q*-100}px,0) rotate(${q*-7}deg) scale(1.06)`;
  depthFront.style.transform=`translate3d(${q*360}px,${q*175}px,0) rotate(${q*6}deg) scale(1.07)`;
 }
 parallaxMeter.style.width=(t*100).toFixed(1)+'%';
 parallaxPercent.textContent=String(Math.round(t*100)).padStart(2,'0')+'%';
 cameraTicking=false;
}
function scheduleCamera(){if(!cameraTicking){cameraTicking=true;requestAnimationFrame(updateCamera)}}
addEventListener('scroll',scheduleCamera,{passive:true});
addEventListener('resize',scheduleCamera);
reduceMotion.addEventListener?.('change',scheduleCamera);
updateCamera();
