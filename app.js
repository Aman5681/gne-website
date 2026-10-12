/**
 * Senterra Energy - Modern Industrial UI Interactive Logic (Rayzon Solar Inspired)
 * Products catalog, 3D Container Explorer, Technical Spec Viewer, BESS Estimator, RFQ Handler
 */

// 1. Hotspot Subsystems Database for 3D Container Explorer
const HOTSPOT_DATA = {
  chiller: {
    tag: "SUBSYSTEM 01 · THERMAL CONTROL",
    title: "Active Dual Liquid Chillers",
    description: "Two redundant 45 kW industrial liquid chillers circulating dielectric glycol-water coolant directly through aluminum cold plates under every battery module.",
    data: [
      { label: "Cooling Capacity", value: "2x 45 kW Active Compressors" },
      { label: "Temperature Delta", value: "Cell Delta ≤ ±2.5 °C" },
      { label: "Operating Ambient", value: "-30 °C to +55 °C" },
      { label: "Coolant Fluid", value: "Ethylene Glycol 50/50 mix" }
    ]
  },
  racks: {
    tag: "SUBSYSTEM 02 · STORAGE CORE",
    title: "High-Density LiFePO₄ Battery Racks",
    description: "Tier-1 prismatic Lithium Iron Phosphate cells grouped into high-voltage strings. Featuring laser-welded nickel busbars, cell compression retention, and integrated thermal insulation barriers.",
    data: [
      { label: "Nominal DC Energy", value: "5,016 kWh (5.01 MWh)" },
      { label: "DC System Voltage", value: "1,000 VDC – 1,500 VDC" },
      { label: "Cycle Longevity", value: "≥ 6,000 Cycles (@ 80% DoD)" },
      { label: "Cell Format", value: "Prismatic 314Ah LiFePO₄" }
    ]
  },
  safety: {
    tag: "SUBSYSTEM 03 · FIRE SUPPRESSION",
    title: "Aerosol Suppression & Multi-Gas Sniffers",
    description: "Complete NFPA 855-aligned hazard mitigation. Multi-gas detection sensors sniff off-gas hydrocarbons 15 minutes before thermal runaway, triggering high-speed potassium-carbonate aerosol flooding.",
    data: [
      { label: "Suppression Agent", value: "Stat-X / Aerosol Solid Core" },
      { label: "Gas Detection", value: "CO, H₂, VOCs, and Smoke Sensors" },
      { label: "Deflagration Vents", value: "Spring-loaded NFPA 68 pressure panels" },
      { label: "Certification", value: "UL9540A Large-Scale Fire Tested" }
    ]
  },
  bms: {
    tag: "SUBSYSTEM 04 · INTELLIGENCE",
    title: "Master BMS & ISO 27001 Edge Gateway",
    description: "Three-tier architecture (BMU on module, BCMU on rack, BMMS on container) evaluating cell voltage down to ±1.5 mV and state-of-health algorithms with automated contactor trip.",
    data: [
      { label: "Protection Trigger", value: "< 10 ms breaker trip" },
      { label: "Balancing Method", value: "Active + Passive Dynamic" },
      { label: "Comms Protocols", value: "Modbus TCP, CAN 2.0B, IEC 61850" },
      { label: "Cloud Link", value: "4G LTE / Fiber to Central NOC" }
    ]
  }
};

function selectHotspot(hotspotKey) {
  const spot = HOTSPOT_DATA[hotspotKey];
  if (!spot) return;

  // Update pin active state
  document.querySelectorAll(".hotspot-pin").forEach(pin => {
    if (pin.dataset.spot === hotspotKey) {
      pin.classList.add("active");
    } else {
      pin.classList.remove("active");
    }
  });

  // Animate and update panel
  const panel = document.getElementById("hotspotCard");
  if (!panel) return;

  panel.style.opacity = "0.4";
  panel.style.transform = "translateY(6px)";

  setTimeout(() => {
    document.getElementById("spotTag").textContent = spot.tag;
    document.getElementById("spotTitle").textContent = spot.title;
    document.getElementById("spotDesc").textContent = spot.description;
    
    document.getElementById("spotData1").textContent = spot.data[0].value;
    document.getElementById("spotData2").textContent = spot.data[1].value;
    document.getElementById("spotData3").textContent = spot.data[2].value;
    document.getElementById("spotData4").textContent = spot.data[3].value;

    panel.style.transition = "all 0.3s ease";
    panel.style.opacity = "1";
    panel.style.transform = "translateY(0)";
  }, 150);
}

// 2. Comprehensive Products Catalog - Flagship BESS Solutions
const PRODUCTS_DATA = [
  // --- UTILITY-SCALE BESS ---
  {
    id: "5mwh-block",
    code: "SE-5MWH",
    category: "utility",
    categoryName: "Utility-Scale BESS",
    title: "5 MWh DC Battery Block",
    tagline: "Utility-Grade LiFePO₄ Containerized Storage",
    description: "Standardized 20ft ISO container delivering 5.01 MWh DC capacity. Integrated active liquid thermal management, aerosol fire extinguishing, and multi-tier BMS protection for utility renewables.",
    badgeClass: "badge-bess",
    specs: [
      { label: "Nominal DC Capacity", value: "5,016 kWh (5.01 MWh)" },
      { label: "Cell Chemistry", value: "Lithium Iron Phosphate (LiFePO₄)" },
      { label: "DC Voltage Range", value: "1,000 VDC – 1,500 VDC" },
      { label: "Cooling Architecture", value: "Active Industrial Liquid Cooling" },
      { label: "Cycle Life", value: "≥ 6,000 Cycles (@ 80% DoD, 25°C)" },
      { label: "Container Enclosure", value: "20ft High Cube ISO Container (IP55)" }
    ],
    highlights: [
      { title: "Grid Ready", text: "CE, IEC 62619, UL9540A test compliant" },
      { title: "Liquid Cooled", text: "Uniform cell temp within ±2.5°C delta" },
      { title: "Turnkey FAT", text: "100% factory pre-commissioned in Bengaluru" }
    ],
    fullDetails: "Engineered specifically for utility solar firming, transmission peak shaving, and frequency response. The container comes pre-wired with high-voltage DC combiners, HVAC chillers, multi-sensor gas detection, NFPA 855-aligned aerosol fire suppression, and Senterra Tier-3 Master BMS controllers."
  },

  // --- COMMERCIAL & INDUSTRIAL BESS ---
  {
    id: "ci-pack",
    code: "SE-CI-PACK",
    category: "ci",
    categoryName: "Commercial & Industrial (C&I)",
    title: "C&I Product & Pack",
    tagline: "Commercial & Industrial BESS Cabinets",
    description: "Modular 100 kWh to 500 kWh all-in-one outdoor storage cabinets tailored for factories, data centers, hospitals, and commercial solar microgrids.",
    badgeClass: "badge-cyan",
    specs: [
      { label: "Nominal Capacity Range", value: "100 kWh – 500 kWh Modular" },
      { label: "Cell Chemistry", value: "Lithium Iron Phosphate (LiFePO₄)" },
      { label: "Integrated Architecture", value: "LiFePO₄ Racks + PCS Inverter + Fire Aerosol" },
      { label: "Enclosure & Footprint", value: "IP54 Outdoor Rated · < 2.5 m²" }
    ],
    highlights: [
      { title: "Plug-and-Play", text: "Factory integrated & pre-tested" },
      { title: "Demand Cut", text: "Eliminates industrial maximum demand fines" },
      { title: "Zero Diesel", text: "Silent, clean replacement for backup gensets" }
    ],
    fullDetails: "Engineered for commercial enterprises seeking uninterrupted clean power and demand charge mitigation without requiring extensive civil infrastructure."
  }
];

// 3. Render Products Grid
function renderProducts(filter = "all", searchQuery = "") {
  const container = document.getElementById("productsGrid");
  if (!container) return;

  const normalizedQuery = searchQuery.trim().toLowerCase();

  const filtered = PRODUCTS_DATA.filter(prod => {
    const matchesFilter = (filter === "all") || (filter === "bess") || (prod.category === filter);
    const matchesSearch = !normalizedQuery || 
      prod.title.toLowerCase().includes(normalizedQuery) ||
      prod.description.toLowerCase().includes(normalizedQuery) ||
      prod.specs.some(s => s.value.toLowerCase().includes(normalizedQuery) || s.label.toLowerCase().includes(normalizedQuery));
    return matchesFilter && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 48px; background: rgba(255,255,255,0.02); border-radius: 12px; border: 1px dashed rgba(255,255,255,0.15);">
        <p style="font-size: 16px; color: var(--text-slate); margin-bottom: 8px;">No matching power solutions found.</p>
        <p style="font-size: 13px; color: var(--text-muted);">Try adjusting your search terms or selecting another category.</p>
        <button class="btn btn-sm btn-outline-white" style="margin-top: 16px;" onclick="resetFilters()">Reset All Filters</button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(prod => `
    <article class="prod-card" data-category="${prod.category}">
      <div>
        <div class="prod-card-top">
          <span class="prod-badge ${prod.badgeClass}">${prod.categoryName}</span>
          <span style="font-size: 11px; font-family: var(--font-mono); color: var(--text-dim); letter-spacing: 0.5px;">${prod.code}</span>
        </div>
        <h3 class="prod-title">${prod.title}</h3>
        <p class="prod-desc">${prod.description}</p>
        
        <div class="prod-specs-box">
          ${prod.specs.slice(0, 4).map(s => `
            <div class="spec-line">
              <span class="spec-lbl">${s.label}:</span>
              <span class="spec-val">${s.value}</span>
            </div>
          `).join("")}
        </div>
      </div>

      <div class="prod-card-actions">
        <button class="btn btn-outline-white btn-sm" style="flex: 1;" onclick="openSpecModal('${prod.id}')">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" x2="16" y1="12" y2="12"/><line x1="12" x2="12" y1="8" y2="12"/></svg>
          Quick Specs
        </button>
        <button class="btn btn-emerald btn-sm" onclick="initiateRfqForProduct('${prod.title}')">
          RFQ
        </button>
      </div>
    </article>
  `).join("");
}

// 4. Product Filters & Search
function setupProductInteractions() {
  const filterBtns = document.querySelectorAll(".filter-pill");
  const searchInput = document.getElementById("productSearchInput");

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.dataset.filter;
      const query = searchInput ? searchInput.value : "";
      renderProducts(filter, query);
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const activeBtn = document.querySelector(".filter-pill.active");
      const filter = activeBtn ? activeBtn.dataset.filter : "all";
      renderProducts(filter, e.target.value);
    });
  }

  // Handle mega-menu and vertical links filter triggers
  document.querySelectorAll("[data-filter]").forEach(link => {
    if (!link.classList.contains("filter-pill")) {
      link.addEventListener("click", (e) => {
        const targetFilter = link.dataset.filter;
        const matchingBtn = document.querySelector(`.filter-pill[data-filter="${targetFilter}"]`);
        if (matchingBtn) {
          matchingBtn.click();
        }
      });
    }
  });

  // Handle direct product links from mega-menu
  document.querySelectorAll("[data-prod]").forEach(link => {
    link.addEventListener("click", (e) => {
      const prodId = link.dataset.prod;
      if (prodId) {
        openSpecModal(prodId);
      }
    });
  });
}

function resetFilters() {
  const allBtn = document.querySelector('.filter-pill[data-filter="all"]');
  const searchInput = document.getElementById("productSearchInput");
  if (searchInput) searchInput.value = "";
  if (allBtn) allBtn.click();
}

// 5. Spec Sheet Modal
function openSpecModal(productId) {
  const prod = PRODUCTS_DATA.find(p => p.id === productId);
  if (!prod) return;

  const modalOverlay = document.getElementById("specModalOverlay");
  const modalTitle = document.getElementById("modalProductTitle");
  const modalCategory = document.getElementById("modalProductCategory");
  const modalContent = document.getElementById("modalProductContent");

  if (!modalOverlay || !modalTitle || !modalContent) return;

  modalCategory.textContent = prod.categoryName.toUpperCase();
  modalTitle.textContent = prod.title;

  modalContent.innerHTML = `
    <p class="spec-modal-intro">${prod.description}</p>
    <div style="font-size: 13px; color: #CBD5E1; margin-bottom: 20px; line-height: 1.6;">
      ${prod.fullDetails}
    </div>

    <div class="spec-table-wrap">
      <h4 style="font-size: 14px; font-weight: 800; color: #FFFFFF; margin-bottom: 8px; letter-spacing: 0.8px;">ENGINEERING SPECIFICATIONS</h4>
      <table class="spec-table">
        <tbody>
          ${prod.specs.map(s => `
            <tr>
              <th>${s.label}</th>
              <td>${s.value}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>

    <h4 style="font-size: 14px; font-weight: 800; color: #FFFFFF; margin-bottom: 8px; letter-spacing: 0.8px;">SYSTEM ADVANTAGES</h4>
    <div class="modal-highlights">
      ${prod.highlights.map(h => `
        <div class="m-highlight">
          <strong>${h.title}</strong>
          <span>${h.text}</span>
        </div>
      `).join("")}
    </div>
  `;

  modalOverlay.dataset.activeProduct = prod.title;
  modalOverlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeSpecModal() {
  const modalOverlay = document.getElementById("specModalOverlay");
  if (modalOverlay) {
    modalOverlay.classList.remove("open");
    document.body.style.overflow = "";
  }
}

function initiateRfqForModalProduct() {
  const modalOverlay = document.getElementById("specModalOverlay");
  const prodName = modalOverlay ? modalOverlay.dataset.activeProduct : "Senterra Energy System";
  closeSpecModal();
  initiateRfqForProduct(prodName);
}

function initiateRfqForProduct(prodName) {
  const capacityInput = document.getElementById("rfqCapacity");
  const contactSection = document.getElementById("contact");
  if (capacityInput && contactSection) {
    capacityInput.value = `Interested in ${prodName} - please provide sizing and technical proposal`;
    contactSection.scrollIntoView({ behavior: "smooth" });
    const nameInput = document.getElementById("rfqName");
    if (nameInput) nameInput.focus();
    showToast(`Selected "${prodName}". Enter your details to receive engineering datasheets.`);
  } else {
    window.location.href = `contact.html?product=${encodeURIComponent(prodName)}`;
  }
}

// 6. Dynamic BESS Sizing Calculator
function setupCalculator() {
  const powerSlider = document.getElementById("powerSlider");
  const durationSlider = document.getElementById("durationSlider");
  const powerDisplay = document.getElementById("powerDisplay");
  const durationDisplay = document.getElementById("durationDisplay");
  const appTypeSelect = document.getElementById("calcAppType");
  const solarToggle = document.getElementById("solarToggle");

  const totalMwhOutput = document.getElementById("totalMwhOutput");
  const containerCountOutput = document.getElementById("containerCountOutput");
  const pcsRatingOutput = document.getElementById("pcsRatingOutput");
  const footprintOutput = document.getElementById("footprintOutput");
  const carbonOutput = document.getElementById("carbonOutput");

  if (!powerSlider || !durationSlider) return;

  function recalculate() {
    const powerMw = parseFloat(powerSlider.value);
    const durationHours = parseFloat(durationSlider.value);
    const appType = appTypeSelect.value;
    const hasSolar = solarToggle.checked;

    powerDisplay.textContent = `${powerMw} MW`;
    durationDisplay.textContent = `${durationHours} Hour${durationHours > 1 ? "s" : ""}`;

    let totalMwh = powerMw * durationHours;

    let cRateFactor = 1.0;
    if (appType === "utility-solar") cRateFactor = 1.0;
    if (appType === "peak-shaving") cRateFactor = 1.05;
    if (appType === "telecom-offgrid") cRateFactor = 1.1;
    if (appType === "ci-industrial") cRateFactor = 1.02;

    const effectiveMwh = totalMwh * cRateFactor;
    const singleContainerCapacity = 5.01;
    let containerCount = Math.ceil(effectiveMwh / singleContainerCapacity);
    if (containerCount < 1) containerCount = 1;

    let pcsMw = powerMw;
    const footprintM2 = Math.round(containerCount * 92);
    const annualCarbonTons = Math.round(effectiveMwh * 415 * (hasSolar ? 1.25 : 1.0));

    totalMwhOutput.textContent = `${effectiveMwh.toFixed(1)} MWh`;
    containerCountOutput.textContent = `${containerCount} Unit${containerCount > 1 ? "s" : ""} (20ft ISO Blocks)`;
    pcsRatingOutput.textContent = `${pcsMw.toFixed(1)} MW AC Bi-Directional`;
    footprintOutput.textContent = `~${footprintM2.toLocaleString()} m²`;
    carbonOutput.textContent = `~${annualCarbonTons.toLocaleString()} Tons`;

    window.currentSizingEstimate = {
      powerMw,
      durationHours,
      effectiveMwh: effectiveMwh.toFixed(1),
      containerCount,
      pcsMw: pcsMw.toFixed(1),
      appType: appTypeSelect.options[appTypeSelect.selectedIndex].text,
      solarIntegrated: hasSolar
    };
  }

  powerSlider.addEventListener("input", recalculate);
  durationSlider.addEventListener("input", recalculate);
  appTypeSelect.addEventListener("change", recalculate);
  solarToggle.addEventListener("change", recalculate);

  recalculate();
}

function applySizingToRfq() {
  const estimate = window.currentSizingEstimate;
  if (!estimate) return;

  const capacityInput = document.getElementById("rfqCapacity");
  const messageInput = document.getElementById("rfqMessage");
  const sectorSelect = document.getElementById("rfqSector");

  if (capacityInput) {
    capacityInput.value = `${estimate.powerMw} MW / ${estimate.effectiveMwh} MWh BESS (${estimate.containerCount}x 5 MWh Blocks)`;
  }

  if (messageInput) {
    messageInput.value = `Application: ${estimate.appType}. Solar Hybrid: ${estimate.solarIntegrated ? 'Yes' : 'No'}. Inverter: ${estimate.pcsMw} MW. Please share SLD and technical proposal.`;
  }

  if (sectorSelect) {
    if (estimate.appType.includes("Telecom")) {
      sectorSelect.value = "telecom";
    } else if (estimate.appType.includes("Commercial")) {
      sectorSelect.value = "ci";
    } else {
      sectorSelect.value = "bess-utility";
    }
  }

  const contactSection = document.getElementById("contact");
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });
    showToast("Sizing estimate injected into Proposal Form!");
  } else {
    window.location.href = `contact.html?sizing=${encodeURIComponent(capacitySummary)}`;
  }
}

// 7. RFQ Handler
function handleRfqSubmit(e) {
  e.preventDefault();
  const submitBtn = document.getElementById("rfqSubmitBtn");
  const statusMsg = document.getElementById("rfqStatus");
  const name = document.getElementById("rfqName").value;
  const company = document.getElementById("rfqCompany").value;

  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.textContent = "Transmitting to Senterra Engineering...";
  }

  setTimeout(() => {
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.textContent = "Submit Request for Proposal";
    }

    if (statusMsg) {
      statusMsg.className = "form-status-msg success";
      statusMsg.innerHTML = `
        <strong>Thank you, ${name}!</strong> Your proposal request for <em>${company}</em> has been securely submitted to Senterra Energy Bengaluru. An application specialist will contact you within 24 business hours.
      `;
    }

    showToast("Proposal request transmitted successfully!");
  }, 900);
}

function openRfqModal() {
  const contactSection = document.getElementById("contact");
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });
    const nameInput = document.getElementById("rfqName");
    if (nameInput) nameInput.focus();
  } else {
    window.location.href = "contact.html";
  }
}

// 8. Toast Notification
function showToast(message) {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00D26A" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.transition = "opacity 0.4s ease, transform 0.4s ease";
    toast.style.opacity = "0";
    toast.style.transform = "translateX(100%)";
    setTimeout(() => toast.remove(), 400);
  }, 4000);
}

// 9. Mobile Nav
function setupMobileNav() {
  const mobileToggle = document.getElementById("mobileToggle");
  const mobileDrawer = document.getElementById("mobileDrawer");
  const drawerOverlay = document.getElementById("drawerOverlay");
  const drawerCloseBtn = document.getElementById("drawerCloseBtn");

  if (!mobileToggle || !mobileDrawer) return;

  function openDrawer() {
    mobileDrawer.classList.add("open");
    drawerOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeDrawer() {
    mobileDrawer.classList.remove("open");
    drawerOverlay.classList.remove("active");
    document.body.style.overflow = "";
  }

  window.closeDrawer = closeDrawer;

  mobileToggle.addEventListener("click", openDrawer);
  if (drawerCloseBtn) drawerCloseBtn.addEventListener("click", closeDrawer);
  if (drawerOverlay) drawerOverlay.addEventListener("click", closeDrawer);

  document.querySelectorAll(".mobile-link").forEach(link => {
    link.addEventListener("click", closeDrawer);
  });
}

// 10. Sticky / Floating Header Scroll & Key events
function setupHeaderAndKeyEvents() {
  const navbar = document.getElementById("navbar");
  if (navbar) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });
  }

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeSpecModal();
      if (window.closeDrawer) window.closeDrawer();
    }
  });

  const specModalOverlay = document.getElementById("specModalOverlay");
  if (specModalOverlay) {
    specModalOverlay.addEventListener("click", (e) => {
      if (e.target === specModalOverlay) {
        closeSpecModal();
      }
    });
  }
}

// 11. Active Navigation Indicator for Multi-Page
function setActiveNavLink() {
  let currentFile = window.location.pathname.split("/").pop() || "index.html";
  if (!currentFile || currentFile === "" || currentFile === "/") currentFile = "index.html";

  document.querySelectorAll(".nav-link").forEach(link => {
    const href = link.getAttribute("href");
    if (!href) return;
    const targetFile = href.split("#")[0].split("?")[0];
    if (targetFile === currentFile) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  document.querySelectorAll(".mobile-link").forEach(link => {
    const href = link.getAttribute("href");
    if (!href) return;
    const targetFile = href.split("#")[0].split("?")[0];
    if (targetFile === currentFile) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

// 12. Query Parameter Pre-fill for Contact Form
function initContactFormFromQuery() {
  const urlParams = new URLSearchParams(window.location.search);
  const prodParam = urlParams.get("product");
  const sizingParam = urlParams.get("sizing");
  const capInput = document.getElementById("rfqCapacity");
  if (!capInput) return;

  if (sizingParam) {
    capInput.value = sizingParam;
    showToast("Sizing estimate imported into Proposal Form!");
  } else if (prodParam) {
    capInput.value = `Interested in ${prodParam} - please provide sizing and technical proposal`;
    showToast(`Inquiring about ${prodParam}`);
  }
}

// 13. Rayzon Solar-Style Branded Page Transitions
function setupPageTransitions() {
  const loader = document.getElementById("pageLoader");
  if (!loader) return;

  if (new URLSearchParams(window.location.search).get("notransition") === "1") {
    loader.style.display = "none";
    return;
  }

  // On page load, wait 2.6s matching Rayzon Solar for the full brand sequence to complete, then wipe curtain up
  setTimeout(() => {
    loader.classList.add("loader-exit");
  }, 2600);

  // Back/forward cache restore
  window.addEventListener("pageshow", () => {
    loader.classList.add("loader-exit");
    loader.classList.remove("loader-entering", "loader-enter");
  });

  // Intercept all internal page navigation links
  document.addEventListener("click", (e) => {
    const link = e.target.closest("a");
    if (!link) return;

    const href = link.getAttribute("href");
    if (!href) return;

    // Ignore anchors, telephone, email, javascript, external links
    if (href.startsWith("#") || href.startsWith("tel:") || href.startsWith("mailto:") || href.startsWith("javascript:")) return;
    if (link.target === "_blank") return;
    if (href.startsWith("http://") || href.startsWith("https://")) {
      try {
        const url = new URL(href, window.location.href);
        if (url.origin !== window.location.origin) return;
      } catch (err) {
        return;
      }
    }

    // Determine target file
    const targetFile = href.split("#")[0].split("?")[0];
    let currentFile = window.location.pathname.split("/").pop() || "index.html";
    if (!currentFile || currentFile === "" || currentFile === "/") currentFile = "index.html";

    // If navigating to identical current page with hash anchor, allow smooth scroll
    if (targetFile === currentFile && href.includes("#")) return;

    // Trigger branded transition
    e.preventDefault();

    // Replay typography animation for fresh sequence
    const loaderContent = loader.querySelector(".loader-content");
    if (loaderContent) {
      const clone = loaderContent.cloneNode(true);
      loaderContent.parentNode.replaceChild(clone, loaderContent);
    }

    loader.classList.remove("loader-exit");
    loader.classList.add("loader-enter");
    void loader.offsetWidth; // force reflow
    loader.classList.remove("loader-enter");
    loader.classList.add("loader-entering");

    // Hold for Rayzon Solar duration (2.4s) before navigating to the target page
    setTimeout(() => {
      window.location.href = href;
    }, 2400);
  });
}

// =========================================================================
// 15. Top Viewport Scroll Progress Bar
// =========================================================================
function setupScrollProgress() {
  const progressBar = document.getElementById("scrollProgress");
  if (!progressBar) return;

  const updateProgress = () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight <= 0) {
      progressBar.style.width = "0%";
      return;
    }
    const scrolled = (window.scrollY / totalHeight) * 100;
    progressBar.style.width = Math.min(100, Math.max(0, scrolled)) + "%";
  };

  window.addEventListener("scroll", updateProgress, { passive: true });
  window.addEventListener("resize", updateProgress);
  updateProgress();
}

// =========================================================================
// 16. IntersectionObserver Scroll Reveal & Stagger Sequence
// =========================================================================
function setupScrollReveal() {
  if (!("IntersectionObserver" in window)) {
    document.querySelectorAll(".senterra-section-header, .senterra-sol-card, .joule-sol-card, .senterra-why-card, .why-card, .senterra-frame-card, .epc-card").forEach(el => {
      el.classList.add("is-revealed");
    });
    return;
  }

  // Section Headers Observer
  const headerObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-revealed");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });

  document.querySelectorAll(".senterra-section-header").forEach(header => {
    header.classList.add("reveal-item");
    headerObserver.observe(header);
  });

  // Staggered Cards Observer for Grids (0.08s delay increments)
  const gridObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const cards = entry.target.querySelectorAll(".senterra-sol-card, .joule-sol-card, .senterra-why-card, .why-card, .senterra-frame-card, .epc-card");
        cards.forEach((card, idx) => {
          const delay = (idx * 0.08).toFixed(2);
          card.style.transitionDelay = `${delay}s`;
          card.style.setProperty("--why-delay", `${delay}s`);
          requestAnimationFrame(() => {
            card.classList.add("is-revealed");
          });
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: "0px 0px -50px 0px" });

  document.querySelectorAll(".senterra-ecosystem-grid, .senterra-why-grid, .senterra-framework-grid, .why-grid").forEach(grid => {
    const cards = grid.querySelectorAll(".senterra-sol-card, .joule-sol-card, .senterra-why-card, .why-card, .senterra-frame-card, .epc-card");
    cards.forEach(card => card.classList.add("reveal-item"));
    gridObserver.observe(grid);
  });
}

// =========================================================================
// 17. Interactive Mouse Spotlight Glow on Cards
// =========================================================================
function setupCardSpotlights() {
  const cards = document.querySelectorAll(".why-card, .joule-sol-card, .epc-card, .senterra-why-card, .senterra-sol-card, .senterra-frame-card, .kind-metric-card, .glassmorphic-stat-card, .statement-card, .senterra-cta-banner, .why-kpi-ribbon, .kpi-ribbon-card");
  cards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    });

    card.addEventListener("mouseleave", () => {
      card.style.setProperty("--mouse-x", "-500px");
      card.style.setProperty("--mouse-y", "-500px");
    });
  });
}

// =========================================================================
// 18. Hero Parallax & Glass Depth
// =========================================================================
function setupHeroParallax() {
  const heroCard = document.querySelector(".senterra-hero-card");
  const heroBg = document.querySelector(".senterra-hero-bg");
  if (!heroCard || !heroBg) return;

  let ticking = false;

  const updateParallax = () => {
    const rect = heroCard.getBoundingClientRect();
    if (rect.bottom > 0 && rect.top < window.innerHeight) {
      const scrollDistance = -rect.top;
      if (scrollDistance > 0) {
        const progress = Math.min(1.2, scrollDistance / (heroCard.offsetHeight || 800));
        const scale = (1 + progress * 0.12).toFixed(4);
        const translateY = (progress * 48).toFixed(2);
        heroBg.style.transform = `scale(${scale}) translateY(${translateY}px) translateZ(0)`;
      } else {
        heroBg.style.transform = "scale(1) translateY(0px) translateZ(0)";
      }
    }
    ticking = false;
  };

  window.addEventListener("scroll", () => {
    if (!ticking) {
      requestAnimationFrame(updateParallax);
      ticking = true;
    }
  }, { passive: true });

  updateParallax();
}

// =========================================================================
// 19. Kind Energy: Lenis Smooth Inertia Scrolling
// =========================================================================
function initLenisSmoothScroll() {
  if (typeof window.Lenis === "undefined") {
    return;
  }

  try {
    const lenis = new window.Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.5,
      infinite: false
    });

    window.__lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    document.documentElement.classList.add("lenis-smooth");
  } catch (err) {
    console.warn("Lenis init fallback:", err);
  }
}

// =========================================================================
// 20. Kind Energy: Scroll-Driven SVG Energy Circuit Dividers
// =========================================================================
function setupCircuitDividers() {
  const configs = [
    { dividerId: "circuitDivider1", pathId: "circuitPath1", nodeId: "circuitNode1" },
    { dividerId: "circuitDivider2", pathId: "circuitPath2", nodeId: "circuitNode2" }
  ];

  const dividers = [];

  configs.forEach(cfg => {
    const el = document.getElementById(cfg.dividerId);
    const path = document.getElementById(cfg.pathId);
    const node = document.getElementById(cfg.nodeId);
    if (!el || !path) return;

    let totalLength = 1200;
    try {
      totalLength = path.getTotalLength() || 1200;
    } catch (e) {
      totalLength = 1200;
    }

    path.style.strokeDasharray = `${totalLength} ${totalLength}`;
    path.style.strokeDashoffset = `${totalLength}`;

    dividers.push({ el, path, node, totalLength });
  });

  if (!dividers.length) return;

  let ticking = false;

  const updateCircuits = () => {
    const vh = window.innerHeight;

    dividers.forEach(item => {
      const rect = item.el.getBoundingClientRect();
      // Start tracing when the divider top enters 85% of viewport
      // Complete tracing when the divider reaches 25% of viewport
      const startPoint = vh * 0.85;
      const endPoint = vh * 0.25;
      const distance = startPoint - endPoint;

      let progress = (startPoint - rect.top) / distance;
      progress = Math.max(0, Math.min(1, progress));

      const offset = item.totalLength * (1 - progress);
      item.path.style.strokeDashoffset = `${offset}`;

      if (item.node) {
        try {
          const ptDist = Math.max(0.1, Math.min(item.totalLength, item.totalLength * progress));
          const point = item.path.getPointAtLength(ptDist);
          item.node.setAttribute("transform", `translate(${point.x.toFixed(1)}, ${point.y.toFixed(1)})`);
          item.node.style.opacity = progress > 0.02 ? "1" : "0";
        } catch (e) {
          // Fallback if SVG measurement is unavailable
        }
      }
    });

    ticking = false;
  };

  window.addEventListener("scroll", () => {
    if (!ticking) {
      requestAnimationFrame(updateCircuits);
      ticking = true;
    }
  }, { passive: true });

  window.addEventListener("resize", () => {
    dividers.forEach(item => {
      try {
        item.totalLength = item.path.getTotalLength() || item.totalLength;
        item.path.style.strokeDasharray = `${item.totalLength} ${item.totalLength}`;
      } catch (e) {}
    });
    updateCircuits();
  });

  updateCircuits();
}

// =========================================================================
// 21. Kind Energy: Kinetic Text Scrub / Word-by-Word Scroll Illumination
// =========================================================================
function setupTextScrub() {
  const scrubTargets = document.querySelectorAll('[data-scroll-scrub="words"]');
  if (!scrubTargets.length) return;

  function wrapTextNodesInWords(root) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null, false);
    const textNodes = [];
    let n;
    while ((n = walker.nextNode())) {
      if (n.nodeValue && n.nodeValue.trim().length > 0) {
        textNodes.push(n);
      }
    }

    textNodes.forEach(textNode => {
      const parts = textNode.nodeValue.split(/(\s+)/);
      const fragment = document.createDocumentFragment();
      parts.forEach(part => {
        if (/^\s+$/.test(part)) {
          fragment.appendChild(document.createTextNode(part));
        } else if (part.length > 0) {
          const span = document.createElement("span");
          span.className = "scrub-word";
          if (textNode.parentNode && textNode.parentNode.classList) {
            if (textNode.parentNode.classList.contains("highlight-emerald")) {
              span.classList.add("highlight-emerald");
            }
            if (textNode.parentNode.classList.contains("highlight-cyan")) {
              span.classList.add("highlight-cyan");
            }
          }
          span.textContent = part;
          fragment.appendChild(span);
        }
      });
      textNode.parentNode.replaceChild(fragment, textNode);
    });
  }

  scrubTargets.forEach(el => wrapTextNodesInWords(el));

  let ticking = false;

  const updateScrub = () => {
    const vh = window.innerHeight;

    scrubTargets.forEach(container => {
      const rect = container.getBoundingClientRect();
      const words = container.querySelectorAll(".scrub-word");
      if (!words.length) return;

      const start = vh * 0.88;
      const end = vh * 0.32;
      const range = start - end;
      let progress = (start - rect.top) / range;
      progress = Math.max(0, Math.min(1, progress));

      const activeIdx = Math.floor(progress * (words.length + 1));
      words.forEach((w, i) => {
        if (i < activeIdx && progress > 0) {
          w.classList.add("illuminated");
        } else {
          w.classList.remove("illuminated");
        }
      });
    });

    ticking = false;
  };

  window.addEventListener("scroll", () => {
    if (!ticking) {
      requestAnimationFrame(updateScrub);
      ticking = true;
    }
  }, { passive: true });

  window.addEventListener("resize", updateScrub);
  updateScrub();
}

// =========================================================================
// 22. Kind Energy: Milestone Metrics Live Scroll-Triggered Counters
// =========================================================================
function setupMilestoneCounters() {
  const counters = document.querySelectorAll(".kind-counter");
  if (!counters.length) return;

  const animateCounter = (el) => {
    const target = parseInt(el.getAttribute("data-target"), 10) || 0;
    const suffix = el.getAttribute("data-suffix") || "";
    const duration = 1800; // ms
    const startTime = performance.now();

    const update = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / duration);
      // easeOutExpo
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const currentVal = Math.round(ease * target);

      el.textContent = currentVal.toLocaleString("en-US") + suffix;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.textContent = target.toLocaleString("en-US") + suffix;
      }
    };

    requestAnimationFrame(update);
  };

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3, rootMargin: "0px 0px -40px 0px" });

    counters.forEach(c => observer.observe(c));
  } else {
    counters.forEach(c => animateCounter(c));
  }
}

// 13b. Ecosystem Solution Segmented Filter Tabs
function setupSolutionTabs() {
  const tabBtns = document.querySelectorAll(".sol-tab-btn");
  const cards = document.querySelectorAll("#solutionsDeck .senterra-sol-card");
  if (!tabBtns.length || !cards.length) return;

  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const filter = btn.getAttribute("data-filter");

      tabBtns.forEach(b => {
        b.classList.remove("active");
        b.setAttribute("aria-selected", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");

      cards.forEach(card => {
        const cardType = card.getAttribute("data-sol");
        if (filter === "all" || cardType === filter) {
          card.style.display = "flex";
          card.style.opacity = "0";
          card.style.transform = "translateY(12px)";
          requestAnimationFrame(() => {
            card.style.transition = "opacity 0.35s ease, transform 0.35s ease";
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
          });
        } else {
          card.style.display = "none";
        }
      });
    });
  });
}

// 13c. EPC Execution Framework Stage Filter Tabs
function setupEpcTabs() {
  const tabBtns = document.querySelectorAll(".epc-tab-btn");
  const cards = document.querySelectorAll("#epcDeck .epc-card");
  if (!tabBtns.length || !cards.length) return;

  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const stage = btn.getAttribute("data-epc");

      tabBtns.forEach(b => {
        b.classList.remove("active");
        b.setAttribute("aria-selected", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");

      cards.forEach(card => {
        const phase = card.getAttribute("data-phase");
        if (stage === "all" || phase === stage) {
          card.style.display = "flex";
          card.style.opacity = "0";
          card.style.transform = "translateY(12px)";
          requestAnimationFrame(() => {
            card.style.transition = "opacity 0.35s ease, transform 0.35s ease";
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
          });
        } else {
          card.style.display = "none";
        }
      });
    });
  });
}

// =========================================================================
// Setup Why Senterra Credibility Filter Tabs (why-senterra.html)
// =========================================================================
function setupWhyFilterTabs() {
  const tabBtns = document.querySelectorAll(".why-tab-btn");
  const cards = document.querySelectorAll(".why-card[data-pillar]");
  if (!tabBtns.length || !cards.length) return;

  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const filter = btn.getAttribute("data-filter");

      tabBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      cards.forEach(card => {
        const pillar = card.getAttribute("data-pillar");
        if (filter === "all" || pillar === filter) {
          card.style.display = "flex";
          card.style.opacity = "0";
          card.style.transform = "translateY(12px)";
          requestAnimationFrame(() => {
            card.style.transition = "opacity 0.35s ease, transform 0.35s ease";
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
          });
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  // Enable clicking KPI ribbon cards to jump to corresponding pillar tab
  const kpiCards = document.querySelectorAll(".kpi-ribbon-card[data-target-filter]");
  kpiCards.forEach(card => {
    card.addEventListener("click", () => {
      const targetFilter = card.getAttribute("data-target-filter");
      const matchingBtn = document.querySelector(`.why-tab-btn[data-filter="${targetFilter}"]`);
      if (matchingBtn) {
        matchingBtn.click();
        const tabsSection = document.querySelector(".why-segmented-tabs");
        if (tabsSection) {
          tabsSection.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
      }
    });
  });
}

// 14. Initialization
document.addEventListener("DOMContentLoaded", () => {
  setupPageTransitions();
  setActiveNavLink();
  renderProducts();
  setupProductInteractions();
  setupCalculator();
  setupMobileNav();
  setupHeaderAndKeyEvents();
  initContactFormFromQuery();
  setupScrollProgress();
  setupScrollReveal();
  setupCardSpotlights();
  setupHeroParallax();
  initLenisSmoothScroll();
  setupCircuitDividers();
  setupTextScrub();
  setupMilestoneCounters();
  setupSolutionTabs();
  setupEpcTabs();
  setupWhyFilterTabs();

  const scrollParam = new URLSearchParams(window.location.search).get("scroll");
  const scrollYParam = new URLSearchParams(window.location.search).get("scrollY");

  if (scrollYParam) {
    const y = parseInt(scrollYParam, 10);
    setTimeout(() => {
      window.scrollTo(0, y);
      if (window.__lenis) {
        try { window.__lenis.scrollTo(y, { immediate: true }); } catch (e) {}
      }
      window.dispatchEvent(new Event("scroll"));
    }, 80);
  } else if (scrollParam) {
    const target = document.getElementById(scrollParam);
    if (target) {
      setTimeout(() => {
        target.scrollIntoView({ behavior: "instant", block: "start" });
        window.dispatchEvent(new Event("scroll"));
      }, 80);
    }
  }
});
