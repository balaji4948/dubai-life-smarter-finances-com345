/* ==========================================================================
   DUBAI LIFE. SMARTER FINANCES. — PRESENTATION LOGIC
   Engine: Fullscreen, Audio synthesis, Keyboard nav, Budget Sim, 30-Day Challenge
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // --- Slides Configuration & Notes ---
  const slides = Array.from(document.querySelectorAll('.slide'));
  const totalSlides = slides.length;
  let currentSlide = 0;
  let isSoundEnabled = true;

  // Dedicated Speaker Scripts & Metadata for all 15 Slides
  const slideMetadata = [
    {
      title: "Title & Cover Slide",
      speaker: "Team Presentation",
      avatar: "YF",
      section: "COM345 Strategic Plan",
      notes: "Presenter Notes (All Team Members):\n\n" +
             "Welcome everyone. Today we present 'Dubai Life. Smarter Finances.'—a 12-month strategic communication plan " +
             "designed for the Youth Financial Well-being Dubai (YFWD). Dubai is thriving, with hundreds moving in daily, " +
             "yet young residents aged 25–34 face severe cost-of-living pressures. Our mission is to bridge the gap between " +
             "rising costs and existing institutional support using our proven Educate-Equip-Connect model with a lean AED 50,000 budget."
    },
    {
      title: "Executive Summary & Campaign DNA",
      speaker: "Team Presentation",
      avatar: "DNA",
      section: "Executive Overview",
      notes: "Speaker Notes:\n\n" +
             "Here is the executive blueprint of our entire campaign across four core dimensions: The Challenge (demographic influx and inflation), " +
             "The Target (25–34 young professionals & private renters), The Strategy (our three-pronged Educate, Equip, Connect framework), " +
             "and The Impact (achieving 150K impressions, 5,000 tool downloads, and 4 major partner alliances on an AED 50,000 budget)."
    },
    {
      title: "Market Realities & The 4 Squeezes",
      speaker: "Lareb",
      avatar: "LP",
      section: "Section 1: Background",
      notes: "Lareb's Script:\n\n" +
             "Let's look at the hard data. 470 new residents arrive in Dubai every single day. Housing rents are projected to climb up to 6% in 2026, " +
             "yet salaries saw no increase in 2025. Transport costs are compounding with peak Salik tolls up to AED 6. Crucially, buy-now-pay-later " +
             "services like Tabby and Tamara now affect UAE credit reports. Many young adults are damaging their credit scores unknowingly."
    },
    {
      title: "Problems vs. Opportunities Matrix",
      speaker: "Lareb",
      avatar: "LP",
      section: "Section 2: Problems & Opportunities",
      notes: "Lareb's Script:\n\n" +
             "Notice the paradox: institutional support already exists! The Dubai Land Department has a rental index calculator, " +
             "and Etihad Credit Bureau offers score checks. But young people aren't using them because of lack of awareness. " +
             "Instead, they listen to unregulated social media advice. This presents the perfect window for YFWD to act as " +
             "a trusted, credible neutral guide, intervening before debt becomes a broader societal issue."
    },
    {
      title: "Target Publics & Audience Persona",
      speaker: "Gleb",
      avatar: "GP",
      section: "Audience Architecture",
      notes: "Gleb's Script:\n\n" +
             "Our primary audience is precisely defined: Dubai residents aged 25 to 34. Let me introduce Rayan, our representative persona. " +
             "Rayan earns AED 6,000 as a marketing specialist. He isn't irresponsible; he simply lacks practical budgeting tools suited to Dubai's unique " +
             "environment. When rent goes up, he cuts out long-term savings instead of optimizing daily leakages. That is why our " +
             "secondary public—universities, employers, and partners like Fazaa—are vital to reach Rayan where he works and lives."
    },
    {
      title: "Core Strategy: Educate • Equip • Connect",
      speaker: "Gleb",
      avatar: "GP",
      section: "Strategy & Core Messaging",
      notes: "Gleb's Script:\n\n" +
             "Our core message is empowering: 'Dubai Life. Smarter Finances.' Living in Dubai should be exciting, not financially stressful. " +
             "To deliver on this promise, we built the Educate-Equip-Connect model. First, Educate: shift mindsets via social media and " +
             "workshops. Second, Equip: give them tools like our web budget planner and 30-day challenge. Third, Connect: link them " +
             "with tangible benefits like Zywa and Fazaa."
    },
    {
      title: "Interactive Savings Simulation (AED 6k Budget)",
      speaker: "Gleb",
      avatar: "GP",
      section: "Interactive Proof of Concept",
      notes: "Gleb's Script:\n\n" +
             "This is the cornerstone proof of our concept. Look at the numbers on this slide. We take an AED 6,000 salary. " +
             "Notice we do not demand drastic sacrifices. By meal planning (-AED 180), adjusting transport routes (-AED 120), " +
             "auditing subscriptions (-AED 80), and utilizing Fazaa/Zywa discounts (-AED 80), AED 460 is immediately unlocked. " +
             "Monthly savings leap from AED 500 to AED 960—a 92% increase—accumulating over AED 11,500 in one year!"
    },
    {
      title: "Pillar 1: EDUCATE — Social Content & Workshops",
      speaker: "Amaliya",
      avatar: "AP",
      section: "Tactics in Action: Educate",
      notes: "Amaliya's Script:\n\n" +
             "Turning to implementation: How do we actually Educate? First, two weekly short-form videos on TikTok and Instagram " +
             "addressing actual pain points: DLD rent caps, Salik routes, and BNPL credit consequences. Second, six live workshops " +
             "hosted at universities and corporate offices with 300+ attendees. Third, collaborating with licensed UAE financial creators to ensure " +
             "our message is verified and compliant with UAE influencer regulations."
    },
    {
      title: "Pillar 2: EQUIP — Digital Toolkit & Challenge",
      speaker: "Amaliya",
      avatar: "AP",
      section: "Tactics in Action: Equip",
      notes: "Amaliya's Script:\n\n" +
             "Education without tools leaves people stranded. That's why Equip is our practical engine. We build a central web portal " +
             "featuring an automated budget planner and interactive savings calculator. We gamify behavioral change with the '30-Day " +
             "Budget Challenge' where participants check off weekly mini-goals. Physical QR posters bridge young commuters from " +
             "metro stations and campus bulletin boards directly to our tools."
    },
    {
      title: "Pillar 3: CONNECT — Fintechs & Discount Alliances",
      speaker: "Amaliya",
      avatar: "AP",
      section: "Tactics in Action: Connect",
      notes: "Amaliya's Script:\n\n" +
             "Connect is what makes our campaign uniquely valuable. We don't just say 'spend less'; we connect youth with genuine savings. " +
             "Through Zywa, users experience real-time spend tracking and prepaid cards to curb impulse buys. Through Fazaa, we share " +
             "verified discounts on everyday retail, dining, and fitness. We also bridge youth to official DLD rental tools."
    },
    {
      title: "12-Month Financial Budget Allocation (AED 50k)",
      speaker: "Amaliya",
      avatar: "AP",
      section: "Financial Allocation",
      notes: "Amaliya's Script:\n\n" +
             "Here is our complete AED 50,000 budget breakdown. Over half of our budget is concentrated directly on content creation, " +
             "targeted social media advertising, and workshops. To make AED 50,000 go exceptionally far across 12 months, we utilize " +
             "free partner venues, volunteer speakers, and reusable digital toolkits. Furthermore, we maintain an AED 3,000 contingency " +
             "that Akbar will monitor for Month 6 reallocation."
    },
    {
      title: "Three SMART Objectives & Target Benchmarks",
      speaker: "Akbar",
      avatar: "AK",
      section: "Section 3: SMART Objectives",
      notes: "Akbar's Script:\n\n" +
             "I will now walk you through our three SMART objectives that guarantee accountability. Each objective aligns with one pillar: " +
             "Educate targets 150,000 impressions with a 4% engagement rate in 6 months. Equip targets 5,000 budget planner downloads and " +
             "1,000 young professionals enrolled in the 30-day challenge. Connect targets 300 workshop attendees and 4 signed partner platforms. " +
             "Every single metric is time-bound, realistic, and continuously measured."
    },
    {
      title: "3-Phase Continuous Evaluation & Agility Framework",
      speaker: "Akbar",
      avatar: "AK",
      section: "Section 10: Evaluation & Modifications",
      notes: "Akbar's Script:\n\n" +
             "Evaluation is not a post-mortem; it is a live navigation system. In Phase 1, we conduct formative research with pre-campaign " +
             "surveys to establish baseline numbers. In Phase 2, process evaluation happens every month. If engagement falls below 4%, " +
             "we pivot formats. At Month 6, we review the AED 3,000 contingency and redirect funds where traction is highest. " +
             "Finally, Phase 3 executes the summative audit, quantifying the exact return per dirham spent."
    },
    {
      title: "Risk Management & Contingency Playbook",
      speaker: "Team Presentation",
      avatar: "RM",
      section: "Operational Resilience",
      notes: "Speaker Notes (All Team Members):\n\n" +
             "A robust plan anticipates obstacles. If organic engagement drops below 4%, we pivot to relatable lifestyle skits. " +
             "If in-person workshop attendance lags, we provide hybrid streaming and partner discount vouchers. Above all, we ensure " +
             "complete regulatory compliance with the UAE Media Council regarding financial influencer licensing."
    },
    {
      title: "12-Month Roadmap & Concluding Vision",
      speaker: "All Team Members",
      avatar: "ALL",
      section: "Execution & Sign-Off",
      notes: "Closing Remarks (All Team Members):\n\n" +
             "To conclude: 'Dubai Life. Smarter Finances.' offers an airtight, realistic, and inspiring blueprint for YFWD. " +
             "Through disciplined execution across 4 distinct quarters, we maximize every single dirham of the AED 50,000 budget, " +
             "transforming financial anxiety into confidence, stability, and long-term prosperity for Dubai's young generation. " +
             "Thank you! We welcome any questions and encourage downloading the accompanying PPTX presentation."
    }
  ];

  // --- Web Audio Synthesizer (Zero external dependencies) ---
  let audioCtx = null;
  function playTone(freq, type = 'sine', duration = 0.08, gainVal = 0.05) {
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
    } catch (e) {
      // AudioContext not allowed before user interaction
    }
  }

  function playSlideSound() {
    playTone(520, 'sine', 0.06, 0.04);
  }

  function playSuccessSound() {
    playTone(440, 'triangle', 0.1, 0.05);
    setTimeout(() => playTone(660, 'triangle', 0.15, 0.05), 80);
    setTimeout(() => playTone(880, 'triangle', 0.2, 0.06), 160);
  }

  // --- DOM Elements ---
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
  const btnTheme = document.getElementById('btnTheme');
  const btnFullscreen = document.getElementById('btnFullscreen');
  const btnOverview = document.getElementById('btnOverview');
  const overviewModal = document.getElementById('overviewModal');
  const btnCloseOverview = document.getElementById('btnCloseOverview');
  const overviewGrid = document.getElementById('overviewGrid');

  // --- Slide Navigation Function ---
  function goToSlide(targetIndex, direction = 'next') {
    if (targetIndex < 0 || targetIndex >= totalSlides) return;

    const oldSlide = slides[currentSlide];
    const newSlide = slides[targetIndex];

    // Slide transition classes
    slides.forEach(s => s.classList.remove('active', 'exit-left', 'exit-right'));
    if (direction === 'next') {
      oldSlide.classList.add('exit-left');
    } else {
      oldSlide.classList.add('exit-right');
    }
    newSlide.classList.add('active');

    currentSlide = targetIndex;
    updateUI();
    playSlideSound();
  }

  function updateUI() {
    // Progress and Counter
    const currentNum = currentSlide + 1;
    slideCounter.textContent = `Slide ${currentNum} / ${totalSlides}`;
    progressBar.style.width = `${(currentNum / totalSlides) * 100}%`;

    // Buttons State
    btnPrev.disabled = currentSlide === 0;
    btnNext.disabled = currentSlide === totalSlides - 1;

    // Speaker Info
    const meta = slideMetadata[currentSlide];
    speakerAvatar.textContent = meta.avatar;
    speakerName.textContent = meta.speaker;
    speakerSection.textContent = meta.section;

    // Notes
    notesTitleSpeaker.textContent = `Speaker Notes — Slide ${currentNum}: ${meta.title}`;
    notesContentText.innerHTML = meta.notes.replace(/\n/g, '<br>');

    // Update Overview Modal active state
    const thumbs = overviewGrid.querySelectorAll('.overview-thumb');
    thumbs.forEach((t, i) => {
      if (i === currentSlide) {
        t.classList.add('current');
      } else {
        t.classList.remove('current');
      }
    });
  }

  // --- Initialize Slide Overview Grid Modal ---
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

  // --- Event Listeners for Nav Controls ---
  btnPrev.addEventListener('click', () => {
    if (currentSlide > 0) goToSlide(currentSlide - 1, 'prev');
  });

  btnNext.addEventListener('click', () => {
    if (currentSlide < totalSlides - 1) goToSlide(currentSlide + 1, 'next');
  });

  // Notes Drawer Toggle
  btnNotes.addEventListener('click', () => {
    notesDrawer.classList.toggle('open');
    playTone(600, 'sine', 0.05, 0.03);
  });
  btnCloseNotes.addEventListener('click', () => {
    notesDrawer.classList.remove('open');
  });

  // Overview Modal Toggle
  btnOverview.addEventListener('click', () => {
    overviewModal.classList.add('open');
    playTone(650, 'sine', 0.05, 0.03);
  });
  btnCloseOverview.addEventListener('click', () => {
    overviewModal.classList.remove('open');
  });

  // Sound Toggle
  btnSound.addEventListener('click', () => {
    isSoundEnabled = !isSoundEnabled;
    btnSound.style.opacity = isSoundEnabled ? '1' : '0.4';
    if (isSoundEnabled) playTone(800, 'sine', 0.05, 0.04);
  });

  // Theme Toggle (Dark / Light)
  btnTheme.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    playTone(700, 'sine', 0.05, 0.03);
  });

  // Fullscreen Toggle
  btnFullscreen.addEventListener('click', () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  });

  // --- Keyboard Shortcuts Navigation ---
  window.addEventListener('keydown', (e) => {
    // Avoid interfering if user is in an input
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

    switch (e.key) {
      case 'ArrowRight':
      case 'PageDown':
      case ' ': // Space bar advances slide
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

  // --- Touch / Swipe Gestures on Mobile ---
  let touchStartX = 0;
  let touchEndX = 0;

  document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  document.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, { passive: true });

  function handleSwipe() {
    const diff = touchEndX - touchStartX;
    if (Math.abs(diff) > 50) {
      if (diff < 0 && currentSlide < totalSlides - 1) {
        goToSlide(currentSlide + 1, 'next');
      } else if (diff > 0 && currentSlide > 0) {
        goToSlide(currentSlide - 1, 'prev');
      }
    }
  }

  // ==========================================================================
  // SLIDE 7: LIVE BUDGET & SAVINGS SIMULATOR LOGIC
  // ==========================================================================
  const salaryRange = document.getElementById('salaryRange');
  const salaryDisplay = document.getElementById('salaryDisplay');
  const optimizedSavings = document.getElementById('optimizedSavings');
  const boostPercent = document.getElementById('boostPercent');
  const baseSavingsLabel = document.getElementById('baseSavingsLabel');
  const optSavingsLabel = document.getElementById('optSavingsLabel');
  const barBefore = document.getElementById('barBefore');
  const barAfter = document.getElementById('barAfter');
  const sixMonthBuffer = document.getElementById('sixMonthBuffer');
  const twelveMonthBuffer = document.getElementById('twelveMonthBuffer');

  const leverMeal = document.getElementById('leverMeal');
  const leverTransport = document.getElementById('leverTransport');
  const leverSubs = document.getElementById('leverSubs');
  const leverDeals = document.getElementById('leverDeals');

  const leverSavingsMap = {
    meal: 180,
    transport: 120,
    subs: 80,
    deals: 80
  };

  function updateBudgetSimulator() {
    const salary = parseInt(salaryRange.value, 10);
    salaryDisplay.textContent = `AED ${salary.toLocaleString()}`;

    // Baseline savings is approx 8.33% of income (e.g. AED 500 for AED 6,000)
    const baseSavings = Math.round(salary * 0.08333);

    // Sum active levers
    let totalLeversSavings = 0;
    if (leverMeal.classList.contains('active')) totalLeversSavings += leverSavingsMap.meal;
    if (leverTransport.classList.contains('active')) totalLeversSavings += leverSavingsMap.transport;
    if (leverSubs.classList.contains('active')) totalLeversSavings += leverSavingsMap.subs;
    if (leverDeals.classList.contains('active')) totalLeversSavings += leverSavingsMap.deals;

    const optSavings = baseSavings + totalLeversSavings;
    const boost = Math.round(((optSavings - baseSavings) / (baseSavings || 1)) * 100);

    const basePct = ((baseSavings / salary) * 100).toFixed(1);
    const optPct = ((optSavings / salary) * 100).toFixed(1);

    optimizedSavings.innerHTML = `AED ${optSavings.toLocaleString()} <span style="font-size: 14px; font-weight: 500; color: var(--text-muted);">/ month</span>`;
    boostPercent.textContent = `+${boost}% BOOST`;

    baseSavingsLabel.textContent = `AED ${baseSavings.toLocaleString()} (${basePct}%)`;
    optSavingsLabel.textContent = `AED ${optSavings.toLocaleString()} (${optPct}%)`;

    // Update Bar Widths (relative to 30% of income scale)
    const maxScalePct = 30; // max reasonable savings rate for display
    barBefore.style.width = `${Math.min(100, (basePct / maxScalePct) * 100)}%`;
    barAfter.style.width = `${Math.min(100, (optPct / maxScalePct) * 100)}%`;

    // 6 & 12 Month Buffers
    sixMonthBuffer.textContent = `AED ${(optSavings * 6).toLocaleString()}`;
    twelveMonthBuffer.textContent = `AED ${(optSavings * 12).toLocaleString()}`;
  }

  // Lever Toggles Click Handling
  [leverMeal, leverTransport, leverSubs, leverDeals].forEach(el => {
    if (el) {
      el.addEventListener('click', () => {
        el.classList.toggle('active');
        playTone(el.classList.contains('active') ? 600 : 400, 'sine', 0.04, 0.04);
        updateBudgetSimulator();
      });
    }
  });

  if (salaryRange) {
    salaryRange.addEventListener('input', () => {
      updateBudgetSimulator();
    });
  }

  // ==========================================================================
  // SLIDE 9: INTERACTIVE 30-DAY BUDGET CHALLENGE LOGIC
  // ==========================================================================
  const challengeCheckboxes = [
    document.getElementById('chkWeek1'),
    document.getElementById('chkWeek2'),
    document.getElementById('chkWeek3'),
    document.getElementById('chkWeek4')
  ];
  const challengeProgressBadge = document.getElementById('challengeProgressBadge');

  challengeCheckboxes.forEach((chk, index) => {
    if (chk) {
      chk.addEventListener('click', () => {
        chk.classList.toggle('completed');
        
        const completedCount = challengeCheckboxes.filter(c => c && c.classList.contains('completed')).length;
        if (completedCount === 4) {
          challengeProgressBadge.textContent = "🎉 4 / 4 Complete!";
          challengeProgressBadge.style.background = "var(--emerald-500)";
          challengeProgressBadge.style.color = "#fff";
          playSuccessSound();
        } else {
          challengeProgressBadge.textContent = `${completedCount} / 4 Completed`;
          challengeProgressBadge.style.background = "rgba(16, 185, 129, 0.15)";
          challengeProgressBadge.style.color = "var(--emerald-400)";
          playTone(500 + index * 60, 'triangle', 0.05, 0.04);
        }
      });
    }
  });

  // Initializations
  initOverviewGrid();
  updateUI();
  updateBudgetSimulator();
});
