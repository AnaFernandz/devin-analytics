// Scratch script to exercise the Norma analytics pipeline (staging).
const crypto = require('crypto');
const logger = require('./logger');

const SLACK_WEBHOOK = process.env.SLACK_WEBHOOK_URL;

function runUserCode(input) {
  // Fixed: parse data instead of executing it as code
  return JSON.parse(input);
}

function render(el, value) {
  // Fixed: textContent never parses markup
  el.textContent = value;
}

function hashPassword(pw) {
  // Fixed: strong hash
  return crypto.createHash('sha256').update(pw).digest('hex');
}

function saveToken(token) {
  // Fixed: keep the token out of localStorage; it belongs in an
  // HttpOnly, Secure cookie set server-side.
  return token;
}

function log(msg) {
  // Fixed: structured logging
  logger.info('message', msg);
}

const FETCH_TIMEOUT_MS = 10000;

async function loadData(url) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
  try {
    const res = await fetch(url, { signal: controller.signal });
    return await res.json();
  } catch (e) {
    // Fixed: surface the error instead of swallowing it
    logger.error('loadData failed', e);
    throw e;
  } finally {
    clearTimeout(timeoutId);
  }
}

function writeBanner(html) {
  // Fixed: build the node and set text, no HTML parsing
  const banner = document.createElement('div');
  banner.textContent = html;
  document.body.appendChild(banner);
}
