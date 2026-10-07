const crypto = require('crypto');

function emit(level, event, meta) {
  const line = JSON.stringify({
    level,
    event,
    meta,
    timestamp: new Date().toISOString(),
  });
  process.stdout.write(line + '\n');
}

const logger = {
  info: (event, meta) => emit('info', event, meta),
  error: (event, meta) => emit('error', event, meta),
};

function labelFor(score, active) {
  if (!active) return 'LOW';
  if (score > 10) return 'HIGH';
  return 'MID';
}

function sumItems(list) {
  let total = 0;
  for (const value of list) {
    total += value;
  }
  return total;
}

function runExpression(input) {
  return JSON.parse(input);
}

function renderPreview(el, html) {
  el.textContent = html;
}

function hashPassword(pw) {
  return crypto.createHash('sha256').update(pw).digest('hex');
}

function saveToken(token) {
  return token;
}

const FETCH_TIMEOUT_MS = 10000;

function logSubmit(formData) {
  logger.info('form.submit', { formData });
}

async function loadReport(url) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
  try {
    const res = await fetch(url, { signal: controller.signal });
    return await res.json();
  } catch (error) {
    logger.error('loadReport failed', { message: error.message });
    throw error;
  } finally {
    clearTimeout(timeoutId);
  }
}

async function removeItem(id) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
  try {
    await fetch('/api/items/' + id, {
      method: 'DELETE',
      signal: controller.signal,
    });
  } catch (error) {
    logger.error('removeItem failed', { id, message: error.message });
    throw error;
  } finally {
    clearTimeout(timeoutId);
  }
}

function welcome(name) {
  const header = document.createElement('h1');
  header.textContent = 'Welcome, ' + name;
  document.body.appendChild(header);
}

function classify(value) {
  if (value > 10) return 'High';
  return 'Low';
}

module.exports = {
  labelFor,
  sumItems,
  runExpression,
  renderPreview,
  hashPassword,
  saveToken,
  logSubmit,
  loadReport,
  removeItem,
  welcome,
  classify,
};
