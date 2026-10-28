// Mobile menu
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileNav = document.getElementById('mobileNav');

if (mobileMenuBtn && mobileNav) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('open');
  });

  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('open');
    });
  });
}

// Search tabs
document.querySelectorAll('.search-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.search-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
  });
});

// Category cards → prefill form
document.querySelectorAll('.category-card').forEach(card => {
  card.addEventListener('click', (e) => {
    const service = card.dataset.service;
    const formSelect = document.getElementById('formService');
    if (formSelect && service) {
      formSelect.value = service;
    }
  });
});

// Search button → scroll to form + prefill
const searchBtn = document.getElementById('searchBtn');
const serviceSelect = document.getElementById('serviceSelect');

if (searchBtn) {
  searchBtn.addEventListener('click', () => {
    const formSelect = document.getElementById('formService');
    if (formSelect && serviceSelect) {
      formSelect.value = serviceSelect.value;
    }
    document.getElementById('request')?.scrollIntoView({ behavior: 'smooth' });
  });
}

// Form submit
const requestForm = document.getElementById('requestForm');
const successOverlay = document.getElementById('successOverlay');
const closeSuccess = document.getElementById('closeSuccess');

if (requestForm) {
  requestForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Simple validation already handled by HTML required
    // In real app: send to backend / Telegram / email
    
    successOverlay?.classList.add('show');
    requestForm.reset();
  });
}

if (closeSuccess) {
  closeSuccess.addEventListener('click', () => {
    successOverlay?.classList.remove('show');
  });
}

// Close overlay on backdrop click
if (successOverlay) {
  successOverlay.addEventListener('click', (e) => {
    if (e.target === successOverlay) {
      successOverlay.classList.remove('show');
    }
  });
}

// Language switch (visual only for demo)
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
