(() => {
  const body=document.body;
  const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
  const toggle=document.querySelector('.nav-toggle');
  const nav=document.querySelector('.primary-nav');
  if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');}));}
  const sequence=[...document.querySelectorAll('.sequence-step')];
  const scenarios=[...document.querySelectorAll('.scenario')];
  const panels=[...document.querySelectorAll('.scenario-panel')];
  const status=document.getElementById('status-copy'), core=document.getElementById('core-state'), detail=document.getElementById('core-detail'), caption=document.getElementById('interlock-caption');
  const stateCopy={run:['RUN / clauses locked','RELEASED','Evidence complete. Owners named.','The interlock opens into production only when ownership, release evidence, live signals, and intervention authority are explicit.'],observe:['OBSERVE / live signals','OBSERVING','Technical and business signals linked.','Observation joins model health to workflow adoption, outcome, cost, and trust.'],hold:['HOLD / owner action','CONTAINED','Named authority chooses the next safe action.','A threshold breach becomes a decision path: tune, retrain, rollback, fallback, pause, or accept a bounded exception.'],recover:['RECOVER / evidence renewed','RECOVERING','Technical and business evidence rechecked.','Return to service requires renewed evidence and a learning record that changes the system.']};
  function setState(state){body.dataset.systemState=state;sequence.forEach(b=>b.classList.toggle('active',b.dataset.sequence===state));const c=stateCopy[state]||stateCopy.run;if(status)status.textContent=c[0];if(core)core.textContent=c[1];if(detail)detail.textContent=c[2];if(caption)caption.textContent=c[3];}
  sequence.forEach(b=>b.addEventListener('click',()=>setState(b.dataset.sequence)));
  let timer;function start(){if(reduced.matches||sequence.length===0)return;let i=0;timer=setInterval(()=>{i=(i+1)%sequence.length;setState(sequence[i].dataset.sequence)},4200)}function stop(){if(timer)clearInterval(timer)}
  scenarios.forEach((btn,i)=>{btn.addEventListener('click',()=>{scenarios.forEach(b=>{b.classList.remove('active');b.setAttribute('aria-selected','false');b.tabIndex=-1});panels.forEach(p=>{p.classList.remove('active');p.hidden=true});btn.classList.add('active');btn.setAttribute('aria-selected','true');btn.tabIndex=0;const p=document.getElementById(btn.getAttribute('aria-controls'));if(p){p.hidden=false;p.classList.add('active')}setState(btn.dataset.system);stop();});btn.addEventListener('keydown',e=>{let n=null;if(e.key==='ArrowRight'||e.key==='ArrowDown')n=(i+1)%scenarios.length;if(e.key==='ArrowLeft'||e.key==='ArrowUp')n=(i-1+scenarios.length)%scenarios.length;if(e.key==='Home')n=0;if(e.key==='End')n=scenarios.length-1;if(n!==null){e.preventDefault();scenarios[n].focus();scenarios[n].click();}})});
  reduced.addEventListener?.('change',e=>{stop();if(!e.matches)start();});setState('run');start();
})();
