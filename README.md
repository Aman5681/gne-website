# Senterra Energy — Industrial Energy Storage & Telecom Power Systems UI

A modern, high-performance clean-tech web application for **Senterra Energy** designed with the cinematic visual aesthetic of **Rayzon Solar**.

---

## ⚡ Overview

Senterra Energy is an Indian manufacturer of utility-scale Battery Energy Storage Systems (BESS) and mission-critical telecom passive power solutions engineered in Bengaluru, Karnataka.

This project delivers a responsive web experience featuring:
- **Floating Glassmorphic Header**: Transparent on top of the hero, transitioning into frosted glass on scroll with responsive left-anchored branding and centered navigation.
- **Cinematic Clean-Energy Hero**: Industrial backdrop with vector containerized BESS arrays, solar field reflections, and live Central NOC telemetry indicators.
- **"Why Senterra" Innovation Grid**: Credibility pillars detailing the 5 GWh automated Bengaluru gigafactory, active liquid thermal loops, Tier-1 EPC bankability (e.g. ₹1,994M L&T Kajra Solar project), and ISO 27001 SCADA.
- **Interactive 3D Container Explorer**: Clickable 20ft container schematic with 4 real-time hotspots (Dual Chillers, LiFePO₄ Racks, Aerosol Fire Safety, Master BMS).
- **Dynamic BESS Sizing Calculator**: Interactive sliders for power (MW) and duration (Hours) calculating total MWh, container block counts, inverter rating, land footprint, and annual $CO_2$ displacement.
- **Complete 16-Product Catalog**: Instant search, category filters (BESS, Telecom, Hybrid, SCADA), and technical spec sheet modals.
- **Interactive RFQ & Proposals**: Seamless data injection from the calculator straight into the request form.

---

## 🛠️ Tech Stack & Prerequisites

- **Frontend**: Semantic HTML5, Custom Industrial CSS3 (Flexbox/Grid, CSS Variables, Glassmorphism), Vanilla JavaScript (ES6+).
- **Icons & Graphics**: Pure inline SVG graphics for crisp resolution and zero external icon-font dependencies.
- **Local Server**: Lightweight Python 3 HTTP server (`server.py`) with automatic free port detection and CORS headers.
- **Prerequisites**:
  - [Git](https://git-scm.com/) installed on your machine.
  - [Python 3.x](https://www.python.org/) (installed by default on macOS and most Linux distros).
  - Any modern web browser (Google Chrome, Apple Safari, Mozilla Firefox, Microsoft Edge).

---

## 🚀 Getting Started

Follow these step-by-step instructions to clone, run, and explore the project locally.

### Step 1: Clone the Repository

Open your terminal or command prompt and clone the repository:

```bash
git clone https://github.com/<your-username>/<your-repo-name>.git
```

Navigate into the project directory:

```bash
cd <your-repo-name>
```

*(If you are running from this workspace directly, you are already in the project directory!)*

---

### Step 2: Start the Local Development Server

You have multiple options to start and view the application:

#### Option A: Using the Included Python Server (Recommended)

Run the included `server.py` script:

```bash
python3 server.py 8080
```

The script will automatically bind to port `8080` (or the next available port if `8080` is in use) and display:

```
==================================================
 Senterra Energy UI Server running successfully!
 URL: http://localhost:8080
 Directory: /path/to/project
==================================================
```

#### Option B: Using Python's Built-in HTTP Module

Alternatively, run Python's built-in static server:

```bash
python3 -m http.server 8080
```

#### Option C: Using Node.js / npx serve

If you prefer Node.js:

```bash
npx serve .
```

#### Option D: Direct Browser Launch (No Server Required)

Since the project uses zero external build dependencies and vanilla assets, you can also open `index.html` directly in your browser:

- **macOS**:
  ```bash
  open index.html
  ```
- **Linux**:
  ```bash
  xdg-open index.html
  ```
- **Windows**:
  ```cmd
  start index.html
  ```
- Or simply double-click `index.html` in your file explorer.

---

### Step 3: Open in Browser

Open your preferred web browser and navigate to:

```
http://localhost:8080
```

*(If port 8080 was busy and the server selected another port, use the URL printed in your terminal, e.g. `http://localhost:8081`)*.

---

## 📂 Project Directory Structure

```text
├── index.html          # Main HTML structure with semantic sections & layout
├── styles.css          # Industrial design system, glassmorphism, responsive styles
├── app.js              # Product catalog data, 3D explorer, calculator logic, modals
├── server.py           # Custom local Python HTTP server with auto-port fallback
└── README.md           # Project documentation and getting started guide
```

---

## 🧭 Key Sections & Features

1. **Top Floating Navigation (`#navbar`)**:
   - Left-anchored geometric brand mark.
   - Centered single-line links (`Home`, `Why Senterra`, `Products ▾`, `3D Explorer`, `Sizing Tool`, `Services`, `Contact Us`).
   - Mega-menu with category breakdowns and highlighted flagship specs.
   - Right action items: `Bengaluru 5 GWh ⚡` rounded pill button and `Request Quote` CTA.

2. **Hero Section (`#home`)**:
   - ₹1,994M L&T Kajra Solar project award milestone tag.
   - High-contrast typography and multi-layered twilight energy vector artwork.
   - Pinned frosted glass metric strip (5 GWh Capacity, 10,000+ Sites, 1,500V DC, ISO Tri-Certified).

3. **Why Senterra (`#why-senterra`)**:
   - 4 credibility cards with checklists: Automated Gigafactory, Liquid Thermal Technology, Tier-1 EPC Bankability, and Multi-Tier BMS SCADA.

4. **3D Container Explorer (`#container-explorer`)**:
   - Clickable hotspots on the 20ft container cutaway:
     - `01`: Dual Active Liquid Chillers (2x 45 kW)
     - `02`: High-Density LiFePO₄ Battery Racks (1,500V DC)
     - `03`: Aerosol Fire Suppression (NFPA 855 / UL9540A)
     - `04`: Master BMS & Edge Gateway

5. **Products Portfolio (`#products`)**:
   - Live search input and category filter buttons.
   - 16 product cards with quick specifications and "Quick Specs" modal trigger.

6. **BESS Sizing Console (`#calculator`)**:
   - Dynamic power rating (1 to 100 MW) and duration (1 to 8 Hours) sliders.
   - Real-time computation of container units, inverter rating, footprint ($m^2$), and carbon offset.
   - "Inject Sizing into RFQ Proposal" button.

7. **Contact & Proposal Desk (`#contact`)**:
   - Direct OEM telephone numbers (`+91-80-284 377 92`), email, and Bengaluru facility location.
   - RFQ form with validation and simulated submission confirmation.

8. **Corporate Footer**:
   - Direct links to statutory CSR reports (2022–25) and Annual Returns.

---

## 🚢 Pushing to Your GitHub Repository

If you want to push this project to a new GitHub repository:

1. **Create a new repository on GitHub**:
   - Go to [github.com/new](https://github.com/new).
   - Enter a name (e.g. `senterra-energy-ui`).
   - Choose Public or Private and click **Create repository** (do not initialize with a README since we already have one).

2. **Stage and commit your files**:
   ```bash
   git add .
   git commit -m "feat: complete Senterra Energy clean-tech UI with BESS calculator and 3D explorer"
   ```

3. **Link to your GitHub remote and push**:
   ```bash
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git branch -M main
   git push -u origin main
   ```

---

## 📄 License & Attribution

Designed and engineered as a modern clean-tech enterprise web interface for [Senterra Energy](https://senterraenergy.com/) with transition aesthetics inspired by [Rayzon Solar](https://rayzonsolar.com/). All trademarks, logos, and company details belong to their respective entity holders.
