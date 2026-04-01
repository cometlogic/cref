const pageData = {
  title: "CReF: Cross-modal and Recurrent Fusion for Depth-conditioned Humanoid Locomotion",
  tagline:
    "A single-stage depth-conditioned humanoid locomotion framework that fuses proprioception and forward-facing depth for robust terrain traversal and zero-shot real-world deployment.",
  paperUrl: "res/paper/CReF.pdf",
  arxivUrl: "https://arxiv.org/abs/2603.29452",
  authors: [
    { name: "Yuan Hao", affiliationIds: [1] },
    { name: "Ruiqi Yu", affiliationIds: [1] },
    { name: "Shixin Luo", affiliationIds: [1] },
    { name: "Guoteng Zhang", affiliationIds: [2] },
    { name: "Jun Wu", affiliationIds: [1] },
    { name: "Qiuguo Zhu", affiliationIds: [1], corresponding: true }
  ],
  affiliations: [
    {
      id: 1,
      text: "Institute of Cyber-Systems and Control, Zhejiang University, Hangzhou 310027, China"
    },
    {
      id: 2,
      text: "School of Control Science and Engineering, Shandong University, Jinan 250061, China"
    }
  ],
  correspondingAuthor: "Corresponding author: Qiuguo Zhu",
  institutionBadge: {
    src: "res/figs/zju.svg",
    alt: "Zhejiang University emblem",
    label: "Primary Institution",
    name: "Zhejiang University"
  },
  heroVideo: {
    poster: "res/posters/cref.jpg",
    webSrc: "res/videos/web/cref.mp4",
    src: "res/videos/cref.mp4"
  },
  heroMetrics: [
    { value: "20+", label: "consecutive stair traversals shown in real-world deployment" },
    { value: "40 cm", label: "platform ascent demonstrated on hardware" },
    { value: "80 cm", label: "gap crossing shown in indoor evaluation" },
    { value: "20 / 26 cm", label: "real-world handrail stairs (rise / tread)" }
  ],
  abstract:
    "Stable traversal over geometrically complex terrain increasingly requires exteroceptive perception, yet prior perceptive humanoid locomotion methods often remain tied to explicit geometric abstractions, either by mediating control through robot-centric 2.5D terrain representations or by shaping depth learning with auxiliary geometry-related targets. Such designs inherit the representational bias of the intermediate or supervisory target and can be restrictive for vertical structures, perforated obstacles, and complex real-world clutter. We propose CReF (Cross-modal and Recurrent Fusion), a single-stage depth-conditioned humanoid locomotion framework that learns locomotion-relevant features directly from raw forward-facing depth without explicit geometric intermediates. CReF couples proprioception and depth tokens through proprioception-queried cross-modal attention, fuses the resulting representation with a gated residual fusion block, and performs temporal integration with a Gated Recurrent Unit (GRU) regulated by a highway-style output gate for state-dependent blending of recurrent and feedforward features. To further improve terrain interaction, we introduce a terrain-aware foothold placement reward that extracts supportable foothold candidates from foot-end point-cloud samples and rewards touchdown locations that lie close to the nearest supportable candidate. Experiments in simulation and on a physical humanoid demonstrate robust traversal over diverse terrains and strong out-of-distribution generalization to scenes containing handrails, hollow pallet assemblies, severe reflective interference, and visually cluttered outdoor surroundings.",
  methodSummary:
    "CReF maps onboard proprioception and forward-facing depth directly to joint position targets without explicit geometric intermediates. The policy uses proprioception-queried cross-modal attention to extract locomotion-relevant depth features, a gated residual fusion block to preserve stable feedforward structure while injecting perceptive cues, and recurrent fusion with a highway-style output gate to regulate how much temporal memory is used under different traversal regimes. Training is further shaped by a terrain-aware foothold placement reward that encourages touchdown near supportable foothold candidates during terrain transitions.",
  methodHighlights: [
    {
      title: "Cross-modal attention",
      text: "Proprioception queries depth tokens to focus the policy on terrain cues that are relevant for the current locomotion state."
    },
    {
      title: "Gated residual fusion",
      text: "Aligns and blends cross-modal features, suppresses unreliable or unstable modality corrections, and preserves the original control features through the residual path."
    },
    {
      title: "Recurrent memory control",
      text: "A GRU and highway-style output gate let the policy increase temporal reliance when instantaneous observations are insufficient."
    },
    {
      title: "Terrain-aware reward",
      text: "Supportable foothold candidates extracted from local point-cloud samples guide touchdown toward safer contact regions."
    }
  ],
  experimentSections: [
    {
      title: "Long-Horizon Stair Traversal",
      intro:
        "The first experiment highlights extended indoor stair traversal. The rollout sustains continuous ascent and descent for roughly seven minutes, emphasizing foothold stability and long-horizon temporal consistency.",
      items: [
        {
          title: "Indoor Continuous Stair Traversal",
          caption:
            "A nearly 7-minute indoor rollout showing repeated stair ascent and descent without resetting the policy, emphasizing long-horizon stability and consistent foothold control.",
          tags: ["Featured", "Indoor", "Long Horizon"],
          poster: "res/posters/indoor_stairs.jpg",
          webSrc: "res/videos/web/indoor_stairs.mp4",
          src: "res/videos/indoor_stairs.mp4",
          featured: true
        }
      ]
    },
    {
      title: "Indoor Terrain Experiments",
      intro:
        "Indoor trials cover fast and slow platform ascent, large gap crossing, terrain transitions, additional OOD-like indoor traversals, and a combined terrain sequence with platform, gap, and stairs in one rollout.",
      items: [
        {
          title: "40 cm Platform - Fast",
          caption:
            "A faster rollout of the 40 cm platform task, illustrating aggressive but stable transition onto the elevated surface.",
          tags: ["Indoor", "Platform"],
          poster: "res/posters/40platform_fast.jpg",
          webSrc: "res/videos/web/40platform_fast.mp4",
          src: "res/videos/40platform_fast.mp4"
        },
        {
          title: "40 cm Platform - Slow",
          caption:
            "A slower platform ascent sequence that exposes detailed foothold placement and balance behavior during the height transition.",
          tags: ["Indoor", "Platform"],
          poster: "res/posters/40platform_slow.jpg",
          webSrc: "res/videos/web/40platform_slow.mp4",
          src: "res/videos/40platform_slow.mp4"
        },
        {
          title: "80 cm Gap",
          caption:
            "Gap traversal on an 80 cm separation, highlighting anticipatory coordination before the crossing step.",
          tags: ["Indoor", "Gap"],
          poster: "res/posters/80gap.jpg",
          webSrc: "res/videos/web/80gap.mp4",
          src: "res/videos/80gap.mp4"
        },
        {
          title: "Gap Terrain Transition",
          caption:
            "Additional terrain-transition behavior around gap-like structures, showing consistent contact decisions near abrupt geometry changes.",
          tags: ["Indoor", "Transition"],
          poster: "res/posters/gap_terrain.jpg",
          webSrc: "res/videos/web/gap_terrain.mp4",
          src: "res/videos/gap_terrain.mp4"
        },
        {
          title: "Indoor OOD Terrain",
          caption:
            "An indoor OOD scene involving hollow pallet assemblies and other out-of-distribution evaluation terrains.",
          tags: ["Indoor", "OOD"],
          poster: "res/posters/ood_full.jpg",
          webSrc: "res/videos/web/ood_full.mp4",
          src: "res/videos/ood_full.mp4"
        },
        {
          title: "Combined Indoor Terrain",
          caption:
            "A composed indoor sequence combining platform, gap, and stairs to showcase continuous terrain transitions within a single rollout.",
          tags: ["Indoor", "Combined"],
          poster: "res/posters/combined.jpg",
          webSrc: "res/videos/web/combined.mp4",
          src: "res/videos/combined.mp4"
        }
      ]
    },
    {
      title: "Real-World OOD Robustness",
      intro:
        "The final group emphasizes challenging real-world scenes with stronger distribution shift, including complex stair surroundings, severe sensing degradation from reflective interference, and less structured wild deployment conditions.",
      items: [
        {
          title: "Real-World Stairs with OOD Structure",
          caption:
            "Deployment on stairs surrounded by additional real-world clutter and structural variations that are not cleanly captured by the training distribution.",
          tags: ["Real World", "OOD", "Stairs"],
          poster: "res/posters/diff_stairs.jpg",
          webSrc: "res/videos/web/diff_stairs.mp4",
          src: "res/videos/diff_stairs.mp4"
        },
        {
          title: "Reflective Interference",
          caption:
            "A real-world robustness case with severe reflective sensing failure, demonstrating stable behavior despite large invalid depth regions.",
          tags: ["Real World", "OOD", "Reflective"],
          poster: "res/posters/reflective.jpg",
          webSrc: "res/videos/web/reflective.mp4",
          src: "res/videos/reflective.mp4"
        },
        {
          title: "Wild Environment Deployment",
          caption:
            "A real-world rollout in a more unstructured wild environment, highlighting robustness to broader visual clutter and scene variation.",
          tags: ["Real World", "OOD", "Wild"],
          poster: "res/posters/wild.jpg",
          webSrc: "res/videos/web/wild.mp4",
          src: "res/videos/wild.mp4"
        }
      ]
    }
  ],
  bibtex: `@article{hao2026cref,
  title={CReF: Cross-modal and Recurrent Fusion for Depth-conditioned Humanoid Locomotion},
  author={Hao, Yuan and Yu, Ruiqi and Luo, Shixin and Zhang, Guoteng and Wu, Jun and Zhu, Qiuguo},
  journal={arXiv preprint arXiv:2603.29452},
  year={2026},
  url={https://arxiv.org/abs/2603.29452}
}`,
  footerNote:
    "This project page presents the paper, method, deployment videos, and citation information for CReF."
};

const dom = {
  title: document.getElementById("project-title"),
  tagline: document.getElementById("hero-tagline"),
  authors: document.getElementById("authors"),
  affiliations: document.getElementById("affiliations"),
  correspondence: document.getElementById("correspondence"),
  institutionBadge: document.getElementById("institution-badge"),
  heroActions: document.getElementById("hero-actions"),
  heroMetrics: document.getElementById("hero-metrics"),
  abstractText: document.getElementById("abstract-text"),
  methodSummary: document.getElementById("method-summary"),
  methodHighlights: document.getElementById("method-highlights"),
  experimentGroups: document.getElementById("experiment-groups"),
  bibtexEntry: document.getElementById("bibtex-entry"),
  footerNote: document.getElementById("footer-note"),
  modal: document.getElementById("video-modal"),
  modalVideo: document.getElementById("modal-video"),
  modalTitle: document.getElementById("modal-title"),
  modalSection: document.getElementById("modal-section"),
  modalCaption: document.getElementById("modal-caption")
};

const loadedVideos = new WeakSet();
let lastFocusedElement = null;

function createAffiliationSup(ids) {
  return ids.map((id) => `<sup>${id}</sup>`).join("");
}

function renderAuthors() {
  dom.authors.innerHTML = pageData.authors
    .map((author) => {
      const star = author.corresponding ? "*" : "";
      return `<span class="author">${author.name}${createAffiliationSup(author.affiliationIds)}${star}</span>`;
    })
    .join("");

  dom.affiliations.innerHTML = pageData.affiliations
    .map((item) => `<p class="affiliation"><sup>${item.id}</sup> ${item.text}</p>`)
    .join("");

  dom.correspondence.textContent = pageData.correspondingAuthor;
}

function renderInstitutionBadge() {
  const badge = pageData.institutionBadge;
  if (!badge || !badge.src) {
    dom.institutionBadge.classList.remove("is-visible");
    dom.institutionBadge.innerHTML = "";
    return;
  }

  dom.institutionBadge.classList.add("is-visible");
  dom.institutionBadge.innerHTML = `
    <img class="institution-badge__mark" src="${badge.src}" alt="${badge.alt}">
    <div class="institution-badge__copy">
      <span class="institution-badge__label">${badge.label}</span>
      <span class="institution-badge__name">${badge.name}</span>
    </div>
  `;
}

function renderActions() {
  const links = [
    {
      label: "Paper",
      href: pageData.paperUrl,
      className: "button button--primary",
      external: true
    },
    {
      label: "arXiv",
      href: pageData.arxivUrl,
      className: "button button--primary",
      external: true
    }
  ];

  dom.heroActions.innerHTML = links
    .map((link) => {
      const targetAttrs = link.external ? 'target="_blank" rel="noreferrer"' : "";
      return `<a class="${link.className}" href="${link.href}" ${targetAttrs}>${link.label}</a>`;
    })
    .join("");
}

function renderMetrics() {
  dom.heroMetrics.innerHTML = pageData.heroMetrics
    .map((metric) => `<article class="metric-card"><strong>${metric.value}</strong><span>${metric.label}</span></article>`)
    .join("");
}

function renderMethodHighlights() {
  dom.methodHighlights.innerHTML = pageData.methodHighlights
    .map(
      (item) => `<article class="method-chip"><strong>${item.title}</strong><span>${item.text}</span></article>`
    )
    .join("");
}

function renderBibtex() {
  dom.bibtexEntry.textContent = pageData.bibtex;
}

function createVideoCard(sectionTitle, item) {
  const cardClasses = ["video-card"];
  if (item.featured) {
    cardClasses.push("video-card--featured");
  }

  return `
    <article class="${cardClasses.join(" ")} reveal">
      <div class="video-card__visual">
        <video
          class="video-card__video js-lazy-video"
          muted
          loop
          playsinline
          preload="none"
          poster="${item.poster}"
          data-src="${item.webSrc}"
          data-fallback-src="${item.src}"
          aria-label="${item.title}"
        ></video>
        <span class="video-card__hint">Muted loop preview</span>
      </div>
      <div class="video-card__meta">
        <div class="video-card__tags">
          ${item.tags.map((tag) => `<span class="video-card__tag">${tag}</span>`).join("")}
        </div>
        <h4 class="video-card__title">${item.title}</h4>
        <p class="video-card__caption">${item.caption}</p>
        <button
          class="video-card__open"
          type="button"
          data-open-video
          data-title="${item.title}"
          data-section="${sectionTitle}"
          data-caption="${item.caption}"
          data-src="${item.src}"
          data-poster="${item.poster}"
        >
          Open video
        </button>
      </div>
    </article>
  `;
}

function renderExperiments() {
  dom.experimentGroups.innerHTML = pageData.experimentSections
    .map((section) => {
      const cards = section.items.map((item) => createVideoCard(section.title, item)).join("");
      return `
        <section class="experiment-group">
          <div class="group-header">
            <h3>${section.title}</h3>
            <p class="group-intro">${section.intro}</p>
          </div>
          <div class="group-grid">
            ${cards}
          </div>
        </section>
      `;
    })
    .join("");
}

function loadVideoElement(video) {
  if (!video || loadedVideos.has(video)) {
    return;
  }

  const preferred = video.dataset.src;
  const fallback = video.dataset.fallbackSrc;
  if (!preferred && !fallback) {
    return;
  }

  const setSource = (src) => {
    if (!src) {
      return;
    }
    video.preload = video.id === "hero-video" ? "auto" : "metadata";
    video.src = src;
    video.load();
  };

  if (preferred) {
    setSource(preferred);
  } else {
    setSource(fallback);
  }

  if (fallback && preferred && fallback !== preferred) {
    video.addEventListener(
      "error",
      () => {
        if (video.dataset.usedFallback === "true") {
          return;
        }
        video.dataset.usedFallback = "true";
        setSource(fallback);
      },
      { once: true }
    );
  }

  loadedVideos.add(video);
}

function playPreview(video) {
  if (!video) {
    return;
  }
  loadVideoElement(video);
  const playAttempt = video.play();
  if (playAttempt && typeof playAttempt.catch === "function") {
    playAttempt.catch(() => {});
  }
}

function pauseNonVisiblePreview(video) {
  if (!video || video.id === "hero-video") {
    return;
  }
  video.pause();
}

function initLazyVideos() {
  const hero = document.getElementById("hero-video");
  hero.poster = pageData.heroVideo.poster;
  hero.dataset.src = pageData.heroVideo.webSrc;
  hero.dataset.fallbackSrc = pageData.heroVideo.src;
  loadVideoElement(hero);
  playPreview(hero);

  const videos = Array.from(document.querySelectorAll(".js-lazy-video"));
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const video = entry.target;
        if (entry.isIntersecting) {
          playPreview(video);
        } else {
          pauseNonVisiblePreview(video);
        }
      });
    },
    {
      rootMargin: "240px 0px",
      threshold: 0.2
    }
  );

  videos.forEach((video) => observer.observe(video));
}

function openModal(button) {
  const { title, section, caption, src, poster } = button.dataset;

  lastFocusedElement = button;
  dom.modalTitle.textContent = title || "";
  dom.modalSection.textContent = section || "";
  dom.modalCaption.textContent = caption || "";

  document.querySelectorAll(".video-card__video, .hero-video").forEach((video) => {
    video.pause();
  });

  dom.modalVideo.pause();
  dom.modalVideo.removeAttribute("src");
  if (poster) {
    dom.modalVideo.poster = poster;
  } else {
    dom.modalVideo.removeAttribute("poster");
  }
  dom.modalVideo.src = src || "";
  dom.modalVideo.load();

  dom.modal.hidden = false;
  document.body.style.overflow = "hidden";

  const playAttempt = dom.modalVideo.play();
  if (playAttempt && typeof playAttempt.catch === "function") {
    playAttempt.catch(() => {});
  }
}

function closeModal() {
  if (dom.modal.hidden) {
    return;
  }

  dom.modalVideo.pause();
  dom.modalVideo.removeAttribute("src");
  dom.modalVideo.load();
  dom.modal.hidden = true;
  document.body.style.overflow = "";

  if (lastFocusedElement) {
    lastFocusedElement.focus();
  }
}

function initModal() {
  document.addEventListener("click", (event) => {
    const openButton = event.target.closest("[data-open-video]");
    if (openButton) {
      openModal(openButton);
      return;
    }

    if (event.target.closest("[data-close-modal]")) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeModal();
    }
  });
}

function initReveal() {
  const revealables = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  revealables.forEach((item) => observer.observe(item));
}

function initSectionNav() {
  const sections = document.querySelectorAll("main > section[id]");
  const navLinks = Array.from(document.querySelectorAll(".section-nav a"));
  const linkMap = new Map(navLinks.map((link) => [link.getAttribute("href"), link]));
  let ticking = false;

  const setActiveLink = (sectionId) => {
    navLinks.forEach((link) => link.classList.remove("is-active"));
    const active = linkMap.get(`#${sectionId}`);
    if (active) {
      active.classList.add("is-active");
    }
  };

  const updateActiveLink = () => {
    const marker = Math.min(window.innerHeight * 0.28, 220);
    let activeSection = sections[0];

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= marker) {
        activeSection = section;
      }
      if (rect.top <= marker && rect.bottom > marker) {
        activeSection = section;
      }
    });

    setActiveLink(activeSection.id);
    ticking = false;
  };

  const requestUpdate = () => {
    if (ticking) {
      return;
    }
    ticking = true;
    window.requestAnimationFrame(updateActiveLink);
  };

  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate);
  requestUpdate();
}

function initPage() {
  dom.title.textContent = pageData.title;
  dom.tagline.textContent = pageData.tagline;
  dom.abstractText.textContent = pageData.abstract;
  dom.methodSummary.textContent = pageData.methodSummary;
  dom.footerNote.textContent = pageData.footerNote;

  renderAuthors();
  renderInstitutionBadge();
  renderActions();
  renderMetrics();
  renderMethodHighlights();
  renderExperiments();
  renderBibtex();
  initLazyVideos();
  initModal();
  initReveal();
  initSectionNav();
}

initPage();
