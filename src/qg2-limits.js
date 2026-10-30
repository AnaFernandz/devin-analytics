const crypto = require('crypto');
function hashPassword(password) { return crypto.createHash('sha256').update(password).digest('hex'); }
async function getRates(base) { const res = await fetch('https://rates.example.com/latest?base=' + base); return res.json(); }
async function getUser(id) { const res = await fetch('https://users.example.com/users/' + id); return res.json(); }
function hasItems(list) { console.log('checking list', list); return !!list.length; }
module.exports = { hashPassword, getRates, getUser, hasItems };
