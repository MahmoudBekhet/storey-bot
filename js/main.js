window.onload = function() {
  if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
    window.scrollTo(0, 0);
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const elements = document.querySelectorAll('.animated-content, .animated-content-left, .animated-content-right');
  let lastScrollY = window.scrollY;

  const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDirectionDown = currentScrollY > lastScrollY;

      elements.forEach(element => {
          const rect = element.getBoundingClientRect();
          const elementHeight = rect.height - 50;
          const elementTop = rect.top;
          const elementBottom = rect.bottom;
          const windowHeight = window.innerHeight;

          if (scrollDirectionDown) {
              if (elementTop + elementHeight <= windowHeight && elementBottom >= 0) {
                  element.classList.add('element-visible');
              }
          } else {
              if (elementTop > windowHeight) {
                  element.classList.remove('element-visible');
              }
          }
      });

      lastScrollY = currentScrollY;
  };

  const checkInitialVisibility = () => {
    elements.forEach(element => {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top;
          const windowHeight = window.innerHeight;

          if (elementTop <= windowHeight) {
              element.classList.add('element-visible');
          }
      });
  };

  window.addEventListener('scroll', handleScroll);

  checkInitialVisibility();
  handleScroll();
});

document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.toggle-btn');
  const contents = document.querySelectorAll('.content');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const targetId = button.getAttribute('data-target');
      button.parentNode.classList.add('item-active')
      contents.forEach(content => {
        if (content.id === targetId) {
          content.classList.add('active');
        } else {
          content.classList.remove('active');
        }
      });
      buttons.forEach(btn => {
        if (btn === button) {
          btn.parentNode.classList.add('item-active');
        } else {
          btn.parentNode.classList.remove('item-active');
        }
      });
    });
  });
});

var typed = new Typed(".typed",{
  strings:["freely.", 'safely.', 'easily.'],
  typeSpeed:100,
  BackSpeed:60,
  loop:true
}
)

function inviteNow() {
  window.open('https://www.google.com', '_blank');
}

function supportTeam() {
  window.open('https://www.google.com', '_blank');
}

function discord() {
  window.open('https://www.google.com', '_blank');
}

function youtube() {
  window.open('https://www.google.com', '_blank');
}

function termsOfUse() {
  window.location.href = 'termsofuse.html';
}

function privacyPolicy() {
  window.location.href = 'privacypolicy.html';
}

function refundPolicy() {
  window.location.href = 'refundpolicy.html';
}

function feauters() {
  document.getElementById('feauters').scrollIntoView({ behavior: 'smooth' });
}