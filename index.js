const HDKey = require('hdkey');
const seed = require('crypto').randomBytes(64);
const hdKey = HDKey.fromMasterSeed(seed);
const complexKey = hdKey.derive("m/3000'/0'");

console.log('prv', complexKey.privateExtendedKey);
console.log('pub', complexKey.publicExtendedKey);