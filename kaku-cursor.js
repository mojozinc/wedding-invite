/**
 * ==========================================================
 * KAKU THE GREY TABBY CAT — INTERACTIVE SIDE-PROFILE CURSOR
 * ==========================================================
 * Standalone, modular cursor component for sandeeplovesshraddha.com
 */

(function () {
  'use strict';

  // SVG Template for Grey Tabby Cat (Side Profile Trotting Pose)
  const KAKU_SVG_MARKUP = `
    <svg class="kaku-cat-svg" id="kakuSvg" viewBox="0 0 130 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Tail (Swishing behind on the left) -->
      <g class="kaku-tail" style="transform-origin: 32px 42px;">
        <path d="M32 42 C20 40 8 30 14 18 C18 10 27 15 22 24 C17 32 25 36 34 40" stroke="#94a3b8" stroke-width="7" stroke-linecap="round" fill="none"/>
        <!-- Darker Charcoal Tabby Stripes on Tail -->
        <path d="M14 23 C16 26 19 25 18 22" stroke="#475569" stroke-width="3" stroke-linecap="round"/>
        <path d="M20 31 C22 34 25 33 24 30" stroke="#475569" stroke-width="3.2" stroke-linecap="round"/>
        <path d="M27 37 C29 40 32 39 31 36" stroke="#475569" stroke-width="3.5" stroke-linecap="round"/>
        <!-- White Tail Tip -->
        <path d="M12 18 C13 14 19 12 21 16" stroke="#ffffff" stroke-width="4.5" stroke-linecap="round"/>
      </g>

      <!-- Far Back Leg (Darker shadow grey) -->
      <g class="kaku-leg-back-far" style="transform-origin: 38px 46px;">
        <path d="M38 46 Q32 58 35 68 Q39 68 41 64 Q41 52 46 46" fill="#64748b"/>
        <circle cx="37" cy="67" r="3.5" fill="#f8fafc"/>
      </g>

      <!-- Far Front Leg (Darker shadow grey) -->
      <g class="kaku-leg-front-far" style="transform-origin: 78px 45px;">
        <path d="M78 45 Q75 56 74 68 Q78 68 81 63 Q82 52 83 45" fill="#64748b"/>
        <circle cx="76" cy="67" r="3.5" fill="#f8fafc"/>
      </g>

      <!-- Main Torso (Soft Silver Grey Tabby) -->
      <path d="M32 40 C32 26 48 22 74 24 C86 25 94 30 92 40 C90 52 78 57 58 57 C42 57 32 52 32 40 Z" fill="#94a3b8"/>
      
      <!-- Back Flank Curve -->
      <ellipse cx="44" cy="42" rx="14" ry="12" fill="#94a3b8"/>

      <!-- Dark Charcoal Tabby Stripes over Back & Flank -->
      <path d="M42 27 Q48 38 43 49" stroke="#475569" stroke-width="3" stroke-linecap="round"/>
      <path d="M54 25 Q60 36 56 48" stroke="#475569" stroke-width="3.2" stroke-linecap="round"/>
      <path d="M66 26 Q72 36 68 47" stroke="#475569" stroke-width="3" stroke-linecap="round"/>
      <path d="M77 28 Q81 37 78 46" stroke="#475569" stroke-width="2.8" stroke-linecap="round"/>

      <!-- White Chest, Bib & Underbelly -->
      <path d="M52 46 C66 46 88 44 88 36 C88 48 72 56 52 56 Z" fill="#f8fafc"/>

      <!-- Near Back Leg -->
      <g class="kaku-leg-back-near" style="transform-origin: 45px 45px;">
        <path d="M46 43 Q41 54 44 68 Q48 68 51 63 Q51 52 55 45" fill="#94a3b8"/>
        <path d="M45 50 Q48 56 46 60" stroke="#475569" stroke-width="2.2" stroke-linecap="round"/>
        <!-- White Sock / Paw -->
        <circle cx="46" cy="67" r="4" fill="#ffffff" stroke="#94a3b8" stroke-width="0.8"/>
      </g>

      <!-- Near Front Leg -->
      <g class="kaku-leg-front-near" style="transform-origin: 86px 44px;">
        <path d="M86 42 Q86 54 88 68 Q92 68 94 63 Q93 52 91 44" fill="#94a3b8"/>
        <path d="M88 49 Q90 56 89 60" stroke="#475569" stroke-width="2.2" stroke-linecap="round"/>
        <!-- White Sock / Paw -->
        <circle cx="90" cy="67" r="4" fill="#ffffff" stroke="#94a3b8" stroke-width="0.8"/>
      </g>

      <!-- Head (Side View) -->
      <circle cx="95" cy="30" r="17" fill="#94a3b8"/>

      <!-- Ears (Far & Near Triangular Ears) -->
      <!-- Far Ear -->
      <path d="M82 20 L86 6 L94 18 Z" fill="#64748b"/>
      <path d="M84 18 L87 9 L92 18 Z" fill="#f472b6"/>
      <!-- Near Ear -->
      <path d="M90 18 L98 4 L105 18 Z" fill="#94a3b8"/>
      <path d="M92 16 L98 8 L103 17 Z" fill="#f472b6"/>

      <!-- Tabby Forehead & Temple Stripes -->
      <path d="M88 18 L94 25" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M94 17 L98 23" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M86 28 L91 29" stroke="#475569" stroke-width="2.2" stroke-linecap="round"/>
      <path d="M85 33 L90 34" stroke="#475569" stroke-width="2.2" stroke-linecap="round"/>

      <!-- White Muzzle & Cheek (Side Profile) -->
      <path d="M96 28 Q109 30 106 37 Q96 40 91 36 Z" fill="#ffffff"/>
      <path d="M91 36 Q98 41 104 37" stroke="#cbd5e1" stroke-width="1"/>

      <!-- Pink Nose Tip -->
      <polygon points="108,30 105,28 105,32" fill="#fb7185"/>

      <!-- White Whiskers -->
      <path d="M102 33 L116 31" stroke="#ffffff" stroke-width="1.6" stroke-linecap="round"/>
      <path d="M102 35 L118 36" stroke="#ffffff" stroke-width="1.6" stroke-linecap="round"/>
      <path d="M101 37 L114 41" stroke="#ffffff" stroke-width="1.6" stroke-linecap="round"/>

      <!-- Eyes (Normal Emerald Green / Heart Eyes / Sleepy) -->
      <g id="kakuEyesNormal">
        <!-- Emerald Green Iris with black pupil & cute sparkle -->
        <ellipse cx="98" cy="27" rx="3.8" ry="4.5" fill="#22c55e"/>
        <ellipse cx="98.5" cy="27" rx="2.2" ry="3.8" fill="#0f172a"/>
        <circle cx="97.2" cy="25" r="1.4" fill="#ffffff"/>
        <circle cx="99.5" cy="28.5" r="0.7" fill="#ffffff"/>
      </g>
      
      <g id="kakuEyesHearts" style="display: none;">
        <!-- Heart Eye for Hover -->
        <path d="M94 27 C94 23 97 22 99 25 C101 22 104 23 104 27 C104 31 99 34 99 34 C99 34 94 31 94 27 Z" fill="#f43f5e"/>
      </g>

      <g id="kakuEyesSleepy" style="display: none;">
        <!-- Sleepy Closed Eye -->
        <path d="M94 28 Q98 24 102 28" stroke="#334155" stroke-width="2.5" stroke-linecap="round" fill="none"/>
      </g>

      <!-- Wedding Ribbon Collar & Golden Charm -->
      <path d="M85 36 Q92 42 98 38" stroke="#d97788" stroke-width="3.5" stroke-linecap="round"/>
      <circle cx="92" cy="41" r="3.5" fill="#f59e0b" stroke="#d97788" stroke-width="1"/>
      <circle cx="92" cy="41" r="1.5" fill="#ffffff"/>
    </svg>
  `;

  class KakuCursorController {
    constructor() {
      this.mouseX = -200;
      this.mouseY = -200;
      this.currentX = -200;
      this.currentY = -200;
      this.prevMouseX = 0;
      
      this.isFacingLeft = false;
      this.isActive = localStorage.getItem('sandeeplovesshraddha_kaku') !== 'disabled';
      this.isSleeping = false;
      this.isMoving = false;
      
      this.idleTimer = null;
      this.moveTimeout = null;
      this.bubbleTimeout = null;
      this.lastPawTime = 0;

      this.initDOM();
      this.bindEvents();
      this.updateState();
      this.startAnimationLoop();
    }

    initDOM() {
      // Create master container if not existing
      let container = document.getElementById('kakuCursorContainer');
      if (!container) {
        container = document.createElement('div');
        container.id = 'kakuCursorContainer';
        document.body.appendChild(container);
      }

      container.innerHTML = `
        <div class="kaku-cat-wrapper" id="kakuCatWrapper">
          <div class="kaku-bubble" id="kakuBubble">Purr! 🐾</div>
          ${KAKU_SVG_MARKUP}
        </div>
      `;

      this.wrapper = document.getElementById('kakuCatWrapper');
      this.bubble = document.getElementById('kakuBubble');
      this.eyesNormal = document.getElementById('kakuEyesNormal');
      this.eyesHearts = document.getElementById('kakuEyesHearts');
      this.eyesSleepy = document.getElementById('kakuEyesSleepy');
      this.toggleBtn = document.getElementById('kakuToggleBtn');
    }

    setEyes(mode) {
      if (!this.eyesNormal || !this.eyesHearts || !this.eyesSleepy) return;
      this.eyesNormal.style.display = mode === 'normal' ? 'block' : 'none';
      this.eyesHearts.style.display = mode === 'hearts' ? 'block' : 'none';
      this.eyesSleepy.style.display = mode === 'sleepy' ? 'block' : 'none';
    }

    showBubble(text, duration = 1600) {
      if (!this.isActive || !this.bubble) return;
      clearTimeout(this.bubbleTimeout);
      this.bubble.textContent = text;
      this.bubble.classList.add('show');
      this.bubbleTimeout = setTimeout(() => {
        this.bubble.classList.remove('show');
      }, duration);
    }

    spawnPaw(x, y) {
      if (!this.isActive) return;
      const paw = document.createElement('div');
      paw.className = 'kaku-paw-particle';
      const emojis = ['🐾', '🌸', '🐾', '✨', '🐾'];
      paw.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      paw.style.left = `${x - 8}px`;
      paw.style.top = `${y - 8}px`;
      document.body.appendChild(paw);
      setTimeout(() => paw.remove(), 1100);
    }

    resetIdleTimer() {
      if (this.isSleeping) {
        this.isSleeping = false;
        this.wrapper.classList.remove('kaku-sleeping');
        this.setEyes('normal');
        this.showBubble('Purr! 🐾', 1200);
      }
      clearTimeout(this.idleTimer);
      this.idleTimer = setTimeout(() => {
        if (!this.isActive) return;
        this.isSleeping = true;
        this.wrapper.classList.add('kaku-sleeping');
        this.setEyes('sleepy');
        this.showBubble('zzZ 💤', 2800);
      }, 4500);
    }

    bindEvents() {
      // Mouse move
      window.addEventListener('mousemove', (e) => {
        if (!this.isActive) return;
        this.mouseX = e.clientX;
        this.mouseY = e.clientY;

        // Auto-detect direction (flip left/right based on movement)
        const deltaX = this.mouseX - this.prevMouseX;
        if (deltaX < -3) {
          this.isFacingLeft = true;
          this.wrapper.classList.add('kaku-flip-left');
        } else if (deltaX > 3) {
          this.isFacingLeft = false;
          this.wrapper.classList.remove('kaku-flip-left');
        }
        this.prevMouseX = this.mouseX;

        // Movement trot state
        this.wrapper.classList.add('kaku-moving');
        clearTimeout(this.moveTimeout);
        this.moveTimeout = setTimeout(() => {
          this.wrapper.classList.remove('kaku-moving');
        }, 150);

        // Spawn periodic paw trail
        const now = Date.now();
        if (now - this.lastPawTime > 300 && Math.random() > 0.4) {
          this.spawnPaw(this.mouseX, this.mouseY + 12);
          this.lastPawTime = now;
        }

        this.resetIdleTimer();
      });

      // Mouse down / click pounce
      window.addEventListener('mousedown', (e) => {
        if (!this.isActive) return;
        this.wrapper.classList.add('kaku-clicking');
        this.spawnPaw(e.clientX, e.clientY);
        this.setEyes('hearts');
      });

      window.addEventListener('mouseup', () => {
        if (!this.isActive) return;
        this.wrapper.classList.remove('kaku-clicking');
        setTimeout(() => {
          if (!this.wrapper.classList.contains('kaku-hover')) {
            this.setEyes('normal');
          }
        }, 200);
      });

      // Contextual element hover
      const hoverSelectors = 'a, button, input, select, textarea, .polaroid-card, .event-card, .wish-note, .quiz-opt-btn, .sticker-badge, .timeline-card, [data-kaku-bubble]';

      document.addEventListener('mouseover', (e) => {
        if (!this.isActive) return;
        const target = e.target.closest(hoverSelectors);
        if (target) {
          this.wrapper.classList.add('kaku-hover');
          this.setEyes('hearts');

          const customBubble = target.getAttribute('data-kaku-bubble');
          if (customBubble) {
            this.showBubble(customBubble, 1500);
          } else if (target.matches('input, textarea')) {
            this.showBubble('Typing? 📝', 1500);
          } else if (target.matches('.btn-primary, .btn-nav-rsvp, [href="#rsvp"]')) {
            this.showBubble('RSVP! 💌', 1500);
          } else if (target.matches('.quiz-opt-btn')) {
            this.showBubble('Good guess! 🎯', 1200);
          } else if (target.matches('.polaroid-card')) {
            this.showBubble('Cute photo! 📸', 1200);
          } else if (target.matches('.event-theme-haldi')) {
            this.showBubble('Yellow floral! 🌼', 1200);
          } else if (target.matches('.audio-btn')) {
            this.showBubble('Music! 🎵', 1200);
          } else {
            this.showBubble('Meow! 🐾', 1200);
          }
        }
      });

      document.addEventListener('mouseout', (e) => {
        if (!this.isActive) return;
        const target = e.target.closest(hoverSelectors);
        if (target) {
          this.wrapper.classList.remove('kaku-hover');
          if (!this.isSleeping) {
            this.setEyes('normal');
          }
        }
      });

      // Navbar toggle button hook
      if (this.toggleBtn) {
        this.toggleBtn.addEventListener('click', () => {
          this.toggle();
        });
      }
    }

    toggle() {
      this.isActive = !this.isActive;
      this.updateState();
      if (this.isActive) {
        if (window.showToast) window.showToast('🐱 Kaku the Grey Tabby is now your companion!');
        this.showBubble('Meow! 🐾', 2000);
      } else {
        if (window.showToast) window.showToast('Switched to default cursor');
      }
    }

    updateState() {
      if (this.isActive) {
        document.body.classList.add('kaku-cursor-active');
        if (this.toggleBtn) {
          this.toggleBtn.classList.add('active');
          this.toggleBtn.title = 'Kaku the Grey Tabby is active! (Click to disable)';
        }
      } else {
        document.body.classList.remove('kaku-cursor-active');
        if (this.toggleBtn) {
          this.toggleBtn.classList.remove('active');
          this.toggleBtn.title = 'Enable Kaku the Grey Tabby cursor';
        }
      }
      localStorage.setItem('sandeeplovesshraddha_kaku', this.isActive ? 'enabled' : 'disabled');
    }

    startAnimationLoop() {
      const loop = () => {
        if (this.isActive && this.mouseX > -100) {
          this.currentX += (this.mouseX - this.currentX) * 0.38;
          this.currentY += (this.mouseY - this.currentY) * 0.38;

          const deltaX = this.mouseX - this.currentX;
          const tilt = Math.max(-12, Math.min(12, deltaX * 1.1));
          
          this.wrapper.style.transform = `translate3d(${this.currentX}px, ${this.currentY}px, 0) rotate(${tilt}deg)`;
        }
        requestAnimationFrame(loop);
      };
      requestAnimationFrame(loop);
    }
  }

  // Auto-initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      window.kakuCursor = new KakuCursorController();
    });
  } else {
    window.kakuCursor = new KakuCursorController();
  }

})();
