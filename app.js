/* ==========================================================================
   De Loor Studio — gedrag
   Geen framework, geen dependencies. Alles degradeert netjes zonder JS.
   ========================================================================== */

(function () {
  "use strict";

  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ------------------------------------------------------------------------
     1. Taal (NL / EN)
     ------------------------------------------------------------------------ */

  var EN = {
    "a11y.skip": "Skip to content",

    "nav.work": "Work",
    "nav.services": "Services",
    "nav.approach": "Approach",
    "nav.studio": "Studio",
    "cta.primary": "Book a shoot",
    "cta.secondary": "See the work",

    "hero.eyebrow": "Film · Photography · Aerial — the Netherlands &amp; the Alps",
    "hero.l1": "We film the",
    "hero.l2": "feeling of",
    "hero.l3": "arriving.",
    "hero.lede": "The place you built, finally seen the way you see it when nobody is watching. For resorts, chalets, glampings and tables worth feeling.",
    "hero.scroll": "Scroll",

    "tick.1": "Alpine resorts", "tick.2": "Luxury glamping", "tick.3": "Chalets",
    "tick.4": "Fine dining", "tick.5": "Brand film", "tick.6": "Aerial", "tick.7": "Photography",

    "man.eyebrow": "The studio",
    "man.h": "We don't film the building.<br />We film what it <em>does to someone</em>.",
    "man.p1": "High-end hospitality doesn't sell a room. It sells a feeling. So the imagery has to speak the same language as the stay itself — not like marketing about it.",
    "man.p2": "De Loor sounds like the Dutch for the door. That is the starting point: every film is a door someone opens onto a place they have never been.",
    "man.p3": "One studio for film, photography and aerial. No crew of five, no production machine — one pair of eyes capturing the whole place in a single tone.",

    "val.1.h": "Sensory",
    "val.1.p": "Light, texture, condensation on a glass, a towel over a chair. Human scale felt in the frame — even with nobody in it.",
    "val.2.h": "Precision",
    "val.2.p": "Drone shots with a reason. Slow, deliberate reveals instead of circling until something pretty appears.",
    "val.3.h": "Calm with tension",
    "val.3.p": "Quiet, warm, filmically graded. No oversaturated phone look. Every shot moves, but never without cause.",

    "work.eyebrow": "Selected work",
    "work.h": "Places worth<br /><em>feeling</em>.",
    "work.lede": "From a Tyrolean sky pool to an Italian breakfast table in Eindhoven. Always the same question: what does a guest feel the moment they walk in?",
    "filter.all": "All", "filter.alpine": "Alpine resorts", "filter.glamping": "Glamping",
    "filter.dining": "Fine dining", "filter.stays": "Stays",
    "tag.alpine": "Alpine resort", "tag.glamping": "Luxury glamping",
    "tag.dining": "Fine dining", "tag.chalet": "Chalets", "tag.stay": "Stay",

    "p1.title": "Das Kaiserblick",
    "p1.where": "Hotel &amp; Sky Pool — Ellmau, Tyrol (AT)",
    "p2.title": "Ferienparadies Natterer See",
    "p2.where": "Lakeside lodges — Natters near Innsbruck (AT)",
    "p3.title": "Le Sorelline",
    "p3.where": "Italian table — Eindhoven (NL)",
    "p4.title": "Skyview Chalets",
    "p4.where": "Chalets — Dolomites (IT)",
    "p5.title": "Camping Olympia",
    "p5.where": "Alpine camping — Dobbiaco, South Tyrol (IT)",
    "p6.title": "Stella Suites",
    "p6.where": "Suites — Goirle (NL)",

    "svc.film": "Brand film", "svc.photo": "Photography",
    "svc.aerial": "Aerial", "svc.reels": "Verticals",

    "work.note": "Part of the work is made on commission and appears first on the venue's own channels. Ask for recent material that isn't online yet.",
    "work.ask": "Request the full selection",

    "reel.eyebrow": "In motion",
    "reel.h": "What ends up<br />on your feed.",
    "reel.lede": "Every production delivers verticals alongside the horizontal film — 9:16, ready to post, with nothing left to do.",
    "reel.c1": "Ellmau, Tyrol · Vertical",
    "reel.c2": "Natters, Tyrol · Vertical",
    "reel.c3": "Eindhoven · Vertical",

    "srv.eyebrow": "What you keep",
    "srv.h": "Not hours of camera time.<br />Imagery that <em>lasts a year</em>.",
    "srv.lede": "Everything is captured in one visit and graded in the same tone. You get full usage rights for web, social and campaigns — no per-placement fees.",
    "srv.1.h": "Cinematic brand film",
    "srv.1.p": "The film at the top of your homepage that conveys in three seconds what a brochure can't in three pages. One story, from arrival to evening light.",
    "srv.1.out": "Homepage · Booking site · Press",
    "srv.2.h": "Hospitality photography",
    "srv.2.p": "An image library that feeds you all season: suites, table, wellness, detail. Warmly graded, consistent, ready for web and print.",
    "srv.2.out": "Website · OTAs · Print",
    "srv.3.h": "Aerial &amp; drone",
    "srv.3.p": "The perspective that shows in one movement why your place sits where it sits. Slow reveals, delivered horizontal and vertical.",
    "srv.3.out": "Delivered within 48 hours",
    "srv.4.h": "Verticals for social",
    "srv.4.p": "9:16 clips from the same shoot day, cut on rhythm. You post them, the venue gets tagged, and the imagery stays yours.",
    "srv.4.out": "Reels · Stories · TikTok",
    "srv.note": "Based in the Netherlands, with fixed travel windows in the Alps. If your property is in Tyrol, South Tyrol or Bavaria, there is probably already a date when I'm nearby.",

    "app.eyebrow": "Approach",
    "app.h": "One day on location.<br />Without your guests<br />noticing.",
    "app.lede": "No crew occupying the terrace and no day spent waiting. The preparation happens beforehand, so on location there is only filming left to do.",
    "app.1.h": "The conversation",
    "app.1.p": "Twenty minutes, usually by phone. Who stays with you, and what should they feel before they book?",
    "app.2.h": "Scout &amp; shotlist",
    "app.2.p": "I map beforehand where the light falls and at what hour. Flight zones, route and sequence are set before I get in the car.",
    "app.3.h": "The shoot day",
    "app.3.p": "One person, every discipline. Filmed around the quiet hours, so the terrace stays full and nobody has to move.",
    "app.4.h": "Delivery",
    "app.4.p": "Graded masters, horizontal and vertical, plus stills for web and print. Full usage rights, in one download link.",
    "app.cap": "Das Kaiserblick, Ellmau — suite at last light",

    "ab.eyebrow": "The studio",
    "ab.h": "One pair of eyes,<br />three disciplines.",
    "ab.p1": "De Loor Studio is <strong>Rik Lammerts</strong> — filmmaker, photographer and drone pilot, working out of Oosterhout. Film, photo and aerial come from the same hand, so everything you get back sits in the same tone.",
    "ab.p2": "Most studios do one of the three well. You notice it later: a beautiful film next to photographs that don't match it. With a single maker, that problem doesn't exist.",
    "ab.p3": "The work moves between the Netherlands and the Alps. What I don't do: budget hotels, standard corporate video and event coverage. Not out of arrogance — they simply ask for a different eye than this one.",
    "ab.f1.t": "Working area", "ab.f1.d": "The Netherlands &amp; the Alps",
    "ab.f2.t": "Disciplines", "ab.f2.d": "Film · Photo · Aerial",
    "ab.f3.t": "Rights", "ab.f3.d": "Full, unlimited",

    "ct.eyebrow": "Contact",
    "ct.h": "Open the door to<br />the place you <em>built</em>.",
    "ct.lede": "Tell me briefly what kind of place it is and when the light there is at its best. I usually reply the same day, with a suggestion for a moment that fits.",
    "ct.mail": "Email", "ct.phone": "WhatsApp", "ct.social": "Instagram",
    "ct.base": "Based", "ct.base.d": "Oosterhout, NL — travelling in the Alps",
    "ct.f.name": "Name", "ct.f.email": "Email",
    "ct.f.place": "Location &amp; type of stay",
    "ct.f.place.ph": "E.g. alpine resort, Tyrol",
    "ct.f.msg": "What is it about?",
    "ct.f.msg.ph": "A few sentences are enough.",
    "ct.f.send": "Send",
    "ct.f.note": "Prefer something quicker? Send a WhatsApp — that usually gets read first.",
    "ct.ok": "Thank you — your message has arrived. You'll hear from me shortly.",
    "ct.err": "Something went wrong. Mail hello@deloor.studio directly and it will reach me.",
    "ct.sending": "Sending…",

    "ft.mark": "De Loor Studio<br /><span>Film &amp; photography for exceptional stays</span>",
    "ft.nav": "Navigation", "ft.reach": "Reach me",
    "ft.kvk": "CoC 89193423 · VAT NL004706414B16",

    /* Case-studypagina's */
    "case.back": "All work",
    "case.next": "Next project",
    "cs.role": "Role", "cs.place": "Location", "cs.type": "Type", "cs.year": "Year",
    "cs.delivered": "Delivered",

    "k.h": "Where the mountain<br />comes <em>indoors</em>.",
    "k.lede": "A four-star superior hotel on the slope above Ellmau, with a sky pool aimed straight at the Wilder Kaiser.",
    "k.type": "Alpine resort", "k.place": "Ellmau, Tyrol (AT)",
    "k.role": "Film · Photography · Aerial", "k.year": "2026",
    "k.p1": "The Wilder Kaiser is the reason guests come. But a mountain in a photograph is only a shape — it becomes something else when you see it from a lounger, through a window, over the edge of a pool. So the brief was simple: never film the mountain on its own.",
    "k.p2": "We shot around the quiet hours. Early morning for the pool deck before the first guests, golden hour from the air, and the evening for the interiors — when the lamps take over and the rooms go warm.",
    "k.p3": "Delivered as a horizontal brand film, a set of verticals for the hotel's own channels, and a stills library covering suites, spa, table and grounds. Full usage rights, no per-placement fees.",
    "k.pull": "A mountain in a photograph is a shape.<br />Seen <em>from a lounger</em>, it's a reason to book.",
    "k.g1": "Sky pool at midday — Wilder Kaiser",
    "k.g2": "Suite at last light",
    "k.g3": "The terrace before the first guests",
    "k.g4": "Table set against the massif",
    "k.g5": "Lounge, afternoon",
    "k.g6": "The cellar",
    "k.g7": "The bar after dinner",
    "k.g8": "Golden hour, from the air",
    "k.d1": "Horizontal brand film",
    "k.d2": "Verticals for the hotel's own channels",
    "k.d3": "Stills library: suites, spa, table, grounds",
    "k.d4": "Full usage rights",

    "n.h": "Lodges at the<br />edge of the <em>water</em>.",
    "n.lede": "A lakeside resort just outside Innsbruck, where the lodges are built so close to the water that the reflection does half the work.",
    "n.type": "Luxury glamping", "n.place": "Natters near Innsbruck (AT)",
    "n.role": "Film · Aerial · Verticals", "n.year": "2026",
    "n.p1": "The lake is the whole idea here. From the ground you see a shore; from the air you see why anyone would drive into the mountains to sleep on it. That gap between the two views is the film.",
    "n.p2": "The aerial work stays slow and deliberate — a lift over the water at dusk, a reveal along the lodges rather than a flight across them. Inside, the light is left as it is: warm wood, a single lamp, nothing staged.",
    "n.p3": "Delivered as verticals for the resort's own channels alongside the aerial masters, all under full usage rights.",
    "n.pull": "From the ground it's a shore.<br />From the air, it's <em>a reason to drive</em>.",
    "n.g1": "The lake at dusk, from the air",
    "n.g2": "Lodge interior — warm wood, single lamp",
    "n.g3": "Lodges along the shoreline",
    "n.g4": "Detail, evening",
    "n.d1": "Graded aerial masters",
    "n.d2": "Verticals for the resort's own channels",
    "n.d3": "Aerial stills",
    "n.d4": "Full usage rights",

    "s.h": "An Italian table<br />in the <em>Netherlands</em>.",
    "s.lede": "A lunchroom in Eindhoven that cooks and looks Italian, and needed imagery that tastes of it too.",
    "s.type": "Fine dining", "s.place": "Eindhoven (NL)",
    "s.role": "Film · Photography · Verticals", "s.year": "2026",
    "s.p1": "Food photography goes wrong when it starts looking like a menu. The plates here are good enough that they don't need help — what they need is the room around them: the afternoon light through the front window, the noise of a full table, the moment before anyone picks up a fork.",
    "s.p2": "Shot across service, without staging. The camera works around the kitchen rather than the other way around, so what ends up in frame is the place as guests actually meet it.",
    "s.p3": "Delivered as a brand film, verticals for daily posting, and a stills library for menu, web and press.",
    "s.pull": "The plates don't need help.<br />They need <em>the room around them</em>.",
    "s.g1": "The room, early afternoon",
    "s.g2": "Table, mid-service",
    "s.g3": "Breakfast, close",
    "s.g4": "The front, from the street",
    "s.g5": "After the main course",
    "s.d1": "Brand film",
    "s.d2": "Verticals for daily posting",
    "s.d3": "Stills library for menu, web and press",
    "s.d4": "Full usage rights"
  };

  var nodes = {
    text: Array.prototype.slice.call(document.querySelectorAll("[data-i18n]")),
    html: Array.prototype.slice.call(document.querySelectorAll("[data-i18n-html]")),
    ph: Array.prototype.slice.call(document.querySelectorAll("[data-i18n-ph]"))
  };

  /* Bewaar de Nederlandse bron zoals die in de HTML staat. */
  var NL = {};
  nodes.text.forEach(function (el) { NL[el.getAttribute("data-i18n")] = el.innerHTML; });
  nodes.html.forEach(function (el) { NL[el.getAttribute("data-i18n-html")] = el.innerHTML; });
  nodes.ph.forEach(function (el) { NL[el.getAttribute("data-i18n-ph")] = el.getAttribute("placeholder") || ""; });

  var docTitles = {
    nl: document.title,
    en: document.documentElement.getAttribute("data-title-en") || document.title
  };

  function applyLang(lang) {
    var dict = lang === "en" ? EN : NL;

    function put(el, key, asAttr) {
      var val = dict[key];
      if (val === undefined) val = NL[key];
      if (val === undefined) return;
      if (asAttr) el.setAttribute("placeholder", stripTags(val));
      else el.innerHTML = val;
    }

    nodes.text.forEach(function (el) { put(el, el.getAttribute("data-i18n"), false); });
    nodes.html.forEach(function (el) { put(el, el.getAttribute("data-i18n-html"), false); });
    nodes.ph.forEach(function (el) { put(el, el.getAttribute("data-i18n-ph"), true); });

    document.documentElement.lang = lang;
    document.title = docTitles[lang] || docTitles.nl;

    document.querySelectorAll("[data-lang]").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.getAttribute("data-lang") === lang));
    });

    try { localStorage.setItem("dl-lang", lang); } catch (e) { /* private mode */ }
  }

  function stripTags(s) {
    var d = document.createElement("div");
    d.innerHTML = s;
    return d.textContent || "";
  }

  var stored = "nl";
  try { stored = localStorage.getItem("dl-lang") || "nl"; } catch (e) { /* ignore */ }
  if (stored === "en") applyLang("en");

  document.querySelectorAll("[data-lang]").forEach(function (btn) {
    btn.addEventListener("click", function () { applyLang(btn.getAttribute("data-lang")); });
  });

  /* ------------------------------------------------------------------------
     2. Navigatie: verbergen bij scrollen omlaag, mobiel menu
     ------------------------------------------------------------------------ */

  var nav = document.getElementById("nav");
  var lastY = window.scrollY;
  var ticking = false;

  function onScroll() {
    var y = window.scrollY;
    if (nav) {
      nav.classList.toggle("is-solid", y > 60);
      var goingDown = y > lastY && y > 320;
      nav.classList.toggle("is-hidden", goingDown && !document.body.classList.contains("menu-open"));
    }
    lastY = y;
    ticking = false;
  }

  window.addEventListener("scroll", function () {
    if (!ticking) {
      ticking = true;
      window.requestAnimationFrame(onScroll);
    }
  }, { passive: true });

  var toggle = document.getElementById("nav-toggle");
  var menu = document.getElementById("menu");

  function setMenu(open) {
    if (!menu || !toggle) return;
    document.body.classList.toggle("menu-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Menu sluiten" : "Menu openen");
    document.body.style.overflow = open ? "hidden" : "";
    if (open) {
      menu.hidden = false;
    } else {
      window.setTimeout(function () {
        if (!document.body.classList.contains("menu-open")) menu.hidden = true;
      }, 600);
    }
  }

  if (toggle) {
    toggle.addEventListener("click", function () {
      setMenu(!document.body.classList.contains("menu-open"));
    });
  }
  if (menu) {
    menu.addEventListener("click", function (e) {
      if (e.target.closest("a")) setMenu(false);
    });
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && document.body.classList.contains("menu-open")) setMenu(false);
  });

  /* ------------------------------------------------------------------------
     3. Reveals
     ------------------------------------------------------------------------ */

  var revealables = document.querySelectorAll("[data-reveal], [data-mask]");

  if (reduced || !("IntersectionObserver" in window)) {
    revealables.forEach(function (el) { el.classList.add("is-in"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-in");
        io.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -12% 0px", threshold: 0.08 });

    revealables.forEach(function (el) { io.observe(el); });
  }

  /* ------------------------------------------------------------------------
     4. Werkfilter
     ------------------------------------------------------------------------ */

  var filters = document.querySelectorAll(".filter");
  var grid = document.getElementById("work-grid");
  var status = document.getElementById("filter-status");

  if (filters.length && grid) {
    var projects = Array.prototype.slice.call(grid.querySelectorAll(".project"));

    filters.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var cat = btn.getAttribute("data-filter");

        filters.forEach(function (b) {
          b.setAttribute("aria-pressed", String(b === btn));
        });

        var shown = 0;
        projects.forEach(function (p) {
          // Een project mag in meerdere segmenten vallen: een alpine glamping
          // hoort zowel onder "alpine" als onder "glamping".
          var cats = (p.getAttribute("data-cat") || "").split(/\s+/);
          var match = cat === "all" || cats.indexOf(cat) !== -1;
          p.hidden = !match;
          if (match) shown++;
        });

        if (status) {
          status.textContent = shown + (document.documentElement.lang === "en"
            ? " projects shown"
            : " projecten getoond");
        }
      });
    });
  }

  /* ------------------------------------------------------------------------
     5. Video: pas laden en spelen als hij in beeld komt
     ------------------------------------------------------------------------ */

  var vids = document.querySelectorAll("video[data-autoplay]");

  /* Bij voorkeur voor minder beweging spelen de loops niet vanzelf. Dan moeten
     ze wél zelf te starten zijn — anders blijft er alleen een still over. */
  if (reduced) {
    vids.forEach(function (v) {
      v.controls = true;
      v.preload = "metadata";
    });
  }

  if (vids.length && !reduced && "IntersectionObserver" in window) {
    var vio = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var v = entry.target;
        if (entry.isIntersecting) {
          if (v.preload === "none") {
            v.preload = "auto";
            v.load();
          }
          var pl = v.play();
          if (pl && pl.catch) {
            // Weigert de browser autoplay, geef de bezoeker dan bediening.
            pl.catch(function () { v.controls = true; });
          }
        } else if (!v.paused) {
          v.pause();
        }
      });
    }, { threshold: 0.35 });

    vids.forEach(function (v) { vio.observe(v); });
  }

  /* ------------------------------------------------------------------------
     6. Contactformulier
     ------------------------------------------------------------------------ */

  var form = document.getElementById("contact-form");
  var formStatus = document.getElementById("form-status");

  if (form && formStatus) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      var en = document.documentElement.lang === "en";
      var btn = form.querySelector('button[type="submit"]');

      formStatus.removeAttribute("data-state");
      formStatus.textContent = en ? EN["ct.sending"] : "Versturen…";
      if (btn) btn.disabled = true;

      fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" }
      })
        .then(function (res) {
          if (!res.ok) throw new Error("bad response");
          form.reset();
          formStatus.setAttribute("data-state", "ok");
          formStatus.textContent = en
            ? EN["ct.ok"]
            : "Dank je — je bericht is binnen. Je hoort snel van me.";
        })
        .catch(function () {
          formStatus.setAttribute("data-state", "error");
          formStatus.textContent = en
            ? EN["ct.err"]
            : "Er ging iets mis. Mail hello@deloor.studio direct, dan komt het zeker aan.";
        })
        .then(function () {
          if (btn) btn.disabled = false;
        });
    });
  }

  /* ------------------------------------------------------------------------
     7. Kleinigheden
     ------------------------------------------------------------------------ */

  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
})();
