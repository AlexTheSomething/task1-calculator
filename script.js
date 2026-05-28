function safeNum(v, fallback=0){
  const n = Number(v);
  return Number.isFinite(n) ? n : fallback;
}

function compute(revenue, avgOrder, leadRate, prospectRate){
  const customers = Math.ceil(revenue / Math.max(1, avgOrder));
  const leads = Math.ceil(customers * 100 / Math.max(1, leadRate));
  const prospects = Math.ceil(leads * 100 / Math.max(1, prospectRate));
  return {customers, leads, prospects};
}

function updateUI(values){
  document.getElementById('customers').textContent = values.customers;
  document.getElementById('leads').textContent = values.leads;
  document.getElementById('prospects').textContent = values.prospects;
  const pct = Math.max(1, Math.min(100, Math.round(values.customers*100/Math.max(1,values.prospects))));
  document.getElementById('barCust').style.width = pct + '%';
}

function readAndCompute(){
  const revenue = safeNum(document.getElementById('revenue').value, 0);
  const avgOrder = safeNum(document.getElementById('avgOrder').value, 1);
  const leadRate = safeNum(document.getElementById('leadRate').value, 20);
  const prospectRate = safeNum(document.getElementById('prospectRate').value, 40);
  const out = compute(revenue, avgOrder, leadRate, prospectRate);
  updateUI(out);
}

document.addEventListener('DOMContentLoaded', ()=>{
  const leadRate = document.getElementById('leadRate');
  const prospectRate = document.getElementById('prospectRate');
  const leadRateOut = document.getElementById('leadRateOut');
  const prospectRateOut = document.getElementById('prospectRateOut');

  const updateOuts = ()=>{
    leadRateOut.value = leadRate.value + '%';
    prospectRateOut.value = prospectRate.value + '%';
  };

  leadRate.addEventListener('input', ()=>{ updateOuts(); readAndCompute(); });
  prospectRate.addEventListener('input', ()=>{ updateOuts(); readAndCompute(); });

  document.getElementById('calcBtn').addEventListener('click', e=>{ e.preventDefault(); readAndCompute(); });
  document.getElementById('resetBtn').addEventListener('click', e=>{
    e.preventDefault();
    document.getElementById('revenue').value = 10000;
    document.getElementById('avgOrder').value = 1000;
    document.getElementById('leadRate').value = 20;
    document.getElementById('prospectRate').value = 40;
    readAndCompute();
  });

  updateOuts();
  readAndCompute();
});
