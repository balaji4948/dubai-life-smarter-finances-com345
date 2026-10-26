/* ==========================================================================
   THE YOUTH FINANCIAL WELLBEING DUBAI — PRESENTATION ENGINE
   Theme: Canva Emerald Theme, 13 Slides in Exact Document Order
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
      notes: "The Youth Financial Wellbeing Dubai — COM345 Communication Plan.\n\nCampaign Message: 'Dubai Life. Smarter Finances.'\n\nProject Team: Lareb's Part, Gleb's Part, Amaliya's Part, Akbar's Part."
    },
    {
      title: "1. Background: Rising Cost-of-Living Pressures",
      speaker: "Lareb",
      avatar: "LP",
      section: "1. Background",
      notes: "Lareb's Part — 1. Background:\n\nYoung people in Dubai aged 25 to 34 face rising cost-of-living pressures.\n\nHousing is the main driver, with around 470 new residents arriving daily (The National, 2025). Rents expected to rise up to 6% in 2026 (Abbas, 2025), while salaries projected flat in 2025 (ValuStrat, 2025).\n\nSalik peak tolls up from AED 4 to AED 6 (Gulf Business, 2024). Tabby and Tamara BNPL data now reported on UAE credit reports (Gulf News, 2026)."
    },
    {
      title: "1. Background: The Communication Issue",
      speaker: "Lareb",
      avatar: "LP",
      section: "1. Background",
      notes: "Lareb's Part — 1. Background (The Communication Issue):\n\nThe main communication issue is that support already exists (Dubai Land Department rental index and Etihad Credit Bureau credit reports), but many young people are unaware of it.\n\nInstead, they rely on social media, where unrealistic lifestyles and unverified advice are common—a risk the UAE has addressed by licensing finance influencers (Issa, 2025)."
    },
    {
      title: "2. Problems and Opportunities",
      speaker: "Lareb",
      avatar: "LP",
      section: "2. Problems & Opportunities",
      notes: "Lareb's Part — 2. Problems and Opportunities:\n\nProblem: Young people in Dubai face rising living costs but lack clear, reliable guidance. Support services exist but are underutilized; social media spreads misinformation.\n\nOpportunity: YFWD can step in early as a neutral, trusted guide on platforms youth already use to promote financial literacy, responsible spending/saving, and support awareness."
    },
    {
      title: "Target Publics & Core Message",
      speaker: "Gleb",
      avatar: "GP",
      section: "Target Publics & Message",
      notes: "Gleb's Part:\n\nTarget Publics:\n• Primary: Dubai residents aged 25-34, especially young professionals, graduates and renters.\n• Secondary: Universities, employers, banks, property providers, discount platforms and community organisations.\n\nMessage:\n“Dubai Life. Smarter Finances.” — Helping young people manage Dubai’s cost of living through informed financial decisions, practical planning and access to real cost-saving opportunities."
    },
    {
      title: "Strategy: Educate - Equip - Connect",
      speaker: "Gleb",
      avatar: "GP",
      section: "Strategy",
      notes: "Gleb's Part — Strategy:\n\n• Educate: Social media content, workshops and practical advice on budgeting, rent, transport and saving.\n• Equip: Provide budget-planning software, financial tools and cost-saving guides.\n• Connect: Partner with banks, rental/property providers, Fazaa and other discount platforms, restaurants and food-delivery services to provide relevant financial benefits and discounts.\n• Zywad bank card: Educational collaboration with Zywa using prepaid-card model to explain spending control."
    },
    {
      title: "Savings Example Calculation",
      speaker: "Gleb",
      avatar: "GP",
      section: "Savings Example",
      notes: "Gleb's Part — Savings Example Calculation:\n\nMeal planning, suitable transport alternatives, fewer food-delivery orders and cancelling unused subscriptions could save AED 460 monthly.\n\nWithin the same AED 6,000 budget, savings could increase from AED 500 to AED 960.\n\n(Illustrative example; savings are not guaranteed or a card benefit)."
    },
    {
      title: "Channels and Tactics",
      speaker: "Amaliya",
      avatar: "AP",
      section: "Channels & Tactics",
      notes: "Amaliya's Part — Channels and Tactics:\n\n• Educate: 2x weekly Instagram & TikTok posts; 6 practical workshops through universities, employers and community organisations.\n• Equip: Campaign webpage with free budget planner, savings calculator, and practical guides via QR codes/newsletters; 30-Day Budget Challenge.\n• Connect: Educational collaboration with Zywa; partnerships with banks, property providers, restaurants and discount platforms including Fazaa with clear eligibility conditions."
    },
    {
      title: "Budget: 12 Months, Total AED 50,000",
      speaker: "Amaliya",
      avatar: "AP",
      section: "Budget",
      notes: "Amaliya's Part — Budget (12 Months, Total: AED 50,000):\n\nItem breakdown:\n• Research & evaluation: AED 5,000\n• Educational content: AED 9,000\n• Social media advertising: AED 10,000\n• Campaign webpage tools: AED 6,000\n• Six workshops: AED 9,000\n• Creator collaborations: AED 4,000\n• Printing and QR posters: AED 2,000\n• Partner coordination: AED 2,000\n• Contingency: AED 3,000\nTotal: AED 50,000.\n\nCost controls: Free venues, volunteer speakers, partner networks, reusable materials, supplier price confirmation, monthly reviews."
    },
    {
      title: "3. Objectives (SMART)",
      speaker: "Akbar",
      avatar: "AK",
      section: "3. Objectives",
      notes: "Akbar's Part — 3. Objectives:\n\n• Objective 1 (Awareness / Educate): Increase awareness among residents 25–34 by achieving 150,000 total impressions and 4% average engagement rate on IG/TikTok within 6 months.\n• Objective 2 (Behavioral Change / Equip): Drive 5,000 downloads/active uses of budget planner & guides, and enroll 1,000 young professionals in 30-Day Budget Challenge within 12 months.\n• Objective 3 (Partnership & Engagement / Connect): Engage at least 300 participants across 6 workshops and establish at least 4 active cost-saving partnerships within 12 months."
    },
    {
      title: "10. Evaluation: Beginning (Formative)",
      speaker: "Akbar",
      avatar: "AK",
      section: "10. Evaluation (Beginning)",
      notes: "Akbar's Part — 10. Evaluation and Modifications:\n\nBeginning: Baseline Evaluation (Formative)\n\n• Desktop Research & Social Listening: Monitor online discussions, hashtags, and social media trends surrounding Dubai living costs and financial management among young professionals (aged 25–34) before launch.\n• Pre-Campaign Survey: Conduct a short digital baseline survey through social media and university/employer channels to measure existing awareness levels of YFWD resources, current spending habits, and top financial stress points."
    },
    {
      title: "10. Evaluation: Middle (Process)",
      speaker: "Akbar",
      avatar: "AK",
      section: "10. Evaluation (Middle)",
      notes: "Akbar's Part — 10. Evaluation and Modifications:\n\nMiddle: Ongoing Monitoring & Modification (Process Evaluation)\n\n• Monthly Social Media Analytics: Track reach, engagement, CTR, and follower growth; pivot to Reels/creators if engagement < 4%.\n• Webpage & Tool Tracking: Google Analytics tracking for page visits, QR scans, planner downloads, and challenge completion rates.\n• Mid-Campaign Review (Month 6): Assess workshop attendance and feedback forms; reallocate unused portions of AED 3,000 contingency."
    },
    {
      title: "10. Evaluation: End (Summative, Audit & ROI)",
      speaker: "Akbar",
      avatar: "AK",
      section: "10. Evaluation (End)",
      notes: "Akbar's Part — 10. Evaluation and Modifications:\n\nEnd: Final Measurement (Summative Evaluation)\n\n• Post-Campaign Survey: Re-run digital survey at Month 12 measuring shifts in awareness, self-reported savings, and trust in YFWD.\n• SMART Objective Audit: Verify actuals against 150k impressions, 5,000 downloads, 1,000 challenge participants, 300 workshop attendees, and 4 partner offers.\n• ROI & Future Planning: Summarize reach per AED spent and compile final evaluation report with recommendations for YFWD long-term financial literacy initiatives."
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

    const meta = slideMetadata[currentSlide];
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
