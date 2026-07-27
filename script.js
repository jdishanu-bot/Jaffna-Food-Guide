/* =========================================================
   JAFFNA FOOD GUIDE — SCRIPT.JS
   Vanilla JS: navigation, data, search, filtering, ratings,
   review form, gallery, and small page enhancements.
   ========================================================= */

/* ---------- 1. Shared Data ---------- */
const RESTAURANTS = [
  {
    id: 1,
    name: "Nallur Kitchen",
    category: "Sri Lankan",
    image: "restaurant-1.svg",
    heroImage: "restaurant-detail-1.svg",
    rating: 4.7,
    reviews: 214,
    priceRange: "Rs 400 – 1200",
    location: "Nallur, Jaffna",
    address: "12 Temple Road, Nallur, Jaffna 40000",
    phone: "94771234567",
    mapQuery: "Nallur+Kitchen+Jaffna",
    tags: ["Family Style", "Vegetarian Options", "Air Conditioned"],
    description: "Nallur Kitchen has been serving authentic Jaffna-style curries since 1998, right beside the historic Nallur Kandaswamy Temple. Expect fiery crab curry, palmyrah-based sweets and a menu passed down through three generations of the same family.",
    menu: [
      { name: "Jaffna Crab Curry", price: 1200, category: "Mains", img: "gallery-2.svg" },
      { name: "Odiyal Kool", price: 650, category: "Mains", img: "street-3.svg" },
      { name: "Mutton Rolls (2 pcs)", price: 250, category: "Starters", img: "street-2.svg" },
      { name: "Prawn Vadai", price: 180, category: "Starters", img: "gallery-3.svg" },
      { name: "Palmyrah Pittu", price: 220, category: "Mains", img: "street-4.svg" },
      { name: "Jaffna Kottu", price: 480, category: "Mains", img: "gallery-1.svg" }
    ]
  },
  {
    id: 2,
    name: "Karainagar Grill",
    category: "Seafood",
    image: "restaurant-2.svg",
    heroImage: "restaurant-detail-1.svg",
    rating: 4.5,
    reviews: 168,
    priceRange: "Rs 600 – 1800",
    location: "Karainagar, Jaffna",
    address: "Beach Road, Karainagar, Jaffna",
    phone: "94772345678",
    mapQuery: "Karainagar+Grill+Jaffna",
    tags: ["Sea View", "Fresh Catch", "Outdoor Seating"],
    description: "A short walk from the Karainagar shoreline, this open-air grill serves the day's catch with smoky, spice-rubbed char. Known island-wide for its grilled prawns and lagoon crab.",
    menu: [
      { name: "Grilled Lagoon Crab", price: 1800, category: "Mains", img: "gallery-2.svg" },
      { name: "Chilli Prawns", price: 950, category: "Mains", img: "gallery-3.svg" },
      { name: "Fish Cutlets", price: 150, category: "Starters", img: "street-2.svg" }
    ]
  },
  {
    id: 3,
    name: "Point Pedro Table",
    category: "Traditional",
    image: "restaurant-3.svg",
    heroImage: "restaurant-detail-1.svg",
    rating: 4.6,
    reviews: 132,
    priceRange: "Rs 300 – 900",
    location: "Point Pedro, Jaffna",
    address: "Main Street, Point Pedro, Jaffna",
    phone: "94773456789",
    mapQuery: "Point+Pedro+Table+Jaffna",
    tags: ["Banana Leaf", "Home Style", "Budget Friendly"],
    description: "Traditional banana-leaf rice with an ever-changing spread of vegetable curries, dried fish sambol and buttermilk. A favourite lunch stop for locals in the north.",
    menu: [
      { name: "Banana Leaf Rice", price: 450, category: "Mains", img: "gallery-1.svg" },
      { name: "Dried Fish Sambol", price: 120, category: "Sides", img: "street-5.svg" },
      { name: "Vadai & Sundal", price: 90, category: "Starters", img: "street-5.svg" }
    ]
  },
  {
    id: 4,
    name: "Uduvil Spice House",
    category: "Vegetarian",
    image: "restaurant-4.svg",
    heroImage: "restaurant-detail-1.svg",
    rating: 4.4,
    reviews: 97,
    priceRange: "Rs 250 – 700",
    location: "Uduvil, Jaffna",
    address: "Church Lane, Uduvil, Jaffna",
    phone: "94774567890",
    mapQuery: "Uduvil+Spice+House+Jaffna",
    tags: ["100% Vegetarian", "Pure Veg Thali", "Cosy"],
    description: "An all-vegetarian kitchen built around Jaffna's temple-food traditions — lentil curries, brinjal moju and coconut sambols served on a rotating daily thali.",
    menu: [
      { name: "Veg Thali", price: 380, category: "Mains", img: "gallery-1.svg" },
      { name: "Brinjal Moju", price: 150, category: "Sides", img: "street-4.svg" },
      { name: "Coconut Roti", price: 90, category: "Starters", img: "street-4.svg" }
    ]
  },
  {
    id: 5,
    name: "Chunnakam Curry Pot",
    category: "Sri Lankan",
    image: "restaurant-5.svg",
    heroImage: "restaurant-detail-1.svg",
    rating: 4.3,
    reviews: 88,
    priceRange: "Rs 300 – 850",
    location: "Chunnakam, Jaffna",
    address: "Kandy Road, Chunnakam, Jaffna",
    phone: "94775678901",
    mapQuery: "Chunnakam+Curry+Pot+Jaffna",
    tags: ["Home Style", "Spicy", "Local Favourite"],
    description: "A no-frills curry shop loved for its clay-pot mutton curry and fiery chicken varuval, cooked exactly the way Chunnakam grandmothers do.",
    menu: [
      { name: "Clay Pot Mutton Curry", price: 850, category: "Mains", img: "gallery-2.svg" },
      { name: "Chicken Varuval", price: 650, category: "Mains", img: "gallery-1.svg" }
    ]
  },
  {
    id: 6,
    name: "Jaffna Fort Diner",
    category: "Fusion",
    image: "restaurant-6.svg",
    heroImage: "restaurant-detail-1.svg",
    rating: 4.8,
    reviews: 256,
    priceRange: "Rs 700 – 2200",
    location: "Fort Road, Jaffna",
    address: "Fort Road, Jaffna 40000",
    phone: "94776789012",
    mapQuery: "Jaffna+Fort+Diner",
    tags: ["Fine Dining", "Fusion Menu", "Rooftop"],
    description: "A rooftop restaurant overlooking the Jaffna Fort, blending Jaffna Tamil flavours with modern plating — think crab curry arancini and palmyrah panna cotta.",
    menu: [
      { name: "Crab Curry Arancini", price: 950, category: "Starters", img: "gallery-2.svg" },
      { name: "Palmyrah Panna Cotta", price: 550, category: "Desserts", img: "street-4.svg" },
      { name: "Fusion Kottu Bowl", price: 780, category: "Mains", img: "gallery-1.svg" }
    ]
  }
];

const CAFES = [
  { id: 1, name: "Palmyrah Cafe", image: "cafe-1.svg", rating: 4.5, reviews: 120, location: "Hospital Road, Jaffna", desc: "Palmyrah-infused coffee and fresh bakes in a plant-filled courtyard." },
  { id: 2, name: "Veranda Brew", image: "cafe-2.svg", rating: 4.3, reviews: 74, location: "KKS Road, Jaffna", desc: "A tea house specialising in Ceylon black tea and milk toffee." },
  { id: 3, name: "Lagoon View Cafe", image: "cafe-3.svg", rating: 4.6, reviews: 143, location: "Beach Road, Jaffna", desc: "Sunset views over the lagoon with light bites and fresh juices." },
  { id: 4, name: "Odeon Corner Cafe", image: "cafe-4.svg", rating: 4.4, reviews: 61, location: "Stanley Road, Jaffna", desc: "A retro corner cafe famous for its egg hoppers and milk desserts." }
];

const STREET_FOODS = [
  { id: 1, name: "Jaffna Kottu", image: "street-1.svg", price: "Rs 350 – 600", tag: "Late Night", desc: "Chopped godhamba roti stir-fried with egg, vegetables and your choice of meat on a sizzling griddle." },
  { id: 2, name: "Mutton Rolls", image: "street-2.svg", price: "Rs 80 – 150", tag: "Snack", desc: "Deep-fried pastry rolls stuffed with spiced minced mutton — a Jaffna bus-stand classic." },
  { id: 3, name: "Odiyal Kool", image: "street-3.svg", price: "Rs 300 – 500", tag: "Seafood", desc: "A thick palmyrah-root porridge loaded with seafood, a Jaffna peninsula speciality." },
  { id: 4, name: "Palmyrah Pittu", image: "street-4.svg", price: "Rs 150 – 250", tag: "Breakfast", desc: "Steamed rice flour and palmyrah pulp, layered with coconut, served with curry." },
  { id: 5, name: "Vadai & Sundal", image: "street-5.svg", price: "Rs 40 – 100", tag: "Snack", desc: "Crispy lentil vadai paired with spiced chickpea sundal — the go-to evening street snack." },
  { id: 6, name: "Jaffna Crab Curry", image: "street-6.svg", price: "Rs 500 – 900", tag: "Seafood", desc: "Fiery lagoon crab simmered in a roasted-spice curry, best eaten with your hands." }
];

/* ---------- 2. Mobile Navigation ---------- */
function initNav() {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (!toggle || !links) return;

  toggle.addEventListener("click", () => {
    const isOpen = links.classList.toggle("mobile-open");
    toggle.classList.toggle("is-active", isOpen);
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  links.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      links.classList.remove("mobile-open");
      toggle.classList.remove("is-active");
      toggle.setAttribute("aria-expanded", "false");
    });
  });

  // Highlight current page in nav
  const path = window.location.pathname.split("/").pop() || "index.html";
  links.querySelectorAll("a").forEach((a) => {
    const href = a.getAttribute("href");
    if (href === path) a.classList.add("active");
  });
}

/* ---------- 3. Star rating renderer ---------- */
function starsHTML(rating, count) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  let out = "";
  for (let i = 0; i < full; i++) out += "★";
  if (half) out += "⯨";
  for (let i = full + (half ? 1 : 0); i < 5; i++) out += "☆";
  const countHTML = count !== undefined ? `<span class="rating-number">${rating.toFixed(1)} (${count})</span>` : `<span class="rating-number">${rating.toFixed(1)}</span>`;
  return `<span class="stars" aria-label="Rated ${rating} out of 5">${out}${countHTML}</span>`;
}

/* ---------- 4. Render: Restaurant cards ---------- */
function restaurantCardHTML(r) {
  return `
    <article class="food-card" data-name="${r.name.toLowerCase()}" data-category="${r.category}">
      <div class="food-card-media">
        <img src="${r.image}" alt="${r.name} restaurant in Jaffna" loading="lazy">
        <span class="food-card-badge">${r.category}</span>
      </div>
      <div class="food-card-body">
        <h3>${r.name}</h3>
        <p class="food-card-meta">📍 ${r.location}</p>
        <p class="food-card-desc">${r.description.slice(0, 90)}…</p>
        <div class="food-card-footer">
          ${starsHTML(r.rating, r.reviews)}
        </div>
        <a class="btn btn-primary btn-block" href="restaurant-detail.html?id=${r.id}">View Details</a>
      </div>
    </article>`;
}

function renderRestaurantGrid(list, targetId) {
  const el = document.getElementById(targetId);
  if (!el) return;
  el.innerHTML = list.map(restaurantCardHTML).join("");
  const empty = document.getElementById("results-empty");
  if (empty) empty.classList.toggle("show", list.length === 0);
}

/* ---------- 5. Restaurants page: search + filter ---------- */
function initRestaurantsPage() {
  const grid = document.getElementById("restaurant-grid");
  if (!grid) return;

  renderRestaurantGrid(RESTAURANTS, "restaurant-grid");

  const searchInput = document.getElementById("restaurant-search");
  const chips = document.querySelectorAll(".filter-chip[data-filter]");
  let activeCategory = "All";

  function applyFilters() {
    const q = (searchInput?.value || "").trim().toLowerCase();
    const filtered = RESTAURANTS.filter((r) => {
      const matchesCategory = activeCategory === "All" || r.category === activeCategory;
      const matchesQuery = !q || r.name.toLowerCase().includes(q) || r.category.toLowerCase().includes(q) || r.location.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
    renderRestaurantGrid(filtered, "restaurant-grid");
  }

  searchInput?.addEventListener("input", applyFilters);

  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      chips.forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");
      activeCategory = chip.dataset.filter;
      applyFilters();
    });
  });

  // Prefill from ?q= if navigated from homepage search
  const params = new URLSearchParams(window.location.search);
  const q = params.get("q");
  if (q && searchInput) {
    searchInput.value = q;
    applyFilters();
  }
}

/* ---------- 6. Restaurant detail page ---------- */
function initRestaurantDetailPage() {
  const root = document.getElementById("restaurant-detail-root");
  if (!root) return;

  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"), 10) || 1;
  const r = RESTAURANTS.find((x) => x.id === id) || RESTAURANTS[0];

  document.title = `${r.name} — Jaffna Food Guide`;

  document.getElementById("detail-hero-img").src = r.heroImage;
  document.getElementById("detail-hero-img").alt = `${r.name} restaurant`;
  document.getElementById("detail-name").textContent = r.name;
  document.getElementById("detail-location").textContent = r.location;
  document.getElementById("detail-desc").textContent = r.description;
  document.getElementById("detail-price").textContent = r.priceRange;
  document.getElementById("detail-address").textContent = r.address;
  document.getElementById("detail-rating-num").textContent = r.rating.toFixed(1);
  document.getElementById("detail-rating-count").textContent = `${r.reviews} reviews`;
  document.getElementById("detail-stars").innerHTML = starsHTML(r.rating);
  const ratingStarsEl = document.getElementById("detail-rating-stars");
  if (ratingStarsEl) ratingStarsEl.textContent = starsHTML(r.rating).match(/[★⯨☆]+/)[0];

  const tagRow = document.getElementById("detail-tags");
  tagRow.innerHTML = r.tags.map((t) => `<span class="tag">${t}</span>`).join("");

  const mapBtn = document.getElementById("map-btn");
  mapBtn.href = `https://www.google.com/maps/search/?api=1&query=${r.mapQuery}`;

  const waBtn = document.getElementById("whatsapp-btn");
  waBtn.href = `https://wa.me/${r.phone}?text=${encodeURIComponent("Hi " + r.name + ", I'd like to make a reservation via Jaffna Food Guide.")}`;

  const mapFrame = document.getElementById("map-frame");
  if (mapFrame) mapFrame.src = `https://maps.google.com/maps?q=${r.mapQuery}&output=embed`;

  renderMenu(r.menu, "All");

  const tabs = document.querySelectorAll(".menu-tab");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      renderMenu(r.menu, tab.dataset.tab);
    });
  });

  function renderMenu(menu, filter) {
    const list = document.getElementById("menu-list");
    const items = filter === "All" ? menu : menu.filter((m) => m.category === filter);
    list.innerHTML = items.map((m) => `
      <div class="menu-item">
        <img src="${m.img}" alt="${m.name}" loading="lazy">
        <div class="menu-item-body">
          <h4>${m.name}</h4>
          <p>${m.category}</p>
        </div>
        <div class="menu-item-price">Rs ${m.price}</div>
      </div>`).join("");
  }

  // Suggested restaurants (excluding current)
  const suggested = RESTAURANTS.filter((x) => x.id !== r.id).slice(0, 3);
  const suggestedEl = document.getElementById("suggested-restaurants");
  if (suggestedEl) suggestedEl.innerHTML = suggested.map(restaurantCardHTML).join("");
}

/* ---------- 7. Homepage: featured content + search redirect ---------- */
function initHomepage() {
  const featuredR = document.getElementById("featured-restaurants");
  if (featuredR) {
    const top = [...RESTAURANTS].sort((a, b) => b.rating - a.rating).slice(0, 3);
    featuredR.innerHTML = top.map(restaurantCardHTML).join("");
  }

  const form = document.getElementById("home-search-form");
  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    const q = document.getElementById("home-search-input").value.trim();
    window.location.href = `restaurants.html${q ? "?q=" + encodeURIComponent(q) : ""}`;
  });

  // Category quick links on homepage
  document.querySelectorAll("[data-category-link]").forEach((el) => {
    el.addEventListener("click", () => {
      window.location.href = `restaurants.html?q=${encodeURIComponent(el.dataset.categoryLink)}`;
    });
  });
}

/* ---------- 8. Cafes page rendering ---------- */
function initCafesPage() {
  const el = document.getElementById("cafe-grid");
  if (!el) return;
  el.innerHTML = CAFES.map((c) => `
    <article class="food-card">
      <div class="food-card-media">
        <img src="${c.image}" alt="${c.name} in Jaffna" loading="lazy">
        <span class="food-card-badge">Cafe</span>
      </div>
      <div class="food-card-body">
        <h3>${c.name}</h3>
        <p class="food-card-meta">📍 ${c.location}</p>
        <p class="food-card-desc">${c.desc}</p>
        <div class="food-card-footer">${starsHTML(c.rating, c.reviews)}</div>
      </div>
    </article>`).join("");
}

/* ---------- 9. Street food page rendering ---------- */
function streetCardHTML(s) {
  return `
    <article class="street-card">
      <div class="street-card-media">
        <img src="${s.image}" alt="${s.name}" loading="lazy">
        <span class="street-price">${s.price}</span>
      </div>
      <div class="street-card-body">
        <h3>${s.name}</h3>
        <p>${s.desc}</p>
        <span class="street-tag">${s.tag}</span>
      </div>
    </article>`;
}

function initStreetFoodPage() {
  const el = document.getElementById("street-grid");
  if (!el) return;
  el.innerHTML = STREET_FOODS.map(streetCardHTML).join("");

  const chips = document.querySelectorAll(".filter-bar .filter-chip");
  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      chips.forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");
      const tag = chip.textContent.trim();
      const filtered = tag === "All" ? STREET_FOODS : STREET_FOODS.filter((s) => s.tag === tag);
      el.innerHTML = filtered.map(streetCardHTML).join("");
    });
  });
}

/* ---------- 10. Review form (interactive star input) ---------- */
function initReviewForm() {
  const starInput = document.getElementById("star-input");
  if (!starInput) return;

  const buttons = starInput.querySelectorAll("button");
  let selected = 0;

  buttons.forEach((btn) => {
    const val = parseInt(btn.dataset.value, 10);
    btn.addEventListener("click", () => {
      selected = val;
      buttons.forEach((b) => b.classList.toggle("active", parseInt(b.dataset.value, 10) <= selected));
      document.getElementById("star-value").value = selected;
    });
  });

  const form = document.getElementById("review-form");
  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    const msg = document.getElementById("review-form-msg");
    msg.textContent = "Thank you! Your review has been submitted for moderation.";
    msg.classList.add("show");
    form.reset();
    buttons.forEach((b) => b.classList.remove("active"));
    selected = 0;
    setTimeout(() => msg.classList.remove("show"), 5000);
  });
}

/* ---------- 11. Contact / newsletter forms (generic) ---------- */
function initGenericForms() {
  document.querySelectorAll("form[data-simple-form]").forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const msg = form.querySelector(".form-msg");
      if (msg) {
        msg.textContent = "Thanks! We'll be in touch shortly.";
        msg.classList.add("show");
      }
      form.reset();
    });
  });
}

/* ---------- 12. Init ---------- */
document.addEventListener("DOMContentLoaded", () => {
  initNav();
  initHomepage();
  initRestaurantsPage();
  initRestaurantDetailPage();
  initCafesPage();
  initStreetFoodPage();
  initReviewForm();
  initGenericForms();
});
