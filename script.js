// Havfly Advert Interactive JS Controller - Verified Meta Agency Accounts

document.addEventListener('DOMContentLoaded', () => {
  // 1. Interactive Director Testimonial Switcher with 5-Second Auto Rotation
  const directorData = [
    {
      name: "Ritesh Goel",
      title: "Director",
      quote: "“We were facing serious issues in scaling our campaigns due to continuous payment failures. Managing 2-3 ad accounts for just one business had become a nightmare. After switching to Havfly Advert, everything ran smoothly with just one verified account — no errors, no switching, just seamless scaling.”",
      kicker: "ONE VERIFIED ACCOUNT, <span class=\"text-red\">ZERO PAYMENT FAILURES.</span>",
      photo: "assets/ritesh-goel.jpg"
    },
    {
      name: "Narender Bansal",
      title: "Director",
      quote: "“We were running a daily ad budget of Rs 2–2.5 lakh, but constant payment issues and account restrictions were stalling our campaigns. We had to juggle 2-3 ad accounts just to keep things moving. Then we found Havfly Advert. Now we manage everything from one account without stress.”",
      kicker: "SCALING RS 2-2.5 LAKH DAILY, <span class=\"text-red\">WITHOUT STRESS.</span>",
      photo: "assets/narender-bansal.jfif"
    },
    {
      name: "Parveen Singhal",
      title: "Director",
      quote: "“We wanted to scale across India to promote our brand, but account issues held us back. With Havfly Advert’s verified account, we ran high-budget campaigns smoothly and got great results.”",
      kicker: "PAN-INDIA SCALE, <span class=\"text-red\">HIGH-BUDGET SUCCESS.</span>",
      photo: "assets/parveen-singhal.jpg"
    },
    {
      name: "Ankit Singal Bansal",
      title: "Director",
      quote: "“We were constantly losing momentum during high-demand sales events due to sudden policy flags and spend restrictions. Switching to Havfly Advert gave us complete stability, instant ad approvals, and unlimited scaling without interruptions.”",
      kicker: "SEAMLESS SCALING, <span class=\"text-red\">ZERO AD DISRUPTIONS.</span>",
      photo: "assets/ankit-singal-bansal.jpeg"
    },
    {
      name: "Sahil Goyal",
      title: "Director",
      quote: "“Managing multiple accounts with card decline issues was a huge headache. Havfly Advert provided a rock-solid agency account with instant INR top-ups, 100% GST invoicing, and 24/7 dedicated support. Our campaigns have been scaling smoothly ever since.”",
      kicker: "UNINTERRUPTED CAMPAIGNS, <span class=\"text-red\">INSTANT TOP-UPS & GST.</span>",
      photo: "assets/sahil-goyal.jpeg"
    }
  ];

  const directorKickerEl = document.getElementById('endorse-kicker');
  const directorQuoteEl = document.getElementById('endorse-quote');
  const directorSigEl = document.getElementById('endorse-sig');
  const directorTitleEl = document.getElementById('endorse-title');
  const directorPhotoEl = document.getElementById('endorse-photo');
  const directorTabs = document.querySelectorAll('.director-tab-btn');

  let currentDirectorIndex = 0;
  let directorAutoTimer = null;

  function switchDirector(index) {
    if (!directorData[index]) return;
    currentDirectorIndex = index;
    const data = directorData[index];

    // Smooth subtle transition
    if (directorQuoteEl) {
      directorQuoteEl.style.opacity = '0';
      setTimeout(() => {
        directorQuoteEl.textContent = data.quote;
        directorQuoteEl.style.opacity = '1';
      }, 150);
    }

    if (directorKickerEl) directorKickerEl.innerHTML = data.kicker;
    if (directorSigEl) directorSigEl.textContent = '— ' + data.name + ', ' + data.title;
    if (directorTitleEl) directorTitleEl.textContent = data.title;

    if (directorPhotoEl) {
      directorPhotoEl.style.opacity = '0.3';
      setTimeout(() => {
        directorPhotoEl.src = data.photo;
        directorPhotoEl.alt = data.name;
        directorPhotoEl.style.opacity = '1';
      }, 150);
    }

    directorTabs.forEach((t, i) => {
      if (i === index) {
        t.classList.add('active');
      } else {
        t.classList.remove('active');
      }
    });
  }

  function startDirectorAutoTimer() {
    if (directorAutoTimer) clearInterval(directorAutoTimer);
    directorAutoTimer = setInterval(() => {
      const nextIndex = (currentDirectorIndex + 1) % directorData.length;
      switchDirector(nextIndex);
    }, 5000);
  }

  if (directorTabs.length > 0 && directorQuoteEl) {
    directorTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const index = parseInt(tab.getAttribute('data-index'), 10);
        if (!isNaN(index) && directorData[index]) {
          switchDirector(index);
          // Restart 5-sec timer so user gets full 5 seconds after clicking
          startDirectorAutoTimer();
        }
      });
    });

    // Start auto rotation on page load
    startDirectorAutoTimer();
  }

  // 2. Interactive FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Close other items
        faqItems.forEach(otherItem => {
          otherItem.classList.remove('active');
          const icon = otherItem.querySelector('.faq-toggle-icon i');
          if (icon) icon.className = 'fa-solid fa-plus';
        });

        // Toggle clicked item
        if (!isActive) {
          item.classList.add('active');
          const icon = item.querySelector('.faq-toggle-icon i');
          if (icon) icon.className = 'fa-solid fa-minus';
        }
      });
    }
  });

  // Ensure first FAQ is active by default
  if (faqItems.length > 0 && !document.querySelector('.faq-item.active')) {
    faqItems[0].classList.add('active');
    const firstIcon = faqItems[0].querySelector('.faq-toggle-icon i');
    if (firstIcon) firstIcon.className = 'fa-solid fa-minus';
  }

  // 3. Smooth Scrolling for Internal Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          const headerOffset = 70;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // 4. Success Modal Handler
  const modalOverlay = document.getElementById('success-modal');
  const closeModalBtn = document.getElementById('close-modal-btn');

  if (closeModalBtn && modalOverlay) {
    closeModalBtn.addEventListener('click', () => {
      modalOverlay.classList.remove('active');
    });

    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        modalOverlay.classList.remove('active');
      }
    });
  }
});
