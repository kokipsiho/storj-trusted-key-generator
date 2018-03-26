const HDKey = require('hdkey');
const seed = require('crypto').randomBytes(64);
const hdKey = HDKey.fromMasterSeed(seed);
const complexKey = hdKey.derive("m/3000'/0'");
const chalk = require ('chalk');
const fs = require('fs');
const print = console.log;


let outputFile = 'keys.output';
let tempOutput;

fs.unlink(outputFile, (err) => {
    tempOutput = '-----------------------';
    print(chalk.dim(tempOutput));
    fs.appendFileSync(outputFile, tempOutput + '\n');
    
    tempOutput = 'PRIVATE EXTENDED KEY';
    print(chalk.red.bold(tempOutput), chalk.yellow.bold('->')) ;
    fs.appendFileSync(outputFile, tempOutput + '\n');

    tempOutput = complexKey.privateExtendedKey;
    print(chalk.green.bold(tempOutput));
    fs.appendFileSync(outputFile, tempOutput + '\n');

    tempOutput = 'Use this in renter config file';
    print(chalk.dim(tempOutput));
    fs.appendFileSync(outputFile, tempOutput + '\n');

    tempOutput = '-----------------------';
    print(chalk.dim(tempOutput));
    fs.appendFileSync(outputFile, tempOutput + '\n');

    tempOutput = 'PUBLIC EXTENDED KEY';
    print(chalk.red.bold(tempOutput), chalk.yellow.bold('->')) ;
    fs.appendFileSync(outputFile, tempOutput + '\n'); 

    tempOutput = complexKey.publicExtendedKey;
    print(chalk.green.bold(tempOutput));
    fs.appendFileSync(outputFile, tempOutput + '\n');
    
    tempOutput = 'Use this as farmer trusted key';
    print(chalk.dim(tempOutput));
    fs.appendFileSync(outputFile, tempOutput + '\n');
    
    tempOutput = '-----------------------';
    print(chalk.dim(tempOutput));
    fs.appendFileSync(outputFile, tempOutput + '\n');
})
