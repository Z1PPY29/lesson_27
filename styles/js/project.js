// ================= HERO SLIDER =================
// Basic fade slider with arrows and auto play
(function(){
  const slides = document.querySelectorAll('.slide');
  const prevBtn = document.querySelector('.hero-prev');
  const nextBtn = document.querySelector('.hero-next');
  let idx = 0;
  let autoplay = true;
  let timer = null;
  function show(i){
    slides.forEach(s => s.classList.remove('active'));
    slides[i].classList.add('active');
  }
  function next(){
    idx = (idx + 1) % slides.length;
    show(idx);
  }
  function prev(){
    idx = (idx - 1 + slides.length) % slides.length;
    show(idx);
  }
  if(nextBtn) nextBtn.addEventListener('click', ()=>{ next(); resetTimer(); });
  if(prevBtn) prevBtn.addEventListener('click', ()=>{ prev(); resetTimer(); });
  function startTimer(){ timer = setInterval(next, 5000); }
  function resetTimer(){ if(timer) clearInterval(timer); startTimer(); }
  // start
  show(idx);
  startTimer();
})();


// ================= SEARCH BOX small UX =================
(function(){
  const input = document.getElementById('hero-search-input');
  const btn = document.getElementById('hero-search-btn');
  if(btn && input){
    btn.addEventListener('click', ()=>{
      const q = input.value.trim();
      if(!q) {
        input.style.border = '2px solid #f25';
        setTimeout(()=> input.style.border = 'none', 900);
        return;
      }
      alert("Qidiruv: " + q + "\n(dummy demo)");
    });
    input.addEventListener('keydown', function(e){
      if(e.key === 'Enter') btn.click();
    });
  }
})();


// ================= COUNTER ANIMATION (on scroll) =================
(function(){
  const counters = document.querySelectorAll('.stat-num');
  let started = false;

  function animateCounters(){
    if(started) return;
    const rect = document.querySelector('.stats-section').getBoundingClientRect();
    if(rect.top < window.innerHeight - 100){
      started = true;
      counters.forEach(c => {
        const target = +c.getAttribute('data-target');
        let count = 0;
        const step = Math.ceil(target / 120);
        const interval = setInterval(()=>{
          count += step;
          if(count >= target){
            c.textContent = target;
            clearInterval(interval);
          } else {
            c.textContent = count;
          }
        }, 10);
      });
    }
  }

  window.addEventListener('scroll', animateCounters);
  // trigger in case already in view
  animateCounters();
})();


// ================= Accessibility tiny helpers =================
// make arrows keyboard accessible
(function(){
  const arrows = document.querySelectorAll('.hero-prev, .hero-next');
  arrows.forEach(a => a.setAttribute('tabindex', '0'));
})();
