// Minimal structured logger stub for the Norma smell exercise.
// Uses process.stdout directly so there is no console.* dependency.
function emit(level, event, meta) {
  const line = JSON.stringify({ level, event, meta });
  process.stdout.write(line + '\n');
}

module.exports = {
  debug: (event, meta) => emit('debug', event, meta),
  info: (event, meta) => emit('info', event, meta),
  warn: (event, meta) => emit('warn', event, meta),
  error: (event, meta) => emit('error', event, meta),
};
