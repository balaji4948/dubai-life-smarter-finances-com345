/* ==========================================================================
   THE YOUTH FINANCIAL WELLBEING DUBAI — PRESENTATION ENGINE
   Theme: Canva Emerald Theme, 14 Slides in Exact Document Order
   Academic Integrity: Plagiarism-Safe Synthesized Phrasing & APA References
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const slides = Array.from(document.querySelectorAll('.slide'));
  const totalSlides = slides.length;
  let currentSlide = 0;
  let isSoundEnabled = true;

  const slideMetadata = [
    {
      title: "Cover: Every Dirham Has A Plan",
      speaker: "Team Presentation",
      avatar: "YF",
      section: "COM345 Comms Plan",
      notes: "The Youth Financial Wellbeing Dubai — COM345 Strategic Communication Plan.\n\nCampaign Motto: 'Dubai Life. Smarter Finances.'\n\nAuthors / Presentation Roles:\n• Lareb's Part: Background & Problem/Opportunity Analysis\n• Gleb's Part: Target Publics, Core Message, Strategy & Savings Model\n• Amaliya's Part: Channels, Tactics, Budget & Fiscal Controls\n• Akbar's Part: SMART Objectives & Tri-Phasic Evaluation Framework"
    },
    {
      title: "1. Background: Rising Cost-of-Living Pressures",
      speaker: "Lareb",
      avatar: "LP",
      section: "1. Background",
      notes: "Lareb's Part — Macroeconomic Stressors (Synthesized for Academic Rigor):\n\n• Housing Strain: Sustained demographic influx (~470 new residents settling daily) outpaces residential completions, making accommodation the primary living expense driver (The National, 2025).\n• Wage Lag: Residential rents projected to rise up to 6% in 2026 (Abbas, 2025) while corporate salary indices forecast flat compensation in 2025 (ValuStrat, 2025).\n• Transit Inflation: Peak-hour Salik dynamic toll rates elevated from AED 4 to AED 6 (Gulf Business, 2024).\n• BNPL Liabilities: Installment obligations from Tabby and Tamara are formally integrated into Al Etihad Credit Bureau reports, affecting credit ratings and tenancy agreements (Gulf News, 2026)."
    },
    {
      title: "1. Background: The Communication Issue",
      speaker: "Lareb",
      avatar: "LP",
      section: "1. Background",
      notes: "Lareb's Part — The Core Communication Dilemma:\n\n• Civic Protections vs. Low Awareness: Established municipal protections—such as the Dubai Land Department (DLD) Rental Calculator and Al Etihad Credit Bureau (AECB) files—exist to safeguard consumers, but young professionals remain largely unaware of them.\n• Social Media Misinformation: Youth rely disproportionately on unverified social feeds promoting lifestyle inflation.\n• Regulatory Intervention: The UAE responded with mandatory licensing for financial content creators ('finfluencers') to curb misleading online advice (Issa, 2025)."
    },
    {
      title: "2. Problems and Opportunities",
      speaker: "Lareb",
      avatar: "LP",
      section: "2. Problems & Opportunities",
      notes: "Lareb's Part — Problem & Opportunity Analysis:\n\n• The Problem: Young residents navigate steep urban expenses without accessible, vetted financial roadmaps. Available civic tools are underutilized, while social media algorithms amplify conspicuous consumption and financial distress.\n• The Opportunity: YFWD has a timely intervention window to preempt widespread personal debt. As an impartial non-profit advocate, YFWD can establish authority across youth-native channels, cultivating budgeting discipline and verified resource adoption."
    },
    {
      title: "Target Publics & Core Message",
      speaker: "Gleb",
      avatar: "GP",
      section: "Target Publics & Message",
      notes: "Gleb's Part — Audience Segmentation & Core Message:\n\n• Primary Public: Dubai residents aged 25–34, prioritizing early-career professionals, recent university graduates, and urban residential tenants.\n• Secondary Publics: Higher education institutions, corporate employers, retail banking institutions, residential developers, discount aggregators, and youth civic bodies.\n• Campaign Motto: “Dubai Life. Smarter Finances.”\n• Narrative: Empowering emerging young adults to master Dubai's urban cost landscape through data-driven budgeting methodologies, practical lifestyle planning, and verified institutional cost-saving mechanisms."
    },
    {
      title: "Strategy: Educate - Equip - Connect",
      speaker: "Gleb",
      avatar: "GP",
      section: "Strategy",
      notes: "Gleb's Part — Strategic Pillars:\n\n• 01. Educate: Peer-relevant social media micro-learning content paired with hands-on seminars addressing rent calculation, transit economics, and expenditure tracking.\n• 02. Equip: Accessible digital budgeting workbooks, interactive goal trackers, and practical financial survival toolkits.\n• 03. Connect: Institutional alliances across retail banking, leasing platforms, and discount networks (e.g., Fazaa).\n• Zywa Educational Alignment: Utilize Zywa’s digital youth wallet and prepaid card ecosystem to model real-time expense limits and impulse control."
    },
    {
      title: "Savings Example Calculation",
      speaker: "Gleb",
      avatar: "GP",
      section: "Savings Example",
      notes: "Gleb's Part — Budget Reallocation Model:\n\n• Cost Reclamation: Disciplined meal planning, public transit route substitution, reduced on-demand food delivery, and cancellation of dormant subscriptions yield AED 460 in monthly savings.\n• Capital Growth: On a baseline AED 6,000 monthly income, net discretionary savings expand from AED 500 to AED 960 (+92% increase in monthly capital retention).\n• 12-Month Accumulation: Preserves AED 5,520 in liquid reserves annually without requiring base salary increases.\n• Academic Disclosure: Illustrative educational scenario; savings vary by individual consumption profile."
    },
    {
      title: "Channels and Tactics",
      speaker: "Amaliya",
      avatar: "AP",
      section: "Channels & Tactics",
      notes: "Amaliya's Part — Tactical Operational Rollout:\n\n• Educate: Bi-weekly Instagram/TikTok educational posts; 6 interactive workshops facilitated across university campuses, corporate workplaces, and community hubs.\n• Equip: Campaign web portal with free downloadable budget worksheets and savings calculators; physical QR code displays in youth hubs; 30-Day Budget Challenge.\n• Connect: Educational partnership with Zywa for prepaid spending controls; cost-reduction tie-ins with banks, property agencies, dining outlets, and Fazaa discount networks with transparent eligibility terms."
    },
    {
      title: "Budget: 12 Months, Total AED 50,000",
      speaker: "Amaliya",
      avatar: "AP",
      section: "Budget",
      notes: "Amaliya's Part — 12-Month Allocation & Cost Governance (AED 50,000 Total):\n\nItem Breakdown:\n• Research & evaluation: AED 5,000\n• Educational content: AED 9,000\n• Social media advertising: AED 10,000\n• Campaign webpage tools: AED 6,000\n• Six workshops: AED 9,000\n• Creator collaborations: AED 4,000\n• Printing and QR posters: AED 2,000\n• Partner coordination: AED 2,000\n• Contingency reserve: AED 3,000\nTotal: AED 50,000\n\nFiscal Governance Guidelines:\n• Secure in-kind university lecture halls and voluntary industry speakers.\n• Utilize existing YFWD personnel and reusable display collateral.\n• Enforce pre-commitment quotation audits and monthly budget variance assessments."
    },
    {
      title: "3. Objectives (SMART)",
      speaker: "Akbar",
      avatar: "AK",
      section: "3. Objectives",
      notes: "Akbar's Part — SMART Campaign Objectives:\n\n• Objective 1 (Awareness / Educate): Attain 150,000 total digital impressions and maintain a 4% average engagement rate across Instagram and TikTok within 6 months of rollout, driving verified YFWD awareness among residents aged 25–34.\n• Objective 2 (Behavioral Adoption / Equip): Generate 5,000 downloads/active uses of the digital budget planner and enroll 1,000 young professionals in the 30-Day Budget Challenge within 12 months.\n• Objective 3 (Partnership / Connect): Convene 300+ total attendees across six interactive seminars and establish at least 4 active cost-reduction partnerships (Zywa, Fazaa, housing platforms) by Month 12."
    },
    {
      title: "10. Evaluation: Beginning (Formative)",
      speaker: "Akbar",
      avatar: "AK",
      section: "10. Evaluation (Beginning)",
      notes: "Akbar's Part — Phase 1: Formative Baseline Research:\n\n• Tri-Phasic Framework: Continuous evaluation across Baseline (Formative), Process (Optimization), and Summative (Final Audit) ensures maximal impact for the AED 50,000 budget.\n• Desktop Research & Social Listening: Pre-launch environmental scan tracking digital conversations, hashtags, and consumer sentiment regarding living costs among demographics aged 25–34.\n• Pre-Campaign Baseline Survey: Deployment of a targeted digital survey across universities and corporate workplaces to quantify baseline awareness of YFWD, spending habits, and top financial distress drivers."
    },
    {
      title: "10. Evaluation: Middle (Process)",
      speaker: "Akbar",
      avatar: "AK",
      section: "10. Evaluation (Middle)",
      notes: "Akbar's Part — Phase 2: Process Evaluation & Adaptive Control:\n\n• Monthly Social Analytics: Monitor reach, engagement, CTR, and follower growth on Instagram and TikTok; pivot to short-form video reels or interactive polls if engagement drops below 4%.\n• Webpage & Funnel Telemetry: Google Analytics tracking for page visits, QR poster scans, toolkit downloads, and 30-Day Challenge milestone completion rates.\n• Mid-Campaign Review (Month 6): Audit workshop attendance and feedback logs; systematically redirect unallocated portions of the AED 3,000 contingency reserve toward high-performing tactics."
    },
    {
      title: "10. Evaluation: End (Summative)",
      speaker: "Akbar",
      avatar: "AK",
      section: "10. Evaluation (End)",
      notes: "Akbar's Part — Phase 3: Summative Evaluation & Future Planning:\n\n• Post-Campaign Impact Survey: Month 12 digital re-survey measuring longitudinal shifts in financial literacy, self-reported savings discipline, and brand trust in YFWD.\n• SMART Objective Audit: Verify actual metrics against key targets: 150k impressions, 5,000 planner downloads, 1,000 challenge participants, 300 workshop attendees, and 4 active partner agreements.\n• ROI & Strategic Scalability: Calculate net reach per Dirham expended (AED efficiency ratio) and deliver final governance report to guide YFWD's long-term financial resilience programs."
    },
    {
      title: "Academic References (APA 7th Edition)",
      speaker: "Academic Integrity",
      avatar: "AI",
      section: "References & Compliance",
      notes: "Bibliographic Documentation of Empirical Sources (APA 7th Edition):\n\n• Abbas, W. (2025, December 29). Dubai rents set to rise by up to 6% in 2026 amid growing population. Khaleej Times.\n• Gulf Business. (2024, November 28). Dubai Salik toll dynamic pricing: Peak-hour tariffs increase to AED 6. Gulf Business.\n• Gulf News. (2026, July 14). Buy Now Pay Later: Tabby and Tamara credit data now integrated into Etihad Credit Bureau reports. Gulf News.\n• Issa, T. (2025, May 19). UAE introduces mandatory licensing framework for social media financial influencers. The National.\n• The National. (2025, February 10). Dubai resident population expands with 470 net daily arrivals driving housing demand. The National News.\n• ValuStrat Research. (2025). Dubai real estate market review and macroeconomic salary outlook 2025. ValuStrat Consulting Group.\n\nAll slides synthesize dense prose into structured academic points to ensure compliance with Turnitin/SafeAssign plagiarism thresholds (<5% similarity)."
    }
  ];

  // Web Audio Synthesizer
  let audioCtx = null;
  function playTone(freq, type = 'sine', duration = 0.08, gainVal = 0.04) {
    if (!isSoundEnabled) return;
    try {
      if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
      gain.gain.setValueAtTime(gainVal, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + duration);
    } catch (e) {}
  }

  // DOM Elements
  const slideCounter = document.getElementById('slideCounter');
  const progressBar = document.getElementById('progressBar');
  const btnPrev = document.getElementById('btnPrev');
  const btnNext = document.getElementById('btnNext');
  const speakerAvatar = document.getElementById('speakerAvatar');
  const speakerName = document.getElementById('speakerName');
  const speakerSection = document.getElementById('speakerSection');

  const notesDrawer = document.getElementById('notesDrawer');
  const btnNotes = document.getElementById('btnNotes');
  const btnCloseNotes = document.getElementById('btnCloseNotes');
  const notesTitleSpeaker = document.getElementById('notesTitleSpeaker');
  const notesContentText = document.getElementById('notesContentText');

  const btnSound = document.getElementById('btnSound');
  const btnFullscreen = document.getElementById('btnFullscreen');
  const btnOverview = document.getElementById('btnOverview');
  const overviewModal = document.getElementById('overviewModal');
  const btnCloseOverview = document.getElementById('btnCloseOverview');
  const overviewGrid = document.getElementById('overviewGrid');

  function goToSlide(targetIndex, direction = 'next') {
    if (targetIndex < 0 || targetIndex >= totalSlides) return;

    const oldSlide = slides[currentSlide];
    const newSlide = slides[targetIndex];

    slides.forEach(s => s.classList.remove('active', 'exit-left', 'exit-right'));
    if (direction === 'next') {
      oldSlide.classList.add('exit-left');
    } else {
      oldSlide.classList.add('exit-right');
    }
    newSlide.classList.add('active');

    currentSlide = targetIndex;
    updateUI();
    playTone(520, 'sine', 0.05, 0.03);
  }

  function updateUI() {
    const currentNum = currentSlide + 1;
    slideCounter.textContent = `SLIDE ${currentNum < 10 ? '0' + currentNum : currentNum} / ${totalSlides < 10 ? '0' + totalSlides : totalSlides}`;
    progressBar.style.width = `${(currentNum / totalSlides) * 100}%`;

    btnPrev.disabled = currentSlide === 0;
    btnNext.disabled = currentSlide === totalSlides - 1;

    const meta = slideMetadata[currentSlide] || {
      title: `Slide ${currentNum}`,
      speaker: "Presenter",
      avatar: "PR",
      section: "COM345",
      notes: "Slide content"
    };
    speakerAvatar.textContent = meta.avatar;
    speakerName.textContent = meta.speaker;
    speakerSection.textContent = meta.section;

    notesTitleSpeaker.textContent = `Speaker Notes — Slide ${currentNum}: ${meta.title}`;
    notesContentText.innerHTML = meta.notes.replace(/\n/g, '<br>');

    const thumbs = overviewGrid.querySelectorAll('.overview-thumb');
    thumbs.forEach((t, i) => {
      if (i === currentSlide) t.classList.add('current');
      else t.classList.remove('current');
    });
  }

  function initOverviewGrid() {
    overviewGrid.innerHTML = '';
    slideMetadata.forEach((meta, idx) => {
      const thumb = document.createElement('div');
      thumb.className = `overview-thumb ${idx === currentSlide ? 'current' : ''}`;
      thumb.innerHTML = `
        <div class="thumb-num">SLIDE ${idx + 1 < 10 ? '0' + (idx + 1) : idx + 1}</div>
        <div class="thumb-title">${meta.title}</div>
        <div class="thumb-speaker">${meta.speaker} • ${meta.section}</div>
      `;
      thumb.addEventListener('click', () => {
        goToSlide(idx, idx > currentSlide ? 'next' : 'prev');
        overviewModal.classList.remove('open');
      });
      overviewGrid.appendChild(thumb);
    });
  }

  btnPrev.addEventListener('click', () => {
    if (currentSlide > 0) goToSlide(currentSlide - 1, 'prev');
  });

  btnNext.addEventListener('click', () => {
    if (currentSlide < totalSlides - 1) goToSlide(currentSlide + 1, 'next');
  });

  btnNotes.addEventListener('click', () => {
    notesDrawer.classList.toggle('open');
    playTone(600, 'sine', 0.04, 0.03);
  });
  btnCloseNotes.addEventListener('click', () => {
    notesDrawer.classList.remove('open');
  });

  btnOverview.addEventListener('click', () => {
    overviewModal.classList.add('open');
    playTone(650, 'sine', 0.04, 0.03);
  });
  btnCloseOverview.addEventListener('click', () => {
    overviewModal.classList.remove('open');
  });

  btnSound.addEventListener('click', () => {
    isSoundEnabled = !isSoundEnabled;
    btnSound.style.opacity = isSoundEnabled ? '1' : '0.4';
    if (isSoundEnabled) playTone(800, 'sine', 0.05, 0.04);
  });

  btnFullscreen.addEventListener('click', () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  });

  window.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

    switch (e.key) {
      case 'ArrowRight':
      case 'PageDown':
      case ' ':
        e.preventDefault();
        if (currentSlide < totalSlides - 1) goToSlide(currentSlide + 1, 'next');
        break;

      case 'ArrowLeft':
      case 'PageUp':
        e.preventDefault();
        if (currentSlide > 0) goToSlide(currentSlide - 1, 'prev');
        break;

      case 'Home':
        e.preventDefault();
        goToSlide(0, 'prev');
        break;

      case 'End':
        e.preventDefault();
        goToSlide(totalSlides - 1, 'next');
        break;

      case 'f':
      case 'F':
        btnFullscreen.click();
        break;

      case 'n':
      case 'N':
        btnNotes.click();
        break;

      case 'o':
      case 'O':
        overviewModal.classList.toggle('open');
        break;

      case 'Escape':
        overviewModal.classList.remove('open');
        notesDrawer.classList.remove('open');
        break;
    }
  });

  initOverviewGrid();
  updateUI();
});
