const tabs = Array.from(document.querySelectorAll('button.tab'));
const frame = document.getElementById('chart-frame');

function setActive(i) {
  tabs.forEach((b, idx) => b.classList.toggle('active', idx === i));
  const url = tabs[i].dataset.url;
  frame.src = url;
  history.replaceState(null, '', `#${i+1}`);
}

tabs.forEach((btn, i) => btn.addEventListener('click', () => setActive(i)));

// Deep-link support via hash (#1 .. #10)
const hash = location.hash.replace('#','');
const initial = Math.min(Math.max(parseInt(hash || '1', 10), 1), tabs.length) - 1;
setActive(isNaN(initial) ? 0 : initial);