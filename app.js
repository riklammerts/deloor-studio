/* =========================================================
   DE LOOR STUDIO — shared behaviour + i18n
   Default language: Dutch (nl). Toggle persists in localStorage.
   ========================================================= */
(function(){
  "use strict";

  /* ------------------------------------------------------ */
  /*  TRANSLATION DICTIONARY                                  */
  /* ------------------------------------------------------ */
  var I18N = {
    nl: {
      /* nav (shared) */
      "nav.work":"Werk", "nav.studio":"Studio", "nav.process":"Proces",
      "nav.contact":"Contact", "nav.back":"Terug naar overzicht",

      /* home meta */
      "doc.home":"De Loor Studio — Cinematografische studio voor luxe hospitality",

      /* hero */
      "hero.eyebrow":"Cinematografische studio — luxe hospitality",
      "hero.l1":"Wij creëren", "hero.l2":"verlangen.",
      "hero.foot":"Films en fotografie voor de meest doordachte hotels, resorts en restaurants ter wereld. Wij verkopen geen kamers of gerechten — wij laten mensen ernaar verlangen.",
      "hero.scroll":"Scroll",

      /* marquee */
      "mq.1":"Boutiquehotels","mq.2":"Michelin-tafels","mq.3":"Resorts","mq.4":"Fine dining","mq.5":"Luchtbeelden","mq.6":"Merkfilms",

      /* philosophy */
      "phil.eyebrow":"De studio",
      "phil.statement":"Wij leggen ervaringen<br>niet vast. Wij<br><span class='ital'>creëren</span> ze.",
      "phil.num":"— 01 / Filosofie",
      "phil.p1":"De Loor Studio is een creatieve studio op het snijvlak van cinema, architectuur en smaak. Elk beeld wordt gecomponeerd als een stilleven en geritmeerd als een film — licht, textuur en beweging zorgvuldig geordend tot een plek onweerstaanbaar wordt.",
      "phil.p2":"Wij werken met een select aantal locaties per jaar. De samenwerking is intiem, het resultaat onmiskenbaar.",

      /* work */
      "work.eyebrow":"Geselecteerd werk",
      "work.h":"Hoofdstukken,<br>geen portfolio's.",
      "work.meta":"Een handvol recente samenwerkingen binnen hospitality, gastronomie en plek.",
      "work.view":"Bekijk<br>verhaal",
      "c1.tag":"Merkfilm","c1.title":"De uren<br>van licht","c1.where":"Boutiquehotel — Amalfikust, IT",
      "c2.tag":"Gastronomie","c2.title":"Een tafel<br>in vuur","c2.where":"Michelinrestaurant — Kopenhagen, DK",
      "c3.tag":"Resort","c3.title":"Waar het<br>land eindigt","c3.where":"Resort aan de klif — Cycladen, GR",
      "svc.film":"Cinematische film","svc.drone":"Drone","svc.stills":"Fotografie","svc.food":"Foodfilm",
      "svc.photo":"Fotografie","svc.social":"Social","svc.campaign":"Campagne","svc.aerial":"Luchtbeelden","svc.basicfilm":"Film",

      /* services */
      "serv.eyebrow":"Diensten",
      "serv.h":"Eén studio.<br>Elk beeld.",
      "serv.meta":"Regie, productie en post — onder één dak, zodat het verhaal nooit breekt.",
      "serv.1":"Cinematische merkfilms","serv.1d":"Kenmerkende films die een locatie tot een gevoel maken.",
      "serv.2":"Food & gastronomie","serv.2d":"Stoom, licht en vakmanschap — het gerecht op zijn meest begeerlijk.",
      "serv.3":"Architectuur & interieur","serv.3d":"Ruimte, schaduw en materiaal, met eerbied vastgelegd.",
      "serv.4":"Lucht & drone","serv.4d":"FPV en cinematische luchtbeelden die het onmogelijke tonen.",
      "serv.5":"Campagnebeelden","serv.5d":"Heldbeelden die een heel campagneseizoen dragen.",
      "serv.6":"Social motion","serv.6d":"Short-form, gesneden uit dezelfde cinematische grade.",

      /* why */
      "why.h":"Hospitality<br>verdient <span class='ital'>cinema.</span>",
      "why.p":"Een groot hotel is choreografie — aankomst, licht, geur, het gewicht van een deur. Wij maken werk dat die intentie eert, zodat gasten de ervaring al voelen lang voordat ze arriveren.",

      /* drone */
      "drone.eyebrow":"Perspectief vanuit de lucht",
      "drone.h":"Van<br><span class='ital'>bovenaf.</span>",
      "drone.lede":"Vanaf de grond is een resort een gebouw. Vanuit de lucht wordt het landschap — hoe een zwembad een klif raakt, hoe een terras zich in de helling vouwt, het exacte moment dat de zee goud kleurt. Ons lucht- en FPV-werk toont schaal en drama die geen rondleiding ooit kan tonen.",
      "drone.k1":"Luchtopnames","drone.k2":"Cinematische vlucht","drone.k3":"Slow motion","drone.k4":"Gecertificeerde crew","drone.v4":"EU + wereldwijd",

      /* process */
      "proc.eyebrow":"Het proces",
      "proc.h":"Doordacht,<br>van begin tot beeld.",
      "proc.meta":"Vier bewegingen, van eerste gesprek tot eindgrade.",
      "proc.1":"Immersie","proc.1d":"Wij leven ons eerst in jouw wereld in — de rituelen, het licht, de gast. Regie begint met begrip, niet met apparatuur.",
      "proc.2":"Regie","proc.2d":"Een treatment, een sfeer, een beeldarchitectuur. Elk beeld is bepaald voordat er één wordt vastgelegd.",
      "proc.3":"Opname","proc.3d":"Een kleine, ervaren crew. Cinemaglas, luchtsystemen en een obsessie voor het juiste uur van de dag.",
      "proc.4":"Vakmanschap","proc.4d":"Montage, geluid en colour grading die tijdloos aanvoelen — werk dat veroudert als de locaties die het viert.",

      /* testimonial */
      "testi.eyebrow":"In hun woorden",
      "testi.quote":"“Zij begrepen onze locatie beter dan ons eigen merkteam. De film toonde het hotel niet — hij liet mensen er <span class='ital'>willen</span> zijn.”",
      "testi.by":"General Manager — vijfsterrenresort, Middellandse Zee",

      /* contact */
      "contact.eyebrow":"Selecte samenwerkingen · 2026",
      "contact.h":"Laten we<br><span class='ital'>verlangen</span> creëren.",
      "contact.intro":"Wij nemen elk jaar een klein aantal nieuwe locaties aan. Vertel ons over de jouwe — wij reageren persoonlijk binnen twee werkdagen.",
      "contact.or":"Of mail ons direct",
      "f.name":"Naam","f.name.ph":"Voor- en achternaam",
      "f.email":"E-mail","f.email.ph":"jij@locatie.com",
      "f.company":"Hotel / restaurant / merk","f.company.ph":"Naam van de locatie",
      "f.type":"Type locatie",
      "f.type.0":"Selecteer…","f.type.hotel":"Boutique- / luxehotel","f.type.resort":"Resort","f.type.restaurant":"Restaurant / Michelin","f.type.cafe":"Café / bar","f.type.brand":"Hospitality-merk","f.type.other":"Anders",
      "f.message":"Vertel ons over jullie locatie","f.message.ph":"Het project, de ambitie, de tijdlijn…",
      "f.submit":"Begin een gesprek",
      "f.sending":"Versturen…",
      "f.ok":"Dank je. Je bericht is verzonden — we reageren binnen twee werkdagen.",
      "f.err":"Er ging iets mis. Mail ons gerust direct op hello@deloor.studio.",

      /* footer */
      "foot.studio":"Studio","foot.connect":"Contact","foot.based":"Gevestigd",
      "foot.work":"Werk","foot.serv":"Diensten","foot.proc":"Proces","foot.aerial":"Lucht",
      "foot.based1":"Werkzaam wereldwijd","foot.based2":"Nederland",
      "foot.copy":"© 2026 De Loor Studio — Cinema voor hospitality",
      "foot.tag":"Verlangen, met intentie.",

      /* ---- case study shared ---- */
      "cs.intro.eyebrow":"De opdracht",
      "cs.f.client":"Klant","cs.f.services":"Diensten","cs.f.year":"Jaar","cs.f.location":"Locatie",
      "cs.next.eyebrow":"Volgende hoofdstuk","cs.next.go":"Bekijk de case",
      "cs.outcome.eyebrow":"Het resultaat",

      /* case 1 page */
      "c1.doc":"De uren van licht — De Loor Studio",
      "c1.cat":"Merkfilm · Boutiquehotel",
      "c1.h":"De uren<br>van <span class='ital'>licht</span>",
      "c1.loc":"Amalfikust, Italië — 2025",
      "c1.lead":"Een klifhotel dat leeft op het ritme van de zon. We bouwden een film rond <span class='ital'>één dag</span> — van het eerste licht op de zee tot de laatste kaars op het terras.",
      "c1.client":"Boutiquehotel, 18 suites","c1.services":"Cinematische film, fotografie, drone","c1.year":"2025","c1.location":"Amalfikust, IT",
      "c1.s1.eyebrow":"De aanpak","c1.s1.h":"Het licht als hoofdrol","c1.s1.p1":"De architectuur van het hotel is gebouwd om de zon te vangen. Onze regie volgde dezelfde logica: we filmden uitsluitend op de scharniermomenten van de dag — dageraad, het blauwe uur, het gouden uur — en lieten het gebouw zichzelf onthullen in plaats van het te verklaren.","c1.s1.p2":"Drie dagen op locatie, een kleine crew, cinemaglas en een drone die nooit harder werkte dan de plek zelf.",
      "c1.quote":"“We hadden een film over het hotel verwacht. We kregen een film over het <span class='ital'>gevoel</span> van aankomen.”",
      "c1.quote.by":"Eigenaar — Boutiquehotel, Amalfikust",
      "c1.s2.eyebrow":"Het detail","c1.s2.h":"Stilte, textuur, ritueel","c1.s2.p1":"Naast de hoofdfilm legden we een bibliotheek aan stillevens en korte verticale fragmenten vast — handen, linnen, espresso, de reflectie van het zwembad — bedoeld om een heel jaar aan social en campagne te dragen.","c1.s2.p2":"Alles in dezelfde colour grade, zodat elk kanaal als één wereld aanvoelt.",
      "c1.out.h":"De film werd de kern van de herlancering van het hotel — en de aanleiding voor een <span class='ital'>volgeboekt</span> eerste seizoen.",
      "c1.m1v":"+38%","c1.m1k":"directe boekingen via de site","c1.m2v":"4,2 mln","c1.m2k":"organische views in seizoen één","c1.m3v":"1 dag","c1.m3k":"verteld van dageraad tot kaarslicht",

      /* case 2 page */
      "c2.doc":"Een tafel in vuur — De Loor Studio",
      "c2.cat":"Gastronomie · Michelinrestaurant",
      "c2.h":"Een tafel<br>in <span class='ital'>vuur</span>",
      "c2.loc":"Kopenhagen, Denemarken — 2025",
      "c2.lead":"Een restaurant dat boven open vuur kookt. We maakten beeld dat je de <span class='ital'>hitte</span> laat voelen — stoom, sintels en het precieze moment dat een gerecht compleet wordt.",
      "c2.client":"Michelinrestaurant, één ster","c2.services":"Foodfilm, fotografie, social","c2.year":"2025","c2.location":"Kopenhagen, DK",
      "c2.s1.eyebrow":"De aanpak","c2.s1.h":"Koken als choreografie","c2.s1.p1":"We filmden de keuken als een podium. Hoge snelheid voor de vlam, macro voor de textuur, en een trage, observerende blik voor de handen van de chef. Geen styling die niet ook op het bord belandde.","c2.s1.p2":"Twee services lang draaiden we mee in de echte dienst — het ritme van het restaurant bepaalde de montage, niet andersom.",
      "c2.quote":"“Het ziet eruit zoals het smaakt. Dat is het hoogste compliment dat ik een <span class='ital'>camera</span> kan geven.”",
      "c2.quote.by":"Chef-eigenaar — Michelinrestaurant, Kopenhagen",
      "c2.s2.eyebrow":"Het detail","c2.s2.h":"Van vuur tot feed","c2.s2.p1":"Uit de hoofdfilm sneden we een serie verticale fragmenten van vijf tot tien seconden — elk opgebouwd rond één sensatie: de sis, de sintel, de eerste snede. Klaar voor een feed die honger maakt.","c2.s2.p2":"Een fotoset van twintig signature-gerechten completeerde de menu- en perskit.",
      "c2.out.h":"De campagne tilde de wachtlijst naar <span class='ital'>weken</span> en bracht de internationale pers naar de deur.",
      "c2.m1v":"3 wk","c2.m1k":"gemiddelde wachtlijst na lancering","c2.m2v":"+61%","c2.m2k":"engagement op social","c2.m3v":"12","c2.m3k":"internationale publicaties",

      /* case 3 page */
      "c3.doc":"Waar het land eindigt — De Loor Studio",
      "c3.cat":"Resort · Lucht & campagne",
      "c3.h":"Waar het<br>land <span class='ital'>eindigt</span>",
      "c3.loc":"Cycladen, Griekenland — 2024",
      "c3.lead":"Een resort op de rand van een klif, waar architectuur en zee in elkaar overlopen. We filmden vanuit de lucht om te tonen wat geen <span class='ital'>rondleiding</span> kan.",
      "c3.client":"Klifresort, 40 sleutels","c3.services":"Campagne, luchtbeelden, film","c3.year":"2024","c3.location":"Cycladen, GR",
      "c3.s1.eyebrow":"De aanpak","c3.s1.h":"Schaal die je kunt voelen","c3.s1.p1":"Vanaf de grond is het resort prachtig maar onleesbaar. Met cinematische drone en FPV onthulden we de geometrie — hoe de zwembaden de horizon citeren, hoe de trappen in de rots zijn gesneden, hoe het terras over de Egeïsche Zee zweeft.","c3.s1.p2":"Vluchtvensters van twintig minuten rond zonsopgang en zonsondergang, met een gecertificeerde crew en volledige vergunningen.",
      "c3.quote":"“Voor het eerst zagen onze gasten het resort zoals wij het altijd in ons hoofd hadden — <span class='ital'>oneindig.</span>”",
      "c3.quote.by":"Directie — Klifresort, Cycladen",
      "c3.s2.eyebrow":"Het detail","c3.s2.h":"Van horizon tot suite","c3.s2.p1":"De luchtbeelden vormden de ruggengraat, maar de campagne ademde pas echt door het contrast: het immense landschap naast de intieme details van een enkele suite bij zonsondergang.","c3.s2.p2":"Eén filmische hoofdfilm, drie korte cuts per platform en een beeldbank voor het hele seizoen.",
      "c3.out.h":"De campagne werd het visitekaartije van het resort — en de <span class='ital'>directe</span> aanleiding voor een vroeg uitverkocht hoogseizoen.",
      "c3.m1v":"Uitverkocht","c3.m1k":"hoogseizoen, drie maanden vooraf","c3.m2v":"+47%","c3.m2k":"directe aanvragen","c3.m3v":"4K","c3.m3k":"luchtopnames, gecertificeerde vlucht"
    },

    en: {
      "nav.work":"Work", "nav.studio":"Studio", "nav.process":"Process",
      "nav.contact":"Contact", "nav.back":"Back to all work",

      "doc.home":"De Loor Studio — Cinematic studio for luxury hospitality",

      "hero.eyebrow":"Cinematic Studio — Luxury Hospitality",
      "hero.l1":"We create", "hero.l2":"desire.",
      "hero.foot":"Films and photography for the world's most considered hotels, resorts and restaurants. We don't sell rooms or plates — we make people long for them.",
      "hero.scroll":"Scroll",

      "mq.1":"Boutique Hotels","mq.2":"Michelin Tables","mq.3":"Resorts","mq.4":"Fine Dining","mq.5":"Aerial Stories","mq.6":"Brand Films",

      "phil.eyebrow":"The Studio",
      "phil.statement":"We don't document<br>experiences. We<br><span class='ital'>create</span> them.",
      "phil.num":"— 01 / Philosophy",
      "phil.p1":"De Loor Studio is a creative studio working at the intersection of cinema, architecture and taste. Every frame is composed like a still life and paced like a film — light, texture and movement arranged until a place becomes irresistible.",
      "phil.p2":"We work with a small number of properties each year. The relationship is intimate, the output is unmistakable.",

      "work.eyebrow":"Selected Work",
      "work.h":"Chapters,<br>not portfolios.",
      "work.meta":"A handful of recent collaborations across hospitality, gastronomy and place.",
      "work.view":"View<br>story",
      "c1.tag":"Brand Film","c1.title":"The Hours<br>of Light","c1.where":"Boutique Hotel — Amalfi Coast, IT",
      "c2.tag":"Gastronomy","c2.title":"A Table<br>Set in Fire","c2.where":"Michelin Restaurant — Copenhagen, DK",
      "c3.tag":"Resort","c3.title":"Where the<br>Land Ends","c3.where":"Cliffside Resort — Cyclades, GR",
      "svc.film":"Cinematic Film","svc.drone":"Drone","svc.stills":"Stills","svc.food":"Food Film",
      "svc.photo":"Photography","svc.social":"Social","svc.campaign":"Campaign","svc.aerial":"Aerial","svc.basicfilm":"Film",

      "serv.eyebrow":"Capabilities",
      "serv.h":"One studio.<br>Every frame.",
      "serv.meta":"Direction, production and post — held under one roof so the story never fractures.",
      "serv.1":"Cinematic Brand Films","serv.1d":"Signature films that turn a property into a feeling.",
      "serv.2":"Food & Gastronomy","serv.2d":"Steam, light and craft — the plate at its most desirable.",
      "serv.3":"Architecture & Interiors","serv.3d":"Space, shadow and material rendered with reverence.",
      "serv.4":"Aerial & Drone","serv.4d":"FPV and cinematic aerials that reveal the impossible.",
      "serv.5":"Campaign Visuals","serv.5d":"Hero imagery built to carry a season of marketing.",
      "serv.6":"Social Motion","serv.6d":"Short-form cut from the same cinematic grade.",

      "why.h":"Hospitality<br>deserves <span class='ital'>cinema.</span>",
      "why.p":"A great hotel is choreography — arrival, light, scent, the weight of a door. We make work that honours that intention, so guests feel the experience long before they ever arrive.",

      "drone.eyebrow":"Aerial Perspective",
      "drone.h":"From<br><span class='ital'>above.</span>",
      "drone.lede":"From the ground, a resort is a building. From the air, it becomes geography — the way a pool meets a cliff, how a terrace folds into the hillside, the exact moment the sea turns gold. Our aerial and FPV work reveals scale and drama no walkthrough ever could.",
      "drone.k1":"Aerial Capture","drone.k2":"Cinematic Flight","drone.k3":"Slow Motion","drone.k4":"Licensed Crew","drone.v4":"EU + Global",

      "proc.eyebrow":"The Process",
      "proc.h":"Considered,<br>start to frame.",
      "proc.meta":"Four movements, from first conversation to final grade.",
      "proc.1":"Immersion","proc.1d":"We live in your world first — the rituals, the light, the guest. Direction begins with understanding, not equipment.",
      "proc.2":"Direction","proc.2d":"A treatment, a mood, a shot architecture. Every frame is decided before a single one is captured.",
      "proc.3":"Capture","proc.3d":"A small, senior crew. Cinema glass, aerial systems and an obsession with the right hour of day.",
      "proc.4":"Craft","proc.4d":"Edit, sound and colour graded to feel timeless — work that ages like the properties it celebrates.",

      "testi.eyebrow":"In Their Words",
      "testi.quote":"“They understood our property better than our own brand team. The film didn't show the hotel — it made people <span class='ital'>want</span> to be there.”",
      "testi.by":"General Manager — Five-Star Resort, Mediterranean",

      "contact.eyebrow":"Selective Collaborations · 2026",
      "contact.h":"Let's create<br><span class='ital'>desire.</span>",
      "contact.intro":"We take on a small number of new properties each year. Tell us about yours — we reply personally within two working days.",
      "contact.or":"Or email us directly",
      "f.name":"Name","f.name.ph":"First and last name",
      "f.email":"Email","f.email.ph":"you@property.com",
      "f.company":"Hotel / restaurant / brand","f.company.ph":"Name of the property",
      "f.type":"Type of property",
      "f.type.0":"Select…","f.type.hotel":"Boutique / luxury hotel","f.type.resort":"Resort","f.type.restaurant":"Restaurant / Michelin","f.type.cafe":"Café / bar","f.type.brand":"Hospitality brand","f.type.other":"Other",
      "f.message":"Tell us about your property","f.message.ph":"The project, the ambition, the timeline…",
      "f.submit":"Begin a conversation",
      "f.sending":"Sending…",
      "f.ok":"Thank you. Your message is on its way — we'll reply within two working days.",
      "f.err":"Something went wrong. Please email us directly at hello@deloor.studio.",

      "foot.studio":"Studio","foot.connect":"Connect","foot.based":"Based",
      "foot.work":"Work","foot.serv":"Capabilities","foot.proc":"Process","foot.aerial":"Aerial",
      "foot.based1":"Working worldwide","foot.based2":"Netherlands",
      "foot.copy":"© 2026 De Loor Studio — Cinema for Hospitality",
      "foot.tag":"Desire, by design.",

      "cs.intro.eyebrow":"The Brief",
      "cs.f.client":"Client","cs.f.services":"Services","cs.f.year":"Year","cs.f.location":"Location",
      "cs.next.eyebrow":"Next chapter","cs.next.go":"View the case",
      "cs.outcome.eyebrow":"The Outcome",

      "c1.doc":"The Hours of Light — De Loor Studio",
      "c1.cat":"Brand Film · Boutique Hotel",
      "c1.h":"The Hours<br>of <span class='ital'>Light</span>",
      "c1.loc":"Amalfi Coast, Italy — 2025",
      "c1.lead":"A cliffside hotel that lives by the rhythm of the sun. We built a film around <span class='ital'>a single day</span> — from first light on the sea to the last candle on the terrace.",
      "c1.client":"Boutique hotel, 18 suites","c1.services":"Cinematic film, photography, drone","c1.year":"2025","c1.location":"Amalfi Coast, IT",
      "c1.s1.eyebrow":"The Approach","c1.s1.h":"Light in the leading role","c1.s1.p1":"The hotel's architecture is built to catch the sun. Our direction followed the same logic: we shot only on the day's hinge moments — dawn, blue hour, golden hour — letting the building reveal itself rather than explaining it.","c1.s1.p2":"Three days on location, a small crew, cinema glass and a drone that never worked harder than the place itself.",
      "c1.quote":"“We expected a film about the hotel. We got a film about the <span class='ital'>feeling</span> of arriving.”",
      "c1.quote.by":"Owner — Boutique Hotel, Amalfi Coast",
      "c1.s2.eyebrow":"The Detail","c1.s2.h":"Stillness, texture, ritual","c1.s2.p1":"Alongside the hero film we built a library of still lifes and short vertical moments — hands, linen, espresso, the reflection of the pool — designed to carry a full year of social and campaign.","c1.s2.p2":"All in the same colour grade, so every channel feels like one world.",
      "c1.out.h":"The film became the centrepiece of the hotel's relaunch — and the reason for a <span class='ital'>fully booked</span> opening season.",
      "c1.m1v":"+38%","c1.m1k":"direct bookings via the site","c1.m2v":"4.2M","c1.m2k":"organic views in season one","c1.m3v":"1 day","c1.m3k":"told from dawn to candlelight",

      "c2.doc":"A Table Set in Fire — De Loor Studio",
      "c2.cat":"Gastronomy · Michelin Restaurant",
      "c2.h":"A Table<br>Set in <span class='ital'>Fire</span>",
      "c2.loc":"Copenhagen, Denmark — 2025",
      "c2.lead":"A restaurant that cooks over open flame. We made imagery that lets you feel the <span class='ital'>heat</span> — steam, embers and the exact moment a dish becomes complete.",
      "c2.client":"Michelin restaurant, one star","c2.services":"Food film, photography, social","c2.year":"2025","c2.location":"Copenhagen, DK",
      "c2.s1.eyebrow":"The Approach","c2.s1.h":"Cooking as choreography","c2.s1.p1":"We filmed the kitchen like a stage. High speed for the flame, macro for the texture, and a slow, observing eye for the chef's hands. No styling that didn't also land on the plate.","c2.s1.p2":"We shot through two real services — the restaurant's rhythm set the edit, not the other way around.",
      "c2.quote":"“It looks the way it tastes. That's the highest compliment I can give a <span class='ital'>camera</span>.”",
      "c2.quote.by":"Chef-owner — Michelin Restaurant, Copenhagen",
      "c2.s2.eyebrow":"The Detail","c2.s2.h":"From fire to feed","c2.s2.p1":"From the hero film we cut a series of five-to-ten-second vertical moments — each built around one sensation: the sear, the ember, the first slice. Made for a feed that builds hunger.","c2.s2.p2":"A photo set of twenty signature dishes completed the menu and press kit.",
      "c2.out.h":"The campaign pushed the waiting list to <span class='ital'>weeks</span> and brought the international press to the door.",
      "c2.m1v":"3 wks","c2.m1k":"average waiting list after launch","c2.m2v":"+61%","c2.m2k":"engagement on social","c2.m3v":"12","c2.m3k":"international features",

      "c3.doc":"Where the Land Ends — De Loor Studio",
      "c3.cat":"Resort · Aerial & Campaign",
      "c3.h":"Where the<br>Land <span class='ital'>Ends</span>",
      "c3.loc":"Cyclades, Greece — 2024",
      "c3.lead":"A resort on the edge of a cliff, where architecture and sea bleed into one another. We filmed from the air to show what no <span class='ital'>walkthrough</span> can.",
      "c3.client":"Cliffside resort, 40 keys","c3.services":"Campaign, aerial, film","c3.year":"2024","c3.location":"Cyclades, GR",
      "c3.s1.eyebrow":"The Approach","c3.s1.h":"Scale you can feel","c3.s1.p1":"From the ground the resort is beautiful but illegible. With cinematic drone and FPV we revealed the geometry — how the pools quote the horizon, how the stairs are cut into the rock, how the terrace floats over the Aegean.","c3.s1.p2":"Twenty-minute flight windows around sunrise and sunset, with a licensed crew and full permits.",
      "c3.quote":"“For the first time our guests saw the resort the way we always held it in our minds — <span class='ital'>endless.</span>”",
      "c3.quote.by":"Management — Cliffside Resort, Cyclades",
      "c3.s2.eyebrow":"The Detail","c3.s2.h":"From horizon to suite","c3.s2.p1":"The aerials formed the backbone, but the campaign only truly breathed through contrast: the immense landscape beside the intimate detail of a single suite at sunset.","c3.s2.p2":"One cinematic hero film, three short cuts per platform and an image bank for the whole season.",
      "c3.out.h":"The campaign became the resort's calling card — and the <span class='ital'>direct</span> reason for an early sell-out high season.",
      "c3.m1v":"Sold out","c3.m1k":"high season, three months ahead","c3.m2v":"+47%","c3.m2k":"direct enquiries","c3.m3v":"4K","c3.m3k":"aerial capture, licensed flight"
    }
  };

  /* ------------------------------------------------------ */
  /*  i18n engine                                            */
  /* ------------------------------------------------------ */
  var STORAGE = "dl-lang";
  var lang = "nl";
  try{ var saved = localStorage.getItem(STORAGE); if(saved === "nl" || saved === "en") lang = saved; }catch(e){}

  function t(key){ return (I18N[lang] && I18N[lang][key] != null) ? I18N[lang][key] : (I18N.en[key] != null ? I18N.en[key] : null); }

  function applyLang(next){
    lang = next;
    try{ localStorage.setItem(STORAGE, lang); }catch(e){}
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach(function(el){
      var v = t(el.getAttribute("data-i18n"));
      if(v != null) el.innerHTML = v;
    });
    document.querySelectorAll("[data-i18n-ph]").forEach(function(el){
      var v = t(el.getAttribute("data-i18n-ph"));
      if(v != null) el.setAttribute("placeholder", v);
    });
    // document title
    var dt = document.body.getAttribute("data-doc-title");
    if(dt){ var dv = t(dt); if(dv){ document.title = dv.replace(/<[^>]+>/g, ""); } }
    // toggle active state
    document.querySelectorAll(".lang button").forEach(function(b){
      b.classList.toggle("active", b.getAttribute("data-lang") === lang);
    });
  }

  // expose for the form handler
  window.__t = t;
  window.__lang = function(){ return lang; };

  document.addEventListener("click", function(e){
    var b = e.target.closest(".lang button");
    if(b){ applyLang(b.getAttribute("data-lang")); }
  });

  applyLang(lang); // initial paint

  /* ------------------------------------------------------ */
  /*  Imagery: lazy load with graceful gradient fallback     */
  /* ------------------------------------------------------ */
  document.querySelectorAll("img[data-src]").forEach(function(img){
    var src = img.getAttribute("data-src");
    if(!src) return;
    var pre = new Image();
    pre.onload = function(){ img.src = src; img.classList.add("loaded"); };
    pre.src = src;
  });
  document.querySelectorAll("[data-bg]").forEach(function(el){
    var src = el.getAttribute("data-bg");
    var pre = new Image();
    pre.onload = function(){ el.style.backgroundImage = 'url("' + src + '")'; };
    pre.src = src;
  });

  var rm = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ------------------------------------------------------ */
  /*  Hero headline reveal                                   */
  /* ------------------------------------------------------ */
  function fireHero(){
    document.querySelectorAll(".hero h1 .line span").forEach(function(s, i){
      setTimeout(function(){ s.classList.add("in"); }, i * 140);
    });
  }
  window.addEventListener("load", function(){ setTimeout(fireHero, 180); });
  setTimeout(function(){ document.querySelectorAll(".hero h1 .line span").forEach(function(s){ s.classList.add("in"); }); }, 1500);

  /* ------------------------------------------------------ */
  /*  Scroll reveals                                         */
  /* ------------------------------------------------------ */
  if("IntersectionObserver" in window){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(en){ if(en.isIntersecting){ en.target.classList.add("show"); io.unobserve(en.target); } });
    }, { threshold:0.16, rootMargin:"0px 0px -8% 0px" });
    document.querySelectorAll(".reveal, .mask").forEach(function(el){ io.observe(el); });
  } else {
    document.querySelectorAll(".reveal, .mask").forEach(function(el){ el.classList.add("show"); });
  }

  /* ------------------------------------------------------ */
  /*  Nav shrink + parallax                                  */
  /* ------------------------------------------------------ */
  var nav = document.querySelector("nav");
  function onScrollNav(){ if(nav) nav.classList.toggle("shrink", window.scrollY > 60); }
  onScrollNav();

  var pEls = Array.prototype.slice.call(document.querySelectorAll("[data-parallax]"));
  var ticking = false;
  function applyParallax(){
    var vh = window.innerHeight;
    pEls.forEach(function(el){
      var r = el.getBoundingClientRect();
      if(r.bottom < -200 || r.top > vh + 200) return;
      var speed = parseFloat(el.getAttribute("data-parallax")) || 0.1;
      var offset = (r.top + r.height/2 - vh/2) * speed * -1;
      el.style.transform = "translate3d(0," + offset.toFixed(1) + "px,0)";
    });
    ticking = false;
  }
  window.addEventListener("scroll", function(){
    onScrollNav();
    if(!rm && !ticking){ ticking = true; requestAnimationFrame(applyParallax); }
  }, { passive:true });
  window.addEventListener("resize", applyParallax);
  if(!rm) applyParallax();

  /* ------------------------------------------------------ */
  /*  Custom cursor                                          */
  /* ------------------------------------------------------ */
  if(!("ontouchstart" in window) && window.matchMedia("(pointer:fine)").matches){
    var cur = document.querySelector(".cursor");
    var dot = document.querySelector(".cursor-dot");
    if(cur && dot){
      var cx=window.innerWidth/2, cy=window.innerHeight/2, tx=cx, ty=cy;
      document.addEventListener("mousemove", function(e){
        tx=e.clientX; ty=e.clientY;
        dot.style.transform = "translate("+tx+"px,"+ty+"px) translate(-50%,-50%)";
        cur.classList.remove("hidden"); dot.classList.remove("hidden");
      });
      (function raf(){ cx += (tx-cx)*0.16; cy += (ty-cy)*0.16; cur.style.transform = "translate("+cx+"px,"+cy+"px) translate(-50%,-50%)"; requestAnimationFrame(raf); })();
      var hoverSel = "a, button, [data-hover], input, textarea, select";
      document.querySelectorAll(hoverSel).forEach(function(el){
        el.addEventListener("mouseenter", function(){ document.body.classList.add("hovering"); });
        el.addEventListener("mouseleave", function(){ document.body.classList.remove("hovering"); });
      });
      document.addEventListener("mouseleave", function(){ cur.classList.add("hidden"); dot.classList.add("hidden"); });
    }
  }

  /* ------------------------------------------------------ */
  /*  Contact form → Formspree (progressive enhancement)     */
  /* ------------------------------------------------------ */
  var form = document.getElementById("contact-form");
  if(form){
    var status = document.getElementById("form-status");
    var submit = form.querySelector("[type=submit]");
    var submitLabel = submit ? submit.querySelector(".label") : null;
    form.addEventListener("submit", function(e){
      // If the endpoint hasn't been configured yet, let the browser POST normally.
      if(form.action.indexOf("YOUR_FORM_ID") !== -1) return;
      e.preventDefault();
      if(status){ status.textContent = ""; status.classList.remove("err"); }
      if(submit){ submit.disabled = true; }
      if(submitLabel){ submitLabel.textContent = t("f.sending"); }
      fetch(form.action, { method:"POST", body:new FormData(form), headers:{ "Accept":"application/json" } })
        .then(function(res){
          if(res.ok){
            form.reset();
            if(status){ status.textContent = t("f.ok"); }
          } else {
            if(status){ status.textContent = t("f.err"); status.classList.add("err"); }
          }
        })
        .catch(function(){ if(status){ status.textContent = t("f.err"); status.classList.add("err"); } })
        .then(function(){ if(submit){ submit.disabled = false; } if(submitLabel){ submitLabel.textContent = t("f.submit"); } });
    });
  }
})();
