// ==========================================================================
// CAFE TEMPLATE — Live Cafe Status Manager
// Configures real-time "Open / Closed" badge and operating hours calculation.
// ==========================================================================

export const CAFE_HOURS_CONFIG = {
  weekdayOpen: 7.5,    // 7:30 AM
  weekdayClose: 21.0,  // 9:00 PM
  weekendOpen: 8.0,    // 8:00 AM
  weekendClose: 22.0,  // 10:00 PM
  openText: 'Open Today',
  openSubText: 'Closes 9:00 PM · Coffee, Brunch & Bakery',
  closedText: 'Closed Now',
  closedSubText: 'Opens 7:30 AM · Fresh Roasts & Breakfast'
};

export function initAmbiance() {
  updateCafeStatus();
  // Check every 30 seconds for live accuracy
  setInterval(updateCafeStatus, 30000);
}

function getLocalClientTime() {
  const now = new Date();
  const day = now.getDay();
  const isWeekend = day === 0 || day === 6;
  const hour = now.getHours();
  const minute = now.getMinutes();
  return {
    isWeekend,
    hour,
    minute,
    decimalTime: hour + minute / 60
  };
}

export function updateCafeStatus() {
  const statusBadge = document.getElementById('hero-status-badge');
  const pulseDot = document.getElementById('status-pulse-dot');
  const statusLabel = document.getElementById('cafe-status-label');
  const statusSub = document.getElementById('cafe-status-sub');

  if (!statusLabel) return;

  const { isWeekend, decimalTime } = getLocalClientTime();
  const openTime = isWeekend ? CAFE_HOURS_CONFIG.weekendOpen : CAFE_HOURS_CONFIG.weekdayOpen;
  const closeTime = isWeekend ? CAFE_HOURS_CONFIG.weekendClose : CAFE_HOURS_CONFIG.weekdayClose;

  let isOpen = false;
  let label = CAFE_HOURS_CONFIG.closedText;
  let sub = CAFE_HOURS_CONFIG.closedSubText;

  if (decimalTime >= openTime && decimalTime < closeTime) {
    isOpen = true;
    label = CAFE_HOURS_CONFIG.openText;
    sub = isWeekend ? 'Closes 10:00 PM · Coffee, Brunch & Bakery' : 'Closes 9:00 PM · Coffee, Brunch & Bakery';
  } else if (decimalTime < openTime) {
    isOpen = false;
    label = 'Closed Now';
    sub = isWeekend ? 'Opens 8:00 AM · Fresh Bakes & Coffee' : 'Opens 7:30 AM · Fresh Bakes & Coffee';
  } else {
    isOpen = false;
    label = 'Closed Tonight';
    sub = isWeekend ? 'Opens 8:00 AM · Fresh Bakes & Coffee' : 'Opens 7:30 AM · Fresh Bakes & Coffee';
  }

  // Update UI Elements
  statusLabel.textContent = label;
  if (statusSub) statusSub.textContent = sub;

  if (statusBadge) {
    if (isOpen) {
      statusBadge.classList.remove('is-closed');
      statusBadge.classList.add('is-open');
    } else {
      statusBadge.classList.remove('is-open');
      statusBadge.classList.add('is-closed');
    }
  }

  if (pulseDot) {
    if (isOpen) {
      pulseDot.classList.remove('is-closed');
      pulseDot.classList.add('is-open');
    } else {
      pulseDot.classList.remove('is-open');
      pulseDot.classList.add('is-closed');
    }
  }
}
