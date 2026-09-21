(function(){
  var hdr=document.querySelector('.hdr');
  function onScroll(){hdr.classList.toggle('solid',window.scrollY>40)}
  window.addEventListener('scroll',onScroll,{passive:true});onScroll();

  var btn=document.querySelector('.menu'),nav=document.getElementById('nav');
  function closeMenu(){nav.classList.remove('open');hdr.classList.remove('menu-open');btn.setAttribute('aria-expanded','false');btn.textContent='Menu'}
  btn.addEventListener('click',function(){
    var open=nav.classList.toggle('open');
    hdr.classList.toggle('menu-open',open);
    btn.setAttribute('aria-expanded',open?'true':'false');
    btn.textContent=open?'Close':'Menu';
  });
  nav.addEventListener('click',function(e){if(e.target.closest('a'))closeMenu()});
  document.addEventListener('keydown',function(e){if(e.key==='Escape')closeMenu()});

  document.querySelectorAll('.creditLogo img').forEach(function(im){
    function fb(){var s=document.createElement('span');s.className='credit-txt';s.textContent=im.alt;im.replaceWith(s)}
    if(im.complete&&im.naturalWidth===0)fb();else im.addEventListener('error',fb,{once:true});
  });

  var rail=document.querySelector('.rail'),prev=document.getElementById('prev'),next=document.getElementById('next');
  var reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function step(){var c=rail.querySelector('.card');return (c.getBoundingClientRect().width+20)*2}
  function upd(){prev.disabled=rail.scrollLeft<4;next.disabled=rail.scrollLeft+rail.clientWidth>=rail.scrollWidth-4}
  prev.addEventListener('click',function(){rail.scrollBy({left:-step(),behavior:reduce?'auto':'smooth'})});
  next.addEventListener('click',function(){rail.scrollBy({left:step(),behavior:reduce?'auto':'smooth'})});
  rail.addEventListener('scroll',upd,{passive:true});window.addEventListener('resize',upd);upd();
})();
