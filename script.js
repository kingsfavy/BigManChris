// Mobile Menu Toggle logic
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const mobileLinks = document.querySelectorAll('.mobile-link');
const spans = hamburger.querySelectorAll('span');

function toggleMenu() {
  const isActive = mobileMenu.classList.toggle('active');
  spans[0].style.transform = isActive ? 'rotate(45deg) translate(5px, 6px)' : 'none';
  spans[1].style.opacity = isActive ? '0' : '1';
  spans[2].style.transform = isActive ? 'rotate(-45deg) translate(5px, -6px)' : 'none';
}

hamburger.onclick = toggleMenu;

mobileLinks.forEach(link => {
  link.onclick = () => {
    if (mobileMenu.classList.contains('active')) toggleMenu();
  };
});

// Scroll Effects (Back to Top + Dynamic Header)
const btt = document.getElementById('backToTop');
const header = document.getElementById('dynamicHeader');
const nav = document.getElementById('mainNav');

window.onscroll = function() {
  let scrollPos = window.scrollY;

  if (scrollPos > 300) {
    btt.classList.add('show');
  } else {
    btt.classList.remove('show');
  }

  if (scrollPos > 50) {
    nav.style.background = 'none';
     nav.style.backdropFilter = 'blur(12px)';
  } else {
    nav.style.background = 'rgba(15, 23, 42, 0.8)';
  }


  header.style.backgroundPosition = `center ${scrollPos * 0.5}px`;
  header.style.filter = `hue-rotate(${Math.min(scrollPos / 20, 45)}deg)`;
};

btt.onclick = () => {
  window.scrollTo({top: 0, behavior: 'smooth'});
};

// Typing animation
const text="Social Media Manager • Web3 Gaming Thinker • Community Educator";
const typingEl=document.getElementById("typing");
let i=0;typingEl.classList.add("typing");
function typeEffect(){
  if(i<text.length){
    typingEl.innerHTML+=text.charAt(i);
    i++;setTimeout(typeEffect,50);
  } else typingEl.classList.remove("typing");
}
typeEffect();

// Popup logic with animation
const popup=document.getElementById('contactPopup');

document.querySelectorAll('.open-popup').forEach(btn=>{
  btn.onclick=(e)=>{
    e.preventDefault();
    popup.style.display='flex';
    popup.classList.add('show');
  }
});

function closePopup(){
  popup.classList.remove('show');
  setTimeout(()=>popup.style.display='none',400);
}

document.getElementById('closePopup').onclick=closePopup;
popup.onclick=e=>{if(e.target===popup)closePopup()};


// Lightbox logic
const lightbox=document.getElementById('lightbox');
const lightboxImg=document.getElementById('lightboxImg');
document.querySelectorAll('.gallery img').forEach(img=>{
  img.onclick=()=>{
    lightbox.style.display='flex';
    lightboxImg.src=img.src;
  }
});
lightbox.onclick=()=>lightbox.style.display='none';
