# Sandeep Loves Shraddha — Wedding Invitation Website

A single-page, portable, responsive wedding website for **Shraddha & Sandeep** (`sandeeplovesshraddha.com`).

- **Date:** November 5, 2026 (11:00 AM Baraat)
- **Venue:** Crystal Resort, Zirakpur (Chandigarh)
- **Aesthetic:** Modern Pastel & Floral with playful watercolor textures, washi tape effects, and cartoon doodle illustrations.
- **Story:** Met in 2014 at Chitkara University (Tamashbeenz club) -> Reconnected in Bengaluru in 2025 -> Decided to tie the knot in Feb 2026!

---

## ✨ Features

1. **🐱 Kaku the Tabby Cat Custom Cursor:** Interactive animated tabby cat cursor (your cat Kaku!) with heart eyes on hover, pounce clicks, sweet speech bubbles ("Purr! 🐾", "RSVP! 💌"), floating paw trails, catnap idle mode, and a navbar toggle button.
2. **Hero & Live Countdown:** Real-time countdown timer to November 5, 2026, with playful pastel cards.
3. **Add to Calendar:** One-click Google Calendar link + Apple/Outlook `.ics` calendar file download (11:00 AM Baraat at Crystal Resort, Zirakpur).
3. **Ambient Floating Petals & Sparkles:** Canvas animation with organic fluttering flower petals.
4. **Romantic Melody Player:** Built-in Web Audio API romantic acoustic lo-fi synthesizer with play/mute controls.
5. **Our Story Timeline:** Milestones with doodle notes and washi tape styling.
6. **Wedding Events Itinerary:** Haldi, Sangeet, Wedding (Pheras), and Reception details with dress codes and Google Maps links.
7. **Interactive Couple Trivia Quiz:** "Who did what?" mini-game with instant confetti bursts and score tracking.
8. **Moments Gallery:** Polaroid-style photo cards with category filtering and full-screen lightbox viewer.
9. **Interactive RSVP Form:** Collects names, attendance, guest counts, dietary needs, event selections, and song requests (persisted locally + confetti feedback).
10. **Digital Guestbook & Wishes Wall:** Guests can leave well-wishes with emoji reactions and like existing notes (saved to `localStorage`).
11. **Logistics & FAQs Accordion:** Travel guidelines, venue notes, dress code, kids policy, and gift suggestions.
12. **Sharing Tools:** Native Web Share API, WhatsApp 1-click share, Copy Link with toast notice, and interactive QR Code modal.

---

## 🚀 How to Run / Preview Locally

You can open `index.html` directly in any web browser, or serve it using Python / Node:

```bash
# Python 3
python3 -m http.server 8080

# Node / npx
npx serve .
```

Then visit [http://localhost:8080](http://localhost:8080) in your browser.

---

## 🌐 Deploying to `sandeeplovesshraddha.com`

Since this website is completely self-contained in `index.html` with zero build steps needed:

- **GitHub Pages:** Push to a GitHub repository, enable Pages under Settings > Pages, and add your custom domain `sandeeplovesshraddha.com`.
- **Vercel / Netlify / Cloudflare Pages:** Drag & drop the project folder or link the git repository.
