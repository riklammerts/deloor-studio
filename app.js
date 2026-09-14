/* ============================================================
   De Loor Studio — gedrag
   Geen framework. Werkt zonder JavaScript als fallback.
   ============================================================ */

(function () {
  'use strict';

  /* ── Nav: achtergrond bij scroll ── */
  var nav = document.getElementById('nav');
  var navScrolled = false;

  function updateNav() {
    var s = window.scrollY > 50;
    if (s !== navScrolled) {
      navScrolled = s;
      nav.classList.toggle('is-scrolled', s);
    }
  }
  if (nav) {
    window.addEventListener('scroll', updateNav, { passive: true });
    updateNav();
  }

  /* ── Mobiel menu ── */
  var toggle = document.getElementById('nav-toggle');
  var menu   = document.getElementById('menu');

  function setMenu(open) {
    if (!menu || !toggle) return;
    document.body.classList.toggle('menu-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
    menu.hidden = !open;
  }

  if (toggle) {
    toggle.addEventListener('click', function () {
      var isOpen = toggle.getAttribute('aria-expanded') === 'true';
      setMenu(!isOpen);
    });
  }
  if (menu) {
    menu.addEventListener('click', function (e) {
      if (e.target.closest('a')) setMenu(false);
    });
  }
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && menu && !menu.hidden) setMenu(false);
  });

  /* ── Reveals bij scrollen ── */
  var revealEls = document.querySelectorAll('[data-reveal]');

  if ('IntersectionObserver' in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.06 });

    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-in'); });
  }

  /* ── Video: automatisch afspelen bij zicht ── */
  var vids    = document.querySelectorAll('video[data-autoplay]');
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduced) {
    vids.forEach(function (v) {
      v.controls = true;
      v.preload  = 'metadata';
    });
  } else if (vids.length && 'IntersectionObserver' in window) {
    var vio = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var v = entry.target;
        if (entry.isIntersecting) {
          if (v.preload === 'none') {
            v.preload = 'auto';
            v.load();
          }
          var p = v.play();
          if (p && p.catch) p.catch(function () { v.controls = true; });
        } else if (!v.paused) {
          v.pause();
        }
      });
    }, { threshold: 0.3 });

    vids.forEach(function (v) { vio.observe(v); });
  }

  /* ── Contactformulier ── */
  var form   = document.getElementById('contact-form');
  var status = document.getElementById('form-status');

  if (form && status) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var btn = form.querySelector('button[type="submit"]');
      status.removeAttribute('data-state');
      status.textContent = 'Versturen…';
      if (btn) btn.disabled = true;

      fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      })
        .then(function (res) {
          if (!res.ok) throw new Error('bad response');
          form.reset();
          status.setAttribute('data-state', 'ok');
          status.textContent = 'Dank u — wij reageren binnen 24 uur.';
        })
        .catch(function () {
          status.setAttribute('data-state', 'error');
          status.textContent = 'Er ging iets mis. Mail ons via hello@deloor.studio.';
        })
        .finally(function () {
          if (btn) btn.disabled = false;
        });
    });
  }

  /* ── Huidig jaar ── */
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });

})();
