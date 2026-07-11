(() => {
  const body = document.body;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.primary-nav');
  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    }));
  }

  const sequenceCopy = {
    run: ['RUN / clauses locked','RELEASED','Evidence complete. Owners named.','The interlock only opens into production when ownership, release evidence, live signals, and intervention authority are all explicit.'],
    observe: ['OBSERVE / outcome check','MONITORED','Technical and business signals compared.','Observation is not passive telemetry: model behavior, workflow use, business outcome, cost, and overrides are read together.'],
    hold: ['HOLD / owner action','PAUSED','Boundary crossed. Authority invoked.','A breached boundary changes state, names the accountable owner, and activates the agreed tune, retrain, rollback, fallback, or escalation path.'],
    recover: ['RECOVER / evidence renewed','VALIDATING','Technical and business health re-tested.','Recovery is complete only when renewed evidence shows the service is healthy and the business outcome is back inside the agreed contract.']
  };
  const statusCopy = document.getElementById('status-copy');
  const coreState = document.getElementById('core-state');
  const coreDetail = document.getElementById('core-detail');
  const caption = document.getElementById('interlock-caption');
  const sequenceButtons = [...document.querySelectorAll('.sequence-step')];
  let autoTimer;
  const applySystemState = (state, userInitiated = false) => {
    if (!sequenceCopy[state]) return;
    body.dataset.systemState = state;
    const [status, core, detail, text] = sequenceCopy[state];
    if (statusCopy) statusCopy.textContent = status;
    if (coreState) coreState.textContent = core;
    if (coreDetail) coreDetail.textContent = detail;
    if (caption) caption.textContent = text;
    sequenceButtons.forEach(button => button.classList.toggle('active', button.dataset.sequence === state));
    if (userInitiated) stopAutoCycle();
  };
  sequenceButtons.forEach(button => button.addEventListener('click', () => applySystemState(button.dataset.sequence, true)));

  const startAutoCycle = () => {
    if (reducedMotion.matches || !sequenceButtons.length) return;
    const states = ['run','observe','hold','recover'];
    let index = 0;
    autoTimer = window.setInterval(() => { index = (index + 1) % states.length; applySystemState(states[index]); }, 4200);
  };
  const stopAutoCycle = () => { if (autoTimer) window.clearInterval(autoTimer); autoTimer = undefined; };
  reducedMotion.addEventListener?.('change', event => { stopAutoCycle(); applySystemState('run'); if (!event.matches) startAutoCycle(); });

  const tabs = [...document.querySelectorAll('[role="tab"].scenario')];
  const panels = [...document.querySelectorAll('[role="tabpanel"]')];
  const activateTab = (tab, moveFocus = false) => {
    tabs.forEach(item => { item.classList.remove('active'); item.setAttribute('aria-selected','false'); item.tabIndex = -1; });
    panels.forEach(panel => { panel.classList.remove('active'); panel.hidden = true; });
    tab.classList.add('active'); tab.setAttribute('aria-selected','true'); tab.tabIndex = 0;
    const panel = document.getElementById(`panel-${tab.dataset.target}`);
    if (panel) { panel.hidden = false; panel.classList.add('active'); }
    applySystemState(tab.dataset.system || 'observe', true);
    if (moveFocus) tab.focus();
  };
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => activateTab(tab));
    tab.addEventListener('keydown', event => {
      let next = index;
      if (event.key === 'ArrowDown' || event.key === 'ArrowRight') next = (index + 1) % tabs.length;
      else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
      else if (event.key === 'Home') next = 0;
      else if (event.key === 'End') next = tabs.length - 1;
      else return;
      event.preventDefault(); activateTab(tabs[next], true);
    });
  });

  applySystemState('run');
  startAutoCycle();
})();
