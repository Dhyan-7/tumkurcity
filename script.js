/**
 * Tumakuru City Portal - Interactive Scripts
 * Provides accessible mobile navigation, theme toggling,
 * landmark category filtering, and native accessible modal details.
 */

document.addEventListener('DOMContentLoaded', () => {

  // 1. THEME TOGGLE (Dark / Light Mode with Local Storage persistence)
  const themeToggleBtn = document.getElementById('theme-toggle');
  const storedTheme = localStorage.getItem('tumkur_theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  // Set initial theme
  if (storedTheme) {
    document.documentElement.setAttribute('data-theme', storedTheme);
  } else if (prefersDark) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const targetTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', targetTheme);
      localStorage.setItem('tumkur_theme', targetTheme);
    });
  }

  // 2. MOBILE NAVIGATION DRAWER
  const drawer = document.getElementById('mobile-nav-panel');
  const drawerToggle = document.getElementById('drawer-toggle');
  const drawerClose = document.getElementById('drawer-close');
  const backdrop = document.getElementById('mobile-backdrop');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  const openDrawer = () => {
    if (!drawer) return;
    drawer.classList.add('open');
    drawer.setAttribute('aria-hidden', 'false');
    if (drawerToggle) drawerToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    if (!drawer) return;
    drawer.classList.remove('open');
    drawer.setAttribute('aria-hidden', 'true');
    if (drawerToggle) drawerToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  if (drawerToggle) {
    drawerToggle.addEventListener('click', openDrawer);
  }

  if (drawerClose) {
    drawerClose.addEventListener('click', closeDrawer);
  }

  if (backdrop) {
    backdrop.addEventListener('click', closeDrawer);
  }

  // Close drawer on clicking any anchor inside mobile menu
  mobileLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  // Close drawer on Escape key press
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer && drawer.classList.contains('open')) {
      closeDrawer();
    }
  });

  // 3. LANDMARK CATEGORY FILTERING
  const filterButtons = document.querySelectorAll('.filter-btn');
  const landmarkCards = document.querySelectorAll('.landmark-card');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Toggle active state on buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const filterValue = button.getAttribute('data-filter');

      landmarkCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (filterValue === 'all' || cardCategory === filterValue) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  // 4. ACCESSIBLE NATIVE DIALOG MODAL FOR LANDMARK DETAILS
  const modal = document.getElementById('landmark-modal');
  const modalBody = document.getElementById('modal-body');
  const modalCloseBtn = document.getElementById('modal-close');
  const detailButtons = document.querySelectorAll('.btn-card-detail');

  // Landmark rich content catalog
  const landmarkData = {
    'siddaganga': {
      title: 'Sri Siddaganga Mutt',
      category: 'Spiritual Center & Educational Citadel',
      distance: '5 km from Tumakuru City Railway Station / NH 48',
      timings: '5:30 AM to 9:00 PM (Daily)',
      image: 'images/Sri%20Siddaganga%20Mutt.png',
      imageAlt: 'Sri Siddaganga Mutt Temple Complex and Sanctum in Kyatsandra, Tumakuru',
      description: `
        Founded in the 15th century by Gosala Siddeshwara Swamiji, Sri Siddaganga Mutt is one of the most revered spiritual institutions in India.
        It is renowned globally for the divine legacy of 'Karnataka Ratna' His Holiness Dr. Sri Sri Shivakumara Mahaswamiji (1907-2019), who lived to 111 years dedicating his life to the 'Trividha Dasohi' philosophy — unconditional free food (Anna), free secular and technical education (Vidya), and free shelter (Aashraya) to all people irrespective of religion or caste.
      `,
      highlights: [
        'Free boarding and education for over 10,000 underprivileged children',
        'Historic cave shrine of Sri Gosala Siddeshwara & natural hilltop temple',
        'Daily Annadana serving nutritious satvik meals to thousands of pilgrims',
        'Annual Siddaganga Fair and exhibition held in February/March'
      ]
    },
    'dd-hills': {
      title: 'Devarayanadurga (DD Hills)',
      category: 'Scenic Hill Station & Ancient Fort',
      distance: '18 km from Tumakuru City (Altitude: 3,940 ft)',
      timings: 'Sunrise to Sunset',
      image: 'images/Devarayana%20durga.png',
      imageAlt: 'Devarayanadurga Hill and Temple in Tumakuru',
      description: `
        Devarayanadurga is an idyllic hill station perched amidst rocky granitic peaks and dense dry deciduous reserve forests. Named after Mysore Maharaja Chikka Devaraja Wodeyar, the hill fort was historically celebrated for its seven-tiered impregnable defenses.
        At the foothill lies the Sri Bhoga Narasimha Temple, while the hilltop is crowned by the magnificent Sri Yoga Narasimha Temple offering breath-taking panoramic vistas of the surrounding plains.
      `,
      highlights: [
        'Twin ancient Narasimha temples dating back to Chola and Hoysala periods',
        'Trekking trails and cooler microclimate perfect for morning visits',
        'Protected forest rich in birdlife, deer, and leopards',
        'Annual Car Festival (Rathotsava) on Chaitra Poornima'
      ]
    },
    'namada-chilume': {
      title: 'Namada Chilume Natural Spring',
      category: 'Natural Spring & Forest Sanctuary',
      distance: '14 km from Tumakuru on DD Hills road',
      timings: '8:00 AM to 5:30 PM',
      description: `
        Namada Chilume is a sacred perennial natural water spring emerging through a tiny cavity in solid rock. Legend holds that during exile in Treta Yuga, Lord Sri Rama searched for water to apply the sacred 'Nama' (tilak) to his forehead. Finding none, he shot an arrow into the bedrock, and fresh, cool spring water gushed forth.
      `,
      highlights: [
        'Continuous fresh water flow throughout the year without drying',
        'Sprawling deer safari park maintained by Karnataka Forest Department',
        'Herbal medicinal garden with hundreds of indigenous Ayurvedic species',
        'Tranquil picnic surroundings under shady teak and eucalyptus trees'
      ]
    },
    'kaidala': {
      title: 'Kaidala Chennakeshava Temple',
      category: 'Hoysala Monolithic Stone Architecture',
      distance: '9 km South-West of Tumakuru',
      timings: '7:00 AM to 6:00 PM',
      description: `
        Historically known as Kridapura, Kaidala is the legendary birthplace of Amarashilpi Jakanachari, the master architect-sculptor behind the Belur and Halebidu Hoysala temples.
        According to legend, after severing his right hand in Belur when his son found a flaw in a sculpture, Jakanachari was directed in a dream to sculpt the Chennakeshava idol here in his native village. Upon finishing the magnificent 6-foot black stone idol, his hand was miraculously restored (hence 'Kai-dala' - restored hand).
      `,
      highlights: [
        'Exquisite 6-foot monolithic black soapstone Chennakeshava idol',
        'Twin shrines of Gangadareshwara and Chennakeshava',
        'Inscribed pillar records celebrating Hoysala and Vijayanagara royal patronage',
        'Quiet heritage atmosphere free of tourist crowds'
      ]
    },
    'amanikere': {
      title: 'Amanikere Lake & Glass House',
      category: 'Smart City Urban Park & Lakefront',
      distance: 'Heart of Tumakuru City',
      timings: '5:00 AM to 8:30 PM (Daily)',
      description: `
        Spanning over 500 acres, Amanikere is the largest water reservoir in Tumakuru town. Through the Tumakuru Smart City Mission, the lakefront has been transformed into a world-class recreational space featuring paved lakeside promenades, ornamental gardens, a striking crystal glass house, open-air fitness arenas, and musical dancing fountains.
      `,
      highlights: [
        'Crystal Glass House hosting flower shows and seasonal cultural exhibitions',
        '3.5 km illuminated jogging & walking track around the lake embankment',
        'Boating facility and musical water fountain in the evenings',
        'Prime bird-watching spot for migratory and resident aquatic birds'
      ]
    },
    'solar-park': {
      title: 'Pavagada Solar Park (Shakti Sthala)',
      category: 'World-Leading Renewable Energy Complex',
      distance: 'Pavagada Taluk, 140 km from Tumakuru',
      timings: 'Industrial Landmark / Government Facility',
      description: `
        Spread over 13,000 acres across five villages in the drought-prone Pavagada taluk, the Shakti Sthala solar park has a total capacity of 2,050 MW. It is recognized as one of the world's most innovative clean energy installations, utilizing a unique land-lease model with over 2,300 local farmers who receive guaranteed annual lease income.
      `,
      highlights: [
        'Generates enough clean electricity to power millions of homes across Karnataka',
        'Saves approximately 3.6 million tonnes of carbon emissions annually',
        'Pioneering sustainable model of green economic transformation'
      ]
    },
    'goravanahalli': {
      title: 'Goravanahalli Mahalakshmi Temple',
      category: 'Renowned Pilgrimage Shrine',
      distance: '28 km from Tumakuru (near Theetha Reservoir)',
      timings: '6:00 AM to 8:30 PM',
      description: `
        Dedicated to Goddess Mahalakshmi, the deity of prosperity and auspiciousness, the Goravanahalli temple is one of the most visited shrines in the region. The self-manifested idol was consecrated by pious devotee Kamalamma in the early 20th century.
      `,
      highlights: [
        'Special pujas and abhishekams held on Tuesdays and Fridays',
        'Daily community Prasada meal served to visiting pilgrims',
        'Scenic setting adjacent to the tranquil Theetha reservoir dam'
      ]
    },
    'siddarabetta': {
      title: 'Siddara Betta (Hill of Saints)',
      category: 'Medicinal Hill & Cave Sanctuary',
      distance: '32 km from Tumakuru near Koratagere',
      timings: 'Daytime Trekking & Worship',
      description: `
        Siddara Betta translates to 'Hill of Saints' and has been home to meditating sages and sadhus for hundreds of years. The hill is famous for its natural underground cave shrine of Lord Shiva and natural spring theertha. The surrounding hill is revered as a rich natural repository of rare Ayurvedic medicinal plants and herbs.
      `,
      highlights: [
        'Exciting trek through rock fissures into an underground cave shrine',
        'Natural subterranean spring with water believed to have curative properties',
        'Guided botanical exploration of rare medicinal plants',
        'Panoramic views of the Deccan plateau from the hill ridge'
      ]
    }
  };

  // Open modal on button click
  detailButtons.forEach(button => {
    button.addEventListener('click', () => {
      const placeKey = button.getAttribute('data-place');
      const data = landmarkData[placeKey];

      if (data && modal && modalBody) {
        const imageMarkup = data.image ? `
          <div class="dialog-media">
            <img src="${data.image}" alt="${data.imageAlt || data.title}" loading="lazy">
          </div>
        ` : '';

        modalBody.innerHTML = `
          ${imageMarkup}
          <div class="category-tag" style="margin-bottom: 0.25rem;">${data.category}</div>
          <h3 id="dialog-title" class="dialog-title">${data.title}</h3>
          
          <div class="modal-info-box">
            <ul>
              <li><strong>📍 Location / Distance:</strong> ${data.distance}</li>
              <li><strong>⏰ Timings:</strong> ${data.timings}</li>
            </ul>
          </div>

          <p>${data.description.trim()}</p>

          <h4 style="margin-top: 1rem; margin-bottom: 0.5rem; font-size: 1rem;">Key Highlights:</h4>
          <ul style="list-style: disc; padding-left: 1.25rem; font-size: 0.9rem; color: var(--color-text-secondary);">
            ${data.highlights.map(item => `<li style="margin-bottom: 0.25rem;">${item}</li>`).join('')}
          </ul>
        `;

        if (typeof modal.showModal === 'function') {
          modal.showModal();
        } else {
          modal.setAttribute('open', '');
        }
      }
    });
  });

  // Close modal
  if (modalCloseBtn && modal) {
    modalCloseBtn.addEventListener('click', () => {
      if (typeof modal.close === 'function') {
        modal.close();
      } else {
        modal.removeAttribute('open');
      }
    });

    // Close when clicking dialog backdrop
    modal.addEventListener('click', (event) => {
      const rect = modal.getBoundingClientRect();
      const isInDialog = (
        rect.top <= event.clientY &&
        event.clientY <= rect.top + rect.height &&
        rect.left <= event.clientX &&
        event.clientX <= rect.left + rect.width
      );
      if (!isInDialog) {
        modal.close();
      }
    });
  }

});

