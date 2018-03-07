const HDKey = require('hdkey');
const seed = require('crypto').randomBytes(64);
const hdKey = HDKey.fromMasterSeed(seed);
const complexKey = hdKey.derive("m/3000'/0'");
const chalk = require ('chalk');
const print = console.log;

print(chalk.dim('-----------------------'));
print(chalk.red.bold('PRIVATE EXTENDED KEY'), chalk.yellow.bold('->')) 
print(chalk.green.bold(complexKey.privateExtendedKey));
print(chalk.dim('Use this in renter config file'));
print(chalk.dim('-----------------------'));
print(chalk.red.bold('PUBLIC EXTENDED KEY'), chalk.yellow.bold('->')) 
print(chalk.green.bold(complexKey.publicExtendedKey));
print(chalk.dim('Use this as farmer trusted key'));
print(chalk.dim('-----------------------'));